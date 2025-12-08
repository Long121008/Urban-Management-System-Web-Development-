import React from 'react';
import { Card, CardContent, Typography, Box, Skeleton } from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function TotalReportsCard({ isLoading }) {
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
            {/* Left side: text info */}
            <Box>
              <Typography variant="h6" sx={{ color: '#90caf9' }}>
                Tổng số báo cáo
              </Typography>
              <Typography variant="h3" fontWeight="bold" color="#64b5f6">
                342
              </Typography>
              <Typography variant="body2" color="#bdbdbd">
                Báo cáo được gửi từ người dân
              </Typography>
            </Box>

            {/* Right side: icon + trend */}
            <Box display="flex" alignItems="center" flexDirection="column">
              <AssessmentIcon sx={{ fontSize: 40, color: '#90caf9' }} />
              <Box display="flex" alignItems="center" mt={1}>
                <TrendingUpIcon sx={{ fontSize: 18, color: '#90caf9', mr: 0.5 }} />
                <Typography variant="caption" color="#90caf9">
                  +12 hôm nay
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
