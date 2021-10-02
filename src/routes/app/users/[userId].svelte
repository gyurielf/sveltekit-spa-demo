<script context="module" lang="ts">
    import { routeProtect } from '$lib/utils/routeProtect';
    import type { Load } from '@sveltejs/kit';
    import { browser } from '$app/env';
    // export const prerender = true;
    export const load: Load = async () => {
        if (browser) {
            return routeProtect();
        }
    };
</script>

<script lang="ts">
    import { page } from '$app/stores';

    if ($page.params.userId !== '12345') {
        new Error('Uh Oh.. Something went wrong..');
    }
</script>

<div>
    <h1>THIS IS A DYNAMIC URL, ERROR SHOULD RENDER BY /app/__error.svelte</h1>
    <h3>Page param: {$page.params.userId}</h3>
</div>
