import { News } from "@/server/entity/news"
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { useRouter } from "next/router"

export default function NewsCard({ data }: { data: News | null | undefined }) {
    const router = useRouter()
    const onCardClick = () => {
        if (data) {
            router.replace(data.url)
        }
    }
    return (
        <>
            {data ? (
                <Card >
                    <CardActionArea onClick={onCardClick}>
                        {data.img_url !== '' ? (<CardMedia component={'img'}
                            height={140}
                            image={data.img_url} />) : null}

                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">{data.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data.abstractive}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ) : null}
        </>)
}