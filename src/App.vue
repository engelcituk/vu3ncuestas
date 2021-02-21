<template>
  <app-navigation />
  <router-view/>
</template>
<script>
  import AppNavigation from "@/components/Navigations/AppNavigation";
  export default {
    components: {AppNavigation}
  }
</script>
