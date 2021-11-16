import bootcamp from '../../bootcamps.json'
import Link from 'next/link'

export const getStaticProps = async ({ params }) => {
    const bootcamps = bootcamp.filter(b => b.id.toString() == params.id)

    return {
        props: {
            oneBootcamps: bootcamps[0],
        },
    }
}

export const getStaticPaths = async () => {
    const paths = bootcamp.map(oneBootcamps => ({
        params: { id: oneBootcamps.id.toString() },
    }))
    return { paths, fallback: false }
}

export default ({ oneBootcamps }) => {

    return (
        <div>
            <nav class="p-4 shadow-lg md:pb-4">
                <ul class="list-reset md:flex md:items-center">
                    <li class="md:ml-4">
                        <a class="hover:underline" href="/">
                            Accueil
                        </a>
                    </li>
                    <li class="md:ml-4">
                        <a class="hover:underline" href="/bootcamps">
                            Tout les bootcamps
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="container mx-auto px-4 text-center mt-10">

            <div class="underline">{oneBootcamps.name}</div>
            <div>{oneBootcamps.description}</div>
                <a class="hover:underline" href={oneBootcamps.link}>Site web</a>
            </div>
        </div>
    )
}