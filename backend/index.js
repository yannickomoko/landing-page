const express = require('express'); 
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');


const app = express();


// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Signup Route
app.post('/signup', (req, res) => {
    const { firstName, lastName, email } = req.body;
  
    // Make sure fields are filled
    if (!firstName || !lastName || !email) {
      res.redirect('/fail.html');
      return;
    }
  
    // Construct req data
    const data = {
      members: [
        {
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName
          }
        }
      ]
    };
  
    const postData = JSON.stringify(data);
  
    fetch('https://us2.api.mailchimp.com/3.0/lists/41a67b3c94', {
      method: 'POST',
      headers: {
        Authorization: 'auth e9ed4e5414242dadd37f0c17c5747464-us2'
      },
      body: postData
    })
      .then(res.statusCode === 200 ?
        res.redirect('/success.html') :
        res.redirect('/fail.html'))
      .catch(err => console.log(err))
  })

  const port = process.env.PORT || 5000;

app.listen(port,() =>{
    console.log('Server starting on', port);
});