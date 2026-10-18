import { spawn } from 'node:child_process';
import { copyFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const viteBin = resolve(__dirname, '../node_modules/vite/bin/vite.js');
const args = process.argv.slice(2);

const child = spawn(process.execPath, [viteBin, ...args], {
  stdio: 'inherit',
  shell: false,
  env: process.env,
});

child.on('exit', async (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  if (code === 0 && process.env.VERCEL && args.includes('build')) {
    const functionsDir = resolve(__dirname, '../.vercel/output/functions/__server.func');

    try {
      const manifestFiles = (await readdir(functionsDir)).filter((file) =>
        /^_tanstack-start-manifest_v-.+\.mjs$/.test(file),
      );
      if (manifestFiles.length !== 1) {
        throw new Error(`Expected one generated client manifest, found ${manifestFiles.length}`);
      }
      await copyFile(
        resolve(functionsDir, manifestFiles[0]),
        resolve(functionsDir, '_tanstack-start-manifest_v.mjs'),
      );
    } catch (error) {
      console.error('Failed to synchronize the Vercel client manifest:', error);
      process.exit(1);
      return;
    }
  }

  process.exit(code ?? 0);
});

child.on('error', (error) => {
  console.error(error);
  process.exit(1);
});
