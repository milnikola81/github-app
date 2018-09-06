<template>
    <v-ons-page>
      <AppToolbar :title="title"/>
    </v-ons-page>
</template>

<script>
import AppToolbar from './components/AppToolbar'

export default{
  components: {
    AppToolbar
  },
  data() {
    return {
      title: 'Github App'
    };
  },
  methods: {
    alert() {
      this.$ons.notification.alert('This is an Onsen UI alert notification test.');
    }
  }
};

</script>
