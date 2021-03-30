import React, {useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import {Colors} from './values/colors.js'
import MenuItem from './MenuItem'
import AboutSection from './AboutSection'
import ExperiencesSection from './ExperiencesSection'
import ExtracurricularsSection from './ExtracurricularsSection'
import AbilitiesSection from './AbilitiesSection'
import ContactsSection from './ContactsSection'
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
        fontFamily: `'Montserrat', sans-serif`,
        fontWeight: 700,
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
    contactsBackground: {
        backgroundColor: Colors.primary
    },
    languageButton: {
        fontFamily: `'Montserrat', sans-serif`,
        fontWeight: 500,
        fontSize: '1rem'
    },
    languageButtonGroup: {
        marginLeft: theme.spacing(2),
    }
}));

const LanguageButtonGroup = withStyles((theme) => ({
    grouped: {
        padding: 4,
        border: 'none',
        backgroundColor: 'transparent',
        '&:not(:first-child)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-child': {
            borderRadius: theme.shape.borderRadius,
        },
        '&.Mui-selected': {
            color: Colors.primary,
            backgroundColor: 'transparent',
            "&:hover": {
                backgroundColor: Colors.hoverWhite
            },
            '& .MuiTypography-root': {
                fontWeight: 700,
            }
        },
        "&:hover": {
            backgroundColor: Colors.hoverWhite
        },
    },
}))(ToggleButtonGroup);

let menuTitles = {'about': AboutSection, 'experiences': ExperiencesSection, 'extracurriculars': ExtracurricularsSection, 'abilities': AbilitiesSection, 'contacts': ContactsSection};

export default function Main() {
    const classes = useStyles();

    const [language, setLanguage] = useState('en')

    const handleLanguage = (event, newLanguage) => {
        if (newLanguage !== null) {
            setLanguage(newLanguage);
        }
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Taeyoon Kim
                    </Typography>
                    {Object.keys(data).map((title) => (
                        <MenuItem key={title}>
                            {title}
                        </MenuItem>
                    ))}
                    <LanguageButtonGroup size="small" value={language} exclusive onChange={handleLanguage} aria-label="text alignment" className={classes.languageButtonGroup}>
                        <ToggleButton value="kr" aria-label="left aligned">
                            <Typography className={classes.languageButton}>KR</Typography>
                        </ToggleButton>
                        <ToggleButton value="en" aria-label="right aligned">
                            <Typography className={classes.languageButton}>EN</Typography>
                        </ToggleButton>
                    </LanguageButtonGroup>
                </Toolbar>
            </AppBar>
            <main className={classes.content} id={'container'}>
                <div className={classes.appBarSpacer}/>
                {Object.keys(menuTitles).map((title, index) => {
                    if (index === 0) {
                        return <Grid container justify="center">
                            <Grid item xs={11} md={7} id={title}>
                                {menuTitles[title](data[title], language)}
                            </Grid>
                        </Grid>
                    } else if (title === 'contacts') {
                        let triangleHeight = 7
                        return <Grid container className={classes.contactsBackground} justify="center" spacing={0}>
                            <Grid item xs={12}>
                                <svg preserveAspectRatio="xMaxYMid" viewBox={`0 0 100 ${triangleHeight * 1.3}`}>
                                    <path
                                        fill={Colors.white}
                                        d={`M 0 0 L 50 ${triangleHeight} L 100 0 L 0 0`}
                                    />
                                </svg>
                            </Grid>
                            <Grid item xs={12} md={7} id={title}>
                                <SectionHeader invert={true}>{title}</SectionHeader>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                {menuTitles[title](data[title], language)}
                            </Grid>
                        </Grid>
                    } else {
                        return <Grid container justify="center" spacing={4}>
                            <Grid item xs={12} md={7} id={title}>
                                <SectionHeader>{title}</SectionHeader>
                            </Grid>
                            <Grid item xs={11} md={7}>
                                {menuTitles[title](data[title], language)}
                            </Grid>
                        </Grid>
                    }
                })}
            </main>
        </div>
    );
}
