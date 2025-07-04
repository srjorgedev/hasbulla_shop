import type { Product } from "./types/ProductType";

export const products: Product[] = [
    {
        id: "camisa",
        name: "Camisa",
        description: "Camisa de vestir elegante y cómoda.",
        price: 39.99,
        category: ["Formal"],
        stockQuantity: 0,
        imageUrl: "https://i.imgur.com/GwCp2wp.png",
        colors: ["Blue", "White", "Black"],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "pantalon",
        name: "Pantalon",
        description: "Pantalon de algodón cómodo y duradero.",
        price: 29.99,
        category: ["Casual"],
        stockQuantity: 50,
        imageUrl: "https://permachef.com/cdn/shop/files/Dazul-1_2048x.jpg?v=1705706622",
        colors: ["Red", "Blue", "Black"],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "camiseta",
        name: "Camiseta",
        description: "Camiseta de algodón suave y transpirable.",
        price: 19.99,
        category: ["Casual"],
        stockQuantity: 100,
        imageUrl: "https://i5.walmartimages.com/asr/8d178e5e-e3ee-468c-ab19-54ee069bcc43.afbeb178ee4da9ea96d99ba6c9eab0c3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        colors: ["White", "Black", "Gray"],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "chaqueta",
        name: "Chaqueta",
        description: "Chaqueta ligera para climas frescos.",
        price: 49.99,
        category: ["Mujer"],
        stockQuantity: 30,
        imageUrl: "https://i5.walmartimages.com/asr/1deefee4-1257-4d36-a9f8-d8147be8e493.abd0eee2a4b9adefcf19e5fd1bced31f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        colors: ["Purple", "Black"],
        sizes: ["S", "M", "L"],
    },
    {
        id: "zapatillas",
        name: "Zapatillas",
        description: "Zapatillas deportivas cómodas y elegantes.",
        price: 59.99,
        category: ["Deportiva", "Calzado"],
        stockQuantity: 75,
        imageUrl: "https://i5.walmartimages.com/asr/2ba3bcee-5c70-4c98-8d66-de89f17c4058.682cf909b8a8d90db9ebdfcf0fc04e79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        colors: ["White", "Black", "Blue"],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "bufanda",
        name: "Bufanda",
        description: "Bufanda de lana suave y cálida.",
        price: 15.99,
        category: ["Accesorios"],
        stockQuantity: 200,
        imageUrl: "https://m.media-amazon.com/images/I/71sVqQO8ouL.jpg",
        colors: ["Red", "Gray", "Black"],
        sizes: ["G"],
    },
    {
        id: "vestido-1",
        name: "Vestido de Verano",
        description: "Vestido ligero y fresco para el verano.",
        price: 49.99,
        category: ["Casual"],
        stockQuantity: 20,
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_788789-MLM80177510998_112024-O-conjunto-de-moda-elegante-casual-de-dos-pcs-ropa-para-mujer.webp",
        colors: ["Blue", "Pink", "White"],
        sizes: ["S", "M", "L"],
    },
    {
        id: "vestido-2",
        name: "Vestido de Noche",
        description: "Vestido elegante para ocasiones especiales.",
        price: 89.99,
        category: ["Formal"],
        stockQuantity: 15,
        imageUrl: "https://boutiquemariaregna.com/cdn/shop/files/CDS411_3_EMERALD_5be7b9a5-9f52-41db-a0e3-fdcc1d02f5ab.jpg?v=1682955103",
        colors: ["Black", "Red"],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "bolso",
        name: "Bolso de Mano",
        description: "Bolso de mano elegante y espacioso.",
        price: 39.99,
        category: ["Accesorios"],
        stockQuantity: 100,
        imageUrl: "https://i5.walmartimages.com/asr/2a26cf80-b386-47bb-9938-02dfd4b67649.d27339ae758707797148256e6ecf1cd0.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        colors: ["Brown", "Black"],
        sizes: ["G"],
    },
]

