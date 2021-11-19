import * as React from "react"
import { StaticImage, graphql } from "gatsby"
import * as pageStyles from "./page.module.css"

const IndexPage = () => {
  return <StaticImage className={pageStyles.page} src={sobaki_tsvety_shlyapy_eda_93411_1920x1080.png} alt="Dogs" width="430px" key={item.node.id}/>
}

export default IndexPage