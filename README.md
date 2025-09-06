<div align="center">
  <img src="public/logo.png" alt="Techoxium Logo" width="200" height="200">
  
  <p><strong>Teknolojinin Elementi Astro ile Geliştirildi 🚀</strong></p>
  
  ![Version](https://img.shields.io/badge/version-v1.0-blue?style=for-the-badge)
  ![Status](https://img.shields.io/badge/status-stable-green?style=for-the-badge)
  ![Astro](https://img.shields.io/badge/astro-v5.13.5-orange?style=for-the-badge)
  ![Cloudflare](https://img.shields.io/badge/deployed%20on-cloudflare-yellow?style=for-the-badge)

</div>

## ✨ Özellikler

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

## 🚀 v1.0 Kararlı Sürüm

Bu yeni sürüm aşağıdaki gelişmiş özellikleri içermektedir:
- ✅ Tamamen yeniden yazılmış arama sistemi
- ✅ Video içerik desteği (YouTube iframe optimizasyonu)
- ✅ Gelişmiş blog düzen sistemi
- ✅ Dinamik yorum sistemi entegrasyonu
- ✅ Cloudflare Image Service optimizasyonu
- ✅ Modern glassmorphism tasarım dili
- ✅ Gelişmiş SEO ve meta veri yapısı
- ✅ Erişilebilirlik (a11y) iyileştirmeleri

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

`src/config/social.ts` dosyasında:

```typescript
export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/@techoxium',
  nxt: 'https://sosyal.teknofest.app/@techoxium',
}
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

## 📄 Lisans

[LICENSE](LICENSE) dosyasını inceleyin