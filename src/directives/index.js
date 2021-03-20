export const imgerror = {
  inserted(el, bindings) {
    el.onerror = function() {
      el.src = bindings.value
    }
  }
}

export const color = {
  inserted(el, bindings) {
    el.style.color = bindings.value
  }
}
