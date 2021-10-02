<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { browser } from '$app/env';
	export const load: Load = async ({ page, fetch, session, stuff }) => {
		if (browser) {
			return {};
		}
	};
</script>

<script lang="ts">
</script>

<div class="container">
	<slot />
</div>

<style lang="scss" global>
	@import 'src/lib/styles/app';
</style>
