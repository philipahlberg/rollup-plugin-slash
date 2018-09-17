import { builtinModules } from 'module';

export default {
  input: './src/index.js',
  output: {
    file: './dist/index.js',
    format: 'cjs'
  },
  external: id => builtinModules.includes(id)
};