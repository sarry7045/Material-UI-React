import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  Tooltip,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./Style";

const cardss = [1, 2, 3, 4, 5, 6];

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6"> Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h4"
              color="textPrimary"
              align="center"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h6"
              color="secondary"
              align="center"
              gutterBottom
              paragraph
            >
              {" "}
              A step-by-step checkout page layout. Adapt the number of steps to
              suit your needs, or make steps optional.
            </Typography>

            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Tooltip title="Button" placement="top">
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<PhotoCamera />}
                    >
                      Photos
                    </Button>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<PhotoCamera />}
                  >
                    Photos Secondary
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cardss.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6">
                      Heading{" "}
                    </Typography>
                    <Typography>
                      A responsive album / gallery page layout with a hero unit
                      and footer.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      {" "}
                      View
                    </Button>
                    <Button size="small" color="primary">
                      {" "}
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Home;
