import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Override writeFileSync to make paths relative for local file:// previews
const originalWriteFileSync = fs.writeFileSync;
fs.writeFileSync = function(filePath, content, options) {
  if (typeof content === 'string' && filePath.endsWith('.html')) {
    content = content
      .replaceAll('href="/src/', 'href="src/')
      .replaceAll('src="/src/', 'src="src/')
      .replaceAll('href="/images/', 'href="public/images/')
      .replaceAll('src="/images/', 'src="public/images/')
      .replaceAll('type="module" src="src/assets/js/main.js"', 'src="src/assets/js/main.js"');
  }
  return originalWriteFileSync.call(fs, filePath, content, options);
};

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const indexComponents = [
  'navbar',
  'hero',
  'steps',
  'different',
  'services',
  'clients',
  'designs',
  'support',
  'footer'
];

const aboutComponents = [
  'navbar',
  'about',
  'benefits',
  'faqs',
  'footer'
];

const createStoreComponents = [
  'navbar',
  'createstore'
];

const verificationComponents = [
  'navbar',
  'verification'
];

const registrationComponents = [
  'navbar',
  'registration'
];

const registration2Components = [
  'navbar',
  'registration2'
];

const registration3Components = [
  'navbar',
  'registration3'
];

const loginComponents = [
  'navbar',
  'login'
];

