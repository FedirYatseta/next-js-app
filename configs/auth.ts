
import type { AuthOptions, User } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import Icon from '@/public/next.svg'
import Icon2 from '@/public/vercel.svg'

const users = [
    {
        email: 'test@gmail.com',
        password: '1111',
        image: Icon,
        name: 'user1'
    },
    {
        email: 'test2@gmail.com',
        password: '222',
        image: Icon2,
        name: 'user1'
    }
]

export const authConfig: AuthOptions = {

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),

        Credentials({
            credentials: {
                email: { label: 'email', type: 'email', required: true },
                password: { label: 'password', type: 'password', required: true }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null
                const currentUser = users.find(user => user.email === credentials.email)
                if (currentUser && currentUser.password === credentials.password) {
                    const { password, ...userWithoutPass } = currentUser
                    return userWithoutPass as User;
                }
                return null
            }
        })
    ],
}

