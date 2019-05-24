import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AuthCard from "./AuthCard";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit * 2
  },
  AuthCard: {
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class CardGrid extends React.Component {
  state = {
    pending: [
      ["Lavar Ball", "MRI left knee"],
      ["Cristiano Ronaldo", "MRI right knee"],
      ["Lavar Ball", "MRI left knee"],
      ["Cristiano Ronaldo", "MRI right knee"]
    ],
    requested: [["0x777779999C", ""]],
    completed: [
      ["James Harden", "Antibiotics"],
      ["Kyrie Irving", "Esomeprazole"]
    ],
    failed: [["Kevin Durant", "Need clearer indication for opioid analgesics"]]
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item sm>
            <AuthCard
              title="Prior Authorization Pending"
              buttonText="Refresh"
              content={this.state.pending}
              buttonVariant="contained"
              buttonVisibility="visible"
              buttonDisabled={false}
            />
            <AuthCard
              title="Access Requested"
              buttonText=""
              content={this.state.requested}
              buttonVariant="text"
              buttonVisibility="hidden"
              buttonDisabled={true}
            />
          </Grid>
          <Grid item sm>
            <AuthCard
              title="Prior Authorization Completed"
              buttonText=""
              content={this.state.completed}
              buttonVariant="text"
              buttonVisibility="hidden"
              buttonDisabled={true}
            />
            <AuthCard
              title="Prior Authorization Failed"
              buttonText=""
              content={this.state.failed}
              buttonVariant="text"
              buttonVisibility="hidden"
              buttonDisabled={false}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

CardGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardGrid);
