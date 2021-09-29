import React from 'react'
import memoryUtils from '../../utils/memoryUtils'
import { Redirect } from 'react-router'

export default function Admin() {
  const user = memoryUtils.user
  // 如果内存没有存储user ==> 当前没有登陆
  if(!user || !user.user_id) {
    // 自动跳转到登陆(在render()中)
    return <Redirect to='/login'/>
  }

  return (
    <div>
      Admin
    </div>
  )
}
