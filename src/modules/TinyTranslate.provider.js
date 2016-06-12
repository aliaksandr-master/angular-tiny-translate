'use strict';

angular
  .module('angular-tiny-translate.provider', [

  ])

  /*@ngInject*/
  .provider('TinyTranslate', () => {
    const TinyTranslate = {};
    const cache = {};
    const translationsDefault = {};
    const DEFAULT_KEY = '*';
    const DEFAULT_KEY_EXP = /\{\*}/g;




    const translate = (prefix, id, emptyHandler = null) => {
      const translationId = `${prefix}.${id}`;

      if (cache.hasOwnProperty(translationId)) {
        return cache[translationId];
      }

      let result = null;

      if (translationsDefault.hasOwnProperty(prefix)) {
        const _def = translationsDefault[prefix];

        result = angular.isFunction(_def) ? _def(id) : translationsDefault[prefix].replace(DEFAULT_KEY_EXP, id);
      } else {
        result = angular.isFunction(emptyHandler) ? emptyHandler(prefix, id) : '';
      }

      cache[translationId] = result;

      return result;
    };

    TinyTranslate.$get = () => ({ translate });





    TinyTranslate.translations = (_translations) => {
      angular.forEach(_translations, (translations, prefix) => {
        if (translations == null || !angular.isObject(translations)) {
          throw new TypeError('invalid translation hash table format');
        }

        angular.forEach(translations, (translation, id) => {
          if (!angular.isString(translation)) {
            throw new TypeError('invalid translation type');
          }

          if (id === DEFAULT_KEY) {
            translationsDefault[prefix] = translation;
          } else {
            cache[`${prefix}.${id}`] = translation;
          }
        });
      });
    };

    return TinyTranslate;
  });

module.exports = 'angular-tiny-translate.provider';
