import prismaClient from '@/libs/prismaClient'
import Link from 'next/link'

async function getBabies() {
    return prismaClient.baby.findMany()
}

const Home = async () => {
    const babies = await getBabies();
    return (
        <>
            <Link href="/create"> Create new baby </Link>
            <ul>
                {
                    babies.map(baby => {
                        return (
                            <li key={baby.id}>
                                <Link href={`/baby/${baby.id}`}> {baby.name} </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Home