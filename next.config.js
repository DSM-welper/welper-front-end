const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withCSS(
  withSass({
    distDir: "build",
    exportTrailingSlash: true,

    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            esModule: false,
          },
        },
      });

      return config;
    },
  })
);
