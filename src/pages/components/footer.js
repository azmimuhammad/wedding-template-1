import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core"

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
        color: '#00396b',
        margin: '15px 0px'
    },
    subTitle: {
        fontFamily: 'Brush Script Std',
        fontSize: '24px',
        color: '#826400'
    },
    content: {
        fontFamily: 'Lucida Sans Unicode',
        // fontSize: '24px',
        color: '#2c2a4f'
    }
}

const FooterComopnent = () => {
    return (
        <Grid container style={{ marginTop: '30px' }}>
            <Grid item xs={1} sm={2}></Grid>
            <Grid item xs={10} sm={8}>
                <Paper elevation={3} style={styles.paper}>
                    <Typography style={styles.subTitle}>
                        Atas  berkenannya hadir, kami ucapkan Terima Kasih adn Jazakumullohu Khoir.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={1} sm={2}></Grid>
        </Grid>
    )
}
export default FooterComopnent