const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod=require("zod");

const emailschema = z.string().email();
const passwordschema = z.string().min(8);
function signJwt(username, password) {
    const emailresponse = emailschema.safeParse(username);
    const passwordresponse = passwordschema.safeParse(password);
    if(!emailresponse.success || !passwordresponse.success){
        return null;
    }else
    {
   const signature=jwt.sign({username},jwtPassword);
    return signature;
      
    }
}
function verifyJwt(token) {
    let ans = true;
    try {
       jwt.verify(token, jwtPassword);
    } catch(e) {
       ans = false;
    }
    return ans;
}
function decodeJwt(token) {

    function decodejwt(token){
      const decoder=jwt.decode(token)
      if(decoder){
        return true;
      }else{
        return false;
      }
    }
    
    const ayush=decodejwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhleWl0c2F5dWhzQGdtYWlsLmNvbSIsImlhdCI6MTcxNTk3MzgzMX0.EAVbe8_qV5O5QXFJ6PC_4xCurBhEQOTaZfbX_Uvshas')
    console.log(ayush);
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
