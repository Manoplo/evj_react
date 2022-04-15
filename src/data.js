export const sliderItems = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Red Shirt",
    desc: "A red shirt - it is pretty red!",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Trousers",
    desc: "A nice pair of trousers.",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Shoes",
    desc: "A pair of nice shoes.",
  },
];

export const categories = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    title: "Blusas",
    desc: "A red shirt - it is pretty red!",
    type: 'blusas'
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Vestidos",
    desc: "A nice pair of trousers.",
    type: 'vestidos'
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Accesorios",
    desc: "A pair of nice shoes.",
    type: 'accesorios'
  },
];

export const products = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
 
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/601316/pexels-photo-601316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
   
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/45981/pexels-photo-45981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/3661622/pexels-photo-3661622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/5701644/pexels-photo-5701644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
   
  },

]

export const orders = [
  {
    id: 1,
    orderedAt: new Date().toLocaleDateString(),
    total: '100€',
    status: 'Pendiente',
    products: [
      {
        id: 1,
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Vestido Rosa",
        price: '50€',
        quantity: 1,
      },
      {
        id: 1,
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Vestido Rosa",
        price: '50€',
        quantity: 1,
      },
    ]

  },
  {
    id: 2,
    orderedAt: new Date().toLocaleDateString(),
    total: '100€',
    status: 'Pendiente',
    products: [
      {
        id: 1,
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Vestido Rosa",
        price: '50€',
        quantity: 1,
      },
      {
        id: 1,
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Vestido Rosa",
        price: '50€',
        quantity: 1,
      },
      {
        id: 1,
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Vestido Rosa",
        price: '50€',
        quantity: 1,
      },
      {
        id: 1,
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Vestido Rosa",
        price: '50€',
        quantity: 1,
      },
      {
        id: 1,
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Vestido Rosa",
        price: '50€',
        quantity: 1,
      },
    ]

  },
  {
    id: 3,
    orderedAt: new Date().toLocaleDateString(),
    total: '100€',
    status: 'Pendiente',
    products: [
      {
        id: 1,
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Vestido Rosa",
        price: '50€',
        quantity: 1,
      },
      {
        id: 1,
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Vestido Rosa",
        price: '50€',
        quantity: 1,
      },
    ]

  },
  {
    id: 4,
    orderedAt: new Date().toLocaleDateString(),
    total: '100€',
    status: 'Enviado',
    products: [
      {
        id: 1,
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Vestido Rosa",
        price: '50€',
        quantity: 1,
      },
      {
        id: 1,
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Vestido Rosa",
        price: '50€',
        quantity: 1,
      },
    ]

  },
  {
    id: 5,
    orderedAt: new Date().toLocaleDateString(),
    total: '100€',
    status: 'Cancelado',
    products: [
      {
        id: 1,
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Vestido Rosa",
        price: '50€',
        quantity: 1,
      },
      {
        id: 1,
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Vestido Rosa",
        price: '50€',
        quantity: 1,
      },
    ]

  },
]
