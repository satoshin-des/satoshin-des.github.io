<script setup lang="ts">
import { ref } from 'vue';

import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css';

import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

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
const rows = ref(
    [
        { 'id': 1, 'name': 'aac', 'abbr': 'advanced audio coding', 'how-to-use': '音楽', 'fav': '♡♡♡' },
        { 'id': 2, 'name': 'ani', 'abbr': 'Windows animated cursor', 'how-to-use': 'カーソル', 'fav': '♡♡♡♡' },
        { 'id': 3, 'name': 'apk', 'abbr': 'Android application package', 'how-to-use': '色々', 'fav': '♡♡♡♡♡' },
        { 'id': 4, 'name': 'aux', 'abbr': '', 'how-to-use': 'TeX', 'fav': '♡♡♡♡' },
        { 'id': 5, 'name': 'bbl', 'abbr': '', 'how-to-use': 'TeX', 'fav': '♡♡♡♡' },
        { 'id': 6, 'name': 'bmp', 'abbr': 'Windows bitmap', 'how-to-use': '画像', 'fav': '♡♡♡' },
        { 'id': 7, 'name': 'avi', 'abbr': 'audio video interleave', 'how-to-use': '動画', 'fav': '♡♡♡♡♡' },
        { 'id': 8, 'name': 'aup', 'abbr': 'AviUtl project', 'how-to-use': '動画編集', 'fav': '♡♡♡♡♡' },
        { 'id': 9, 'name': 'bat', 'abbr': 'batch', 'how-to-use': '色々', 'fav': '♡♡♡♡' },
        { 'id': 10, 'name': 'bib', 'abbr': 'bibliography', 'how-to-use': 'TeX', 'fav': '♡♡♡♡♡' },
        { 'id': 11, 'name': 'cfg', 'abbr': 'config', 'how-to-use': 'コンフィグ', 'fav': '♡♡♡♡♡' },
        { 'id': 12, 'name': 'cpp', 'abbr': 'c plus plus', 'how-to-use': 'C++', 'fav': '♡♡♡♡♡' },
        { 'id': 13, 'name': 'cqo', 'abbr': 'card quest offline', 'how-to-use': '東方カードクエストオフライン', 'fav': '♡♡♡' },
        { 'id': 14, 'name': 'cs', 'abbr': 'C sharp', 'how-to-use': 'C#', 'fav': '♡♡♡' },
        { 'id': 15, 'name': 'css', 'abbr': 'cascading style sheet', 'how-to-use': 'ホームページ作成', 'fav': '♡♡♡♡' },
        { 'id': 16, 'name': 'csv', 'abbr': 'comma-separated values', 'how-to-use': '色々', 'fav': '♡♡♡♡' },
        { 'id': 17, 'name': 'cur', 'abbr': 'cursor', 'how-to-use': 'カーソル', 'fav': '♡♡♡♡' },
        { 'id': 18, 'name': 'dat', 'abbr': 'data', 'how-to-use': '色々', 'fav': '♡♡♡♡♡' },
        { 'id': 19, 'name': 'data', 'abbr': '', 'how-to-use': '色々', 'fav': '♡♡♡♡♡' },
        { 'id': 20, 'name': 'dll', 'abbr': 'dynamic link library', 'how-to-use': '色々', 'fav': '♡♡♡♡♡' },
        { 'id': 21, 'name': 'dms', 'abbr': '', 'how-to-use': 'Domino', 'fav': '♡♡♡♡♡' },
        { 'id': 22, 'name': 'doc', 'abbr': 'document', 'how-to-use': '文書', 'fav': '♡' },
        { 'id': 23, 'name': 'docx', 'abbr': '', 'how-to-use': '文書', 'fav': '♡' },
        { 'id': 24, 'name': 'dvi', 'abbr': 'device-independent file format', 'how-to-use': 'TeX', 'fav': '♡♡♡♡' },
        { 'id': 25, 'name': 'emm', 'abbr': '', 'how-to-use': 'MMD', 'fav': '♡♡♡♡' },
        { 'id': 26, 'name': 'eps', 'abbr': 'encapsulated PostScript', 'how-to-use': '画像', 'fav': '♡♡♡♡' },
        { 'id': 27, 'name': 'exe', 'abbr': 'executable', 'how-to-use': '色々', 'fav': '♡♡♡♡♡' },
        { 'id': 28, 'name': 'fx', 'abbr': '', 'how-to-use': 'MMD', 'fav': '♡♡♡♡' },
        { 'id': 29, 'name': 'gif', 'abbr': 'graphics interchange format', 'how-to-use': '画像・アニメーション', 'fav': '♡♡♡♡♡' },
        { 'id': 30, 'name': 'go', 'abbr': '', 'how-to-use': 'Go', 'fav': '♡♡♡♡♡' },
        { 'id': 31, 'name': 'gz', 'abbr': 'GNU zip', 'how-to-use': '圧縮', 'fav': '♡♡♡♡♡' },
        { 'id': 32, 'name': 'h', 'abbr': 'header', 'how-to-use': 'C言語・C++', 'fav': '♡♡♡♡♡' },
        { 'id': 33, 'name': 'hpp', 'abbr': '', 'how-to-use': 'C++', 'fav': '♡♡♡♡' },
        { 'id': 34, 'name': 'hsp', 'abbr': 'hot soup processor', 'how-to-use': 'HSP', 'fav': '♡♡♡♡♡' },
        { 'id': 35, 'name': 'html', 'abbr': 'hypertext markup language', 'how-to-use': 'HTML', 'fav': '♡♡♡♡♡' },
        { 'id': 36, 'name': 'ico', 'abbr': 'icon', 'how-to-use': 'アイコン', 'fav': '♡♡♡♡' },
        { 'id': 37, 'name': 'ini', 'abbr': 'initialization', 'how-to-use': '色々', 'fav': '♡♡♡♡' },
        { 'id': 38, 'name': 'ipynb', 'abbr': 'interactive Python notebook', 'how-to-use': 'Jupyter', 'fav': '♡♡♡♡♡' },
        { 'id': 39, 'name': 'java', 'abbr': '', 'how-to-use': 'Java', 'fav': '♡♡♡' },
        { 'id': 40, 'name': 'jfif', 'abbr': 'JPEG file interchange format', 'how-to-use': '画像', 'fav': '♡♡♡' },
        { 'id': 41, 'name': 'jpeg', 'abbr': 'joint photographic experts group', 'how-to-use': '画像', 'fav': '♡♡♡♡♡' },
        { 'id': 42, 'name': 'jpg', 'abbr': 'joint photographic experts group', 'how-to-use': '画像', 'fav': '♡♡♡♡♡' },
        { 'id': 43, 'name': 'js', 'abbr': 'JavaScript', 'how-to-use': 'JavaScript', 'fav': '♡♡♡♡' },
        { 'id': 44, 'name': 'json', 'abbr': 'JavaScript object notation', 'how-to-use': '色々', 'fav': '♡♡♡♡♡' },
        { 'id': 45, 'name': 'kml', 'abbr': 'keyhole markup language', 'how-to-use': '地図', 'fav': '♡♡♡' },
        { 'id': 46, 'name': 'lnk', 'abbr': 'link', 'how-to-use': 'ショートカット', 'fav': '♡♡♡♡♡' },
        { 'id': 47, 'name': 'lzh', 'abbr': '', 'how-to-use': '圧縮', 'fav': '♡♡♡♡' },
        { 'id': 48, 'name': 'm3u', 'abbr': 'MP3 URL', 'how-to-use': '音楽', 'fav': '♡♡♡♡' },
        { 'id': 49, 'name': 'mac', 'abbr': '', 'how-to-use': 'Maxima', 'fav': '♡♡♡' },
        { 'id': 50, 'name': 'md', 'abbr': 'Markdown', 'how-to-use': '色々', 'fav': '♡♡♡♡♡' },
        { 'id': 51, 'name': 'mid', 'abbr': 'musical instrument digital interface', 'how-to-use': '音楽', 'fav': '♡♡♡♡♡' },
        { 'id': 52, 'name': 'mmd', 'abbr': 'Mermaid', 'how-to-use': 'フローチャート等', 'fav': '♡♡♡♡' },
        { 'id': 53, 'name': 'mmd', 'abbr': 'MikuMikuDance', 'how-to-use': 'MMD', 'fav': '♡♡♡' },
        { 'id': 54, 'name': 'mov', 'abbr': 'movie', 'how-to-use': '動画', 'fav': '♡♡♡♡' },
        { 'id': 55, 'name': 'msi', 'abbr': 'Microsoft Windows installer', 'how-to-use': 'インストール等', 'fav': '♡♡♡♡' },
        { 'id': 56, 'name': 'o', 'abbr': 'object', 'how-to-use': '色々', 'fav': '♡♡♡♡♡' },
        { 'id': 57, 'name': 'ogg', 'abbr': '', 'how-to-use': '音楽', 'fav': '♡♡♡♡' },
        { 'id': 58, 'name': 'otf', 'abbr': 'OpenType font', 'how-to-use': 'フォント', 'fav': '♡♡♡♡♡' },
        { 'id': 59, 'name': 'out', 'abbr': '', 'how-to-use': '色々', 'fav': '♡♡♡♡♡' },
        { 'id': 60, 'name': 'pdb', 'abbr': 'program database', 'how-to-use': '色々', 'fav': '♡♡♡♡' },
        { 'id': 61, 'name': 'pdf', 'abbr': 'portable document format', 'how-to-use': '文書', 'fav': '♡♡♡♡♡' },
        { 'id': 62, 'name': 'pmd', 'abbr': '', 'how-to-use': 'MMD', 'fav': '♡♡♡♡' },
        { 'id': 63, 'name': 'pmm', 'abbr': '', 'how-to-use': 'MMD', 'fav': '♡♡♡♡' },
        { 'id': 64, 'name': 'pmx', 'abbr': '', 'how-to-use': 'MMD', 'fav': '♡♡♡♡' },
        { 'id': 65, 'name': 'png', 'abbr': 'portable network graphics', 'how-to-use': '画像', 'fav': '♡♡♡♡♡' },
        { 'id': 66, 'name': 'pptm', 'abbr': 'PowerPoint macro-enabled presentation', 'how-to-use': 'プレゼン', 'fav': '♡' },
        { 'id': 67, 'name': 'pptx', 'abbr': 'PowerPoint open XML presentation', 'how-to-use': 'プレゼン', 'fav': '♡' },
        { 'id': 68, 'name': 'psd', 'abbr': 'PhotoShop document', 'how-to-use': '画像', 'fav': '♡♡♡♡' },
        { 'id': 69, 'name': 'pxd', 'abbr': '', 'how-to-use': 'Cython', 'fav': '♡♡♡♡♡' },
        { 'id': 70, 'name': 'py', 'abbr': 'Python', 'how-to-use': 'Python', 'fav': '♡♡♡♡' },
        { 'id': 71, 'name': 'pyx', 'abbr': '', 'how-to-use': 'Cython', 'fav': '♡♡♡♡♡' },
        { 'id': 72, 'name': 'rar', 'abbr': 'Roshal archive', 'how-to-use': '圧縮', 'fav': '♡♡♡♡' },
        { 'id': 73, 'name': 'ris', 'abbr': 'research information systems', 'how-to-use': '文献探し', 'fav': '♡♡' },
        { 'id': 74, 'name': 'rpy', 'abbr': 'replay', 'how-to-use': '東方', 'fav': '♡♡♡♡' },
        { 'id': 75, 'name': 'rr', 'abbr': 'Risa/Asir', 'how-to-use': 'Risa/Asir', 'fav': '♡♡♡♡' },
        { 'id': 76, 'name': 'rs', 'abbr': 'resource', 'how-to-use': 'リソース', 'fav': '♡♡♡♡♡' },
        { 'id': 77, 'name': 'sage', 'abbr': 'system for algebra and geometry experimentation', 'how-to-use': 'Sage', 'fav': '♡♡♡♡♡' },
        { 'id': 78, 'name': 'sagews', 'abbr': 'Sage worksheet', 'how-to-use': 'Sage', 'fav': '♡♡♡♡' },
        { 'id': 79, 'name': 'sf2', 'abbr': 'SoundFont 2', 'how-to-use': '作曲', 'fav': '♡♡♡♡♡' },
        { 'id': 80, 'name': 'so', 'abbr': 'shared object', 'how-to-use': '色々', 'fav': '♡♡♡♡♡' },
        { 'id': 81, 'name': 'sty', 'abbr': 'style', 'how-to-use': 'TeX', 'fav': '♡♡♡♡♡' },
        { 'id': 82, 'name': 'svg', 'abbr': 'scalable vector graphics', 'how-to-use': '画像', 'fav': '♡♡♡♡' },
        { 'id': 83, 'name': 'syso', 'abbr': '', 'how-to-use': 'Go言語', 'fav': '♡♡♡♡' },
        { 'id': 84, 'name': 'tar', 'abbr': 'tape archives', 'how-to-use': '圧縮', 'fav': '♡♡♡♡' },
        { 'id': 85, 'name': 'tex', 'abbr': 'τέχνη', 'how-to-use': '文書', 'fav': '♡♡♡♡♡' },
        { 'id': 86, 'name': 'tiff', 'abbr': 'tagged image file format', 'how-to-use': '画像', 'fav': '♡♡♡♡' },
        { 'id': 87, 'name': 'tja', 'abbr': '', 'how-to-use': '太鼓さん次郎', 'fav': '♡♡♡' },
        { 'id': 88, 'name': 'ttf', 'abbr': 'TrueType font', 'how-to-use': 'フォント', 'fav': '♡♡♡♡♡' },
        { 'id': 89, 'name': 'txt', 'abbr': 'text', 'how-to-use': '文書', 'fav': '♡♡♡♡♡' },
        { 'id': 90, 'name': 'ust', 'abbr': 'UTAU sequence text', 'how-to-use': 'UTAU', 'fav': '♡♡♡♡♡' },
        { 'id': 91, 'name': 'vcf', 'abbr': 'virtual contact file', 'how-to-use': '連絡先', 'fav': '♡♡♡' },
        { 'id': 92, 'name': 'vmd', 'abbr': '', 'how-to-use': 'MMD', 'fav': '♡♡♡♡' },
        { 'id': 93, 'name': 'vpd', 'abbr': '', 'how-to-use': 'MMD', 'fav': '♡♡♡♡' },
        { 'id': 94, 'name': 'vrm', 'abbr': 'virtual reality model', 'how-to-use': 'vroid', 'fav': '♡♡♡♡' },
        { 'id': 95, 'name': 'vvproj', 'abbr': 'VOICEVOX project', 'how-to-use': 'VOICEVOX', 'fav': '♡♡♡♡' },
        { 'id': 96, 'name': 'wasm', 'abbr': 'WebAssembly', 'how-to-use': 'webアプリ', 'fav': '♡♡♡♡' },
        { 'id': 97, 'name': 'wav', 'abbr': 'RIFF waveform audio format', 'how-to-use': '音楽', 'fav': '♡♡♡♡♡' },
        { 'id': 98, 'name': 'webp', 'abbr': 'web picture', 'how-to-use': '画像', 'fav': '♡♡♡♡' },
        { 'id': 99, 'name': 'wxm', 'abbr': 'wxMaxima', 'how-to-use': 'Maxima', 'fav': '♡♡♡' },
        { 'id': 100, 'name': 'x', 'abbr': '', 'how-to-use': 'MMD', 'fav': '♡♡♡' },
        { 'id': 101, 'name': 'zip', 'abbr': '', 'how-to-use': '圧縮', 'fav': '♡♡♡♡♡' }
    ]
);
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