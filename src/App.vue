<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  padding: 60px;
  color: #8d8d8d;
  .error {
    color: #ff0000;
  }
  h1 {
    color: #1a1a1a;
  }
  .form-container {
    margin: 0 auto;
    width: 400px;

    .form-control {
      margin-top: 40px;
      margin-bottom: 40px;

      label {
        display: block;
        text-align: left;
        cursor: pointer;
      }
      input,
      select {
        width: 100%;
      }
      input[type='radio'] {
        width: auto;
      }
    }
  }

  button {
    border-radius: 5px;
    padding: 16px 60px;
    cursor: pointer;
    margin: 10px;
    background-color: #ffffff;
    color: #1a1a1a;
    &.default {
      background-color: #1a1a1a;
      color: #ffffff;
    }
  }
  .container {
    padding: 60px;
    text-align: center;

    &.gray {
      background-color: #fafafa;
    }
    &.p10 {
      padding: 10px;
    }
  }
}
</style>
