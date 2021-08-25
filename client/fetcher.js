import axios from 'axios'

//axios.get('http://localhost:8000/messages') //baseURL을 지정하면 getURL 안 하고 라우트만 지정해줘도 됨
axios.defaults.baseURL = 'http://localhost:8000' 

const fetcher = async (method, url, ...rest) => { //fetcher는 axios를 편하게 쓰기 위해 임의로 지정된 엘리먼츠
    const res = await axios[method](url, ...rest) //...rest는 CRUD 메소드 뒤에 인자가 하나 또는 두개 이상이 들어올 수 있도록 하는 처리
    return res.data
}

export default fetcher

/*

//get, delete 메소드 뒤에는 url인자가 하나만 오고 post, put 메소드 뒤에는 url과 data인자 두개가 옴

//get과 delete는 뒤에 config로 옵션값을 지정
get: axios.get(url[, config]) 
delete: axios.delete(url[, config])

//post와 put 뒤에는 새로 쓰거나 변경할 내용인 data가 들어옴
post: axios.post(url, data[, config])
put: axios.put(url, data[, config])

 */