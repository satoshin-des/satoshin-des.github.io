<script setup lang="ts">
import { ref } from 'vue';

import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css';

import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

import jsonData from './extensions.json';

const columns = ref(
    [
        {
            label: "拡張子",
            field: "name",
            filterOptions: {
                enabled: true,
            }
        },
        { label: "何の略", field: "abbr" },
        {
            label: "使い道",
            field: "how-to-use",
            filterOptions: {
                enabled: true,
            }
        },
        { label: "仲良し度", field: "fav" },
    ]
);
const rows = ref(jsonData);
</script>

<template>
    <Header />
    <p>
        ここでは，私のお世話になっている（またはお世話になっていた）拡張子をまとめてあります．
    </p>
    <div>
        <VueGoodTable :columns="columns" :rows="rows" theme="nocturnal" />
    </div>
    <Footer />
</template>