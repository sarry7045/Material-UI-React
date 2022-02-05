import React, { useState } from "react";
import {
  Container,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";
import useStyles from "./Style";
import { ArrowRight } from "@material-ui/icons";

const Form = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [comments, setComments] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [commentsError, setCommentsError] = useState(false);
  const [category, setCategory] = useState("Todos");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstNameError(false);
    setLastNameError(false);
    setCommentsError(false);

    if (firstName == "") {
      firstNameError(true);
    }
    if (lastName == "") {
      lastNameError(true);
    }
    if (comments == "") {
      commentsError(true);
    }

    if (firstName && lastName) {
      console.log(firstName, lastName, comments, category);
    }
  };
  return (
    <>
      <div>
        <Container className={classes.cardGrid} maxWidth="md">
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              onChange={(e) => setFirstName(e.target.value)}
              // className={classes.TextField}
              style={{marginBottom:"30px"}}
              label="Enter Your Name"
              variant="outlined"
              color="primary"
              fullWidth
              required
              error={firstNameError}
            />
            <TextField
              onChange={(e) => setLastName(e.target.value)}
              // className={classes.TextField}
              style={{marginBottom:"30px"}}
              label="Enter Your Last Name"
              variant="outlined"
              color="primary"
              fullWidth
              required
              error={lastNameError}
            />
            <TextField
              // className={classes.TextField}
              style={{marginBottom:"30px"}}
              onChange={(e) => setComments(e.target.value)}
              label="Enter Comments"
              variant="outlined"
              color="primary"
              fullWidth
              required
              multiline
              rows={4}
              error={commentsError}
            />
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                value="Todos"
                control={<Radio />}
                label="React"
              />
              <FormControlLabel
                value="Redux"
                control={<Radio />}
                label="Redux"
              />
              <FormControlLabel value="Next" control={<Radio />} label="Next" />
            </RadioGroup>
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
              color="Primary"
              endIcon={<ArrowRight />}
            >
              Submit{" "}
            </Button>
            {/* <Radio label="React"/> */}
          </form>
        </Container>
      </div>
    </>
  );
};

export default Form;
