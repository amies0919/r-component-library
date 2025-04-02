type CallBackFunction = (...args: unknown[]) => void

export function throttle(
  func: CallBackFunction,
  wait: number
): CallBackFunction {
  let lastTime = 0
  let timeout: NodeJS.Timeout
  return (...args) => {
    const now = Date.now()
    if (now - lastTime >= wait) {
      func(args)
      lastTime = now
    } else {
      clearTimeout(timeout)
      timeout = setTimeout(
        () => {
          func(args)
        },
        wait - (now - lastTime)
      )
    }
  }
}

export function debounce(
  func: CallBackFunction,
  wait: number
): CallBackFunction {
  let timeout: NodeJS.Timeout
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      func(args)
    }, wait)
  }
}
