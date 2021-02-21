<template>
  <section class="text-teal-400">
    <h2 class="font-bold text-2xl">{{ title }}</h2>
    <p class="text-gray-600 pt-2">{{ subtitle }}</p>
  </section>
</template>

<script>
  export default {
      name: "SurveyTitle",
      props: ["title", "subtitle"],
  }
</script>
