// 2. useEffect
// import React, { useEffect, useState } from 'react';

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');
//     useEffect(() => {
//         console.log('effect');
//         console.log(name);
//         return () => {
//             console.log('cleacup');
//             console.log(name);
//         }
//     // }); // 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정

//     // }, []); //설정한 함수가 컴포넌트가 화면에 가장 처음 렌더링 될 때만
//                 // 실행되고 업데이트 할 경우에는 실행 할 필요가 없는 경우

//     }, [name]); // name값이 변경될때만!

//     const onChangeName = (e) => {
//         setName(e.target.value);
//     };

//     const onChageNickname = (e) => {
//         setNickname(e.target.value);
//     };

//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChageNickname} />
//             </div>
//             <div>
//                 <div>
//                     <b>이름: {name} </b>
//                 </div>
//                 <div>
//                     <b>닉네임 : {nickname}</b>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Info;

// 4. useReducer
// import React, { useReducer } from 'react';

// function reducer(state, action) {
//     return {
//         ...state,
//         [action.name]: action.value
//     };
// }

// const Info = () => {
//     const [state, dispatch] = useReducer(reducer, {
//         name: '',
//         nickname: ''
//     });

//     const { name, nickname } = state;

//     const onChange = e => {
//         dispatch(e.target);
//     };

//     return (
//         <div>
//             <div>
//                 <input name="name" value={name} onChange={onChange} />
//                 <input name="nickname" value={nickname} onChange={onChange} />
//             </div>
//             <div>
//                 <div>
//                     <b>이름 : </b>
//                     {name}
//                 </div>
//                 <div>
//                     <b>닉네임 : </b>
//                     {nickname}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Info;

//8-1 useInputs
import React, { useReducer } from 'react';
import useInputs from './useInputs';

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const { name, nickname } = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b> 닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;