<template>
    <v-ons-input
        @input="$emit('update:query', $event.target.value)"
        :placeholder="placeholder"
        :value="query">
    </v-ons-input>
</template>

<script>
export default {
    props: [
        'query',
        'placeholder'
    ]
}
</script>



