import request from '../utils/request'

/**
 * 获取用户信息
 * @param {*} data 
 * @returns 
 */
export function getUserInfo(data) {
    return Promise.resolve()
    return request({
        url: '/user/info',
        method: 'POST',
        data
    })
} 