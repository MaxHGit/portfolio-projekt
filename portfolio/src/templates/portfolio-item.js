import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/portfolio-item.css";

const PortfolioItem = ({ data }) => {
  const { title, description, thumbnail } = data.contentfulPortfolioItem

  return (
    <Layout>
      <div className="portfolio-item-container">
        <div className="portfolio-item-image">
          <img src={thumbnail.gatsbyImageData.images.fallback.src} alt={title} />
        </div>
        <div className="portfolio-item-text">
          <h1>{title}</h1>
          <p>{description.description}</p>
        </div>
      </div>
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
