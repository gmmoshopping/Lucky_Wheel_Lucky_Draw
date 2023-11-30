const express = require("express");
const path = require("path");
const app = express();
const Sequelize = require("sequelize");
const db = require('./index');
const CustomerDB = db.CustomerDB;
const Op = db.Sequelize.Op;

class CustomerModel {
  constructor({
    f_code = "",
    f_path = "",
    f_login = "",
    f_password = "",
    f_use_yn = "",
    f_status = "",
  }) {
    this.f_code = f_code;
    this.f_path = f_path;
    this.f_login = f_login;
    this.f_password = f_password;
    this.f_use_yn = f_use_yn;
    this.f_status = f_status;
  }

  static getSave(body) {
    return CustomerDB.create(body)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static getFindAll() {
    return CustomerDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static getFindWhere(f_use_yn) {
    return CustomerDB.findOne({ where: { f_use_yn: f_use_yn } })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static getFindByCode(f_code) {
    return CustomerDB.findAll({
      where: {
        f_code: {
          [Op.eq]: f_code,
        },
        f_status: {
          [Op.eq]: true,
        },
      },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static getUpdate(f_code) {
    return CustomerDB.update(
      {
        f_status: true,
      },
      {
        where: { f_code: f_code },
      }
    )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  
  static getUpdateAll(f_code, sqlupdate) {
    return CustomerDB.update(
      {
        f_path: sqlupdate.f_path,
        f_login: sqlupdate.f_login,
        f_password: sqlupdate.f_password,
        f_use_yn: sqlupdate.f_use_yn,
      },
      { where: { f_code: f_code } }
    )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }  

  static getDelete(f_code) {
    return CustomerDB.destroy({
      where: { f_code: f_code },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
}

module.exports = CustomerModel;