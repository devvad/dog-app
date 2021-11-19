import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

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
          return <img src={item.node.publicURL} width="350px" key={item.node.id}/>
        })
      }}
    />
  )
}

export default IndexPage