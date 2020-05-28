const path = require(`path`)
const textContent_EN = require("./src/texts/en")
const textContent_PT = require("./src/texts/pt")

const textContent = process.env.GATSBY_LANGUAGE === 'en' ? textContent_EN : textContent_PT

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
    const locale = process.env.GATSBY_LANGUAGE === 'en' ? 'en' : 'pt_BR'

    BlogPosts.forEach(post => {
      createPage({
        path: `/${post.slug}`,
        component: BlogPostTemplate,
        context: {
          id: post.wordpress_id,
          textContent,
          locale
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
        path: `/${textContent.CATEGORY}/${category.slug}`,
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
