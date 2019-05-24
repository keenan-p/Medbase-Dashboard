import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { CardHeader, MuiThemeProvider } from "@material-ui/core";
import PatientList from "./PatientList";

const styles = theme => ({
  card: {
    minWidth: 475,
    boxShadow: "5px 5px 53px 0px rgba(0,0,0,0.62)",
    marginBottom: theme.spacing.unit * 3
  },
  CardHeader: {
    maxHeight: 1
  }
});

const AuthCard = props => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        style={{ marginBottom: -20 }}
        action={
          <Button
            variant={props.buttonVariant}
            color="primary"
            disabled={props.buttonDisabled}
          >
            {props.buttonText}
          </Button>
        }
        title={props.title}
        titleTypographyProps={{ variant: "subtitle2" }}
      />
      <CardContent>
        <PatientList
          patients={props.content}
          title={props.title}
          buttonVariant={props.buttonVariant}
          buttonDisabled={props.buttonDisabled}
        />
      </CardContent>
    </Card>
  );
};

AuthCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AuthCard);
