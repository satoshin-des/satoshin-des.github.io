<script setup lang="ts">
import { ref } from 'vue';

import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css';

import jsonDataLang from './langs.json';
import jsonDataLib from './libs.json';

import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Section from '~/components/Section.vue';
import SubSection from '~/components/SubSection.vue';

const columns_lang = ref(
    [
        { label: '言語', field: 'name' },
        { label: 'デビュー年', field: 'year', type: 'number' },
        {
            label: '使用場面',
            field: 'scene',
            filterOptions: {
                enabled: true,
            }
        },
        { label: '使いやすさ', field: 'ease' },
    ]
);
const rows_lang = ref(jsonDataLang);
const columns_lib = ref(
    [
        { label: 'ライブラリ', field: 'name' },
        { label: 'デビュー年', field: 'year', type: 'number' },
        {
            label: '言語',
            field: 'lang',
            filterOptions: {
                enabled: true,
            }
        },
        {
            label: '使用場面',
            field: 'scene',
            filterOptions: {
                enabled: true,
            }
        },
        { label: '使いやすさ', field: 'ease' },
    ]
);
const rows_lib = ref(jsonDataLib);
</script>

<template>
    <Header />

    <Section>使ってる言語について</Section>
    <p>取り敢えずgithubのプロフィールのやつを引っ張ってきましょう。</p>
    <p style="text-align: center;">
        <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=satoshin-des&exclude_repo=github-readme-stats,satoshin-des.github.io&theme=radical&langs_count=10">
        <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=satoshin-des&layout=donut-vertical&theme=radical&langs_count=10">
    </p>
    <SubSection>で、どの言語をいつ使ってるの？</SubSection>
    <div>
        <VueGoodTable :columns="columns_lang" :rows="rows_lang" theme="nocturnal" />
    </div>

    <SubSection>ライブラリなどについても書いちゃいましょう</SubSection>
    <div>
        <VueGoodTable :columns="columns_lib" :rows="rows_lib" theme="nocturnal" />
    </div>

    <Footer />
</template>
