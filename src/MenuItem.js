import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import {Colors} from './values/colors.js'


const useStyles = makeStyles((theme) => ({
    menu: {
        color: Colors.textPrimary,
        textTransform: 'none',
        fontFamily: 'Menlo-Bold'
    },
}))

export default function MenuItem(props) {
    const classes = useStyles();

    return <Button>
        <Typography className={classes.menu}>
            .{props.children}()
        </Typography>
    </Button>
}