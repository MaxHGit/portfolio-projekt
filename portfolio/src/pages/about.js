import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <p>About yo boy</p>
    <Link to="/">Gå tillbaka till startsidan</Link>
  </Layout>
)

export const Head = () => <Seo title="Om mig | Max Portfolio" />

export default AboutPage
