import React from "react";
import {
  Grid,
  Paper,
  Container,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  Avatar,
} from "@material-ui/core";

const Page1 = () => {
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sm={6}>
            {/* <Paper>This Grid Container</Paper> */}
            <Card>
              <CardHeader
                action={
                  <IconButton>
                    <Avatar alt="Remy Sharp" src="./Images/img.jpg" />
                  </IconButton>
                }
                title="Title"
                subheader="Header"
              />
              <CardContent>
                <Typography variant="body2">
                  Description is the pattern of narrative development that aims
                  to make vivid a place, object, character, or group.
                  Description is one of four rhetorical modes, along with
                  exposition, argumentation, and narration.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            {/* <Paper>This Grid Container</Paper> */}
            <Card>
              <CardHeader
                action={
                  <IconButton>
                    <Avatar alt="Remy Sharp" src="./Images/img.jpg" />
                  </IconButton>
                }
                title="Title"
                subheader="Header"
              />
              <CardContent>
                <Typography variant="body2">
                  Description is the pattern of narrative development that aims
                  to make vivid a place, object, character, or group.
                  Description is one of four rhetorical modes, along with
                  exposition, argumentation, and narration.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            {/* <Paper>This Grid Container</Paper> */}
            <Card>
              <CardHeader
                action={
                  <IconButton>
                    <Avatar alt="Remy Sharp" src="./Images/img.jpg" />
                  </IconButton>
                }
                title="Title"
                subheader="Header"
              />
              <CardContent>
                <Typography variant="body2">
                  Description is the pattern of narrative development that aims
                  to make vivid a place, object, character, or group.
                  Description is one of four rhetorical modes, along with
                  exposition, argumentation, and narration.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            {/* <Paper>This Grid Container </Paper> */}
            <Card>
              <CardHeader
                action={
                  <IconButton>
                    <Avatar alt="Remy Sharp" src="./Images/img.jpg" />
                  </IconButton>
                }
                title="Title"
                subheader="Header"
              />
              <CardContent>
                <Typography variant="body2">
                  Description is the pattern of narrative development that aims
                  to make vivid a place, object, character, or group.
                  Description is one of four rhetorical modes, along with
                  exposition, argumentation, and narration.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container></Container>
    </>
  );
};

export default Page1;
