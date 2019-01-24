import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import { connect } from "react-redux";
import { addChallenge } from "./../../actions"

class NewChallengeForm extends Component {
    onUploadSubmit = (formValues) => {
        const { title, description, video } = formValues;
        this.uploadFile(video[0], title, description);
    }

    uploadFile = (file, title, description) => {
        const { addChallenge } = this.props;

        const fd = new FormData();
        fd.append("video", file);
        fd.append("title", title);
        fd.append("description", description);

        addChallenge(fd);
    }

    render() {
        const { handleSubmit, } = this.props;

        return (
            <form onSubmit= {handleSubmit(this.onUploadSubmit)} encType="multipart/form-data">
                <div>
                    <Field
                    name="title"
                    component={Input}
                    placeholder="title"
                    type="text"
                    />
                </div>
                <div>
                    <Field
                    name="description"
                    component={Input}
                    placeholder="description of challenge"
                    type="text"
                    />
                </div>
                <div>
                    <Field
                    name="video"
                    component={Input}
                    type="file"
                    required="true"
                    />
                </div>
                <div>
                    <Field
                    type="submit"
                    component={Input}
                    value="submit"
                    />
                </div>
            </form>
        );
    }
}

//include validation on video on form

const WrappedNewChallengeForm = reduxForm({
    form: "upload",
    validate: ({
        title, description
    }) => {
    const errors = {}
    
    if (!title) {
        errors.title = "title is required!"
    }

    if (!description) {
        errors.description = "video description is required!"
    }

    return errors;

    }
})(NewChallengeForm);

const mapStateToProps = (state) => {
    return {
        challenges: state.challenges
    };
}

export default connect(mapStateToProps, {
    addChallenge
})(WrappedNewChallengeForm);