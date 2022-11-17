var shop = [
    {
      title: 'Timmy- Tiger',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg',
      price: '$7,500-15,000',
      description: "Timmy is Tony's younger brother. Not as talkative, but twice as cuddly."
    },
    {
      title: "Rocky- Rottweiler",
      image: 'http://127.0.0.1:5500/petShopProject/rottweiler-2160308_1280-1024x682.jpg',
      price: '2500.00',
      description: "AKC Certified Bloodlines. Great family dog, great for kids to grow up with."
    },
    {
      title: "Heathcliff- Persian Tabby",
      image: 'http://127.0.0.1:5500/petShopProject/heathcliff1.jpg',
      price: '50.00',
      description: 'Loves Cuddles. He loves lasagna like his cousin Garfield.'
    },
    {
      title: "Rex- Chinchilla",
      image: 'http://127.0.0.1:5500/petShopProject/chinchilla.jpg',
      price: '4000.00',
      description: 'Perfect pet for small apartments. They do not hot weather weather.'
    },
    {
      title: "Chiquita- Sugar Glider",
      image: 'http://127.0.0.1:5500/petShopProject/Flying-Squirrel-3.jpg',
      price: '5500.00',
      description: 'Loves heights and people. Has a very specific diet of fruit, vegetables, and supplements.'
    },
    {
      title: "Lobo- Iguana",
      image: 'http://127.0.0.1:5500/petShopProject/iguana.jpg',
      price: '1500.00',
      description: 'Loves eating crickets and worms. Beware of his tail. He can be tempermental.'
    },
    {
      title: "Billy- Capuchin",
      image:  'http://127.0.0.1:5500/petShopProject/capuchin.jpg',
      price: '10,000.00',
      description: "He'll love you forever if you give him dried fruit. Keep a diaper on him."
    },
    {
      title: "Mojo- English Bulldog",
      image: 'http://127.0.0.1:5500/petShopProject/english_bulldog.jpg',
      price: '5000.00',
      description: 'Perfect couch companion, but he loves skateboarding and surfing.'
    },
    {
      title: "Broly- Pit Bull",
      image: 'http://127.0.0.1:5500/petShopProject/Pitbull-puppies-for-sale-in-California-862x861.jpg',
      price: '1800.00',
      description: 'Great family dog, perfect with kids, great deterent. Full of personality.'
    },
    {
      title: "Billy- Cockatoo",
      image: 'http://127.0.0.1:5500/petShopProject/cockatoo.jpg',
      price: '2000.00',
      description: 'Be careful what you say around this one. He WILL remember and regularly recite anything you teach him.'
    }
  
    
    ]
    
    var postHTML = " "
  
  
  
// This is what I worked on 11/3/2022
    
  
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="card mb-5 mx-1" style="width: 18rem;"><h5 class="card-title text-center">' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '" class="card-img-top"> '
        var price = '<div class="card-body"><p> $' + shop[i].price + '</p>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> Buy Now</button></div></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML