import { useState } from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  InputBase,
  Button,
  Chip,
  TableContainer,
  TableHead,
  TableCell,
  Table,
  TableBody,
  TableRow,
  Pagination
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function EngineersPage() {
  const [search, setSearch] = useState("");

  const engineers = [
    { name: "Hoa", email: "hoa@x.com", status: "Active", tasks: 3 },
    { name: "Binh", email: "binh@x.com", status: "Busy", tasks: 1 },
    { name: "Minh", email: "minh@x.com", status: "Active", tasks: 0 }
  ];

  const getStatusChip = (status) => {
    const colors = {
      Active: { bg: "#D3F9D8", text: "#2B8A3E" },
      Busy: { bg: "#FFE7D9", text: "#B93815" },
      Offline: { bg: "#E0E0E0", text: "#555" }
    };

    return (
      <Chip
        label={status}
        sx={{
          backgroundColor: colors[status].bg,
          color: colors[status].text,
          fontWeight: 600,
          borderRadius: "8px"
        }}
      />
    );
  };

  return (
    <Box sx={{ p: 3, background: 'linear-gradient(135deg, #23272f 0%, #2c313a 100%)', minHeight: '100vh', color: '#e0e0e0' }}>
      {/* Title */}
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#e0e0e0' }}>
        Engineers
      </Typography>
      <Typography variant="subtitle2" sx={{ color: '#bdbdbd', mb: 3 }}>
        Manage engineers and workloads
      </Typography>

      {/* Search + Add Button */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={8} md={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: '#23272f',
              borderRadius: 2,
              px: 2,
              py: 1,
              border: '1px solid #444'
            }}
          >
            <SearchIcon sx={{ mr: 1, color: '#bdbdbd' }} />
            <InputBase
              placeholder="Search engineer..."
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ color: '#e0e0e0' }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={2} sx={{ ml: "auto" }}>
          <Button variant="contained" fullWidth sx={{ height: "42px" }}>
            Add Engineer
          </Button>
        </Grid>
      </Grid>

      {/* Table */}
      <Card sx={{ p: 0, borderRadius: 3, background: 'linear-gradient(135deg, #23272f 0%, #2c313a 100%)', color: '#e0e0e0', boxShadow: '0 4px 20px rgba(0,0,0,0.12)', border: '1px solid #444' }}>
  <TableContainer sx={{ maxHeight: 500 }}>
    <Table stickyHeader>
      
      {/* Header */}
      <TableHead>
        <TableRow sx={{ backgroundColor: '#1f2229' }}>
          <TableCell sx={{ color: '#bdbdbd', fontWeight: 700 }}>Name</TableCell>
          <TableCell sx={{ color: '#bdbdbd', fontWeight: 700 }}>Email</TableCell>
          <TableCell sx={{ color: '#bdbdbd', fontWeight: 700 }}>Status</TableCell>
          <TableCell sx={{ color: '#bdbdbd', fontWeight: 700 }}>Active Tasks</TableCell>
          <TableCell sx={{ color: '#bdbdbd', fontWeight: 700 }}>Action</TableCell>
        </TableRow>
      </TableHead>

      {/* Rows */}
      <TableBody>
        {engineers.map((eng, idx) => (
          <TableRow
            key={idx}
            hover
            sx={{ '&:hover': { backgroundColor: '#282c34' } }}
          >
            <TableCell>{eng.name}</TableCell>
            <TableCell>{eng.email}</TableCell>
            <TableCell>{getStatusChip(eng.status)}</TableCell>
            <TableCell>{eng.tasks}</TableCell>
            <TableCell>
              <Button size="small" variant="outlined">View</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
  </TableContainer>

  {/* Pagination */}
  <Box sx={{ mt: 3, display: "flex", justifyContent: "center", py: 2 }}>
    <Pagination count={5} variant="outlined" shape="rounded" />
  </Box>
</Card>
    </Box>
  );
}
