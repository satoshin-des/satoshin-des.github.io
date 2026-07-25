<script setup lang="ts">
import { ref } from 'vue';

import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css';

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

const rows = ref(
    [
        { 'id': 1, 'title': 'アサルトリリィ', 'year': '2021', 'machine': 'スマホ', 'company': 'キングポーン' },
        { 'id': 2, 'title': 'アスファルト4：エリートレーシング', 'year': '2009', 'machine': 'DSi', 'company': 'ゲームロフト' },
        { 'id': 3, 'title': '遊んで！いぬとも', 'year': '2003', 'machine': 'ガラケー', 'company': 'バンダイネットワークスエイチアイ' },
        { 'id': 4, 'title': '依存系ヤンデレ妹の日常', 'year': '2018', 'machine': 'スマホ', 'company': 'Team Moko App.' },
        { 'id': 5, 'title': 'Wii Party U', 'year': '2013', 'machine': 'Wii U', 'company': '任天堂' },
        { 'id': 6, 'title': 'うごくメモ帳', 'year': '2008', 'machine': 'DSi', 'company': '任天堂' },
        { 'id': 7, 'title': 'うごくメモ帳 3D', 'year': '2013', 'machine': '3DS', 'company': '任天堂' },
        { 'id': 8, 'title': '駅奪取', 'year': '2011', 'machine': 'スマホ', 'company': 'モバイルファクトリー' },
        { 'id': 9, 'title': '幼なじみがフラグをおられたら', 'year': '2015', 'machine': 'スマホ', 'company': 'Team Moko App.' },
        { 'id': 10, 'title': 'タッチ!カービィ', 'year': '2005', 'machine': 'DS', 'company': '任天堂' },
        { 'id': 11, 'title': 'カービィのエアライド', 'year': '2003', 'machine': 'GC', 'company': '任天堂' },
        { 'id': 12, 'title': 'あつめて!カービィ', 'year': '2011', 'machine': 'DS', 'company': '任天堂' },
        { 'id': 13, 'title': '元祖チャリ走', 'year': '2016', 'machine': 'スマホ', 'company': 'スパイシーソフト' },
        { 'id': 14, 'title': '9マス将棋VS', 'year': '2016', 'machine': 'スマホ', 'company': 'Maru Project' },
        { 'id': 15, 'title': 'きららファンタジア', 'year': '2017', 'machine': 'スマホ', 'company': 'ドリコム' },
        { 'id': 16, 'title': 'グリモア〜私立グリモワール魔法学園〜', 'year': '2014', 'machine': 'スマホ', 'company': 'アプリボット' },
        { 'id': 17, 'title': 'GEIGEKIゴーゴーシューティング', 'year': '2002', 'machine': 'テレビゲーム', 'company': 'TAKARA' },
        { 'id': 18, 'title': 'ゴシックは魔法乙女', 'year': '2015', 'machine': 'スマホ', 'company': 'CAVE Interactive' },
        { 'id': 19, 'title': '雀魂 じゃんたま-', 'year': '2019', 'machine': 'スマホ', 'company': 'Yostar' },
        { 'id': 20, 'title': '首都高バトル', 'year': '2017', 'machine': 'スマホ', 'company': 'Genki' },
        { 'id': 21, 'title': 'ジョジョの奇妙な冒険 オラオラオーバードライブ', 'year': '2025', 'machine': 'スマホ', 'company': 'gumi' },
        { 'id': 22, 'title': 'しりとり（英語）', 'year': '2015', 'machine': 'スマホ', 'company': 'plantymobile' },
        { 'id': 23, 'title': '救え！邪神ちゃんドロップキック', 'year': '2022', 'machine': 'スマホ', 'company': 'MASK' },
        { 'id': 24, 'title': 'スティールダイバー', 'year': '2011', 'machine': '3DS', 'company': '任天堂' },
        { 'id': 25, 'title': 'ステーションメモリーズ!', 'year': '2014', 'machine': 'スマホ', 'company': 'モバイルファクトリー' },
        { 'id': 26, 'title': 'スパイダーソリティア', 'year': '1998', 'machine': 'PC', 'company': 'Microsoft' },
        { 'id': 27, 'title': '雪晶石 -Malice Eater-', 'year': '2015', 'machine': 'PC', 'company': 'Amusement Makers' },
        { 'id': 28, 'title': 'Z・ONE2', 'year': '2010', 'machine': 'DSi', 'company': 'グッドビジョン' },
        { 'id': 29, 'title': '戦国村を作ろう！武将と天下統一', 'year': '2014', 'machine': 'スマホ', 'company': 'Recstu' },
        { 'id': 30, 'title': 'SenSim - 鉄道シミュレーター', 'year': '2016', 'machine': 'スマホ', 'company': 'Studio 134' },
        { 'id': 31, 'title': '太鼓さん次郎', 'year': '2008', 'machine': 'PC', 'company': 'toach' },
        { 'id': 32, 'title': '大乱闘スマッシュブラザーズDX', 'year': '2001', 'machine': 'GC', 'company': '任天堂' },
        { 'id': 33, 'title': '大乱闘スマッシュブラザーズX', 'year': '2008', 'machine': 'Wii', 'company': '任天堂' },
        { 'id': 34, 'title': '大乱闘スマッシュブラザーズ for Nintendo 3DS', 'year': '2014', 'machine': '3DS', 'company': '任天堂' },
        { 'id': 35, 'title': '大乱闘スマッシュブラザーズ SPECIAL', 'year': '2018', 'machine': 'Switch', 'company': '任天堂' },
        { 'id': 36, 'title': 'だるめしスポーツ店', 'year': '2013', 'machine': '3DS', 'company': '任天堂' },
        { 'id': 37, 'title': '弾幕デス', 'year': '2012?', 'machine': 'スマホ', 'company': 'JakiganicSystems' },
        { 'id': 38, 'title': '弾幕の器', 'year': '2015', 'machine': 'スマホ', 'company': 'Makoto Yanagisawa' },
        { 'id': 39, 'title': '弾幕の檻', 'year': '2016', 'machine': 'スマホ', 'company': 'Makoto Yanagisawa' },
        { 'id': 40, 'title': '電子ゲームCOLLECTION', 'year': '', 'machine': '専用ゲーム機', 'company': 'コロコロコレクション' },
        { 'id': 41, 'title': '東方夢時空\u3000～ Phantasmagoria of Dim.Dream', 'year': '1997', 'machine': 'PC', 'company': 'Amusement Makers' },
        { 'id': 42, 'title': '東方怪綺談\u3000～ Mystic Square.', 'year': '1998', 'machine': 'PC', 'company': 'Amusement Makers' },
        { 'id': 43, 'title': '東方紅魔郷\u3000～ the Embodiment of Scarlet Devil.', 'year': '2002', 'machine': 'PC', 'company': '上海アリス幻樂団' },
        { 'id': 44, 'title': '東方妖々夢\u3000～ Perfect Cherry Blossom.', 'year': '2003', 'machine': 'PC', 'company': '上海アリス幻樂団' },
        { 'id': 45, 'title': '東方永夜抄\u3000～ Imperishable Night.', 'year': '2004', 'machine': 'PC', 'company': '上海アリス幻樂団' },
        { 'id': 46, 'title': '妖精大戦争\u3000～ 東方三月精', 'year': '2010', 'machine': 'PC', 'company': '上海アリス幻樂団' },
        { 'id': 47, 'title': '東方神霊廟\u3000～ Ten Desires.', 'year': '2011', 'machine': 'PC', 'company': '上海アリス幻樂団' },
        { 'id': 48, 'title': '弾幕アマノジャク\u3000～ Impossible Spell Card.', 'year': '2014', 'machine': 'PC', 'company': '上海アリス幻樂団' },
        { 'id': 49, 'title': '東方紺珠伝\u3000～ Legacy of Lunatic Kingdom.', 'year': '2015', 'machine': 'PC', 'company': '上海アリス幻樂団' },
        { 'id': 50, 'title': '秘封ナイトメアダイアリー\u3000～ Violet Detector.', 'year': '2018', 'machine': 'PC', 'company': '上海アリス幻樂団' },
        { 'id': 51, 'title': 'バレットフィリア達の闇市場\u3000〜 100th Black Market.', 'year': '2022', 'machine': 'PC', 'company': '上海アリス幻樂団' },
        { 'id': 52, 'title': '東方獣王園 〜 Unfinished Dream of All Living Ghost.', 'year': '2023', 'machine': 'PC', 'company': '上海アリス幻樂団' },
        { 'id': 53, 'title': '東方幻想麻雀', 'year': '2020', 'machine': 'Switch', 'company': 'D.N.A.Softwares' },
        { 'id': 54, 'title': '東方カードクエストオフライン', 'year': '2015?', 'machine': 'スマホ', 'company': 'PoplaSoft' },
        { 'id': 55, 'title': '東方玉霊姫', 'year': '2014', 'machine': 'スマホ', 'company': 'Kanata_KoyomiTei' },
        { 'id': 56, 'title': '東方恋々少女', 'year': '2012', 'machine': 'スマホ', 'company': 'Pudding' },
        { 'id': 57, 'title': '東方異想穴', 'year': '2016', 'machine': 'スマホ', 'company': 'Kanata_KoyomiTei' },
        { 'id': 58, 'title': '東方魔法陣連打【クリッカー】', 'year': '2016', 'machine': 'スマホ', 'company': 'T.D' },
        { 'id': 59, 'title': 'とったど〜 よゐこの無人島生活。', 'year': '2008', 'machine': 'DS', 'company': 'バンダイナムコゲームス' },
        { 'id': 60, 'title': 'トモダチコレクション', 'year': '2009', 'machine': 'DS', 'company': '任天堂' },
        { 'id': 61, 'title': 'トモダチコレクション 新生活', 'year': '2013', 'machine': '3DS', 'company': '任天堂' },
        { 'id': 62, 'title': 'はじめてのWii', 'year': '2006', 'machine': 'Wii', 'company': '任天堂' },
        { 'id': 63, 'title': 'パズル&幻想郷', 'year': '2014', 'machine': 'スマホ', 'company': 'Kanata' },
        { 'id': 64, 'title': '初恋を忘れたい姉を、親友は救いたい', 'year': '2015', 'machine': 'スマホ', 'company': 'Team Moko App.' },
        { 'id': 65, 'title': 'ぱらちゃん', 'year': '', 'machine': 'PC', 'company': '東芝' },
        { 'id': 66, 'title': 'パロディウスだ! 〜神話からお笑いへ〜', 'year': '1990', 'machine': 'ガラケー', 'company': 'コナミ' },
        { 'id': 67, 'title': 'BEAT MP3', 'year': '2013', 'machine': 'スマホ', 'company': 'CREAPPTIVE' },
        { 'id': 68, 'title': 'BEAT MP3 2.0', 'year': '2014', 'machine': 'スマホ', 'company': 'CREAPPTIVE' },
        { 'id': 69, 'title': 'beat gather U', 'year': '2015', 'machine': 'スマホ', 'company': 'コナミ' },
        { 'id': 70, 'title': 'ぷよぷよ7', 'year': '2009', 'machine': 'DS', 'company': 'セガ' },
        { 'id': 71, 'title': '爆転シュートベイブレード', 'year': '2001', 'machine': 'GB', 'company': 'ブロッコリー' },
        { 'id': 72, 'title': '花札こいこい', 'year': '2012', 'machine': 'スマホ', 'company': 'n225.zero' },
        { 'id': 73, 'title': 'メタルファイト ベイブレード ガチンコスタジアム', 'year': '2009', 'machine': 'Wii', 'company': 'ハドソン' },
        { 'id': 74, 'title': 'ポケットモンスター ピカチュウ', 'year': '1998', 'machine': 'GB', 'company': '任天堂' },
        { 'id': 75, 'title': 'ポケモンコロシアム', 'year': '2003', 'machine': 'GC', 'company': '任天堂' },
        { 'id': 76, 'title': 'みんなで早押しクイズ', 'year': '2016', 'machine': 'スマホ', 'company': 'Q ONE' },
        { 'id': 77, 'title': 'みんなのオセロ', 'year': '2016', 'machine': 'スマホ', 'company': 'UNBALANCE' },
        { 'id': 78, 'title': 'M.U.G.E.N', 'year': '1999', 'machine': 'PC', 'company': 'Elecbyte' },
        { 'id': 79, 'title': 'メイドインアビス 闇を目指した連星', 'year': '2022', 'machine': 'Switch', 'company': 'スパイク・チュンソフト' },
        { 'id': 80, 'title': 'メメントモリ', 'year': '2022', 'machine': 'スマホ', 'company': 'バンク・オブ・イノベーション' },
        { 'id': 81, 'title': 'モンスターハンター エクスプロア', 'year': '2015', 'machine': 'スマホ', 'company': 'CAPCOM' },
        { 'id': 82, 'title': 'モンスターハンター4G', 'year': '2014', 'machine': '3DS', 'company': 'カプコン' },
        { 'id': 83, 'title': 'モンスターハンタークロス', 'year': '2015', 'machine': '3DS', 'company': 'カプコン' },
        { 'id': 84, 'title': 'モンスターハンターダブルクロス', 'year': '2017', 'machine': '3DS', 'company': 'カプコン' },
        { 'id': 85, 'title': 'モンスターハンターライズ', 'year': '2021', 'machine': 'Switch', 'company': 'カプコン' },
        { 'id': 86, 'title': 'ヤンデレ彼女', 'year': '2013', 'machine': 'スマホ', 'company': 'GAMEKOZO' },
        { 'id': 87, 'title': 'ヤンデレ彼女+PLUS', 'year': '2014', 'machine': 'スマホ', 'company': 'GAMEKOZO' },
        { 'id': 88, 'title': 'ゆるキャン△ つなげるみんなのオールインワン', 'year': '2023', 'machine': 'スマホ', 'company': 'enish' },
        { 'id': 89, 'title': 'ゆるキャン△〜ぱずるキャンプ〜', 'year': '2024', 'machine': 'スマホ', 'company': '合同会社CozyTrail Games' },
        { 'id': 90, 'title': 'ロックマンゼロコレクション', 'year': '2010', 'machine': 'DS', 'company': 'カプコン' }
    ]
);

</script>

<template>
    <Header />
    <div>
        <VueGoodTable :columns="columns" :rows="rows" theme="nocturnal" />
    </div>
    <Footer />
</template>