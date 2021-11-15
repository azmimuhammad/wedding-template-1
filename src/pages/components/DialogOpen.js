import React from 'react'
import { Dialog, DialogContent, Typography, Button } from '@material-ui/core'
import flowerDivider from '../../assets/img/flowerDivider.png'
import borderBottom from '../../assets/img/wedding-background.jpg'

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
        fontSize: '50px',
        color: '#826400',
    },
    content: {
        fontFamily: 'Courgette',
        color: '#2c2a4f'
    },
    dialog: {
        background: `url(${borderBottom})`,
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
    },
    button: {
        margin: '50px 0px',
        textTransform: 'capitalize',
        fontFamily: 'Berkshire Swash',
    },
    divider: {
        width: '80%',
        marginBottom: '40px'
    }
}

const DialogComponent = props => {
    const { open, handleClose } = props
    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            open={open}
        >
            <DialogContent style={styles.dialog}>
                <Typography style={styles.subTitle}>Aina & Azmi</Typography>
                <img src={flowerDivider} style={styles.divider} alt="" />
                <Typography style={styles.content}>Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/Saudari di acara pernikahan kami.</Typography>
                <Button variant="outlined" color="primary" style={styles.button} onClick={() => handleClose()}>Buka Undangan</Button>
            </DialogContent>
        </Dialog>
    )
}

export default DialogComponent