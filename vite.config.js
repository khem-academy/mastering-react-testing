import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mastering-react-testing/',
  plugins: [react()],
  build: {
    publicPath: '/mastering-react-testing/',
  },
})
