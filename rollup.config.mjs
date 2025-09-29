import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.tsx',     // ✅ entry file
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'named'
  },
  external: ['react', 'react-dom', 'prop-types'],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' })  // ✅ compile TS/TSX
  ]
};
