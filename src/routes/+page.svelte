<script>
	import SearchBar from '../lib/components/SearchBar/SearchBar.svelte';
	import { userStore } from '../lib/store';
	const userData = $userStore;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<SearchBar />
		{#if Object.keys(userData).length === 0}
			<h1 class="h1">No hay Posts</h1>
		{:else}
			<h1 class="h1">Posts</h1>
		{/if}
	</div>
</div>
