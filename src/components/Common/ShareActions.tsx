import React from "react"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { Box } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

const styles = () => {
  return makeStyles(theme => ({
    wrapper: {
      position: "sticky",
      left: 0,
      top: 200,
      marginTop: "3.5em",
    },
    socialIcon: {
      cursor: "pointer",
      fontSize: 60,
    },
  }))()
}

export const ShareActions: React.FC<any> = () => {
  const classes = styles()
  return (
    <Box className={classes.wrapper}>
      <FacebookIcon
        className={classes.socialIcon}
        style={{ color: "#43609C" }}
      />
      <TwitterIcon
        className={classes.socialIcon}
        style={{ color: "#1EA1F1" }}
      />
      <WhatsAppIcon
        className={classes.socialIcon}
        style={{ color: "#0FBB19" }}
      />
      <LinkedInIcon
        className={classes.socialIcon}
        style={{ color: "#0477B7" }}
      />
    </Box>
  )
}
