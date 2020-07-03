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
    state.totalSumm -= find.price
  }
}

export const actions = {
  add({
    commit,
    state
  }, {product, n}) {
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
  }
}
///Поставить везде item, кнопку инпута сделать v-model/кнопка отправить должна вызывать функцию-это на странице товара
export const getters = {
  cartItems: s => s.cartItems,
  totalSumm: s => s.totalSumm
}
