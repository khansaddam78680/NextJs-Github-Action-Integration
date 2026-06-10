import { personalInfo, stats, skillCategories, projects, achievements, workExperiences, careerTimeline } from '../lib/portfolioData';

describe('portfolioData integrity', () => {
  it('personalInfo has required fields', () => {
    expect(personalInfo.name).toBeTruthy();
    expect(personalInfo.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it('all stats have value and label', () => {
    stats.forEach(s => {
      expect(s.value).toBeTruthy();
      expect(s.label).toBeTruthy();
    });
  });

  it('every skill has a level between 0 and 100', () => {
    skillCategories.forEach(cat =>
      cat.skills.forEach(skill => {
        expect(skill.level).toBeGreaterThanOrEqual(0);
        expect(skill.level).toBeLessThanOrEqual(100);
      })
    );
  });

  it('every project has unique id and required fields', () => {
    const ids = projects.map(p => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    projects.forEach(p => {
      expect(p.title).toBeTruthy();
      expect(p.technologies.length).toBeGreaterThan(0);
    });
  });

  it('all achievements have valid category', () => {
    const valid = ['Certification', 'Award', 'Milestone', 'Contribution', 'Leadership'];
    achievements.forEach(a => expect(valid).toContain(a.category));
  });

  it('workExperiences are in reverse chronological order', () => {
    const starts = workExperiences.map(w => new Date(w.startDate).getFullYear());
    const sorted = [...starts].sort((a, b) => b - a);
    expect(starts).toEqual(sorted);
  });

  it('careerTimeline years are ascending', () => {
    const years = careerTimeline.map(e => parseInt(e.year));
    const sorted = [...years].sort((a, b) => a - b);
    expect(years).toEqual(sorted);
  });
});
