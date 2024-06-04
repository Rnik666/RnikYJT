/*

易截图2：Rnik ZC

[rewrite_local]
^https?:\/\/(jietu6|1jietu)\.com\/apiv2\/user url script-response-body  https://raw.githubusercontent.com/Rnik666/RnikYJT/main/YJT.js

[MITM]
hostname = jietu6.com, 1jietu.com

*/
var Rnik = JSON.parse($response.body);
Rnik.info.group_id = "3";
Rnik.info.vip = "1";
Rnik.info.group = "老子是永久VIP";
Rnik.info.nickname = "Rnik666🎖";
$done({ body: JSON.stringify(Rnik) });
