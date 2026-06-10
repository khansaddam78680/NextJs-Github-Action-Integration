import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });

const config: Config = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'],
  reporters: [
    'default',
    ['jest-html-reporter', {
      outputPath: 'reports/test-report.html',
      pageTitle: 'Unit Test Report',
      includeFailureMsg: true,
      includeSuiteFailure: true,
    }],
  ],
  collectCoverageFrom: [
    'app/api/**/*.ts',
    'app/lib/**/*.ts',
  ],
  coverageReporters: ['text', 'html'],
};

export default createJestConfig(config);
