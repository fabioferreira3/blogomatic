require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: process.env.GATSBY_SITENAME,
    description: process.env.GATSBT_SITE_DESCRIPTION,
    author: `@fabioferreira_web`,
    siteUrl: process.env.GATSBY_PRODUCTION_SITE_URL,
  },
  plugins: [
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
        siteUrl: `https://www.poupancahoje.com`,
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
            {
              family: "Acme",
              variants: ["300", "400", "500"],
            },
            {
              family: "Bree+Serif",
              variants: ["400"],
            },
            {
              family: "Pontano Sans",
              variants: ["300", "400", "500"],
            },
          ],
        },
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 590,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-responsive-iframe`,
    //         options: {
    //           wrapperStyle: `margin-bottom: 1.0725rem`,
    //         },
    //       },
    //       `gatsby-remark-prismjs`,
    //       `gatsby-remark-copy-linked-files`,
    //       `gatsby-remark-smartypants`,
    //     ],
    //   },
    // },
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
        /*
         * The base URL of the WordPress site without the trailing slash and the protocol. This is required.
         * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
         */
        baseUrl: process.env.GATSBY_WP_URL,
        // The protocol. This can be http or https.
        protocol: process.env.GATSBY_WP_PROTOCOL,
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // Defaults to true.
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
