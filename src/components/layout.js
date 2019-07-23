import React, { Component } from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          backgroundColor: '#ffffff',
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(32),
          minHeight: `100vh`,
          padding: `${rhythm(1.5)} ${rhythm(7 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            bottom: 0,
          }}
        >
          Copyright © {new Date().getFullYear()} (
          <a
            href={`https://creativecommons.org/licenses/by-sa/4.0/`}
            target={`_blank`}
            rel={`noopener noreferrer`}
          >
            CC BY-SA 4.0
          </a>
          )
        </footer>
      </div>
    )
  }
}

export default Layout
