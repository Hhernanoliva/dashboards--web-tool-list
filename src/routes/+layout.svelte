<script>
	import '../app.postcss';
	import NavBar from '../lib/components/NavBar/NavBar.svelte';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="sidebarLeft">
		<NavBar />
	</svelte:fragment>
</AppShell>
<slot />
