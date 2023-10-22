import { SessionUser } from "@/types";
import { Avatar, Box, Button, Chip, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";

type ManageHomeProps = {
    user: SessionUser
}

const NEWS_TYPES: string[][] = [
    ['FINANCE_COIN', '가상자산'],
    ['FINANCE_EXCHANGE', '금융 외환'],
    ['FINANCE_MARKET', '금융 시장'],
    ['FINANCE_NEWEST', '금융 최신'],
    ['FINANCE_PRIVATE', '개인 금융'],
    ['IT_GEEK_NEWS', 'IT 기술 최신']
]

export default function ManageHome(props: ManageHomeProps) {
    const onNitifyClick = async (type: string) => {
        await axios.post(`/api/send`, {
            type
        })
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container fixed>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 1 }}>
                            <Stack direction={'row'} spacing={1}>
                                <Avatar src={props.user.thumbnail_image_url} />
                                <Stack>
                                    <Typography variant={'body2'}>id: {props.user.id}</Typography>
                                    <Typography variant={'body2'}>{props.user.nickname}</Typography>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 1 }}>
                            <Stack spacing={1}>
                                <Typography variant={'overline'}>알림 발송</Typography>
                                <Stack direction={'row'} spacing={0.5}>
                                    {NEWS_TYPES.map(v => (
                                        <Button key={v[0]} size={'small'} variant={'outlined'}
                                            onClick={() => onNitifyClick(v[0])}>{v[1]}</Button>
                                    ))}
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}