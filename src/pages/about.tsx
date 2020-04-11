import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Bio from "../components/Bio"
import { rhythm } from "../utils/typography"

import { IAboutPageQuery } from "../../graphql-types"

export interface IProps {
  location: any
  data: IAboutPageQuery
}

export default function AboutPage(props: IProps) {
  const { allAuthorYaml, site } = props.data
  const authors = allAuthorYaml.nodes

  return (
    <Layout location={props.location} title={site.siteMetadata.title}>
      <SEO title="About us" />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(1),
            }}
          >
            About us
          </h1>
        </header>
        <section>
          <p>
            We are two Software Developers with degrees in Engineering that love
            to talk about programming, tech culture and other random stuff.
          </p>

          <p>
            We have been working in the industry for more than 6 years, and have
            experience with a range of programming languages, programming
            techniques and philosophies. We are passionate about reflecting on
            these and more subjects and hopefully, in the process, we can help
            others improve and move their careers forward.
          </p>

          {authors.map((author) => (
            <Bio author={author} key={author.id} prefixText="" />
          ))}
        </section>

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer></footer>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
      }
    }
    allAuthorYaml {
      nodes {
        bio
        id
        twitter
        github
        profilepicture {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
