/*

易截图2：Rnik ZC

[rewrite_local]
^https?:\/\/(jietu6|1jietu)\.com\/apiv2\/user url script-response-body  https://raw.githubusercontent.com/Rnik666/RnikYJT/main/YJT.js

[MITM]
hostname = jietu6.com, 1jietu.com

*/
var guding = JSON.parse($response.body);
guding.info.group_id = "3";
guding.info.vip = "1";
guding.info.group = "超级VIP一万年";
guding.info.nickname = "Rnik";
$done({ body: JSON.stringify(guding) });
