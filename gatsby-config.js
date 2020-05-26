require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: process.env.GATSBY_SITENAME,
    description: process.env.GATSBY_SITE_DESCRIPTION,
    author: `@fabioferreira_web`,
    siteUrl: process.env.GATSBY_PRODUCTION_SITE_URL,
  },
  plugins: [
    `gatsby-plugin-remove-generator`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS,
        head: true
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: process.env.GATSBY_PRODUCTION_SITE_URL,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/${process.env.GATSBY_THEME}/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-material-ui",
      options: { stylesProvider: { injectFirst: true } },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            // {
            //   family: "Acme",
            //   variants: ["300", "400", "500"],
            // },
            {
              family: "Hind",
              variants: ["300","400","500","600","700"],
            },
            // {
            //   family: "Pontano Sans",
            //   variants: ["300", "400", "500"],
            // },
          ],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.GATSBY_MANIFEST_NAME,
        short_name: process.env.GATSBY_MANIFEST_SHORTNAME,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#${process.env.GATSBY_THEME_COLOR}`,
        display: `minimal-ui`,
        icon: `content/${process.env.GATSBY_THEME}/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: process.env.GATSBY_WP_URL,
        protocol: process.env.GATSBY_WP_PROTOCOL,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        excludedRoutes: [
          "**/settings",
          "**/themes",
          "**/users/me",
          "**/yoast/v1/get_head",
          "**/yoast/v1/indexation/*",
          "**/yoast/v1/reindex_posts",
          "**/yoast/v1/file_size",
          "**/yoast/v1/myyoast/connect",
          "**/yoast/v1/statistics",
          "**/yoast/v1/configurator"
        ],
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: process.env.GATSBY_WP_URL,
              protocol: process.env.GATSBY_WP_PROTOCOL,
            }
          }
        ]
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-catch-links`
    // `gatsby-plugin-offline`,
  ],
}
