<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  em,
  i {
    font-style: normal;
  }
  img {
    border: 0;
    vertical-align: middle;
  }
  .button {
    cursor: pointer;
  }
  .color {
    background-color: #f5f5f5;
  }
  .bule {
    background-color: #2f71bd;
  }
  .white {
    background-color: #ffffff;
  }
  .boxshadow {
    box-shadow: 0px 0px 3px 3px #e2e3e3;
  }
  button,
  input {
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, '\5B8B\4F53', sans-serif;
    border: 0;
    outline: none;
  }
  .clearfix:before,
  .clearfix:after {
    content: '';
    display: table;
  }

  .clearfix:after {
    clear: both;
  }

  .clearfix {
    *zoom: 1;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
}
</style>
