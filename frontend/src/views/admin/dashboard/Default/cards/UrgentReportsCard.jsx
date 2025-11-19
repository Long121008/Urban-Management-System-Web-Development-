import React from 'react';
import { Card, CardContent, Typography, Box, Skeleton } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function UrgentReportsCard({ isLoading }) {
  return (
    <Card
      sx={{
        height: '100%',
        background: 'linear-gradient(135deg, #23272f 0%, #2c313a 100%)',
        boxShadow: 2,
        borderRadius: 2,
        color: '#e0e0e0'
      }}
    >
      <CardContent>
        {isLoading ? (
          <Skeleton variant="rectangular" height={60} />
        ) : (
          <Box display="flex" alignItems="center" justifyContent="space-between">
            {/* Left side: content */}
            <Box>
              <Typography variant="h6" sx={{ color: '#ef9a9a' }}>
                Báo cáo khẩn cấp
              </Typography>
              <Typography variant="h3" fontWeight="bold" color="#e57373">
                12
              </Typography>
              <Typography variant="body2" color="#bdbdbd">
                Sự cố có mức độ ưu tiên cao
              </Typography>
            </Box>

            {/* Right side: icon + trend */}
            <Box display="flex" alignItems="center" flexDirection="column">
              <WarningAmberIcon sx={{ fontSize: 40, color: '#ef9a9a' }} />
              <Box display="flex" alignItems="center" mt={1}>
                <TrendingUpIcon sx={{ fontSize: 18, color: '#ef9a9a', mr: 0.5 }} />
                <Typography variant="caption" color="#ef9a9a">
                  +2 hôm nay
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
