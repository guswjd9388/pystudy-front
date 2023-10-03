// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { AppDataSource, ensureAppDataSource } from '@/server/datasource'
import { News } from '@/server/entity/news'
import type { NextApiRequest, NextApiResponse } from 'next'

const NewsRepo = AppDataSource.getRepository(News)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<News | null>
) {
  const { id } = req.query as { id: string }
  await ensureAppDataSource()
  const news = await NewsRepo.findOneBy({ id: Number(id) })
  res.status(200).json(news)
}
