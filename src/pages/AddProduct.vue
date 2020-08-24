<template>
    <div class="centered">
        <p v-if="mensagemErroTamanhoNome !== undefined && mensagemErroTamanhoNome !== '' && mensagemErroTamanhoNome !== ''" class="alert alert-warning">{{mensagemErroTamanhoNome}}</p>
        <form @submit="addProduct">
            <div class="form-group" @change="changeHandle">
                <label>Nome:</label>
                <input type="text" v-model="Name" class="form-control">
            </div>

            <div class="form-group">
                <label>Preço:</label>
                <input type="text" v-model="Price" class="form-control">
            </div>

            <div class="form-group">
                <label>Unidade Medida:</label>
                <input type="text" v-model="Unit" class="form-control">
            </div>

            <button type="submit" :disabled="isNameLimitExceeded && 1===1" class="btn btn-success">Cadastrar</button>
        </form>
        <br>
        <p v-if="mensagemFeedback !== undefined && mensagemFeedback !== '' && mensagemFeedback !== ''" class="alert alert-success">{{mensagemFeedback}}</p>
        
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
                mensagemErroTamanhoNome: "",
                mensagemFeedback: ""
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
                this.mensagemFeedback = "Produto inserido com sucesso!"
            },
            changeHandle(){
                this.mensagemFeedback = ""
            }
        }
    };
</script>
