import mysql from 'mysql2/promise';

export default defineEventHandler(async (event)=>{
    event.context.db = await mysql.createConnection({
        host: 'svc.sel3.cloudtype.app',
        user: 'root',
        password: '9175',
        port: '31803',
        database: 'testt'
    })
})