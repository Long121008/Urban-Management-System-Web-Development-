import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Stack, Typography, Card } from '@mui/material';

import AuthRegister from '../auth-forms/AuthRegister';
import Logo from 'ui-component/Logo';
import CityNight from "../../../assets/city_night.jpg";

export default function Register() {
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
      {/* ---- Background ---- */}
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

      {/* ---- LEFT SIDE TEXT ---- */}
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
          {/* spotlight glow */}
          <Box
            sx={{
              position: 'absolute',
              width: 350,
              height: 350,
              borderRadius: '50%',
              background: 'rgba(129,140,248,0.25)', // indigo glow
              filter: 'blur(120px)',
              top: '40%',
              left: '22%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1
            }}
          />

          <Box sx={{ maxWidth: 520, position: 'relative', zIndex: 2 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: '3.1rem',
                mb: 2
              }}
            >
              Join <span style={{ background: 'rgba(255,255,255,0.19)', padding: '4px 10px', borderRadius: 8 }}>
                UrbanSphere
              </span>
            </Typography>

            <Typography
              variant="h4"
              sx={{
                mb: 3,
                color: '#38bdf8',
                fontWeight: 600,
                fontSize: '1.7rem'
              }}
            >
              Create your account and start managing your city.
            </Typography>

            <Typography variant="body1" sx={{ opacity: 0.9, fontSize: '1.15rem', lineHeight: 1.7 }}>
              Experience next-generation smart city monitoring, automation, and AI insights —
              built for modern urban operations.
            </Typography>
          </Box>
        </Box>
      )}

      {/* ---- RIGHT REGISTER CARD ---- */}
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
            maxWidth: 480,
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
                Create Account
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.75, mt: 0.5 }}>
                Fill in your details to get started
              </Typography>
            </Box>

            <AuthRegister />

            <Typography
              component={Link}
              to="/login"
              sx={{
                textDecoration: 'none',
                color: '#818cf8',
                fontSize: '1rem',
                textAlign: 'center'
              }}
            >
              Already have an account?
            </Typography>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
}
