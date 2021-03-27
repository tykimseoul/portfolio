import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import {SectionSubheader, ContentTitle, ContentSubtitle,DateRangeText, LocationText} from './TextStyles'


export default function ExperiencesSection(data) {
    return <React.Fragment>
        {Object.keys(data).map((title) => (
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <SectionSubheader>{title}</SectionSubheader>
                </Grid>
                {data[title].map((item) => (
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={5}>
                                <Grid item xs={12}>
                                    <ContentTitle>
                                        {item['title'].toString()}
                                    </ContentTitle>
                                </Grid>
                                <Grid item xs={12}>
                                    <DateRangeText startYear={item['startDate']['year']} startMonth={item['startDate']['month']} endYear={item['endDate']['year']} endMonth={item['endDate']['month']}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <LocationText location={item['location']}/>
                                </Grid>
                            </Grid>
                            <Grid item xs={7}>
                                <Grid item xs={12}>
                                    <ContentTitle>
                                        {item['subtitle'].toString()}
                                    </ContentTitle>
                                </Grid>
                                <Grid item xs={12}>
                                    <ContentSubtitle>
                                        {item['description'].toString()}
                                    </ContentSubtitle>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        ))}
    </React.Fragment>
}