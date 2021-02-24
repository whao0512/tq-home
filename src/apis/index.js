import request from '@/utils/request.js'

export function getBrandsList() {
    return request({
        url: '/brands/query',
        method: 'get'
    })
}

export function bannerList() {
    return request({
        url: '/banner/query',
        method: 'get'
    })
}

export function productList() {
    return request({
        url: '/prodList/query',
        method: 'get'
    })
}

export function companyNews() {
    return request({
        url: '/companyNews/query',
        method: 'get'
    })
}
export function enterpriseNews() {
    return request({
        url: '/enterpriseNews/query',
        method: 'get'
    })
}