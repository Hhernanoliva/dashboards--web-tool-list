import { writable } from 'svelte/store';

export const userStore = writable({});

export const logout = () => {
    userStore.set({});
  }
  