function wrapInner(el, disabled) {
  const wrapper = document.createElement('fieldset');
  wrapper.disabled = disabled

  //先插入一个空的fieldset标签到第一个元素之前
  el.insertBefore(wrapper, el.firstElementChild);
  const children = el.children,
    len = children.length;
  for (let i = 1; i < len; i++) {
    wrapper.insertBefore(children[1], null);
  }
}


export default {
  inserted(el, {
    value
  }) {
    if (el.tagName.toLocaleLowerCase() === "form") {
      wrapInner(el, value)
    }
    Array.from(el.querySelectorAll("form")).forEach(child => {
      wrapInner(child, value)
    })
  }
};
