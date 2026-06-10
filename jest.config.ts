import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });

const config: Config = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'],
  reporters: [
    'default',
    'jest-github-actions-reporter',
  ],
  collectCoverageFrom: [
    'app/api/**/*.ts',
    'app/lib/**/*.ts',
  ],
};

export default createJestConfig(config);
