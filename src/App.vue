<template>
  <div class="relative overflow-hidden container mx-auto bg-emerald-100 mb-10">
    <header class="h-50 flex items-center">
      <div class="flex items-center grow">
        <img alt="Vue logo" src="./assets/logo.png" class="object-none object-center w-20 h-20 rounded-3xl">
        <h1 class="text-3xl font-bold">ProcessSpy</h1>
      </div>
      <div class="flex flex-col">
        <a href="/archive/ProcessSpy_1.2.1.zip" class="bg-emerald-500 px-4 w45 font-bold text-2xl mt-4" style=" padding:12px; color: white; border-radius:25px;">Download Free</a>
        <span class="text-xs mt-1" style="font-size: 10pt">ProcessSpy 1.2.1, Apple Silicon and Intel</span>
      </div>
    </header>

    <div class="flex flex-row mt-10">
       <div class="w-1/3 flex flex-col text-left mt-3">
         <h1 class="text-6xl mt-6 text-left font-extrabold">View all macOS processes</h1>
         <p class="mt-8">
           View macOS processes with <b>command line arguments</b>. Other features:
         </p>

         <div class="justify-items-start mt-6 text-left">
           <ul class="bg-blend-saturation list-decimal">
             <li>highlight processes with custom colors based on search string</li>
             <li>bring selected process to foreground</li>
             <li>search process information online</li>
             <li>open process path in Finder (where available)</li>
             <li>copy process path (where available)</li>
             <li>quit selected process</li>
             <li>view open files</li>
             <li>view open connections</li>
           </ul>
         </div>


       </div>
      <div class="mt-5 w-full flex-wrap text-left ml-12 h-30">
        <img src="./assets/screenshot_1.png" class="rounded-2xl">
      </div>

    </div>

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
  text-align: center;
  color: #2c3e50;
}
</style>
