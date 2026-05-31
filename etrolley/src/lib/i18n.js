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
    'different.slide.2.title': 'A dedicated account manager\nto support you every step of the way.',
    'different.slide.2.desc': "You'll have a dedicated account manager who will accompany you from the very beginning until you achieve success, helping you and responding to your inquiries quickly.",
    'different.slide.3.title': 'Easy control panel\nwith free training.',
    'different.slide.3.desc': 'The subscription comes with free training sessions to teach you how to manage your store professionally.',
    'different.slide.4.title': 'Instant integration with\npayment and delivery gateways',
    'different.slide.4.desc': 'You can start selling immediately with simple steps to activate payment and delivery with our help.',
    'different.slide.5.title': 'Financial reports and\nperformance analysis',
    'different.slide.5.desc': "Real-time tracking of your store's growth is provided by easy-to-read reports that help you make smart decisions.",
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
    'services.card.marketing.desc':   'Now that your store is ready for sale, add your products',
    'services.card.photography.desc': 'Now that your store is ready for sale, add your products',
    'services.card.support.desc':     'Now that your store is ready for sale, add your products',
    'services.card.social.desc':      'Now that your store is ready for sale, add your products',

    /* Our Renowned Clients */
    'clients.eyebrow':     'Success stories',
    'clients.title':       'Our Renowned Clients',
    'clients.desc':        'Join the list of more than 500 brands that rely on E-trolley',
    'clients.storeName':   'Store Name',
    'partners.title':      'Our Partners',
    'clients.aria.controls': 'Carousel controls',
    'clients.aria.prev':   'Previous brands',
    'clients.aria.next':   'Next brands',

    /* Distinctive Designs */
    'designs.eyebrow':     'Select one',
    'designs.title':       'Distinctive Designs',
    'designs.container':   'Container',
    'designs.card.beauty': 'Health & Beauty',
    'designs.card.perfumes':'Perfumes',
    'designs.card.electronics':'Electronics',
    'designs.card.flowers': 'Flowers',
    'designs.card.outfits': 'Outfits',
    'designs.aria.prev':   'Previous designs',
    'designs.aria.next':   'Next designs',

    /* Support & Help CTA card */
    'support.eyebrow':       'Support & Help',
    'support.title':         'Are you in need of assistance\nor have a question?',
    'support.aria.contacts': 'Contact options',
    'support.aria.whatsapp': 'Chat with us on WhatsApp',
    'support.aria.phone':    'Call us',
    'support.aria.email':    'Email our support team',

    /* Footer */
    'footer.logo.text':      'Etrolley',
    'footer.quickLinks':     'Quick Links',
    'footer.siteMap':        'Site Map',
    'footer.keepInTouch':    "Let's keep in touch",
    'footer.terms':          'Terms & Conditions',
    'footer.privacy':        'Privacy Policy',
    'footer.social':         'Social',
    'footer.home':           'Home',
    'footer.services':       'Services',
    'footer.prices':         'Prices',
    'footer.about':          'About Us',
    'footer.contact':        'Contact Us',
    'footer.address':        'Qatar - Doha - Khalifa City',
    'footer.cta':            'build your store now',
    'footer.copyright':      '© 2025 E-trolley All Rights Reserved',
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
    'different.slide.2.title': 'مدير حساب مخصص\nيدعمك في كل خطوة.',
    'different.slide.2.desc': 'سيكون لديك مدير حساب مخصص يرافقك من البداية حتى تحقق النجاح، يساعدك ويرد على استفساراتك بسرعة.',
    'different.slide.3.title': 'لوحة تحكم سهلة\nمع تدريب مجاني.',
    'different.slide.3.desc': 'يأتي الاشتراك مع جلسات تدريب مجانية لتعليمك كيفية إدارة متجرك باحترافية.',
    'different.slide.4.title': 'ربط فوري مع\nبوابات الدفع والتوصيل',
    'different.slide.4.desc': 'يمكنك البدء في البيع فوراً بخطوات بسيطة لتفعيل الدفع والتوصيل بمساعدتنا.',
    'different.slide.5.title': 'تقارير مالية\nوتحليل الأداء',
    'different.slide.5.desc': 'تتبّع نمو متجرك لحظياً عبر تقارير سهلة القراءة تساعدك على اتخاذ قرارات ذكية.',
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
    'services.card.marketing.desc':   'الآن متجرك جاهز للبيع، أضف منتجاتك',
    'services.card.photography.desc': 'الآن متجرك جاهز للبيع، أضف منتجاتك',
    'services.card.support.desc':     'الآن متجرك جاهز للبيع، أضف منتجاتك',
    'services.card.social.desc':      'الآن متجرك جاهز للبيع، أضف منتجاتك',

    /* Our Renowned Clients */
    'clients.eyebrow':       'قصص نجاح',
    'clients.title':         'عملاؤنا المميزون',
    'clients.desc':          'انضم إلى قائمة تضم أكثر من 500 علامة تجارية تعتمد على إي-ترولي',
    'clients.storeName':     'اسم المتجر',
    'partners.title':        'شركاؤنا',
    'clients.aria.controls': 'أدوات التحكم في العرض',
    'clients.aria.prev':     'العلامات السابقة',
    'clients.aria.next':     'العلامات التالية',

    /* Distinctive Designs */
    'designs.eyebrow':       'اختر تصميمك',
    'designs.title':         'تصاميم مميزة',
    'designs.container':     'حاوية',
    'designs.card.beauty':   'الصحة والجمال',
    'designs.card.perfumes': 'العطور',
    'designs.card.electronics':'الإلكترونيات',
    'designs.card.flowers':  'الزهور',
    'designs.card.outfits':  'الملابس والأزياء',
    'designs.aria.prev':     'التصاميم السابقة',
    'designs.aria.next':     'التصاميم التالية',

    /* Support & Help CTA card */
    'support.eyebrow':       'الدعم والمساعدة',
    'support.title':         'هل تحتاج إلى مساعدة\nأو لديك سؤال؟',
    'support.aria.contacts': 'خيارات التواصل',
    'support.aria.whatsapp': 'تواصل معنا عبر واتساب',
    'support.aria.phone':    'اتصل بنا',
    'support.aria.email':    'أرسل بريداً إلى فريق الدعم',

    /* Footer */
    'footer.logo.text':      'إي ترولي',
    'footer.quickLinks':     'روابط سريعة',
    'footer.siteMap':        'خريطة الموقع',
    'footer.keepInTouch':    'لنكن على اتصال',
    'footer.terms':          'الشروط والأحكام',
    'footer.privacy':        'سياسة الخصوصية',
    'footer.social':         'وسائل التواصل',
    'footer.home':           'الرئيسية',
    'footer.services':       'الخدمات',
    'footer.prices':         'الأسعار',
    'footer.about':          'من نحن',
    'footer.contact':        'اتصل بنا',
    'footer.address':        'قطر - الدوحة - مدينة خليفة',
    'footer.cta':            'أنشئ متجرك الآن',
    'footer.copyright':      '© ٢٠٢٥ إي ترولي جميع الحقوق محفوظة',
  },
};

