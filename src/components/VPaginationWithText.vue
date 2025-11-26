<!-- src/components/VPaginationWithText.vue -->
<template>
    <div class="vpagination-with-text">
        <button type="button" class="prev-text" :disabled="modelValue <= 1" @click="goPrev" aria-label="Previous page">
            Prev
        </button>

        <v-pagination v-model="local" :length="length" :total-visible="totalVisible" class="center-pagination"
            :aria-label="ariaLabel" />

        <button type="button" class="next-text" :disabled="modelValue >= length" @click="goNext" aria-label="Next page">
            Next
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { PropType } from "vue";

const props = defineProps({
    modelValue: { type: Number as PropType<number>, default: 1 },
    length: { type: Number as PropType<number>, required: true },
    totalVisible: { type: Number as PropType<number>, default: 7 },
    ariaLabel: { type: String as PropType<string>, default: "Pagination" },
});
const emit = defineEmits(["update:modelValue"]);

const local = ref(props.modelValue);

watch(
    () => props.modelValue,
    (v) => {
        local.value = v;
    }
);
watch(local, (v) => {
    emit("update:modelValue", v);
});

function goPrev() {
    local.value = Math.max(1, (local.value ?? 1) - 1);
}
function goNext() {
    local.value = Math.min(props.length, (local.value ?? 1) + 1);
}
</script>

<style scoped>
.vpagination-with-text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: nowrap;
    /* prevent wrapping to multiple lines */
    width: 100%;
    /* small vertical padding to match surrounding layout */
    padding: 6px 0;
}

/* ensure the text buttons don't expand and align vertically */
/* Prevent text clipping on Prev / Next in mobile */
.prev-text,
.next-text {
    height: 34px;
    /* FIX 1: force equal stable height */
    line-height: 34px;
    /* FIX 2: center text vertically */
    padding: 0 10px;
    /* FIX 3: avoid shrinking */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
}

/* disabled look */
.prev-text[disabled],
.next-text[disabled] {
    opacity: 0.6;
    color: #9CA3AF;
    cursor: not-allowed;
}

/* force the v-pagination itself to be inline and centered,
   override any Vuetify display that caused line-breaks */
:deep(.center-pagination) {
    display: inline-flex !important;
    align-items: center;
    margin: 0;
    padding: 0;
}

/* ensure the internal numeric buttons don't push the layout to wrap */
:deep(.center-pagination .v-btn) {
    margin: 0 6px;
    min-width: 36px;
    padding: 6px 8px;
}

/* hide the default chevron content for the built-in prev/next
   (we provide our own textual controls) */
:deep(.v-pagination__prev .v-btn__content),
:deep(.v-pagination__next .v-btn__content) {
    display: none;
}

/* ensure the numeric button content stays visible */
:deep(.center-pagination .v-btn__content) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

/* small responsive tweak: if the container is too narrow, allow compact spacing */
@media (max-width: 480px) {
    .vpagination-with-text {
        gap: 4px;
        /* tighter spacing */
        flex-wrap: nowrap;
    }

    :deep(.center-pagination .v-btn) {
        margin: 0 2px;
        min-width: 28px !important;
        /* FIX 4: allow pagination buttons to shrink */
        padding: 4px 6px !important;
        height: 34px !important;
        /* FIX 5: match Prev/Next height */
    }

    .prev-text,
    .next-text {
        height: 34px;
        line-height: 34px;
        padding: 0 8px;
    }
}
</style>
