const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', {places})
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})


router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error: '
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. `
                    message += `${err.errors[field].message}`
                }
                console.log('Validation error message', message)
                res.render('places/new', { message })
            }
            else {
                res.render('error404')
            }
        })
})



router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .populate('comments')
        .then(place => {
            console.log(place.comments)
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})



router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
})

// router.post('/:id/rant', (req, res) => {
//     console.log(req.body)
//     req.body.rant = req.body.rant ? true : false
//     res.send('GET /places/:id/rant stub')
// })

router.post("/:id/comment", (req, res) => {
    console.log(req.body);

    // Ensure that the stars field is correctly parsed as a number
    req.body.stars = parseFloat(req.body.stars);
    req.body.rant = req.body.rant ? true : false;

    db.Place.findById(req.params.id)
        .then((place) => {
            db.Comment.create(req.body)
                .then((comment) => {
                    place.comments.push(comment.id);
                    place
                        .save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`);
                        })
                        .catch((err) => {
                            console.log(err);
                            res.render("error404");
                        });
                })
                .catch((err) => {
                    console.log(err);
                    res.render("error404");
                });
        })
        .catch((err) => {
            console.log(err);
            res.render("error404");
        });
});




router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
