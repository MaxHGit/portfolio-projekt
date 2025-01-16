const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Hämta slugs från alla portfolio-items  på Contentful
  const result = await graphql(`
    query {
      allContentfulPortfolioItem {
        nodes {
          slug
        }
      }
    }
  `)

  // Skapa en sida för varje portfolio-item
  result.data.allContentfulPortfolioItem.nodes.forEach(item => {
    createPage({
      path: `/portfolio/${item.slug}`,
      component: path.resolve("./src/templates/portfolio-item.js"),
      context: {
        slug: item.slug,
      },
    })
  })
}
