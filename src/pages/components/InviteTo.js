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
        marginBottom: '25px'
    },
    subTitle: {
        fontFamily: 'Petemoss',
        fontSize: '35px',
        color: '#826400'
    },
    content: {
        fontFamily: 'Courgette',
        color: '#2c2a4f'
    },
}

const InviteToComponent = () => {
    return (
        <Grid container style={{ marginTop: '50px' }}>
            <Grid item xs={1} sm={2}></Grid>
            <Grid item xs={10} sm={8}>
                <Zoom>
                    <Paper elevation={3} style={styles.paper}>
                        <Typography style={styles.title}>Turut Mengundang</Typography>
                        <Fade left>
                            <Typography style={styles.subTitle}>Bapak H. Ruhimat S.Pd., M.Si</Typography>
                            <Typography style={styles.content}>
                                (Bupati Subang)
                            </Typography>
                        </Fade>
                        <Fade right>
                            <Typography style={styles.subTitle}>Bapak H. Agus Masykur Rosyadi S.Si., MM.</Typography>
                            <Typography style={styles.content}>
                                (Wakil Bupati Subang)
                            </Typography>
                        </Fade>
                        <Fade left>
                            <Typography style={styles.subTitle}>Bapak Drs. H. Asep Nuroni M.Si</Typography>
                            <Typography style={styles.content}>
                                (Sekda Kabupaten Subang)
                            </Typography>
                        </Fade>
                        <Fade right>
                            <Typography style={styles.subTitle}>Keluarga Besar Al-Ukhuwah</Typography>
                        </Fade>
                    </Paper>
                </Zoom>
            </Grid>
            <Grid item xs={1} sm={2}></Grid>
        </Grid>
    )
}
export default InviteToComponent