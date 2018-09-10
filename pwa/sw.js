// 安装 service Worker
var cacheName = 'cahce_pwa';
self.addEventListener('install',(event) => {
	event.waitUntil(
		caches.open(cacheName)
		.then((cache) => cache.addAll([
			'./js/script.js',
			'./images/hello.jpg'
		]))
	);
});

// 监听 fetch 事件请求拦截
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			if (response) {
				return response;
			}
			
			// 克隆请求
			var requestToCache = event.request.clone();

			return fetch(requestToCache).then(function(response) {
				if (!response || response.status !== 200) {
					return response;
				}

				// 克隆响应
				var responseToCache = response.clone();

				caches.open(cacheName)
				.then(function(cache) {
					cache.put(requestToCache, responseToCache);
				});
				return response;
			});
		})
	);
});

// 更新缓存
self.addEventListener('activate', function (e) {
	var cachePromise = caches.keys().then(function(keys) {
		return Promise.all(keys.map(function (key) {
			if (key !== cacheName) {
				return caches.delete(key);
			}
		}));
	})
	e.waitUntil(cachePromise);
	return self.clients.claim();
});

