<script setup>
defineProps({
    items: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <v-container>
        <v-row justify="center" class="text-center">
            <v-col v-for="item in items" :key="item.name" cols="auto">
                <v-img :width="55" :src="item.src" />
                {{ item.name }}
            </v-col>
        </v-row>
    </v-container>
</template>
