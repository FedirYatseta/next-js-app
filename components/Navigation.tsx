"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { useSession } from 'next-auth/react';


type NavLink = {
    label: string;
    href: string;
}

type Props = {
    navLinks: NavLink[]
}

const Navigation = ({ navLinks }: Props) => {
    const session = useSession()
    console.log("🚀 ~ file: Navigation.tsx:19 ~ Navigation ~ session:", session)
    const pathname = usePathname()

    return (
        <>{
            navLinks.map(link => {
                const isActive = pathname === link.href
                console.log('test', isActive)
                return (
                    <Link href={link.href} key={link.label} className={isActive ? 'text-red-400' : ''}> {link.label}</Link>
                )
            })
        }
            {session?.data && (
                <Link href='/profile'> Profile</Link>
            )}
            {session?.data ? (
                <Link href='/api/auth/signout'> SignOut</Link>) : (<Link href='/api/auth/signin'> Sing In</Link>
            )}
        </>
    )
}

export { Navigation }