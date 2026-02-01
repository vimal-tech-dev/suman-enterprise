// src/utils/debounce.ts
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay = 300
) {
  let timer: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
