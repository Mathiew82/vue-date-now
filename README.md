# vue-date-now

![](images/Logo_DateNow_Vue-min.png)

Easily work with dates using the available methods.

Feel free to collaborate. I would like to expand translations, so if you dare! 🚀

[![npm](https://img.shields.io/npm/v/vue-date-now.svg)](https://www.npmjs.com/package/vue-date-now)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react.svg)](https://www.npmjs.com/package/vue-date-now)
[![npm](https://img.shields.io/npm/dt/vue-date-now.svg)](https://www.npmjs.com/package/vue-date-now)
[![dependencies Status](https://david-dm.org/Mathiew82/vue-date-now/status.svg)](https://david-dm.org/Mathiew82/vue-date-now)
[![HitCount](http://hits.dwyl.io/Mathiew82/vue-date-now.svg)](http://hits.dwyl.io/Mathiew82/vue-date-now)
[![NpmLicense](https://img.shields.io/npm/l/vue-date-now.svg)](https://www.npmjs.com/package/vue-date-now)

Install:

    npm install vue-date-now

or

    yarn add vue-date-now

Enable it in your project:

```js
import VueDateNow from 'vue-date-now';
    
Vue.use(VueDateNow);
```

Use the available methods:

```js
export default {
    name: 'app',
    data () {
        return {
            year: this.$dn.year(),
            monthText: this.$dn.monthText()
        }
    }
}
```
    
### Note: This documentation has been created on 2019-06-17.

## Methods

| Methods              | Parameters                                                                                                         |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------|
| this.$dn.date        | Date:Object(opcional), format:String(opcional, default = 'yyyy-mm-dd'), separator:String(opcional, default = '/')  |
| this.$dn.howLong     | Date:Object or date:String or timestamp:String, lang(opcional, default = 'en')                                     |
| this.$dn.year        | Date:Object(opcional) or date:String(opcional) or timestamp:String(opcional)                                       |
| this.$dn.month       | Date:Object(opcional) or date:String(opcional) or timestamp:String(opcional)                                       |
| this.$dn.monthText   | Date:Object(opcional) or date:String(opcional) or timestamp:String(opcional), lang(opcional, default = 'en')       |
| this.$dn.day         | Date:Object(opcional) or date:String(opcional) or timestamp:String(opcional)                                       |
| this.$dn.dayText     | Date:Object(opcional) or date:String(opcional) or timestamp:String(opcional), lang(opcional, default = 'en')       |
| this.$dn.time        | none                                                                                                               |


## How to use

| Example                                                        | Result                    |
|:---------------------------------------------------------------|:--------------------------|
| this.$dn.date(new Date(), 'dd-mm-yyyy', '-')                   | 17-06-2019                |
| this.$dn.date(new Date(), 'dd-mm-yyyy')                        | 17/06/2019                |
| this.$dn.date(new Date())                                      | 2019/06/17                |
| this.$dn.date()                                                | 2019/06/17                |
| this.$dn.howLong(new Date('2019-04-08'), 'en')                 | A few months ago          |
| this.$dn.howLong('2016-04-22', 'en')                           | More than a year ago      |
| this.$dn.howLong('2019-06-17 10:56:47', 'es')                  | Hace unas horas           |
| this.$dn.year(new Date())                                      | 2019                      |
| this.$dn.year('2016-04-22')                                    | 2016                      |
| this.$dn.year('2014-04-22 22:56:47')                           | 2014                      |
| this.$dn.year()                                                | 2019                      |
| this.$dn.month(new Date())                                     | 06                        |
| this.$dn.month('2016-04-22')                                   | 04                        |
| this.$dn.month('2014-02-14 22:56:47')                          | 02                        |
| this.$dn.month()                                               | 06                        |
| this.$dn.monthText(new Date(), 'en')                           | June                      |
| this.$dn.monthText('2016-01-22', 'es')                         | Enero                     |
| this.$dn.monthText('2014-03-22 22:56:47', 'es')                | Marzo                     |
| this.$dn.monthText('', 'en')                                   | June                      |
| this.$dn.monthText()                                           | June                      |
| this.$dn.day(new Date())                                       | 2                         |
| this.$dn.day('2016-04-22')                                     | 6                         |
| this.$dn.day('2014-02-14 22:56:47')                            | 3                         |
| this.$dn.day()                                                 | 2                         |
| this.$dn.dayText(new Date(), 'en')                             | Monday                    |
| this.$dn.dayText('2016-01-22', 'es')                           | Viernes                   |
| this.$dn.dayText('2014-03-22 22:56:47', 'es')                  | Sábado                    |
| this.$dn.dayText('', 'en')                                     | Monday                    |
| this.$dn.dayText()                                             | Monday                    |
| this.$dn.time()                                                | 18:31:48                  |
