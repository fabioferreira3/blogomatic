import React from "react"
import { Helmet } from "react-helmet"

export const Seo: React.FC<any> = props => {
  const { title, description, postData } = props
  const metaData = postData ? postData.metaData : null
  let metaTags = [
    {
      name: `description`,
      content: description || (metaData && metaData.yoast_wpseo_metadesc),
    },
    {
      property: `og:title`,
      content: (metaData && metaData.yoast_wpseo_title) || title,
    },
    {
      property: `og:description`,
      content: (metaData && metaData.yoast_wpseo_metadesc) || description,
    },
    {
      property: `og:type`,
      content: `${postData ? "article" : "blog"}`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:title`,
      content:
        (metaData && metaData.yoast_wpseo_twitter_title) ||
        (metaData && metaData.yoast_wpseo_title) ||
        title,
    },
    {
      name: `twitter:description`,
      content:
        (metaData && metaData.yoast_wpseo_twitter_description) ||
        (metaData && metaData.yoast_wpseo_metadesc) ||
        description,
    },
  ]

  if (postData) {
    const tags =
      postData.tags && postData.tags.length
        ? postData.tags.map((tag: any) => {
            return {
              property: `article:tag`,
              content: tag.name,
            }
          })
        : {}
    metaTags = metaTags
      .concat([
        {
          name: `twitter:creator`,
          content: postData.author.name,
        },
        {
          property: `article:published_time`,
          content: postData.createdAt.raw,
        },
        {
          property: `article:modified_time`,
          content: postData.updatedAt.raw,
        },
        {
          property: `article:author`,
          content: postData.author.name,
        },
        {
          property: `article:section`,
          content: postData.categories[0].name,
        },
      ])
      .concat(tags)
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title || postData.yoast_wpseo_title}
      titleTemplate={title || (metaData && metaData.yoast_wpseo_title)}
      meta={metaTags}
    />
  )
}

export default Seo
