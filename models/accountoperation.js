var config = require('../dbconfig')
const sql = require("mssql/msnodesqlv8");


async function getaccountdata(){
    try {
        let pool = await sql.connect(config);
        let accounts = await pool.request().query("SELECT * FROM account_info");
        return accounts.recordsets;
    } catch(error) {
        console.log("error :" + error);
    }
}

async function postaccountdata(account) {
    try {
        console.log(account);
        if (!account) {
            throw new Error('Account data is undefined');
        }

        let pool = await sql.connect(config);
        let insertaccount = await pool.request()
            .input('student_id', sql.VarChar, account.student_id)
            .input('pass', sql.VarChar, account.pass)
            .query('INSERT INTO account (student_id, pass) VALUES (@student_id, @pass)');
        return insertaccount.recordsets;
    } catch(error) {
        console.error("error :", error);
        throw error;
    }
}

module.exports = {
    getaccountdata: getaccountdata,
    postaccountdata: postaccountdata,
};