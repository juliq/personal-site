const express = require('express');
const app = express();


/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('server/public/'));

/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});