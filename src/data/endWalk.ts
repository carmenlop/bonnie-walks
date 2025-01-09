export default async function endWalk() {
    try {
        const response = await fetch('/api/walks', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        return response
    } catch (error) {
        console.error(error)
    }
}