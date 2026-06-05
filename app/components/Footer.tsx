'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '@mui/material/styles';
import NextLink from 'next/link';
import { personalInfo } from '../lib/portfolioData';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.mode === 'dark' ? '#061222' : '#0D1B2A',
        color: 'rgba(255,255,255,0.85)',
        pt: 6,
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 800, color: 'primary.light', mb: 1.5 }}
            >
              John Doe
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, mb: 2 }}
            >
              Full Stack Developer passionate about building scalable applications and delivering exceptional software solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component="a"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'primary.light' } }}
                size="small"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component="a"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'primary.light' } }}
                size="small"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'primary.light' } }}
                size="small"
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2, color: 'primary.light' }}
            >
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {quickLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link
                    component={NextLink}
                    href={link.href}
                    underline="none"
                    sx={{
                      display: 'block',
                      py: 0.4,
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.875rem',
                      '&:hover': { color: 'primary.light' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2, color: 'transparent' }}
            >
              &nbsp;
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {quickLinks.slice(3).map((link) => (
                <li key={link.href}>
                  <Link
                    component={NextLink}
                    href={link.href}
                    underline="none"
                    sx={{
                      display: 'block',
                      py: 0.4,
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.875rem',
                      '&:hover': { color: 'primary.light' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2, color: 'primary.light' }}
            >
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                📧 {personalInfo.email}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                📍 {personalInfo.location}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
