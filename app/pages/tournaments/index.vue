<script lang="ts" setup>
const { data: tournaments, error, status } = await useFetch('/api/tournaments', {
    lazy: true,
});
</script>

<template>
    <h1>Tournaments</h1>
    <article 
        v-for="tournament in tournaments" 
        :key="tournament.id"
    >
        <NuxtLink :to="`/tournaments/${tournament.id}`">
            {{ tournament.name }}
        </NuxtLink>
    </article>
</template>