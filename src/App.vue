<template>
    <v-ons-page>
      <app-toolbar>
        <template slot="right">
          <v-ons-button modifier="quiet">
            <v-ons-icon icon="md-settings"></v-ons-icon>
          </v-ons-button>
        </template>
      </app-toolbar>
      <br>
      <div class="center">
        <AppSearch :query.sync="query" :placeholder="placeholder"/>
        <br>
        <v-ons-progress-circular indeterminate v-if="showLoader"></v-ons-progress-circular>
        <v-ons-list>
          <v-ons-list-header>
            Repositories of: {{query}}
          </v-ons-list-header>
          <v-ons-list-item v-for="(repo, index) in repos" :key="index">
            <div class="left">
              <img class="list-item__thumbnail" :src="repo.owner.avatar_url" alt="">
            </div>
            <div class="center">
              <span class="list-item__title">{{repo.name}}</span>
              <span class="list-item__subtitle">{{repo.description}}</span>
            </div>
          </v-ons-list-item>
        </v-ons-list>
        <empty-state v-if="noRepos" :type="type"></empty-state>
        <!-- <empty-state :type="type" v-if="error && error.response.status !== 404"></empty-state> -->
        <no-user v-else-if="query && error && error.response.status === 404"></no-user>
      </div>
      <br>

    </v-ons-page>
</template>

<script>
import AppToolbar from './components/AppToolbar'
import AppSearch from './components/AppSearch'
import EmptyState from './components/EmptyState'
import NoUser from './components/NoUser'

import { gitHub } from './services/gitHub'

import debounce from 'lodash/debounce'

export default {
  components: {
    AppToolbar,
    AppSearch,
    EmptyState,
    NoUser
  },
  data() {
    return {
      title: 'Github App',
      query: '',
      placeholder: 'Search...',
      repos: [],
      showLoader: false,
      type: 'repository',
      error: '',
      noRepos: false
    };
  },
  methods: {
    alert() {
      this.$ons.notification.alert('This is an Onsen UI alert notification test.');
    }
  },
  watch: {
    query: debounce(function(newValue) {
      this.showLoader = true
      gitHub.getRepos(newValue)
        .then((response) => {
          this.repos = response.data
          this.showLoader = false;
          this.error = ''
          if(!this.repos) {
            this.noRepos = true
          }
          console.log(this,noRepos)
          console.log('done')
        })
        .catch((error) => { 
          console.log(error.response.status)
          this.error = error
          this.showLoader = false
          this.repos = []
        })
    }, 500)
  },
};

</script>

