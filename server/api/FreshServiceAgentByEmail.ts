// function to get FreshService Agent data with matching email from request param
export default defineEventHandler(async (event) => {
    const query = getQuery(event),
        runtimeConfig = useRuntimeConfig(event),
        email = query.email;

    function fastHash(str: String) {
        let hash = 5381; // Starting prime number seed
        
        for (let i = 0; i < str.length; i++) {
            // Equivalent to: hash * 33 + charCode
            hash = (hash << 5) + hash + str.charCodeAt(i);
        }
        
        return hash >>> 0; // Force convert to a 32-bit unsigned integer
    }

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
        // console.log('hash: ' + fastHash(btoa(runtimeConfig.fsApiKey)))

        return { success: true, data: data};
    } catch (err: any) {
        // console.log(err.message)
        return { success: false, error: 'key hash: ' +  fastHash(btoa(runtimeConfig.fsApiKey)) }
    } finally {
        console.log('done in the function');
    }
});