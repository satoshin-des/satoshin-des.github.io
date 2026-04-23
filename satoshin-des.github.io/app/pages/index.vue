<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import Section from '~/components/Section.vue';
</script>

<template>
    <div style="text-align: center; margin-top: 40px;">
        <img src="http://www5.kannet.ne.jp/~counter/count.cgi?name=satoshin01&type=24&width=9"
            style="filter: brightness(1.2) hue-rotate(140deg); opacity: 0.8;">
    </div>
    <h1>さとしんのHP（工事中）</h1>
    <p><b>さとしん</b>とは、東京都内の大学院に通うただの大学院生である。</p>
    <p>このホームページでは、私の活動について書いていきます。</p>
    <Section>Bioglaphy</Section>
    <table>
        <tr>
            <th>ぎりぎり平成</th>
            <th>立教大学理学部数学科へ入学</th>
        </tr>
        <tr>
            <th>令和になってから</th>
            <th>優秀論文賞とか取った</th>
        </tr>
        <tr>
            <th>令和4年</th>
            <th>無事大学を卒業</th>
        </tr>
        <tr>
            <th>同年</th>
            <th>立教大学大学院へ入学</th>
        </tr>
        <tr>
            <th>令和7年</th>
            <th>博士課程に進学</th>
        </tr>
    </table>
    <Footer></Footer>
</template>
