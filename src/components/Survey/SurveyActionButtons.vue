<template>
  <div class="relative h-12 w-full">

    <div v-if="showLeft" class="absolute bottom-0 left-0 h-16 w-16">
      <survey-control-button
        :is-left="true"
        @clicked="$emit('prevStep')"
      />
    </div>

    <div v-if="canShowQuestions" class="absolute bottom-0 right-0 h-16 w-16">
      <survey-control-button
        :enabled="enabledNextButton"
        :is-right="true"
        @clicked="$emit('nextStep')"
      />
    </div>

    <div v-if="showStart" class="text-center mt-10 mb-0 w-full">
      <survey-control-button
        :is-start="true"
        @clicked="$emit('start')"
      >
        INICIAR ENCUESTA
      </survey-control-button>
    </div>

    <div v-if="showEnd" class="text-center mt-10 mb-0 w-full">
      <survey-control-button
        :is-end="true"
      >
        ¡GRACIAS POR TU TIEMPO!
      </survey-control-button>
    </div>

  </div>
</template>

<script>
  import SurveyControlButton from "@/components/Survey/SurveyControlButton"
  export default {
      name: "SurveyActionButtons",
      components: { SurveyControlButton },
      props: ["showLeft", "showEnd", "enabledNextButton", "showStart", "canShowQuestions"],
      emits: ["nextStep", "prevStep", "start"],
  }
</script>
