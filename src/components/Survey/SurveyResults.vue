<template>
  <h1 class="text-4xl mb-6">Resultados de tu encuesta</h1>
  <div
    v-for="(block, index) in results"
    :key="index"
  >
    <div
      v-if="block.questions"
      class="mb-4 text-xs"
    >
      <h2 class="text-2xl mb-2">{{ block.title }}</h2>
      <p
        v-for="question in block.questions"
        :key="question.question"
        class="h-5"
      >
        {{ question.question }} <b>{{ question.result }}</b>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
      name: "SurveyResults",
      props: ["results"],
  }
</script>
