export function buildPaginationQuery(page: number, itemsPerPage: number) {
    const p = Math.max(1, Number(page) || 1)
    const per = Math.max(1, Number(itemsPerPage) || 10)
    const offset = (p - 1) * per
    return { offset, limit: per }
}


// Use example (pseudo):
// const { offset, limit } = buildPaginationQuery(page, per)
// fetch(`/api/products?search=${encodeURIComponent(q)}&offset=${offset}&limit=${limit}`)


// -----------------------------------------------------------------------------
// Integration notes — what I changed and why (short summary):
// 1) Centralized UI state via Pinia store (src/stores/uiStore.ts) to avoid prop-drilling and
// keep search/page/compare state consistent across existing components in the project.
// 2) NavBar now writes into the store (setSearch) so any view reading the store reacts instantly.
// 3) Pagination component remains generic; GalleryView binds it to the store's page value using v-model.
// 4) GalleryView includes both client-side example and clear comments where to wire server-side fetches.
// 5) Added a small helper for building offset/limit for server APIs.
// 6) Buttons that modify compare list use store.toggleCompare to prevent duplication and ensure single source of truth.


// -----------------------------------------------------------------------------
// Quick setup checklist to avoid conflicts with your existing project:
// -----------------------------------------------------------------------------
// 1) Install Pinia (if not already): npm install pinia
// 2) Ensure your main.ts registers Pinia with the app:
// import { createPinia } from 'pinia'
// const pinia = createPinia()
// app.use(pinia)
// 3) If you already have a store named 'ui', rename this store or merge carefully.
// 4) Confirm router routes for /gallery and /compare are registered and do not conflict with existing names.
// 5) If you use a global CSS/tailwind config, adapt classes inside components to match tokens.
// 6) If your project uses server-side pagination, wire fetch calls in GalleryView and return `total_count` metadata.


// -----------------------------------------------------------------------------
// Next options I can implement now (I will act immediately — no waiting):
// - Add a CompareView.vue that reads ui.compareIds and renders a printable/exportable table (CSV & PDF export).
// - Convert sample client-side data to a real server fetch with axios and show example API integration.
// - Provide automated unit tests (Vitest + Vue Testing Library) for Pagination and NavBar.
// - Adjust styles to match your project's design tokens — provide CSS/Tailwind variables.


// Pick any of the above and I'll update this canvas with the implementation.