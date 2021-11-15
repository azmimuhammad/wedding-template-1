import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core"
import Zoom from 'react-reveal/Zoom';

const styles = {
    paper: {
        padding: '20px',
        background: 'rgba(232, 232, 232, 0.6)'
    },
    subTitle: {
        fontFamily: 'Courgette',
        color: '#00396b'
    },
}

const FooterComopnent = () => {
    return (
        <Grid container style={{ marginTop: '50px' }}>
            <Grid item xs={1} sm={2}></Grid>
            <Grid item xs={10} sm={8}>
                <Zoom>
                    <Paper elevation={3} style={styles.paper}>
                        <Typography style={styles.subTitle}>
                            Atas  berkenannya hadir, kami ucapkan Jazakumullahu Khoir.
                        </Typography>
                    </Paper>
                </Zoom>
            </Grid>
            <Grid item xs={1} sm={2}></Grid>
        </Grid>
    )
}
export default FooterComopnent