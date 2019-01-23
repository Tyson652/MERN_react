import React, { Component } from "react";
import SubmissionForm from "./../forms/SubmissionForm";

class SubmissionPage extends Component {

    render() {
        console.log("rendered");
        return (
            <div>
                <h1> Submit Challenge </h1>
                <SubmissionForm />
            </div>
            );
        }
}

export default SubmissionPage;
