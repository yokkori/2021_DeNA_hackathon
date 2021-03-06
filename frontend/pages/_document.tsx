import { GetServerSideProps } from 'next'
import { DocumentInitialProps, loadGetInitialProps } from 'next/dist/shared/lib/utils'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import internal from 'stream'

interface Props{
  initialProps?: DocumentInitialProps;
  id: number;
}

class MyDocument extends Document<Props>{
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const { id } = ctx.query;
   
    return { ...initialProps,id}
  }

  render() {
    const {id} = this.props
    return (
      <Html>
        <Head>
<meta name="description" content="" />
<meta property="og:title" content="" />
<meta
  property="og:description"
  content=""
/>
<meta name="keywords" content="" />
<meta property="og:type" content="" />
<meta property="og:url" content="" />
<meta
  property="og:image"
            content={`${process.env["NEXT_PUBLIC_API_DOMAIN"]}/users/${id}/image`}
/>
<meta property="og:site_name" content="HAPPLY" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="" />
<meta name="twitter:url" content="" />
<meta name="twitter:title" content="" />
<meta name="twitter:text:title" content="HAPPLY" />
<meta
  name="twitter:description"
  content=''
/>
<meta
  name="twitter:image"
  content=""
/>
<link rel="canonical" href="" />
<link
  rel="icon"
  href=""
/>
<link
  rel="shortcut icon"
  href={
    ''
  }
/>
<link
  rel="apple-touch-icon"
  href={
    ''
  }
/>
</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}



export default MyDocument


