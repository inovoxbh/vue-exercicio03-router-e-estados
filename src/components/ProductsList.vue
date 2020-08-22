<template>
    <article>
        <h1>Produtos</h1>
        <ul>
            <li v-for="product in products" v-bind:key="product.name">
                <ProductItem :item="product"/>
            </li>
        </ul>
    </article>
</template>

<script>
    import ProductItem from './ProductItem';

    export default {
        name: 'ProductsList',
        components: {
            ProductItem
        },
        props: {
            products: Array
        }
    }
</script>
