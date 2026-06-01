import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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
  'footer'
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
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  compile();
}
