// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { AppDataSource, ensureAppDataSource } from '@/server/datasource';
import { News } from '@/server/entity/news';
import { Users } from '@/server/entity/users';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import qs from 'qs';

const UsersRepo = AppDataSource.getRepository(Users)
const KAKAO_REST_API_KEY = '30f0ecb6a33ec395f914133052bc85a2'
const REDIRECT_URI = 'http://pystudy.duckdns.org/api/auth/kakao'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<News | null>
) {
    const { code } = req.query as { code: string }
    await ensureAppDataSource()

    const token_res = await axios.post('https://kauth.kakao.com/oauth/token', qs.stringify({
        'grant_type': 'authorization_code',
        'client_id': KAKAO_REST_API_KEY,
        'redirect_uri': REDIRECT_URI,
        'code': code
    }))

    const token = token_res.data
    const access_token = token.access_token
    const refresh_token = token.refresh_token

    const me_res = await axios.post('https://kapi.kakao.com/v2/user/me', '', {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
    const me = me_res.data
    const id = me['id']
    const profile = me['kakao_account']['profile']
    const nickname = profile['nickname'] ?? ''
    const thumbnail_image_url = profile['thumbnail_image_url'] ?? ''

    let use_talk = true
    try {
        await axios.post('https://kapi.kakao.com/v1/api/talk/profile', '', {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
    } catch {
        use_talk = false
    }

    if (await UsersRepo.exist({ where: { id: id } })) {
        await UsersRepo.update({ id: id }, {
            access_token, refresh_token, use_talk
        })
    } else {
        await UsersRepo.insert({
            id, nickname, thumbnail_image_url, access_token, refresh_token, use_talk
        })
    }
    res.redirect('/')
}
