/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import PouchDB from 'pouchdb';
import RelPouch from 'relational-pouch';
import FindPouch from 'pouchdb-find';
import { v4 as uuidv4 } from 'uuid';

import router from '../router';

PouchDB.plugin(RelPouch);
PouchDB.plugin(FindPouch);

// let timeEntriesDB = new PouchDB('timeEntries');
// let projectsDB = new PouchDB('projects');
// PouchDB.debug.enable('*');

let db = new PouchDB('hourTracking');
db.setSchema([
  {
    singular: 'timeEntry',
    plural: 'timeEntries',
    relations: {
      project: {belongsTo: 'project'}
    }
  },
  {
    singular: 'project',
    plural: 'projects',
    relations: {
      timeEntries: {hasMany: 'timeEntry'}
    }
  }
]);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timeEntries: [],
    projects: []
  },
  getters: {
    getProjects (state) {
      return state.projects.map((project) => {
        return {
          label: project.name,
          code: project.id
        };
      });
    }
  },
  mutations: {
    setTimeEntries (state, payload) {
      state.timeEntries = payload
    },
    setProjects (state, payload) {
      state.projects = payload
    }
  },
  actions: {
    async readTimeEntries ({ commit }) {
      // const docs = await timeEntriesDB.allDocs({
      //   include_docs: true
      // });
      const docs = await db.rel.find('timeEntry');
      console.log(docs)
      commit('setTimeEntries', docs.timeEntries);
    },
    async createTimeEntry ({}, payload) {
      try {
        // const res = await timeEntriesDB.put({ _id: uuidv4(), ...payload });
        const res = await db.rel.save('timeEntry', {
          ...payload
        });
        console.log('success', res);
        router.push({ name: 'HoursLog' });
      } catch (err) {
        console.error(err);
      }
    },
    async readProjects ({ commit }) {
      // const docs = await projectsDB.allDocs({
      //   include_docs: true
      // });
      const docs = await db.rel.find('project');
      console.log(docs.projects)
      commit('setProjects', docs.projects);
    },
    async createProject ({}, payload) {
      try {
        // const res = await projectsDB.put({ _id: uuidv4(), ...payload });
        const res = await db.rel.save('project', {
          ...payload
        })
        router.push({ name: 'Projects' });
      } catch (err) {
        console.error(err);
      }
    }
  },
  modules: {
  }
});
