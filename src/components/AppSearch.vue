<template>
    <div style="text-align: center">
        <v-ons-search-input
            @input="$emit('update:query', $event.target.value)"
            :placeholder="placeholder"
            :value="query">
        </v-ons-search-input>
    </div>
</template>

<script>
export default {
    props: [
        'query',
        'placeholder'
    ]
}
</script>



