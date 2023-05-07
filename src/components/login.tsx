'use client'

import React from 'react'
import ImageAvatar from './imageAvatar';
import { signIn, useSession } from 'next-auth/react';

export default function Login() {
    const { data: session, status } = useSession();
    return (
        <>
            {session?.user?.image && <ImageAvatar urlImage={session.user.image} />}
            {status === 'unauthenticated' && <button onClick={() => {
                signIn('google', { callbackUrl: '/home' })
            }
            }>Sign in</button >}
        </>
    )
}