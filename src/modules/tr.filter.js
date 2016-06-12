'use strict';

const TinyTranslate = require('./TinyTranslate.provider.js');

angular
  .module('angular-tiny-translate.filter', [
    TinyTranslate
  ])

  /*@ngInject*/
  .filter('tr', (TinyTranslate, $log) =>
    (id, prefix) =>
      TinyTranslate.translate(prefix, id, (prefix, id) => {
        $log.error(`invalid translation ID "${prefix}${id}"`);

        return '';
      })
  );

module.exports = 'angular-tiny-translate.filter';
