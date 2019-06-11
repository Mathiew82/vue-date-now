export default {
  install (Vue) {
    Vue.prototype.$dn = {
      date: (date, format = 'dd-mm-yyyy', separator = '/') => {
        const YEAR = date.getFullYear()
        let month = date.getMonth()
        let day = date.getDate()

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
      dateText: (date, lang = 'en', type = 'standard') => {
        console.log(date, lang, type)
      },
      howLong: (date, lang = 'en') => {
        const LANG_TEXTS = require(`../languages/${lang}.js`).texts
        // TODO -- Being able to receive different parameters
        const DIFFERENCE = new Date().getTime() - date.getTime()

        const SECONDS = DIFFERENCE / 1000
        const MINUTS = SECONDS / 60
        const HOURS = MINUTS / 60
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
        } else if (MINUTS >= 1 && HOURS < 1) {
          result = LANG_TEXTS.howLongMinut
        } else if (SECONDS >= 1 && MINUTS < 1) {
          result = LANG_TEXTS.howLongSecond
        }

        return result
      },
      year: (dateOrTimestamp = '') => {
        if (typeof dateOrTimestamp === 'object') {
          return dateOrTimestamp.getFullYear()
        }
        else if (typeof dateOrTimestamp === 'string') {
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
          result = result < 10 ? `0${result}` : result
          return result
        }
        else if (typeof dateOrTimestamp === 'string') {
          if (dateOrTimestamp.length >= 10) {
            let result = new Date(dateOrTimestamp).getMonth() + 1
            result = result < 10 ? `0${result}` : result
            return result
          } else {
            let result = new Date().getMonth() + 1
            result = result < 10 ? `0${result}` : result
            return result
          }
        }
      },
      monthText: function (dateOrTimestamp = '', lang = 'en') {
        const MONTH = this.month(dateOrTimestamp)
        const RESULT = new Date(`2019-${MONTH}-01`).toLocaleString(lang, { month: 'long' })
        const RESULT_CAPITALIZED = RESULT.charAt(0).toUpperCase() + RESULT.slice(1)

        return RESULT_CAPITALIZED
      },
      day: () => console.log('This is the day'),
      dayText: () => console.log('This is the text of de day'),
      time: () => console.log('This is the time')
    }
  }
}
