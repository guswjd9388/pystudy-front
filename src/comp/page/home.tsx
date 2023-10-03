import { Box, ButtonBase, Container, Grid, Paper, Typography } from "@mui/material";

const REDIRECT_URI = 'http://localhost:3000/api/auth/kakao'
export default function _Home() {
    const onLoginClick = () => {
        const Kakao = (window as any)['Kakao'] as any
        Kakao.cleanup()
        Kakao.init('37a1d32cb672b54954066d501a38381c')
        Kakao.Auth.authorize({
            redirectUri: REDIRECT_URI,
        });
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container fixed>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 1 }}>
                            <ButtonBase onClick={onLoginClick}>
                                <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
                                    alt="카카오 로그인 버튼" />
                            </ButtonBase>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}