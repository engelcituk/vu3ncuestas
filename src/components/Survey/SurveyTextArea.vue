<template>
  <textarea
    class="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    :value="question.result"
    @input="$emit('updated', $event.target.value)"
  />
</template>

<script>
  export default {
      name: "SurveyTextArea",
      props: ["question"],
      emits: ["updated"],
  }
</script>
