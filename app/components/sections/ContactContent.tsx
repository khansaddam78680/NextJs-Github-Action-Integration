'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { personalInfo } from '../../lib/portfolioData';
import type { ContactFormData } from '../../lib/types';

const initial: ContactFormData = { name: '', email: '', subject: '', message: '' };
const initialErrors = { name: '', email: '', subject: '', message: '' };

function validate(form: ContactFormData) {
  const errors = { ...initialErrors };
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.subject.trim()) errors.subject = 'Subject is required.';
  if (!form.message.trim()) {
    errors.message = 'Message is required.';
  } else if (form.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.';
  }
  return errors;
}

export default function ContactContent() {
  const theme = useTheme();
  const [form, setForm] = useState<ContactFormData>(initial);
  const [errors, setErrors] = useState(initialErrors);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.values(errs).some(Boolean)) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setStatusMsg(data.message);
        setForm(initial);
      } else {
        setStatus('error');
        setStatusMsg(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setStatusMsg('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: <GitHubIcon />, label: 'GitHub', href: personalInfo.github },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: personalInfo.linkedin },
    { icon: <EmailIcon />, label: 'Email', href: `mailto:${personalInfo.email}` },
  ];

  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #0A1929 0%, #132F4C 100%)'
            : 'linear-gradient(135deg, #1565C0 0%, #0288D1 100%)',
          py: { xs: 8, md: 10 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#fff', mb: 2 }}>
              Get In Touch
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 400 }}>
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} sx={{ alignItems: 'flex-start' }}>
            {/* Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                    Send a Message
                  </Typography>

                  {status === 'success' && (
                    <Alert severity="success" sx={{ mb: 3 }} onClose={() => setStatus('idle')}>
                      {statusMsg}
                    </Alert>
                  )}
                  {status === 'error' && (
                    <Alert severity="error" sx={{ mb: 3 }} onClose={() => setStatus('idle')}>
                      {statusMsg}
                    </Alert>
                  )}

                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2.5}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          label="Your Name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          error={!!errors.name}
                          helperText={errors.name}
                          disabled={loading}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          required
                          label="Email Address"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          error={!!errors.email}
                          helperText={errors.email}
                          disabled={loading}
                        />
                      </Grid>
                      <Grid size={12}>
                        <TextField
                          fullWidth
                          required
                          label="Subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          error={!!errors.subject}
                          helperText={errors.subject}
                          disabled={loading}
                        />
                      </Grid>
                      <Grid size={12}>
                        <TextField
                          fullWidth
                          required
                          multiline
                          rows={5}
                          label="Message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          error={!!errors.message}
                          helperText={errors.message || `${form.message.length} characters (min 20)`}
                          disabled={loading}
                        />
                      </Grid>
                      <Grid size={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          disabled={loading}
                          endIcon={loading ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
                          sx={{ py: 1.5, fontWeight: 700 }}
                        >
                          {loading ? 'Sending…' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Contact info */}
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 3,
                    mb: 3,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                    Contact Information
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box sx={{
                        width: 44, height: 44, borderRadius: 2,
                        bgcolor: 'primary.main', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        <EmailIcon sx={{ color: '#fff', fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Email</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{personalInfo.email}</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box sx={{
                        width: 44, height: 44, borderRadius: 2,
                        bgcolor: 'primary.main', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        <LocationOnIcon sx={{ color: '#fff', fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Location</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{personalInfo.location}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>

                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    Connect With Me
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
                    Find me on these platforms or drop me an email. I typically respond within 24 hours.
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {socialLinks.map((link) => (
                      <Tooltip title={link.label} key={link.label}>
                        <IconButton
                          component="a"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            bgcolor: 'primary.main',
                            color: '#fff',
                            '&:hover': { bgcolor: 'primary.dark', transform: 'translateY(-3px)' },
                            transition: 'all 0.2s',
                          }}
                        >
                          {link.icon}
                        </IconButton>
                      </Tooltip>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
