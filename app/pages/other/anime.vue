<script setup lang="ts">
import { ref } from 'vue';

import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css';
import jsonData from './animes.json';

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
            label: "原作",
            field: "author",
            filterOptions: {
                enabled: true,
            }
        },
        { label: "初放送", field: "year" },
        { label: "会社", field: "company" },
    ]
);

const sortOpt = ref({
    enabled: true,
    initialSortBy: {
        field: 'title',
        type: 'asc',
    }
});

const rowss = ref(jsonData);
</script>

<template>
    <Header />
    <div>
        <VueGoodTable :columns="columns" :rows="rowss" theme="nocturnal" :sort-options="sortOpt" />
    </div>
    <Footer />
</template>