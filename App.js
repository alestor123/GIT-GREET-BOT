var axios = require('axios'),
os = require('os'),
chalk = require('chalk'),
username = os.userInfo().username,
month = ['January','February','March','April','May','June','July','August','September','October','November','December'],
inf = require('os').networkInterfaces();
function getIp(){
for(da in inf) inf[da].filter((inter) => inter.family === 'IPv4' && inter.internal === false ? inad = inter.address : undefined)
return inad
}