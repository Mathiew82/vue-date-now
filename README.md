# vue-date-now

![](images/Logo_DateNow_Vue-min.png)

Easily work with dates using the available method.

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

Very soon I will add the documentation

