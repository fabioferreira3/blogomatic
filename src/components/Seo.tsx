import React from "react"
import { Helmet } from "react-helmet"
import parse from "html-react-parser"

export const Seo: React.FC<any> = props => {
  const { title, description, metaData = null } = props
  return (
    <Helmet
      htmlAttributes={{
        lang: process.env.GATSBY_LANGUAGE,
      }}
      title={title}
      titleTemplate={title}
    >
      {description && <meta name="description" content={description} />}
      {metaData ? parse(metaData) : ""}
    </Helmet>
  )
}

export default Seo
