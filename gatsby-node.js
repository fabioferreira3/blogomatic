const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {

  const { createPage } = actions

  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.tsx")

  const result = await graphql(`
    {
      allWordpressPost {
        nodes {
          wordpress_id
          slug
        }
      }
    }
`)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const BlogPosts = result.data.allWordpressPost.nodes

  BlogPosts.forEach(post => {
    createPage({
      path: `/${post.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.wordpress_id,
      },
    })
  })

}
