<template>
    <div>
        {{mensagemErroTamanhoNome}}
        <form @submit="onFormSubmit">
            <p>
                <label>Nome:</label>
                <input type="text" v-model="Name">
                {{firstNameError}}
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
        name: 'ProductForm',
        props: {
            addProduct: Function
        },
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
            onFormSubmit(e) {
                e.preventDefault();

                this.addProduct({
                    Name: this.Name,
                    Price: this.Price,
                    Unit: this.Unit
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
