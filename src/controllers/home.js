let main = {
    home: (req, res) => {
        res.render('home');
    },
    webpack: (req, res) => {
        res.render('webpack')
    },
    parcel: (req, res) => {
        res.render('parcel')
    },
    esbuild: (req, res) => {
        res.render('esbuild')
    },
    vite: (req, res) => {
        res.render('vite')
    }
}

module.exports = main