import dts from 'vite-plugin-dts';

export default {
  mode: 'development',
  root: './',
  build: {
    minify: false,
    sourcemap: true,
    emptyOutDir: false,
    lib: {
      formats: ['es', 'cjs', 'umd'],
      entry: './src/vitepress-plugin-auto-sidebar.ts',
      name: 'vitepress-plugin-auto-sidebar'
    },
  },
  plugins: [dts()]
}