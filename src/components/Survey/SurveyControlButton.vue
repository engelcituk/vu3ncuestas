<template>
  <button
    :disabled="!enabled"
    :class="{'opacity-50': !enabled}"
    @click="$emit('clicked')"
    class="bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded inline-flex items-center"
  >
    <component :is="icon" />
    <slot />
  </button>
</template>

<script>
  import { computed } from "vue"
  import SurveyIconEnd from "@/components/Survey/Icons/SurveyIconEnd"
  import SurveyIconLeft from "@/components/Survey/Icons/SurveyIconLeft"
  import SurveyIconRight from "@/components/Survey/Icons/SurveyIconRight"
  import SurveyIconStart from "@/components/Survey/Icons/SurveyIconStart"
  export default {
      name: "SurveyControlButton",
      emits: ["clicked"],
      components: {
          SurveyIconEnd, SurveyIconLeft, SurveyIconRight, SurveyIconStart,
      },
      props: {
          isLeft: {
              type: Boolean,
              default: false,
          },
          isRight: {
              type: Boolean,
              default: false,
          },
          isStart: {
              type: Boolean,
              default: false,
          },
          isEnd: {
              type: Boolean,
              default: false,
          },
          enabled: {
              type: Boolean,
              default: true,
          }
      },
      setup(props) {
          const icon = computed(() => {
              if (props.isStart) return "survey-icon-start";
              if (props.isLeft) return "survey-icon-left";
              if (props.isRight) return "survey-icon-right";
              if (props.isEnd) return "survey-icon-end";
          })
          return { icon };
      }
  }
</script>
