import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const PortfolioPage = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const portfolioItems = data.allContentfulPortfolioItem.nodes;

  // Filtrerar alla projekt baserat på valt filter
  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <Layout>
      <h1>Portfolio</h1>

      {/* Knappar för kategorier */}
      <div>
        <button onClick={() => setSelectedCategory("all")}>All</button>
        <button onClick={() => setSelectedCategory("Front End")}>
          Front End
        </button>
        <button onClick={() => setSelectedCategory("UI/UX")}>UI/UX</button>
      </div>

      {/* Filtererar alla portfolio objekt från Contentful */}
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            <Link to={`/portfolio/${item.slug}`}>
              <h2>{item.title}</h2>
              {item.thumbnail && (
                <img
                  src={item.thumbnail.gatsbyImageData.images.fallback.src}
                  alt={item.title}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
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
