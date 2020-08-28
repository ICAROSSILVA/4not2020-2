const mongoose = require('mongoose') 

module.exports = uri => { // module.exports Puxa um arquivo do outro
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}