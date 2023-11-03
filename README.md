
## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
preview online: https://dashboards-web-tool-list.vercel.app/

## Documentación de SvelteKit

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
