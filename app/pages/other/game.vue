<script setup lang="ts">
import { ref } from 'vue';

import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css';

import jsonData from './games.json';

import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

const columns = ref(
    [
        {
            label: "タイトル",
            field: "title",
            filterOptions: {
                enabled: true,
            }
        },
        {
            label: "発売年",
            field: "year",
        },
        {
            label: "機種", field: "machine",
            filterOptions: {
                enabled: true,
            }
        },
        {
            label: "会社", field: "company",
            filterOptions: {
                enabled: true,
            }
        },
    ]
);

const rows = ref(jsonData);

</script>

<template>
    <Header />
    <div>
        <VueGoodTable :columns="columns" :rows="rows" theme="nocturnal" />
    </div>
    <Footer />
</template>