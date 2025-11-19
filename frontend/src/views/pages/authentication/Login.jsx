import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Stack, Typography, Container, Card } from '@mui/material';

import AuthLogin from '../auth-forms/AuthLogin';
import Logo from 'ui-component/Logo';
import CityNight from "../../../assets/city_night.jpg";

export default function Login() {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        bgcolor: '#0c0f26',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* ---- Blurry background image ---- */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${CityNight})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(14px) brightness(0.45)',
          zIndex: 0
        }}
      />

      {/* ---- LEFT TEXT CONTENT ---- */}
      {!downMD && (
        <Box
          sx={{
            width: '45%',
            display: 'flex',
            alignItems: 'center',
            pl: '6vw',
            zIndex: 2,
            color: 'white',
            position: 'relative'
          }}
        >
          {/* Spotlight glow */}
          <Box
            sx={{
              position: 'absolute',
              width: 350,
              height: 350,
              borderRadius: '50%',
              background: 'rgba(56,189,248,0.25)',
              filter: 'blur(120px)',
              top: '40%',
              left: '20%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              opacity: 0.9
            }}
          />

          <Box sx={{ maxWidth: 520, position: 'relative', zIndex: 2 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: '3.2rem',
                mb: 2
              }}
            >
              <span style={{ background: 'rgba(255,255,255,0.18)', padding: '4px 10px', borderRadius: 8 }}>
                UrbanSphere
              </span>{' '}
              Platform.
            </Typography>

            <Typography
              variant="h4"
              sx={{
                mb: 3,
                color: '#38bdf8',
                fontWeight: 600,
                fontSize: '1.8rem'
              }}
            >
              Smart city management for the future.
            </Typography>

            <Typography variant="body1" sx={{ opacity: 0.9, fontSize: '1.15rem', lineHeight: 1.7 }}>
              AI-powered insights, real-time monitoring, and seamless operations —
              all in one powerful dashboard.
            </Typography>
          </Box>
        </Box>
      )}

      {/* ---- RIGHT LOGIN CARD ---- */}
      <Box
        sx={{
          width: { xs: '100%', md: '55%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
          zIndex: 2
        }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: 480,  // ⬅ bigger login box
            bgcolor: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(16px)',
            p: 5,
            borderRadius: '24px',
            boxShadow: '0 0 50px rgba(0,0,0,0.55)'
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Logo />

            <Box textAlign="center">
              <Typography variant="h4" sx={{ color: '#38bdf8', fontWeight: 700, fontSize: '1.9rem' }}>
                Welcome Back
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.75, mt: 0.5 }}>
                Login to continue managing your smart-city dashboard
              </Typography>
            </Box>

            <AuthLogin />

            <Typography
              component={Link}
              to="/register"
              sx={{
                textDecoration: 'none',
                color: '#818cf8',
                fontSize: '1rem',
                textAlign: 'center'
              }}
            >
              Don&apos;t have an account?
            </Typography>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
}
