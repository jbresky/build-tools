const express = require('express');
const router = express.Router();
const main = require('../controllers/home')

router.get('/', main.home)
router.get('/webpack', main.webpack)
router.get('/parcel', main.parcel)
router.get('/esbuild', main.esbuild)
router.get('/vite', main.vite)

module.exports = router