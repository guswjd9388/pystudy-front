import { IronSessionData as SessionData } from 'iron-session'

export type SessionUser = {
  id: number // Kakao app user id
  nickname: string // Kakao user nickname
  thumbnail_image_url: string // Kakao user profile image
}

declare module "iron-session" {
  interface IronSessionData extends SessionData {
    user?: SessionUser
  }
}

