import React from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { navigate } from "gatsby"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import MenuIcon from "@material-ui/icons/Menu"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  itemWrapper: {
    "&:hover": {
      background: theme.palette.secondary.main,
    },
    "&:hover $itemText": {
      color: theme.palette.text.secondary,
    },
  },
  itemText: {
    fontFamily: theme.typography.fontFamily,
    textTransform: "uppercase",
    textAlign: "right",
  },
  headerWrapper: {
    background: theme.palette.primary.main,
    padding: 15,
  },
  headerText: {
    color: theme.palette.text.secondary,
  },
}))

const DrawerNavMenu: React.FC<any> = ({ items }) => {
  const classes = useStyles()
  const [state, setState] = React.useState({ right: false })

  const toggleDrawer = (open: boolean) => () => {
    setState({ right: open })
  }

  const list = () => (
    <Box
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Grid container justify={"flex-end"} className={classes.headerWrapper}>
        <Typography variant={"h3"} className={classes.headerText}>
          Menu
        </Typography>
      </Grid>
      <Divider />
      <List>
        {items.map((item: any) => (
          <ListItem
            button
            key={item.id}
            onClick={() => navigate(item.targetUrl)}
            className={classes.itemWrapper}
          >
            <ListItemText
              primary={item.title}
              primaryTypographyProps={{ className: classes.itemText }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  )
}

export default DrawerNavMenu
