import moment from "moment"

export const normalizePost: any = (rawPostData: any, source: any) => {
  if (source !== "wp") {
    return null
  }

  return {
    id: rawPostData.id,
    title: rawPostData.title,
    content: rawPostData.content,
    summary: rawPostData.excerpt,
    categories: rawPostData.categories,
    mainCategory: rawPostData.categories
      ? {
          name: rawPostData.categories[0].name,
          slug: rawPostData.categories[0].slug,
        }
      : null,
    featuredImageSource:
      rawPostData.featured_media.localFile.childImageSharp.fluid,
    author: {
      name: rawPostData.author.name,
      imageSource: rawPostData.author.avatar_urls.wordpress_96,
    },
    slug: rawPostData.slug,
    createdAt: {
      raw: moment(rawPostData.date).format("YYYY-MM-DD HH:mm:ss"),
      formated: moment(rawPostData.date).format("MMMM DD, YYYY"),
    },
    updatedAt: {
      raw: moment(rawPostData.modified).format("YYYY-MM-DD HH:mm:ss"),
      formated: moment(rawPostData.modified).format("MMMM DD, YYYY"),
    },
    tags: rawPostData.tags,
    metaData: rawPostData.yoast_meta,
  }
}

export const normalizePosts: any = (rawPostsData: any, source: any) => {
  if (source !== "wp") {
    return null
  }
  return rawPostsData.map((rawPostData: any) =>
    normalizePost(rawPostData, source)
  )
}
