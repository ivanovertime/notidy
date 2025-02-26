<script setup>
// The useWebNotification function is a composition function that returns an object
// containing two properties: isSupported and show.
//
// The isSupported property is a boolean indicating whether the Notification
// Web API is supported in the current browser.
//
// The show property is a function that takes no arguments and shows a notification
// with the specified options.
//
// The options object contains the following properties:
//
// - title: The title of the notification.
// - dir: The direction of the notification. Can be either "auto", "ltr", or "rtl".
// - lang: The language of the notification.
// - renotify: A boolean indicating whether to renotify the user if a notification
//             with the same tag already exists.
// - tag: The tag of the notification.
//
// Note that the Notification Web API is not supported in all browsers, so you
// should always check the isSupported property before calling the show function.

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
</script>

<template>
  <div>
    <p>
      Supported:
      <BooleanDisplay :value="isNotificationSupported" />
    </p>
  </div>

  <div style="margin: 5px">
    <code>npm i @vueuse/core</code>
  </div>
  <div v-if="isNotificationSupported">
    <button class="button" @click="showNotification()">
      Show Notification
    </button>

  </div>


  <div v-else>
    The Notification Web API is not supported in your browser.
  </div>
</template>

<style scoped>
.button {
  background-color: #38a169;

  /* bg-green-500 */
  &:hover {
    background-color: #2f855a;
    /* hover:bg-green-700 */
  }

  color: #fff;
  /* text-white */
  font-weight: bold;
  /* font-bold */
  padding: 0.5rem 1rem;
  /* py-2 px-4 */
  border-radius: 0.25rem;
  /* rounded */
}
</style>
