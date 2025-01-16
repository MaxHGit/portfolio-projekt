import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.css"

const IndexPage = ({ data }) => {
  const homedata = data.allContentfulHome.nodes[0];
  const featuredProjects = data.allContentfulPortfolioItem.nodes; // Använd rätt nodnamn här

  return (
    <Layout>
      <div className="hero-container">
        <div className="hero-text">
          <p className="hero-intro">Hej, jag heter</p>
          <h1>{homedata.title}</h1>
          <p className="hero-description">{homedata.description.description}</p>
          <div className="hero-links">
            <Link to="/portfolio" className="hero-button">Portfolio</Link>
            <Link to="/contact" className="hero-button">Kontakt</Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={homedata.image.gatsbyImageData.images.fallback.src}
            alt={homedata.title}
          />
        </div>
      </div>

      {/* Featured-sektionen */}
      <section className="featured-container">
        <h2 className="featured-title">Utvalda Projekt</h2>
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="featured-item">
              <Link to={`/portfolio/${project.slug}`}>
              <h3>{project.title}</h3>      
              {project.thumbnail?.gatsbyImageData && (
                <img
                  src={project.thumbnail.gatsbyImageData.images.fallback.src}
                  alt={project.title}
                  className="featured-thumbnail"
                />
              )}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};



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
    allContentfulPortfolioItem(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
       	featured
        slug
        description {
          description
        }
        thumbnail {
          gatsbyImageData
        }
        
      }
    }
  }
`


export const Head = () => <Seo title="Home | My Portfolio" />

export default IndexPage
