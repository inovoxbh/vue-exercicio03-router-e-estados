<template>
    <div class="container.fluid">
        <nav id="app" class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active"><router-link class="nav-link" to="/">Home</router-link></li>
                    <li class="nav-item active"><router-link class="nav-link" to="/addproduct">Adicionar</router-link></li>
                    <li class="nav-item active"><router-link class="nav-link" to="/products">Produtos</router-link></li>
                </ul>
            </div>
        </nav>
        <div class="jumbotron centered">
            <p class="lead"> Total de produtos já inseridos: {{qtdeProdutos}} </p>
        </div>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App',
        computed: {
            qtdeProdutos() {
                return this.$store.state.products.length;
            }
        }        
    }
</script>

<style>
    a:hover {
        background-color: gray
    }

    .centered {
        width: 600px;
        margin: 0 auto;
        padding: 30px;
    }
    
</style>