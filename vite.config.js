import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import fs from 'fs'

export default defineConfig(({ command }) => {
  let config

  /* development */
  if (command === 'serve') {
    config = {
      css: { devSourcemap: true },
      server: {
        host: '127.0.0.8',
        https: { key: fs.readFileSync('.key'), cert: fs.readFileSync('.crt') },
        port: 2048
      }
    }
  }

  /* build / deploy */
  else if (command === 'build') {
    config = {
      base: '/social-links-profile/'
    }
  }

  /* aliases */
  return config = {
    ...config,
    resolve: {
      alias: [ { find: '@', replacement: fileURLToPath(new URL('./source', import.meta.url)) } ]
    }
  }
})