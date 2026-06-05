'use client';

import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SearchIcon from '@mui/icons-material/Search';
import { projects } from '../../lib/portfolioData';

const allTech = Array.from(new Set(projects.flatMap((p) => p.technologies))).sort();
const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsContent() {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const matchTech = !activeTech || p.technologies.includes(activeTech);
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchTech && matchSearch;
    });
  }, [activeCategory, activeTech, search]);

  const toggleTech = (tech: string) => setActiveTech((prev) => (prev === tech ? null : tech));

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
              Projects
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 400 }}>
              A portfolio of enterprise solutions, web platforms, and DevOps tools
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ py: 6, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          {/* Search */}
          <Box sx={{ mb: 4, maxWidth: 480, mx: 'auto' }}>
            <TextField
              fullWidth
              placeholder="Search projects or technologies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{ bgcolor: 'background.paper', borderRadius: 2 }}
            />
          </Box>

          {/* Category filter */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center', mb: 3 }}>
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setActiveCategory(cat)}
                color={activeCategory === cat ? 'primary' : 'default'}
                variant={activeCategory === cat ? 'filled' : 'outlined'}
                sx={{ fontWeight: 600, cursor: 'pointer' }}
              />
            ))}
          </Box>

          {/* Tech filter */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center', mb: 5 }}>
            {allTech.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                onClick={() => toggleTech(tech)}
                sx={{
                  fontWeight: 500,
                  cursor: 'pointer',
                  bgcolor: activeTech === tech ? 'primary.main' : 'transparent',
                  color: activeTech === tech ? '#fff' : 'text.secondary',
                  border: `1px solid ${theme.palette.divider}`,
                  '&:hover': { bgcolor: 'primary.light', color: '#fff' },
                  transition: 'all 0.2s',
                }}
              />
            ))}
          </Box>

          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, textAlign: 'center' }}>
            Showing {filtered.length} of {projects.length} projects
          </Typography>

          {/* Projects grid */}
          <Grid container spacing={3}>
            <AnimatePresence>
              {filtered.map((project, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    style={{ height: '100%' }}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 3,
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
                          height: 140,
                          background: project.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '12px 12px 0 0',
                          p: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, color: '#fff', textAlign: 'center', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
                        >
                          {project.title}
                        </Typography>
                      </Box>

                      <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                        <Chip
                          label={project.category}
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{ mb: 1.5, fontWeight: 600 }}
                        />
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}>
                          {project.description}
                        </Typography>

                        <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary', display: 'block', mb: 1 }}>
                          Key Features:
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, mb: 2 }}>
                          {project.features.slice(0, 3).map((f) => (
                            <Typography key={f} component="li" variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                              {f}
                            </Typography>
                          ))}
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {project.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              onClick={() => toggleTech(tech)}
                              sx={{
                                fontSize: '0.7rem',
                                height: 22,
                                bgcolor: activeTech === tech ? 'primary.main' : `${theme.palette.primary.main}14`,
                                color: activeTech === tech ? '#fff' : 'primary.main',
                                cursor: 'pointer',
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>

                      <CardActions sx={{ px: 2.5, pb: 2.5, gap: 1 }}>
                        <Button
                          size="small"
                          startIcon={<GitHubIcon />}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ fontWeight: 600 }}
                        >
                          GitHub
                        </Button>
                        <Button
                          size="small"
                          variant="outlined"
                          startIcon={<OpenInNewIcon />}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ fontWeight: 600 }}
                        >
                          Live Demo
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>

          {filtered.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                No projects match your filters. Try adjusting the search or category.
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
}
