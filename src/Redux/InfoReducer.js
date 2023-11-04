const initialState = {
    dial_code: '',
    phone: '',
    token : ''
};

export const InfoReducer = (state = initialState, { type , payload}) => {
    switch (type) {
        case 'NUMBER' : 
            return { ...state, dial_code: payload.dial_code, phone: payload.phone }
        case 'TOKEN': 
            return {...state , token : payload.token}
        default : return state
    }

}