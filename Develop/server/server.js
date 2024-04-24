// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public'), {
//   // Set the correct MIME type for JavaScript files
//   setHeaders: (res, filePath) => {
//     if (filePath.endsWith('.js')) {
//       res.setHeader('Content-Type', 'application/javascript');
//     }
//   }
// }));

// // Serve 'main.jsx' from a different directory
// const MAIN_JSX_PATH = path.join(__dirname, './client/src/main.jsx');

// app.get('/main.js', (req, res) => {
//   res.sendFile(MAIN_JSX_PATH, {
//     headers: {
//       'Content-Type': 'application/javascript',
//     },
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
