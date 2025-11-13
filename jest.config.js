export default {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  transform: {
    '^.+\\.(ts|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
      },
    ],
  },
  collectCoverage: true,
  coverageReporters: [
    'lcov', // Formato que o SonarQube usa
    'text-summary',
  ],
  moduleNameMapper: {
    '@assets/(.*)$': '<rootDir>/src/assets/$1',
    '@env/(.*)$': '<rootDir>/src/environments/$1',
    '@core/(.*)$': '<rootDir>/src/app/core/$1',
    '@modules/(.*)$': '<rootDir>/src/app/modules/$1',
    '@shared/(.*)$': '<rootDir>/src/app/shared/$1',
  },
};
