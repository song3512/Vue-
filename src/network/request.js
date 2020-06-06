import axios from 'axios'

export function request(config) {
    const instance1=axios.create({
      //接口地址老师以更改，不方便透露，如有需要添加老师微信coderwhy001
      baseURL: 'http://123.207.32.32:8000',
      timeout:5000
    })
//
  instance1.interceptors.request.use(config=>{
// console.log(config)
    return config
  },err=>{
    // console.log(err)
  })
    instance1.interceptors.response.use(res=>{
      // console.log(res)
      return res.data
    },err=>{
      console.log(err)
    })

    return  instance1(config)
}


