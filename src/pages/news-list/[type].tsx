import NewsCard from "@/comp/news_card"
import { News } from "@/server/entity/news"
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Stack, Typography } from "@mui/material"
import { useRouter } from "next/router"
import useSWR from "swr"

export default function NewsListType() {
    const router = useRouter()
    const { type } = router.query
    const { data } = useSWR<News[]>(type ? `/api/news-list/${type}` : null)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container fixed>
                <Grid container spacing={4}>
                    {data?.map(v => (<Grid key={v.id} item xs={12}>
                        <NewsCard data={v} />
                    </Grid>))}
                </Grid>
            </Container>
        </Box>
    )
}