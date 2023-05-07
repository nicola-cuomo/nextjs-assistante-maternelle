import React from 'react'
import Login from './login'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='flex place-content-between p-4 mr-3'>
            <div>
                <Link href='/home'>Home</Link>
            </div>
            <div>
                <Login />
            </div>
        </header>
    )
}

export default Header