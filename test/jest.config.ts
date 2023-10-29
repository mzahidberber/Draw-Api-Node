import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testMatch:['**/*.test.ts'],
  preset: 'ts-jest',
  testEnvironment: "node",
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default config;