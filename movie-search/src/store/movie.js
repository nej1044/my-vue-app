export default {
    namespaced: true,
    state: () => ({
        movies: []
    }),
    getters: {},
    mutations: {
        resetMovies(state){
            state.movies = []
        }
    },
    actions: {
        searchMovies() {

        }
    }
}