// Enhanced Product Data with more details
const products = [
  {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for travel and work.",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "electronics",
      rating: 4.5,
      badge: "Sale",
      featured: true
  },
  {
      id: 2,
      name: "Smart Watch Fitness Tracker",
      description: "Track your fitness, receive notifications, and monitor heart rate with this sleek smartwatch. Water resistant up to 50m.",
      price: 129.99,
      originalPrice: 159.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "electronics",
      rating: 4.2,
      badge: "Popular",
      featured: true
  },
  {
      id: 3,
      name: "Laptop Backpack",
      description: "Water-resistant backpack with laptop compartment and USB charging port. Durable and stylish design.",
      price: 49.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "accessories",
      rating: 4.0,
      badge: null,
      featured: false
  },
  {
      id: 4,
      name: "Portable Power Bank",
      description: "10000mAh power bank with fast charging for smartphones and tablets. Compact and lightweight design.",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://i5.walmartimages.com/seo/Anker-PowerCore-26800-Portable-Charger-26800mAh-External-Battery-with-Dual-Input-Port-and-3-USB-Output-Port_e5a6212a-1121-4cad-90e6-1dbf632e7cea_1.2e56efae8dbc7600f04a2f2df0a667d8.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      category: "electronics",
      rating: 4.3,
      badge: "Sale",
      featured: false
  },
  {
      id: 5,
      name: "Gaming Mouse",
      description: "RGB gaming mouse with programmable buttons and high precision sensor. Ergonomic design for long gaming sessions.",
      price: 39.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "gaming",
      rating: 4.7,
      badge: "Bestseller",
      featured: true
  },
  {
      id: 6,
      name: "USB-C Hub Adapter",
      description: "7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader and Ethernet ports. Compatible with most laptops.",
      price: 34.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "computers",
      rating: 4.1,
      badge: null,
      featured: false
  },
  {
      id: 7,
      name: "Mechanical Keyboard",
      description: "RGB mechanical keyboard with customizable keys and responsive switches. Perfect for typing and gaming.",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "gaming",
      rating: 4.6,
      badge: "Sale",
      featured: true
  },
  {
      id: 8,
      name: "Wireless Earbuds",
      description: "True wireless earbuds with charging case and 24-hour battery life. Crystal clear sound quality.",
      price: 59.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1667178173387-7e0cb51c0b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww",
      category: "electronics",
      rating: 4.4,
      badge: "New",
      featured: true
  },
  {
      id: 9,
      name: "External SSD 1TB",
      description: "High-speed external SSD with 1TB storage capacity. Perfect for backups and large file transfers.",
      price: 129.99,
      originalPrice: null,
      image: "https://m.media-amazon.com/images/I/51IhHxqzdnL._AC_UF894,1000_QL80_.jpg",
      category: "computers",
      rating: 4.8,
      badge: "Bestseller",
      featured: false
  },
  {
      id: 10,
      name: "4K Webcam",
      description: "Ultra HD webcam with built-in microphone and autofocus. Perfect for video calls and streaming.",
      price: 89.99,
      originalPrice: 109.99,
      image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "computers",
      rating: 4.3,
      badge: "Sale",
      featured: false
  }
];
// Shopping Cart Data
let cart = [];
let wishlist = [];
let currentUser = null;
let currentPage = 1;
const productsPerPage = 6;
let currentCategory = 'all';
let currentSort = 'default';
let currentSearch = '';

