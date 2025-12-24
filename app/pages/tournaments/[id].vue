<script lang="ts" setup>
interface Tournament {
    id: number;
    name: string;
}

interface Season {
    id: number;
    name: string;
}

interface Round {
    round: number;
}

interface TournamentRounds {
    current_round?: Round;
    rounds: Round[];
}

const route = useRoute();
const id = route.params.id;

const { data: tournament, error, status } = await useFetch<Tournament>(`http://localhost:9000/tournament/${id}`);
const { data: seasons, error: seasonsError, status: seasonsStatus } = await useFetch<Season[]>(`http://localhost:9000/tournament/${id}/seasons`);

// Reactive state for selected season
const selectedSeasonId = ref<number | null>(null);

// Reactive rounds data - will be fetched when season is selected
const rounds = ref<TournamentRounds | null>(null);
const roundsError = ref<any>(null);
const roundsStatus = ref<'idle' | 'pending' | 'success' | 'error'>('idle');

// Function to fetch rounds for selected season
const fetchRounds = async (seasonId: number) => {
    if (!seasonId) {
        rounds.value = null;
        roundsError.value = null;
        roundsStatus.value = 'idle';
        return;
    }

    roundsStatus.value = 'pending';
    roundsError.value = null;

    try {
        const response = await $fetch<TournamentRounds>(`http://localhost:9000/tournament/${id}/seasons/${seasonId}/rounds`);
        rounds.value = response;
        roundsStatus.value = 'success';
    } catch (err: any) {
        roundsError.value = err;
        roundsStatus.value = 'error';
        rounds.value = null;
    }
};

// Watch for season selection changes
watch(selectedSeasonId, (newSeasonId) => {
    if (newSeasonId) {
        fetchRounds(newSeasonId);
    }
});

</script>

<template>
    <h1>Tournament</h1>
    <article 
        v-if="status === 'pending' || seasonsStatus === 'pending' || roundsStatus === 'pending'"
        aria-busy="true" 
    />
    
    <article 
        v-if="roundsStatus === 'pending'"
        aria-busy="true" 
    >
        Loading rounds...
    </article>
    
    <article 
        v-if="roundsError" 
        class="error" 
    >
        {{ roundsError.statusMessage || roundsError.message || 'Error loading rounds' }}
    </article>

    <article 
        v-else-if="error" 
        class="error" 
    >
        {{ error.statusMessage }}
    </article>

    <div v-else>
        <article v-if="tournament">
            {{ tournament.name }}
        </article>

        <!-- Select season -->
        <select 
            v-model="selectedSeasonId" 
            name="season" 
            aria-label="Select season" 
            required
        >
            <option :value="null" disabled>Select season</option>
            <option v-for="season in seasons" :key="season.id" :value="season.id">
                {{ season.name }}
            </option>
        </select>

        <!-- Select round -->
        <select 
            name="round" 
            aria-label="Select round" 
            required
            :disabled="!rounds || roundsStatus === 'pending'"
        >
            <option selected disabled value="">Select round</option>
            <option 
                v-if="rounds && rounds.rounds" 
                v-for="round in rounds.rounds" 
                :key="round.round" 
                :value="round.round"
            >
                {{ round.round }}
            </option>
        </select>

        <!-- Search for selected season and round button -->
        <button>Search</button>
    </div>


</template>