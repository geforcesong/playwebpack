const homeController = require('../www/controllers/homeController.js');
const aboutController = require('../www/controllers/aboutController.js');
module.exports = (app)=>{
    app.get('/', homeController);
    app.get('/about', aboutController);
}