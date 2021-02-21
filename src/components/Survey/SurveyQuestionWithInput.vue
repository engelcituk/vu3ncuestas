<template>
  <div class="mb-4 text-xs">
    <h3 class="text-lg">{{ question.question }}</h3>
    <component
      :is="component"
      :question="question"
      @updated="updated"
    />
  </div>
</template>

<script>
  import { ref } from "vue";
  import SurveyRadio from "@/components/Survey/SurveyRadioInput";
  import SurveyTextArea from "@/components/Survey/SurveyTextArea";
  export default {
      name: "SurveyQuestionWithInput",
      components: {
          SurveyRadio, SurveyTextArea,
      },
      props: ["question"],
      emits: ["update:result"],
      setup(props, {emit}) {
          const component = ref("survey-radio");

          if (!props.question.hasOwnProperty("options")) {
              component.value = "survey-text-area";
          }

          const updated = (value) => {
              emit("update:result", value)
          }

          return { component, updated };
      }
  }
</script>
