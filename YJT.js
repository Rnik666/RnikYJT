/*

         易截图2
         解锁永久VIP
         @Rnik666

[rewrite_local]
^https?:\/\/(jietu6|1jietu)\.com\/apiv2\/user url script-response-body  https://raw.githubusercontent.com/Rnik666/RnikYJT/main/YJT.js

[MITM]
hostname = jietu6.com, 1jietu.com

*/
var Rnik = JSON.parse($response.body);
Rnik.info.group_id = "3";
Rnik.info.vip = "1";
Rnik.info.group = "老子是永久VIP";
Rnik.info.mobile = "18888888888";
Rnik.info.nickname = "Rnik666🎖";
Rnik.info.image = "https://sz-1300098290.cos.ap-beijing.myqcloud.com/app/avatar/b74cc83011b511ef99db5baca73f87d2.png";
$done({ body: JSON.stringify(Rnik) });
