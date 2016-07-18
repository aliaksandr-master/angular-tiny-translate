'use strict';

const TinyTranslate = require('./TinyTranslate.provider.js');

angular
  .module('angular-tiny-translate.filter', [
    TinyTranslate
  ])

  /*@ngInject*/
  .filter('tr', (TinyTranslate) =>
    (id, prefix) =>
      TinyTranslate.translate(prefix, id)
  );

module.exports = 'angular-tiny-translate.filter';
