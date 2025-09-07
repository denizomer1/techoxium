<div align="center">
  <img src="public/logo.png" alt="Techoxium Logo" width="200" height="200">

  <p><strong>Teknolojinin Elementi Astro ile Geliştirildi 🚀</strong></p>

  ![Version](https://img.shields.io/badge/version-v2.1-blue?style=for-the-badge)
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

## 🚀 v2.1 Kararlı Sürüm (2025-09-07)

Bu sürüm aşağıdaki yeni özellikleri ve iyileştirmeleri içermektedir:

### 🎯 **Yeni Özellikler**
- ✅ **Pages CMS Entegrasyonu** - GitHub tabanlı içerik yönetimi sistemi
- ✅ **İçerik Organizasyonu** - Blog yazıları `src/content/blog/` klasörüne taşındı
- ✅ **Gelişmiş İçerik Yapılandırması** - Güncellenmiş `content.config.ts` şeması
- ✅ **Resim Yol Optimizasyonu** - Yerel resimler için `/images/` yolu desteği
- ✅ **İsteğe Bağlı Contentful Entegrasyonu** - Bulut tabanlı içerik yönetimi seçeneği

### 🔧 **Teknik Geliştirmeler**
- ✅ **Pages CMS Yapılandırması** - `.pages.yml` ile tam içerik kontrolü
- ✅ **İçerik Şeması Güncellemesi** - Frontmatter alanları ile uyumlu şema
- ✅ **Resim Yönetimi** - Yerel ve Contentful resim desteği
- ✅ **İçerik Yükleyici Optimizasyonu** - Doğru klasör yapısı için güncellenmiş yollar

### 🎨 **Kullanıcı Deneyimi**
- ✅ **Kolay İçerik Düzenleme** - Pages CMS arayüzü ile görsel düzenleme
- ✅ **Otomatik Resim İşleme** - Yerel resimler için optimize edilmiş yollar
- ✅ **Gelişmiş İçerik Yönetimi** - Etiket ve tarih bazlı organizasyon

---
## 📦 Pages CMS Entegrasyonu

Bu proje **Pages CMS** ile entegre edilmiştir. Bu sayede blog içeriklerini GitHub üzerinden kolayca düzenleyebilirsiniz.

### Kurulum

1. **GitHub'da Depo Oluşturun:**
   - Bu projeyi GitHub'a yükleyin
   - `.pages.yml` dosyasının repo kökünde olduğundan emin olun

2. **Pages CMS'e Bağlanın:**
   - [Pages CMS](https://app.pagescms.org) adresine gidin
   - GitHub hesabınızla giriş yapın
   - Bu repo'yu seçin

3. **İçerik Düzenlemeye Başlayın:**
   - Blog yazılarınızı `src/content/blog/` klasöründen yönetin
   - Görsel arayüz ile markdown dosyalarını düzenleyin
   - Resimleri `public/` klasörüne yükleyin

### Özellikler

- 🔧 **Görsel Düzenleme** - Markdown dosyalarını web arayüzü ile düzenleyin
- 📸 **Resim Yönetimi** - Resimleri doğrudan yükleyin ve yerleştirin
- 🏷️ **Etiket Sistemi** - İçerikleri etiketlerle kategorize edin
- 📅 **Tarih Yönetimi** - Yayın tarihlerini kolayca ayarlayın
- 🔍 **Arama ve Filtreleme** - İçerikleri hızlıca bulun

### Özellikler

- ☁️ **Bulut Tabanlı** - İçeriklerinizi her yerden yönetin
- 🎨 **Rich Text Editörü** - Gelişmiş metin düzenleme
- 📱 **API Tabanlı** - RESTful API ile entegrasyon
- 🔄 **Otomatik Senkronizasyon** - Değişiklikler anında yansır
- 🌐 **Çok Dilli Destek** - Farklı diller için içerik yönetimi

### Kullanım

Contentful aktif olduğunda:
- Blog yazıları Contentful'dan çekilir
- Yerel markdown dosyaları yedek olarak kullanılır
- "Edit on Contentful" bağlantısı görünür

Contentful devre dışı olduğunda:
- Yerel `src/content/blog/` klasöründeki dosyalar kullanılır
- Tamamen offline çalışır

## 🏗️ Proje Yapısı

```
src/
├── components/           # Yeniden organize edilmiş bileşenler
│   ├── BaseHead.astro    # Meta veriler ve SEO
│   ├── Header.astro      # Ana navigasyon
│   ├── Footer.astro      # Alt kısım ve sosyal medya
│   ├── PostCard.astro    # Blog kartı bileşeni
│   ├── Social.astro      # Sosyal medya bağlantıları
│   └── ...
├── layouts/              # Sayfa düzenleri
│   ├── BlogPost.astro    # Blog yazısı düzeni
├── pages/                # Sayfa rotaları
│   ├── api/              # API endpoints
│   │   └── posts.json.ts # Blog yazıları API'si
│   ├── [slug].astro      # Dinamik blog yazısı sayfası
│   └── ...
├── content/              # ✅ Blog içerikleri
│   └── blog/             # ✅ Blog yazıları
├── lib/                  # Yardımcı kütüphaneler
│   └── contentful.ts     # Contentful entegrasyonu
├── global.ts             # ✓ Konsolide edilmiş yardımcı fonksiyonlar
├── content.config.ts     # ✅ Güncellenmiş içerik koleksiyonları
└── env.d.ts             # TypeScript tanımları

.pages.yml                # ✅ Pages CMS yapılandırması
public/                   # Resimler ve statik dosyalar
├── images/               # Blog resimleri
└── ...
```

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

## 📂 İçerik Yapısı

### Blog Yazıları
- **Konum**: `src/content/blog/`
- **Format**: YAML frontmatter + Markdown
- **Şema Alanları**:
  - `title`: Yazı başlığı
  - `description`: Kısa açıklama
  - `date`: Yayın tarihi
  - `image`: Kapak resmi yolu
  - `tags`: Etiketler dizisi
  - `layout`: Sayfa düzeni (genellikle "post")

### Resimler
- **Konum**: `public/images/`
- **Yol Formatı**: `/images/resim-adi.jpg`
- **Desteklenen Formatlar**: JPG, PNG, WebP, SVG

### İçerik Yönetimi Akışı

1. **Pages CMS ile Düzenleme**:
   - GitHub üzerinden görsel düzenleme
   - Otomatik commit ve deploy
   - Takım çalışması desteği

3. **Yerel Markdown Düzenleme**:
   - Klasik markdown editörü
   - Git versiyon kontrolü
   - Offline çalışma

### API Endpoints

- `GET /api/posts.json`: Blog yazıları listesi
  - Parametre: `?locale=tr` (varsayılan: tr)
  - Dönüş: JSON formatında yazı listesi

### İçerik Şeması

```typescript
// src/content.config.ts
const blogSchema = z.object({
  title: z.string().default('Yeni Blog Yazısı (TR)'),
  description: z.string().optional(),
  date: z.union([z.string(), z.date()]).transform((val) => 
    val instanceof Date ? val : new Date(val)
  ),
  updatedDate: z.union([z.string(), z.date()]).transform((val) => 
    val instanceof Date ? val : new Date(val)
  ).optional(),
  tags: z.array(z.string()).optional(),
  image: z.string().optional(),
  layout: z.string().optional(),
});
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

## 📝 Changelog

### v2.1.0 (2025-09-07)
- 🎯 **Pages CMS Entegrasyonu**: GitHub tabanlı içerik yönetimi sistemi eklendi
- 📁 **İçerik Organizasyonu**: Blog yazıları `src/content/blog/` klasörüne taşındı
- 🔧 **İçerik Yapılandırması**: `content.config.ts` şeması güncellendi
- 🖼️ **Resim Yol Optimizasyonu**: Yerel resimler için `/images/` yolu desteği
- ☁️ **Contentful Entegrasyonu**: İsteğe bağlı bulut tabanlı CMS desteği
- 📄 **Dokümantasyon**: Detaylı CMS kurulum ve kullanım kılavuzu

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