export const season: Product[] = [
    {
        id: "chaleco",
        name: "Chaleco",
        description: "Chaleco de lana para climas calurosos.",
        price: 34.99,
        category: ["Casual", "Verano"],
        stockQuantity: 40,
        imageUrl: "https://i.etsystatic.com/11753315/r/il/a436e4/2657270776/il_570xN.2657270776_s81q.jpg",
        colors: ["Gray", "Black"],
        sizes: ["S", "M", "L"],
    },
    {
        id: "short",
        name: "Shorts de Verano",
        description: "Shorts ligeros y cómodos para el verano.",
        price: 24.99,
        category: ["Casual", "Verano"],
        stockQuantity: 60,
        imageUrl: "https://img.kwcdn.com/product/fancy/a7b14dde-d561-4db2-846f-52e0e1f2d8c4.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
        colors: ["Blue", "Green", "Black"],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "sandalias",
        name: "Sandalias",
        description: "Sandalias cómodas para el verano.",
        price: 29.99,
        category: ["Casual", "Calzado", "Verano"],
        stockQuantity: 80,
        imageUrl: "https://monpiel.com/img/cms/ES/Calzado/sandalia-santorini-marron.jpg",
        colors: ["Brown", "Black"],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "gafas-de-sol",
        name: "Gafas de Sol",
        description: "Gafas de sol elegantes y modernas.",
        price: 19.99,
        category: ["Accesorios"],
        stockQuantity: 150,
        imageUrl: "https://d26lpennugtm8s.cloudfront.net/stores/001/224/406/rte/pardela_rosa_b_1.jpg",
        colors: ["Black", "Brown"],
        sizes: ["G"],
    },
    {
        id: "sombrero",
        name: "Sombrero de Playa",
        description: "Sombrero de playa para protegerse del sol.",
        price: 14.99,
        category: ["Accesorios", "Verano"],
        stockQuantity: 120,
        imageUrl: "https://monarcasartesanias.com/cdn/shop/products/sofia_1500x.png?v=1639700631",
        colors: ["Beige", "Black"],
        sizes: ["G"],
    },
    {
        id: "traje-de-bano",
        name: "Traje de Baño",
        description: "Traje de baño cómodo y elegante.",
        price: 39.99,
        category: ["Casual", "Verano"],
        stockQuantity: 90,
        imageUrl: "https://www.bariswimwear.com/cdn/shop/files/menta-danzante-vibrante-completo-liso-bari-los-mejores-trajes-de-bano-y-bikinis-en-mexico-218918.png?v=1711029882",
        colors: ["Blue", "Red"],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "toalla-de-playa",
        name: "Toalla de Playa",
        description: "Toalla de playa grande y suave.",
        price: 12.99,
        category: ["Accesorios", "Verano"],
        stockQuantity: 200,
        imageUrl: "https://ae01.alicdn.com/kf/S71f9e0804d184ad882a0559b0834c623J/Water-absorbent-quick-drying-beach-towel-Sun-shawl-Yoga-towel-Swimming-running-quick-drying-towel-Super.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        colors: ["Blue", "Yellow"],
        sizes: ["G"],
    },
    {
        id: "sombrilla",
        name: "Sombrilla de Playa",
        description: "Sombrilla de playa para sombra y protección solar.",
        price: 29.99,
        category: ["Accesorios", "Verano"],
        stockQuantity: 70,
        imageUrl: "https://m.media-amazon.com/images/I/71+rbARw8RL.jpg",
        colors: ["Red", "Blue"],
        sizes: ["G"],
    },
]

