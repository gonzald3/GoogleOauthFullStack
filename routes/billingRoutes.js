const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

//Note: Use a test payment such as 4242 4242 4242 4242
// 12/34      CVC: 567

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });

        console.log(charge);


    });

};