import { useOptimistic, useRef } from 'react';

export const AddMsg = ({ messages, sendMessage }) => {
    const formRef = useRef();
    const formAction = async (formData) => {
        const msg = formData.get('message');
        addOptimisticMsg(msg);
        formRef.current.reset();
        await sendMessage(msg);
    }

    const [optimisticMsgs, addOptimisticMsg] = useOptimistic(messages, (state, newMsg) => [
        ...state,
        {
            text: newMsg,
            key: state.length + 1,
            sending: true
        }
    ]);

    return (
        <>
            <ul style={{ listStyle: 'none' }}>
                {optimisticMsgs.map((msg) => <li key={msg.key}>{msg.text} {!!msg.sending && <small> (Sending...)</small>}</li>)}
            </ul>
            <form action={formAction} ref={formRef}>
                <input type="text" name="message" />
                <button type='submit'>submit</button>
            </form>
        </>
      
    )
}