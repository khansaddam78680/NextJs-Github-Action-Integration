'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { workExperiences } from '../../lib/portfolioData';

const cardColors = ['#1565C0', '#2E7D32', '#6A1B9A'];

export default function ExperienceContent() {
  const theme = useTheme();

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
              Work Experience
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 400 }}>
              {workExperiences.length}+ years of professional experience across diverse industries
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ position: 'relative' }}>
            {/* Vertical timeline line */}
            <Box sx={{
              position: 'absolute',
              left: { xs: 24, md: 40 },
              top: 0,
              bottom: 0,
              width: 2,
              background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.light}44)`,
            }} />

            {workExperiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <Box sx={{ display: 'flex', mb: 5, pl: { xs: 7, md: 10 }, position: 'relative' }}>
                  {/* Timeline dot */}
                  <Avatar
                    sx={{
                      position: 'absolute',
                      left: { xs: 12, md: 28 },
                      top: 24,
                      width: 28,
                      height: 28,
                      bgcolor: cardColors[i % cardColors.length],
                      border: `3px solid ${theme.palette.background.default}`,
                      zIndex: 1,
                    }}
                  >
                    <WorkIcon sx={{ fontSize: 14 }} />
                  </Avatar>

                  <Paper
                    elevation={0}
                    sx={{
                      width: '100%',
                      border: `1px solid ${theme.palette.divider}`,
                      borderLeft: `4px solid ${cardColors[i % cardColors.length]}`,
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.3s',
                      '&:hover': {
                        boxShadow: `0 8px 32px ${cardColors[i % cardColors.length]}22`,
                      },
                    }}
                  >
                    {/* Header */}
                    <Box
                      sx={{
                        p: 3,
                        background: theme.palette.mode === 'dark'
                          ? `${cardColors[i % cardColors.length]}18`
                          : `${cardColors[i % cardColors.length]}08`,
                        borderBottom: `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1 }}>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: cardColors[i % cardColors.length] }}>
                            {exp.role}
                          </Typography>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {exp.company}
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 2, mt: 0.5 }}>
                            <Typography
                              variant="caption"
                              sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}
                            >
                              <LocationOnIcon sx={{ fontSize: 14 }} />
                              {exp.location}
                            </Typography>
                          </Box>
                        </Box>
                        <Chip
                          label={`${exp.startDate} – ${exp.endDate}`}
                          size="small"
                          sx={{
                            bgcolor: `${cardColors[i % cardColors.length]}18`,
                            color: cardColors[i % cardColors.length],
                            fontWeight: 700,
                            fontSize: '0.75rem',
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Body */}
                    <Box sx={{ p: 3 }}>
                      <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
                            Key Responsibilities
                          </Typography>
                          <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
                            {exp.responsibilities.map((r) => (
                              <Box
                                key={r}
                                component="li"
                                sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}
                              >
                                <CheckCircleIcon
                                  sx={{ fontSize: 16, color: cardColors[i % cardColors.length], flexShrink: 0, mt: 0.3 }}
                                />
                                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                  {r}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
                            Key Accomplishments
                          </Typography>
                          <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none', mb: 3 }}>
                            {exp.accomplishments.map((a) => (
                              <Box
                                key={a}
                                component="li"
                                sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}
                              >
                                <EmojiEventsIcon sx={{ fontSize: 16, color: '#E65100', flexShrink: 0, mt: 0.3 }} />
                                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                  {a}
                                </Typography>
                              </Box>
                            ))}
                          </Box>

                          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
                            Technologies
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                            {exp.technologies.map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{
                                  bgcolor: `${cardColors[i % cardColors.length]}14`,
                                  color: cardColors[i % cardColors.length],
                                  fontWeight: 600,
                                  fontSize: '0.7rem',
                                }}
                              />
                            ))}
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
