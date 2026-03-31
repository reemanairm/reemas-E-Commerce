# Amazon Clone - E-Commerce Web Application

A full-featured e-commerce web application built with vanilla JavaScript, HTML, and CSS. This project replicates key Amazon functionality including product browsing, shopping cart management, checkout process, order tracking, and more.

## Features

### 🛍️ Product Management
- **Product Catalog**: Browse a comprehensive product catalog with images, names, and prices
- **Multiple Product Types**: Support for clothing, appliances, and general products
- **Product Search**: Real-time search functionality to find products by keywords or name
- **Product Details**: View product information and ratings

### 🛒 Shopping Cart
- **Add to Cart**: Add products with customizable quantities
- **Cart Persistence**: Cart data saved to browser local storage for session continuity
- **Cart Management**: View, update quantities, and remove items from cart
- **Real-time Updates**: Instant cart quantity display in header

### 💳 Checkout System
- **Multi-step Checkout**: Organized checkout flow with header, order summary, and payment summary
- **Order Review**: Review all items before purchase
- **Delivery Options**: Multiple delivery options with different timeframes and costs
- **Cost Breakdown**: See subtotal, tax, and shipping costs

### 📦 Order Tracking
- **Order History**: View all past orders
- **Order Details**: Track order status and delivery information
- **Delivery Tracking**: Monitor delivery dates and status

### 🎨 User Interface
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Amazon-like Header**: Search bar, returns/orders link, and cart icon
- **Modern Styling**: Clean, professional design with Google Fonts (Roboto)
- **Icon System**: Custom icons for cart, search, and other elements

### 🧪 Testing
- **Jasmine Test Suite**: Comprehensive unit tests for core functionality
- **Test Coverage**: Tests for cart operations, product filtering, and utility functions
- **Automated Testing**: Easy to run and extend test suite

## Project Structure

```
amazon-js-copy/
├── index.html                 # Main product catalog page
├── checkout.html              # Checkout page
├── orders.html                # Order history page
├── tracking.html              # Order tracking page
├── lesson18.html              # Additional page
│
├── scripts/                   # JavaScript files
│   ├── amazon.js              # Main product display logic
│   ├── checkout.js            # Checkout page logic
│   ├── orders.js              # Orders page logic
│   ├── tracking.js            # Tracking page logic
│   ├── checkout/              # Checkout components
│   │   ├── checkoutHeader.js
│   │   ├── orderSummary.js
│   │   └── paymentSummary.js
│   └── utils/                 # Utility functions
│       └── money.js           # Currency formatting
│
├── data/                      # Data management
│   ├── cart.js                # Shopping cart logic
│   ├── products.js            # Product data and classes
│   ├── cart-class.js          # Cart class implementation
│   ├── deliveryoptions.js     # Delivery options
│   ├── orders.js              # Order management
│   └── backend-product.js     # Backend product fetch
│
├── styles/                    # CSS stylesheets
│   ├── shared/                # Shared styles
│   │   ├── general.css
│   │   └── amazon-header.css
│   └── pages/                 # Page-specific styles
│       ├── amazon.css
│       ├── orders.css
│       ├── tracking.css
│       └── checkout/
│           ├── checkout.css
│           └── checkout-header.css
│
├── images/                    # Image assets
│   └── products/
│       └── variations/
│
├── image/                     # Icon assets
│   ├── icons/
│   └── ratings/
│
├── backend/                   # Backend assets
│   └── products.json          # Product data
│
└── tests/                     # Test suite
    ├── checkout/
    │   └── orderSummaryTest.js
    ├── data/
    │   ├── cartTest.js
    │   └── productTest.js
    └── utils/
        └── moneyTest.js
```

## Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, or Edge)
- No build tools or npm packages required
- Simple HTTP server (optional, for local development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd amazon-js-copy
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local HTTP server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     ```

3. **Navigate to localhost**
   ```
   http://localhost:8000
   ```

## Usage

### Browsing Products
1. Visit the main page (index.html)
2. Browse the product catalog
3. Use the search bar to find specific products by name or keyword

### Adding Items to Cart
1. Click "Add to Cart" button on any product
2. Check the cart quantity in the header
3. Your cart is automatically saved

### Checkout
1. Click the cart icon in the header
2. Review items in checkout.html
3. Select delivery options
4. View payment summary
5. Complete your order

### Tracking Orders
1. Navigate to orders.html to view order history
2. Click on any order to track delivery status
3. Check tracking.html for detailed tracking information

## Key Technologies

- **HTML5**: Semantic markup for responsive web pages
- **CSS3**: Modern styling with responsive design
- **Vanilla JavaScript (ES6+)**: 
  - ES6 modules for code organization
  - Classes for product types (Product, Clothing, Appliance)
  - Modern array methods (map, filter, forEach)
  - Local storage API for data persistence
- **Jasmine**: Testing framework for unit tests

## Core Features Explained

### Shopping Cart System
```javascript
// Cart items stored with product ID, quantity, and delivery option
cart = [
  {
    productid: 'product-id',
    quantity: 2,
    deliveryoptionid: '1'
  }
]
// Persisted to localStorage for session continuity
```

### Product Classes
- **Product**: Base product class
- **Clothing**: Clothing-specific product with size variations
- **Appliance**: Appliance products with specific attributes

### Data Fetching
Products are fetched from a backend API (supersimplebackend.dev) and stored in memory with local storage backup.

## Testing

### Running Tests
1. Open `tests/tests.html` in your browser
2. View test results and coverage
3. Tests include:
   - Cart operations (add, remove, update)
   - Product filtering and search
   - Money/currency formatting
   - Order summary calculations

### Test Files
- `tests/checkout/orderSummaryTest.js` - Order summary tests
- `tests/data/cartTest.js` - Cart functionality tests
- `tests/data/productTest.js` - Product filtering tests
- `tests/utils/moneyTest.js` - Currency formatting tests

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Features in Detail

### Local Storage
- Cart data persists across browser sessions
- Default demo cart loaded if no saved cart exists
- Easy reset by clearing browser storage

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interface
- Optimized for screens from 320px to 2560px

### Search Functionality
- Real-time keyword matching
- Searches product names and keywords
- Case-insensitive matching
- URL parameter-based search

## Future Enhancement Ideas

- [ ] User authentication and accounts
- [ ] Payment gateway integration
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Advanced filtering and sorting
- [ ] Order status notifications
- [ ] Responsive improvements
- [ ] Performance optimization
- [ ] Progressive Web App (PWA) features
- [ ] Admin dashboard

## Performance Notes

- Lightweight application with no external dependencies
- Client-side rendering for instant feedback
- Local storage caching for offline access
- Optimized images and assets

## License

MIT License - Feel free to use this project for learning and personal projects.

## Contributing

This project is ideal for learning JavaScript, web development, and e-commerce concepts. Feel free to fork and extend!

---

**Happy Shopping! 🛍️**