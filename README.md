�÷�
```
git clone ��ַ
npm install
webpack --watch

```
�ڷ������д򿪣���ȡ��WebStorm�д򿪡�
����һ��
���°�(v2.0+)��react-router�У�������hashHistory��
���ɵ�url�������ǻ����?_k=x3dsmd�����Ĳ�����
���������ͬһ�����Ӷ�Σ�
�������ͬhash���Ǻ������ͬ��?_k������������ӵ���ʷ��¼�С�
```
var router = require('react-router');
var createHashHistory = require('react-router/node_modules/history').createHashHistory;
var appHistory = router.useRouterHistory(createHashHistory)({queryKey:false});

 <Router history={appHistory}>

```
�������
ҳ����תǰҪ�����ʱ�������������ᱨ����
���������
```
componentWillUnmount() {
	clearInterval(ding);
};
componentWillUnmount������������Ƴ�֮ǰ�����ã�
�����л�����һЩ���������
��componentDidMount��������ӵ�����������Ҫ�ڸ÷����г�����
���紴���Ķ�ʱ��������ӵ��¼���������
���򣬽��������ִ��������һ��û��ж�ص������ʹ��setState��
���һ��������й¶���⣨�ڴ桢�������ȣ���
```
