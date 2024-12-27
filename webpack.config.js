const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Development mode to facilitate debugging
  mode: 'development',

  // Entry point for the application where the bundling process begins
  entry: './src/main.jsx',

  output: {
    // Folder where the compiled files will be generated
    path: path.resolve(__dirname, 'dist'),

    // Name of the main generated file
    filename: 'main.js',

    // Cleans the output folder before each build to avoid leftovers from previous builds
    clean: true
  },

  resolve: {
    // File extensions that Webpack will recognize without needing to explicitly specify them
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  module: {
    rules: [
      {
        // Rule to process JavaScript and JSX files with Babel
        test: /\.jsx?$/i,

        // Exclude the node_modules folder, as it does not need to be processed by Babel
        exclude: /node_modules/,

        // Use Babel to transpile JSX code to compatible JavaScript
        use: 'babel-loader'
      },
      {
        // Rule to process CSS files
        test: /\.css$/i,

        use: [
          // Inject CSS styles directly into the DOM to be applied globally
          'style-loader',

          // Process the CSS files and resolve their dependencies
          'css-loader'
        ]
      },
      {
        // Rule to process images (formats .png, .jpg, .jpeg, .gif, .svg)
        test: /\.(png|jpg|jpeg|webp|gif|svg)$/i,

        // Use the 'resource' asset type to export images as static files
        type: 'asset/resource',

        generator: {
          // Define the name and folder structure for the output images with a unique hash
          filename: 'assets/images/[name][hash][ext][query]'
        }
      },
      {
        // Rule to process fonts (formats .woff, .woff2, .eot, .ttf, .otf)
        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        // Use the 'resource' asset type to export fonts as static files
        type: 'asset/resource',

        generator: {
          // Define the name and folder structure for the output fonts with a unique hash
          filename: 'assets/fonts/[name][hash][ext][query]'
        }
      },
      {
        // Rule to process JSON files
        test: /\.json$/i,

        // Use the 'resource' asset type to export JSON files as static resources
        type: 'asset/resource',

        generator: {
          // Define the name and folder structure for the output JSON files with a unique hash
          filename: 'assets/data/[name][hash][ext][query]'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      // Specify the base HTML file to use as a template for generating the final file
      template: './index.html',

      // Define the name of the generated HTML file after the build
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          // Define 'public' as the source folder to be copied
          from: 'public',
          // Copy all contents to the root of the 'dist' folder
          to: '',
          // Prevent errors if the 'public' folder does not exist
          noErrorOnMissing: true
        }
      ]
    })
  ]
};
