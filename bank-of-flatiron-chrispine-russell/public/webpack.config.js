const path = require('path');

module.exports = {
  entry: './path/to/your/main.js', // Replace with the entry point of your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
  },
};
