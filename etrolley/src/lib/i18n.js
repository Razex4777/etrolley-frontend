/**
 * i18n.js
 * ---------------------------------------------------------------
 * Tiny reactive translation store. Single source of truth for:
 *   - The translation dictionary (en / ar)
 *   - The active language (synced with <html lang> + dir)
 *   - Subscribers that need to re-render on language change
 *
 * Usage:
 *   import { t, setLang, onLangChange, getLang } from '@lib/i18n.js';
 *   element.textContent = t('nav.home');
 *   setLang('ar');     // updates html dir, persists to storage, fires callbacks
 *
 * Numbers (phone, etc.) stay in Latin digits even in Arabic — they
 * are phone numerals, not literary content. Wrap them in <bdi> in
 * templates so the Unicode bidi algorithm doesn't reorder them.
 * ---------------------------------------------------------------
 */

const STORAGE_KEY = 'etrolley:lang';
const DEFAULT_LANG = 'en';
const SUPPORTED = ['en', 'ar'];

const dict = {
  en: {
    /* Navbar */
    'nav.home':        'Home',
    'nav.services':    'Services',
    'nav.prices':      'Prices',
    'nav.about':       'About Us',
    'nav.contact':     'Contact Us',
    'nav.lang':        'English',
    'nav.about.story': 'Our Story',
    'nav.about.team':  'Team',
    'nav.about.partners': 'Partners',
    'nav.callus':      'Call us at',
    'nav.cta':         'Create a store',
    'nav.aria.primary':'Primary',
    'nav.aria.about':  'About menu',
    'nav.aria.lang':   'Choose language',
    'nav.aria.menuOpen':  'Open menu',
    'nav.aria.menuClose': 'Close menu',
    'nav.aria.mobile': 'Mobile',
    'nav.aria.dialog': 'Main menu',

    /* Language switcher rendered options */
    'lang.en':         'English',
    'lang.ar':         'العربية',

    /* Hero */
    'hero.headline':   'Your store will be\nready in no more\nthan a minute.',
    'hero.linkLabel':  'Link',
    'hero.cta':        'build your store now',
    'hero.aria.prev':  'Previous slide',
    'hero.aria.next':  'Next slide',
    'hero.aria.heroImg':   'Online store on a laptop with shopping bags',
    'hero.aria.qr':    'THEQA — Verified by the Qatari Ministry of Communications',
    'hero.validate':   'etrolley is a platform that has been officially validated by the Qatari Ministry of Communications.',
    'hero.follow':     'Follow',
    'hero.sideCta':    'Send a message',

    /* Creative Steps section */
    'steps.eyebrow':   'Build a store',
    'steps.title':     'OUR\nCREATIVE\nPROCESS',
    'steps.cta':       "LET'S\nSTART",
    'steps.cta.orbit': 'BUILD YOUR STORE • FAST & EASY •',
    'steps.paragraph': 'Simple or Professional? Choose the plan that best suits your business, based on the level of features you require, then browse the ready-made designs and choose the one that suits you. All designs are available to all users at no additional charge. Or request your own custom design. Fill out the basic information and complete the payment in a quick and secure manner.',
    'steps.card.1':   'Select the package that matches your needs',
    'steps.card.2':   'Pick a design that is in line with your brand.',
    'steps.card.3':   'Enter your store details and finalize the payment process.',
    'steps.card.4':   'Now that your store is ready for sale, add your products',
    'steps.promo.text': 'No technical skills required.',
    'different.eyebrow': 'Our Services',
    'different.title': 'What Make Us Different?',
    'different.slide.1.title': 'Easy online store\nwith your brand name',
    'different.slide.1.desc': 'Get your business name up and running right away, without any complexity or technical expertise.',
    'different.slide.2.title': 'Designs that match\nyour brand identity',
    'different.slide.2.desc': 'Choose from dozens of ready-made designs or request a custom one that perfectly mirrors your brand.',
    'different.slide.3.title': 'Powerful tools\nat your fingertips',
    'different.slide.3.desc': 'Inventory, payments, shipping, analytics — everything you need to run a serious store, in one place.',
    'different.aria.prev': 'Previous slide',
    'different.aria.next': 'Next slide',
    'different.aria.dots': 'Slide navigation',
    /* Services We Provide */
    'services.eyebrow': 'Additional',
    'services.title': 'Services we provide',
    'services.desc': 'Our support services are available in this section to help you integrate the work of your store and find everything you need in one place.',
    'services.learnMore': 'Learn More',
    'services.label.service':     'SERVICE',
    'services.label.marketing':   'MARKETING',
    'services.label.photography': 'PHOTOGRAPHY',
    'services.label.support':     'SUPPORT',
    'services.label.social':      'SOCIAL',
    'services.card.marketing': 'Marketing',
    'services.card.photography': 'Photography',
    'services.card.support': 'Support',
    'services.card.social': 'Social Media',
    'services.card.desc': 'Now that your store is ready for sale, add your products',
    'services.card.marketing.desc':   'Targeted ad campaigns and SEO that turn browsers into buyers — built around your brand voice.',
    'services.card.photography.desc': 'Studio-grade product imaging that makes your catalogue feel premium and ready to sell.',
    'services.card.support.desc':     'Real humans on standby after launch — answering questions, fixing hiccups, keeping you live.',
    'services.card.social.desc':      'Social channels set up, content scheduled, community managed — your audience always engaged.',
  },
  ar: {
    /* Navbar */
    'nav.home':        'الرئيسية',
    'nav.services':    'الخدمات',
    'nav.prices':      'الأسعار',
    'nav.about':       'من نحن',
    'nav.contact':     'اتصل بنا',
    'nav.lang':        'العربية',
    'nav.about.story': 'قصتنا',
    'nav.about.team':  'فريقنا',
    'nav.about.partners': 'شركاؤنا',
    'nav.callus':      'اتصل بنا على',
    'nav.cta':         'أنشئ متجرك',
    'nav.aria.primary':'القائمة الرئيسية',
    'nav.aria.about':  'قائمة من نحن',
    'nav.aria.lang':   'اختر اللغة',
    'nav.aria.menuOpen':  'افتح القائمة',
    'nav.aria.menuClose': 'إغلاق القائمة',
    'nav.aria.mobile': 'القائمة المتنقلة',
    'nav.aria.dialog': 'القائمة الرئيسية',
    'lang.en':         'English',
    'lang.ar':         'العربية',
    /* Hero */
    'hero.headline':   'متجرك جاهز\nفي أقل من\nدقيقة.',
    'hero.linkLabel':  'الرابط',
    'hero.cta':        'ابدأ بناء متجرك',
    'hero.aria.prev':  'الشريحة السابقة',
    'hero.aria.next':  'الشريحة التالية',
    'hero.aria.heroImg':   'متجر إلكتروني على جهاز كمبيوتر محمول مع حقائب تسوق',
    'hero.aria.qr':    'ثقة — موثّق من قبل وزارة الاتصالات القطرية',
    'hero.validate':   'إي ترولي منصة موثّقة رسمياً من وزارة الاتصالات القطرية.',
    'hero.follow':     'تابعنا',
    'hero.sideCta':    'أرسل رسالة',
    /* Creative Steps section */
    'steps.eyebrow':   'أنشئ متجرك',
    'steps.title':     'خطواتنا\nالإبداعية',
    'steps.cta':       'لنبدأ\nالآن',
    'steps.cta.orbit': 'ابدأ متجرك • سهل وسريع •',
    'steps.paragraph': 'بسيط أم احترافي؟ اختر الخطة التي تناسب أعمالك بناءً على مستوى الميزات التي تحتاجها، ثم تصفح التصاميم الجاهزة واختر ما يناسبك. جميع التصاميم متاحة لكل المستخدمين دون رسوم إضافية. أو اطلب تصميماً خاصاً بك. املأ المعلومات الأساسية وأكمل الدفع بطريقة سريعة وآمنة.',
    'steps.card.1':   'اختر الباقة التي تطابق احتياجاتك',
    'steps.card.2':   'اختر تصميماً يتناسب مع علامتك التجارية.',
    'steps.card.3':   'أدخل تفاصيل متجرك وأكمل عملية الدفع.',
    'steps.card.4':   'الآن متجرك جاهز للبيع، أضف منتجاتك',
    'steps.promo.text': 'لا حاجة لخبرة تقنية.',
    'different.eyebrow': 'الخدمات',
    'different.title': 'ما الذي يجعلنا مختلفين؟',
    'different.slide.1.title': 'متجر إلكتروني سهل\nبعلامتك التجارية',
    'different.slide.1.desc': 'ابدأ مشروعك بسرعة دون أي تعقيد أو خبرة تقنية، فقط ركّز على منتجك ودعنا نتولى الباقي.',
    'different.slide.2.title': 'تصاميم تعكس\nهوية علامتك',
    'different.slide.2.desc': 'اختر من عشرات التصاميم الجاهزة أو اطلب تصميماً خاصاً يعكس شخصية علامتك التجارية.',
    'different.slide.3.title': 'أدوات قوية\nبين يديك',
    'different.slide.3.desc': 'إدارة المخزون، المدفوعات، الشحن، والتحليلات — كل ما تحتاجه لإدارة متجر احترافي في مكان واحد.',
    'different.aria.prev': 'الشريحة السابقة',
    'different.aria.next': 'الشريحة التالية',
    'different.aria.dots': 'التنقل بين الشرائح',
    /* Services We Provide */
    'services.eyebrow': 'خدمات إضافية',
    'services.title': 'الخدمات التي نقدمها',
    'services.desc': 'خدمات الدعم لدينا متوفرة في هذا القسم لمساعدتك على دمج أعمال متجرك والعثور على كل ما تحتاجه في مكان واحد.',
    'services.learnMore': 'معرفة المزيد',
    'services.label.service':     'خدمة',
    'services.label.marketing':   'تسويق',
    'services.label.photography': 'تصوير',
    'services.label.support':     'دعم',
    'services.label.social':      'سوشيال',
    'services.card.marketing': 'التسويق',
    'services.card.photography': 'التصوير الفوتوغرافي',
    'services.card.support': 'الدعم الفني',
    'services.card.social': 'وسائل التواصل الاجتماعي',
    'services.card.desc': 'الآن متجرك جاهز للبيع، أضف منتجاتك',
    'services.card.marketing.desc':   'حملات إعلانية مدروسة وتحسين محركات بحث يحوّل الزوّار إلى مشترين فعليين.',
    'services.card.photography.desc': 'تصوير منتجات بمستوى استوديو احترافي يمنح متجرك مظهراً فاخراً جاهزاً للبيع.',
    'services.card.support.desc':     'فريق دعم بشري بعد الإطلاق يجيب على أسئلتك ويحلّ أي مشكلة تواجهك في الوقت الفعلي.',
    'services.card.social.desc':      'إعداد قنواتك الاجتماعية، جدولة المحتوى، وإدارة المجتمع لجمهور دائم التفاعل.',
  },
};

