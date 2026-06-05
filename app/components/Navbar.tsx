'use client';

import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from './ThemeRegistry';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { mode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          background:
            mode === 'dark'
              ? 'rgba(10, 25, 41, 0.92)'
              : 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${theme.palette.divider}`,
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
            <Typography
              variant="h5"
              component={Link}
              href="/"
              sx={{
                fontWeight: 800,
                color: 'primary.main',
                textDecoration: 'none',
                letterSpacing: '-0.5px',
                flexGrow: { xs: 1, md: 0 },
                mr: 4,
              }}
            >
              JD
            </Typography>

            <Box
              component="nav"
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 0.5 }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: pathname === link.href ? 'primary.main' : 'text.secondary',
                    fontWeight: pathname === link.href ? 700 : 500,
                    px: 1.5,
                    py: 1,
                    borderRadius: 2,
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            <IconButton
              onClick={toggleColorMode}
              aria-label="toggle color mode"
              sx={{ color: 'text.primary', ml: 1 }}
            >
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            <IconButton
              sx={{ display: { md: 'none' }, color: 'text.primary', ml: 0.5 }}
              onClick={() => setDrawerOpen(true)}
              aria-label="open menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{ paper: { sx: { width: 260 } } }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
            JD
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} aria-label="close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                selected={pathname === link.href}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  my: 0.25,
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    '&:hover': { bgcolor: 'primary.dark' },
                  },
                }}
              >
                <ListItemText
                  primary={link.label}
                  slotProps={{
                    primary: {
                      style: { fontWeight: pathname === link.href ? 700 : 500 },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Toolbar height spacer */}
      <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }} />
    </>
  );
}
