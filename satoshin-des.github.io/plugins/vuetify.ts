// @ts-ignore  ※@ts-ignore を使って型チェックだけ無視して問題ありません
import 'vuetify/styles' // Vuetify のスタイルを読み込む
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
})