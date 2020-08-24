<template>
    <div id="app">
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/addproduct">Adicionar</router-link></li>
                <li><router-link to="/products">Produtos</router-link></li>
            </ul>
        </nav>
        <p> Total de produtos já inseridos: {{qtdeProdutos}} </p>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App',
        computed: {
            qtdeProdutos() {
              return this.$store.qtdeProdutos;
            }
        }        
    }
</script>

<style>
    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    }

    h1 {
        color: darkgreen;
        font-weight: bold;
    }

    p {
        color: black;
    }

    ul{
        list-style-type:none;
    }

</style>
