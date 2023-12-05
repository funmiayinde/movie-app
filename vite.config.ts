import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import path from 'node:path';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default ({ command, mode }: never) => {
  const root = process.cwd();
  const folderName = path.basename(root);

  // append folder name to base path if using Github repo pages
  const usingRepoPages  = !process.env.VITE_ROOT_PAGES
  const base = mode === 'production' && usingRepoPages ? `/${folderName}` : '/';
  const isBuild = command === 'build';
  
  console.log('Config with', {
    command,
    mode,
    usingRepoPages,
    root,
    folderName,
    base,
  })

  return defineConfig({
    plugins: [
      react(),
      createHtmlPlugin({
        minify: isBuild,
        inject: {
          data: {
            PUBLIC_URL: base,
            TITLE: 'MOVIE APP',
            DESCRIPTION: 'Search for movies',
            KEYWORDS: 'Movies, api, react, vite, application'
          }
        }
      })
    ],
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        "@": srcAliasOf(),
      },
    },
  });
};

function srcAliasOf(slug = "") {
  const url = new URL(`./src/${slug}`, import.meta.url);
  return fileURLToPath(url);
}