/* ------------------------------------------------------------- */
/* State                                                          */
/* ------------------------------------------------------------- */

let current = readInitial();
const subscribers = new Set();

function readInitial() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch { /* ignore (private mode) */ }
  return DEFAULT_LANG;
}

/* ------------------------------------------------------------- */
/* Public API                                                     */
/* ------------------------------------------------------------- */

export function t(key) {
  const msg = dict[current]?.[key];
  if (msg !== undefined) return msg;
  // Fall back to English if a key is missing in the active locale.
  return dict[DEFAULT_LANG][key] ?? key;
}

export function getLang() {
  return current;
}

export function isRTL() {
  return current === 'ar';
}

/**
 * Apply the chosen language to the document and notify subscribers.
 * Idempotent: passing the current code is a no-op.
 */
export function setLang(code) {
  if (!SUPPORTED.includes(code) || code === current) return;
  current = code;

  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch { /* ignore */ }

  applyDocAttrs();
  subscribers.forEach((fn) => {
    try { fn(code); } catch (err) { console.error('[i18n]', err); }
  });
}

export function onLangChange(fn) {
  subscribers.add(fn);
  return () => subscribers.delete(fn);
}

/**
 * Sync the <html lang> + dir attributes with the active locale.
 * Call once at boot before mounting components.
 */
export function applyDocAttrs() {
  const html = document.documentElement;
  html.lang = current;
  html.dir = current === 'ar' ? 'rtl' : 'ltr';
}
