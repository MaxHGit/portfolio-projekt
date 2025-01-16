import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Sidan kunde inte hittas</h1>
    <p>Sidan du vill besöka går inte att nå.</p>
    <Link to="/">Gå tillbaka till startsidan</Link>
    
  </Layout>
)

export const Head = () => <Seo title="404: Sidan kunde inte hittas | Max Portfolio" />

export default NotFoundPage
