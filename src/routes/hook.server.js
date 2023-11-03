// import PocketBase from 'pocketbase';

// export async function handle({ event, resolve }) {
//     event.locals.pocketbase = new PocketBase('https://dashboards--web-tool-list.pockethost.io');

//     event.locals.pocketbase.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

//     const response = await resolve(event);

//     response.headers.set(
//         // 'set-cookie', event.locals.pocketbase.authStore.exportToCookie({ secure: true })
//         'set-cookie', event.locals.pocketbase.authStore.exportToCookie()
//     )

//     return response;
// }


// const pb = new PocketBase('https://dashboards--web-tool-list.pockethost.io');