// DOM Elements
const productsContainer = document.getElementById('productsContainer');
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const emptyCartMessage = document.getElementById('emptyCartMessage');
const cartTotal = document.getElementById('cartTotal');
const totalAmount = document.getElementById('totalAmount');
const checkoutBtn = document.getElementById('checkoutBtn');
const continueShopping = document.getElementById('continueShopping');
const cartActions = document.getElementById('cartActions');
const userIcon = document.getElementById('userIcon');
const userModal = document.getElementById('userModal');
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const notification = document.getElementById('notification');
const homeBtn = document.getElementById('homeBtn');
const shopNowBtn = document.getElementById('shopNowBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryBtns = document.querySelectorAll('.category-btn');
const sortSelect = document.getElementById('sortSelect');
const pagination = document.getElementById('pagination');
const loadingSpinner = document.getElementById('loadingSpinner');

// Initialize the page
function init() {
  renderProducts();
  updateCartCount();
  updateWishlistCount();
  setupEventListeners();
  
  // Load data from localStorage
  loadFromStorage();
  
  // Update UI based on user login status
  updateUserUI();
}

// Load data from localStorage
function loadFromStorage() {
  const savedCart = localStorage.getItem('shoppingCart');
  const savedWishlist = localStorage.getItem('wishlist');
  const savedUser = localStorage.getItem('currentUser');
  
  if (savedCart) cart = JSON.parse(savedCart);
  if (savedWishlist) wishlist = JSON.parse(savedWishlist);
  if (savedUser) currentUser = JSON.parse(savedUser);
}

// Save data to localStorage
function saveToStorage() {
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

// Render products with pagination
function renderProducts() {
  // Show loading spinner
  loadingSpinner.style.display = 'block';
  productsContainer.innerHTML = '';
  
  // Simulate API delay
  setTimeout(() => {
      // Filter products based on category and search
      let filteredProducts = products.filter(product => {
          const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
          const matchesSearch = currentSearch === '' || 
              product.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
              product.description.toLowerCase().includes(currentSearch.toLowerCase());
          return matchesCategory && matchesSearch;
      });
      
      // Sort products
      filteredProducts = sortProducts(filteredProducts, currentSort);
      
      // Calculate pagination
      const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const productsToShow = filteredProducts.slice(startIndex, endIndex);
      
      // Render products
      productsContainer.innerHTML = '';
      
      if (productsToShow.length === 0) {
          productsContainer.innerHTML = `
              <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                  <i class="fas fa-search" style="font-size: 3rem; color: #bdc3c7; margin-bottom: 1rem;"></i>
                  <h3>No products found</h3>
                  <p>Try adjusting your search or filter criteria</p>
              </div>
          `;
      } else {
          productsToShow.forEach(product => {
              const isInWishlist = wishlist.some(item => item.id === product.id);
              const productCard = document.createElement('div');
              productCard.className = 'product-card';
              productCard.innerHTML = `
                  ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                  <img src="${product.image}" alt="${product.name}" class="product-image">
                  <div class="product-info">
                      <h3 class="product-title">${product.name}</h3>
                      <p class="product-description">${product.description}</p>
                      
                      <div class="product-rating">
                          ${getStarRating(product.rating)}
                          <span style="color: #7f8c8d; margin-left: 5px;">(${product.rating})</span>
                      </div>
                      
                      <div class="product-price-container">
                          <div class="product-price">$${product.price.toFixed(2)}</div>
                          ${product.originalPrice ? 
                              `<div class="product-original-price">$${product.originalPrice.toFixed(2)}</div>` : 
                              ''}
                      </div>
                      
                      <div class="product-actions">
                          <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                          <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" 
                                  data-id="${product.id}" 
                                  title="${isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}">
                              <i class="fas fa-heart"></i>
                          </button>
                      </div>
                  </div>
              `;
              
              productsContainer.appendChild(productCard);
          });
      }
      
      // Render pagination
      renderPagination(totalPages);
      
      // Hide loading spinner
      loadingSpinner.style.display = 'none';
  }, 300);
}

// Generate star rating HTML
function getStarRating(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
          stars += '<i class="fas fa-star"></i>';
      } else if (i === fullStars && hasHalfStar) {
          stars += '<i class="fas fa-star-half-alt"></i>';
      } else {
          stars += '<i class="far fa-star"></i>';
      }
  }
  
  return stars;
}

