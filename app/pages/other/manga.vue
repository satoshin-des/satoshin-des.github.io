<script setup lang="ts">
import { ref } from 'vue';

import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css';

import jsonData from './mangas.json';

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
            label: "著者",
            field: "author",
            filterOptions: {
                enabled: true,
            }
        },
        { label: "出版年", field: "year" },
        { label: "出版社", field: "company" },
    ]
);

const rows = ref(jsonData);
</script>

<template>
    <Header />
    <p>
        ここでは，私の読んだ漫画について書いていきます．
    </p>
    <div>
        <VueGoodTable :columns="columns" :rows="rows" theme="nocturnal" />
    </div>
    <Footer />
</template>