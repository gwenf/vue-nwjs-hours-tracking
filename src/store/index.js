import Vue from 'vue';
import Vuex from 'vuex';
import PouchDB from 'pouchdb';
import { v4 as uuidv4 } from 'uuid';

import router from '../router'

var timeEntriesDB = new PouchDB('timeEntries');
var projectsDB = new PouchDB('projects');
// PouchDB.debug.enable('*');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timeEntries: [],
    projects: []
  },
  mutations: {
    setTimeEntries(state, payload) {
      state.timeEntries = payload.map((entry) => {
        return entry.doc
      })
    },
    setProjects(state, paylod) {
      state.projects = payload.map((entry) => {
        return entry.doc
      })
    }
  },
  actions: {
    async readTimeEntries({ commit }) {
      const docs = await timeEntriesDB.allDocs({
        include_docs: true
      })
      commit('setTimeEntries', docs.rows)
    },
    async createTimeEntry({}, payload) {
      try {
        const res = await timeEntriesDB.put({_id: uuidv4(), ...payload})
        console.log('success', res)
        router.push({ name: 'HoursLog' })
      } catch(err) {
        console.error(err)
      }
    },
    async readProjects({ commit }) {
      const docs = await projectsDB.allDocs({
        include_docs: true
      })
      commit('setProjects', docs.rows || [])
    },
    async createProject({}, payload) {
      try {
        const res = await projectsDB.put({_id: uuidv4(), ...payload})
        console.log('success', res)
        router.push({ name: 'Projects' })
      } catch(err) {
        console.error(err)
      }
    }
  },
  modules: {
  }
});
