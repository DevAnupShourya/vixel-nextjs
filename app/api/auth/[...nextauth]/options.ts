import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvidor from "next-auth/providers/google";

import ConnectToDB from "@src/services/Database";
import User from "@src/models/user.model";

export const authOptions: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET as string,
    providers: [
        // TODO : 
        // CredentialsProvider({
        //     name: "Credentials",
        //     credentials: {
        //         email: { label: "Email", type: "email", placeholder: "elon@musk.x" },
        //         password: { label: "Password", type: "password", placeholder: '*********' }
        //     },
        //     async authorize(credentials, req) {
        //         const payload = {
        //             email: credentials?.email,
        //             password: credentials?.password,
        //         };

        //         try {
        //             console.log('in try')
        //             const res = await fetch('api/auth/', {
        //                 method: 'POST',
        //                 body: JSON.stringify(payload),
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                 },
        //             });
        //             console.log(res)
        //             console.log('after ftch')

        //             const user = await res.json();
        //             if (!res.ok) {
        //                 throw new Error(user.message);
        //             }
        //             // If no error and we have user data, return it
        //             if (res.ok && user) {
        //                 return user;
        //             }

        //             // Return null if user data could not be retrieved
        //             return null;
        //         } catch (error) {
        //             console.log('in catch')
        //             console.log('some error occurd!!')
        //         }

        //     }
        // }),
        GoogleProvidor({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        signIn: async ({ profile }) => {
            try {
                // ? Connect To DB
                await ConnectToDB();

                // ? Check if user already exist
                const isUserExists = await User.findOne({
                    email: profile?.email
                })

                // ? If not then create new user
                if (isUserExists === null) {
                    await User.create({
                        email: profile?.email,
                        name: profile?.name?.replace(" ", "").toLowerCase(),
                        username: `${profile?.name?.replace(" ", "").toLowerCase()}-${profile?.email?.match(/@(.+)/)?.[1]}`,
                        bio: 'Your Bio',
                        avatar: profile?.image,
                        coverPic: '',
                        gender: null
                    })
                    return true;
                } else {
                    console.log('User Already Available!!!!')
                    return true;
                }

            } catch (error: any) {
                console.log('Some Error occurd While Signing In!!!', error.message)
                return false;
            }
        },
    },
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login',
        newUser: '/login/onboarding'
    },
}