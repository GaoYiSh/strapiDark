import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "@/components/layout"
import Sections from "@/components/sections"
import SEO from "@/components/seo"
//import modev from "@/components/elements/navbar"
//import modev from "@/components/mode-sw-try";
import  modev  from "@/config";
import  setmodev  from "@/cf-fuc"

const DynamicPage = ({ data, pageContext }) => {
  const { contentSections, metadata, localizations } = data.strapiPage
  const global = data.strapiGlobal

//var aa = setmodev()
//alert( modev )
const [vv, setvv] = useState(false)


//var aa = setmodev(modev)
// alert(aa)
  return (
    <div class ={setmodev(modev)}>
      <SEO seo={metadata} global={global} />
      <Layout vv={vv} setvv={setvv} global={global} pageContext={{ ...pageContext, localizations }}>
        <Sections sections={contentSections} />
      </Layout>
    </div>
  )
}

export default DynamicPage
//export var modev
export const query = graphql`
  fragment GlobalData on StrapiGlobal {
    favicon {
      localFile {
        publicURL
      }
    }
    footer {
      id
      columns {
        id
        links {
          id
          newTab
          text
          url
        }
        title
      }
      id
      logo {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      smallText
    }
    id
    metaTitleSuffix
    metadata {
      metaDescription
      metaTitle
      shareImage {
        localFile {
          publicURL
        }
      }
    }
    navbar {
      button {
        id
        newTab
        text
        type
        url
      }
      id
      links {
        url
        text
        newTab
        id
      }
      logo {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    notificationBanner {
      id
      text
      type
    }
  }

  query DynamicPageQuery($id: String!, $locale: String!) {
    strapiGlobal(locale: { eq: $locale }) {
      ...GlobalData
    }
    strapiPage(id: { eq: $id }) {
      slug
      shortName
      metadata {
        metaTitle
        metaDescription
        shareImage {
          localFile {
            publicURL
          }
        }
      }
      localizations {
        id
        locale
      }
      contentSections
    }
  }
`
