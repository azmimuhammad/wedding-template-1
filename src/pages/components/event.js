import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core"
import Fade from 'react-reveal/Fade';

const styles = {
    paper: {
        padding: '20px',
        background: 'rgba(232, 232, 232, 0.6)',
        height: '320px'
    },
    title: {
        fontFamily: 'Berkshire Swash',
        fontSize: '30px',
        color: '#00396b',
        marginBottom: '25px'
    },
    content: {
        fontFamily: 'Courgette',
        color: '#2c2a4f'
    },
    flexColumnBetween: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}

const EventComponent = () => {
    return (
        <Grid container style={{ marginTop: '50px' }}>
            <Grid item xs={1} sm={2}></Grid>
            <Grid item xs={10} sm={8}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Fade left>
                            <Paper elevation={3} style={{ ...styles.paper, ...styles.flexColumnBetween }}>
                                <div>
                                    <Typography style={styles.title}>Walimatul Ursy</Typography>
                                    <Typography style={styles.content}>
                                        <b>Hari/Tanggal :</b> Sabtu, 20 November 2021
                                    </Typography>
                                    <Typography style={styles.content}>
                                        <b>Akad Nikah : </b> 08.30 - 10.10 WIB
                                    </Typography>
                                    <Typography style={styles.content}>
                                        <b>Resepsi : </b> 11.00 - 15.00 WIB
                                    </Typography>
                                </div>
                                <Typography style={styles.content}>
                                    Yayasan Pendidikan Islam Al-Ukhuwah
                                </Typography>
                            </Paper>
                        </Fade>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Fade right>
                            <Paper elevation={3} style={styles.paper}>
                                <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5129272370655!2d107.80356481477035!3d-6.4565039953290215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6938f6d08e36bb%3A0xcf13d161b07fd05f!2sSDIT%20AL-UKHUWAH!5e0!3m2!1sid!2sid!4v1636994369246!5m2!1sid!2sid" style={{ border: '0', width: '100%', height: '300px' }} allowfullscreen="" loading="lazy"></iframe>
                            </Paper>
                        </Fade>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={1} sm={2}></Grid>
        </Grid>
    )
}
export default EventComponent