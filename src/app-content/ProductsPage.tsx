import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Search, Check, BarChart, Zap, Shield, Settings } from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Preload images to ensure they're available when needed
const preloadImages = () => {
  const imagePaths = [
    "/assets/images/products/bench-type.jpg",
    "/assets/images/products/coil-type.jpg",
    "/assets/images/products/portable.jpg"
  ];
  
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
  });
};

const products = [
  {
    id: 1,
    name: "Bench-Type MPI Machine",
    description:
      "High-performance bench-mounted magnetic particle inspection system for detecting surface and near-surface defects.",
    image: "/assets/images/products/bench-type.jpg",
    category: "bench-type",
    features: ["Dual magnetization", "Digital control panel", "Adjustable current settings"],
    specs: {
      powerSupply: "220V AC, 50/60Hz",
      magnetizingCurrent: "Up to 3000A",
      capacity: "Parts up to 100kg",
      dimensions: "180 x 70 x 110 cm"
    },
    price: "₹12,500"
  },
  {
    id: 2,
    name: "Coil-Type MPI System",
    description:
      "Advanced coil-type magnetic particle inspection system for circular magnetization of cylindrical components.",
    image: "/assets/images/products/coil-type.jpg",
    category: "coil-type",
    features: ["360° inspection", "High current capacity", "Automated rotation"],
    specs: {
      powerSupply: "380V AC, 50/60Hz, 3-phase",
      coilDiameter: "20-45 cm (adjustable)",
      maxPartLength: "up to 2m",
      dimensions: "250 x 100 x 150 cm"
    },
    price: "₹18,900"
  },
  {
    id: 3,
    name: "Portable MPI Kit",
    description:
      "Compact and versatile portable magnetic particle inspection kit for field inspections and remote testing.",
    image: "/assets/images/products/portable.jpg",
    category: "portable",
    features: ["Lightweight design", "Battery-powered", "Rugged carrying case"],
    specs: {
      powerSupply: "110-240V AC or 24V DC battery",
      magnetizingForce: "4.5 kg at 2\" leg spacing",
      batteryLife: "8+ hours continuous use",
      dimensions: "45 x 35 x 15 cm (case)"
    },
    price: "₹4,750"
  },
  {
    id: 4,
    name: "MT-1500 Advanced Bench MPI",
    description: "Advanced bench-type MPI system with integrated UV lighting and digital reporting capabilities.",
    image: "/assets/images/products/bench-type.jpg",
    category: "bench-type",
    features: ["Integrated UV-A LED", "Digital reporting", "Touch-screen interface"],
  },
  {
    id: 5,
    name: "MT-2500 Heavy-Duty Coil MPI",
    description:
      "Heavy-duty coil-type MPI system designed for large components and high-volume inspection environments.",
    image: "/assets/images/products/coil-type.jpg",
    category: "coil-type",
    features: ["Extra-large coil diameter", "Industrial-grade construction", "High throughput"],
  },
  {
    id: 6,
    name: "MT-3500 Field Inspection Kit",
    description: "Comprehensive field inspection kit with multiple magnetization options and inspection accessories.",
    image: "/assets/images/products/portable.jpg",
    category: "portable",
    features: ["Multi-directional magnetization", "Complete accessory set", "Quick-connect cables"],
  },
];

