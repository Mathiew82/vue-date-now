export default {
  addZero (value) {
    return value < 10 ? `0${value}` : value.toString()
  },
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
      howLong: (dateOrTimestamp = '', lang = 'en') => {
        // const LANG_TEXTS = require(`../languages/${lang}.js`).texts

        // let difference = null

        // >>> bug error

        // if (typeof dateOrTimestamp === 'object') {
        //   difference = dateOrTimestamp.getTime() - dateOrTimestamp.getTime()
        // }
        // else if (typeof dateOrTimestamp === 'string') {
        //   if (dateOrTimestamp.length >= 10) {
        //     difference = new Date(dateOrTimestamp).getTime() - dateOrTimestamp.getTime()
        //   } else {
        //     difference = new Date().getTime() - dateOrTimestamp.getTime()
        //   }
        // }

        // const SECONDS = difference / 1000
        // const MINUTES = SECONDS / 60
        // const HOURS = MINUTES / 60
        // const DAYS = HOURS / 24
        // const WEEKS = DAYS / 7
        // const MONTHS = DAYS / 30
        // const YEARS = MONTHS / 12

        // let result = ''

        // if (YEARS >= 1) {
        //   result = LANG_TEXTS.howLongYear
        // } else if (MONTHS >= 1 && YEARS < 1) {
        //   result = LANG_TEXTS.howLongMonth
        // } else if (WEEKS >= 1 && MONTHS < 1) {
        //   result = LANG_TEXTS.howLongWeek
        // } else if (DAYS >= 1 && MONTHS < 1) {
        //   result = LANG_TEXTS.howLongDay
        // } else if (HOURS >= 1 && DAYS < 1) {
        //   result = LANG_TEXTS.howLongHour
        // } else if (MINUTES >= 1 && HOURS < 1) {
        //   result = LANG_TEXTS.howLongMinut
        // } else if (SECONDS >= 1 && MINUTES < 1) {
        //   result = LANG_TEXTS.howLongSecond
        // }

        // return result

        return 'esto es para que no pete'
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
          result = this.addZero(result)
          return result
        }
        else if (typeof dateOrTimestamp === 'string') {
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
        const MONTH = this.month(dateOrTimestamp)
        const RESULT = new Date(`2019-${MONTH}-01`).toLocaleString(lang, { month: 'long' })
        const RESULT_CAPITALIZED = RESULT.charAt(0).toUpperCase() + RESULT.slice(1)

        return RESULT_CAPITALIZED
      },
      day: () => console.log('This is the day'),
      dayText: () => console.log('This is the text of de day'),
      time: () => {
        let date = new Date()
        let hours = this.addZero(date.getHours())
        let minutes = this.addZero(date.getMinutes())
        let seconds = this.addZero(date.getSeconds())

        return `${hours}:${minutes}:${seconds}`
      }
    }
  }
}
