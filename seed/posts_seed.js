const db = require('../db/connection')
const Post = require('../models/posts_model')

db.on('error', console.error.bind(console, 'MongoDB connection errror:'))

const main = async () => {
  const posts = [
    {
      "title": "The Importance of Coffee AND Sleep",
      "author": "Zahra Khan",
      "content": "Umami ugh mumblecore, la croix quinoa chambray pinterest subway tile cold-pressed yr dreamcatcher. Authentic +1 schlitz portland salvia heirloom ugh everyday carry etsy mlkshk irony sustainable af coloring book. Lumbersexual palo santo migas mumblecore. Blog PBR&B VHS microdosing flannel.",
      "imgUrl": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "From Front-end to Back-end",
      "author": "David Khananov",
      "content": "Cornhole offal health goth portland letterpress freegan venmo meggings seitan tilde 3 wolf moon. Twee selfies 90's actually cornhole viral jianbing poke try-hard tacos seitan stumptown before they sold out. Paleo synth next level authentic messenger bag shoreditch street art vegan twee. Keffiyeh flannel bitters, cloud bread crucifix PBR&B raw denim gastropub bushwick tumeric. Mixtape health goth meh beard vaporware aesthetic palo santo glossier post-ironic. Deep v seitan gochujang ramps umami freegan put a bird on it mustache, kickstarter tilde. Taxidermy next level occupy church-key poutine, banh mi palo santo shabby chic gastropub air plant.",
      "imgUrl": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Fashion of the Future",
      "author": "Indiana Kuffer",
      "content": "Chartreuse swag fixie cronut polaroid, chillwave fingerstache heirloom raw denim DIY +1 single-origin coffee brooklyn paleo. Cardigan bicycle rights wolf, YOLO selvage fingerstache flannel photo booth retro occupy aesthetic freegan fanny pack. Williamsburg semiotics photo booth man bun enamel pin succulents coloring book 3 wolf moon vaporware deep v +1. Knausgaard woke synth heirloom crucifix tilde. Vegan swag slow-carb, small batch tbh locavore direct trade prism banh mi etsy. Craft beer kinfolk tousled health goth paleo salvia polaroid ethical schlitz.",
      "imgUrl": "https://images.unsplash.com/photo-1491956142110-8a4226a12077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  ]

  await Post.insertMany(posts)
  console.log('Created seed posts!')
}

const run = async () => {
  await main()
  db.close()
}

run()