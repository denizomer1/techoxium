<div align="center">
  <img src="public/logo.png" alt="Techoxium Logo" width="200" height="200">

  <p><strong>Teknolojinin Elementi Astro ile Geliştirildi 🚀</strong></p>

  ![Version](https://img.shields.io/badge/version-v2.0-blue?style=for-the-badge)
  ![Status](https://img.shields.io/badge/status-stable-green?style=for-the-badge)
  ![Astro](https://img.shields.io/badge/astro-v5.13.5-orange?style=for-the-badge)
  ![Cloudflare](https://img.shields.io/badge/deployed%20on-cloudflare-yellow?style=for-the-badge)
  ![TypeScript](https://img.shields.io/badge/typescript-5.0+-blue?style=for-the-badge)

</div>## ✨ Özellikler

- 🔍 **Gelişmiş Arama** - Akıllı arama algoritması ve anlık sonuçlar
- 📱 **Duyarlı Tasarım** - Masaüstü ve mobil cihazlarda mükemmel performans
- 🌙 **Koyu/Açık Tema** - Gelişmiş tema geçişi ve otomatik sistem teması
- ⚡ **Yüksek Performans** - Astro SSR ve Cloudflare optimizasyonu
- 🎨 **Modern UI/UX** - Glassmorphism tasarım ve akıcı animasyonlar
- 🎥 **Video Desteği** - YouTube videoları için optimizasyonlu gömme
- 💬 **Dinamik Yorumlar** - Disqus entegrasyonu ile interaktif yorumlar
- 🏷️ **Etiket Sistemi** - Gelişmiş kategorizasyon ve filtreleme
- 📊 **SEO Optimizasyonu** - Schema.org ve Open Graph meta veriler
- 🔗 **Sosyal Medya** - Platform entegrasyonları ve paylaşım özellikleri
- 🔧 **TypeScript Entegrasyonu** - Tam tip güvenliği ve geliştirici deneyimi
- 🎯 **Modüler Mimari** - Temiz kod yapısı ve yeniden kullanılabilir bileşenler
- 🚀 **Hızlı Yükleme** - Optimize edilmiş font yükleme ve performans

## 🚀 v2.0 Kararlı Sürüm

Bu yeni sürüm aşağıdaki gelişmiş özellikleri içermektedir:

### 🎯 **Çekirdek İyileştirmeler**
- ✅ **TypeScript Konsolidasyonu** - Tüm yardımcı fonksiyonlar `global.ts` altında toplandı
- ✅ **Bileşen Organizasyonu** - Daha temiz ve tutarlı bileşen isimlendirmesi
- ✅ **Font Modernizasyonu** - Inter font ailesi ile modern tipografi
- ✅ **Performans Optimizasyonu** - Daha hızlı yükleme ve daha iyi kullanıcı deneyimi

### 🔧 **Teknik Geliştirmeler**
- ✅ **Tamamen yeniden yazılmış arama sistemi**
- ✅ **Video içerik desteği (YouTube iframe optimizasyonu)**
- ✅ **Gelişmiş blog düzen sistemi**
- ✅ **Dinamik yorum sistemi entegrasyonu**
- ✅ **Cloudflare Image Service optimizasyonu**
- ✅ **Modern glassmorphism tasarım dili**
- ✅ **Gelişmiş SEO ve meta veri yapısı**
- ✅ **Erişilebilirlik (a11y) iyileştirmeleri**
- ✅ **TypeScript tip güvenliği**
- ✅ **Modüler bileşen mimarisi**

### 🎨 **Kullanıcı Deneyimi**
- ✅ **İyileştirilmiş hashtag navigasyonu**
- ✅ **Daha hızlı sayfa yükleme**
- ✅ **Optimize edilmiş font yükleme**
- ✅ **Temiz ve tutarlı kod yapısı**

---
## 🛠️ Yerel Geliştirme

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

3. **Tarayıcınızda açın:**
   ```
   http://localhost:4321
   ```

## 🏗️ Üretim İçin Derleme

1. **Projeyi derleyin:**
   ```bash
   npm run build
   ```

2. **Yerel önizleme:**
   ```bash
   npm run preview
   ```

3. **Cloudflare Pages'e dağıtım:**
   ```bash
   npm run deploy
   ```

## 🌐 Deployment ve Hosting

Bu proje **Cloudflare Workers** ve **Cloudflare Pages** için optimize edilmiştir:

## 🎨 Özelleştirme

### Tema Renkleri

`src/styles/global.css` dosyasında CSS variables:

```css
:root {
  --accent: 136, 58, 234;
  --accent-light: 224, 204, 250;
  --accent-dark: 49, 10, 101;
  --gray: 96, 115, 159;
  --gray-light: 229, 233, 240;
  --gray-dark: 34, 41, 57;
}
```

### Sosyal Medya

`src/global.ts` dosyasında:

```typescript
export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/@techoxium',
  nxt: 'https://sosyal.teknofest.app/@techoxium',
}

export const SOCIAL_CONFIG = {
  header: { size: 'sm', variant: 'minimal', platforms: ['youtube', 'nxt'] },
  footer: { size: 'lg', variant: 'filled', platforms: ['youtube', 'nxt'] },
}
```

## 🏗️ Proje Yapısı

```
src/
├── components/           # Yeniden organize edilmiş bileşenler
│   ├── BaseHead.astro    # Meta veriler ve SEO
│   ├── Header.astro      # Ana navigasyon
│   ├── Footer.astro      # Alt kısım ve sosyal medya
│   ├── HomePage.astro    # Ana sayfa bileşeni
│   ├── TagPage.astro     # Etiket sayfası bileşeni
│   ├── PostCard.astro    # Blog kartı bileşeni
│   ├── Social.astro      # Sosyal medya bağlantıları
│   └── ...
├── layouts/              # Sayfa düzenleri
├── pages/                # Sayfa rotaları
│   ├── api/              # API endpoints
│   ├── tag/              # Dinamik etiket rotaları
│   └── ...
├── global.ts             # ✓ Konsolide edilmiş yardımcı fonksiyonlar
├── content.config.ts     # İçerik koleksiyonları
└── env.d.ts             # TypeScript tanımları
```

## 🔧 Scripts

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run build:cloudflare` | Cloudflare build |
| `npm run preview` | Wrangler preview |
| `npm run deploy` | Cloudflare deploy |
| `npm run check` | Type check + lint |

## � Changelog

### v2.0.0 (2025-09-07)
- 🎯 **TypeScript Konsolidasyonu**: Tüm yardımcı fonksiyonlar `global.ts` altında toplandı
- 🔄 **Bileşen Yeniden Organizasyonu**: Daha temiz ve tutarlı bileşen isimlendirmesi
- 🎨 **Font Modernizasyonu**: Inter font ailesi ile modern tipografi sistemi
- ⚡ **Performans İyileştirmeleri**: Daha hızlı yükleme ve optimize edilmiş font yükleme
- 🏷️ **Etiket Sistemi İyileştirmesi**: Hashtag navigasyonu ve sayfa entegrasyonu
- 🧹 **Kod Temizliği**: Gereksiz dosyaların kaldırılması ve yapı optimizasyonu

### v1.0.0 (2025-08-22)
- ✅ İlk kararlı sürüm
- ✅ Temel blog işlevselliği
- ✅ Sosyal medya entegrasyonları
- ✅ SEO optimizasyonları
- ✅ Duyarlı tasarım

## 📄 Lisans

[LICENSE](LICENSE) dosyasını inceleyin