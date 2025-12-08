import React from 'react';
import { Card, CardContent, Typography, Box, Skeleton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function ResolvedReportsCard({ isLoading }) {
  return (
    <Card
      sx={{
        height: '100%',
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
              <Typography variant="h6" sx={{ color: '#81c784' }}>
                Đã hoàn tất
              </Typography>
              <Typography variant="h3" fontWeight="bold" color="#a5d6a7">
                224
              </Typography>
              <Typography variant="body2" color="#bdbdbd">
                Sự cố đã được xử lý và xác nhận hoàn tất
              </Typography>
            </Box>

            {/* Right side: icon and trend */}
            <Box display="flex" alignItems="center" flexDirection="column">
              <CheckCircleIcon sx={{ fontSize: 40, color: '#81c784' }} />
              <Box display="flex" alignItems="center" mt={1}>
                <TrendingUpIcon sx={{ fontSize: 18, color: '#81c784', mr: 0.5 }} />
                <Typography variant="caption" color="#81c784">
                  +10 hôm nay
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