export const accessories: Product[] = [
    {
        id: "reloj",
        name: "Reloj de Pulsera",
        description: "Reloj elegante y moderno para cualquier ocasión.",
        price: 99.99,
        category: ["Accesorios", "Hombre"],
        stockQuantity: 50,
        imageUrl: "https://musswatch.com/blog/wp-content/uploads/2018/09/funcionamiento-reloj-cuarzo-precio.jpg",
        colors: ["Silver", "Gold", "Black"],
        sizes: ["G"],
    },
    {
        id: "pulsera",
        name: "Pulsera de Cuero",
        description: "Pulsera de cuero auténtico con diseño elegante.",
        price: 29.99,
        category: ["Accesorios"],
        stockQuantity: 100,
        imageUrl: "https://resources.sears.com.mx/medios-plazavip/t1/171745116371MgXz1PP9LACSX679jpg?scale=500&qlty=75",
        colors: ["Brown", "Black"],
        sizes: ["G"],
    },
]

export const formal: Product[] = [
    {
        id: "traje",
        name: "Traje de Negocios",
        description: "Traje formal de negocios para ocasiones especiales.",
        price: 199.99,
        category: ["Formal", "Hombre"],
        stockQuantity: 20,
        imageUrl: "https://img.kwcdn.com/product/fancy/a43ce4d1-94e6-45d1-b4b6-0bc0c3cc1271.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
        colors: ["Navy", "Gray", "Black"],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "corbata",
        name: "Corbata de Seda",
        description: "Corbata de seda elegante para ocasiones formales.",
        price: 19.99,
        category: ["Accesorios", "Formal", "Hombre"],
        stockQuantity: 150,
        imageUrl: "https://i.etsystatic.com/12526779/r/il/3bc6b6/1656102687/il_fullxfull.1656102687_90lm.jpg",
        colors: ["Red", "Blue", "Black"],
        sizes: ["G"],
    },
    {
        id: "cinturon",
        name: "Cinturón de Cuero",
        description: "Cinturón de cuero auténtico con hebilla elegante.",
        price: 39.99,
        category: ["Accesorios", "Formal", "Hombre"],
        stockQuantity: 80,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOegaWxnk2mXl-tOE61j0-ptZus7oEjRzy1Q&s",
        colors: ["Brown", "Black"],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "vestido-formal",
        name: "Vestido Formal",
        description: "Vestido elegante para ocasiones formales.",
        price: 89.99,
        category: ["Formal", "Mujer"],
        stockQuantity: 25,
        imageUrl: "https://ariststyles.com/cdn/shop/products/cd235c_burgundy.jpg?v=1686899603&width=1000",
        colors: ["Black", "Red", "Navy"],
        sizes: ["S", "M", "L", "XL"],
    }
]

export const winter: Product[] = [{
    id: "abrigo",
    name: "Abrigo de Invierno",
    description: "Abrigo cálido y elegante para el invierno.",
    price: 129.99,
    category: ["Invierno", "Mujer"],
    stockQuantity: 30,
    imageUrl: "https://i5.walmartimages.com/asr/6486b795-b0a2-4dd9-bf0d-1145908dccbb.2bb19bb8458427b7dbda3bd6b1346cba.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    colors: ["Black", "Gray", "Navy"],
    sizes: ["S", "M", "L", "XL"],
},
{
    id: "bufanda-invierno",
    name: "Bufanda de Invierno",
    description: "Bufanda de lana gruesa y cálida.",
    price: 19.99,
    category: ["Accesorios", "Invierno"],
    stockQuantity: 100,
    imageUrl: "https://i5.walmartimages.com/asr/3b359836-2273-4fde-8e42-de9ab26d0730.29015d8d74081f03c33fc6591cc42ea8.jpeg",
    colors: ["Red", "Gray", "Black"],
    sizes: ["G"],
},
{
    id: "guantes",
    name: "Guantes de Invierno",
    description: "Guantes de lana suaves y cálidos.",
    price: 14.99,
    category: ["Accesorios", "Invierno"],
    stockQuantity: 150,
    imageUrl: "https://m.media-amazon.com/images/I/814SG5H4LTL._AC_SX569_.jpg",
    colors: ["Black", "Brown"],
    sizes: ["G"],
},
{
    id: "botas",
    name: "Botas de Invierno",
    description: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c8ea683cba2d9bef8c4c92f1e4351392.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
    price: 89.99,
    category: ["Calzado", "Invierno", "Mujer"],
    stockQuantity: 40,
    imageUrl: "https://i5.walmartimages.com/asr/2ba3bcee-5c70-4c98-8d66-de89f17c4058.682cf909b8a8d90db9ebdfcf0fc04e79.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    colors: ["Brown", "Black"],
    sizes: ["S", "M", "L", "XL"],
},
{
    id: "gorra",
    name: "Gorra de Invierno",
    description: "Gorra de lana para mantener la cabeza caliente.",
    price: 12.99,
    category: ["Accesorios", "Invierno"],
    stockQuantity: 120,
    imageUrl: "https://i5.walmartimages.com/asr/a671f981-055e-4b8c-8c39-9af6ab86d249.a830c2d9d81f52fe96c4c22d11aa4952.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    colors: ["Black", "Gray"],
    sizes: ["G"],
}
]

