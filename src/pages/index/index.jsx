
import {useRecoilState,useRecoilValue, atom} from 'recoil';
import { View, Text } from '@tarojs/components'
import './index.css'

const tokenStore = atom({
  key: 'tokenStore',
  default:false,
});
const userInfo = selector({
  key: 'userInfo',
  get:  ({ get }) => {
    return {}
  
  }
});

const Index = () => {
  const user = useRecoilValue(userInfo);
  const [token, setToken] =  useRecoilState(tokenStore);


    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
}

export default Index
