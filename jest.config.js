const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "json"],
  testRegex: "src/.*(test|spec)\\.(ts)x?$",
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.{ts,js}", "!src/**/*.d.ts"],
  setupFiles: ["<rootDir>/src/__tests__/setup.jest.js"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: "src/"}),
  modulePaths: [
    '<rootDir>'
  ],
};
