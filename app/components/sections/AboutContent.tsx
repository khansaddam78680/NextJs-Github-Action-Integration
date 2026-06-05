'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { personalInfo, careerTimeline } from '../../lib/portfolioData';

const typeColors: Record<string, string> = {
  education: '#1565C0',
  work: '#2E7D32',
  achievement: '#E65100',
};

const strengths = [
  { title: 'Full Stack Expertise', desc: 'Proficient across the entire stack from database design to responsive UI implementation.' },
  { title: 'Cloud & DevOps', desc: 'Experienced in AWS, Azure, CI/CD pipelines, and infrastructure automation.' },
  { title: 'Clean Architecture', desc: 'Strong advocate for clean code, SOLID principles, and maintainable software design.' },
  { title: 'Team Leadership', desc: 'Experienced in leading development teams, mentoring junior developers, and code reviews.' },
  { title: 'Agile Mindset', desc: 'Skilled in Agile/Scrum practices, sprint planning, and iterative delivery.' },
  { title: 'Problem Solving', desc: 'Proven ability to diagnose complex technical issues and implement effective solutions.' },
];

const values = [
  'Writing clean, readable, and maintainable code',
  'Continuous learning and staying current with technology',
  'Delivering high-quality work on time and within scope',
  'Collaboration and open communication within teams',
  'Test-driven development and quality assurance',
  'Security-first approach to software development',
];

export default function AboutContent() {
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
              About Me
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 400 }}>
              Passionate developer crafting scalable, impactful solutions
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Profile */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                    fontSize: '4rem',
                    fontWeight: 800,
                    bgcolor: 'primary.main',
                    color: '#fff',
                    mx: 'auto',
                    mb: 3,
                    boxShadow: `0 8px 32px ${theme.palette.primary.main}44`,
                  }}
                >
                  JD
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  {personalInfo.name}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                  {personalInfo.title}
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  href="/resume-placeholder.pdf"
                  download
                  sx={{ borderRadius: 2 }}
                >
                  Download Resume
                </Button>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Professional Summary
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 3 }}>
                  {personalInfo.summary} With over 5 years of professional experience, I have successfully delivered enterprise-scale applications across industries including finance, retail, logistics, and technology. My approach combines technical depth with pragmatic problem-solving, always keeping the end user experience and business value at the forefront.
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 3 }}>
                  I thrive in collaborative environments and enjoy bridging the gap between complex technical challenges and business requirements. When I&apos;m not coding, I contribute to open source projects and stay current with the latest industry developments.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip label="📍 New York, NY" size="small" variant="outlined" />
                  <Chip label="📧 Available for work" size="small" color="success" variant="outlined" />
                  <Chip label="🌐 Remote friendly" size="small" color="primary" variant="outlined" />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Career Timeline */}
      <Box sx={{ py: 8, bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : '#EFF4FB' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, textAlign: 'center', mb: 1 }}>
              Career Journey
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 6 }}>
              Key milestones that shaped my professional path
            </Typography>
          </motion.div>

          <Box sx={{ position: 'relative' }}>
            <Box sx={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: 2, bgcolor: 'primary.main', opacity: 0.25,
              transform: 'translateX(-50%)', display: { xs: 'none', md: 'block' },
            }} />

            {careerTimeline.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: { xs: 'flex-start', md: i % 2 === 0 ? 'flex-end' : 'flex-start' },
                    mb: 3,
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2.5,
                      maxWidth: { xs: '100%', md: '44%' },
                      width: '100%',
                      border: `1px solid ${typeColors[event.type]}44`,
                      borderLeft: `4px solid ${typeColors[event.type]}`,
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {event.title}
                      </Typography>
                      <Chip
                        label={event.year}
                        size="small"
                        sx={{
                          bgcolor: `${typeColors[event.type]}18`,
                          color: typeColors[event.type],
                          fontWeight: 700,
                          ml: 1,
                          flexShrink: 0,
                        }}
                      />
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {event.description}
                    </Typography>
                  </Paper>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Core Strengths */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, textAlign: 'center', mb: 1 }}>
              Core Strengths
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 5 }}>
              What I bring to every project and team
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {strengths.map((s, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={s.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 3,
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: `0 4px 20px ${theme.palette.primary.main}18`,
                      },
                      transition: 'all 0.3s',
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      {s.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {s.desc}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Professional Values */}
      <Box sx={{ py: 8, bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : '#EFF4FB' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, textAlign: 'center', mb: 1 }}>
              Professional Values
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 5 }}>
              Principles that guide my work every day
            </Typography>
          </motion.div>

          <Grid container spacing={2}>
            {values.map((value, i) => (
              <Grid size={{ xs: 12, sm: 6 }} key={i}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 1.5 }}>
                    <CheckCircleIcon sx={{ color: 'primary.main', flexShrink: 0, mt: 0.2 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                      {value}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
