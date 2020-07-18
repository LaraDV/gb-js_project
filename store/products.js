export const state = () => ({
  userSearch: '',
  filterArr: [],
  categories: [{
      "name": "Blazers",
      "isActive": false
    },
    {
      "name": "Dresses",
      "isActive": false
    },
    {
      "name": "Blouses",
      "isActive": false
    },
    {
      "name": "Hoodies & Sweatshirts",
      "isActive": false
    },
    {
      "name": "Jackets & Coats",
      "isActive": false
    },
    {
      "name": "Pants",
      "isActive": false
    },
    {
      "name": "Polos",
      "isActive": false
    },
    {
      "name": "T-Shirts",
      "isActive": false
    },
    {
      "name": "Shoes",
      "isActive": false
    },
    {
      "name": "Shorts",
      "isActive": false
    },
    {
      "name": "Sweaters & Knits",
      "isActive": false
    },
    {
      "name": "Shirts",
      "isActive": false
    },
    {
      "name": "Tanks",
      "isActive": false
    }
  ],
  brands: [{
      "name": "ZARA",
      "isActive": false
    },
    {
      "name": "MANGO",
      "isActive": false
    },
    {
      "name": "OYSHO",
      "isActive": false
    }
  ],
  designers: [{
      "name": "Jaime",
      "isActive": false
    },
    {
      "name": "Bronn",
      "isActive": false
    }
  ],
  products: [{
      "id_product": 9,
      "product_name": "ZARA COAT",
      "product_image": "/img/pr_1.jpeg",
      "category": "Jackets & Coats",
      "price": 52,
      "rating": 4,
      "brand": "ZARA",
      "designer": "Jaime"
    },
    {
      "id_product": 10,
      "product_name": "MANGO PEOPLE JACKET",
      "product_image": "/img/pr_2.jpeg",
      "category": "Jackets & Coats",
      "price": 52,
      "rating": 4,
      "brand": "MANGO",
      "designer": "Bronn"
    },
    {
      "id_product": 11,
      "product_name": "MANGO PEOPLE COAT",
      "product_image": "/img/pr_3.jpeg",
      "category": "Jackets & Coats",
      "price": 52,
      "rating": 5,
      "brand": "MANGO",
      "designer": "Jaime"
    },
    {
      "id_product": 12,
      "product_name": "MANGO PEOPLE T-SHIRT",
      "product_image": "/img/pr_4.jpeg",
      "category": "T-Shirts",
      "price": 104,
      "rating": 4,
      "brand": "MANGO",
      "designer": "Bronn"
    },
    {
      "id_product": 13,
      "product_name": "MANGO PEOPLE SWEATSHIRT",
      "product_image": "/img/pr_5.jpeg",
      "category": "Hoodies & Sweatshirts",
      "price": 52,
      "rating": 5,
      "brand": "MANGO",
      "designer": "Jaime"
    },
    {
      "id_product": 14,
      "product_name": "MANGO PEOPLE BLAZER",
      "product_image": "/img/pr_6.jpeg",
      "category": "Blazers",
      "price": 52,
      "rating": 4,
      "brand": "MANGO",
      "designer": "Bronn"
    },
    {
      "id_product": 15,
      "product_name": "MANGO PEOPLE PANTS",
      "product_image": "/img/pr_7.jpeg",
      "category": "Pants",
      "price": 52,
      "rating": 5,
      "brand": "MANGO",
      "designer": "Jaime"
    },
    {
      "id_product": 16,
      "product_name": "ZARA JACKET",
      "product_image": "/img/pr_8.jpeg",
      "category": "Jackets & Coats",
      "price": 52,
      "rating": 4,
      "brand": "ZARA",
      "designer": "Jaime"
    },
    {
      "id_product": 17,
      "product_name": "ZARA T-SHIRT",
      "product_image": "/img/pr_9.jpeg",
      "category": "T-Shirts",
      "price": 52,
      "rating": 4,
      "brand": "ZARA",
      "designer": "Bronn"
    },
    {
      "id_product": 1,
      "product_name": "ZARA T-SHIRT",
      "product_image": "/img/t-shirt1.jpeg",
      "category": "T-Shirts",
      "price": 104,
      "rating": 5,
      "brand": "ZARA",
      "designer": "Jaime"
    },
    {
      "id_product": 2,
      "product_name": "OYSHO BLOUSE",
      "product_image": "/img/t-shirt2.jpeg",
      "category": "Blouses",
      "price": 104,
      "rating": 5,
      "brand": "OYSHO",
      "designer": "Jaime"
    },
    {
      "id_product": 4,
      "product_name": "MANGO PEOPLE DRESS",
      "product_image": "/img/t-shirt4.jpeg",
      "category": "Dresses",
      "price": 300,
      "rating": 5,
      "brand": "MANGO",
      "designer": "Jaime"
    },
    {
      "id_product": 5,
      "product_name": "ZARA DRESS",
      "product_image": "/img/t-shirt5.jpeg",
      "category": "Dresses",
      "price": 78,
      "rating": 5,
      "brand": "ZARA",
      "designer": "Bronn"
    },
    {
      "id_product": 7,
      "product_name": "MANGO PEOPLE PANTS",
      "product_image": "/img/t-shirt7.jpeg",
      "category": "Pants",
      "price": 88,
      "rating": 5,
      "brand": "MANGO",
      "designer": "Bronn"
    }
  ],
  perPage: 3,
  pagination: {}
})

