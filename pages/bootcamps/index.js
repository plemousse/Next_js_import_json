import data from '../../bootcamps.json'
import Link from 'next/link'

//https://medium.com/swlh/next-js-usestaticprops-usestaticpaths-static-json-data-9f7903b8a5aa
export const getStaticProps = async () => {
    return {
        props: {
            bootcamps: data,
        },
    }
}

export default ({ bootcamps }) => (
    <div>

        <nav class="p-4 shadow-lg md:pb-4">
            <ul class="list-reset md:flex md:items-center">
                <li class="md:ml-4">
                    <a class="hover:underline" href="/">
                        Accueil
                    </a>
                </li>
            </ul>
        </nav>

        {bootcamps.map((bootcamps) => {
            return <div class="container mx-auto px-4 text-center mt-10">
                <div class="underline">{bootcamps.name}</div> 
                <div>{bootcamps.description} </div>
                    <a class="hover:underline " href={'/bootcamps/' + bootcamps.id} key={bootcamps.id}>
                        Détail
                    </a>
                

            </div>
        })}
    </div>
)