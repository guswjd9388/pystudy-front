import NewsCard from "@/comp/news_card"
import { News } from "@/server/entity/news"
import { Box, Container, Grid } from "@mui/material"
import { useRouter } from "next/router"
import useSWR from "swr"

export default function NewsId() {
    const router = useRouter()
    const { id } = router.query
    const { data } = useSWR<News>(id ? `/api/news/${id}` : null)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container fixed>
                <Grid container spacing={4}>
                    {data ? <NewsCard data={data} /> : null}
                </Grid>
            </Container>
        </Box>
    )
}