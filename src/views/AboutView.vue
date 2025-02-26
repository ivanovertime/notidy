<template>


  <div>
    <p>
      The <code>useWebNotification</code> function is a composition function that
      returns an object containing two properties: <code>isSupported</code> and
      <code>show</code>.
    </p>
    <p>
      The <code>isSupported</code> property is a boolean indicating whether the
      Notification Web API is supported in the current browser.
    </p>
    <p>
      The <code>show</code> property is a function that takes no arguments and shows
      a notification with the specified options.
    </p>
    <p>
      The options object contains the following properties:
    </p>
    <ul>
      <li>
        <code>title</code>: The title of the notification.
      </li>
      <li>
        <code>dir</code>: The direction of the notification. Can be either
        <code>"auto"</code>, <code>"ltr"</code>, or <code>"rtl"</code>.
      </li>
      <li>
        <code>lang</code>: The language of the notification.
      </li>
      <li>
        <code>renotify</code>: A boolean indicating whether to renotify the user
        if a notification with the same tag already exists.
      </li>
      <li>
        <code>tag</code>: The tag of the notification.
      </li>
    </ul>
    <p>
      Note that the Notification Web API is not supported in all browsers, so you
      should always check the <code>isSupported</code> property before calling the
      <code>show</code> function.
    </p>
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
