<template>

</template>

<script>
import axios from 'axios'
export default {
  name: "Redirect",

methods: { 

  redirect() {
    axios.put(this.$route.params.shortlink)
    .then(response => window.location.href = response.data.link)
    .catch((error) => {
      this.$router.push('/shorten-links')
    })
  }
  },
  beforeMount() {
    this.redirect();
  },
};
</script>