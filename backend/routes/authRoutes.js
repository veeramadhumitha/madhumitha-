const express = require('express');//importing express module
const router = express.Router(); //creating a router object using express
const {register,login} = require('../controllers/authControllers');//importing register and login functions from authControllers
router.post('/register', register);//only register route is enabled
router.post('/login', login);//only login route is enabled
module.exports = router;
//exporting the router object to be used in other parts of the application
// Only register and login routes are enabled for security reasons
// Other routes like password reset, email verification, etc. are disabled
// to minimize potential attack vectors and ensure a more secure authentication process.
// This approach helps in reducing the surface area for vulnerabilities
// and ensures that only essential functionalities are exposed to users.
// This is a common practice in secure application development. 
// Developers can enable additional routes as needed after thorough security assessments.
// End of backend/routes/authRoutes.js