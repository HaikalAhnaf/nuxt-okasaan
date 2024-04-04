
// plugins/i18n.js
export default ({ app }) => {
    app.i18n.locales = ['en', 'id'];
    app.i18n.defaultLocale = 'id';
    app.i18n.strategy = 'prefix'; // Use prefix for language detection
    // app.i18n.lazy = true; Lazy-load translations (optional)
  }