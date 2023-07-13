import type { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Users Page',
}

export default async function Users() {
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData // wait for the promise to resolve

    console.log(`Hello!!`)

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home Page</Link>
            </h2>
            <br />
            {users.map((user) => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                    </>
                )
            })}
        </section>
    )

    return content
}
