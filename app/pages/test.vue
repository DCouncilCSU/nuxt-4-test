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

    console.log(managerAgentResponse.data)

  } catch (error: any) {
    console.error('Fetch operation failed:', error.message);
  }

}
fetchManagerAgentFsData();
</script>

<template>
	<div>
		<p>Test Page</p>
	</div>
</template>