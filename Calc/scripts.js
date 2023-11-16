$(document).ready(function () {
    var $courseItems = $('.menu-item');
    var $cartItems = $('#cart-items');
    var $cartTotal = $('#cart-total');

    $courseItems.on('click', function () {
        addToCart($(this));
    });

    function addToCart($item) {
        var itemName = $item.data('name');
        var itemPrice = parseFloat($item.data('price'));

        var $existingItem = $cartItems.find(`li[data-name="${itemName}"]`);

        if ($existingItem.length) {
            increaseQuantity($existingItem);
        } else {
            var $cartItem = $('<li>').attr('data-name', itemName).html(`${itemName} - $${itemPrice.toFixed(2)}`);
            $cartItems.append($cartItem);

            updateCartTotal(itemPrice);
        }
    }

    function increaseQuantity($item) {
        var quantity = parseInt($item.data('quantity')) || 1;
        quantity++;
        $item.data('quantity', quantity);
        $item.html(`${$item.data('name')} (x${quantity}) - $${(quantity * parseFloat($item.data('price'))).toFixed(2)}`);

        updateCartTotal(parseFloat($item.data('price')));
    }

    function updateCartTotal(price) {
        var currentTotal = parseFloat($cartTotal.text());
        var newTotal = currentTotal + price;
        $cartTotal.text(newTotal.toFixed(2));
    }

    $('#checkout-btn').on('click', function () {
        alert('Thank you for your order! Total amount: $' + $cartTotal.text());
    });

    $('#clear-btn').on('click', function () {
        clearCart();
    });

    function clearCart() {
        $cartItems.empty();
        $cartTotal.text('0.00');
    }

    $('#clear-btn').on('click', function () {
        clearCart();
    });
    
});
