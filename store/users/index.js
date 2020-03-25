import Cookie from "js-cookie";
import { auth, activitiesCollection } from "@/services/firebase";

export const state = () => ({
  user: null,
  docData: [],
  isLoggedIn: false
});

export const mutations = {
  // ...vuexfireMutations,
  SET_USER: (state, account) => {
    state.user = account;
    // state.isLoggedIn = true
  },
  REMOVE_USER:(state, account) => {
    state.user = account;
  },
  SET_DATA: (state, { amountMoney, source, name }) => {
    state.docData.push({ amountMoney, source, name });
    // state.docData = data
  },
};

export const actions = {
  async login({ commit }, account) {
    try {
      // logges the user
      await auth.signInWithEmailAndPassword(account.email, account.password);

      // get json webtoken from firebase
      const token = await auth.currentUser.getIdToken();
      const { email, uid } = auth.currentUser;

      // set jwt to cookie
      Cookie.set("access_token", token);

      // set user locally
      commit("SET_USER", { email, uid });
    } catch (error) {
      alert(error);
    }
  },
  logout({commit}){
    auth.signOut().then(() => {
      commit('SET_USER', null)
      Cookie.remove("access_token")
      // this.$router.push('/login')
      location.href = "/login"
    }).catch(err=>{
      commit('SET_USER', null)
    })
    // auth.logout()
    // Cookie.remove("access_token")
    
    // location.href = "/login"

  },
  //This adds data to firebase and commit to SET_DATA
  addEntry({ commit }, payload) {
    let act = activitiesCollection
      .add({
        amountMoney: payload.amountMoney,
        source: payload.source,
        name: payload.name
      })
      .then(doc => {
        console.log("Document written with ID: ", doc.id);
      })
      .catch(error => {
        console.log(error);
      });
      commit("SET_DATA", payload);
  },
  
  // retrieve data from firebase and commit to SET_DATA
  async getData({ commit }) {
    let actCol = activitiesCollection;
    let allDoc = actCol
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          commit("SET_DATA", doc.data());
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
};
export const getters = {
  docData(state) {
    return state.docData;
  },
  userSate: (state) =>{
    return state.user
  },
  currentUser: (state, getters) => {
    return getters.userSate
  }
};
