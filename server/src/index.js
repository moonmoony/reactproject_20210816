/* express 앱을 띄우기 위한 모든 기능들이 들어가는 js */
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import messagesRoute from './routes/messages.js'
import usersRoute from './routes/users.js'

const app = express()
/** ApolloServer 사용하면 아래 두줄은 필요가 없음 */
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json()) //express에서 json 형식으로 사용하겠다는 의미

app.use(
    cors({
        origin: 'http://localhost:3000', //클라이언트 서버
        credentials: true,
    }),
)

/** aboutcomments.txt line number 17 참고 */

/** 

messagesRoute.forEach(({ method, route, handler }) => {
    app[method](route, handler)
})

messagesRoute 와 usersRoute 둘다 받는 중복이 되니까 함수형으로 바꿔주기
const routes = [...messagesRoute, ...usersRoute]

*/

/**
 * GraphQL과 RESTful API의 차이점
 * rest api server는 라우트를 이용해서 (사용자의 요청에 따른 라우트) 그에 대응하는 response 하고
 * graphql server는 오직 그래프ql라는 path 하나로 그 안에서 내부에서(ex; resolvers) 자체 판단하여 response 
 */

// const routes = [...messagesRoute, ...usersRoute]
// routes.forEach(({ method, route, handler }) => {
//     app[method](route, handler)
// })

const server = new ApolloServer({
    typeDefs: schema, 
    resolvers, //import messagesRoute usersRoute 대신에 resolvers로 정의
    context: {
        model: {
            messages: '',
            users: ''
        }
    }
})

server.applyMiddleware({ app, path: '/graphql' })

/** 주소창에 localhost:8000/users/moony 이런 식으로 테스트 가능 */
app.listen(8000, () => {
    console.log('server listening on 8000...')
}) //서버경로는 8000번