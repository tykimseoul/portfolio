import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Colors} from './values/colors.js'
import moment from 'moment'
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const useStyles = makeStyles((theme) => ({
    sectionHeader: {
        color: Colors.textPrimary,
        textTransform: 'uppercase',
        fontFamily: `'Montserrat', sans-serif`,
        fontWeight: 500,
        fontSize: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    invertedSectionHeader: {
        color: Colors.white
    },
    sectionSubheader: {
        color: Colors.textPrimary,
        textTransform: 'capitalize',
        fontFamily: `'Montserrat', sans-serif`,
        fontWeight: 700,
        fontSize: '1.1rem',
        paddingTop: 16
    },
    contentTitle: {
        color: Colors.textPrimary,
        textTransform: 'none',
        fontFamily: `'Montserrat', sans-serif`,
        fontWeight: 500,
        fontSize: '1.1rem',
        paddingBottom: 8
    },
    contentSubtitle: {
        color: Colors.textPrimary,
        textTransform: 'none',
        fontFamily: `'Montserrat', sans-serif`,
        fontWeight: 400,
        fontSize: '1rem',
    },
    row: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    icon: {
        color: Colors.primary,
        marginRight: 8,
        fontSize: 20,
        marginBottom: 8
    }
}))

export default function SectionHeader(props) {
    const classes = useStyles();

    return <React.Fragment>
        <Typography className={props.invert ? `${classes.sectionHeader} ${classes.invertedSectionHeader}` : classes.sectionHeader}>{props.children}</Typography>
    </React.Fragment>
}

export function SectionSubheader(props) {
    const classes = useStyles();

    return <React.Fragment>
        <Typography className={classes.sectionSubheader}>{props.children}</Typography>
    </React.Fragment>
}

export function ContentTitle(props) {
    const classes = useStyles();

    return <React.Fragment>
        <Typography className={classes.contentTitle}>{props.children}</Typography>
    </React.Fragment>
}

export function ContentSubtitle(props) {
    const classes = useStyles();

    return <React.Fragment>
        <Typography className={classes.contentSubtitle}>{props.children}</Typography>
    </React.Fragment>
}

export function DateRangeText(props) {
    let endDate;
    let range;
    const classes = useStyles();

    let startDate = moment(props.start['year'].toString() + props.start['month'].toString().padStart(2, 0), 'YYYYMM').format('MMM. YYYY')
    if (props.end === undefined) {
        range = startDate;
    } else {
        if (props.end['year'] === -1) {
            endDate = 'Today';
        } else {
            endDate = moment(props.end['year'].toString() + props.end['month'].toString().padStart(2, 0), 'YYYYMM').format('MMM. YYYY');
        }
        range = `${startDate} - ${endDate}`;
    }

    return <React.Fragment>
        <div className={classes.row}>
            <EventOutlinedIcon className={classes.icon}/>
            <Typography className={classes.contentTitle}>
                {range}
            </Typography>
        </div>
    </React.Fragment>
}

export function LocationText(props) {
    const classes = useStyles();

    return <React.Fragment>
        <div className={classes.row}>
            <RoomOutlinedIcon className={classes.icon}/>
            <Typography className={classes.contentTitle}>
                {props.location}
            </Typography>
        </div>
    </React.Fragment>
}