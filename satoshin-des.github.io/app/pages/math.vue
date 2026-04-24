<script setup lang="ts">
import { ref } from 'vue';

import VueMathjax from 'vue-mathjax-next'

import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

const formula = '$$x^2 + y^2 = z^2$$';
</script>

<template>
    <Header />
    <vue-mathjax :formula="formula" />
    <Footer />
</template>
