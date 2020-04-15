module.exports = {
  pathPrefix: "/nosleepjavascript-blog",
  siteMetadata: {
    title: `NoSleep Javascript Blog`,
    author: `nacho & franleplant`,
    description: `Blog created by engineers who love to talk about tech culture and various topics related to programming and development.`,
    siteUrl: `https://nosleepjavascript.com`,
    //TODO remove
    social: {
      twitter: ``,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              fromHeading: 2,
              toHeading: 6,
            },
          },

          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-reading-time`,
          `gatsby-remark-autolink-headers`,

          {
            resolve: "gatsby-remark-emojis",
            options: {
              active: true,
              // Select the size (available size: 16, 24, 32, 64)
              size: 64,
              // Add custom styles
              styles: {
                display: "inline",
                margin: "0",
                "margin-top": "1px",
                position: "relative",
                top: "5px",
                width: "25px",
              },
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-154632381-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NoSleepJavascript blog`,
        short_name: `NoSleepJavascript`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo_min.svg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        //isTSX: true, // defaults to false
        //jsxPragma: `jsx`, // defaults to "React"
        //allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        codegenConfig: {
          typesPrefix: "I",
          avoidOptionals: true,
        },
      },
    },
  ],
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
  },
}
