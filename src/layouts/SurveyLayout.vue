<template>
    <main class="bg-white max-w-lg mx-auto px-8 pt-8 my-4 rounded-lg shadow-2xl">
        <slot name="title"/>

        <section>
            <slot/>
        </section>

        <footer class="mt-10 pb-0">
            <slot name="actionButtons"/>
        </footer>

    </main>
</template>
<script>
export default {
    name:'SurveyLayout',

}
</script>
