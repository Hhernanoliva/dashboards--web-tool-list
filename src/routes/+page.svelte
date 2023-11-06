<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
 	import PocketBase from 'pocketbase';
	 const pb = new PocketBase('https://damp-tiger.pockethost.io');
	 console.log(pb.authStore);
	function logout() {
		userStore.set(null);
	}


</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<h1>Home page</h1>
	<!-- {#if $userStore}
		<p>Welcome, {$userStore.name}!</p>
		<button on:click={logout}>Logout</button>
	{:else}
		<p>Please log in.</p>
	{/if} -->
</div>
<!-- <input class="input" type="search" name="demo" bind:value={inputDemo} placeholder="Search..." /> -->
