import { makeStyles } from "@material-ui/core/styles"

export const simuladorPoupancaStyles = () => {
  return makeStyles(theme => ({
    wrapper: {
      padding: 10,
      height: "calc(100vh - 80px)",
      [theme.breakpoints.down('sm')]: {
        height: "100%"
      }
    },
    yieldWrapper: {
      height:"20vh",
      marginBottom: 60
    },
    yield: {
      color: theme.palette.primary.main,
      fontSize: "10em",
      [theme.breakpoints.down('sm')]: {
        fontSize: "7em"
      }
    },
    yieldComp: {
      color: theme.palette.text.primary,
      fontSize: "2.5em",
      fontWeight: "bold",
      [theme.breakpoints.down('sm')]: {
        fontSize: "1.8em"
      }
    },
    inputWrapper: {
      width: "100%",
      maxHeight: "5%",
      marginBottom: 25,
      fontSize: 20,
      [theme.breakpoints.down('sm')]: {
        maxHeight: "inherit"
      }
    },
    inputBox: {
      marginLeft: 10,
      [theme.breakpoints.down('sm')]: {
        width: "100%",
        textAlign: "center",
        marginBottom: 10
      }
    },
    investmentInput: {
      marginLeft: 5,
      maxWidth: 250,
      border: "1px solid #d1d1d1",
      padding: 7,
      [theme.breakpoints.down('sm')]: {
        width: "100%",
        maxWidth: "100%",
        margin: 0,
        height: 48,
        fontSize: "1.3em",
        textAlign: "center"
      }
    },
    monthly: {
      width: "100%",
      height: "30vh",
      marginTop: 20,
      marginBottom: 20,
      paddingTop: 10,
      [theme.breakpoints.down('sm')]: {
        height: "100%"
      }
    },
    monthYield: {
      marginTop: 15
    },
    yieldBlocks: {
      width: "100%",
      marginTop: 10
    },
    month: {
      color: "#3f3f3f",
      marginRight: "0.5em"
    },
    monthResult: {
      color: "#3f3f3f",
      fontSize: "1.5em"
    },
    yieldSubtitle: {
      margin: 10,
      fontSize: "1.4em"
    },
    firstSemesterBlock: {
      borderTop: "1px solid #2b81d1",
      borderRight: "1px solid #2b81d1",
      padding: "0 10px 10px 10px",
    },
    secondSemesterBlock: {
      borderTop: "1px solid #2b81d1",
      padding: "0 10px 10px 10px"
    }
  }))()}
