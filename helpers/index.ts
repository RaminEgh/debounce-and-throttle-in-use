export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

export function throttle<T extends (...args: any[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let lastInvoke: number | null = null

  return (...args: Parameters<T>) => {
    if (lastInvoke === null || lastInvoke + delay < Date.now()) {
      lastInvoke = Date.now()
      fn(...args)
    }
  }
}
