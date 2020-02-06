// import { Isocial } from './isocial';
// import { CheckVideoCookie } from './check-video-cookie';
// import { SiteSearch } from "./site-search";
import { Slider } from "./slider";

window.iv = {};
window.iv.translations = {};
window.iv.config = {};
window.iv.appPlugins = {};

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

// Vendors
require('./vendor/leading-zeros');
require('./vendor/destroy-foundation-equalizer');

// Require third party plugins
require('@fancyapps/fancybox/dist/jquery.fancybox');
require('objectFitPolyfill/dist/objectFitPolyfill.basic.min');

$(function() {
  const appPlugins = window.iv.appPlugins;

  // Register all scripting
  // appPlugins.isocial = new Isocial();
  // appPlugins.checkVideoCookie = new CheckVideoCookie();
  // appPlugins.siteSearch = new SiteSearch();
  appPlugins.slider = new Slider();

  // Init functions
  $(document).foundation();
});
