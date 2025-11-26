<!-- src/components/Pagination.vue -->
<template>
  <nav aria-label="Pagination" class="flex items-center gap-2">
    <button type="button" :disabled="currentPage === 1" @click="prevPage" class="px-3 py-1 rounded border"
      :class="{ 'cursor-not-allowed opacity-60': currentPage === 1 }"
      :style="currentPage === 1 ? { color: disabledColor } : { color: normalColor }" aria-label="Previous page">
      Prev
    </button>

    <template v-for="p in pagesToShow" :key="p.key">
      <button v-if="p.type === 'page'" type="button" @click="onPageClick(p.value)" :class="[
        'px-3 py-1 rounded border',
        { 'font-semibold bg-gray-100': p.value === currentPage }
      ]" :style="p.value === currentPage ? { color: activeColor } : { color: normalColor }"
        :aria-current="p.value === currentPage ? 'page' : undefined">
        {{ p.value }}
      </button>

      <span v-else class="px-2" :style="{ color: mutedColor }" aria-hidden="true">…</span>
    </template>

    <button type="button" :disabled="currentPage === pageCount" @click="nextPage" class="px-3 py-1 rounded border"
      :class="{ 'cursor-not-allowed opacity-60': currentPage === pageCount }"
      :style="currentPage === pageCount ? { color: disabledColor } : { color: normalColor }" aria-label="Next page">
      Next
    </button>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "Pagination",
  props: {
    totalItems: { type: Number, required: true },
    itemsPerPage: { type: Number, required: true },
    modelValue: { type: Number as PropType<number | undefined>, default: 1 },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // explicit colors to override any global button text-color rules
    const normalColor = "#111827"; // dark (equivalent to Tailwind gray-900)
    const activeColor = "#0f172a"; // slightly darker for active
    const disabledColor = "#9CA3AF"; // gray-400
    const mutedColor = "#6B7280"; // gray-500 for ellipsis

    const pageCount = computed(() =>
      Math.max(1, Math.ceil(props.totalItems / props.itemsPerPage))
    );

    const currentPage = computed({
      get: () => {
        const raw = props.modelValue ?? 1;
        return Math.min(Math.max(1, Number(raw)), pageCount.value);
      },
      set: (val: number) => {
        const safe = Math.min(Math.max(1, Number(val)), pageCount.value);
        emit("update:modelValue", safe);
      },
    });

    function changePage(val?: number) {
      const base = Number(val ?? currentPage.value);
      const to = Math.min(Math.max(1, Math.round(base)), pageCount.value);
      currentPage.value = to;
    }

    function prevPage() {
      changePage((currentPage.value ?? 1) - 1);
    }

    function nextPage() {
      changePage((currentPage.value ?? 1) + 1);
    }

    function onPageClick(val?: number) {
      changePage(val ?? currentPage.value);
    }

    const pagesToShow = computed(() => {
      const total = pageCount.value;
      const cur = currentPage.value;
      const delta = 2;
      const range: Array<{ type: string; value?: number; key: string }> = [];
      const visible = new Set<number>();

      visible.add(1);
      visible.add(total);
      for (let i = cur - delta; i <= cur + delta; i++) {
        if (i >= 1 && i <= total) visible.add(i);
      }

      const sorted = Array.from(visible).sort((a, b) => a - b);
      for (let i = 0; i < sorted.length; i++) {
        const page = sorted[i];
        if (page === undefined) continue;
        range.push({ type: "page", value: page, key: `p-${page}` });
        const next = sorted[i + 1];
        if (typeof next === "number" && next > page + 1) {
          range.push({ type: "ellipsis", key: `e-${page}` });
        }
      }
      return range;
    });

    return {
      pageCount,
      currentPage,
      changePage,
      pagesToShow,
      prevPage,
      nextPage,
      onPageClick,
      // expose colors for template bindings
      normalColor,
      activeColor,
      disabledColor,
      mutedColor,
    };
  },
});
</script>

<style scoped></style>
