export default {
  install (Vue, options) {
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
      textDate: (date, lang = 'en', type = 'standard') => {
        console.log(date, lang, type)
      },
      howLong: (date, lang = 'en') => {
        const TEST = new Date().getTime() - date.getTime()

        const SECONDS = TEST / 1000
        const MINUTS = SECONDS / 60
        const HOURS = MINUTS / 60
        const DAYS = HOURS / 24
        const WEEKS = DAYS / 7
        const MONTHS = DAYS / 30
        const YEARS = MONTHS / 12

        let result = ''

        if (YEARS >= 1) {
          result = 'Hace más de un año'
        } else if (MONTHS >= 1 && YEARS < 1) {
          result = 'Hace más de un mes'
        } else if (WEEKS >= 1 && MONTHS < 1) {
          result = 'Hace más de un mes'
        } else if (DAYS >= 1 && MONTHS < 1) {
          result = 'Hace unos días'
        } else if (HOURS >= 1 && DAYS < 1) {
          result = 'Hace unas horas'
        } else if (MINUTS >= 1 && HOURS < 1) {
          result = 'Hace unos minutos'
        } else if (SECONDS >= 1 && MINUTS < 1) {
          result = 'Hace unos segundos'
        }

        return result
      },
      year: () => console.log('Este es el año'),
      month: () => console.log('Este es el mes'),
      day: () => console.log('Este es el día'),
      time: () => console.log('Esta es la hora')
    }
  }
}
