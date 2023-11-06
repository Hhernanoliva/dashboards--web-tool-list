<script>
  
    let searchQuery = '';
   const TOKEN_ADMIN = import.meta.env.VITE_TOKEN_ADMIN
    async function handleSearch() {
      const response = await fetch(`https://damp-tiger.pockethost.io/api/collections/posts/records?filter=(name='${searchQuery}')`, {
        headers: {
          'Authorization': `${TOKEN_ADMIN}`
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
   
      const data = await response.json();
      console.log(data);
    }
   </script>
   
   <input
       class="input"
       type="search"
       bind:value={searchQuery}
       placeholder="Search..."
       on:input={handleSearch}
   />
   