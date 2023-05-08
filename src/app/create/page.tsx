import prismaClient from '@/libs/prismaClient';
import { redirect } from 'next/navigation';
import { string } from 'zod';

type Props = {}

const Create = (props: Props) => {
    async function addBaby(formData: FormData) {
        'use server'
        const name = formData.get('name') as string;
        string().min(1).max(50).parse(
            name
        )

        await prismaClient.baby.create({
            data: {
                name
            }
        })
        redirect('/home')
    }

    return (
        <form action={addBaby} >
            <input type="text" placeholder="Name" name='name' required />
            <button type="submit">Add baby</button>
        </form >
    )
}

export default Create