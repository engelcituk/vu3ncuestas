<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { onMounted } from 'vue'
import useSurvey from '@/composables/useSurvey'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup(){
    const {data, fetchSurveyData } = useSurvey()
    onMounted( ()=> {
      fetchSurveyData()
      console.log(data)
    })
  }
}
</script>
