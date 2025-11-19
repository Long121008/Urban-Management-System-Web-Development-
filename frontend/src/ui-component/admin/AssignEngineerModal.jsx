// src/components/AssignEngineerModal.jsx
import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  MenuItem,
  Select,
  TextField,
  Box,
  CircularProgress
} from '@mui/material';
import { api } from 'src/api/api';

export default function AssignEngineerModal({ open, onClose, reportId, onAssigned }) {
  const [engineers, setEngineers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [note, setNote] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    api.listEngineers()
      .then((data) => setEngineers(data || []))
      .catch(() => setEngineers([]))
      .finally(() => setLoading(false));
  }, [open]);

  useEffect(() => {
    if (!open) {
      setSelected('');
      setNote('');
    }
  }, [open]);

  const handleAssign = async () => {
    if (!selected) return alert('Please pick an engineer');
    setSaving(true);
    try {
      await api.assignEngineer(reportId, { engineerId: selected, note });
      onAssigned && onAssigned();
      onClose();
    } catch (err) {
      alert(err.message || 'Failed to assign');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Assign Engineer</DialogTitle>
      <DialogContent>
        {loading ? (
          <Box display="flex" justifyContent="center" p={3}><CircularProgress /></Box>
        ) : (
          <>
            <Select
              fullWidth
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              displayEmpty
              sx={{ mb: 2 }}
            >
              <MenuItem value="">Select engineer</MenuItem>
              {engineers.map((eng) => (
                <MenuItem key={eng._id || eng.id} value={eng._id || eng.id}>
                  {eng.name}
                </MenuItem>
              ))}
            </Select>

            <TextField
              label="Optional note"
              multiline
              rows={4}
              fullWidth
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={saving}>Cancel</Button>
        <Button onClick={handleAssign} variant="contained" disabled={saving || loading}>
          {saving ? 'Assigning...' : 'Assign'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
