import React from "react"
import { Typography } from "@material-ui/core"
import ScheduleIcon from "@material-ui/icons/Schedule"
import { useTheme } from "@material-ui/core/styles"

const PostTimestamp: React.FC<any> = ({ date, displayIcon = false }) => {
  const theme = useTheme()
  return (
    <>
      {displayIcon && (
        <ScheduleIcon
          style={{
            color: theme.palette.info.main,
            fontSize: 14,
            marginRight: 5,
          }}
        />
      )}
      <Typography
        variant={"body2"}
        style={{ color: theme.palette.info.main, textTransform: "uppercase" }}
      >
        {date}
      </Typography>
    </>
  )
}

export default PostTimestamp
