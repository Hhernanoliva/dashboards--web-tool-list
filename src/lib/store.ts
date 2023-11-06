// import { localStorageStore } from '@skeletonlabs/skeleton';

// import type { Writable } from 'svelte/store';

// export const userStore: Writable<object> = localStorageStore('users', {
//     token: ''
// });

import { writable } from 'svelte/store';

export const userStore = writable({token: ''});
