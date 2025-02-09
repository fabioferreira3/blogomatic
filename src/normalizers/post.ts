import moment from "moment"

const forceHttpsUrl = (url: string) => {
  return url.replace("http://", "https://")
}

export const normalizePost: any = (
  rawPostData: any,
  source: any,
  locale: string
) => {

  if (source !== "wp") {
    return null
  }

  const dateFormat = locale === 'en' ? "MMMM DD, YYYY" : "DD [de] MMMM, YYYY"
  moment.locale(locale)

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
    featuredImage: {
      alt: rawPostData.featured_media.alt_text,
      title: rawPostData.featured_media.title,
      imageSource: rawPostData.featured_media.localFile.childImageSharp.fluid,
    },
    author: {
      name: process.env.GATSBY_AUTHOR,
      imageSource: forceHttpsUrl(rawPostData.author.avatar_urls.wordpress_96),
    },
    slug: rawPostData.slug,
    createdAt: {
      raw: moment(rawPostData.date).format("YYYY-MM-DD HH:mm:ss"),
      formated: moment(rawPostData.date).format(dateFormat),
    },
    updatedAt: {
      raw: moment(rawPostData.modified).format("YYYY-MM-DD HH:mm:ss"),
      formated: moment(rawPostData.modified).format(dateFormat),
    },
    tags: rawPostData.tags,
    yoastHead: rawPostData.yoast_head,
  }
}

export const normalizePosts: any = (
  rawPostsData: any,
  source: any,
  locale: string
) => {
  if (source !== "wp") {
    return null
  }
  return rawPostsData.map((rawPostData: any) =>
    normalizePost(rawPostData, source, locale)
  )
}
