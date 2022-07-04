import Document, { Html, Head, Main, NextScript } from 'next/document'
// import { GA_TRACKING_ID } from '../lib/gtag'
// import { GTM_ID } from '../lib/gtm'

class MyDocument extends Document {
    render() {
    return (
        <Html>
        <Head>
            <meta charset="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="description" content="“Elisabeth Ngo” Bienvenue sur mon portfolio où je présente touts mes travaux en développement web, UX/UI." />
            <meta name="theme-color" content="#FF0000" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Elisabeth Ngo" />
            <meta name="copyright" content="ElisabethNgo@2022" />
            <meta name="robots" content="index"/>
            <meta httpEquiv="expires" content="43200"/>
            <title>Elisabeth Ngo</title> 
            <meta property="og:title" content="Elisabeth Ngo" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://incognitos.vercel.app" />
            <meta property="og:image" content/>
            <meta property="og:description" content="“Elisabeth Ngo” Bienvenue sur mon portfolio où je présente touts mes travaux en développement web, UX/UI." />
            <meta name="theme-color" content="#FF0000"/>

            
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,700;1,100&display=swap" rel="stylesheet"></link>

            {/* Globla site Tag
            <script 
                async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} 
            />
            <script
                dangerouslySetInnerHTML={{
                __html: `     
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}   
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {  
                    page_path: window.location.pathname,
                    });
                `,
                }}
                
            /> */}
        </Head>
        <body>
        {/* <script 
        async src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        /> */}
            <Main />
            <NextScript />
        </body>
        </Html>
    )
    }
}

export default MyDocument