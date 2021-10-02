<script lang="ts" context="module">
	import type { ErrorLoad } from '@sveltejs/kit';
	export const load: ErrorLoad = ({ error, status }) => {
		return {
			props: {
				title: `${status}: ${error?.message}`,
				status,
				error
			}
		};
	};
</script>

<script lang="ts">
	import { dev } from '$app/env';
	export let status: string;
	export let error: Error;
</script>

<div>
	<h1>ROOT ERR PAGE</h1>
	<div>
		<h1>
			{status}
		</h1>
		<p>
			{error.name}
		</p>
		{#if dev && error.stack}
			<pre> {error.message} </pre>
		{/if}
	</div>
</div>

<style lang="scss">
</style>
