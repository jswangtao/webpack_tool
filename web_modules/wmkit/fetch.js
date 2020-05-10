import 'whatwg-fetch';
import { Toast } from 'antd-mobile';
import { config } from '../config/index';

function _insertHost(input) {
  if (typeof input === 'string') {
    return config.BFF_HOST + input;
  }
  return input;
}


/**
 * 封装业务fetch
 * @param input 输入url等
 * @param init 初始化http header信息等
 */
export default async function Fetch(
  input,
  init,
  opts = {
    insertHost: true,
    showTip: true,
    isUpload: false,
  },
) {
  const { insertHost } = opts;
  input = insertHost == null || insertHost ? _insertHost(input) : input;

  // 封装请求信息
  const request = {
    method: 'GET',
    mode: 'cors', // 跨域请求
    headers: opts.isUpload
      ? {
        system: 'H5',
        Authorization: `Bearer ${window.token || ''}`,
      }
      : {
        system: 'H5',
        'Content-Type': 'application/json',
        // 'x-client-type': WMkit.isInweixin() ? 'w' : 'm',
        // 'x-href': encodeURIComponent(window.location.href),
        // 'x-uid': adminId.slice(1),
        Authorization: `Bearer ${window.token || ''}`,
      },
    ...init,
  };

  // 添加网络超时机制
  const timeoutId = setTimeout(() => {
    Toast.info('您的网络不给力');
  }, config.HTTP_TIME_OUT * 1000);

  try {
    const response = await fetch(input, request);
    const res = await response.json();
    if (res.code === 'K-999996') {
      Toast.info(res.message);
      clearTimeout(timeoutId);
      return;
    }
    if (res.code === 'K-000015') {
      Toast.info('您的账号有异常，请联系管理员！');
    }
    clearTimeout(timeoutId);
    return res;
  } catch (err) {
    clearTimeout(timeoutId);
    // dev
    if (process.env.NODE_ENV !== 'production') {
      console.log('err', JSON.stringify(err));
    }

    // 全局消息通知
    if (opts.showTip == null || opts.showTip) {
      Toast.info('您的网络不给力');
    }
  }
}
