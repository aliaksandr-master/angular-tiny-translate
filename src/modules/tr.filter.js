'use strict';

import TinyTranslate from './TinyTranslate.provider.js';

angular
  .module('angular-tiny-translate.filter', [
    TinyTranslate
  ])

  /*@ngInject*/
  .filter('tr', (TinyTranslates) =>
    (translationId, keyPrefix) =>
      TinyTranslates.translate(keyPrefix, translationId)
  );

export default 'angular-tiny-translate.filter';
