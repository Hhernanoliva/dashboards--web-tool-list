<script>
import SearchBar from "../lib/components/SearchBar/SearchBar.svelte"
import Card from "../lib/components/Card/card.svelte";
import { userStore } from '../lib/store';

</script>

<div class="container flex items-center justify-center h-full mx-auto">
	<div class="space-y-5">
		<SearchBar />
		<h1 class="h1">Links</h1>
		<Card title="SvelteKit"/>
		<p>Start by exploring:</p>
		{#if Object.keys($userStore).length === 0}
			<h1 class="h1">No hay Posts</h1>
		{:else}
			<h1 class="h1">Posts</h1>
		{/if}
	</div>
</div>
