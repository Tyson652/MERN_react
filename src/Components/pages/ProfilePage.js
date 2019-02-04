import React, { Component } from "react";
import NavBar from "./../NavBar";
import ProfileInfoCard from "../cards/ProfileInfoCard";
import ChallengeCard from "./../cards/ChallengeCard";
import LocalApi from "./../../apis/local";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    minHeight: "100vh",
    backgroundImage: `url(https://s3-ap-southeast-2.amazonaws.com/1up.webapp/background-white-abstract.jpg)`,
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    boxShadow: "inset 0 0 0 3000px rgba(255, 255, 255, 0.90)"
  },
  cardContainer: {
    margin: "30px"
  },
  typography: {
    textAlign: "center",
    marginTop: "30px",
    color: "grey"
  },
  typographyBG: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "40%",
    padding: theme.spacing.unit * 2
  }
});

class ProfilePage extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const { match } = this.props;
    try {
      const response = await LocalApi.get(`/profile/${match.params.id}`);
      this.setState({ user: response.data });
    } catch (error) {
      console.warn(error);
    }
  };

  render() {
    const { classes } = this.props;
    const { user } = this.state;

    return (
      <div>
        <NavBar {...this.props} />
        <div className={classes.container}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={8}>
              <div className={classes.cardContainer}>
                <ProfileInfoCard {...user} />
              </div>

              <Typography className={classes.typography} variant="h5">
                <span className={classes.typographyBG}>
                  completed {(user && user.submissions.length) || 0} challenges
                </span>
              </Typography>

              {user &&
                user.submissions.map(submission => {
                  return (
                    <div key={submission._id} className={classes.cardContainer}>
                      <ChallengeCard
                        id={submission.challengeId}
                        user_id={user._id}
                        nickname={user.nickname}
                        profile_image={user.profile_image}
                        title={submission.challengeTitle}
                        yt_id={submission.yt_id}
                        description={submission.description}
                        date_created={submission.createdAt}
                      />
                    </div>
                  );
                })}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProfilePage);
