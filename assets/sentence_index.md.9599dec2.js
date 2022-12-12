import{_ as t,c as d,o as e,a as r}from"./app.888a3753.js";const k=JSON.parse('{"title":"语句接口","description":"","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"时间规划","slug":"时间规划","link":"#时间规划","children":[]},{"level":2,"title":"接口说明","slug":"接口说明","link":"#接口说明","children":[{"level":3,"title":"请求地址","slug":"请求地址","link":"#请求地址","children":[]},{"level":3,"title":"请求参数","slug":"请求参数","link":"#请求参数","children":[]}]},{"level":2,"title":"返回格式","slug":"返回格式","link":"#返回格式","children":[]},{"level":2,"title":"扩展","slug":"扩展","link":"#扩展","children":[]}],"relativePath":"sentence/index.md","lastUpdated":1668849856000}'),o={name:"sentence/index.md"},a=r('<h1 id="语句接口" tabindex="-1">语句接口 <a class="header-anchor" href="#语句接口" aria-hidden="true">#</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h2><blockquote><p>动漫也好、小说也好、网络也好，不论在哪里，我们总会看到有那么一两个句子能穿透你的心。我们把这些句子汇聚起来，形成一言网络，以传递更多的感动。如果可以，我们希望我们没有停止服务的那一天。</p><p>简单来说，一言指的就是一句话，可以是动漫中的台词，也可以是网络上的各种小段子。 或是感动，或是开心，有或是单纯的回忆。来到这里，留下你所喜欢的那一句句话，与大家分享，这就是一言存在的目的。</p></blockquote><p>该接口也是我们（萌创团队）自 2016 年以来稳定提供的接口。目前接口经历了这些变化：</p><ul><li>2016 初版接口，实验性提供。占用域名：<code>api.hitokoto.cn</code> 和 <code>sslapi.hitokoto.cn</code></li><li>2018 v1 接口，开始稳定提供。占用域名： <code>v1.hitokoto.cn</code><ul><li>2018.02 测试状态统计</li><li>2018.03 测试网易云</li><li>2018.04 开始分布式部署</li><li>2019.10 <a href="https://www.dogecloud.com/?from=hitokoto.cn" target="_blank" rel="noreferrer">DogeCloud</a> 开始提供赞助，成为我们的顶级赞助商。</li><li>2020.01 恢复使用部分弃用字段，句子启用追踪 UUID，为主站重构做基础</li><li>2020.06 发布 <code>1.5.0</code>，加入句子区间功能，重构大部分基础模块，优化性能，修复问题</li></ul></li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>请注意，由于网易云接口被过度滥用，我们于 <code>2022.11.18</code> 停用了网易云插件。<br><strong>如您仍有此需求，请：</strong></p><ul><li>自行部署接口，参考 <a href="/sentence/deploy">接口部署</a>。</li><li>使用 NeteaseCloudMusicApi 提供的接口，参考 <a href="https://github.com/Binaryify/NeteaseCloudMusicApi" target="_blank" rel="noreferrer">NeteaseCloudMusicApi</a></li></ul></div><h2 id="时间规划" tabindex="-1">时间规划 <a class="header-anchor" href="#时间规划" aria-hidden="true">#</a></h2><table><thead><tr><th>时间</th><th>版本</th><th>影响接口</th><th>调整</th><th>技术栈</th></tr></thead><tbody><tr><td>2018 年 6 月</td><td>测试</td><td><code>api.hitokoto.cn</code> 和 <code>sslapi.hitokoto.cn</code></td><td>接口重定向至 v1 接口。老接口将不做可用性保证。</td><td>PHP</td></tr><tr><td>2018 年7 月</td><td>v1</td><td><code>v1.hitokoto.cn</code></td><td>v1 接口锁定功能结构，若无重要原因将不会增减功能。接口将稳定存在直至 v2 上线后一年。</td><td>Node.js 和 Docker</td></tr><tr><td>预计 2021 年</td><td>v2</td><td>未知</td><td>上线 v2 接口</td><td>Node.js，Go 或者 Swoole</td></tr></tbody></table><p>目前 v1 接口已进入功能锁定阶段。 如果你有什么想法或建议， 可以在 <a href="https://github.com/freejishu/hitokoto_tell/issues/2" target="_blank" rel="noreferrer">功能申请表</a> 中提出。</p><p>由于一言目前属于公益性运营，为了保证资源的公平利用和不过度消耗公益资金，我们会定期的屏蔽某些大流量的站点。若您的站点的流量较大，您需要提前联系我们获得授权后再开始使用。对于超过阈值的站点，我们有可能会通过一定途径（例如邮件）等方式联系您，若 24 小时无回应则域名将暂时进入黑名单。</p><p>考虑到大家的实际应用需求，我们在 <strong><a href="https://afdian.net/@hitokoto" target="_blank" rel="noreferrer">爱发电</a></strong> 上架了一个可以提高请求限制的赞助选项，有需要可以前往了解。</p><h2 id="接口说明" tabindex="-1">接口说明 <a class="header-anchor" href="#接口说明" aria-hidden="true">#</a></h2><blockquote><p><strong>请注意：</strong> 我们于 2020 年 6 月 15 日发布了语句接口的 <code>1.5.0</code> 版本，此版本允许你查找范围区间，允许你部署自己的接口服务（与我们提供的一致）。 详细的更新信息请参考：<a href="https://github.com/hitokoto-osc/hitokoto-api/releases" target="_blank" rel="noreferrer">https://github.com/hitokoto-osc/hitokoto-api/releases</a></p><p>为了一言的长久发展，我们恳求您在使用一言服务得同时 <strong>尽可能</strong> 得加入一言的链接（如：添加友情链接，为一言文本附加超链接）。</p></blockquote><h3 id="请求地址" tabindex="-1">请求地址 <a class="header-anchor" href="#请求地址" aria-hidden="true">#</a></h3><table><thead><tr><th>地址</th><th>协议</th><th>方法</th><th>QPS 限制</th><th>线路</th></tr></thead><tbody><tr><td><code>v1.hitokoto.cn</code></td><td>HTTPS</td><td>Any</td><td>3.5</td><td>全球</td></tr><tr><td><code>international.v1.hitokoto.cn</code></td><td>HTTPS</td><td>Any</td><td>10</td><td>国外</td></tr></tbody></table><blockquote><p>请注意：一言域名已加入 HSTS 预加载计划，所有请求一律以 HTTPS 方法进行。</p></blockquote><h3 id="请求参数" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数" aria-hidden="true">#</a></h3><table><thead><tr><th>参数</th><th>值</th><th>可选</th><th>说明</th></tr></thead><tbody><tr><td>c</td><td>见后表</td><td>是</td><td>句子类型</td></tr><tr><td>encode</td><td>见后表</td><td>是</td><td>返回编码</td></tr><tr><td>charset</td><td>见后表</td><td>是</td><td>字符集</td></tr><tr><td>callback</td><td>如：<code>moe</code></td><td>是</td><td>调用的异步函数</td></tr><tr><td>select</td><td>默认：<code>.hitokoto</code></td><td>是</td><td>选择器。配合 <code>encode=js</code> 使用</td></tr><tr><td>min_length</td><td>默认：<code>0</code></td><td>是</td><td>返回句子的最小长度（包含）</td></tr><tr><td>max_length</td><td>默认：<code>30</code></td><td>是</td><td>返回句子的最大长度（包含）</td></tr></tbody></table><h4 id="句子类型-参数" tabindex="-1">句子类型（参数） <a class="header-anchor" href="#句子类型-参数" aria-hidden="true">#</a></h4><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>a</td><td>动画</td></tr><tr><td>b</td><td>漫画</td></tr><tr><td>c</td><td>游戏</td></tr><tr><td>d</td><td>文学</td></tr><tr><td>e</td><td>原创</td></tr><tr><td>f</td><td>来自网络</td></tr><tr><td>g</td><td>其他</td></tr><tr><td>h</td><td>影视</td></tr><tr><td>i</td><td>诗词</td></tr><tr><td>j</td><td>网易云</td></tr><tr><td>k</td><td>哲学</td></tr><tr><td>l</td><td>抖机灵</td></tr><tr><td>其他</td><td>作为 动画 类型处理</td></tr></tbody></table><blockquote><p>可选择多个分类，例如： <code>?c=a&amp;c=c</code></p></blockquote><h4 id="返回编码-参数" tabindex="-1">返回编码（参数） <a class="header-anchor" href="#返回编码-参数" aria-hidden="true">#</a></h4><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>text</td><td>返回纯洁文本</td></tr><tr><td>json</td><td>返回格式化后的 JSON 文本</td></tr><tr><td>js</td><td>返回指定选择器的同步调用函数。默认选择器为：<code>.hitokoto</code></td></tr><tr><td>其他</td><td>返回格式化后的 JSON 文本</td></tr></tbody></table><h4 id="字符集-参数" tabindex="-1">字符集（参数） <a class="header-anchor" href="#字符集-参数" aria-hidden="true">#</a></h4><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>utf-8</td><td>返回 utf-8 编码的内容</td></tr><tr><td>gbk</td><td>返回 gbk 编码的内容。不支持与异步函数同用</td></tr><tr><td>其他</td><td>返回 utf-8 编码的内容</td></tr></tbody></table><h2 id="返回格式" tabindex="-1">返回格式 <a class="header-anchor" href="#返回格式" aria-hidden="true">#</a></h2><table><thead><tr><th>返回参数名称</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>一言标识</td></tr><tr><td>hitokoto</td><td>一言正文。编码方式 unicode。使用 utf-8。</td></tr><tr><td>type</td><td>类型。请参考第三节参数的表格</td></tr><tr><td>from</td><td>一言的出处</td></tr><tr><td>from_who</td><td>一言的作者</td></tr><tr><td>creator</td><td>添加者</td></tr><tr><td>creator_uid</td><td>添加者用户标识</td></tr><tr><td>reviewer</td><td>审核员标识</td></tr><tr><td>uuid</td><td>一言唯一标识；可以链接到 <a href="https://hitokoto.cn?uuid=%5Buuid%5D" target="_blank" rel="noreferrer">https://hitokoto.cn?uuid=[uuid]</a> 查看这个一言的完整信息</td></tr><tr><td>commit_from</td><td>提交方式</td></tr><tr><td>created_at</td><td>添加时间</td></tr><tr><td>length</td><td>句子长度</td></tr></tbody></table><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-hidden="true">#</a></h2><ul><li>网易云 API， 目前文档尚未制作，可以先参考 <a href="https://i.a632079.me/posts/teng-koa/" target="_blank" rel="noreferrer">介绍</a><ul><li><strong>由于网易云最近封锁严重，建议自行搭建。</strong></li></ul></li></ul>',29),h=[a];function i(l,c,n,s,u,b){return e(),d("div",null,h)}const f=t(o,[["render",i]]);export{k as __pageData,f as default};
