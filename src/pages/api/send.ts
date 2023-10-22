import { SessionOption } from "@/server/withUser";
import Paths from "@/utils/Paths";
import axios from "axios";
import { withIronSessionApiRoute } from 'iron-session/next';

export default withIronSessionApiRoute(async (req, res) => {
    if (req.session.user) {
        const { type } = req.body
        try {
            const res = await axios.post(Paths.PYTHON_NOTICE_START, {
                type,
                user_id: req.session.user.id
            })
        } catch (e) {
            console.error('ERROR', e)
            return res.status(500).json({ reason: `${e}` })
        }
        return res.status(200).json({ success: true })
    } else {
        return res.status(401).json({ reason: '로그인이 필요합니다.' })
    }
}, SessionOption)