# Google AdSense Entegrasyonu - Kurulum Rehberi

Bu projeye Google AdSense başarıyla entegre edilmiştir. İşte yapılan değişiklikler ve nasıl yönetileceği:

## 🔧 Yapılan Değişiklikler

### 1. AdSense Script'i Eklendi
- `src/components/BaseHead.astro` dosyasına AdSense script'i eklendi
- Script otomatik olarak tüm sayfalarda yüklenir

### 2. AdSense Bileşeni Oluşturuldu
- `src/components/AdSense.astro` - Esnek reklam bileşeni
- Responsive tasarım desteği
- Özelleştirilebilir slot'lar

### 3. Konfigürasyon Dosyası
- `src/config/adsense.ts` - Reklam slot'larını merkezi yönetim
- Tüm reklam ayarları tek yerden kontrolü

### 4. ads.txt Dosyası
- `public/ads.txt` - Google'ın gerektirdiği doğrulama dosyası
- Publisher ID: `pub-8927381570299660`

## 📍 Reklamların Yerleştirildiği Konumlar

### Ana Sayfa (Homepage)
- **Üst Banner**: Sayfa başlığı altında
- **İçerik Arası**: Featured post ve diğer postlar arasında

### Blog Yazıları
- **Header Altı**: Yazı başlığı ve meta bilgiler sonrası
- **İçerik Sonrası**: Yazı içeriği bittikten sonra, yorumlar öncesi

## ⚙️ Reklam Slot'larını Değiştirme

`src/config/adsense.ts` dosyasından slot ID'lerini güncelleyin:

```typescript
export const ADSENSE_CONFIG = {
  client: 'ca-pub-8927381570299660',
  slots: {
    homeBanner: 'GERÇEK_SLOT_ID_1',      // Ana sayfa üst banner
    homeMidContent: 'GERÇEK_SLOT_ID_2',  // Ana sayfa içerik arası
    postHeader: 'GERÇEK_SLOT_ID_3',      // Blog post header altı
    postContent: 'GERÇEK_SLOT_ID_4',     // Blog post içerik sonrası
  }
};
```

## 🎯 Yeni Reklam Alanı Ekleme

### 1. Slot ID'sini Configuration'a Ekleyin
```typescript
// src/config/adsense.ts
slots: {
  // Mevcut slot'lar...
  sidebar: 'YENİ_SLOT_ID',
}
```

### 2. Bileşeni Kullanın
```astro
<AdSense slot={ADSENSE_CONFIG.slots.sidebar} className="sidebar-ad" />
```

## 📊 Reklam Formatları

### Responsive (Önerilen)
```astro
<AdSense slot="SLOT_ID" responsive={true} />
```

### Sabit Boyut
```astro
<AdSense 
  slot="SLOT_ID" 
  style="display:block;width:728px;height:90px;" 
  format="horizontal"
/>
```

## 🌐 Production'a Deploy

### 1. Google AdSense'de Site Doğrulaması
- https://www.google.com/adsense/ adresine gidin
- "Sites" bölümünde techoxium.com'u ekleyin
- `ads.txt` dosyasının erişilebilir olduğunu doğrulayın

### 2. Gerçek Slot ID'leri Alın
- AdSense panelinden yeni ad units oluşturun
- Configuration dosyasındaki placeholder ID'leri gerçek slot ID'leri ile değiştirin

### 3. ads.txt Doğrulaması
- https://techoxium.com/ads.txt adresinin erişilebilir olduğunu kontrol edin
- Google Search Console'da ads.txt durumunu kontrol edin

## ⚠️ Önemli Notlar

1. **Test Aşaması**: Şu anda placeholder slot ID'ler kullanılıyor
2. **Production**: Gerçek slot ID'leri ile değiştirilmeli
3. **ads.txt**: Production'da mutlaka erişilebilir olmalı
4. **AdSense Politikaları**: Reklam yerleşimlerinin Google politikalarına uygun olduğundan emin olun

## 🔍 Sorun Giderme

### ads.txt Bulunamıyor Hatası
- `public/ads.txt` dosyasının mevcut olduğunu kontrol edin
- Build sonrası `dist/ads.txt` dosyasının oluştuğunu doğrulayın
- Cloudflare Pages'de static dosyaların doğru serve edildiğini kontrol edin

### Reklamlar Görünmüyor
1. AdSense hesabının onaylandığından emin olun
2. Slot ID'lerinin doğru olduğunu kontrol edin
3. Ad blocker kullanmadığınızdan emin olun
4. Browser console'da JavaScript hataları kontrol edin

### Performance Optimizasyonu
- Reklamlar `async` ve `defer` attributeleri ile yüklenir
- Lazy loading desteklenir
- Core Web Vitals'a minimum etki

## 📈 Analytics

AdSense performansını izlemek için:
- Google AdSense raporları
- Google Analytics ile entegrasyon
- Core Web Vitals metrikleri

---

**Son Güncelleme**: 3 Eylül 2025
**Versiyon**: 1.0
