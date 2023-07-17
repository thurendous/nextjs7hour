export default async function getUserPost(userId: string) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        { next: { revalidate: 60 } } // this is for checking the update every 60s
        // { cache: 'force-cache' } // this is the default. Actually we do not need to do this.
        // { cache: 'no-store' } // if you need to update in real time
    )
    if (!res.ok) {
        // throw new Error('Failed to fetch data ')
        return undefined
    }

    return res.json()
}
