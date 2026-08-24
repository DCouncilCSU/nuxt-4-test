<script setup lang="ts">

const fetchManagerAgentFsData = async () => {
  let email: string = 'mnardi@fcgov.com'

  try {
    const managerAgentResponse = await useFetch('/api/FreshServiceAgentByEmail', {
      query: {
        email: email
      }
    });

    if (managerAgentResponse.status.value !== 'success') {
      throw new Error(`HTTP Error! Response status: ${managerAgentResponse.status.value}`);
    }

    console.log(managerAgentResponse.data.value)

  } catch (error: any) {
    console.error('Fetch operation failed:', error.message);
	  return null;
  } finally {
	  console.log('Finished calling FS API')
  }

}
fetchManagerAgentFsData();
</script>

<template>
  <RouterView v-slot="{ Component }">
  </RouterView>
</template>