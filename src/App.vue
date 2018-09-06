<template>
    <v-ons-page>
      <AppToolbar />
      <div class="center">
        <AppSearch :query.sync="query" :placeholder="placeholder"/>
      </div>
      <v-ons-list>
        <v-ons-list-header>
          Repositories of: {{query}}
        </v-ons-list-header>
        <v-ons-list-item v-for="(repo, index) in repos" :key="index">
          <div class="left">
            <img class="list-item_thumbnail" :src="repo.owner.avatar_url" alt="" height="30">
          </div>
          <div class="center">
            <span class="list-item_title">{{repo.name}}</span>
            <span class="list-item_subtitle">{{repo.description}}</span>
          </div>
        </v-ons-list-item>
      </v-ons-list>
    </v-ons-page>
</template>

<script>
import AppToolbar from './components/AppToolbar'
import AppSearch from './components/AppSearch'
import { gitHub } from './services/gitHub'

import debounce from 'lodash/debounce'

export default {
  components: {
    AppToolbar,
    AppSearch
  },
  data() {
    return {
      title: 'Github App',
      query: '',
      placeholder: 'Search...',
      repos: ''
    };
  },
  methods: {
    alert() {
      this.$ons.notification.alert('This is an Onsen UI alert notification test.');
    }
  },
  watch: {
    query: debounce(function(newValue) {
      gitHub.getRepos(newValue)
        .then((response) => {
          this.repos = response.data
          console.log(response.data)
        })
    }, 500)
  }
};

</script>
