// src/stores/uiStore.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUIStore = defineStore('ui', () => {
    const searchQuery = ref('')
    const page = ref(1)
    const itemsPerPage = ref(12)

    function setSearch(q: string) {
        searchQuery.value = q
        page.value = 1
    }

    function setPage(p: number) {
        page.value = Math.max(1, Math.floor(p))
    }

    return {
        searchQuery,
        page,
        itemsPerPage,
        setSearch,
        setPage
    }
})
