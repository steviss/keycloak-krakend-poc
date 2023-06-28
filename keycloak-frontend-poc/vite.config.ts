import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log('Keycloak Realm:', env.VITE_APP_KEYCLOAK_REALM)
  console.log('Keycloak Client:', env.VITE_APP_KEYCLOAK_CLIENT_ID)
  console.log('Keycloak URL:', env.VITE_APP_KEYCLOAK_URL)
  return {
    plugins: [react()],
    resolve: {
      alias: {
        src: '/src',
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
      host: '0.0.0.0',
      strictPort: true,
      port: parseInt(env.VITE_PORT),
    },
  }
})
