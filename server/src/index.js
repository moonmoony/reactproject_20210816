/* express 앱을 띄우기 위한 모든 기능들이 들어가는 js */
import express from 'express'
import cors from 'cors'
import messagesRoute from './routes/messages.js'
import usersRoute from './routes/users.js'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) //express에서 json 형식으로 사용하겠다는 의미

app.use(cors({
    origin: 'http://localhost:3000', //클라이언트 서버
    credentials: true
}))

/** aboutcomments.txt line number 17 참고 */

/** 

messagesRoute.forEach(({ method, route, handler }) => {
    app[method](route, handler)
})

messagesRoute 와 usersRoute 둘다 받는 중복이 되니까 함수형으로 바꿔주기
const routes = [...messagesRoute, ...usersRoute]

*/

const routes = [...messagesRoute, ...usersRoute]
routes.forEach(({ method, route, handler }) => {
    app[method](route, handler)
})

/** 

주소창에 localhost:8000/users/moony 이런 식으로 테스트 가능

*/

app.listen(8000, () => {
    console.log('server listening on 8000...')
}) //서버경로는 8000번