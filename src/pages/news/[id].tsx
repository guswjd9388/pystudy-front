import NewsCard from "@/comp/news_card"
import { News } from "@/server/entity/news"
import { useRouter } from "next/router"
import useSWR from "swr"

export default function () {
    const router = useRouter()
    const { id } = router.query
    const { data } = useSWR<News>(id ? `/api/news/${id}` : null)
    return (
        <>
            {data ? (
                <NewsCard data={data} />
            ) : null}
        </>)
}