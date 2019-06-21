import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


class DashboardView extends Component {
    constructor(props) {
        super(props);
        this.state = { classes: this.props.classes }
    }

    render() {

        return (
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <div className={this.state.classes.paper}>
                    <Avatar className={this.state.classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Welcome to Dashboard
                    </Typography>
                </div>
            </Container>

        )
    }
}
export default DashboardView; 