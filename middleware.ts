export { default } from "next-auth/middleware";

export const config = {
    matcher: ['/chats', '/trending', '/new', '/feed', '/follower', '/notifications', '/settings' , '/login/onboarding']
}