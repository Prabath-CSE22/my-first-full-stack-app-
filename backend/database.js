import mysql from "mysql2";

const db = mysql.createPool({
    "host": "localhost",
    "user": "root",
    "password": "0310",
    "database": "users",   
}).promise();

export async function getTabledata(){
    const [rows] = await db.query("select * from login");
    return rows;
}

export async function insertData(name, password){
    await db.query("insert into login (username, Pword) values (?, ?)", [name, password]);
}   

export async function deleteData(username, password){
    const respond = await db.query("delete from login where username = ? and Pword = ?", [username, password]);
    return respond;
}

export async function updateData(username, password){
    const respond = await db.query("update login set Pword = ? where username = ?", [password, username]);
    return respond;
}
export async function getdata(username, password){
    const [rows] = await db.query("select * from login where username = ? and Pword = ?", [username, password]);
    return rows;
}