export default {
  install (Vue, options) {
    Vue.prototype.$timer = {
      dateNow: (date, format = 'dd-mm-yyyy', separator = '/') => {
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
              result += `${DAY}${separator}`
              break
            case 'mm':
              result += `${MONTH}${separator}`
              break
            case 'yyyy':
              result += `${YEAR}${separator}`
          }
        })

        return result.slice(0, -1)
      },
      textNow: (date, lang = 'en', type = 'standard') => {
        console.log(date, lang, type)
      },
      howLong: (date, lang = 'en') => {
        const TEST = new Date().getTime() - date.getTime()

        const SECONDS = TEST / 1000
        const MINTS = SECONDS / 60
        const HOURS = MINTS / 60
        const DAYS = HOURS / 24
        const MONTHS = DAYS / 30

        console.log(new Date().getTime())
        console.log(date.getTime())
        console.log(MONTHS)
      }
    }
  }
}
