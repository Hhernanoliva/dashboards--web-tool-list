<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
    import PocketBase from 'pocketbase';
    import {goto} from "$app/navigation";
	import { userStore } from '../../lib/store';

	let identity: String;
	let password: String;
	let roleOption = '';

	const options = [
		{ value: 'admin', label: 'Admin' },
		{ value: 'public', label: 'Public' }
	];

    const pb = new PocketBase('https://damp-tiger.pockethost.io');
	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		if (roleOption === 'admin') {
			try {
				const response = await fetch(
					'https://damp-tiger.pockethost.io/api/admins/auth-with-password',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							identity,
							password
						})
					}
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				
				userStore.set({data})
                await goto('/');
			} catch (error) {
				console.log(error);
			}
		} else {
            try {
				const response = await fetch(
					'https://damp-tiger.pockethost.io/api/collections/users/auth-with-password',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							identity,
							password
						})
					}
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				userStore.set({data})
                await goto('/');
			} catch (error) {
				console.log(error);
			}
		}
	};
</script>
<div class="container">
    <form on:submit={handleSubmit} class="container h-full mx-auto flex justify-center items-center">
        
        <div class="space-y-5">
            <label for="identity" class="label">
                <span>Email</span>
                <input
				class="input"
				name="identity"
				id="identity"
				type="email"
				placeholder="Colocar Email"
				bind:value={identity}
				required
                />
            </label>
            
            <label for="password" class="label">
                <span>Contraseña</span>
                <input
				class="input"
				name="password"
				id="password"
				type="password"
				placeholder="Insertar contraseña"
				bind:value={password}
				required
                />
            </label>
            <label for="role" class="label">
                <span>Role</span>
                <select bind:value={roleOption} class="select">
                    {#each options as option (option.value)}
					<option value={option.value}>{option.label}</option>
                    {/each}
                </select>
            </label>
            <button type="submit" class="btn variant-filled">Submit</button>
        </div>
    </form>
</div>
    