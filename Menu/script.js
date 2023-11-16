// Sample data (replace with your actual data)
var menuItems = [
    { name: 'Pizza, Italy', imageUrl: 'pizza.jpeg', price: '$11', rating: 4.0, description: "Slices to meet you, my friend"},
    { name: 'Burger, America/Germany', imageUrl: 'burger.avif', price: '$10', rating: 5.0, description: "You are the cheese to my burger"},
    { name: 'Sushi, China/Japan', imageUrl: 'sushi.webp', price: '$12', rating: 3.0, description: "This is how I roll"},
  ];
  
  $(document).ready(function() {
    var menuContainer = $('#menu-container');
  
    // Populate the menu
    $.each(menuItems, function(index, item) {
      var menuItem = $('<div class="menu-item"></div>');
      var foodImage = $('<div class="food-image-container"><img class="food-image" src="' + item.imageUrl + '" alt="' + item.name + '"></div>');
      var foodInfo = $('<div class="food-info"></div>');
  
      foodImage.hover(function() {
        var imageContainer = $(this);
        var description = $('<p class="food-description">' + item.description + '</p>');
  
        imageContainer.append(description);
        description.slideDown();
      }, function() {
        var imageContainer = $(this);
        var description = imageContainer.find('.food-description');
  
        description.slideUp(function() {
          description.remove();
        });
      });
  
      var ratingStars = '';
      for (var i = 0; i < 5; i++) {
        if (i < item.rating) {
          ratingStars += '★';
        } else {
          ratingStars += '☆';
        }
      }
  
      foodInfo.html('<h3>' + item.name + '</h3>' +
        '<p>Price: ' + item.price + '</p>' +
        '<p>Rating: ' + ratingStars + '</p>');
  
      menuItem.append(foodImage).append(foodInfo);
      menuContainer.append(menuItem);
    });
  });