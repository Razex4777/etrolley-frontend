import fs from 'node:fs';
import path from 'node:path';

const root = 'c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley';

function extractComponent(html, componentName, tag = 'section') {
  const startPattern = new RegExp(`<${tag}[^>]*data-component="${componentName}"[^>]*>`, 'i');
  const startMatch = html.match(startPattern);
  if (!startMatch) return null;
  const startIndex = startMatch.index;
  
  // Find the matching closing tag using a simple scanner
  let depth = 1;
  let currentIndex = startIndex + startMatch[0].length;
  
  const searchStr = html.substring(currentIndex);
  let offset = 0;
  
  while (depth > 0 && offset < searchStr.length) {
    const nextOpen = searchStr.substring(offset).search(new RegExp(`<${tag}\\b`, 'i'));
    const nextClose = searchStr.substring(offset).search(new RegExp(`</${tag}>`, 'i'));
    
    if (nextClose === -1) {
      break;
    }
    
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      offset += nextOpen + 1; // move past '<'
    } else {
      depth--;
      offset += nextClose + 3 + tag.length; // move past '</tag>'
    }
  }
  
  return html.substring(startIndex, startIndex + startMatch[0].length + offset);
}

function stripI18n(html, keepLang) {
  const otherLang = keepLang === 'en' ? 'ar' : 'en';
  
  // 1. Remove the other language blocks entirely
  // Supports class="i18n-block" or class="i18n-block--block"
  const otherPattern = new RegExp(`<span[^>]*class="i18n-block[^"]*"[^>]*lang="${otherLang}"[^>]*>[\\s\\S]*?<\\/span>`, 'gi');
  let cleaned = html.replace(otherPattern, '');
  
  // 2. Unwrap the target language blocks
  const targetPattern = new RegExp(`<span[^>]*class="i18n-block[^"]*"[^>]*lang="${keepLang}"[^>]*>([\\s\\S]*?)<\\/span>`, 'gi');
  cleaned = cleaned.replace(targetPattern, '$1');

  // 3. Clean up the placeholder attributes for lang-specific labels
  // e.g. data-label-en="..." and data-label-ar="..." -> replace with aria-label="..."
  // Also data-label-en -> aria-label on english, data-label-ar -> aria-label on arabic
  const labelPattern = new RegExp(`data-label-${keepLang}="([^"]*)"`, 'gi');
  cleaned = cleaned.replace(labelPattern, 'aria-label="$1"');
  
  // Remove the other language's data labels
  const otherLabelPattern = new RegExp(`data-label-${otherLang}="[^"]*"`, 'gi');
  cleaned = cleaned.replace(otherLabelPattern, '');
  
  // Remove leftover empty spaces in tags
  cleaned = cleaned.replace(/\s\s+/g, ' ');
  cleaned = cleaned.replace(/\s+>/g, '>');
  
  return cleaned;
}

const components = [
  { name: 'navbar', tag: 'header' },
  { name: 'hero', tag: 'section' },
  { name: 'steps', tag: 'section' },
  { name: 'different', tag: 'section' },
  { name: 'services', tag: 'section' },
  { name: 'clients', tag: 'section' },
  { name: 'designs', tag: 'section' },
  { name: 'support', tag: 'section' },
  { name: 'footer', tag: 'footer' }
];

function run() {
  const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const indexArHtml = fs.readFileSync(path.join(root, 'index-ar.html'), 'utf8');
  
  // Create folders if they don't exist
  components.forEach(comp => {
    const dir = path.join(root, 'src/components', comp.name);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Extract from index.html (English base)
    const enMarkup = extractComponent(indexHtml, comp.name, comp.tag);
    if (enMarkup) {
      const cleanEn = stripI18n(enMarkup, 'en');
      fs.writeFileSync(path.join(dir, `${comp.name}.en.html`), cleanEn, 'utf8');
      console.log(`Extracted ${comp.name}.en.html`);
    } else {
      console.error(`Failed to extract EN ${comp.name}`);
    }
    
    // Extract from index-ar.html (Arabic base)
    const arMarkup = extractComponent(indexArHtml, comp.name, comp.tag);
    if (arMarkup) {
      const cleanAr = stripI18n(arMarkup, 'ar');
      fs.writeFileSync(path.join(dir, `${comp.name}.ar.html`), cleanAr, 'utf8');
      console.log(`Extracted ${comp.name}.ar.html`);
    } else {
      console.error(`Failed to extract AR ${comp.name}`);
    }
  });

  // Let's create the base template src/index.base.html by replacing all components in index.html with markers
  let baseHtml = indexHtml;
  components.forEach(comp => {
    const markup = extractComponent(baseHtml, comp.name, comp.tag);
    if (markup) {
      baseHtml = baseHtml.replace(markup, `<!-- INSERT: ${comp.name} -->`);
    }
  });

  // Replaces the lang attribute on html tag
  baseHtml = baseHtml.replace('<html lang="en">', '<html lang="[LANG]" dir="[DIR]">');
  // Replaces title
  baseHtml = baseHtml.replace('<title>E-Trolley — Your store, ready in a minute</title>', '<title>[TITLE]</title>');
  // Replaces meta description
  baseHtml = baseHtml.replace(/<meta name="description" content="[^"]*"\s*\/?>/i, '<meta name="description" content="[DESCRIPTION]" />');

  fs.writeFileSync(path.join(root, 'src/index.base.html'), baseHtml, 'utf8');
  console.log('Created src/index.base.html');
}

run();
