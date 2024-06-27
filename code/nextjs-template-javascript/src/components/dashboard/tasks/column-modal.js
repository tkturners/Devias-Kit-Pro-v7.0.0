import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';

export function ColumnModal({ column, onClose, onColumnUpdate, open }) {
  const { id, name: initialName } = column;
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    setName(initialName);
  }, [initialName]);

  const handleSave = React.useCallback(() => {
    if (!name) {
      return;
    }

    if (name === initialName) {
      return;
    }

    onColumnUpdate?.(id, { name });
    onClose?.();
  }, [name, initialName, id, onClose, onColumnUpdate]);

  return (
    <Dialog fullWidth maxWidth="sm" onClose={onClose} open={open}>
      <DialogContent>
        <Stack spacing={3}>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <OutlinedInput
              name="name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
            />
          </FormControl>
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
            <Button color="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} variant="contained">
              Save
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
