# NextJs Github Action Integration

A portfolio website for **John Doe** (Full Stack Developer) built with Next.js 16, demonstrating a complete CI/CD pipeline using GitHub Actions and Vercel. The project showcases automated testing, linting, type checking, preview deployments on PRs, and production deployments on merge to main.

---

## Live Demo

- **Production**: [next-js-github-action-integration.vercel.app](https://next-js-github-action-integration.vercel.app)

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI Library | Material UI v9 |
| Animations | Framer Motion v12 |
| Styling | Emotion CSS-in-JS |
| Testing | Jest 30 + React Testing Library |
| Linting | ESLint (Next.js config) |
| Deployment | Vercel (via GitHub Actions) |
| CI/CD | GitHub Actions |

---

## Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero section, stats, featured skills and projects |
| About | `/about` | Bio, career timeline, personal summary |
| Skills | `/skills` | Skill categories with animated progress bars |
| Projects | `/projects` | Filterable project cards with search |
| Achievements | `/achievements` | Certifications, awards, milestones |
| Experience | `/experience` | Work history with responsibilities and accomplishments |
| Contact | `/contact` | Contact form with API route validation |

---

## Project Structure

```
├── app/
│   ├── __tests__/                  # Unit tests
│   │   ├── contact-api.test.ts     # API route tests
│   │   └── portfolio-data.test.ts  # Data integrity tests
│   ├── api/
│   │   └── contact/
│   │       └── route.ts            # Contact form API handler
│   ├── components/
│   │   ├── sections/               # Page content components (client)
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── ThemeRegistry.tsx       # MUI theme + dark/light mode
│   ├── lib/
│   │   ├── portfolioData.ts        # All portfolio content/data
│   │   ├── theme.ts                # MUI light/dark theme config
│   │   └── types.ts                # TypeScript interfaces
│   ├── [page]/page.tsx             # Thin server wrappers (SEO metadata)
│   ├── globals.css
│   ├── icon.tsx                    # Favicon (JD monogram)
│   └── layout.tsx                  # Root layout
├── .github/
│   └── workflows/
│       ├── test.yml                # Run tests on feature branch pushes
│       ├── vercel-preview.yml      # Deploy preview on PR to main
│       └── production.yml          # Deploy to production on merge to main
├── jest.config.ts
├── vercel.json                     # Disables Vercel auto-deploy
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/khansaddam78680/NextJs-Github-Action-Integration.git
cd NextJs-Github-Action-Integration
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run unit tests |
| `npm test -- --coverage` | Run tests with coverage report |

---

## CI/CD Pipeline

### Workflows Overview

```
Push to feature/* branch
└── test.yml
    ├── Lint & Type Check  →  GitHub Actions Summary
    └── Unit Tests         →  GitHub Actions Summary

Pull Request to main
└── vercel-preview.yml
    ├── Lint & Type Check  (reuses test.yml)
    ├── Unit Tests         (reuses test.yml)
    └── Preview Deploy     →  Preview URL posted to Actions Summary

Merge to main
└── production.yml
    ├── Lint & Type Check  (reuses test.yml)
    ├── Unit Tests         (reuses test.yml)
    └── Production Deploy  →  Live site updated
```

### Workflow Details

#### `test.yml` — Feature Branch Tests
- Triggers on push to `feature/**` branches
- Runs TypeScript type check and ESLint
- Runs Jest unit tests with coverage
- Writes results table to GitHub Actions job summary
- Can be called as a reusable workflow by other workflows

#### `vercel-preview.yml` — PR Preview Deploy
- Triggers on PR opened, updated, or reopened against `main`
- Runs full test suite first (via `test.yml`)
- Deploys to Vercel preview environment on test pass
- Posts preview URL to GitHub Actions summary
- Deploy is blocked if any test or lint check fails

#### `production.yml` — Production Deploy
- Triggers on push (merge) to `main`
- Runs full test suite first (via `test.yml`)
- Deploys to Vercel production on test pass
- Uses `vercel build --prod` + `vercel deploy --prebuilt --prod`

---

## Testing

### Run Tests

```bash
# All tests
npm test

# With coverage
npm test -- --coverage

# CI mode (no watch)
npm test -- --ci
```

### Test Coverage

| File | What is tested |
|---|---|
| `contact-api.test.ts` | 200 success, 400 missing fields, 400 invalid email, 500 malformed JSON |
| `portfolio-data.test.ts` | Data shape, skill levels, unique IDs, valid categories, chronological order |

---

## Vercel Deployment Setup

Deployments are managed entirely by GitHub Actions. Vercel auto-deploy is disabled via `vercel.json`:

```json
{
  "git": {
    "deploymentEnabled": false
  }
}
```

### Required GitHub Secrets

Add these in **GitHub repo → Settings → Secrets and variables → Actions**:

| Secret | How to get it |
|---|---|
| `VERCEL_TOKEN` | Vercel Dashboard → Account Settings → Tokens |
| `VERCEL_ORG_ID` | `.vercel/project.json` → `orgId` after running `vercel link` |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` → `projectId` after running `vercel link` |

### First-Time Vercel Setup

```bash
# Install Vercel CLI
npm i -g vercel

# Login and link project
vercel login
vercel link
```

Then add the three secrets from `.vercel/project.json` to GitHub.

---

## Environment Variables

No environment variables are required to run this project locally. For production, add any required variables in **Vercel Dashboard → Project → Settings → Environment Variables**.

---

## Customising Portfolio Content

All portfolio data is in a single file — `app/lib/portfolioData.ts`:

| Export | What it controls |
|---|---|
| `personalInfo` | Name, title, email, GitHub, LinkedIn, location |
| `stats` | Hero section stat counters |
| `skillCategories` | Skills grouped by category with proficiency levels |
| `projects` | Project cards with tech stack, features, links |
| `achievements` | Certifications, awards, milestones |
| `workExperiences` | Job history with responsibilities and accomplishments |
| `careerTimeline` | Timeline events on the About page |
