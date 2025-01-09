export default async function getWalks() {
    try {
        const response = await fetch('/api/walks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
        return response
    } catch (error) {
        console.error(error)
    }
}