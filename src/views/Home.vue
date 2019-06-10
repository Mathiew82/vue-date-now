<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>
      {{ dateNow }}
    </p>
    <p>
      {{ textNow }}
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
      dateNow: this.$timer.dateNow(new Date(), 'dd-mm-yyyy', '/'),
      textNow: this.$timer.textNow(new Date()),
      howLong: this.$timer.howLong(new Date('January 31 2019 12:30'))
    }
  }
}
</script>
