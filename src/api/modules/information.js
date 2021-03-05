import { Axios } from '../axios'

export const information = {
    /** 获取博物馆信息 */
    getText(id) {
        return Axios(
            'ncdscenter/patientSynthesis/getText',
            { id }
        )
    }
    
}