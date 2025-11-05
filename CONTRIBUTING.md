# Contributing to PixKit

Thank you for your interest in contributing to PixKit! This guide will help you get started.

## Development Setup

1. **Prerequisites**
   - Node.js >= 18
   - pnpm >= 10.14.0

2. **Clone the repository**
   ```bash
   git clone https://github.com/shayaqhmetov/pixkit.git
   cd pixkit
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Build all packages**
   ```bash
   pnpm build
   ```

5. **Start development mode**
   ```bash
   pnpm dev
   ```

## Project Structure

```
pixkit/
├── apps/
│   └── web/              # Demo web application
├── packages/
│   ├── react/            # React components
│   ├── native/           # React Native components
│   ├── styles/           # CSS styles
│   ├── tokens/           # Design tokens
│   └── cli/              # CLI tools
```

## Making Changes

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clear, concise code
   - Follow existing code style
   - Add tests if applicable
   - Update documentation

3. **Build and test**
   ```bash
   pnpm build
   pnpm typecheck
   pnpm lint
   ```

4. **Create a changeset**
   ```bash
   pnpm changeset
   ```
   - Select the packages that changed
   - Choose the appropriate version bump (major, minor, patch)
   - Write a clear description of your changes

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

6. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Commit Message Convention

We follow conventional commits:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## Publishing (Maintainers Only)

1. **Update versions**
   ```bash
   pnpm version-packages
   ```

2. **Review and commit changes**
   ```bash
   git add .
   git commit -m "chore: version packages"
   git push
   ```

3. **Publish to npm**
   ```bash
   pnpm release
   ```

   This will:
   - Build all packages
   - Publish to npm with the correct tags
   - Create git tags for each package version

## Questions?

Feel free to open an issue or reach out to the maintainers.
