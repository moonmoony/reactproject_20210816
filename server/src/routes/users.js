import { readDB } from '../dbController.js'

const getUsers = () => readDB('users')

const usersRoute = [
    {
        method: 'get',
        route: '/users',
        handler: (req, res) => {
            const users = getUsers()
            res.send(users)
        }
    },

    {
        method: 'get',
        route: '/users/:id',
        handler: ({ params: { id }}, res) => {
            try {
                const users = getUsers()
                const user = users[id] //배열이 아닌 객체로 되어있기 때문에 find 안해줘도됨
                if (!user) throw Error('사용자가 없습니다.')
                res.send(user) //user가 아닌 id를 보여주기
            } catch (err) {
                res.status(500).send({ error: err })
            }
        }
    }
]

export default usersRoute