// Render pagination buttons
function renderPagination(totalPages) {
  if (totalPages <= 1) {
      pagination.innerHTML = '';
      return;
  }
  
  let paginationHTML = '';
  
  // Previous button
  if (currentPage > 1) {
      paginationHTML += `<button class="page-btn" data-page="${currentPage - 1}">Previous</button>`;
  }
  
  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
      if (i === currentPage) {
          paginationHTML += `<button class="page-btn active" data-page="${i}">${i}</button>`;
      } else if (
          i === 1 || 
          i === totalPages || 
          (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
          paginationHTML += `<button class="page-btn" data-page="${i}">${i}</button>`;
      } else if (i === currentPage - 2 || i === currentPage + 2) {
          paginationHTML += `<span class="page-btn" style="border: none; background: none;">...</span>`;
      }
  }
  
  // Next button
  if (currentPage < totalPages) {
      paginationHTML += `<button class="page-btn" data-page="${currentPage + 1}">Next</button>`;
  }
  
  pagination.innerHTML = paginationHTML;
}

// Sort products based on criteria
function sortProducts(productsToSort, sortBy) {
  const sortedProducts = [...productsToSort];
  
  switch (sortBy) {
      case 'price-low':
          return sortedProducts.sort((a, b) => a.price - b.price);
      case 'price-high':
          return sortedProducts.sort((a, b) => b.price - a.price);
      case 'name':
          return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      case 'rating':
          return sortedProducts.sort((a, b) => b.rating - a.rating);
      default:
          return sortedProducts;
  }
}

// Set up event listeners
function setupEventListeners() {
  // Add to cart buttons
  document.addEventListener('click', function(e) {
      if (e.target.classList.contains('add-to-cart')) {
          const productId = parseInt(e.target.getAttribute('data-id'));
          addToCart(productId);
      }
      
      // Wishlist buttons
      if (e.target.closest('.wishlist-btn')) {
          const wishlistBtn = e.target.closest('.wishlist-btn');
          const productId = parseInt(wishlistBtn.getAttribute('data-id'));
          toggleWishlist(productId);
      }
      
      // Cart item buttons
      if (e.target.classList.contains('increase-quantity')) {
          const productId = parseInt(e.target.getAttribute('data-id'));
          changeQuantity(productId, 1);
      }
      
      if (e.target.classList.contains('decrease-quantity')) {
          const productId = parseInt(e.target.getAttribute('data-id'));
          changeQuantity(productId, -1);
      }
      
      if (e.target.classList.contains('remove-item')) {
          const productId = parseInt(e.target.getAttribute('data-id'));
          removeFromCart(productId);
      }
      
      // Pagination buttons
      if (e.target.classList.contains('page-btn') && e.target.getAttribute('data-page')) {
          const page = parseInt(e.target.getAttribute('data-page'));
          if (!isNaN(page)) {
              currentPage = page;
              renderProducts();
          }
      }
      
      // Category buttons
      if (e.target.classList.contains('category-btn')) {
          const category = e.target.getAttribute('data-category');
          filterByCategory(category);
      }
  });
  
  // Cart icon click
  cartIcon.addEventListener('click', openCart);
  
  // Close cart button
  closeCart.addEventListener('click', closeCartModal);
  
  // Continue shopping button
  continueShopping.addEventListener('click', closeCartModal);
  
  // Close cart when clicking outside
  cartModal.addEventListener('click', function(e) {
      if (e.target === cartModal) {
          closeCartModal();
      }
  });
  
  // User icon click
  userIcon.addEventListener('click', openUserModal);
  
  // Close user modal when clicking outside
  userModal.addEventListener('click', function(e) {
      if (e.target === userModal) {
          closeUserModal();
      }
  });
  
  // User tabs
  loginTab.addEventListener('click', () => switchUserTab('login'));
  registerTab.addEventListener('click', () => switchUserTab('register'));
  
  // User forms
  loginForm.addEventListener('submit', handleLogin);
  registerForm.addEventListener('submit', handleRegister);
  
  // Checkout button
  checkoutBtn.addEventListener('click', checkout);
  
  // Home button
  homeBtn.addEventListener('click', goHome);
  
  // Shop now button
  shopNowBtn.addEventListener('click', () => {
      filterByCategory('all');
      closeCartModal();
      closeUserModal();
  });
  
  // Search functionality
  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          performSearch();
      }
  });
  
  // Sort functionality
  sortSelect.addEventListener('change', function() {
      currentSort = this.value;
      currentPage = 1;
      renderProducts();
  });
  
  // Footer links
  document.querySelectorAll('a[id$="Link"]').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const linkId = this.id;
          
          if (linkId === 'homeLink' || linkId === 'allProductsLink') {
              goHome();
          } else if (linkId === 'newArrivalsLink') {
              // Show only products with "New" badge
              currentSearch = '';
              currentCategory = 'all';
              currentSort = 'default';
              currentPage = 1;
              
              // In a real app, you would filter by date added
              showNotification('Showing new arrivals');
          } else if (linkId === 'bestSellersLink') {
              // Show only products with "Bestseller" badge
              currentSearch = '';
              currentCategory = 'all';
              currentSort = 'rating';
              currentPage = 1;
              renderProducts();
              showNotification('Showing best sellers');
          } else {
              showNotification(`${this.textContent} page would open in a real application`);
          }
          
          closeCartModal();
          closeUserModal();
      });
  });
}

