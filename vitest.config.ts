import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
      environment: 'jsdom',
      coverage: {
        include: ['**/*.tsx'],
        exclude: [
          '**/node_modules/**',
          '**/*.test.tsx',
          '**/*.spec.tsx',
          'src/__tests__/setup.ts',
          'App.tsx',
          'main.tsx'
        ],
      },
      setupFiles: ['./src/__tests__/setup.ts'],
    },
  });