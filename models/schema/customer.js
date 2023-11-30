const DataTypes = require('sequelize').DataTypes;
module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define(
    "tbl_user",
    {
      f_code:{
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      f_email: {
        type: Sequelize.STRING,
        field: "f_email",
        comment: 'This is a column name that has a comment',
        allowNull: false,
      },
      f_password: {
        type: Sequelize.STRING,
        field: "f_password",
        comment: 'This is a column name that has a comment',
        allowNull: false,
      },
      f_profile_code: {
        type: Sequelize.STRING,
        field: "f_profile_code",
        comment: 'รหัสพนักงาน',
        allowNull: false,
      },
      f_hash_password: {
        type: Sequelize.STRING,
        defaultValue: '-',
        field: "f_hash_password",
        comment: 'This is a column name that has a comment',
      },
      f_salt_password: {
        type: Sequelize.STRING,
        defaultValue: '-',
        field: "f_salt_password",
        comment: 'This is a column name that has a comment',
      },
      f_use_yn: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        field: "f_use_yn",
        comment: 'true=ลบชั่วคราว false=ไม่ลบชั่วคราว',
      },
      f_status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        field: "f_status",
        comment: 'สถานะใช้งานในระบบ true=อนุมัติ false=ไม่อนุมัติ',
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Customer;
};