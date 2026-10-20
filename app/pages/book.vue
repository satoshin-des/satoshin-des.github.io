<script setup lang="ts">
import { ref } from 'vue';

import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css';

import jsonData from './books.json';

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
        { label: "著者", field: "author" },
        { label: "出版年", field: "year" },
        {
            label: "ジャンル",
            field: "type",
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
    <p>
        ここでは，私の読んだ本について書いていきます．
        <br>取り敢えず一覧表みたいなものを作りたいですが，そのうち簡単な感想も載せるかも
        <br>※特に数学書や理工書，技術書などの中には読了していない本が多くあります．
    </p>
    <div>
        <VueGoodTable :columns="columns" :rows="rows" theme="nocturnal" />
    </div>
    <Footer />
</template>
