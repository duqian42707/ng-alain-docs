(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{clYB:function(t,a,e){"use strict";e.r(a);var l=e("CcnG"),n=e("r45k"),o=function(){this.item={cols:1,urls:{"zh-CN":"packages/acl/docs/api.md"},content:{"zh-CN":{content:"",api:'<h2 id="API">API<a onclick="window.location.hash = \'API\'" class="anchor">#</a></h2><h3 id="ACLService">ACLService<a onclick="window.location.hash = \'ACLService\'" class="anchor">#</a></h3><table><thead><tr><th>\u65b9\u6cd5</th><th>\u8bf4\u660e</th></tr></thead><tbody><tr><td><code>[change]</code></td><td>\u76d1\u542cACL\u53d8\u66f4\u901a\u77e5</td></tr><tr><td><code>[data]</code></td><td>\u83b7\u53d6\u6240\u6709ACL\u6570\u636e</td></tr><tr><td><code>setFull(val: boolean)</code></td><td>\u6807\u8bc6\u5f53\u524d\u7528\u6237\u4e3a\u5168\u91cf\uff0c\u5373\u4e0d\u53d7\u9650</td></tr><tr><td><code>set(value: ACLType)</code></td><td>\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u89d2\u8272\u6216\u6743\u9650\u80fd\u529b\uff08\u4f1a\u5148\u6e05\u9664\u6240\u6709\uff09</td></tr><tr><td><code>setRole(roles: string[])</code></td><td>\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u89d2\u8272\uff08\u4f1a\u5148\u6e05\u9664\u6240\u6709\uff09</td></tr><tr><td><code>setAbility(abilities: (number | string)[])</code></td><td>\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u6743\u9650\u80fd\u529b\uff08\u4f1a\u5148\u6e05\u9664\u6240\u6709\uff09</td></tr><tr><td><code>add(value: ACLType)</code></td><td>\u4e3a\u5f53\u524d\u7528\u6237\u589e\u52a0\u89d2\u8272\u6216\u6743\u9650\u80fd\u529b</td></tr><tr><td><code>attachRole(roles: string[])</code></td><td>\u4e3a\u5f53\u524d\u7528\u6237\u9644\u52a0\u89d2\u8272</td></tr><tr><td><code>attachAbility(abilities: (number | string)[])</code></td><td>\u4e3a\u5f53\u524d\u7528\u6237\u9644\u52a0\u6743\u9650</td></tr><tr><td><code>removeRole(roles: string[])</code></td><td>\u4e3a\u5f53\u524d\u7528\u6237\u79fb\u9664\u89d2\u8272</td></tr><tr><td><code>removeAbility(abilities: (number | string)[])</code></td><td>\u4e3a\u5f53\u524d\u7528\u6237\u79fb\u9664\u6743\u9650</td></tr><tr><td><code>can(roleOrAbility: ACLCanType)</code></td><td>\u5f53\u524d\u7528\u6237\u662f\u5426\u6709\u5bf9\u5e94\u89d2\u8272</td></tr><tr><td><code>canAbility(ability: ACLCanType)</code></td><td>\u5f53\u524d\u7528\u6237\u662f\u5426\u6709\u5bf9\u5e94\u6743\u9650\u70b9</td></tr></tbody></table><h3 id="ACLType">ACLType<a onclick="window.location.hash = \'ACLType\'" class="anchor">#</a></h3><table><thead><tr><th>\u5c5e\u6027</th><th>\u7c7b\u578b</th><th>\u8bf4\u660e</th><th>\u9ed8\u8ba4</th></tr></thead><tbody><tr><td><code>[role]</code></td><td><code>string[]</code></td><td>\u89d2\u8272</td><td>-</td></tr><tr><td><code>[ability]</code></td><td><code>number[], string[]</code></td><td>\u6743\u9650\u70b9</td><td>-</td></tr><tr><td><code>[mode]</code></td><td><code>allOf, oneOf</code></td><td><code>allOf</code> \u8868\u793a\u5fc5\u987b\u6ee1\u8db3\u6240\u6709\u89d2\u8272\u6216\u6743\u9650\u70b9\u6570\u7ec4\u7b97\u6709\u6548<br><code>oneOf</code> \u8868\u793a\u53ea\u987b\u6ee1\u8db3\u89d2\u8272\u6216\u6743\u9650\u70b9\u6570\u7ec4\u4e2d\u7684\u4e00\u9879\u7b97\u6709\u6548</td><td><code>oneOf</code></td></tr></tbody></table>',meta:{order:2,title:"API\u6587\u6863",type:"Documents"},toc:[{href:"#API",title:"API",h:2},{href:"#ACLService",title:"ACLService",h:3},{href:"#ACLType",title:"ACLType",h:3}]}},demo:!1},this.codes=[]},c=function(){this.item={cols:1,urls:{"zh-CN":"packages/acl/docs/control.md"},content:{"zh-CN":{content:'<article><h2 id="\u5199\u5728\u524d\u9762">\u5199\u5728\u524d\u9762<a onclick="window.location.hash = \'\u5199\u5728\u524d\u9762\'" class="anchor">#</a></h2><p>\u5f88\u591a\u65f6\u5019\u9700\u8981\u5bf9\u67d0\u4e2a\u6309\u94ae\u8fdb\u884c\u6743\u9650\u63a7\u5236\uff0c<code>@delon/acl</code> \u63d0\u4f9b\u4e00\u4e2a <code>acl</code> \u6307\u4ee4\uff0c\u53ef\u4ee5\u5229\u7528\u89d2\u8272\u6216\u6743\u9650\u70b9\u5bf9\u67d0\u4e2a\u6309\u94ae\u3001\u8868\u683c\u3001\u5217\u8868\u7b49\u5143\u7d20\u8fdb\u884c\u6743\u9650\u63a7\u5236\u3002</p><h2 id="\u793a\u4f8b">\u793a\u4f8b<a onclick="window.location.hash = \'\u793a\u4f8b\'" class="anchor">#</a></h2><p><strong>\u89d2\u8272\u540d</strong></p><pre class="hljs language-$1"><code>\u6309\u94ae\u5fc5\u987b\u62e5\u6709 user \u89d2\u8272\u663e\u793a\n&lt;button [acl]="\'user\'"&gt;&lt;/button&gt;</code></pre><pre class="hljs language-$1"><code>\u6309\u94ae\u5fc5\u987b\u62e5\u6709 user \u6216 manage \u89d2\u8272\u663e\u793a\n&lt;button [acl]="[\'user\', \'manage\']"&gt;&lt;/button&gt;</code></pre><pre class="hljs language-$1"><code>\u6309\u94ae\u5fc5\u987b\u62e5\u6709 user \u548c manage \u89d2\u8272\u663e\u793a\n&lt;button [acl]="{ role: [\'user\', \'manage\'], mode: \'allOf\' }"&gt;&lt;/button&gt;</code></pre><p><strong>\u6743\u9650\u70b9</strong></p><pre class="hljs language-$1"><code>\u6309\u94ae\u5fc5\u987b\u62e5\u6709 10 \u6743\u9650\u70b9\u663e\u793a\n&lt;button [acl]="10"&gt;&lt;/button&gt;\n\u53e6\u4e00\u79cd\u5199\u6cd5\n&lt;button acl [acl-ability]="10"&gt;&lt;/button&gt;</code></pre><pre class="hljs language-$1"><code>\u6309\u94ae\u5fc5\u987b\u62e5\u6709 10 \u548c 11 \u6743\u9650\u70b9\u65f6\u663e\u793a\n&lt;button [acl]="{ ability: [10, 11], mode: \'allOf\' }"&gt;&lt;/button&gt;</code></pre></article>',meta:{order:3,title:"\u7c92\u5ea6\u63a7\u5236",type:"Documents"},toc:[{href:"#\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{href:"#\u793a\u4f8b",title:"\u793a\u4f8b",h:2}]}},demo:!1},this.codes=[]},d=function(){this.item={cols:1,urls:{"zh-CN":"packages/acl/docs/getting-started.md"},content:{"zh-CN":{content:'<article><p>ACL \u5168\u79f0\u53eb\u8bbf\u95ee\u63a7\u5236\u5217\u8868\uff08Access Control List\uff09\uff0c\u662f\u4e00\u79cd\u975e\u5e38\u7b80\u5355\u7684\u57fa\u4e8e\u89d2\u8272\u6743\u9650\u63a7\u5236\u65b9\u5f0f\u3002\u4e00\u4e2a\u5b8c\u5168\u72ec\u7acb <code>@delon/acl</code> \u6a21\u5757\uff08<a target="_blank" href="//cipchk.github.io/ng-alain/#/logics/acl" data-url="//cipchk.github.io/ng-alain/#/logics/acl">DEMO</a>\uff09\u3002</p><h2 id="\u5982\u4f55\u8fd0\u884c\uff1f">\u5982\u4f55\u8fd0\u884c\uff1f<a onclick="window.location.hash = \'\u5982\u4f55\u8fd0\u884c\uff1f\'" class="anchor">#</a></h2><p>\u5185\u90e8\u5b9e\u9645\u662f\u4e00\u4e2a <code>ACLService</code> \u5b83\u63d0\u4f9b\u4e00\u5957\u57fa\u4e8e\u89d2\u8272\u6743\u9650\u670d\u52a1\u7c7b\u3002\u4e3a\u4e86\u66f4\u597d\u7684\u7f16\u7801\u4f53\u9a8c ng-alain \u6709\u591a\u5904\u7ec4\u4ef6\u6216\u6a21\u5757\u4e5f\u4f9d\u8d56\u4e8e\u5b83\uff0c\u4f8b\u5982\uff1a<code>simple-table</code>\u3001<code>MenuService</code> \u7b49\uff0c\u5e76\u4e14\u8fd9\u4e9b\u4f1a\u4ee5 <code>acl</code> \u5c5e\u6027\u7684\u5f62\u5f0f\u8868\u73b0\u3002\u56e0\u6b64\uff0c\u82e5\u67d0\u90e8\u5206\u7ec4\u4ef6\u5e26\u6709 <code>acl</code> \u5b9e\u9645\u90fd\u662f\u8c03\u7528\u672c\u6a21\u5757\u3002</p><h2 id="\u5982\u4f55\u4f7f\u7528\uff1f">\u5982\u4f55\u4f7f\u7528\uff1f<a onclick="window.location.hash = \'\u5982\u4f55\u4f7f\u7528\uff1f\'" class="anchor">#</a></h2><p>\u5b89\u88c5 <code>@delon/acl</code> \u4f9d\u8d56\u5305\uff1a</p><pre class="hljs language-bash"><code>npm install @delon/acl --save</code></pre><p>\u5bfc\u5165 <code>DelonACLModule</code> \u6a21\u5757\uff1a</p><pre class="hljs language-$1"><code>import { DelonACLModule } from \'@delon/acl\';\n\n@NgModule({\n  imports: [\n    DelonACLModule.forRoot()\n  ]\n})\nexport class AppModule { }</code></pre></article>',meta:{order:1,title:"\u5f00\u59cb\u4f7f\u7528",type:"Documents"},toc:[{href:"#\u5982\u4f55\u8fd0\u884c\uff1f",title:"\u5982\u4f55\u8fd0\u884c\uff1f",h:2},{href:"#\u5982\u4f55\u4f7f\u7528\uff1f",title:"\u5982\u4f55\u4f7f\u7528\uff1f",h:2}]}},demo:!1},this.codes=[]},b=function(){this.item={cols:1,urls:{"zh-CN":"packages/acl/docs/guard.md"},content:{"zh-CN":{content:"<article><h2 id=\"\u5199\u5728\u524d\u9762\">\u5199\u5728\u524d\u9762<a onclick=\"window.location.hash = '\u5199\u5728\u524d\u9762'\" class=\"anchor\">#</a></h2><p>\u8def\u7531\u5b88\u536b\u662f\u6307\uff0c\u5f53\u7528\u6237\u8fdb\u5165\u8def\u7531\u524d\u82e5\u4e0d\u6ee1\u8db3\u6743\u9650\u65f6\u662f\u65e0\u6cd5\u8fdb\u5165\u3002</p><p>\u8def\u7531\u5b88\u536b\u9700\u8981\u5355\u72ec\u5bf9\u6bcf\u4e00\u4e2a\u8def\u7531\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5f88\u591a\u65f6\u5019\u8fd9\u770b\u8d77\u6765\u5f88\u7e41\u7410\uff0c<code>@delon/acl</code> \u5b9e\u73b0\u4e86\u4e00\u4e2a\u901a\u8fc7\u5b88\u536b\u7c7b <code>ACLGuard</code>\uff0c\u53ef\u4ee5\u5728\u8def\u7531\u6ce8\u518c\u65f6\u900f\u8fc7\u7b80\u5355\u7684\u914d\u7f6e\u5b8c\u6210\u4e00\u4e9b\u590d\u6742\u7684\u64cd\u4f5c\uff0c\u751a\u81f3\u652f\u6301 <code>Observable</code> \u7c7b\u578b\u3002</p><h2 id=\"\u793a\u4f8b\">\u793a\u4f8b<a onclick=\"window.location.hash = '\u793a\u4f8b'\" class=\"anchor\">#</a></h2><pre class=\"hljs language-$1\"><code>import { of } from 'rxjs';\nimport { ACLGuard } from '@delon/acl';\nconst routes: Routes = [\n    {\n        path: 'guard',\n        component: GuardComponent,\n        children: [\n            // \u89d2\u8272\u9650\u5b9a\n            { path: 'auth', component: GuardAuthComponent, canActivate: [ ACLGuard ], data: { guard: 'user1' } },\n            { path: 'admin', component: GuardAdminComponent, canActivate: [ ACLGuard ], data: { guard: 'admin' } }\n        ],\n        // \u6240\u6709\u5b50\u8def\u7531\u6709\u6548\n        canActivateChild: [ ACLGuard ],\n        data: { guard: 'user1' }\n    },\n    // \u6743\u9650\u70b9\u9650\u5b9a\n    { path: 'pro', loadChildren: './pro/pro.module#ProModule', canLoad: [ ACLGuard ], data: { guard: 1 } },\n    // \u6216\u4f7f\u7528Observable\u5b9e\u73b0\u66f4\u590d\u6742\u7684\u884c\u4e3a\n    { path: 'pro', loadChildren: './pro/pro.module#ProModule', canLoad: [ ACLGuard ], data: { guard: of(false).pipe(map(v =&gt; 'admin')) } }\n];</code></pre></article>",meta:{order:3,title:{"en-US":"Guard","zh-CN":"\u8def\u7531\u5b88\u536b"},type:"Documents"},toc:[{href:"#\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{href:"#\u793a\u4f8b",title:"\u793a\u4f8b",h:2}]}},demo:!1},this.codes=[]},r=function(){this.item={cols:1,urls:{"zh-CN":"packages/acl/docs/qa.md"},content:{"zh-CN":{content:'<article><h2 id="\u4e3a\u4ec0\u4e48can\u65b9\u6cd5\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u89d2\u8272\u662f\u5b57\u7b26\u4e32\uff0c\u800c\u6743\u9650\u70b9\u662f\u6570\u5b57\u7c7b\u578b\uff1f">\u4e3a\u4ec0\u4e48can\u65b9\u6cd5\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u89d2\u8272\u662f\u5b57\u7b26\u4e32\uff0c\u800c\u6743\u9650\u70b9\u662f\u6570\u5b57\u7c7b\u578b\uff1f<a onclick="window.location.hash = \'\u4e3a\u4ec0\u4e48can\u65b9\u6cd5\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u89d2\u8272\u662f\u5b57\u7b26\u4e32\uff0c\u800c\u6743\u9650\u70b9\u662f\u6570\u5b57\u7c7b\u578b\uff1f\'" class="anchor">#</a></h2><p>\u6211\u4eec\u65e0\u6cd5\u533a\u5206\u5728\u540c\u4e00\u4e2a\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u60c5\u51b5\u4e0b\u5982\u4f55\u81ea\u52a8\u533a\u5206\u89d2\u8272\u8fd8\u662f\u6743\u9650\u70b9\uff0c\u6e90\u4e8e\u6b64\u4f5c\u4e86\u8fd9\u6837\u7684\u8bbe\u8ba1\u3002\u56e0\u6b64\u5bf9\u4e8e\u89d2\u8272\u4f7f\u7528\u5b57\u7b26\u4e32\u3001\u6743\u9650\u70b9\u4f7f\u7528\u6570\u5b57\u578b\u7684\u540e\u7aef\u8bbe\u8ba1\u7f16\u7801\u4f53\u9a8c\u4f1a\u66f4\u597d\uff0c\u4f60\u65e0\u987b\u518d\u4f7f\u7528 <code>canAbility</code> \u6765\u8868\u8fbe\u6743\u9650\u70b9\u6216\u4f7f\u7528 <code>ACLType</code> \u590d\u6742\u7c7b\u578b\u8868\u8ff0\u3002</p></article>',meta:{order:10,title:"\u5e38\u89c1\u95ee\u9898",type:"Documents"},toc:[{href:"#\u4e3a\u4ec0\u4e48can\u65b9\u6cd5\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u89d2\u8272\u662f\u5b57\u7b26\u4e32\uff0c\u800c\u6743\u9650\u70b9\u662f\u6570\u5b57\u7c7b\u578b\uff1f",title:"\u4e3a\u4ec0\u4e48can\u65b9\u6cd5\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u89d2\u8272\u662f\u5b57\u7b26\u4e32\uff0c\u800c\u6743\u9650\u70b9\u662f\u6570\u5b57\u7c7b\u578b\uff1f",h:2}]}},demo:!1},this.codes=[]},u=function(){},i=e("pMnS"),s=e("ebDo"),p=e("GYi0"),F=e("R6D3"),h=e("WP5L"),m=e("71F0"),g=e("fE+l"),C=e("0RMT"),f=e("QcbP"),A=e("0D9X"),y=e("SpJI"),v=e("hBP+"),k=e("QPFe"),w=e("RdGh"),L=e("D9vs"),M=e("DyZ0"),O=e("TY3c"),z=e("u+Cy"),x=e("8+8K"),D=e("YVZs"),T=e("F/j7"),R=e("/EOF"),S=e("ZKYL"),P=e("SZk1"),G=e("5eO6"),j=e("p+4O"),N=e("bLMo"),Y=e("ieBQ"),Z=e("651C"),q=e("AKjh"),E=e("Z4UC"),I=e("ZYCi"),Q=e("ZYjt"),H=l.vb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function X(t){return l.Rb(0,[(t()(),l.xb(0,0,null,null,1,"app-docs",[],null,null,null,Y.b,Y.a)),l.wb(1,245760,null,0,Z.a,[q.a,E.a,I.o,Q.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(t,a){var e=a.component;t(a,1,0,e.codes,e.item)},null)}var B=l.tb("app-acl-api",o,function(t){return l.Rb(0,[(t()(),l.xb(0,0,null,null,1,"app-acl-api",[],null,null,null,X,H)),l.wb(1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),K=l.vb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function U(t){return l.Rb(0,[(t()(),l.xb(0,0,null,null,1,"app-docs",[],null,null,null,Y.b,Y.a)),l.wb(1,245760,null,0,Z.a,[q.a,E.a,I.o,Q.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(t,a){var e=a.component;t(a,1,0,e.codes,e.item)},null)}var W=l.tb("app-acl-control",c,function(t){return l.Rb(0,[(t()(),l.xb(0,0,null,null,1,"app-acl-control",[],null,null,null,U,K)),l.wb(1,49152,null,0,c,[],null,null)],null,null)},{},{},[]),J=l.vb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function $(t){return l.Rb(0,[(t()(),l.xb(0,0,null,null,1,"app-docs",[],null,null,null,Y.b,Y.a)),l.wb(1,245760,null,0,Z.a,[q.a,E.a,I.o,Q.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(t,a){var e=a.component;t(a,1,0,e.codes,e.item)},null)}var _=l.tb("app-acl-getting-started",d,function(t){return l.Rb(0,[(t()(),l.xb(0,0,null,null,1,"app-acl-getting-started",[],null,null,null,$,J)),l.wb(1,49152,null,0,d,[],null,null)],null,null)},{},{},[]),V=l.vb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function tt(t){return l.Rb(0,[(t()(),l.xb(0,0,null,null,1,"app-docs",[],null,null,null,Y.b,Y.a)),l.wb(1,245760,null,0,Z.a,[q.a,E.a,I.o,Q.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(t,a){var e=a.component;t(a,1,0,e.codes,e.item)},null)}var at=l.tb("app-acl-guard",b,function(t){return l.Rb(0,[(t()(),l.xb(0,0,null,null,1,"app-acl-guard",[],null,null,null,tt,V)),l.wb(1,49152,null,0,b,[],null,null)],null,null)},{},{},[]),et=l.vb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function lt(t){return l.Rb(0,[(t()(),l.xb(0,0,null,null,1,"app-docs",[],null,null,null,Y.b,Y.a)),l.wb(1,245760,null,0,Z.a,[q.a,E.a,I.o,Q.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(t,a){var e=a.component;t(a,1,0,e.codes,e.item)},null)}var nt=l.tb("app-acl-qa",r,function(t){return l.Rb(0,[(t()(),l.xb(0,0,null,null,1,"app-acl-qa",[],null,null,null,lt,et)),l.wb(1,49152,null,0,r,[],null,null)],null,null)},{},{},[]),ot=e("Ip0R"),ct=e("gIcY"),dt=e("t/Na"),bt=e("M2Lx"),rt=e("6Cds"),ut=e("eDkP"),it=e("Fzqc"),st=e("jE6/"),pt=e("Bob9"),Ft=e("Ybye"),ht=e("dWZg"),mt=e("4c35"),gt=e("qAlS"),Ct=e("9J0+"),ft=e("CGSU"),At=e("5CFV"),yt=e("GTZx"),vt=e("hS58"),kt=e("XZsx"),wt=e("+ndR"),Lt=e("EWQH"),Mt=e("HjCm"),Ot=e("aq9g"),zt=e("7Dpl"),xt=e("ekmu"),Dt=e("vjj7"),Tt=e("qdwt"),Rt=e("l/Xz"),St=e("sRo1"),Pt=e("mX2v"),Gt=e("BQzg"),jt=e("hDaA"),Nt=e("YQXl"),Yt=e("M3JP"),Zt=e("WNQ9"),qt=e("5Oon"),Et=e("lM9c"),It=e("OSVY"),Qt=e("MNSj"),Ht=e("MZBU"),Xt=e("ev4S"),Bt=e("G1y0"),Kt=e("KmAc"),Ut=e("zGKZ"),Wt=e("xly9"),Jt=e("u7PB"),$t=e("1Ry3"),_t=e("4+vV"),Vt=e("ZgPA"),ta=e("37MH"),aa=e("fZ1T"),ea=e("iwTp"),la=e("mSU2"),na=e("4vQL"),oa=e("iTTW"),ca=e("gQlp"),da=e("oCVe"),ba=e("XYAa"),ra=e("qT06"),ua=e("A7o+"),ia=e("gMdr"),sa=e("AYLd"),pa=e("ADoS"),Fa=e("slxf");e.d(a,"AclModuleNgFactory",function(){return ha});var ha=l.ub(u,[],function(t){return l.Eb([l.Fb(512,l.k,l.ib,[[8,[i.a,s.uc,s.vc,s.wc,s.xc,s.yc,s.zc,s.Ac,s.Bc,p.a,F.a,h.a,m.a,g.a,C.a,f.a,A.a,y.a,v.a,k.a,w.a,L.a,M.a,O.a,z.a,x.a,D.a,T.a,R.a,S.a,P.a,G.a,j.a,N.a,B,W,_,at,nt]],[3,l.k],l.A]),l.Fb(4608,ot.q,ot.p,[l.x,[2,ot.D]]),l.Fb(4608,ct.w,ct.w,[]),l.Fb(4608,ct.d,ct.d,[]),l.Fb(4608,dt.m,dt.s,[ot.e,l.E,dt.q]),l.Fb(4608,dt.t,dt.t,[dt.m,dt.r]),l.Fb(5120,dt.a,function(t){return[t]},[dt.t]),l.Fb(4608,dt.p,dt.p,[]),l.Fb(6144,dt.n,null,[dt.p]),l.Fb(4608,dt.l,dt.l,[dt.n]),l.Fb(6144,dt.b,null,[dt.l]),l.Fb(4608,dt.g,dt.o,[dt.b,l.t]),l.Fb(4608,dt.c,dt.c,[dt.g]),l.Fb(4608,bt.c,bt.c,[]),l.Fb(5120,rt.Fe,rt.He,[[3,rt.Fe],rt.Ge]),l.Fb(4608,ot.f,ot.f,[l.x]),l.Fb(5120,rt.Ce,rt.De,[[3,rt.Ce],rt.Ee,rt.Fe,ot.f]),l.Fb(4608,ut.d,ut.d,[ut.k,ut.f,l.k,ut.i,ut.g,l.t,l.C,ot.e,it.b]),l.Fb(5120,ut.l,ut.m,[ut.d]),l.Fb(5120,rt.Y,rt.Z,[ot.e,[3,rt.Y]]),l.Fb(4608,rt.mb,rt.mb,[]),l.Fb(4608,rt.Gb,rt.Gb,[]),l.Fb(4608,rt.od,rt.od,[ut.d]),l.Fb(4608,rt.Td,rt.Td,[ut.d,l.t,l.k,l.g]),l.Fb(4608,rt.ae,rt.ae,[ut.d,l.t,l.k,l.g]),l.Fb(4608,rt.ke,rt.ke,[[3,rt.ke]]),l.Fb(4608,rt.me,rt.me,[ut.d,rt.Fe,rt.ke]),l.Fb(4608,st.c,st.c,[]),l.Fb(4608,pt.d,pt.d,[ot.e]),l.Fb(4608,Ft.a,Ft.a,[rt.f]),l.Fb(1073742336,ot.c,ot.c,[]),l.Fb(1073742336,ct.u,ct.u,[]),l.Fb(1073742336,ct.h,ct.h,[]),l.Fb(1073742336,I.s,I.s,[[2,I.y],[2,I.o]]),l.Fb(1073742336,ct.r,ct.r,[]),l.Fb(1073742336,dt.e,dt.e,[]),l.Fb(1073742336,dt.d,dt.d,[]),l.Fb(1073742336,bt.d,bt.d,[]),l.Fb(1073742336,ht.b,ht.b,[]),l.Fb(1073742336,rt.Dd,rt.Dd,[]),l.Fb(1073742336,rt.xe,rt.xe,[]),l.Fb(1073742336,rt.k,rt.k,[]),l.Fb(1073742336,rt.n,rt.n,[]),l.Fb(1073742336,rt.m,rt.m,[]),l.Fb(1073742336,rt.p,rt.p,[]),l.Fb(1073742336,it.a,it.a,[]),l.Fb(1073742336,mt.e,mt.e,[]),l.Fb(1073742336,gt.a,gt.a,[]),l.Fb(1073742336,ut.h,ut.h,[]),l.Fb(1073742336,rt.t,rt.t,[]),l.Fb(1073742336,rt.Ae,rt.Ae,[]),l.Fb(1073742336,rt.D,rt.D,[]),l.Fb(1073742336,rt.I,rt.I,[]),l.Fb(1073742336,rt.K,rt.K,[]),l.Fb(1073742336,rt.T,rt.T,[]),l.Fb(1073742336,rt.bb,rt.bb,[]),l.Fb(1073742336,rt.W,rt.W,[]),l.Fb(1073742336,rt.db,rt.db,[]),l.Fb(1073742336,rt.fb,rt.fb,[]),l.Fb(1073742336,rt.nb,rt.nb,[]),l.Fb(1073742336,rt.qb,rt.qb,[]),l.Fb(1073742336,rt.sb,rt.sb,[]),l.Fb(1073742336,rt.vb,rt.vb,[]),l.Fb(1073742336,rt.yb,rt.yb,[]),l.Fb(1073742336,rt.Cb,rt.Cb,[]),l.Fb(1073742336,rt.Lb,rt.Lb,[]),l.Fb(1073742336,rt.Eb,rt.Eb,[]),l.Fb(1073742336,rt.Ob,rt.Ob,[]),l.Fb(1073742336,rt.Qb,rt.Qb,[]),l.Fb(1073742336,rt.Sb,rt.Sb,[]),l.Fb(1073742336,rt.Ub,rt.Ub,[]),l.Fb(1073742336,rt.Wb,rt.Wb,[]),l.Fb(1073742336,rt.Yb,rt.Yb,[]),l.Fb(1073742336,rt.fc,rt.fc,[]),l.Fb(1073742336,rt.kc,rt.kc,[]),l.Fb(1073742336,rt.mc,rt.mc,[]),l.Fb(1073742336,rt.pc,rt.pc,[]),l.Fb(1073742336,rt.tc,rt.tc,[]),l.Fb(1073742336,rt.vc,rt.vc,[]),l.Fb(1073742336,rt.yc,rt.yc,[]),l.Fb(1073742336,rt.Jc,rt.Jc,[]),l.Fb(1073742336,rt.Ic,rt.Ic,[]),l.Fb(1073742336,rt.Hc,rt.Hc,[]),l.Fb(1073742336,rt.jd,rt.jd,[]),l.Fb(1073742336,rt.ld,rt.ld,[]),l.Fb(1073742336,rt.pd,rt.pd,[]),l.Fb(1073742336,rt.yd,rt.yd,[]),l.Fb(1073742336,rt.Cd,rt.Cd,[]),l.Fb(1073742336,rt.Hd,rt.Hd,[]),l.Fb(1073742336,rt.Md,rt.Md,[]),l.Fb(1073742336,rt.Od,rt.Od,[]),l.Fb(1073742336,rt.Ud,rt.Ud,[]),l.Fb(1073742336,rt.be,rt.be,[]),l.Fb(1073742336,rt.ee,rt.ee,[]),l.Fb(1073742336,rt.he,rt.he,[]),l.Fb(1073742336,rt.ne,rt.ne,[]),l.Fb(1073742336,rt.pe,rt.pe,[]),l.Fb(1073742336,rt.re,rt.re,[]),l.Fb(1073742336,rt.ve,rt.ve,[]),l.Fb(1073742336,rt.ye,rt.ye,[]),l.Fb(1073742336,rt.a,rt.a,[]),l.Fb(1073742336,Ct.a,Ct.a,[rt.c]),l.Fb(1073742336,ft.a,ft.a,[]),l.Fb(1073742336,At.a,At.a,[]),l.Fb(1073742336,yt.a,yt.a,[]),l.Fb(1073742336,vt.a,vt.a,[]),l.Fb(1073742336,kt.a,kt.a,[]),l.Fb(1073742336,wt.a,wt.a,[]),l.Fb(1073742336,Lt.a,Lt.a,[]),l.Fb(1073742336,Mt.a,Mt.a,[]),l.Fb(1073742336,Ot.a,Ot.a,[]),l.Fb(1073742336,zt.a,zt.a,[]),l.Fb(1073742336,xt.a,xt.a,[]),l.Fb(1073742336,Dt.a,Dt.a,[]),l.Fb(1073742336,Tt.a,Tt.a,[]),l.Fb(1073742336,Rt.a,Rt.a,[]),l.Fb(1073742336,St.a,St.a,[]),l.Fb(1073742336,Pt.a,Pt.a,[]),l.Fb(1073742336,Gt.a,Gt.a,[]),l.Fb(1073742336,jt.a,jt.a,[]),l.Fb(1073742336,st.b,st.b,[]),l.Fb(1073742336,Nt.a,Nt.a,[]),l.Fb(1073742336,Yt.a,Yt.a,[]),l.Fb(1073742336,Zt.a,Zt.a,[]),l.Fb(1073742336,qt.a,qt.a,[]),l.Fb(1073742336,Et.a,Et.a,[]),l.Fb(1073742336,It.a,It.a,[]),l.Fb(1073742336,Qt.a,Qt.a,[]),l.Fb(1073742336,Ht.a,Ht.a,[]),l.Fb(1073742336,Xt.a,Xt.a,[]),l.Fb(1073742336,Bt.a,Bt.a,[]),l.Fb(1073742336,Kt.a,Kt.a,[]),l.Fb(1073742336,Ut.a,Ut.a,[]),l.Fb(1073742336,Wt.a,Wt.a,[]),l.Fb(1073742336,Jt.a,Jt.a,[]),l.Fb(1073742336,$t.a,$t.a,[]),l.Fb(1073742336,_t.a,_t.a,[]),l.Fb(1073742336,Vt.a,Vt.a,[]),l.Fb(1073742336,ta.a,ta.a,[]),l.Fb(1073742336,aa.a,aa.a,[]),l.Fb(1073742336,ea.a,ea.a,[]),l.Fb(1073742336,la.a,la.a,[]),l.Fb(1073742336,na.a,na.a,[]),l.Fb(1073742336,oa.a,oa.a,[]),l.Fb(1073742336,ca.a,ca.a,[]),l.Fb(1073742336,da.a,da.a,[]),l.Fb(1073742336,ba.a,ba.a,[]),l.Fb(1073742336,ra.a,ra.a,[]),l.Fb(1073742336,ua.h,ua.h,[]),l.Fb(1073742336,ia.b,ia.b,[]),l.Fb(1073742336,sa.a,sa.a,[]),l.Fb(1073742336,pt.c,pt.c,[]),l.Fb(1073742336,pa.c,pa.c,[]),l.Fb(1073742336,Fa.a,Fa.a,[]),l.Fb(1073742336,u,u,[]),l.Fb(256,dt.q,"XSRF-TOKEN",[]),l.Fb(256,dt.r,"X-XSRF-TOKEN",[]),l.Fb(256,rt.Ge,!1,[]),l.Fb(256,rt.Ee,void 0,[]),l.Fb(256,rt.Qd,{nzDuration:3e3,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),l.Fb(256,rt.Xd,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),l.Fb(1024,I.m,function(){return[[{path:"",component:n.a,children:[{path:"",redirectTo:"getting-started",pathMatch:"full"},{path:"api",component:o},{path:"control",component:c},{path:"getting-started",component:d},{path:"guard",component:b},{path:"qa",component:r}]}]]},[])])})}}]);