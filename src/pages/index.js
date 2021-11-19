import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as pageStyles from "./page.module.css"

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query AssetsPhotos {
          allFile(
            filter: {extension: {regex: "/jpg$/"}, relativeDirectory: {glob: "*"}}
          ) {
            edges {
              node {
                publicURL
                id
              }
            }
          }
        }
      `}
      render={data => {
        return data.allFile.edges.map((item) => {
          return <img className={pageStyles.page} src={item.node.publicURL} alt="Dogs" width="430px" key={item.node.id}/>
        })
      }}
    />
  )
}

export default IndexPage