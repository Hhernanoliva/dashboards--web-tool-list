<!-- PASS POCKETBASE: Noviembre2023! -->

<script>
	// @ts-ignore
	import PocketBase from 'pocketbase';
	import { onMount } from 'svelte';

const pb = new PocketBase('https://dashboards--web-tool-list.pockethost.io');

onMount(async () => {
	// const authData = await pb.collection('users').authWithPassword('hhernanoliva@gmail.com', 'Noviembre2023!');
	// const authData = await pb.admins.authWithPassword('hhernanoliva@gmail.com', 'Noviembre2023!');
	// const record = await pb.collection('UA_Dashboard').getOne('dy7a6tixx3rbmby', {
    // expand: 'relField1,relField2.subRelField',
	// });
	// console.log(record);	
	// console.log(authData);


	
})

await pb.admins.authWithPassword('hhernanoliva@gmail.com', 'Noviembre2023!');

	const collection = await pb.collections.getOne('UA_Dashboard');
	console.log(collection);

</script>

<div class="container flex items-center justify-center h-full mx-auto">
	<div class="flex flex-col items-center space-y-10 text-center">
		<h2 class="h2">Welcome to Tools List Dashboard.</h2>
	</div>
</div>





<style lang="postcss">

</style>
