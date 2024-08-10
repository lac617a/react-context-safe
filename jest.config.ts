/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jest-environment-jsdom",
  rootDir: ".",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.json",
        diagnostics: false,
        astTransformers: {
          before: [
            {
              path: "ts-jest-mock-import-meta",
            },
          ],
        },
      },
    ],
  },
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
}
