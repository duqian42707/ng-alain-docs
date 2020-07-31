(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{GAxd:function(e,o,n){"use strict";n.r(o);var t=n("CcnG"),c=n("r45k"),a=function(){this.item={cols:1,urls:{"zh-CN":"packages/auth/docs/get.md"},content:{"zh-CN":{content:'<article><p>Token \u7684\u83b7\u53d6\u5206\u4e3a\u4e24\u5927\u7c7b\uff0c\u4e00\u662f\u81ea\u5df1\u7684\u7528\u6237\u8ba4\u8bc1\u4e2d\u5fc3\uff0c\u4e8c\u662f\u793e\u4f1a\u5316\u767b\u5f55\uff08\u672c\u8d28\u4e0a\u8fd8\u662f\u9700\u8981\u8d70\u81ea\u5df1\u7684\u7528\u6237\u8ba4\u8bc1\u4e2d\u5fc3\uff09\u3002</p><h2 id="\u7528\u6237\u8ba4\u8bc1\u4e2d\u5fc3">\u7528\u6237\u8ba4\u8bc1\u4e2d\u5fc3<a onclick="window.location.hash = \'\u7528\u6237\u8ba4\u8bc1\u4e2d\u5fc3\'" class="anchor">#</a></h2><p>\u4e00\u822c\u6765\u8bf4\u540e\u7aef\u4f1a\u63d0\u4f9b\u4e00\u4e2aURL\u8ba4\u8bc1\u5730\u5740\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u5e73\u5e38\u8bbf\u95ee\u4e00\u4e2a\u666e\u901a HTTP \u8bf7\u6c42\u4e00\u6837\uff0c\u5c06\u7528\u6237\u8f93\u5165\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u7b49\u4fe1\u606f\u53d1\u9001\u7ed9\u7528\u6237\u8ba4\u8bc1\u4e2d\u5fc3\uff0c\u6700\u540e\u4f1a\u8fd4\u56de\u4e00\u4e2a\u7528\u6237\u4fe1\u606f\u5305\u542b Token\u3002\u56e0\u6b64\uff0c\u5bf9\u4e8e\u53ea\u9700\u8981\u5c06\u8fd9\u6b64<a href="/auth/set" data-url="/auth/set">Token\u4fe1\u606f\u5b58\u50a8</a>\u8d77\u6765\u5373\u53ef\u3002</p><h2 id="\u793e\u4f1a\u5316\u767b\u5f55">\u793e\u4f1a\u5316\u767b\u5f55<a onclick="window.location.hash = \'\u793e\u4f1a\u5316\u767b\u5f55\'" class="anchor">#</a></h2><p>\u4e00\u4e2a\u5b8c\u6574\u7684\u793e\u4f1a\u5316\u767b\u5f55\u5927\u6982\u9700\u8981\u4e24\u4e2a\u6b65\u9aa4\uff1a</p><ul><li><p>\u6253\u5f00\u7b2c\u4e09\u65b9\u6388\u6743\u6846</p></li><li><p>\u56de\u8c03\u540e\u83b7\u53d6\u8ba4\u8bc1\u4fe1\u606f\u5e76\u5bf9<a href="/auth/set" data-url="/auth/set">Token\u4fe1\u606f\u5b58\u50a8</a></p></li></ul><h3 id="\u6253\u5f00">\u6253\u5f00<a onclick="window.location.hash = \'\u6253\u5f00\'" class="anchor">#</a></h3><p><code>SocialService</code> \u63d0\u4f9b\u4e86 <code>open()</code> \u65b9\u6cd5\uff0c\u7528\u4e8e\u6253\u5f00\u4e00\u4e2a\u767b\u5f55\u6846\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5b83\u672c\u8eab\u5e76\u4e0d\u5728\u6ce8\u518c\u5230\u4efb\u4f55\u6a21\u5757\u5f53\u4e2d\uff0c\u56e0\u4e3a <code>@delon/auth</code> \u8ba4\u4e3a\u9700\u8981\u8fd9\u7c7b\u670d\u52a1\u901a\u5e38\u53ea\u4f1a\u5728\u767b\u5f55\u8fc7\u7a0b\u4e2d\u4ea7\u751f\uff0c\u56e0\u6b64\u6ca1\u6709\u5fc5\u8981\u5728\u5168\u5c40\u6ce8\u5165\uff1b\u53ea\u9700\u8981\u5728\u4f7f\u7528 <code>SocialService</code> \u5bf9\u5e94\u7ec4\u4ef6\u4e2d\u6ce8\u5165\u5373\u53ef\uff0c\u5f53\u7136\u4f60\u8981\u613f\u610f\u4e5f\u53ef\u4ee5\u5728\u6839\u6a21\u5757\u4e2d\u6ce8\u5165\u3002</p><pre class="hljs language-$1"><code>@Component({\n  providers: [ SocialService ]\n})\nexport class ProUserLoginComponent {\n  constructor(private socialService: SocialService) {}\n}</code></pre><p>\u6700\u540e\uff0c\u5229\u7528 <code>type</code> \u5c5e\u6027\u6307\u5b9a\u4ee5\u91c7\u7528\u4ec0\u4e48\u5f62\u5f0f\u6253\u5f00\u4e00\u4e2a\u6388\u6743\u6846\uff1a</p><pre class="hljs language-$1"><code>this.socialService.login(`//github.com/login/oauth/authorize?xxxxxx`, \'/\', { type: \'href\' });\n// \u6216\u4f7f\u7528 window.open \u6253\u5f00\u6388\u6743\u6846\u5e76\u8ba2\u9605\u7ed3\u679c\nthis.socialService.login(`//github.com/login/oauth/authorize?xxxxxx`, \'/\', {\n  type: \'window\'\n}).subscribe(res =&gt; {\n\n});</code></pre><h3 id="\u56de\u8c03">\u56de\u8c03<a onclick="window.location.hash = \'\u56de\u8c03\'" class="anchor">#</a></h3><p>\u56de\u8c03\u9875\u9762\u662f\u6307\u6388\u6743\u6210\u529f\u540e\u643a\u5e26\u7684\u8ba4\u8bc1\u4fe1\u606f\uff1b\u4ee5\u5f80\u4f60\u53ef\u80fd\u76f4\u63a5\u5728\u540e\u7aef\u5c06\u8ba4\u8bc1\u4fe1\u606f\u5199\u5165 Cookie \u4f1a\u81ea\u52a8\u5728\u8bf7\u6c42\u7ed3\u675f\u540e\u5199\u5165\u6d4f\u89c8\u5668\uff0c\u800c\u5bf9\u4e8e Angular \u8fd9\u7c7b\u5355\u9875\u800c\u8a00\uff0c\u7279\u522b\u662f\u524d\u540e\u7aef\u5206\u79bb\u90e8\u7f72\u65f6\uff0c\u8fd9\u79cd\u65b9\u5f0f\u53d8\u6210\u65e0\u6cd5\u5b9e\u73b0\u3002</p><p>\u56e0\u6b64 <code>@delon/auth</code> \u662f\u4ece\u56de\u8c03\u9875 URL \u5730\u5740\u4e0a\u643a\u5e26\u4fe1\u606f\u4f5c\u4e3a\u83b7\u53d6\u6e90\uff0c\u5f53\u7136\u5b83\u4f1a\u53d7 URL \u672c\u8eab\u53d7\u9650\uff08\u4f8b\u5982\uff1a\u957f\u5ea6\uff09\uff1b\u4f46\u6211\u60f3\u5bf9\u4e00\u4e2a Token \u503c\u662f\u8db3\u591f\u957f\u7684\uff0c\u4f60\u53ef\u4ee5\u83b7\u53d6\u5230 Token\uff0c\u518d\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002</p><p>\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u56de\u8c03\u7684\u9875\u9762\uff0c\u800c\u9875\u9762\u552f\u4e00\u8981\u505a\u7684\u5c31\u662f\u5728 <code>ngOnInit</code> \u65f6\u8c03\u7528 <code>callback()</code> \u65b9\u6cd5\uff08\u4f8b\u5982\uff1a<a target="_blank" href="https://github.com/cipchk/ng-alain/blob/master/src/app/routes/callback/callback.component.ts#L24" data-url="https://github.com/cipchk/ng-alain/blob/master/src/app/routes/callback/callback.component.ts#L24">callback.component.ts</a>\uff09\uff1a</p><pre class="hljs language-$1"><code>// 1\u3001\u9ed8\u8ba4\u6839\u636e\u5f53\u524dURL\u5730\u5740\nthis.socialService.callback();\n// 2\u3001\u975e `{ useHash: true }` \u8def\u7531\nthis.socialService.callback(`/callback?token=40SOJV-L8oOwwUIs&amp;name=cipchk&amp;uid=1`);\n// 3\u3001\u5e26\u6709 `{ useHash: true }` \u8def\u7531\nthis.socialService.callback(`/?token=40SOJV-L8oOwwUIs&amp;name=cipchk&amp;uid=1#/callback`);\n// 4\u3001\u6307\u5b9a `ITokenModel` \u5bf9\u8c61\nthis.socialService.callback(&lt;ITokenModel&gt;{\n  token: \'123456789\',\n  name: \'cipchk\',\n  id: 10000,\n  time: +new Date\n});</code></pre><p><code>callback()</code> \u4f1a\u628aURL\u81ea\u52a8\u8f6c\u6362\u6210\u6548\u7684 <code>ITokenModel</code>\u3002</p><blockquote><p>\u6ce8\uff1a\u5bf9\u4e8e <code>{ useHash: true }</code> \u7684\u8def\u7531\u5728\u5f88\u591a\u7b2c\u4e09\u65b9\u6388\u6743\u6846\u662f\u4e0d\u652f\u6301\u56de\u8c03\uff0c\u82e5\u662f\u81ea\u5df1\u7684\u8d26\u53f7\u4f53\u7cfb\uff0c\u4f60\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528\u7b2c3\u79cd\u793a\u4f8b\u4e2d\u7684URL\u5f62\u5f0f\u3002</p></blockquote></article>',meta:{order:2,title:"\u83b7\u53d6Token",type:"Documents"},toc:[{href:"#\u7528\u6237\u8ba4\u8bc1\u4e2d\u5fc3",title:"\u7528\u6237\u8ba4\u8bc1\u4e2d\u5fc3",h:2},{href:"#\u793e\u4f1a\u5316\u767b\u5f55",title:"\u793e\u4f1a\u5316\u767b\u5f55",h:2},{href:"#\u6253\u5f00",title:"\u6253\u5f00",h:3},{href:"#\u56de\u8c03",title:"\u56de\u8c03",h:3}]}},demo:!1},this.codes=[]},l=function(){this.item={cols:1,urls:{"zh-CN":"packages/auth/docs/getting-started.md"},content:{"zh-CN":{content:'<article><h2 id="\u5199\u5728\u524d\u9762">\u5199\u5728\u524d\u9762<a onclick="window.location.hash = \'\u5199\u5728\u524d\u9762\'" class="anchor">#</a></h2><p><code>@delon/auth</code> \u662f\u5bf9\u8ba4\u8bc1\u8fc7\u7a0b\u8fdb\u4e00\u6b65\u5904\u7406\uff0c\u901a\u5e38\u5176\u6838\u5fc3\u5728\u4e8e Access token \u7684\u83b7\u53d6\u3001\u4f7f\u7528\u73af\u8282\uff0c\u56e0\u6b64\u5c06\u96c6\u4e2d\u89e3\u51b3\u4ee5\u4e0b\u4e09\u4e2a\u95ee\u9898\uff1a</p><ul><li><p>\u5982\u4f55\u83b7\u53d6\u8ba4\u8bc1\u4fe1\u606f\u884c\u4e3a\u65b9\u5f0f\uff0c\u4f8b\u5982\uff1a\u8d26\u5bc6\u3001\u793e\u4f1a\u5316\u767b\u5f55Github\u7b49</p></li><li><p>\u5982\u4f55\u5b58\u53d6\u8ba4\u8bc1\u4fe1\u606f\uff0c\u76d1\u542c\u8ba4\u8bc1\u4fe1\u606f\u53d8\u5316</p></li><li><p>\u4f55\u65f6\u4f7f\u7528\u8ba4\u8bc1\u4fe1\u606f\uff0c\u533a\u5206\u4e0d\u540c\u7684\u8ba4\u8bc1\u65b9\u5f0f\u7684\u4f7f\u7528\u89c4\u5219\uff0c\u4f8b\u5982\uff1aJWT</p></li></ul><p><code>@delon/auth</code> \u5e76\u4e0d\u4f1a\u5173\u5fc3\u7528\u6237\u754c\u9762\u662f\u600e\u4e48\u6837\uff0c\u53ea\u9700\u8981\u5f53\u767b\u5f55\u6210\u529f\u540e\u5c06\u540e\u7aef\u8fd4\u56de\u7684\u6570\u636e\u4ea4\u7ed9 <code>ITokenService</code>\uff0c\u5b83\u4f1a\u5e2e\u4f60\u5b58\u50a8\u5728 <code>localStorage</code> \u5f53\u4e2d\uff08\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff09\uff1b\u5f53\u53d1\u8d77\u4e00\u4e2a http \u8bf7\u6c42\u65f6\uff0c\u5b83\u4f1a\u5728\u81ea\u52a8\u5728 <code>header</code> \u5f53\u4e2d\u52a0\u5165\u76f8\u5e94\u7684 token \u4fe1\u606f\u3002</p><p>\u56e0\u6b64\uff0c<code>@delon/auth</code> \u4e0d\u9650\u4e8e ng-alain \u811a\u624b\u67b6\uff0c\u4efb\u4f55 Angular \u9879\u76ee\u90fd\u53ef\u4ee5\u4f7f\u7528\u5b83\u3002</p><blockquote><p><code>@delon/auth</code> \u53ea\u662f\u89e3\u51b3\u8ba4\u8bc1\u73af\u8282\uff0c\u6709\u5173\u4e8e\u6743\u9650\u63a7\u5236\u53ef\u4ee5\u4f7f\u7528 <code>@delon/acl</code>\u3002</p></blockquote><h3 id="\u6d41\u7a0b">\u6d41\u7a0b<a onclick="window.location.hash = \'\u6d41\u7a0b\'" class="anchor">#</a></h3><ul><li><p>\u83b7\u53d6 <code>token</code></p></li><li><p>\u5b58\u50a8 <code>token</code></p></li><li><p>\u5229\u7528HTTP\u62e6\u622a\u5668\uff0c\u5c06 <code>token</code> \u53d1\u9001\u7ed9\u540e\u7aef</p></li></ul><h2 id="\u540d\u8bcd\u89e3\u91ca">\u540d\u8bcd\u89e3\u91ca<a onclick="window.location.hash = \'\u540d\u8bcd\u89e3\u91ca\'" class="anchor">#</a></h2><h3 id="Token">Token<a onclick="window.location.hash = \'Token\'" class="anchor">#</a></h3><p><code>@delon/auth</code> \u8ba4\u4e3a\u8bf7\u6c42\u8fc7\u7a0b\u4e2d\u6240\u9700\u8981\u7684\u4e00\u4e2a\u7528\u4e8e\u6821\u9a8c\u6709\u6548\u4fe1\u606f\u79f0\u5b83\u4e3a <code>Token</code> \u503c\uff0c\u4e0d\u7ba1\u662f\u91c7\u7528 JWT \u7684 <code>Authorization</code> \u53c2\u6570\uff0cOAuth2 \u7684 <code>access_token</code> \u7b49\u5176\u672c\u8d28\u662f\u4e00\u4e32\u52a0\u5bc6\u5b57\u7b26\u4e32\u3002\u8fd9\u4e5f\u662f\u6bcf\u4e00\u6b21\u53d1\u9001\u8bf7\u6c42\u65f6\u6240\u643a\u5e26\u7684\u503c\uff0c\u56e0\u6b64\u5728 <code>@delonn/auth</code> \u4e2d\u770b\u5230\u53ea\u6709\u4e00\u4e2a\u53eb <code>ITokenModel</code> \u63a5\u53e3\u7528\u4e8e\u8868\u8ff0\u8ba4\u8bc1\u4fe1\u606f\uff0c\u4e14\u53ea\u6709\u4e00\u4e2a <code>token</code> \u7684\u5b57\u7b26\u4e32\u5c5e\u6027\u3002</p><h3 id="\u8ba4\u8bc1\u98ce\u683c">\u8ba4\u8bc1\u98ce\u683c<a onclick="window.location.hash = \'\u8ba4\u8bc1\u98ce\u683c\'" class="anchor">#</a></h3><p>\u76ee\u524d\u5b83\u884d\u751f\u4e24\u79cd\u4e0d\u540c\u6821\u9a8c\u98ce\u683c\uff1aSimple Web Token\u3001Json Web Token\uff0c\u76f8\u5bf9\u5e94\u4e3a <code>SimpleTokenModel</code>\u3001<code>JWTTokenModel</code>\uff0c\u540e\u8005\u5177\u6709\u89e3\u6790 <code>payload</code> \u80fd\u529b\uff0c\u5f53\u7136\u6709\u4efb\u4f55\u7279\u6b8a\u90fd\u53ef\u4ee5\u81ea\u884c\u5b9e\u73b0 <code>ITokenModel</code> \u63a5\u53e3\u3002</p><h2 id="\u5982\u4f55\u4f7f\u7528\uff1f">\u5982\u4f55\u4f7f\u7528\uff1f<a onclick="window.location.hash = \'\u5982\u4f55\u4f7f\u7528\uff1f\'" class="anchor">#</a></h2><p>\u5b89\u88c5 <code>@delon/auth</code> \u4f9d\u8d56\u5305\uff1a</p><pre class="hljs language-bash"><code>npm install @delon/auth --save</code></pre><p>\u5bfc\u5165 <code>DelonAuthModule</code> \u6a21\u5757\uff1a</p><pre class="hljs language-$1"><code>import { DelonAuthModule, SimpleInterceptor } from \'@delon/auth\';\n\n@NgModule({\n  imports: [\n    DelonAuthModule.forRoot()\n  ],\n  providers: [\n    // \u76f8\u5e94\u7684HTTP\u62e6\u622a\u5668\n    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true}\n  ]\n})\nexport class AppModule { }</code></pre><p><strong>\u4e3a\u4ec0\u4e48\u9700\u8981HTTP_INTERCEPTORS</strong></p><p>\u9ed8\u8ba4 <code>DelonAuthModule</code> \u5e76\u4e0d\u4f1a\u6ce8\u518c\u4efb\u4f55HTTP\u62e6\u622a\u5668\uff0c\u4e3b\u8981\u662f\u56e0\u4e3a <code>@delon/auth</code> \u63d0\u4f9b\u4e86\u591a\u79cd\u4e0d\u540c<a href="/auth/style" data-url="/auth/style">\u8ba4\u8bc1\u98ce\u683c</a>\u3002</p><h2 id="\u914d\u7f6e\u4fe1\u606f">\u914d\u7f6e\u4fe1\u606f<a onclick="window.location.hash = \'\u914d\u7f6e\u4fe1\u606f\'" class="anchor">#</a></h2><h3 id="DelonAuthConfig">DelonAuthConfig<a onclick="window.location.hash = \'DelonAuthConfig\'" class="anchor">#</a></h3><table><thead><tr><th>\u53c2\u6570\u540d</th><th>\u7c7b\u578b</th><th>\u9ed8\u8ba4\u503c</th><th>\u63cf\u8ff0</th></tr></thead><tbody><tr><td><code>[store_key]</code></td><td><code>string</code></td><td><code>_token</code></td><td>localStorage \u7684\u5b58\u50a8KEY\u503c</td></tr><tr><td><code>[token_invalid_redirect]</code></td><td><code>boolean</code></td><td><code>true</code></td><td>\u65e0\u6548\u65f6\u8df3\u8f6c\u81f3\u767b\u5f55\u9875\uff0c\u5305\u62ec\uff1a\u65e0\u6548token\u503c\u3001token\u5df2\u8fc7\u671f\uff08\u9650JWT\uff09</td></tr><tr><td><code>[token_exp_offset]</code></td><td><code>number</code></td><td><code>10</code></td><td>JWT token\u8fc7\u671f\u65f6\u95f4\u504f\u79fb\u503c\uff08\u5355\u4f4d\uff1a\u79d2\uff09</td></tr><tr><td><code>[token_send_key]</code></td><td><code>string</code></td><td><code>token</code></td><td>\u53d1\u9001token\u53c2\u6570\u540d</td></tr><tr><td><code>[token_send_template]</code></td><td><code>string</code></td><td><code>${token}</code></td><td>\u53d1\u9001token\u6a21\u677f\uff0c\u4ee5 <code>${\u5c5e\u6027\u540d}</code> \u8868\u793a\u5360\u4f4d\u7b26\uff0c\u5c5e\u6027\u540d\u8981\u786e\u4fdd\u5b58\u5728\u5426\u5219\u4ee5\u7a7a\u5b57\u7b26\u4ee3\u66ff</td></tr><tr><td><code>[token_send_place]</code></td><td><code>header,body,url</code></td><td><code>header</code></td><td>\u53d1\u9001token\u53c2\u6570\u4f4d\u7f6e</td></tr><tr><td><code>[login_url]</code></td><td><code>string</code></td><td><code>/login</code></td><td>\u767b\u5f55\u9875\u8def\u7531\u5730\u5740</td></tr><tr><td><code>[ignores]</code></td><td><code>RegExp[]</code></td><td><code>[ /\\/login/, /assets\\// ]</code></td><td>\u5ffd\u7565TOKEN\u7684URL\u5730\u5740\u5217\u8868</td></tr><tr><td><code>[allow_anonymous_key]</code></td><td><code>string</code></td><td><code>_allow_anonymous</code></td><td>\u5141\u8bb8\u533f\u540d\u767b\u5f55KEY\uff0c\u82e5\u8bf7\u6c42\u53c2\u6570\u4e2d\u5e26\u6709\u8be5KEY\u8868\u793a\u5ffd\u7565TOKEN</td></tr></tbody></table><p>\u4f60\u53ef\u4ee5\u968f\u65f6\u8986\u76d6\u5b83\u4eec\uff0c\u4f8b\u5982\uff1a</p><pre class="hljs language-$1"><code>// delon.module.ts\nimport { DelonAuthConfig } from \'@delon/auth\';\nexport function delonAuthConfig(): DelonAuthConfig {\n  return Object.assign(new DelonAuthConfig(), &lt;DelonAuthConfig&gt;{\n    login_url: \'/passport/login\'\n  });\n}\n\n@NgModule({})\nexport class DelonModule {\n  static forRoot(): ModuleWithProviders {\n    return {\n      ngModule: DelonModule,\n      providers: [\n        { provide: DelonAuthConfig, useFactory: delonAuthConfig}\n      ]\n    };\n  }\n}</code></pre></article>',meta:{order:1,title:"\u5f00\u59cb\u4f7f\u7528",type:"Documents"},toc:[{href:"#\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{href:"#\u6d41\u7a0b",title:"\u6d41\u7a0b",h:3},{href:"#\u540d\u8bcd\u89e3\u91ca",title:"\u540d\u8bcd\u89e3\u91ca",h:2},{href:"#Token",title:"Token",h:3},{href:"#\u8ba4\u8bc1\u98ce\u683c",title:"\u8ba4\u8bc1\u98ce\u683c",h:3},{href:"#\u5982\u4f55\u4f7f\u7528\uff1f",title:"\u5982\u4f55\u4f7f\u7528\uff1f",h:2},{href:"#\u914d\u7f6e\u4fe1\u606f",title:"\u914d\u7f6e\u4fe1\u606f",h:2},{href:"#DelonAuthConfig",title:"DelonAuthConfig",h:3}]}},demo:!1},this.codes=[]},d=function(){this.item={cols:1,urls:{"zh-CN":"packages/auth/docs/guard.md"},content:{"zh-CN":{content:'<article><h2 id="\u5199\u5728\u524d\u9762">\u5199\u5728\u524d\u9762<a onclick="window.location.hash = \'\u5199\u5728\u524d\u9762\'" class="anchor">#</a></h2><p>\u5f53\u67d0\u4e2a\u8def\u7531\u672a\u53d1\u8d77\u8bf7\u6c42\u65f6\uff0c\u610f\u5473\u8005\u65e0\u6cd5\u5728\u62e6\u622a\u5668\u91cc\u9762\u5bf9\u5176\u8fdb\u884c Token \u6709\u6548\u6027\u7684\u9a8c\u8bc1\uff0c\u800c\u8def\u7531\u5b88\u536b\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\uff0c\u4f8b\u5982\u5728\u4f60\u7684\u6839\u8def\u5f84\u91cc\uff1a</p><pre class="hljs language-$1"><code>[\n  {\n    path: \'home\',\n    component: MockComponent,\n    canActivate: [JWTGuard],\n  },\n  {\n    path: \'my\',\n    canActivateChild: [JWTGuard],\n    children: [\n      { path: \'profile\', component: MockComponent }\n    ],\n  },\n  {\n    path: \'login\',\n    component: MockComponent,\n  },\n]</code></pre><h2 id="\u5982\u4f55\u9009\u62e9\uff1f">\u5982\u4f55\u9009\u62e9\uff1f<a onclick="window.location.hash = \'\u5982\u4f55\u9009\u62e9\uff1f\'" class="anchor">#</a></h2><p>\u540c\u6837\uff0c\u9488\u5bf9\u4e0d\u540c\u8ba4\u8bc1\u98ce\u683c\u5206\u522b\u4e3a\uff1a</p><ul><li><p><code>SimpleGuard</code> \u57fa\u4e8e Simple Web Token \u8ba4\u8bc1\u98ce\u683c</p></li><li><p><code>JWTGuard</code> \u57fa\u4e8e Json Web Token \u8ba4\u8bc1\u98ce\u683c</p></li></ul></article>',meta:{order:5,title:"\u8def\u7531\u5b88\u536b",type:"Documents"},toc:[{href:"#\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{href:"#\u5982\u4f55\u9009\u62e9\uff1f",title:"\u5982\u4f55\u9009\u62e9\uff1f",h:2}]}},demo:!1},this.codes=[]},r=function(){this.item={cols:1,urls:{"zh-CN":"packages/auth/docs/qa.md"},content:{"zh-CN":{content:"<article><h2 id=\"\u5982\u4f55\u6355\u83b7\u65e0Token\u65f6\u88ab\u62e6\u622a\u4fe1\u606f\uff1f\">\u5982\u4f55\u6355\u83b7\u65e0Token\u65f6\u88ab\u62e6\u622a\u4fe1\u606f\uff1f<a onclick=\"window.location.hash = '\u5982\u4f55\u6355\u83b7\u65e0Token\u65f6\u88ab\u62e6\u622a\u4fe1\u606f\uff1f'\" class=\"anchor\">#</a></h2><pre class=\"hljs language-$1\"><code>// \u5229\u7528\u8ba2\u9605 Error\nthis.http.get('/user').subscribe(\n  res =&gt; console.log('success', res),\n  err =&gt; console.error('error', err)\n);\n// \u6216\u4f7f\u7528 catchError\nthis.http.get('/user').pipe(\n  catchError(err =&gt; {\n    console.error('error', err);\n    return of({});\n  })\n).subscribe();</code></pre></article>",meta:{order:10,title:"\u5e38\u89c1\u95ee\u9898",type:"Documents"},toc:[{href:"#\u5982\u4f55\u6355\u83b7\u65e0Token\u65f6\u88ab\u62e6\u622a\u4fe1\u606f\uff1f",title:"\u5982\u4f55\u6355\u83b7\u65e0Token\u65f6\u88ab\u62e6\u622a\u4fe1\u606f\uff1f",h:2}]}},demo:!1},this.codes=[]},i=function(){this.item={cols:1,urls:{"zh-CN":"packages/auth/docs/send.md"},content:{"zh-CN":{content:'<article><h2 id="\u8ba4\u8bc1\u98ce\u683c">\u8ba4\u8bc1\u98ce\u683c<a onclick="window.location.hash = \'\u8ba4\u8bc1\u98ce\u683c\'" class="anchor">#</a></h2><p>\u901a\u8fc7HTTP\u62e6\u622a\u5668\u5728\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u4e2d\u52a0\u5165\u76f8\u5e94\u7684\u8ba4\u8bc1\u4fe1\u606f\uff0c\u8fd9\u662f\u518d\u597d\u4e0d\u8fc7\u3002<code>@delonn/auth</code> \u6839\u636e\u4e24\u79cd\u4e0d\u540c\u8ba4\u8bc1\u98ce\u683c\uff0c\u5b9e\u73b0\u4e24\u79cd\u5404\u81ea\u7684HTTP\u62e6\u622a\u5668\u3002</p><h3 id="SimpleInterceptor">SimpleInterceptor<a onclick="window.location.hash = \'SimpleInterceptor\'" class="anchor">#</a></h3><p>\u900f\u8fc7 <code>DelonAuthConfig</code> \u53ef\u4ee5\u6307\u5b9a\u53c2\u6570\u540d\u4ee5\u53ca\u5176\u53d1\u9001\u4f4d\u7f6e\uff0c\u4f8b\u5982\uff1a</p><pre class="hljs language-$1"><code>token_send_key = \'token\';\ntoken_send_template = \'Bearer ${token}\';\ntoken_send_place = \'header\';</code></pre><p>\u8868\u793a\u5728\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u7684 <code>header</code> \u52a0\u4e0a <code>{ token: \'Bearer token_string\' }</code> \u6570\u636e\u3002</p><h3 id="JWTInterceptor">JWTInterceptor<a onclick="window.location.hash = \'JWTInterceptor\'" class="anchor">#</a></h3><p>\u5b83\u662f\u4e00\u4e2a\u6807\u51c6JWT\u7684\u53d1\u9001\u89c4\u5219\uff0c\u5373\u5728 <code>header</code> \u81ea\u52a8\u52a0\u4e0a <code>{ Authorization: \'Bearer token_string\' }</code>\u3002</p><h3 id="\u5982\u4f55\u9009\u62e9\uff1f">\u5982\u4f55\u9009\u62e9\uff1f<a onclick="window.location.hash = \'\u5982\u4f55\u9009\u62e9\uff1f\'" class="anchor">#</a></h3><p><code>SimpleInterceptor</code> \u662f\u4e00\u79cd\u81ea\u7531\u5ea6\u975e\u5e38\u9ad8\u7684\u98ce\u683c\uff0c\u4f60\u53ef\u4ee5\u5c06 <code>token</code> \u653e\u5728\u8bf7\u6c42\u4f53\u3001\u8bf7\u6c42\u5934\u7b49\u5f53\u4e2d\u3002</p><p><code>JWTInterceptor</code> \u662f\u4e00\u4e2a JWT \u6807\u51c6\uff0c\u8fd9\u9700\u8981\u786e\u4fdd\u540e\u7aef\u4e5f\u91c7\u7528\u8fd9\u7c7b\u6807\u51c6\u3002</p><h2 id="\u5982\u4f55\u52a0\u8f7d">\u5982\u4f55\u52a0\u8f7d<a onclick="window.location.hash = \'\u5982\u4f55\u52a0\u8f7d\'" class="anchor">#</a></h2><p>\u9ed8\u8ba4\u60c5\u51b5\u4e0b <code>DelonAuthModule.forRoot()</code> \u662f\u4e0d\u4f1a\u52a0\u8f7d\u4efb\u4f55HTTP\u62e6\u622a\u5668\uff0c\u8fd9\u9700\u8981\u4f60\u624b\u5de5\u5728\u4f60\u7684\u76f8\u5e94\u7684\u6a21\u5757\u4e2d\u52a0\u4e0a\uff1a</p><pre class="hljs language-$1"><code>{ provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true }</code></pre><h2 id="\u793a\u4f8b">\u793a\u4f8b<a onclick="window.location.hash = \'\u793a\u4f8b\'" class="anchor">#</a></h2><p><a target="_blank" href="https://cipchk.github.io/ng-alain/passport/login" data-url="https://cipchk.github.io/ng-alain/passport/login">DEMO</a>\uff0c\u8d26\u5bc6\u6216\u5176\u4ed6\u767b\u5f55\u65b9\u5f0f\u767b\u5f55\uff0c\u5e76\u89c2\u5bdf\u6d4f\u89c8\u5668 localStorage \u5b58\u50a8\u6570\u636e\u7684\u53d8\u5316\u3002</p></article>',meta:{order:4,title:"\u53d1\u9001Token",type:"Documents"},toc:[{href:"#\u8ba4\u8bc1\u98ce\u683c",title:"\u8ba4\u8bc1\u98ce\u683c",h:2},{href:"#SimpleInterceptor",title:"SimpleInterceptor",h:3},{href:"#JWTInterceptor",title:"JWTInterceptor",h:3},{href:"#\u5982\u4f55\u9009\u62e9\uff1f",title:"\u5982\u4f55\u9009\u62e9\uff1f",h:3},{href:"#\u5982\u4f55\u52a0\u8f7d",title:"\u5982\u4f55\u52a0\u8f7d",h:2},{href:"#\u793a\u4f8b",title:"\u793a\u4f8b",h:2}]}},demo:!1},this.codes=[]},s=function(){this.item={cols:1,urls:{"zh-CN":"packages/auth/docs/set.md"},content:{"zh-CN":{content:'<article><h2 id="\u5982\u4f55\u4f7f\u7528\uff1f">\u5982\u4f55\u4f7f\u7528\uff1f<a onclick="window.location.hash = \'\u5982\u4f55\u4f7f\u7528\uff1f\'" class="anchor">#</a></h2><p><code>ITokenService</code> \u63a5\u53e3\uff08\u9ed8\u8ba4\u5b9e\u73b0 <code>TokenService</code>\uff09\uff0c\u53ea\u6709\u56db\u4e2a\u65b9\u6cd5\u53ca <code>login_url</code> \u5c5e\u6027\uff1a</p><ul><li><p><code>set(data: ITokenModel): boolean</code> \u8bbe\u7f6e\u8ba4\u8bc1\u4fe1\u606f\uff0c\u540c\u65f6\u89e6\u53d1 <code>change</code></p></li><li><p><code>get(): ITokenModel</code> \u83b7\u53d6\u8ba4\u8bc1\u4fe1\u606f</p></li><li><p><code>clear()</code> \u6e05\u9664\u8ba4\u8bc1\u4fe1\u606f\uff0c\u540c\u65f6\u89e6\u53d1 <code>change</code> \u53c2\u6570\u4e3a <code>null</code></p></li><li><p><code>change(): Observable&lt;ITokenModel></code> \u8ba2\u9605\u8ba4\u8bc1\u4fe1\u606f\u53d8\u66f4\u56de\u8c03</p></li><li><p><code>login_url</code> \u83b7\u53d6\u767b\u5f55\u5730\u5740\uff0c\u7b49\u540c <code>forRoot()</code> \u6240\u914d\u7f6e\u7684\u503c</p></li></ul><p>\u56e0\u6b64\uff0c\u5f53\u767b\u5f55\u8fc7\u7a0b\u4e2d\u540e\u7aef\u8fd4\u56de\u76f8\u5e94\u7684\u8ba4\u8bc1\u4fe1\u606f\u65f6\uff0c\u53ea\u8981\u7b26\u5408 <code>ITokenModel</code> \u63a5\u53e3\u5bf9\u8c61\uff0c\u90fd\u53ef\u4ee5\u8c03\u7528\u3000<code>set</code> \u65b9\u6cd5\u5c06\u8ba4\u8bc1\u5b58\u50a8\u81f3 <code>IStore</code> \uff08\u9ed8\u8ba4\u5b9e\u73b0 <code>LocalStorageStore</code>\uff09 \u5f53\u4e2d\u3002</p><pre class="hljs language-$1"><code>constructor(@Inject(DELON_AUTH_TOKEN_SERVICE_TOKEN) service: ITokenService) {\n  service.set({ token: `asdf` });\n\n  service.get().token; // output: asdf\n}</code></pre><h2 id="\u5b58\u50a8\u7c7b\u578b">\u5b58\u50a8\u7c7b\u578b<a onclick="window.location.hash = \'\u5b58\u50a8\u7c7b\u578b\'" class="anchor">#</a></h2><p>\u9ed8\u8ba4\u662f\u91c7\u7528 <code>LocalStorageStore</code> \u6301\u4e45\u5316\u5b58\u50a8\uff0c\u4f60\u53ef\u4ee5\u5728 <code>delon.module.ts</code> \u6216\u6839\u6a21\u5757\u91cc\u53d8\u66f4\u5176\u4ed6\u5b58\u50a8\u65b9\u5f0f\u3002</p><pre class="hljs language-$1"><code>export class DelonModule {\n  static forRoot(): ModuleWithProviders {\n    return {\n      ngModule: DelonModule,\n      providers: [\n        { provide: DA_STORE_TOKEN, useClass: MemoryStore }\n      ]\n    };\n  }\n}</code></pre><p>\u5305\u542b\u4e09\u79cd\u5b58\u50a8\u7c7b\u578b\uff1a</p><h3 id="LocalStorageStore">LocalStorageStore<a onclick="window.location.hash = \'LocalStorageStore\'" class="anchor">#</a></h3><p><code>localStorage</code> \u5b58\u50a8\uff0c\u5173\u6389\u6d4f\u89c8\u5668\u540e<strong>\u4e0d\u4e22\u5931</strong>\u3002</p><h3 id="SessionStorageStore">SessionStorageStore<a onclick="window.location.hash = \'SessionStorageStore\'" class="anchor">#</a></h3><p><code>sessionStorage</code> \u5b58\u50a8\uff0c\u5173\u6389\u6d4f\u89c8\u5668\u540e<strong>\u4e22\u5931</strong>\u3002</p><h3 id="MemoryStore">MemoryStore<a onclick="window.location.hash = \'MemoryStore\'" class="anchor">#</a></h3><p>\u5185\u5b58\u5b58\u50a8\uff0c\u5173\u6389\u6d4f\u89c8\u5668\u6807\u7b7e\u540e<strong>\u4e22\u5931</strong>\u3002</p></article>',meta:{order:3,title:"\u5b58\u50a8Token",type:"Documents"},toc:[{href:"#\u5982\u4f55\u4f7f\u7528\uff1f",title:"\u5982\u4f55\u4f7f\u7528\uff1f",h:2},{href:"#\u5b58\u50a8\u7c7b\u578b",title:"\u5b58\u50a8\u7c7b\u578b",h:2},{href:"#LocalStorageStore",title:"LocalStorageStore",h:3},{href:"#SessionStorageStore",title:"SessionStorageStore",h:3},{href:"#MemoryStore",title:"MemoryStore",h:3}]}},demo:!1},this.codes=[]},h=function(){},u=n("pMnS"),p=n("ebDo"),b=n("GYi0"),F=n("R6D3"),k=n("WP5L"),g=n("71F0"),m=n("fE+l"),T=n("0RMT"),f=n("QcbP"),S=n("0D9X"),w=n("SpJI"),v=n("hBP+"),C=n("QPFe"),M=n("RdGh"),y=n("D9vs"),D=n("DyZ0"),x=n("TY3c"),A=n("u+Cy"),_=n("8+8K"),I=n("YVZs"),R=n("F/j7"),O=n("/EOF"),E=n("ZKYL"),P=n("SZk1"),z=n("5eO6"),W=n("p+4O"),N=n("bLMo"),L=n("ieBQ"),J=n("651C"),j=n("AKjh"),H=n("Z4UC"),U=n("ZYCi"),Y=n("ZYjt"),q=t.vb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function G(e){return t.Rb(0,[(e()(),t.xb(0,0,null,null,1,"app-docs",[],null,null,null,L.b,L.a)),t.wb(1,245760,null,0,J.a,[j.a,H.a,U.o,Y.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(e,o){var n=o.component;e(o,1,0,n.codes,n.item)},null)}var K=t.tb("app-auth-get",a,function(e){return t.Rb(0,[(e()(),t.xb(0,0,null,null,1,"app-auth-get",[],null,null,null,G,q)),t.wb(1,49152,null,0,a,[],null,null)],null,null)},{},{},[]),Z=t.vb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function $(e){return t.Rb(0,[(e()(),t.xb(0,0,null,null,1,"app-docs",[],null,null,null,L.b,L.a)),t.wb(1,245760,null,0,J.a,[j.a,H.a,U.o,Y.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(e,o){var n=o.component;e(o,1,0,n.codes,n.item)},null)}var Q=t.tb("app-auth-getting-started",l,function(e){return t.Rb(0,[(e()(),t.xb(0,0,null,null,1,"app-auth-getting-started",[],null,null,null,$,Z)),t.wb(1,49152,null,0,l,[],null,null)],null,null)},{},{},[]),B=t.vb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function X(e){return t.Rb(0,[(e()(),t.xb(0,0,null,null,1,"app-docs",[],null,null,null,L.b,L.a)),t.wb(1,245760,null,0,J.a,[j.a,H.a,U.o,Y.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(e,o){var n=o.component;e(o,1,0,n.codes,n.item)},null)}var V=t.tb("app-auth-guard",d,function(e){return t.Rb(0,[(e()(),t.xb(0,0,null,null,1,"app-auth-guard",[],null,null,null,X,B)),t.wb(1,49152,null,0,d,[],null,null)],null,null)},{},{},[]),ee=t.vb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function oe(e){return t.Rb(0,[(e()(),t.xb(0,0,null,null,1,"app-docs",[],null,null,null,L.b,L.a)),t.wb(1,245760,null,0,J.a,[j.a,H.a,U.o,Y.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(e,o){var n=o.component;e(o,1,0,n.codes,n.item)},null)}var ne=t.tb("app-auth-qa",r,function(e){return t.Rb(0,[(e()(),t.xb(0,0,null,null,1,"app-auth-qa",[],null,null,null,oe,ee)),t.wb(1,49152,null,0,r,[],null,null)],null,null)},{},{},[]),te=t.vb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function ce(e){return t.Rb(0,[(e()(),t.xb(0,0,null,null,1,"app-docs",[],null,null,null,L.b,L.a)),t.wb(1,245760,null,0,J.a,[j.a,H.a,U.o,Y.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(e,o){var n=o.component;e(o,1,0,n.codes,n.item)},null)}var ae=t.tb("app-auth-send",i,function(e){return t.Rb(0,[(e()(),t.xb(0,0,null,null,1,"app-auth-send",[],null,null,null,ce,te)),t.wb(1,49152,null,0,i,[],null,null)],null,null)},{},{},[]),le=t.vb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function de(e){return t.Rb(0,[(e()(),t.xb(0,0,null,null,1,"app-docs",[],null,null,null,L.b,L.a)),t.wb(1,245760,null,0,J.a,[j.a,H.a,U.o,Y.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(e,o){var n=o.component;e(o,1,0,n.codes,n.item)},null)}var re=t.tb("app-auth-set",s,function(e){return t.Rb(0,[(e()(),t.xb(0,0,null,null,1,"app-auth-set",[],null,null,null,de,le)),t.wb(1,49152,null,0,s,[],null,null)],null,null)},{},{},[]),ie=n("Ip0R"),se=n("gIcY"),he=n("t/Na"),ue=n("M2Lx"),pe=n("6Cds"),be=n("eDkP"),Fe=n("Fzqc"),ke=n("jE6/"),ge=n("Bob9"),me=n("Ybye"),Te=n("dWZg"),fe=n("4c35"),Se=n("qAlS"),we=n("9J0+"),ve=n("CGSU"),Ce=n("5CFV"),Me=n("GTZx"),ye=n("hS58"),De=n("XZsx"),xe=n("+ndR"),Ae=n("EWQH"),_e=n("HjCm"),Ie=n("aq9g"),Re=n("7Dpl"),Oe=n("ekmu"),Ee=n("vjj7"),Pe=n("qdwt"),ze=n("l/Xz"),We=n("sRo1"),Ne=n("mX2v"),Le=n("BQzg"),Je=n("hDaA"),je=n("YQXl"),He=n("M3JP"),Ue=n("WNQ9"),Ye=n("5Oon"),qe=n("lM9c"),Ge=n("OSVY"),Ke=n("MNSj"),Ze=n("MZBU"),$e=n("ev4S"),Qe=n("G1y0"),Be=n("KmAc"),Xe=n("zGKZ"),Ve=n("xly9"),eo=n("u7PB"),oo=n("1Ry3"),no=n("4+vV"),to=n("ZgPA"),co=n("37MH"),ao=n("fZ1T"),lo=n("iwTp"),ro=n("mSU2"),io=n("4vQL"),so=n("iTTW"),ho=n("gQlp"),uo=n("oCVe"),po=n("XYAa"),bo=n("qT06"),Fo=n("A7o+"),ko=n("gMdr"),go=n("AYLd"),mo=n("ADoS"),To=n("slxf");n.d(o,"AuthModuleNgFactory",function(){return fo});var fo=t.ub(h,[],function(e){return t.Eb([t.Fb(512,t.k,t.ib,[[8,[u.a,p.uc,p.vc,p.wc,p.xc,p.yc,p.zc,p.Ac,p.Bc,b.a,F.a,k.a,g.a,m.a,T.a,f.a,S.a,w.a,v.a,C.a,M.a,y.a,D.a,x.a,A.a,_.a,I.a,R.a,O.a,E.a,P.a,z.a,W.a,N.a,K,Q,V,ne,ae,re]],[3,t.k],t.A]),t.Fb(4608,ie.q,ie.p,[t.x,[2,ie.D]]),t.Fb(4608,se.w,se.w,[]),t.Fb(4608,se.d,se.d,[]),t.Fb(4608,he.m,he.s,[ie.e,t.E,he.q]),t.Fb(4608,he.t,he.t,[he.m,he.r]),t.Fb(5120,he.a,function(e){return[e]},[he.t]),t.Fb(4608,he.p,he.p,[]),t.Fb(6144,he.n,null,[he.p]),t.Fb(4608,he.l,he.l,[he.n]),t.Fb(6144,he.b,null,[he.l]),t.Fb(4608,he.g,he.o,[he.b,t.t]),t.Fb(4608,he.c,he.c,[he.g]),t.Fb(4608,ue.c,ue.c,[]),t.Fb(5120,pe.Fe,pe.He,[[3,pe.Fe],pe.Ge]),t.Fb(4608,ie.f,ie.f,[t.x]),t.Fb(5120,pe.Ce,pe.De,[[3,pe.Ce],pe.Ee,pe.Fe,ie.f]),t.Fb(4608,be.d,be.d,[be.k,be.f,t.k,be.i,be.g,t.t,t.C,ie.e,Fe.b]),t.Fb(5120,be.l,be.m,[be.d]),t.Fb(5120,pe.Y,pe.Z,[ie.e,[3,pe.Y]]),t.Fb(4608,pe.mb,pe.mb,[]),t.Fb(4608,pe.Gb,pe.Gb,[]),t.Fb(4608,pe.od,pe.od,[be.d]),t.Fb(4608,pe.Td,pe.Td,[be.d,t.t,t.k,t.g]),t.Fb(4608,pe.ae,pe.ae,[be.d,t.t,t.k,t.g]),t.Fb(4608,pe.ke,pe.ke,[[3,pe.ke]]),t.Fb(4608,pe.me,pe.me,[be.d,pe.Fe,pe.ke]),t.Fb(4608,ke.c,ke.c,[]),t.Fb(4608,ge.d,ge.d,[ie.e]),t.Fb(4608,me.a,me.a,[pe.f]),t.Fb(1073742336,ie.c,ie.c,[]),t.Fb(1073742336,se.u,se.u,[]),t.Fb(1073742336,se.h,se.h,[]),t.Fb(1073742336,U.s,U.s,[[2,U.y],[2,U.o]]),t.Fb(1073742336,se.r,se.r,[]),t.Fb(1073742336,he.e,he.e,[]),t.Fb(1073742336,he.d,he.d,[]),t.Fb(1073742336,ue.d,ue.d,[]),t.Fb(1073742336,Te.b,Te.b,[]),t.Fb(1073742336,pe.Dd,pe.Dd,[]),t.Fb(1073742336,pe.xe,pe.xe,[]),t.Fb(1073742336,pe.k,pe.k,[]),t.Fb(1073742336,pe.n,pe.n,[]),t.Fb(1073742336,pe.m,pe.m,[]),t.Fb(1073742336,pe.p,pe.p,[]),t.Fb(1073742336,Fe.a,Fe.a,[]),t.Fb(1073742336,fe.e,fe.e,[]),t.Fb(1073742336,Se.a,Se.a,[]),t.Fb(1073742336,be.h,be.h,[]),t.Fb(1073742336,pe.t,pe.t,[]),t.Fb(1073742336,pe.Ae,pe.Ae,[]),t.Fb(1073742336,pe.D,pe.D,[]),t.Fb(1073742336,pe.I,pe.I,[]),t.Fb(1073742336,pe.K,pe.K,[]),t.Fb(1073742336,pe.T,pe.T,[]),t.Fb(1073742336,pe.bb,pe.bb,[]),t.Fb(1073742336,pe.W,pe.W,[]),t.Fb(1073742336,pe.db,pe.db,[]),t.Fb(1073742336,pe.fb,pe.fb,[]),t.Fb(1073742336,pe.nb,pe.nb,[]),t.Fb(1073742336,pe.qb,pe.qb,[]),t.Fb(1073742336,pe.sb,pe.sb,[]),t.Fb(1073742336,pe.vb,pe.vb,[]),t.Fb(1073742336,pe.yb,pe.yb,[]),t.Fb(1073742336,pe.Cb,pe.Cb,[]),t.Fb(1073742336,pe.Lb,pe.Lb,[]),t.Fb(1073742336,pe.Eb,pe.Eb,[]),t.Fb(1073742336,pe.Ob,pe.Ob,[]),t.Fb(1073742336,pe.Qb,pe.Qb,[]),t.Fb(1073742336,pe.Sb,pe.Sb,[]),t.Fb(1073742336,pe.Ub,pe.Ub,[]),t.Fb(1073742336,pe.Wb,pe.Wb,[]),t.Fb(1073742336,pe.Yb,pe.Yb,[]),t.Fb(1073742336,pe.fc,pe.fc,[]),t.Fb(1073742336,pe.kc,pe.kc,[]),t.Fb(1073742336,pe.mc,pe.mc,[]),t.Fb(1073742336,pe.pc,pe.pc,[]),t.Fb(1073742336,pe.tc,pe.tc,[]),t.Fb(1073742336,pe.vc,pe.vc,[]),t.Fb(1073742336,pe.yc,pe.yc,[]),t.Fb(1073742336,pe.Jc,pe.Jc,[]),t.Fb(1073742336,pe.Ic,pe.Ic,[]),t.Fb(1073742336,pe.Hc,pe.Hc,[]),t.Fb(1073742336,pe.jd,pe.jd,[]),t.Fb(1073742336,pe.ld,pe.ld,[]),t.Fb(1073742336,pe.pd,pe.pd,[]),t.Fb(1073742336,pe.yd,pe.yd,[]),t.Fb(1073742336,pe.Cd,pe.Cd,[]),t.Fb(1073742336,pe.Hd,pe.Hd,[]),t.Fb(1073742336,pe.Md,pe.Md,[]),t.Fb(1073742336,pe.Od,pe.Od,[]),t.Fb(1073742336,pe.Ud,pe.Ud,[]),t.Fb(1073742336,pe.be,pe.be,[]),t.Fb(1073742336,pe.ee,pe.ee,[]),t.Fb(1073742336,pe.he,pe.he,[]),t.Fb(1073742336,pe.ne,pe.ne,[]),t.Fb(1073742336,pe.pe,pe.pe,[]),t.Fb(1073742336,pe.re,pe.re,[]),t.Fb(1073742336,pe.ve,pe.ve,[]),t.Fb(1073742336,pe.ye,pe.ye,[]),t.Fb(1073742336,pe.a,pe.a,[]),t.Fb(1073742336,we.a,we.a,[pe.c]),t.Fb(1073742336,ve.a,ve.a,[]),t.Fb(1073742336,Ce.a,Ce.a,[]),t.Fb(1073742336,Me.a,Me.a,[]),t.Fb(1073742336,ye.a,ye.a,[]),t.Fb(1073742336,De.a,De.a,[]),t.Fb(1073742336,xe.a,xe.a,[]),t.Fb(1073742336,Ae.a,Ae.a,[]),t.Fb(1073742336,_e.a,_e.a,[]),t.Fb(1073742336,Ie.a,Ie.a,[]),t.Fb(1073742336,Re.a,Re.a,[]),t.Fb(1073742336,Oe.a,Oe.a,[]),t.Fb(1073742336,Ee.a,Ee.a,[]),t.Fb(1073742336,Pe.a,Pe.a,[]),t.Fb(1073742336,ze.a,ze.a,[]),t.Fb(1073742336,We.a,We.a,[]),t.Fb(1073742336,Ne.a,Ne.a,[]),t.Fb(1073742336,Le.a,Le.a,[]),t.Fb(1073742336,Je.a,Je.a,[]),t.Fb(1073742336,ke.b,ke.b,[]),t.Fb(1073742336,je.a,je.a,[]),t.Fb(1073742336,He.a,He.a,[]),t.Fb(1073742336,Ue.a,Ue.a,[]),t.Fb(1073742336,Ye.a,Ye.a,[]),t.Fb(1073742336,qe.a,qe.a,[]),t.Fb(1073742336,Ge.a,Ge.a,[]),t.Fb(1073742336,Ke.a,Ke.a,[]),t.Fb(1073742336,Ze.a,Ze.a,[]),t.Fb(1073742336,$e.a,$e.a,[]),t.Fb(1073742336,Qe.a,Qe.a,[]),t.Fb(1073742336,Be.a,Be.a,[]),t.Fb(1073742336,Xe.a,Xe.a,[]),t.Fb(1073742336,Ve.a,Ve.a,[]),t.Fb(1073742336,eo.a,eo.a,[]),t.Fb(1073742336,oo.a,oo.a,[]),t.Fb(1073742336,no.a,no.a,[]),t.Fb(1073742336,to.a,to.a,[]),t.Fb(1073742336,co.a,co.a,[]),t.Fb(1073742336,ao.a,ao.a,[]),t.Fb(1073742336,lo.a,lo.a,[]),t.Fb(1073742336,ro.a,ro.a,[]),t.Fb(1073742336,io.a,io.a,[]),t.Fb(1073742336,so.a,so.a,[]),t.Fb(1073742336,ho.a,ho.a,[]),t.Fb(1073742336,uo.a,uo.a,[]),t.Fb(1073742336,po.a,po.a,[]),t.Fb(1073742336,bo.a,bo.a,[]),t.Fb(1073742336,Fo.h,Fo.h,[]),t.Fb(1073742336,ko.b,ko.b,[]),t.Fb(1073742336,go.a,go.a,[]),t.Fb(1073742336,ge.c,ge.c,[]),t.Fb(1073742336,mo.c,mo.c,[]),t.Fb(1073742336,To.a,To.a,[]),t.Fb(1073742336,h,h,[]),t.Fb(256,he.q,"XSRF-TOKEN",[]),t.Fb(256,he.r,"X-XSRF-TOKEN",[]),t.Fb(256,pe.Ge,!1,[]),t.Fb(256,pe.Ee,void 0,[]),t.Fb(256,pe.Qd,{nzDuration:3e3,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),t.Fb(256,pe.Xd,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),t.Fb(1024,U.m,function(){return[[{path:"",component:c.a,children:[{path:"",redirectTo:"getting-started",pathMatch:"full"},{path:"get",component:a},{path:"getting-started",component:l},{path:"guard",component:d},{path:"qa",component:r},{path:"send",component:i},{path:"set",component:s}]}]]},[])])})}}]);