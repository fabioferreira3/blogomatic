import React from "react"
import { Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby"

import Seo from "../components/Seo"
import { App } from "../components/App"
import { MainLayout } from "../layouts/MainLayout"

export default () => {

  const siteMetadata = useStaticQuery(graphql`
      query MyQuery {
          wordpressSiteMetadata {
              name
              home
              url
              description
          }
      }
  `)

  const { name: siteTitle } = siteMetadata.wordpressSiteMetadata;

  return (
    <App>
      <MainLayout>
        <Seo title="Home" />
        <Typography variant={"h1"}>{siteTitle}</Typography>
        {/*<ul style={{ listStyle: "none" }}>*/}
        {/*  {data.allWordpressPost.edges.map(post => (*/}
        {/*    <li key={post.node.wordpress_id}>*/}
        {/*      <Link to={`/post/${post.node.slug}`}>*/}
        {/*      </Link>*/}
        {/*      <div>*/}
        {/*        <Link*/}
        {/*          to={`/post/${post.node.slug}`}*/}
        {/*          style={{*/}
        {/*            // display: "flex",*/}
        {/*            color: "black",*/}
        {/*            textDecoration: "none",*/}
        {/*          }}*/}
        {/*        > <h3*/}
        {/*          dangerouslySetInnerHTML={{ __html: post.node.title }}*/}
        {/*          style={{ fontSize: 33, marginTop:0 }}*/}
        {/*        /></Link>*/}
        {/*        <p style={{ margin: 0, color: "grey", fontSize:16, marginTop:8, marginBottom:10 }}>*/}
        {/*          Written by "author name" && "author date"*/}
        {/*        </p>*/}
        {/*        <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />*/}
        {/*      </div>*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
      </MainLayout>
    </App>
  )
}
