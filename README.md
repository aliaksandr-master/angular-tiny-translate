[![npm](http://img.shields.io/npm/v/angular-tiny-translate.svg?style=flat-square)](https://www.npmjs.com/package/angular-tiny-translate)
[![npm](http://img.shields.io/npm/l/angular-tiny-translate.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/aliaksandr-master/angular-tiny-translate.svg?style=flat-square)](https://david-dm.org/aliaksandr-master/angular-tiny-translate)
[![devDependency Status](https://david-dm.org/aliaksandr-master/angular-tiny-translate/dev-status.svg?style=flat-square)](https://david-dm.org/aliaksandr-master/angular-tiny-translate#info=devDependencies)

angular-tiny-translate
================

## install

```
npm install angular-tiny-translate -S
```

Small modular library for translations without unused dust

```js
angular
  .module('my.app', [
    'angular-tiny-translate'
  ])

  /*@ngInject*/
  .config((TinyTranslate) => {
    TinyTranslate.translates({
      'some_prefix1': {
        'some_key1': 'some_translation1'
      },
      'some_prefix2': {
        'some_key2': 'some_translation2',
        '*': '{*} times'
      }
    })  
  })
```


```html
  <!-- someVar = 'some_key2' -->
  <h1>{{ someVar | tr: 'some_prefix2' }}</h1>
  <!-- result -->
  <h1>some_translation2</h1>
```

```html
  <!-- someVar = '5' -->
  <h1>{{ someVar | tr: 'some_prefix2' }}</h1>
  <!-- result -->
  <h1>5 times</h1>
```
