// src/components/StatusChip.jsx
import React from 'react';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

export default function StatusChip({ status }) {
  const theme = useTheme();
  const s = (status || '').toLowerCase();

  let color = 'default';
  let sx = { color: theme.palette.text.primary, backgroundColor: 'transparent' };

  if (s.includes('pending')) {
    sx = { backgroundColor: 'rgba(245,158,11,0.12)', color: '#f59e0b' };
  } else if (s.includes('in progress') || s.includes('assigned')) {
    sx = { backgroundColor: 'rgba(59,130,246,0.12)', color: '#3b82f6' };
  } else if (s.includes('resolved') || s.includes('done') || s.includes('completed')) {
    sx = { backgroundColor: 'rgba(34,197,94,0.12)', color: '#22c55e' };
  } else if (s.includes('critical') || s.includes('urgent')) {
    sx = { backgroundColor: 'rgba(239,68,68,0.12)', color: '#ef4444' };
  } else {
    sx = { backgroundColor: 'rgba(147,197,253,0.06)', color: theme.palette.text.primary };
  }

  return <Chip label={status} size="small" sx={{ fontWeight: 600, ...sx }} />;
}
