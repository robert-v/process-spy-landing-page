<template>
  <div class="relative container mx-auto bg-gray-50 max-w-7xl p-6 rounded-lg shadow-md">

    <header class="sticky top-0 z-50 bg-gray-50/90 h-50 flex items-center p-4 border-b border-gray-300 backdrop-blur-sm">

    <div class="flex items-center grow">
        <img alt="ProcessSpy logo" src="./assets/logo.png" class="-ml-2" style="width:80px; height:auto" >
        <span class="invisible sm:visible text-3xl font-extrabold text-blue-900 ml-3">ProcessSpy</span>
      </div>
      <div class="flex flex-col items-center text-center mt-4">
        <a
            @click="storeDownload"
            :href="'/archive/ProcessSpy_' + latest_version + '.dmg'"
            rel="nofollow"
            class="bg-blue-900 hover:bg-yellow-500 text-white font-semibold text-lg sm:text-xl px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 w-48 sm:w-64 text-center"
        >
          Free Download
        </a>
        <span class="text-xs mt-1 text-gray-500">
        v{{ latest_version }}, macOS 14+, Apple Silicon & Intel
      </span>
        <span class="text-xs text-gray-500">
        Apple-notarized .app in .dmg (~3MB)
      </span>
      </div>
    </header>

    <div class="md:flex mt-8 max-w-7xl">
      <div class="md:shrink-0 md:w-1/3 p-6">
        <h1 class="text-5xl sm:text-6xl font-extrabold text-blue-900 leading-tight">
          Monitor macOS Processes
          <span class="text-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Like a Pro.</span>
        </h1>
        <p class="mt-6 text-gray-700 text-lg">
          In-depth monitoring with advanced features:
        </p>
        <ul class="mt-6 text-gray-600 list-disc list-inside space-y-2">
          <li><b class="text-blue-900">Highlight</b> processes with custom colors</li>
          <li>View environment variables</li>
          <li>View <b class="text-blue-900">open files</b></li>
          <li>View <b class="text-blue-900">open connections</b></li>
          <li>Run macOS <b class="text-blue-900">Shortcuts</b> on process start/finish</li>
          <li>Get macOS process <b class="text-blue-900">with mouse click</b></li>
          <li>Advanced <b class="text-blue-900">Javascript filters</b></li>
        </ul>
      </div>

      <div class="mt-6 md:mt-0 md:w-2/3 flex justify-center">
        <img alt="In-depth macOS process monitoring" src="./assets/main.png" class="rounded-2xl md:mt-5 ml-4 max-w-full h-auto">
      </div>
    </div>

    <div class="mt-24 px-4 text-center max-w-4xl mx-auto">
      <h2 class="text-3xl font-extrabold text-blue-900 mb-4">Designed for macOS</h2>
      <p class="text-lg text-gray-600">
        ProcessSpy uses native APIs and UI elements to deliver a fast, responsive, and Mac-first experience. No bloated cross-platform layers — just smooth performance and tight system integration.
      </p>
    </div>

    <div class="mt-20">
      <h2 class="text-4xl font-extrabold text-center text-blue-900 mb-12">
        More Powerful Features
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0 max-w-7xl mx-auto">
        <!-- Feature 1 -->
        <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-200 flex flex-col">
          <div class="overflow-hidden rounded-xl mb-4">
            <img src="./assets/ProcessSpy_Tree_Structure.png" alt="Detailed Tree View" class="w-full h-auto object-cover">
          </div>
          <h3 class="text-xl font-bold text-blue-900 mb-2">Detailed Tree View</h3>
          <p class="text-gray-600">
            ProcessSpy offers detailed tree view with the same real-time filtering and search capabilities as the main view. You can also use the same filters to highlight processes in the tree view.
          </p>
        </div>


        <!-- Feature 2 -->
        <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-200">
          <img src="./assets/javascript_filters.png" alt="Javascript filters" class="rounded-lg mb-4 w-full h-auto">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Javascript Filters</h3>
          <p class="text-gray-600">
            Filters can be defined in Javascript, allowing you to create complex filters with multiple conditions.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-200">
          <img src="./assets/version_information.png" alt="Version information" class="rounded-lg mb-4 w-full h-auto">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Version Information</h3>
          <p class="text-gray-600">
            ProcessSpy shows the version information of the process right in the main table.
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-200">
          <img src="./assets/useful_context_menu_actions.png" alt="Useful context menu actions" class="rounded-lg mb-4 w-full h-auto">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Useful context menu actions</h3>
          <p class="text-gray-600">
            Main table, open files, open connections and Dylibs all offer context menus with useful actions: Show in Finder, copy path, search process online, etc.
          </p>
        </div>

        <!-- Feature 4 -->
        <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-200">
          <img src="./assets/advanced_info.png" alt="Advanced process info - Info.plist, bundle id, executable" class="rounded-lg mb-4 w-full h-auto">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Advanced Process Info (paid)</h3>
          <p class="text-gray-600">
            With just a one click it is possible to view advanced information like entitlements, Info.plist, and bundle ID, etc.
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-200">
          <img src="./assets/process_environment_variables.png" alt="Environment variables" class="rounded-lg mb-4 w-full h-auto">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Environment variables (paid)</h3>
          <p class="text-gray-600">
            License also unlocks the ability to view environment variables of the process.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-24 max-w-5xl mx-auto px-4 text-center">
      <h2 class="text-4xl font-extrabold text-blue-900 mb-6">
        Why I Built ProcessSpy
      </h2>
      <p class="text-lg text-gray-700 leading-relaxed">
        I was juggling several Java apps, each using a different JDK version — and I couldn’t tell which process was which in Activity Monitor.
        All I saw was “java”. No version, no path, no details.
        <br class="hidden sm:inline" />
        So I built <span class="font-semibold text-blue-900">ProcessSpy</span> — a developer-focused tool that shows full command-line info,
        version details, environment variables, and more. I hope you will find it as useful as I do.
        <br class="hidden sm:inline" />
        -Robert
      </p>
    </div>

    <div class="mt-16 max-w-5xl mx-auto px-4">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-blue-900 text-center mb-8">
        How ProcessSpy Compares
      </h2>

      <div class="overflow-x-auto">
        <table class="min-w-full table-auto border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <thead>
          <tr class="bg-blue-900 text-white text-left">
            <th class="p-4 font-semibold">Feature</th>
            <th class="p-4 font-semibold">Activity Monitor</th>
            <th class="p-4 font-semibold">ProcessSpy</th>
          </tr>
          </thead>
          <tbody class="text-gray-700">
          <tr class="bg-gray-50 border-gray-200">
            <td class="p-4">See full command-line & path</td>
            <td class="p-4">❌</td>
            <td class="p-4">✅</td>
          </tr>
          <tr class="bg-gray-50 border-t border-gray-200">
            <td class="p-4">Distinguish between same-named processes</td>
            <td class="p-4">❌</td>
            <td class="p-4">✅ Shows versions and paths</td>
          </tr>
          <tr class="bg-white border-t border-gray-200">
            <td class="p-4">Entitlements, Info.plist, Bundle ID</td>
            <td class="p-4">❌</td>
            <td class="p-4">✅ (paid)</td>
          </tr>
          <tr class="bg-white border-t border-gray-200">
            <td class="p-4">Environment variables</td>
            <td class="p-4">❌</td>
            <td class="p-4">✅ (paid)</td>
          </tr>
          <tr class="bg-white border-t border-gray-200">
            <td class="p-4">Signature info</td>
            <td class="p-4">❌</td>
            <td class="p-4">✅ (paid)</td>
          </tr>
          <tr class="bg-gray-50 border-t border-gray-200">
            <td class="p-4">Advanced filters (JS-based)</td>
            <td class="p-4">❌</td>
            <td class="p-4">✅</td>
          </tr>
          <tr class="bg-gray-50 border-t border-gray-200">
            <td class="p-4">Run Shortcuts on process events</td>
            <td class="p-4">❌</td>
            <td class="p-4">✅</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>


    <div class="mt-24 max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-extrabold text-blue-900 text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- FAQ Tile 1 -->
        <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200">
          <h3 class="text-lg font-semibold text-blue-900 mb-3">
            Is ProcessSpy safe to install on my Mac?
          </h3>
          <p class="text-gray-600">
            Yes. ProcessSpy is Apple-notarized and distributed as a signed `.app` inside a `.dmg`. It’s verified and safe to use on both Intel and Apple Silicon Macs.
          </p>
        </div>

        <!-- FAQ Tile 2 -->
        <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200">
          <h3 class="text-lg font-semibold text-blue-900 mb-3">
            Does ProcessSpy support older versions of macOS?
          </h3>
          <p class="text-gray-600">
            ProcessSpy is designed for macOS 14 and newer. Support for earlier versions is not guaranteed and may be limited.
          </p>
        </div>

        <!-- FAQ Tile 3 -->
        <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200">
          <h3 class="text-lg font-semibold text-blue-900 mb-3">
            What is the license model?
          </h3>
          <p class="text-gray-600">
            Most features are free to use. Some advanced features (e.g., viewing entitlements or environment variables) may require a license. Details will be shown in the app.
          </p>
        </div>

        <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200">
          <h3 class="text-lg font-semibold text-blue-900 mb-3">
            Is there a trial or free version available?
          </h3>
          <p class="text-gray-600">
            ProcessSpy offers a fully functional free version with core features. Certain advanced capabilities require a license purchase.
          </p>
        </div>

        <!-- FAQ Tile 4 -->
        <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200">
          <h3 class="text-lg font-semibold text-blue-900 mb-3">
            Are there any limitations in free version?
          </h3>
          <p class="text-gray-600">
            Free version shows wait screen with 10 seconds countdown during each startup. After dismissing the screen the tool is fully functional.
          </p>
        </div>

        <!-- FAQ Tile 4 -->
        <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200">
          <h3 class="text-lg font-semibold text-blue-900 mb-3">
            Does ProcessSpy affect system performance?
          </h3>
          <p class="text-gray-600">
            ProcessSpy is designed to be lightweight and efficient. It uses minimal CPU and memory, so it won’t slow down your Mac during monitoring.
          </p>
        </div>

        <!-- Add more tiles as needed -->
      </div>
    </div>



    <div class="mt-24 mb-16 px-4 text-center">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-blue-900 leading-tight">
        Trusted by <span class="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">{{ downloads }}</span> users.
      </h2>
      <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Join developers, power users, and system administrators using ProcessSpy to monitor macOS processes with precision and clarity.
      </p>

      <div class="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
            @click="storeDownload"
            :href="'/archive/ProcessSpy_' + latest_version + '.dmg'"
            class="bg-blue-900 hover:bg-yellow-500 text-white font-semibold text-lg sm:text-xl px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 w-64 text-center"
        >
          Download Now
        </a>
        <span class="text-gray-500 text-sm sm:text-base">macOS 14+, Apple Silicon & Intel</span>
      </div>
    </div>

    <div class="flex flex-col items-center text-center mt-16 mb-24 px-4">
      <h3 class="text-xl sm:text-2xl font-bold text-blue-900">
        Prefer the Terminal?
      </h3>
      <p class="mt-2 text-gray-600 mb-4">
        Install ProcessSpy quickly via Homebrew:
      </p>

      <div class="w-full max-w-md">
        <VCodeBlock
            code="brew install --cask processspy"
            highlightjs
            lang="shell"
            theme="monokai"
        />
      </div>
    </div>


    <footer class="mt-20 mb-16 px-6 py-8 bg-gray-50 text-gray-600 font-semibold text-center sm:text-left max-w-7xl mx-auto rounded-lg shadow-inner">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
        <div>
          <span>© 2025 ProcessSpy</span>
          <span class="mx-2 hidden sm:inline">|</span>
          <span>
        Created with <span class="text-red-500">❤️</span> by
        <a href="https://twitter.com/rob3rth" target="_blank" rel="noopener" class="underline text-yellow-500 hover:text-yellow-400 font-semibold">@rob3rth</a>
        <span class="text-2xl align-middle" aria-label="European Union flag" role="img">🇪🇺</span>
      </span>
        </div>

        <div class="flex flex-wrap justify-center sm:justify-start gap-6 text-sm sm:text-base">
          <a href="/eula.html" target="_blank" rel="noopener" class="underline hover:text-yellow-500 transition-colors duration-200">License Agreement</a>
          <a href="/privacy_policy.html" target="_blank" rel="noopener" class="underline hover:text-yellow-500 transition-colors duration-200">Privacy Policy</a>
          <a href="/archive/release_notes.html" target="_blank" rel="noopener" class="underline hover:text-yellow-500 transition-colors duration-200">Release Notes</a>
          <span>
        Support:
        <a href="mailto:processspy@icloud.com" class="underline text-yellow-500 hover:text-yellow-400 transition-colors duration-200">
          processspy@icloud.com
        </a>
      </span>
        </div>
      </div>
    </footer>

    <HelloWorld msg="ProcessSpy" />
  </div>


</template>

<script>
  import axios from 'axios';
  import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    components: {HelloWorld},
    async created() {
      const data = await axios.get(`https://backend.process-spy.app/api/downloads`)
      if (data) {
        this.downloads = data.data.message;
      }
    },
    methods: {
      storeDownload: function(){
        fetch("https://backend.process-spy.app/api/downloads", {
          method: "POST",
          body: ''
        });
      }
    },
    data() {
      return {
        downloads: null,
        latest_version: "1.7.5"
      }
    }
  }

  window.addEventListener('load', () => {
    if (window.location.search) {
      const url = new URL(window.location.href)
      const cleanUrl = url.origin + url.pathname + url.hash
      window.history.replaceState({}, '', cleanUrl)
    }
  })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
