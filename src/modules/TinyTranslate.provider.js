'use strict';

angular
  .module('angular-tiny-translate.provider', [

  ])

  /*@ngInject*/
  .provider('TinyTranslate', ($log) => {
    const Translate = {};
    const cache = {};
    const translationsDefault = {};
    const DEFAULT_KEY = '*';
    const DEFAULT_KEY_EXP = /\{\*}/g;




    const translate = (prefix, id) => {
      const translationId = `${prefix}.${id}`;

      if (cache.hasOwnProperty(translationId)) {
        return cache[translationId];
      }

      let result = null;

      if (translationsDefault.hasOwnProperty(prefix)) {
        const _def = translationsDefault[prefix];

        if (angular.isFunction(_def)) {
          result = _def(id);
        } else {
          result = translationsDefault[prefix].replace(DEFAULT_KEY_EXP, id);
        }
      } else {
        $log.error(`invalid translation ID ${translationId}`);

        result = '';
      }

      cache[translationId] = result;

      return result;
    };

    Translate.$get = () => ({ translate });





    Translate.translations = (_translations) => {
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

    return Translate;
  });

export default 'angular-tiny-translate.provider';