// Add product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  
  // Check if product already in cart
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
      existingItem.quantity += 1;
  } else {
      cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image
      });
  }
  
  updateCartCount();
  updateCartDisplay();
  saveToStorage();
  showNotification(`${product.name} added to cart!`);
}

// Toggle product in wishlist
function toggleWishlist(productId) {
  const product = products.find(p => p.id === productId);
  const existingIndex = wishlist.findIndex(item => item.id === productId);
  
  if (existingIndex >= 0) {
      wishlist.splice(existingIndex, 1);
      showNotification(`${product.name} removed from wishlist`);
  } else {
      wishlist.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image
      });
      showNotification(`${product.name} added to wishlist`);
  }
  
  updateWishlistCount();
  saveToStorage();
  renderProducts(); // Re-render to update wishlist button state
}

// Update wishlist count in UI
function updateWishlistCount() {
  // In a real app, you would update a wishlist counter in the header
  // For now, we'll just save it to localStorage
}

// Change quantity of a cart item
function changeQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  
  if (item) {
      item.quantity += change;
      
      // Remove item if quantity is 0 or less
      if (item.quantity <= 0) {
          cart = cart.filter(item => item.id !== productId);
          showNotification('Item removed from cart');
      }
      
      updateCartCount();
      updateCartDisplay();
      saveToStorage();
  }
}

// Remove item from cart
function removeFromCart(productId) {
  const item = cart.find(item => item.id === productId);
  cart = cart.filter(item => item.id !== productId);
  updateCartCount();
  updateCartDisplay();
  saveToStorage();
  
  if (item) {
      showNotification(`${item.name} removed from cart`);
  }
}

// Update cart count in header
function updateCartCount() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
}