export function compile() {
  // --- 1. Compile index.html and index-ar.html ---
  const indexBase = fs.readFileSync(path.join(root, 'src/index.base.html'), 'utf8');

  // English index.html
  let enIndex = indexBase;
  enIndex = enIndex.replace('[LANG]', 'en');
  enIndex = enIndex.replace('[DIR]', 'ltr');
  enIndex = enIndex.replace('[TITLE]', 'E-Trolley — Your store, ready in a minute');
  enIndex = enIndex.replace('[DESCRIPTION]', 'E-Trolley — Your store will be ready in no more than a minute. The first and largest Qatari platform specialized in e-commerce services.');

  indexComponents.forEach(comp => {
    const compPath = path.join(root, `src/components/${comp}/${comp}.en.html`);
    if (fs.existsSync(compPath)) {
      const compContent = fs.readFileSync(compPath, 'utf8');
      enIndex = enIndex.replace(`<!-- INSERT: ${comp} -->`, compContent);
    }
  });
  fs.writeFileSync(path.join(root, 'index.html'), enIndex, 'utf8');
  console.log('Compiled index.html (English)');

  // Arabic index-ar.html
  let arIndex = indexBase;
  arIndex = arIndex.replace('[LANG]', 'ar');
  arIndex = arIndex.replace('[DIR]', 'rtl');
  arIndex = arIndex.replace('[TITLE]', 'إي ترولي — متجرك الإلكتروني جاهز في دقيقة');
  arIndex = arIndex.replace('[DESCRIPTION]', 'إي ترولي — متجرك الإلكتروني جاهز في أقل من دقيقة. المنصة القطرية الأولى والأكبر المتخصصة في خدمات التجارة الإلكترونية.');

  indexComponents.forEach(comp => {
    const compPath = path.join(root, `src/components/${comp}/${comp}.ar.html`);
    if (fs.existsSync(compPath)) {
      const compContent = fs.readFileSync(compPath, 'utf8');
      arIndex = arIndex.replace(`<!-- INSERT: ${comp} -->`, compContent);
    }
  });
  fs.writeFileSync(path.join(root, 'index-ar.html'), arIndex, 'utf8');
  console.log('Compiled index-ar.html (Arabic)');


  // --- 2. Compile about.html and about-ar.html ---
  if (fs.existsSync(path.join(root, 'src/about.base.html'))) {
    const aboutBase = fs.readFileSync(path.join(root, 'src/about.base.html'), 'utf8');

    // English about.html
    let enAbout = aboutBase;
    enAbout = enAbout.replace('[LANG]', 'en');
    enAbout = enAbout.replace('[DIR]', 'ltr');
    enAbout = enAbout.replace('[TITLE]', 'About Us — E-Trolley');
    enAbout = enAbout.replace('[DESCRIPTION]', 'Welcome to the eTrolley Network Platform! Ideas are transformed into beautiful things by E-Trolley.');

    aboutComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.en.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="index.html#create-store"');
          compContent = compContent.replace('href="index-ar.html"', 'href="about-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="about.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about.html"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create"', 'href="index.html#create"');
        }
        enAbout = enAbout.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'about.html'), enAbout, 'utf8');
    console.log('Compiled about.html (English)');

    // Arabic about-ar.html
    let arAbout = aboutBase;
    arAbout = arAbout.replace('[LANG]', 'ar');
    arAbout = arAbout.replace('[DIR]', 'rtl');
    arAbout = arAbout.replace('[TITLE]', 'من نحن — إي ترولي');
    arAbout = arAbout.replace('[DESCRIPTION]', 'مرحباً بكم في منصة شبكة إي ترولي! تحويل الأفكار إلى أشياء جميلة بواسطة إي ترولي.');

    aboutComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.ar.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="index-ar.html#create-store"');
          compContent = compContent.replace('href="index.html"', 'href="about.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="about-ar.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about-ar.html"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create"', 'href="index-ar.html#create"');
        }
        arAbout = arAbout.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'about-ar.html'), arAbout, 'utf8');
    console.log('Compiled about-ar.html (Arabic)');
  }


  // --- 3. Compile services.html and services-ar.html ---
  const servicesComponents = [
    'navbar',
    'servicepage',
    'footer'
  ];

  if (fs.existsSync(path.join(root, 'src/services.base.html'))) {
    const servicesBase = fs.readFileSync(path.join(root, 'src/services.base.html'), 'utf8');

    // English services.html
    let enServices = servicesBase;
    enServices = enServices.replace('[LANG]', 'en');
    enServices = enServices.replace('[DIR]', 'ltr');
    enServices = enServices.replace('[TITLE]', 'Services — E-Trolley');
    enServices = enServices.replace('[DESCRIPTION]', 'Why Choose E-Trolley For Your Online Store? Create your own online store or app with complete ease.');

    servicesComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.en.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="index.html#create-store"');
          compContent = compContent.replace('href="index-ar.html"', 'href="services-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="services.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about.html"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create"', 'href="index.html#create"');
        }
        enServices = enServices.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'services.html'), enServices, 'utf8');
    console.log('Compiled services.html (English)');

    // Arabic services-ar.html
    let arServices = servicesBase;
    arServices = arServices.replace('[LANG]', 'ar');
    arServices = arServices.replace('[DIR]', 'rtl');
    arServices = arServices.replace('[TITLE]', 'خدماتنا — إي ترولي');
    arServices = arServices.replace('[DESCRIPTION]', 'لماذا تختار إي ترولي لمتجرك الإلكتروني؟ أنشئ متجرك الإلكتروني أو تطبيقك الخاص بكل سهولة.');

    servicesComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.ar.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="index-ar.html#create-store"');
          compContent = compContent.replace('href="index.html"', 'href="services.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="services-ar.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about-ar.html"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create"', 'href="index-ar.html#create"');
        }
        arServices = arServices.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'services-ar.html'), arServices, 'utf8');
    console.log('Compiled services-ar.html (Arabic)');
  }


  // --- 4. Compile blog.html and blog-ar.html ---
  const blogComponents = [
    'navbar',
    'blogpage',
    'footer'
  ];

  if (fs.existsSync(path.join(root, 'src/blog.base.html'))) {
    const blogBase = fs.readFileSync(path.join(root, 'src/blog.base.html'), 'utf8');

    // English blog.html
    let enBlog = blogBase;
    enBlog = enBlog.replace('[LANG]', 'en');
    enBlog = enBlog.replace('[DIR]', 'ltr');
    enBlog = enBlog.replace('[TITLE]', 'Blog — E-Trolley');
    enBlog = enBlog.replace('[DESCRIPTION]', 'Read the latest insights on e-commerce, digital marketing, SEO, and technology from the E-Trolley team.');

    blogComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.en.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="index.html#create-store"');
          compContent = compContent.replace('href="index-ar.html"', 'href="blog-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="blog.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about.html"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create"', 'href="index.html#create"');
        }
        enBlog = enBlog.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'blog.html'), enBlog, 'utf8');
    console.log('Compiled blog.html (English)');

    // Arabic blog-ar.html
    let arBlog = blogBase;
    arBlog = arBlog.replace('[LANG]', 'ar');
    arBlog = arBlog.replace('[DIR]', 'rtl');
    arBlog = arBlog.replace('[TITLE]', 'المدونة — إي ترولي');
    arBlog = arBlog.replace('[DESCRIPTION]', 'اقرأ أحدث المقالات حول التجارة الإلكترونية والتسويق الرقمي وتحسين محركات البحث والتكنولوجيا من فريق إي ترولي.');

    blogComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.ar.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="index-ar.html#create-store"');
          compContent = compContent.replace('href="index.html"', 'href="blog.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="blog-ar.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about-ar.html"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create"', 'href="index-ar.html#create"');
        }
        arBlog = arBlog.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'blog-ar.html'), arBlog, 'utf8');
    console.log('Compiled blog-ar.html (Arabic)');
  }

  // --- 5. Compile designs.html and designs-ar.html ---
  const designsComponents = [
    'navbar',
    'designspage',
    'footer'
  ];

  if (fs.existsSync(path.join(root, 'src/designs.base.html'))) {
    const designsBase = fs.readFileSync(path.join(root, 'src/designs.base.html'), 'utf8');

    // English designs.html
    let enDesigns = designsBase;
    enDesigns = enDesigns.replace('[LANG]', 'en');
    enDesigns = enDesigns.replace('[DIR]', 'ltr');
    enDesigns = enDesigns.replace('[TITLE]', 'Distinctive Designs — E-Trolley');
    enDesigns = enDesigns.replace('[DESCRIPTION]', 'Explore our portfolio and distinctive e-commerce store designs built for E-Trolley clients.');

    designsComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.en.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="index.html#create-store"');
          compContent = compContent.replace('href="index-ar.html"', 'href="designs-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="designs.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about.html"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create"', 'href="index.html#create"');
        }
        enDesigns = enDesigns.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'designs.html'), enDesigns, 'utf8');
    console.log('Compiled designs.html (English)');

    // Arabic designs-ar.html
    let arDesigns = designsBase;
    arDesigns = arDesigns.replace('[LANG]', 'ar');
    arDesigns = arDesigns.replace('[DIR]', 'rtl');
    arDesigns = arDesigns.replace('[TITLE]', 'التصاميم المميزة — إي ترولي');
    arDesigns = arDesigns.replace('[DESCRIPTION]', 'استكشف أعمالنا والتصاميم المميزة لمتاجر التجارة الإلكترونية التي قمنا بإنشائها لعملاء إي ترولي.');

    designsComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.ar.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="index-ar.html#create-store"');
          compContent = compContent.replace('href="index.html"', 'href="designs.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="designs-ar.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about-ar.html"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create"', 'href="index-ar.html#create"');
        }
        arDesigns = arDesigns.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'designs-ar.html'), arDesigns, 'utf8');
    console.log('Compiled designs-ar.html (Arabic)');
  }

  // --- 6. Compile faqs.html and faqs-ar.html ---
  const faqsPageComponents = [
    'navbar',
    'faqs',
    'footer'
  ];

  if (fs.existsSync(path.join(root, 'src/faqs.base.html'))) {
    const faqsBase = fs.readFileSync(path.join(root, 'src/faqs.base.html'), 'utf8');

    // English faqs.html
    let enFaqs = faqsBase;
    enFaqs = enFaqs.replace('[LANG]', 'en');
    enFaqs = enFaqs.replace('[DIR]', 'ltr');
    enFaqs = enFaqs.replace('[TITLE]', 'FAQs — E-Trolley');
    enFaqs = enFaqs.replace('[DESCRIPTION]', 'Frequently Asked Questions about E-Trolley platform, creating online stores, and pricing.');

    faqsPageComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.en.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="index.html#create-store"');
          compContent = compContent.replace('href="index-ar.html"', 'href="faqs-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="faqs.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about.html"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create"', 'href="index.html#create"');
        }
        enFaqs = enFaqs.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'faqs.html'), enFaqs, 'utf8');
    console.log('Compiled faqs.html (English)');

    // Arabic faqs-ar.html
    let arFaqs = faqsBase;
    arFaqs = arFaqs.replace('[LANG]', 'ar');
    arFaqs = arFaqs.replace('[DIR]', 'rtl');
    arFaqs = arFaqs.replace('[TITLE]', 'الأسئلة الشائعة — إي ترولي');
    arFaqs = arFaqs.replace('[DESCRIPTION]', 'الأسئلة الشائعة حول منصة إي ترولي، إنشاء المتاجر الإلكترونية، والأسعار.');

    faqsPageComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.ar.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="index-ar.html#create-store"');
          compContent = compContent.replace('href="index.html"', 'href="faqs.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="faqs-ar.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about-ar.html"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create"', 'href="index-ar.html#create"');
        }
        arFaqs = arFaqs.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'faqs-ar.html'), arFaqs, 'utf8');
    console.log('Compiled faqs-ar.html (Arabic)');
  }

  // --- 7. Compile prices.html and prices-ar.html ---
  const pricesPageComponents = [
    'navbar',
    'pricespage',
    'footer'
  ];

  if (fs.existsSync(path.join(root, 'src/prices.base.html'))) {
    const pricesBase = fs.readFileSync(path.join(root, 'src/prices.base.html'), 'utf8');

    // English prices.html
    let enPrices = pricesBase;
    enPrices = enPrices.replace('[LANG]', 'en');
    enPrices = enPrices.replace('[DIR]', 'ltr');
    enPrices = enPrices.replace('[TITLE]', 'Compare Pricing Packages — E-Trolley');
    enPrices = enPrices.replace('[DESCRIPTION]', 'Compare E-Trolley store package pricing options and find the perfect plan with 0% sales commission.');

    pricesPageComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.en.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="index.html#create-store"');
          compContent = compContent.replace('href="index-ar.html"', 'href="prices-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="prices.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about.html"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create"', 'href="index.html#create"');
        }
        enPrices = enPrices.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'prices.html'), enPrices, 'utf8');
    console.log('Compiled prices.html (English)');

    // Arabic prices-ar.html
    let arPrices = pricesBase;
    arPrices = arPrices.replace('[LANG]', 'ar');
    arPrices = arPrices.replace('[DIR]', 'rtl');
    arPrices = arPrices.replace('[TITLE]', 'مقارنة باقات الأسعار — إي ترولي');
    arPrices = arPrices.replace('[DESCRIPTION]', 'قارن باقات أسعار إنشاء المتاجر من إي ترولي واختر الباقة الأنسب لمشروعك مع عمولة 0% على المبيعات.');

    pricesPageComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.ar.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="index-ar.html#create-store"');
          compContent = compContent.replace('href="index.html"', 'href="prices.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="prices-ar.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about-ar.html"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create"', 'href="index-ar.html#create"');
        }
        arPrices = arPrices.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'prices-ar.html'), arPrices, 'utf8');
    console.log('Compiled prices-ar.html (Arabic)');
  }

  // --- 8. Compile contact.html and contact-ar.html ---
  const contactComponents = [
    'navbar',
    'contact',
    'footer'
  ];

  if (fs.existsSync(path.join(root, 'src/contact.base.html'))) {
    const contactBase = fs.readFileSync(path.join(root, 'src/contact.base.html'), 'utf8');

    // English contact.html
    let enContact = contactBase;
    enContact = enContact.replace('[LANG]', 'en');
    enContact = enContact.replace('[DIR]', 'ltr');
    enContact = enContact.replace('[TITLE]', 'Contact Us — E-Trolley');
    enContact = enContact.replace('[DESCRIPTION]', 'Contact E-Trolley specialized in e-commerce services in Qatar. We are ready to help you launch your online store or app.');

    contactComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.en.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="index.html#create-store"');
          compContent = compContent.replace('href="index-ar.html"', 'href="contact-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="contact.html"');
          // Set Contact Us link as active
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
          compContent = compContent.replace('href="contact.html" class="nav__link"', 'href="contact.html" class="nav__link is-active"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about.html"');
          compContent = compContent.replaceAll('href="#create"', 'href="index.html#create"');
        }
        enContact = enContact.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'contact.html'), enContact, 'utf8');
    console.log('Compiled contact.html (English)');

    // Arabic contact-ar.html
    let arContact = contactBase;
    arContact = arContact.replace('[LANG]', 'ar');
    arContact = arContact.replace('[DIR]', 'rtl');
    arContact = arContact.replace('[TITLE]', 'اتصل بنا — إي ترولي');
    arContact = arContact.replace('[DESCRIPTION]', 'تواصل مع إي ترولي المتخصصة في خدمات التجارة الإلكترونية في قطر. نحن جاهزون لمساعدتك في إطلاق متجرك أو تطبيقك.');

    contactComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.ar.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="index-ar.html#create-store"');
          compContent = compContent.replace('href="index.html"', 'href="contact.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="contact-ar.html"');
          // Set Contact Us link as active
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
          compContent = compContent.replace('href="contact-ar.html" class="nav__link"', 'href="contact-ar.html" class="nav__link is-active"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about-ar.html"');
          compContent = compContent.replaceAll('href="#create"', 'href="index-ar.html#create"');
        }
        arContact = arContact.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'contact-ar.html'), arContact, 'utf8');
    console.log('Compiled contact-ar.html (Arabic)');
  }

  // --- 9. Compile create-store.html and create-store-ar.html ---
  if (fs.existsSync(path.join(root, 'src/create-store.base.html'))) {
    const createStoreBase = fs.readFileSync(path.join(root, 'src/create-store.base.html'), 'utf8');

    // English create-store.html
    let enCreateStore = createStoreBase;
    enCreateStore = enCreateStore.replace('[LANG]', 'en');
    enCreateStore = enCreateStore.replace('[DIR]', 'ltr');
    enCreateStore = enCreateStore.replace('[TITLE]', 'Create A New Store — E-Trolley');
    enCreateStore = enCreateStore.replace('[DESCRIPTION]', 'Fill out your phone number to create and manage your own store through a special control panel.');

    createStoreComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.en.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="create-store.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="create-store-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="create-store.html"');
          // Set Create a store CTA link as active
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
          compContent = compContent.replace('href="create-store.html" class="nav__cta"', 'href="create-store.html" class="nav__cta is-active"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about.html"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create"', 'href="create-store.html"');
        }
        enCreateStore = enCreateStore.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'create-store.html'), enCreateStore, 'utf8');
    console.log('Compiled create-store.html (English)');

    // Arabic create-store-ar.html
    let arCreateStore = createStoreBase;
    arCreateStore = arCreateStore.replace('[LANG]', 'ar');
    arCreateStore = arCreateStore.replace('[DIR]', 'rtl');
    arCreateStore = arCreateStore.replace('[TITLE]', 'أنشئ متجرك الإلكتروني — إي ترولي');
    arCreateStore = arCreateStore.replace('[DESCRIPTION]', 'أدخل رقم هاتفك لإنشاء متجرك الخاص وإدارته من خلال لوحة تحكم مميزة.');

    createStoreComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.ar.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="create-store-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="create-store.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="create-store-ar.html"');
          // Set Create a store CTA link as active
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
          compContent = compContent.replace('href="create-store-ar.html" class="nav__cta"', 'href="create-store-ar.html" class="nav__cta is-active"');
        } else if (comp === 'footer') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#about"', 'href="about-ar.html"');
          compContent = compContent.replaceAll('href="#create"', 'href="create-store-ar.html"');
        }
        arCreateStore = arCreateStore.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'create-store-ar.html'), arCreateStore, 'utf8');
    console.log('Compiled create-store-ar.html (Arabic)');
  }

  // --- 10. Compile verification.html and verification-ar.html ---
  if (fs.existsSync(path.join(root, 'src/verification.base.html'))) {
    const verificationBase = fs.readFileSync(path.join(root, 'src/verification.base.html'), 'utf8');

    // English verification.html
    let enVerify = verificationBase;
    enVerify = enVerify.replace('[LANG]', 'en');
    enVerify = enVerify.replace('[DIR]', 'ltr');
    enVerify = enVerify.replace('[TITLE]', 'Verification — E-Trolley');
    enVerify = enVerify.replace('[DESCRIPTION]', 'Enter your code sent to phone number to verify and continue creating your store.');

    verificationComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.en.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="create-store.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="verification-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="verification.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        }
        enVerify = enVerify.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'verification.html'), enVerify, 'utf8');
    console.log('Compiled verification.html (English)');

    // Arabic verification-ar.html
    let arVerify = verificationBase;
    arVerify = arVerify.replace('[LANG]', 'ar');
    arVerify = arVerify.replace('[DIR]', 'rtl');
    arVerify = arVerify.replace('[TITLE]', 'التحقق — إي ترولي');
    arVerify = arVerify.replace('[DESCRIPTION]', 'أدخل كود التحقق المرسل لرقم هاتفك لمتابعة إنشاء متجرك.');

    verificationComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.ar.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="create-store-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="verification.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="verification-ar.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        }
        arVerify = arVerify.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'verification-ar.html'), arVerify, 'utf8');
    console.log('Compiled verification-ar.html (Arabic)');
  }

  // --- 11. Compile registration.html and registration-ar.html ---
  if (fs.existsSync(path.join(root, 'src/registration.base.html'))) {
    const registrationBase = fs.readFileSync(path.join(root, 'src/registration.base.html'), 'utf8');

    // English registration.html
    let enRegister = registrationBase;
    enRegister = enRegister.replace('[LANG]', 'en');
    enRegister = enRegister.replace('[DIR]', 'ltr');
    enRegister = enRegister.replace('[TITLE]', 'Registration — E-Trolley');
    enRegister = enRegister.replace('[DESCRIPTION]', 'Complete registration info to get your e-commerce store up and running in minutes.');

    registrationComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.en.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="create-store.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="registration-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="registration.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        }
        enRegister = enRegister.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'registration.html'), enRegister, 'utf8');
    console.log('Compiled registration.html (English)');

    // Arabic registration-ar.html
    let arRegister = registrationBase;
    arRegister = arRegister.replace('[LANG]', 'ar');
    arRegister = arRegister.replace('[DIR]', 'rtl');
    arRegister = arRegister.replace('[TITLE]', 'التسجيل — إي ترولي');
    arRegister = arRegister.replace('[DESCRIPTION]', 'أكمل معلومات التسجيل ليصبح متجرك الإلكتروني جاهزاً خلال دقائق.');

    registrationComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.ar.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="create-store-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="registration.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="registration-ar.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        }
        arRegister = arRegister.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'registration-ar.html'), arRegister, 'utf8');
    console.log('Compiled registration-ar.html (Arabic)');
  }

  // --- 12. Compile registration2.html and registration2-ar.html ---
  if (fs.existsSync(path.join(root, 'src/registration2.base.html'))) {
    const registration2Base = fs.readFileSync(path.join(root, 'src/registration2.base.html'), 'utf8');

    // English registration2.html
    let enRegister2 = registration2Base;
    enRegister2 = enRegister2.replace('[LANG]', 'en');
    enRegister2 = enRegister2.replace('[DIR]', 'ltr');
    enRegister2 = enRegister2.replace('[TITLE]', 'Registration Step 2 — E-Trolley');
    enRegister2 = enRegister2.replace('[DESCRIPTION]', 'Complete registration payment details.');

    registration2Components.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.en.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="create-store.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="registration2-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="registration2.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        }
        enRegister2 = enRegister2.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'registration2.html'), enRegister2, 'utf8');
    console.log('Compiled registration2.html (English)');

    // Arabic registration2-ar.html
    let arRegister2 = registration2Base;
    arRegister2 = arRegister2.replace('[LANG]', 'ar');
    arRegister2 = arRegister2.replace('[DIR]', 'rtl');
    arRegister2 = arRegister2.replace('[TITLE]', 'التسجيل الخطوة 2 — إي ترولي');
    arRegister2 = arRegister2.replace('[DESCRIPTION]', 'أكمل تفاصيل الدفع الخاصة بالتسجيل.');

    registration2Components.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.ar.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="create-store-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="registration2.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="registration2-ar.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        }
        arRegister2 = arRegister2.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'registration2-ar.html'), arRegister2, 'utf8');
    console.log('Compiled registration2-ar.html (Arabic)');
  }

  // --- 13. Compile registration3.html and registration3-ar.html ---
  if (fs.existsSync(path.join(root, 'src/registration3.base.html'))) {
    const registration3Base = fs.readFileSync(path.join(root, 'src/registration3.base.html'), 'utf8');

    // English registration3.html
    let enRegister3 = registration3Base;
    enRegister3 = enRegister3.replace('[LANG]', 'en');
    enRegister3 = enRegister3.replace('[DIR]', 'ltr');
    enRegister3 = enRegister3.replace('[TITLE]', 'Registration Step 3 — E-Trolley');
    enRegister3 = enRegister3.replace('[DESCRIPTION]', 'Complete registration payment details with domain cost added.');

    registration3Components.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.en.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="create-store.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="registration3-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="registration3.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        }
        enRegister3 = enRegister3.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'registration3.html'), enRegister3, 'utf8');
    console.log('Compiled registration3.html (English)');

    // Arabic registration3-ar.html
    let arRegister3 = registration3Base;
    arRegister3 = arRegister3.replace('[LANG]', 'ar');
    arRegister3 = arRegister3.replace('[DIR]', 'rtl');
    arRegister3 = arRegister3.replace('[TITLE]', 'التسجيل الخطوة 3 — إي ترولي');
    arRegister3 = arRegister3.replace('[DESCRIPTION]', 'أكمل تفاصيل الدفع الخاصة بالتسجيل مع إضافة تكلفة الدومين.');

    registration3Components.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.ar.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="create-store-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="registration3.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="registration3-ar.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        }
        arRegister3 = arRegister3.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'registration3-ar.html'), arRegister3, 'utf8');
    console.log('Compiled registration3-ar.html (Arabic)');
  }

  // --- 14. Compile login.html and login-ar.html ---
  if (fs.existsSync(path.join(root, 'src/login.base.html'))) {
    const loginBase = fs.readFileSync(path.join(root, 'src/login.base.html'), 'utf8');

    // English login.html
    let enLogin = loginBase;
    enLogin = enLogin.replace('[LANG]', 'en');
    enLogin = enLogin.replace('[DIR]', 'ltr');
    enLogin = enLogin.replace('[TITLE]', 'Login — E-Trolley');
    enLogin = enLogin.replace('[DESCRIPTION]', 'Login to access your store control panel.');

    loginComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.en.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="create-store.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="login-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="login.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        }
        enLogin = enLogin.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'login.html'), enLogin, 'utf8');
    console.log('Compiled login.html (English)');

    // Arabic login-ar.html
    let arLogin = loginBase;
    arLogin = arLogin.replace('[LANG]', 'ar');
    arLogin = arLogin.replace('[DIR]', 'rtl');
    arLogin = arLogin.replace('[TITLE]', 'تسجيل الدخول — إي ترولي');
    arLogin = arLogin.replace('[DESCRIPTION]', 'قم بتسجيل الدخول للوصول إلى لوحة تحكم متجرك.');

    loginComponents.forEach(comp => {
      const compPath = path.join(root, `src/components/${comp}/${comp}.ar.html`);
      if (fs.existsSync(compPath)) {
        let compContent = fs.readFileSync(compPath, 'utf8');
        if (comp === 'navbar') {
          compContent = compContent.replaceAll('href="#home"', 'href="index-ar.html#home"');
          compContent = compContent.replaceAll('href="#services"', 'href="index-ar.html#services"');
          compContent = compContent.replaceAll('href="#prices"', 'href="index-ar.html#prices"');
          compContent = compContent.replaceAll('href="#contact"', 'href="index-ar.html#contact"');
          compContent = compContent.replaceAll('href="#create-store"', 'href="create-store-ar.html"');
          compContent = compContent.replace('href="index.html"', 'href="login.html"');
          compContent = compContent.replace('href="index-ar.html"', 'href="login-ar.html"');
          compContent = compContent.replace('class="nav__link is-active"', 'class="nav__link"');
        }
        arLogin = arLogin.replace(`<!-- INSERT: ${comp} -->`, compContent);
      }
    });
    fs.writeFileSync(path.join(root, 'login-ar.html'), arLogin, 'utf8');
    console.log('Compiled login-ar.html (Arabic)');
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  compile();
}
