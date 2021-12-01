import React from 'react';
import { RecoilRoot } from 'recoil';

import { useDidShow, useDidHide } from '@tarojs/taro';

const App = (props) => {

  //程序启动，或切前台时触发。

  useDidShow (() => {

  })

  //程序切后台时触发。
  useDidHide (() => {
  })

  return (
    <RecoilRoot>
      {props.children}
    </RecoilRoot>
  );

}

export default App

