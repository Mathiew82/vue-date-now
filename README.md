# vue-date-now

![](images/Logo_DateNow_Vue-min.png)

Easily work with dates using the available methods.

Feel free to collaborate. I would like to expand translations, so if you dare! 🚀

[![npm](https://img.shields.io/npm/v/vue-date-now.svg)](https://www.npmjs.com/package/vue-date-now)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react.svg)](https://www.npmjs.com/package/vue-date-now)
[![npm](https://img.shields.io/npm/dt/vue-date-now.svg)](https://www.npmjs.com/package/vue-date-now)
[![NpmLicense](https://img.shields.io/npm/l/vue-date-now.svg)](https://www.npmjs.com/package/vue-date-now)

Install:

    npm install vue-date-now

or

    yarn add vue-date-now

Enable it in your project:

    import VueDateNow from 'vue-date-now';
    
    Vue.use(VueDateNow);

Use the available methods:

    export default {
      name: 'app',
      data () {
        return {
          year: this.$dn.year(new Date()),
          monthText: this.$dn.monthText(new Date())
        }
      }
    }
    
## Methods

### Note: This documentation has been created on 2019-06-17.

| Methods              | Parameters                                 | How to use                                                     | Result                    |
|:---------------------|:-------------------------------------------|:---------------------------------------------------------------|:--------------------------|
| this.$dn.date        | Date(Object), format(o), separator(o)      | this.$dn.date(new Date(), 'dd-mm-yyyy', '/')                   | 17/06/2019                |
| this.$dn.howLong     | Date(Object) or date(String) or            | this.$dn.howLong(new Date('2019-04-08'), 'en')                 | A few months ago          |
|                      | timestamp(String), lang(o)                 | this.$dn.howLong('2016-04-22', 'en')                           | More than a year ago      |
|                      |                                            | this.$dn.howLong('2019-06-17 10:56:47', 'es')                  | Hace unas horas           |
| this.$dn.year        | Date(Object)(o) or date(String)(o) or      | this.$dn.year(new Date())                                      | 2019                      |
|                      | timestamp(String)(o)                       | this.$dn.year('2016-04-22')                                    | 2016                      |
|                      |                                            | this.$dn.year('2014-04-22 22:56:47')                           | 2014                      |
|                      |                                            | this.$dn.year()                                                | 2019                      |
| this.$dn.month       | Date(Object)(o) or date(String)(o) or      | this.$dn.month(new Date())                                     | 06                        |
|                      | timestamp(String)(o)                       | this.$dn.month('2016-04-22')                                   | 04                        |
|                      |                                            | this.$dn.month('2014-02-14 22:56:47')                          | 02                        |
|                      |                                            | this.$dn.month()                                               | 06                        |
| this.$dn.monthText   | Date(Object)(o) or date(String)(o) or      | this.$dn.monthText(new Date(), 'en')                           | June                      |
|                      | timestamp(String)(o), lang(o)              | this.$dn.monthText('2016-01-22', 'es')                         | Enero                     |
|                      |                                            | this.$dn.monthText('2014-03-22 22:56:47', 'es')                | Marzo                     |
|                      |                                            | this.$dn.monthText('', 'en')                                   | June                      |
|                      |                                            | this.$dn.monthText()                                           | June                      |
| this.$dn.day         | Date(Object)(o) or date(String)(o) or      | this.$dn.day(new Date())                                       | 2                         |
|                      | timestamp(String)(o)                       | this.$dn.day('2016-04-22')                                     | 6                         |
|                      |                                            | this.$dn.day('2014-02-14 22:56:47')                            | 3                         |
|                      |                                            | this.$dn.day()                                                 | 2                         |
| this.$dn.dayText     | Date(Object)(o) or date(String)(o) or      | this.$dn.dayText(new Date(), 'en')                             | Monday                    |
|                      | timestamp(String)(o), lang(o)              | this.$dn.dayText('2016-01-22', 'es')                           | Viernes                   |
|                      |                                            | this.$dn.dayText('2014-03-22 22:56:47', 'es')                  | Sábado                    |
|                      |                                            | this.$dn.dayText('', 'en')                                     | Monday                    |
|                      |                                            | this.$dn.dayText()                                             | Monday                    |
| this.$dn.time        |                                            | this.$dn.time()                                                | 18:31:48                  |

Legend: (o) = Opcional