export const mutations = {
  setSearch(state, search) {
    state.userSearch = search
  },
  setFilter(state, payLoad) {
    let find = state.filterArr.find(el => el.criterion === payLoad.criterion);
    if (find) {
      console.log(payLoad.value)
      state.filterArr.find(el => el.criterion === payLoad.criterion).value.push(payLoad.value[0])
    } else {
      state.filterArr.push(payLoad)
    }
  },
  unSetFilter(state, payLoad) {
    if (state.filterArr.find(el => el.criterion === payLoad.criterion).value.length === 1) {
      let find = state.filterArr.find(el => el.criterion === payLoad.criterion)
      state.filterArr.splice(state.filterArr.indexOf(find), 1)
    } else {
      let find = state.filterArr.find(el => el.criterion === payLoad.criterion).value.find(el => el === payLoad.value[0])
      state.filterArr.find(el => el.criterion === payLoad.criterion).value.splice(state.filterArr.find(el => el.criterion === payLoad.criterion).value.indexOf(find), 1)
    }
  },
  toggleActive(state, payLoad) {
    if (payLoad.criterion === "brand") {
      state.brands.find(el => el.name === payLoad.value[0]).isActive = !state.brands.find(el => el.name === payLoad.value[0]).isActive
    } else if (payLoad.criterion === "category") {
      state.categories.find(el => el.name === payLoad.value[0]).isActive = !state.categories.find(el => el.name === payLoad.value[0]).isActive
    } else if (payLoad.criterion === "designer") {
      state.designers.find(el => el.name === payLoad.value[0]).isActive = !state.designers.find(el => el.name === payLoad.value[0]).isActive
    }
  },
  paginator(state, currentPage) { //устанавливает startIndex, endIndex
    console.log('paginator')
    let startIndex = (currentPage - 1) * state.perPage,
      endIndex = Math.min(startIndex + state.perPage - 1, state.products.length - 1);
    let allPages = [];
    for (let i = 1; i < Math.ceil(state.products.length / state.perPage) + 1; i++) {
      allPages.push(i);
    }
    return state.pagination = {
      currentPage: currentPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: allPages
    }
  }

}

export const actions = {
  setSearch({
    commit
  }, search) {
    commit('setSearch', search)
  }
}
export const getters = {
  userSearch: s => s.userSearch,
  products: s => s.products,
  filterArr: s => s.filterArr,
  brands: s => s.brands,
  categories: s => s.categories,
  designers: s => s.designers,
  collection: s => s.products.slice(s.pagination.startIndex, s.pagination.endIndex + 1),
  pages: s => s.pagination.pages
}
