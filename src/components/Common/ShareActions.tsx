import React, { useEffect, useState } from "react"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share"
import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const styles = () => {
  return makeStyles(() => ({
    socialIconWrapper: {
      "&:focus": {
        outline: 0,
      },
    },
    socialIcon: {
      cursor: "pointer",
      marginRight: 10,
    },
    small: {
      "& $socialIcon": { fontSize: 20 },
    },
    medium: {
      "& $socialIcon": { fontSize: 40 },
    },
    big: {
      "& $socialIcon": { fontSize: 60 },
    },
  }))()
}

export const ShareActions: React.FC<any> = ({ size, noColor }) => {
  const classes = styles()
  const [currentPage, setCurrentPage] = useState<any>(null)

  let wrapperClass = ""
  switch (size) {
    case "small":
      wrapperClass = classes.small
      break
    case "medium":
      wrapperClass = classes.medium
      break
    case "big":
      wrapperClass = classes.big
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      setCurrentPage(window.location.href)
    }
  })

  return (
    <Box className={wrapperClass}>
      <FacebookShareButton
        url={currentPage}
        className={classes.socialIconWrapper}
      >
        <FacebookIcon
          className={classes.socialIcon}
          style={{ color: !noColor ? "#43609C" : "#000" }}
        />
      </FacebookShareButton>
      <TwitterShareButton
        url={currentPage}
        className={classes.socialIconWrapper}
      >
        <TwitterIcon
          className={classes.socialIcon}
          style={{ color: !noColor ? "#1EA1F1" : "#000" }}
        />
      </TwitterShareButton>
      <WhatsappShareButton
        url={currentPage}
        className={classes.socialIconWrapper}
      >
        <WhatsAppIcon
          className={classes.socialIcon}
          style={{ color: !noColor ? "#0FBB19" : "#000" }}
        />
      </WhatsappShareButton>
      <LinkedinShareButton
        url={currentPage}
        className={classes.socialIconWrapper}
      >
        <LinkedInIcon
          className={classes.socialIcon}
          style={{ color: !noColor ? "#0477B7" : "#000" }}
        />
      </LinkedinShareButton>
    </Box>
  )
}
