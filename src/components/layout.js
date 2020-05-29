import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import githubLogo from "../images/github-logo.png"

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
    <div
      css={css`
        margin: 0 auto;
        max-width: 80vw;
        /* padding: ${rhythm(2)}; */
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
    <main>
      {children}
    </main>
    <footer>
      <ul>
        <li>
          <a href="http://twitch.tv/metadevgirl" target="_blank" rel="noopener noreferrer">
            Twitch
          </a>
        </li>
        <li>
          <a href="http://instagram.com/metadevgirl" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="http://twitter.com/metadevgirl" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a href="http://linkedin.com/in/jeseekiavaughn" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="http://github.com/jeseekia" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
      </ul>
    </footer>
    </div>
  )
}
