
## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
preview online: https://dashboards-web-tool-list.vercel.app/

# WebApp Architecture

## AppBar
- **Title**
- **Profile**
  - Avatar
  - Login
  - Logout
- **Search**

## Main Content
- Section of Cards
  - **Card 1**
    - Card Header
      - Thumbnail
      - Titulo
      - Descripción
      - URL
  - ... (more cards)

## Mockup / Referencia

![Mockup](http://18.229.78.216/secure/attachment/65431/65431_mockup.png)
# Documentación de SvelteKit

### Estructura del proyecto:

- **src:** Directorio principal que contiene el núcleo del proyecto.
- **lib:** Contiene el código de la biblioteca, incluyendo utilidades y componentes. Estos se pueden importar utilizando el alias `$lib`.
- **static:** Este directorio se utiliza para almacenar activos estáticos, como imágenes, fuentes o cualquier archivo que no necesite ser procesado por la aplicación.
- **app.html:** Documento HTML que contiene marcadores de posición para varios elementos.

### Dependencias:

- **Sveltekit:** [Documentación](https://kit.svelte.dev/docs/introduction)
- **SkeletonUI:** [Documentación](https://www.skeleton.dev/docs/get-started)

### Documentación de Skeleton (Front-end):

...

### Documentación de Pocketbase y Pockethost (Back-end):

...


## Tutorials
- **SvelteKit Authentication with PocketBase** ([Video](https://www.youtube.com/watch?v=doDKaKDvB30))
