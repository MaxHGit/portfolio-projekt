import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const homedata = data.allContentfulHome.nodes[0]
  
  return (
  <Layout>
    <h1>{homedata.title}</h1>
    <img src={homedata.image.gatsbyImageData.images.fallback.src} alt={homedata.title} />
    <p>{homedata.description.description}</p>
    <Link to="/portfolio">Se alla projekt</Link>
  </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulHome {
    nodes {
      title
      image {
        gatsbyImageData
      }
      description {
        description
      }
    }
  }
  }
`

export const Head = () => <Seo title="Hem | Max Portfolio" />

export default IndexPage
