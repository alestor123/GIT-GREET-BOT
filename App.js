var axios = require('axios'),
os = require('os'),
chalk = require('chalk'),
figlet = require('figlet'),
username = os.userInfo().username,
month = ['January','February','March','April','May','June','July','August','September','October','November','December'],
hr = new Date().getHours(),
days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
day = new Date().getDay(),
inf = require('os').networkInterfaces();
figlet(greet() + ' ' + username, async (err,data) => {  
var ip = await getIp();
console.log(chalk.yellowBright(data))
console.log(chalk.greenBright.cyanBright.bold('Its ' + days[day] + ' , ' + month[new Date().getMonth()] + ' ' + new Date().getDate() + ' ' + new Date().getFullYear()))
console.log(` \n PUBLIC : ${ip.public} \n LOCAL : ${ip.internal} \n `)
})


async function getIp(){
var data = await axios.get('http://api.ipify.org/')
for(da in inf) inf[da].filter((inter) => inter.family === 'IPv4' && inter.internal === false ? inad = inter.address : undefined)
return { public:data.data , internal:inad }
}
function greet(){
if(hr>= 12) return 'Good After Noon'
else if(hr >= 18) return 'Good Evening'
else return 'Good Morning'
}
