import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import 'assets/scss/style.scss';

export default function InProgressReportsCard({ isLoading }) {
  return (
    <div
      className="card"
      style={{
        height: '100%',
        color: '#e0e0e0',
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
      }}
    >
      {isLoading ? (
        <div style={{ height: 60, background: 'rgba(255,255,255,0.08)', borderRadius: 12 }} />
      ) : (
        <div className="dashboard-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0 }}>
          {/* Left side: text content */}
          <div>
            <h4 className="section-title" style={{ color: '#38bdf8' }}>Đang xử lý</h4>
            <div className="widget-value" style={{ color: '#e0e0e0' }}>78</div>
            <div className="section-title" style={{ fontSize: '1rem', color: '#bdbdbd' }}>
              Sự cố đang được đội kỹ thuật xử lý
            </div>
          </div>

          {/* Right side: icon + trend */}
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <BuildCircleIcon style={{ fontSize: 40, color: '#38bdf8' }} />
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
              <TrendingUpIcon style={{ fontSize: 18, color: '#4ade80', marginRight: 4 }} />
              <span style={{ color: '#4ade80', fontSize: '0.9rem', fontWeight: 600 }}>+5 hôm nay</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
