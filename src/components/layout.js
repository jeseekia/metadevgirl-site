import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <main
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
    <header>
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
    </header>
      {children}
    <footer>
      <ul>
        <li>
          <Link
            to={`http://twitch.tv/metadevgirl`}
            css={css`

          `}
          >
          Twitch
          </Link>
        </li>
        <li>
          <Link
            to={`http://instagram.com/metadevgirl`}
            css={css`

          `}
          >
          Instagram
          </Link>
        </li>
        <li>
          <Link
            to={`http://twitter.com/metadevgirl`}
            css={css`

          `}
          >
          Twitter
          </Link>
        </li>
      </ul>
    </footer>
    </main>
  )
}
