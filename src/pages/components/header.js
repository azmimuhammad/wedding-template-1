import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core"
import Foto1 from "../../assets/img/pak-kyai-dan-bu-kokom-1-1024x1024.png"

const styles = {
    paper: {
        padding: '20px',
        background: 'rgba(232, 232, 232, 0.6)'
    },
    imgHeader: {
        width: '250px',
        height: '250px',
        borderRadius: '50%'
    },
    title: {
        fontFamily: 'Hobo Std',
        fontSize: '24px',
        color: '#00396b'
    },
    subTitle: {
        fontFamily: 'Brush Script Std',
        fontSize: '24px',
        color: '#826400'
    }
}

const HeaderComponent = () => {
    return (
        <Grid container>
            <Grid item xs={1} sm={2}></Grid>
            <Grid item xs={10} sm={8}>
                <Paper elevation={3} style={styles.paper}>
                    <img src={Foto1} alt="" style={styles.imgHeader} />
                    <Typography style={styles.title}>Keluarga Besar</Typography>
                    <Typography style={styles.subTitle}>KG. A Sugianto SIP., SAN</Typography>
                    <Typography style={styles.subTitle}>&</Typography>
                    <Typography style={styles.subTitle}>Hj. Kokom Komariah SPd.I</Typography>
                </Paper>
            </Grid>
            <Grid item xs={1} sm={2}></Grid>
        </Grid>
    )
}
export default HeaderComponent