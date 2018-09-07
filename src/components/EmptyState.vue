<template>
    <v-ons-card>
        <img src="https://pbs.twimg.com/media/Bt5MoW0CIAE9Fda.jpg" alt="" width="100%">
        <div class="content" style="text-align: center">
            {{message}}
        </div>
    </v-ons-card>
</template>

<script>
import pluralize from 'pluralize'

export default {
    props: ['type'],
    data() {
        return {
            message: `There are no ${pluralize(this.type)} here`
        }
    }
}
</script>
