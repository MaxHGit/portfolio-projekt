import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/portfolio.css";

const PortfolioPage = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const portfolioItems = data.allContentfulPortfolioItem.nodes;

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <Layout>
      <div className="portfolio-container">
        <h1 className="portfolio-title">Portfolio</h1>

        <div className="portfolio-filter-buttons">
          <button onClick={() => setSelectedCategory("all")}>All</button>
          <button onClick={() => setSelectedCategory("Front End")}>Front End</button>
          <button onClick={() => setSelectedCategory("UI/UX")}>UI/UX</button>
          <button onClick={() => setSelectedCategory("SEO")}>SEO</button>
        </div>

        <ul className="portfolio-list">
          {filteredItems.map((item) => (
            <li key={item.id} className="portfolio-item">
              <Link to={`/portfolio/${item.slug}`}>
                <h2>{item.title}</h2>
                {item.thumbnail && (
                  <img
                    src={item.thumbnail.gatsbyImageData.images.fallback.src}
                    alt={item.title}
                    className="portfolio-thumbnail"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulPortfolioItem {
      nodes {
        id
        title
        slug
        category
        thumbnail {
          gatsbyImageData(layout: FIXED, width: 300)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Portfolio | Max Portfolio" />;

export default PortfolioPage;
