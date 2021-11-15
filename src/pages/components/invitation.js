import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core"
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const styles = {
    paper: {
        padding: '20px',
        background: 'rgba(232, 232, 232, 0.6)'
    },
    title: {
        fontFamily: 'Berkshire Swash',
        fontSize: '30px',
        color: '#00396b',
        margin: '20px 0px 25px 0px',
    },
    subTitle: {
        fontFamily: 'Petemoss',
        fontSize: '35px',
        color: '#826400'
    },
    content: {
        fontFamily: 'Courgette',
        color: '#2c2a4f'
    }
}

const Invitation = () => {
    return (
        <Grid container style={{ marginTop: '50px' }}>
            <Grid item xs={1} sm={2}></Grid>
            <Grid item xs={10} sm={8}>
                <Zoom>
                    <Paper elevation={3} style={styles.paper}>
                        <Zoom>
                            <Typography style={styles.content}>
                                Mengundang Bapak/Ibu, Saudara/Saudari sekalian agar berkenan hadir dan memberikan do'a restu dalam acara
                            </Typography>
                            <Typography style={styles.title}>Walimatul Ursy</Typography>
                        </Zoom>
                        <Fade left>
                            <Typography style={styles.subTitle}>Aina Rosyda Syamila SS.</Typography>
                            <Typography style={styles.content}>(Putri Ketika KH. A Sugianto & Ibu Hj. Kokom Komariah)</Typography>
                        </Fade>
                        <Zoom>
                            <Typography variant="h6" style={{ margin: '10px 0px' }}>Dengan</Typography>
                        </Zoom>
                        <Fade right>
                            <Typography style={styles.subTitle}>Azmi Muhammad ST.</Typography>
                            <Typography style={styles.content}>(Putra Pertama Bapak Ahmad Yani & Ibu Eli Salamah)</Typography>
                        </Fade>
                    </Paper>
                </Zoom>
            </Grid>
            <Grid item xs={1} sm={2}></Grid>
        </Grid>
    )
}
export default Invitation