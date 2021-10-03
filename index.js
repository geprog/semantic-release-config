module.exports = {
  plugins: [
    ["@semantic-release/commit-analyzer", {
      "preset": "angular",
      "releaseRules": [
        // build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test
        {"type": "build", "release": "patch"},
        {"type": "chore", "release": "patch"},
        {"type": "ci", "release": "patch"},
        {"type": "refactor", "release": "patch"},
        {"type": "revert", "release": "patch"},
      ]
    }],
    '@semantic-release/commit-analyzer',
    // '@semantic-release/changelog',
    '@semantic-release/release-notes-generator',
    ["@semantic-release/npm", { "npmPublish": true }],
    '@semantic-release/github',
  ],
  "branches": ["main"]
};