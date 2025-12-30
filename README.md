# vue-date-now

![Logo](logo.png)

Easily work with dates using the available methods.

Feel free to collaborate. I would like to expand translations, so if you dare! 🚀

[![npm](https://img.shields.io/npm/v/vue-date-now.svg)](https://www.npmjs.com/package/vue-date-now)
[![npm](https://img.shields.io/npm/dt/vue-date-now.svg)](https://www.npmjs.com/package/vue-date-now)
![GitHub](https://img.shields.io/github/license/Mathiew82/vue-date-now)

&nbsp;

#### Install with npm:

    npm install vue-date-now

#### or install with yarn

    yarn add vue-date-now

&nbsp;

#### Enable it in your project:

```js
import VueDateNow from "vue-date-now";

Vue.use(VueDateNow);
```

&nbsp;

#### Use the available methods:

```js
export default {
  name: "app",
  data() {
    return {
      year: this.$dn.year(),
      monthText: this.$dn.monthText(),
    };
  },
};
```

&nbsp;

## Documentation

### Notes:

&nbsp;&nbsp;&nbsp;&nbsp;This documentation has been created on 2019-06-17.

&nbsp;&nbsp;&nbsp;&nbsp;The monthText method supports all languages thanks to the toLocaleString() method of js

&nbsp;

### Languages available for _howLong_ and _dayText_ methods:

| Slug | Language |
| :--- | :------- |
| es   | Spanish  |
| en   | English  |

&nbsp;

### Methods

---

#### @ date()

##### # Parameters (3)

##### &nbsp;&nbsp;&nbsp;&nbsp;1. # date

- Required: false
- Type: Date Object
- Default: new Date()
- Description: You can specify the date by passing this parameter with an instance of the Date object.

##### &nbsp;&nbsp;&nbsp;&nbsp;2. # format

- Required: false
- Type: String
- Default: 'yyyy-mm-dd'
- Description: You can specify the format by passing it a string.

##### &nbsp;&nbsp;&nbsp;&nbsp;3. # separator

- Required: false
- Type: String
- Default: '/'
- Description: You can specify the separator by passing it a string.

##### $ How to use

```js
this.$dn.date(new Date(), "dd-mm-yyyy", "-"); // result = 17-06-2019
this.$dn.date(new Date(), "dd-mm-yyyy"); // result = 17/06/2019
this.$dn.date(new Date()); // result = 2019/06/17
this.$dn.date(); // result = 2019/06/17
```

---

#### @ howLong()

##### # Parameters (2)

##### &nbsp;&nbsp;&nbsp;&nbsp;1. # date

- Required: true
- Type: Date Object || date String || timestamp String
- Description: It is required to specify the date to obtain the time since then.

##### &nbsp;&nbsp;&nbsp;&nbsp;2. # language

- Required: false
- Type: String
- Default: 'en'
- Description: You can specify the language by passing it a string.

##### $ How to use

```js
this.$dn.howLong(new Date("2019-04-08"), "en"); // result = A few months ago
this.$dn.howLong("2016-04-22", "en"); // result = More than a year ago
this.$dn.howLong("2019-06-17 10:56:47", "es"); // result = Hace unas horas
```

---

#### @ year()

##### # Parameters (1)

##### &nbsp;&nbsp;&nbsp;&nbsp;1. # date

- Required: false
- Type: Date Object || date String || timestamp String
- Default: ''
- Description: You can specify the date by passing this parameter with an instance of the Date object.

##### $ How to use

```js
this.$dn.year(new Date()); // result = 2019
this.$dn.year("2016-04-22"); // result = 2016
this.$dn.year("2014-04-22 22:56:47"); // result = 2014
this.$dn.year(); // result = 2019
```

---

#### @ month()

##### # Parameters (1)

##### &nbsp;&nbsp;&nbsp;&nbsp;1. # date

- Required: false
- Type: Date Object || date String || timestamp String
- Default: ''
- Description: You can specify the date by passing this parameter with an instance of the Date object.

##### $ How to use

```js
this.$dn.month(new Date()); // result = 06
this.$dn.month("2016-04-22"); // result = 04
this.$dn.month("2014-02-14 22:56:47"); // result = 02
this.$dn.month(); // result = 06
```

---

#### @ monthText()

##### # Parameters (2)

##### &nbsp;&nbsp;&nbsp;&nbsp;1. # date

- Required: false
- Type: Date Object || date String || timestamp String
- Default: ''
- Description: You can specify the date by passing this parameter with an instance of the Date object.

##### &nbsp;&nbsp;&nbsp;&nbsp;2. # language

- Required: false
- Type: String
- Default: 'en'
- Description: You can specify the language by passing it a string.

##### $ How to use

```js
this.$dn.monthText(new Date(), "en"); // result = June
this.$dn.monthText("2016-01-22", "es"); // result = Enero
this.$dn.monthText("2014-03-22 22:56:47", "es"); // result = Marzo
this.$dn.monthText("", "en"); // result = June
this.$dn.monthText(); // result = June
```

---

#### @ day()

##### # Parameters (1)

##### &nbsp;&nbsp;&nbsp;&nbsp;1. # date

- Required: false
- Type: Date Object || date String || timestamp String
- Default: ''
- Description: You can specify the date by passing this parameter with an instance of the Date object.

##### $ How to use

```js
this.$dn.day(new Date()); // result = 2
this.$dn.day("2016-04-22"); // result = 6
this.$dn.day("2014-02-14 22:56:47"); // result = 3
this.$dn.day(); // result = 2
```

---

#### @ dayText()

##### # Parameters (2)

##### &nbsp;&nbsp;&nbsp;&nbsp;1. # date

- Required: false
- Type: Date Object || date String || timestamp String
- Default: ''
- Description: You can specify the date by passing this parameter with an instance of the Date object.

##### &nbsp;&nbsp;&nbsp;&nbsp;2. # language

- Required: false
- Type: String
- Default: 'en'
- Description: You can specify the language by passing it a string.

##### $ How to use

```js
this.$dn.dayText(new Date(), "en"); // result = Monday
this.$dn.dayText("2016-01-22", "es"); // result = Viernes
this.$dn.dayText("2014-03-22 22:56:47", "es"); // result = Sábado
this.$dn.dayText("", "en"); // result = Monday
this.$dn.dayText(); // result = Monday
```

---

#### @ diff()

##### # Parameters (3)

##### &nbsp;&nbsp;&nbsp;&nbsp;1. # date

- Required: true
- Type: Date Object || date String || timestamp String
- Description: It is required to specify the most current date of the comparison.

##### &nbsp;&nbsp;&nbsp;&nbsp;2. # date

- Required: true
- Type: date String || timestamp String
- Description: It is required to specify the oldest date of comparison.

##### &nbsp;&nbsp;&nbsp;&nbsp;3. # type

- Required: false
- Type: String
- Default: 'days'
- Available values: 'seconds', 'minuts', 'hours', 'days', 'weeks', 'months', 'years'
- Description: You can specify the type of data to return.

##### $ How to use

```js
this.$dn.diff(new Date(), "2016-08-21", "years"); // result = 2.8
this.$dn.diff("2019-03-15", "2016-08-21", "months"); // result = 31.2
this.$dn.diff("2019-03-15", "2016-08-21"); // result = 936.0
```

---

#### @ time()

##### # Parameters (0)

##### &nbsp;&nbsp;&nbsp;&nbsp;0. # without parameters

##### $ How to use

```js
this.$dn.time(); // result = 18:31:48
```

---
