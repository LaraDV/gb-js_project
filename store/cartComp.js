export const state = () => ({
  cartItems: [],
  totalSumm: 0
})

export const mutations = {
  addProduct(state, product) {
    state.cartItems.push(product)
    state.totalSumm += product.price
    console.log(state.cartItems)
  },
  changeProductQuantity(state, {find, n}) {
    find.quantity += n;
    state.totalSumm += find.price * n
  },
  removeProduct(state, find) {
    state.cartItems.splice(state.cartItems.indexOf(find), 1);
    state.totalSumm -= find.price
  }
}

export const actions = {
  add({
    commit,
    state
  }, product) {
    console.log(state.cartItems)
    let find = state.cartItems.find(el => el.id_product === product.id_product);
    if (find) {
      let n = 1
      commit('changeProductQuantity', {find, n})
    } else {
      product["quantity"] = 1
      commit('addProduct', product)
    }
  },
  remove({
    commit,
    state
  }, item) {
    let find = state.cartItems.find(el => el.id_product === item.id_product);
    if (find.quantity > 1) {
      let n = -1
      commit('changeProductQuantity', {find, n})
    } else {
      commit('removeProduct', find)
    }
  }
}

export const getters = {
  cartItems: s => s.cartItems,
  totalSumm: s => s.totalSumm
}
