'use client';

import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import VerifiedIcon from '@mui/icons-material/Verified';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';
import { personalInfo, stats, skillCategories, projects, achievements } from '../../lib/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const statIconMap: Record<string, React.ReactNode> = {
  work: <WorkIcon sx={{ fontSize: 36 }} />,
  code: <CodeIcon sx={{ fontSize: 36 }} />,
  devices: <DevicesIcon sx={{ fontSize: 36 }} />,
  verified: <VerifiedIcon sx={{ fontSize: 36 }} />,
};

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.max(1, Math.ceil(target / 40));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 40);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
}

export default function HomeContent() {
  const theme = useTheme();

  const featuredProjects = projects.slice(0, 3);
  const featuredAchievements = achievements.slice(0, 3);
  const allFeaturedSkills = skillCategories
    .slice(0, 2)
    .flatMap((cat) => cat.skills.slice(0, 4).map((s) => ({ ...s, category: cat.category, color: cat.color })));

  return (
    <>
      {/* ── Hero ── */}
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0D47A1 0%, #1565C0 40%, #0288D1 70%, #00BCD4 100%)',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 8, md: 0 },
        }}
      >
        <Box sx={{
          position: 'absolute', width: 500, height: 500,
          borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)',
          top: '10%', right: '-10%',
        }} />
        <Box sx={{
          position: 'absolute', width: 300, height: 300,
          borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)',
          bottom: '5%', left: '-5%',
        }} />

        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: 'center', justifyContent: 'center' }}>
            <Grid size={{ xs: 12, md: 5 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(255,255,255,0.75)', mb: 1, letterSpacing: 2, textTransform: 'uppercase', fontSize: '0.85rem' }}
                >
                  Hello, I&apos;m
                </Typography>
              </motion.div>

              <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#fff',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    mb: 1,
                  }}
                >
                  {personalInfo.name}
                </Typography>
              </motion.div>

              <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
                <Typography
                  variant="h4"
                  sx={{
                    color: 'rgba(255,255,255,0.85)',
                    fontWeight: 400,
                    mb: 3,
                    fontSize: { xs: '1.3rem', md: '1.6rem' },
                  }}
                >
                  {personalInfo.title}
                </Typography>
              </motion.div>

              <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.8,
                    mb: 4,
                    maxWidth: 480,
                    mx: { xs: 'auto', md: 0 },
                  }}
                >
                  {personalInfo.summary}
                </Typography>
              </motion.div>

              <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    href="/projects"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: '#fff',
                      color: 'primary.dark',
                      fontWeight: 700,
                      px: 3,
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    component={Link}
                    href="/contact"
                    sx={{
                      borderColor: 'rgba(255,255,255,0.6)',
                      color: '#fff',
                      fontWeight: 700,
                      px: 3,
                      '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                    }}
                  >
                    Contact Me
                  </Button>
                </Box>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
              >
                <Box sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: -8,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05))',
                  },
                }}>
                  <Avatar
                    sx={{
                      width: { xs: 180, md: 240 },
                      height: { xs: 180, md: 240 },
                      fontSize: { xs: '4rem', md: '5rem' },
                      fontWeight: 800,
                      bgcolor: 'rgba(255,255,255,0.15)',
                      color: '#fff',
                      border: '4px solid rgba(255,255,255,0.4)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    JD
                  </Avatar>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* Scroll indicator */}
        <Box
          sx={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)' }}
          component={motion.div}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <Box sx={{
            width: 24, height: 40,
            border: '2px solid rgba(255,255,255,0.4)',
            borderRadius: 12,
            display: 'flex',
            justifyContent: 'center',
            pt: 0.75,
          }}>
            <Box sx={{ width: 4, height: 8, bgcolor: 'rgba(255,255,255,0.6)', borderRadius: 2 }} />
          </Box>
        </Box>
      </Box>

      {/* ── Stats ── */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {stats.map((stat, i) => (
              <Grid size={{ xs: 6, sm: 3 }} key={stat.label}>
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
                      textAlign: 'center',
                      borderRadius: 3,
                      border: `1px solid ${theme.palette.divider}`,
                      bgcolor: 'background.paper',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 32px ${theme.palette.primary.main}22`,
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 1 }}>{statIconMap[stat.icon]}</Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main', lineHeight: 1 }}>
                      {stat.value.includes('+') ? (
                        <><AnimatedCounter target={parseInt(stat.value)} />+</>
                      ) : (
                        stat.value
                      )}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.5, fontWeight: 500, color: 'text.secondary' }}>
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Featured Skills ── */}
      <Box sx={{ py: 8, bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : '#EFF4FB' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, textAlign: 'center', mb: 1 }}>
              Featured Skills
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 5 }}>
              A snapshot of my core technical expertise
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
            {allFeaturedSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Chip
                  label={skill.name}
                  sx={{
                    bgcolor: `${skill.color}18`,
                    color: skill.color,
                    border: `1px solid ${skill.color}40`,
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    height: 36,
                    '&:hover': { bgcolor: `${skill.color}28` },
                  }}
                />
              </motion.div>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="outlined" component={Link} href="/skills" endIcon={<ArrowForwardIcon />}>
              View All Skills
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── Featured Projects ── */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, textAlign: 'center', mb: 1 }}>
              Featured Projects
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 5 }}>
              Highlights from my portfolio of work
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {featuredProjects.map((project, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  style={{ height: '100%' }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: `1px solid ${theme.palette.divider}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: `0 12px 40px ${theme.palette.primary.main}22`,
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 160,
                        background: project.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '16px 16px 0 0',
                      }}
                    >
                      <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, textAlign: 'center', px: 2 }}>
                        {project.title}
                      </Typography>
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.7 }}>
                        {project.description.slice(0, 100)}…
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" sx={{ fontSize: '0.7rem' }} />
                        ))}
                      </Box>
                    </CardContent>

                    <CardActions sx={{ px: 3, pb: 2.5, gap: 1 }}>
                      <Button size="small" startIcon={<GitHubIcon />} href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </Button>
                      <Button size="small" startIcon={<OpenInNewIcon />} href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Demo
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button variant="contained" size="large" component={Link} href="/projects" endIcon={<ArrowForwardIcon />}>
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── Achievement Highlights ── */}
      <Box sx={{ py: 8, bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : '#EFF4FB' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, textAlign: 'center', mb: 1 }}>
              Achievement Highlights
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 5 }}>
              Key milestones and recognitions throughout my career
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {featuredAchievements.map((achievement, i) => (
              <Grid size={{ xs: 12, sm: 4 }} key={achievement.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: 'primary.main',
                        boxShadow: `0 8px 24px ${theme.palette.primary.main}18`,
                      },
                    }}
                  >
                    <Chip label={achievement.category} size="small" color="primary" sx={{ mb: 2, fontWeight: 600 }} />
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {achievement.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {achievement.description.slice(0, 90)}…
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block', mt: 2 }}>
                      {achievement.year}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button variant="outlined" component={Link} href="/achievements" endIcon={<ArrowForwardIcon />}>
              View All Achievements
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
