# My React Webpack Application

This project provides a custom Webpack configuration for React projects. It is designed to streamline the setup process, enabling the use of Babel to transpile JSX code, as well as handling resources like images, fonts, and JSON files.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   First, clone the repository to your local machine using Git:

2. **Navigate to the project directory:**

   Change to the project folder:

   ```bash
   cd my-react-webpack-app
   ```

3. **Install dependencies:**

   Use npm to install all the required dependencies listed in the `package.json`:

   ```bash
   npm install
   ```

4. **Start the development server:**

   After the installation is complete, you can start the development server:

   ```bash
   npm start
   ```

## Usage

- You can now begin working on the project. Any changes made to the source files will be automatically compiled and reflected in the browser.

## Explanation of the Webpack configuration

```javascript
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
    clean: true,

    // Specifies the base path for all assets. Essential for SPAs to correctly handle client-side routing.
    publicPath: '/'
  },

  resolve: {
    // File extensions that Webpack will recognize without needing to explicitly specify them
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  // Source maps for efficient debugging
  devtool: 'source-map',

  devServer: {
    static: {
      // Serves files from the 'dist' directory
      directory: path.join(__dirname, 'dist')
    },
    // Enables gzip compression
    compress: true,
    // Port for the server
    port: 3000,
    // Enables HMR (Hot Module Replacement)
    hot: true,
    // Automatically opens the browser when the server starts
    open: true,
    // Support for Single Page Applications (SPA)
    historyApiFallback: true
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
        // Rule to process SASS and SCSS files
        test: /\.s[ac]ss$/i,

        use: [
          // Inject CSS styles directly into the DOM to be applied globally
          'style-loader',

          // Process the CSS files and resolve their dependencies
          'css-loader',

          // Applies PostCSS transformations (e.g., autoprefixer, TailwindCSS)
          'postcss-loader',

          // Compiles Sass/SCSS to CSS
          'sass-loader'
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
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
