import React from 'react'
import getUser from '@/lib/getUser'
import getUserPost from '@/lib/getUserPost'
import { Suspense } from 'react'
import { Metadata } from 'next'
import UserPosts from './components/UserPosts'
import getAllUsers from '@/lib/getAllUsers'
import { notFound } from 'next/navigation'

type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({
    params: { userId },
}: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId)
    const user: User = await userData
    // mmetadata for the not found page
    if (!user?.name) {
        return {
            title: 'User Not Found',
        }
    }
    return {
        title: `${user.name}'s Page`,
        description: `This is ${user.name}'s page`,
    }
}

export default async function UserPage({ params: { userId } }: Params) {
    const userData: Promise<User> = getUser(userId)
    const userPostsData: Promise<Post[]> = getUserPost(userId)

    // const [user, userPosts] = await Promise.all([userData, userPostsData]) // in this way we can do all thing simultaneously and not in waterfall pattern to waste time
    const user = await userData
    console.log(userId)

    if (!user?.name) {
        return notFound()
    }

    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts promise={userPostsData} />
            </Suspense>
        </>
    )
}

// generateStaticParams is used to generate static paths for dynamic routes
// this can be used even though it is already used in the `Users` component and next.js will deduplicate it
export async function generateStaticParams() {
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData
    return users.map((user) => ({
        userId: user.id.toString(),
    }))
}
