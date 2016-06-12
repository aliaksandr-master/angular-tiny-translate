'use strict';

const TinyTranslate = require('./TinyTranslate.provider.js');

angular
  .module('angular-tiny-translate.filter', [
    TinyTranslate
  ])

  /*@ngInject*/
  .filter('tr', (TinyTranslates) =>
    (translationId, keyPrefix) =>
      TinyTranslates.translate(keyPrefix, translationId)
  );

module.exports = 'angular-tiny-translate.filter';
