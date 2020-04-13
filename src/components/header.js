import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ headerText, arbitraryPhrase }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </h1>
      <h2>
        {headerText}
        <br/>
        {arbitraryPhrase}
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  headerText: PropTypes.string,
  arbitraryPhrase: PropTypes.string,
}

Header.defaultProps = {
  headerText: ``,
  arbitraryPhrase: `default phrase`,
}



export default Header
