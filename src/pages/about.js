import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About Page" />
      <h3>Here are some examples of my work</h3>
      <p><StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/image1.jpg"
        width={100}
        height={100}
        quality={95}
        alt="Work 1"
      /></p>
      <p><StaticImage
        className="bio-avatar-work"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/image2.jpg"
        width={100}
        height={100}
        quality={95}
        alt="Work 2"
      /></p>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
