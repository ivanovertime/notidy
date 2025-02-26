<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>


    <pre><code>
       import { useWebNotification } from '@vueuse/core'

       const options = {
         title: 'Hello, world from VueUse!',
         dir: 'auto',
         lang: 'en',
         renotify: true,
         tag: 'test',
       }

       const {
         isSupported: isNotificationSupported,
         show: showNotification,
       } = useWebNotification(options)
    </code></pre>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
