import { graphql } from "gatsby"

export const wpPost = graphql`
  fragment wpPost on wordpress__POST {
    id
    content
    excerpt
    author {
      name
      avatar_urls {
        wordpress_96
      }
    }
    slug
    title
    featured_media {
      localFile {
        ...fluidHdImage
      }
    }
    date
    modified
    tags {
      name
      slug
    }
    categories {
      slug
      name
    }
    yoast_meta {
      yoast_wpseo_title
      yoast_wpseo_twitter_description
      yoast_wpseo_twitter_title
      yoast_wpseo_website_name
      yoast_wpseo_company_name
      yoast_wpseo_person_name
      yoast_wpseo_metadesc
      yoast_wpseo_company_or_person
      yoast_wpseo_facebook_description
      yoast_wpseo_facebook_image
      yoast_wpseo_facebook_title
      yoast_wpseo_facebook_type
      yoast_wpseo_company_logo
      yoast_wpseo_canonical
      yoast_wpseo_social_url
      yoast_wpseo_social_defaults {
        facebook_site
        fbadminapp
        instagram_url
        linkedin_url
        myspace_url
        og_default_image
        og_default_image_id
        og_frontpage_desc
        og_frontpage_image
        og_frontpage_image_id
        og_frontpage_title
        opengraph
        pinterest_url
        pinterestverify
        twitter
        twitter_card_type
        twitter_site
        wikipedia_url
        youtube_url
      }
      yoast_wpseo_twitter_image
    }
  }
`
