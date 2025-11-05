# Changesets

This folder contains changesets - files that describe changes to the packages in this monorepo.

## How to use

When you make changes to any package:

1. Run `pnpm changeset` to create a new changeset
2. Select the packages that have been changed
3. Select the type of change (major, minor, or patch)
4. Provide a description of the changes

When ready to publish:

1. Run `pnpm version-packages` to consume changesets and update versions
2. Run `pnpm release` to build and publish all packages to npm

Learn more about Changesets at: https://github.com/changesets/changesets
