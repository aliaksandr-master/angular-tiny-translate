'use strict';

import TinyTranslate from './modules/TinyTranslate.provider';
import TrFilter from './modules/tr.filter';

angular
  .module('angular-tiny-translate', [
    TrFilter,
    TinyTranslate
  ]);

export default 'angular-tiny-translate';
