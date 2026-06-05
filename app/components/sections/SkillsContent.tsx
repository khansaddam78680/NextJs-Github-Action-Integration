'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { skillCategories } from '../../lib/portfolioData';

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ mb: 2.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700, color }}>
            {level}%
          </Typography>
        </Box>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        >
          <LinearProgress
            variant="determinate"
            value={level}
            sx={{
              height: 8,
              borderRadius: 4,
              bgcolor: `${color}20`,
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                background: `linear-gradient(90deg, ${color}aa, ${color})`,
              },
            }}
          />
        </motion.div>
      </Box>
    </motion.div>
  );
}

export default function SkillsContent() {
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
              Technical Skills
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 400 }}>
              A comprehensive view of my expertise across the technology stack
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Skill Cards */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {skillCategories.map((category, i) => (
              <Grid size={{ xs: 12, md: 6 }} key={category.category}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      border: `1px solid ${theme.palette.divider}`,
                      borderTop: `4px solid ${category.color}`,
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: `0 8px 32px ${category.color}22`,
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: category.color }}>
                          {category.category}
                        </Typography>
                        <Chip
                          label={`${category.skills.length} skills`}
                          size="small"
                          sx={{
                            bgcolor: `${category.color}18`,
                            color: category.color,
                            fontWeight: 600,
                          }}
                        />
                      </Box>

                      {category.skills.map((skill) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          color={category.color}
                        />
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* All skills chips */}
      <Box sx={{ py: 6, bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : '#EFF4FB' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, textAlign: 'center', mb: 4 }}>
              All Technologies
            </Typography>
          </motion.div>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill, j) => (
                <motion.div
                  key={`${cat.category}-${skill.name}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: j * 0.03, duration: 0.3 }}
                >
                  <Chip
                    label={skill.name}
                    sx={{
                      bgcolor: `${cat.color}14`,
                      color: cat.color,
                      border: `1px solid ${cat.color}35`,
                      fontWeight: 600,
                      '&:hover': { bgcolor: `${cat.color}26` },
                    }}
                  />
                </motion.div>
              ))
            )}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
