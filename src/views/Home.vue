<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>
      <b>Una fecha:</b> {{ date }}
    </p>
    <p>
      <!-- {{ dateText }} -->
    </p>
    <p>
      <b>¿Cuánto hace?</b> {{ howLong }}
    </p>
    <p>
      <b>Un año:</b> {{ year }}
    </p>
    <p>
      <b>Un mes:</b> {{ month }}
    </p>
    <p>
      <b>Un mes en texto:</b> {{ monthText }}
    </p>
    <p>
      <b>Un día:</b> {{ day }}
    </p>
    <p>
      <b>Un día en texto:</b> {{ dayText }}
    </p>
    <p>
      <b>La hora:</b> {{ time }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      // date received 3 params: (Date, date or timestamp), [format, separator]
      date: this.$dn.date(new Date(), 'dd-mm-yyyy', '-'),
      // date: this.$dn.date('2016-04-22', 'dd-mm-yyyy', '-'),
      // date: this.$dn.date('2014-04-22 22:56:47', 'dd-mm-yyyy', '-'),

      // dateText received 1 params: Date, date or timestamp
      // dateText: this.$dn.dateText(new Date()),
      // dateText: this.$dn.dateText('2016-04-22'),
      // dateText: this.$dn.dateText('2014-04-22 22:56:47'),

      // howLong received 1 params: Date, date or timestamp
      // howLong: this.$dn.howLong(new Date('2019-04-08'), 'es'),
      // howLong: this.$dn.howLong('2016-04-22', 'es'),
      howLong: this.$dn.howLong('2019-06-12 10:56:47', 'es'),

      // year received 1 params: [Date, date or timestamp]
      year: this.$dn.year(new Date()),
      // year: this.$dn.year('2016-04-22'),
      // year: this.$dn.year('2014-04-22 22:56:47'),
      // year: this.$dn.year()

      // month received 1 params: [Date, date or timestamp]
      month: this.$dn.month(new Date()),
      // month: this.$dn.month('2016-04-22'),
      // month: this.$dn.month('2014-04-22 22:56:47'),
      // month: this.$dn.month()

      // monthText received 1 params: [Date, date or timestamp]
      monthText: this.$dn.monthText(new Date(), 'es'),
      // monthText: this.$dn.monthText('2016-01-22', 'es'),
      // monthText: this.$dn.monthText('2014-03-22 22:56:47', 'es'),
      // monthText: this.$dn.monthText('', 'es'),

      // day received 1 params: [Date, date or timestamp]
      day: this.$dn.day(new Date()),
      // day: this.$dn.day('2016-04-22'),
      // day: this.$dn.day('2014-04-22 22:56:47'),
      // day: this.$dn.day()

      // dayText received 1 params: [Date, date or timestamp]
      dayText: this.$dn.dayText(new Date(), 'es'),
      // dayText: this.$dn.dayText('2016-01-22', 'es'),
      // dayText: this.$dn.dayText('2014-03-22 22:56:47', 'es'),
      // dayText: this.$dn.dayText('', 'es'),

      time: this.$dn.time()
    }
  }
}
</script>
