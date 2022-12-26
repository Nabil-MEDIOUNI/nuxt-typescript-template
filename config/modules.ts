import { NuxtOptionsModule } from '@nuxt/types/config/module';

/* Import module options */
import pwa from './modules/pwa';
import sitemap from './modules/sitemap';
import webfontloader from './modules/webfontloader';

const Modules: NuxtOptionsModule[] = [
  '@nuxtjs/axios',
  '@nuxtjs/robots',
  ['@nuxtjs/pwa', pwa],
  ['@nuxtjs/sitemap', sitemap],
  ['nuxt-webfontloader', webfontloader],
];

export default Modules;
