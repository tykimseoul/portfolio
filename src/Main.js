import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Colors} from './values/colors.js'
import MenuItem from './MenuItem'
import AboutSection from './AboutSection'
import ExperiencesSection from './ExperiencesSection'
import ExtracurricularsSection from './ExtracurricularsSection'
import AbilitiesSection from './AbilitiesSection'
import SectionHeader from './TextStyles'
import {data} from './data'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 36,
        paddingLeft: 36
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: Colors.white
    },
    title: {
        flexGrow: 1,
        color: Colors.textPrimary,
        textTransform: 'uppercase',
        fontFamily: 'Montserrat-Bold',
        fontSize: '1.1rem'
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflowY: 'auto',
        overflowX: "hidden"
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
}));

var menuTitles = {'about': AboutSection, 'experiences': ExperiencesSection, 'extracurriculars': ExtracurricularsSection, 'abilities': AbilitiesSection, 'contact': AboutSection}

export default function Main() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Taeyoon Kim
                    </Typography>
                    {Object.keys(data).map((title) => (
                        <MenuItem key={title}>
                            {title}
                        </MenuItem>
                    ))}
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                {Object.keys(data).map((title) => (
                    <Grid container className={classes.container} justify="center" spacing={4}>
                        <Grid item xs={12} md={7}>
                            <SectionHeader>{title}</SectionHeader>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            {menuTitles[title](data[title])}
                        </Grid>
                    </Grid>
                ))}
            </main>
        </div>
    );
}