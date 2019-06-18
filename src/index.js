export default {
  addZero (value) {
    return value < 10 ? `0${value}` : value.toString()
  },
  install (Vue) {
    Vue.prototype.$dn = {
      date: (date, format = 'yyyy-mm-dd', separator = '/') => {
        const DATE = !date ? new Date() : date

        const YEAR = DATE.getFullYear()
        let month = DATE.getMonth() + 1
        let day = DATE.getDate()

        const MONTH = month < 10 ? `0${month}` : month
        const DAY = day < 10 ? `0${day}` : day

        const FORMAT_DATE = format.split('-')
        let result = ''

        FORMAT_DATE.forEach(formatItem => {
          switch (formatItem) {
            case 'dd':
              result += `${DAY}${separator}`; break
            case 'mm':
              result += `${MONTH}${separator}`; break
            case 'yyyy':
              result += `${YEAR}${separator}`
          }
        })

        return result.slice(0, -1)
      },
      howLong: (dateOrTimestamp = '', lang = 'en') => {
        const LANG_TEXTS = require(`../languages/${lang}.js`).texts

        let difference = null

        if (typeof dateOrTimestamp === 'object') {
          difference = new Date().getTime() - dateOrTimestamp.getTime()
        } else {
          difference = new Date().getTime() - new Date(dateOrTimestamp).getTime()
        }

        const SECONDS = difference / 1000
        const MINUTES = SECONDS / 60
        const HOURS = MINUTES / 60
        const DAYS = HOURS / 24
        const WEEKS = DAYS / 7
        const MONTHS = DAYS / 30
        const YEARS = MONTHS / 12

        let result = ''

        if (YEARS >= 1) {
          result = LANG_TEXTS.howLongYear
        } else if (MONTHS >= 1 && YEARS < 1) {
          result = LANG_TEXTS.howLongMonth
        } else if (WEEKS >= 1 && MONTHS < 1) {
          result = LANG_TEXTS.howLongWeek
        } else if (DAYS >= 1 && MONTHS < 1) {
          result = LANG_TEXTS.howLongDay
        } else if (HOURS >= 1 && DAYS < 1) {
          result = LANG_TEXTS.howLongHour
        } else if (MINUTES >= 1 && HOURS < 1) {
          result = LANG_TEXTS.howLongMinut
        } else if (SECONDS >= 1 && MINUTES < 1) {
          result = LANG_TEXTS.howLongSecond
        }

        return result
      },
      year: (dateOrTimestamp = '') => {
        if (typeof dateOrTimestamp === 'object') {
          return dateOrTimestamp.getFullYear()
        } else if (typeof dateOrTimestamp === 'string') {
          if (dateOrTimestamp.length >= 10) {
            return new Date(dateOrTimestamp).getFullYear()
          } else {
            return new Date().getFullYear()
          }
        }
      },
      month: (dateOrTimestamp = '') => {
        if (typeof dateOrTimestamp === 'object') {
          let result = dateOrTimestamp.getMonth() + 1
          result = this.addZero(result)
          return result
        } else if (typeof dateOrTimestamp === 'string') {
          if (dateOrTimestamp.length >= 10) {
            let result = new Date(dateOrTimestamp).getMonth() + 1
            result = this.addZero(result)
            return result
          } else {
            let result = new Date().getMonth() + 1
            result = this.addZero(result)
            return result
          }
        }
      },
      monthText: function (dateOrTimestamp = '', lang = 'en') {
        if (typeof dateOrTimestamp === 'object') {
          const RESULT = dateOrTimestamp.toLocaleString(lang, { month: 'long' })
          const RESULT_CAPITALIZED = RESULT.charAt(0).toUpperCase() + RESULT.slice(1)
          return RESULT_CAPITALIZED
        } else if (typeof dateOrTimestamp === 'string') {
          if (dateOrTimestamp.length >= 10) {
            const RESULT = new Date(dateOrTimestamp).toLocaleString(lang, { month: 'long' })
            const RESULT_CAPITALIZED = RESULT.charAt(0).toUpperCase() + RESULT.slice(1)
            return RESULT_CAPITALIZED
          } else {
            const RESULT = new Date().toLocaleString(lang, { month: 'long' })
            const RESULT_CAPITALIZED = RESULT.charAt(0).toUpperCase() + RESULT.slice(1)
            return RESULT_CAPITALIZED
          }
        }
      },
      day: (dateOrTimestamp = '') => {
        if (typeof dateOrTimestamp === 'object') {
          const RESULT = dateOrTimestamp.getDay() + 1
          return RESULT
        } else if (typeof dateOrTimestamp === 'string') {
          if (dateOrTimestamp.length >= 10) {
            const RESULT = new Date(dateOrTimestamp).getDay() + 1
            return RESULT
          } else {
            const RESULT = new Date().getDay() + 1
            return RESULT
          }
        }
      },
      dayText: function (dateOrTimestamp = '', lang = 'en') {
        const DAY = this.day(dateOrTimestamp) - 1
        const LANG_DAYS = require(`../languages/${lang}.js`).texts.days

        return LANG_DAYS[DAY]
      },
      time: () => {
        let DATE = new Date()
        let HOURS = this.addZero(DATE.getHours())
        let MINUTES = this.addZero(DATE.getMinutes())
        let SECONDS = this.addZero(DATE.getSeconds())

        return `${HOURS}:${MINUTES}:${SECONDS}`
      }
    }
  }
}
