var config = require('../dbconfig')
const sql = require("mssql/msnodesqlv8");


async function getdata(){
    try {
        let pool = await sql.connect(config);
        console.log("sql server connected");
    } catch(error) {
        console.log("error :" + error);
    }
}

module.exports = {
    getdata: getdata,
};