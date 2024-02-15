<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      View macOS processes with command line arguments. Other features:
    </p>
    <ul>
      <li>highlight processes with custom colors based on search string</li>
      <li>bring selected process to foreground</li>
      <li>search process information online</li>
      <li>open process path in Finder (where available)</li>
      <li>copy process path (where available)</li>
      <li>quit selected process</li>
      <li>view open files</li>
      <li>view open connections</li>
    </ul>
    <a href="/archive/ProcessSpy_1.2.1.zip" style="background-color: #42b983; padding:20px; margin-top:20px; color: white; font-size: large; font-weight: bold; font-style: normal; border-radius:25px; width:300px">Download for macOS</a>
    <br>
    <br>
    <span style="font-size: 10pt">ProcessSpy 1.2.1, Apple Silicon and Intel</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {

  list-style-type: none;
  padding: 0;
}
li {
  display: list-item;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
