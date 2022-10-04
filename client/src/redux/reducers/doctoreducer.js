import { FILTER_DOCTORS, GET_ALL_DOCTORS, GET_DENTIST, GET_GENYCO, GET_PEDIATRE, GET_PROFILE_DOCTOR, GET_PROFILE_FAIL_DOCTOR, GET_PROFILE_SUCCES_DOCTOR, LOGIN_DOCTOR, LOGIN_FAIL_DOCTOR, LOGIN_SUCCES_DOCTOR, LOGOUT_DOCTOR, REGISTER_DOCTOR, REGISTER_FAIL_DOCTOR, REGISTER_SUCCES_DOCTOR } from "../actiontypes/actionTypesDoctor"

const init = {
    loading2: false ,
    doctors:null,
    token:null,
    doctorerrors:null,
    isAuth : false,
    FIXIT:null,
    filter : false,
    dentists : null
}

const doctoreducer = (state = init , {type,payload})=>{
    switch (type) {
        case REGISTER_DOCTOR:
        case LOGIN_DOCTOR:
        case GET_PROFILE_DOCTOR:
            return{
                ...state,loading2:true
            }
            
        case REGISTER_SUCCES_DOCTOR:
            return{
                ...state,loading2:false,doctors:payload
            }
            case LOGIN_SUCCES_DOCTOR:
                return{
                    ...state,loading2:false,doctors:payload, token:payload.token
               
                }
        case GET_PROFILE_SUCCES_DOCTOR:
            return{
                ...state , loading2:false ,doctors:payload , isAuth:true
            }
            case REGISTER_FAIL_DOCTOR:
            case LOGIN_FAIL_DOCTOR:
            case GET_PROFILE_FAIL_DOCTOR:
                return{
                    ...state, loading2:false , doctorerrors:payload
                }
            case LOGOUT_DOCTOR:
                return {
                    state
                }
            case GET_ALL_DOCTORS:
            case GET_GENYCO:
            case GET_PEDIATRE:
                return{
                    ...state ,loading2:false , FIXIT:payload
                    }
            
            case GET_DENTIST:
                return{
                ...state ,loading2:false , dentists:payload
                }
            case FILTER_DOCTORS: 
            return{
                ...state, loading2:!state.filter
            }
    
        default:
            return state;
    }
}
export default doctoreducer