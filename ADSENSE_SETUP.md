# Google AdSense Integration Guide

## Kurulum Tamamlandı ✅

Google AdSense entegrasyonu projenize başarıyla eklendi. AdSense kodları aşağıdaki yerlerde aktif:

### 1. Temel Kurulum
- **BaseHead.astro**: AdSense script'i otomatik olarak her sayfada yükleniyor
- **AdSense.astro**: Esnek reklam komponenti oluşturuldu
- **adsense.ts**: Reklam slot'larını yönetmek için merkezi konfigürasyon

### 2. Aktif Reklam Konumları

#### Ana Sayfa (UniversalHomePage.astro)
- **Üst Banner**: Başlık altında banner reklam
- **İçerik Arası**: Featured post ile diğer postlar arasında reklam

#### Blog Post Sayfaları (BlogPost.astro)  
- **Post Başlığı Altı**: Makale başlığından sonra reklam
- **İçerik Sonrası**: Makale bittikten sonra, yorumlardan önce reklam

### 3. Gerçek AdSense Slot ID'lerini Güncelleme

`src/config/adsense.ts` dosyasını açın ve Google AdSense panelindeki gerçek slot ID'lerinizi girin:

```typescript
export const ADSENSE_CONFIG = {
  client: 'ca-pub-8927381570299660', // Mevcut client ID'niz
  slots: {
    homeBanner: 'GERÇEK_SLOT_ID_1',     // Ana sayfa üst banner
    homeMidContent: 'GERÇEK_SLOT_ID_2', // Ana sayfa içerik arası
    postHeader: 'GERÇEK_SLOT_ID_3',     // Post başlığı altı  
    postContent: 'GERÇEK_SLOT_ID_4',    // Post içerik sonrası
    sidebar: 'GERÇEK_SLOT_ID_5',        // Gelecek kullanım
    footer: 'GERÇEK_SLOT_ID_6'          // Gelecek kullanım
  }
};
```

### 4. Yeni Reklam Alanı Eklemek

```astro
<!-- Herhangi bir .astro dosyasında -->
---
import AdSense from '../components/AdSense.astro';
import { ADSENSE_CONFIG } from '../config/adsense.ts';
---

<div class="ad-container">
  <AdSense 
    slot={ADSENSE_CONFIG.slots.sidebar} 
    className="my-custom-ad"
    format="rectangle" 
  />
</div>
```

### 5. AdSense Componenti Özellikleri

```typescript
interface Props {
  client?: string;        // AdSense client ID (otomatik)
  slot: string;          // Reklam slot ID (zorunlu)
  format?: string;       // 'auto', 'rectangle', 'banner'
  style?: string;        // CSS stil
  responsive?: boolean;  // Responsive reklam (varsayılan: true)
  className?: string;    // CSS sınıfı
}
```

### 6. Google AdSense Panelinde Yapılacaklar

1. **AdSense hesabınızda** yeni reklam birimleri oluşturun
2. Her reklam birimi için **slot ID**'yi kopyalayın  
3. Bu ID'leri `src/config/adsense.ts` dosyasına yapıştırın
4. **Site URL'nizi** AdSense panelinde doğrulayın
5. **ads.txt** dosyası zaten `public/ads.txt` olarak mevcut

### 7. Test Etme

```bash
npm run dev
```

Tarayıcıda sayfaları açtığınızda reklam alanlarını göreceksiniz. AdSense onay sürecinde test reklamları görünür.

### 8. Önemli Notlar

- ⚠️ **Kendi reklamlarınıza tıklamayın** (AdSense politika ihlali)
- ⏱️ Yeni site onay süreci **2-14 gün** sürebilir
- 📱 Reklamlar **responsive** olarak yapılandırıldı
- 🎯 Slot ID'leri konfigürasyon dosyasından merkezi olarak yönetiliyor

### 9. Sorun Giderme

- Reklamlar görünmüyorsa: Slot ID'leri kontrol edin
- Console hatası varsa: Browser geliştirici araçlarını kontrol edin
- AdSense onayı bekliyorsa: Test reklamları normal davranış

Başarılar! 🚀
