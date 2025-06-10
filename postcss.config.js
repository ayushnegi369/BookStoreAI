import browserslist from './browserslist-config.cjs';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [autoprefixer(), postcssPresetEnv()],
};