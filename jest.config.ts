import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["<rootDir>/tests/unit/**/*.test.{ts,tsx}"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};

// next/jest overrides transformIgnorePatterns, so we merge after resolution
const jestConfig = createJestConfig(config);

export default async () => {
  const resolved = await jestConfig();
  return {
    ...resolved,
    transformIgnorePatterns: [
      "/node_modules/(?!(next-intl|use-intl|@formatjs)/)",
    ],
  };
};