// Update cart display in modal
function updateCartDisplay() {
  cartItems.innerHTML = '';
  
  if (cart.length === 0) {
      emptyCartMessage.style.display = 'block';
      cartTotal.style.display = 'none';
      cartActions.style.display = 'none';
      return;
  }
  
  emptyCartMessage.style.display = 'none';
  cartTotal.style.display = 'flex';
  cartActions.style.display = 'flex';
  
  let total = 0;
  
  cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
          <div class="cart-item-left">
              <img src="${item.image}" alt="${item.name}" class="cart-item-image">
              <div class="cart-item-info">
                  <h4>${item.name}</h4>
                  <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
              </div>
          </div>
          <div class="cart-item-quantity">
              <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
              <span>${item.quantity}</span>
              <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
              <button class="remove-item" data-id="${item.id}">Remove</button>
          </div>
          <div class="cart-item-total">$${itemTotal.toFixed(2)}</div>
      `;
      
      cartItems.appendChild(cartItem);
  });
  
  totalAmount.textContent = `$${total.toFixed(2)}`;
}

// Open cart modal
function openCart() {
  cartModal.style.display = 'flex';
  updateCartDisplay();
  closeUserModal();
}

// Close cart modal
function closeCartModal() {
  cartModal.style.display = 'none';
}

// Open user modal
function openUserModal() {
  userModal.style.display = 'flex';
  closeCartModal();
}

// Close user modal
function closeUserModal() {
  userModal.style.display = 'none';
}

// Switch between login and register tabs
function switchUserTab(tab) {
  if (tab === 'login') {
      loginTab.classList.add('active');
      registerTab.classList.remove('active');
      loginForm.style.display = 'flex';
      registerForm.style.display = 'none';
  } else {
      registerTab.classList.add('active');
      loginTab.classList.remove('active');
      registerForm.style.display = 'flex';
      loginForm.style.display = 'none';
  }
}

// Handle login form submission
function handleLogin(e) {
  e.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  // Simple validation
  if (!email || !password) {
      showNotification('Please fill in all fields', 'error');
      return;
  }
  
  // Simple mock authentication
  if (email === 'demo@shopeasy.com' && password === 'password') {
      currentUser = {
          name: 'Demo User',
          email: email
      };
      
      saveToStorage();
      updateUserUI();
      closeUserModal();
      showNotification(`Welcome back, ${currentUser.name}!`);
  } else {
      showNotification('Invalid email or password', 'error');
  }
}

// Handle register form submission
function handleRegister(e) {
  e.preventDefault();
  
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('registerConfirmPassword').value;
  
  // Simple validation
  if (!name || !email || !password || !confirmPassword) {
      showNotification('Please fill in all fields', 'error');
      return;
  }
  
  if (password !== confirmPassword) {
      showNotification('Passwords do not match', 'error');
      return;
  }
  
  // Simple mock registration
  currentUser = {
      name: name,
      email: email
  };
  
  saveToStorage();
  updateUserUI();
  closeUserModal();
  showNotification(`Account created successfully! Welcome, ${currentUser.name}`);
}

// Update UI based on user login status
function updateUserUI() {
  if (currentUser) {
      userIcon.innerHTML = `<i class="fas fa-user-circle"></i>`;
      userIcon.title = `Logged in as ${currentUser.name}`;
  } else {
      userIcon.innerHTML = `<i class="fas fa-user-circle"></i>`;
      userIcon.title = 'Login/Register';
  }
}

// Checkout process
function checkout() {
  if (cart.length === 0) {
      showNotification('Your cart is empty!', 'error');
      return;
  }
  
  if (!currentUser) {
      showNotification('Please login to checkout', 'error');
      openUserModal();
      return;
  }
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // In a real app, this would redirect to a checkout page or open a payment modal
  alert(`Checkout Process\n\nCustomer: ${currentUser.name}\nEmail: ${currentUser.email}\nTotal: $${total.toFixed(2)}\n\nThis is a demo, so no actual payment will be processed.`);
  
  // Clear cart after checkout
  cart = [];
  updateCartCount();
  updateCartDisplay();
  saveToStorage();
  closeCartModal();
  
  showNotification('Order placed successfully! Thank you for your purchase.');
}

// Go to home page
function goHome() {
  currentSearch = '';
  currentCategory = 'all';
  currentSort = 'default';
  currentPage = 1;
  
  // Reset category buttons
  document.querySelectorAll('.category-btn').forEach(btn => {
      if (btn.getAttribute('data-category') === 'all') {
          btn.classList.add('active');
      } else {
          btn.classList.remove('active');
      }
  });
  
  // Reset search input
  searchInput.value = '';
  
  // Reset sort select
  sortSelect.value = 'default';
  
  renderProducts();
  closeCartModal();
  closeUserModal();
}

// Filter by category
function filterByCategory(category) {
  currentCategory = category;
  currentPage = 1;
  
  // Update active category button
  document.querySelectorAll('.category-btn').forEach(btn => {
      if (btn.getAttribute('data-category') === category) {
          btn.classList.add('active');
      } else {
          btn.classList.remove('active');
      }
  });
  
  renderProducts();
}

// Perform search
function performSearch() {
  currentSearch = searchInput.value.trim();
  currentPage = 1;
  renderProducts();
  
  if (currentSearch) {
      showNotification(`Search results for: ${currentSearch}`);
  }
}

// Show notification
function showNotification(message, type = 'success') {
  notification.textContent = message;
  notification.className = `notification ${type}`;
  notification.style.display = 'block';
  
  setTimeout(() => {
      notification.style.display = 'none';
  }, 3000);
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', init);

// Add a Dynamic Copyright Year
document.getElementById("year").innerHTML = new Date().getFullYear();