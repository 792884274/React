用法
```
git clone 地址
npm install
webpack --watch

```
在服务器中打开，获取在WebStorm中打开。
问题一：
在新版(v2.0+)的react-router中，配置了hashHistory后，
生成的url后面总是会带个?_k=x3dsmd这样的参数，
如果你点击的同一个链接多次，
它会把相同hash但是后面带不同的?_k参数的链接添加到历史记录中。
```
var router = require('react-router');
var createHashHistory = require('react-router/node_modules/history').createHashHistory;
var appHistory = router.useRouterHistory(createHashHistory)({queryKey:false});

 <Router history={appHistory}>

```
问题二：
页面跳转前要清楚定时器，如果不清楚会报错！！
解决方法：
```
componentWillUnmount() {
	clearInterval(ding);
};
componentWillUnmount方法在组件被移除之前被调用，
让你有机会做一些清楚工作。
在componentDidMount方法中添加的所有任务都需要在该方法中撤销，
比如创建的定时器或者添加的事件监听器。
否则，结果将会出现错误（如果在一个没有卸载的组件中使用setState）
并且会带来各种泄露问题（内存、监听器等）。
```
