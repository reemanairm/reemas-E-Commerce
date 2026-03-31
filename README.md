# Amazon Clone - E-Commerce Web Application

This project is a fully functional **E‑Commerce web application built
using HTML, CSS, and Vanilla JavaScript only**, without backend
frameworks such as Node.js or Express.

The goal of this repository is to demonstrate **deep JavaScript
programming knowledge, application architecture understanding, and
frontend‑driven system design** using core web technologies.

This project is intentionally built *without frameworks* to showcase
strong fundamentals and the ability to implement complex logic directly
with JavaScript.

## Purpose of the Project

This repository is included in my portfolio to demonstrate:

-   Strong *JavaScript programming fundamentals*
-   Ability to build *structured applications without frameworks*
-   Understanding of *frontend architecture and modular design*
-   Implementation of **complex application logic using core
    JavaScript**
-   Practical knowledge of **DOM manipulation, state management, and UI
    rendering**

It highlights my *programming depth and system thinking* using
foundational web technologies.

## Why This Project Matters

Modern web development often relies heavily on frameworks.\
This project intentionally avoids them to demonstrate:

-   **Deep understanding of JavaScript fundamentals**
-   Ability to design application logic from scratch
-   Strong control over browser APIs and the DOM
-   Clear separation of architecture and functionality

This repository is meant to showcase **programming depth and
architectural thinking**.

## Features

-   Product listing interface
-   Shopping cart management
-   Quantity update system
-   Order placement workflow
-   Order tracking page
-   Dynamic UI rendering
-   Client‑side state management
-   Interactive product UI components

## Technologies Used

*Frontend* - HTML - CSS - Vanilla JavaScript

*Concepts Demonstrated* - Modular JavaScript architecture -
Event‑driven programming - DOM manipulation - Dynamic UI rendering -
Client‑side data handling - Separation of UI and application logic

## Project Structure

```
amazon-js-copy/
├── index.html                 # Main product catalog page
├── checkout.html              # Checkout page
├── orders.html                # Order history page
├── tracking.html              # Order tracking page
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


## Performance Notes

- Lightweight application with no external dependencies
- Client-side rendering for instant feedback
- Local storage caching for offline access
- Optimized images and assets

 ## Possible Future Improvements

-   Backend API integration
-   Payment gateway simulation
-   Database persistence
-   Authentication system
-   Performance optimizations 

## License

MIT License - Feel free to use this project for learning and personal projects.

## Contributing

This project is ideal for mastering JavaScript, web development, and e-commerce concepts. Feel free to fork and extend!

---

**Happy Shopping! 🛍️**
