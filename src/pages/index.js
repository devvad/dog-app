import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as pageStyles from "./page.module.css"

const IndexPage = () => {
  return <StaticImage className={pageStyles.page} src="../images/sobaki_bezhat_pryzhok_voda_56684_1920x1080.png" alt="Dogs" width="430px"/>
}

export default IndexPage