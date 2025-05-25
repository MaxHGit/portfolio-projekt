import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <p>Jag är en blivande Front End-utvecklare
som har lätt för att lära mig och anpassa
mig till nya teknologier. Jag arbetar bra
både självständigt och i team. Jag strävar
alltid efter att hålla en hög nivå i mitt
arbete och värdesätter därför noggrannhet.</p>
    <Link to="/">Gå tillbaka till startsidan</Link>
  </Layout>
)

export const Head = () => <Seo title="Om mig | Max Portfolio" />

export default AboutPage
