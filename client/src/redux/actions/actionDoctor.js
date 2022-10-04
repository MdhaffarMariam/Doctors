import { FILTER_DOCTORS, GET_ALL_DOCTORS, GET_DENTIST, GET_GENYCO, GET_PEDIATRE, GET_PROFILE_DOCTOR, GET_PROFILE_FAIL_DOCTOR, GET_PROFILE_SUCCES_DOCTOR, LOGIN_DOCTOR, LOGIN_SUCCES_DOCTOR, LOGOUT_DOCTOR, REGISTER_DOCTOR, REGISTER_FAIL_DOCTOR, REGISTER_SUCCES_DOCTOR } from "../actiontypes/actionTypesDoctor"
import axios from 'axios'
import { Alert } from "react-bootstrap"


export const registerDoctor = (newDoctor)=>async(dispatch) =>{
    dispatch({
        type:REGISTER_DOCTOR
    })

    try {
        const{data} = await axios.post('/doctor/registerDoctor',newDoctor)
        dispatch({
            type:REGISTER_SUCCES_DOCTOR,
            payload:data
        })
    } catch (error) {
        dispatch ({
            type:REGISTER_FAIL_DOCTOR,
            payload:error.response.data
        })
        
    }
}

export const loginDoctor=(doctor)=>async(dispatch)=>{
    dispatch({
        type:LOGIN_DOCTOR
    });
    try {
        const {data}=await axios.post('/doctor/loginDoctor',doctor);
        localStorage.setItem('token',data.token)
        dispatch({
            type:LOGIN_SUCCES_DOCTOR,
            payload:data
        })
    } catch (error) {
        dispatch ({
            type:REGISTER_FAIL_DOCTOR,
            payload:error.response.data
        })
        
    }
}
export const getprofileDoctor =()=>async(dispatch)=>{
    const token = localStorage.getItem("token")
    const config = {
        headers:{
            Authorization : token
        }
    }
    dispatch({
        type : GET_PROFILE_DOCTOR
    })
    try {
        const {data}= await axios.get('/doctor/authDoctor',config)
        dispatch({
            type: GET_PROFILE_SUCCES_DOCTOR,
            payload:data
        })
        
    } catch (error) {
        dispatch ({
            type:GET_PROFILE_FAIL_DOCTOR,
            payload:error.response.data
        })
    }
}

export const logoutdoctor = () =>{
    localStorage.clear()
    return {
        type:LOGOUT_DOCTOR
    }
}
export const getalldoctors=()=>async(dispatch)=>{
    try {
        const res = await axios.get("/doctor/alldoctors");
        dispatch({
            type : GET_ALL_DOCTORS,
            payload:res.data
        })
    } catch (error) {
        Alert('get all doctors error')
    }
}
export const filter_doctors = () =>(dispatch)=>{
    
    dispatch ({
        type : FILTER_DOCTORS,
    })
        
    
}
export const get_pediatre =()=>async(dispatch)=>{try {
    const res = await axios.get('/doctor/getpediatre')
    dispatch({
        type:GET_PEDIATRE,
        payload : res.data
    })
} catch (error) {
    Alert('Pediatre error')
}
    
}
export const get_genyco =()=>async(dispatch)=>{try {
    const res = await axios.get('/doctor/getgenyco')
    dispatch({
        type:GET_GENYCO,
        payload : res.data
    })
} catch (error) {
    Alert('genyco error')
}
    
}

export const get_dentist = ()=>async(dispatch)=>{
    try {
        const res = await axios.get('/doctor/getdentist')
    dispatch({
        type : GET_DENTIST,
        payload : res.data
    })
    } catch (error) {
        alert ('dentist error')
        
    }
}
