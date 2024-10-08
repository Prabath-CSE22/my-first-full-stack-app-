
import mysql from "mysql2";

const db = mysql.createPool({
    "host": "localhost",
    "user": "root",
    "password": "0310",
    "database": "shop",   
}).promise();

export async function getTabledata(){
    const [rows] = await db.query("select * from product");
    return rows;
}
export async function getRowdata(id){
    const [rows] = await db.query("select * from product where ID = ?", [id]);
    return rows;
}

export async function getFromcart(id) {
    const [respond] = await db.query("SELECT * FROM cart WHERE ID = ?", [id]);
    return respond;
}

export async function getAllFromcart(id) {
    const [respond] = await db.query("SELECT * FROM cart");
    return respond;
}

export async function addTocart(name, product, price) {
    const responds = await db.query("INSERT INTO cart (customer, product_name, price) VALUES( ?, ?, ?)", [name, product, price]);
    return responds;
}
{/*make sure to change these queries from here onwards*/}
export async function insertData(name, password){
    await db.query("insert into product (username, Pword) values (?, ?)", [name, password]);
}   

export async function deleteData(username, password){
    const respond = await db.query("delete from product where username = ? and Pword = ?", [username, password]);
    return respond;
}

export async function updateData(username, password){
    const respond = await db.query("update product set Pword = ? where username = ?", [password, username]);
    return respond;
}
export async function getdata(username, password){
    const [rows] = await db.query("select * from product where username = ? and Pword = ?", [username, password]);
    return rows;
}