import { defineStore } from "pinia"

export const useCartStore = defineStore('cart', {
  state: ()=> {
    return {
      products: []
    }
  },

  actions: {
    addToCart(id) {
      if (!id) { return } 
      if (!this.products.includes(id)) {this.products.push(id)}
    },

    removeToCart(id) {
      if(this.products.includes(id)) {this.products.splice(this.products.indexOf(id), 1)}
    }
  },

  persist: true
})

