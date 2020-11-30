module.exports = {
  siteMetadata: {
    title: "Institution",
    description: "institution is the best",
    author: "@SuranjanRai",
    twitterUsername: "@RaiSuranjan",
    image: "/seoImage.jpg",
    //siteUrl: "https://gatsbypractise.netlify.app",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-playground`,
  ],
}