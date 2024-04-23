<template>
  <div class="relative overflow-hidden container mx-auto bg-emerald-100 max-w-7xl">
    <header class="h-50 flex items-center p-4">
      <div class="flex items-center grow">
        <img alt="Vue logo" src="./assets/logo.png" class="object-none object-center w-20 h-20 rounded-3xl">
        <h1 class="invisible sm:visible text-3xl font-bold">ProcessSpy</h1>
      </div>
      <div class="flex flex-col text-center">
        <a @click='storeDownload' href="/archive/ProcessSpy_1.3.5.dmg" class="bg-emerald-500 px-4 font-bold text-xl mt-4 md:text-2xl w-48 sm:w-64 place-self-end sm:place-self-auto" style=" padding:12px; color: white; border-radius:25px;">Download Free</a>
        <span class="text-xs mt-1" style="font-size: 10pt">v1.3.5, Apple Silicon and Intel, macOS 10.15+</span>
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
             <li>
               <b>highlight</b> processes with custom colors based on search string</li>
             <li>
               <b>bring</b> selected process <b>to foreground</b></li>
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

    <div class="text-center mt-20 mb-10 text-4xl p-4">
      <h1 class="font-extrabold">Search processes instantly</h1>
      <p class="text-2xl mb-10">Fast real-time search.</p>
        <video crossorigin controls playsinline autoplay loop class="mx-auto rounded-lg w-full" height="400">
          <source
              src="/videos/search_macos_processes_instantly%202.mov"
              type="video/mp4"
          />
        </video>
    </div>

    <div class="md:flex max-w-7xl mt-20">
      <div class="w-450 p-4">
        <img src="./assets/screenshot_2.png" class="rounded-2xl">
      </div>
      <div class="md:shrink-0 md:w-1/3 p-4 text-left w-full ml-10">
        <h1 class="text-4xl font-bold mb-10">Useful context menu actions</h1>
        <p>Bring application to foreground</p>
        <p>Search process information online</p>
        <p>Show process path in Finder</p>
        <p>Copy Path or whole Command</p>
        <p>Quit process (SIGINT)</p>
      </div>
    </div>

    <div class="md:flex max-w-7xl text-center mt-20">
      <div class="w-full md:shrink-0 md:w-1/3 p-4 text-left">
        <h1 class="text-4xl font-bold mb-10">Highlight processes with custom colors</h1>
        <p>Choose any color to highlight process <b>Name</b> in the process table</p>
        <p>Works also for <b>Command</b> column</p>
        </div>
      <div class="w-450 p-4">
        <img src="./assets/screenshot_3.png" class="rounded-2xl object-cover">
      </div>
    </div>

    <div class="text-center mt-20 mb-10 p-4">
      <h1 class="font-extrabold text-4xl">View open files and access them instantly</h1>
      <p class="text-2xl mb-10">Open files with your favourite tool</p>
      <img src="./assets/screenshot_4.png" class="rounded-2xl object-cover">
    </div>

    <footer class="mt-20 mb-10 font-bold text-center">
      <div class="container mt-10 items-center justify-center mb-6">
        <div>
          <span class="block">If you like this tool, you can buy me a coffee:</span>
        </div>
        <div class="flex text-center justify-center mt-6">
          <div class="w-32 h-32">
            <a href="https://www.buymeacoffee.com/rob3rth" target="_blank">
              <img src="./assets/bmc_qr.png" class="rounded-2xl w-32 h-32">
            </a>
          </div>
        </div>
      </div>
      <span class="mr-6">© 2024 ProcessSpy</span>
      <span>Made with ❤️ by <a href="https://twitter.com/rob3rth" target="_blank">@rob3rth</a></span>

    </footer>

    <HelloWorld msg="ProcessSpy"/>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'

function storeDownload(){
  fetch("https://process-spy-backend.vercel.app/api/downloads", {
    method: "POST",
    body: ''
    });
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
