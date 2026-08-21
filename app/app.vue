<script setup lang="ts">

const fetchManagerAgentFsData = async () => {
  // let email = storeData.name;
  let email: string = 'mnardi@fcgov.com'

  try {
    const managerAgentResponse = await useFetch('/api/FreshServiceAgentsByEmail', {
      query: {
        email: email
      }
    });

    if (managerAgentResponse.status.value !== 'success') {
      throw new Error(`HTTP Error! Response status: ${managerAgentResponse.status.value}`);
    }

    console.log(managerAgentResponse.data)

  } catch (error: any) {
    console.error('Fetch operation failed:', error.message);
  }

}
fetchManagerAgentFsData();
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
