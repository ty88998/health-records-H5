import { Axios } from '../axios'

export const information = {
    /** 获取患者个人信息 */
    queryPatientBasicsApi(params) {
        return Axios(
            '/ncdscenter/patientSynthesis/queryPatientBasics',
            params
        )
    },
    /** 获取患者体征信息 */
    getBodyInfoApi(params) {
        return Axios(
            '/ncdscenter/patientSynthesis/getBodyInfo',
            params
        )
    },
    /** 获取患者生活方式 */
    getLifeInfoApi(params) {
        return Axios(
            '/ncdscenter/patientSynthesis/getLifeInfo',
            params
        )
    },
    /** 获取患者疾病信息 */
    getDiseaseInfoApi(params) {
        return Axios(
            '/ncdscenter/patientSynthesis/getDiseaseinfo',
            params
        )
    },
    
}