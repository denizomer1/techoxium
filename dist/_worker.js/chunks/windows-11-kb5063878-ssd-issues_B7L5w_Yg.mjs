globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createGetHeadings, a as createContentComponent, b as assetsConfig, $ as $$Renderer } from './runtime-assets-config_gqg0Kuxc.mjs';

const markdocConfig = {};
markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };



const experimentalHeadingIdCompat = false;

const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,9],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,9],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,9],\"inline\":true,\"attributes\":{\"content\":\"Microsoft began rolling out KB5063878 for Windows 11 24H2 last Tuesday to fix sign-in delays on new devices. Since the update some users report major errors with SSD storage drives, including performance drops and freezes.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":9}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":9}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":9}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,11],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,11],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,11],\"inline\":true,\"attributes\":{\"content\":\"Quick steps:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":11}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":11}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":11}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[12,14],\"inline\":false,\"attributes\":{\"ordered\":false,\"marker\":\"-\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[12,13],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[12,13],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[12,13],\"inline\":true,\"attributes\":{\"content\":\"If you experience SSD problems after the update, roll back the update (Settings > System > Recovery) and check for firmware updates from your drive manufacturer.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":12},\"end\":{\"line\":13}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":12},\"end\":{\"line\":13}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":12},\"end\":{\"line\":13}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[13,14],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[13,14],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[13,14],\"inline\":true,\"attributes\":{\"content\":\"Run \"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":13},\"end\":{\"line\":14}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[13,14],\"inline\":true,\"attributes\":{\"content\":\"chkdsk /f\"},\"children\":[],\"type\":\"code\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":13},\"end\":{\"line\":14}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[13,14],\"inline\":true,\"attributes\":{\"content\":\" to check for disk errors and contact vendor support if issues persist.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":13},\"end\":{\"line\":14}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":13},\"end\":{\"line\":14}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":13},\"end\":{\"line\":14}}}],\"type\":\"list\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":12},\"end\":{\"line\":14}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
