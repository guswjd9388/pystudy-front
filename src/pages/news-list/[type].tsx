import NewsCard from "@/comp/news_card"
import { News } from "@/server/entity/news"
import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { useRouter } from "next/router"
import useSWR from "swr"

export default function () {
    const router = useRouter()
    const { type } = router.query
    const { data } = useSWR<News[]>(type ? `/api/news-list/${type}` : null)

    return (
        <>
            {data ? (
                <Stack spacing={4.5}>
                    {data.map(v => <NewsCard key={v.id} data={v} />)}
                </Stack>
            ) : null}
        </>)
}