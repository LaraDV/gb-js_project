export const state = () => ({
  products: [{
      "id_product": 1,
      "product_image": "/img/t-shirt1.jpeg",
      "price": 52,
      "rating": 5
    },
    {
      "id_product": 2,
      "product_image": "/img/t-shirt2.jpeg",
      "price": 104,
      "rating": 5
    },
    {
      "id_product": 3,
      "product_image": "/img/t-shirt3.jpeg",
      "price": 25,
      "rating": 5
    },
    {
      "id_product": 4,
      "product_image": "/img/t-shirt4.jpeg",
      "price": 300,
      "rating": 5
    },
    {
      "id_product": 5,
      "product_image": "/img/t-shirt5.jpeg",
      "price": 78,
      "rating": 5
    },
    {
      "id_product": 6,
      "product_image": "/img/t-shirt6.jpeg",
      "price": 22,
      "rating": 5
    },
    {
      "id_product": 7,
      "product_image": "/img/t-shirt7.jpeg",
      "price": 88,
      "rating": 5
    },
    {
      "id_product": 8,
      "product_image": "/img/t-shirt8.jpeg",
      "price": 59,
      "rating": 5
    },
    {
      "id_product": 9,
      "product_image": "/img/pr_1.jpeg",
      "price": 52,
      "rating": 4
    },
    {
      "id_product": 10,
      "product_image": "/img/pr_2.jpeg",
      "price": 52,
      "rating": 4
    },
    {
      "id_product": 11,
      "product_image": "/img/pr_3.jpeg",
      "price": 52,
      "rating": 4
    },
    {
      "id_product": 12,
      "product_image": "/img/pr_4.jpeg",
      "price": 52,
      "rating": 4
    },
    {
      "id_product": 13,
      "product_image": "/img/pr_5.jpeg",
      "price": 52,
      "rating": 4
    },
    {
      "id_product": 14,
      "product_image": "/img/pr_6.jpeg",
      "price": 52,
      "rating": 4
    },
    {
      "id_product": 15,
      "product_image": "/img/pr_7.jpeg",
      "price": 52,
      "rating": 4
    },
    {
      "id_product": 16,
      "product_image": "/img/pr_8.jpeg",
      "price": 52,
      "rating": 4
    },
    {
      "id_product": 17,
      "product_image": "/img/pr_9.jpeg",
      "price": 52,
      "rating": 4
    }
  ]
})

export const mutations = {
  // setProducts(state, products) {
  //   state.products = products
  //   console.log(state.products)
  // }
}

export const actions = {
  // async fetch({
  //   commit
  // }) {
  //   const products = await this.$axios.$get("api/products")
  //   commit('setProducts', products)
  // }
}

export const getters = {
  products: s => s.products,
}