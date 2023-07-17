import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'

type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li>
            <Link
                className="mt-4 text-2xl dark:text-white/90"
                href={`/posts/${id}`}
            >
                {title}
            </Link>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {formattedDate}
            </p>
        </li>
    )
}
