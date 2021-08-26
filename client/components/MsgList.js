import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import MsgItem from './MsgItem'
import MsgInput from './MsgInput'
import fetcher from '../fetcher'
import useInfiniteScroll from '../hooks/useInfiniteScroll'

//delete까지 axios로 구현 후에는 randomuserid를 쓸일이 없으니까 지워줌
//const UserIds = ['moony', 'wooky']
//const getRandomUserId = () => UserIds[Math.round(Math.random())]

/** forunderstanding.txt line number 56 ref */

const MsgList = ({ smsgs, users }) => {
    /*
    이 query의 userId를 MsgItem에서도 사용해주면 로그인된 아이디 별로 수정삭제 버튼 기능을 구현할 수 있음 
    MsgList하단에 myId 추가 부분과 MsgItem.js의 ln3 참조
    */
    //const { query: { userId = '' } } = useRouter()  //주소창에 입력되는 대소문자 구분 처리
    const { query } = useRouter()
    const userId = query.userId || query.userid || ''

    const [msgs, setMsgs] = useState(smsgs) //useState([originalMsgs]) -> useState([]) fetcher사용으로 빈배열로 변경
    const [editingId, setEditingId] = useState(null) //MsgItem 하단의 startEdit 수정버튼 기능구현
    const [hasNext, setHasNext] = useState(true)
    const fetchMoreEl = useRef(null)
    const intersecting = useInfiniteScroll(fetchMoreEl) //intersecting 값이 true인지 false인지 달라질 것!

    //CREATE 
    /** forunderstanding.txt line number 32 ref */
    const onCreate = async text => {
        const newMsg = await fetcher('post', '/messages', { text, userId })
        if (!newMsg) throw Error('something wrong') //newMsg 데이타가 없다면 에러를 띄우도록 처리
        setMsgs(msgs => [newMsg, ...msgs])
    }

    //UPDATE 
    /** forunderstanding.txt line number 71 ref */
    const onUpdate = async (text, id) => {
        const newMsg = await fetcher('put', `/messages/${id}`, { text, userId })
        //if (!newMsg) return //newMsg 데이타가 없다면 아무것도 하지 않도록 처리
        if (!newMsg) throw Error('something wrong') 
        setMsgs(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === id) 
            if (targetIndex < 0) return msgs 
            const newMsgs = [ ...msgs ] 
            newMsgs.splice(targetIndex, 1, newMsg) //server에서 온 온전한 newMsg 데이타로 바꿔줌
            return newMsgs
        })
        doneEdit()
    }

    //DELETE
    /** forunderstanding.txt line number 89 ref */
    const onDelete = async id => {
        const receivedId = await fetcher('delete', `/messages/${id}`, { params: { userId } }) //messages.js에서 삭제된 id만 send해줬기 때문
        console.log(typeof receivedId, typeof id) //delete 후 삭제된 메시지가 안보여야 하는데 보여서 타입 확인 receivedId는 number이고 id는 string
        setMsgs(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === receivedId + '') //type이 자동형변환 되었으므로 receivedId를 string화 해줌
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
        const newMsgs = await fetcher('get', '/messages', { params: { cursor: msgs[msgs.length - 1]?.id || '' } }) //cursor는 맨 마지막에 있는 메시지의 id값을 넘겨주기
        if (newMsgs.length === 0) {
            setHasNext(false)
            return
        }
        //setMsgs(newMsgs)
        setMsgs(msgs => [...msgs, ...newMsgs]) //스크롤이 되었을때 새로 생기는 메시지 목록이 newMsgs이고 기존이 msgs이니 기존 뒤에 붙도록 처리
    }
    //useEffect(async () => { //await를 쓰려면 async를 불러와야하는데 useEffect 내에서는 직접 하지 않기때문에 윗줄과 같이 처리필요
    /*
    useEffect(() => {
        getMessages()
    }, [])
    */

    useEffect(() => {
        if (intersecting && hasNext) getMessages()
    }, [intersecting])

    //const startEdit = id => setEditingId(id)

    //console.log('render')

    return (
        <>
            {userId && <MsgInput mutate={onCreate} />}
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
                    user={users[x.userId]}
                />
                ))}
            </ul>
            <div ref={fetchMoreEl} />
        </>
    )
}

export default MsgList