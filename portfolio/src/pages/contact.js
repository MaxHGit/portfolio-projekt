import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = ({ data }) => {
  const socials = data.allContentfulSocials.nodes.find(
    (node) => node.title === "maxsocials"
  );

  return (
    <Layout>
      <h1>Kontakt</h1>

      <div className="contact-paragraphs">
        <p>Contact your boy:</p>
      </div>

      {/* Dynamiska sociala länkar */}
      <div className="contact-links">
        <p>
          <a href={`mailto:${socials.email}`} target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </p>
        <p>
          <a href={socials.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
        <p>
          <a href={socials.linkedinLink} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>

      <Link to="/">← Tillbaka till startsidan</Link>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulSocials {
      nodes {
        title
        githubLink
        linkedinLink
        email
      }
    }
  }
`;

export const Head = () => <Seo title="Kontakt | Max Portfolio" />

export default ContactPage
