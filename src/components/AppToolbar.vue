<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                Left slot
            </div>
            <div class="center">
                {{title}}
            </div>
            <div class="right">
                Rigth slot
            </div>
        </v-ons-toolbar>
    </v-ons-page>
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

