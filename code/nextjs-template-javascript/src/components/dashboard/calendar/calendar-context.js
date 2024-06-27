'use client';

import * as React from 'react';

function noop() {
  return undefined;
}

export const CalendarContext = React.createContext({
  events: new Map(),
  setCurrentEventId: noop,
  createEvent: noop,
  deleteEvent: noop,
  updateEvent: noop,
});

export function CalendarProvider({ children, events: initialEvents = [] }) {
  const [events, setEvents] = React.useState(new Map());
  const [currentEventId, setCurrentEventId] = React.useState();

  React.useEffect(() => {
    setEvents(new Map(initialEvents.map((event) => [event.id, event])));
  }, [initialEvents]);

  const handleCreateEvent = React.useCallback(
    (params) => {
      const updatedEvents = new Map(events);

      // Create event
      const event = { id: `EV-${Date.now()}`, ...params };

      // Add event
      updatedEvents.set(event.id, event);

      // Dispatch update
      setEvents(updatedEvents);
    },
    [events]
  );

  const handleUpdateEvent = React.useCallback(
    (eventId, params) => {
      const event = events.get(eventId);

      // Event might no longer exist
      if (!event) {
        return;
      }

      const updatedEvents = new Map(events);

      // Update event
      updatedEvents.set(eventId, { ...event, ...params });

      // Dispatch update
      setEvents(updatedEvents);
    },
    [events]
  );

  const handleDeleteEvent = React.useCallback(
    (eventId) => {
      const event = events.get(eventId);

      // Event might no longer exist
      if (!event) {
        return;
      }

      const updatedEvents = new Map(events);

      // Delete event
      updatedEvents.delete(eventId);

      // Dispatch update
      setEvents(updatedEvents);
    },
    [events]
  );

  return (
    <CalendarContext.Provider
      value={{
        events,
        currentEventId,
        setCurrentEventId,
        createEvent: handleCreateEvent,
        deleteEvent: handleDeleteEvent,
        updateEvent: handleUpdateEvent,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
