import React from "react";
import Grid from '@material-ui/core/Grid';
import {ContentTitle, SectionSubheader} from './TextStyles'
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Rating from '@material-ui/lab/Rating';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import {Colors} from './values/colors.js'
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
    item: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 8,
        paddingTop: 8,
    },
    star: {
        color: Colors.primary,
        fontSize: 20,
    },
}))

export default function AbilitiesSection(data) {
    const classes = useStyles();
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    let columns = {}
    Object.keys(data).map((title) => {
        let splitIndex = Math.ceil(data[title].length / 2)
        let sorted = data[title].sort((a, b) => a['rating'] < b['rating'] ? 1 : -1)
        columns[title] = [sorted.slice(0, splitIndex), sorted.slice(splitIndex)]
    })

    return <React.Fragment>
        {Object.keys(columns).map((title) => (
            <Grid container spacing={smDown ? 0 : 2}>
                <Grid item xs={12}>
                    <SectionSubheader>{title}</SectionSubheader>
                </Grid>
                {columns[title].map(col => (
                    <Grid item xs={12} md={6} spacing={0}>
                        {col.map((item) => (
                            <Grid container justify="space-between" alignItems={'center'} className={classes.item}>
                                <Grid item>
                                    <ContentTitle>
                                        {item['title'].toString()}
                                    </ContentTitle>
                                </Grid>
                                <Grid item>
                                    <Rating icon={<StarRoundedIcon className={classes.star}/>} emptyIcon={<StarOutlineRoundedIcon className={classes.star}/>} value={item['rating']} readOnly/>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </Grid>
        ))}
    </React.Fragment>
}