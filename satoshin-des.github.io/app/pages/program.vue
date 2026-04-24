<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Section from '~/components/Section.vue';
import SubSection from '~/components/SubSection.vue';
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
        <vue-good-table :columns="columns_lang" :rows="rows_lang" />
    </div>

    <SubSection>ライブラリなどについても書いちゃいましょう</SubSection>
    <div>
        <vue-good-table :columns="columns_lib" :rows="rows_lib" />
    </div>

    <Footer />
</template>

<script lang="ts">
export default {
    data() {
        return {
            columns_lang: [
                { label: '言語', field: 'name' },
                { label: 'デビュー年', field: 'year', type: 'number' },
                { label: '使用場面', field: 'scene' },
                { label: '使いやすさ', field: 'ease' },
            ],
            rows_lang: [
                { id: 1, name: "Bash", year: 1989, scene: '研究', ease: '★★★' },
                { id: 2, name: "C", year: 1972, scene: '研究・趣味', ease: '★★★★★' },
                { id: 3, name: "CSS", year: 1994, scene: '趣味', ease: '★★★' },
                { id: 4, name: "C++", year: 1983, scene: '研究・ゲーム開発・趣味', ease: '★★★★★' },
                { id: 5, name: "C#", year: 2000, scene: 'ゲーム開発', ease: '★★★' },
                { id: 6, name: "emojin", year: 2024, scene: '趣味', ease: '★' },
                { id: 7, name: "Go", year: 2009, scene: '趣味', ease: '★★★★★' },
                { id: 8, name: "HSP", year: 1996, scene: 'ゲーム開発', ease: '★★★' },
                { id: 9, name: "HTML", year: 1989, scene: '趣味', ease: '★★★' },
                { id: 10, name: "JavaScript", year: 1995, scene: '趣味', ease: '★★★' },
                { id: 11, name: "Markdown", year: 2004, scene: '趣味', ease: '★★★★★' },
                { id: 12, name: "Python", year: 1991, scene: '研究・ゲーム開発・趣味', ease: '★★★' },
                { id: 13, name: "Risa/Asir", year: 1990, scene: '研究', ease: '★★' },
                { id: 14, name: "SageMath", year: 2005, scene: '研究', ease: '★★★★' },
                { id: 15, name: "TeX", year: 1978, scene: '研究・同人誌執筆', ease: '★★★★★' },
            ],
            columns_lib: [
                { label: 'ライブラリ', field: 'name' },
                { label: 'デビュー年', field: 'year', type: 'number' },
                { label: '言語', field: 'lang' },
                { label: '使用場面', field: 'scene' },
                { label: '使いやすさ', field: 'ease' },
            ],
            rows_lib: [
                { id: 1, name: "DXライブラリ", year: 2001, lang: 'C++', scene: 'ゲーム開発', ease: '★★★★' },
                { id: 2, name: "Eigen", year: 2006, lang: 'C++', scene: '研究', ease: '★★★★★' },
                { id: 3, name: "IPython", year: 2001, lang: 'Python', scene: '趣味', ease: '★★★' },
                { id: 4, name: "japanize-matplotlib", year: 2018, lang: 'Python', scene: '研究', ease: '★★★★' },
                { id: 5, name: ",Matplotlib", year: 2003, lang: 'Python', scene: '研究', ease: '★★★★★' },
                { id: 6, name: "NTL", year: 1990, lang: 'C++', scene: '研究', ease: '★★★★' },
                { id: 7, name: "Numpy", year: 1995, lang: 'Python', scene: '研究・趣味', ease: '★★★★★' },
                { id: 8, name: "Pandas", year: 2008, lang: 'Python', scene: '研究', ease: '★★★★' },
                { id: 9, name: "Pygame", year: 2000, lang: 'Python', scene: 'ゲーム開発', ease: '★★★' },
                { id: 10, name: "Pyinstaller", year: 2005, lang: 'Python', scene: 'ゲーム開発・趣味', ease: '★★★' },
                { id: 11, name: "Siv3D", year: 2012, lang: 'C++', scene: 'ゲーム開発', ease: '★★★★★' },
                { id: 12, name: "SymPy", year: 2007, lang: 'Python', scene: '趣味', ease: '★★★★' }
            ]
        };
    },
};
</script>