(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Djrq:function(e,o,t){"use strict";t.r(o);var a=t("CcnG"),c=t("r45k"),d=function(){this.item={cols:1,urls:{"zh-CN":"packages/mock/docs/getting-started.md"},content:{"zh-CN":{content:'<article><h2 id="\u5199\u5728\u524d\u9762">\u5199\u5728\u524d\u9762<a onclick="window.location.hash = \'\u5199\u5728\u524d\u9762\'" class="anchor">#</a></h2><p>Mock \u662f\u6307\u901a\u8fc7\u751f\u6210\u6a21\u62df\u6570\u636e\u8ba9\u524d\u7aef\u5f00\u53d1\u4eba\u5458\u72ec\u7acb\u4e8e\u540e\u7aef\u8fdb\u884c\u5f00\u53d1\uff0c\u6709\u65f6\u6211\u4eec\u4e5f\u4f1a\u8fd0\u7528\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\u3002</p><p><code>@delon/mock</code> \u662f\u4e00\u4e2a\u7b80\u5355 Mock \u529f\u80fd\uff0c\u5305\u62ec\u4ee5\u4e0b\u51e0\u4e2a\u7279\u5f81\uff1a</p><ul><li><p>\u4efb\u610f Angular \u9879\u76ee</p></li><li><p>\u5f00\u53d1\u65e0\u4fb5\u5165</p></li><li><p>\u8d85\u7b80\u5355\u7528\u6cd5</p></li><li><p>\u652f\u6301 <a target="_blank" href="http://mockjs.com/" data-url="http://mockjs.com/">mock.js</a></p></li></ul><h2 id="\u5982\u4f55\u4f7f\u7528\uff1f">\u5982\u4f55\u4f7f\u7528\uff1f<a onclick="window.location.hash = \'\u5982\u4f55\u4f7f\u7528\uff1f\'" class="anchor">#</a></h2><p>\u5b89\u88c5 <code>@delon/mock</code> \u4f9d\u8d56\u5305\uff1a</p><pre class="hljs language-bash"><code>npm install @delon/mock --save-dev</code></pre><p>\u5728\u6839\u6a21\u5757 <code>AppModule</code> \u5bfc\u5165 <a href="/mock/rule" data-url="/mock/rule">Mock \u89c4\u5219\u6570\u636e</a>\u548c <code>DelonMockModule</code>\uff1b</p><pre class="hljs language-$1"><code>import { DelonMockModule } from \'@delon/mock\';\nimport * as MOCKDATA from \'../../_mock\';\n// \u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\nimport { environment } from \'../environments/environment\';\nconst MOCKMODULE = !environment.production ? [ DelonMockModule.forRoot({ data: MOCKDATA }) ] : [];\n\n@NgModule({\n  imports: [\n    ...MOCKMODULE\n  ]\n})</code></pre><h3 id="MockOptions-\u914d\u7f6e">MockOptions \u914d\u7f6e<a onclick="window.location.hash = \'MockOptions-\u914d\u7f6e\'" class="anchor">#</a></h3><p><code>forRoot</code> \u53c2\u6570\u8fd8\u5305\u62ec\uff1a</p><table><thead><tr><th>\u53c2\u6570\u540d</th><th>\u7c7b\u578b</th><th>\u9ed8\u8ba4\u503c</th><th>\u63cf\u8ff0</th></tr></thead><tbody><tr><td><code>[data]</code></td><td><code>any</code></td><td>-</td><td>Mock \u6570\u636e\u89c4\u5219</td></tr><tr><td><code>[delay]</code></td><td><code>number</code></td><td><code>300</code></td><td>\u8bf7\u6c42\u5ef6\u8fdf\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2</td></tr><tr><td><code>[force]</code></td><td><code>boolean</code></td><td><code>false</code></td><td>\u662f\u5426\u5f3a\u5236\u6240\u6709\u8bf7\u6c42\u90fdMock\uff0c<code>true</code> \u8868\u793a\u5f53\u8bf7\u6c42\u7684URL\u4e0d\u5b58\u5728\u65f6\u76f4\u63a5\u8fd4\u56de 404 \u9519\u8bef\uff0c<code>false</code> \u8868\u793a\u672a\u547d\u4e2d\u65f6\u53d1\u9001\u771f\u5b9eHTTP\u8bf7\u6c42</td></tr><tr><td><code>[log]</code></td><td><code>boolean</code></td><td><code>true</code></td><td>\u662f\u5426\u6253\u5370 Mock \u8bf7\u6c42\u4fe1\u606f\uff0c\u5f25\u8865\u6d4f\u89c8\u5668\u65e0Network\u4fe1\u606f\uff1b\u5f53\u8bf7\u6c42\u7ecf\u8fc7 Mock \u4f1a\u63a5\u6536\u3010\ud83d\udc7dMock\u3011</td></tr></tbody></table><h3 id="\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\uff1f">\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\uff1f<a onclick="window.location.hash = \'\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\uff1f\'" class="anchor">#</a></h3><p>Mock \u5e76\u975e\u662f\u771f\u5b9e\u6570\u636e\uff0c\u5927\u90e8\u5206\u573a\u666f\u662f\u9488\u5bf9\u5f00\u53d1\u672c\u5730\u6216\u6d4b\u8bd5\u73af\u5883\uff1b\u6240\u4ee5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4e0d\u5e94\u8be5\u5305\u62ec Mock \u6a21\u5757\u4ee5\u53ca\u89c4\u5219\u6570\u636e\u3002\u56e0\u6b64\u4e0a\u8ff0\u624d\u4f1a\u6839\u636e <code>!environment.production</code> \u4f9d\u636e\u73af\u5883\u6765\u51b3\u5b9a\u662f\u5426\u52a0\u8f7d <code>DelonMockModule</code>\u3002</p><p>\u5f53\u7136\uff0c\u4f60\u4f9d\u7136\u53ef\u4ee5\u5728\u751f\u4ea7\u73af\u5883\u4e5f\u4f7f\u7528\u8fd9\u79cd\u89c4\u5219\uff0c\u5c31\u50cf <a target="_blank" href="https://cipchk.github.io/ng-alain/" data-url="https://cipchk.github.io/ng-alain/">https://cipchk.github.io/ng-alain/</a> \u4e00\u6837\uff0c\u9700\u8981\u4e00\u4e9b\u6a21\u62df\u8bf7\u6c42\u6765\u4fdd\u8bc1\u73af\u5883\u7684\u8fd0\u884c\u3002</p><pre class="hljs language-$1"><code>import { DelonMockModule } from \'@delon/mock\';\nimport * as MOCKDATA from \'../../_mock\';\n@NgModule({\n  imports: [\n    DelonMockModule.forRoot({ data: MOCKDATA })\n  ]\n})</code></pre></article>',meta:{order:1,title:"\u5f00\u59cb\u4f7f\u7528",type:"Documents"},toc:[{href:"#\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{href:"#\u5982\u4f55\u4f7f\u7528\uff1f",title:"\u5982\u4f55\u4f7f\u7528\uff1f",h:2},{href:"#MockOptions-\u914d\u7f6e",title:"MockOptions \u914d\u7f6e",h:3},{href:"#\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\uff1f",title:"\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\uff1f",h:3}]}},demo:!1},this.codes=[]},n=function(){this.item={cols:1,urls:{"zh-CN":"packages/mock/docs/rule.md"},content:{"zh-CN":{content:"<article><h2 id=\"\u5199\u5728\u524d\u9762\">\u5199\u5728\u524d\u9762<a onclick=\"window.location.hash = '\u5199\u5728\u524d\u9762'\" class=\"anchor\">#</a></h2><p>Mock \u89c4\u5219\u6570\u636e\u662f\u4e00\u4e2a <code>Object</code> \u5bf9\u8c61\uff0cKey \u4e3a\u8bf7\u6c42\u57df\u58f0\u660e\uff0cValue \u4e3a\u54cd\u5e94\u5185\u5bb9\uff0c\u4f8b\u5982\uff1a</p><pre class=\"hljs language-$1\"><code>export const USERS = {\n  'GET /users': { users: [1, 2], total: 2 },\n}</code></pre><p>\u8868\u793a\u5f53\u901a\u8fc7 <code>HttpClient.get('/users')</code> \u8bbf\u95ee\u65f6\uff0c\u4f1a\u76f4\u63a5\u8fd4\u56de <code>{ users: [1, 2], total: 2 }</code>\uff0c\u5e76\u4e14\u4e0d\u4f1a\u53d1\u9001\u4efb\u4f55 HTTP \u8bf7\u6c42\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 <code>Network</code> \u9762\u677f\u6765\u786e\u8ba4\u3002</p><h2 id=\"Key-\u8bf7\u6c42\u57df\u58f0\u660e\">Key \u8bf7\u6c42\u57df\u58f0\u660e<a onclick=\"window.location.hash = 'Key-\u8bf7\u6c42\u57df\u58f0\u660e'\" class=\"anchor\">#</a></h2><p>\u4f7f\u7528 <code>' '</code> \u7a7a\u683c\u6765\u533a\u9694\u8bf7\u6c42\u65b9\u6cd5\u548cURL\uff0c\u8bf7\u6c42\u65b9\u6cd5\u53ef\u5ffd\u7565\uff0c\u9ed8\u8ba4\u4e3a <code>GET</code>\uff1bURL \u652f\u6301\u8def\u7531\u53c2\u6570\u548c\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u4e00\u4e9b\u6709\u6548\u7684 Key\uff1a</p><pre class=\"hljs language-$1\"><code>export const USERS = {\n  'GET /users': null,\n  // GET \u53ef\u7701\u7565\n  '/users/1': null,\n  // POST \u8bf7\u6c42\n  'POST /users/1': null,\n  // \u8def\u7531\u53c2\u6570\n  '/users/:id': null,\n  // \u4f7f\u7528 () \u8868\u793a\uff1a\u6b63\u5219\u8868\u8fbe\u5f0f\n  '/data/(.*)': null\n};</code></pre><blockquote><p>\u8def\u7531\u53c2\u6570\u503c\u901a\u8fc7 <code>MockRequest</code> \u6765\u83b7\u53d6\u3002</p></blockquote><h2 id=\"Value-\u54cd\u5e94\u5185\u5bb9\">Value \u54cd\u5e94\u5185\u5bb9<a onclick=\"window.location.hash = 'Value-\u54cd\u5e94\u5185\u5bb9'\" class=\"anchor\">#</a></h2><p>\u54cd\u5e94\u5185\u5bb9\u53ea\u652f\u6301\u4e09\u79cd\u7c7b\u578b\uff1a<code>Object</code>\u3001<code>Array</code>\u3001<code>(req: MockRequest) => any</code>\u3002</p><pre class=\"hljs language-$1\"><code>import { MockStatusError } from '@delon/mock';\n\nexport const USERS = {\n  // Array\n  '/users': [ { uid: 1 }, { uid: 2 } ],\n  // Object\n  '/users': { uid: 1 },\n  // Function\n  '/qs': (req: MockRequest) =&gt; req.queryString.pi,\n  // \u53d1\u9001 Status \u9519\u8bef\n  '/404': () =&gt; { throw new MockStatusError(404); }\n};</code></pre><h3 id=\"MockRequest\">MockRequest<a onclick=\"window.location.hash = 'MockRequest'\" class=\"anchor\">#</a></h3><table><thead><tr><th>\u540d\u79f0</th><th>\u7c7b\u578b</th><th>\u63cf\u8ff0</th></tr></thead><tbody><tr><td><code>[params]</code></td><td><code>any</code></td><td>\u8def\u7531\u53c2\u6570\uff0c<code>/:id</code> \u5219 <code>params.id</code></td></tr><tr><td><code>[queryString]</code></td><td><code>any</code></td><td>URL\u53c2\u6570\uff0c<code>/users?pi=1&ps=10</code> \u5219 <code>queryString.pi</code>\u3001<code>queryString.ps</code></td></tr><tr><td><code>[headers]</code></td><td><code>any</code></td><td>Headers \u503c</td></tr><tr><td><code>[body]</code></td><td><code>any</code></td><td>\u8bf7\u6c42 body</td></tr><tr><td><code>[original]</code></td><td><code>HttpRequest&lt;any></code></td><td>\u539f\u59cb <code>HttpRequest</code></td></tr></tbody></table><h3 id=\"MockStatusError\">MockStatusError<a onclick=\"window.location.hash = 'MockStatusError'\" class=\"anchor\">#</a></h3><p>\u5f53\u4f60\u5e0c\u671b\u54cd\u5e94\u4e00\u4e2a <code>404</code> \u5f02\u5e38\u65f6\u3002</p><h2 id=\"\u4e00\u4e9b\u793a\u4f8b\">\u4e00\u4e9b\u793a\u4f8b<a onclick=\"window.location.hash = '\u4e00\u4e9b\u793a\u4f8b'\" class=\"anchor\">#</a></h2><pre class=\"hljs language-$1\"><code>import { MockStatusError } from '@delon/mock';\n\nexport const USERS = {\n  // \u652f\u6301\u503c\u4e3a Object \u548c Array\n  'GET /users': { users: [1, 2], total: 2 },\n  // GET \u53ef\u7701\u7565\n  '/users/1': { users: [1, 2], total: 2 },\n  // POST \u8bf7\u6c42\n  'POST /users/1': { uid: 1 },\n  // \u83b7\u53d6\u8bf7\u6c42\u53c2\u6570 queryString\u3001headers\u3001body\n  '/qs': (req: MockRequest) =&gt; req.queryString.pi,\n  // \u8def\u7531\u53c2\u6570\n  '/users/:id': (req: MockRequest) =&gt; req.params, // /users/100, output: { id: 100 }\n  // \u53d1\u9001 Status \u9519\u8bef\n  '/404': () =&gt; { throw new MockStatusError(404); },\n  // \u4f7f\u7528 () \u8868\u793a\uff1a\u6b63\u5219\u8868\u8fbe\u5f0f\n  '/data/(.*)': (req: MockRequest) =&gt; req\n};</code></pre><h2 id=\"\u5b58\u50a8\u89c4\u5219\">\u5b58\u50a8\u89c4\u5219<a onclick=\"window.location.hash = '\u5b58\u50a8\u89c4\u5219'\" class=\"anchor\">#</a></h2><p>\u4e00\u822c\u6765\u8bf4 Mock \u90fd\u662f\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u9700\u8981\uff0c\u56e0\u6b64\u5efa\u8bae\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a <code>_mock</code> \u76ee\u5f55\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a <code>index.ts</code> \u6587\u4ef6\u7528\u4e8e\u5bfc\u51fa\u6240\u6709\u6570\u636e\u89c4\u5219\uff0c\u53c2\u8003 <a target=\"_blank\" href=\"https://github.com/cipchk/ng-alain/tree/master/_mock\" data-url=\"https://github.com/cipchk/ng-alain/tree/master/_mock\">ng-alain/_mock</a>\u3002</p></article>",meta:{order:2,title:"\u89c4\u5219\u6570\u636e",type:"Documents"},toc:[{href:"#\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{href:"#Key-\u8bf7\u6c42\u57df\u58f0\u660e",title:"Key \u8bf7\u6c42\u57df\u58f0\u660e",h:2},{href:"#Value-\u54cd\u5e94\u5185\u5bb9",title:"Value \u54cd\u5e94\u5185\u5bb9",h:2},{href:"#MockRequest",title:"MockRequest",h:3},{href:"#MockStatusError",title:"MockStatusError",h:3},{href:"#\u4e00\u4e9b\u793a\u4f8b",title:"\u4e00\u4e9b\u793a\u4f8b",h:2},{href:"#\u5b58\u50a8\u89c4\u5219",title:"\u5b58\u50a8\u89c4\u5219",h:2}]}},demo:!1},this.codes=[]},b=function(){},l=t("pMnS"),r=t("ebDo"),s=t("GYi0"),u=t("R6D3"),i=t("WP5L"),F=t("71F0"),h=t("fE+l"),p=t("0RMT"),k=t("QcbP"),m=t("0D9X"),M=t("SpJI"),g=t("hBP+"),f=t("QPFe"),y=t("RdGh"),S=t("D9vs"),q=t("DyZ0"),w=t("TY3c"),R=t("u+Cy"),O=t("8+8K"),T=t("YVZs"),E=t("F/j7"),D=t("/EOF"),v=t("ZKYL"),C=t("SZk1"),A=t("5eO6"),j=t("p+4O"),x=t("bLMo"),K=t("ieBQ"),z=t("651C"),P=t("AKjh"),U=t("Z4UC"),G=t("ZYCi"),H=t("ZYjt"),Y=a.vb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function Z(e){return a.Rb(0,[(e()(),a.xb(0,0,null,null,1,"app-docs",[],null,null,null,K.b,K.a)),a.wb(1,245760,null,0,z.a,[P.a,U.a,G.o,H.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(e,o){var t=o.component;e(o,1,0,t.codes,t.item)},null)}var L=a.tb("app-mock-getting-started",d,function(e){return a.Rb(0,[(e()(),a.xb(0,0,null,null,1,"app-mock-getting-started",[],null,null,null,Z,Y)),a.wb(1,49152,null,0,d,[],null,null)],null,null)},{},{},[]),N=a.vb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function Q(e){return a.Rb(0,[(e()(),a.xb(0,0,null,null,1,"app-docs",[],null,null,null,K.b,K.a)),a.wb(1,245760,null,0,z.a,[P.a,U.a,G.o,H.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(e,o){var t=o.component;e(o,1,0,t.codes,t.item)},null)}var V=a.tb("app-mock-rule",n,function(e){return a.Rb(0,[(e()(),a.xb(0,0,null,null,1,"app-mock-rule",[],null,null,null,Q,N)),a.wb(1,49152,null,0,n,[],null,null)],null,null)},{},{},[]),_=t("Ip0R"),X=t("gIcY"),W=t("t/Na"),B=t("M2Lx"),I=t("6Cds"),J=t("eDkP"),$=t("Fzqc"),ee=t("jE6/"),oe=t("Bob9"),te=t("Ybye"),ae=t("dWZg"),ce=t("4c35"),de=t("qAlS"),ne=t("9J0+"),be=t("CGSU"),le=t("5CFV"),re=t("GTZx"),se=t("hS58"),ue=t("XZsx"),ie=t("+ndR"),Fe=t("EWQH"),he=t("HjCm"),pe=t("aq9g"),ke=t("7Dpl"),me=t("ekmu"),Me=t("vjj7"),ge=t("qdwt"),fe=t("l/Xz"),ye=t("sRo1"),Se=t("mX2v"),qe=t("BQzg"),we=t("hDaA"),Re=t("YQXl"),Oe=t("M3JP"),Te=t("WNQ9"),Ee=t("5Oon"),De=t("lM9c"),ve=t("OSVY"),Ce=t("MNSj"),Ae=t("MZBU"),je=t("ev4S"),xe=t("G1y0"),Ke=t("KmAc"),ze=t("zGKZ"),Pe=t("xly9"),Ue=t("u7PB"),Ge=t("1Ry3"),He=t("4+vV"),Ye=t("ZgPA"),Ze=t("37MH"),Le=t("fZ1T"),Ne=t("iwTp"),Qe=t("mSU2"),Ve=t("4vQL"),_e=t("iTTW"),Xe=t("gQlp"),We=t("oCVe"),Be=t("XYAa"),Ie=t("qT06"),Je=t("A7o+"),$e=t("gMdr"),eo=t("AYLd"),oo=t("ADoS"),to=t("slxf");t.d(o,"MockModuleNgFactory",function(){return ao});var ao=a.ub(b,[],function(e){return a.Eb([a.Fb(512,a.k,a.ib,[[8,[l.a,r.uc,r.vc,r.wc,r.xc,r.yc,r.zc,r.Ac,r.Bc,s.a,u.a,i.a,F.a,h.a,p.a,k.a,m.a,M.a,g.a,f.a,y.a,S.a,q.a,w.a,R.a,O.a,T.a,E.a,D.a,v.a,C.a,A.a,j.a,x.a,L,V]],[3,a.k],a.A]),a.Fb(4608,_.q,_.p,[a.x,[2,_.D]]),a.Fb(4608,X.w,X.w,[]),a.Fb(4608,X.d,X.d,[]),a.Fb(4608,W.m,W.s,[_.e,a.E,W.q]),a.Fb(4608,W.t,W.t,[W.m,W.r]),a.Fb(5120,W.a,function(e){return[e]},[W.t]),a.Fb(4608,W.p,W.p,[]),a.Fb(6144,W.n,null,[W.p]),a.Fb(4608,W.l,W.l,[W.n]),a.Fb(6144,W.b,null,[W.l]),a.Fb(4608,W.g,W.o,[W.b,a.t]),a.Fb(4608,W.c,W.c,[W.g]),a.Fb(4608,B.c,B.c,[]),a.Fb(5120,I.Fe,I.He,[[3,I.Fe],I.Ge]),a.Fb(4608,_.f,_.f,[a.x]),a.Fb(5120,I.Ce,I.De,[[3,I.Ce],I.Ee,I.Fe,_.f]),a.Fb(4608,J.d,J.d,[J.k,J.f,a.k,J.i,J.g,a.t,a.C,_.e,$.b]),a.Fb(5120,J.l,J.m,[J.d]),a.Fb(5120,I.Y,I.Z,[_.e,[3,I.Y]]),a.Fb(4608,I.mb,I.mb,[]),a.Fb(4608,I.Gb,I.Gb,[]),a.Fb(4608,I.od,I.od,[J.d]),a.Fb(4608,I.Td,I.Td,[J.d,a.t,a.k,a.g]),a.Fb(4608,I.ae,I.ae,[J.d,a.t,a.k,a.g]),a.Fb(4608,I.ke,I.ke,[[3,I.ke]]),a.Fb(4608,I.me,I.me,[J.d,I.Fe,I.ke]),a.Fb(4608,ee.c,ee.c,[]),a.Fb(4608,oe.d,oe.d,[_.e]),a.Fb(4608,te.a,te.a,[I.f]),a.Fb(1073742336,_.c,_.c,[]),a.Fb(1073742336,X.u,X.u,[]),a.Fb(1073742336,X.h,X.h,[]),a.Fb(1073742336,G.s,G.s,[[2,G.y],[2,G.o]]),a.Fb(1073742336,X.r,X.r,[]),a.Fb(1073742336,W.e,W.e,[]),a.Fb(1073742336,W.d,W.d,[]),a.Fb(1073742336,B.d,B.d,[]),a.Fb(1073742336,ae.b,ae.b,[]),a.Fb(1073742336,I.Dd,I.Dd,[]),a.Fb(1073742336,I.xe,I.xe,[]),a.Fb(1073742336,I.k,I.k,[]),a.Fb(1073742336,I.n,I.n,[]),a.Fb(1073742336,I.m,I.m,[]),a.Fb(1073742336,I.p,I.p,[]),a.Fb(1073742336,$.a,$.a,[]),a.Fb(1073742336,ce.e,ce.e,[]),a.Fb(1073742336,de.a,de.a,[]),a.Fb(1073742336,J.h,J.h,[]),a.Fb(1073742336,I.t,I.t,[]),a.Fb(1073742336,I.Ae,I.Ae,[]),a.Fb(1073742336,I.D,I.D,[]),a.Fb(1073742336,I.I,I.I,[]),a.Fb(1073742336,I.K,I.K,[]),a.Fb(1073742336,I.T,I.T,[]),a.Fb(1073742336,I.bb,I.bb,[]),a.Fb(1073742336,I.W,I.W,[]),a.Fb(1073742336,I.db,I.db,[]),a.Fb(1073742336,I.fb,I.fb,[]),a.Fb(1073742336,I.nb,I.nb,[]),a.Fb(1073742336,I.qb,I.qb,[]),a.Fb(1073742336,I.sb,I.sb,[]),a.Fb(1073742336,I.vb,I.vb,[]),a.Fb(1073742336,I.yb,I.yb,[]),a.Fb(1073742336,I.Cb,I.Cb,[]),a.Fb(1073742336,I.Lb,I.Lb,[]),a.Fb(1073742336,I.Eb,I.Eb,[]),a.Fb(1073742336,I.Ob,I.Ob,[]),a.Fb(1073742336,I.Qb,I.Qb,[]),a.Fb(1073742336,I.Sb,I.Sb,[]),a.Fb(1073742336,I.Ub,I.Ub,[]),a.Fb(1073742336,I.Wb,I.Wb,[]),a.Fb(1073742336,I.Yb,I.Yb,[]),a.Fb(1073742336,I.fc,I.fc,[]),a.Fb(1073742336,I.kc,I.kc,[]),a.Fb(1073742336,I.mc,I.mc,[]),a.Fb(1073742336,I.pc,I.pc,[]),a.Fb(1073742336,I.tc,I.tc,[]),a.Fb(1073742336,I.vc,I.vc,[]),a.Fb(1073742336,I.yc,I.yc,[]),a.Fb(1073742336,I.Jc,I.Jc,[]),a.Fb(1073742336,I.Ic,I.Ic,[]),a.Fb(1073742336,I.Hc,I.Hc,[]),a.Fb(1073742336,I.jd,I.jd,[]),a.Fb(1073742336,I.ld,I.ld,[]),a.Fb(1073742336,I.pd,I.pd,[]),a.Fb(1073742336,I.yd,I.yd,[]),a.Fb(1073742336,I.Cd,I.Cd,[]),a.Fb(1073742336,I.Hd,I.Hd,[]),a.Fb(1073742336,I.Md,I.Md,[]),a.Fb(1073742336,I.Od,I.Od,[]),a.Fb(1073742336,I.Ud,I.Ud,[]),a.Fb(1073742336,I.be,I.be,[]),a.Fb(1073742336,I.ee,I.ee,[]),a.Fb(1073742336,I.he,I.he,[]),a.Fb(1073742336,I.ne,I.ne,[]),a.Fb(1073742336,I.pe,I.pe,[]),a.Fb(1073742336,I.re,I.re,[]),a.Fb(1073742336,I.ve,I.ve,[]),a.Fb(1073742336,I.ye,I.ye,[]),a.Fb(1073742336,I.a,I.a,[]),a.Fb(1073742336,ne.a,ne.a,[I.c]),a.Fb(1073742336,be.a,be.a,[]),a.Fb(1073742336,le.a,le.a,[]),a.Fb(1073742336,re.a,re.a,[]),a.Fb(1073742336,se.a,se.a,[]),a.Fb(1073742336,ue.a,ue.a,[]),a.Fb(1073742336,ie.a,ie.a,[]),a.Fb(1073742336,Fe.a,Fe.a,[]),a.Fb(1073742336,he.a,he.a,[]),a.Fb(1073742336,pe.a,pe.a,[]),a.Fb(1073742336,ke.a,ke.a,[]),a.Fb(1073742336,me.a,me.a,[]),a.Fb(1073742336,Me.a,Me.a,[]),a.Fb(1073742336,ge.a,ge.a,[]),a.Fb(1073742336,fe.a,fe.a,[]),a.Fb(1073742336,ye.a,ye.a,[]),a.Fb(1073742336,Se.a,Se.a,[]),a.Fb(1073742336,qe.a,qe.a,[]),a.Fb(1073742336,we.a,we.a,[]),a.Fb(1073742336,ee.b,ee.b,[]),a.Fb(1073742336,Re.a,Re.a,[]),a.Fb(1073742336,Oe.a,Oe.a,[]),a.Fb(1073742336,Te.a,Te.a,[]),a.Fb(1073742336,Ee.a,Ee.a,[]),a.Fb(1073742336,De.a,De.a,[]),a.Fb(1073742336,ve.a,ve.a,[]),a.Fb(1073742336,Ce.a,Ce.a,[]),a.Fb(1073742336,Ae.a,Ae.a,[]),a.Fb(1073742336,je.a,je.a,[]),a.Fb(1073742336,xe.a,xe.a,[]),a.Fb(1073742336,Ke.a,Ke.a,[]),a.Fb(1073742336,ze.a,ze.a,[]),a.Fb(1073742336,Pe.a,Pe.a,[]),a.Fb(1073742336,Ue.a,Ue.a,[]),a.Fb(1073742336,Ge.a,Ge.a,[]),a.Fb(1073742336,He.a,He.a,[]),a.Fb(1073742336,Ye.a,Ye.a,[]),a.Fb(1073742336,Ze.a,Ze.a,[]),a.Fb(1073742336,Le.a,Le.a,[]),a.Fb(1073742336,Ne.a,Ne.a,[]),a.Fb(1073742336,Qe.a,Qe.a,[]),a.Fb(1073742336,Ve.a,Ve.a,[]),a.Fb(1073742336,_e.a,_e.a,[]),a.Fb(1073742336,Xe.a,Xe.a,[]),a.Fb(1073742336,We.a,We.a,[]),a.Fb(1073742336,Be.a,Be.a,[]),a.Fb(1073742336,Ie.a,Ie.a,[]),a.Fb(1073742336,Je.h,Je.h,[]),a.Fb(1073742336,$e.b,$e.b,[]),a.Fb(1073742336,eo.a,eo.a,[]),a.Fb(1073742336,oe.c,oe.c,[]),a.Fb(1073742336,oo.c,oo.c,[]),a.Fb(1073742336,to.a,to.a,[]),a.Fb(1073742336,b,b,[]),a.Fb(256,W.q,"XSRF-TOKEN",[]),a.Fb(256,W.r,"X-XSRF-TOKEN",[]),a.Fb(256,I.Ge,!1,[]),a.Fb(256,I.Ee,void 0,[]),a.Fb(256,I.Qd,{nzDuration:3e3,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),a.Fb(256,I.Xd,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),a.Fb(1024,G.m,function(){return[[{path:"",component:c.a,children:[{path:"",redirectTo:"getting-started",pathMatch:"full"},{path:"getting-started",component:d},{path:"rule",component:n}]}]]},[])])})}}]);