// Language switcher functionality
document.addEventListener('DOMContentLoaded', () => {
  // Handle language switcher clicks
  document.addEventListener('click', (e) => {
    const target = e.target;
    const languageOption = target.closest('.language-option');
    
    if (languageOption) {
      e.preventDefault();
      
      // Get the target language from the href
      const href = languageOption.href;
      const url = new URL(href);
      const isEnglish = url.pathname.startsWith('/en');
      const language = isEnglish ? 'en' : 'tr';
      
      // Set language preference cookie
      document.cookie = `language=${language}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
      
      // Navigate to the new language
      window.location.href = href;
    }
  });
});

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {};
}