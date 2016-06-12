'use strict';

const TinyTranslate = require('./modules/TinyTranslate.provider');
const TrFilter = require('./modules/tr.filter');

angular
  .module('angular-tiny-translate', [
    TrFilter,
    TinyTranslate
  ]);
