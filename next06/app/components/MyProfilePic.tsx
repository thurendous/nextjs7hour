import Image from 'next/image'

export default function MyProfilePic() {
    return (
        <section className="w-full mx-auto">
            <Image
                className=" border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-9"
                src="/images/ProfilePic.png"
                width={250}
                height={250}
                alt="mark"
                priority={true} // This tells Next.js to prioritize this image
            />
        </section>
    )
}
