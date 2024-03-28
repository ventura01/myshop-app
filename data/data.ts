import { Product } from "./types";

export const navLinks = [
  { title: "inicio", url: "/" },
  // { title: "servicios", url: "#services" },
  // { title: "soluciones", url: "#solutions" },
  // { title: "testimonios", url: "#testimonials" },
  // { title: "blog", url: "#blog" },
  { title: "contacto", url: "/contact" },
  // { title: "info", url: "#info" },
];

export const footerLinks = [
  {
    title: "acerca",
    links: [
      // { title: "preguntas frecuentes", url: "/faq" },
      // { title: "centro de ayuda", url: "/help" },
      // { title: "blog", url: "/" },
      { title: "términos y condiciones", url: "/conditions" },
      { title: "política de privacidad", url: "/privacy" },
    ],
  },
  {
    title: "empresa",
    links: [
      { title: "eventos", url: "/" },
      // { title: "socios comerciales", url: "/" },
      { title: "historia", url: "/" },
    ],
  },
];
export const servicesContent = {
  heading: {
    headingSubtitle: "Medicamentos",
    headingTitle: "Categorías terapéuticas",
    description:
      "Ofrecemos una amplia variedad de productos farmacéuticos de alta calidad, desde medicamentos recetados hasta productos de venta libre y artículos de cuidado personal. Ya sea que estés buscando alivio para un resfriado común, controlar una condición crónica o simplemente mejorar tu bienestar general.",
  },
  items: [
    {
      icon: "/icon-5.svg",
      title: "Analgésicos",
      description:
        "Son medicamentos que reducen o alivian el dolor de cabeza, muscular, artrítico y otros dolores.",
    },
    {
      icon: "/icon-2.svg",
      title: "Anestésicos",
      description:
        "Estos medicamentos ayudan a bloquear el dolor. Se pueden administrar por inyección, inhalación, loción tópica, aerosol, gotas para los ojos o parche cutáneo.",
    },
    {
      icon: "/icon-3.svg",
      title: "Ansiolíticos",
      description:
        "Se usa para tratar los síntomas de ansiedad, como los sentimientos de temor, terror, incomodidad y tirantez muscular, que se pueden presentar como reacción a la tensión.  ",
    },
    {
      icon: "/icon-8.svg",
      title: "Antibióticos",
      description:
        "Combaten las infecciones bacterianas en personas y animales. Funcionan matando las bacterias o dificultando su crecimiento y multiplicación.",
    },
    {
      icon: "/icon-1.svg",
      title: "Anticonceptivos",
      description:
        "Son píldoras que se toman todos los días y contienen hormonas que modifican la manera en la que funciona el organismo y previenen los embarazos.",
    },
    {
      icon: "/icon-6.svg",
      title: "Anticolinérgicos",
      description:
        "Son fármacos que bloquean la acción de la acetilcolina. La acetilcolina es un neurotransmisor químico que transfiere señales entre ciertas células para afectar al funcionamiento del cuerpo.",
    },
  ],
};
export const blogContent = {
  heading: {
    headingSubtitle: "Our Writeups",
    headingTitle: "Our Latest Articles",
    description:
      "We are dedicated to staying at the forefront of our industry and keeping our valued community informed about the latest trends, insights, and innovations.",
  },
  recentBlog: [
    {
      permaLink: "#_",
      featuredImage: "/blog-img-1.jpg",
      title: "10 Essential Tips for Protecting Your Home from Burglaries",
      id: 16708,
      excerpt:
        "Learn the best practices and simple steps to safeguard your home and loved ones from potential break-ins and theft. Aut quos iste esse nobis perspiciatis et iure id voluptatum. Consequatur et necessitatibus est dolorum perspiciatis odit. Aspernatur dolorum at est non dolor aliquam id nihil. Magni quaerat dolor ex ea. Optio maxime quaerat consequatur quasi. Officia maxime dolor deserunt. Distinctio sint rem mollitia ullam quibusdam dolorem cumque sed enim. Necessitatibus nobis deleniti magni aspernatur hic. Id doloribus itaque. Asperiores incidunt asperiores amet nulla omnis consequuntur ab. Quia omnis molestiae nemo consequatur excepturi praesentium et iste magnam. In repellendus maxime rerum ipsum beatae nam. Aut nostrum facere aliquam at quia dolore. Sapiente sunt rerum qui quisquam accusamus laudantium esse est autem.",
      author: {
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1055.jpg",
        name: "Pete Goyette",
        jobTitle: "Lead Solutions Director",
      },
    },
    {
      permaLink: "#_",
      featuredImage: "/blog-img-2.jpg",
      title: "Libero quia tempore est amet praesentium labore ad qui enim.",
      id: 2803,
      excerpt:
        "Odit laborum nobis non voluptas esse. Quidem sed iure et. Libero facilis ratione dolores laboriosam numquam. Totam veniam delectus maiores delectus voluptatum qui provident cum. Quis et omnis veritatis est aspernatur. Officia dolores tenetur. Aperiam natus rerum. Ducimus est velit qui ex sit fugiat modi quia non. Accusantium est ex laborum. Ullam beatae officiis. Cum tempora facere necessitatibus quibusdam ratione neque. Molestias molestias ullam non amet labore impedit voluptas. Ullam reiciendis quaerat accusamus accusantium. Dolore ut ut quae amet. Ad ipsum animi et magni illum perspiciatis. Ex aut quasi a eveniet iusto beatae distinctio eius vitae. Itaque placeat perferendis. Odit officia cum et numquam. Omnis est blanditiis molestias ut voluptas aut.",
      author: {
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1099.jpg",
        name: "Molly Bednar Jr.",
        jobTitle: "Forward Markets Manager",
      },
    },
    {
      permaLink: "#_",
      featuredImage: "https://picsum.photos/600/280",
      title: "Sunt rerum dicta excepturi dolore.",
      id: 21387,
      excerpt:
        "Fugit suscipit dolorum facilis optio vel. A optio labore qui iure. Et cum et sunt veritatis et quis soluta atque. Facilis explicabo possimus ea aut a perspiciatis. Optio similique debitis. Quibusdam aperiam mollitia magni qui minus. Deserunt nobis sed voluptate sed nobis. Voluptatem voluptate provident cum dolorem in quasi reiciendis at. Nobis ea aspernatur magnam aut vel autem eveniet. Ullam consequuntur quia nisi accusantium. Nulla dolor sint rerum odio et deserunt eveniet. Non qui placeat officiis pariatur. Placeat repellat expedita aut enim dolor qui pariatur. Minus nihil exercitationem quibusdam et placeat. Deleniti optio officia occaecati qui aliquid. Aperiam blanditiis omnis ut rerum aut et adipisci. Praesentium incidunt dolores quidem distinctio. Facere ea cupiditate quia. Repellat qui et aut et et.",
      author: {
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/385.jpg",
        name: "Holly Erdman MD",
        jobTitle: "Regional Web Associate",
      },
    },
    // {
    //   permaLink: "#_",
    //   featuredImage: "https://picsum.photos/600/280",
    //   title: "Odio laborum rerum qui.",
    // id:8908,
    //   excerpt:
    //     "Ullam et numquam. Architecto non numquam quibusdam eos recusandae. Aut et alias quasi aut enim quo.",
    //   author: {
    //     img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/962.jpg",
    //     name: "Pat Fisher",
    //     jobTitle: "Human Directives Technician",
    //   },
    // },
    // {
    //   permaLink: "#_",
    //   featuredImage: "https://picsum.photos/600/280",
    //   title: "Mollitia qui vel qui nam dolorem ut aliquam modi.",
    // id:19748,
    //   excerpt:
    //     "Eum deserunt dolor sit consequatur ea et. Sunt non minus. Neque mollitia quas commodi et magnam quia perferendis quis rem. Consectetur quam similique ipsa sit ab rerum. Veniam architecto numquam deserunt quis hic nemo officia placeat expedita. Nam ut nulla aut sit magni assumenda sit.",
    //   author: {
    //     img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/137.jpg",
    //     name: "Marta Emmerich",
    //     jobTitle: "Corporate Mobility Officer",
    //   },
    // },
    // {
    //   permaLink: "#_",
    //   featuredImage: "https://picsum.photos/600/280",
    //   title: "Delectus et autem molestiae.",
    // id:1737,
    //   excerpt:
    //     "Laudantium repellendus dicta sit et omnis hic magni. Minima perferendis deleniti fuga sint quo eos fugit. Debitis quaerat sint ullam qui et saepe dolorem. Cumque corporis aut laborum id error vel deleniti nesciunt. Eaque iure veritatis voluptatem et quas ipsum est consequatur nihil. Cum cum aut et vel ut et molestiae numquam.",
    //   author: {
    //     img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/930.jpg",
    //     name: "Timothy Robel",
    //     jobTitle: "Legacy Configuration Specialist",
    //   },
    // },
  ],
  cta: {
    href: "#_",
    label: "To view all posts",
    lableSuffix: "click here",
  },
};
export const products: Product[] = [
  {
    id: 583,
    name: "Aspirina Ácido Acetilsalicilico 500 mg 40 Tabletas",
    description:
      "El jarabe para la tos Vick 44® Exp infantil contiene un expectorante (Guaifenesina) que ayuda a expulsar las flemas. También contiene una tecnología mucoadhesiva que se adhiere a la garganta irritada, dejando una capa protectora para brindar una sensación de alivio y frescura.",
    price: 520.75,
    brand: "Vick 44 Jarabe",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-1.jpg",
  },
  {
    id: 852,
    name: "Apple iPhone 12, 64GB",
    description:
      "Alka-Seltzer es un medicamento antiácido que se vende sin receta médica y que está indicado para el alivio sintomático de la acidez y el ardor de estómago. Contiene ácido acetilsalicílico, ácido cítrico, fosfato de calcio y bicarbonato de sodio como sustancias activas.",
    price: 1250.0,
    brand: "Alka-Seltzer",
    category: "Accesorio",
    inStock: false,
    image: "/img/prod-2.jpg",
  },
  {
    id: 853,
    name: "Apple iPhone 12, 64GB",
    description:
      "La aspirina es un medicamento que pertenece a un grupo de medicamentos llamados salicilatos. Se utiliza para reducir el dolor, la inflamación y la fiebre. Los médicos también pueden recetar aspirina para tratar o prevenir la angina de pecho, los ataques cardíacos, los ataques isquémicos transitorios y los ataques cerebrales.",
    price: 499.99,
    brand: "Aspirina 500mg",
    category: "Accesorio",
    inStock: true,
    image: "/img/prod-3.jpg",
  },
  {
    id: 530,
    name: "Logitech MX Master 2S Wireless Mouse – Use on Any Surface, Hyper-Fast Scrolling, Ergonomic Shape, Rechargeable, Control Upto 3 Apple Mac and Windows Computers, Graphite",
    description:
      "La Novalgina es un fármaco para aliviar dolor leve a severo, incluyendo dolor somático y visceral, fiebre, traumatismos y cirugía.",
    price: 820.0,
    brand: "Novalgina 500mg",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-4.jpg",
  },
  {
    id: 125,
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      "El metronidazol (también llamado Flagyl®) es un medicamento que se utiliza para tratar infecciones. El metronidazol de administración oral está disponible en las siguientes formas y presentaciones: comprimidos redondos blancos de 250-mg. suspensión líquida rosada de 50 mg/mL.",
    price: 720.0,
    brand: "Metronidazol",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-5.jpg",
  },
  {
    id: 543,
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      "Metformina Teva se emplea para tratar a los pacientes con diabetes de tipo 2 (también llamada “diabetes no insulinodependiente”) cuando la dieta y el ejercicio por sí solos no han sido suficientes para controlar su nivel de glucosa en la sangre.",
    price: 545.0,
    brand: "Metformina 850mg",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-6.jpg",
  },
  {
    id: 351,
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      "Centrum Hombre es un suplemento multivitamínico y multimineral para hombres. Está formulado para satisfacer las necesidades nutricionales de los hombres, y para balancear la dieta diaria de vitaminas y minerales.",
    price: 799.99,
    brand: "Vitamina Centrum",
    category: "Accesorio",
    inStock: true,
    image: "/img/prod-7.jpg",
  },
  {
    id: 548,
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      "La vitamina B12 es un nutriente hidrosoluble que ayuda a producir glóbulos rojos, ADN, ARN, energía y tejidos. También ayuda a mantener sanas las células nerviosas.",
    price: 599.99,
    brand: "Vitamina B-12 Nature's Bounty",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-8.jpg",
  },
  {
    id: 585,
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      "El hierro de NaturTierra es un complemento alimenticio que contiene hierro y vitaminas. Contribuye a la formación de glóbulos rojos y hemoglobina, y al funcionamiento normal del sistema inmunitario.",
    price: 2400.0,
    brand: "Hierro - NaturTierra",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-9.jpg",
  },
  {
    id: 345,
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      "Neurobion está indicado para el dolor nervioso expresado en uno o más de los siguientes síntomas: sensación de pinchazo/hormigueo, entumecimiento, rigidez muscular, calambres musculares, alteración de la sensación.",
    price: 290.0,
    brand: "Neurobion X3",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-10.jpg",
  },
  {
    id: 581,
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      "Broken es un complemento alimenticio a base de fitina, vitamina A y zinc que ayuda a prevenir la formación de cálculos renales. La fitina de Broken bloquea el crecimiento de los cristales responsables de la formación de cálculos renales, especialmente del tipo de oxalato cálcico y fosfato cálcico.",
    price: 249.99,
    brand: "Broken",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-11.jpg",
  },
  {
    id: 341,
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      "La loratadina es un fármaco antihistamínico prescrito para tratar síntomas de resfriados y reacciones alérgicas como estornudos, picazón, congestión nasal, ojos llorosos, enrojecimiento ocular y/o sarpullidos con erupción o urticaria.",
    price: 299.99,
    brand: "Clarityne 10mg",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-12.jpg",
  },
];
