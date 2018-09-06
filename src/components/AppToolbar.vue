<template>
    <v-ons-toolbar :title="title">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            {{title}}
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </v-ons-toolbar>
</template>

<script>
export default {
    data() {
        return {
            title: 'Github App'
        }
    }
}
</script>

