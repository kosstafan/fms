<template>
    <div class="search">
        <div class="search-header">
            <div class="search__title">Поиск</div>
            <div class="search__icon">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2ZM0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7Z"
                        fill="#C0C0C0"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.293 15.7071L10.293 11.7071L11.7072 10.2929L15.7072 14.2929C16.0977 14.6834 16.0977 15.3166 15.7072 15.7071C15.3167 16.0976 14.6835 16.0976 14.293 15.7071Z"
                        fill="#C0C0C0"
                    />
                </svg>
            </div>
            <SearchInput
                @input="sort"
                v-model="searchText"
                :placeholder="'По названию и коду подразделения'"
            />
        </div>
        <SearchResult />
    </div>
</template>
<script>
    import SearchInput from "./UI/SearchInput.vue";
    import SearchResult from "./searchResult.vue";
    export default {
        components: {
            SearchInput,
            SearchResult,
        },
        data: () => {
            return {
                searchText: "",
            };
        },
        created() {
            this.sort();
        },
        watch: {
            $route(to, from) {
                this.searchText = "";
                this.$store.dispatch("resetRow");
                if (this.$route.params.id) {
                    this.sort();
                }
            },
        },
        methods: {
            sort(event) {
                this.$store.dispatch("sortFms", {
                    type: this.$route.params.id,
                    search: this.searchText,
                });
                this.$store.dispatch("resetRow");
            },
        },
    };
</script>

<style lang="scss" scoped>
    .search-header {
        display: flex;
        align-items: center;
        margin-bottom: 52px;
    }
    .search__title {
        font-size: 20px;
        line-height: 28px;
        color: #2f353d;
        font-weight: 700;
        margin-right: 11px;
    }
    .search__icon {
        margin-right: 19px;
        display: flex;
    }
</style>
