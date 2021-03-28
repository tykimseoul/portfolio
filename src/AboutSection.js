import React from "react";
import Typography from "@material-ui/core/Typography";
import profile from './IMG_0028.PNG'
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import {Colors} from './values/colors.js'
import Fab from '@material-ui/core/Fab';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

const useStyles = makeStyles((theme) => ({
    circular: {
        borderRadius: "50%",
        width: 296,
        height: 296,
        objectFit: 'cover',
        objectPosition: 'top',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 88
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        color: Colors.textPrimary,
        textTransform: 'none',
        fontFamily: `'Montserrat', sans-serif`,
        fontWeight: 500,
        fontSize: '1.4rem',
        marginTop: 56,
        whiteSpace: 'pre-line'
    },
    bio: {
        fontSize: '1.2rem',
        marginTop: 24,
    },
    fab: {
        marginTop: 56,
        marginBottom: 80,
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: Colors.white,
        "&:hover": {
            backgroundColor: Colors.hoverWhite
        },
        "& .MuiTouchRipple-root span": {
            backgroundColor: Colors.primaryLight,
        },
    },
    icon: {
        marginRight: 4,
        color: Colors.primary,
        fontSize: 20,
    },
    cv: {
        color: Colors.primary,
        textTransform: 'none',
        fontFamily: `'Montserrat', sans-serif`,
        fontWeight: 500,
        fontSize: '1rem',
    }
}))

export default function AboutSection(data) {
    const classes = useStyles();

    return <React.Fragment>
        <Grid container justify="center" spacing={0}>
            <Grid item xs={12} className={classes.center}>
                <img src={profile} className={classes.circular} alt={'profile'}/>
            </Grid>
            <Grid item xs={12} className={classes.center}>
                <Typography className={classes.message} align={'center'}>{data['greetings']}</Typography>
            </Grid>
            <Grid item xs={8} md={6} className={classes.center}>
                <Typography className={`${classes.message} ${classes.bio}`} align={'center'}>{data['bio']}</Typography>
            </Grid>
            <Grid item xs={12} className={classes.center}>
                <Fab
                    variant="extended"
                    size="large"
                    className={classes.fab}>
                    <DescriptionOutlinedIcon className={classes.icon}/>
                    <Typography className={classes.cv}>CurriculumVitae</Typography>
                </Fab>
            </Grid>

        </Grid>
    </React.Fragment>
}