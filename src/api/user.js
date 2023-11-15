/*
 * @Description: 用户api

 */

import request from '@/utils/request'

/**
 * 登录
 */
export const login = async (data) => request({ url: "/login", method: "POST", data })

/**
 * 注册
 */
export const register = async (data) => request({ url: "/register", method: "POST", data })