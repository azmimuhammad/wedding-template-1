import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core"

const styles = {
    paper: {
        padding: '20px',
        background: 'rgba(232, 232, 232, 0.6)'
    },
    content: {
        fontFamily: 'Lucida Sans Unicode',
        color: '#2c2a4f'
    }
}

const QuotesComponent = () => {
    return (
        <Grid container style={{ marginTop: '30px' }}>
            <Grid item xs={1} sm={2}></Grid>
            <Grid item xs={10} sm={8}>
                <Paper elevation={3} style={styles.paper}>
                    <Typography style={styles.content}>
                        "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang deimkian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
                    </Typography>
                    <Typography style={{ ...styles.content, marginTop: '10px' }} variant="h6">(QS Ar-Rum: 21)</Typography>
                </Paper>
            </Grid>
            <Grid item xs={1} sm={2}></Grid>
        </Grid>
    )
}
export default QuotesComponent