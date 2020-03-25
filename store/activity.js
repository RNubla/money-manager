// import {activitiesCollection} from '@/services/firebase'

// export const state = () => ({
//     activityList: []
// })

// export const mutations = {
//     ADD_ACT: (state, { amount, source, purchName }) => {
//         state.activityList.push(
//             amount,
//             source,
//             purchName
//         )
//     },
//     SET(state, {actList}){
//         state.activityList = actList
//     }
// }

// export const actions = {
//     async fetchFromDB ({ commit }){
//         const collectionRef = await activitiesCollection()
//         try {
//             const actList = []
//             const snapshots = await collectionRef.get()
//             snapshots.forEach((doc) => {
//                 const docData = doc.data()
//                 actList.push({
//                     ...docData,
//                     id: doc.id
//                 })
//             })
//             commit('set', {actList})
//         } catch (error) {
//             this.$toast.error(error.message)
//         }
//     }
// }