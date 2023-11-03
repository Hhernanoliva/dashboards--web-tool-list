<script context="module">
    // /** @type {import('./$types').LayoutServerLoad} */
    // export async function load({ page }) {
    //     // Aquí puedes acceder a los datos que devolviste en tu función `load` en `layout.server.js`
    //     const record = page.props.record;

    //     return {
    //         props: {
    //             record: record
    //         }
    //     };
    // }
    // export let record;
</script>
<div>
    <!-- Aquí puedes mostrar los datos de tu registro -->
    <h1>{record.title}</h1>
    <p>{record.description}</p>
</div>
