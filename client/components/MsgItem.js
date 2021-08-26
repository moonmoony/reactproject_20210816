import MsgInput from "./MsgInput"

const MsgItem = ({ id, userId, timestamp, text, onUpdate, onDelete, isEditing, startEdit, myId, user }) => (
    <li className="messages__item">
        <h3>
            {user.nickname}{' '}
            <sub>
                {new Date(timestamp).toLocaleString('ko-KR', {
                    year: 'numeric',
                    month: "numeric",
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                })}
            </sub>
        </h3>

        {isEditing ? (
            <>
                <MsgInput mutate={onUpdate} text={text} id={id}/>
            </>
        ) : (
            text
        )} 

        {myId === userId && ( //주소창에 입력된 myId랑 userId랑 같으면 수정삭제버튼을 보여줘라!
            <div className="messages__buttons">
                <button onClick={startEdit}>수정</button>
                <button onClick={onDelete}>삭제</button>
            </div>
        )}
    </li>
)

export default MsgItem