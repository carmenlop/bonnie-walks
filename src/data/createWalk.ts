export default async function createWalk() {
    try {
        const response = await fetch('/api/walks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
        return response
    } catch (error) {
        console.error(error)
    }
}