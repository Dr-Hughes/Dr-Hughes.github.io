var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),l=/* @__PURE__ */ (e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")}),u=Object.defineProperty,d=(e,t)=>u(e,`name`,{value:t,configurable:!0}),f=(e=>typeof l<`u`?l:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof l<`u`?l:e)[t]}):e)(function(e){if(typeof l<`u`)return l.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),ee=(()=>{for(var e=/* @__PURE__ */ new Uint8Array(128),t=0;t<64;t++)e[t<26?t+65:t<52?t+71:t<62?t-4:t*4-205]=t;return t=>{for(var n=t.length,r=new Uint8Array((n-(t[n-1]==`=`)-(t[n-2]==`=`))*3/4|0),i=0,a=0;i<n;){var o=e[t.charCodeAt(i++)],s=e[t.charCodeAt(i++)],c=e[t.charCodeAt(i++)],l=e[t.charCodeAt(i++)];r[a++]=o<<2|s>>4,r[a++]=s<<4|c>>2,r[a++]=c<<6|l}return r}})();function te(e){return!isNaN(parseFloat(e))&&isFinite(e)}d(te,`_isNumber`);function p(e){return e.charAt(0).toUpperCase()+e.substring(1)}d(p,`_capitalize`);function m(e){return function(){return this[e]}}d(m,`_getter`);var h=[`isConstructor`,`isEval`,`isNative`,`isToplevel`],g=[`columnNumber`,`lineNumber`],_=[`fileName`,`functionName`,`source`],v=h.concat(g,_,[`args`],[`evalOrigin`]);function y(e){if(e)for(var t=0;t<v.length;t++)e[v[t]]!==void 0&&this[`set`+p(v[t])](e[v[t]])}for(d(y,`StackFrame`),y.prototype={getArgs:d(function(){return this.args},`getArgs`),setArgs:d(function(e){if(Object.prototype.toString.call(e)!==`[object Array]`)throw TypeError(`Args must be an Array`);this.args=e},`setArgs`),getEvalOrigin:d(function(){return this.evalOrigin},`getEvalOrigin`),setEvalOrigin:d(function(e){if(e instanceof y)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new y(e);else throw TypeError(`Eval Origin must be an Object or StackFrame`)},`setEvalOrigin`),toString:d(function(){var e=this.getFileName()||``,t=this.getLineNumber()||``,n=this.getColumnNumber()||``,r=this.getFunctionName()||``;return this.getIsEval()?e?`[eval] (`+e+`:`+t+`:`+n+`)`:`[eval]:`+t+`:`+n:r?r+` (`+e+`:`+t+`:`+n+`)`:e+`:`+t+`:`+n},`toString`)},y.fromString=d(function(e){var t=e.indexOf(`(`),n=e.lastIndexOf(`)`),r=e.substring(0,t),i=e.substring(t+1,n).split(`,`),a=e.substring(n+1);if(a.indexOf(`@`)===0)var o=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(a,``),s=o[1],c=o[2],l=o[3];return new y({functionName:r,args:i||void 0,fileName:s,lineNumber:c||void 0,columnNumber:l||void 0})},`StackFrame$$fromString`),b=0;b<h.length;b++)y.prototype[`get`+p(h[b])]=m(h[b]),y.prototype[`set`+p(h[b])]=function(e){return function(t){this[e]=!!t}}(h[b]);var b;for(x=0;x<g.length;x++)y.prototype[`get`+p(g[x])]=m(g[x]),y.prototype[`set`+p(g[x])]=function(e){return function(t){if(!te(t))throw TypeError(e+` must be a Number`);this[e]=Number(t)}}(g[x]);var x;for(S=0;S<_.length;S++)y.prototype[`get`+p(_[S])]=m(_[S]),y.prototype[`set`+p(_[S])]=function(e){return function(t){this[e]=String(t)}}(_[S]);var S,C=y;function w(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:d(function(t){if(t.stack&&t.stack.match(e))return this.parseV8OrIE(t);if(t.stack)return this.parseFFOrSafari(t);throw Error(`Cannot parse given Error object`)},`ErrorStackParser$$parse`),extractLocation:d(function(e){if(e.indexOf(`:`)===-1)return[e];var t=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g,``));return[t[1],t[2]||void 0,t[3]||void 0]},`ErrorStackParser$$extractLocation`),parseV8OrIE:d(function(t){return t.stack.split(`
`).filter(function(t){return!!t.match(e)},this).map(function(e){e.indexOf(`(eval `)>-1&&(e=e.replace(/eval code/g,`eval`).replace(/(\(eval at [^()]*)|(,.*$)/g,``));var t=e.replace(/^\s+/,``).replace(/\(eval code/g,`(`).replace(/^.*?\s+/,``),n=t.match(/ (\(.+\)$)/);t=n?t.replace(n[0],``):t;var r=this.extractLocation(n?n[1]:t);return new C({functionName:n&&t||void 0,fileName:[`eval`,`<anonymous>`].indexOf(r[0])>-1?void 0:r[0],lineNumber:r[1],columnNumber:r[2],source:e})},this)},`ErrorStackParser$$parseV8OrIE`),parseFFOrSafari:d(function(e){return e.stack.split(`
`).filter(function(e){return!e.match(t)},this).map(function(e){if(e.indexOf(` > eval`)>-1&&(e=e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,`:$1`)),e.indexOf(`@`)===-1&&e.indexOf(`:`)===-1)return new C({functionName:e});var t=/((.*".+"[^@]*)?[^@]*)(?:@)/,n=e.match(t),r=n&&n[1]?n[1]:void 0,i=this.extractLocation(e.replace(t,``));return new C({functionName:r,fileName:i[0],lineNumber:i[1],columnNumber:i[2],source:e})},this)},`ErrorStackParser$$parseFFOrSafari`)}}d(w,`ErrorStackParser`);var ne=new w;function re(){return typeof API<`u`&&API!==globalThis.API?API.runtimeEnv:ie({IN_BUN:typeof Bun<`u`,IN_DENO:typeof Deno<`u`,IN_NODE:typeof process==`object`&&typeof process.versions==`object`&&typeof process.versions.node==`string`&&!process.browser,IN_SAFARI:typeof navigator==`object`&&typeof navigator.userAgent==`string`&&navigator.userAgent.indexOf(`Chrome`)===-1&&navigator.userAgent.indexOf(`Safari`)>-1,IN_SHELL:typeof read==`function`&&typeof load==`function`,IN_WORKERD:typeof navigator==`object`&&navigator.userAgent?.includes(`Cloudflare-Workers`)})}d(re,`getGlobalRuntimeEnv`);var T=re();function ie(e){let t=e.IN_NODE&&typeof module<`u`&&module.exports&&typeof f==`function`&&typeof __dirname==`string`,n=e.IN_NODE&&!t,r=!e.IN_NODE&&!e.IN_DENO&&!e.IN_BUN,i=r&&typeof window<`u`&&typeof window.document<`u`&&typeof document.createElement==`function`&&`sessionStorage`in window&&typeof globalThis.importScripts!=`function`,a=r&&typeof globalThis.WorkerGlobalScope<`u`&&typeof globalThis.self<`u`&&globalThis.self instanceof globalThis.WorkerGlobalScope;if(a&&E())throw Error(`Classic web workers are not supported`);let o={...e,IN_BROWSER:r,IN_BROWSER_MAIN_THREAD:i,IN_BROWSER_WEB_WORKER:a,IN_NODE_COMMONJS:t,IN_NODE_ESM:n};if(!(o.IN_BROWSER_MAIN_THREAD||o.IN_BROWSER_WEB_WORKER||o.IN_NODE||o.IN_SHELL||o.IN_WORKERD))throw Error(`Cannot determine runtime environment: ${JSON.stringify(o)}`);return o}d(ie,`calculateDerivedFlags`);function E(){try{return globalThis.importScripts(`data:text/javascript,`),!0}catch{return!1}}d(E,`isClassicWorker`);var D,O,k,A;async function j(){if(!T.IN_NODE||(D=(await import(`./__vite-browser-external-Dvyvthli.js`).then(e=>/* @__PURE__ */ c(e.default,1))).default,k=await import(`./__vite-browser-external-Dvyvthli.js`).then(e=>/* @__PURE__ */ c(e.default,1)),A=await import(`./__vite-browser-external-Dvyvthli.js`).then(e=>/* @__PURE__ */ c(e.default,1)),(await import(`./__vite-browser-external-Dvyvthli.js`).then(e=>/* @__PURE__ */ c(e.default,1))).default,O=await import(`./__vite-browser-external-Dvyvthli.js`).then(e=>/* @__PURE__ */ c(e.default,1)),F=O.sep,typeof f<`u`))return;let e={fs:k,crypto:await import(`./__vite-browser-external-Dvyvthli.js`).then(e=>/* @__PURE__ */ c(e.default,1)),ws:await import(`./__vite-browser-external-Dvyvthli.js`).then(e=>/* @__PURE__ */ c(e.default,1)),child_process:await import(`./__vite-browser-external-Dvyvthli.js`).then(e=>/* @__PURE__ */ c(e.default,1))};globalThis.require=function(t){return e[t]}}d(j,`initNodeModules`);function M(e,t){return O.resolve(t||`.`,e)}d(M,`node_resolvePath`);function N(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}d(N,`browser_resolvePath`);var P=T.IN_NODE?M:T.IN_SHELL?d(e=>e,`resolvePath`):N,F;T.IN_NODE||(F=`/`);function I(e,t){return e.startsWith(`file://`)&&(e=e.slice(7)),e.includes(`://`)?{response:fetch(e)}:{binary:A.readFile(e).then(e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}}d(I,`node_getBinaryResponse`);function L(e,t){if(e.startsWith(`file://`)&&(e=e.slice(7)),e.includes(`://`))throw Error(`Shell cannot fetch urls`);return{binary:Promise.resolve(new Uint8Array(readbuffer(e)))}}d(L,`shell_getBinaryResponse`);function R(e,t){let n=new URL(e,location);return{response:fetch(n,t?{integrity:t}:{})}}d(R,`browser_getBinaryResponse`);var z=T.IN_NODE?I:T.IN_SHELL?L:R;async function B(e,t){let{response:n,binary:r}=z(e,t);if(r)return r;let i=await n;if(!i.ok)throw Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await i.arrayBuffer())}d(B,`loadBinaryFile`);var ae=T.IN_NODE?V:d(async e=>await import(e),`loadScript`);async function V(e){return e.startsWith(`file://`)&&(e=e.slice(7)),e.includes(`://`)?await import(e):await import(D.pathToFileURL(e).href)}d(V,`nodeLoadScript`);async function H(e){if(T.IN_NODE){await j();let t=await A.readFile(e,{encoding:`utf8`});return JSON.parse(t)}if(T.IN_SHELL){let t=read(e);return JSON.parse(t)}return await(await fetch(e)).json()}d(H,`loadLockFile`);async function U(){if(T.IN_NODE_COMMONJS)return __dirname;let e;try{throw Error()}catch(t){e=t}let t=ne.parse(e)[0].fileName;if(T.IN_NODE&&!t.startsWith(`file://`)&&(t=`file://${t}`),T.IN_NODE_ESM){let e=await import(`./__vite-browser-external-Dvyvthli.js`).then(e=>/* @__PURE__ */ c(e.default,1));return(await import(`./__vite-browser-external-Dvyvthli.js`).then(e=>/* @__PURE__ */ c(e.default,1))).fileURLToPath(e.dirname(t))}let n=t.lastIndexOf(F);if(n===-1)throw Error(`Could not extract indexURL path from pyodide module location. Please pass the indexURL explicitly to loadPyodide.`);return t.slice(0,n)}d(U,`calculateDirname`);function W(e){return e.substring(0,e.lastIndexOf(`/`)+1)||globalThis.location?.toString()||`.`}d(W,`calculateInstallBaseUrl`);function G(e){let t=e.FS,n=e.FS.filesystems.MEMFS,r=e.PATH,i={DIR_MODE:16895,FILE_MODE:33279,mount:d(function(e){if(!e.opts.fileSystemHandle)throw Error(`opts.fileSystemHandle is required`);return n.mount.apply(null,arguments)},`mount`),syncfs:d(async(e,t,n)=>{try{let r=i.getLocalSet(e),a=await i.getRemoteSet(e),o=t?a:r,s=t?r:a;await i.reconcile(e,o,s),n(null)}catch(e){n(e)}},`syncfs`),getLocalSet:d(e=>{let n=Object.create(null);function i(e){return e!==`.`&&e!==`..`}d(i,`isRealDir`);function a(e){return t=>r.join2(e,t)}d(a,`toAbsolute`);let o=t.readdir(e.mountpoint).filter(i).map(a(e.mountpoint));for(;o.length;){let e=o.pop(),r=t.stat(e);t.isDir(r.mode)&&o.push.apply(o,t.readdir(e).filter(i).map(a(e))),n[e]={timestamp:r.mtime,mode:r.mode}}return{type:`local`,entries:n}},`getLocalSet`),getRemoteSet:d(async e=>{let t=Object.create(null),n=await oe(e.opts.fileSystemHandle);for(let[a,o]of n)a!==`.`&&(t[r.join2(e.mountpoint,a)]={timestamp:o.kind===`file`?new Date((await o.getFile()).lastModified):/* @__PURE__ */ new Date,mode:o.kind===`file`?i.FILE_MODE:i.DIR_MODE});return{type:`remote`,entries:t,handles:n}},`getRemoteSet`),loadLocalEntry:d(e=>{let r=t.lookupPath(e,{}).node,i=t.stat(e);if(t.isDir(i.mode))return{timestamp:i.mtime,mode:i.mode};if(t.isFile(i.mode))return r.contents=n.getFileDataAsTypedArray(r),{timestamp:i.mtime,mode:i.mode,contents:r.contents};throw Error(`node type not supported`)},`loadLocalEntry`),storeLocalEntry:d((e,n)=>{if(t.isDir(n.mode))t.mkdirTree(e,n.mode);else if(t.isFile(n.mode))t.writeFile(e,n.contents,{canOwn:!0});else throw Error(`node type not supported`);t.chmod(e,n.mode),t.utime(e,n.timestamp,n.timestamp)},`storeLocalEntry`),removeLocalEntry:d(e=>{var n=t.stat(e);t.isDir(n.mode)?t.rmdir(e):t.isFile(n.mode)&&t.unlink(e)},`removeLocalEntry`),loadRemoteEntry:d(async e=>{if(e.kind===`file`){let t=await e.getFile();return{contents:new Uint8Array(await t.arrayBuffer()),mode:i.FILE_MODE,timestamp:new Date(t.lastModified)}}if(e.kind===`directory`)return{mode:i.DIR_MODE,timestamp:/* @__PURE__ */ new Date};throw Error(`unknown kind: `+e.kind)},`loadRemoteEntry`),storeRemoteEntry:d(async(e,n,i)=>{let a=e.get(r.dirname(n)),o=t.isFile(i.mode)?await a.getFileHandle(r.basename(n),{create:!0}):await a.getDirectoryHandle(r.basename(n),{create:!0});if(o.kind===`file`){let e=await o.createWritable();await e.write(i.contents),await e.close()}e.set(n,o)},`storeRemoteEntry`),removeRemoteEntry:d(async(e,t)=>{await e.get(r.dirname(t)).removeEntry(r.basename(t)),e.delete(t)},`removeRemoteEntry`),reconcile:d(async(e,n,a)=>{let o=0,s=[];Object.keys(n.entries).forEach(function(e){let r=n.entries[e],i=a.entries[e];(!i||t.isFile(r.mode)&&r.timestamp.getTime()>i.timestamp.getTime())&&(s.push(e),o++)}),s.sort();let c=[];if(Object.keys(a.entries).forEach(function(e){n.entries[e]||(c.push(e),o++)}),c.sort().reverse(),!o)return;let l=n.type===`remote`?n.handles:a.handles;for(let t of s){let n=r.normalize(t.replace(e.mountpoint,`/`)).substring(1);if(a.type===`local`){let e=l.get(n),r=await i.loadRemoteEntry(e);i.storeLocalEntry(t,r)}else{let e=i.loadLocalEntry(t);await i.storeRemoteEntry(l,n,e)}}for(let t of c)if(a.type===`local`)i.removeLocalEntry(t);else{let n=r.normalize(t.replace(e.mountpoint,`/`)).substring(1);await i.removeRemoteEntry(l,n)}},`reconcile`)};e.FS.filesystems.NATIVEFS_ASYNC=i}d(G,`initializeNativeFS`);var oe=d(async e=>{let t=[];async function n(e){for await(let r of e.values())t.push(r),r.kind===`directory`&&await n(r)}d(n,`collect`),await n(e);let r=/* @__PURE__ */ new Map;r.set(`.`,e);for(let n of t){let t=(await e.resolve(n)).join(`/`);r.set(t,n)}return r},`getFsHandles`),se=ee(`AGFzbQEAAAABDANfAGAAAW9gAW8BfwMDAgECBygCE0pzdl9HZXRFcnJvcl9pbXBvcnQAAA5Kc3ZFcnJvcl9DaGVjawABChMCBwD7AQD7GwsJACAA+xr7FAAL`),ce=async function(){if(!(globalThis.navigator&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&typeof navigator.maxTouchPoints<`u`&&navigator.maxTouchPoints>1)))try{let e=await WebAssembly.compile(se);return await WebAssembly.instantiate(e)}catch(e){if(e instanceof WebAssembly.CompileError)return;throw e}}();async function le(){let e=await ce;if(e)return e.exports;let t=Symbol(`error marker`);return{Jsv_GetError_import:d(()=>t,`Jsv_GetError_import`),JsvError_Check:d(e=>e===t,`JsvError_Check`)}}d(le,`getJsvErrorImport`);function K(e){let t={config:e,runtimeEnv:T},n={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:fe(e),print:e.stdout,printErr:e.stderr,onExit(e){n.exitCode=e},thisProgram:e._sysExecutable,arguments:e.args,API:t,locateFile:d(t=>e.indexURL+t,`locateFile`),instantiateWasm:pe(e.indexURL)};return n}d(K,`createSettings`);function q(e){return function(t){try{t.FS.mkdirTree(e)}catch(t){console.error(`Error occurred while making a home directory '${e}':`),console.error(t),console.error(`Using '/' for a home directory instead`),e=`/`}t.FS.chdir(e)}}d(q,`createHomeDirectory`);function J(e){return function(t){Object.assign(t.ENV,e)}}d(J,`setEnvironment`);function Y(e){return e?[async t=>{t.addRunDependency(`fsInitHook`);try{await e(t.FS,{sitePackages:t.API.sitePackages})}finally{t.removeRunDependency(`fsInitHook`)}}]:[]}d(Y,`callFsInitHook`);function ue(e){let t=e.HEAPU32[e._Py_Version>>>2];return[t>>>24&255,t>>>16&255,t>>>8&255]}d(ue,`computeVersionTuple`);function de(e){let t=B(e);return async e=>{e.API.pyVersionTuple=ue(e);let[n,r]=e.API.pyVersionTuple;e.FS.mkdirTree(`/lib`),e.API.sitePackages=`/lib/python${n}.${r}/site-packages`,e.FS.mkdirTree(e.API.sitePackages),e.FS.mkdirTree(`/lib/python${n}.${r}/lib-dynload`),e.addRunDependency(`install-stdlib`);try{let i=await t;e.FS.writeFile(`/lib/python${n}${r}.zip`,i)}catch(e){console.error(`Error occurred while installing the standard library:`),console.error(e)}finally{e.removeRunDependency(`install-stdlib`)}}}d(de,`installStdlib`);function fe(e){let t;return t=e.stdLibURL==null?e.indexURL+`python_stdlib.zip`:e.stdLibURL,[de(t),q(e.env.HOME),J(e.env),G,...Y(e.fsInit)]}d(fe,`getFileSystemInitializationFuncs`);function pe(e){if(typeof WasmOffsetConverter<`u`)return;let{binary:t,response:n}=z(e+`pyodide.asm.wasm`),r=le();return function(e,i){return async function(){let{Jsv_GetError_import:a,JsvError_Check:o}=await r;e.env.Jsv_GetError_import=a,e.env.JsvError_Check=o;try{let r;r=n?await WebAssembly.instantiateStreaming(n,e):await WebAssembly.instantiate(await t,e);let{instance:a,module:o}=r;i(a,o)}catch(e){console.warn(`wasm instantiation failed!`),console.warn(e)}}(),{}}}d(pe,`getInstantiateWasmFunc`);var me=`314.0.7`;function X(e){return e===void 0||e.endsWith(`/`)?e:e+`/`}d(X,`withTrailingSlash`);var he=me;async function ge(e={}){if(await j(),e.lockFileContents&&e.lockFileURL)throw Error(`Can't pass both lockFileContents and lockFileURL`);let t=e.indexURL||await U();if(t=X(P(t)),e.packageBaseUrl=X(e.packageBaseUrl),e.cdnUrl=X(e.packageBaseUrl??`https://cdn.jsdelivr.net/pyodide/v314.0.7/full/`),!e.lockFileContents){let n=e.lockFileURL??t+`pyodide-lock.json`;e.lockFileContents=H(n),e.packageBaseUrl??=W(n)}e.indexURL=t,e.packageCacheDir&&=X(P(e.packageCacheDir));let n={jsglobals:globalThis,stdin:globalThis.prompt?()=>globalThis.prompt():void 0,args:[],env:{},packages:[],packageCacheDir:e.packageBaseUrl,enableRunUntilComplete:!0,checkAPIVersion:!0,BUILD_ID:`990c3b51a9722d62434de2bbc9643732658d488c1b6d467f22c1b6beba80d497`},r=Object.assign(n,e);return r.env.HOME??=`/home/pyodide`,r.env.PYTHONINSPECT??=`1`,r}d(ge,`initializeConfiguration`);function _e(e){let t=K(e),n=t.API;return n.lockFilePromise=Promise.resolve(e.lockFileContents),t}d(_e,`createEmscriptenSettings`);async function ve(e){return e.createPyodideModule?e.createPyodideModule:(await ae(`${e.indexURL}pyodide.asm.mjs`)).default}d(ve,`loadWasmScript`);async function Z(e,t){if(!e._loadSnapshot)return;let n=await e._loadSnapshot,r=ArrayBuffer.isView(n)?n:new Uint8Array(n);return t.noInitialRun=!0,t.INITIAL_MEMORY=r.length,r}d(Z,`prepareSnapshot`);async function ye(e,t){let n=await e(t);if(t.exitCode!==void 0)throw new n.ExitStatus(t.exitCode);return n}d(ye,`instantiatePyodideModule`);function be(e,t){let n=e.API;if(t.pyproxyToStringRepr&&n.setPyProxyToStringMethod(!0),t.convertNullToNone&&n.setCompatNullToNone(!0),t.toJsLiteralMap&&n.setCompatToJsLiteralMap(!0),n.version!==`314.0.7`&&t.checkAPIVersion)throw Error(`Pyodide version does not match: '${he}' <==> '${n.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);e.locateFile=e=>{throw e.endsWith(`.so`)?/* @__PURE__ */ Error(`Failed to find dynamic library "${e}"`):/* @__PURE__ */ Error(`Unexpected call to locateFile("${e}")`)}}d(be,`configureAPI`);function xe(e,t,n){let r=e.API,i;return t&&(i=r.restoreSnapshot(t)),r.finalizeBootstrap(i,n._snapshotDeserializer)}d(xe,`bootstrapPyodide`);async function Se(e,t){let n=e._api;return n.sys.path.insert(0,``),n._pyodide.set_excepthook(),await n.packageIndexReady,n.initializeStreams(t.stdin,t.stdout,t.stderr),e}d(Se,`finalizeSetup`);async function Ce(e={}){let t=await ge(e),n=_e(t),r=await ve(t),i=await Z(t,n),a=await ye(r,n);return be(a,t),await Se(xe(a,i,t),t)}d(Ce,`loadPyodide`);var we=`# Pyodle student-code harness.
#
# Loaded once per interpreter boot (in the Web Worker, and by the node
# integration tests). The JS side calls \`run_student(...)\` once per Run.
#
# What a run gets:
#   - a fresh globals dict, so names never carry over between runs;
#   - its own builtins: input() reads from the Program input queue and reports
#     what it "typed" as an echo, __import__ refuses the browser-bridge modules
#     and hands out the turtle shim, exit()/quit() end the program cleanly;
#   - sys.stdout / sys.stderr / sys.stdin swapped for objects that stream to JS;
#   - a structured error (type, message, line, column, student-only traceback)
#     instead of a raw Pyodide traceback full of interpreter frames.

import builtins
import json
import linecache
import sys
import time
import traceback
import types

STUDENT_FILE = "<your code>"
MAX_OUTPUT_LINES = 5000
# Lines are not the only flood: print(i, end=" ") in a runaway loop never ends a line.
MAX_OUTPUT_CHARS = 200_000

# The modules that would let a program reach out of the sandbox the class is
# using (the JS bridge, the package installer). Everything else that is not in
# the standard library simply fails to import on its own.
BLOCKED_IMPORTS = frozenset({"js", "pyodide", "pyodide_js", "micropip", "_pyodide", "pyodide_http"})

_TURTLE_SHIM_SOURCE = None

# Snapshots taken when the harness loads, before any student code has run. A
# program that does \`builtins.len = None\` or \`random.randint = ...\` must not
# break every run after it, so both are put back after each run.
_CLEAN_BUILTINS = dict(builtins.__dict__)
_BOOT_MODULES = frozenset(sys.modules)
# Modules already loaded at boot (Pyodide itself imports random, for one) can't
# just be forgotten, so their namespace is copied the first time a student
# imports them and put back after every run.
_MODULE_SNAPSHOTS = {}


def _snapshot(module):
    name = getattr(module, "__name__", None)
    if name in _BOOT_MODULES and name not in _MODULE_SNAPSHOTS:
        _MODULE_SNAPSHOTS[name] = dict(module.__dict__)


def _restore_interpreter():
    for name, saved in _MODULE_SNAPSHOTS.items():
        module = sys.modules.get(name)
        if module is None:
            continue
        live = module.__dict__
        for key in [key for key in live if key not in saved]:
            del live[key]
        for key, value in saved.items():
            if live.get(key) is not value:
                live[key] = value
    live = builtins.__dict__
    for name in [name for name in live if name not in _CLEAN_BUILTINS]:
        del live[name]
    for name, value in _CLEAN_BUILTINS.items():
        if live.get(name) is not value:
            live[name] = value
    # Forget pure-Python modules the program imported, so the next run gets a
    # fresh copy rather than one this program patched. Extension modules stay.
    for name in [name for name in sys.modules if name not in _BOOT_MODULES]:
        module = sys.modules.get(name)
        path = getattr(module, "__file__", None) or ""
        if path.endswith(".py"):
            del sys.modules[name]


def install_turtle_shim(source):
    """Called once at boot with the turtle shim's source text."""
    global _TURTLE_SHIM_SOURCE
    _TURTLE_SHIM_SOURCE = source


class OutputLimitReached(BaseException):
    """Raised when a program prints more than MAX_OUTPUT_LINES lines.

    BaseException, so a student's \`except Exception:\` cannot swallow it and keep
    printing forever."""


class TurtleLimitReached(BaseException):
    """The turtle-moves cap, made uncatchable once a bare except has swallowed it."""


_abort_with = [OutputLimitReached]


def _abort_tracer(frame, event, arg):
    if frame.f_code.co_filename != STUDENT_FILE:
        return None
    # Only on a new line or call: raising during the 'exception' event would just
    # swap the exception the bare except is about to catch anyway (and CPython
    # drops a tracer that raises, so it would never fire again).
    if event in ("line", "call"):
        raise _abort_with[0]()
    return _abort_tracer


def arm_abort(exc_type=OutputLimitReached):
    """Make the stop stick: from now on, every line of student code raises again.

    A bare \`except:\` catches BaseException too, so one raise is not enough to end
    \`while True: try: print() except: pass\`. With a tracer on every student frame,
    the handler's own first line raises, and that escapes the try for good."""
    _abort_with[0] = exc_type
    sys.settrace(_abort_tracer)
    frame = sys._getframe(1)
    while frame is not None:
        if frame.f_code.co_filename == STUDENT_FILE:
            frame.f_trace = _abort_tracer
        frame = frame.f_back


class _StudentStream:
    def __init__(self, emit, kind, counter):
        self._emit = emit
        self._kind = kind
        self._counter = counter

    def write(self, text):
        if not isinstance(text, str):
            raise TypeError(f"write() argument must be str, not {type(text).__name__}")
        if self._counter[0] > MAX_OUTPUT_LINES or self._counter[1] > MAX_OUTPUT_CHARS:
            arm_abort()
            raise OutputLimitReached()
        if text:
            self._emit(self._kind, text)
            self._counter[0] += text.count("\\n")
            self._counter[1] += len(text)
            if self._counter[0] > MAX_OUTPUT_LINES or self._counter[1] > MAX_OUTPUT_CHARS:
                arm_abort()
                raise OutputLimitReached()
        return len(text)

    def writelines(self, lines):
        for line in lines:
            self.write(line)

    def flush(self):
        pass

    def isatty(self):
        return False

    @property
    def encoding(self):
        return "utf-8"


class _StudentStdin:
    def __init__(self, take):
        self._take = take

    def readline(self, size=-1):
        value = self._take()
        return "" if value is None else value + "\\n"

    def read(self, size=-1):
        parts = []
        while True:
            value = self._take()
            if value is None:
                break
            parts.append(value + "\\n")
        return "".join(parts)

    def __iter__(self):
        return self

    def __next__(self):
        line = self.readline()
        if line == "":
            raise StopIteration
        return line

    def isatty(self):
        return False


def _make_turtle_module(flush):
    module = types.ModuleType("turtle")
    module.__dict__["_pyodle_flush"] = flush
    module.__dict__["_pyodle_abort"] = lambda: arm_abort(TurtleLimitReached)
    exec(compile(_TURTLE_SHIM_SOURCE, "<turtle>", "exec"), module.__dict__)
    return module


def _student_frames(tb):
    return [frame for frame in traceback.extract_tb(tb) if frame.filename == STUDENT_FILE]


def describe_error(exc):
    """A JSON-ready description of an exception the student's program raised."""
    name = type(exc).__name__
    line = None
    col = None
    if isinstance(exc, SyntaxError) and (exc.filename in (STUDENT_FILE, None)):
        message = exc.msg
        line = exc.lineno
        col = exc.offset
    else:
        message = str(exc)
        frames = _student_frames(exc.__traceback__)
        if frames:
            line = frames[-1].lineno
    # from_exception (not format_exception_only(type, exc)) keeps the traceback, which
    # is what Python 3.12+ needs to work out "Did you mean: 'name'?" for NameError.
    only = "".join(traceback.TracebackException.from_exception(exc).format_exception_only()).rstrip()
    suggestion = ""
    for text_line in only.splitlines():
        marker = text_line.find("Did you mean")
        if marker != -1:
            suggestion = text_line[marker:].strip()
    if suggestion and suggestion not in message:
        message = f"{message}. {suggestion}"
    frames = _student_frames(exc.__traceback__)
    if frames:
        text = "Traceback (most recent call last):\\n" + "".join(traceback.format_list(frames)) + only
    else:
        text = only
    return {"type": name, "message": message, "line": line, "col": col, "text": text}


def run_student(source, stdin_json, emit, turtle_flush):
    """Run one program. Returns a JSON string: {"error": ..., "turtle": bool}.

    emit(kind, text): kind is "out", "err" or "input" (an echoed stdin line).
    turtle_flush(json_text): receives batches of turtle commands.
    """
    queue = list(json.loads(stdin_json))
    counter = [0, 0]  # lines, characters
    out = _StudentStream(emit, "out", counter)
    err = _StudentStream(emit, "err", counter)

    def take_line():
        if not queue:
            return None
        value = queue.pop(0)
        emit("input", value)
        return value

    def student_input(prompt=""):
        if prompt != "":
            out.write(str(prompt))
        value = take_line()
        if value is None:
            raise EOFError("EOF when reading a line")
        return value

    turtle_state = {"module": None}

    def student_import(name, globals=None, locals=None, fromlist=(), level=0):
        if level == 0:
            root = name.split(".")[0]
            if root in BLOCKED_IMPORTS:
                raise ImportError(
                    f"'{root}' is not available in Pyodle — only Python's built-in libraries are allowed."
                )
            if root == "turtle":
                if turtle_state["module"] is None:
                    turtle_state["module"] = _make_turtle_module(turtle_flush)
                return turtle_state["module"]
        module = builtins.__import__(name, globals, locals, fromlist, level)
        _snapshot(module)
        if fromlist:
            # \`from os import path\` patches path, not os: snapshot submodules too.
            for item in fromlist:
                child = getattr(module, item, None)
                if isinstance(child, types.ModuleType):
                    _snapshot(child)
        elif level == 0 and "." in name:
            leaf = sys.modules.get(name)
            if leaf is not None:
                _snapshot(leaf)
        return module

    def student_exit(code=None):
        raise SystemExit(code)

    student_builtins = dict(_CLEAN_BUILTINS)
    student_builtins["input"] = student_input
    student_builtins["__import__"] = student_import
    student_builtins["exit"] = student_exit
    student_builtins["quit"] = student_exit

    namespace = {"__name__": "__main__", "__builtins__": student_builtins}
    linecache.cache[STUDENT_FILE] = (len(source), None, source.splitlines(True), STUDENT_FILE)

    saved = (sys.stdout, sys.stderr, sys.stdin)
    sys.stdout, sys.stderr, sys.stdin = out, err, _StudentStdin(take_line)
    error = None
    try:
        code = compile(source, STUDENT_FILE, "exec")
        exec(code, namespace)
    except SystemExit as exc:
        # exit() / quit() / sys.exit() end the program; a message argument is
        # printed the way CPython would, a number is just a status code.
        if exc.code is not None and not isinstance(exc.code, int):
            err.write(str(exc.code) + "\\n")
    except OutputLimitReached:
        error = {
            "type": "OutputLimit",
            "message": (
                f"Your program printed more than {MAX_OUTPUT_LINES} lines "
                f"(or {MAX_OUTPUT_CHARS} characters), so it was stopped."
            ),
            "line": None,
            "col": None,
            "text": "",
        }
    except TurtleLimitReached:
        error = {
            "type": "RuntimeError",
            "message": "Your turtle made more than 50000 moves, so it was stopped. Is a loop running forever?",
            "line": None,
            "col": None,
            "text": "",
        }
    except BaseException as exc:  # noqa: BLE001 - every student error is reported
        error = describe_error(exc)
    finally:
        sys.settrace(None)
        sys.stdout, sys.stderr, sys.stdin = saved
        _restore_interpreter()
        module = turtle_state["module"]
        if module is not None:
            try:
                module._pyodle_finish()
            except BaseException:  # noqa: BLE001
                pass
        linecache.cache.pop(STUDENT_FILE, None)
        namespace.clear()

    return json.dumps({"error": error, "turtle": turtle_state["module"] is not None})


def now_ms():
    return time.time() * 1000
`,Te=`# Pyodle's turtle module.
#
# There is no Tk in the browser, so this stands in for the standard library's
# turtle: it keeps the same names and the same geometry (standard mode: 0
# degrees points east, positive angles turn anticlockwise, y points up), but
# instead of drawing it records commands. The JS side animates them on a canvas.
#
# The harness execs this file into a fresh module for every run, with
# \`_pyodle_flush(json_text)\` already in the namespace.

import json as _json
import math as _math

__all__ = [
    "Turtle", "Pen", "RawTurtle", "Screen", "TurtleScreen", "Terminator", "TurtleGraphicsError",
    "forward", "fd", "backward", "back", "bk", "left", "lt", "right", "rt",
    "goto", "setpos", "setposition", "teleport", "setx", "sety", "setheading", "seth", "home",
    "circle", "dot", "stamp", "write", "penup", "pu", "up", "pendown", "pd", "down",
    "pensize", "width", "pen", "color", "pencolor", "fillcolor", "begin_fill", "end_fill", "filling",
    "speed", "shape", "hideturtle", "ht", "showturtle", "st", "isvisible", "isdown",
    "position", "pos", "xcor", "ycor", "heading", "distance", "towards",
    "clear", "reset", "clearscreen", "resetscreen", "bgcolor", "title", "setup", "screensize",
    "tracer", "update", "delay", "colormode", "mode", "degrees", "radians",
    "done", "mainloop", "exitonclick", "bye", "listen", "onkey", "onkeypress", "onclick",
    "onscreenclick", "ontimer", "getscreen", "shapesize", "turtlesize",
]

MAX_COMMANDS = 50000
_BATCH = 500

_pending = []
_count = [0]
_screen = [None]
_default = [None]
_next_id = [0]
_colormode = [1.0]


class TurtleGraphicsError(Exception):
    pass


class Terminator(Exception):
    pass


def _emit(*command):
    _count[0] += 1
    if _count[0] > MAX_COMMANDS:
        _pyodle_abort()  # noqa: F821 - injected by the harness; a bare except can't keep it going
        raise RuntimeError(
            f"Your turtle made more than {MAX_COMMANDS} moves, so it was stopped. "
            "Is a loop running forever?"
        )
    _pending.append(list(command))
    if len(_pending) >= _BATCH:
        _flush()


def _flush():
    if _pending:
        _pyodle_flush(_json.dumps(_pending))  # noqa: F821 - injected by the harness
        _pending.clear()


def _pyodle_finish():
    _flush()


def _num(value, name="value"):
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        raise TurtleGraphicsError(f"{name} must be a number, got {value!r}")
    if value != value or value in (float("inf"), float("-inf")):
        raise TurtleGraphicsError(f"{name} must be a finite number, got {value!r}")
    return float(value)


def _round(value):
    rounded = round(value, 4)
    return 0.0 if rounded == 0 else rounded


# Tk accepts these names (spaces removed: "light blue" -> "lightblue"), and so does CSS.
_CSS_COLOURS = frozenset(
    """
    aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue
    blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk
    crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkgrey darkkhaki
    darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen
    darkslateblue darkslategray darkslategrey darkturquoise darkviolet deeppink deepskyblue
    dimgray dimgrey dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite
    gold goldenrod gray green greenyellow grey honeydew hotpink indianred indigo ivory khaki
    lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan
    lightgoldenrodyellow lightgray lightgreen lightgrey lightpink lightsalmon lightseagreen
    lightskyblue lightslategray lightslategrey lightsteelblue lightyellow lime limegreen linen
    magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen
    mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream
    mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid
    palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum
    powderblue purple rebeccapurple red rosybrown royalblue saddlebrown salmon sandybrown
    seagreen seashell sienna silver skyblue slateblue slategray slategrey snow springgreen
    steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen
    """.split()
)


def _css_colour(args):
    """Turtle colour arguments -> a CSS colour string."""
    if len(args) == 1:
        value = args[0]
    elif len(args) == 3:
        value = tuple(args)
    else:
        raise TurtleGraphicsError(f"bad colour arguments: {args!r}")
    if isinstance(value, str):
        text = value.strip()
        if text.startswith("#"):
            digits = text[1:]
            if len(digits) in (3, 6) and all(c in "0123456789abcdefABCDEF" for c in digits):
                return text.lower()
            raise TurtleGraphicsError(f"bad colour string: {value!r}")
        name = text.replace(" ", "").lower()
        if name not in _CSS_COLOURS:
            raise TurtleGraphicsError(f"bad color string: {value!r}")
        return name
    if isinstance(value, (tuple, list)) and len(value) == 3:
        scale = _colormode[0]
        channels = []
        for channel in value:
            number = _num(channel, "colour channel")
            if not 0 <= number <= scale:
                raise TurtleGraphicsError(f"bad colour sequence: {value!r}")
            channels.append(int(round(number / scale * 255)))
        return "#%02x%02x%02x" % tuple(channels)
    raise TurtleGraphicsError(f"bad colour: {value!r}")


class _Screen:
    def __init__(self):
        self._bg = "white"

    def bgcolor(self, *args):
        if not args:
            return self._bg
        self._bg = _css_colour(args)
        _emit("bg", self._bg)

    def colormode(self, cmode=None):
        if cmode is None:
            return _colormode[0]
        if cmode not in (1, 1.0, 255):
            raise TurtleGraphicsError("colormode must be 1.0 or 255")
        _colormode[0] = float(cmode)

    def title(self, *args, **kwargs):
        pass

    def setup(self, *args, **kwargs):
        pass

    def screensize(self, *args, **kwargs):
        return (400, 300)

    def tracer(self, *args, **kwargs):
        pass

    def update(self):
        pass

    def delay(self, *args):
        return 0

    def mode(self, *args):
        return "standard"

    def listen(self, *args):
        pass

    def onkey(self, *args, **kwargs):
        pass

    onkeypress = onkey
    onkeyrelease = onkey

    def onclick(self, *args, **kwargs):
        pass

    onscreenclick = onclick

    def ontimer(self, *args, **kwargs):
        pass

    def clear(self):
        _emit("clearall")

    clearscreen = clear
    reset = clear
    resetscreen = clear

    def turtles(self):
        return []

    def window_width(self):
        return 600

    def window_height(self):
        return 600

    def mainloop(self):
        pass

    done = mainloop

    def exitonclick(self):
        pass

    def bye(self):
        pass

    def register_shape(self, *args, **kwargs):
        pass

    addshape = register_shape

    def getcanvas(self):
        raise TurtleGraphicsError("getcanvas() is not available in Pyodle")


def Screen():
    if _screen[0] is None:
        _screen[0] = _Screen()
    return _screen[0]


TurtleScreen = _Screen


class Turtle:
    def __init__(self, shape="classic", undobuffersize=None, visible=True, **kwargs):
        self._id = _next_id[0]
        _next_id[0] += 1
        self._x = 0.0
        self._y = 0.0
        self._heading = 0.0
        self._down = True
        self._visible = bool(visible)
        self._filling = False
        self._pencolor = "black"
        self._fillcolor = "black"
        self._width = 1.0
        self._shape = shape
        self._degrees = 360.0
        _emit("new", self._id, self._shape, self._visible)

    # --- motion ------------------------------------------------------------
    def _to_rad(self, angle):
        return angle * 2 * _math.pi / self._degrees

    def _turn_to(self, heading):
        self._heading = heading % 360.0
        _emit("turn", self._id, _round(self._heading))

    def _move_to(self, x, y):
        self._x = x
        self._y = y
        _emit("move", self._id, _round(x), _round(y), self._down)

    def forward(self, distance):
        distance = _num(distance, "distance")
        angle = _math.radians(self._heading)
        self._move_to(self._x + distance * _math.cos(angle), self._y + distance * _math.sin(angle))

    fd = forward

    def backward(self, distance):
        self.forward(-_num(distance, "distance"))

    back = backward
    bk = backward

    def left(self, angle):
        degrees = _num(angle, "angle") * 360.0 / self._degrees
        self._turn_to(self._heading + degrees)

    lt = left

    def right(self, angle):
        degrees = _num(angle, "angle") * 360.0 / self._degrees
        self._turn_to(self._heading - degrees)

    rt = right

    def goto(self, x, y=None):
        if y is None:
            x, y = x
        self._move_to(_num(x, "x"), _num(y, "y"))

    setpos = goto
    setposition = goto

    def teleport(self, x=None, y=None, *, fill_gap=False):
        down = self._down
        self._down = False
        self._move_to(self._x if x is None else _num(x, "x"), self._y if y is None else _num(y, "y"))
        self._down = down

    def setx(self, x):
        self._move_to(_num(x, "x"), self._y)

    def sety(self, y):
        self._move_to(self._x, _num(y, "y"))

    def setheading(self, to_angle):
        self._turn_to(_num(to_angle, "angle") * 360.0 / self._degrees)

    seth = setheading

    def home(self):
        self._move_to(0.0, 0.0)
        self._turn_to(0.0)

    def circle(self, radius, extent=None, steps=None):
        radius = _num(radius, "radius")
        extent = 360.0 if extent is None else _num(extent, "extent") * 360.0 / self._degrees
        if steps is None:
            frac = abs(extent) / 360.0
            steps = 1 + int(min(11 + abs(radius) / 6.0, 59.0) * frac)
        steps = max(1, int(steps))
        w = extent / steps
        w2 = 0.5 * w
        length = 2.0 * radius * _math.sin(_math.radians(w2))
        if radius < 0:
            length, w, w2 = -length, -w, -w2
        self._turn_to(self._heading + w2)
        for _ in range(steps):
            self.forward(length)
            self._turn_to(self._heading + w)
        self._turn_to(self._heading - w2)

    def degrees(self, fullcircle=360.0):
        self._degrees = float(fullcircle)

    def radians(self):
        self._degrees = 2 * _math.pi

    # --- state queries -------------------------------------------------------
    def position(self):
        return (_round(self._x), _round(self._y))

    pos = position

    def xcor(self):
        return _round(self._x)

    def ycor(self):
        return _round(self._y)

    def heading(self):
        return _round(self._heading * self._degrees / 360.0)

    def distance(self, x, y=None):
        if y is None:
            if isinstance(x, Turtle):
                x, y = x._x, x._y
            else:
                x, y = x
        return _math.hypot(_num(x) - self._x, _num(y) - self._y)

    def towards(self, x, y=None):
        if y is None:
            if isinstance(x, Turtle):
                x, y = x._x, x._y
            else:
                x, y = x
        angle = _math.degrees(_math.atan2(_num(y) - self._y, _num(x) - self._x)) % 360.0
        return _round(angle * self._degrees / 360.0)

    def isdown(self):
        return self._down

    def isvisible(self):
        return self._visible

    def filling(self):
        return self._filling

    # --- pen -----------------------------------------------------------------
    def penup(self):
        self._down = False

    pu = penup
    up = penup

    def pendown(self):
        self._down = True

    pd = pendown
    down = pendown

    def pensize(self, width=None):
        if width is None:
            return self._width
        self._width = max(0.0, _num(width, "width"))
        _emit("width", self._id, self._width)

    width = pensize

    def pencolor(self, *args):
        if not args:
            return self._pencolor
        self._pencolor = _css_colour(args)
        _emit("pencolor", self._id, self._pencolor)

    def fillcolor(self, *args):
        if not args:
            return self._fillcolor
        self._fillcolor = _css_colour(args)
        _emit("fillcolor", self._id, self._fillcolor)

    def color(self, *args):
        if not args:
            return (self._pencolor, self._fillcolor)
        if len(args) == 2:
            self.pencolor(args[0])
            self.fillcolor(args[1])
        else:
            colour = _css_colour(args)
            self._pencolor = self._fillcolor = colour
            _emit("pencolor", self._id, colour)
            _emit("fillcolor", self._id, colour)

    def pen(self, pen=None, **pendict):
        settings = dict(pen or {}, **pendict)
        if not settings:
            return {
                "shown": self._visible, "pendown": self._down, "pencolor": self._pencolor,
                "fillcolor": self._fillcolor, "pensize": self._width, "speed": 6,
            }
        if "pendown" in settings:
            self._down = bool(settings["pendown"])
        if "pencolor" in settings:
            self.pencolor(settings["pencolor"])
        if "fillcolor" in settings:
            self.fillcolor(settings["fillcolor"])
        if "pensize" in settings:
            self.pensize(settings["pensize"])
        if "shown" in settings:
            (self.showturtle if settings["shown"] else self.hideturtle)()

    def begin_fill(self):
        self._filling = True
        _emit("fill", self._id, True)

    def end_fill(self):
        if self._filling:
            self._filling = False
            _emit("fill", self._id, False)

    def dot(self, size=None, *colour):
        if size is not None and not isinstance(size, (int, float)):
            colour = (size,) + colour
            size = None
        size = max(self._width + 4, self._width * 2) if size is None else _num(size, "size")
        css = _css_colour(colour) if colour else self._pencolor
        _emit("dot", self._id, size, css)

    def stamp(self):
        _emit("stamp", self._id)
        return 0

    def clearstamps(self, n=None):
        pass

    def write(self, arg, move=False, align="left", font=("Arial", 8, "normal")):
        size = 8
        if isinstance(font, (tuple, list)) and len(font) >= 2 and isinstance(font[1], (int, float)):
            size = font[1]
        _emit("write", self._id, str(arg), self._pencolor, str(align), size)

    def speed(self, speed=None):
        if speed is None:
            return 3
        names = {"fastest": 0, "fast": 10, "normal": 6, "slow": 3, "slowest": 1}
        if isinstance(speed, str):
            speed = names.get(speed, 6)
        speed = _num(speed, "speed")
        speed = int(round(speed)) if 0.5 < speed < 10.5 else 0
        _emit("speed", self._id, speed)

    def shape(self, name=None):
        if name is None:
            return self._shape
        self._shape = str(name)
        _emit("shape", self._id, self._shape)

    def shapesize(self, *args, **kwargs):
        pass

    turtlesize = shapesize

    def hideturtle(self):
        self._visible = False
        _emit("show", self._id, False)

    ht = hideturtle

    def showturtle(self):
        self._visible = True
        _emit("show", self._id, True)

    st = showturtle

    def clear(self):
        _emit("clear", self._id)

    def reset(self):
        self.clear()
        self._down = True
        self.home()

    def getscreen(self):
        return Screen()

    def onclick(self, *args, **kwargs):
        pass

    def undo(self):
        pass


Pen = Turtle
RawTurtle = Turtle
RawPen = Turtle


def _turtle():
    if _default[0] is None:
        _default[0] = Turtle()
    return _default[0]


def _bind(name):
    def function(*args, **kwargs):
        return getattr(_turtle(), name)(*args, **kwargs)

    function.__name__ = name
    return function


for _name in (
    "forward", "fd", "backward", "back", "bk", "left", "lt", "right", "rt", "goto", "setpos",
    "setposition", "teleport", "setx", "sety", "setheading", "seth", "home", "circle", "dot", "stamp",
    "write", "penup", "pu", "up", "pendown", "pd", "down", "pensize", "width", "pen", "color",
    "pencolor", "fillcolor", "begin_fill", "end_fill", "filling", "speed", "shape", "hideturtle",
    "ht", "showturtle", "st", "isvisible", "isdown", "position", "pos", "xcor", "ycor", "heading",
    "distance", "towards", "degrees", "radians", "shapesize", "turtlesize",
):
    globals()[_name] = _bind(_name)


def clear():
    _turtle().clear()


def reset():
    _turtle().reset()


def getscreen():
    return Screen()


def _screen_bind(name):
    def function(*args, **kwargs):
        return getattr(Screen(), name)(*args, **kwargs)

    function.__name__ = name
    return function


for _name in (
    "bgcolor", "title", "setup", "screensize", "tracer", "update", "delay", "colormode", "mode",
    "done", "mainloop", "exitonclick", "bye", "listen", "onkey", "onkeypress", "onscreenclick",
    "ontimer", "clearscreen", "resetscreen",
):
    globals()[_name] = _screen_bind(_name)

onclick = _screen_bind("onclick")
del _name
`;function Ee(e){let t=e.toPy({});e.runPython(we,{globals:t});let n=t.get(`install_turtle_shim`);n(Te),n.destroy();let r=t.get(`run_student`);return{run(e,t,n,i){let a=r(e,JSON.stringify(t),n,i);return JSON.parse(String(a))}}}let Q=null;function $(e){self.postMessage(e)}async function De(e){try{Q=Ee(await Ce({indexURL:e})),$({type:`ready`})}catch(e){$({type:`boot-failed`,message:e instanceof Error?e.message:String(e)})}}function Oe(e,t,n){if(Q===null){$({type:`done`,id:e,error:null,turtle:!1,durationMs:0});return}$({type:`started`,id:e});let r=[],i=performance.now(),a=()=>{r.length!==0&&($({type:`output`,id:e,segments:r}),r=[],i=performance.now())},o=(e,t)=>{let n=r[r.length-1];n!==void 0&&n.kind===e&&e!==`input`?n.text+=t:r.push({kind:e,text:t}),(r.length>=200||performance.now()-i>=50)&&a()},s=t=>{a(),$({type:`turtle`,id:e,commands:JSON.parse(t)})},c=performance.now(),l;try{l=Q.run(t,n,o,s)}catch(e){l={error:{type:`InternalError`,message:e instanceof Error?e.message:String(e),line:null,col:null,text:``},turtle:!1}}a(),$({type:`done`,id:e,error:l.error,turtle:l.turtle,durationMs:performance.now()-c})}self.onmessage=e=>{let t=e.data;t.type===`boot`?De(t.indexURL):t.type===`run`&&Oe(t.id,t.source,t.stdin)};export{o as t};