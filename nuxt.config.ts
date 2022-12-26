// Types
import type { NuxtConfig } from '@nuxt/types';

// Base config
import buildModules from './config/buildModules';
import components from './config/components';
import generate from './config/generate';
import css from './config/css';
import head from './config/head';
import loading from './config/loading';
import modules from './config/modules';

// Specific module options
import vite from './config/modules/vite';

// Constants
const isDev = process.env.NODE_ENV !== 'development';

const Config: NuxtConfig = {
  // Constant options
  rootDir: './',
  srcDir: 'src',
  target: 'static',

  ssr: isDev,

  // Imported options
  head,
  loading,
  buildModules,
  components,
  generate,
  css,
  modules,
  // Modules
  vite,
};

export default Config;
