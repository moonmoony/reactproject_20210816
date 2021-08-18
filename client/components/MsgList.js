import { useState } from 'react'
import MsgItem from './MsgItem'
import MsgInput from './MsgInput'

const UserIds = ['moony', 'wooky']
const getRandomUserId = () => UserIds[Math.round(Math.random())]

const originalMsgs = Array(50)
    .fill(0)
    .map((_, i) => ({
        id: 50 - i, //id: i + 1,
        userId: getRandomUserId(),
        timestamp: 1234567890123 + (50 - i) * 1000 * 60, //timestamp: 1234567890123 + i * 1000 * 60,
        text: `${50 - i} mock text`, //text: `${i + 1} mock text`,
}))
//.reverse()

const MsgList = () => {
    const [msgs, setMsgs] = useState(originalMsgs)

    //MsgItem 하단의 startEdit 수정버튼 기능구현
    const [editingId, setEditingId] =useState(null)

    //CREATE 
    const onCreate = text => {
        const newMsg = {
            id: msgs.length + 1,
            userId: getRandomUserId(),
            timestamp: Date.now(),
            text: `${msgs.length + 1} ${text}`,
        }
        setMsgs(msgs => [newMsg, ...msgs])
        //msgs.unshift(newMsg)
        //console.log(msgs)
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
                />
                ))}
            </ul>
        </>
    )
}

export default MsgList