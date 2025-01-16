import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <h1>Kontakt</h1>
    <p>Här hittar du min kontaktinformation</p>
    <Link to="/">Gå tillbaka till startsidan</Link>
  </Layout>
)

export const Head = () => <Seo title="Kontakt | Max Portfolio" />

export default ContactPage
