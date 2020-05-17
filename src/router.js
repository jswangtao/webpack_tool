/**
 * 路由配置文件
 * path 路由地址
 * title：标题
 * exact 精准匹配
 * strict 严格匹配（一般用到exact就够了，具体区别请看https://reacttraining.com/react-router/web/api/Route/strict-bool）
 * asyncComponent：按需加载
 * routes 子路由
 * hasBottom 是否有底部导航栏
 *
 */

const routers = [
  {
    path: '/',
    title: document.title || '首页',
    exact: true,
    asyncComponent: () => import('./pages/main'),
    hasBottom: true,
  },
  {
    path: '/test',
    title: document.title || '测试',
    exact: true,
    asyncComponent: () => import('./pages/test'),
  },
];

export default routers;
