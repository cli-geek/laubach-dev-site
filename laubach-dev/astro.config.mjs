// @ts-check
import { defineConfig } from 'astro/config';
import { execSync } from 'node:child_process';

import react from '@astrojs/react';

// Short commit SHA for the footer. Read here, in Node, because Cloudflare's
// build prerenders pages in its own runtime, where process.env and git aren't
// available. Workers Builds sets WORKERS_CI_COMMIT_SHA; locally, ask git.
function buildSha() {
  if (process.env.WORKERS_CI_COMMIT_SHA) return process.env.WORKERS_CI_COMMIT_SHA.slice(0, 7);
  try {
    return execSync('git rev-parse --short HEAD', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return '';
  }
}

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    define: {
      __BUILD_SHA__: JSON.stringify(buildSha()),
    },
  },
});
