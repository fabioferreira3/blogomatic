import React from "react"
import { Helmet } from "react-helmet"
import parse from "html-react-parser"

export const Seo: React.FC<any> = props => {
  const { title, metaData = null } = props
  console.log(metaData)
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      titleTemplate={title}
    >
      {metaData ? parse(metaData) : ""}
    </Helmet>
  )
}

export default Seo
