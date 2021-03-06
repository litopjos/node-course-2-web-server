

/*comment*/
const express = require  ('express');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 3000;


hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');


// app.use((req,resp,next)=>{
//   resp.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
  var now = new Date().toString();
  console.log(`${now} ${req.method} ${req.url}`);
  next();
})

hbs.registerHelper('getCurrentYear', ()=> {
  return new Date().getFullYear();
})

 app.get('/', (req,resp)=>{
//   resp.send('<h1>hello world!</h1>');
    resp.render ('home.hbs', {
      pageTitle: 'Home Page Title',
      welcomeMessage: 'Hey There, Dudes!'
    });
 });

 app.get('/about', (req,resp)=>{
//   resp.send('<h1>hello world!</h1>');
    resp.render ('about.hbs', {
      pageTitle: 'Awesome Page Title',
    });
 });

 app.get('/bad', (req,resp)=>{
//   resp.send('<h1>hello world!</h1>');
    resp.send ({errorMsg:'unable message'}
    );
 });

 app.get ('/projects', (req,resp)=>{
   resp.render('projects.hbs', {
   pageTitle: 'Projects Page'
  })
 })

 app.listen(port, ()=>{console.log (`server is now listening at port ${port}`);});
