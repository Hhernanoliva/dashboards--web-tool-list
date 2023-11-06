
<script>
import SearchBar from "../lib/components/SearchBar/SearchBar.svelte"
import Card from "../lib/components/Card/card.svelte";
</script>

<div class="container flex items-center justify-center h-full mx-auto">
	<div class="space-y-5">
		<SearchBar />
		<h1 class="h1">Links</h1>
		<Card title="SvelteKit"/>
		<p>Start by exploring:</p>
		<ul>
			<li><code class="code">/src/routes/+layout.svelte</code> - barebones layout</li>
			<li><code class="code">/src/app.postcss</code> - app wide css</li>
			<li>
				<code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents
			</li>
		</ul>
	</div>
</div>
