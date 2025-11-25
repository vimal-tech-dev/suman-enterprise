// src/stores/productStore.ts
import { ref } from 'vue'
import { defineStore } from 'pinia'
import products from '@/data/products'
import type { Product } from '@/data/products'

export const useProductStore = defineStore('product', () => {
    const productList = ref<Product[]>(products)
    const compareList = ref<Product[]>([])

    function addToCompare(product: Product) {
        console.log("✅ Adding to compare:", product);
        if (!compareList.value.find(p => p.id === product.id)) {
            compareList.value.push(product)
        }
    }

    function removeFromCompare(productId: number) {
        compareList.value = compareList.value.filter(p => p.id !== productId)
    }

    function clearCompare() {
        compareList.value = []
    }

    return {
        productList,
        compareList,
        addToCompare,
        removeFromCompare,
        clearCompare
    }
})
