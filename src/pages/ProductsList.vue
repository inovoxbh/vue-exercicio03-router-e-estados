<template>
    <div class="centered">
        <h1 class="display-4">Produtos Cadastrados</h1>
        <ul class="list-group">
            <li v-for="product in this.$store.state.products" v-bind:key="product.name" class="list-group-item">
                <ProductItem :item="product"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import ProductItem from '../components/ProductItem';

    export default {
        name: 'ProductsList',
        components: {
            ProductItem
        }
    }
</script>
