<script>
	let routes = [
		{ name: 'Home', path: '/' },
		{ name: 'Login', path: '/login' }
	];
</script>

<nav class="list-nav p-4">
	<ul>
		{#each routes as route (route.path)}
			<li><a href={route.path}>{route.name}</a></li>
		{/each}
	</ul>
</nav>
