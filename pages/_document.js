import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import getConfig from 'next/config'

const { publicRuntimeConfig: {
  API_URL,
  NODE_ENV,
  REALM,
  AUTH_SERVER_URL,
  SSL_REQUIRED,
  RESOURCE,
  PUBLIC_CLIENT,
  CONFIDENTIAL_PORT
} } = getConfig()

injectGlobal`
  @font-face {
    font-family: Epilogue-Black;
    src: url('/static/fonts/Epilogue/Epilogue-Black.ttf');
  }

  @font-face {
    font-family: Epilogue-BlackItalic;
    src: url('/static/fonts/Epilogue/Epilogue-BlackItalic.ttf');
  }

  @font-face {
    font-family: Epilogue-Bold;
    src: url('/static/fonts/Epilogue/Epilogue-Bold.ttf');
  }

  @font-face {
    font-family: Epilogue-BoldItalic;
    src: url('/static/fonts/Epilogue/Epilogue-BoldItalic.ttf');
  }

  @font-face {
    font-family: Epilogue-Italic;
    src: url('/static/fonts/Epilogue/Epilogue-Italic.ttf');
  }

  @font-face {
    font-family: Epilogue-Medium;
    src: url('/static/fonts/Epilogue/Epilogue-Medium.ttf');
  }

  @font-face {
    font-family: Epilogue-MediumItalic;
    src: url('/static/fonts/Epilogue/Epilogue-MediumItalic.ttf');
  }

  @font-face {
    font-family: Epilogue-Regular;
    src: url('/static/fonts/Epilogue/Epilogue-Regular.ttf');
  }

  @font-face {
    font-family: Epilogue-Light;
    src: url('/static/fonts/Epilogue/Epilogue-Light.ttf')
  }

  @font-face {
    font-family: Epilogue-LightItalic;
    src: url('/static/fonts/Epilogue/Epilogue-LightItalic.ttf')
  }

  :root {
    /* Colors */
    --white: #FFFFFF;
    --black: #000000;
    --gray: #686868;
    --primary-color: #8665E0;
    --secondary-color: #AD9CDA;
    --highlight: #ED8862;
    --warning: #E86062;

    /* Fonts */
    --regular: 'Epilogue-Regular';
    // --black: 'Epilogue-Black';
    // --black-italic: 'Epilogue-BlackItalic';
    --bold: 'Epilogue-Bold';
    --bold-italic: 'Epilogue-BoldItalic';
    --italic: 'Epilogue-Italic';
    --medium: 'Epilogue-Medium';
    --medium-italic: 'Epilogue-MediumItalic';
    --light: Epilogue-Light
    --light-Italic: Epilogue-LightItalic

    /*background sizes */
    --lined: calc(width/22);

    font-size: 10px;
    @media (max-width: 760px) {
    font-size: 7px;
  }
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--regular), 'Epilogue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // color: var(--black);
  }
  
  body {
    margin:0;
    padding:0;
    width: 100%;
    background-color: var(--white);
    // color: var(--black);
    font-family: var(--regular), 'Epilogue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
)
`

const HEADERS = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }          
]

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage, res }) {
    HEADERS.forEach(header => res.setHeader(header.key, header.value))
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags } // return styles collected
  }

  render () {
    return (
      <html>
        <Head>
          <title>Portal Diálogo Legislativo - Legislatura de la Ciudad de Buenos Aires</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          {this.props.styleTags}
          {
            NODE_ENV === 'production' &&
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-J1V3R1PPV7"></script>
          }
          {
            NODE_ENV === 'production' &&
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-J1V3R1PPV7');` }} />
          }
          <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon.ico' /> 
          <link rel='stylesheet' href='/static/assets/video-js.min.css' /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
