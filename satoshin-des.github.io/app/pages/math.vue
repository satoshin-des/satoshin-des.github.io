<script setup lang="ts">
import VueMathjax from 'vue-mathjax'

import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

const formula = '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$';
</script>

<template>
    <Header />
    <vue-mathjax :formula="formula"></vue-mathjax>
    <Footer />
</template>
