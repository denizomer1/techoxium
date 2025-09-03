// AdSense Configuration
export const ADSENSE_CONFIG = {
  client: 'ca-pub-8927381570299660',
  slots: {
    // Ana sayfa reklamları
    homeBanner: '1234567890', // Üst banner reklam
    homeMidContent: '2345678901', // İçerik arası reklam
    
    // Blog post reklamları  
    postHeader: '3456789012', // Post başlığı altı reklam
    postContent: '4567890123', // Post içeriği sonrası reklam
    
    // Sidebar reklamları (gelecekte kullanım için)
    sidebar: '5678901234',
    
    // Footer reklamları
    footer: '6789012345'
  }
};

// Reklam türleri
export const AD_FORMATS = {
  auto: 'auto',
  rectangle: 'rectangle', 
  banner: 'horizontal',
  square: 'square',
  vertical: 'vertical'
};

// Reklam stilleri
export const AD_STYLES = {
  banner: 'display:block;width:728px;height:90px;',
  rectangle: 'display:block;width:336px;height:280px;',
  square: 'display:block;width:250px;height:250px;',
  responsive: 'display:block;'
};
