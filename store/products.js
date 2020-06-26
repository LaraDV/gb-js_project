export const state = () => ({
    products: [
        {
            "id_product": 1,
            "product_image": "/img/t-shirt1.jpeg",
            "price": 52
          },
          {
            "id_product": 2,
            "product_image": "/img/t-shirt2.jpeg",
            "price": 104
          },
          {
            "id_product": 3,
            "product_image": "/img/t-shirt3.jpeg",
            "price": 25
          },
          {
            "id_product": 4,
          "product_image": "/img/t-shirt4.jpeg",
          "price": 300
          },
          {
            "id_product": 5,
            "product_image": "/img/t-shirt5.jpeg",
            "price": 78
          },
          {
            "id_product": 6,
            "product_image": "/img/t-shirt6.jpeg",
            "price": 22
          },
          {
            "id_product": 7,
            "product_image": "/img/t-shirt7.jpeg",
            "price": 88
          },
          {
            "id_product": 8,
          "product_image": "/img/t-shirt8.jpeg",
          "price": 59
          }
    ]
})

export const mutations = {
    setProducts(state, products) {
        state.products = products
        console.log(state.products)
    }
}

export const actions = {//когда мы будем вызывать метод fetch мы будем просто заполнять store
    async fetch ({commit}) {
        const products = await this.$axios.$get("api/products")
        commit('setProducts', products)
    }
}

export const getters = {
    products: s => s.products
}