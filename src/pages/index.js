import * as React from "react"
import { StaticImage, getImage } from "gatsby-plugin-image"
import * as pageStyles from "./page.module.css"

const IndexPage = () => {
  return <StaticImage
    className={pageStyles.page}
   src={"/images/icon.png"} alt="Dogs"
   width={200}
   height={200}
   />
}

export default IndexPage