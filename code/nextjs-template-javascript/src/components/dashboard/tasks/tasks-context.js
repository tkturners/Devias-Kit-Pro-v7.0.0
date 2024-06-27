'use client';

import * as React from 'react';

function noop() {
  return undefined;
}

export const TasksContext = React.createContext({
  columns: new Map(),
  tasks: new Map(),
  setCurrentColumnId: noop,
  setCurrentTaskId: noop,
  createColumn: noop,
  updateColumn: noop,
  clearColumn: noop,
  deleteColumn: noop,
  dragTask: noop,
  createTask: noop,
  deleteTask: noop,
  updateTask: noop,
  addComment: noop,
});

export function TasksProvider({ children, columns: initialColumns = [], tasks: initialTasks = [] }) {
  const [columns, setColumns] = React.useState(new Map());
  const [tasks, setTasks] = React.useState(new Map());
  const [currentColumnId, setCurrentColumnId] = React.useState();
  const [currentTaskId, setCurrentTaskId] = React.useState();

  React.useEffect(() => {
    setColumns(new Map(initialColumns.map((column) => [column.id, column])));
  }, [initialColumns]);

  React.useEffect(() => {
    setTasks(new Map(initialTasks.map((task) => [task.id, task])));
  }, [initialTasks]);

  const handleCreateColumn = React.useCallback(() => {
    const column = { id: `COL-${Date.now()}`, name: 'Untitled', taskIds: [] };

    const updatedColumns = new Map(columns);

    // Add column
    updatedColumns.set(column.id, column);

    // Dispatch update
    setColumns(updatedColumns);
  }, [columns]);

  const handleUpdateColumn = React.useCallback(
    (columnId, { name }) => {
      const column = columns.get(columnId);

      // Column might no longer exist
      if (!column) {
        return;
      }

      const updatedColumns = new Map(columns);

      const updatedColumn = { ...column };

      if (typeof name !== 'undefined') {
        updatedColumn.name = name;
      }

      // Update column
      updatedColumns.set(updatedColumn.id, updatedColumn);

      // Dispatch update
      setColumns(updatedColumns);
    },
    [columns]
  );

  const handleClearColumn = React.useCallback(
    (columnId) => {
      const column = columns.get(columnId);

      // Column might no longer exist
      if (!column) {
        return;
      }

      const updatedTasks = new Map(tasks);

      // Delete tasks
      column.taskIds.forEach((taskId) => {
        updatedTasks.delete(taskId);
      });

      const updatedColumns = new Map(columns);

      const updatedColumn = { ...column, taskIds: [] };

      // Update column
      updatedColumns.set(updatedColumn.id, updatedColumn);

      // Dispatch update
      setColumns(updatedColumns);
      setTasks(updatedTasks);
    },
    [columns, tasks]
  );

  const handleDeleteColumn = React.useCallback(
    (columnId) => {
      const column = columns.get(columnId);

      // Column might no longer exist
      if (!column) {
        return;
      }

      const updatedTasks = new Map(tasks);

      // Delete tasks
      column.taskIds.forEach((taskId) => {
        updatedTasks.delete(taskId);
      });

      const updatedColumns = new Map(columns);

      // Delete column
      updatedColumns.delete(column.id);

      // Dispatch update
      setColumns(updatedColumns);
      setTasks(updatedTasks);
    },
    [columns, tasks]
  );

  const handleDragTask = React.useCallback(
    (active, over) => {
      const activeTask = tasks.get(active.id);

      // Active task and might no longer exist
      if (!activeTask) {
        return;
      }

      const activeColumn = columns.get(activeTask.columnId);

      // Active column might no longer exist
      if (!activeColumn) {
        return;
      }

      // Dropped over a column
      if (over.type === 'column') {
        // Dropped on the same column, reorder at the end
        if (activeTask.columnId === over.id) {
          const updatedActiveColumn = {
            ...activeColumn,
            taskIds: [...activeColumn.taskIds.filter((taskId) => taskId !== activeTask.id), activeTask.id],
          };

          const updatedColumns = new Map(columns);

          updatedColumns.set(updatedActiveColumn.id, updatedActiveColumn);

          // Dispatch update
          setColumns(updatedColumns);
        }
        // Dropped in a different column, move at the end
        else {
          const overColumn = columns.get(over.id);

          // Over column might no longer exist
          if (!overColumn) {
            return;
          }

          // Change task column
          const updatedActiveTask = { ...activeTask, columnId: overColumn.id };

          const updatedTasks = new Map(tasks);

          updatedTasks.set(updatedActiveTask.id, updatedActiveTask);

          // Remove task from active column
          const updatedActiveColumn = {
            ...activeColumn,
            taskIds: activeColumn.taskIds.filter((taskId) => taskId !== activeTask.id),
          };

          // Add task to over column
          const updatedOverColumn = { ...overColumn, taskIds: [...overColumn.taskIds, activeTask.id] };

          const updatedColumns = new Map(columns);

          updatedColumns.set(updatedActiveColumn.id, updatedActiveColumn);
          updatedColumns.set(updatedOverColumn.id, updatedOverColumn);

          // Dispatch update
          setTasks(updatedTasks);
          setColumns(updatedColumns);
        }
      }
      // Dropped over a task
      else {
        // Dropped over self
        if (activeTask.id === over.id) {
          return;
        }

        const overTask = tasks.get(over.id);

        // Over task might no longer exist
        if (!overTask) {
          return;
        }

        // Dropped on the same column, reorder
        if (activeTask.columnId === overTask.columnId) {
          const oldTaskIndex = activeColumn.taskIds.findIndex((taskId) => taskId === activeTask.id);
          const newTaskIndex = activeColumn.taskIds.findIndex((taskId) => taskId === overTask.id);

          const updatedActiveColumn = {
            ...activeColumn,
            taskIds: arrayMove(activeColumn.taskIds, oldTaskIndex, newTaskIndex),
          };

          const updatedColumns = new Map(columns);

          updatedColumns.set(updatedActiveColumn.id, updatedActiveColumn);

          // Dispatch update
          setColumns(updatedColumns);
        }
        // Dopped on a different column, move at position
        else {
          const overColumn = columns.get(overTask.columnId);

          // Column might no longer exist
          if (!overColumn) {
            return;
          }

          // Change task column
          const updatedActiveTask = { ...activeTask, columnId: overColumn.id };

          const updatedTasks = new Map(tasks);

          updatedTasks.set(updatedActiveTask.id, updatedActiveTask);

          // Find new task position
          const overTaskIndex = overColumn.taskIds.findIndex((taskId) => taskId === overTask.id);

          // Remove task from active column
          const updatedActiveColumn = {
            ...activeColumn,
            taskIds: activeColumn.taskIds.filter((taskId) => taskId !== activeTask.id),
          };

          // Add task to over column at position
          const updatedOverColumn = {
            ...overColumn,
            taskIds: arrayInsert(overColumn.taskIds, overTaskIndex, activeTask.id),
          };

          const updatedColumns = new Map(columns);

          updatedColumns.set(updatedActiveColumn.id, updatedActiveColumn);
          updatedColumns.set(updatedOverColumn.id, updatedOverColumn);

          // Dispatch update
          setTasks(updatedTasks);
          setColumns(updatedColumns);
        }
      }
    },
    [columns, tasks]
  );

  const handleCreateTask = React.useCallback(
    (columnId) => {
      const column = columns.get(columnId);

      // Column might no longer exist
      if (!column) {
        return;
      }

      // Create the new task
      const task = {
        id: `TSK-${Date.now()}`,
        author: { id: 'USR-000', name: 'Sofia Rivers', username: 'sofia.rivers', avatar: '/assets/avatar.png' },
        title: 'Untitled',
        columnId,
        createdAt: new Date(),
      };

      const updatedTasks = new Map(tasks);

      // Add it to the tasks
      updatedTasks.set(task.id, task);

      // Add the task to the column
      const updatedColumn = { ...column, taskIds: [task.id, ...column.taskIds] };

      const updatedColumns = new Map(columns);

      updatedColumns.set(updatedColumn.id, updatedColumn);

      // Dispatch update
      setTasks(updatedTasks);
      setColumns(updatedColumns);
    },
    [columns, tasks]
  );

  const handleDeleteTask = React.useCallback(
    (taskId) => {
      const task = tasks.get(taskId);

      // Task might no longer exist
      if (!task) {
        return;
      }

      const updatedTasks = new Map(tasks);

      // Delete the task
      updatedTasks.delete(task.id);

      const updatedColumns = new Map(columns);

      // Delete the task ID from column
      const column = updatedColumns.get(task.columnId);

      // Column might no longer exist
      if (column) {
        const updatedColumn = { ...column, taskId: column.taskIds.filter((id) => id !== task.id) };

        updatedColumns.set(updatedColumn.id, updatedColumn);
      }

      // Dispatch update
      setColumns(updatedColumns);
      setTasks(updatedTasks);
    },
    [columns, tasks]
  );

  const handleUpdateTask = React.useCallback(
    (taskId, { title, description }) => {
      const task = tasks.get(taskId);

      // Task might no longer exist
      if (!task) {
        return;
      }

      const updatedTasks = new Map(tasks);

      const updatedTask = { ...task };

      // Title changed
      if (typeof title !== 'undefined') {
        updatedTask.title = title;
      }

      // Description changed
      if (typeof description !== 'undefined') {
        updatedTask.description = description;
      }

      updatedTasks.set(updatedTask.id, updatedTask);

      // Dispatch update
      setTasks(updatedTasks);
    },
    [tasks]
  );

  const handleAddComment = React.useCallback(
    (taskId, content) => {
      const task = tasks.get(taskId);

      // Task might no longer exist
      if (!task) {
        return;
      }

      // Copy existing tasks
      const updatedTasks = new Map(tasks);

      // Create the comment and add it to the task
      const comment = {
        id: `MSG-${Date.now()}`,
        author: { id: 'USR-000', name: 'Sofia Rivers', username: 'sofia.rivers', avatar: '/assets/avatar.png' },
        content,
        createdAt: new Date(),
      };

      updatedTasks.set(task.id, { ...task, comments: [...(task.comments ?? []), comment] });

      // Dispatch update
      setTasks(updatedTasks);
    },
    [tasks]
  );

  return (
    <TasksContext.Provider
      value={{
        columns,
        tasks,
        currentColumnId,
        currentTaskId,
        setCurrentColumnId,
        setCurrentTaskId,
        createColumn: handleCreateColumn,
        updateColumn: handleUpdateColumn,
        clearColumn: handleClearColumn,
        deleteColumn: handleDeleteColumn,
        dragTask: handleDragTask,
        createTask: handleCreateTask,
        deleteTask: handleDeleteTask,
        updateTask: handleUpdateTask,
        addComment: handleAddComment,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export const TasksConsumer = TasksContext.Consumer;

function arrayMove(arr, from, to) {
  const copy = [...arr];
  const [item] = copy.splice(from, 1);
  copy.splice(to, 0, item);
  return copy;
}

function arrayInsert(arr, index, item) {
  return [...arr.slice(0, index), item, ...arr.slice(index)];
}
