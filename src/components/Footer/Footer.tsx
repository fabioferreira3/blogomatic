import React from "react"
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core"

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
        <Logo />
        <Typography variant={"body1"} style={{ marginTop: 40 }}>
          {siteMetadata.description}
        </Typography>
        <Typography variant={"h4"} style={{ marginTop: 20 }}>
          Follow us
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.columnWrapper}>
        <Typography variant={"h4"} className={classes.itemHeader}>
          Featured
        </Typography>
        {featuredPosts &&
          featuredPosts.map((post: any) => {
            return <MiniPost key={post.id} {...post} />
          })}
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.columnWrapper}>
        <Typography variant={"h4"} className={classes.itemHeader}>
          Popular
        </Typography>
        {featuredPosts &&
          featuredPosts.map((post: any) => {
            return <MiniPost key={post.id} {...post} />
          })}
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.columnWrapper}>
        <Typography variant={"h4"} className={classes.itemHeader}>
          Categories
        </Typography>
        <List>
          {categories.map((category: any) => {
            return (
              <ListItem style={{ margin: 0, padding: "0 0 5px 0" }}>
                <ListItemText primary={category.name} />
              </ListItem>
            )
          })}
        </List>
      </Grid>
    </Grid>
  )
}
