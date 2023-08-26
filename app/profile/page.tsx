import { authConfig } from '@/configs/auth'
import { getServerSession } from 'next-auth'
import React from 'react'
import Image from 'next/image'

const Profile = async () => {

    const session = await getServerSession(authConfig)
    return (
        <>
            <h1 className='text-5xl my-3'>Profile </h1>
            <div className='grid grid-cols-2 gap-3'>
                <p className='text-4xl' >Name:</p>
                <h2 className='text-4xl'>{session?.user?.name}</h2>
                <p className='text-4xl' > Email:</p>
                <h2 className='text-4xl'>{session?.user?.email}</h2>

            </div>
            {session?.user?.image && <Image priority src={session.user.image} alt='profile' />}
        </>
    )
}

export default Profile
