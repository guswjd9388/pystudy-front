// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { AppDataSource, ensureAppDataSource } from '@/server/datasource'
import { News } from '@/server/entity/news'
import type { NextApiRequest, NextApiResponse } from 'next'

const NewsRepo = AppDataSource.getRepository(News)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<News[]>
) {
  const { type } = req.query as { type: string }
  await ensureAppDataSource()
  const news = await NewsRepo.findBy({ type: (type ?? '').replaceAll('-', '_').toUpperCase() })
  res.status(200).json(news)
}
