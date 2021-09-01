/* 
    node.js에서는 js-es6가 제공하는 모듈 문법 사용이 어려움 
    즉, import fs from 'fs' -> const fs = require('fs') 처럼 써야 했음
    js-es6 모듈 문법을 사용하려면 package.json에서 "type": "module"을 추가해주면 됨
*/

import fs from 'fs' //node.js에 있는 파일 시스템 메서드들이 모여있음
import { resolve } from 'path' //node.js에서 제공하는 경로 설정 수정 기능

const basePath = resolve() //현재에 있는 경로가 basePath로 잡힘

const filenames = {
    messages: resolve(basePath, 'src/db/messages.json'),
    users: resolve(basePath, 'src/db/users.json')
}

export const readDB = target => {
    try {
        return JSON.parse(fs.readFileSync(filenames[target], 'utf-8'))
    } catch (err) {
        console.error(err)
    }
}

export const writeDB = (target, data) => {
    try {
        return fs.writeFileSync(filenames[target], JSON.stringify(data))
    } catch (err) {
        console.error(err)
    }
}
