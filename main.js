/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: main.js

IMPORT("ShootLib", "ShootLib");

var ShotType = ShootLib.ShotType;
var ButtonType = ShootLib.ButtonType;

ShootLib.init({
    crosshairGUI:{
        bitmap:{
            coords:{
                width:2048,
                height:512
            },
            size:{
                width:4000,
                height:1000
            }
        }
    }
});

ShootLib.addGun({
    id:"deserteagle",
    name:"Desert Eagle",
    ammo:"ammohandgun",
    accuracy:6,
    recoil:4,
    rate:10,
    texture:{
        name:"deserteagle",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:10,
        count:7,
        damage:20
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"DesertEagleShoot.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/LugerReload.ogg"
    }
});

ShootLib.addGun({
    id:"r870",
    name:"R870",
    ammo:"ammoshotgun",
    accuracy:11,
    recoil:26,
    rate:20/15,
    texture:{
        name:"r870",
        meta:0
    },
    shotType:ShotType.SHOTGUN,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:10,
        count:7,
        damage:5
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"R870Shoot.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/W1200Reload.ogg"
    },
    shotgun:{
        count:8,
        degreesSpread:3,
    }
});

ShootLib.addGun({
    id:"ak47",
    name:"AK-47",
    ammo:"ammoassault",
    accuracy:5,
    recoil:3,
    rate:6,
    texture:{
        name:"ak47",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:10,
        count:30,
        damage:20
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"AK47Shoot.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});

ShootLib.addGun({
    id:"aa12",
    name:"AA-12",
    ammo:"ammoshotgun",
    accuracy:10,
    recoil:10,
    rate:3,
    texture:{
        name:"aa12",
        meta:0
    },
    shotType:ShotType.SHOTGUN,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:10,
        count:8,
        damage:5
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"AA-12Shoot.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/PPSHReload.ogg"
    },
    shotgun:{
        count:6,
        degreesSpread:3,
    }
});

ShootLib.addGun({
    id:"barrett",
    name:"Barrett",
    ammo:"ammosniper",
    accuracy:2,
    recoil:25,
    rate:1,
    texture:{
        name:"barrett",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:10,
        count:10,
        damage:ShootLib.MAX_DAMAGE
    },
    fov:{
        level:40,
        link:"crosshair/dragunov"
    },
    sounds:{
        shot:"BarrettShoot.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/BARReload.ogg"
    }
});

ShootLib.addAmmos([{
    id:"ammohandgun",
    name:"Handgun Ammo",
    texture:{
        name:"ammohandgun",
        meta:0
    }
},{
    id:"ammoshotgun",
    name:"Shotgun Ammo",
    texture:{
        name:"ammoshotgun",
        meta:0
    }
},{
    id:"ammoassault",
    name:"Assault Rifle Ammo",
    texture:{
        name:"ammoassault",
        meta:0
    }
},{
    id:"ammosniper",
    name:"Sniper Rifle Ammo",
    texture:{
        name:"ammosniper",
        meta:0
    }
},]);




