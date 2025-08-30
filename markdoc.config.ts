import { defineMarkdocConfig } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    iframe: {
      render: 'iframe',
      attributes: {
        src: { type: String },
        width: { type: String },
        height: { type: String },
        frameborder: { type: String },
        allow: { type: String },
        allowfullscreen: { type: Boolean },
        loading: { type: String },
        title: { type: String },
        referrerpolicy: { type: String }
      }
    },
    div: {
      render: 'div',
      attributes: {
        class: { type: String }
      }
    }
  }
});
