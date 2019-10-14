import { makeStyles } from "@material-ui/core/styles";

export const navStyles = makeStyles(theme => ({
  logo: {
    display: "flex",
    alignItems: "center",
  },
  siteMap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },
  navButton: {
    marginRight: theme.spacing(3),
    color: "#000",
    fontFamily: "Nunito Sans"
  },
  submitNavButton: {
    marginRight: theme.spacing(3),
    color: "#fff",
    fontFamily: "Nunito Sans"
  },
  title: {
    textAlign: "left",
    marginLeft: "20px",
    color: "#000"
  },
  navbar: {
    background: "#fff",
    flexGrow: 1,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
    // marginBottom: "2em",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
      boxShadow: "none"
    }
  },
  log: {
    color: "#fff",
    fontFamily: "Nunito Sans"
  },
  logout: {
    color: "#000",
    fontFamily: "Nunito Sans"
  },
  menu: {
    width: "2em",
    height: "2em",
    padding: "0"
  },
  signup: {
    marginRight: theme.spacing(3),
    color: "#3DB8B3",
    fontFamily: "Nunito Sans"
  },
  titleLink: {
    flexGrow: 1,
    textDecoration: "none"
  },
  link: {
    textDecoration: "none"
  },
  tabs: {
    position: "fixed",
    marginTop: "3em"
  },
  drawer: {
    display: "flex",
    marginTop: "1em",
    fontSize: "2rem",
    height: "100%",

  },
  links: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
},
  drawerLink: {
    margin: "1em auto",
    padding: ".5em",
    color: "#696969",
  },
  
}));