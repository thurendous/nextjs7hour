export default async function getWikiResult(searchTerm: string) {
    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        excharset: '100',
        exintro: '1',
        explaintext: '1',
        exlimit: 'max',
        format: 'json',
        origin: '*',
    })

    const response = await fetch(
        'https://en.wikipedia.org/w/api.php?' + searchParams.toString()
    )

    return response.json()
}
