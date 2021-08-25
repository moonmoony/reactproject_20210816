import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MsgItem from './MsgItem'
import MsgInput from './MsgInput'
import fetcher from '../fetcher'

const UserIds = ['moony', 'wooky']
const getRandomUserId = () => UserIds[Math.round(Math.random())]

/** forunderstanding.txt line number 56 ref */

const MsgList = () => {
    /*
    이 query의 userId를 MsgItem에서도 사용해주면 로그인된 아이디 별로 수정삭제 버튼 기능을 구현할 수 있음 
    MsgList하단에 myId 추가 부분과 MsgItem.js의 ln3 참조
    */
    const { query: { userId = '' } } = useRouter() 
    const [msgs, setMsgs] = useState([]) //useState([originalMsgs]) -> useState([]) fetcher사용으로 빈배열로 변경
    const [editingId, setEditingId] = useState(null) //MsgItem 하단의 startEdit 수정버튼 기능구현

    //CREATE 
    /** forunderstanding.txt line number 32 ref */
    const onCreate = async text => {
        const newMsg = await fetcher('post', '/messages', { text, userId })
        setMsgs(msgs => [newMsg, ...msgs])
    }

    //UPDATE 
    const onUpdate = (text, id) => {
        setMsgs(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === id) //입력받은 id랑 같은 msg.id를 찾기
            if (targetIndex < 0) return msgs //같은 id가 없으면 -1이 나오는데 그 경우, msgs 처리(return msgs)

            const newMsgs = [ ...msgs ] //msgs를 펼쳐서 새로운 배열로 만들어주는 부분
            newMsgs.splice(targetIndex, 1, { //msgs를 splice로 나눠준 후 새로운 msgs를 만들어 주는 부분
                ...msgs[targetIndex], //기존 msgs를 통째로 가져와서 
                text, //새로운 text데이터로 바꿔주면 됨
            })
            return newMsgs
        })
        doneEdit()
    }

    //DELETE
    const onDelete = (id) => {
        setMsgs(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === id) 
            if (targetIndex < 0) return msgs
            
            const newMsgs = [ ...msgs ]
            newMsgs.splice(targetIndex, 1)
            return newMsgs
        })
    }

    const doneEdit = () => setEditingId(null)

    /** forunderstanding.txt line number 1 ref */
    //useEffect로 최초 동작시에만 실행되도록 함
    const getMessages = async () => {
        const msgs = await fetcher('get', '/messages')
        setMsgs(msgs)
    }
    //useEffect(async () => { //await를 쓰려면 async를 불러와야하는데 useEffect 내에서는 직접 하지 않기때문에 윗줄과 같이 처리필요
    useEffect(() => {
        getMessages()
    }, [])

    //const startEdit = id => setEditingId(id)

    return (
        <>
            <MsgInput mutate={onCreate} />
            <ul className="messages">
                {msgs.map(x => (
                <MsgItem 
                    key={x.id} 
                    { ...x } 
                    onUpdate={onUpdate}
                    onDelete={() => onDelete(x.id)} 
                    startEdit={() => setEditingId(x.id)} 
                    isEditing={editingId === x.id} 
                    myId={userId}
                />
                ))}
            </ul>
        </>
    )
}

export default MsgList