import React from 'react'
import getUser from '@/lib/getUser'
import getUserPost from '@/lib/getUserPost'
import { Suspense } from 'react'
import { Metadata } from 'next'
import UserPosts from './components/UserPosts'

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
