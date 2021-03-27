import React from "react";
import Grid from '@material-ui/core/Grid';
import {List, ListItem} from "@material-ui/core";
import {ContentTitle, SectionSubheader} from './TextStyles'
import {makeStyles} from "@material-ui/core/styles";
import Rating from '@material-ui/lab/Rating';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import {Colors} from './values/colors.js'


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

    let columns = {}
    Object.keys(data).map((title) => {
        let splitIndex = Math.ceil(data[title].length / 2)
        let sorted = data[title].sort((a, b) => a['rating'] < b['rating'] ? 1 : -1)
        let splitList = [sorted.slice(0, splitIndex), sorted.slice(splitIndex)]
        columns[title] = splitList
    })

    return <React.Fragment>
        {Object.keys(columns).map((title) => {
            console.log(columns[title])
            return <Grid container spacing={0}>
                <Grid item xs={12}>
                    <SectionSubheader>{title}</SectionSubheader>
                </Grid>
                {columns[title].map(cols => (
                    <Grid item xs={12} md={6} spacing={0}>
                        <List>
                            {cols.map((item) => (
                                <ListItem className={classes.item}>
                                    <Grid item container xs={12} spacing={4} justify="space-between">
                                        <Grid item>
                                            <ContentTitle>
                                                {item['title'].toString()}
                                            </ContentTitle>
                                        </Grid>
                                        <Grid item>
                                            <Rating icon={<StarRoundedIcon className={classes.star}/>} emptyIcon={<StarOutlineRoundedIcon className={classes.star}/>} value={item['rating']} readOnly/>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                ))}

            </Grid>
        })}
    </React.Fragment>
}