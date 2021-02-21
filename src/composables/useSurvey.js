import {computed, reactive, toRefs} from "vue"
import {fetchSurvey} from "@/api/mock"

export default function () {

  /**
   * datos de la encuesta
   */
  const survey = reactive({
    data: null,
    loading: true,
    step: 0,
    lastStep: 0,
  });

  /**
   * Obtenemos los datos de la encuesta
   */
  const fetchSurveyData = async () => {
      survey.data = await fetchSurvey();
      survey.lastStep = survey.data.length;
      survey.loading = false;
  };

  /**
   * Bloque de la encuesta en el paso actual
   */
  const currentSurveyData = computed(() => {
      if (survey.data) {
        return survey.data[survey.step];
      }
  });

  /**
   * ¿Mostramos el botón anterior?
   */
  const showLeft = computed(() => {
    return survey.step > 1 && !showEnd.value
  });

  /**
   * ¿Mostramos el final de la encuesta?
   */
  const showEnd = computed(() => {
    return survey.step === survey.lastStep
  });

  /**
   * ¿Mostramos el inicio de la encuesta?
   */
  const showStart = computed(() => {
    return survey.step === 0
  });

  /**
   * ¿Podemos mostrar preguntas?
   */
  const canShowQuestions = computed(() => {
    // si el step actual es igual al último no mostramos preguntas
    if (survey.step === survey.lastStep) return false;

    return !survey.loading &&
      currentSurveyData &&
      currentSurveyData.value.questions
  });

  /**
   * Vamos al siguiente paso
   */
  const nextStep = () => {
    survey.loading = true;
    timeout(() => {
      survey.step++;
      survey.loading = false
    })
  };

  /**
   * Vamos al anterior paso
   */
  const prevStep = () => {
    survey.loading = true;
    timeout(() => {
      survey.step--;
      survey.loading = false
    })
  };

  /**
   * Iniciamos la encuesta
   */
  const start = () => {
    survey.loading = true;
    timeout(() => {
      survey.step = 1;
      survey.loading = false
    })
  };

  /**
   * ¿Habilitamos el botón siguiente? ¡Validación!
   */
  const enabledNextButton = computed(() => {
    // si el step actual es igual al último no habilitamos next button
    if (survey.step === survey.lastStep) return false;

    let enabled = true;

    if (currentSurveyData && currentSurveyData.value.questions) {
      currentSurveyData.value.questions.map(s => {
        if (!s.result) enabled = false
      })
    }

    return enabled;
  });

  return {
    ...toRefs(survey), fetchSurveyData, currentSurveyData,
    showLeft, showEnd, showStart, canShowQuestions,
    nextStep, prevStep, start, enabledNextButton,
  };
}

const timeout = (fn) => setTimeout(fn, 500);
