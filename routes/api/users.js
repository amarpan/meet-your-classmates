const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const multer  = require('multer');
const upload = multer();

router.post('/signup', upload.single('photo'), usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/:username',isAuthorized, usersCtrl.profile);


/*---------- Protected Routes ----------*/
function isAuthorized(req, res, next){
	if(req.user){
		return next()
	} else {
		res.status(401).json({message: 'Not Authorized'})
	}

}



module.exports = router;