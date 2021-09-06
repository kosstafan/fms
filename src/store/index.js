import { createStore } from "vuex";
import { getFmsItems } from "../services/fms";

export default createStore({
    state: {
        fms: {},
        loading: false,
        sorted: [],
        currentRow: 1,
    },
    getters: {
        currentRow: (state) => state.currentRow,
        getLoading: (state) => state.loading,
        getAllFms: (state) => state.fms,
        getFmsByType: (state) => (type) => {
            return state.fms[type].items;
        },
        getSorted: (state) => state.sorted,
    },
    mutations: {
        setFms(state, data) {
            state.fms = data;
        },
        setLoading(state, payload) {
            state.loading = payload;
        },
        setSorted(state, payload) {
            state.sorted = payload;
        },
        setCurrentRowByStep(state, to) {
            if (to == "prew" && state.currentRow > 1) {
                state.currentRow--;
            }

            if (
                to == "next" &&
                state.currentRow < Math.ceil(state.sorted.length / 10)
            ) {
                state.currentRow++;
            }
        },
        setCurrentRowByRow(state, row) {
            state.currentRow = row;
        },
        setDefaultRow(state) {
            state.currentRow = 1;
        },
    },
    actions: {
        resetRow({ commit }) {
            commit("setDefaultRow");
        },
        changeRowByRow({ commit }, row) {
            commit("setCurrentRowByRow", row);
        },
        changeRowByStep({ commit }, to) {
            commit("setCurrentRowByStep", to);
        },
        sortFms({ commit, getters }, { type, search }) {
            const sortedFms = getters
                .getFmsByType(type)
                .filter(
                    (item) =>
                        item.data.code.includes(search) ||
                        item.data.name.toLowerCase().includes(search)
                );
            commit("setSorted", sortedFms);
        },
        async getFms({ commit }, type) {
            const url =
                "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fms_unit";
            const token = "8ecfdb051778d4f484e1d3a84626565877322ea2";
            const query = "Моск";

            const options = {
                method: "POST",
                mode: "cors",

                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Token " + token,
                },
                body: JSON.stringify({ query: query, count: 200 }),
            };

            let fetchedItems = [];

            let recivedFms = {};

            commit("setLoading", true);

            if (!type) {
                for (let index = 0; index < 4; index++) {
                    options.body = JSON.stringify({
                        query: query,
                        count: 200,
                        filters: [
                            {
                                type: index,
                            },
                        ],
                    });

                    const response = await fetch(url, options);
                    const result = await response.json();
                    fetchedItems.push(...result.suggestions);
                }
            }

            fetchedItems.forEach((element) => {
                if (!recivedFms[element.data.type]) {
                    recivedFms[element.data.type] = {};
                    recivedFms[element.data.type].items = [];
                    if (element.data.type == 0) {
                        recivedFms[element.data.type].name =
                            "подразделений ФМС";
                    } else if (element.data.type == 1) {
                        recivedFms[element.data.type].name =
                            "подразделений ГУВД или МВД региона";
                    } else if (element.data.type == 2) {
                        recivedFms[element.data.type].name =
                            "подразделений УВД или ОВД района или города";
                    } else if (element.data.type == 3) {
                        recivedFms[element.data.type].name =
                            "подразделений отделения полиции";
                    }
                }

                recivedFms[element.data.type].items.push(element);
            });

            commit("setFms", recivedFms);
            commit("setLoading", false);
        },
    },
    modules: {},
});
