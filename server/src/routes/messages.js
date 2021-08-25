import { v4 } from 'uuid'
import { readDB, writeDB } from '../dbController.js'

const getMsgs = () => readDB('messages') //중복되는 부분을 전역적 함수형으로 전환
const setMsgs = data => writeDB('messages', data)

/** aboutcomments.txt line number 36 참고*/
const messagesRoute = [
    { //GET MESSAGES 데이터 불러오기
        method: 'get',
        route: '/messages',
        handler: (req, res) => {
            //const msgs = readDB('messages') //readDB는 dbController.js에서 옴 > 전역함수로 밖에 빼줌
            const msgs = getMsgs()
            res.send(msgs) //결국 client(view) 단의 data를 db에 저장 시키기 위한 행위
        }
    },

    { //GET MESSAGES 데이터 불러오기 ver2 :해당 ID에 대한 메시지를 불러오는 형식
        method: 'get',
        route: '/messages/:id',
        handler: ({ params: {id }}, res) => {
            try {
                const msgs = getMsgs()
                const msg = msgs.find(m => m.id === id) //message.id가 param에 들어온 id와 같은 경우
                if(!msg) throw Error('not found') //메시지가 없다면 not found 에러 표시
                res.send(msg) //메시지가 있다면 sned로 메시지를 보내주면 됨
                /** aboutcomments.txt line number 64 참고*/
            } catch (err) {
                res.status(404).send({ error: err })
            }
        }
    },

    { //CREATE MESSAGES 새로운 데이터 생성
        method: 'post',
        route: '/messages',
        handler: ({ body }, res) => {
            try {
                if (!body.userId) throw Error('no userId')
                const msgs = getMsgs()
                const newMsg = {
                    id: v4(),
                    text: body.text,
                    userId: body.userId,
                    timestamp: Date.now()
                }
                msgs.unshift(newMsg)
                //writeDB('messages', msgs) //DB에 insert해주는 것도 전체 공통 > 전역함수로 밖에 빼줌
                setMsgs(msgs)
                res.send(newMsg)
            } catch (err) {
                res.status(500).send( { error: err }) 
            }
        }
    },

    { //UPDATE MESSAGES
        method: 'put',
        route: '/messages/:id',
        handler: ({ body, params:{ id }}, res) => {
            //클라이언트 단과 서버 단의 sink controll을 위해 try-catch 설정
            try {
                const msgs = getMsgs()
                const targetIndex = msgs.findIndex(msg => msg.id === id)
                if (targetIndex < 0) throw '메시지가 없습니다.'
                if (msgs[targetIndex].userId !== body.userId) throw '사용자가 다릅니다.'

                const newMsg = { ...msgs[targetIndex], text: body.text }
                msgs.splice(targetIndex, 1, newMsg)
                setMsgs(msgs) //db에 저장
                res.send(newMsg) //새로 변경된 메시지를 보내줌
            } catch (err) {
                res.status(500).send( { error: err }) 
            }
        }
    },

    { //DELETE MESSAGES
        method: 'delete',
        route: '/messages/:id',
        handler: ({ params: { id }, query: { userId } }, res) => {
            try {
                const msgs = getMsgs()
                const targetIndex = msgs.findIndex(msg => msg.id === id)
                if (targetIndex < 0) throw '메시지가 없습니다.'
                if (msgs[targetIndex].userId !== userId) throw '사용자가 다릅니다.'

                msgs.splice(targetIndex, 1)
                setMsgs(msgs) 
                res.send(id) //삭제가 성공했을때 해당 id가 삭제되었다는 것을 제공하게 됨
            } catch (err) {
                res.status(500).send( { error: err }) 
            }
        }
    }
]

export default messagesRoute