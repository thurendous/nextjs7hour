import Posts from './components/Posts'

export default function Home() {
    return (
        <main>
            <p className="mt-12 mb-12 text-3xl text-center dark: text-white">
                Hello and Welcome to my Base 👋&nbsp;
                <span className="whitespace-nowrap">
                    <br />
                    I'm <span className="font-bold">Mark</span>.
                </span>
            </p>
            <Posts />
        </main>
    )
}
