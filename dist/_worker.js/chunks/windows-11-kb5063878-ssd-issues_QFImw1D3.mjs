globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createGetHeadings, a as createContentComponent, b as assetsConfig, $ as $$Renderer } from './runtime-assets-config_gqg0Kuxc.mjs';

const markdocConfig = {};
markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };



const experimentalHeadingIdCompat = false;

const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":true,\"attributes\":{\"content\":\"Microsoft, Windows 11 24H2 için KB5063878 güncellemesini geçen Salı dağıtmaya başladı; amaç yeni cihazlarda oturum açma gecikmelerini düzeltmekti. Ancak bazı kullanıcı raporları, güncelleme sonrası SSD sürücülerinde performans düşüşü ve anlık kilitlenmeler bildiriyor.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[9,10],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[9,10],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[9,10],\"inline\":true,\"attributes\":{\"content\":\"Kısa öneriler:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":9},\"end\":{\"line\":10}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":9},\"end\":{\"line\":10}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":9},\"end\":{\"line\":10}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[11,13],\"inline\":false,\"attributes\":{\"ordered\":false,\"marker\":\"-\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[11,12],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[11,12],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[11,12],\"inline\":true,\"attributes\":{\"content\":\"Eğer güncellemeden sonra SSD sorunları yaşıyorsanız, güncellemeyi geri alın (Ayarlar > Sistem > Kurtarma) ve üretici firmware güncellemelerini kontrol edin.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":11},\"end\":{\"line\":12}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":11},\"end\":{\"line\":12}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":11},\"end\":{\"line\":12}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[12,13],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[12,13],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[12,13],\"inline\":true,\"attributes\":{\"content\":\"chkdsk /f\"},\"children\":[],\"type\":\"code\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":12},\"end\":{\"line\":13}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[12,13],\"inline\":true,\"attributes\":{\"content\":\" ile disk hatalarını kontrol edin ve gerekiyorsa üretici desteğine başvurun.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":12},\"end\":{\"line\":13}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":12},\"end\":{\"line\":13}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":12},\"end\":{\"line\":13}}}],\"type\":\"list\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":11},\"end\":{\"line\":13}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

const getHeadings = createGetHeadings(stringifiedAst, markdocConfig, options, experimentalHeadingIdCompat);
const Content = createContentComponent(
	$$Renderer,
	stringifiedAst,
	markdocConfig,
  options,
	tagComponentMap,
	nodeComponentMap,
	experimentalHeadingIdCompat,
);

export { Content, getHeadings };
