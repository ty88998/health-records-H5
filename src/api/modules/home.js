import { Axios } from '../axios'
import { appID } from '../../utils/const'

export const home = {
    /** 获取博物馆信息 */
    getMuseumsInfo() {
        return Axios(
            'indexInfo/getMuseumsInfo.do',
            { appID }
        )
    },
    /**用户点赞-取消点赞 */
    addLikeHistory(params) {
        console.log('点赞接口触发')
        return Axios(
            'SmallProgram/addLikeHistory.do',
            params
        )
    },
    /**
     * 保存用户信息
     * @param {*} params 用户信息
     */
    addTouristInfo(params) {
        return Axios(
            'indexInfo/addTouristInfo.do',
            params
        )
    },
    /**
     * 游客收藏接口
     * @param {*} params 更新后的用户信息
     */
    addCollectHistory(params) {
        return Axios(
            'SmallProgram/addCollectHistory.do',
            params
        )
    }
}