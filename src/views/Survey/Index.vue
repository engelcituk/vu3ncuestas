<template>
  <survey-layout>
    <template #title>
      <survey-title
        v-if="currentSurveyData"
        :title="currentSurveyData.title"
        :subtitle="currentSurveyData.subtitle"
      />
    </template>

    <survey-spinner v-if="loading" />

    <div v-if="canShowQuestions">
      <survey-question-with-input
        v-for="(question, index) in currentSurveyData.questions"
        :key="index"
        v-model:result="question.result"
        :question="question"
      />
    </div>

    <survey-results
      v-if="showEnd"
      :results="data"
    />

    <template #actionButtons>
      <survey-action-buttons
        v-if="!loading"
        :enabled-next-button="enabledNextButton"
        :show-end="showEnd"
        :show-left="showLeft"
        :show-start="showStart"
        :can-show-questions="canShowQuestions"
        @nextStep="nextStep"
        @prevStep="prevStep"
        @start="start"
      />
    </template>

  </survey-layout>
</template>

<script>
  import {onMounted} from "vue"
  import useSurvey from "@/composables/useSurvey";
  import SurveyLayout from "@/layouts/SurveyLayout";
  import SurveySpinner from "@/components/Survey/SurveySpinner";
  import SurveyActionButtons from "@/components/Survey/SurveyActionButtons";
  import SurveyTitle from "@/components/Survey/SurveyTitle";
  import SurveyQuestionWithInput from "@/components/Survey/SurveyQuestionWithInput";
  import SurveyResults from "@/components/Survey/SurveyResults";
  export default {
    name: "Survey",
    components: {SurveyResults, SurveyQuestionWithInput, SurveyTitle, SurveySpinner, SurveyLayout, SurveyActionButtons},
    setup() {
      const {
        fetchSurveyData, showLeft, showStart, showEnd, currentSurveyData,
        loading, enabledNextButton, data, canShowQuestions,
        prevStep, nextStep, start
      } = useSurvey();

      onMounted(() => {
        fetchSurveyData();
      });

      return {
        fetchSurveyData, showLeft, showStart, showEnd, currentSurveyData,
        loading, enabledNextButton, data, canShowQuestions,
        prevStep, nextStep, start
      };
    }
  }
</script>
