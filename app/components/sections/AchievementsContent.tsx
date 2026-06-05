'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedIcon from '@mui/icons-material/Verified';
import FlagIcon from '@mui/icons-material/Flag';
import GroupsIcon from '@mui/icons-material/Groups';
import BuildIcon from '@mui/icons-material/Build';
import { achievements } from '../../lib/portfolioData';
import type { Achievement } from '../../lib/types';

const categoryMeta: Record<
  Achievement['category'],
  { color: string; Icon: React.ElementType; label: string }
> = {
  Certification: { color: '#1565C0', Icon: VerifiedIcon, label: 'Certifications' },
  Award: { color: '#E65100', Icon: EmojiEventsIcon, label: 'Awards' },
  Milestone: { color: '#2E7D32', Icon: FlagIcon, label: 'Milestones' },
  Contribution: { color: '#6A1B9A', Icon: BuildIcon, label: 'Contributions' },
  Leadership: { color: '#AD1457', Icon: GroupsIcon, label: 'Leadership' },
};

const allCategories = ['All', ...Object.keys(categoryMeta)];

export default function AchievementsContent() {
  const theme = useTheme();
  const [active, setActive] = useState<string>('All');

  const filtered = active === 'All' ? achievements : achievements.filter((a) => a.category === active);

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
              Achievements
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 400 }}>
              Certifications, awards, and milestones from my professional journey
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ py: 6, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          {/* Category stats */}
          <Grid container spacing={2} sx={{ mb: 5 }}>
            {(Object.entries(categoryMeta) as [Achievement['category'], (typeof categoryMeta)[Achievement['category']]][]).map(([cat, meta]) => {
              const count = achievements.filter((a) => a.category === cat).length;
              return (
                <Grid size={{ xs: 6, sm: 4, md: 2 }} key={cat}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Paper
                      elevation={0}
                      onClick={() => setActive((prev) => (prev === cat ? 'All' : cat))}
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        border: `1px solid ${active === cat ? meta.color : theme.palette.divider}`,
                        borderRadius: 3,
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        bgcolor: active === cat ? `${meta.color}12` : 'background.paper',
                        '&:hover': { borderColor: meta.color, bgcolor: `${meta.color}10` },
                      }}
                    >
                      <meta.Icon sx={{ fontSize: 32, color: meta.color, mb: 0.5 }} />
                      <Typography variant="h5" sx={{ fontWeight: 800, color: meta.color, lineHeight: 1 }}>
                        {count}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                        {meta.label}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>

          {/* Filter chips */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center', mb: 4 }}>
            {allCategories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setActive(cat)}
                color={active === cat ? 'primary' : 'default'}
                variant={active === cat ? 'filled' : 'outlined'}
                sx={{ fontWeight: 600, cursor: 'pointer' }}
              />
            ))}
          </Box>

          {/* Achievement cards */}
          <Grid container spacing={3}>
            {filtered.map((achievement, i) => {
              const meta = categoryMeta[achievement.category];
              const Icon = meta.Icon;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={achievement.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    style={{ height: '100%' }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: `1px solid ${theme.palette.divider}`,
                        borderTop: `4px solid ${meta.color}`,
                        borderRadius: 3,
                        transition: 'all 0.3s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: `0 8px 28px ${meta.color}22`,
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 2,
                            bgcolor: `${meta.color}18`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Icon sx={{ fontSize: 24, color: meta.color }} />
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <Chip
                            label={achievement.category}
                            size="small"
                            sx={{
                              bgcolor: `${meta.color}18`,
                              color: meta.color,
                              fontWeight: 700,
                              mb: 0.75,
                              fontSize: '0.7rem',
                            }}
                          />
                          <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                            {achievement.title}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', lineHeight: 1.75, flexGrow: 1, mb: 2 }}
                      >
                        {achievement.description}
                      </Typography>

                      <Typography variant="caption" sx={{ color: meta.color, fontWeight: 700, display: 'block' }}>
                        {achievement.year}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
