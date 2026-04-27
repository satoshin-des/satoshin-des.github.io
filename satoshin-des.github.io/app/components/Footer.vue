<script setup lang="ts">
import { ref } from 'vue';

const today = new Date();
const currentYear = ref(today.getFullYear());
</script>

<template>
    <footer>
        <p>
            Copyright © 2024 - {{ currentYear }} さとしん All Rights Reserved.
        </p>
    </footer>
</template>
