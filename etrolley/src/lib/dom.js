/**
 * dom.js — tiny DOM helpers (no framework, no bloat).
 */

export const qs = (sel, ctx = document) => ctx.querySelector(sel);
export const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/**
 * Mount a component (HTML string) into a placeholder element.
 * @param {string} selector  data-component selector e.g. '[data-component="navbar"]'
 * @param {string} html      markup string returned by the component template
 */
export function mount(selector, html) {
  const host = qs(selector);
  if (!host) return null;
  host.innerHTML = html;
  return host;
}
