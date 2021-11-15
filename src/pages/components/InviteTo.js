import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core"

const styles = {
    paper: {
        padding: '20px',
        background: 'rgba(232, 232, 232, 0.6)'
    },
    title: {
        fontFamily: 'Hobo Std',
        fontSize: '24px',
        color: '#00396b',
        marginBottom: '15px'
    },
    subTitle: {
        fontFamily: 'Brush Script Std',
        fontSize: '24px',
        color: '#826400'
    },
    content: {
        fontFamily: 'Lucida Sans Unicode',
        color: '#2c2a4f'
    },
}

const InviteToComponent = () => {
    return (
        <Grid container style={{ marginTop: '30px' }}>
            <Grid item xs={1} sm={2}></Grid>
            <Grid item xs={10} sm={8}>
                <Paper elevation={3} style={styles.paper}>
                    <Typography style={styles.title}>Turut Mengundang</Typography>
                    <Typography style={styles.subTitle}>Bapak H. Ruhimat S.Pd., M.Si</Typography>
                    <Typography style={styles.content}>
                        (Bupati Subang)
                    </Typography>
                    <Typography style={styles.subTitle}>Bapak H. Agus Masykur Rosyadi S.Si., MM.</Typography>
                    <Typography style={styles.content}>
                        (Wakil Bupati Subang)
                    </Typography>
                    <Typography style={styles.subTitle}>Bapak Drs. H. Asep Nuroni M.Si</Typography>
                    <Typography style={styles.content}>
                        (Sekda Kabupaten Subang)
                    </Typography>
                    <Typography style={styles.subTitle}>Keluarga Besar Al-Ukhuwah</Typography>
                </Paper>
            </Grid>
            <Grid item xs={1} sm={2}></Grid>
        </Grid>
    )
}
export default InviteToComponent