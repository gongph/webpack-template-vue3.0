module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src", "<rootDir>/packages", "<rootDir>/test"],
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // collectCoverage: true
}
