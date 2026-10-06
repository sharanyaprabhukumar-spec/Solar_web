globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { a as HTTPError, i as toEventHandler, n as defineHandler, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-09-09T09:16:22.818Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"1342-2PiAxrILfeNgXu0RRQuurmoBeDs\"",
		"mtime": "2026-09-09T09:16:22.817Z",
		"size": 4930,
		"path": "../public/favicon.png"
	},
	"/assets/createLucideIcon-DsNdYd3H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a5-aZb+FHIkp6fcFg2SswEsirptDGU\"",
		"mtime": "2026-10-06T19:41:01.665Z",
		"size": 1189,
		"path": "../public/assets/createLucideIcon-DsNdYd3H.js"
	},
	"/assets/admin.solar-leads-DpOsWyDd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"195a-Iz6vtg9ptiPGf9GqfLWtAplNRfw\"",
		"mtime": "2026-10-06T19:41:01.663Z",
		"size": 6490,
		"path": "../public/assets/admin.solar-leads-DpOsWyDd.js"
	},
	"/assets/hero-rooftop-solar-CIqKA7qp.jpg": {
		"type": "image/jpeg",
		"etag": "\"328eb-Svri88a/ibtXaGbx0LVpT25D77M\"",
		"mtime": "2026-10-06T19:41:01.670Z",
		"size": 207083,
		"path": "../public/assets/hero-rooftop-solar-CIqKA7qp.jpg"
	},
	"/assets/shield-check-CcQX54NC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-dsQhEHZcfoshnHSvP6L+kbRMPB4\"",
		"mtime": "2026-10-06T19:41:01.665Z",
		"size": 320,
		"path": "../public/assets/shield-check-CcQX54NC.js"
	},
	"/assets/arrow-right-DtFA6Lsb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-eL3GB9SzULTWSze6wGkpXCRrcuU\"",
		"mtime": "2026-10-06T19:41:01.663Z",
		"size": 165,
		"path": "../public/assets/arrow-right-DtFA6Lsb.js"
	},
	"/assets/admin.login-BTCCHMql.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b98-KXP7rFkBCS2D2Az9qVTAX/8/gqI\"",
		"mtime": "2026-10-06T19:41:01.663Z",
		"size": 2968,
		"path": "../public/assets/admin.login-BTCCHMql.js"
	},
	"/assets/routes-CNdxMNs_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"44d9-BPKOuhL/jXcpEXGFd8DlisBOI3A\"",
		"mtime": "2026-10-06T19:41:01.665Z",
		"size": 17625,
		"path": "../public/assets/routes-CNdxMNs_.js"
	},
	"/assets/industrial-solar-Rf9MikOK.jpg": {
		"type": "image/jpeg",
		"etag": "\"40965-TDhDTmAcO1i7w7GtN2A4dojSzCM\"",
		"mtime": "2026-10-06T19:41:01.670Z",
		"size": 264549,
		"path": "../public/assets/industrial-solar-Rf9MikOK.jpg"
	},
	"/assets/solar-calculations-C104ZoND.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f3f-nbrujWeL3M41LIOW0by99BAa9+8\"",
		"mtime": "2026-10-06T19:41:01.665Z",
		"size": 3903,
		"path": "../public/assets/solar-calculations-C104ZoND.js"
	},
	"/assets/solar-calculator-DjnaI-dT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c24-XHG56ZI7cV+3VafhlprkZusUj1c\"",
		"mtime": "2026-10-06T19:41:01.667Z",
		"size": 7204,
		"path": "../public/assets/solar-calculator-DjnaI-dT.js"
	},
	"/assets/sun-B3M1A_P5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21f-zEVTKvrELEuJZoMSDbGtXvxyIoA\"",
		"mtime": "2026-10-06T19:41:01.667Z",
		"size": 543,
		"path": "../public/assets/sun-B3M1A_P5.js"
	},
	"/assets/svc-consult-bqh-mHF7.jpg": {
		"type": "image/jpeg",
		"etag": "\"10419-93xQ+pFQ3M8h7nHvQzg9sFEolJ4\"",
		"mtime": "2026-10-06T19:41:01.672Z",
		"size": 66585,
		"path": "../public/assets/svc-consult-bqh-mHF7.jpg"
	},
	"/assets/svc-groundmount-C3FV8lBu.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c84c-2gPcq+gP6tXeoVtOKYjQ7G6jNEk\"",
		"mtime": "2026-10-06T19:41:01.672Z",
		"size": 116812,
		"path": "../public/assets/svc-groundmount-C3FV8lBu.jpg"
	},
	"/assets/svc-rooftop-CPdp4z4v.jpg": {
		"type": "image/jpeg",
		"etag": "\"ca5b-JGD/r68X3Q2zEb7Gu3+eSpPEOWQ\"",
		"mtime": "2026-10-06T19:41:01.673Z",
		"size": 51803,
		"path": "../public/assets/svc-rooftop-CPdp4z4v.jpg"
	},
	"/assets/svc-om-CbfkFWdh.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c820-g60QoQVnEvR/NnNLVJTmy7sa/5Y\"",
		"mtime": "2026-10-06T19:41:01.673Z",
		"size": 116768,
		"path": "../public/assets/svc-om-CbfkFWdh.jpg"
	},
	"/assets/sys-offgrid-WUphgwLD.jpg": {
		"type": "image/jpeg",
		"etag": "\"18edf-HZ8MTjn3nxSN50dPgKUI473JxqY\"",
		"mtime": "2026-10-06T19:41:01.675Z",
		"size": 102111,
		"path": "../public/assets/sys-offgrid-WUphgwLD.jpg"
	},
	"/assets/svc-pump-JhNHVJxO.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d35b-XtBmTRO55PNVjB2XG78fTeSLE9M\"",
		"mtime": "2026-10-06T19:41:01.673Z",
		"size": 119643,
		"path": "../public/assets/svc-pump-JhNHVJxO.jpg"
	},
	"/assets/sys-ongrid-Cd_xkBQf.jpg": {
		"type": "image/jpeg",
		"etag": "\"100a3-OC7R+Z4l5Y29kV435nZnZ2eeeXA\"",
		"mtime": "2026-10-06T19:41:01.675Z",
		"size": 65699,
		"path": "../public/assets/sys-ongrid-Cd_xkBQf.jpg"
	},
	"/assets/sys-hybrid-7y_SH-4T.jpg": {
		"type": "image/jpeg",
		"etag": "\"9c57-UtGRa7f8ninR2vltqALBjRHTkoE\"",
		"mtime": "2026-10-06T19:41:01.675Z",
		"size": 40023,
		"path": "../public/assets/sys-hybrid-7y_SH-4T.jpg"
	},
	"/assets/TrueBright Energy Solutions Logo-BbbfaLEJ.png": {
		"type": "image/png",
		"etag": "\"93efe-IWQu65PzyJ3mNl69gKqFXB5OFVw\"",
		"mtime": "2026-10-06T19:41:01.667Z",
		"size": 605950,
		"path": "../public/assets/TrueBright Energy Solutions Logo-BbbfaLEJ.png"
	},
	"/assets/styles-LTMFz0Ws.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14917-PEU5ypSS9ZG9EPuBG0XpYc6siRM\"",
		"mtime": "2026-10-06T19:41:01.672Z",
		"size": 84247,
		"path": "../public/assets/styles-LTMFz0Ws.css"
	},
	"/assets/index-Dh45y9Kn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"55d0a-MF8ZZSlPQmxzx8X8u/uVQ490YME\"",
		"mtime": "2026-10-06T19:41:01.663Z",
		"size": 351498,
		"path": "../public/assets/index-Dh45y9Kn.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_08KqdJ = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_08KqdJ
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
