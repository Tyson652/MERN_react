import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = (props) => {
    const { component: Component, token } = props;

    return <Route render={props => {
        if (token) {
            return <Component {...props} />
        }

        return <Redirect to="/portal" />
    }} />
}

const mapStateToProps = (state)  => {
    return {
        token: state.auth.token
    };
}

export default connect(mapStateToProps)(PrivateRoute);