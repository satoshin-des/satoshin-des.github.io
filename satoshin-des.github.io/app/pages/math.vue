<script setup lang="ts">
import { ref } from 'vue';

import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Equation from '~/components/Equation.vue';
</script>

<template>
    <Header />
    <Equation :f="'x+y+z'" :inline="true" />
    <Footer />
</template>
