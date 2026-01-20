// Pallet Manufacturer Website Data
const siteData = {
  // Site Information
  site: {
    title: "Pallet Manufacturer - Quality Wooden Pallets",
    brandName: "Pallet Pro",
    tagline: "Quality Manufacturing",
    description: "Leading manufacturer of high-quality wooden pallets for industrial and commercial use."
  },

  // Navigation
  navigation: {
    items: [
      { name: "Home", href: "index.html" },
      { name: "Products", href: "menu.html" },
      { name: "Services", href: "services.html" },
      { name: "Blog", href: "blog.html" },
      { name: "About", href: "about.html" },
      { name: "Contact", href: "contact.html" }
    ]
  },

  // Hero Slider
  heroSlides: [
    {
      subheading: "Premium Quality",
      heading: "Industrial Pallets",
      description: "We manufacture durable, high-quality wooden pallets designed to meet your specific industrial needs and requirements.",
      primaryButton: { text: "Get Quote", href: "#" },
      secondaryButton: { text: "View Products", href: "menu.html" },
      image: "images/bg_1.png"
    },
    {
      subheading: "Custom Solutions",
      heading: "Wooden Pallets",
      description: "Custom-designed pallets built to your exact specifications, ensuring optimal performance for your logistics operations.",
      primaryButton: { text: "Get Quote", href: "#" },
      secondaryButton: { text: "View Products", href: "menu.html" },
      image: "images/bg_2.png"
    },
    {
      subheading: "Welcome",
      heading: "Your Trusted Pallet Manufacturer",
      description: "We craft your desired pallet solutions with precision and quality, meeting the highest industry standards.",
      primaryButton: { text: "Get Quote", href: "#" },
      secondaryButton: { text: "View Products", href: "menu.html" },
      image: "images/bg_3.jpg"
    }
  ],

  // Contact Information
  contact: {
    phone: {
      number: "+1 (555) 123-4567",
      description: "Call us for inquiries"
    },
    address: {
      street: "123 Industrial Park Drive",
      city: "Manufacturing District, NY 10001"
    },
    hours: {
      title: "Open Monday-Friday",
      time: "7:00am - 6:00pm"
    },
    email: "info@palletpro.com",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },

  // About Section
  about: {
    heading: "Welcome to <span>Pallet Pro</span> Manufacturing",
    description: "With over two decades of experience in the pallet manufacturing industry, we have established ourselves as a trusted partner for businesses across various sectors. Our state-of-the-art facility combines traditional craftsmanship with modern manufacturing techniques to produce pallets that exceed industry standards. We take pride in our commitment to quality, sustainability, and customer satisfaction, ensuring that every pallet we produce meets the highest standards of durability and reliability."
  },

  // Services
  services: {
    heading: "Our Services",
    description: "Comprehensive pallet manufacturing solutions tailored to your business needs.",
    items: [
      {
        icon: "flaticon-diet",
        title: "Custom Manufacturing",
        description: "We design and manufacture pallets according to your specific dimensions, load capacity, and industry requirements."
      },
      {
        icon: "flaticon-bicycle",
        title: "Fast Delivery",
        description: "Efficient production and logistics ensure timely delivery of your pallet orders, keeping your operations running smoothly."
      },
      {
        icon: "flaticon-pizza-1",
        title: "Quality Materials",
        description: "We use only premium-grade wood and materials, ensuring durability and compliance with international standards."
      }
    ]
  },

  // Products - Hot Pallets
  hotProducts: {
    heading: "Popular Pallet Types",
    description: "Browse our range of standard and custom pallet solutions designed for various industries.",
    items: [
      {
        name: "Standard GMA Pallet",
        description: "Industry-standard 48x40 inch pallet perfect for general warehousing and distribution.",
        price: "$12.50",
        image: "images/pizza-1.jpg"
      },
      {
        name: "Euro Pallet",
        description: "1200x800mm European standard pallet, ideal for international shipping and logistics.",
        price: "$15.00",
        image: "images/pizza-2.jpg"
      },
      {
        name: "Heavy Duty Pallet",
        description: "Reinforced pallet designed for heavy loads and demanding industrial applications.",
        price: "$18.50",
        image: "images/pizza-3.jpg"
      },
      {
        name: "Custom Size Pallet",
        description: "Tailored to your exact specifications, ensuring perfect fit for your products.",
        price: "Custom",
        image: "images/pizza-4.jpg"
      },
      {
        name: "Export Pallet",
        description: "ISPM 15 certified pallets for international shipping compliance.",
        price: "$16.00",
        image: "images/pizza-5.jpg"
      },
      {
        name: "Recycled Pallet",
        description: "Eco-friendly option made from recycled materials, maintaining quality standards.",
        price: "$10.00",
        image: "images/pizza-6.jpg"
      }
    ]
  },

  // Menu Pricing
  menuPricing: {
    heading: "Our Product Pricing",
    description: "Competitive pricing for all pallet types. Contact us for bulk order discounts and custom quotes.",
    items: [
      { name: "Standard GMA Pallet", price: "$12.50", image: "images/pizza-1.jpg", description: "Perfect for general warehousing and distribution needs" },
      { name: "Euro Pallet", price: "$15.00", image: "images/pizza-2.jpg", description: "European standard for international shipping" },
      { name: "Heavy Duty Pallet", price: "$18.50", image: "images/pizza-3.jpg", description: "Reinforced for heavy industrial loads" },
      { name: "Custom Size Pallet", price: "Quote", image: "images/pizza-4.jpg", description: "Tailored to your exact specifications" },
      { name: "Export Pallet (ISPM 15)", price: "$16.00", image: "images/pizza-5.jpg", description: "Certified for international shipping" },
      { name: "Recycled Pallet", price: "$10.00", image: "images/pizza-6.jpg", description: "Eco-friendly recycled material option" },
      { name: "Double-Face Pallet", price: "$14.00", image: "images/pizza-7.jpg", description: "Top and bottom deck boards for stability" },
      { name: "Stringer Pallet", price: "$13.50", image: "images/pizza-8.jpg", description: "Classic design with three stringer boards" }
    ]
  },

  // Menu Categories
  menuCategories: [
    {
      id: "v-pills-1",
      name: "Standard Pallets",
      items: [
        { name: "GMA Pallet", description: "48x40 inch standard pallet for general use", price: "$12.50", image: "images/pizza-1.jpg" },
        { name: "Euro Pallet", description: "1200x800mm European standard pallet", price: "$15.00", image: "images/pizza-2.jpg" },
        { name: "Heavy Duty Pallet", description: "Reinforced pallet for heavy loads", price: "$18.50", image: "images/pizza-3.jpg" }
      ]
    },
    {
      id: "v-pills-2",
      name: "Custom Pallets",
      items: [
        { name: "Custom Size Pallet", description: "Made to your exact specifications", price: "Quote", image: "images/drink-1.jpg" },
        { name: "Specialty Pallet", description: "Designed for unique product requirements", price: "Quote", image: "images/drink-2.jpg" },
        { name: "Automated Pallet", description: "Optimized for automated handling systems", price: "Quote", image: "images/drink-3.jpg" }
      ]
    },
    {
      id: "v-pills-3",
      name: "Export Pallets",
      items: [
        { name: "ISPM 15 Certified", description: "Heat-treated pallets for international shipping", price: "$16.00", image: "images/burger-1.jpg" },
        { name: "Fumigated Pallet", description: "Chemical treatment option for export", price: "$17.00", image: "images/burger-2.jpg" },
        { name: "Export Grade", description: "Premium quality for overseas shipping", price: "$18.00", image: "images/burger-3.jpg" }
      ]
    },
    {
      id: "v-pills-4",
      name: "Eco-Friendly",
      items: [
        { name: "Recycled Pallet", description: "Made from recycled wood materials", price: "$10.00", image: "images/pasta-1.jpg" },
        { name: "Sustainable Pallet", description: "FSC certified sustainable wood", price: "$14.00", image: "images/pasta-2.jpg" },
        { name: "Reusable Pallet", description: "Designed for multiple-use applications", price: "$13.00", image: "images/pasta-3.jpg" }
      ]
    }
  ],

  // Statistics
  statistics: {
    items: [
      { icon: "flaticon-pizza-1", number: 50000, label: "Pallets Produced" },
      { icon: "flaticon-medal", number: 25, label: "Years of Experience" },
      { icon: "flaticon-laugh", number: 5000, label: "Satisfied Clients" },
      { icon: "flaticon-chef", number: 150, label: "Expert Staff" }
    ]
  },

  // Blog Posts
  blog: {
    heading: "Recent from blog",
    description: "Stay updated with the latest news, tips, and insights from the pallet manufacturing industry.",
    posts: [
      {
        title: "Choosing the Right Pallet for Your Business",
        date: "Dec 15, 2024",
        author: "Admin",
        comments: 5,
        description: "Learn how to select the perfect pallet type based on your industry, load requirements, and shipping needs.",
        image: "images/image_1.jpg"
      },
      {
        title: "ISPM 15 Compliance: What You Need to Know",
        date: "Dec 10, 2024",
        author: "Admin",
        comments: 8,
        description: "Understanding international shipping regulations and how heat-treated pallets ensure compliance.",
        image: "images/image_2.jpg"
      },
      {
        title: "Sustainable Pallet Manufacturing Practices",
        date: "Dec 5, 2024",
        author: "Admin",
        comments: 12,
        description: "Exploring eco-friendly approaches to pallet production and the benefits of recycled materials.",
        image: "images/image_3.jpg"
      }
    ]
  },

  // Footer
  footer: {
    about: {
      heading: "About Us",
      description: "Leading pallet manufacturer with over 25 years of experience, committed to quality, sustainability, and customer satisfaction."
    },
    recentBlog: [
      {
        title: "Choosing the Right Pallet for Your Business",
        date: "Dec 15, 2024",
        author: "Admin",
        comments: 5,
        image: "images/image_1.jpg"
      },
      {
        title: "ISPM 15 Compliance: What You Need to Know",
        date: "Dec 10, 2024",
        author: "Admin",
        comments: 8,
        image: "images/image_2.jpg"
      }
    ],
    services: {
      heading: "Services",
      items: [
        { name: "Custom Manufacturing", href: "#" },
        { name: "Bulk Orders", href: "#" },
        { name: "Quality Assurance", href: "#" },
        { name: "Delivery Service", href: "#" }
      ]
    },
    contact: {
      heading: "Have a Questions?",
      address: "123 Industrial Park Drive, Manufacturing District, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "info@palletpro.com"
    }
  }
};

// Export data for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}