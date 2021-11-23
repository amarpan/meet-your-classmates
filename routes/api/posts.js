const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
const multer  = require('multer')
const upload = multer()

router.post('/', isAuthorized, postsCtrl.create);
router.get('/', postsCtrl.index)
router.delete('/deletepost/:postId', postsCtrl.delete)

function isAuthorized(req, res, next){
	if(req.user){
		return next()
	} else {
		res.status(401).json({message: 'Not Authorized'})
	}

}

module.exports = router;