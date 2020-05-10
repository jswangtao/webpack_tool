/**
 * 路由配置文件
 *   hasBottom     是否有底部导航栏
 */

const routers = [
  {
    path: '/',
    title: document.title || '首页',
    exact: true,
    asyncComponent: () => import('./main'),
    hasBottom: true,
    openAccess: true,
  },

];

export default routers;