/* ------------------------------------------------------------- */
/* State                                                          */
/* ------------------------------------------------------------- */

let current = readInitial();
const subscribers = new Set();

/* When set, a coordinator (e.g. the language transition) is currently
   responsible for completing a language swap. setLang() forwards
   any user request to it instead of applying the change directly. */
let interceptor = null;

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
 * Public entry-point for changing the language.
 * If an interceptor is registered (the lang transition coordinator),
 * the request is delegated to it. Otherwise the change is applied
 * synchronously and subscribers are notified.
 */
export function setLang(code) {
  if (!SUPPORTED.includes(code) || code === current) return;

  if (interceptor) {
    interceptor(code);
    return;
  }
  applyLang(code);
}

/**
 * Low-level apply: writes the new state, persists, syncs <html>
 * attributes and fires subscribers. Bypasses any interceptor.
 * The transition coordinator calls this once the screen is fully
 * covered so the user never sees the swap mid-motion.
 */
export function applyLang(code) {
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

/**
 * Register a coordinator that intercepts setLang() calls and is
 * responsible for eventually invoking applyLang() at the right
 * moment in its animation.
 *
 * Returns an unregister fn.
 */
export function setLangInterceptor(fn) {
  interceptor = fn;
  return () => { if (interceptor === fn) interceptor = null; };
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
