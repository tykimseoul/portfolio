import React from "react";
import Grid from '@material-ui/core/Grid';
import {ContentTitle, DateRangeText, SectionSubheader} from './TextStyles'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    item: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 8,
        paddingTop: 8,
    },
}))

export default function ExtracurricularsSection(data) {
    const classes = useStyles();

    return <React.Fragment>
        {Object.keys(data).map((title) => (
            <Grid container>
                <Grid item xs={12}>
                    <SectionSubheader>{title}</SectionSubheader>
                </Grid>
                <Grid item xs={12}>
                    {data[title].map((item) => (
                        <Grid container spacing={2} className={classes.item}>
                            <Grid item xs={6}>
                                <Grid item xs={12}>
                                    <ContentTitle>
                                        {item['title'].toString()}
                                    </ContentTitle>
                                </Grid>
                                <Grid item xs={12}>
                                    <DateRangeText start={item['startDate']} end={item['endDate']}/>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid item xs={12}>
                                    <ContentTitle>
                                        {item['subtitle'].toString()}
                                    </ContentTitle>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        ))}
    </React.Fragment>
}