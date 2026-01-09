// Base de dados do cardápio com imagens ilustrativas
const menuData = {
    pratosExecutivos: [
        {
            
    id: 'pe-01',
    name: 'Bife a Cavalo',
    description: 'Bife suculento com ovo frito, acompanhamentos completos',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',

    images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],

    category: 'pratosExecutivos'

        },
        {
            id: 'pe-02',
            name: 'Bife Acebolado',
            description: 'Bife macio com cebolas caramelizadas',
            price: 20.00,
            image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop',

            images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],


            category: 'pratosExecutivos'
        },
        {
            id: 'pe-03',
            name: 'Frango Grelhado',
            description: 'Peito de frango grelhado temperado com ervas',
            price: 18.00,
            image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',

            images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],


            category: 'pratosExecutivos'
        },
        {
            id: 'pe-04',
            name: 'Chapa Mista',
            description: 'Calabresa, frango e carne na chapa',
            price: 22.00,
            image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',

            images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],


            category: 'pratosExecutivos'
        },
        {
            id: 'pe-05',
            name: 'Picanha Grelhada',
            description: 'Picanha nobre grelhada ao ponto',
            price: 30.00,
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',

            images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],


            category: 'pratosExecutivos'
        },
        {
            id: 'pe-06',
            name: 'Filé Mignon Grelhado',
            description: 'Filé mignon macio e suculento',
            price: 26.00,
            image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop',

            images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],


            category: 'pratosExecutivos'
        },
        {
            id: 'pe-07',
            name: 'Bisteca Suína',
            description: 'Bisteca de porco grelhada e temperada',
            price: 19.00,
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',

            images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],


            category: 'pratosExecutivos'
        },
        {
            id: 'pe-08',
            name: 'Peixe Grelhado',
            description: 'Peixe fresco grelhado com limão',
            price: 30.00,
            image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',

            images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],


            category: 'pratosExecutivos'
        }
    ],
    
    estrogonofes: [
        {
            id: 'es-01',
            name: 'Estrogonofe de Frango',
            description: 'Frango cremoso com molho especial e cogumelos',
            price: 20.00,
            image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop',

            images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],


            category: 'estrogonofes'
        },
        {
            id: 'es-02',
            name: 'Estrogonofe de Filé Mignon',
            description: 'Filé mignon em molho cremoso com champignon',
            price: 25.00,
            image: 'https://images.unsplash.com/photo-1612760698919-ea060e0b4cf0?w=400&h=300&fit=crop',

            images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],


            category: 'estrogonofes'
        }
    ],
    
    parmegianas: [
        {
            id: 'pm-01',
            name: 'Parmegiana de Carne',
            description: 'Bife empanado com molho de tomate e queijo gratinado',
            price: 25.00,
            image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop',

            images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],


            category: 'parmegianas'
        },
        {
            id: 'pm-02',
            name: 'Parmegiana de Frango',
            description: 'Frango empanado com molho e queijo derretido',
            price: 21.00,
            image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop',

            images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],


            category: 'parmegianas'
        }
    ],
    
    outros: [
        {
            id: 'ou-01',
            name: 'Almôndegas de Carne Recheada',
            description: 'Almôndegas suculentas com recheio especial',
            price: 20.00,
            image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop',

            images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],


            category: 'outros'
        }
    ],
    
    panelinhas: [
        {
            id: 'pn-01',
            name: 'Panelinha de Frango',
            description: 'Frango cremoso servido em panelinha individual',
            price: 25.00,
            image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=400&h=300&fit=crop',

            images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],


            category: 'panelinhas'
        },
        {
            id: 'pn-02',
            name: 'Panelinha de Filé Mignon',
            description: 'Filé mignon ao molho em panelinha individual',
            price: 30.00,
            image: 'https://images.unsplash.com/photo-1606850780554-b55af0a49dd4?w=400&h=300&fit=crop',

            images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],


            category: 'panelinhas'
        },
        {
            id: 'pn-03',
            name: 'Panelinha de Camarão',
            description: 'Camarões frescos ao molho cremoso',
            price: 35.00,
            image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop',

            images: [
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
    ],

    
            category: 'panelinhas'
        }
    ],
    
    feijoada: [
        {
            id: 'fj-01',
            name: 'Kit Feijoada (1 pessoa)',
            description: 'Feijoada completa com todos os acompanhamentos',
            price: 25.00,
            image: 'https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=400&h=300&fit=crop',
            category: 'feijoada'
        },
        {
            id: 'fj-02',
            name: 'Kit Feijoada (2 pessoas)',
            description: 'Feijoada completa para duas pessoas',
            price: 45.00,
            image: 'https://images.unsplash.com/photo-1618219944342-824e40a13285?w=400&h=300&fit=crop',
            category: 'feijoada'
        }
    ],
    
    bebidas: [
        {
            id: 'bb-01',
            name: 'Coca-Cola Lata',
            description: '350ml gelada',
            price: 5.00,
            image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
            category: 'bebidas'
        },
        {
            id: 'bb-02',
            name: 'Coca-Cola 600ml',
            description: '600ml gelada',
            price: 7.00,
            image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf5ff0?w=400&h=300&fit=crop',
            category: 'bebidas'
        },
        {
            id: 'bb-03',
            name: 'Coca-Cola 1L',
            description: '1 litro gelada',
            price: 9.00,
            image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop',
            category: 'bebidas'
        },
        {
            id: 'bb-04',
            name: 'Coca-Cola 2L',
            description: '2 litros gelada',
            price: 13.00,
            image: 'https://images.unsplash.com/photo-1592859600972-3edc0ec6b75c?w=400&h=300&fit=crop',
            category: 'bebidas'
        },
        {
            id: 'bb-05',
            name: 'Suco Del Valle (Laranja)',
            description: '450ml - Sabor laranja',
            price: 6.00,
            image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
            category: 'bebidas'
        },
        {
            id: 'bb-06',
            name: 'Suco Del Valle (Uva)',
            description: '450ml - Sabor uva',
            price: 6.00,
            image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&h=300&fit=crop',
            category: 'bebidas'
        }
        
    ]
};

// Função para obter todos os produtos
function getAllProducts() {
    return Object.values(menuData).flat();
}

// Função para obter produto por ID
function getProductById(id) {
    const allProducts = getAllProducts();
    return allProducts.find(product => product.id === id);
}

// Função para formatar preço
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}


