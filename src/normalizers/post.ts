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
    featuredImageSource:
      rawPostData.featured_media.localFile.childImageSharp.fluid,
    author: {
      name: rawPostData.author.name,
      imageSource: rawPostData.author.avatar_urls.wordpress_96,
    },
    slug: rawPostData.slug,
    lastUpdate: {
      raw: rawPostData.modified,
      formated: moment(rawPostData.modified).format("MMMM DD, YYYY"),
    },
    tags: rawPostData.tags,
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
