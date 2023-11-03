<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase"><a class="link" href="/" rel="noreferrer" >Tools List Dashboard</a></strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="documentation"					
					rel="noreferrer"
				>
					Documentation
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- Sidebar -->
		<nav class="w-64 h-full list-nav bg-zinc-800">
			<ul>
				<li><a href="/">Dashboard</a></li>
			</ul>
		</nav>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
