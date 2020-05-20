const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {

  const { createPage } = actions

  const generateBlogPostsPages = async () => {
    const BlogPostTemplate = path.resolve("./src/templates/BlogPost.tsx")

    const postResults = await graphql(`
      {
        allWordpressPost {
          nodes {
            wordpress_id
            slug
          }
        }
      }
    `)

    if (postResults.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

    const BlogPosts = postResults.data.allWordpressPost.nodes

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

  const generateCategoriesPages = async () => {
    const CategoryTemplate = path.resolve("./src/templates/CategoryPage.tsx")

    const categoryResults = await graphql(`
      {
        allWordpressCategory(filter: {count: {gt: 0}}) {
          nodes {
            wordpress_id
            slug
          }
        }
      }
    `)

    if (categoryResults.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

    const Categories = categoryResults.data.allWordpressCategory.nodes

    Categories.forEach(category => {
      createPage({
        path: `/category/${category.slug}`,
        component: CategoryTemplate,
        context: {
          id: category.wordpress_id,
        },
      })
    })
  }

  await generateBlogPostsPages();
  await generateCategoriesPages();

}
