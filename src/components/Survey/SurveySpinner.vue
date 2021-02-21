<template>
  <div class="w-full h-32 relative block bg-white opacity-75 z-50">
    <div class="text-red-900 opacity-75 top-5 right-7 my-0 mx-auto block relative w-0 h-0">
      <div class="inline-block animate-spin ease duration-300 w-10 h-10 rounded mx-2">
        <svg class="text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SurveySpinner",
  }
</script>
