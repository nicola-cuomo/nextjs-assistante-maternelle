import React from 'react'
import Image from 'next/image';
import { signOut } from 'next-auth/react';

type Props = {
    urlImage: string
}

const ImageAvatar = ({ urlImage }: Props) => {
    return (<Image className='rounded-full cursor-pointer' src={urlImage} priority={true} alt="Picture of the author" width={80} height={80} onClick={() => {
        const doLogOut = confirm('Logout?');
        doLogOut && signOut();
    }} />
    )
}

export default ImageAvatar