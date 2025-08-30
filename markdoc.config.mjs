import { defineMarkdocConfig } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    iframe: {
      render: 'iframe',
      attributes: {
        src: { type: String },
        title: { type: String },
        frameborder: { type: String },
        allow: { type: String },
        allowfullscreen: { type: Boolean },
        loading: { type: String },
        referrerpolicy: { type: String }
      }
    }
  }
});
