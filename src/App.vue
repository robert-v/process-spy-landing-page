<template>
  <div class="relative overflow-hidden container mx-auto bg-emerald-100 max-w-7xl">
    <header class="h-50 flex items-center p-4">
      <div class="flex items-center grow">
        <img alt="Vue logo" src="./assets/logo.png" class="object-none object-center w-20 h-20 rounded-3xl">
        <h1 class="invisible sm:visible text-3xl font-bold">ProcessSpy</h1>
      </div>
      <div class="flex flex-col text-center">
        <a href="/archive/ProcessSpy_1.2.1.zip" class="bg-emerald-500 px-4 font-bold text-xl mt-4 md:text-2xl w-48 sm:w-64 place-self-end sm:place-self-auto" style=" padding:12px; color: white; border-radius:25px;">Download Free</a>
        <span class="text-xs mt-1" style="font-size: 10pt">v1.2.1, Apple Silicon and Intel</span>
      </div>
    </header>

    <div class="md:flex mt-4 max-w-7xl">
       <div class="md:shrink-0 md:w-1/3 p-4">
         <h1 class="text-6xl mt-6 text-left font-extrabold">View all macOS processes</h1>
         <p class="mt-8">
           View macOS processes with <b>command line arguments</b>. Other features:
         </p>

         <div class="justify-items-start mt-6 text-left">
           <ul class="bg-blend-saturation list-none">
             <li><b>highlight</b> processes with custom colors based on search string</li>
             <li><b>bring</b> selected process <b>to foreground</b></li>
             <li><b>search</b> process information <b>online</b></li>
             <li><b>open</b> process path in <b>Finder</b> (where available)</li>
             <li><b>copy</b> process path (where available)</li>
             <li><b>quit</b> selected process</li>
             <li>view <b>open files</b></li>
             <li>view <b>open connections</b></li>
           </ul>
         </div>
       </div>

      <div class="mt-5 w-full p-4">
        <img src="./assets/screenshot_1.png" class="rounded-2xl">
      </div>

    </div>

    <footer class="mt-20 mb-10 font-bold text-center">
      <span class="mr-6">© 2024 ProcessSpy</span>
      <span>Made by <a href="https://twitter.com/rob3rth" target="_blank">@rob3rth</a></span>
    </footer>

    <HelloWorld msg="ProcessSpy"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
