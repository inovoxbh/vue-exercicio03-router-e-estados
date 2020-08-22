<template>
    <div>
        <p>{{ item.name }} por apenas R$ {{ item.price }} cada {{ item.unit }}.</p>
    </div>
</template>

<script>
    export default {
        name: 'ProductItem',
        props: {
            item: Object
        }
    };
</script>
