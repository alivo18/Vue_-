// 匿名函数直接调用
(function(w){
	//一个插件最终还是一个对象
	let MyPlugin={}
	// Vue插件中必须要有一个install方法
	MyPlugin.install = function (Vue, options) {
	  // 1. 添加全局方法或 property
	  Vue.myGlobalMethod = function () {
	    console.log('全局方法被调用')
	  }
	
	  // 2. 添加全局资源
	  Vue.directive('upper',function(node,bindings){
			node.textContent=bindings.value.toUpperCase()
	  })
	
	//   // 3. 注入组件选项
	//   Vue.mixin({
	//     created: function () {
	//       // 逻辑...
	//     }
	//     ...
	//   })
	
	  // 4. 添加实例方法
	  Vue.prototype.$myMethod = function (methodOptions) {
	    console.log('实例方法被调用')
	  }
	}
	
// 且在window上暴露
w.MyPlugin=MyPlugin
})(window)