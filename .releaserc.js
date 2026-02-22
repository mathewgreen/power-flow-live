module.exports = {
  branches: ["main", { name: "dev", prerelease: true }],
  preset: "conventionalcommits",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@google/semantic-release-replace-plugin",
      {
        replacements: [
          {
            files: ["dist/power-flow-live.js"],
            from: /Power Flow Live v(\d+\.\d+\.\d+)/,
            to: "Power Flow Live v${nextRelease.version}",
            results: [
              {
                file: "dist/power-flow-live.js",
                hasChanged: true,
                numMatches: 2,
                numReplacements: 2,
              },
            ],
            countMatches: true,
          },
        ],
      },
    ],
    ["@semantic-release/npm", { npmPublish: false }],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "README.md", "package.json", "pnpm-lock.yaml"],
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: "dist/*.js",
      },
    ],
  ],
};
