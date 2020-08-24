<template>
    <article>
        <h1>Produtos</h1>
        <ul>
            <li v-for="product in this.$store.state.products" v-bind:key="product.name">
                <ProductItem :item="product"/>
            </li>
        </ul>
    </article>
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
