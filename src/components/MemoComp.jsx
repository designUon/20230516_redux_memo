import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMemoToolkit, delMemoRedux } from '../slices/memoSlice';

export default function MemoComp() {
    const memo = useSelector((state) => state.memo);
    const dispatch = useDispatch();
    const [memolist, setMemoList] = useState('');

    const inputMemo = (e) => {
        setMemoList(e.target.value);
    };

    const [likeArray, setLikeArray] = useState(Array(memo.length).fill(false));

    const likeClick = (i) => {
        const likeList = [...likeArray];
        likeList[i] = !likeList[i];
        setLikeArray(likeList);
    };


    const addMemo =()=>{
        dispatch(addMemoToolkit({ text: memolist, date: "2023-05-15" }));
        setMemoList('');
    }

    return (
        <div>
            <h1>MEMO</h1>
            <input type="text" onChange={inputMemo} value={memolist} className='inputBox'/>
            <button onClick={addMemo} className='addmemo_btn'>+ MEMO</button>
            {
                memo.map((m, i) => (
                    <div key={m.id} className='memobox'>
                        
                        <p>{m.date}</p>

                        <h3>
                            {m.text}
                            
                            <div
                                className='likebtn'
                                onClick={() => likeClick(i)}
                            >
                                {likeArray[i] ? '💙' : '🤍'}
                            </div>
                            
                            <button
                                className='delbtn'
                                onClick={() => { dispatch(delMemoRedux(m.id)) }}
                            >
                                <span>X</span>
                            </button>

                        </h3>
                    </div>
                ))
            }
        </div>
    );
}
