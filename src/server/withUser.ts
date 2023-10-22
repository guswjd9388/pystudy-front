import { withIronSessionSsr } from 'iron-session/next'
import { IronSessionOptions } from "iron-session";

export const SessionOption: IronSessionOptions = {
    password: '55e7800f-f7f4-4bc5-8857-6167d46c3cc6',
    cookieName: 'pystudy-front',
    cookieOptions: {
        maxAge: 2147483647, // infinity
        secure: false,
        domain: process.env.NODE_ENV === 'production' ? 'pystudy.dnsduck.org' : 'localhost'
    }
}

export default function withUser() {
    return withIronSessionSsr<any>((context) => {
        const user = context.req.session.user
        const nextUrl = context.req.url ?? '/'
        if (!user) {
            return {
                redirect: {
                    statusCode: 302,
                    destination: `/?continue=${encodeURIComponent(nextUrl)}`
                }
            }
        }
        return {
            props: {
                user
            }
        } as any
    }, SessionOption)
}