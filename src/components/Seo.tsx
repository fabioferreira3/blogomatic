import React from "react"
import { Helmet } from "react-helmet"

export const Seo: React.FC<any> = props => {
  const { title, description, pageData } = props
  const metaData = pageData ? pageData.metaData : null
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
      content: `${pageData ? "article" : "blog"}`,
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

  if (pageData) {
    const tags =
      pageData.tags && pageData.tags.length
        ? pageData.tags.map((tag: any) => {
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
          content: pageData.author.name,
        },
        {
          property: `article:published_time`,
          content: pageData.createdAt.raw,
        },
        {
          property: `article:modified_time`,
          content: pageData.updatedAt.raw,
        },
        {
          property: `article:author`,
          content: pageData.author.name,
        },
        {
          property: `article:section`,
          content: pageData.mainCategory.name,
        },
      ])
      .concat(tags)
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title || pageData.yoast_wpseo_title}
      titleTemplate={title || (metaData && metaData.yoast_wpseo_title)}
      meta={metaTags}
    />
  )
}

export default Seo