export const sports: Product[] = [
    {
        id: "zapatillas-correr",
        name: "Zapatillas de Correr",
        description: "Zapatillas de correr ligeras y cómodas para entrenamientos diarios.",
        price: 79.99,
        category: ["Deportiva", "Calzado", "Mujer"],
        stockQuantity: 150,
        imageUrl: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_363,c_limit/4a1b3373-eefa-49ae-9abc-4620171f51d6/las-mejores-zapatillas-nike-para-correr-maratones.jpg",
        colors: ["Black", "Blue"],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "camiseta-deportiva",
        name: "Camiseta Deportiva",
        description: "Camiseta deportiva transpirable y cómoda para entrenamientos.",
        price: 19.99,
        category: ["Deportiva", "Hombre"],
        stockQuantity: 300,
        imageUrl: "https://i5.walmartimages.com/asr/2afaebde-c420-4150-82b1-a7f86213c57f.414d4d6bbee3d2d5019c7983f96f66a9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        colors: ["White", "Black", "Gray"],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "pantalon-deportivo",
        name: "Pantalón Deportivo",
        description: "Pantalón deportivo cómodo y flexible para entrenamientos.",
        price: 39.99,
        category: ["Deportiva", "Hombre", "Mujer", "Casual"],
        stockQuantity: 80,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-Dt3sA1Eny9ekl2bojziBsdsCVZU59GYJw&s",
        colors: ["Black", "Gray"],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "mochila-deportiva",
        name: "Mochila Deportiva",
        description: "Mochila deportiva espaciosa y resistente para llevar todo lo necesario.",
        price: 49.99,
        category: ["Deportiva", "Accesorios"],
        stockQuantity: 120,
        imageUrl: "https://i5.walmartimages.com/asr/104741a9-191c-4c83-a5a4-44aa5cbc1abc.a316ab45f2a4d8d20b00aa33c42d788e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        colors: ["Black", "Blue"],
        sizes: ["G"],
    },
    {
        id: "botella-deportiva",
        name: "Botella Deportiva",
        description: "Botella deportiva de acero inoxidable para mantener tus bebidas frías.",
        price: 14.99,
        category: ["Deportiva", "Accesorios"],
        stockQuantity: 250,
        imageUrl: "https://lavasconia.vtexassets.com/arquivos/ids/158285/qD5ffN.jpg?v=637429915139300000",
        colors: ["Silver", "Black"],
        sizes: ["G"],
    },
]

export const allProducts: Product[] = [...products, ...season, ...accessories, ...formal, ...winter, ...sports];
export const categories: string[] = [
    "Casual",
    "Formal",
    "Deportiva",
    "Accesorios",
    "Mujer",
    "Hombre",
    "Invierno",
    "Calzado",
    "Verano",
    "Invierno"
];