(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.VueDateNow = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  exports.default = {
    addZero: function addZero(value) {
      return value < 10 ? '0' + value : value.toString();
    },
    install: function install(Vue) {
      var _this = this;

      Vue.prototype.$dn = {
        date: function date() {
          var _date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

          var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
          var separator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';

          var YEAR = _date.getFullYear();
          var month = _date.getMonth() + 1;
          var day = _date.getDate();

          var MONTH = month < 10 ? '0' + month : month;
          var DAY = day < 10 ? '0' + day : day;

          var FORMAT_DATE = format.split('-');
          var result = '';

          FORMAT_DATE.forEach(function (formatItem) {
            switch (formatItem) {
              case 'dd':
                result += '' + DAY + separator;break;
              case 'mm':
                result += '' + MONTH + separator;break;
              case 'yyyy':
                result += '' + YEAR + separator;
            }
          });

          return result.slice(0, -1);
        },
        howLong: function howLong(dateOrTimestamp) {
          var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

          var LANG_TEXTS = require('../languages/' + lang + '.js').texts;

          var difference = null;

          if ((typeof dateOrTimestamp === 'undefined' ? 'undefined' : _typeof(dateOrTimestamp)) === 'object') {
            difference = new Date().getTime() - dateOrTimestamp.getTime();
          } else {
            difference = new Date().getTime() - new Date(dateOrTimestamp).getTime();
          }

          var SECONDS = difference / 1000;
          var MINUTES = SECONDS / 60;
          var HOURS = MINUTES / 60;
          var DAYS = HOURS / 24;
          var WEEKS = DAYS / 7;
          var MONTHS = DAYS / 30;
          var YEARS = MONTHS / 12;

          var result = '';

          if (YEARS >= 1) {
            result = LANG_TEXTS.howLongYear;
          } else if (MONTHS >= 1 && YEARS < 1) {
            result = LANG_TEXTS.howLongMonth;
          } else if (WEEKS >= 1 && MONTHS < 1) {
            result = LANG_TEXTS.howLongWeek;
          } else if (DAYS >= 1 && MONTHS < 1) {
            result = LANG_TEXTS.howLongDay;
          } else if (HOURS >= 1 && DAYS < 1) {
            result = LANG_TEXTS.howLongHour;
          } else if (MINUTES >= 1 && HOURS < 1) {
            result = LANG_TEXTS.howLongMinut;
          } else if (SECONDS >= 1 && MINUTES < 1) {
            result = LANG_TEXTS.howLongSecond;
          }

          return result;
        },
        year: function year() {
          var dateOrTimestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if ((typeof dateOrTimestamp === 'undefined' ? 'undefined' : _typeof(dateOrTimestamp)) === 'object') {
            return dateOrTimestamp.getFullYear();
          } else if (typeof dateOrTimestamp === 'string') {
            if (dateOrTimestamp.length >= 10) {
              return new Date(dateOrTimestamp).getFullYear();
            } else {
              return new Date().getFullYear();
            }
          }
        },
        month: function month() {
          var dateOrTimestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if ((typeof dateOrTimestamp === 'undefined' ? 'undefined' : _typeof(dateOrTimestamp)) === 'object') {
            var result = dateOrTimestamp.getMonth() + 1;
            result = _this.addZero(result);
            return result;
          } else if (typeof dateOrTimestamp === 'string') {
            if (dateOrTimestamp.length >= 10) {
              var _result = new Date(dateOrTimestamp).getMonth() + 1;
              _result = _this.addZero(_result);
              return _result;
            } else {
              var _result2 = new Date().getMonth() + 1;
              _result2 = _this.addZero(_result2);
              return _result2;
            }
          }
        },
        monthText: function monthText() {
          var dateOrTimestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

          if ((typeof dateOrTimestamp === 'undefined' ? 'undefined' : _typeof(dateOrTimestamp)) === 'object') {
            var RESULT = dateOrTimestamp.toLocaleString(lang, { month: 'long' });
            var RESULT_CAPITALIZED = RESULT.charAt(0).toUpperCase() + RESULT.slice(1);
            return RESULT_CAPITALIZED;
          } else if (typeof dateOrTimestamp === 'string') {
            if (dateOrTimestamp.length >= 10) {
              var _RESULT = new Date(dateOrTimestamp).toLocaleString(lang, { month: 'long' });
              var _RESULT_CAPITALIZED = _RESULT.charAt(0).toUpperCase() + _RESULT.slice(1);
              return _RESULT_CAPITALIZED;
            } else {
              var _RESULT2 = new Date().toLocaleString(lang, { month: 'long' });
              var _RESULT_CAPITALIZED2 = _RESULT2.charAt(0).toUpperCase() + _RESULT2.slice(1);
              return _RESULT_CAPITALIZED2;
            }
          }
        },
        day: function day() {
          var dateOrTimestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if ((typeof dateOrTimestamp === 'undefined' ? 'undefined' : _typeof(dateOrTimestamp)) === 'object') {
            var RESULT = dateOrTimestamp.getDay() + 1;
            return RESULT;
          } else if (typeof dateOrTimestamp === 'string') {
            if (dateOrTimestamp.length >= 10) {
              var _RESULT3 = new Date(dateOrTimestamp).getDay() + 1;
              return _RESULT3;
            } else {
              var _RESULT4 = new Date().getDay() + 1;
              return _RESULT4;
            }
          }
        },
        dayText: function dayText() {
          var dateOrTimestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

          var DAY = this.day(dateOrTimestamp) - 1;
          var LANG_DAYS = require('../languages/' + lang + '.js').texts.days;

          return LANG_DAYS[DAY];
        },
        diff: function diff(dateOrTimestamp1, dateOrTimestamp2) {
          var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'days';

          var firstDate = null;

          if ((typeof dateOrTimestamp1 === 'undefined' ? 'undefined' : _typeof(dateOrTimestamp1)) === 'object') {
            firstDate = dateOrTimestamp1.getTime();
          } else if (typeof dateOrTimestamp1 === 'string') {
            firstDate = new Date(dateOrTimestamp1).getTime();
          }

          var SECOND_DATE = new Date(dateOrTimestamp2).getTime();
          var difference = firstDate - SECOND_DATE;

          var result = '';

          if (type === 'seconds') {
            result = difference / 1000;
          } else if (type === 'minuts') {
            result = difference / 60000;
          } else if (type === 'hours') {
            result = difference / 3600000;
          } else if (type === 'days') {
            result = difference / 86400000;
          } else if (type === 'weeks') {
            result = difference / 604800000;
          } else if (type === 'months') {
            result = difference / 2592000000;
          } else if (type === 'years') {
            result = difference / 31536000000;
          }

          return result.toFixed(1);
        },
        time: function time() {
          var DATE = new Date();
          var HOURS = _this.addZero(DATE.getHours());
          var MINUTES = _this.addZero(DATE.getMinutes());
          var SECONDS = _this.addZero(DATE.getSeconds());

          return HOURS + ':' + MINUTES + ':' + SECONDS;
        }
      };
    }
  };
  module.exports = exports['default'];
});