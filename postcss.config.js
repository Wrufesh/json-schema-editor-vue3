// postcss.config.js
module.exports = {
    plugins: [
      require('postcss-import'),
      require('postcss-nested'),
      require('autoprefixer'),
      require('@fullhuman/postcss-purgecss')({
        // Specify the paths to all of your template files
        content: [
          // './public/**/*.html',
          './src/**/*.vue',
          './src/**/*.jsx',
          './src/**/*.js',
          // Add other paths if necessary
        ],
        // Optional: include any CSS files that are not purged
        safelist: {
          standard: [
            /^ant-/,
            // Add any class names you want to preserve
          ],
        },
        // Optional: Specify the CSS file extensions to scan
        defaultExtractor: (content) => {
          const contentWithoutStyleBlocks = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
          return contentWithoutStyleBlocks.match(/[\w-/:]+(?<!:)/g) || [];
        },
      }),
    ],
  };
  