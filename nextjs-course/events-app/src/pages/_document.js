const { default: Document, Html, Head, Main, NextScript  } = require('next/document');

class MyDocument extends Document {
  render() {
    return (
      <Html lang='es'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
