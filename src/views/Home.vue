<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>
      {{ date }}
    </p>
    <p>
      {{ textDate }}
    </p>
    <p>
      {{ howLong }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      // dateNow received 3 params: date, [format, separator]
      date: this.$dn.date(new Date(), 'dd-mm-yyyy', '-'),
      // dateNow received 1 params: date
      textDate: this.$dn.textDate(new Date()),
      // dateNow received 1 params: timestamp
      howLong: this.$dn.howLong(new Date('June 10 2019 23:11'))
    }
  }
}
</script>
