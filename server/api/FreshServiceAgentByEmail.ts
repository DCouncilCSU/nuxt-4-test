// function to get FreshService Agent data with matching email from request param
export default defineEventHandler(async (event) => {
    const query = getQuery(event),
        runtimeConfig = useRuntimeConfig(event),
        email = query.email;

    try {
        const response = await fetch(`https://coftc.freshservice.com/api/v2/agents?query=email:'${email}'`, {
            method: 'GET', // or 'POST', 'PUT', etc.
            headers: {
                'Authorization': `Basic ${btoa(runtimeConfig.fsApiKey)}`,
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        let data = await response.json()
        
        return data;
    } catch (err: any) {
        console.log(err.message)
    } finally {
        console.log('done in the function');
    }
});