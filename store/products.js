export const state = () => ({
  userSearch: '',
  filterArr: [],
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
  ]
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
  filtered: state => {
    if (state.filterArr.length === 0) {
      return state.products;
    } else if (state.filterArr.length === 1) {
      return state.products.filter(el =>
        state.filterArr[0].value.includes(el[state.filterArr[0].criterion])
      )
    } else if (state.filterArr.length === 2) {
      return state.products.filter(el =>
        state.filterArr[0].value.includes(el[state.filterArr[0].criterion]) && state.filterArr[1].value.includes(el[state.filterArr[1].criterion])
      )
    } else if (state.filterArr.length === 3) {
      return state.products.filter(el =>
        state.filterArr[0].value.includes(el[state.filterArr[0].criterion]) && state.filterArr[1].value.includes(el[state.filterArr[1].criterion]) && state.filterArr[2].value.includes(el[state.filterArr[2].criterion])
      )
    }
  },
}
