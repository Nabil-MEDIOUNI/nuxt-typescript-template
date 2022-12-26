import { NuxtOptionsModule } from '@nuxt/types/config/module';

// Import module options
import colorMode from './modules/colorMode';
import image from './modules/image';
import typescriptBuild from './modules/typescriptBuild';

// Dev mode
const isDev = process.env.NODE_ENV === 'development';

const BuildModules: NuxtOptionsModule[] = [
  '@nuxtjs/moment',
  ['@nuxt/image', image],
  ['@nuxtjs/color-mode', colorMode],
  ['@nuxt/typescript-build', typescriptBuild],
];

if (isDev) BuildModules.unshift('nuxt-vite');

export default BuildModules;
