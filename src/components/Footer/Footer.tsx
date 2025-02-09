import React, { useContext } from "react"
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import { navigate } from "gatsby"

import useFeaturedPosts from "../../hooks/useFeaturedPosts"
import useCategories from "../../hooks/useCategories"
import useLatestPosts from "../../hooks/useLatestPosts";
import useSiteMetadata from "../../hooks/useSiteMetadata"
import MiniPost from "../Post/MiniPost/MiniPost"
import Logo from "../Logo/Logo"
import footerStyles from "./Footer.styles"
import { RootContext } from "../App"

const Footer: React.FC = () => {
  const classes = footerStyles()
  const featuredPosts = useFeaturedPosts(null, 3)
  const latestPosts = useLatestPosts(null, 3)
  const categories = useCategories()
  const siteMetadata = useSiteMetadata()
  const { textContent } = useContext(RootContext)

  return (
    <Grid container className={classes.wrapper}>
      <Grid
        container
        direction={"column"}
        item
        xs={12}
        sm={6}
        md={3}
        className={classes.columnWrapper}
      >
        <Box className={classes.logoWrapper} onClick={() => navigate("/")}>
          <Logo />
        </Box>

        <Typography
          variant={"body1"}
          color={"textSecondary"}
          className={classes.siteDescription}
        >
          {siteMetadata.description}
        </Typography>
        <Typography
          variant={"h4"}
          style={{ marginTop: 20 }}
          color={"textSecondary"}
          className={classes.itemHeader}
        >
          {textContent.FOLLOW_US}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.columnWrapper}>
        <Typography
          variant={"h4"}
          className={classes.itemHeader}
          color={"textSecondary"}
        >
          {textContent.FEATURED}
        </Typography>
        {featuredPosts &&
          featuredPosts.map((post: any) => (
            <Grid item key={post.id} className={classes.postWrapper}>
              <MiniPost {...post} />
            </Grid>
          ))}
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.columnWrapper}>
        <Typography
          variant={"h4"}
          className={classes.itemHeader}
          color={"textSecondary"}
        >
          {textContent.POPULAR}
        </Typography>
        {latestPosts &&
        latestPosts.map((post: any) => (
            <Grid item key={post.id} className={classes.postWrapper}>
              <MiniPost {...post} />
            </Grid>
          ))}
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.columnWrapper}>
        <Typography
          variant={"h4"}
          className={classes.itemHeader}
          color={"textSecondary"}
        >
          {textContent.CATEGORIES}
        </Typography>
        <List>
          {categories.map((category: any) => {
            return (
              <ListItem
                key={category.id}
                className={classes.categoryItem}
                onClick={() => navigate(`/categoria/${category.slug}`)}
              >
                <CategoryLink content={category.name} />
              </ListItem>
            )
          })}
        </List>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ borderTop: "1px solid #e5e5e5", paddingTop: 5 }}
      >
        <Typography variant={"body2"} color={"textSecondary"}>
          {process.env.GATSBY_SITENAME} Blog @{new Date().getFullYear()} /{" "}
          {textContent.COPYRIGHT}
        </Typography>
      </Grid>
    </Grid>
  )
}

const CategoryLink = withStyles(theme => ({
  primary: {
    cursor: "pointer",
    fontFamily: theme.typography.fontFamily,
    fontWeight: 300,
  },
}))(({ classes, content }: any) => (
  <ListItemText primary={content} classes={classes} />
))

export default Footer
