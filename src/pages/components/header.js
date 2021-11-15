import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core"
import Foto1 from "../../assets/img/pak-kyai-dan-bu-kokom-1-1024x1024.png"
import Zoom from 'react-reveal/Zoom';

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
        margin: '15px 0px 25px 0px',
        fontFamily: 'Berkshire Swash',
        fontSize: '30px',
        color: '#00396b'
    },
    subTitle: {
        fontFamily: 'Petemoss',
        fontSize: '35px',
        color: '#826400',
        margin: 0
    }
}

const HeaderComponent = () => {
    return (
        <Grid container>
            <Grid item xs={1} sm={2}></Grid>
            <Grid item xs={10} sm={8}>
                <Zoom>
                    <Paper elevation={3} style={styles.paper}>
                        <img src={Foto1} alt="" style={styles.imgHeader} />
                        <Typography style={styles.title}>Keluarga Besar</Typography>
                        <Typography style={styles.subTitle}>KH. A Sugianto SIP., SAN</Typography>
                        <Typography style={styles.subTitle}>&</Typography>
                        <Typography style={styles.subTitle}>Hj. Kokom Komariah SPd.I</Typography>
                    </Paper>
                </Zoom>
            </Grid>
            <Grid item xs={1} sm={2}></Grid>
        </Grid>
    )
}
export default HeaderComponent