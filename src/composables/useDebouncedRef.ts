// src/composables/useDebouncedRef.ts
import { ref, type Ref, watch, onBeforeUnmount } from 'vue'

export interface UseDebouncedRefReturn<T> {
    /** Reactive source value you bind to inputs (immediate updates) */
    source: Ref<T>
    /** Debounced value that updates after the delay */
    debounced: Ref<T>
    /** Cancel any pending debounce timer */
    cancel: () => void
    /** Immediately flush pending value to debounced (and clear timer) */
    flush: () => void
    /** Replace delay at runtime (optional) */
    setDelay: (ms: number) => void
}

/**
 * useDebouncedRef
 *
 * Returns a pair of refs: `source` (immediate) and `debounced` (updates after delay).
 * Also returns control helpers: cancel, flush, setDelay.
 *
 * Example:
 * const { source, debounced, flush } = useDebouncedRef('', 350)
 * // bind input to source; watch debounced for side-effects (API, store commit)
 */
export function useDebouncedRef<T = any>(initial: T, delay = 300): UseDebouncedRefReturn<T> {
    const source = ref<T>(initial) as Ref<T>
    const debounced = ref<T>(initial) as Ref<T>

    let timer: ReturnType<typeof setTimeout> | null = null
    let currentDelay = Math.max(0, Math.floor(delay))

    function clearTimer() {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
    }

    function schedule(val: T) {
        clearTimer()
        timer = setTimeout(() => {
            debounced.value = val
            timer = null
        }, currentDelay)
    }

    // watch source and schedule updates to debounced
    const stop = watch(
        source,
        (val) => {
            schedule(val)
        },
        { immediate: false }
    )

    function cancel() {
        clearTimer()
    }

    function flush() {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        debounced.value = source.value
    }

    function setDelay(ms: number) {
        currentDelay = Math.max(0, Math.floor(ms))
        // no immediate effect on pending timer; new timers will use the new delay
    }

    // clean up when component is unmounted
    onBeforeUnmount(() => {
        stop()
        clearTimer()
    })

    return { source, debounced, cancel, flush, setDelay }
}
