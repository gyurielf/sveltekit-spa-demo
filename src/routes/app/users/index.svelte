<script context="module" lang="ts">
    import { routeProtect } from '$lib/utils/routeProtect';
    import type { Load } from '@sveltejs/kit';
    import { browser } from '$app/env';
    export const prerender = true;
    export const load: Load = async () => {
        if (browser) {
            return routeProtect();
        }
    };
</script>

<script lang="ts">
</script>

<svelte:head>
    <title>SvelteKit SPA Demo</title>
</svelte:head>

<div>
    <h1>YOU ARE ON THE USERS PAGE</h1>
</div>
