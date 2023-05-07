'use client'

import { useRouter } from "next/navigation"

type Props = {
    params: {
        babyId: string
    }
}

const Baby = ({ params }: Props) => {
    const router = useRouter()
    return (
        <>
            <button onClick={async () => {
                await fetch(`/api/baby/${params.babyId}`, {
                    method: 'DELETE'
                })
                // router.push('/home')
                // router.refresh()
            }}>Delete</button>
            <div>Baby {params.babyId}</div>
        </>
    )
}

export default Baby