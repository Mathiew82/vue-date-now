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

&nbsp;
#### Install with npm:

    npm install vue-date-now

#### or install with yarn

    yarn add vue-date-now


&nbsp;
#### Enable it in your project:

```js
import VueDateNow from 'vue-date-now';
    
Vue.use(VueDateNow);
```

&nbsp;
#### Use the available methods:

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

&nbsp;
## Documentation
    
#### Note: This documentation has been created on 2019-06-17.

&nbsp;
### Languages available for howLong and dayText methods
| Slug | Language        |
|:-----|:----------------|
| es   | Spanish         |
| en   | English         |

&nbsp;
### The monthText method supports all languages thanks to the toLocaleString() method of js

&nbsp;
### Methods

| Methods              | Parameters                                                                                                            |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------|
| this.$dn.date        | Date:Object(opcional), format:String(opcional, default = 'yyyy-mm-dd'), separator:String(opcional, default = '/')     |
| this.$dn.howLong     | Date:Object or date:String or timestamp:String, lang(opcional, default = 'en')                                        |
| this.$dn.year        | Date:Object(opcional) or date:String(opcional) or timestamp:String(opcional)                                          |
| this.$dn.month       | Date:Object(opcional) or date:String(opcional) or timestamp:String(opcional)                                          |
| this.$dn.monthText   | Date:Object(opcional) or date:String(opcional) or timestamp:String(opcional), lang(opcional, default = 'en')          |
| this.$dn.day         | Date:Object(opcional) or date:String(opcional) or timestamp:String(opcional)                                          |
| this.$dn.dayText     | Date:Object(opcional) or date:String(opcional) or timestamp:String(opcional), lang(opcional, default = 'en')          |
| this.$dn.diff        | Date:Object or date:String or timestamp:String, date:String or timestamp:String, type(opcional, default = 'days')     |
|                      | Most recent date, Less recent date, Type of result = 'seconds', 'minuts', 'hours', 'days', 'weeks', 'months', 'years' |
| this.$dn.time        | none                                                                                                                  |

&nbsp;
### How to use

```js
this.$dn.date(new Date(), 'dd-mm-yyyy', '-') // result = 17-06-2019
this.$dn.date(new Date(), 'dd-mm-yyyy') // result = 17/06/2019
this.$dn.date(new Date()) // result = 2019/06/17
this.$dn.date() // result = 2019/06/17
this.$dn.howLong(new Date('2019-04-08'), 'en') // result = A few months ago
this.$dn.howLong('2016-04-22', 'en') // result = More than a year ago
this.$dn.howLong('2019-06-17 10:56:47', 'es') // result = Hace unas horas
this.$dn.year(new Date()) // result = 2019
this.$dn.year('2016-04-22') // result = 2016
this.$dn.year('2014-04-22 22:56:47') // result = 2014
this.$dn.year() // result = 2019
this.$dn.month(new Date()) // result = 06
this.$dn.month('2016-04-22') // result = 04
this.$dn.month('2014-02-14 22:56:47') // result = 02
this.$dn.month() // result = 06
this.$dn.monthText(new Date(), 'en') // result = June
this.$dn.monthText('2016-01-22', 'es') // result = Enero
this.$dn.monthText('2014-03-22 22:56:47', 'es') // result = Marzo
this.$dn.monthText('', 'en') // result = June
this.$dn.monthText() // result = June
this.$dn.day(new Date()) // result = 2
this.$dn.day('2016-04-22') // result = 6
this.$dn.day('2014-02-14 22:56:47') // result = 3
this.$dn.day() // result = 2
this.$dn.dayText(new Date(), 'en') // result = Monday
this.$dn.dayText('2016-01-22', 'es') // result = Viernes
this.$dn.dayText('2014-03-22 22:56:47', 'es') // result = Sábado
this.$dn.dayText('', 'en') // result = Monday
this.$dn.dayText() // result = Monday
this.$dn.diff(new Date(), '2016-08-21', 'years') // result = 2.8
this.$dn.diff('2019-03-15', '2016-08-21', 'months') // result = 31.2
this.$dn.diff('2019-03-15', '2016-08-21') // result = 936.0
this.$dn.time() // result = 18:31:48
```
