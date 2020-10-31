import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface DataProps { }

export const Blog: React.FC<PageProps<DataProps>> = () => {
    return (
        <Layout>
            <SEO title="Blog" />
        </Layout>
    )
}

export default Blog;
export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`