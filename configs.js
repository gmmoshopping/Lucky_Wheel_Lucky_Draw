const config = {
  database: "lucky",
  username: "root",
  password: "123456",
  host: "localhost",
  port: "3306",
  dialect: "mysql",  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
    configLabelWheel: "1",// 1 = ทำการเปิดใช้งานส่วนของระบบ
    luckyWheelLabel: [
      {'fillStyle' : '#eae56f', 'text' : 'AirCon'},
      {'fillStyle' : '#89f26e', 'text' : 'IPhone'},
      {'fillStyle' : '#7de6ef', 'text' : 'Starbucks'},
      {'fillStyle' : '#e7706f', 'text' : 'Sharp'},
      {'fillStyle' : '#eae56f', 'text' : 'Discount'}
  ], //กำหนด lable และ สี : {'fillStyle' : 'กำหนดสี', 'text' : 'กำหนดชื่อรางวัล'}
  countLucky: 5 ,// กำหนดจำนวนรายการ Wheel
  };

  module.exports = config;