const productTypeDetails = [
  {
    id: "bench-type",
    name: "Bench-Type MPI Machines",
    image: "/assets/images/products/bench-type.jpg",
    description: "Our bench-type MPI systems are designed for high-precision inspection of components in a controlled environment. These systems feature adjustable magnetization levels, digital controls, and ergonomic design for operator comfort.",
    applications: ["Automotive components", "Aerospace parts", "Critical machinery parts", "Power generation components"],
    features: [
      "Horizontal wet bench design with head and tailstock",
      "Multi-directional magnetization capabilities",
      "Integrated UV-A LED inspection lighting",
      "Digital control panels with programmable settings",
      "Automated demagnetization cycles",
      "Integrated particle circulation systems"
    ],
    demo: "The bench-type MPI process starts with the component being secured between the headstock and tailstock. The operator then selects the appropriate magnetization method based on the component's geometry and the type of defects being sought. When current is applied, magnetic fields are generated in the part. Fluorescent magnetic particles are then applied, which gather at discontinuities, making defects clearly visible under UV light.",
    examples: [
      { name: "MT-1000 Standard Bench MPI", description: "Our entry-level bench system suitable for general inspection needs" },
      { name: "MT-1500 Advanced Bench MPI", description: "Features integrated UV lighting and digital reporting" },
      { name: "MT-1800 Heavy-Duty Bench MPI", description: "Designed for larger components up to 1000 lbs" }
    ],
    diagram: "Part secured between headstock and tailstock → Magnetizing current applied → Fluorescent particles applied → UV inspection → Demagnetization"
  },
  {
    id: "coil-type",
    name: "Coil-Type MPI Systems",
    image: "/assets/images/products/coil-type.jpg",
    description: "Our coil-type MPI systems are specialized for circular magnetization of cylindrical or tubular components. These systems allow for efficient inspection of pipes, tubes, shafts, and similar cylindrical parts.",
    applications: ["Pipeline sections", "Drive shafts", "Axles", "Tubular components", "Cylindrical housings"],
    features: [
      "Variable diameter coil systems",
      "Adjustable field strength controls",
      "Quick-change coil design for different part sizes",
      "Integrated part rotation mechanisms",
      "Digital timing controls for consistent application",
      "Optional automated handling systems"
    ],
    demo: "In coil-type MPI inspection, the cylindrical component is placed within or passed through an electromagnetic coil. When energized, a circular magnetic field is induced around the circumference of the part. This field orientation is ideal for detecting longitudinal defects (those running parallel to the part's axis). The part is typically rotated during inspection to ensure complete coverage.",
    examples: [
      { name: "MT-2000 Standard Coil MPI", description: "Our base model with 12-18 inch coil capacity" },
      { name: "MT-2500 Heavy-Duty Coil MPI", description: "Designed for industrial environments with high throughput" },
      { name: "MT-2200 Variable Coil System", description: "Features quick-change coils for multiple component sizes" }
    ],
    diagram: "Component placed through electromagnetic coil → Circular magnetic field generated → Part rotated while particles applied → Defects visible under UV light → Component extracted"
  },
  {
    id: "portable",
    name: "Portable MPI Kits",
    image: "/assets/images/products/portable.jpg",
    description: "Our portable MPI kits provide the flexibility needed for field inspections and on-site testing where components cannot be brought to a stationary inspection station.",
    applications: ["On-site weld inspection", "Remote location testing", "Large structure inspection", "Field maintenance verification", "In-situ equipment testing"],
    features: [
      "Lightweight, ergonomic yoke design",
      "Battery and AC operation options",
      "Quick-change articulating legs for complex geometries",
      "Integrated white and UV light options",
      "Rugged carrying cases with complete accessory sets",
      "High-sensitivity detection capabilities"
    ],
    demo: "Portable MPI inspection typically employs electromagnetic yokes that create a magnetic field between the legs of the yoke. The inspector places the yoke on the component surface, activates the magnetic field, and applies magnetic particles to the inspection area. The yoke is then repositioned in multiple orientations to ensure defects in all directions are detected. This method is particularly valuable for large structures, in-place equipment, and field inspections.",
    examples: [
      { name: "MT-3000 Standard Portable Kit", description: "Complete field inspection kit with AC/DC yoke" },
      { name: "MT-3500 Professional Field Kit", description: "Advanced kit with multiple magnetization options" },
      { name: "MT-3200 Compact Inspection Set", description: "Lightweight design for confined space inspections" }
    ],
    diagram: "Yoke positioned on test surface → Magnetic field activated between yoke legs → Particles applied to test area → Multiple orientations tested → Results documented"
  }
];

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/');
  const urlCategory = pathSegments.length > 2 ? pathSegments[2] : "all";
  
  const [category, setCategory] = useState<string>(urlCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeDemo, setActiveDemo] = useState<string>(urlCategory !== "all" ? urlCategory : "bench-type");
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Preload images when component mounts
  useEffect(() => {
    preloadImages();
    setImagesLoaded(true);
  }, []);

  // Update state when URL changes
  useEffect(() => {
    const currentPath = location.pathname;
    const urlCat = currentPath.split('/').length > 2 ? currentPath.split('/')[2] : "all";
    
    if (urlCat !== category) {
      setCategory(urlCat);
      setActiveDemo(urlCat !== "all" ? urlCat : "bench-type");
      // Force scroll to top when changing categories
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const filteredProducts = products.filter((product) => {
    // Match category (either "all" or the specific category)
    const matchesCategory = category === "all" || product.category === category;
    
    // Match search query in name or description
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const activeDemoDetails = productTypeDetails.find(type => type.id === activeDemo);

  // Handle category change
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    
    // Also update the active demo to match when changing the category
    if (newCategory !== "all") {
      setActiveDemo(newCategory);
    }
    
    // Update URL using navigate instead of pushState
    if (newCategory === "all") {
      navigate("/products");
    } else {
      navigate(`/products/${newCategory}`);
    }
  };

  // Helper function to ensure image paths are correct
  const getImagePath = (path: string) => {
    // Ensure the path starts with the correct prefix
    if (!path.startsWith('/')) {
      return `/${path}`;
    }
    return path;
  };

  // Handle image loading errors
  const handleImageError = (imagePath: string) => {
    console.error(`Error loading image: ${imagePath}`);
    setImageErrors(prev => ({ ...prev, [imagePath]: true }));
  };

  // Get fallback image path
  const getFallbackImage = (category: string) => {
    switch(category) {
      case 'bench-type':
        return '/assets/images/products/bench-type.jpg';
      case 'coil-type':
        return '/assets/images/products/coil-type.jpg';
      case 'portable':
        return '/assets/images/products/portable.jpg';
      default:
        return '/assets/images/products/bench-type.jpg';
    }
  };

  return (
    <div className="mt-16">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary to-primary/80" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Our Product Range</h1>
            <p className="text-lg md:text-xl text-white/80">
              Explore our comprehensive range of magnetic particle inspection equipment designed for various
              applications and industries.
            </p>
          </div>
        </div>
      </section>

      {/* Product Type Demo Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-md font-medium text-sm mb-4">
              Product Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Understanding MPI Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our three main categories of magnetic particle inspection equipment and learn how each technology works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {productTypeDetails.map((type) => (
              <button
                key={type.id}
                onClick={() => {
                  setActiveDemo(type.id);
                  handleCategoryChange(type.id);
                }}
                className={`p-4 rounded-lg text-left transition-all ${
                  activeDemo === type.id 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-white hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                <p className={`text-sm ${activeDemo === type.id ? "text-white/80" : "text-gray-600"}`}>
                  {type.description.substring(0, 100)}...
                </p>
              </button>
            ))}
          </div>

          {activeDemoDetails && (
            <motion.div
              key={activeDemoDetails.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative bg-gray-50 p-6 lg:p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-center mb-8">
                      <h4 className="font-semibold text-xl mb-4 text-primary">Visual Example</h4>
                      <div className="relative bg-white rounded-lg border border-gray-200 shadow-sm w-full max-w-md mx-auto overflow-hidden">
                        <div className="aspect-video flex items-center justify-center p-4">
                          <img 
                            src={getImagePath(activeDemoDetails.image)} 
                            alt={activeDemoDetails.name}
                            className="max-h-full max-w-full object-contain"
                            onError={() => {
                              handleImageError(activeDemoDetails.image);
                              // Try to load the fallback image
                              const fallbackPath = getFallbackImage(activeDemoDetails.id);
                              if (fallbackPath !== activeDemoDetails.image) {
                                const imgElement = document.querySelector(`img[src="${activeDemoDetails.image}"]`) as HTMLImageElement;
                                if (imgElement) {
                                  imgElement.src = fallbackPath;
                                }
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full max-w-md mx-auto mb-8">
                      <h4 className="font-semibold text-xl mb-4 text-primary text-center">Inspection Process</h4>
                      <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200 shadow-md p-6">
                        <div className="space-y-6">
                          {activeDemoDetails.diagram.split(" → ").map((step, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                              <div className="h-10 w-10 bg-gradient-to-br from-primary to-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                {idx + 1}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-gray-800 text-lg mb-1">{step}</div>
                                <div className="text-gray-600 text-sm pl-1">
                                  {idx === 0 && activeDemoDetails.id === "bench-type" && 
                                    "The component is firmly secured between the headstock and tailstock to ensure stability during the inspection process. Proper positioning is critical for accurate results."
                                  }
                                  {idx === 1 && activeDemoDetails.id === "bench-type" && 
                                    "A controlled magnetic field is generated through the part using precise current levels, creating the optimal conditions for defect detection."
                                  }
                                  {idx === 2 && activeDemoDetails.id === "bench-type" && 
                                    "Special fluorescent magnetic particles are applied to the component's surface. These particles are attracted to areas where the magnetic field leaks due to defects."
                                  }
                                  {idx === 3 && activeDemoDetails.id === "bench-type" && 
                                    "Using specialized UV lighting, the inspector examines the component. Defects become clearly visible as bright fluorescent indications against the dark background."
                                  }
                                  {idx === 4 && activeDemoDetails.id === "bench-type" && 
                                    "After inspection, the component is properly demagnetized to remove any residual magnetism that could affect its performance or attract unwanted debris."
                                  }
                                  
                                  {idx === 0 && activeDemoDetails.id === "coil-type" && 
                                    "The cylindrical component is carefully positioned through the electromagnetic coil. The component must be centered for uniform field distribution."
                                  }
                                  {idx === 1 && activeDemoDetails.id === "coil-type" && 
                                    "When activated, the coil produces a strong circular magnetic field around the circumference of the part, ideal for detecting longitudinal defects."
                                  }
                                  {idx === 2 && activeDemoDetails.id === "coil-type" && 
                                    "The component is rotated while magnetic particles are applied, ensuring complete coverage and detection of defects from all angles."
                                  }
                                  {idx === 3 && activeDemoDetails.id === "coil-type" && 
                                    "Under UV illumination, any defects become visible as bright fluorescent indications, allowing the inspector to identify even minute discontinuities."
                                  }
                                  {idx === 4 && activeDemoDetails.id === "coil-type" && 
                                    "Once inspection is complete, the component is removed from the coil and prepared for the next manufacturing process or packaging."
                                  }
                                  
                                  {idx === 0 && activeDemoDetails.id === "portable" && 
                                    "The electromagnetic yoke is positioned directly on the test surface. Different orientations are used to detect variously oriented defects."
                                  }
                                  {idx === 1 && activeDemoDetails.id === "portable" && 
                                    "The operator activates the yoke, creating a strong magnetic field between its legs that flows through the inspection area."
                                  }
                                  {idx === 2 && activeDemoDetails.id === "portable" && 
                                    "Magnetic particles are carefully applied to the test area while the field is active, allowing them to gather at any discontinuities."
                                  }
                                  {idx === 3 && activeDemoDetails.id === "portable" && 
                                    "The yoke is repositioned in multiple orientations (typically 90° apart) to ensure detection of defects regardless of their direction."
                                  }
                                  {idx === 4 && activeDemoDetails.id === "portable" && 
                                    "All findings are documented according to inspection procedures, including defect location, orientation, and size for quality control records."
                                  }
                                </div>
                                {idx < activeDemoDetails.diagram.split(" → ").length - 1 && (
                                  <div className="ml-4 mt-3 h-10 border-l-2 border-dashed border-primary/50"></div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                          <div className="text-sm text-gray-600 italic">
                            The complete inspection cycle typically takes 2-5 minutes per component depending on complexity
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{activeDemoDetails.name}</h3>
                    <p className="text-gray-700">{activeDemoDetails.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">How It Works</h4>
                    <p className="text-gray-700">{activeDemoDetails.demo}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Example Models</h4>
                    <div className="space-y-3">
                      {activeDemoDetails.examples.map((example, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all">
                          <div className="flex items-start">
                            <div className="flex-grow">
                              <div className="font-medium text-blue-800">{example.name}</div>
                              <div className="text-sm text-gray-600 mb-2">{example.description}</div>
                              <div className="flex flex-wrap gap-2">
                                {idx === 0 && (
                                  <>
                                    <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
                                      <BarChart className="w-3 h-3 mr-1" />
                                      Standard Model
                                    </div>
                                    <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full flex items-center">
                                      <Check className="w-3 h-3 mr-1" />
                                      Best Seller
                                    </div>
                                  </>
                                )}
                                {idx === 1 && (
                                  <>
                                    <div className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full flex items-center">
                                      <Zap className="w-3 h-3 mr-1" />
                                      Advanced
                                    </div>
                                    <div className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full flex items-center">
                                      <Settings className="w-3 h-3 mr-1" />
                                      Customizable
                                    </div>
                                  </>
                                )}
                                {idx === 2 && (
                                  <>
                                    <div className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full flex items-center">
                                      <Shield className="w-3 h-3 mr-1" />
                                      Premium
                                    </div>
                                    <div className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full flex items-center">
                                      <Zap className="w-3 h-3 mr-1" />
                                      High Performance
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="flex-shrink-0 ml-4 text-right">
                              <div className="text-xs text-gray-500">Starting at</div>
                              <div className="font-bold text-blue-600">
                                {idx === 0 && "₹12,500"}
                                {idx === 1 && "₹16,800"}
                                {idx === 2 && "₹22,500"}
                              </div>
                              <button className="mt-2 text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors">
                                Details
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      onClick={() => handleCategoryChange(activeDemoDetails.id)}
                      className="px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-md transition-colors"
                    >
                      View {activeDemoDetails.name}
                    </button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-xl mb-4 text-primary">Applications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {activeDemoDetails.applications.map((app, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0 mt-2"></span>
                          <span className="text-gray-700">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-xl mb-4 text-primary">Key Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {activeDemoDetails.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-lightBg">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-auto flex items-center gap-4">
              <select 
                value={category} 
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-[180px]"
              >
                <option value="all">All Categories</option>
                <option value="bench-type">Bench-Type</option>
                <option value="coil-type">Coil-Type</option>
                <option value="portable">Portable</option>
              </select>
            </div>
            <div className="w-full md:w-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 w-full md:w-[300px] border border-gray-300 rounded-md p-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Available Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our complete range of magnetic particle inspection equipment, with options to suit every inspection need and budget.
            </p>
          </div>
          
          {filteredProducts.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={fadeIn}>
                  <div className="overflow-hidden h-full border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all">
                    <div className="aspect-[4/3] relative bg-gray-50">
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                        <div className="h-32 w-32 mb-3 flex items-center justify-center">
                          <img 
                            src={getImagePath(product.image)} 
                            alt={product.name}
                            className="max-h-full max-w-full object-contain rounded-md shadow-sm"
                            onError={() => {
                              handleImageError(product.image);
                              // Try to load the fallback image
                              const fallbackPath = getFallbackImage(product.category);
                              if (fallbackPath !== product.image) {
                                const imgElement = document.querySelector(`img[src="${product.image}"]`) as HTMLImageElement;
                                if (imgElement) {
                                  imgElement.src = fallbackPath;
                                }
                              }
                            }}
                          />
                        </div>
                        <div className="text-xl font-bold text-center">{product.name}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3 capitalize">
                        {product.category.replace("-", " ")}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <ul className="space-y-1 mb-4">
                        {product.features.map((feature, index) => (
                          <li key={index} className="text-sm flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      {product.specs && (
                        <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
                          <div className="font-medium mb-1">Specifications:</div>
                          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                            <div className="text-gray-600">Power:</div>
                            <div>{product.specs.powerSupply}</div>
                            {product.specs.magnetizingCurrent && (
                              <>
                                <div className="text-gray-600">Current:</div>
                                <div>{product.specs.magnetizingCurrent}</div>
                              </>
                            )}
                            {product.specs.coilDiameter && (
                              <>
                                <div className="text-gray-600">Coil Size:</div>
                                <div>{product.specs.coilDiameter}</div>
                              </>
                            )}
                            {product.specs.magnetizingForce && (
                              <>
                                <div className="text-gray-600">Force:</div>
                                <div>{product.specs.magnetizingForce}</div>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-blue-600 font-medium">
                          View Details
                          <ArrowRight size={16} className="ml-2" />
                        </div>
                        {product.price && (
                          <div className="text-lg font-bold text-blue-800">{product.price}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setCategory("all");
                  setSearchQuery("");
                  navigate("/products");
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Need help finding the right product?</h2>
            <p className="text-lg text-white/80">
              Our team of experts is ready to assist you in selecting the perfect MPI solution for your specific
              inspection requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-6 py-3 bg-accent hover:bg-accent/90 text-primary text-lg font-medium rounded-md transition-colors"
              >
                Contact Our Team
              </a>
              <a 
                href="/manufacturing" 
                className="px-6 py-3 border border-white/30 hover:bg-white/10 text-white text-lg font-medium rounded-md transition-colors"
              >
                Learn About Our Manufacturing
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage; 