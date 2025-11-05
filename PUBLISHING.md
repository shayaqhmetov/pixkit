# Publishing Guide for PixKit

This guide explains how to publish PixKit packages to npm.

## Prerequisites

1. **npm account**: You need an npm account with access to publish under the `@pixkit` scope
2. **npm authentication**: Login to npm from your terminal:
   ```bash
   npm login
   ```

3. **Repository access**: You need write access to the GitHub repository

## Publishing Process

### 1. Make Changes

Make your changes to the codebase in a feature branch.

### 2. Create a Changeset

After making changes, create a changeset to document them:

```bash
pnpm changeset
```

This will prompt you to:
- Select which packages have changed
- Specify the type of change (major, minor, or patch)
- Write a description of the changes

The changeset will be saved as a markdown file in `.changeset/`.

### 3. Commit and Push

Commit your changes including the changeset:

```bash
git add .
git commit -m "feat: your feature description"
git push origin your-branch-name
```

### 4. Create a Pull Request

Create a PR on GitHub and wait for review and approval.

### 5. Version Packages (After PR Merge)

Once your PR is merged to main, update package versions:

```bash
# Pull latest main
git checkout main
git pull

# Update versions based on changesets
pnpm version-packages
```

This will:
- Consume all changesets
- Update package versions
- Update CHANGELOG.md files
- Remove consumed changeset files

### 6. Commit Version Changes

```bash
git add .
git commit -m "chore: version packages"
git push
```

### 7. Build All Packages

Ensure all packages build successfully:

```bash
pnpm build
```

### 8. Publish to npm

Publish all updated packages:

```bash
pnpm release
```

This command will:
- Build all packages
- Publish changed packages to npm
- Create git tags for the new versions

### 9. Push Tags

Push the created git tags:

```bash
git push --follow-tags
```

## Manual Publishing (If Needed)

If you need to publish a specific package manually:

```bash
# Navigate to the package
cd packages/react

# Ensure it's built
pnpm build

# Publish
npm publish --access public
```

## Version Bumps

Follow semantic versioning (semver):

- **Major (x.0.0)**: Breaking changes
- **Minor (0.x.0)**: New features, backwards compatible
- **Patch (0.0.x)**: Bug fixes, backwards compatible

## Pre-release Versions

To publish a pre-release version:

```bash
# Create a changeset with pre-release
pnpm changeset pre enter alpha

# Make your changes and create changesets as usual
pnpm changeset

# Version packages
pnpm version-packages

# Publish
pnpm release

# Exit pre-release mode
pnpm changeset pre exit
```

## Troubleshooting

### Authentication Issues

If you get authentication errors:
```bash
npm logout
npm login
```

### Package Already Published

If a version is already published, you'll need to bump the version:
```bash
pnpm changeset
pnpm version-packages
```

### Build Errors

Ensure all packages build successfully before publishing:
```bash
pnpm clean
pnpm build
pnpm typecheck
```

## Verification

After publishing, verify the packages:

1. Check on npm: `https://www.npmjs.com/package/@pixkit/react`
2. Try installing in a test project:
   ```bash
   npm install @pixkit/react@latest
   ```

## Best Practices

1. Always create changesets for your changes
2. Build and test before publishing
3. Use meaningful commit messages
4. Update documentation when needed
5. Test packages locally before publishing
6. Keep CHANGELOG.md files updated (done automatically by changesets)

## Support

If you encounter issues, please:
1. Check the Changesets documentation: https://github.com/changesets/changesets
2. Review npm publishing guide: https://docs.npmjs.com/cli/v10/commands/npm-publish
3. Open an issue on GitHub
