module.exports = {
  siteMetadata: {
    title: "Institution",
    description: "institution is the best",
    author: "@SuranjanRai",
    twitterUsername: "@RaiSuranjan",
    image: "/defaultBcg.jpeg",
    siteUrl: "https://educationalflavouraaus.netlify.app/",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://educationalflavouraaus.netlify.app/",
        sitemap: "https://educationalflavouraaus.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
