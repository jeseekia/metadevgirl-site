/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 module.exports = {
   siteMetadata: {
    title: `MetaDevGirl`,
    },
   plugins: [
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
        },
      },
     `gatsby-transformer-remark`,
     `gatsby-plugin-emotion`,
     {
       resolve: `gatsby-plugin-typography`,
       options: {
         pathToConfigModule: `src/utils/typography`,
       },
     },
     {
     resolve: `gatsby-plugin-google-analytics`,
     options: {
       // replace "UA-XXXXXXXXX-X" with your own Tracking ID
       trackingId: "UA-60046740-1",
     },
   },
   ],
 }
