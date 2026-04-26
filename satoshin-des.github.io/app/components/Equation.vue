<script setup>
import VueMathjax from 'vue-mathjax-next';

defineProps({
    f: {
        type: String,
        required: true
    },
    inline: {
        type: Boolean,
        required: true
    }
});

useHead({
    script: [
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML',
            async: true,
        }
    ]
});
</script>

<template>
    <div v-if="inline">
        <vue-mathjax :formula="`\(${f}\)`" />
    </div>
    <div v-else>
        <vue-mathjax :formula="`$$${f}$$`" />
    </div>
</template>