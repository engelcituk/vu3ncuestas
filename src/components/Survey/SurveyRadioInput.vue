<template>
  <label
    class="inline-flex items-center mt-3"
    v-for="(val, key) in question.options"
    :key="key"
  >
    <input
      type="radio"
      class="form-radio h-5 w-5 text-gray-600 ml-2"
      :checked="String(question.result) === String(val)"
      :value="val"
      @input="$emit('updated', $event.target.value)"
    />
    <span class="ml-2 text-gray-700">{{ val }}</span>
  </label>
</template>

<script>
  export default {
      name: "SurveyRadioInput",
      props: ["question"],
      emits: ["updated"],
  }
</script>
