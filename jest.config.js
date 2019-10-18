module.exports = {
  roots: ["src"],
  transform: {
    "\\.(ts|tsx)?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfigFile: "./tsconfig.json",
    },
  },
  testMatch: ["<rootDir>/**/?(*.)test.{ts,tsx}"], // looks for your test
  moduleFileExtensions: ["ts", "tsx", "js"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], // sets at test files
  moduleDirectories: ["node_modules", "."],
  moduleNameMapper: {
    "#root": "./src",
    "#actions": "<rootDir>/src/store/actions",
    "#components": "<rootDir>/src/components",
    "#constants": "<rootDir>/src/constants",
    "#customHooks": "<rootDir>/src/customHooks",
    "#domainTypes": "<rootDir>/src/types",
    "#router": "<rootDir>/src/router",
    "#selectors": "<rootDir>/src/selectors",
    "#services": "<rootDir>/src/services",
    "#store": "<rootDir>/src/store",
    "#storeTypes": "<rootDir>/src/store/types",
    "#styled": "<rootDir>/src/styled",
    "#styledTypes": "<rootDir>/src/types/styledTypes"
  },
};
