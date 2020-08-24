<template>
    <div>
        {{mensagemErroTamanhoNome}}
        <form @submit="addProduct">
            <p>
                <label>Nome:</label>
                <input type="text" v-model="Name">
            </p>

            <p>
                <label>Preço:</label>
                <input type="text" v-model="Price">
            </p>

            <p>
                <label>Unidade Medida:</label>
                <input type="text" v-model="Unit">
            </p>

            <button type="submit" :disabled="isNameLimitExceeded">Cadastrar</button>
        </form>

        <p>{{Name}} por apenas {{Price}} cada {{Unit}}.</p>
    </div>
</template>

<script>
    export default {
        name: 'AddProduct',
        data () {
            return {
                Name: "",
                Price: "",
                Unit: "",
                isNameLimitExceeded: false,
                mensagemErroTamanhoNome: ""
            }
        },
        watch: {
            Name() {
                if (this.Name.length >15) {
                    this.isNameLimitExceeded = true;
                    this.mensagemErroTamanhoNome ="Nome não pode ser superior a 15 caracteres."
                } else {
                    this.isNameLimitExceeded = false;
                    this.mensagemErroTamanhoNome =""
                }
            }
        },
        methods: {
            addProduct(e) {
                e.preventDefault();
                this.$store.dispatch('addProduct', {
                    name: this.Name,
                    price: this.Price,
                    unit: this.Unit
                })
            }
        }
    };
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
