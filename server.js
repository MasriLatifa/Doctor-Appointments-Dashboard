const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engin', 'ejs')
app.set('view', __dirname + '/views')