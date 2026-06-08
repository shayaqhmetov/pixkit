# @pixkit/vue

Pixel-art themed **Vue 3** UI components — the Vue counterpart to `@pixkit/react`
and `@pixkit/native`. Shares the `@pixkit/tokens` design tokens.

Ships the **Qurbaqa "clean base + pixel accent"** theme used by the Qurbaqa web
app: Inter Tight typography, frog-green `oklch` palette, JetBrains Mono numerics
and reserved pixel motifs.

## Install

```bash
pnpm add @pixkit/vue
```

## Usage

```ts
// main.ts
import '@pixkit/vue/styles/index.css'
```

The theme is scoped under a `.qurbaqa` root class so it never collides with the
host app's own tokens. Wrap the part of the tree that should use it:

```vue
<template>
  <div class="qurbaqa">
    <PixCard>
      <PixTag dot>Daily quests</PixTag>
      <PixProgressBar :value="28" :max="30" pixel color="var(--c-sport)" />
      <PixButton variant="primary"><PixIcon name="plus" /> Add</PixButton>
    </PixCard>
  </div>
</template>

<script setup lang="ts">
import { PixCard, PixTag, PixProgressBar, PixButton, PixIcon } from '@pixkit/vue'
</script>
```

Toggle light mode with `data-theme="light"` and pixel intensity with
`data-pixel="full" | "none"` on the `.qurbaqa` element.

## Components

`PixCard` · `PixButton` · `PixChip` · `PixTag` · `PixProgressBar` ·
`PixSparkline` · `PixIcon` · `PixFrog`

## Local development

Consumers in this monorepo (or sibling repos) can alias `@pixkit/vue` straight
to the SFC source for instant HMR without a build step:

```ts
// vite.config.ts
resolve: { alias: { '@pixkit/vue': '/abs/path/pixkit/packages/vue/src/index.ts' } }
```
