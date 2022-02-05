import { makeStyles } from "@material-ui/core";

const CPStyles = makeStyles(() => ({
  wrapper: {
    width: "100%",
    overflowX: "hidden",
  },
  toolBar: {
    background: "#fff",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
  },
  input: {
    width: "20px",
  },
  gridWrapper: {
    width: "100%",
    height: "calc(100vh - 70px)",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: "8px 16px",
    background: "transparent",
    borderRadius: "20px",
    fontSize: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default CPStyles;
