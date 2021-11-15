import React from "react";
import { Paper, Typography, Grid, Avatar } from "@material-ui/core"
import Zoom from 'react-reveal/Zoom';
import Mask from "../../assets/img/mask.jpg"
import SocialDistancing from "../../assets/img/social-distancing.png"
import WashHand from "../../assets/img/wash-hand.png"

const styles = {
    paper: {
        padding: '20px 20px 50px',
        background: 'rgba(232, 232, 232, 0.6)',
    },
    title: {
        fontFamily: 'Berkshire Swash',
        fontSize: '30px',
        color: '#00396b',
        marginBottom: '35px'
    },
    content: {
        fontFamily: 'Courgette',
        color: '#2c2a4f'
    },
    avatar: {
        margin: '20px auto',
        width: '100px',
        height: '100px',
    }
}

const ProkesComponent = () => {
    const prokesList = [{ title: 'Cuci Tangan', img: WashHand }, { title: 'Gunakan Masker', img: Mask }, { title: 'Jaga Jarak', img: SocialDistancing }]

    return (
        <Grid container style={{ marginTop: '50px' }}>
            <Grid item xs={1} sm={2}></Grid>
            <Grid item xs={10} sm={8}>
                <Zoom>
                    <Paper style={styles.paper}>
                        <Typography style={styles.title}>Protokol Kesehatan</Typography>
                        <Grid container spacing={4}>
                            {prokesList.map((val, key) => {
                                return (
                                    <Grid xs={12} sm={4} key={key}>
                                        <Avatar src={val.img} alt={val.title} style={styles.avatar} />
                                        <Typography style={styles.content}>
                                            {val.title}
                                        </Typography>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Paper>
                </Zoom>
            </Grid>
            <Grid item xs={1} sm={2}></Grid>
        </Grid>
    )
}
export default ProkesComponent