"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

type NavLink = {
    label: string;
    href: string;
}

type Props = {
    navLinks: NavLink[]
}

const Navigation = ({ navLinks }: Props) => {

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
        }</>
    )
}

export { Navigation }