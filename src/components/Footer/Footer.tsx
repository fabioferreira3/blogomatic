import React from "react"
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core"
import { navigate } from "gatsby";

import { useFeaturedPosts } from "../../hooks/useFeaturedPosts"
import { useCategories } from "../../hooks/useCategories"
import { MiniPost } from "../Post/MiniPost/MiniPost"
import { Logo } from "../Logo/Logo"
import { footerStyles } from "./Footer.styles"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

export const Footer: React.FC = () => {
  const classes = footerStyles()
  const featuredPosts = useFeaturedPosts()
  const categories = useCategories()
  const siteMetadata = useSiteMetadata()

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
        <Typography variant={"h4"} style={{ marginTop: 20 }}>
          Follow us
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.columnWrapper}>
        <Typography
          variant={"h4"}
          className={classes.itemHeader}
          color={"textSecondary"}
        >
          Featured
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
          Popular
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
          Categories
        </Typography>
        <List>
          {categories.map((category: any) => {
            return (
              <ListItem key={category.id} className={classes.categoryItem}>
                <ListItemText primary={category.name} />
              </ListItem>
            )
          })}
        </List>
      </Grid>
    </Grid>
  )
}
