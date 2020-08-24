import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            { 
            name: "Batata",
            price: 2.80,
            unit: "KG"
            },
            { 
            name: "Cenoura",
            price: 1.70,
            unit: "KG"
            },
            { 
            name: "Ovos",
            price: 10.00,
            unit: "DZ"
            }
        ]
    },
    mutations: {
        addProduct(state, product) {
            state.products = state.products.concat(product);
        }
    },
    actions: {
        addProduct({ commit }, product) {
            commit('addProduct', product);
        }
    }
});
