<script>
	import { userStore, logout } from '../../store';
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/">Home</a></li>
		{#if Object.keys($userStore).length === 0}
			<li><a href="/login">Login</a></li>
		{:else}
			<button type="button" class="btn" on:click={logout}>Log out</button>
		{/if}
	</ul>
</nav>
