import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const PortfolioItem = ({ data }) => {
  const { title, description, thumbnail } = data.contentfulPortfolioItem

  return (
    <Layout>
      <h1>{title}</h1>
      <img src={thumbnail.gatsbyImageData.images.fallback.src} alt={title} />
      <p>{description.description}</p>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulPortfolioItem(slug: { eq: $slug }) {
      title
      description {
        description
      }
      thumbnail {
        gatsbyImageData
      }
    }
  }
`

export default PortfolioItem
