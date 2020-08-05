export const state = () => ({
  cartItems: [],
  totalSumm: 0
})

export const mutations = {
  addProduct(state, {product,n}) {
    state.cartItems.push(product)
    state.totalSumm += product.price*n
    console.log(state.cartItems)
  },
  changeProductQuantity(state, {find, n}) {
    find.quantity += n;
    state.totalSumm += find.price * n
  },
  removeProduct(state, find) {
    state.cartItems.splice(state.cartItems.indexOf(find), 1);
    state.totalSumm -= find.price*find.quantity;
  },
  clear(state){
    return state.cartItems = [];
  },
  clearTotalSumm(state){
    return state.totalSumm = 0;
  }
}

export const actions = {
  add({
    commit,
    state
  }, {product, n=1}) {
    console.log(state.cartItems)
    let find = state.cartItems.find(el => el.id_product === product.id_product);
    if (find) {
      commit('changeProductQuantity', {find, n})
    } else {
      product["quantity"] = n
      commit('addProduct', {product,n})
    }
  },
  remove({
    commit,
    state
  }, {product, n = -1}) {
    let find = state.cartItems.find(el => el.id_product === product.id_product);
    if (find.quantity > 1) {
      // n *= -1
      commit('changeProductQuantity', {find, n})
    } else {
      commit('removeProduct', find)
    }
  },
  clearCart({commit}){
    commit('clear');
    commit('clearTotalSumm');
  }
}
export const getters = {
  cartItems: s => s.cartItems,
  totalSumm: s => s.totalSumm
}
