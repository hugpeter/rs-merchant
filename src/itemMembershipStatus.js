//this data is taken from
//https://rsbuddy.com/exchange/summary.json

const itemMembershipStatus = 
{
    "2": {
      "overall_average": 164,
      "id": 2,
      "sell_average": 164,
      "members": true,
      "buy_average": 164,
      "name": "Cannonball",
      "sp": 5
    },
    "6": {
      "overall_average": 192000,
      "id": 6,
      "sell_average": 187728,
      "members": true,
      "buy_average": 187071,
      "name": "Cannon base",
      "sp": 187500
    },
    "8": {
      "overall_average": 185158,
      "id": 8,
      "sell_average": 182596,
      "members": true,
      "buy_average": 182130,
      "name": "Cannon stand",
      "sp": 187500
    },
    "10": {
      "overall_average": 191404,
      "id": 10,
      "sell_average": 196542,
      "members": true,
      "buy_average": 198597,
      "name": "Cannon barrels",
      "sp": 187500
    },
    "12": {
      "overall_average": 188419,
      "id": 12,
      "sell_average": 187862,
      "members": true,
      "buy_average": 187676,
      "name": "Cannon furnace",
      "sp": 187500
    },
    "28": {
      "overall_average": 0,
      "id": 28,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Insect repellent",
      "sp": 3
    },
    "30": {
      "overall_average": 2000,
      "id": 30,
      "sell_average": 1681,
      "members": true,
      "buy_average": 568,
      "name": "Bucket of wax",
      "sp": 6
    },
    "36": {
      "overall_average": 177,
      "id": 36,
      "sell_average": 175,
      "members": true,
      "buy_average": 142,
      "name": "Candle",
      "sp": 3
    },
    "39": {
      "overall_average": 0,
      "id": 39,
      "sell_average": 12,
      "members": true,
      "buy_average": 12,
      "name": "Bronze arrowtips",
      "sp": 1
    },
    "40": {
      "overall_average": 5,
      "id": 40,
      "sell_average": 4,
      "members": true,
      "buy_average": 4,
      "name": "Iron arrowtips",
      "sp": 2
    },
    "41": {
      "overall_average": 35,
      "id": 41,
      "sell_average": 36,
      "members": true,
      "buy_average": 36,
      "name": "Steel arrowtips",
      "sp": 6
    },
    "42": {
      "overall_average": 49,
      "id": 42,
      "sell_average": 49,
      "members": true,
      "buy_average": 49,
      "name": "Mithril arrowtips",
      "sp": 16
    },
    "43": {
      "overall_average": 115,
      "id": 43,
      "sell_average": 102,
      "members": true,
      "buy_average": 101,
      "name": "Adamant arrowtips",
      "sp": 40
    },
    "44": {
      "overall_average": 0,
      "id": 44,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune arrowtips",
      "sp": 200
    },
    "45": {
      "overall_average": 4,
      "id": 45,
      "sell_average": 4,
      "members": true,
      "buy_average": 4,
      "name": "Opal bolt tips",
      "sp": 7
    },
    "46": {
      "overall_average": 29,
      "id": 46,
      "sell_average": 28,
      "members": true,
      "buy_average": 28,
      "name": "Pearl bolt tips",
      "sp": 12
    },
    "47": {
      "overall_average": 0,
      "id": 47,
      "sell_average": 33,
      "members": true,
      "buy_average": 33,
      "name": "Barb bolttips",
      "sp": 95
    },
    "48": {
      "overall_average": 9,
      "id": 48,
      "sell_average": 8,
      "members": true,
      "buy_average": 8,
      "name": "Longbow (u)",
      "sp": 60
    },
    "50": {
      "overall_average": 4,
      "id": 50,
      "sell_average": 4,
      "members": true,
      "buy_average": 0,
      "name": "Shortbow (u)",
      "sp": 23
    },
    "52": {
      "overall_average": 1,
      "id": 52,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Arrow shaft",
      "sp": 1
    },
    "53": {
      "overall_average": 6,
      "id": 53,
      "sell_average": 5,
      "members": true,
      "buy_average": 5,
      "name": "Headless arrow",
      "sp": 1
    },
    "54": {
      "overall_average": 0,
      "id": 54,
      "sell_average": 6,
      "members": true,
      "buy_average": 6,
      "name": "Oak shortbow (u)",
      "sp": 50
    },
    "56": {
      "overall_average": 0,
      "id": 56,
      "sell_average": 9,
      "members": true,
      "buy_average": 9,
      "name": "Oak longbow (u)",
      "sp": 80
    },
    "58": {
      "overall_average": 16,
      "id": 58,
      "sell_average": 15,
      "members": true,
      "buy_average": 15,
      "name": "Willow longbow (u)",
      "sp": 160
    },
    "60": {
      "overall_average": 50,
      "id": 60,
      "sell_average": 34,
      "members": true,
      "buy_average": 33,
      "name": "Willow shortbow (u)",
      "sp": 100
    },
    "62": {
      "overall_average": 51,
      "id": 62,
      "sell_average": 51,
      "members": true,
      "buy_average": 50,
      "name": "Maple longbow (u)",
      "sp": 320
    },
    "64": {
      "overall_average": 47,
      "id": 64,
      "sell_average": 48,
      "members": true,
      "buy_average": 51,
      "name": "Maple shortbow (u)",
      "sp": 200
    },
    "66": {
      "overall_average": 381,
      "id": 66,
      "sell_average": 381,
      "members": true,
      "buy_average": 381,
      "name": "Yew longbow (u)",
      "sp": 640
    },
    "68": {
      "overall_average": 233,
      "id": 68,
      "sell_average": 233,
      "members": true,
      "buy_average": 207,
      "name": "Yew shortbow (u)",
      "sp": 400
    },
    "70": {
      "overall_average": 1100,
      "id": 70,
      "sell_average": 1101,
      "members": true,
      "buy_average": 1101,
      "name": "Magic longbow (u)",
      "sp": 1280
    },
    "72": {
      "overall_average": 912,
      "id": 72,
      "sell_average": 912,
      "members": true,
      "buy_average": 0,
      "name": "Magic shortbow (u)",
      "sp": 800
    },
    "91": {
      "overall_average": 55,
      "id": 91,
      "sell_average": 55,
      "members": true,
      "buy_average": 62,
      "name": "Guam potion (unf)",
      "sp": 3
    },
    "93": {
      "overall_average": 31,
      "id": 93,
      "sell_average": 30,
      "members": true,
      "buy_average": 30,
      "name": "Marrentill potion (unf)",
      "sp": 5
    },
    "95": {
      "overall_average": 249,
      "id": 95,
      "sell_average": 247,
      "members": true,
      "buy_average": 246,
      "name": "Tarromin potion (unf)",
      "sp": 11
    },
    "97": {
      "overall_average": 678,
      "id": 97,
      "sell_average": 675,
      "members": true,
      "buy_average": 634,
      "name": "Harralander potion (unf)",
      "sp": 20
    },
    "99": {
      "overall_average": 7318,
      "id": 99,
      "sell_average": 7317,
      "members": true,
      "buy_average": 7317,
      "name": "Ranarr potion (unf)",
      "sp": 25
    },
    "101": {
      "overall_average": 1075,
      "id": 101,
      "sell_average": 1075,
      "members": true,
      "buy_average": 1074,
      "name": "Irit potion (unf)",
      "sp": 40
    },
    "103": {
      "overall_average": 2459,
      "id": 103,
      "sell_average": 2458,
      "members": true,
      "buy_average": 2455,
      "name": "Avantoe potion (unf)",
      "sp": 48
    },
    "105": {
      "overall_average": 2350,
      "id": 105,
      "sell_average": 2350,
      "members": true,
      "buy_average": 2348,
      "name": "Kwuarm potion (unf)",
      "sp": 54
    },
    "107": {
      "overall_average": 2443,
      "id": 107,
      "sell_average": 2435,
      "members": true,
      "buy_average": 2408,
      "name": "Cadantine potion (unf)",
      "sp": 65
    },
    "109": {
      "overall_average": 871,
      "id": 109,
      "sell_average": 871,
      "members": true,
      "buy_average": 870,
      "name": "Dwarf weed potion (unf)",
      "sp": 70
    },
    "111": {
      "overall_average": 0,
      "id": 111,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Torstol potion (unf)",
      "sp": 25
    },
    "113": {
      "overall_average": 161,
      "id": 113,
      "sell_average": 148,
      "members": false,
      "buy_average": 144,
      "name": "Strength potion(4)",
      "sp": 14
    },
    "115": {
      "overall_average": 137,
      "id": 115,
      "sell_average": 118,
      "members": false,
      "buy_average": 117,
      "name": "Strength potion(3)",
      "sp": 13
    },
    "117": {
      "overall_average": 100,
      "id": 117,
      "sell_average": 195,
      "members": false,
      "buy_average": 195,
      "name": "Strength potion(2)",
      "sp": 13
    },
    "119": {
      "overall_average": 46,
      "id": 119,
      "sell_average": 46,
      "members": false,
      "buy_average": 46,
      "name": "Strength potion(1)",
      "sp": 11
    },
    "121": {
      "overall_average": 0,
      "id": 121,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Attack potion(3)",
      "sp": 12
    },
    "123": {
      "overall_average": 120,
      "id": 123,
      "sell_average": 120,
      "members": true,
      "buy_average": 0,
      "name": "Attack potion(2)",
      "sp": 9
    },
    "125": {
      "overall_average": 0,
      "id": 125,
      "sell_average": 20,
      "members": true,
      "buy_average": 20,
      "name": "Attack potion(1)",
      "sp": 6
    },
    "127": {
      "overall_average": 37,
      "id": 127,
      "sell_average": 73,
      "members": true,
      "buy_average": 73,
      "name": "Restore potion(3)",
      "sp": 88
    },
    "129": {
      "overall_average": 0,
      "id": 129,
      "sell_average": 99,
      "members": true,
      "buy_average": 99,
      "name": "Restore potion(2)",
      "sp": 66
    },
    "131": {
      "overall_average": 87,
      "id": 131,
      "sell_average": 87,
      "members": true,
      "buy_average": 87,
      "name": "Restore potion(1)",
      "sp": 44
    },
    "133": {
      "overall_average": 0,
      "id": 133,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Defence potion(3)",
      "sp": 120
    },
    "135": {
      "overall_average": 2645,
      "id": 135,
      "sell_average": 2197,
      "members": true,
      "buy_average": 1928,
      "name": "Defence potion(2)",
      "sp": 90
    },
    "137": {
      "overall_average": 450,
      "id": 137,
      "sell_average": 428,
      "members": true,
      "buy_average": 216,
      "name": "Defence potion(1)",
      "sp": 60
    },
    "139": {
      "overall_average": 6889,
      "id": 139,
      "sell_average": 6896,
      "members": true,
      "buy_average": 6898,
      "name": "Prayer potion(3)",
      "sp": 152
    },
    "141": {
      "overall_average": 5490,
      "id": 141,
      "sell_average": 5350,
      "members": true,
      "buy_average": 5266,
      "name": "Prayer potion(2)",
      "sp": 114
    },
    "143": {
      "overall_average": 2300,
      "id": 143,
      "sell_average": 2282,
      "members": true,
      "buy_average": 2282,
      "name": "Prayer potion(1)",
      "sp": 76
    },
    "145": {
      "overall_average": 344,
      "id": 145,
      "sell_average": 245,
      "members": true,
      "buy_average": 218,
      "name": "Super attack(3)",
      "sp": 180
    },
    "147": {
      "overall_average": 211,
      "id": 147,
      "sell_average": 209,
      "members": true,
      "buy_average": 204,
      "name": "Super attack(2)",
      "sp": 135
    },
    "149": {
      "overall_average": 155,
      "id": 149,
      "sell_average": 149,
      "members": true,
      "buy_average": 120,
      "name": "Super attack(1)",
      "sp": 90
    },
    "151": {
      "overall_average": 0,
      "id": 151,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fishing potion(3)",
      "sp": 200
    },
    "153": {
      "overall_average": 100,
      "id": 153,
      "sell_average": 100,
      "members": true,
      "buy_average": 0,
      "name": "Fishing potion(2)",
      "sp": 150
    },
    "155": {
      "overall_average": 0,
      "id": 155,
      "sell_average": 10,
      "members": true,
      "buy_average": 10,
      "name": "Fishing potion(1)",
      "sp": 100
    },
    "157": {
      "overall_average": 1527,
      "id": 157,
      "sell_average": 1465,
      "members": true,
      "buy_average": 1464,
      "name": "Super strength(3)",
      "sp": 220
    },
    "159": {
      "overall_average": 1233,
      "id": 159,
      "sell_average": 1150,
      "members": true,
      "buy_average": 1081,
      "name": "Super strength(2)",
      "sp": 165
    },
    "161": {
      "overall_average": 941,
      "id": 161,
      "sell_average": 902,
      "members": true,
      "buy_average": 840,
      "name": "Super strength(1)",
      "sp": 110
    },
    "163": {
      "overall_average": 1413,
      "id": 163,
      "sell_average": 1460,
      "members": true,
      "buy_average": 1527,
      "name": "Super defence(3)",
      "sp": 264
    },
    "165": {
      "overall_average": 1864,
      "id": 165,
      "sell_average": 1722,
      "members": true,
      "buy_average": 1659,
      "name": "Super defence(2)",
      "sp": 198
    },
    "167": {
      "overall_average": 0,
      "id": 167,
      "sell_average": 2661,
      "members": true,
      "buy_average": 2661,
      "name": "Super defence(1)",
      "sp": 132
    },
    "169": {
      "overall_average": 2536,
      "id": 169,
      "sell_average": 2536,
      "members": true,
      "buy_average": 2535,
      "name": "Ranging potion(3)",
      "sp": 288
    },
    "171": {
      "overall_average": 1881,
      "id": 171,
      "sell_average": 1824,
      "members": true,
      "buy_average": 1645,
      "name": "Ranging potion(2)",
      "sp": 216
    },
    "173": {
      "overall_average": 1049,
      "id": 173,
      "sell_average": 1039,
      "members": true,
      "buy_average": 957,
      "name": "Ranging potion(1)",
      "sp": 144
    },
    "175": {
      "overall_average": 211,
      "id": 175,
      "sell_average": 163,
      "members": true,
      "buy_average": 129,
      "name": "Antipoison(3)",
      "sp": 288
    },
    "177": {
      "overall_average": 0,
      "id": 177,
      "sell_average": 32,
      "members": true,
      "buy_average": 32,
      "name": "Antipoison(2)",
      "sp": 216
    },
    "179": {
      "overall_average": 0,
      "id": 179,
      "sell_average": 60,
      "members": true,
      "buy_average": 60,
      "name": "Antipoison(1)",
      "sp": 144
    },
    "181": {
      "overall_average": 549,
      "id": 181,
      "sell_average": 534,
      "members": true,
      "buy_average": 534,
      "name": "Superantipoison(3)",
      "sp": 288
    },
    "183": {
      "overall_average": 0,
      "id": 183,
      "sell_average": 350,
      "members": true,
      "buy_average": 350,
      "name": "Superantipoison(2)",
      "sp": 216
    },
    "185": {
      "overall_average": 230,
      "id": 185,
      "sell_average": 230,
      "members": true,
      "buy_average": 230,
      "name": "Superantipoison(1)",
      "sp": 144
    },
    "187": {
      "overall_average": 1,
      "id": 187,
      "sell_average": 585,
      "members": true,
      "buy_average": 650,
      "name": "Weapon poison",
      "sp": 144
    },
    "189": {
      "overall_average": 0,
      "id": 189,
      "sell_average": 3045,
      "members": true,
      "buy_average": 3045,
      "name": "Zamorak brew(3)",
      "sp": 175
    },
    "191": {
      "overall_average": 1834,
      "id": 191,
      "sell_average": 1865,
      "members": true,
      "buy_average": 1928,
      "name": "Zamorak brew(2)",
      "sp": 150
    },
    "193": {
      "overall_average": 0,
      "id": 193,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Zamorak brew(1)",
      "sp": 125
    },
    "197": {
      "overall_average": 812,
      "id": 197,
      "sell_average": 776,
      "members": true,
      "buy_average": 300,
      "name": "Poison chalice",
      "sp": 20
    },
    "199": {
      "overall_average": 10,
      "id": 199,
      "sell_average": 13,
      "members": true,
      "buy_average": 16,
      "name": "Grimy guam leaf",
      "sp": 13
    },
    "201": {
      "overall_average": 22,
      "id": 201,
      "sell_average": 20,
      "members": true,
      "buy_average": 19,
      "name": "Grimy marrentill",
      "sp": 14
    },
    "203": {
      "overall_average": 150,
      "id": 203,
      "sell_average": 138,
      "members": true,
      "buy_average": 137,
      "name": "Grimy tarromin",
      "sp": 15
    },
    "205": {
      "overall_average": 554,
      "id": 205,
      "sell_average": 546,
      "members": true,
      "buy_average": 545,
      "name": "Grimy harralander",
      "sp": 16
    },
    "207": {
      "overall_average": 7101,
      "id": 207,
      "sell_average": 7061,
      "members": true,
      "buy_average": 7027,
      "name": "Grimy ranarr weed",
      "sp": 30
    },
    "209": {
      "overall_average": 983,
      "id": 209,
      "sell_average": 986,
      "members": true,
      "buy_average": 987,
      "name": "Grimy irit leaf",
      "sp": 17
    },
    "211": {
      "overall_average": 2344,
      "id": 211,
      "sell_average": 2325,
      "members": true,
      "buy_average": 2310,
      "name": "Grimy avantoe",
      "sp": 18
    },
    "213": {
      "overall_average": 2223,
      "id": 213,
      "sell_average": 2221,
      "members": true,
      "buy_average": 2220,
      "name": "Grimy kwuarm",
      "sp": 20
    },
    "215": {
      "overall_average": 2166,
      "id": 215,
      "sell_average": 2160,
      "members": true,
      "buy_average": 2151,
      "name": "Grimy cadantine",
      "sp": 22
    },
    "217": {
      "overall_average": 772,
      "id": 217,
      "sell_average": 775,
      "members": true,
      "buy_average": 781,
      "name": "Grimy dwarf weed",
      "sp": 24
    },
    "219": {
      "overall_average": 0,
      "id": 219,
      "sell_average": 11027,
      "members": true,
      "buy_average": 11027,
      "name": "Grimy torstol",
      "sp": 25
    },
    "221": {
      "overall_average": 4,
      "id": 221,
      "sell_average": 4,
      "members": false,
      "buy_average": 3,
      "name": "Eye of newt",
      "sp": 3
    },
    "223": {
      "overall_average": 99,
      "id": 223,
      "sell_average": 99,
      "members": false,
      "buy_average": 100,
      "name": "Red spiders' eggs",
      "sp": 7
    },
    "225": {
      "overall_average": 234,
      "id": 225,
      "sell_average": 230,
      "members": false,
      "buy_average": 227,
      "name": "Limpwurt root",
      "sp": 7
    },
    "227": {
      "overall_average": 4,
      "id": 227,
      "sell_average": 4,
      "members": false,
      "buy_average": 3,
      "name": "Vial of water",
      "sp": 2
    },
    "229": {
      "overall_average": 3,
      "id": 229,
      "sell_average": 3,
      "members": false,
      "buy_average": 3,
      "name": "Vial",
      "sp": 2
    },
    "231": {
      "overall_average": 50,
      "id": 231,
      "sell_average": 48,
      "members": true,
      "buy_average": 47,
      "name": "Snape grass",
      "sp": 10
    },
    "233": {
      "overall_average": 161,
      "id": 233,
      "sell_average": 152,
      "members": true,
      "buy_average": 146,
      "name": "Pestle and mortar",
      "sp": 4
    },
    "235": {
      "overall_average": 342,
      "id": 235,
      "sell_average": 342,
      "members": true,
      "buy_average": 320,
      "name": "Unicorn horn dust",
      "sp": 20
    },
    "237": {
      "overall_average": 827,
      "id": 237,
      "sell_average": 169,
      "members": true,
      "buy_average": 133,
      "name": "Unicorn horn",
      "sp": 20
    },
    "239": {
      "overall_average": 811,
      "id": 239,
      "sell_average": 801,
      "members": true,
      "buy_average": 795,
      "name": "White berries",
      "sp": 10
    },
    "241": {
      "overall_average": 188,
      "id": 241,
      "sell_average": 184,
      "members": true,
      "buy_average": 183,
      "name": "Dragon scale dust",
      "sp": 52
    },
    "243": {
      "overall_average": 299,
      "id": 243,
      "sell_average": 297,
      "members": true,
      "buy_average": 269,
      "name": "Blue dragon scale",
      "sp": 50
    },
    "245": {
      "overall_average": 3195,
      "id": 245,
      "sell_average": 3185,
      "members": false,
      "buy_average": 3165,
      "name": "Wine of zamorak",
      "sp": 1
    },
    "247": {
      "overall_average": 302,
      "id": 247,
      "sell_average": 293,
      "members": true,
      "buy_average": 293,
      "name": "Jangerberries",
      "sp": 1
    },
    "249": {
      "overall_average": 16,
      "id": 249,
      "sell_average": 17,
      "members": true,
      "buy_average": 19,
      "name": "Guam leaf",
      "sp": 3
    },
    "251": {
      "overall_average": 16,
      "id": 251,
      "sell_average": 15,
      "members": true,
      "buy_average": 15,
      "name": "Marrentill",
      "sp": 5
    },
    "253": {
      "overall_average": 165,
      "id": 253,
      "sell_average": 165,
      "members": true,
      "buy_average": 166,
      "name": "Tarromin",
      "sp": 11
    },
    "255": {
      "overall_average": 567,
      "id": 255,
      "sell_average": 563,
      "members": true,
      "buy_average": 559,
      "name": "Harralander",
      "sp": 20
    },
    "257": {
      "overall_average": 7169,
      "id": 257,
      "sell_average": 7170,
      "members": true,
      "buy_average": 7172,
      "name": "Ranarr weed",
      "sp": 25
    },
    "259": {
      "overall_average": 982,
      "id": 259,
      "sell_average": 986,
      "members": true,
      "buy_average": 991,
      "name": "Irit leaf",
      "sp": 40
    },
    "261": {
      "overall_average": 2310,
      "id": 261,
      "sell_average": 2321,
      "members": true,
      "buy_average": 2324,
      "name": "Avantoe",
      "sp": 48
    },
    "263": {
      "overall_average": 2232,
      "id": 263,
      "sell_average": 2228,
      "members": true,
      "buy_average": 2227,
      "name": "Kwuarm",
      "sp": 54
    },
    "265": {
      "overall_average": 2239,
      "id": 265,
      "sell_average": 2239,
      "members": true,
      "buy_average": 2239,
      "name": "Cadantine",
      "sp": 65
    },
    "267": {
      "overall_average": 772,
      "id": 267,
      "sell_average": 783,
      "members": true,
      "buy_average": 784,
      "name": "Dwarf weed",
      "sp": 70
    },
    "269": {
      "overall_average": 11155,
      "id": 269,
      "sell_average": 11137,
      "members": true,
      "buy_average": 11112,
      "name": "Torstol",
      "sp": 75
    },
    "272": {
      "overall_average": 500,
      "id": 272,
      "sell_average": 500,
      "members": false,
      "buy_average": 0,
      "name": "Fish food",
      "sp": 1
    },
    "273": {
      "overall_average": 252,
      "id": 273,
      "sell_average": 252,
      "members": false,
      "buy_average": 0,
      "name": "Poison",
      "sp": 1
    },
    "288": {
      "overall_average": 93,
      "id": 288,
      "sell_average": 32,
      "members": false,
      "buy_average": 17,
      "name": "Goblin mail",
      "sp": 40
    },
    "299": {
      "overall_average": 169,
      "id": 299,
      "sell_average": 164,
      "members": true,
      "buy_average": 164,
      "name": "Mithril seeds",
      "sp": 200
    },
    "301": {
      "overall_average": 139,
      "id": 301,
      "sell_average": 139,
      "members": false,
      "buy_average": 0,
      "name": "Lobster pot",
      "sp": 20
    },
    "303": {
      "overall_average": 146,
      "id": 303,
      "sell_average": 142,
      "members": false,
      "buy_average": 119,
      "name": "Small fishing net",
      "sp": 5
    },
    "305": {
      "overall_average": 235,
      "id": 305,
      "sell_average": 235,
      "members": true,
      "buy_average": 0,
      "name": "Big fishing net",
      "sp": 20
    },
    "307": {
      "overall_average": 99,
      "id": 307,
      "sell_average": 98,
      "members": false,
      "buy_average": 73,
      "name": "Fishing rod",
      "sp": 5
    },
    "309": {
      "overall_average": 264,
      "id": 309,
      "sell_average": 230,
      "members": false,
      "buy_average": 110,
      "name": "Fly fishing rod",
      "sp": 5
    },
    "311": {
      "overall_average": 390,
      "id": 311,
      "sell_average": 279,
      "members": false,
      "buy_average": 142,
      "name": "Harpoon",
      "sp": 5
    },
    "313": {
      "overall_average": 4,
      "id": 313,
      "sell_average": 3,
      "members": false,
      "buy_average": 3,
      "name": "Fishing bait",
      "sp": 3
    },
    "314": {
      "overall_average": 2,
      "id": 314,
      "sell_average": 2,
      "members": false,
      "buy_average": 2,
      "name": "Feather",
      "sp": 2
    },
    "315": {
      "overall_average": 4,
      "id": 315,
      "sell_average": 3,
      "members": false,
      "buy_average": 3,
      "name": "Shrimps",
      "sp": 5
    },
    "317": {
      "overall_average": 16,
      "id": 317,
      "sell_average": 15,
      "members": false,
      "buy_average": 15,
      "name": "Raw shrimps",
      "sp": 5
    },
    "319": {
      "overall_average": 80,
      "id": 319,
      "sell_average": 83,
      "members": false,
      "buy_average": 86,
      "name": "Anchovies",
      "sp": 15
    },
    "321": {
      "overall_average": 65,
      "id": 321,
      "sell_average": 63,
      "members": false,
      "buy_average": 62,
      "name": "Raw anchovies",
      "sp": 15
    },
    "325": {
      "overall_average": 0,
      "id": 325,
      "sell_average": 4,
      "members": false,
      "buy_average": 4,
      "name": "Sardine",
      "sp": 10
    },
    "327": {
      "overall_average": 54,
      "id": 327,
      "sell_average": 46,
      "members": false,
      "buy_average": 46,
      "name": "Raw sardine",
      "sp": 10
    },
    "329": {
      "overall_average": 41,
      "id": 329,
      "sell_average": 41,
      "members": false,
      "buy_average": 39,
      "name": "Salmon",
      "sp": 50
    },
    "331": {
      "overall_average": 37,
      "id": 331,
      "sell_average": 36,
      "members": false,
      "buy_average": 36,
      "name": "Raw salmon",
      "sp": 50
    },
    "333": {
      "overall_average": 20,
      "id": 333,
      "sell_average": 19,
      "members": false,
      "buy_average": 19,
      "name": "Trout",
      "sp": 20
    },
    "335": {
      "overall_average": 34,
      "id": 335,
      "sell_average": 34,
      "members": false,
      "buy_average": 34,
      "name": "Raw trout",
      "sp": 20
    },
    "339": {
      "overall_average": 0,
      "id": 339,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cod",
      "sp": 25
    },
    "341": {
      "overall_average": 183,
      "id": 341,
      "sell_average": 181,
      "members": true,
      "buy_average": 171,
      "name": "Raw cod",
      "sp": 25
    },
    "345": {
      "overall_average": 62,
      "id": 345,
      "sell_average": 61,
      "members": false,
      "buy_average": 61,
      "name": "Raw herring",
      "sp": 15
    },
    "347": {
      "overall_average": 4,
      "id": 347,
      "sell_average": 3,
      "members": false,
      "buy_average": 3,
      "name": "Herring",
      "sp": 15
    },
    "349": {
      "overall_average": 27,
      "id": 349,
      "sell_average": 27,
      "members": false,
      "buy_average": 21,
      "name": "Raw pike",
      "sp": 25
    },
    "351": {
      "overall_average": 20,
      "id": 351,
      "sell_average": 17,
      "members": false,
      "buy_average": 17,
      "name": "Pike",
      "sp": 25
    },
    "353": {
      "overall_average": 106,
      "id": 353,
      "sell_average": 112,
      "members": true,
      "buy_average": 116,
      "name": "Raw mackerel",
      "sp": 17
    },
    "355": {
      "overall_average": 11,
      "id": 355,
      "sell_average": 11,
      "members": true,
      "buy_average": 0,
      "name": "Mackerel",
      "sp": 17
    },
    "359": {
      "overall_average": 75,
      "id": 359,
      "sell_average": 75,
      "members": false,
      "buy_average": 75,
      "name": "Raw tuna",
      "sp": 100
    },
    "361": {
      "overall_average": 79,
      "id": 361,
      "sell_average": 77,
      "members": false,
      "buy_average": 76,
      "name": "Tuna",
      "sp": 100
    },
    "363": {
      "overall_average": 129,
      "id": 363,
      "sell_average": 128,
      "members": true,
      "buy_average": 127,
      "name": "Raw bass",
      "sp": 120
    },
    "365": {
      "overall_average": 190,
      "id": 365,
      "sell_average": 186,
      "members": true,
      "buy_average": 175,
      "name": "Bass",
      "sp": 120
    },
    "371": {
      "overall_average": 334,
      "id": 371,
      "sell_average": 333,
      "members": false,
      "buy_average": 331,
      "name": "Raw swordfish",
      "sp": 200
    },
    "373": {
      "overall_average": 333,
      "id": 373,
      "sell_average": 332,
      "members": false,
      "buy_average": 332,
      "name": "Swordfish",
      "sp": 200
    },
    "377": {
      "overall_average": 158,
      "id": 377,
      "sell_average": 157,
      "members": false,
      "buy_average": 157,
      "name": "Raw lobster",
      "sp": 150
    },
    "379": {
      "overall_average": 144,
      "id": 379,
      "sell_average": 143,
      "members": false,
      "buy_average": 142,
      "name": "Lobster",
      "sp": 150
    },
    "383": {
      "overall_average": 595,
      "id": 383,
      "sell_average": 594,
      "members": true,
      "buy_average": 592,
      "name": "Raw shark",
      "sp": 300
    },
    "385": {
      "overall_average": 698,
      "id": 385,
      "sell_average": 698,
      "members": true,
      "buy_average": 697,
      "name": "Shark",
      "sp": 300
    },
    "389": {
      "overall_average": 809,
      "id": 389,
      "sell_average": 789,
      "members": true,
      "buy_average": 789,
      "name": "Raw manta ray",
      "sp": 500
    },
    "391": {
      "overall_average": 889,
      "id": 391,
      "sell_average": 889,
      "members": true,
      "buy_average": 889,
      "name": "Manta ray",
      "sp": 500
    },
    "395": {
      "overall_average": 760,
      "id": 395,
      "sell_average": 755,
      "members": true,
      "buy_average": 755,
      "name": "Raw sea turtle",
      "sp": 500
    },
    "397": {
      "overall_average": 1050,
      "id": 397,
      "sell_average": 1050,
      "members": true,
      "buy_average": 0,
      "name": "Sea turtle",
      "sp": 500
    },
    "401": {
      "overall_average": 62,
      "id": 401,
      "sell_average": 62,
      "members": true,
      "buy_average": 62,
      "name": "Seaweed",
      "sp": 2
    },
    "403": {
      "overall_average": 0,
      "id": 403,
      "sell_average": 10,
      "members": true,
      "buy_average": 10,
      "name": "Edible seaweed",
      "sp": 2
    },
    "405": {
      "overall_average": 0,
      "id": 405,
      "sell_average": 924,
      "members": true,
      "buy_average": 924,
      "name": "Casket",
      "sp": 50
    },
    "407": {
      "overall_average": 47,
      "id": 407,
      "sell_average": 48,
      "members": true,
      "buy_average": 53,
      "name": "Oyster",
      "sp": 200
    },
    "411": {
      "overall_average": 71,
      "id": 411,
      "sell_average": 42,
      "members": true,
      "buy_average": 40,
      "name": "Oyster pearl",
      "sp": 112
    },
    "413": {
      "overall_average": 0,
      "id": 413,
      "sell_average": 645,
      "members": true,
      "buy_average": 645,
      "name": "Oyster pearls",
      "sp": 1400
    },
    "426": {
      "overall_average": 95,
      "id": 426,
      "sell_average": 77,
      "members": false,
      "buy_average": 26,
      "name": "Priest gown",
      "sp": 5
    },
    "428": {
      "overall_average": 17,
      "id": 428,
      "sell_average": 17,
      "members": false,
      "buy_average": 16,
      "name": "Priest gown",
      "sp": 5
    },
    "434": {
      "overall_average": 147,
      "id": 434,
      "sell_average": 147,
      "members": false,
      "buy_average": 147,
      "name": "Clay",
      "sp": 1
    },
    "436": {
      "overall_average": 43,
      "id": 436,
      "sell_average": 44,
      "members": false,
      "buy_average": 46,
      "name": "Copper ore",
      "sp": 3
    },
    "438": {
      "overall_average": 44,
      "id": 438,
      "sell_average": 44,
      "members": false,
      "buy_average": 46,
      "name": "Tin ore",
      "sp": 3
    },
    "440": {
      "overall_average": 120,
      "id": 440,
      "sell_average": 120,
      "members": false,
      "buy_average": 120,
      "name": "Iron ore",
      "sp": 17
    },
    "442": {
      "overall_average": 74,
      "id": 442,
      "sell_average": 74,
      "members": false,
      "buy_average": 74,
      "name": "Silver ore",
      "sp": 75
    },
    "444": {
      "overall_average": 354,
      "id": 444,
      "sell_average": 353,
      "members": false,
      "buy_average": 353,
      "name": "Gold ore",
      "sp": 150
    },
    "447": {
      "overall_average": 177,
      "id": 447,
      "sell_average": 176,
      "members": false,
      "buy_average": 176,
      "name": "Mithril ore",
      "sp": 162
    },
    "449": {
      "overall_average": 1207,
      "id": 449,
      "sell_average": 1200,
      "members": false,
      "buy_average": 1191,
      "name": "Adamantite ore",
      "sp": 400
    },
    "451": {
      "overall_average": 11132,
      "id": 451,
      "sell_average": 11109,
      "members": false,
      "buy_average": 11092,
      "name": "Runite ore",
      "sp": 3200
    },
    "453": {
      "overall_average": 178,
      "id": 453,
      "sell_average": 177,
      "members": false,
      "buy_average": 177,
      "name": "Coal",
      "sp": 45
    },
    "464": {
      "overall_average": 601,
      "id": 464,
      "sell_average": 588,
      "members": true,
      "buy_average": 584,
      "name": "Strange fruit",
      "sp": 1
    },
    "526": {
      "overall_average": 47,
      "id": 526,
      "sell_average": 43,
      "members": false,
      "buy_average": 40,
      "name": "Bones",
      "sp": 1
    },
    "528": {
      "overall_average": 0,
      "id": 528,
      "sell_average": 21,
      "members": false,
      "buy_average": 21,
      "name": "Burnt bones",
      "sp": 1
    },
    "530": {
      "overall_average": 547,
      "id": 530,
      "sell_average": 500,
      "members": true,
      "buy_average": 398,
      "name": "Bat bones",
      "sp": 1
    },
    "532": {
      "overall_average": 248,
      "id": 532,
      "sell_average": 243,
      "members": false,
      "buy_average": 241,
      "name": "Big bones",
      "sp": 1
    },
    "534": {
      "overall_average": 1074,
      "id": 534,
      "sell_average": 1063,
      "members": true,
      "buy_average": 989,
      "name": "Babydragon bones",
      "sp": 1
    },
    "536": {
      "overall_average": 2451,
      "id": 536,
      "sell_average": 2450,
      "members": true,
      "buy_average": 2450,
      "name": "Dragon bones",
      "sp": 110
    },
    "538": {
      "overall_average": 0,
      "id": 538,
      "sell_average": 1365,
      "members": true,
      "buy_average": 1365,
      "name": "Druid's robe",
      "sp": 30
    },
    "540": {
      "overall_average": 0,
      "id": 540,
      "sell_average": 2153,
      "members": true,
      "buy_average": 2153,
      "name": "Druid's robe top",
      "sp": 40
    },
    "542": {
      "overall_average": 284,
      "id": 542,
      "sell_average": 210,
      "members": false,
      "buy_average": 189,
      "name": "Monk's robe",
      "sp": 30
    },
    "544": {
      "overall_average": 573,
      "id": 544,
      "sell_average": 535,
      "members": false,
      "buy_average": 528,
      "name": "Monk's robe top",
      "sp": 40
    },
    "546": {
      "overall_average": 831,
      "id": 546,
      "sell_average": 785,
      "members": false,
      "buy_average": 600,
      "name": "Shade robe top",
      "sp": 40
    },
    "548": {
      "overall_average": 655,
      "id": 548,
      "sell_average": 499,
      "members": false,
      "buy_average": 421,
      "name": "Shade robe",
      "sp": 30
    },
    "554": {
      "overall_average": 4,
      "id": 554,
      "sell_average": 4,
      "members": false,
      "buy_average": 4,
      "name": "Fire rune",
      "sp": 4
    },
    "555": {
      "overall_average": 4,
      "id": 555,
      "sell_average": 4,
      "members": false,
      "buy_average": 4,
      "name": "Water rune",
      "sp": 4
    },
    "556": {
      "overall_average": 4,
      "id": 556,
      "sell_average": 4,
      "members": false,
      "buy_average": 4,
      "name": "Air rune",
      "sp": 4
    },
    "557": {
      "overall_average": 5,
      "id": 557,
      "sell_average": 4,
      "members": false,
      "buy_average": 4,
      "name": "Earth rune",
      "sp": 4
    },
    "558": {
      "overall_average": 3,
      "id": 558,
      "sell_average": 3,
      "members": false,
      "buy_average": 3,
      "name": "Mind rune",
      "sp": 3
    },
    "559": {
      "overall_average": 4,
      "id": 559,
      "sell_average": 4,
      "members": false,
      "buy_average": 4,
      "name": "Body rune",
      "sp": 3
    },
    "560": {
      "overall_average": 241,
      "id": 560,
      "sell_average": 240,
      "members": false,
      "buy_average": 238,
      "name": "Death rune",
      "sp": 180
    },
    "561": {
      "overall_average": 203,
      "id": 561,
      "sell_average": 203,
      "members": false,
      "buy_average": 203,
      "name": "Nature rune",
      "sp": 180
    },
    "562": {
      "overall_average": 100,
      "id": 562,
      "sell_average": 99,
      "members": false,
      "buy_average": 98,
      "name": "Chaos rune",
      "sp": 90
    },
    "563": {
      "overall_average": 187,
      "id": 563,
      "sell_average": 186,
      "members": false,
      "buy_average": 186,
      "name": "Law rune",
      "sp": 240
    },
    "564": {
      "overall_average": 117,
      "id": 564,
      "sell_average": 117,
      "members": false,
      "buy_average": 117,
      "name": "Cosmic rune",
      "sp": 50
    },
    "565": {
      "overall_average": 233,
      "id": 565,
      "sell_average": 233,
      "members": true,
      "buy_average": 233,
      "name": "Blood rune",
      "sp": 400
    },
    "566": {
      "overall_average": 148,
      "id": 566,
      "sell_average": 148,
      "members": true,
      "buy_average": 147,
      "name": "Soul rune",
      "sp": 300
    },
    "567": {
      "overall_average": 99,
      "id": 567,
      "sell_average": 95,
      "members": true,
      "buy_average": 93,
      "name": "Unpowered orb",
      "sp": 100
    },
    "569": {
      "overall_average": 999,
      "id": 569,
      "sell_average": 990,
      "members": true,
      "buy_average": 985,
      "name": "Fire orb",
      "sp": 300
    },
    "571": {
      "overall_average": 1021,
      "id": 571,
      "sell_average": 1019,
      "members": true,
      "buy_average": 1000,
      "name": "Water orb",
      "sp": 300
    },
    "573": {
      "overall_average": 976,
      "id": 573,
      "sell_average": 978,
      "members": true,
      "buy_average": 980,
      "name": "Air orb",
      "sp": 300
    },
    "575": {
      "overall_average": 899,
      "id": 575,
      "sell_average": 895,
      "members": true,
      "buy_average": 884,
      "name": "Earth orb",
      "sp": 300
    },
    "577": {
      "overall_average": 2378,
      "id": 577,
      "sell_average": 2270,
      "members": false,
      "buy_average": 2125,
      "name": "Blue wizard robe",
      "sp": 15
    },
    "579": {
      "overall_average": 221,
      "id": 579,
      "sell_average": 220,
      "members": false,
      "buy_average": 219,
      "name": "Blue wizard hat",
      "sp": 2
    },
    "581": {
      "overall_average": 2209,
      "id": 581,
      "sell_average": 2163,
      "members": false,
      "buy_average": 2079,
      "name": "Black robe",
      "sp": 13
    },
    "590": {
      "overall_average": 52,
      "id": 590,
      "sell_average": 52,
      "members": false,
      "buy_average": 50,
      "name": "Tinderbox",
      "sp": 1
    },
    "592": {
      "overall_average": 27,
      "id": 592,
      "sell_average": 26,
      "members": false,
      "buy_average": 26,
      "name": "Ashes",
      "sp": 2
    },
    "596": {
      "overall_average": 1,
      "id": 596,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Unlit torch",
      "sp": 4
    },
    "621": {
      "overall_average": 0,
      "id": 621,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ship ticket",
      "sp": 5
    },
    "626": {
      "overall_average": 401,
      "id": 626,
      "sell_average": 401,
      "members": true,
      "buy_average": 400,
      "name": "Pink boots",
      "sp": 200
    },
    "628": {
      "overall_average": 680,
      "id": 628,
      "sell_average": 688,
      "members": true,
      "buy_average": 688,
      "name": "Green boots",
      "sp": 200
    },
    "630": {
      "overall_average": 832,
      "id": 630,
      "sell_average": 886,
      "members": true,
      "buy_average": 910,
      "name": "Blue boots",
      "sp": 200
    },
    "632": {
      "overall_average": 0,
      "id": 632,
      "sell_average": 895,
      "members": true,
      "buy_average": 895,
      "name": "Cream boots",
      "sp": 200
    },
    "634": {
      "overall_average": 0,
      "id": 634,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Turquoise boots",
      "sp": 200
    },
    "636": {
      "overall_average": 256,
      "id": 636,
      "sell_average": 263,
      "members": true,
      "buy_average": 423,
      "name": "Pink robe top",
      "sp": 180
    },
    "638": {
      "overall_average": 866,
      "id": 638,
      "sell_average": 678,
      "members": true,
      "buy_average": 566,
      "name": "Green robe top",
      "sp": 180
    },
    "640": {
      "overall_average": 782,
      "id": 640,
      "sell_average": 747,
      "members": true,
      "buy_average": 383,
      "name": "Blue robe top",
      "sp": 180
    },
    "642": {
      "overall_average": 2565,
      "id": 642,
      "sell_average": 2565,
      "members": true,
      "buy_average": 2130,
      "name": "Cream robe top",
      "sp": 180
    },
    "644": {
      "overall_average": 0,
      "id": 644,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Turquoise robe top",
      "sp": 180
    },
    "646": {
      "overall_average": 0,
      "id": 646,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Pink robe bottoms",
      "sp": 180
    },
    "648": {
      "overall_average": 800,
      "id": 648,
      "sell_average": 737,
      "members": true,
      "buy_average": 706,
      "name": "Green robe bottoms",
      "sp": 180
    },
    "650": {
      "overall_average": 2436,
      "id": 650,
      "sell_average": 2436,
      "members": true,
      "buy_average": 2436,
      "name": "Blue robe bottoms",
      "sp": 180
    },
    "652": {
      "overall_average": 0,
      "id": 652,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cream robe bottoms",
      "sp": 180
    },
    "654": {
      "overall_average": 0,
      "id": 654,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Turquoise robe bottoms",
      "sp": 180
    },
    "656": {
      "overall_average": 0,
      "id": 656,
      "sell_average": 251,
      "members": true,
      "buy_average": 251,
      "name": "Pink hat",
      "sp": 160
    },
    "658": {
      "overall_average": 610,
      "id": 658,
      "sell_average": 557,
      "members": true,
      "buy_average": 400,
      "name": "Green hat",
      "sp": 160
    },
    "660": {
      "overall_average": 772,
      "id": 660,
      "sell_average": 763,
      "members": true,
      "buy_average": 250,
      "name": "Blue hat",
      "sp": 160
    },
    "662": {
      "overall_average": 1200,
      "id": 662,
      "sell_average": 1139,
      "members": true,
      "buy_average": 1127,
      "name": "Cream hat",
      "sp": 160
    },
    "664": {
      "overall_average": 896,
      "id": 664,
      "sell_average": 894,
      "members": true,
      "buy_average": 882,
      "name": "Turquoise hat",
      "sp": 160
    },
    "751": {
      "overall_average": 5800,
      "id": 751,
      "sell_average": 5278,
      "members": true,
      "buy_average": 5082,
      "name": "Gnomeball",
      "sp": 1
    },
    "753": {
      "overall_average": 63,
      "id": 753,
      "sell_average": 62,
      "members": false,
      "buy_average": 60,
      "name": "Cadava berries",
      "sp": 1
    },
    "800": {
      "overall_average": 0,
      "id": 800,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze thrownaxe",
      "sp": 3
    },
    "801": {
      "overall_average": 0,
      "id": 801,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron thrownaxe",
      "sp": 7
    },
    "802": {
      "overall_average": 0,
      "id": 802,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel thrownaxe",
      "sp": 26
    },
    "803": {
      "overall_average": 0,
      "id": 803,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril thrownaxe",
      "sp": 70
    },
    "804": {
      "overall_average": 0,
      "id": 804,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant thrownaxe",
      "sp": 176
    },
    "805": {
      "overall_average": 196,
      "id": 805,
      "sell_average": 189,
      "members": true,
      "buy_average": 181,
      "name": "Rune thrownaxe",
      "sp": 440
    },
    "806": {
      "overall_average": 16,
      "id": 806,
      "sell_average": 16,
      "members": true,
      "buy_average": 17,
      "name": "Bronze dart",
      "sp": 1
    },
    "807": {
      "overall_average": 16,
      "id": 807,
      "sell_average": 14,
      "members": true,
      "buy_average": 14,
      "name": "Iron dart",
      "sp": 2
    },
    "808": {
      "overall_average": 12,
      "id": 808,
      "sell_average": 12,
      "members": true,
      "buy_average": 11,
      "name": "Steel dart",
      "sp": 10
    },
    "809": {
      "overall_average": 24,
      "id": 809,
      "sell_average": 23,
      "members": true,
      "buy_average": 22,
      "name": "Mithril dart",
      "sp": 25
    },
    "810": {
      "overall_average": 136,
      "id": 810,
      "sell_average": 136,
      "members": true,
      "buy_average": 136,
      "name": "Adamant dart",
      "sp": 65
    },
    "811": {
      "overall_average": 1067,
      "id": 811,
      "sell_average": 1065,
      "members": true,
      "buy_average": 1063,
      "name": "Rune dart",
      "sp": 350
    },
    "812": {
      "overall_average": 0,
      "id": 812,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze dart(p)",
      "sp": 1
    },
    "813": {
      "overall_average": 0,
      "id": 813,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron dart(p)",
      "sp": 2
    },
    "814": {
      "overall_average": 0,
      "id": 814,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel dart(p)",
      "sp": 10
    },
    "815": {
      "overall_average": 0,
      "id": 815,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril dart(p)",
      "sp": 25
    },
    "816": {
      "overall_average": 0,
      "id": 816,
      "sell_average": 152,
      "members": true,
      "buy_average": 152,
      "name": "Adamant dart(p)",
      "sp": 65
    },
    "817": {
      "overall_average": 968,
      "id": 817,
      "sell_average": 1000,
      "members": true,
      "buy_average": 1022,
      "name": "Rune dart(p)",
      "sp": 350
    },
    "819": {
      "overall_average": 29,
      "id": 819,
      "sell_average": 32,
      "members": true,
      "buy_average": 32,
      "name": "Bronze dart tip",
      "sp": 1
    },
    "820": {
      "overall_average": 42,
      "id": 820,
      "sell_average": 42,
      "members": true,
      "buy_average": 0,
      "name": "Iron dart tip",
      "sp": 3
    },
    "821": {
      "overall_average": 51,
      "id": 821,
      "sell_average": 48,
      "members": true,
      "buy_average": 47,
      "name": "Steel dart tip",
      "sp": 5
    },
    "822": {
      "overall_average": 73,
      "id": 822,
      "sell_average": 73,
      "members": true,
      "buy_average": 73,
      "name": "Mithril dart tip",
      "sp": 12
    },
    "823": {
      "overall_average": 210,
      "id": 823,
      "sell_average": 210,
      "members": true,
      "buy_average": 210,
      "name": "Adamant dart tip",
      "sp": 36
    },
    "824": {
      "overall_average": 1222,
      "id": 824,
      "sell_average": 1216,
      "members": true,
      "buy_average": 1216,
      "name": "Rune dart tip",
      "sp": 175
    },
    "825": {
      "overall_average": 1,
      "id": 825,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Bronze javelin",
      "sp": 4
    },
    "826": {
      "overall_average": 0,
      "id": 826,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron javelin",
      "sp": 6
    },
    "827": {
      "overall_average": 0,
      "id": 827,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel javelin",
      "sp": 24
    },
    "828": {
      "overall_average": 0,
      "id": 828,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril javelin",
      "sp": 64
    },
    "829": {
      "overall_average": 0,
      "id": 829,
      "sell_average": 64,
      "members": true,
      "buy_average": 64,
      "name": "Adamant javelin",
      "sp": 160
    },
    "830": {
      "overall_average": 143,
      "id": 830,
      "sell_average": 138,
      "members": true,
      "buy_average": 136,
      "name": "Rune javelin",
      "sp": 400
    },
    "831": {
      "overall_average": 0,
      "id": 831,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze javelin(p)",
      "sp": 4
    },
    "832": {
      "overall_average": 0,
      "id": 832,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron javelin(p)",
      "sp": 6
    },
    "833": {
      "overall_average": 0,
      "id": 833,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel javelin(p)",
      "sp": 24
    },
    "834": {
      "overall_average": 0,
      "id": 834,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril javelin(p)",
      "sp": 64
    },
    "835": {
      "overall_average": 0,
      "id": 835,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant javelin(p)",
      "sp": 160
    },
    "836": {
      "overall_average": 0,
      "id": 836,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune javelin(p)",
      "sp": 400
    },
    "837": {
      "overall_average": 132,
      "id": 837,
      "sell_average": 131,
      "members": false,
      "buy_average": 129,
      "name": "Crossbow",
      "sp": 70
    },
    "839": {
      "overall_average": 265,
      "id": 839,
      "sell_average": 193,
      "members": false,
      "buy_average": 50,
      "name": "Longbow",
      "sp": 80
    },
    "841": {
      "overall_average": 31,
      "id": 841,
      "sell_average": 30,
      "members": false,
      "buy_average": 27,
      "name": "Shortbow",
      "sp": 50
    },
    "843": {
      "overall_average": 60,
      "id": 843,
      "sell_average": 60,
      "members": false,
      "buy_average": 59,
      "name": "Oak shortbow",
      "sp": 100
    },
    "845": {
      "overall_average": 88,
      "id": 845,
      "sell_average": 87,
      "members": false,
      "buy_average": 80,
      "name": "Oak longbow",
      "sp": 160
    },
    "847": {
      "overall_average": 148,
      "id": 847,
      "sell_average": 147,
      "members": false,
      "buy_average": 147,
      "name": "Willow longbow",
      "sp": 320
    },
    "849": {
      "overall_average": 185,
      "id": 849,
      "sell_average": 92,
      "members": false,
      "buy_average": 90,
      "name": "Willow shortbow",
      "sp": 200
    },
    "851": {
      "overall_average": 275,
      "id": 851,
      "sell_average": 274,
      "members": false,
      "buy_average": 273,
      "name": "Maple longbow",
      "sp": 640
    },
    "853": {
      "overall_average": 190,
      "id": 853,
      "sell_average": 178,
      "members": false,
      "buy_average": 172,
      "name": "Maple shortbow",
      "sp": 400
    },
    "855": {
      "overall_average": 613,
      "id": 855,
      "sell_average": 612,
      "members": true,
      "buy_average": 611,
      "name": "Yew longbow",
      "sp": 1280
    },
    "857": {
      "overall_average": 340,
      "id": 857,
      "sell_average": 336,
      "members": true,
      "buy_average": 334,
      "name": "Yew shortbow",
      "sp": 800
    },
    "859": {
      "overall_average": 1372,
      "id": 859,
      "sell_average": 1372,
      "members": true,
      "buy_average": 1371,
      "name": "Magic longbow",
      "sp": 2560
    },
    "861": {
      "overall_average": 870,
      "id": 861,
      "sell_average": 873,
      "members": true,
      "buy_average": 877,
      "name": "Magic shortbow",
      "sp": 1600
    },
    "863": {
      "overall_average": 51,
      "id": 863,
      "sell_average": 50,
      "members": true,
      "buy_average": 49,
      "name": "Iron knife",
      "sp": 3
    },
    "864": {
      "overall_average": 0,
      "id": 864,
      "sell_average": 32,
      "members": true,
      "buy_average": 32,
      "name": "Bronze knife",
      "sp": 1
    },
    "865": {
      "overall_average": 0,
      "id": 865,
      "sell_average": 68,
      "members": true,
      "buy_average": 68,
      "name": "Steel knife",
      "sp": 11
    },
    "866": {
      "overall_average": 142,
      "id": 866,
      "sell_average": 140,
      "members": true,
      "buy_average": 131,
      "name": "Mithril knife",
      "sp": 27
    },
    "867": {
      "overall_average": 421,
      "id": 867,
      "sell_average": 418,
      "members": true,
      "buy_average": 400,
      "name": "Adamant knife",
      "sp": 66
    },
    "868": {
      "overall_average": 438,
      "id": 868,
      "sell_average": 434,
      "members": true,
      "buy_average": 432,
      "name": "Rune knife",
      "sp": 167
    },
    "869": {
      "overall_average": 68,
      "id": 869,
      "sell_average": 65,
      "members": true,
      "buy_average": 63,
      "name": "Black knife",
      "sp": 19
    },
    "870": {
      "overall_average": 0,
      "id": 870,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze knife(p)",
      "sp": 1
    },
    "871": {
      "overall_average": 0,
      "id": 871,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron knife(p)",
      "sp": 3
    },
    "872": {
      "overall_average": 0,
      "id": 872,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel knife(p)",
      "sp": 10
    },
    "873": {
      "overall_average": 0,
      "id": 873,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril knife(p)",
      "sp": 27
    },
    "874": {
      "overall_average": 0,
      "id": 874,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black knife(p)",
      "sp": 18
    },
    "875": {
      "overall_average": 0,
      "id": 875,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant knife(p)",
      "sp": 66
    },
    "876": {
      "overall_average": 0,
      "id": 876,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune knife(p)",
      "sp": 166
    },
    "877": {
      "overall_average": 3,
      "id": 877,
      "sell_average": 3,
      "members": false,
      "buy_average": 2,
      "name": "Bronze bolts",
      "sp": 0
    },
    "878": {
      "overall_average": 0,
      "id": 878,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze bolts (p)",
      "sp": 0
    },
    "879": {
      "overall_average": 17,
      "id": 879,
      "sell_average": 17,
      "members": true,
      "buy_average": 0,
      "name": "Opal bolts",
      "sp": 7
    },
    "880": {
      "overall_average": 0,
      "id": 880,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Pearl bolts",
      "sp": 13
    },
    "881": {
      "overall_average": 61,
      "id": 881,
      "sell_average": 60,
      "members": true,
      "buy_average": 60,
      "name": "Barbed bolts",
      "sp": 200
    },
    "882": {
      "overall_average": 5,
      "id": 882,
      "sell_average": 4,
      "members": false,
      "buy_average": 4,
      "name": "Bronze arrow",
      "sp": 1
    },
    "883": {
      "overall_average": 0,
      "id": 883,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze arrow(p)",
      "sp": 1
    },
    "884": {
      "overall_average": 7,
      "id": 884,
      "sell_average": 6,
      "members": false,
      "buy_average": 6,
      "name": "Iron arrow",
      "sp": 3
    },
    "885": {
      "overall_average": 0,
      "id": 885,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron arrow(p)",
      "sp": 3
    },
    "886": {
      "overall_average": 36,
      "id": 886,
      "sell_average": 36,
      "members": false,
      "buy_average": 35,
      "name": "Steel arrow",
      "sp": 12
    },
    "887": {
      "overall_average": 0,
      "id": 887,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel arrow(p)",
      "sp": 12
    },
    "888": {
      "overall_average": 35,
      "id": 888,
      "sell_average": 34,
      "members": false,
      "buy_average": 33,
      "name": "Mithril arrow",
      "sp": 32
    },
    "889": {
      "overall_average": 0,
      "id": 889,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril arrow(p)",
      "sp": 32
    },
    "890": {
      "overall_average": 58,
      "id": 890,
      "sell_average": 58,
      "members": false,
      "buy_average": 57,
      "name": "Adamant arrow",
      "sp": 80
    },
    "891": {
      "overall_average": 0,
      "id": 891,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant arrow(p)",
      "sp": 80
    },
    "892": {
      "overall_average": 75,
      "id": 892,
      "sell_average": 75,
      "members": true,
      "buy_average": 75,
      "name": "Rune arrow",
      "sp": 400
    },
    "893": {
      "overall_average": 0,
      "id": 893,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune arrow(p)",
      "sp": 400
    },
    "946": {
      "overall_average": 81,
      "id": 946,
      "sell_average": 80,
      "members": false,
      "buy_average": 74,
      "name": "Knife",
      "sp": 6
    },
    "948": {
      "overall_average": 291,
      "id": 948,
      "sell_average": 114,
      "members": false,
      "buy_average": 84,
      "name": "Bear fur",
      "sp": 10
    },
    "950": {
      "overall_average": 8,
      "id": 950,
      "sell_average": 7,
      "members": false,
      "buy_average": 7,
      "name": "Silk",
      "sp": 30
    },
    "952": {
      "overall_average": 221,
      "id": 952,
      "sell_average": 203,
      "members": false,
      "buy_average": 175,
      "name": "Spade",
      "sp": 3
    },
    "954": {
      "overall_average": 71,
      "id": 954,
      "sell_average": 80,
      "members": false,
      "buy_average": 87,
      "name": "Rope",
      "sp": 18
    },
    "958": {
      "overall_average": 0,
      "id": 958,
      "sell_average": 30,
      "members": true,
      "buy_average": 30,
      "name": "Grey wolf fur",
      "sp": 50
    },
    "960": {
      "overall_average": 285,
      "id": 960,
      "sell_average": 282,
      "members": false,
      "buy_average": 277,
      "name": "Plank",
      "sp": 1
    },
    "962": {
      "overall_average": 17498,
      "id": 962,
      "sell_average": 17013,
      "members": false,
      "buy_average": 17001,
      "name": "Christmas cracker",
      "sp": 1
    },
    "970": {
      "overall_average": 253,
      "id": 970,
      "sell_average": 253,
      "members": true,
      "buy_average": 251,
      "name": "Papyrus",
      "sp": 10
    },
    "973": {
      "overall_average": 295,
      "id": 973,
      "sell_average": 293,
      "members": false,
      "buy_average": 286,
      "name": "Charcoal",
      "sp": 45
    },
    "975": {
      "overall_average": 710,
      "id": 975,
      "sell_average": 560,
      "members": true,
      "buy_average": 259,
      "name": "Machete",
      "sp": 40
    },
    "981": {
      "overall_average": 0,
      "id": 981,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Disk of returning",
      "sp": 12
    },
    "983": {
      "overall_average": 300,
      "id": 983,
      "sell_average": 295,
      "members": false,
      "buy_average": 184,
      "name": "Brass key",
      "sp": 1
    },
    "985": {
      "overall_average": 15113,
      "id": 985,
      "sell_average": 14972,
      "members": true,
      "buy_average": 14681,
      "name": "Tooth half of key",
      "sp": 100
    },
    "987": {
      "overall_average": 6549,
      "id": 987,
      "sell_average": 6607,
      "members": true,
      "buy_average": 6712,
      "name": "Loop half of key",
      "sp": 100
    },
    "989": {
      "overall_average": 22252,
      "id": 989,
      "sell_average": 22080,
      "members": true,
      "buy_average": 21675,
      "name": "Crystal key",
      "sp": 150
    },
    "991": {
      "overall_average": 3452,
      "id": 991,
      "sell_average": 3200,
      "members": false,
      "buy_average": 3012,
      "name": "Muddy key",
      "sp": 80
    },
    "993": {
      "overall_average": 8005,
      "id": 993,
      "sell_average": 13005,
      "members": true,
      "buy_average": 23005,
      "name": "Sinister key",
      "sp": 80
    },
    "1005": {
      "overall_average": 30,
      "id": 1005,
      "sell_average": 29,
      "members": false,
      "buy_average": 8,
      "name": "White apron",
      "sp": 2
    },
    "1007": {
      "overall_average": 258,
      "id": 1007,
      "sell_average": 208,
      "members": false,
      "buy_average": 177,
      "name": "Red cape",
      "sp": 2
    },
    "1009": {
      "overall_average": 61,
      "id": 1009,
      "sell_average": 61,
      "members": false,
      "buy_average": 64,
      "name": "Brass necklace",
      "sp": 30
    },
    "1011": {
      "overall_average": 98,
      "id": 1011,
      "sell_average": 102,
      "members": false,
      "buy_average": 114,
      "name": "Blue skirt",
      "sp": 2
    },
    "1013": {
      "overall_average": 39,
      "id": 1013,
      "sell_average": 28,
      "members": false,
      "buy_average": 23,
      "name": "Pink skirt",
      "sp": 2
    },
    "1015": {
      "overall_average": 0,
      "id": 1015,
      "sell_average": 13,
      "members": false,
      "buy_average": 13,
      "name": "Black skirt",
      "sp": 2
    },
    "1017": {
      "overall_average": 217,
      "id": 1017,
      "sell_average": 249,
      "members": false,
      "buy_average": 250,
      "name": "Wizard hat",
      "sp": 2
    },
    "1019": {
      "overall_average": 338,
      "id": 1019,
      "sell_average": 341,
      "members": false,
      "buy_average": 348,
      "name": "Black cape",
      "sp": 7
    },
    "1021": {
      "overall_average": 0,
      "id": 1021,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Blue cape",
      "sp": 32
    },
    "1023": {
      "overall_average": 317,
      "id": 1023,
      "sell_average": 317,
      "members": false,
      "buy_average": 317,
      "name": "Yellow cape",
      "sp": 32
    },
    "1025": {
      "overall_average": 0,
      "id": 1025,
      "sell_average": 66,
      "members": true,
      "buy_average": 66,
      "name": "Right eye patch",
      "sp": 2
    },
    "1027": {
      "overall_average": 347,
      "id": 1027,
      "sell_average": 494,
      "members": false,
      "buy_average": 501,
      "name": "Green cape",
      "sp": 32
    },
    "1029": {
      "overall_average": 710,
      "id": 1029,
      "sell_average": 710,
      "members": false,
      "buy_average": 0,
      "name": "Purple cape",
      "sp": 32
    },
    "1031": {
      "overall_average": 850,
      "id": 1031,
      "sell_average": 850,
      "members": false,
      "buy_average": 0,
      "name": "Orange cape",
      "sp": 32
    },
    "1033": {
      "overall_average": 1678,
      "id": 1033,
      "sell_average": 1513,
      "members": false,
      "buy_average": 1472,
      "name": "Zamorak robe",
      "sp": 30
    },
    "1035": {
      "overall_average": 898,
      "id": 1035,
      "sell_average": 859,
      "members": false,
      "buy_average": 850,
      "name": "Zamorak robe",
      "sp": 40
    },
    "1038": {
      "overall_average": 3634,
      "id": 1038,
      "sell_average": 3492,
      "members": false,
      "buy_average": 2995,
      "name": "Red partyhat",
      "sp": 1
    },
    "1040": {
      "overall_average": 1642,
      "id": 1040,
      "sell_average": 1570,
      "members": false,
      "buy_average": 1552,
      "name": "Yellow partyhat",
      "sp": 1
    },
    "1042": {
      "overall_average": 0,
      "id": 1042,
      "sell_average": 7569,
      "members": false,
      "buy_average": 7569,
      "name": "Blue partyhat",
      "sp": 1
    },
    "1044": {
      "overall_average": 3000,
      "id": 1044,
      "sell_average": 2839,
      "members": false,
      "buy_average": 2759,
      "name": "Green partyhat",
      "sp": 1
    },
    "1046": {
      "overall_average": 4862,
      "id": 1046,
      "sell_average": 4780,
      "members": false,
      "buy_average": 4637,
      "name": "Purple partyhat",
      "sp": 1
    },
    "1048": {
      "overall_average": 3000,
      "id": 1048,
      "sell_average": 2972,
      "members": false,
      "buy_average": 2876,
      "name": "White partyhat",
      "sp": 1
    },
    "1050": {
      "overall_average": 12764,
      "id": 1050,
      "sell_average": 11355,
      "members": false,
      "buy_average": 10729,
      "name": "Santa hat",
      "sp": 160
    },
    "1053": {
      "overall_average": 7500,
      "id": 1053,
      "sell_average": 6000,
      "members": false,
      "buy_average": 4500,
      "name": "Green halloween mask",
      "sp": 15
    },
    "1055": {
      "overall_average": 3807,
      "id": 1055,
      "sell_average": 3492,
      "members": false,
      "buy_average": 3178,
      "name": "Blue halloween mask",
      "sp": 15
    },
    "1057": {
      "overall_average": 0,
      "id": 1057,
      "sell_average": 4830,
      "members": false,
      "buy_average": 4830,
      "name": "Red halloween mask",
      "sp": 15
    },
    "1059": {
      "overall_average": 4,
      "id": 1059,
      "sell_average": 4,
      "members": false,
      "buy_average": 4,
      "name": "Leather gloves",
      "sp": 6
    },
    "1061": {
      "overall_average": 18,
      "id": 1061,
      "sell_average": 18,
      "members": false,
      "buy_average": 18,
      "name": "Leather boots",
      "sp": 6
    },
    "1063": {
      "overall_average": 2,
      "id": 1063,
      "sell_average": 1,
      "members": false,
      "buy_average": 1,
      "name": "Leather vambraces",
      "sp": 18
    },
    "1065": {
      "overall_average": 1305,
      "id": 1065,
      "sell_average": 1291,
      "members": false,
      "buy_average": 1283,
      "name": "Green d'hide vamb",
      "sp": 2500
    },
    "1067": {
      "overall_average": 291,
      "id": 1067,
      "sell_average": 142,
      "members": false,
      "buy_average": 101,
      "name": "Iron platelegs",
      "sp": 280
    },
    "1069": {
      "overall_average": 687,
      "id": 1069,
      "sell_average": 639,
      "members": false,
      "buy_average": 607,
      "name": "Steel platelegs",
      "sp": 1000
    },
    "1071": {
      "overall_average": 2338,
      "id": 1071,
      "sell_average": 1796,
      "members": false,
      "buy_average": 1507,
      "name": "Mithril platelegs",
      "sp": 2600
    },
    "1073": {
      "overall_average": 4074,
      "id": 1073,
      "sell_average": 3680,
      "members": false,
      "buy_average": 3637,
      "name": "Adamant platelegs",
      "sp": 6400
    },
    "1075": {
      "overall_average": 64,
      "id": 1075,
      "sell_average": 64,
      "members": false,
      "buy_average": 0,
      "name": "Bronze platelegs",
      "sp": 80
    },
    "1077": {
      "overall_average": 1863,
      "id": 1077,
      "sell_average": 1749,
      "members": false,
      "buy_average": 1680,
      "name": "Black platelegs",
      "sp": 1920
    },
    "1079": {
      "overall_average": 38113,
      "id": 1079,
      "sell_average": 38114,
      "members": false,
      "buy_average": 38117,
      "name": "Rune platelegs",
      "sp": 64000
    },
    "1081": {
      "overall_average": 0,
      "id": 1081,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Iron plateskirt",
      "sp": 280
    },
    "1083": {
      "overall_average": 0,
      "id": 1083,
      "sell_average": 613,
      "members": false,
      "buy_average": 613,
      "name": "Steel plateskirt",
      "sp": 1000
    },
    "1085": {
      "overall_average": 1374,
      "id": 1085,
      "sell_average": 1371,
      "members": false,
      "buy_average": 1358,
      "name": "Mithril plateskirt",
      "sp": 2600
    },
    "1087": {
      "overall_average": 0,
      "id": 1087,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Bronze plateskirt",
      "sp": 80
    },
    "1089": {
      "overall_average": 0,
      "id": 1089,
      "sell_average": 2000,
      "members": false,
      "buy_average": 2000,
      "name": "Black plateskirt",
      "sp": 1920
    },
    "1091": {
      "overall_average": 3849,
      "id": 1091,
      "sell_average": 3733,
      "members": false,
      "buy_average": 3687,
      "name": "Adamant plateskirt",
      "sp": 6400
    },
    "1093": {
      "overall_average": 38014,
      "id": 1093,
      "sell_average": 38010,
      "members": false,
      "buy_average": 38000,
      "name": "Rune plateskirt",
      "sp": 64000
    },
    "1095": {
      "overall_average": 3,
      "id": 1095,
      "sell_average": 1,
      "members": false,
      "buy_average": 1,
      "name": "Leather chaps",
      "sp": 20
    },
    "1097": {
      "overall_average": 324,
      "id": 1097,
      "sell_average": 314,
      "members": false,
      "buy_average": 302,
      "name": "Studded chaps",
      "sp": 750
    },
    "1099": {
      "overall_average": 2159,
      "id": 1099,
      "sell_average": 2143,
      "members": false,
      "buy_average": 2122,
      "name": "Green d'hide chaps",
      "sp": 3900
    },
    "1101": {
      "overall_average": 378,
      "id": 1101,
      "sell_average": 249,
      "members": false,
      "buy_average": 169,
      "name": "Iron chainbody",
      "sp": 210
    },
    "1103": {
      "overall_average": 63,
      "id": 1103,
      "sell_average": 30,
      "members": false,
      "buy_average": 28,
      "name": "Bronze chainbody",
      "sp": 60
    },
    "1105": {
      "overall_average": 335,
      "id": 1105,
      "sell_average": 356,
      "members": false,
      "buy_average": 376,
      "name": "Steel chainbody",
      "sp": 750
    },
    "1107": {
      "overall_average": 0,
      "id": 1107,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black chainbody",
      "sp": 1440
    },
    "1109": {
      "overall_average": 950,
      "id": 1109,
      "sell_average": 986,
      "members": false,
      "buy_average": 991,
      "name": "Mithril chainbody",
      "sp": 1950
    },
    "1111": {
      "overall_average": 3050,
      "id": 1111,
      "sell_average": 2828,
      "members": false,
      "buy_average": 2681,
      "name": "Adamant chainbody",
      "sp": 4800
    },
    "1113": {
      "overall_average": 29872,
      "id": 1113,
      "sell_average": 29626,
      "members": false,
      "buy_average": 29583,
      "name": "Rune chainbody",
      "sp": 50000
    },
    "1115": {
      "overall_average": 178,
      "id": 1115,
      "sell_average": 167,
      "members": false,
      "buy_average": 162,
      "name": "Iron platebody",
      "sp": 560
    },
    "1117": {
      "overall_average": 20,
      "id": 1117,
      "sell_average": 19,
      "members": false,
      "buy_average": 19,
      "name": "Bronze platebody",
      "sp": 160
    },
    "1119": {
      "overall_average": 937,
      "id": 1119,
      "sell_average": 945,
      "members": false,
      "buy_average": 951,
      "name": "Steel platebody",
      "sp": 2000
    },
    "1121": {
      "overall_average": 2886,
      "id": 1121,
      "sell_average": 2876,
      "members": false,
      "buy_average": 2864,
      "name": "Mithril platebody",
      "sp": 5200
    },
    "1123": {
      "overall_average": 9650,
      "id": 1123,
      "sell_average": 9628,
      "members": false,
      "buy_average": 9616,
      "name": "Adamant platebody",
      "sp": 16640
    },
    "1125": {
      "overall_average": 9489,
      "id": 1125,
      "sell_average": 7691,
      "members": false,
      "buy_average": 5637,
      "name": "Black platebody",
      "sp": 3840
    },
    "1127": {
      "overall_average": 38764,
      "id": 1127,
      "sell_average": 38752,
      "members": false,
      "buy_average": 38721,
      "name": "Rune platebody",
      "sp": 65000
    },
    "1129": {
      "overall_average": 8,
      "id": 1129,
      "sell_average": 7,
      "members": false,
      "buy_average": 7,
      "name": "Leather body",
      "sp": 21
    },
    "1131": {
      "overall_average": 10,
      "id": 1131,
      "sell_average": 7,
      "members": false,
      "buy_average": 6,
      "name": "Hardleather body",
      "sp": 170
    },
    "1133": {
      "overall_average": 904,
      "id": 1133,
      "sell_average": 600,
      "members": false,
      "buy_average": 460,
      "name": "Studded body",
      "sp": 850
    },
    "1135": {
      "overall_average": 4343,
      "id": 1135,
      "sell_average": 4338,
      "members": false,
      "buy_average": 4336,
      "name": "Green d'hide body",
      "sp": 7800
    },
    "1137": {
      "overall_average": 42,
      "id": 1137,
      "sell_average": 40,
      "members": false,
      "buy_average": 40,
      "name": "Iron med helm",
      "sp": 84
    },
    "1139": {
      "overall_average": 95,
      "id": 1139,
      "sell_average": 58,
      "members": false,
      "buy_average": 53,
      "name": "Bronze med helm",
      "sp": 24
    },
    "1141": {
      "overall_average": 72,
      "id": 1141,
      "sell_average": 62,
      "members": false,
      "buy_average": 62,
      "name": "Steel med helm",
      "sp": 300
    },
    "1143": {
      "overall_average": 426,
      "id": 1143,
      "sell_average": 369,
      "members": false,
      "buy_average": 360,
      "name": "Mithril med helm",
      "sp": 780
    },
    "1145": {
      "overall_average": 976,
      "id": 1145,
      "sell_average": 952,
      "members": false,
      "buy_average": 949,
      "name": "Adamant med helm",
      "sp": 1920
    },
    "1147": {
      "overall_average": 11260,
      "id": 1147,
      "sell_average": 11230,
      "members": false,
      "buy_average": 11213,
      "name": "Rune med helm",
      "sp": 19200
    },
    "1149": {
      "overall_average": 59462,
      "id": 1149,
      "sell_average": 59289,
      "members": true,
      "buy_average": 59224,
      "name": "Dragon med helm",
      "sp": 100000
    },
    "1151": {
      "overall_average": 0,
      "id": 1151,
      "sell_average": 250,
      "members": false,
      "buy_average": 250,
      "name": "Black med helm",
      "sp": 576
    },
    "1153": {
      "overall_average": 286,
      "id": 1153,
      "sell_average": 244,
      "members": false,
      "buy_average": 224,
      "name": "Iron full helm",
      "sp": 154
    },
    "1155": {
      "overall_average": 9,
      "id": 1155,
      "sell_average": 13,
      "members": false,
      "buy_average": 15,
      "name": "Bronze full helm",
      "sp": 44
    },
    "1157": {
      "overall_average": 237,
      "id": 1157,
      "sell_average": 197,
      "members": false,
      "buy_average": 165,
      "name": "Steel full helm",
      "sp": 550
    },
    "1159": {
      "overall_average": 1074,
      "id": 1159,
      "sell_average": 855,
      "members": false,
      "buy_average": 731,
      "name": "Mithril full helm",
      "sp": 1430
    },
    "1161": {
      "overall_average": 1994,
      "id": 1161,
      "sell_average": 1911,
      "members": false,
      "buy_average": 1895,
      "name": "Adamant full helm",
      "sp": 3520
    },
    "1163": {
      "overall_average": 20749,
      "id": 1163,
      "sell_average": 20751,
      "members": false,
      "buy_average": 20754,
      "name": "Rune full helm",
      "sp": 35200
    },
    "1165": {
      "overall_average": 570,
      "id": 1165,
      "sell_average": 532,
      "members": false,
      "buy_average": 510,
      "name": "Black full helm",
      "sp": 1056
    },
    "1167": {
      "overall_average": 3,
      "id": 1167,
      "sell_average": 2,
      "members": false,
      "buy_average": 2,
      "name": "Leather cowl",
      "sp": 24
    },
    "1169": {
      "overall_average": 34,
      "id": 1169,
      "sell_average": 26,
      "members": false,
      "buy_average": 21,
      "name": "Coif",
      "sp": 200
    },
    "1171": {
      "overall_average": 159,
      "id": 1171,
      "sell_average": 141,
      "members": false,
      "buy_average": 141,
      "name": "Wooden shield",
      "sp": 20
    },
    "1173": {
      "overall_average": 19,
      "id": 1173,
      "sell_average": 23,
      "members": false,
      "buy_average": 24,
      "name": "Bronze sq shield",
      "sp": 48
    },
    "1175": {
      "overall_average": 26,
      "id": 1175,
      "sell_average": 26,
      "members": false,
      "buy_average": 28,
      "name": "Iron sq shield",
      "sp": 168
    },
    "1177": {
      "overall_average": 300,
      "id": 1177,
      "sell_average": 282,
      "members": false,
      "buy_average": 248,
      "name": "Steel sq shield",
      "sp": 600
    },
    "1179": {
      "overall_average": 487,
      "id": 1179,
      "sell_average": 487,
      "members": false,
      "buy_average": 487,
      "name": "Black sq shield",
      "sp": 1152
    },
    "1181": {
      "overall_average": 834,
      "id": 1181,
      "sell_average": 779,
      "members": false,
      "buy_average": 755,
      "name": "Mithril sq shield",
      "sp": 1560
    },
    "1183": {
      "overall_average": 3105,
      "id": 1183,
      "sell_average": 2715,
      "members": false,
      "buy_average": 2238,
      "name": "Adamant sq shield",
      "sp": 3840
    },
    "1185": {
      "overall_average": 22678,
      "id": 1185,
      "sell_average": 22606,
      "members": false,
      "buy_average": 22589,
      "name": "Rune sq shield",
      "sp": 38400
    },
    "1187": {
      "overall_average": 326228,
      "id": 1187,
      "sell_average": 328009,
      "members": true,
      "buy_average": 330806,
      "name": "Dragon sq shield",
      "sp": 500000
    },
    "1189": {
      "overall_average": 6,
      "id": 1189,
      "sell_average": 6,
      "members": false,
      "buy_average": 0,
      "name": "Bronze kiteshield",
      "sp": 68
    },
    "1191": {
      "overall_average": 74,
      "id": 1191,
      "sell_average": 52,
      "members": false,
      "buy_average": 45,
      "name": "Iron kiteshield",
      "sp": 238
    },
    "1193": {
      "overall_average": 385,
      "id": 1193,
      "sell_average": 375,
      "members": false,
      "buy_average": 358,
      "name": "Steel kiteshield",
      "sp": 850
    },
    "1195": {
      "overall_average": 1474,
      "id": 1195,
      "sell_average": 1213,
      "members": false,
      "buy_average": 1170,
      "name": "Black kiteshield",
      "sp": 1632
    },
    "1197": {
      "overall_average": 1075,
      "id": 1197,
      "sell_average": 1105,
      "members": false,
      "buy_average": 1108,
      "name": "Mithril kiteshield",
      "sp": 2210
    },
    "1199": {
      "overall_average": 3101,
      "id": 1199,
      "sell_average": 3064,
      "members": false,
      "buy_average": 3013,
      "name": "Adamant kiteshield",
      "sp": 5440
    },
    "1201": {
      "overall_average": 32576,
      "id": 1201,
      "sell_average": 32312,
      "members": false,
      "buy_average": 32219,
      "name": "Rune kiteshield",
      "sp": 54400
    },
    "1203": {
      "overall_average": 11,
      "id": 1203,
      "sell_average": 9,
      "members": false,
      "buy_average": 9,
      "name": "Iron dagger",
      "sp": 35
    },
    "1205": {
      "overall_average": 31,
      "id": 1205,
      "sell_average": 31,
      "members": false,
      "buy_average": 30,
      "name": "Bronze dagger",
      "sp": 10
    },
    "1207": {
      "overall_average": 11,
      "id": 1207,
      "sell_average": 11,
      "members": false,
      "buy_average": 11,
      "name": "Steel dagger",
      "sp": 125
    },
    "1209": {
      "overall_average": 176,
      "id": 1209,
      "sell_average": 71,
      "members": false,
      "buy_average": 48,
      "name": "Mithril dagger",
      "sp": 325
    },
    "1211": {
      "overall_average": 800,
      "id": 1211,
      "sell_average": 355,
      "members": false,
      "buy_average": 335,
      "name": "Adamant dagger",
      "sp": 800
    },
    "1213": {
      "overall_average": 4595,
      "id": 1213,
      "sell_average": 4651,
      "members": false,
      "buy_average": 4664,
      "name": "Rune dagger",
      "sp": 8000
    },
    "1215": {
      "overall_average": 22119,
      "id": 1215,
      "sell_average": 18439,
      "members": true,
      "buy_average": 17683,
      "name": "Dragon dagger",
      "sp": 30000
    },
    "1217": {
      "overall_average": 117,
      "id": 1217,
      "sell_average": 116,
      "members": false,
      "buy_average": 116,
      "name": "Black dagger",
      "sp": 240
    },
    "1219": {
      "overall_average": 0,
      "id": 1219,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron dagger(p)",
      "sp": 35
    },
    "1221": {
      "overall_average": 0,
      "id": 1221,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze dagger(p)",
      "sp": 10
    },
    "1223": {
      "overall_average": 0,
      "id": 1223,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel dagger(p)",
      "sp": 125
    },
    "1225": {
      "overall_average": 0,
      "id": 1225,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril dagger(p)",
      "sp": 325
    },
    "1227": {
      "overall_average": 0,
      "id": 1227,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant dagger(p)",
      "sp": 800
    },
    "1229": {
      "overall_average": 0,
      "id": 1229,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune dagger(p)",
      "sp": 8000
    },
    "1231": {
      "overall_average": 37012,
      "id": 1231,
      "sell_average": 36384,
      "members": true,
      "buy_average": 35883,
      "name": "Dragon dagger(p)",
      "sp": 24000
    },
    "1233": {
      "overall_average": 0,
      "id": 1233,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black dagger(p)",
      "sp": 240
    },
    "1237": {
      "overall_average": 717,
      "id": 1237,
      "sell_average": 663,
      "members": true,
      "buy_average": 646,
      "name": "Bronze spear",
      "sp": 26
    },
    "1239": {
      "overall_average": 0,
      "id": 1239,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron spear",
      "sp": 91
    },
    "1241": {
      "overall_average": 71,
      "id": 1241,
      "sell_average": 71,
      "members": true,
      "buy_average": 67,
      "name": "Steel spear",
      "sp": 325
    },
    "1243": {
      "overall_average": 371,
      "id": 1243,
      "sell_average": 361,
      "members": true,
      "buy_average": 340,
      "name": "Mithril spear",
      "sp": 845
    },
    "1245": {
      "overall_average": 0,
      "id": 1245,
      "sell_average": 1045,
      "members": true,
      "buy_average": 1045,
      "name": "Adamant spear",
      "sp": 2080
    },
    "1247": {
      "overall_average": 12151,
      "id": 1247,
      "sell_average": 12226,
      "members": true,
      "buy_average": 12257,
      "name": "Rune spear",
      "sp": 20800
    },
    "1249": {
      "overall_average": 57707,
      "id": 1249,
      "sell_average": 48451,
      "members": true,
      "buy_average": 36974,
      "name": "Dragon spear",
      "sp": 62400
    },
    "1251": {
      "overall_average": 0,
      "id": 1251,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze spear(p)",
      "sp": 26
    },
    "1253": {
      "overall_average": 0,
      "id": 1253,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron spear(p)",
      "sp": 91
    },
    "1255": {
      "overall_average": 0,
      "id": 1255,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel spear(p)",
      "sp": 325
    },
    "1257": {
      "overall_average": 0,
      "id": 1257,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril spear(p)",
      "sp": 845
    },
    "1259": {
      "overall_average": 0,
      "id": 1259,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant spear(p)",
      "sp": 2080
    },
    "1261": {
      "overall_average": 0,
      "id": 1261,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune spear(p)",
      "sp": 20800
    },
    "1263": {
      "overall_average": 0,
      "id": 1263,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon spear(p)",
      "sp": 62400
    },
    "1265": {
      "overall_average": 26,
      "id": 1265,
      "sell_average": 25,
      "members": false,
      "buy_average": 25,
      "name": "Bronze pickaxe",
      "sp": 1
    },
    "1267": {
      "overall_average": 208,
      "id": 1267,
      "sell_average": 220,
      "members": false,
      "buy_average": 230,
      "name": "Iron pickaxe",
      "sp": 140
    },
    "1269": {
      "overall_average": 993,
      "id": 1269,
      "sell_average": 860,
      "members": false,
      "buy_average": 809,
      "name": "Steel pickaxe",
      "sp": 500
    },
    "1271": {
      "overall_average": 2121,
      "id": 1271,
      "sell_average": 2152,
      "members": false,
      "buy_average": 2173,
      "name": "Adamant pickaxe",
      "sp": 3200
    },
    "1273": {
      "overall_average": 596,
      "id": 1273,
      "sell_average": 573,
      "members": false,
      "buy_average": 568,
      "name": "Mithril pickaxe",
      "sp": 1300
    },
    "1275": {
      "overall_average": 18866,
      "id": 1275,
      "sell_average": 18876,
      "members": false,
      "buy_average": 18917,
      "name": "Rune pickaxe",
      "sp": 32000
    },
    "1277": {
      "overall_average": 27,
      "id": 1277,
      "sell_average": 21,
      "members": false,
      "buy_average": 21,
      "name": "Bronze sword",
      "sp": 26
    },
    "1279": {
      "overall_average": 5,
      "id": 1279,
      "sell_average": 3,
      "members": false,
      "buy_average": 3,
      "name": "Iron sword",
      "sp": 91
    },
    "1281": {
      "overall_average": 115,
      "id": 1281,
      "sell_average": 106,
      "members": false,
      "buy_average": 98,
      "name": "Steel sword",
      "sp": 325
    },
    "1283": {
      "overall_average": 0,
      "id": 1283,
      "sell_average": 208,
      "members": false,
      "buy_average": 208,
      "name": "Black sword",
      "sp": 624
    },
    "1285": {
      "overall_average": 397,
      "id": 1285,
      "sell_average": 350,
      "members": false,
      "buy_average": 327,
      "name": "Mithril sword",
      "sp": 845
    },
    "1287": {
      "overall_average": 1400,
      "id": 1287,
      "sell_average": 1183,
      "members": false,
      "buy_average": 1075,
      "name": "Adamant sword",
      "sp": 2080
    },
    "1289": {
      "overall_average": 12616,
      "id": 1289,
      "sell_average": 12260,
      "members": false,
      "buy_average": 12201,
      "name": "Rune sword",
      "sp": 20800
    },
    "1291": {
      "overall_average": 0,
      "id": 1291,
      "sell_average": 18,
      "members": false,
      "buy_average": 18,
      "name": "Bronze longsword",
      "sp": 40
    },
    "1293": {
      "overall_average": 12,
      "id": 1293,
      "sell_average": 2,
      "members": false,
      "buy_average": 1,
      "name": "Iron longsword",
      "sp": 140
    },
    "1295": {
      "overall_average": 461,
      "id": 1295,
      "sell_average": 247,
      "members": false,
      "buy_average": 194,
      "name": "Steel longsword",
      "sp": 500
    },
    "1297": {
      "overall_average": 346,
      "id": 1297,
      "sell_average": 343,
      "members": false,
      "buy_average": 339,
      "name": "Black longsword",
      "sp": 960
    },
    "1299": {
      "overall_average": 908,
      "id": 1299,
      "sell_average": 712,
      "members": false,
      "buy_average": 581,
      "name": "Mithril longsword",
      "sp": 1300
    },
    "1301": {
      "overall_average": 1904,
      "id": 1301,
      "sell_average": 1819,
      "members": false,
      "buy_average": 1798,
      "name": "Adamant longsword",
      "sp": 3200
    },
    "1303": {
      "overall_average": 18855,
      "id": 1303,
      "sell_average": 18849,
      "members": false,
      "buy_average": 18846,
      "name": "Rune longsword",
      "sp": 32000
    },
    "1305": {
      "overall_average": 59514,
      "id": 1305,
      "sell_average": 59509,
      "members": true,
      "buy_average": 59508,
      "name": "Dragon longsword",
      "sp": 100000
    },
    "1307": {
      "overall_average": 59,
      "id": 1307,
      "sell_average": 59,
      "members": false,
      "buy_average": 0,
      "name": "Bronze 2h sword",
      "sp": 80
    },
    "1309": {
      "overall_average": 52,
      "id": 1309,
      "sell_average": 35,
      "members": false,
      "buy_average": 34,
      "name": "Iron 2h sword",
      "sp": 280
    },
    "1311": {
      "overall_average": 528,
      "id": 1311,
      "sell_average": 414,
      "members": false,
      "buy_average": 408,
      "name": "Steel 2h sword",
      "sp": 1000
    },
    "1313": {
      "overall_average": 968,
      "id": 1313,
      "sell_average": 960,
      "members": false,
      "buy_average": 948,
      "name": "Black 2h sword",
      "sp": 1920
    },
    "1315": {
      "overall_average": 1359,
      "id": 1315,
      "sell_average": 1356,
      "members": false,
      "buy_average": 1355,
      "name": "Mithril 2h sword",
      "sp": 2600
    },
    "1317": {
      "overall_average": 6263,
      "id": 1317,
      "sell_average": 3804,
      "members": false,
      "buy_average": 3644,
      "name": "Adamant 2h sword",
      "sp": 6400
    },
    "1319": {
      "overall_average": 37998,
      "id": 1319,
      "sell_average": 37996,
      "members": false,
      "buy_average": 37984,
      "name": "Rune 2h sword",
      "sp": 64000
    },
    "1321": {
      "overall_average": 0,
      "id": 1321,
      "sell_average": 20,
      "members": false,
      "buy_average": 20,
      "name": "Bronze scimitar",
      "sp": 32
    },
    "1323": {
      "overall_average": 13,
      "id": 1323,
      "sell_average": 13,
      "members": false,
      "buy_average": 13,
      "name": "Iron scimitar",
      "sp": 112
    },
    "1325": {
      "overall_average": 100,
      "id": 1325,
      "sell_average": 91,
      "members": false,
      "buy_average": 85,
      "name": "Steel scimitar",
      "sp": 400
    },
    "1327": {
      "overall_average": 1133,
      "id": 1327,
      "sell_average": 1123,
      "members": false,
      "buy_average": 1039,
      "name": "Black scimitar",
      "sp": 768
    },
    "1329": {
      "overall_average": 601,
      "id": 1329,
      "sell_average": 433,
      "members": false,
      "buy_average": 426,
      "name": "Mithril scimitar",
      "sp": 1040
    },
    "1331": {
      "overall_average": 1615,
      "id": 1331,
      "sell_average": 1636,
      "members": false,
      "buy_average": 1674,
      "name": "Adamant scimitar",
      "sp": 2560
    },
    "1333": {
      "overall_average": 15484,
      "id": 1333,
      "sell_average": 15521,
      "members": false,
      "buy_average": 15575,
      "name": "Rune scimitar",
      "sp": 25600
    },
    "1335": {
      "overall_average": 140,
      "id": 1335,
      "sell_average": 19,
      "members": false,
      "buy_average": 12,
      "name": "Iron warhammer",
      "sp": 173
    },
    "1337": {
      "overall_average": 0,
      "id": 1337,
      "sell_average": 15,
      "members": false,
      "buy_average": 15,
      "name": "Bronze warhammer",
      "sp": 47
    },
    "1339": {
      "overall_average": 950,
      "id": 1339,
      "sell_average": 345,
      "members": false,
      "buy_average": 194,
      "name": "Steel warhammer",
      "sp": 640
    },
    "1341": {
      "overall_average": 419,
      "id": 1341,
      "sell_average": 419,
      "members": false,
      "buy_average": 419,
      "name": "Black warhammer",
      "sp": 980
    },
    "1343": {
      "overall_average": 0,
      "id": 1343,
      "sell_average": 795,
      "members": false,
      "buy_average": 795,
      "name": "Mithril warhammer",
      "sp": 1660
    },
    "1345": {
      "overall_average": 1900,
      "id": 1345,
      "sell_average": 1990,
      "members": false,
      "buy_average": 2242,
      "name": "Adamant warhammer",
      "sp": 4120
    },
    "1347": {
      "overall_average": 24773,
      "id": 1347,
      "sell_average": 24703,
      "members": false,
      "buy_average": 24649,
      "name": "Rune warhammer",
      "sp": 41500
    },
    "1349": {
      "overall_average": 95,
      "id": 1349,
      "sell_average": 48,
      "members": false,
      "buy_average": 39,
      "name": "Iron axe",
      "sp": 56
    },
    "1351": {
      "overall_average": 76,
      "id": 1351,
      "sell_average": 67,
      "members": false,
      "buy_average": 61,
      "name": "Bronze axe",
      "sp": 16
    },
    "1353": {
      "overall_average": 272,
      "id": 1353,
      "sell_average": 148,
      "members": false,
      "buy_average": 100,
      "name": "Steel axe",
      "sp": 200
    },
    "1355": {
      "overall_average": 303,
      "id": 1355,
      "sell_average": 302,
      "members": false,
      "buy_average": 299,
      "name": "Mithril axe",
      "sp": 520
    },
    "1357": {
      "overall_average": 888,
      "id": 1357,
      "sell_average": 838,
      "members": false,
      "buy_average": 790,
      "name": "Adamant axe",
      "sp": 1280
    },
    "1359": {
      "overall_average": 7677,
      "id": 1359,
      "sell_average": 7379,
      "members": false,
      "buy_average": 7325,
      "name": "Rune axe",
      "sp": 12800
    },
    "1361": {
      "overall_average": 1194,
      "id": 1361,
      "sell_average": 1060,
      "members": false,
      "buy_average": 956,
      "name": "Black axe",
      "sp": 384
    },
    "1363": {
      "overall_average": 0,
      "id": 1363,
      "sell_average": 20,
      "members": false,
      "buy_average": 20,
      "name": "Iron battleaxe",
      "sp": 182
    },
    "1365": {
      "overall_average": 0,
      "id": 1365,
      "sell_average": 201,
      "members": false,
      "buy_average": 201,
      "name": "Steel battleaxe",
      "sp": 650
    },
    "1367": {
      "overall_average": 0,
      "id": 1367,
      "sell_average": 547,
      "members": false,
      "buy_average": 547,
      "name": "Black battleaxe",
      "sp": 1248
    },
    "1369": {
      "overall_average": 1074,
      "id": 1369,
      "sell_average": 863,
      "members": false,
      "buy_average": 840,
      "name": "Mithril battleaxe",
      "sp": 1690
    },
    "1371": {
      "overall_average": 0,
      "id": 1371,
      "sell_average": 2311,
      "members": false,
      "buy_average": 2311,
      "name": "Adamant battleaxe",
      "sp": 4160
    },
    "1373": {
      "overall_average": 24742,
      "id": 1373,
      "sell_average": 24684,
      "members": false,
      "buy_average": 24658,
      "name": "Rune battleaxe",
      "sp": 41600
    },
    "1375": {
      "overall_average": 0,
      "id": 1375,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Bronze battleaxe",
      "sp": 52
    },
    "1377": {
      "overall_average": 119573,
      "id": 1377,
      "sell_average": 119453,
      "members": true,
      "buy_average": 119410,
      "name": "Dragon battleaxe",
      "sp": 200000
    },
    "1379": {
      "overall_average": 90,
      "id": 1379,
      "sell_average": 86,
      "members": false,
      "buy_average": 84,
      "name": "Staff",
      "sp": 15
    },
    "1381": {
      "overall_average": 1807,
      "id": 1381,
      "sell_average": 1793,
      "members": false,
      "buy_average": 1778,
      "name": "Staff of air",
      "sp": 1500
    },
    "1383": {
      "overall_average": 1947,
      "id": 1383,
      "sell_average": 1866,
      "members": false,
      "buy_average": 1781,
      "name": "Staff of water",
      "sp": 1500
    },
    "1385": {
      "overall_average": 3229,
      "id": 1385,
      "sell_average": 1586,
      "members": false,
      "buy_average": 1300,
      "name": "Staff of earth",
      "sp": 1500
    },
    "1387": {
      "overall_average": 1362,
      "id": 1387,
      "sell_average": 1339,
      "members": false,
      "buy_average": 1296,
      "name": "Staff of fire",
      "sp": 1500
    },
    "1389": {
      "overall_average": 84,
      "id": 1389,
      "sell_average": 79,
      "members": false,
      "buy_average": 78,
      "name": "Magic staff",
      "sp": 200
    },
    "1391": {
      "overall_average": 8600,
      "id": 1391,
      "sell_average": 8598,
      "members": true,
      "buy_average": 8595,
      "name": "Battlestaff",
      "sp": 7000
    },
    "1393": {
      "overall_average": 9095,
      "id": 1393,
      "sell_average": 9094,
      "members": true,
      "buy_average": 9094,
      "name": "Fire battlestaff",
      "sp": 15500
    },
    "1395": {
      "overall_average": 9079,
      "id": 1395,
      "sell_average": 9079,
      "members": true,
      "buy_average": 9080,
      "name": "Water battlestaff",
      "sp": 15500
    },
    "1397": {
      "overall_average": 9082,
      "id": 1397,
      "sell_average": 9081,
      "members": true,
      "buy_average": 9081,
      "name": "Air battlestaff",
      "sp": 15500
    },
    "1399": {
      "overall_average": 9103,
      "id": 1399,
      "sell_average": 9096,
      "members": true,
      "buy_average": 9095,
      "name": "Earth battlestaff",
      "sp": 15500
    },
    "1401": {
      "overall_average": 25539,
      "id": 1401,
      "sell_average": 25233,
      "members": true,
      "buy_average": 25100,
      "name": "Mystic fire staff",
      "sp": 42500
    },
    "1403": {
      "overall_average": 25400,
      "id": 1403,
      "sell_average": 25178,
      "members": true,
      "buy_average": 25150,
      "name": "Mystic water staff",
      "sp": 42500
    },
    "1405": {
      "overall_average": 25184,
      "id": 1405,
      "sell_average": 25160,
      "members": true,
      "buy_average": 25151,
      "name": "Mystic air staff",
      "sp": 42500
    },
    "1407": {
      "overall_average": 25176,
      "id": 1407,
      "sell_average": 25173,
      "members": true,
      "buy_average": 25173,
      "name": "Mystic earth staff",
      "sp": 42500
    },
    "1420": {
      "overall_average": 12,
      "id": 1420,
      "sell_average": 12,
      "members": false,
      "buy_average": 12,
      "name": "Iron mace",
      "sp": 63
    },
    "1422": {
      "overall_average": 0,
      "id": 1422,
      "sell_average": 16,
      "members": false,
      "buy_average": 16,
      "name": "Bronze mace",
      "sp": 18
    },
    "1424": {
      "overall_average": 35,
      "id": 1424,
      "sell_average": 47,
      "members": false,
      "buy_average": 52,
      "name": "Steel mace",
      "sp": 225
    },
    "1426": {
      "overall_average": 0,
      "id": 1426,
      "sell_average": 150,
      "members": false,
      "buy_average": 150,
      "name": "Black mace",
      "sp": 432
    },
    "1428": {
      "overall_average": 153,
      "id": 1428,
      "sell_average": 153,
      "members": false,
      "buy_average": 153,
      "name": "Mithril mace",
      "sp": 585
    },
    "1430": {
      "overall_average": 616,
      "id": 1430,
      "sell_average": 618,
      "members": false,
      "buy_average": 631,
      "name": "Adamant mace",
      "sp": 1440
    },
    "1432": {
      "overall_average": 8401,
      "id": 1432,
      "sell_average": 8393,
      "members": false,
      "buy_average": 8385,
      "name": "Rune mace",
      "sp": 14400
    },
    "1434": {
      "overall_average": 30147,
      "id": 1434,
      "sell_average": 29654,
      "members": true,
      "buy_average": 29479,
      "name": "Dragon mace",
      "sp": 50000
    },
    "1436": {
      "overall_average": 13,
      "id": 1436,
      "sell_average": 12,
      "members": false,
      "buy_average": 10,
      "name": "Rune essence",
      "sp": 4
    },
    "1438": {
      "overall_average": 76,
      "id": 1438,
      "sell_average": 75,
      "members": false,
      "buy_average": 71,
      "name": "Air talisman",
      "sp": 4
    },
    "1440": {
      "overall_average": 240,
      "id": 1440,
      "sell_average": 236,
      "members": false,
      "buy_average": 233,
      "name": "Earth talisman",
      "sp": 4
    },
    "1442": {
      "overall_average": 1664,
      "id": 1442,
      "sell_average": 1633,
      "members": false,
      "buy_average": 1607,
      "name": "Fire talisman",
      "sp": 4
    },
    "1444": {
      "overall_average": 263,
      "id": 1444,
      "sell_average": 277,
      "members": false,
      "buy_average": 277,
      "name": "Water talisman",
      "sp": 4
    },
    "1446": {
      "overall_average": 549,
      "id": 1446,
      "sell_average": 544,
      "members": false,
      "buy_average": 519,
      "name": "Body talisman",
      "sp": 4
    },
    "1448": {
      "overall_average": 266,
      "id": 1448,
      "sell_average": 262,
      "members": false,
      "buy_average": 261,
      "name": "Mind talisman",
      "sp": 4
    },
    "1452": {
      "overall_average": 250,
      "id": 1452,
      "sell_average": 247,
      "members": true,
      "buy_average": 247,
      "name": "Chaos talisman",
      "sp": 4
    },
    "1454": {
      "overall_average": 0,
      "id": 1454,
      "sell_average": 401,
      "members": true,
      "buy_average": 401,
      "name": "Cosmic talisman",
      "sp": 4
    },
    "1456": {
      "overall_average": 0,
      "id": 1456,
      "sell_average": 873,
      "members": true,
      "buy_average": 873,
      "name": "Death talisman",
      "sp": 4
    },
    "1462": {
      "overall_average": 798,
      "id": 1462,
      "sell_average": 686,
      "members": true,
      "buy_average": 681,
      "name": "Nature talisman",
      "sp": 4
    },
    "1464": {
      "overall_average": 6,
      "id": 1464,
      "sell_average": 5,
      "members": true,
      "buy_average": 5,
      "name": "Archery ticket",
      "sp": 25
    },
    "1470": {
      "overall_average": 1289,
      "id": 1470,
      "sell_average": 1275,
      "members": false,
      "buy_average": 1258,
      "name": "Red bead",
      "sp": 4
    },
    "1472": {
      "overall_average": 3032,
      "id": 1472,
      "sell_average": 3007,
      "members": false,
      "buy_average": 3000,
      "name": "Yellow bead",
      "sp": 4
    },
    "1474": {
      "overall_average": 1909,
      "id": 1474,
      "sell_average": 1912,
      "members": false,
      "buy_average": 1915,
      "name": "Black bead",
      "sp": 4
    },
    "1476": {
      "overall_average": 1605,
      "id": 1476,
      "sell_average": 1521,
      "members": false,
      "buy_average": 1479,
      "name": "White bead",
      "sp": 4
    },
    "1478": {
      "overall_average": 1214,
      "id": 1478,
      "sell_average": 1102,
      "members": false,
      "buy_average": 1036,
      "name": "Amulet of accuracy",
      "sp": 100
    },
    "1511": {
      "overall_average": 29,
      "id": 1511,
      "sell_average": 29,
      "members": false,
      "buy_average": 29,
      "name": "Logs",
      "sp": 4
    },
    "1513": {
      "overall_average": 1082,
      "id": 1513,
      "sell_average": 1080,
      "members": true,
      "buy_average": 1079,
      "name": "Magic logs",
      "sp": 320
    },
    "1515": {
      "overall_average": 304,
      "id": 1515,
      "sell_average": 302,
      "members": false,
      "buy_average": 300,
      "name": "Yew logs",
      "sp": 160
    },
    "1517": {
      "overall_average": 7,
      "id": 1517,
      "sell_average": 7,
      "members": false,
      "buy_average": 7,
      "name": "Maple logs",
      "sp": 80
    },
    "1519": {
      "overall_average": 12,
      "id": 1519,
      "sell_average": 11,
      "members": false,
      "buy_average": 11,
      "name": "Willow logs",
      "sp": 40
    },
    "1521": {
      "overall_average": 31,
      "id": 1521,
      "sell_average": 30,
      "members": false,
      "buy_average": 30,
      "name": "Oak logs",
      "sp": 20
    },
    "1523": {
      "overall_average": 162,
      "id": 1523,
      "sell_average": 159,
      "members": true,
      "buy_average": 145,
      "name": "Lockpick",
      "sp": 20
    },
    "1539": {
      "overall_average": 26,
      "id": 1539,
      "sell_average": 26,
      "members": false,
      "buy_average": 26,
      "name": "Steel nails",
      "sp": 3
    },
    "1540": {
      "overall_average": 108,
      "id": 1540,
      "sell_average": 149,
      "members": false,
      "buy_average": 266,
      "name": "Anti-dragon shield",
      "sp": 20
    },
    "1550": {
      "overall_average": 66,
      "id": 1550,
      "sell_average": 67,
      "members": false,
      "buy_average": 71,
      "name": "Garlic",
      "sp": 3
    },
    "1552": {
      "overall_average": 841,
      "id": 1552,
      "sell_average": 841,
      "members": true,
      "buy_average": 0,
      "name": "Seasoned sardine",
      "sp": 10
    },
    "1573": {
      "overall_average": 101,
      "id": 1573,
      "sell_average": 103,
      "members": true,
      "buy_average": 103,
      "name": "Doogle leaves",
      "sp": 2
    },
    "1592": {
      "overall_average": 143,
      "id": 1592,
      "sell_average": 133,
      "members": false,
      "buy_average": 106,
      "name": "Ring mould",
      "sp": 5
    },
    "1595": {
      "overall_average": 186,
      "id": 1595,
      "sell_average": 137,
      "members": false,
      "buy_average": 103,
      "name": "Amulet mould",
      "sp": 5
    },
    "1597": {
      "overall_average": 222,
      "id": 1597,
      "sell_average": 178,
      "members": false,
      "buy_average": 100,
      "name": "Necklace mould",
      "sp": 5
    },
    "1599": {
      "overall_average": 0,
      "id": 1599,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Holy mould",
      "sp": 5
    },
    "1601": {
      "overall_average": 2018,
      "id": 1601,
      "sell_average": 2020,
      "members": false,
      "buy_average": 2024,
      "name": "Diamond",
      "sp": 2000
    },
    "1603": {
      "overall_average": 1018,
      "id": 1603,
      "sell_average": 1017,
      "members": false,
      "buy_average": 1015,
      "name": "Ruby",
      "sp": 1000
    },
    "1605": {
      "overall_average": 527,
      "id": 1605,
      "sell_average": 526,
      "members": false,
      "buy_average": 524,
      "name": "Emerald",
      "sp": 500
    },
    "1607": {
      "overall_average": 574,
      "id": 1607,
      "sell_average": 574,
      "members": false,
      "buy_average": 574,
      "name": "Sapphire",
      "sp": 250
    },
    "1609": {
      "overall_average": 200,
      "id": 1609,
      "sell_average": 188,
      "members": true,
      "buy_average": 183,
      "name": "Opal",
      "sp": 100
    },
    "1611": {
      "overall_average": 320,
      "id": 1611,
      "sell_average": 310,
      "members": true,
      "buy_average": 298,
      "name": "Jade",
      "sp": 150
    },
    "1613": {
      "overall_average": 4382,
      "id": 1613,
      "sell_average": 4385,
      "members": true,
      "buy_average": 4410,
      "name": "Red topaz",
      "sp": 200
    },
    "1615": {
      "overall_average": 11841,
      "id": 1615,
      "sell_average": 11820,
      "members": true,
      "buy_average": 11802,
      "name": "Dragonstone",
      "sp": 10000
    },
    "1617": {
      "overall_average": 3249,
      "id": 1617,
      "sell_average": 3237,
      "members": false,
      "buy_average": 3233,
      "name": "Uncut diamond",
      "sp": 200
    },
    "1619": {
      "overall_average": 1537,
      "id": 1619,
      "sell_average": 1538,
      "members": false,
      "buy_average": 1540,
      "name": "Uncut ruby",
      "sp": 100
    },
    "1621": {
      "overall_average": 815,
      "id": 1621,
      "sell_average": 814,
      "members": false,
      "buy_average": 812,
      "name": "Uncut emerald",
      "sp": 50
    },
    "1623": {
      "overall_average": 806,
      "id": 1623,
      "sell_average": 805,
      "members": false,
      "buy_average": 803,
      "name": "Uncut sapphire",
      "sp": 25
    },
    "1625": {
      "overall_average": 81,
      "id": 1625,
      "sell_average": 75,
      "members": true,
      "buy_average": 75,
      "name": "Uncut opal",
      "sp": 20
    },
    "1627": {
      "overall_average": 285,
      "id": 1627,
      "sell_average": 275,
      "members": true,
      "buy_average": 274,
      "name": "Uncut jade",
      "sp": 30
    },
    "1629": {
      "overall_average": 3189,
      "id": 1629,
      "sell_average": 3188,
      "members": true,
      "buy_average": 3187,
      "name": "Uncut red topaz",
      "sp": 40
    },
    "1631": {
      "overall_average": 13303,
      "id": 1631,
      "sell_average": 13339,
      "members": true,
      "buy_average": 13360,
      "name": "Uncut dragonstone",
      "sp": 1000
    },
    "1635": {
      "overall_average": 131,
      "id": 1635,
      "sell_average": 130,
      "members": false,
      "buy_average": 129,
      "name": "Gold ring",
      "sp": 350
    },
    "1637": {
      "overall_average": 755,
      "id": 1637,
      "sell_average": 762,
      "members": false,
      "buy_average": 763,
      "name": "Sapphire ring",
      "sp": 900
    },
    "1639": {
      "overall_average": 710,
      "id": 1639,
      "sell_average": 704,
      "members": false,
      "buy_average": 699,
      "name": "Emerald ring",
      "sp": 1275
    },
    "1641": {
      "overall_average": 1070,
      "id": 1641,
      "sell_average": 1026,
      "members": false,
      "buy_average": 1025,
      "name": "Ruby ring",
      "sp": 2025
    },
    "1643": {
      "overall_average": 2095,
      "id": 1643,
      "sell_average": 2040,
      "members": false,
      "buy_average": 2009,
      "name": "Diamond ring",
      "sp": 3525
    },
    "1645": {
      "overall_average": 11870,
      "id": 1645,
      "sell_average": 11806,
      "members": true,
      "buy_average": 11805,
      "name": "Dragonstone ring",
      "sp": 17625
    },
    "1654": {
      "overall_average": 135,
      "id": 1654,
      "sell_average": 141,
      "members": false,
      "buy_average": 142,
      "name": "Gold necklace",
      "sp": 450
    },
    "1656": {
      "overall_average": 0,
      "id": 1656,
      "sell_average": 703,
      "members": false,
      "buy_average": 703,
      "name": "Sapphire necklace",
      "sp": 1050
    },
    "1658": {
      "overall_average": 710,
      "id": 1658,
      "sell_average": 695,
      "members": false,
      "buy_average": 652,
      "name": "Emerald necklace",
      "sp": 1425
    },
    "1660": {
      "overall_average": 1224,
      "id": 1660,
      "sell_average": 1223,
      "members": false,
      "buy_average": 1177,
      "name": "Ruby necklace",
      "sp": 2175
    },
    "1662": {
      "overall_average": 0,
      "id": 1662,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Diamond necklace",
      "sp": 3675
    },
    "1664": {
      "overall_average": 12300,
      "id": 1664,
      "sell_average": 11990,
      "members": true,
      "buy_average": 11946,
      "name": "Dragon necklace",
      "sp": 18375
    },
    "1673": {
      "overall_average": 134,
      "id": 1673,
      "sell_average": 133,
      "members": false,
      "buy_average": 128,
      "name": "Gold amulet (u)",
      "sp": 350
    },
    "1675": {
      "overall_average": 560,
      "id": 1675,
      "sell_average": 560,
      "members": false,
      "buy_average": 0,
      "name": "Sapphire amulet (u)",
      "sp": 900
    },
    "1677": {
      "overall_average": 700,
      "id": 1677,
      "sell_average": 700,
      "members": false,
      "buy_average": 700,
      "name": "Emerald amulet (u)",
      "sp": 1275
    },
    "1679": {
      "overall_average": 1402,
      "id": 1679,
      "sell_average": 1171,
      "members": false,
      "buy_average": 1171,
      "name": "Ruby amulet (u)",
      "sp": 2025
    },
    "1681": {
      "overall_average": 2074,
      "id": 1681,
      "sell_average": 1963,
      "members": false,
      "buy_average": 1961,
      "name": "Diamond amulet (u)",
      "sp": 3525
    },
    "1683": {
      "overall_average": 0,
      "id": 1683,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragonstone amulet (u)",
      "sp": 17625
    },
    "1692": {
      "overall_average": 95,
      "id": 1692,
      "sell_average": 95,
      "members": false,
      "buy_average": 95,
      "name": "Gold amulet",
      "sp": 350
    },
    "1694": {
      "overall_average": 580,
      "id": 1694,
      "sell_average": 557,
      "members": false,
      "buy_average": 535,
      "name": "Sapphire amulet",
      "sp": 900
    },
    "1696": {
      "overall_average": 726,
      "id": 1696,
      "sell_average": 725,
      "members": false,
      "buy_average": 725,
      "name": "Emerald amulet",
      "sp": 1275
    },
    "1698": {
      "overall_average": 1282,
      "id": 1698,
      "sell_average": 1282,
      "members": false,
      "buy_average": 1243,
      "name": "Ruby amulet",
      "sp": 2025
    },
    "1700": {
      "overall_average": 0,
      "id": 1700,
      "sell_average": 2049,
      "members": false,
      "buy_average": 2049,
      "name": "Diamond amulet",
      "sp": 3525
    },
    "1702": {
      "overall_average": 11944,
      "id": 1702,
      "sell_average": 11923,
      "members": true,
      "buy_average": 11899,
      "name": "Dragonstone amulet",
      "sp": 17625
    },
    "1704": {
      "overall_average": 12576,
      "id": 1704,
      "sell_average": 12502,
      "members": true,
      "buy_average": 12444,
      "name": "Amulet of glory",
      "sp": 17625
    },
    "1712": {
      "overall_average": 13025,
      "id": 1712,
      "sell_average": 13015,
      "members": true,
      "buy_average": 12986,
      "name": "Amulet of glory(4)",
      "sp": 17625
    },
    "1714": {
      "overall_average": 148,
      "id": 1714,
      "sell_average": 120,
      "members": false,
      "buy_average": 119,
      "name": "Unstrung symbol",
      "sp": 200
    },
    "1716": {
      "overall_average": 100,
      "id": 1716,
      "sell_average": 100,
      "members": false,
      "buy_average": 100,
      "name": "Unblessed symbol",
      "sp": 200
    },
    "1718": {
      "overall_average": 360,
      "id": 1718,
      "sell_average": 353,
      "members": false,
      "buy_average": 346,
      "name": "Holy symbol",
      "sp": 300
    },
    "1720": {
      "overall_average": 0,
      "id": 1720,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Unstrung emblem",
      "sp": 200
    },
    "1722": {
      "overall_average": 0,
      "id": 1722,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Unpowered symbol",
      "sp": 200
    },
    "1724": {
      "overall_average": 196,
      "id": 1724,
      "sell_average": 193,
      "members": true,
      "buy_average": 177,
      "name": "Unholy symbol",
      "sp": 200
    },
    "1725": {
      "overall_average": 1367,
      "id": 1725,
      "sell_average": 1353,
      "members": false,
      "buy_average": 1337,
      "name": "Amulet of strength",
      "sp": 2025
    },
    "1727": {
      "overall_average": 685,
      "id": 1727,
      "sell_average": 616,
      "members": false,
      "buy_average": 558,
      "name": "Amulet of magic",
      "sp": 900
    },
    "1729": {
      "overall_average": 914,
      "id": 1729,
      "sell_average": 927,
      "members": false,
      "buy_average": 927,
      "name": "Amulet of defence",
      "sp": 1275
    },
    "1731": {
      "overall_average": 2525,
      "id": 1731,
      "sell_average": 2824,
      "members": false,
      "buy_average": 3093,
      "name": "Amulet of power",
      "sp": 3525
    },
    "1733": {
      "overall_average": 3,
      "id": 1733,
      "sell_average": 3,
      "members": false,
      "buy_average": 2,
      "name": "Needle",
      "sp": 1
    },
    "1734": {
      "overall_average": 11,
      "id": 1734,
      "sell_average": 10,
      "members": false,
      "buy_average": 9,
      "name": "Thread",
      "sp": 1
    },
    "1735": {
      "overall_average": 0,
      "id": 1735,
      "sell_average": 30,
      "members": false,
      "buy_average": 30,
      "name": "Shears",
      "sp": 1
    },
    "1737": {
      "overall_average": 148,
      "id": 1737,
      "sell_average": 148,
      "members": false,
      "buy_average": 0,
      "name": "Wool",
      "sp": 1
    },
    "1739": {
      "overall_average": 68,
      "id": 1739,
      "sell_average": 69,
      "members": false,
      "buy_average": 70,
      "name": "Cowhide",
      "sp": 1
    },
    "1741": {
      "overall_average": 112,
      "id": 1741,
      "sell_average": 112,
      "members": false,
      "buy_average": 112,
      "name": "Leather",
      "sp": 1
    },
    "1743": {
      "overall_average": 115,
      "id": 1743,
      "sell_average": 101,
      "members": false,
      "buy_average": 100,
      "name": "Hard leather",
      "sp": 1
    },
    "1745": {
      "overall_average": 1719,
      "id": 1745,
      "sell_average": 1705,
      "members": true,
      "buy_average": 1687,
      "name": "Green dragon leather",
      "sp": 50
    },
    "1747": {
      "overall_average": 3073,
      "id": 1747,
      "sell_average": 3071,
      "members": true,
      "buy_average": 3068,
      "name": "Black dragonhide",
      "sp": 80
    },
    "1749": {
      "overall_average": 2384,
      "id": 1749,
      "sell_average": 2375,
      "members": true,
      "buy_average": 2356,
      "name": "Red dragonhide",
      "sp": 60
    },
    "1751": {
      "overall_average": 1869,
      "id": 1751,
      "sell_average": 1866,
      "members": true,
      "buy_average": 1864,
      "name": "Blue dragonhide",
      "sp": 40
    },
    "1753": {
      "overall_average": 1537,
      "id": 1753,
      "sell_average": 1535,
      "members": true,
      "buy_average": 1534,
      "name": "Green dragonhide",
      "sp": 20
    },
    "1755": {
      "overall_average": 117,
      "id": 1755,
      "sell_average": 115,
      "members": false,
      "buy_average": 107,
      "name": "Chisel",
      "sp": 1
    },
    "1757": {
      "overall_average": 371,
      "id": 1757,
      "sell_average": 324,
      "members": false,
      "buy_average": 289,
      "name": "Brown apron",
      "sp": 2
    },
    "1759": {
      "overall_average": 64,
      "id": 1759,
      "sell_average": 63,
      "members": false,
      "buy_average": 63,
      "name": "Ball of wool",
      "sp": 2
    },
    "1761": {
      "overall_average": 168,
      "id": 1761,
      "sell_average": 169,
      "members": false,
      "buy_average": 170,
      "name": "Soft clay",
      "sp": 2
    },
    "1763": {
      "overall_average": 352,
      "id": 1763,
      "sell_average": 322,
      "members": false,
      "buy_average": 314,
      "name": "Red dye",
      "sp": 5
    },
    "1765": {
      "overall_average": 346,
      "id": 1765,
      "sell_average": 344,
      "members": false,
      "buy_average": 315,
      "name": "Yellow dye",
      "sp": 5
    },
    "1767": {
      "overall_average": 240,
      "id": 1767,
      "sell_average": 240,
      "members": false,
      "buy_average": 240,
      "name": "Blue dye",
      "sp": 5
    },
    "1769": {
      "overall_average": 700,
      "id": 1769,
      "sell_average": 704,
      "members": false,
      "buy_average": 705,
      "name": "Orange dye",
      "sp": 5
    },
    "1771": {
      "overall_average": 406,
      "id": 1771,
      "sell_average": 454,
      "members": false,
      "buy_average": 456,
      "name": "Green dye",
      "sp": 5
    },
    "1773": {
      "overall_average": 556,
      "id": 1773,
      "sell_average": 556,
      "members": false,
      "buy_average": 381,
      "name": "Purple dye",
      "sp": 5
    },
    "1775": {
      "overall_average": 158,
      "id": 1775,
      "sell_average": 158,
      "members": true,
      "buy_average": 157,
      "name": "Molten glass",
      "sp": 3
    },
    "1777": {
      "overall_average": 130,
      "id": 1777,
      "sell_average": 130,
      "members": true,
      "buy_average": 129,
      "name": "Bow string",
      "sp": 10
    },
    "1779": {
      "overall_average": 2,
      "id": 1779,
      "sell_average": 2,
      "members": true,
      "buy_average": 2,
      "name": "Flax",
      "sp": 5
    },
    "1781": {
      "overall_average": 62,
      "id": 1781,
      "sell_average": 60,
      "members": true,
      "buy_average": 60,
      "name": "Soda ash",
      "sp": 2
    },
    "1783": {
      "overall_average": 65,
      "id": 1783,
      "sell_average": 64,
      "members": true,
      "buy_average": 63,
      "name": "Bucket of sand",
      "sp": 2
    },
    "1785": {
      "overall_average": 469,
      "id": 1785,
      "sell_average": 437,
      "members": true,
      "buy_average": 187,
      "name": "Glassblowing pipe",
      "sp": 2
    },
    "1787": {
      "overall_average": 0,
      "id": 1787,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Unfired pot",
      "sp": 1
    },
    "1789": {
      "overall_average": 0,
      "id": 1789,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Unfired pie dish",
      "sp": 3
    },
    "1791": {
      "overall_average": 300,
      "id": 1791,
      "sell_average": 300,
      "members": false,
      "buy_average": 0,
      "name": "Unfired bowl",
      "sp": 2
    },
    "1793": {
      "overall_average": 0,
      "id": 1793,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Woad leaf",
      "sp": 1
    },
    "1794": {
      "overall_average": 137,
      "id": 1794,
      "sell_average": 137,
      "members": true,
      "buy_average": 0,
      "name": "Bronze wire",
      "sp": 20
    },
    "1823": {
      "overall_average": 97,
      "id": 1823,
      "sell_average": 96,
      "members": true,
      "buy_average": 90,
      "name": "Waterskin(4)",
      "sp": 30
    },
    "1831": {
      "overall_average": 24,
      "id": 1831,
      "sell_average": 24,
      "members": true,
      "buy_average": 0,
      "name": "Waterskin(0)",
      "sp": 15
    },
    "1833": {
      "overall_average": 175,
      "id": 1833,
      "sell_average": 128,
      "members": true,
      "buy_average": 76,
      "name": "Desert shirt",
      "sp": 40
    },
    "1835": {
      "overall_average": 215,
      "id": 1835,
      "sell_average": 169,
      "members": true,
      "buy_average": 100,
      "name": "Desert robe",
      "sp": 40
    },
    "1837": {
      "overall_average": 128,
      "id": 1837,
      "sell_average": 101,
      "members": true,
      "buy_average": 74,
      "name": "Desert boots",
      "sp": 20
    },
    "1854": {
      "overall_average": 18,
      "id": 1854,
      "sell_average": 17,
      "members": true,
      "buy_average": 3,
      "name": "Shantay pass",
      "sp": 5
    },
    "1859": {
      "overall_average": 0,
      "id": 1859,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Raw ugthanki meat",
      "sp": 2
    },
    "1861": {
      "overall_average": 0,
      "id": 1861,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ugthanki meat",
      "sp": 5
    },
    "1865": {
      "overall_average": 0,
      "id": 1865,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Pitta bread",
      "sp": 10
    },
    "1869": {
      "overall_average": 0,
      "id": 1869,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Chopped tomato",
      "sp": 3
    },
    "1871": {
      "overall_average": 0,
      "id": 1871,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Chopped onion",
      "sp": 3
    },
    "1873": {
      "overall_average": 0,
      "id": 1873,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Chopped ugthanki",
      "sp": 5
    },
    "1875": {
      "overall_average": 0,
      "id": 1875,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Onion & tomato",
      "sp": 5
    },
    "1877": {
      "overall_average": 0,
      "id": 1877,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ugthanki & onion",
      "sp": 7
    },
    "1879": {
      "overall_average": 0,
      "id": 1879,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ugthanki & tomato",
      "sp": 7
    },
    "1881": {
      "overall_average": 0,
      "id": 1881,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Kebab mix",
      "sp": 9
    },
    "1885": {
      "overall_average": 0,
      "id": 1885,
      "sell_average": 630,
      "members": true,
      "buy_average": 630,
      "name": "Ugthanki kebab",
      "sp": 20
    },
    "1887": {
      "overall_average": 48,
      "id": 1887,
      "sell_average": 11,
      "members": false,
      "buy_average": 10,
      "name": "Cake tin",
      "sp": 10
    },
    "1891": {
      "overall_average": 298,
      "id": 1891,
      "sell_average": 273,
      "members": false,
      "buy_average": 267,
      "name": "Cake",
      "sp": 50
    },
    "1897": {
      "overall_average": 405,
      "id": 1897,
      "sell_average": 415,
      "members": false,
      "buy_average": 517,
      "name": "Chocolate cake",
      "sp": 70
    },
    "1905": {
      "overall_average": 115,
      "id": 1905,
      "sell_average": 115,
      "members": false,
      "buy_average": 0,
      "name": "Asgarnian ale",
      "sp": 2
    },
    "1907": {
      "overall_average": 138,
      "id": 1907,
      "sell_average": 138,
      "members": false,
      "buy_average": 0,
      "name": "Wizard's mind bomb",
      "sp": 2
    },
    "1909": {
      "overall_average": 819,
      "id": 1909,
      "sell_average": 877,
      "members": true,
      "buy_average": 907,
      "name": "Greenman's ale",
      "sp": 2
    },
    "1911": {
      "overall_average": 0,
      "id": 1911,
      "sell_average": 101,
      "members": true,
      "buy_average": 101,
      "name": "Dragon bitter",
      "sp": 2
    },
    "1913": {
      "overall_average": 82,
      "id": 1913,
      "sell_average": 77,
      "members": false,
      "buy_average": 51,
      "name": "Dwarven stout",
      "sp": 2
    },
    "1915": {
      "overall_average": 0,
      "id": 1915,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Grog",
      "sp": 3
    },
    "1917": {
      "overall_average": 56,
      "id": 1917,
      "sell_average": 56,
      "members": false,
      "buy_average": 54,
      "name": "Beer",
      "sp": 2
    },
    "1919": {
      "overall_average": 50,
      "id": 1919,
      "sell_average": 49,
      "members": false,
      "buy_average": 49,
      "name": "Beer glass",
      "sp": 2
    },
    "1921": {
      "overall_average": 49,
      "id": 1921,
      "sell_average": 49,
      "members": false,
      "buy_average": 48,
      "name": "Bowl of water",
      "sp": 4
    },
    "1923": {
      "overall_average": 26,
      "id": 1923,
      "sell_average": 25,
      "members": false,
      "buy_average": 25,
      "name": "Bowl",
      "sp": 4
    },
    "1925": {
      "overall_average": 64,
      "id": 1925,
      "sell_average": 63,
      "members": false,
      "buy_average": 63,
      "name": "Bucket",
      "sp": 2
    },
    "1927": {
      "overall_average": 54,
      "id": 1927,
      "sell_average": 52,
      "members": false,
      "buy_average": 52,
      "name": "Bucket of milk",
      "sp": 6
    },
    "1929": {
      "overall_average": 118,
      "id": 1929,
      "sell_average": 65,
      "members": false,
      "buy_average": 61,
      "name": "Bucket of water",
      "sp": 6
    },
    "1931": {
      "overall_average": 5,
      "id": 1931,
      "sell_average": 4,
      "members": false,
      "buy_average": 4,
      "name": "Pot",
      "sp": 1
    },
    "1933": {
      "overall_average": 142,
      "id": 1933,
      "sell_average": 144,
      "members": false,
      "buy_average": 144,
      "name": "Pot of flour",
      "sp": 10
    },
    "1935": {
      "overall_average": 0,
      "id": 1935,
      "sell_average": 2,
      "members": false,
      "buy_average": 2,
      "name": "Jug",
      "sp": 1
    },
    "1937": {
      "overall_average": 15,
      "id": 1937,
      "sell_average": 15,
      "members": false,
      "buy_average": 15,
      "name": "Jug of water",
      "sp": 1
    },
    "1939": {
      "overall_average": 15,
      "id": 1939,
      "sell_average": 15,
      "members": true,
      "buy_average": 14,
      "name": "Swamp tar",
      "sp": 1
    },
    "1941": {
      "overall_average": 104,
      "id": 1941,
      "sell_average": 106,
      "members": true,
      "buy_average": 106,
      "name": "Swamp paste",
      "sp": 30
    },
    "1942": {
      "overall_average": 26,
      "id": 1942,
      "sell_average": 25,
      "members": false,
      "buy_average": 23,
      "name": "Potato",
      "sp": 1
    },
    "1944": {
      "overall_average": 79,
      "id": 1944,
      "sell_average": 77,
      "members": false,
      "buy_average": 77,
      "name": "Egg",
      "sp": 4
    },
    "1947": {
      "overall_average": 48,
      "id": 1947,
      "sell_average": 49,
      "members": false,
      "buy_average": 50,
      "name": "Grain",
      "sp": 2
    },
    "1949": {
      "overall_average": 139,
      "id": 1949,
      "sell_average": 137,
      "members": false,
      "buy_average": 137,
      "name": "Chef's hat",
      "sp": 2
    },
    "1951": {
      "overall_average": 42,
      "id": 1951,
      "sell_average": 42,
      "members": false,
      "buy_average": 35,
      "name": "Redberries",
      "sp": 3
    },
    "1953": {
      "overall_average": 246,
      "id": 1953,
      "sell_average": 240,
      "members": false,
      "buy_average": 230,
      "name": "Pastry dough",
      "sp": 1
    },
    "1955": {
      "overall_average": 85,
      "id": 1955,
      "sell_average": 83,
      "members": false,
      "buy_average": 77,
      "name": "Cooking apple",
      "sp": 1
    },
    "1957": {
      "overall_average": 31,
      "id": 1957,
      "sell_average": 31,
      "members": false,
      "buy_average": 31,
      "name": "Onion",
      "sp": 3
    },
    "1959": {
      "overall_average": 0,
      "id": 1959,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Pumpkin",
      "sp": 30
    },
    "1961": {
      "overall_average": 0,
      "id": 1961,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Easter egg",
      "sp": 10
    },
    "1963": {
      "overall_average": 65,
      "id": 1963,
      "sell_average": 64,
      "members": false,
      "buy_average": 60,
      "name": "Banana",
      "sp": 2
    },
    "1965": {
      "overall_average": 31,
      "id": 1965,
      "sell_average": 31,
      "members": false,
      "buy_average": 29,
      "name": "Cabbage",
      "sp": 1
    },
    "1969": {
      "overall_average": 126,
      "id": 1969,
      "sell_average": 128,
      "members": false,
      "buy_average": 128,
      "name": "Spinach roll",
      "sp": 1
    },
    "1971": {
      "overall_average": 48,
      "id": 1971,
      "sell_average": 45,
      "members": false,
      "buy_average": 45,
      "name": "Kebab",
      "sp": 3
    },
    "1973": {
      "overall_average": 52,
      "id": 1973,
      "sell_average": 51,
      "members": false,
      "buy_average": 51,
      "name": "Chocolate bar",
      "sp": 10
    },
    "1975": {
      "overall_average": 73,
      "id": 1975,
      "sell_average": 72,
      "members": false,
      "buy_average": 69,
      "name": "Chocolate dust",
      "sp": 2
    },
    "1978": {
      "overall_average": 21,
      "id": 1978,
      "sell_average": 17,
      "members": true,
      "buy_average": 17,
      "name": "Cup of tea",
      "sp": 10
    },
    "1980": {
      "overall_average": 32,
      "id": 1980,
      "sell_average": 29,
      "members": true,
      "buy_average": 28,
      "name": "Empty cup",
      "sp": 2
    },
    "1982": {
      "overall_average": 90,
      "id": 1982,
      "sell_average": 89,
      "members": false,
      "buy_average": 87,
      "name": "Tomato",
      "sp": 4
    },
    "1985": {
      "overall_average": 48,
      "id": 1985,
      "sell_average": 44,
      "members": false,
      "buy_average": 42,
      "name": "Cheese",
      "sp": 4
    },
    "1987": {
      "overall_average": 137,
      "id": 1987,
      "sell_average": 136,
      "members": false,
      "buy_average": 135,
      "name": "Grapes",
      "sp": 1
    },
    "1989": {
      "overall_average": 0,
      "id": 1989,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Half full wine jug",
      "sp": 1
    },
    "1993": {
      "overall_average": 3,
      "id": 1993,
      "sell_average": 3,
      "members": false,
      "buy_average": 3,
      "name": "Jug of wine",
      "sp": 1
    },
    "2003": {
      "overall_average": 115,
      "id": 2003,
      "sell_average": 115,
      "members": false,
      "buy_average": 106,
      "name": "Stew",
      "sp": 20
    },
    "2007": {
      "overall_average": 151,
      "id": 2007,
      "sell_average": 150,
      "members": true,
      "buy_average": 150,
      "name": "Spice",
      "sp": 230
    },
    "2011": {
      "overall_average": 699,
      "id": 2011,
      "sell_average": 667,
      "members": true,
      "buy_average": 542,
      "name": "Curry",
      "sp": 20
    },
    "2015": {
      "overall_average": 300,
      "id": 2015,
      "sell_average": 300,
      "members": true,
      "buy_average": 300,
      "name": "Vodka",
      "sp": 5
    },
    "2017": {
      "overall_average": 0,
      "id": 2017,
      "sell_average": 205,
      "members": true,
      "buy_average": 205,
      "name": "Whisky",
      "sp": 5
    },
    "2019": {
      "overall_average": 0,
      "id": 2019,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gin",
      "sp": 5
    },
    "2021": {
      "overall_average": 0,
      "id": 2021,
      "sell_average": 500,
      "members": true,
      "buy_average": 500,
      "name": "Brandy",
      "sp": 5
    },
    "2023": {
      "overall_average": 2,
      "id": 2023,
      "sell_average": 2,
      "members": true,
      "buy_average": 0,
      "name": "Cocktail guide",
      "sp": 2
    },
    "2025": {
      "overall_average": 500,
      "id": 2025,
      "sell_average": 382,
      "members": true,
      "buy_average": 30,
      "name": "Cocktail shaker",
      "sp": 2
    },
    "2026": {
      "overall_average": 122,
      "id": 2026,
      "sell_average": 113,
      "members": true,
      "buy_average": 109,
      "name": "Cocktail glass",
      "sp": 1
    },
    "2028": {
      "overall_average": 242,
      "id": 2028,
      "sell_average": 228,
      "members": true,
      "buy_average": 162,
      "name": "Premade blurb' sp.",
      "sp": 30
    },
    "2030": {
      "overall_average": 0,
      "id": 2030,
      "sell_average": 30,
      "members": true,
      "buy_average": 30,
      "name": "Premade choc s'dy",
      "sp": 30
    },
    "2032": {
      "overall_average": 0,
      "id": 2032,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade dr' dragon",
      "sp": 30
    },
    "2034": {
      "overall_average": 0,
      "id": 2034,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade fr' blast",
      "sp": 30
    },
    "2036": {
      "overall_average": 0,
      "id": 2036,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade p' punch",
      "sp": 30
    },
    "2038": {
      "overall_average": 0,
      "id": 2038,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade sgg",
      "sp": 30
    },
    "2040": {
      "overall_average": 0,
      "id": 2040,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade wiz blz'd",
      "sp": 30
    },
    "2048": {
      "overall_average": 0,
      "id": 2048,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Pineapple punch",
      "sp": 30
    },
    "2054": {
      "overall_average": 0,
      "id": 2054,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Wizard blizzard",
      "sp": 30
    },
    "2064": {
      "overall_average": 1736,
      "id": 2064,
      "sell_average": 1736,
      "members": true,
      "buy_average": 0,
      "name": "Blurberry special",
      "sp": 30
    },
    "2074": {
      "overall_average": 0,
      "id": 2074,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Choc saturday",
      "sp": 30
    },
    "2080": {
      "overall_average": 0,
      "id": 2080,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Short green guy",
      "sp": 30
    },
    "2084": {
      "overall_average": 1700,
      "id": 2084,
      "sell_average": 1467,
      "members": true,
      "buy_average": 1002,
      "name": "Fruit blast",
      "sp": 30
    },
    "2092": {
      "overall_average": 0,
      "id": 2092,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Drunk dragon",
      "sp": 30
    },
    "2102": {
      "overall_average": 114,
      "id": 2102,
      "sell_average": 112,
      "members": true,
      "buy_average": 100,
      "name": "Lemon",
      "sp": 2
    },
    "2104": {
      "overall_average": 0,
      "id": 2104,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Lemon chunks",
      "sp": 2
    },
    "2106": {
      "overall_average": 0,
      "id": 2106,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Lemon slices",
      "sp": 2
    },
    "2108": {
      "overall_average": 130,
      "id": 2108,
      "sell_average": 130,
      "members": true,
      "buy_average": 0,
      "name": "Orange",
      "sp": 2
    },
    "2110": {
      "overall_average": 0,
      "id": 2110,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Orange chunks",
      "sp": 2
    },
    "2112": {
      "overall_average": 375,
      "id": 2112,
      "sell_average": 375,
      "members": true,
      "buy_average": 0,
      "name": "Orange slices",
      "sp": 2
    },
    "2114": {
      "overall_average": 219,
      "id": 2114,
      "sell_average": 218,
      "members": true,
      "buy_average": 214,
      "name": "Pineapple",
      "sp": 2
    },
    "2116": {
      "overall_average": 350,
      "id": 2116,
      "sell_average": 350,
      "members": true,
      "buy_average": 0,
      "name": "Pineapple chunks",
      "sp": 1
    },
    "2118": {
      "overall_average": 0,
      "id": 2118,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Pineapple ring",
      "sp": 1
    },
    "2120": {
      "overall_average": 70,
      "id": 2120,
      "sell_average": 70,
      "members": true,
      "buy_average": 0,
      "name": "Lime",
      "sp": 2
    },
    "2122": {
      "overall_average": 0,
      "id": 2122,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Lime chunks",
      "sp": 1
    },
    "2124": {
      "overall_average": 0,
      "id": 2124,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Lime slices",
      "sp": 2
    },
    "2126": {
      "overall_average": 103,
      "id": 2126,
      "sell_average": 112,
      "members": true,
      "buy_average": 139,
      "name": "Dwellberries",
      "sp": 4
    },
    "2128": {
      "overall_average": 92,
      "id": 2128,
      "sell_average": 90,
      "members": true,
      "buy_average": 88,
      "name": "Equa leaves",
      "sp": 2
    },
    "2130": {
      "overall_average": 6,
      "id": 2130,
      "sell_average": 5,
      "members": true,
      "buy_average": 5,
      "name": "Pot of cream",
      "sp": 2
    },
    "2132": {
      "overall_average": 33,
      "id": 2132,
      "sell_average": 34,
      "members": false,
      "buy_average": 37,
      "name": "Raw beef",
      "sp": 1
    },
    "2134": {
      "overall_average": 20,
      "id": 2134,
      "sell_average": 17,
      "members": false,
      "buy_average": 17,
      "name": "Raw rat meat",
      "sp": 1
    },
    "2136": {
      "overall_average": 350,
      "id": 2136,
      "sell_average": 243,
      "members": false,
      "buy_average": 240,
      "name": "Raw bear meat",
      "sp": 1
    },
    "2138": {
      "overall_average": 48,
      "id": 2138,
      "sell_average": 43,
      "members": false,
      "buy_average": 40,
      "name": "Raw chicken",
      "sp": 1
    },
    "2140": {
      "overall_average": 94,
      "id": 2140,
      "sell_average": 76,
      "members": false,
      "buy_average": 54,
      "name": "Cooked chicken",
      "sp": 4
    },
    "2142": {
      "overall_average": 24,
      "id": 2142,
      "sell_average": 21,
      "members": false,
      "buy_average": 17,
      "name": "Cooked meat",
      "sp": 4
    },
    "2150": {
      "overall_average": 0,
      "id": 2150,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Swamp toad",
      "sp": 2
    },
    "2152": {
      "overall_average": 224,
      "id": 2152,
      "sell_average": 210,
      "members": true,
      "buy_average": 203,
      "name": "Toad's legs",
      "sp": 2
    },
    "2162": {
      "overall_average": 0,
      "id": 2162,
      "sell_average": 442,
      "members": true,
      "buy_average": 442,
      "name": "King worm",
      "sp": 2
    },
    "2164": {
      "overall_average": 0,
      "id": 2164,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Batta tin",
      "sp": 10
    },
    "2165": {
      "overall_average": 0,
      "id": 2165,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Crunchy tray",
      "sp": 10
    },
    "2166": {
      "overall_average": 171,
      "id": 2166,
      "sell_average": 171,
      "members": true,
      "buy_average": 0,
      "name": "Gnomebowl mould",
      "sp": 10
    },
    "2167": {
      "overall_average": 0,
      "id": 2167,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gianne's cook book",
      "sp": 2
    },
    "2169": {
      "overall_average": 50,
      "id": 2169,
      "sell_average": 50,
      "members": true,
      "buy_average": 50,
      "name": "Gnome spice",
      "sp": 2
    },
    "2171": {
      "overall_average": 20,
      "id": 2171,
      "sell_average": 4,
      "members": true,
      "buy_average": 4,
      "name": "Gianne dough",
      "sp": 2
    },
    "2185": {
      "overall_average": 0,
      "id": 2185,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Chocolate bomb",
      "sp": 2
    },
    "2187": {
      "overall_average": 0,
      "id": 2187,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Tangled toad's legs",
      "sp": 2
    },
    "2191": {
      "overall_average": 0,
      "id": 2191,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Worm hole",
      "sp": 2
    },
    "2195": {
      "overall_average": 0,
      "id": 2195,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Veg ball",
      "sp": 2
    },
    "2203": {
      "overall_average": 0,
      "id": 2203,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rock-climbing boots",
      "sp": 1
    },
    "2205": {
      "overall_average": 0,
      "id": 2205,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Worm crunchies",
      "sp": 2
    },
    "2209": {
      "overall_average": 0,
      "id": 2209,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Chocchip crunchies",
      "sp": 2
    },
    "2213": {
      "overall_average": 0,
      "id": 2213,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Spicy crunchies",
      "sp": 2
    },
    "2217": {
      "overall_average": 1579,
      "id": 2217,
      "sell_average": 1579,
      "members": true,
      "buy_average": 0,
      "name": "Toad crunchies",
      "sp": 2
    },
    "2219": {
      "overall_average": 0,
      "id": 2219,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade w'm batta",
      "sp": 120
    },
    "2221": {
      "overall_average": 0,
      "id": 2221,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade t'd batta",
      "sp": 120
    },
    "2223": {
      "overall_average": 0,
      "id": 2223,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade c+t batta",
      "sp": 120
    },
    "2225": {
      "overall_average": 0,
      "id": 2225,
      "sell_average": 1000,
      "members": true,
      "buy_average": 1000,
      "name": "Premade fr't batta",
      "sp": 120
    },
    "2227": {
      "overall_average": 0,
      "id": 2227,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade veg batta",
      "sp": 120
    },
    "2229": {
      "overall_average": 0,
      "id": 2229,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade choc bomb",
      "sp": 160
    },
    "2231": {
      "overall_average": 0,
      "id": 2231,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade ttl",
      "sp": 160
    },
    "2233": {
      "overall_average": 0,
      "id": 2233,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade worm hole",
      "sp": 150
    },
    "2235": {
      "overall_average": 0,
      "id": 2235,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade veg ball",
      "sp": 150
    },
    "2237": {
      "overall_average": 0,
      "id": 2237,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade w'm crun'",
      "sp": 85
    },
    "2239": {
      "overall_average": 0,
      "id": 2239,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade ch' crunch",
      "sp": 85
    },
    "2241": {
      "overall_average": 0,
      "id": 2241,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Premade s'y crunch",
      "sp": 85
    },
    "2243": {
      "overall_average": 0,
      "id": 2243,
      "sell_average": 351,
      "members": true,
      "buy_average": 351,
      "name": "Premade t'd crunch",
      "sp": 85
    },
    "2253": {
      "overall_average": 0,
      "id": 2253,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Worm batta",
      "sp": 1
    },
    "2255": {
      "overall_average": 0,
      "id": 2255,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Toad batta",
      "sp": 2
    },
    "2259": {
      "overall_average": 0,
      "id": 2259,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cheese+tom batta",
      "sp": 2
    },
    "2277": {
      "overall_average": 0,
      "id": 2277,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fruit batta",
      "sp": 2
    },
    "2281": {
      "overall_average": 0,
      "id": 2281,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Vegetable batta",
      "sp": 2
    },
    "2283": {
      "overall_average": 171,
      "id": 2283,
      "sell_average": 170,
      "members": false,
      "buy_average": 167,
      "name": "Pizza base",
      "sp": 4
    },
    "2289": {
      "overall_average": 453,
      "id": 2289,
      "sell_average": 453,
      "members": false,
      "buy_average": 454,
      "name": "Plain pizza",
      "sp": 40
    },
    "2293": {
      "overall_average": 517,
      "id": 2293,
      "sell_average": 515,
      "members": false,
      "buy_average": 514,
      "name": "Meat pizza",
      "sp": 50
    },
    "2297": {
      "overall_average": 580,
      "id": 2297,
      "sell_average": 574,
      "members": false,
      "buy_average": 573,
      "name": "Anchovy pizza",
      "sp": 60
    },
    "2301": {
      "overall_average": 753,
      "id": 2301,
      "sell_average": 751,
      "members": true,
      "buy_average": 734,
      "name": "Pineapple pizza",
      "sp": 100
    },
    "2307": {
      "overall_average": 1046,
      "id": 2307,
      "sell_average": 384,
      "members": false,
      "buy_average": 135,
      "name": "Bread dough",
      "sp": 4
    },
    "2309": {
      "overall_average": 205,
      "id": 2309,
      "sell_average": 201,
      "members": false,
      "buy_average": 188,
      "name": "Bread",
      "sp": 12
    },
    "2313": {
      "overall_average": 155,
      "id": 2313,
      "sell_average": 152,
      "members": false,
      "buy_average": 149,
      "name": "Pie dish",
      "sp": 3
    },
    "2315": {
      "overall_average": 495,
      "id": 2315,
      "sell_average": 484,
      "members": false,
      "buy_average": 482,
      "name": "Pie shell",
      "sp": 4
    },
    "2317": {
      "overall_average": 634,
      "id": 2317,
      "sell_average": 539,
      "members": false,
      "buy_average": 453,
      "name": "Uncooked apple pie",
      "sp": 16
    },
    "2319": {
      "overall_average": 0,
      "id": 2319,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Uncooked meat pie",
      "sp": 8
    },
    "2321": {
      "overall_average": 0,
      "id": 2321,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Uncooked berry pie",
      "sp": 6
    },
    "2323": {
      "overall_average": 0,
      "id": 2323,
      "sell_average": 129,
      "members": false,
      "buy_average": 129,
      "name": "Apple pie",
      "sp": 30
    },
    "2325": {
      "overall_average": 384,
      "id": 2325,
      "sell_average": 365,
      "members": false,
      "buy_average": 228,
      "name": "Redberry pie",
      "sp": 12
    },
    "2327": {
      "overall_average": 100,
      "id": 2327,
      "sell_average": 88,
      "members": false,
      "buy_average": 83,
      "name": "Meat pie",
      "sp": 15
    },
    "2337": {
      "overall_average": 0,
      "id": 2337,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Raw oomlie",
      "sp": 10
    },
    "2341": {
      "overall_average": 326,
      "id": 2341,
      "sell_average": 326,
      "members": true,
      "buy_average": 0,
      "name": "Wrapped oomlie",
      "sp": 16
    },
    "2343": {
      "overall_average": 5307,
      "id": 2343,
      "sell_average": 5307,
      "members": true,
      "buy_average": 0,
      "name": "Cooked oomlie wrap",
      "sp": 35
    },
    "2347": {
      "overall_average": 49,
      "id": 2347,
      "sell_average": 49,
      "members": false,
      "buy_average": 47,
      "name": "Hammer",
      "sp": 1
    },
    "2349": {
      "overall_average": 144,
      "id": 2349,
      "sell_average": 146,
      "members": false,
      "buy_average": 147,
      "name": "Bronze bar",
      "sp": 8
    },
    "2351": {
      "overall_average": 227,
      "id": 2351,
      "sell_average": 222,
      "members": false,
      "buy_average": 216,
      "name": "Iron bar",
      "sp": 28
    },
    "2353": {
      "overall_average": 447,
      "id": 2353,
      "sell_average": 447,
      "members": false,
      "buy_average": 446,
      "name": "Steel bar",
      "sp": 100
    },
    "2355": {
      "overall_average": 117,
      "id": 2355,
      "sell_average": 113,
      "members": false,
      "buy_average": 113,
      "name": "Silver bar",
      "sp": 150
    },
    "2357": {
      "overall_average": 92,
      "id": 2357,
      "sell_average": 92,
      "members": false,
      "buy_average": 91,
      "name": "Gold bar",
      "sp": 300
    },
    "2359": {
      "overall_average": 741,
      "id": 2359,
      "sell_average": 737,
      "members": false,
      "buy_average": 734,
      "name": "Mithril bar",
      "sp": 300
    },
    "2361": {
      "overall_average": 2110,
      "id": 2361,
      "sell_average": 2110,
      "members": false,
      "buy_average": 2110,
      "name": "Adamantite bar",
      "sp": 640
    },
    "2363": {
      "overall_average": 12365,
      "id": 2363,
      "sell_average": 12355,
      "members": false,
      "buy_average": 12351,
      "name": "Runite bar",
      "sp": 5000
    },
    "2366": {
      "overall_average": 65500,
      "id": 2366,
      "sell_average": 65500,
      "members": true,
      "buy_average": 65500,
      "name": "Shield left half",
      "sp": 110000
    },
    "2368": {
      "overall_average": 0,
      "id": 2368,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Shield right half",
      "sp": 500000
    },
    "2370": {
      "overall_average": 408,
      "id": 2370,
      "sell_average": 405,
      "members": true,
      "buy_average": 394,
      "name": "Steel studs",
      "sp": 150
    },
    "2428": {
      "overall_average": 2,
      "id": 2428,
      "sell_average": 2,
      "members": true,
      "buy_average": 2,
      "name": "Attack potion(4)",
      "sp": 15
    },
    "2430": {
      "overall_average": 204,
      "id": 2430,
      "sell_average": 199,
      "members": true,
      "buy_average": 188,
      "name": "Restore potion(4)",
      "sp": 110
    },
    "2432": {
      "overall_average": 574,
      "id": 2432,
      "sell_average": 566,
      "members": true,
      "buy_average": 499,
      "name": "Defence potion(4)",
      "sp": 150
    },
    "2434": {
      "overall_average": 9187,
      "id": 2434,
      "sell_average": 9179,
      "members": true,
      "buy_average": 9170,
      "name": "Prayer potion(4)",
      "sp": 190
    },
    "2436": {
      "overall_average": 315,
      "id": 2436,
      "sell_average": 315,
      "members": true,
      "buy_average": 312,
      "name": "Super attack(4)",
      "sp": 225
    },
    "2438": {
      "overall_average": 75,
      "id": 2438,
      "sell_average": 75,
      "members": true,
      "buy_average": 0,
      "name": "Fishing potion(4)",
      "sp": 250
    },
    "2440": {
      "overall_average": 2066,
      "id": 2440,
      "sell_average": 2057,
      "members": true,
      "buy_average": 2043,
      "name": "Super strength(4)",
      "sp": 275
    },
    "2442": {
      "overall_average": 2011,
      "id": 2442,
      "sell_average": 2012,
      "members": true,
      "buy_average": 2012,
      "name": "Super defence(4)",
      "sp": 330
    },
    "2444": {
      "overall_average": 3528,
      "id": 2444,
      "sell_average": 3514,
      "members": true,
      "buy_average": 3489,
      "name": "Ranging potion(4)",
      "sp": 360
    },
    "2446": {
      "overall_average": 192,
      "id": 2446,
      "sell_average": 188,
      "members": true,
      "buy_average": 185,
      "name": "Antipoison(4)",
      "sp": 360
    },
    "2448": {
      "overall_average": 513,
      "id": 2448,
      "sell_average": 561,
      "members": true,
      "buy_average": 702,
      "name": "Superantipoison(4)",
      "sp": 360
    },
    "2450": {
      "overall_average": 4999,
      "id": 2450,
      "sell_average": 3186,
      "members": true,
      "buy_average": 2851,
      "name": "Zamorak brew(4)",
      "sp": 200
    },
    "2452": {
      "overall_average": 389,
      "id": 2452,
      "sell_average": 378,
      "members": true,
      "buy_average": 355,
      "name": "Antifire potion(4)",
      "sp": 330
    },
    "2454": {
      "overall_average": 313,
      "id": 2454,
      "sell_average": 296,
      "members": true,
      "buy_average": 296,
      "name": "Antifire potion(3)",
      "sp": 264
    },
    "2456": {
      "overall_average": 481,
      "id": 2456,
      "sell_average": 503,
      "members": true,
      "buy_average": 504,
      "name": "Antifire potion(2)",
      "sp": 198
    },
    "2458": {
      "overall_average": 257,
      "id": 2458,
      "sell_average": 251,
      "members": true,
      "buy_average": 243,
      "name": "Antifire potion(1)",
      "sp": 132
    },
    "2460": {
      "overall_average": 0,
      "id": 2460,
      "sell_average": 24,
      "members": true,
      "buy_average": 24,
      "name": "Assorted flowers",
      "sp": 100
    },
    "2462": {
      "overall_average": 30,
      "id": 2462,
      "sell_average": 31,
      "members": true,
      "buy_average": 43,
      "name": "Red flowers",
      "sp": 100
    },
    "2464": {
      "overall_average": 10,
      "id": 2464,
      "sell_average": 10,
      "members": true,
      "buy_average": 10,
      "name": "Blue flowers",
      "sp": 100
    },
    "2466": {
      "overall_average": 0,
      "id": 2466,
      "sell_average": 2,
      "members": true,
      "buy_average": 2,
      "name": "Yellow flowers",
      "sp": 100
    },
    "2468": {
      "overall_average": 0,
      "id": 2468,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Purple flowers",
      "sp": 100
    },
    "2470": {
      "overall_average": 19,
      "id": 2470,
      "sell_average": 18,
      "members": true,
      "buy_average": 7,
      "name": "Orange flowers",
      "sp": 100
    },
    "2472": {
      "overall_average": 0,
      "id": 2472,
      "sell_average": 2,
      "members": true,
      "buy_average": 2,
      "name": "Mixed flowers",
      "sp": 100
    },
    "2474": {
      "overall_average": 195000,
      "id": 2474,
      "sell_average": 195000,
      "members": true,
      "buy_average": 0,
      "name": "White flowers",
      "sp": 100
    },
    "2476": {
      "overall_average": 0,
      "id": 2476,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black flowers",
      "sp": 100
    },
    "2481": {
      "overall_average": 0,
      "id": 2481,
      "sell_average": 1726,
      "members": true,
      "buy_average": 1726,
      "name": "Lantadyme",
      "sp": 68
    },
    "2483": {
      "overall_average": 1888,
      "id": 2483,
      "sell_average": 1887,
      "members": true,
      "buy_average": 1870,
      "name": "Lantadyme potion (unf)",
      "sp": 68
    },
    "2485": {
      "overall_average": 1744,
      "id": 2485,
      "sell_average": 1742,
      "members": true,
      "buy_average": 1739,
      "name": "Grimy lantadyme",
      "sp": 23
    },
    "2487": {
      "overall_average": 1756,
      "id": 2487,
      "sell_average": 1590,
      "members": true,
      "buy_average": 1562,
      "name": "Blue d'hide vamb",
      "sp": 3000
    },
    "2489": {
      "overall_average": 2119,
      "id": 2489,
      "sell_average": 2013,
      "members": true,
      "buy_average": 1964,
      "name": "Red d'hide vamb",
      "sp": 3600
    },
    "2491": {
      "overall_average": 2425,
      "id": 2491,
      "sell_average": 2332,
      "members": true,
      "buy_average": 2282,
      "name": "Black d'hide vamb",
      "sp": 4320
    },
    "2493": {
      "overall_average": 2450,
      "id": 2493,
      "sell_average": 2258,
      "members": true,
      "buy_average": 2208,
      "name": "Blue d'hide chaps",
      "sp": 4320
    },
    "2495": {
      "overall_average": 4206,
      "id": 2495,
      "sell_average": 3947,
      "members": true,
      "buy_average": 3570,
      "name": "Red d'hide chaps",
      "sp": 5180
    },
    "2497": {
      "overall_average": 5584,
      "id": 2497,
      "sell_average": 5502,
      "members": true,
      "buy_average": 5438,
      "name": "Black d'hide chaps",
      "sp": 6220
    },
    "2499": {
      "overall_average": 5239,
      "id": 2499,
      "sell_average": 5218,
      "members": true,
      "buy_average": 5206,
      "name": "Blue d'hide body",
      "sp": 9360
    },
    "2501": {
      "overall_average": 6421,
      "id": 2501,
      "sell_average": 6403,
      "members": true,
      "buy_average": 6392,
      "name": "Red d'hide body",
      "sp": 11230
    },
    "2503": {
      "overall_average": 7615,
      "id": 2503,
      "sell_average": 7617,
      "members": true,
      "buy_average": 7625,
      "name": "Black d'hide body",
      "sp": 13480
    },
    "2505": {
      "overall_average": 2042,
      "id": 2505,
      "sell_average": 2038,
      "members": true,
      "buy_average": 2033,
      "name": "Blue dragon leather",
      "sp": 70
    },
    "2507": {
      "overall_average": 2537,
      "id": 2507,
      "sell_average": 2534,
      "members": true,
      "buy_average": 2531,
      "name": "Red dragon leather",
      "sp": 90
    },
    "2509": {
      "overall_average": 3283,
      "id": 2509,
      "sell_average": 3275,
      "members": true,
      "buy_average": 3248,
      "name": "Black dragon leather",
      "sp": 110
    },
    "2520": {
      "overall_average": 0,
      "id": 2520,
      "sell_average": 500,
      "members": false,
      "buy_average": 500,
      "name": "Brown toy horsey",
      "sp": 100
    },
    "2522": {
      "overall_average": 0,
      "id": 2522,
      "sell_average": 500,
      "members": false,
      "buy_average": 500,
      "name": "White toy horsey",
      "sp": 100
    },
    "2524": {
      "overall_average": 0,
      "id": 2524,
      "sell_average": 12,
      "members": false,
      "buy_average": 12,
      "name": "Black toy horsey",
      "sp": 100
    },
    "2526": {
      "overall_average": 0,
      "id": 2526,
      "sell_average": 500,
      "members": false,
      "buy_average": 500,
      "name": "Grey toy horsey",
      "sp": 100
    },
    "2550": {
      "overall_average": 993,
      "id": 2550,
      "sell_average": 993,
      "members": true,
      "buy_average": 987,
      "name": "Ring of recoil",
      "sp": 900
    },
    "2552": {
      "overall_average": 944,
      "id": 2552,
      "sell_average": 937,
      "members": true,
      "buy_average": 914,
      "name": "Ring of dueling(8)",
      "sp": 1275
    },
    "2568": {
      "overall_average": 1003,
      "id": 2568,
      "sell_average": 1007,
      "members": true,
      "buy_average": 1022,
      "name": "Ring of forging",
      "sp": 2025
    },
    "2570": {
      "overall_average": 1996,
      "id": 2570,
      "sell_average": 1956,
      "members": true,
      "buy_average": 1911,
      "name": "Ring of life",
      "sp": 3525
    },
    "2572": {
      "overall_average": 12079,
      "id": 2572,
      "sell_average": 11621,
      "members": true,
      "buy_average": 11585,
      "name": "Ring of wealth",
      "sp": 17625
    },
    "2577": {
      "overall_average": 33697142,
      "id": 2577,
      "sell_average": 33681818,
      "members": true,
      "buy_average": 33655000,
      "name": "Ranger boots",
      "sp": 200
    },
    "2579": {
      "overall_average": 420740,
      "id": 2579,
      "sell_average": 414615,
      "members": true,
      "buy_average": 410328,
      "name": "Wizard boots",
      "sp": 200
    },
    "2581": {
      "overall_average": 1784519,
      "id": 2581,
      "sell_average": 1782699,
      "members": true,
      "buy_average": 1779666,
      "name": "Robin hood hat",
      "sp": 450
    },
    "2583": {
      "overall_average": 30993,
      "id": 2583,
      "sell_average": 30993,
      "members": false,
      "buy_average": 0,
      "name": "Black platebody (t)",
      "sp": 3840
    },
    "2585": {
      "overall_average": 25000,
      "id": 2585,
      "sell_average": 22415,
      "members": false,
      "buy_average": 21123,
      "name": "Black platelegs (t)",
      "sp": 1920
    },
    "2587": {
      "overall_average": 0,
      "id": 2587,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black full helm (t)",
      "sp": 1056
    },
    "2589": {
      "overall_average": 39999,
      "id": 2589,
      "sell_average": 39999,
      "members": false,
      "buy_average": 0,
      "name": "Black kiteshield (t)",
      "sp": 1632
    },
    "2591": {
      "overall_average": 0,
      "id": 2591,
      "sell_average": 231068,
      "members": false,
      "buy_average": 231068,
      "name": "Black platebody (g)",
      "sp": 3840
    },
    "2593": {
      "overall_average": 0,
      "id": 2593,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black platelegs (g)",
      "sp": 1920
    },
    "2595": {
      "overall_average": 0,
      "id": 2595,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black full helm (g)",
      "sp": 1056
    },
    "2597": {
      "overall_average": 0,
      "id": 2597,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black kiteshield (g)",
      "sp": 1632
    },
    "2599": {
      "overall_average": 10544,
      "id": 2599,
      "sell_average": 10407,
      "members": false,
      "buy_average": 10373,
      "name": "Adamant platebody (t)",
      "sp": 16640
    },
    "2601": {
      "overall_average": 3868,
      "id": 2601,
      "sell_average": 3797,
      "members": false,
      "buy_average": 3762,
      "name": "Adamant platelegs (t)",
      "sp": 6400
    },
    "2603": {
      "overall_average": 3785,
      "id": 2603,
      "sell_average": 3554,
      "members": false,
      "buy_average": 2861,
      "name": "Adamant kiteshield (t)",
      "sp": 5440
    },
    "2605": {
      "overall_average": 3200,
      "id": 2605,
      "sell_average": 3200,
      "members": false,
      "buy_average": 3390,
      "name": "Adamant full helm (t)",
      "sp": 3520
    },
    "2607": {
      "overall_average": 40259,
      "id": 2607,
      "sell_average": 40129,
      "members": false,
      "buy_average": 40086,
      "name": "Adamant platebody (g)",
      "sp": 16640
    },
    "2609": {
      "overall_average": 18499,
      "id": 2609,
      "sell_average": 11889,
      "members": false,
      "buy_average": 8584,
      "name": "Adamant platelegs (g)",
      "sp": 6400
    },
    "2611": {
      "overall_average": 20764,
      "id": 2611,
      "sell_average": 19918,
      "members": false,
      "buy_average": 19636,
      "name": "Adamant kiteshield (g)",
      "sp": 5440
    },
    "2613": {
      "overall_average": 13811,
      "id": 2613,
      "sell_average": 11476,
      "members": false,
      "buy_average": 11185,
      "name": "Adamant full helm (g)",
      "sp": 3520
    },
    "2615": {
      "overall_average": 54750,
      "id": 2615,
      "sell_average": 53070,
      "members": false,
      "buy_average": 52510,
      "name": "Rune platebody (g)",
      "sp": 65000
    },
    "2617": {
      "overall_average": 67388,
      "id": 2617,
      "sell_average": 63634,
      "members": false,
      "buy_average": 62561,
      "name": "Rune platelegs (g)",
      "sp": 64000
    },
    "2619": {
      "overall_average": 0,
      "id": 2619,
      "sell_average": 55465,
      "members": false,
      "buy_average": 55465,
      "name": "Rune full helm (g)",
      "sp": 35200
    },
    "2621": {
      "overall_average": 69000,
      "id": 2621,
      "sell_average": 65646,
      "members": false,
      "buy_average": 64528,
      "name": "Rune kiteshield (g)",
      "sp": 54400
    },
    "2623": {
      "overall_average": 0,
      "id": 2623,
      "sell_average": 41500,
      "members": false,
      "buy_average": 41500,
      "name": "Rune platebody (t)",
      "sp": 65000
    },
    "2625": {
      "overall_average": 41744,
      "id": 2625,
      "sell_average": 41486,
      "members": false,
      "buy_average": 41400,
      "name": "Rune platelegs (t)",
      "sp": 64000
    },
    "2627": {
      "overall_average": 26000,
      "id": 2627,
      "sell_average": 25078,
      "members": false,
      "buy_average": 24156,
      "name": "Rune full helm (t)",
      "sp": 35200
    },
    "2629": {
      "overall_average": 38638,
      "id": 2629,
      "sell_average": 42644,
      "members": false,
      "buy_average": 47452,
      "name": "Rune kiteshield (t)",
      "sp": 54400
    },
    "2631": {
      "overall_average": 50000,
      "id": 2631,
      "sell_average": 50000,
      "members": true,
      "buy_average": 0,
      "name": "Highwayman mask",
      "sp": 40
    },
    "2633": {
      "overall_average": 0,
      "id": 2633,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Blue beret",
      "sp": 80
    },
    "2635": {
      "overall_average": 0,
      "id": 2635,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black beret",
      "sp": 80
    },
    "2637": {
      "overall_average": 0,
      "id": 2637,
      "sell_average": 26667,
      "members": true,
      "buy_average": 26667,
      "name": "White beret",
      "sp": 80
    },
    "2639": {
      "overall_average": 2137,
      "id": 2639,
      "sell_average": 2109,
      "members": true,
      "buy_average": 2000,
      "name": "Tan cavalier",
      "sp": 200
    },
    "2641": {
      "overall_average": 5000,
      "id": 2641,
      "sell_average": 4477,
      "members": true,
      "buy_average": 2385,
      "name": "Dark cavalier",
      "sp": 200
    },
    "2643": {
      "overall_average": 24485,
      "id": 2643,
      "sell_average": 23997,
      "members": true,
      "buy_average": 23997,
      "name": "Black cavalier",
      "sp": 200
    },
    "2645": {
      "overall_average": 0,
      "id": 2645,
      "sell_average": 3490,
      "members": true,
      "buy_average": 3490,
      "name": "Red headband",
      "sp": 40
    },
    "2647": {
      "overall_average": 0,
      "id": 2647,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black headband",
      "sp": 40
    },
    "2649": {
      "overall_average": 0,
      "id": 2649,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Brown headband",
      "sp": 40
    },
    "2651": {
      "overall_average": 22381,
      "id": 2651,
      "sell_average": 21776,
      "members": true,
      "buy_average": 21535,
      "name": "Pirate's hat",
      "sp": 180
    },
    "2653": {
      "overall_average": 45386,
      "id": 2653,
      "sell_average": 46399,
      "members": false,
      "buy_average": 47075,
      "name": "Zamorak platebody",
      "sp": 65000
    },
    "2655": {
      "overall_average": 60684,
      "id": 2655,
      "sell_average": 58095,
      "members": false,
      "buy_average": 56615,
      "name": "Zamorak platelegs",
      "sp": 64000
    },
    "2657": {
      "overall_average": 145710,
      "id": 2657,
      "sell_average": 140010,
      "members": false,
      "buy_average": 137161,
      "name": "Zamorak full helm",
      "sp": 35200
    },
    "2659": {
      "overall_average": 67256,
      "id": 2659,
      "sell_average": 66860,
      "members": false,
      "buy_average": 66747,
      "name": "Zamorak kiteshield",
      "sp": 54400
    },
    "2661": {
      "overall_average": 62500,
      "id": 2661,
      "sell_average": 58630,
      "members": false,
      "buy_average": 58445,
      "name": "Saradomin platebody",
      "sp": 65000
    },
    "2663": {
      "overall_average": 51500,
      "id": 2663,
      "sell_average": 49059,
      "members": false,
      "buy_average": 48246,
      "name": "Saradomin platelegs",
      "sp": 64000
    },
    "2665": {
      "overall_average": 53274,
      "id": 2665,
      "sell_average": 51372,
      "members": false,
      "buy_average": 50738,
      "name": "Saradomin full helm",
      "sp": 35200
    },
    "2667": {
      "overall_average": 0,
      "id": 2667,
      "sell_average": 54190,
      "members": false,
      "buy_average": 54190,
      "name": "Saradomin kiteshield",
      "sp": 54400
    },
    "2669": {
      "overall_average": 0,
      "id": 2669,
      "sell_average": 38531,
      "members": false,
      "buy_average": 38531,
      "name": "Guthix platebody",
      "sp": 65000
    },
    "2671": {
      "overall_average": 0,
      "id": 2671,
      "sell_average": 39000,
      "members": false,
      "buy_average": 39000,
      "name": "Guthix platelegs",
      "sp": 64000
    },
    "2673": {
      "overall_average": 25500,
      "id": 2673,
      "sell_average": 22552,
      "members": false,
      "buy_average": 19605,
      "name": "Guthix full helm",
      "sp": 35200
    },
    "2675": {
      "overall_average": 34999,
      "id": 2675,
      "sell_average": 32999,
      "members": false,
      "buy_average": 32000,
      "name": "Guthix kiteshield",
      "sp": 54400
    },
    "2859": {
      "overall_average": 419,
      "id": 2859,
      "sell_average": 419,
      "members": true,
      "buy_average": 419,
      "name": "Wolf bones",
      "sp": 1
    },
    "2861": {
      "overall_average": 0,
      "id": 2861,
      "sell_average": 155,
      "members": true,
      "buy_average": 155,
      "name": "Wolfbone arrowtips",
      "sp": 3
    },
    "2862": {
      "overall_average": 0,
      "id": 2862,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Achey tree logs",
      "sp": 4
    },
    "2864": {
      "overall_average": 0,
      "id": 2864,
      "sell_average": 54,
      "members": true,
      "buy_average": 54,
      "name": "Ogre arrow shaft",
      "sp": 1
    },
    "2865": {
      "overall_average": 0,
      "id": 2865,
      "sell_average": 56,
      "members": true,
      "buy_average": 56,
      "name": "Flighted ogre arrow",
      "sp": 1
    },
    "2866": {
      "overall_average": 252,
      "id": 2866,
      "sell_average": 250,
      "members": true,
      "buy_average": 249,
      "name": "Ogre arrow",
      "sp": 25
    },
    "2876": {
      "overall_average": 2100,
      "id": 2876,
      "sell_average": 2099,
      "members": true,
      "buy_average": 2098,
      "name": "Raw chompy",
      "sp": 85
    },
    "2878": {
      "overall_average": 683,
      "id": 2878,
      "sell_average": 304,
      "members": true,
      "buy_average": 190,
      "name": "Cooked chompy",
      "sp": 130
    },
    "2890": {
      "overall_average": 1761,
      "id": 2890,
      "sell_average": 1740,
      "members": true,
      "buy_average": 1649,
      "name": "Elemental shield",
      "sp": 20
    },
    "2894": {
      "overall_average": 345,
      "id": 2894,
      "sell_average": 237,
      "members": true,
      "buy_average": 130,
      "name": "Grey boots",
      "sp": 500
    },
    "2896": {
      "overall_average": 0,
      "id": 2896,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Grey robe top",
      "sp": 500
    },
    "2898": {
      "overall_average": 4998,
      "id": 2898,
      "sell_average": 4998,
      "members": true,
      "buy_average": 0,
      "name": "Grey robe bottoms",
      "sp": 500
    },
    "2900": {
      "overall_average": 1354,
      "id": 2900,
      "sell_average": 1354,
      "members": true,
      "buy_average": 1354,
      "name": "Grey hat",
      "sp": 500
    },
    "2902": {
      "overall_average": 1609,
      "id": 2902,
      "sell_average": 1973,
      "members": false,
      "buy_average": 1986,
      "name": "Grey gloves",
      "sp": 500
    },
    "2904": {
      "overall_average": 1699,
      "id": 2904,
      "sell_average": 1595,
      "members": true,
      "buy_average": 1315,
      "name": "Red boots",
      "sp": 500
    },
    "2906": {
      "overall_average": 1800,
      "id": 2906,
      "sell_average": 1800,
      "members": true,
      "buy_average": 0,
      "name": "Red robe top",
      "sp": 500
    },
    "2908": {
      "overall_average": 0,
      "id": 2908,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Red robe bottoms",
      "sp": 500
    },
    "2910": {
      "overall_average": 993,
      "id": 2910,
      "sell_average": 815,
      "members": true,
      "buy_average": 708,
      "name": "Red hat",
      "sp": 500
    },
    "2912": {
      "overall_average": 1014,
      "id": 2912,
      "sell_average": 922,
      "members": false,
      "buy_average": 867,
      "name": "Red gloves",
      "sp": 500
    },
    "2914": {
      "overall_average": 498,
      "id": 2914,
      "sell_average": 350,
      "members": true,
      "buy_average": 301,
      "name": "Yellow boots",
      "sp": 500
    },
    "2916": {
      "overall_average": 0,
      "id": 2916,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Yellow robe top",
      "sp": 500
    },
    "2918": {
      "overall_average": 0,
      "id": 2918,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Yellow robe bottoms",
      "sp": 500
    },
    "2920": {
      "overall_average": 1003,
      "id": 2920,
      "sell_average": 685,
      "members": true,
      "buy_average": 650,
      "name": "Yellow hat",
      "sp": 500
    },
    "2922": {
      "overall_average": 944,
      "id": 2922,
      "sell_average": 899,
      "members": false,
      "buy_average": 882,
      "name": "Yellow gloves",
      "sp": 500
    },
    "2924": {
      "overall_average": 0,
      "id": 2924,
      "sell_average": 731,
      "members": true,
      "buy_average": 731,
      "name": "Teal boots",
      "sp": 500
    },
    "2926": {
      "overall_average": 0,
      "id": 2926,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teal robe top",
      "sp": 500
    },
    "2928": {
      "overall_average": 0,
      "id": 2928,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teal robe bottoms",
      "sp": 500
    },
    "2930": {
      "overall_average": 0,
      "id": 2930,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teal hat",
      "sp": 500
    },
    "2932": {
      "overall_average": 413,
      "id": 2932,
      "sell_average": 377,
      "members": false,
      "buy_average": 306,
      "name": "Teal gloves",
      "sp": 500
    },
    "2934": {
      "overall_average": 0,
      "id": 2934,
      "sell_average": 224,
      "members": true,
      "buy_average": 224,
      "name": "Purple boots",
      "sp": 500
    },
    "2936": {
      "overall_average": 1863,
      "id": 2936,
      "sell_average": 1863,
      "members": true,
      "buy_average": 0,
      "name": "Purple robe top",
      "sp": 500
    },
    "2938": {
      "overall_average": 0,
      "id": 2938,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Purple robe bottoms",
      "sp": 500
    },
    "2940": {
      "overall_average": 913,
      "id": 2940,
      "sell_average": 970,
      "members": true,
      "buy_average": 973,
      "name": "Purple hat",
      "sp": 500
    },
    "2942": {
      "overall_average": 649,
      "id": 2942,
      "sell_average": 632,
      "members": false,
      "buy_average": 610,
      "name": "Purple gloves",
      "sp": 500
    },
    "2955": {
      "overall_average": 0,
      "id": 2955,
      "sell_average": 9,
      "members": true,
      "buy_average": 9,
      "name": "Moonlight mead",
      "sp": 5
    },
    "2961": {
      "overall_average": 47,
      "id": 2961,
      "sell_average": 46,
      "members": true,
      "buy_average": 45,
      "name": "Silver sickle",
      "sp": 175
    },
    "2970": {
      "overall_average": 569,
      "id": 2970,
      "sell_average": 566,
      "members": true,
      "buy_average": 563,
      "name": "Mort myre fungus",
      "sp": 1
    },
    "2972": {
      "overall_average": 0,
      "id": 2972,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mort myre stem",
      "sp": 1
    },
    "2974": {
      "overall_average": 0,
      "id": 2974,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mort myre pear",
      "sp": 1
    },
    "2976": {
      "overall_average": 499,
      "id": 2976,
      "sell_average": 499,
      "members": true,
      "buy_average": 0,
      "name": "Sickle mould",
      "sp": 10
    },
    "2997": {
      "overall_average": 0,
      "id": 2997,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Pirate's hook",
      "sp": 89
    },
    "2998": {
      "overall_average": 2895,
      "id": 2998,
      "sell_average": 2863,
      "members": true,
      "buy_average": 2850,
      "name": "Toadflax",
      "sp": 48
    },
    "3000": {
      "overall_average": 8698,
      "id": 3000,
      "sell_average": 8674,
      "members": true,
      "buy_average": 8658,
      "name": "Snapdragon",
      "sp": 59
    },
    "3002": {
      "overall_average": 3035,
      "id": 3002,
      "sell_average": 3033,
      "members": true,
      "buy_average": 3030,
      "name": "Toadflax potion (unf)",
      "sp": 48
    },
    "3004": {
      "overall_average": 8840,
      "id": 3004,
      "sell_average": 8837,
      "members": true,
      "buy_average": 8803,
      "name": "Snapdragon potion (unf)",
      "sp": 59
    },
    "3008": {
      "overall_average": 479,
      "id": 3008,
      "sell_average": 475,
      "members": false,
      "buy_average": 467,
      "name": "Energy potion(4)",
      "sp": 146
    },
    "3010": {
      "overall_average": 330,
      "id": 3010,
      "sell_average": 332,
      "members": false,
      "buy_average": 333,
      "name": "Energy potion(3)",
      "sp": 110
    },
    "3012": {
      "overall_average": 167,
      "id": 3012,
      "sell_average": 165,
      "members": false,
      "buy_average": 164,
      "name": "Energy potion(2)",
      "sp": 72
    },
    "3014": {
      "overall_average": 0,
      "id": 3014,
      "sell_average": 82,
      "members": false,
      "buy_average": 82,
      "name": "Energy potion(1)",
      "sp": 36
    },
    "3016": {
      "overall_average": 2912,
      "id": 3016,
      "sell_average": 2878,
      "members": true,
      "buy_average": 2859,
      "name": "Super energy(4)",
      "sp": 300
    },
    "3018": {
      "overall_average": 2211,
      "id": 3018,
      "sell_average": 2093,
      "members": true,
      "buy_average": 2093,
      "name": "Super energy(3)",
      "sp": 230
    },
    "3020": {
      "overall_average": 1400,
      "id": 3020,
      "sell_average": 1400,
      "members": true,
      "buy_average": 1400,
      "name": "Super energy(2)",
      "sp": 160
    },
    "3022": {
      "overall_average": 781,
      "id": 3022,
      "sell_average": 777,
      "members": true,
      "buy_average": 772,
      "name": "Super energy(1)",
      "sp": 90
    },
    "3024": {
      "overall_average": 10092,
      "id": 3024,
      "sell_average": 10047,
      "members": true,
      "buy_average": 10009,
      "name": "Super restore(4)",
      "sp": 300
    },
    "3026": {
      "overall_average": 7527,
      "id": 3026,
      "sell_average": 7523,
      "members": true,
      "buy_average": 7447,
      "name": "Super restore(3)",
      "sp": 240
    },
    "3028": {
      "overall_average": 5815,
      "id": 3028,
      "sell_average": 5239,
      "members": true,
      "buy_average": 5159,
      "name": "Super restore(2)",
      "sp": 180
    },
    "3030": {
      "overall_average": 0,
      "id": 3030,
      "sell_average": 6939,
      "members": true,
      "buy_average": 6939,
      "name": "Super restore(1)",
      "sp": 120
    },
    "3032": {
      "overall_average": 925,
      "id": 3032,
      "sell_average": 920,
      "members": true,
      "buy_average": 907,
      "name": "Agility potion(4)",
      "sp": 200
    },
    "3034": {
      "overall_average": 0,
      "id": 3034,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Agility potion(3)",
      "sp": 150
    },
    "3036": {
      "overall_average": 0,
      "id": 3036,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Agility potion(2)",
      "sp": 100
    },
    "3038": {
      "overall_average": 0,
      "id": 3038,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Agility potion(1)",
      "sp": 50
    },
    "3040": {
      "overall_average": 251,
      "id": 3040,
      "sell_average": 254,
      "members": true,
      "buy_average": 275,
      "name": "Magic potion(4)",
      "sp": 300
    },
    "3042": {
      "overall_average": 200,
      "id": 3042,
      "sell_average": 199,
      "members": true,
      "buy_average": 199,
      "name": "Magic potion(3)",
      "sp": 250
    },
    "3044": {
      "overall_average": 0,
      "id": 3044,
      "sell_average": 125,
      "members": true,
      "buy_average": 125,
      "name": "Magic potion(2)",
      "sp": 200
    },
    "3046": {
      "overall_average": 68,
      "id": 3046,
      "sell_average": 68,
      "members": true,
      "buy_average": 68,
      "name": "Magic potion(1)",
      "sp": 150
    },
    "3049": {
      "overall_average": 2881,
      "id": 3049,
      "sell_average": 2856,
      "members": true,
      "buy_average": 2845,
      "name": "Grimy toadflax",
      "sp": 19
    },
    "3051": {
      "overall_average": 8584,
      "id": 3051,
      "sell_average": 8543,
      "members": true,
      "buy_average": 8534,
      "name": "Grimy snapdragon",
      "sp": 21
    },
    "3053": {
      "overall_average": 9988,
      "id": 3053,
      "sell_average": 10308,
      "members": true,
      "buy_average": 10414,
      "name": "Lava battlestaff",
      "sp": 17000
    },
    "3054": {
      "overall_average": 0,
      "id": 3054,
      "sell_average": 27619,
      "members": true,
      "buy_average": 27619,
      "name": "Mystic lava staff",
      "sp": 45000
    },
    "3093": {
      "overall_average": 0,
      "id": 3093,
      "sell_average": 412,
      "members": true,
      "buy_average": 412,
      "name": "Black dart",
      "sp": 1
    },
    "3094": {
      "overall_average": 0,
      "id": 3094,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black dart(p)",
      "sp": 18
    },
    "3095": {
      "overall_average": 0,
      "id": 3095,
      "sell_average": 22,
      "members": true,
      "buy_average": 22,
      "name": "Bronze claws",
      "sp": 15
    },
    "3096": {
      "overall_average": 0,
      "id": 3096,
      "sell_average": 7,
      "members": true,
      "buy_average": 7,
      "name": "Iron claws",
      "sp": 50
    },
    "3097": {
      "overall_average": 0,
      "id": 3097,
      "sell_average": 18,
      "members": true,
      "buy_average": 18,
      "name": "Steel claws",
      "sp": 175
    },
    "3098": {
      "overall_average": 1500,
      "id": 3098,
      "sell_average": 1300,
      "members": true,
      "buy_average": 300,
      "name": "Black claws",
      "sp": 360
    },
    "3099": {
      "overall_average": 456,
      "id": 3099,
      "sell_average": 456,
      "members": true,
      "buy_average": 0,
      "name": "Mithril claws",
      "sp": 475
    },
    "3100": {
      "overall_average": 3750,
      "id": 3100,
      "sell_average": 3750,
      "members": true,
      "buy_average": 0,
      "name": "Adamant claws",
      "sp": 1200
    },
    "3101": {
      "overall_average": 7999,
      "id": 3101,
      "sell_average": 7145,
      "members": true,
      "buy_average": 6975,
      "name": "Rune claws",
      "sp": 12000
    },
    "3105": {
      "overall_average": 823,
      "id": 3105,
      "sell_average": 798,
      "members": true,
      "buy_average": 784,
      "name": "Climbing boots",
      "sp": 12
    },
    "3107": {
      "overall_average": 3653,
      "id": 3107,
      "sell_average": 3245,
      "members": true,
      "buy_average": 2021,
      "name": "Spiked boots",
      "sp": 30
    },
    "3122": {
      "overall_average": 35664,
      "id": 3122,
      "sell_average": 33782,
      "members": true,
      "buy_average": 33198,
      "name": "Granite shield",
      "sp": 56000
    },
    "3123": {
      "overall_average": 0,
      "id": 3123,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Shaikahan bones",
      "sp": 1
    },
    "3125": {
      "overall_average": 2370,
      "id": 3125,
      "sell_average": 1452,
      "members": true,
      "buy_average": 1211,
      "name": "Jogre bones",
      "sp": 1
    },
    "3138": {
      "overall_average": 389,
      "id": 3138,
      "sell_average": 379,
      "members": true,
      "buy_average": 377,
      "name": "Potato cactus",
      "sp": 1
    },
    "3140": {
      "overall_average": 436979,
      "id": 3140,
      "sell_average": 432111,
      "members": true,
      "buy_average": 428703,
      "name": "Dragon chainbody",
      "sp": 250000
    },
    "3142": {
      "overall_average": 514,
      "id": 3142,
      "sell_average": 513,
      "members": true,
      "buy_average": 513,
      "name": "Raw karambwan",
      "sp": 200
    },
    "3144": {
      "overall_average": 622,
      "id": 3144,
      "sell_average": 619,
      "members": true,
      "buy_average": 616,
      "name": "Cooked karambwan",
      "sp": 250
    },
    "3157": {
      "overall_average": 2000,
      "id": 3157,
      "sell_average": 2000,
      "members": true,
      "buy_average": 0,
      "name": "Karambwan vessel",
      "sp": 5
    },
    "3159": {
      "overall_average": 1059,
      "id": 3159,
      "sell_average": 1179,
      "members": true,
      "buy_average": 2449,
      "name": "Karambwan vessel",
      "sp": 40
    },
    "3162": {
      "overall_average": 0,
      "id": 3162,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Sliced banana",
      "sp": 2
    },
    "3183": {
      "overall_average": 213,
      "id": 3183,
      "sell_average": 205,
      "members": false,
      "buy_average": 197,
      "name": "Monkey bones",
      "sp": 1
    },
    "3188": {
      "overall_average": 398,
      "id": 3188,
      "sell_average": 398,
      "members": true,
      "buy_average": 398,
      "name": "Cleaning cloth",
      "sp": 60
    },
    "3190": {
      "overall_average": 0,
      "id": 3190,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze halberd",
      "sp": 80
    },
    "3192": {
      "overall_average": 0,
      "id": 3192,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron halberd",
      "sp": 280
    },
    "3194": {
      "overall_average": 0,
      "id": 3194,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel halberd",
      "sp": 1000
    },
    "3196": {
      "overall_average": 0,
      "id": 3196,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black halberd",
      "sp": 1920
    },
    "3198": {
      "overall_average": 0,
      "id": 3198,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril halberd",
      "sp": 2600
    },
    "3200": {
      "overall_average": 14847,
      "id": 3200,
      "sell_average": 11939,
      "members": true,
      "buy_average": 10001,
      "name": "Adamant halberd",
      "sp": 6400
    },
    "3202": {
      "overall_average": 38419,
      "id": 3202,
      "sell_average": 38018,
      "members": true,
      "buy_average": 37800,
      "name": "Rune halberd",
      "sp": 64000
    },
    "3204": {
      "overall_average": 149584,
      "id": 3204,
      "sell_average": 149360,
      "members": true,
      "buy_average": 149328,
      "name": "Dragon halberd",
      "sp": 250000
    },
    "3211": {
      "overall_average": 182,
      "id": 3211,
      "sell_average": 147,
      "members": true,
      "buy_average": 145,
      "name": "Limestone",
      "sp": 10
    },
    "3216": {
      "overall_average": 0,
      "id": 3216,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Barrel",
      "sp": 1
    },
    "3226": {
      "overall_average": 0,
      "id": 3226,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Raw rabbit",
      "sp": 20
    },
    "3228": {
      "overall_average": 500,
      "id": 3228,
      "sell_average": 500,
      "members": true,
      "buy_average": 0,
      "name": "Cooked rabbit",
      "sp": 4
    },
    "3239": {
      "overall_average": 0,
      "id": 3239,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bark",
      "sp": 1
    },
    "3325": {
      "overall_average": 271,
      "id": 3325,
      "sell_average": 271,
      "members": true,
      "buy_average": 271,
      "name": "Vampire dust",
      "sp": 2
    },
    "3327": {
      "overall_average": 100,
      "id": 3327,
      "sell_average": 56,
      "members": true,
      "buy_average": 12,
      "name": "Myre snelm",
      "sp": 300
    },
    "3329": {
      "overall_average": 768,
      "id": 3329,
      "sell_average": 246,
      "members": true,
      "buy_average": 181,
      "name": "Blood'n'tar snelm",
      "sp": 300
    },
    "3331": {
      "overall_average": 0,
      "id": 3331,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ochre snelm",
      "sp": 300
    },
    "3333": {
      "overall_average": 0,
      "id": 3333,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bruise blue snelm",
      "sp": 300
    },
    "3335": {
      "overall_average": 0,
      "id": 3335,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Broken bark snelm",
      "sp": 300
    },
    "3337": {
      "overall_average": 289,
      "id": 3337,
      "sell_average": 289,
      "members": true,
      "buy_average": 0,
      "name": "Myre snelm",
      "sp": 300
    },
    "3339": {
      "overall_average": 0,
      "id": 3339,
      "sell_average": 252,
      "members": true,
      "buy_average": 252,
      "name": "Blood'n'tar snelm",
      "sp": 300
    },
    "3341": {
      "overall_average": 0,
      "id": 3341,
      "sell_average": 151,
      "members": true,
      "buy_average": 151,
      "name": "Ochre snelm",
      "sp": 300
    },
    "3343": {
      "overall_average": 1529,
      "id": 3343,
      "sell_average": 1389,
      "members": true,
      "buy_average": 1343,
      "name": "Bruise blue snelm",
      "sp": 300
    },
    "3345": {
      "overall_average": 0,
      "id": 3345,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Blamish myre shell",
      "sp": 150
    },
    "3347": {
      "overall_average": 0,
      "id": 3347,
      "sell_average": 50,
      "members": true,
      "buy_average": 50,
      "name": "Blamish red shell",
      "sp": 150
    },
    "3349": {
      "overall_average": 0,
      "id": 3349,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Blamish ochre shell",
      "sp": 150
    },
    "3351": {
      "overall_average": 0,
      "id": 3351,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Blamish blue shell",
      "sp": 150
    },
    "3353": {
      "overall_average": 550,
      "id": 3353,
      "sell_average": 550,
      "members": true,
      "buy_average": 0,
      "name": "Blamish bark shell",
      "sp": 150
    },
    "3355": {
      "overall_average": 0,
      "id": 3355,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Blamish myre shell",
      "sp": 150
    },
    "3357": {
      "overall_average": 0,
      "id": 3357,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Blamish red shell",
      "sp": 150
    },
    "3359": {
      "overall_average": 0,
      "id": 3359,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Blamish ochre shell",
      "sp": 150
    },
    "3361": {
      "overall_average": 0,
      "id": 3361,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Blamish blue shell",
      "sp": 150
    },
    "3363": {
      "overall_average": 795,
      "id": 3363,
      "sell_average": 795,
      "members": true,
      "buy_average": 795,
      "name": "Thin snail",
      "sp": 5
    },
    "3365": {
      "overall_average": 0,
      "id": 3365,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Lean snail",
      "sp": 10
    },
    "3367": {
      "overall_average": 978,
      "id": 3367,
      "sell_average": 978,
      "members": true,
      "buy_average": 0,
      "name": "Fat snail",
      "sp": 15
    },
    "3369": {
      "overall_average": 0,
      "id": 3369,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Thin snail meat",
      "sp": 10
    },
    "3371": {
      "overall_average": 0,
      "id": 3371,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Lean snail meat",
      "sp": 20
    },
    "3373": {
      "overall_average": 0,
      "id": 3373,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fat snail meat",
      "sp": 30
    },
    "3379": {
      "overall_average": 311,
      "id": 3379,
      "sell_average": 311,
      "members": true,
      "buy_average": 0,
      "name": "Raw slimy eel",
      "sp": 1
    },
    "3381": {
      "overall_average": 300,
      "id": 3381,
      "sell_average": 300,
      "members": true,
      "buy_average": 0,
      "name": "Cooked slimy eel",
      "sp": 1
    },
    "3385": {
      "overall_average": 6014,
      "id": 3385,
      "sell_average": 5693,
      "members": true,
      "buy_average": 5545,
      "name": "Splitbark helm",
      "sp": 10000
    },
    "3387": {
      "overall_average": 30403,
      "id": 3387,
      "sell_average": 28722,
      "members": true,
      "buy_average": 27882,
      "name": "Splitbark body",
      "sp": 45000
    },
    "3389": {
      "overall_average": 25558,
      "id": 3389,
      "sell_average": 24839,
      "members": true,
      "buy_average": 23545,
      "name": "Splitbark legs",
      "sp": 40000
    },
    "3391": {
      "overall_average": 3147,
      "id": 3391,
      "sell_average": 2834,
      "members": true,
      "buy_average": 2767,
      "name": "Splitbark gauntlets",
      "sp": 5000
    },
    "3393": {
      "overall_average": 2716,
      "id": 3393,
      "sell_average": 2588,
      "members": true,
      "buy_average": 2550,
      "name": "Splitbark boots",
      "sp": 5000
    },
    "3396": {
      "overall_average": 0,
      "id": 3396,
      "sell_average": 100,
      "members": true,
      "buy_average": 100,
      "name": "Loar remains",
      "sp": 1
    },
    "3398": {
      "overall_average": 0,
      "id": 3398,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Phrin remains",
      "sp": 1
    },
    "3400": {
      "overall_average": 0,
      "id": 3400,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Riyl remains",
      "sp": 1
    },
    "3402": {
      "overall_average": 0,
      "id": 3402,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Asyn remains",
      "sp": 1
    },
    "3404": {
      "overall_average": 3500,
      "id": 3404,
      "sell_average": 3500,
      "members": true,
      "buy_average": 0,
      "name": "Fiyr remains",
      "sp": 1
    },
    "3406": {
      "overall_average": 0,
      "id": 3406,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Unfinished potion",
      "sp": 11
    },
    "3408": {
      "overall_average": 2,
      "id": 3408,
      "sell_average": 2,
      "members": true,
      "buy_average": 2,
      "name": "Serum 207 (4)",
      "sp": 14
    },
    "3410": {
      "overall_average": 0,
      "id": 3410,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Serum 207 (3)",
      "sp": 13
    },
    "3412": {
      "overall_average": 0,
      "id": 3412,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Serum 207 (2)",
      "sp": 13
    },
    "3414": {
      "overall_average": 0,
      "id": 3414,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Serum 207 (1)",
      "sp": 11
    },
    "3420": {
      "overall_average": 196,
      "id": 3420,
      "sell_average": 193,
      "members": true,
      "buy_average": 191,
      "name": "Limestone brick",
      "sp": 20
    },
    "3422": {
      "overall_average": 0,
      "id": 3422,
      "sell_average": 60,
      "members": true,
      "buy_average": 60,
      "name": "Olive oil(4)",
      "sp": 22
    },
    "3424": {
      "overall_average": 0,
      "id": 3424,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Olive oil(3)",
      "sp": 20
    },
    "3426": {
      "overall_average": 0,
      "id": 3426,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Olive oil(2)",
      "sp": 17
    },
    "3428": {
      "overall_average": 0,
      "id": 3428,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Olive oil(1)",
      "sp": 14
    },
    "3430": {
      "overall_average": 0,
      "id": 3430,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Sacred oil(4)",
      "sp": 100
    },
    "3432": {
      "overall_average": 0,
      "id": 3432,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Sacred oil(3)",
      "sp": 90
    },
    "3434": {
      "overall_average": 0,
      "id": 3434,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Sacred oil(2)",
      "sp": 75
    },
    "3436": {
      "overall_average": 0,
      "id": 3436,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Sacred oil(1)",
      "sp": 60
    },
    "3438": {
      "overall_average": 1000,
      "id": 3438,
      "sell_average": 1000,
      "members": true,
      "buy_average": 0,
      "name": "Pyre logs",
      "sp": 8
    },
    "3440": {
      "overall_average": 0,
      "id": 3440,
      "sell_average": 822,
      "members": true,
      "buy_average": 822,
      "name": "Oak pyre logs",
      "sp": 40
    },
    "3442": {
      "overall_average": 1699,
      "id": 3442,
      "sell_average": 1699,
      "members": true,
      "buy_average": 0,
      "name": "Willow pyre logs",
      "sp": 80
    },
    "3444": {
      "overall_average": 0,
      "id": 3444,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Maple pyre logs",
      "sp": 160
    },
    "3446": {
      "overall_average": 0,
      "id": 3446,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Yew pyre logs",
      "sp": 320
    },
    "3448": {
      "overall_average": 2679,
      "id": 3448,
      "sell_average": 2782,
      "members": true,
      "buy_average": 2790,
      "name": "Magic pyre logs",
      "sp": 640
    },
    "3470": {
      "overall_average": 0,
      "id": 3470,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fine cloth",
      "sp": 500
    },
    "3472": {
      "overall_average": 0,
      "id": 3472,
      "sell_average": 1072,
      "members": false,
      "buy_average": 1072,
      "name": "Black plateskirt (t)",
      "sp": 1920
    },
    "3473": {
      "overall_average": 0,
      "id": 3473,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black plateskirt (g)",
      "sp": 1920
    },
    "3474": {
      "overall_average": 0,
      "id": 3474,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Adamant plateskirt (t)",
      "sp": 6400
    },
    "3475": {
      "overall_average": 0,
      "id": 3475,
      "sell_average": 4550,
      "members": false,
      "buy_average": 4550,
      "name": "Adamant plateskirt (g)",
      "sp": 6400
    },
    "3476": {
      "overall_average": 39200,
      "id": 3476,
      "sell_average": 42818,
      "members": false,
      "buy_average": 44955,
      "name": "Rune plateskirt (g)",
      "sp": 64000
    },
    "3477": {
      "overall_average": 0,
      "id": 3477,
      "sell_average": 45000,
      "members": false,
      "buy_average": 45000,
      "name": "Rune plateskirt (t)",
      "sp": 64000
    },
    "3478": {
      "overall_average": 39500,
      "id": 3478,
      "sell_average": 38808,
      "members": false,
      "buy_average": 38463,
      "name": "Zamorak plateskirt",
      "sp": 64000
    },
    "3479": {
      "overall_average": 38994,
      "id": 3479,
      "sell_average": 38695,
      "members": false,
      "buy_average": 37800,
      "name": "Saradomin plateskirt",
      "sp": 64000
    },
    "3480": {
      "overall_average": 37450,
      "id": 3480,
      "sell_average": 37450,
      "members": false,
      "buy_average": 37450,
      "name": "Guthix plateskirt",
      "sp": 64000
    },
    "3481": {
      "overall_average": 1039500,
      "id": 3481,
      "sell_average": 1046500,
      "members": false,
      "buy_average": 1067499,
      "name": "Gilded platebody",
      "sp": 65000
    },
    "3483": {
      "overall_average": 3127000,
      "id": 3483,
      "sell_average": 3102000,
      "members": false,
      "buy_average": 3077000,
      "name": "Gilded platelegs",
      "sp": 64000
    },
    "3485": {
      "overall_average": 0,
      "id": 3485,
      "sell_average": 466259,
      "members": false,
      "buy_average": 466259,
      "name": "Gilded plateskirt",
      "sp": 64000
    },
    "3486": {
      "overall_average": 963703,
      "id": 3486,
      "sell_average": 935278,
      "members": false,
      "buy_average": 850002,
      "name": "Gilded full helm",
      "sp": 35200
    },
    "3488": {
      "overall_average": 851563,
      "id": 3488,
      "sell_average": 849743,
      "members": false,
      "buy_average": 837000,
      "name": "Gilded kiteshield",
      "sp": 54400
    },
    "3678": {
      "overall_average": 6625,
      "id": 3678,
      "sell_average": 6625,
      "members": true,
      "buy_average": 6250,
      "name": "Flamtaer hammer",
      "sp": 10000
    },
    "3749": {
      "overall_average": 44994,
      "id": 3749,
      "sell_average": 43911,
      "members": true,
      "buy_average": 42703,
      "name": "Archer helm",
      "sp": 60000
    },
    "3751": {
      "overall_average": 50986,
      "id": 3751,
      "sell_average": 50500,
      "members": true,
      "buy_average": 49504,
      "name": "Berserker helm",
      "sp": 60000
    },
    "3753": {
      "overall_average": 47299,
      "id": 3753,
      "sell_average": 45034,
      "members": true,
      "buy_average": 43902,
      "name": "Warrior helm",
      "sp": 60000
    },
    "3755": {
      "overall_average": 42626,
      "id": 3755,
      "sell_average": 41929,
      "members": true,
      "buy_average": 40725,
      "name": "Farseer helm",
      "sp": 60000
    },
    "3759": {
      "overall_average": 0,
      "id": 3759,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fremennik cyan cloak",
      "sp": 250
    },
    "3761": {
      "overall_average": 0,
      "id": 3761,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fremennik brown cloak",
      "sp": 250
    },
    "3763": {
      "overall_average": 0,
      "id": 3763,
      "sell_average": 1422,
      "members": true,
      "buy_average": 1422,
      "name": "Fremennik blue cloak",
      "sp": 250
    },
    "3765": {
      "overall_average": 948,
      "id": 3765,
      "sell_average": 948,
      "members": true,
      "buy_average": 0,
      "name": "Fremennik green cloak",
      "sp": 250
    },
    "3767": {
      "overall_average": 100,
      "id": 3767,
      "sell_average": 100,
      "members": true,
      "buy_average": 0,
      "name": "Fremennik brown shirt",
      "sp": 250
    },
    "3769": {
      "overall_average": 1440,
      "id": 3769,
      "sell_average": 1440,
      "members": true,
      "buy_average": 0,
      "name": "Fremennik grey shirt",
      "sp": 250
    },
    "3771": {
      "overall_average": 0,
      "id": 3771,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fremennik beige shirt",
      "sp": 250
    },
    "3773": {
      "overall_average": 963,
      "id": 3773,
      "sell_average": 963,
      "members": true,
      "buy_average": 0,
      "name": "Fremennik red shirt",
      "sp": 250
    },
    "3775": {
      "overall_average": 830,
      "id": 3775,
      "sell_average": 830,
      "members": true,
      "buy_average": 441,
      "name": "Fremennik blue shirt",
      "sp": 250
    },
    "3777": {
      "overall_average": 0,
      "id": 3777,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fremennik red cloak",
      "sp": 250
    },
    "3779": {
      "overall_average": 0,
      "id": 3779,
      "sell_average": 722,
      "members": true,
      "buy_average": 722,
      "name": "Fremennik grey cloak",
      "sp": 250
    },
    "3781": {
      "overall_average": 923,
      "id": 3781,
      "sell_average": 923,
      "members": true,
      "buy_average": 0,
      "name": "Fremennik yellow cloak",
      "sp": 250
    },
    "3783": {
      "overall_average": 0,
      "id": 3783,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Fremennik teal cloak",
      "sp": 250
    },
    "3785": {
      "overall_average": 1200,
      "id": 3785,
      "sell_average": 856,
      "members": true,
      "buy_average": 513,
      "name": "Fremennik purple cloak",
      "sp": 250
    },
    "3787": {
      "overall_average": 0,
      "id": 3787,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fremennik pink cloak",
      "sp": 250
    },
    "3789": {
      "overall_average": 1169,
      "id": 3789,
      "sell_average": 1153,
      "members": true,
      "buy_average": 1150,
      "name": "Fremennik black cloak",
      "sp": 250
    },
    "3791": {
      "overall_average": 783,
      "id": 3791,
      "sell_average": 892,
      "members": true,
      "buy_average": 1001,
      "name": "Fremennik boots",
      "sp": 500
    },
    "3793": {
      "overall_average": 0,
      "id": 3793,
      "sell_average": 364,
      "members": true,
      "buy_average": 364,
      "name": "Fremennik robe",
      "sp": 500
    },
    "3795": {
      "overall_average": 0,
      "id": 3795,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fremennik skirt",
      "sp": 500
    },
    "3797": {
      "overall_average": 0,
      "id": 3797,
      "sell_average": 1648,
      "members": true,
      "buy_average": 1648,
      "name": "Fremennik hat",
      "sp": 500
    },
    "3799": {
      "overall_average": 1995,
      "id": 3799,
      "sell_average": 1911,
      "members": true,
      "buy_average": 1771,
      "name": "Fremennik gloves",
      "sp": 500
    },
    "3801": {
      "overall_average": 1233,
      "id": 3801,
      "sell_average": 1232,
      "members": true,
      "buy_average": 1139,
      "name": "Keg of beer",
      "sp": 250
    },
    "3803": {
      "overall_average": 0,
      "id": 3803,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Beer tankard",
      "sp": 20
    },
    "3827": {
      "overall_average": 0,
      "id": 3827,
      "sell_average": 3121,
      "members": true,
      "buy_average": 3121,
      "name": "Saradomin page 1",
      "sp": 200
    },
    "3828": {
      "overall_average": 0,
      "id": 3828,
      "sell_average": 2500,
      "members": true,
      "buy_average": 2500,
      "name": "Saradomin page 2",
      "sp": 200
    },
    "3829": {
      "overall_average": 0,
      "id": 3829,
      "sell_average": 1737,
      "members": true,
      "buy_average": 1737,
      "name": "Saradomin page 3",
      "sp": 200
    },
    "3830": {
      "overall_average": 0,
      "id": 3830,
      "sell_average": 2200,
      "members": true,
      "buy_average": 2200,
      "name": "Saradomin page 4",
      "sp": 200
    },
    "3831": {
      "overall_average": 566444,
      "id": 3831,
      "sell_average": 559611,
      "members": true,
      "buy_average": 556878,
      "name": "Zamorak page 1",
      "sp": 200
    },
    "3832": {
      "overall_average": 369925,
      "id": 3832,
      "sell_average": 367906,
      "members": true,
      "buy_average": 367233,
      "name": "Zamorak page 2",
      "sp": 200
    },
    "3833": {
      "overall_average": 244999,
      "id": 3833,
      "sell_average": 238000,
      "members": true,
      "buy_average": 231002,
      "name": "Zamorak page 3",
      "sp": 200
    },
    "3834": {
      "overall_average": 376319,
      "id": 3834,
      "sell_average": 376879,
      "members": true,
      "buy_average": 378000,
      "name": "Zamorak page 4",
      "sp": 200
    },
    "3835": {
      "overall_average": 6550,
      "id": 3835,
      "sell_average": 6550,
      "members": true,
      "buy_average": 0,
      "name": "Guthix page 1",
      "sp": 200
    },
    "3836": {
      "overall_average": 3500,
      "id": 3836,
      "sell_average": 3128,
      "members": true,
      "buy_average": 2943,
      "name": "Guthix page 2",
      "sp": 200
    },
    "3837": {
      "overall_average": 3160,
      "id": 3837,
      "sell_average": 3704,
      "members": true,
      "buy_average": 6700,
      "name": "Guthix page 3",
      "sp": 200
    },
    "3838": {
      "overall_average": 3666,
      "id": 3838,
      "sell_average": 3453,
      "members": true,
      "buy_average": 3240,
      "name": "Guthix page 4",
      "sp": 200
    },
    "3853": {
      "overall_average": 993,
      "id": 3853,
      "sell_average": 993,
      "members": true,
      "buy_average": 993,
      "name": "Games necklace(8)",
      "sp": 1050
    },
    "4012": {
      "overall_average": 329,
      "id": 4012,
      "sell_average": 329,
      "members": true,
      "buy_average": 0,
      "name": "Monkey nuts",
      "sp": 3
    },
    "4014": {
      "overall_average": 1008,
      "id": 4014,
      "sell_average": 1008,
      "members": true,
      "buy_average": 0,
      "name": "Monkey bar",
      "sp": 50
    },
    "4016": {
      "overall_average": 0,
      "id": 4016,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Banana stew",
      "sp": 300
    },
    "4087": {
      "overall_average": 184904,
      "id": 4087,
      "sell_average": 171478,
      "members": true,
      "buy_average": 165877,
      "name": "Dragon platelegs",
      "sp": 270000
    },
    "4089": {
      "overall_average": 11105,
      "id": 4089,
      "sell_average": 11345,
      "members": true,
      "buy_average": 11443,
      "name": "Mystic hat",
      "sp": 15000
    },
    "4091": {
      "overall_average": 74594,
      "id": 4091,
      "sell_average": 72488,
      "members": true,
      "buy_average": 71381,
      "name": "Mystic robe top",
      "sp": 120000
    },
    "4093": {
      "overall_average": 52423,
      "id": 4093,
      "sell_average": 49347,
      "members": true,
      "buy_average": 47836,
      "name": "Mystic robe bottom",
      "sp": 80000
    },
    "4095": {
      "overall_average": 6071,
      "id": 4095,
      "sell_average": 5925,
      "members": true,
      "buy_average": 5831,
      "name": "Mystic gloves",
      "sp": 10000
    },
    "4097": {
      "overall_average": 7174,
      "id": 4097,
      "sell_average": 7061,
      "members": true,
      "buy_average": 6763,
      "name": "Mystic boots",
      "sp": 10000
    },
    "4099": {
      "overall_average": 14386,
      "id": 4099,
      "sell_average": 14455,
      "members": true,
      "buy_average": 14530,
      "name": "Mystic hat (dark)",
      "sp": 15000
    },
    "4101": {
      "overall_average": 74016,
      "id": 4101,
      "sell_average": 73243,
      "members": true,
      "buy_average": 72039,
      "name": "Mystic robe top (dark)",
      "sp": 120000
    },
    "4103": {
      "overall_average": 52674,
      "id": 4103,
      "sell_average": 52326,
      "members": true,
      "buy_average": 51602,
      "name": "Mystic robe bottom (dark)",
      "sp": 80000
    },
    "4105": {
      "overall_average": 23299,
      "id": 4105,
      "sell_average": 15718,
      "members": true,
      "buy_average": 9400,
      "name": "Mystic gloves (dark)",
      "sp": 10000
    },
    "4107": {
      "overall_average": 67474,
      "id": 4107,
      "sell_average": 68281,
      "members": true,
      "buy_average": 68887,
      "name": "Mystic boots (dark)",
      "sp": 10000
    },
    "4109": {
      "overall_average": 10399,
      "id": 4109,
      "sell_average": 9107,
      "members": true,
      "buy_average": 8676,
      "name": "Mystic hat (light)",
      "sp": 15000
    },
    "4111": {
      "overall_average": 82986,
      "id": 4111,
      "sell_average": 78649,
      "members": true,
      "buy_average": 71524,
      "name": "Mystic robe top (light)",
      "sp": 120000
    },
    "4113": {
      "overall_average": 55976,
      "id": 4113,
      "sell_average": 53019,
      "members": true,
      "buy_average": 48372,
      "name": "Mystic robe bottom (light)",
      "sp": 80000
    },
    "4115": {
      "overall_average": 0,
      "id": 4115,
      "sell_average": 4500,
      "members": true,
      "buy_average": 4500,
      "name": "Mystic gloves (light)",
      "sp": 10000
    },
    "4117": {
      "overall_average": 20982,
      "id": 4117,
      "sell_average": 20927,
      "members": true,
      "buy_average": 20813,
      "name": "Mystic boots (light)",
      "sp": 10000
    },
    "4119": {
      "overall_average": 370,
      "id": 4119,
      "sell_average": 365,
      "members": true,
      "buy_average": 360,
      "name": "Bronze boots",
      "sp": 24
    },
    "4121": {
      "overall_average": 14394,
      "id": 4121,
      "sell_average": 12585,
      "members": true,
      "buy_average": 8966,
      "name": "Iron boots",
      "sp": 84
    },
    "4123": {
      "overall_average": 100,
      "id": 4123,
      "sell_average": 100,
      "members": true,
      "buy_average": 100,
      "name": "Steel boots",
      "sp": 300
    },
    "4125": {
      "overall_average": 1292,
      "id": 4125,
      "sell_average": 814,
      "members": true,
      "buy_average": 200,
      "name": "Black boots",
      "sp": 576
    },
    "4127": {
      "overall_average": 4900,
      "id": 4127,
      "sell_average": 1498,
      "members": true,
      "buy_average": 1120,
      "name": "Mithril boots",
      "sp": 780
    },
    "4129": {
      "overall_average": 3022,
      "id": 4129,
      "sell_average": 2184,
      "members": true,
      "buy_average": 927,
      "name": "Adamant boots",
      "sp": 1920
    },
    "4131": {
      "overall_average": 8259,
      "id": 4131,
      "sell_average": 7917,
      "members": true,
      "buy_average": 7654,
      "name": "Rune boots",
      "sp": 12500
    },
    "4151": {
      "overall_average": 2125478,
      "id": 4151,
      "sell_average": 2123054,
      "members": true,
      "buy_average": 2120606,
      "name": "Abyssal whip",
      "sp": 120001
    },
    "4153": {
      "overall_average": 32029,
      "id": 4153,
      "sell_average": 34811,
      "members": true,
      "buy_average": 37296,
      "name": "Granite maul",
      "sp": 50000
    },
    "4156": {
      "overall_average": 3933,
      "id": 4156,
      "sell_average": 4057,
      "members": true,
      "buy_average": 4171,
      "name": "Mirror shield",
      "sp": 5000
    },
    "4161": {
      "overall_average": 30,
      "id": 4161,
      "sell_average": 29,
      "members": true,
      "buy_average": 28,
      "name": "Bag of salt",
      "sp": 10
    },
    "4162": {
      "overall_average": 600,
      "id": 4162,
      "sell_average": 573,
      "members": true,
      "buy_average": 520,
      "name": "Rock hammer",
      "sp": 500
    },
    "4164": {
      "overall_average": 419,
      "id": 4164,
      "sell_average": 317,
      "members": true,
      "buy_average": 43,
      "name": "Facemask",
      "sp": 200
    },
    "4166": {
      "overall_average": 536,
      "id": 4166,
      "sell_average": 327,
      "members": true,
      "buy_average": 15,
      "name": "Earmuffs",
      "sp": 200
    },
    "4168": {
      "overall_average": 311,
      "id": 4168,
      "sell_average": 267,
      "members": true,
      "buy_average": 246,
      "name": "Nose peg",
      "sp": 200
    },
    "4170": {
      "overall_average": 21936,
      "id": 4170,
      "sell_average": 19792,
      "members": true,
      "buy_average": 18720,
      "name": "Slayer's staff",
      "sp": 21000
    },
    "4207": {
      "overall_average": 2000,
      "id": 4207,
      "sell_average": 1944,
      "members": true,
      "buy_average": 1938,
      "name": "Crystal seed",
      "sp": 1
    },
    "4212": {
      "overall_average": 923000,
      "id": 4212,
      "sell_average": 923000,
      "members": true,
      "buy_average": 0,
      "name": "New crystal bow",
      "sp": 279000
    },
    "4224": {
      "overall_average": 0,
      "id": 4224,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "New crystal shield",
      "sp": 800000
    },
    "4298": {
      "overall_average": 78,
      "id": 4298,
      "sell_average": 49,
      "members": true,
      "buy_average": 39,
      "name": "Ham shirt",
      "sp": 75
    },
    "4300": {
      "overall_average": 419,
      "id": 4300,
      "sell_average": 229,
      "members": true,
      "buy_average": 86,
      "name": "Ham robe",
      "sp": 75
    },
    "4302": {
      "overall_average": 204,
      "id": 4302,
      "sell_average": 204,
      "members": true,
      "buy_average": 204,
      "name": "Ham hood",
      "sp": 75
    },
    "4304": {
      "overall_average": 4371,
      "id": 4304,
      "sell_average": 3111,
      "members": true,
      "buy_average": 1852,
      "name": "Ham cloak",
      "sp": 75
    },
    "4306": {
      "overall_average": 1768,
      "id": 4306,
      "sell_average": 1480,
      "members": true,
      "buy_average": 1263,
      "name": "Ham logo",
      "sp": 75
    },
    "4308": {
      "overall_average": 1289,
      "id": 4308,
      "sell_average": 1216,
      "members": true,
      "buy_average": 1108,
      "name": "Ham gloves",
      "sp": 75
    },
    "4310": {
      "overall_average": 1836,
      "id": 4310,
      "sell_average": 1701,
      "members": true,
      "buy_average": 1605,
      "name": "Ham boots",
      "sp": 75
    },
    "4315": {
      "overall_average": 317,
      "id": 4315,
      "sell_average": 317,
      "members": false,
      "buy_average": 0,
      "name": "Team-1 cape",
      "sp": 50
    },
    "4317": {
      "overall_average": 181,
      "id": 4317,
      "sell_average": 181,
      "members": false,
      "buy_average": 0,
      "name": "Team-2 cape",
      "sp": 50
    },
    "4319": {
      "overall_average": 0,
      "id": 4319,
      "sell_average": 800,
      "members": false,
      "buy_average": 800,
      "name": "Team-3 cape",
      "sp": 50
    },
    "4321": {
      "overall_average": 0,
      "id": 4321,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Team-4 cape",
      "sp": 50
    },
    "4323": {
      "overall_average": 0,
      "id": 4323,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Team-5 cape",
      "sp": 50
    },
    "4325": {
      "overall_average": 0,
      "id": 4325,
      "sell_average": 10,
      "members": false,
      "buy_average": 10,
      "name": "Team-6 cape",
      "sp": 50
    },
    "4327": {
      "overall_average": 0,
      "id": 4327,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Team-7 cape",
      "sp": 50
    },
    "4329": {
      "overall_average": 282,
      "id": 4329,
      "sell_average": 282,
      "members": false,
      "buy_average": 0,
      "name": "Team-8 cape",
      "sp": 50
    },
    "4331": {
      "overall_average": 0,
      "id": 4331,
      "sell_average": 57,
      "members": false,
      "buy_average": 57,
      "name": "Team-9 cape",
      "sp": 50
    },
    "4333": {
      "overall_average": 327,
      "id": 4333,
      "sell_average": 315,
      "members": false,
      "buy_average": 274,
      "name": "Team-10 cape",
      "sp": 50
    },
    "4335": {
      "overall_average": 0,
      "id": 4335,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Team-11 cape",
      "sp": 50
    },
    "4337": {
      "overall_average": 479,
      "id": 4337,
      "sell_average": 479,
      "members": false,
      "buy_average": 479,
      "name": "Team-12 cape",
      "sp": 50
    },
    "4339": {
      "overall_average": 0,
      "id": 4339,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Team-13 cape",
      "sp": 50
    },
    "4341": {
      "overall_average": 0,
      "id": 4341,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Team-14 cape",
      "sp": 50
    },
    "4343": {
      "overall_average": 0,
      "id": 4343,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Team-15 cape",
      "sp": 50
    },
    "4345": {
      "overall_average": 30,
      "id": 4345,
      "sell_average": 28,
      "members": false,
      "buy_average": 5,
      "name": "Team-16 cape",
      "sp": 50
    },
    "4347": {
      "overall_average": 0,
      "id": 4347,
      "sell_average": 345,
      "members": false,
      "buy_average": 345,
      "name": "Team-17 cape",
      "sp": 50
    },
    "4349": {
      "overall_average": 0,
      "id": 4349,
      "sell_average": 642,
      "members": false,
      "buy_average": 642,
      "name": "Team-18 cape",
      "sp": 50
    },
    "4351": {
      "overall_average": 442,
      "id": 4351,
      "sell_average": 405,
      "members": false,
      "buy_average": 384,
      "name": "Team-19 cape",
      "sp": 50
    },
    "4353": {
      "overall_average": 0,
      "id": 4353,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Team-20 cape",
      "sp": 50
    },
    "4355": {
      "overall_average": 0,
      "id": 4355,
      "sell_average": 482,
      "members": false,
      "buy_average": 482,
      "name": "Team-21 cape",
      "sp": 50
    },
    "4357": {
      "overall_average": 0,
      "id": 4357,
      "sell_average": 252,
      "members": false,
      "buy_average": 252,
      "name": "Team-22 cape",
      "sp": 50
    },
    "4359": {
      "overall_average": 0,
      "id": 4359,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Team-23 cape",
      "sp": 50
    },
    "4361": {
      "overall_average": 500,
      "id": 4361,
      "sell_average": 500,
      "members": false,
      "buy_average": 0,
      "name": "Team-24 cape",
      "sp": 50
    },
    "4363": {
      "overall_average": 0,
      "id": 4363,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Team-25 cape",
      "sp": 50
    },
    "4365": {
      "overall_average": 999,
      "id": 4365,
      "sell_average": 130,
      "members": false,
      "buy_average": 120,
      "name": "Team-26 cape",
      "sp": 50
    },
    "4367": {
      "overall_average": 0,
      "id": 4367,
      "sell_average": 415,
      "members": false,
      "buy_average": 415,
      "name": "Team-27 cape",
      "sp": 50
    },
    "4369": {
      "overall_average": 547,
      "id": 4369,
      "sell_average": 547,
      "members": false,
      "buy_average": 517,
      "name": "Team-28 cape",
      "sp": 50
    },
    "4371": {
      "overall_average": 0,
      "id": 4371,
      "sell_average": 101,
      "members": false,
      "buy_average": 101,
      "name": "Team-29 cape",
      "sp": 50
    },
    "4373": {
      "overall_average": 271,
      "id": 4373,
      "sell_average": 273,
      "members": false,
      "buy_average": 274,
      "name": "Team-30 cape",
      "sp": 50
    },
    "4375": {
      "overall_average": 2000,
      "id": 4375,
      "sell_average": 2000,
      "members": false,
      "buy_average": 2000,
      "name": "Team-31 cape",
      "sp": 50
    },
    "4377": {
      "overall_average": 0,
      "id": 4377,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Team-32 cape",
      "sp": 50
    },
    "4379": {
      "overall_average": 618,
      "id": 4379,
      "sell_average": 618,
      "members": false,
      "buy_average": 0,
      "name": "Team-33 cape",
      "sp": 50
    },
    "4381": {
      "overall_average": 0,
      "id": 4381,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Team-34 cape",
      "sp": 50
    },
    "4383": {
      "overall_average": 0,
      "id": 4383,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Team-35 cape",
      "sp": 50
    },
    "4385": {
      "overall_average": 0,
      "id": 4385,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Team-36 cape",
      "sp": 50
    },
    "4387": {
      "overall_average": 0,
      "id": 4387,
      "sell_average": 450,
      "members": false,
      "buy_average": 450,
      "name": "Team-37 cape",
      "sp": 50
    },
    "4389": {
      "overall_average": 591,
      "id": 4389,
      "sell_average": 576,
      "members": false,
      "buy_average": 380,
      "name": "Team-38 cape",
      "sp": 50
    },
    "4391": {
      "overall_average": 242,
      "id": 4391,
      "sell_average": 233,
      "members": false,
      "buy_average": 222,
      "name": "Team-39 cape",
      "sp": 50
    },
    "4393": {
      "overall_average": 138,
      "id": 4393,
      "sell_average": 138,
      "members": false,
      "buy_average": 138,
      "name": "Team-40 cape",
      "sp": 50
    },
    "4395": {
      "overall_average": 438,
      "id": 4395,
      "sell_average": 443,
      "members": false,
      "buy_average": 451,
      "name": "Team-41 cape",
      "sp": 50
    },
    "4397": {
      "overall_average": 0,
      "id": 4397,
      "sell_average": 500,
      "members": false,
      "buy_average": 500,
      "name": "Team-42 cape",
      "sp": 50
    },
    "4399": {
      "overall_average": 229,
      "id": 4399,
      "sell_average": 229,
      "members": false,
      "buy_average": 0,
      "name": "Team-43 cape",
      "sp": 50
    },
    "4401": {
      "overall_average": 0,
      "id": 4401,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Team-44 cape",
      "sp": 50
    },
    "4403": {
      "overall_average": 633,
      "id": 4403,
      "sell_average": 630,
      "members": false,
      "buy_average": 628,
      "name": "Team-45 cape",
      "sp": 50
    },
    "4405": {
      "overall_average": 76,
      "id": 4405,
      "sell_average": 68,
      "members": false,
      "buy_average": 43,
      "name": "Team-46 cape",
      "sp": 50
    },
    "4407": {
      "overall_average": 0,
      "id": 4407,
      "sell_average": 281,
      "members": false,
      "buy_average": 281,
      "name": "Team-47 cape",
      "sp": 50
    },
    "4409": {
      "overall_average": 1000,
      "id": 4409,
      "sell_average": 974,
      "members": false,
      "buy_average": 437,
      "name": "Team-48 cape",
      "sp": 50
    },
    "4411": {
      "overall_average": 499,
      "id": 4411,
      "sell_average": 499,
      "members": false,
      "buy_average": 0,
      "name": "Team-49 cape",
      "sp": 50
    },
    "4413": {
      "overall_average": 150,
      "id": 4413,
      "sell_average": 120,
      "members": false,
      "buy_average": 62,
      "name": "Team-50 cape",
      "sp": 50
    },
    "4417": {
      "overall_average": 1908,
      "id": 4417,
      "sell_average": 1907,
      "members": true,
      "buy_average": 1902,
      "name": "Guthix rest(4)",
      "sp": 50
    },
    "4419": {
      "overall_average": 1201,
      "id": 4419,
      "sell_average": 1201,
      "members": true,
      "buy_average": 1201,
      "name": "Guthix rest(3)",
      "sp": 50
    },
    "4421": {
      "overall_average": 0,
      "id": 4421,
      "sell_average": 800,
      "members": true,
      "buy_average": 800,
      "name": "Guthix rest(2)",
      "sp": 50
    },
    "4423": {
      "overall_average": 402,
      "id": 4423,
      "sell_average": 402,
      "members": true,
      "buy_average": 402,
      "name": "Guthix rest(1)",
      "sp": 50
    },
    "4436": {
      "overall_average": 0,
      "id": 4436,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Airtight pot",
      "sp": 10
    },
    "4438": {
      "overall_average": 0,
      "id": 4438,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Unfired pot lid",
      "sp": 10
    },
    "4440": {
      "overall_average": 369,
      "id": 4440,
      "sell_average": 369,
      "members": true,
      "buy_average": 369,
      "name": "Pot lid",
      "sp": 15
    },
    "4456": {
      "overall_average": 224,
      "id": 4456,
      "sell_average": 209,
      "members": true,
      "buy_average": 199,
      "name": "Bowl of hot water",
      "sp": 10
    },
    "4458": {
      "overall_average": 0,
      "id": 4458,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cup of water",
      "sp": 10
    },
    "4460": {
      "overall_average": 203,
      "id": 4460,
      "sell_average": 203,
      "members": true,
      "buy_average": 0,
      "name": "Cup of hot water",
      "sp": 10
    },
    "4517": {
      "overall_average": 0,
      "id": 4517,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Giant frog legs",
      "sp": 100
    },
    "4522": {
      "overall_average": 927,
      "id": 4522,
      "sell_average": 927,
      "members": true,
      "buy_average": 0,
      "name": "Oil lamp",
      "sp": 28
    },
    "4525": {
      "overall_average": 0,
      "id": 4525,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Empty oil lamp",
      "sp": 25
    },
    "4527": {
      "overall_average": 3,
      "id": 4527,
      "sell_average": 2,
      "members": true,
      "buy_average": 2,
      "name": "Empty candle lantern",
      "sp": 10
    },
    "4529": {
      "overall_average": 332,
      "id": 4529,
      "sell_average": 326,
      "members": true,
      "buy_average": 312,
      "name": "Candle lantern",
      "sp": 15
    },
    "4532": {
      "overall_average": 0,
      "id": 4532,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Candle lantern",
      "sp": 15
    },
    "4535": {
      "overall_average": 0,
      "id": 4535,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Empty oil lantern",
      "sp": 120
    },
    "4537": {
      "overall_average": 856,
      "id": 4537,
      "sell_average": 856,
      "members": true,
      "buy_average": 0,
      "name": "Oil lantern",
      "sp": 125
    },
    "4540": {
      "overall_average": 0,
      "id": 4540,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oil lantern frame",
      "sp": 90
    },
    "4542": {
      "overall_average": 6,
      "id": 4542,
      "sell_average": 6,
      "members": true,
      "buy_average": 6,
      "name": "Lantern lens",
      "sp": 70
    },
    "4544": {
      "overall_average": 0,
      "id": 4544,
      "sell_average": 205,
      "members": true,
      "buy_average": 205,
      "name": "Bullseye lantern (unf)",
      "sp": 300
    },
    "4546": {
      "overall_average": 0,
      "id": 4546,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bullseye lantern (empty)",
      "sp": 400
    },
    "4548": {
      "overall_average": 925,
      "id": 4548,
      "sell_average": 920,
      "members": true,
      "buy_average": 800,
      "name": "Bullseye lantern",
      "sp": 420
    },
    "4551": {
      "overall_average": 539,
      "id": 4551,
      "sell_average": 248,
      "members": true,
      "buy_average": 53,
      "name": "Spiny helmet",
      "sp": 650
    },
    "4580": {
      "overall_average": 0,
      "id": 4580,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black spear",
      "sp": 650
    },
    "4582": {
      "overall_average": 0,
      "id": 4582,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black spear(p)",
      "sp": 750
    },
    "4585": {
      "overall_average": 161337,
      "id": 4585,
      "sell_average": 168054,
      "members": true,
      "buy_average": 171502,
      "name": "Dragon plateskirt",
      "sp": 270000
    },
    "4587": {
      "overall_average": 75286,
      "id": 4587,
      "sell_average": 74231,
      "members": true,
      "buy_average": 73407,
      "name": "Dragon scimitar",
      "sp": 100000
    },
    "4591": {
      "overall_average": 1300,
      "id": 4591,
      "sell_average": 1300,
      "members": true,
      "buy_average": 0,
      "name": "Kharidian headpiece",
      "sp": 1
    },
    "4593": {
      "overall_average": 1000,
      "id": 4593,
      "sell_average": 1000,
      "members": true,
      "buy_average": 0,
      "name": "Fake beard",
      "sp": 1
    },
    "4595": {
      "overall_average": 0,
      "id": 4595,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Karidian disguise",
      "sp": 1
    },
    "4600": {
      "overall_average": 173,
      "id": 4600,
      "sell_average": 164,
      "members": true,
      "buy_average": 155,
      "name": "Willow blackjack",
      "sp": 600
    },
    "4608": {
      "overall_average": 0,
      "id": 4608,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Super kebab",
      "sp": 3
    },
    "4627": {
      "overall_average": 0,
      "id": 4627,
      "sell_average": 1500,
      "members": true,
      "buy_average": 1500,
      "name": "Bandit's brew",
      "sp": 500
    },
    "4668": {
      "overall_average": 0,
      "id": 4668,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Garlic powder",
      "sp": 10
    },
    "4675": {
      "overall_average": 91622,
      "id": 4675,
      "sell_average": 91356,
      "members": true,
      "buy_average": 90713,
      "name": "Ancient staff",
      "sp": 100000
    },
    "4684": {
      "overall_average": 3000,
      "id": 4684,
      "sell_average": 3000,
      "members": true,
      "buy_average": 3000,
      "name": "Linen",
      "sp": 30
    },
    "4687": {
      "overall_average": 390,
      "id": 4687,
      "sell_average": 390,
      "members": true,
      "buy_average": 0,
      "name": "Bucket of sap",
      "sp": 30
    },
    "4689": {
      "overall_average": 0,
      "id": 4689,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Pile of salt",
      "sp": 20
    },
    "4694": {
      "overall_average": 85,
      "id": 4694,
      "sell_average": 85,
      "members": true,
      "buy_average": 0,
      "name": "Steam rune",
      "sp": 20
    },
    "4695": {
      "overall_average": 54,
      "id": 4695,
      "sell_average": 50,
      "members": true,
      "buy_average": 47,
      "name": "Mist rune",
      "sp": 20
    },
    "4696": {
      "overall_average": 4,
      "id": 4696,
      "sell_average": 3,
      "members": true,
      "buy_average": 3,
      "name": "Dust rune",
      "sp": 20
    },
    "4697": {
      "overall_average": 42,
      "id": 4697,
      "sell_average": 40,
      "members": true,
      "buy_average": 36,
      "name": "Smoke rune",
      "sp": 20
    },
    "4698": {
      "overall_average": 203,
      "id": 4698,
      "sell_average": 209,
      "members": true,
      "buy_average": 215,
      "name": "Mud rune",
      "sp": 20
    },
    "4699": {
      "overall_average": 3,
      "id": 4699,
      "sell_average": 3,
      "members": true,
      "buy_average": 3,
      "name": "Lava rune",
      "sp": 20
    },
    "4708": {
      "overall_average": 89863,
      "id": 4708,
      "sell_average": 89497,
      "members": true,
      "buy_average": 89131,
      "name": "Ahrim's hood",
      "sp": 13000
    },
    "4710": {
      "overall_average": 122305,
      "id": 4710,
      "sell_average": 120863,
      "members": true,
      "buy_average": 117438,
      "name": "Ahrim's staff",
      "sp": 85000
    },
    "4712": {
      "overall_average": 1746051,
      "id": 4712,
      "sell_average": 1737610,
      "members": true,
      "buy_average": 1726483,
      "name": "Ahrim's robetop",
      "sp": 50000
    },
    "4714": {
      "overall_average": 1471355,
      "id": 4714,
      "sell_average": 1464661,
      "members": true,
      "buy_average": 1457966,
      "name": "Ahrim's robeskirt",
      "sp": 47000
    },
    "4716": {
      "overall_average": 396849,
      "id": 4716,
      "sell_average": 395236,
      "members": true,
      "buy_average": 394026,
      "name": "Dharok's helm",
      "sp": 103000
    },
    "4718": {
      "overall_average": 481202,
      "id": 4718,
      "sell_average": 480248,
      "members": true,
      "buy_average": 479771,
      "name": "Dharok's greataxe",
      "sp": 208000
    },
    "4720": {
      "overall_average": 1388480,
      "id": 4720,
      "sell_average": 1384045,
      "members": true,
      "buy_average": 1380720,
      "name": "Dharok's platebody",
      "sp": 280000
    },
    "4722": {
      "overall_average": 1259701,
      "id": 4722,
      "sell_average": 1258021,
      "members": true,
      "buy_average": 1257181,
      "name": "Dharok's platelegs",
      "sp": 275000
    },
    "4724": {
      "overall_average": 1542093,
      "id": 4724,
      "sell_average": 1537255,
      "members": true,
      "buy_average": 1530000,
      "name": "Guthan's helm",
      "sp": 103000
    },
    "4726": {
      "overall_average": 1426600,
      "id": 4726,
      "sell_average": 1425375,
      "members": true,
      "buy_average": 1423333,
      "name": "Guthan's warspear",
      "sp": 100000
    },
    "4728": {
      "overall_average": 630222,
      "id": 4728,
      "sell_average": 603381,
      "members": true,
      "buy_average": 583250,
      "name": "Guthan's platebody",
      "sp": 280000
    },
    "4730": {
      "overall_average": 621972,
      "id": 4730,
      "sell_average": 620384,
      "members": true,
      "buy_average": 618003,
      "name": "Guthan's chainskirt",
      "sp": 275000
    },
    "4732": {
      "overall_average": 52941,
      "id": 4732,
      "sell_average": 52226,
      "members": true,
      "buy_average": 51292,
      "name": "Karil's coif",
      "sp": 13000
    },
    "4734": {
      "overall_average": 149999,
      "id": 4734,
      "sell_average": 146811,
      "members": true,
      "buy_average": 145855,
      "name": "Karil's crossbow",
      "sp": 160000
    },
    "4736": {
      "overall_average": 2138956,
      "id": 4736,
      "sell_average": 2131185,
      "members": true,
      "buy_average": 2124410,
      "name": "Karil's leathertop",
      "sp": 50000
    },
    "4738": {
      "overall_average": 215463,
      "id": 4738,
      "sell_average": 214690,
      "members": true,
      "buy_average": 213987,
      "name": "Karil's leatherskirt",
      "sp": 47000
    },
    "4740": {
      "overall_average": 73,
      "id": 4740,
      "sell_average": 71,
      "members": true,
      "buy_average": 70,
      "name": "Bolt rack",
      "sp": 50
    },
    "4745": {
      "overall_average": 104985,
      "id": 4745,
      "sell_average": 103400,
      "members": true,
      "buy_average": 101816,
      "name": "Torag's helm",
      "sp": 103000
    },
    "4747": {
      "overall_average": 162553,
      "id": 4747,
      "sell_average": 162553,
      "members": true,
      "buy_average": 0,
      "name": "Torag's hammers",
      "sp": 160000
    },
    "4749": {
      "overall_average": 225245,
      "id": 4749,
      "sell_average": 222095,
      "members": true,
      "buy_average": 219995,
      "name": "Torag's platebody",
      "sp": 280000
    },
    "4751": {
      "overall_average": 305719,
      "id": 4751,
      "sell_average": 302200,
      "members": true,
      "buy_average": 298211,
      "name": "Torag's platelegs",
      "sp": 275000
    },
    "4753": {
      "overall_average": 612989,
      "id": 4753,
      "sell_average": 596775,
      "members": true,
      "buy_average": 580560,
      "name": "Verac's helm",
      "sp": 103000
    },
    "4755": {
      "overall_average": 161643,
      "id": 4755,
      "sell_average": 159929,
      "members": true,
      "buy_average": 157786,
      "name": "Verac's flail",
      "sp": 160000
    },
    "4757": {
      "overall_average": 215918,
      "id": 4757,
      "sell_average": 215274,
      "members": true,
      "buy_average": 214860,
      "name": "Verac's brassard",
      "sp": 280000
    },
    "4759": {
      "overall_average": 955260,
      "id": 4759,
      "sell_average": 951058,
      "members": true,
      "buy_average": 945711,
      "name": "Verac's plateskirt",
      "sp": 275000
    },
    "4773": {
      "overall_average": 0,
      "id": 4773,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze brutal",
      "sp": 5
    },
    "4778": {
      "overall_average": 0,
      "id": 4778,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron brutal",
      "sp": 10
    },
    "4783": {
      "overall_average": 101,
      "id": 4783,
      "sell_average": 101,
      "members": true,
      "buy_average": 101,
      "name": "Steel brutal",
      "sp": 20
    },
    "4788": {
      "overall_average": 0,
      "id": 4788,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black brutal",
      "sp": 35
    },
    "4793": {
      "overall_average": 0,
      "id": 4793,
      "sell_average": 120,
      "members": true,
      "buy_average": 120,
      "name": "Mithril brutal",
      "sp": 50
    },
    "4798": {
      "overall_average": 0,
      "id": 4798,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant brutal",
      "sp": 95
    },
    "4803": {
      "overall_average": 999,
      "id": 4803,
      "sell_average": 999,
      "members": true,
      "buy_average": 0,
      "name": "Rune brutal",
      "sp": 450
    },
    "4812": {
      "overall_average": 0,
      "id": 4812,
      "sell_average": 513,
      "members": true,
      "buy_average": 513,
      "name": "Zogre bones",
      "sp": 1
    },
    "4819": {
      "overall_average": 15,
      "id": 4819,
      "sell_average": 15,
      "members": true,
      "buy_average": 13,
      "name": "Bronze nails",
      "sp": 2
    },
    "4820": {
      "overall_average": 19,
      "id": 4820,
      "sell_average": 19,
      "members": true,
      "buy_average": 18,
      "name": "Iron nails",
      "sp": 4
    },
    "4821": {
      "overall_average": 0,
      "id": 4821,
      "sell_average": 2453,
      "members": true,
      "buy_average": 2453,
      "name": "Black nails",
      "sp": 12
    },
    "4822": {
      "overall_average": 47,
      "id": 4822,
      "sell_average": 48,
      "members": true,
      "buy_average": 48,
      "name": "Mithril nails",
      "sp": 18
    },
    "4823": {
      "overall_average": 150,
      "id": 4823,
      "sell_average": 150,
      "members": true,
      "buy_average": 150,
      "name": "Adamantite nails",
      "sp": 45
    },
    "4824": {
      "overall_average": 0,
      "id": 4824,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune nails",
      "sp": 220
    },
    "4825": {
      "overall_average": 0,
      "id": 4825,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Unstrung comp bow",
      "sp": 90
    },
    "4827": {
      "overall_average": 1350,
      "id": 4827,
      "sell_average": 1305,
      "members": true,
      "buy_average": 1261,
      "name": "Comp ogre bow",
      "sp": 180
    },
    "4830": {
      "overall_average": 0,
      "id": 4830,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fayrg bones",
      "sp": 1
    },
    "4832": {
      "overall_average": 0,
      "id": 4832,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Raurg bones",
      "sp": 1
    },
    "4834": {
      "overall_average": 0,
      "id": 4834,
      "sell_average": 25773,
      "members": true,
      "buy_average": 25773,
      "name": "Ourg bones",
      "sp": 1
    },
    "4842": {
      "overall_average": 893,
      "id": 4842,
      "sell_average": 893,
      "members": true,
      "buy_average": 893,
      "name": "Relicym's balm(4)",
      "sp": 225
    },
    "4844": {
      "overall_average": 0,
      "id": 4844,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Relicym's balm(3)",
      "sp": 200
    },
    "4846": {
      "overall_average": 0,
      "id": 4846,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Relicym's balm(2)",
      "sp": 150
    },
    "4848": {
      "overall_average": 0,
      "id": 4848,
      "sell_average": 482,
      "members": true,
      "buy_average": 482,
      "name": "Relicym's balm(1)",
      "sp": 75
    },
    "4850": {
      "overall_average": 1080,
      "id": 4850,
      "sell_average": 1080,
      "members": true,
      "buy_average": 1080,
      "name": "Ogre coffin key",
      "sp": 100
    },
    "4860": {
      "overall_average": 0,
      "id": 4860,
      "sell_average": 22000,
      "members": true,
      "buy_average": 22000,
      "name": "Ahrim's hood 0",
      "sp": 13000
    },
    "4866": {
      "overall_average": 0,
      "id": 4866,
      "sell_average": 51345,
      "members": true,
      "buy_average": 51345,
      "name": "Ahrim's staff 0",
      "sp": 85000
    },
    "4872": {
      "overall_average": 0,
      "id": 4872,
      "sell_average": 1647536,
      "members": true,
      "buy_average": 1647536,
      "name": "Ahrim's robetop 0",
      "sp": 50000
    },
    "4878": {
      "overall_average": 0,
      "id": 4878,
      "sell_average": 1364517,
      "members": true,
      "buy_average": 1364517,
      "name": "Ahrim's robeskirt 0",
      "sp": 47000
    },
    "4884": {
      "overall_average": 0,
      "id": 4884,
      "sell_average": 360000,
      "members": true,
      "buy_average": 360000,
      "name": "Dharok's helm 0",
      "sp": 103000
    },
    "4890": {
      "overall_average": 0,
      "id": 4890,
      "sell_average": 425000,
      "members": true,
      "buy_average": 425000,
      "name": "Dharok's greataxe 0",
      "sp": 208000
    },
    "4896": {
      "overall_average": 0,
      "id": 4896,
      "sell_average": 1335000,
      "members": true,
      "buy_average": 1335000,
      "name": "Dharok's platebody 0",
      "sp": 280000
    },
    "4902": {
      "overall_average": 0,
      "id": 4902,
      "sell_average": 1215000,
      "members": true,
      "buy_average": 1215000,
      "name": "Dharok's platelegs 0",
      "sp": 275000
    },
    "4908": {
      "overall_average": 0,
      "id": 4908,
      "sell_average": 1436000,
      "members": true,
      "buy_average": 1436000,
      "name": "Guthan's helm 0",
      "sp": 103000
    },
    "4914": {
      "overall_average": 1300000,
      "id": 4914,
      "sell_average": 1303253,
      "members": true,
      "buy_average": 1303253,
      "name": "Guthan's warspear 0",
      "sp": 100000
    },
    "4920": {
      "overall_average": 0,
      "id": 4920,
      "sell_average": 500000,
      "members": true,
      "buy_average": 500000,
      "name": "Guthan's platebody 0",
      "sp": 280000
    },
    "4926": {
      "overall_average": 510000,
      "id": 4926,
      "sell_average": 510000,
      "members": true,
      "buy_average": 510000,
      "name": "Guthan's chainskirt 0",
      "sp": 275000
    },
    "4932": {
      "overall_average": 8991,
      "id": 4932,
      "sell_average": 8991,
      "members": true,
      "buy_average": 0,
      "name": "Karil's coif 0",
      "sp": 13000
    },
    "4938": {
      "overall_average": 0,
      "id": 4938,
      "sell_average": 95899,
      "members": true,
      "buy_average": 95899,
      "name": "Karil's crossbow 0",
      "sp": 160000
    },
    "4944": {
      "overall_average": 0,
      "id": 4944,
      "sell_average": 2055640,
      "members": true,
      "buy_average": 2055640,
      "name": "Karil's leathertop 0",
      "sp": 50000
    },
    "4950": {
      "overall_average": 126000,
      "id": 4950,
      "sell_average": 126000,
      "members": true,
      "buy_average": 126000,
      "name": "Karil's leatherskirt 0",
      "sp": 47000
    },
    "4956": {
      "overall_average": 0,
      "id": 4956,
      "sell_average": 62016,
      "members": true,
      "buy_average": 62016,
      "name": "Torag's helm 0",
      "sp": 103000
    },
    "4962": {
      "overall_average": 0,
      "id": 4962,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Torag's hammers 0",
      "sp": 160000
    },
    "4968": {
      "overall_average": 0,
      "id": 4968,
      "sell_average": 168899,
      "members": true,
      "buy_average": 168899,
      "name": "Torag's platebody 0",
      "sp": 280000
    },
    "4974": {
      "overall_average": 0,
      "id": 4974,
      "sell_average": 230412,
      "members": true,
      "buy_average": 230412,
      "name": "Torag's platelegs 0",
      "sp": 275000
    },
    "4980": {
      "overall_average": 0,
      "id": 4980,
      "sell_average": 512423,
      "members": true,
      "buy_average": 512423,
      "name": "Verac's helm 0",
      "sp": 103000
    },
    "4986": {
      "overall_average": 96500,
      "id": 4986,
      "sell_average": 96500,
      "members": true,
      "buy_average": 96500,
      "name": "Verac's flail 0",
      "sp": 160000
    },
    "4992": {
      "overall_average": 0,
      "id": 4992,
      "sell_average": 167899,
      "members": true,
      "buy_average": 167899,
      "name": "Verac's brassard 0",
      "sp": 280000
    },
    "4998": {
      "overall_average": 0,
      "id": 4998,
      "sell_average": 881222,
      "members": true,
      "buy_average": 881222,
      "name": "Verac's plateskirt 0",
      "sp": 275000
    },
    "5001": {
      "overall_average": 0,
      "id": 5001,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Raw cave eel",
      "sp": 15
    },
    "5003": {
      "overall_average": 0,
      "id": 5003,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cave eel",
      "sp": 15
    },
    "5014": {
      "overall_average": 391,
      "id": 5014,
      "sell_average": 2049,
      "members": true,
      "buy_average": 2049,
      "name": "Mining helmet",
      "sp": 600
    },
    "5016": {
      "overall_average": 692,
      "id": 5016,
      "sell_average": 440,
      "members": true,
      "buy_average": 229,
      "name": "Bone spear",
      "sp": 600
    },
    "5018": {
      "overall_average": 0,
      "id": 5018,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bone club",
      "sp": 600
    },
    "5024": {
      "overall_average": 0,
      "id": 5024,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Woven top",
      "sp": 500
    },
    "5026": {
      "overall_average": 823,
      "id": 5026,
      "sell_average": 582,
      "members": true,
      "buy_average": 101,
      "name": "Woven top",
      "sp": 625
    },
    "5028": {
      "overall_average": 4000,
      "id": 5028,
      "sell_average": 1413,
      "members": true,
      "buy_average": 120,
      "name": "Woven top",
      "sp": 650
    },
    "5030": {
      "overall_average": 1671,
      "id": 5030,
      "sell_average": 1671,
      "members": true,
      "buy_average": 1671,
      "name": "Shirt",
      "sp": 450
    },
    "5032": {
      "overall_average": 2379,
      "id": 5032,
      "sell_average": 1389,
      "members": true,
      "buy_average": 400,
      "name": "Shirt",
      "sp": 600
    },
    "5034": {
      "overall_average": 829,
      "id": 5034,
      "sell_average": 634,
      "members": true,
      "buy_average": 576,
      "name": "Shirt",
      "sp": 625
    },
    "5036": {
      "overall_average": 0,
      "id": 5036,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Trousers",
      "sp": 550
    },
    "5038": {
      "overall_average": 0,
      "id": 5038,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Trousers",
      "sp": 700
    },
    "5040": {
      "overall_average": 0,
      "id": 5040,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Trousers",
      "sp": 750
    },
    "5042": {
      "overall_average": 0,
      "id": 5042,
      "sell_average": 2063,
      "members": true,
      "buy_average": 2063,
      "name": "Shorts",
      "sp": 280
    },
    "5044": {
      "overall_average": 2658,
      "id": 5044,
      "sell_average": 1331,
      "members": true,
      "buy_average": 1065,
      "name": "Shorts",
      "sp": 360
    },
    "5046": {
      "overall_average": 2380,
      "id": 5046,
      "sell_average": 1855,
      "members": true,
      "buy_average": 1330,
      "name": "Shorts",
      "sp": 390
    },
    "5048": {
      "overall_average": 0,
      "id": 5048,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Skirt",
      "sp": 350
    },
    "5050": {
      "overall_average": 9979,
      "id": 5050,
      "sell_average": 9979,
      "members": true,
      "buy_average": 0,
      "name": "Skirt",
      "sp": 550
    },
    "5052": {
      "overall_average": 0,
      "id": 5052,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Skirt",
      "sp": 625
    },
    "5075": {
      "overall_average": 3461,
      "id": 5075,
      "sell_average": 3459,
      "members": true,
      "buy_average": 3456,
      "name": "Bird nest",
      "sp": 1
    },
    "5096": {
      "overall_average": 1,
      "id": 5096,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Marigold seed",
      "sp": 2
    },
    "5097": {
      "overall_average": 9,
      "id": 5097,
      "sell_average": 8,
      "members": true,
      "buy_average": 8,
      "name": "Rosemary seed",
      "sp": 4
    },
    "5098": {
      "overall_average": 1,
      "id": 5098,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Nasturtium seed",
      "sp": 11
    },
    "5099": {
      "overall_average": 0,
      "id": 5099,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Woad seed",
      "sp": 11
    },
    "5100": {
      "overall_average": 50,
      "id": 5100,
      "sell_average": 37,
      "members": true,
      "buy_average": 33,
      "name": "Limpwurt seed",
      "sp": 12
    },
    "5101": {
      "overall_average": 1,
      "id": 5101,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Redberry seed",
      "sp": 4
    },
    "5102": {
      "overall_average": 1,
      "id": 5102,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Cadavaberry seed",
      "sp": 9
    },
    "5103": {
      "overall_average": 4,
      "id": 5103,
      "sell_average": 2,
      "members": true,
      "buy_average": 1,
      "name": "Dwellberry seed",
      "sp": 25
    },
    "5104": {
      "overall_average": 0,
      "id": 5104,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Jangerberry seed",
      "sp": 60
    },
    "5105": {
      "overall_average": 17,
      "id": 5105,
      "sell_average": 16,
      "members": true,
      "buy_average": 16,
      "name": "Whiteberry seed",
      "sp": 133
    },
    "5106": {
      "overall_average": 635,
      "id": 5106,
      "sell_average": 633,
      "members": true,
      "buy_average": 631,
      "name": "Poison ivy seed",
      "sp": 166
    },
    "5280": {
      "overall_average": 246,
      "id": 5280,
      "sell_average": 246,
      "members": true,
      "buy_average": 246,
      "name": "Cactus seed",
      "sp": 99
    },
    "5281": {
      "overall_average": 150,
      "id": 5281,
      "sell_average": 59,
      "members": true,
      "buy_average": 46,
      "name": "Belladonna seed",
      "sp": 177
    },
    "5282": {
      "overall_average": 449,
      "id": 5282,
      "sell_average": 156,
      "members": true,
      "buy_average": 108,
      "name": "Mushroom spore",
      "sp": 86
    },
    "5283": {
      "overall_average": 18,
      "id": 5283,
      "sell_average": 15,
      "members": true,
      "buy_average": 15,
      "name": "Apple tree seed",
      "sp": 13
    },
    "5284": {
      "overall_average": 0,
      "id": 5284,
      "sell_average": 11,
      "members": true,
      "buy_average": 11,
      "name": "Banana tree seed",
      "sp": 20
    },
    "5285": {
      "overall_average": 3,
      "id": 5285,
      "sell_average": 13,
      "members": true,
      "buy_average": 14,
      "name": "Orange tree seed",
      "sp": 31
    },
    "5286": {
      "overall_average": 429,
      "id": 5286,
      "sell_average": 358,
      "members": true,
      "buy_average": 309,
      "name": "Curry tree seed",
      "sp": 39
    },
    "5287": {
      "overall_average": 5824,
      "id": 5287,
      "sell_average": 5524,
      "members": true,
      "buy_average": 5433,
      "name": "Pineapple seed",
      "sp": 74
    },
    "5288": {
      "overall_average": 12313,
      "id": 5288,
      "sell_average": 11857,
      "members": true,
      "buy_average": 11616,
      "name": "Papaya tree seed",
      "sp": 115
    },
    "5289": {
      "overall_average": 71025,
      "id": 5289,
      "sell_average": 71004,
      "members": true,
      "buy_average": 70970,
      "name": "Palm tree seed",
      "sp": 254
    },
    "5290": {
      "overall_average": 585,
      "id": 5290,
      "sell_average": 538,
      "members": true,
      "buy_average": 514,
      "name": "Calquat tree seed",
      "sp": 340
    },
    "5291": {
      "overall_average": 0,
      "id": 5291,
      "sell_average": 2,
      "members": true,
      "buy_average": 2,
      "name": "Guam seed",
      "sp": 1
    },
    "5292": {
      "overall_average": 5,
      "id": 5292,
      "sell_average": 3,
      "members": true,
      "buy_average": 3,
      "name": "Marrentill seed",
      "sp": 2
    },
    "5293": {
      "overall_average": 14,
      "id": 5293,
      "sell_average": 12,
      "members": true,
      "buy_average": 10,
      "name": "Tarromin seed",
      "sp": 3
    },
    "5294": {
      "overall_average": 40,
      "id": 5294,
      "sell_average": 39,
      "members": true,
      "buy_average": 38,
      "name": "Harralander seed",
      "sp": 4
    },
    "5295": {
      "overall_average": 34608,
      "id": 5295,
      "sell_average": 34570,
      "members": true,
      "buy_average": 34528,
      "name": "Ranarr seed",
      "sp": 50
    },
    "5296": {
      "overall_average": 2736,
      "id": 5296,
      "sell_average": 2655,
      "members": true,
      "buy_average": 2621,
      "name": "Toadflax seed",
      "sp": 10
    },
    "5297": {
      "overall_average": 92,
      "id": 5297,
      "sell_average": 119,
      "members": true,
      "buy_average": 133,
      "name": "Irit seed",
      "sp": 5
    },
    "5298": {
      "overall_average": 1145,
      "id": 5298,
      "sell_average": 1127,
      "members": true,
      "buy_average": 1113,
      "name": "Avantoe seed",
      "sp": 8
    },
    "5299": {
      "overall_average": 1399,
      "id": 5299,
      "sell_average": 1368,
      "members": true,
      "buy_average": 1336,
      "name": "Kwuarm seed",
      "sp": 11
    },
    "5300": {
      "overall_average": 48498,
      "id": 5300,
      "sell_average": 49116,
      "members": true,
      "buy_average": 49417,
      "name": "Snapdragon seed",
      "sp": 60
    },
    "5301": {
      "overall_average": 1743,
      "id": 5301,
      "sell_average": 1715,
      "members": true,
      "buy_average": 1672,
      "name": "Cadantine seed",
      "sp": 7
    },
    "5302": {
      "overall_average": 2095,
      "id": 5302,
      "sell_average": 1926,
      "members": true,
      "buy_average": 1793,
      "name": "Lantadyme seed",
      "sp": 9
    },
    "5303": {
      "overall_average": 353,
      "id": 5303,
      "sell_average": 371,
      "members": true,
      "buy_average": 375,
      "name": "Dwarf weed seed",
      "sp": 6
    },
    "5304": {
      "overall_average": 80018,
      "id": 5304,
      "sell_average": 80036,
      "members": true,
      "buy_average": 80060,
      "name": "Torstol seed",
      "sp": 70
    },
    "5305": {
      "overall_average": 11,
      "id": 5305,
      "sell_average": 9,
      "members": true,
      "buy_average": 7,
      "name": "Barley seed",
      "sp": 2
    },
    "5306": {
      "overall_average": 15,
      "id": 5306,
      "sell_average": 20,
      "members": true,
      "buy_average": 22,
      "name": "Jute seed",
      "sp": 5
    },
    "5307": {
      "overall_average": 9,
      "id": 5307,
      "sell_average": 10,
      "members": true,
      "buy_average": 11,
      "name": "Hammerstone seed",
      "sp": 2
    },
    "5308": {
      "overall_average": 0,
      "id": 5308,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Asgarnian seed",
      "sp": 3
    },
    "5309": {
      "overall_average": 34,
      "id": 5309,
      "sell_average": 23,
      "members": true,
      "buy_average": 23,
      "name": "Yanillian seed",
      "sp": 6
    },
    "5310": {
      "overall_average": 14,
      "id": 5310,
      "sell_average": 12,
      "members": true,
      "buy_average": 6,
      "name": "Krandorian seed",
      "sp": 8
    },
    "5311": {
      "overall_average": 0,
      "id": 5311,
      "sell_average": 180,
      "members": true,
      "buy_average": 180,
      "name": "Wildblood seed",
      "sp": 14
    },
    "5312": {
      "overall_average": 71,
      "id": 5312,
      "sell_average": 77,
      "members": true,
      "buy_average": 78,
      "name": "Acorn",
      "sp": 6
    },
    "5313": {
      "overall_average": 8619,
      "id": 5313,
      "sell_average": 8629,
      "members": true,
      "buy_average": 8636,
      "name": "Willow seed",
      "sp": 16
    },
    "5314": {
      "overall_average": 53071,
      "id": 5314,
      "sell_average": 50849,
      "members": true,
      "buy_average": 50636,
      "name": "Maple seed",
      "sp": 48
    },
    "5315": {
      "overall_average": 89437,
      "id": 5315,
      "sell_average": 89007,
      "members": true,
      "buy_average": 88910,
      "name": "Yew seed",
      "sp": 143
    },
    "5316": {
      "overall_average": 208740,
      "id": 5316,
      "sell_average": 208690,
      "members": true,
      "buy_average": 208620,
      "name": "Magic seed",
      "sp": 422
    },
    "5318": {
      "overall_average": 3,
      "id": 5318,
      "sell_average": 2,
      "members": true,
      "buy_average": 2,
      "name": "Potato seed",
      "sp": 2
    },
    "5319": {
      "overall_average": 1,
      "id": 5319,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Onion seed",
      "sp": 3
    },
    "5320": {
      "overall_average": 7,
      "id": 5320,
      "sell_average": 6,
      "members": true,
      "buy_average": 4,
      "name": "Sweetcorn seed",
      "sp": 8
    },
    "5321": {
      "overall_average": 435,
      "id": 5321,
      "sell_average": 415,
      "members": true,
      "buy_average": 403,
      "name": "Watermelon seed",
      "sp": 56
    },
    "5322": {
      "overall_average": 1,
      "id": 5322,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Tomato seed",
      "sp": 4
    },
    "5323": {
      "overall_average": 5,
      "id": 5323,
      "sell_average": 6,
      "members": true,
      "buy_average": 6,
      "name": "Strawberry seed",
      "sp": 18
    },
    "5324": {
      "overall_average": 2,
      "id": 5324,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Cabbage seed",
      "sp": 3
    },
    "5325": {
      "overall_average": 491,
      "id": 5325,
      "sell_average": 223,
      "members": true,
      "buy_average": 16,
      "name": "Gardening trowel",
      "sp": 12
    },
    "5329": {
      "overall_average": 487,
      "id": 5329,
      "sell_average": 249,
      "members": true,
      "buy_average": 64,
      "name": "Secateurs",
      "sp": 5
    },
    "5331": {
      "overall_average": 230,
      "id": 5331,
      "sell_average": 230,
      "members": true,
      "buy_average": 230,
      "name": "Watering can",
      "sp": 8
    },
    "5341": {
      "overall_average": 291,
      "id": 5341,
      "sell_average": 417,
      "members": true,
      "buy_average": 1615,
      "name": "Rake",
      "sp": 6
    },
    "5343": {
      "overall_average": 296,
      "id": 5343,
      "sell_average": 276,
      "members": true,
      "buy_average": 266,
      "name": "Seed dibber",
      "sp": 6
    },
    "5345": {
      "overall_average": 0,
      "id": 5345,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gardening boots",
      "sp": 25
    },
    "5350": {
      "overall_average": 5,
      "id": 5350,
      "sell_average": 4,
      "members": true,
      "buy_average": 4,
      "name": "Empty plant pot",
      "sp": 1
    },
    "5352": {
      "overall_average": 0,
      "id": 5352,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Unfired plant pot",
      "sp": 1
    },
    "5354": {
      "overall_average": 2,
      "id": 5354,
      "sell_average": 2,
      "members": true,
      "buy_average": 0,
      "name": "Filled plant pot",
      "sp": 1
    },
    "5370": {
      "overall_average": 354,
      "id": 5370,
      "sell_average": 340,
      "members": true,
      "buy_average": 327,
      "name": "Oak sapling",
      "sp": 1
    },
    "5371": {
      "overall_average": 9210,
      "id": 5371,
      "sell_average": 9156,
      "members": true,
      "buy_average": 8654,
      "name": "Willow sapling",
      "sp": 1
    },
    "5372": {
      "overall_average": 51948,
      "id": 5372,
      "sell_average": 51177,
      "members": true,
      "buy_average": 50200,
      "name": "Maple sapling",
      "sp": 1
    },
    "5373": {
      "overall_average": 90568,
      "id": 5373,
      "sell_average": 90537,
      "members": true,
      "buy_average": 90049,
      "name": "Yew sapling",
      "sp": 1
    },
    "5374": {
      "overall_average": 220460,
      "id": 5374,
      "sell_average": 219241,
      "members": true,
      "buy_average": 218580,
      "name": "Magic sapling",
      "sp": 1
    },
    "5376": {
      "overall_average": 2,
      "id": 5376,
      "sell_average": 2,
      "members": true,
      "buy_average": 2,
      "name": "Basket",
      "sp": 1
    },
    "5386": {
      "overall_average": 684,
      "id": 5386,
      "sell_average": 676,
      "members": true,
      "buy_average": 618,
      "name": "Apples(5)",
      "sp": 1
    },
    "5396": {
      "overall_average": 825,
      "id": 5396,
      "sell_average": 827,
      "members": true,
      "buy_average": 829,
      "name": "Oranges(5)",
      "sp": 1
    },
    "5406": {
      "overall_average": 761,
      "id": 5406,
      "sell_average": 760,
      "members": true,
      "buy_average": 760,
      "name": "Strawberries(5)",
      "sp": 1
    },
    "5416": {
      "overall_average": 523,
      "id": 5416,
      "sell_average": 523,
      "members": true,
      "buy_average": 522,
      "name": "Bananas(5)",
      "sp": 1
    },
    "5418": {
      "overall_average": 2,
      "id": 5418,
      "sell_average": 2,
      "members": true,
      "buy_average": 2,
      "name": "Empty sack",
      "sp": 1
    },
    "5438": {
      "overall_average": 1500,
      "id": 5438,
      "sell_average": 1500,
      "members": true,
      "buy_average": 0,
      "name": "Potatoes(10)",
      "sp": 1
    },
    "5458": {
      "overall_average": 0,
      "id": 5458,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Onions(10)",
      "sp": 1
    },
    "5478": {
      "overall_average": 875,
      "id": 5478,
      "sell_average": 879,
      "members": true,
      "buy_average": 887,
      "name": "Cabbages(10)",
      "sp": 1
    },
    "5496": {
      "overall_average": 189,
      "id": 5496,
      "sell_average": 169,
      "members": true,
      "buy_average": 120,
      "name": "Apple sapling",
      "sp": 1
    },
    "5497": {
      "overall_average": 188,
      "id": 5497,
      "sell_average": 188,
      "members": true,
      "buy_average": 0,
      "name": "Banana sapling",
      "sp": 1
    },
    "5498": {
      "overall_average": 184,
      "id": 5498,
      "sell_average": 167,
      "members": true,
      "buy_average": 5,
      "name": "Orange sapling",
      "sp": 1
    },
    "5499": {
      "overall_average": 857,
      "id": 5499,
      "sell_average": 842,
      "members": true,
      "buy_average": 819,
      "name": "Curry sapling",
      "sp": 1
    },
    "5500": {
      "overall_average": 5687,
      "id": 5500,
      "sell_average": 5639,
      "members": true,
      "buy_average": 4932,
      "name": "Pineapple sapling",
      "sp": 1
    },
    "5501": {
      "overall_average": 13041,
      "id": 5501,
      "sell_average": 13008,
      "members": true,
      "buy_average": 12851,
      "name": "Papaya sapling",
      "sp": 1
    },
    "5502": {
      "overall_average": 73074,
      "id": 5502,
      "sell_average": 72969,
      "members": true,
      "buy_average": 72711,
      "name": "Palm sapling",
      "sp": 1
    },
    "5503": {
      "overall_average": 899,
      "id": 5503,
      "sell_average": 899,
      "members": true,
      "buy_average": 0,
      "name": "Calquat sapling",
      "sp": 1
    },
    "5504": {
      "overall_average": 128,
      "id": 5504,
      "sell_average": 128,
      "members": true,
      "buy_average": 128,
      "name": "Strawberry",
      "sp": 17
    },
    "5516": {
      "overall_average": 3118,
      "id": 5516,
      "sell_average": 3722,
      "members": true,
      "buy_average": 4327,
      "name": "Elemental talisman",
      "sp": 500
    },
    "5521": {
      "overall_average": 948,
      "id": 5521,
      "sell_average": 920,
      "members": true,
      "buy_average": 906,
      "name": "Binding necklace",
      "sp": 1425
    },
    "5523": {
      "overall_average": 49,
      "id": 5523,
      "sell_average": 51,
      "members": false,
      "buy_average": 56,
      "name": "Tiara mould",
      "sp": 100
    },
    "5525": {
      "overall_average": 208,
      "id": 5525,
      "sell_average": 213,
      "members": false,
      "buy_average": 218,
      "name": "Tiara",
      "sp": 100
    },
    "5527": {
      "overall_average": 3,
      "id": 5527,
      "sell_average": 3,
      "members": false,
      "buy_average": 3,
      "name": "Air tiara",
      "sp": 100
    },
    "5529": {
      "overall_average": 750,
      "id": 5529,
      "sell_average": 519,
      "members": false,
      "buy_average": 58,
      "name": "Mind tiara",
      "sp": 100
    },
    "5531": {
      "overall_average": 9,
      "id": 5531,
      "sell_average": 9,
      "members": false,
      "buy_average": 1,
      "name": "Water tiara",
      "sp": 100
    },
    "5533": {
      "overall_average": 2,
      "id": 5533,
      "sell_average": 1,
      "members": false,
      "buy_average": 1,
      "name": "Body tiara",
      "sp": 100
    },
    "5535": {
      "overall_average": 6,
      "id": 5535,
      "sell_average": 5,
      "members": false,
      "buy_average": 5,
      "name": "Earth tiara",
      "sp": 100
    },
    "5537": {
      "overall_average": 313,
      "id": 5537,
      "sell_average": 286,
      "members": false,
      "buy_average": 224,
      "name": "Fire tiara",
      "sp": 100
    },
    "5539": {
      "overall_average": 40,
      "id": 5539,
      "sell_average": 41,
      "members": true,
      "buy_average": 41,
      "name": "Cosmic tiara",
      "sp": 100
    },
    "5541": {
      "overall_average": 166,
      "id": 5541,
      "sell_average": 93,
      "members": true,
      "buy_average": 50,
      "name": "Nature tiara",
      "sp": 100
    },
    "5543": {
      "overall_average": 10,
      "id": 5543,
      "sell_average": 10,
      "members": true,
      "buy_average": 0,
      "name": "Chaos tiara",
      "sp": 100
    },
    "5547": {
      "overall_average": 790,
      "id": 5547,
      "sell_average": 790,
      "members": true,
      "buy_average": 0,
      "name": "Death tiara",
      "sp": 100
    },
    "5574": {
      "overall_average": 3091,
      "id": 5574,
      "sell_average": 3074,
      "members": true,
      "buy_average": 3065,
      "name": "Initiate sallet",
      "sp": 6000
    },
    "5575": {
      "overall_average": 6161,
      "id": 5575,
      "sell_average": 6261,
      "members": true,
      "buy_average": 6281,
      "name": "Initiate hauberk",
      "sp": 10000
    },
    "5576": {
      "overall_average": 4899,
      "id": 5576,
      "sell_average": 4650,
      "members": true,
      "buy_average": 4501,
      "name": "Initiate cuisse",
      "sp": 8000
    },
    "5616": {
      "overall_average": 0,
      "id": 5616,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze arrow(p+)",
      "sp": 1
    },
    "5617": {
      "overall_average": 0,
      "id": 5617,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron arrow(p+)",
      "sp": 3
    },
    "5618": {
      "overall_average": 0,
      "id": 5618,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel arrow(p+)",
      "sp": 12
    },
    "5619": {
      "overall_average": 0,
      "id": 5619,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril arrow(p+)",
      "sp": 32
    },
    "5620": {
      "overall_average": 0,
      "id": 5620,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant arrow(p+)",
      "sp": 80
    },
    "5621": {
      "overall_average": 0,
      "id": 5621,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune arrow(p+)",
      "sp": 400
    },
    "5622": {
      "overall_average": 0,
      "id": 5622,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze arrow(p++)",
      "sp": 1
    },
    "5623": {
      "overall_average": 0,
      "id": 5623,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron arrow(p++)",
      "sp": 3
    },
    "5624": {
      "overall_average": 0,
      "id": 5624,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel arrow(p++)",
      "sp": 12
    },
    "5625": {
      "overall_average": 0,
      "id": 5625,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril arrow(p++)",
      "sp": 32
    },
    "5626": {
      "overall_average": 0,
      "id": 5626,
      "sell_average": 60,
      "members": true,
      "buy_average": 60,
      "name": "Adamant arrow(p++)",
      "sp": 80
    },
    "5627": {
      "overall_average": 0,
      "id": 5627,
      "sell_average": 936,
      "members": true,
      "buy_average": 936,
      "name": "Rune arrow(p++)",
      "sp": 400
    },
    "5628": {
      "overall_average": 0,
      "id": 5628,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze dart(p+)",
      "sp": 1
    },
    "5629": {
      "overall_average": 0,
      "id": 5629,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron dart(p+)",
      "sp": 2
    },
    "5630": {
      "overall_average": 0,
      "id": 5630,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel dart(p+)",
      "sp": 10
    },
    "5631": {
      "overall_average": 0,
      "id": 5631,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black dart(p+)",
      "sp": 18
    },
    "5632": {
      "overall_average": 0,
      "id": 5632,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril dart(p+)",
      "sp": 25
    },
    "5633": {
      "overall_average": 0,
      "id": 5633,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant dart(p+)",
      "sp": 65
    },
    "5634": {
      "overall_average": 0,
      "id": 5634,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune dart(p+)",
      "sp": 350
    },
    "5635": {
      "overall_average": 0,
      "id": 5635,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze dart(p++)",
      "sp": 1
    },
    "5636": {
      "overall_average": 0,
      "id": 5636,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron dart(p++)",
      "sp": 2
    },
    "5637": {
      "overall_average": 0,
      "id": 5637,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel dart(p++)",
      "sp": 10
    },
    "5638": {
      "overall_average": 0,
      "id": 5638,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black dart(p++)",
      "sp": 18
    },
    "5639": {
      "overall_average": 0,
      "id": 5639,
      "sell_average": 101,
      "members": true,
      "buy_average": 101,
      "name": "Mithril dart(p++)",
      "sp": 25
    },
    "5640": {
      "overall_average": 0,
      "id": 5640,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant dart(p++)",
      "sp": 65
    },
    "5641": {
      "overall_average": 0,
      "id": 5641,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune dart(p++)",
      "sp": 350
    },
    "5642": {
      "overall_average": 0,
      "id": 5642,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze javelin(p+)",
      "sp": 4
    },
    "5643": {
      "overall_average": 0,
      "id": 5643,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron javelin(p+)",
      "sp": 6
    },
    "5644": {
      "overall_average": 0,
      "id": 5644,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel javelin(p+)",
      "sp": 24
    },
    "5645": {
      "overall_average": 0,
      "id": 5645,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril javelin(p+)",
      "sp": 64
    },
    "5646": {
      "overall_average": 0,
      "id": 5646,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant javelin(p+)",
      "sp": 160
    },
    "5647": {
      "overall_average": 0,
      "id": 5647,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune javelin(p+)",
      "sp": 400
    },
    "5648": {
      "overall_average": 0,
      "id": 5648,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze javelin(p++)",
      "sp": 4
    },
    "5649": {
      "overall_average": 0,
      "id": 5649,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron javelin(p++)",
      "sp": 6
    },
    "5650": {
      "overall_average": 0,
      "id": 5650,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel javelin(p++)",
      "sp": 24
    },
    "5651": {
      "overall_average": 0,
      "id": 5651,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril javelin(p++)",
      "sp": 64
    },
    "5652": {
      "overall_average": 0,
      "id": 5652,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant javelin(p++)",
      "sp": 160
    },
    "5653": {
      "overall_average": 0,
      "id": 5653,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune javelin(p++)",
      "sp": 400
    },
    "5654": {
      "overall_average": 0,
      "id": 5654,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze knife(p+)",
      "sp": 1
    },
    "5655": {
      "overall_average": 0,
      "id": 5655,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron knife(p+)",
      "sp": 3
    },
    "5656": {
      "overall_average": 0,
      "id": 5656,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel knife(p+)",
      "sp": 10
    },
    "5657": {
      "overall_average": 0,
      "id": 5657,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril knife(p+)",
      "sp": 27
    },
    "5658": {
      "overall_average": 0,
      "id": 5658,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black knife(p+)",
      "sp": 18
    },
    "5659": {
      "overall_average": 0,
      "id": 5659,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant knife(p+)",
      "sp": 66
    },
    "5660": {
      "overall_average": 0,
      "id": 5660,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune knife(p+)",
      "sp": 166
    },
    "5661": {
      "overall_average": 0,
      "id": 5661,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze knife(p++)",
      "sp": 1
    },
    "5662": {
      "overall_average": 0,
      "id": 5662,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron knife(p++)",
      "sp": 3
    },
    "5663": {
      "overall_average": 0,
      "id": 5663,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel knife(p++)",
      "sp": 10
    },
    "5664": {
      "overall_average": 0,
      "id": 5664,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril knife(p++)",
      "sp": 27
    },
    "5665": {
      "overall_average": 0,
      "id": 5665,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black knife(p++)",
      "sp": 18
    },
    "5666": {
      "overall_average": 0,
      "id": 5666,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant knife(p++)",
      "sp": 66
    },
    "5667": {
      "overall_average": 795,
      "id": 5667,
      "sell_average": 760,
      "members": true,
      "buy_average": 722,
      "name": "Rune knife(p++)",
      "sp": 166
    },
    "5668": {
      "overall_average": 0,
      "id": 5668,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron dagger(p+)",
      "sp": 35
    },
    "5670": {
      "overall_average": 0,
      "id": 5670,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze dagger(p+)",
      "sp": 10
    },
    "5672": {
      "overall_average": 0,
      "id": 5672,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel dagger(p+)",
      "sp": 125
    },
    "5674": {
      "overall_average": 0,
      "id": 5674,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril dagger(p+)",
      "sp": 325
    },
    "5676": {
      "overall_average": 0,
      "id": 5676,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant dagger(p+)",
      "sp": 800
    },
    "5678": {
      "overall_average": 0,
      "id": 5678,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune dagger(p+)",
      "sp": 8000
    },
    "5680": {
      "overall_average": 21545,
      "id": 5680,
      "sell_average": 18896,
      "members": true,
      "buy_average": 17223,
      "name": "Dragon dagger(p+)",
      "sp": 24000
    },
    "5682": {
      "overall_average": 0,
      "id": 5682,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black dagger(p+)",
      "sp": 240
    },
    "5686": {
      "overall_average": 0,
      "id": 5686,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron dagger(p++)",
      "sp": 35
    },
    "5688": {
      "overall_average": 0,
      "id": 5688,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze dagger(p++)",
      "sp": 10
    },
    "5690": {
      "overall_average": 0,
      "id": 5690,
      "sell_average": 777,
      "members": true,
      "buy_average": 777,
      "name": "Steel dagger(p++)",
      "sp": 125
    },
    "5692": {
      "overall_average": 0,
      "id": 5692,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril dagger(p++)",
      "sp": 325
    },
    "5694": {
      "overall_average": 0,
      "id": 5694,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant dagger(p++)",
      "sp": 800
    },
    "5696": {
      "overall_average": 8366,
      "id": 5696,
      "sell_average": 6877,
      "members": true,
      "buy_average": 6133,
      "name": "Rune dagger(p++)",
      "sp": 8000
    },
    "5698": {
      "overall_average": 22951,
      "id": 5698,
      "sell_average": 22841,
      "members": true,
      "buy_average": 22701,
      "name": "Dragon dagger(p++)",
      "sp": 24000
    },
    "5700": {
      "overall_average": 4797,
      "id": 5700,
      "sell_average": 4797,
      "members": true,
      "buy_average": 0,
      "name": "Black dagger(p++)",
      "sp": 240
    },
    "5704": {
      "overall_average": 0,
      "id": 5704,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze spear(p+)",
      "sp": 26
    },
    "5706": {
      "overall_average": 0,
      "id": 5706,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron spear(p+)",
      "sp": 91
    },
    "5708": {
      "overall_average": 0,
      "id": 5708,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel spear(p+)",
      "sp": 325
    },
    "5710": {
      "overall_average": 0,
      "id": 5710,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril spear(p+)",
      "sp": 845
    },
    "5712": {
      "overall_average": 0,
      "id": 5712,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant spear(p+)",
      "sp": 2080
    },
    "5714": {
      "overall_average": 0,
      "id": 5714,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune spear(p+)",
      "sp": 20800
    },
    "5716": {
      "overall_average": 0,
      "id": 5716,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon spear(p+)",
      "sp": 62400
    },
    "5718": {
      "overall_average": 0,
      "id": 5718,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze spear(p++)",
      "sp": 26
    },
    "5720": {
      "overall_average": 0,
      "id": 5720,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron spear(p++)",
      "sp": 91
    },
    "5722": {
      "overall_average": 0,
      "id": 5722,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel spear(p++)",
      "sp": 325
    },
    "5724": {
      "overall_average": 0,
      "id": 5724,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril spear(p++)",
      "sp": 845
    },
    "5726": {
      "overall_average": 0,
      "id": 5726,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant spear(p++)",
      "sp": 2080
    },
    "5728": {
      "overall_average": 0,
      "id": 5728,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune spear(p++)",
      "sp": 20800
    },
    "5730": {
      "overall_average": 47057,
      "id": 5730,
      "sell_average": 47057,
      "members": true,
      "buy_average": 0,
      "name": "Dragon spear(p++)",
      "sp": 62400
    },
    "5734": {
      "overall_average": 0,
      "id": 5734,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black spear(p+)",
      "sp": 750
    },
    "5736": {
      "overall_average": 0,
      "id": 5736,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black spear(p++)",
      "sp": 750
    },
    "5739": {
      "overall_average": 0,
      "id": 5739,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Asgarnian ale(m)",
      "sp": 2
    },
    "5741": {
      "overall_average": 0,
      "id": 5741,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mature wmb",
      "sp": 2
    },
    "5743": {
      "overall_average": 0,
      "id": 5743,
      "sell_average": 23009,
      "members": true,
      "buy_average": 23009,
      "name": "Greenman's ale(m)",
      "sp": 2
    },
    "5745": {
      "overall_average": 0,
      "id": 5745,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon bitter(m)",
      "sp": 2
    },
    "5747": {
      "overall_average": 12000,
      "id": 5747,
      "sell_average": 11249,
      "members": true,
      "buy_average": 11124,
      "name": "Dwarven stout(m)",
      "sp": 2
    },
    "5749": {
      "overall_average": 0,
      "id": 5749,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Moonlight mead(m)",
      "sp": 5
    },
    "5751": {
      "overall_average": 0,
      "id": 5751,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Axeman's folly",
      "sp": 2
    },
    "5753": {
      "overall_average": 0,
      "id": 5753,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Axeman's folly(m)",
      "sp": 2
    },
    "5755": {
      "overall_average": 1412,
      "id": 5755,
      "sell_average": 1328,
      "members": true,
      "buy_average": 1161,
      "name": "Chef's delight",
      "sp": 2
    },
    "5757": {
      "overall_average": 0,
      "id": 5757,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Chef's delight(m)",
      "sp": 2
    },
    "5759": {
      "overall_average": 0,
      "id": 5759,
      "sell_average": 27,
      "members": true,
      "buy_average": 27,
      "name": "Slayer's respite",
      "sp": 2
    },
    "5761": {
      "overall_average": 0,
      "id": 5761,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Slayer's respite(m)",
      "sp": 2
    },
    "5763": {
      "overall_average": 0,
      "id": 5763,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cider",
      "sp": 2
    },
    "5765": {
      "overall_average": 0,
      "id": 5765,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mature cider",
      "sp": 2
    },
    "5767": {
      "overall_average": 940,
      "id": 5767,
      "sell_average": 940,
      "members": true,
      "buy_average": 0,
      "name": "Ale yeast",
      "sp": 1
    },
    "5769": {
      "overall_average": 0,
      "id": 5769,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Calquat keg",
      "sp": 1
    },
    "5777": {
      "overall_average": 0,
      "id": 5777,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dwarven stout(4)",
      "sp": 1
    },
    "5785": {
      "overall_average": 0,
      "id": 5785,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Asgarnian ale(4)",
      "sp": 1
    },
    "5793": {
      "overall_average": 0,
      "id": 5793,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Greenmans ale(4)",
      "sp": 1
    },
    "5801": {
      "overall_average": 0,
      "id": 5801,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mind bomb(4)",
      "sp": 1
    },
    "5809": {
      "overall_average": 0,
      "id": 5809,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon bitter(4)",
      "sp": 1
    },
    "5817": {
      "overall_average": 0,
      "id": 5817,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Moonlight mead(4)",
      "sp": 1
    },
    "5825": {
      "overall_average": 0,
      "id": 5825,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Axeman's folly(4)",
      "sp": 1
    },
    "5833": {
      "overall_average": 0,
      "id": 5833,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Chef's delight(4)",
      "sp": 1
    },
    "5841": {
      "overall_average": 0,
      "id": 5841,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Slayer's respite(4)",
      "sp": 1
    },
    "5849": {
      "overall_average": 0,
      "id": 5849,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cider(4)",
      "sp": 1
    },
    "5857": {
      "overall_average": 0,
      "id": 5857,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dwarven stout(m4)",
      "sp": 1
    },
    "5865": {
      "overall_average": 0,
      "id": 5865,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Asgarnian ale(m4)",
      "sp": 1
    },
    "5873": {
      "overall_average": 0,
      "id": 5873,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Greenmans ale(m4)",
      "sp": 1
    },
    "5881": {
      "overall_average": 0,
      "id": 5881,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mind bomb(m4)",
      "sp": 1
    },
    "5889": {
      "overall_average": 0,
      "id": 5889,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon bitter(m4)",
      "sp": 1
    },
    "5897": {
      "overall_average": 0,
      "id": 5897,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Moonlight mead(m4)",
      "sp": 1
    },
    "5905": {
      "overall_average": 0,
      "id": 5905,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Axeman's folly(m4)",
      "sp": 1
    },
    "5913": {
      "overall_average": 0,
      "id": 5913,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Chef's delight(m4)",
      "sp": 1
    },
    "5921": {
      "overall_average": 0,
      "id": 5921,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Slayer respite(m4)",
      "sp": 1
    },
    "5929": {
      "overall_average": 0,
      "id": 5929,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cider(m4)",
      "sp": 1
    },
    "5931": {
      "overall_average": 1800,
      "id": 5931,
      "sell_average": 1705,
      "members": true,
      "buy_average": 1703,
      "name": "Jute fibre",
      "sp": 6
    },
    "5933": {
      "overall_average": 1299,
      "id": 5933,
      "sell_average": 1299,
      "members": true,
      "buy_average": 1299,
      "name": "Willow branch",
      "sp": 2
    },
    "5935": {
      "overall_average": 0,
      "id": 5935,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Coconut milk",
      "sp": 1
    },
    "5937": {
      "overall_average": 2057,
      "id": 5937,
      "sell_average": 2014,
      "members": true,
      "buy_average": 2014,
      "name": "Weapon poison(+)",
      "sp": 288
    },
    "5940": {
      "overall_average": 4773,
      "id": 5940,
      "sell_average": 4729,
      "members": true,
      "buy_average": 4650,
      "name": "Weapon poison(++)",
      "sp": 432
    },
    "5943": {
      "overall_average": 1500,
      "id": 5943,
      "sell_average": 1398,
      "members": true,
      "buy_average": 1059,
      "name": "Antidote+(4)",
      "sp": 360
    },
    "5945": {
      "overall_average": 3076,
      "id": 5945,
      "sell_average": 3051,
      "members": true,
      "buy_average": 2432,
      "name": "Antidote+(3)",
      "sp": 288
    },
    "5947": {
      "overall_average": 0,
      "id": 5947,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Antidote+(2)",
      "sp": 216
    },
    "5949": {
      "overall_average": 0,
      "id": 5949,
      "sell_average": 1146,
      "members": true,
      "buy_average": 1146,
      "name": "Antidote+(1)",
      "sp": 144
    },
    "5952": {
      "overall_average": 285,
      "id": 5952,
      "sell_average": 274,
      "members": true,
      "buy_average": 262,
      "name": "Antidote++(4)",
      "sp": 360
    },
    "5954": {
      "overall_average": 438,
      "id": 5954,
      "sell_average": 374,
      "members": true,
      "buy_average": 352,
      "name": "Antidote++(3)",
      "sp": 288
    },
    "5956": {
      "overall_average": 0,
      "id": 5956,
      "sell_average": 156,
      "members": true,
      "buy_average": 156,
      "name": "Antidote++(2)",
      "sp": 216
    },
    "5958": {
      "overall_average": 290,
      "id": 5958,
      "sell_average": 290,
      "members": true,
      "buy_average": 301,
      "name": "Antidote++(1)",
      "sp": 144
    },
    "5968": {
      "overall_average": 769,
      "id": 5968,
      "sell_average": 763,
      "members": true,
      "buy_average": 667,
      "name": "Tomatoes(5)",
      "sp": 1
    },
    "5970": {
      "overall_average": 231,
      "id": 5970,
      "sell_average": 190,
      "members": true,
      "buy_average": 175,
      "name": "Curry leaf",
      "sp": 19
    },
    "5972": {
      "overall_average": 317,
      "id": 5972,
      "sell_average": 315,
      "members": true,
      "buy_average": 312,
      "name": "Papaya fruit",
      "sp": 64
    },
    "5974": {
      "overall_average": 243,
      "id": 5974,
      "sell_average": 229,
      "members": true,
      "buy_average": 226,
      "name": "Coconut",
      "sp": 87
    },
    "5980": {
      "overall_average": 0,
      "id": 5980,
      "sell_average": 169,
      "members": true,
      "buy_average": 169,
      "name": "Calquat fruit",
      "sp": 54
    },
    "5982": {
      "overall_average": 15,
      "id": 5982,
      "sell_average": 10,
      "members": true,
      "buy_average": 9,
      "name": "Watermelon",
      "sp": 48
    },
    "5984": {
      "overall_average": 0,
      "id": 5984,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Watermelon slice",
      "sp": 16
    },
    "5986": {
      "overall_average": 92,
      "id": 5986,
      "sell_average": 91,
      "members": true,
      "buy_average": 89,
      "name": "Sweetcorn",
      "sp": 9
    },
    "5988": {
      "overall_average": 150,
      "id": 5988,
      "sell_average": 142,
      "members": true,
      "buy_average": 141,
      "name": "Cooked sweetcorn",
      "sp": 9
    },
    "5992": {
      "overall_average": 0,
      "id": 5992,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Apple mush",
      "sp": 13
    },
    "5994": {
      "overall_average": 0,
      "id": 5994,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Hammerstone hops",
      "sp": 4
    },
    "5996": {
      "overall_average": 0,
      "id": 5996,
      "sell_average": 500,
      "members": true,
      "buy_average": 500,
      "name": "Asgarnian hops",
      "sp": 5
    },
    "5998": {
      "overall_average": 1178,
      "id": 5998,
      "sell_average": 1143,
      "members": true,
      "buy_average": 1111,
      "name": "Yanillian hops",
      "sp": 7
    },
    "6000": {
      "overall_average": 0,
      "id": 6000,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Krandorian hops",
      "sp": 10
    },
    "6002": {
      "overall_average": 0,
      "id": 6002,
      "sell_average": 165,
      "members": true,
      "buy_average": 165,
      "name": "Wildblood hops",
      "sp": 15
    },
    "6004": {
      "overall_average": 212,
      "id": 6004,
      "sell_average": 107,
      "members": true,
      "buy_average": 104,
      "name": "Mushroom",
      "sp": 38
    },
    "6006": {
      "overall_average": 0,
      "id": 6006,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Barley",
      "sp": 4
    },
    "6008": {
      "overall_average": 1362,
      "id": 6008,
      "sell_average": 1362,
      "members": true,
      "buy_average": 0,
      "name": "Barley malt",
      "sp": 4
    },
    "6010": {
      "overall_average": 0,
      "id": 6010,
      "sell_average": 111,
      "members": true,
      "buy_average": 111,
      "name": "Marigolds",
      "sp": 1
    },
    "6012": {
      "overall_average": 0,
      "id": 6012,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Nasturtiums",
      "sp": 4
    },
    "6014": {
      "overall_average": 0,
      "id": 6014,
      "sell_average": 20,
      "members": true,
      "buy_average": 20,
      "name": "Rosemary",
      "sp": 2
    },
    "6016": {
      "overall_average": 5599,
      "id": 6016,
      "sell_average": 5486,
      "members": true,
      "buy_average": 5439,
      "name": "Cactus spine",
      "sp": 1
    },
    "6018": {
      "overall_average": 1494,
      "id": 6018,
      "sell_average": 1494,
      "members": true,
      "buy_average": 1493,
      "name": "Poison ivy berries",
      "sp": 65
    },
    "6032": {
      "overall_average": 26,
      "id": 6032,
      "sell_average": 25,
      "members": true,
      "buy_average": 24,
      "name": "Compost",
      "sp": 20
    },
    "6034": {
      "overall_average": 440,
      "id": 6034,
      "sell_average": 442,
      "members": true,
      "buy_average": 446,
      "name": "Supercompost",
      "sp": 85
    },
    "6036": {
      "overall_average": 190,
      "id": 6036,
      "sell_average": 190,
      "members": true,
      "buy_average": 0,
      "name": "Plant cure",
      "sp": 40
    },
    "6038": {
      "overall_average": 1400,
      "id": 6038,
      "sell_average": 1400,
      "members": true,
      "buy_average": 1400,
      "name": "Magic string",
      "sp": 1
    },
    "6043": {
      "overall_average": 0,
      "id": 6043,
      "sell_average": 33,
      "members": true,
      "buy_average": 33,
      "name": "Oak roots",
      "sp": 1
    },
    "6045": {
      "overall_average": 0,
      "id": 6045,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Willow roots",
      "sp": 1
    },
    "6047": {
      "overall_average": 0,
      "id": 6047,
      "sell_average": 40,
      "members": true,
      "buy_average": 40,
      "name": "Maple roots",
      "sp": 1
    },
    "6049": {
      "overall_average": 0,
      "id": 6049,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Yew roots",
      "sp": 1
    },
    "6051": {
      "overall_average": 2583,
      "id": 6051,
      "sell_average": 2583,
      "members": true,
      "buy_average": 2583,
      "name": "Magic roots",
      "sp": 1
    },
    "6055": {
      "overall_average": 63,
      "id": 6055,
      "sell_average": 62,
      "members": true,
      "buy_average": 61,
      "name": "Weeds",
      "sp": 1
    },
    "6061": {
      "overall_average": 0,
      "id": 6061,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze bolts (p+)",
      "sp": 0
    },
    "6062": {
      "overall_average": 0,
      "id": 6062,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze bolts (p++)",
      "sp": 0
    },
    "6128": {
      "overall_average": 0,
      "id": 6128,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rock-shell helm",
      "sp": 35200
    },
    "6129": {
      "overall_average": 39876,
      "id": 6129,
      "sell_average": 39490,
      "members": true,
      "buy_average": 38621,
      "name": "Rock-shell plate",
      "sp": 65000
    },
    "6130": {
      "overall_average": 38906,
      "id": 6130,
      "sell_average": 38444,
      "members": true,
      "buy_average": 37551,
      "name": "Rock-shell legs",
      "sp": 64000
    },
    "6131": {
      "overall_average": 78958,
      "id": 6131,
      "sell_average": 78958,
      "members": true,
      "buy_average": 0,
      "name": "Spined helm",
      "sp": 60000
    },
    "6133": {
      "overall_average": 0,
      "id": 6133,
      "sell_average": 4295,
      "members": true,
      "buy_average": 4295,
      "name": "Spined body",
      "sp": 7800
    },
    "6135": {
      "overall_average": 3666,
      "id": 6135,
      "sell_average": 3666,
      "members": true,
      "buy_average": 2000,
      "name": "Spined chaps",
      "sp": 3900
    },
    "6137": {
      "overall_average": 52626,
      "id": 6137,
      "sell_average": 52626,
      "members": true,
      "buy_average": 46256,
      "name": "Skeletal helm",
      "sp": 10000
    },
    "6139": {
      "overall_average": 36000,
      "id": 6139,
      "sell_average": 29762,
      "members": true,
      "buy_average": 26643,
      "name": "Skeletal top",
      "sp": 45000
    },
    "6141": {
      "overall_average": 30000,
      "id": 6141,
      "sell_average": 24362,
      "members": true,
      "buy_average": 23235,
      "name": "Skeletal bottoms",
      "sp": 40000
    },
    "6143": {
      "overall_average": 0,
      "id": 6143,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Spined boots",
      "sp": 650
    },
    "6145": {
      "overall_average": 0,
      "id": 6145,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rock-shell boots",
      "sp": 650
    },
    "6147": {
      "overall_average": 0,
      "id": 6147,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Skeletal boots",
      "sp": 650
    },
    "6149": {
      "overall_average": 0,
      "id": 6149,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Spined gloves",
      "sp": 650
    },
    "6151": {
      "overall_average": 2237,
      "id": 6151,
      "sell_average": 2211,
      "members": true,
      "buy_average": 2186,
      "name": "Rock-shell gloves",
      "sp": 650
    },
    "6153": {
      "overall_average": 88234,
      "id": 6153,
      "sell_average": 88234,
      "members": true,
      "buy_average": 0,
      "name": "Skeletal gloves",
      "sp": 650
    },
    "6155": {
      "overall_average": 0,
      "id": 6155,
      "sell_average": 83,
      "members": true,
      "buy_average": 83,
      "name": "Dagannoth hide",
      "sp": 60
    },
    "6157": {
      "overall_average": 0,
      "id": 6157,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rock-shell chunk",
      "sp": 60
    },
    "6159": {
      "overall_average": 0,
      "id": 6159,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rock-shell shard",
      "sp": 60
    },
    "6161": {
      "overall_average": 23735,
      "id": 6161,
      "sell_average": 23167,
      "members": true,
      "buy_average": 22600,
      "name": "Rock-shell splinter",
      "sp": 60
    },
    "6163": {
      "overall_average": 0,
      "id": 6163,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Skull piece",
      "sp": 60
    },
    "6165": {
      "overall_average": 0,
      "id": 6165,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ribcage piece",
      "sp": 60
    },
    "6167": {
      "overall_average": 0,
      "id": 6167,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fibula piece",
      "sp": 60
    },
    "6169": {
      "overall_average": 0,
      "id": 6169,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Circular hide",
      "sp": 60
    },
    "6171": {
      "overall_average": 0,
      "id": 6171,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Flattened hide",
      "sp": 60
    },
    "6173": {
      "overall_average": 0,
      "id": 6173,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Stretched hide",
      "sp": 60
    },
    "6211": {
      "overall_average": 0,
      "id": 6211,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak pyre logs",
      "sp": 100
    },
    "6213": {
      "overall_average": 0,
      "id": 6213,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany pyre log",
      "sp": 200
    },
    "6215": {
      "overall_average": 0,
      "id": 6215,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Broodoo shield (10)",
      "sp": 3000
    },
    "6235": {
      "overall_average": 0,
      "id": 6235,
      "sell_average": 2612,
      "members": true,
      "buy_average": 2612,
      "name": "Broodoo shield",
      "sp": 3000
    },
    "6237": {
      "overall_average": 0,
      "id": 6237,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Broodoo shield (10)",
      "sp": 3000
    },
    "6257": {
      "overall_average": 0,
      "id": 6257,
      "sell_average": 4000,
      "members": true,
      "buy_average": 4000,
      "name": "Broodoo shield",
      "sp": 3000
    },
    "6259": {
      "overall_average": 0,
      "id": 6259,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Broodoo shield (10)",
      "sp": 3000
    },
    "6279": {
      "overall_average": 0,
      "id": 6279,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Broodoo shield",
      "sp": 3000
    },
    "6281": {
      "overall_average": 0,
      "id": 6281,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Thatch spar light",
      "sp": 10
    },
    "6283": {
      "overall_average": 0,
      "id": 6283,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Thatch spar med",
      "sp": 15
    },
    "6285": {
      "overall_average": 0,
      "id": 6285,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Thatch spar dense",
      "sp": 20
    },
    "6287": {
      "overall_average": 264,
      "id": 6287,
      "sell_average": 264,
      "members": true,
      "buy_average": 0,
      "name": "Snake hide",
      "sp": 35
    },
    "6289": {
      "overall_average": 17,
      "id": 6289,
      "sell_average": 18,
      "members": true,
      "buy_average": 18,
      "name": "Snakeskin",
      "sp": 50
    },
    "6291": {
      "overall_average": 0,
      "id": 6291,
      "sell_average": 105,
      "members": true,
      "buy_average": 105,
      "name": "Spider carcass",
      "sp": 15
    },
    "6297": {
      "overall_average": 0,
      "id": 6297,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Spider on stick",
      "sp": 50
    },
    "6299": {
      "overall_average": 0,
      "id": 6299,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Spider on shaft",
      "sp": 40
    },
    "6305": {
      "overall_average": 0,
      "id": 6305,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Skewer stick",
      "sp": 10
    },
    "6306": {
      "overall_average": 7,
      "id": 6306,
      "sell_average": 6,
      "members": true,
      "buy_average": 6,
      "name": "Trading sticks",
      "sp": 1
    },
    "6311": {
      "overall_average": 685000,
      "id": 6311,
      "sell_average": 684444,
      "members": true,
      "buy_average": 682777,
      "name": "Gout tuber",
      "sp": 200
    },
    "6313": {
      "overall_average": 76,
      "id": 6313,
      "sell_average": 61,
      "members": true,
      "buy_average": 57,
      "name": "Opal machete",
      "sp": 500
    },
    "6315": {
      "overall_average": 0,
      "id": 6315,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Jade machete",
      "sp": 1000
    },
    "6317": {
      "overall_average": 17500,
      "id": 6317,
      "sell_average": 17500,
      "members": true,
      "buy_average": 0,
      "name": "Red topaz machete",
      "sp": 2000
    },
    "6319": {
      "overall_average": 0,
      "id": 6319,
      "sell_average": 123,
      "members": true,
      "buy_average": 123,
      "name": "Proboscis",
      "sp": 5
    },
    "6322": {
      "overall_average": 1599,
      "id": 6322,
      "sell_average": 1561,
      "members": true,
      "buy_average": 1522,
      "name": "Snakeskin body",
      "sp": 1250
    },
    "6324": {
      "overall_average": 650,
      "id": 6324,
      "sell_average": 625,
      "members": true,
      "buy_average": 582,
      "name": "Snakeskin chaps",
      "sp": 1175
    },
    "6326": {
      "overall_average": 193,
      "id": 6326,
      "sell_average": 180,
      "members": true,
      "buy_average": 139,
      "name": "Snakeskin bandana",
      "sp": 300
    },
    "6328": {
      "overall_average": 596,
      "id": 6328,
      "sell_average": 426,
      "members": true,
      "buy_average": 303,
      "name": "Snakeskin boots",
      "sp": 250
    },
    "6330": {
      "overall_average": 1000,
      "id": 6330,
      "sell_average": 901,
      "members": true,
      "buy_average": 175,
      "name": "Snakeskin vambraces",
      "sp": 434
    },
    "6332": {
      "overall_average": 459,
      "id": 6332,
      "sell_average": 458,
      "members": true,
      "buy_average": 457,
      "name": "Mahogany logs",
      "sp": 50
    },
    "6333": {
      "overall_average": 199,
      "id": 6333,
      "sell_average": 195,
      "members": true,
      "buy_average": 192,
      "name": "Teak logs",
      "sp": 30
    },
    "6335": {
      "overall_average": 0,
      "id": 6335,
      "sell_average": 4624,
      "members": true,
      "buy_average": 4624,
      "name": "Tribal mask",
      "sp": 500
    },
    "6337": {
      "overall_average": 0,
      "id": 6337,
      "sell_average": 1965,
      "members": true,
      "buy_average": 1965,
      "name": "Tribal mask",
      "sp": 500
    },
    "6339": {
      "overall_average": 2566,
      "id": 6339,
      "sell_average": 2328,
      "members": true,
      "buy_average": 2284,
      "name": "Tribal mask",
      "sp": 500
    },
    "6341": {
      "overall_average": 2500,
      "id": 6341,
      "sell_average": 2497,
      "members": true,
      "buy_average": 2494,
      "name": "Tribal top",
      "sp": 300
    },
    "6343": {
      "overall_average": 0,
      "id": 6343,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Villager robe",
      "sp": 250
    },
    "6345": {
      "overall_average": 0,
      "id": 6345,
      "sell_average": 6679,
      "members": true,
      "buy_average": 6679,
      "name": "Villager hat",
      "sp": 200
    },
    "6347": {
      "overall_average": 1,
      "id": 6347,
      "sell_average": 1,
      "members": true,
      "buy_average": 0,
      "name": "Villager armband",
      "sp": 150
    },
    "6349": {
      "overall_average": 6000,
      "id": 6349,
      "sell_average": 6000,
      "members": true,
      "buy_average": 6000,
      "name": "Villager sandals",
      "sp": 100
    },
    "6351": {
      "overall_average": 0,
      "id": 6351,
      "sell_average": 1840,
      "members": true,
      "buy_average": 1840,
      "name": "Tribal top",
      "sp": 300
    },
    "6353": {
      "overall_average": 0,
      "id": 6353,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Villager robe",
      "sp": 250
    },
    "6355": {
      "overall_average": 0,
      "id": 6355,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Villager hat",
      "sp": 200
    },
    "6357": {
      "overall_average": 0,
      "id": 6357,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Villager sandals",
      "sp": 100
    },
    "6359": {
      "overall_average": 0,
      "id": 6359,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Villager armband",
      "sp": 150
    },
    "6361": {
      "overall_average": 1000,
      "id": 6361,
      "sell_average": 1000,
      "members": true,
      "buy_average": 1000,
      "name": "Tribal top",
      "sp": 300
    },
    "6363": {
      "overall_average": 0,
      "id": 6363,
      "sell_average": 1005,
      "members": true,
      "buy_average": 1005,
      "name": "Villager robe",
      "sp": 250
    },
    "6365": {
      "overall_average": 8000,
      "id": 6365,
      "sell_average": 8000,
      "members": true,
      "buy_average": 0,
      "name": "Villager hat",
      "sp": 200
    },
    "6367": {
      "overall_average": 4900,
      "id": 6367,
      "sell_average": 4900,
      "members": true,
      "buy_average": 0,
      "name": "Villager sandals",
      "sp": 100
    },
    "6369": {
      "overall_average": 0,
      "id": 6369,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Villager armband",
      "sp": 150
    },
    "6371": {
      "overall_average": 4514,
      "id": 6371,
      "sell_average": 4514,
      "members": true,
      "buy_average": 0,
      "name": "Tribal top",
      "sp": 300
    },
    "6373": {
      "overall_average": 0,
      "id": 6373,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Villager robe",
      "sp": 250
    },
    "6375": {
      "overall_average": 0,
      "id": 6375,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Villager hat",
      "sp": 200
    },
    "6377": {
      "overall_average": 0,
      "id": 6377,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Villager sandals",
      "sp": 100
    },
    "6379": {
      "overall_average": 0,
      "id": 6379,
      "sell_average": 1000,
      "members": true,
      "buy_average": 1000,
      "name": "Villager armband",
      "sp": 150
    },
    "6382": {
      "overall_average": 647,
      "id": 6382,
      "sell_average": 646,
      "members": true,
      "buy_average": 626,
      "name": "Fez",
      "sp": 20
    },
    "6384": {
      "overall_average": 800,
      "id": 6384,
      "sell_average": 800,
      "members": true,
      "buy_average": 0,
      "name": "Desert top",
      "sp": 15
    },
    "6386": {
      "overall_average": 500,
      "id": 6386,
      "sell_average": 500,
      "members": true,
      "buy_average": 0,
      "name": "Desert robes",
      "sp": 25
    },
    "6388": {
      "overall_average": 1633,
      "id": 6388,
      "sell_average": 1633,
      "members": true,
      "buy_average": 0,
      "name": "Desert top",
      "sp": 35
    },
    "6390": {
      "overall_average": 1066,
      "id": 6390,
      "sell_average": 1066,
      "members": true,
      "buy_average": 0,
      "name": "Desert legs",
      "sp": 25
    },
    "6392": {
      "overall_average": 0,
      "id": 6392,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Menaphite purple hat",
      "sp": 35
    },
    "6394": {
      "overall_average": 608,
      "id": 6394,
      "sell_average": 608,
      "members": true,
      "buy_average": 0,
      "name": "Menaphite purple top",
      "sp": 20
    },
    "6396": {
      "overall_average": 0,
      "id": 6396,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Menaphite purple robe",
      "sp": 40
    },
    "6398": {
      "overall_average": 0,
      "id": 6398,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Menaphite purple kilt",
      "sp": 20
    },
    "6400": {
      "overall_average": 431,
      "id": 6400,
      "sell_average": 431,
      "members": true,
      "buy_average": 0,
      "name": "Menaphite red hat",
      "sp": 35
    },
    "6402": {
      "overall_average": 715,
      "id": 6402,
      "sell_average": 715,
      "members": true,
      "buy_average": 0,
      "name": "Menaphite red top",
      "sp": 20
    },
    "6404": {
      "overall_average": 600,
      "id": 6404,
      "sell_average": 600,
      "members": true,
      "buy_average": 0,
      "name": "Menaphite red robe",
      "sp": 40
    },
    "6406": {
      "overall_average": 0,
      "id": 6406,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Menaphite red kilt",
      "sp": 20
    },
    "6408": {
      "overall_average": 0,
      "id": 6408,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak blackjack(o)",
      "sp": 400
    },
    "6410": {
      "overall_average": 0,
      "id": 6410,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak blackjack(d)",
      "sp": 400
    },
    "6412": {
      "overall_average": 0,
      "id": 6412,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Willow blackjack(o)",
      "sp": 800
    },
    "6414": {
      "overall_average": 0,
      "id": 6414,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Willow blackjack(d)",
      "sp": 800
    },
    "6416": {
      "overall_average": 2500,
      "id": 6416,
      "sell_average": 2278,
      "members": true,
      "buy_average": 1835,
      "name": "Maple blackjack",
      "sp": 1200
    },
    "6418": {
      "overall_average": 2500,
      "id": 6418,
      "sell_average": 2500,
      "members": true,
      "buy_average": 2500,
      "name": "Maple blackjack(o)",
      "sp": 1600
    },
    "6420": {
      "overall_average": 8997,
      "id": 6420,
      "sell_average": 8997,
      "members": true,
      "buy_average": 8997,
      "name": "Maple blackjack(d)",
      "sp": 1600
    },
    "6470": {
      "overall_average": 644,
      "id": 6470,
      "sell_average": 644,
      "members": true,
      "buy_average": 644,
      "name": "Compost potion(4)",
      "sp": 120
    },
    "6472": {
      "overall_average": 0,
      "id": 6472,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Compost potion(3)",
      "sp": 90
    },
    "6474": {
      "overall_average": 0,
      "id": 6474,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Compost potion(2)",
      "sp": 60
    },
    "6476": {
      "overall_average": 0,
      "id": 6476,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Compost potion(1)",
      "sp": 30
    },
    "6522": {
      "overall_average": 1128,
      "id": 6522,
      "sell_average": 1128,
      "members": true,
      "buy_average": 0,
      "name": "Toktz-xil-ul",
      "sp": 250
    },
    "6523": {
      "overall_average": 525000,
      "id": 6523,
      "sell_average": 495404,
      "members": true,
      "buy_average": 480606,
      "name": "Toktz-xil-ak",
      "sp": 40000
    },
    "6524": {
      "overall_average": 180971,
      "id": 6524,
      "sell_average": 176800,
      "members": true,
      "buy_average": 175012,
      "name": "Toktz-ket-xil",
      "sp": 45000
    },
    "6525": {
      "overall_average": 0,
      "id": 6525,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Toktz-xil-ek",
      "sp": 25000
    },
    "6526": {
      "overall_average": 0,
      "id": 6526,
      "sell_average": 365000,
      "members": true,
      "buy_average": 365000,
      "name": "Toktz-mej-tal",
      "sp": 35000
    },
    "6527": {
      "overall_average": 0,
      "id": 6527,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Tzhaar-ket-em",
      "sp": 30000
    },
    "6528": {
      "overall_average": 187608,
      "id": 6528,
      "sell_average": 187744,
      "members": true,
      "buy_average": 188004,
      "name": "Tzhaar-ket-om",
      "sp": 50001
    },
    "6562": {
      "overall_average": 96744,
      "id": 6562,
      "sell_average": 95245,
      "members": true,
      "buy_average": 94611,
      "name": "Mud battlestaff",
      "sp": 17000
    },
    "6563": {
      "overall_average": 127516,
      "id": 6563,
      "sell_average": 124446,
      "members": true,
      "buy_average": 119330,
      "name": "Mystic mud staff",
      "sp": 45000
    },
    "6568": {
      "overall_average": 477861,
      "id": 6568,
      "sell_average": 480074,
      "members": true,
      "buy_average": 482010,
      "name": "Obsidian cape",
      "sp": 60000
    },
    "6571": {
      "overall_average": 2929956,
      "id": 6571,
      "sell_average": 2927220,
      "members": true,
      "buy_average": 2925169,
      "name": "Uncut onyx",
      "sp": 200000
    },
    "6573": {
      "overall_average": 0,
      "id": 6573,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Onyx",
      "sp": 200000
    },
    "6575": {
      "overall_average": 0,
      "id": 6575,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Onyx ring",
      "sp": 201000
    },
    "6577": {
      "overall_average": 0,
      "id": 6577,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Onyx necklace",
      "sp": 201000
    },
    "6579": {
      "overall_average": 0,
      "id": 6579,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Onyx amulet (u)",
      "sp": 201000
    },
    "6581": {
      "overall_average": 2984000,
      "id": 6581,
      "sell_average": 2984000,
      "members": true,
      "buy_average": 0,
      "name": "Onyx amulet",
      "sp": 201000
    },
    "6583": {
      "overall_average": 0,
      "id": 6583,
      "sell_average": 1801151,
      "members": true,
      "buy_average": 1801151,
      "name": "Ring of stone",
      "sp": 202000
    },
    "6585": {
      "overall_average": 2930965,
      "id": 6585,
      "sell_average": 2928195,
      "members": true,
      "buy_average": 2925397,
      "name": "Amulet of fury",
      "sp": 202000
    },
    "6587": {
      "overall_average": 2000,
      "id": 6587,
      "sell_average": 2000,
      "members": true,
      "buy_average": 0,
      "name": "White claws",
      "sp": 360
    },
    "6589": {
      "overall_average": 0,
      "id": 6589,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "White battleaxe",
      "sp": 1248
    },
    "6591": {
      "overall_average": 0,
      "id": 6591,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "White dagger",
      "sp": 240
    },
    "6593": {
      "overall_average": 0,
      "id": 6593,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "White dagger(p)",
      "sp": 240
    },
    "6595": {
      "overall_average": 0,
      "id": 6595,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "White dagger(p+)",
      "sp": 240
    },
    "6597": {
      "overall_average": 0,
      "id": 6597,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "White dagger(p++)",
      "sp": 240
    },
    "6599": {
      "overall_average": 0,
      "id": 6599,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "White halberd",
      "sp": 1920
    },
    "6601": {
      "overall_average": 0,
      "id": 6601,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "White mace",
      "sp": 432
    },
    "6603": {
      "overall_average": 0,
      "id": 6603,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "White magic staff",
      "sp": 200
    },
    "6605": {
      "overall_average": 0,
      "id": 6605,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "White sword",
      "sp": 624
    },
    "6607": {
      "overall_average": 0,
      "id": 6607,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "White longsword",
      "sp": 960
    },
    "6609": {
      "overall_average": 0,
      "id": 6609,
      "sell_average": 4500,
      "members": true,
      "buy_average": 4500,
      "name": "White 2h sword",
      "sp": 1920
    },
    "6611": {
      "overall_average": 0,
      "id": 6611,
      "sell_average": 4999,
      "members": true,
      "buy_average": 4999,
      "name": "White scimitar",
      "sp": 768
    },
    "6613": {
      "overall_average": 0,
      "id": 6613,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "White warhammer",
      "sp": 980
    },
    "6615": {
      "overall_average": 4000,
      "id": 6615,
      "sell_average": 4000,
      "members": true,
      "buy_average": 0,
      "name": "White chainbody",
      "sp": 1440
    },
    "6617": {
      "overall_average": 5051,
      "id": 6617,
      "sell_average": 5051,
      "members": true,
      "buy_average": 5051,
      "name": "White platebody",
      "sp": 3840
    },
    "6619": {
      "overall_average": 1775,
      "id": 6619,
      "sell_average": 1796,
      "members": true,
      "buy_average": 1796,
      "name": "White boots",
      "sp": 576
    },
    "6621": {
      "overall_average": 0,
      "id": 6621,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "White med helm",
      "sp": 576
    },
    "6623": {
      "overall_average": 2631,
      "id": 6623,
      "sell_average": 2631,
      "members": true,
      "buy_average": 0,
      "name": "White full helm",
      "sp": 1056
    },
    "6625": {
      "overall_average": 3703,
      "id": 6625,
      "sell_average": 3355,
      "members": true,
      "buy_average": 2311,
      "name": "White platelegs",
      "sp": 1920
    },
    "6627": {
      "overall_average": 2500,
      "id": 6627,
      "sell_average": 2500,
      "members": true,
      "buy_average": 0,
      "name": "White plateskirt",
      "sp": 1920
    },
    "6629": {
      "overall_average": 2000,
      "id": 6629,
      "sell_average": 1520,
      "members": true,
      "buy_average": 560,
      "name": "White gloves",
      "sp": 6
    },
    "6631": {
      "overall_average": 909,
      "id": 6631,
      "sell_average": 909,
      "members": true,
      "buy_average": 909,
      "name": "White sq shield",
      "sp": 1152
    },
    "6633": {
      "overall_average": 656,
      "id": 6633,
      "sell_average": 604,
      "members": true,
      "buy_average": 548,
      "name": "White kiteshield",
      "sp": 1632
    },
    "6667": {
      "overall_average": 5,
      "id": 6667,
      "sell_average": 4,
      "members": true,
      "buy_average": 3,
      "name": "Empty fishbowl",
      "sp": 1
    },
    "6681": {
      "overall_average": 0,
      "id": 6681,
      "sell_average": 50,
      "members": true,
      "buy_average": 50,
      "name": "Ground guam",
      "sp": 2
    },
    "6685": {
      "overall_average": 6087,
      "id": 6685,
      "sell_average": 6081,
      "members": true,
      "buy_average": 6075,
      "name": "Saradomin brew(4)",
      "sp": 200
    },
    "6687": {
      "overall_average": 4509,
      "id": 6687,
      "sell_average": 4621,
      "members": true,
      "buy_average": 4789,
      "name": "Saradomin brew(3)",
      "sp": 175
    },
    "6689": {
      "overall_average": 2995,
      "id": 6689,
      "sell_average": 2978,
      "members": true,
      "buy_average": 2971,
      "name": "Saradomin brew(2)",
      "sp": 150
    },
    "6691": {
      "overall_average": 0,
      "id": 6691,
      "sell_average": 1500,
      "members": true,
      "buy_average": 1500,
      "name": "Saradomin brew(1)",
      "sp": 125
    },
    "6693": {
      "overall_average": 3580,
      "id": 6693,
      "sell_average": 3591,
      "members": true,
      "buy_average": 3602,
      "name": "Crushed nest",
      "sp": 1
    },
    "6697": {
      "overall_average": 50,
      "id": 6697,
      "sell_average": 26,
      "members": true,
      "buy_average": 9,
      "name": "Pat of butter",
      "sp": 4
    },
    "6701": {
      "overall_average": 0,
      "id": 6701,
      "sell_average": 116,
      "members": true,
      "buy_average": 116,
      "name": "Baked potato",
      "sp": 4
    },
    "6703": {
      "overall_average": 0,
      "id": 6703,
      "sell_average": 265,
      "members": true,
      "buy_average": 265,
      "name": "Potato with butter",
      "sp": 8
    },
    "6705": {
      "overall_average": 384,
      "id": 6705,
      "sell_average": 385,
      "members": true,
      "buy_average": 386,
      "name": "Potato with cheese",
      "sp": 8
    },
    "6724": {
      "overall_average": 34507,
      "id": 6724,
      "sell_average": 33596,
      "members": true,
      "buy_average": 33414,
      "name": "Seercull",
      "sp": 8000
    },
    "6729": {
      "overall_average": 7979,
      "id": 6729,
      "sell_average": 7972,
      "members": true,
      "buy_average": 7969,
      "name": "Dagannoth bones",
      "sp": 150
    },
    "6731": {
      "overall_average": 484960,
      "id": 6731,
      "sell_average": 484079,
      "members": true,
      "buy_average": 483076,
      "name": "Seers ring",
      "sp": 10000
    },
    "6733": {
      "overall_average": 3867780,
      "id": 6733,
      "sell_average": 3862451,
      "members": true,
      "buy_average": 3857335,
      "name": "Archers ring",
      "sp": 10000
    },
    "6735": {
      "overall_average": 111398,
      "id": 6735,
      "sell_average": 108127,
      "members": true,
      "buy_average": 105392,
      "name": "Warrior ring",
      "sp": 10000
    },
    "6737": {
      "overall_average": 3063236,
      "id": 6737,
      "sell_average": 3059015,
      "members": true,
      "buy_average": 3054366,
      "name": "Berserker ring",
      "sp": 10000
    },
    "6739": {
      "overall_average": 54018,
      "id": 6739,
      "sell_average": 53677,
      "members": true,
      "buy_average": 53059,
      "name": "Dragon axe",
      "sp": 55000
    },
    "6750": {
      "overall_average": 3330,
      "id": 6750,
      "sell_average": 2918,
      "members": true,
      "buy_average": 2300,
      "name": "Black desert shirt",
      "sp": 40
    },
    "6752": {
      "overall_average": 8999,
      "id": 6752,
      "sell_average": 6230,
      "members": true,
      "buy_average": 2077,
      "name": "Black desert robe",
      "sp": 30
    },
    "6760": {
      "overall_average": 0,
      "id": 6760,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Guthix mjolnir",
      "sp": 625
    },
    "6762": {
      "overall_average": 0,
      "id": 6762,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Saradomin mjolnir",
      "sp": 625
    },
    "6764": {
      "overall_average": 0,
      "id": 6764,
      "sell_average": 5733,
      "members": true,
      "buy_average": 5733,
      "name": "Zamorak mjolnir",
      "sp": 625
    },
    "6794": {
      "overall_average": 0,
      "id": 6794,
      "sell_average": 120,
      "members": true,
      "buy_average": 120,
      "name": "Choc-ice",
      "sp": 30
    },
    "6809": {
      "overall_average": 43333,
      "id": 6809,
      "sell_average": 43385,
      "members": true,
      "buy_average": 43396,
      "name": "Granite legs",
      "sp": 66000
    },
    "6812": {
      "overall_average": 2458,
      "id": 6812,
      "sell_average": 2454,
      "members": true,
      "buy_average": 2449,
      "name": "Wyvern bones",
      "sp": 110
    },
    "6814": {
      "overall_average": 0,
      "id": 6814,
      "sell_average": 200,
      "members": false,
      "buy_average": 200,
      "name": "Fur",
      "sp": 10
    },
    "6889": {
      "overall_average": 6971746,
      "id": 6889,
      "sell_average": 6965816,
      "members": true,
      "buy_average": 6958518,
      "name": "Mage's book",
      "sp": 500
    },
    "6891": {
      "overall_average": 0,
      "id": 6891,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Arena book",
      "sp": 1
    },
    "6908": {
      "overall_average": 0,
      "id": 6908,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Beginner wand",
      "sp": 1200
    },
    "6910": {
      "overall_average": 0,
      "id": 6910,
      "sell_average": 1000000,
      "members": true,
      "buy_average": 1000000,
      "name": "Apprentice wand",
      "sp": 1500
    },
    "6912": {
      "overall_average": 0,
      "id": 6912,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teacher wand",
      "sp": 2000
    },
    "6914": {
      "overall_average": 6672554,
      "id": 6914,
      "sell_average": 6688461,
      "members": true,
      "buy_average": 6724820,
      "name": "Master wand",
      "sp": 100001
    },
    "6916": {
      "overall_average": 3709999,
      "id": 6916,
      "sell_average": 3704385,
      "members": true,
      "buy_average": 3687545,
      "name": "Infinity top",
      "sp": 140000
    },
    "6918": {
      "overall_average": 4080999,
      "id": 6918,
      "sell_average": 4080999,
      "members": true,
      "buy_average": 0,
      "name": "Infinity hat",
      "sp": 17000
    },
    "6920": {
      "overall_average": 1551030,
      "id": 6920,
      "sell_average": 1543766,
      "members": true,
      "buy_average": 1539875,
      "name": "Infinity boots",
      "sp": 12000
    },
    "6922": {
      "overall_average": 0,
      "id": 6922,
      "sell_average": 2300000,
      "members": true,
      "buy_average": 2300000,
      "name": "Infinity gloves",
      "sp": 12000
    },
    "6924": {
      "overall_average": 6174497,
      "id": 6924,
      "sell_average": 6127748,
      "members": true,
      "buy_average": 6081000,
      "name": "Infinity bottoms",
      "sp": 90000
    },
    "6959": {
      "overall_average": 1294,
      "id": 6959,
      "sell_average": 1294,
      "members": true,
      "buy_average": 1294,
      "name": "Pink cape",
      "sp": 1
    },
    "6962": {
      "overall_average": 0,
      "id": 6962,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Triangle sandwich",
      "sp": 25
    },
    "6971": {
      "overall_average": 0,
      "id": 6971,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Sandstone (1kg)",
      "sp": 1
    },
    "6973": {
      "overall_average": 120,
      "id": 6973,
      "sell_average": 120,
      "members": true,
      "buy_average": 0,
      "name": "Sandstone (2kg)",
      "sp": 1
    },
    "6975": {
      "overall_average": 26,
      "id": 6975,
      "sell_average": 24,
      "members": true,
      "buy_average": 10,
      "name": "Sandstone (5kg)",
      "sp": 1
    },
    "6977": {
      "overall_average": 8000,
      "id": 6977,
      "sell_average": 8000,
      "members": true,
      "buy_average": 0,
      "name": "Sandstone (10kg)",
      "sp": 1
    },
    "6979": {
      "overall_average": 0,
      "id": 6979,
      "sell_average": 10,
      "members": true,
      "buy_average": 10,
      "name": "Granite (500g)",
      "sp": 1
    },
    "6981": {
      "overall_average": 44,
      "id": 6981,
      "sell_average": 16,
      "members": true,
      "buy_average": 2,
      "name": "Granite (2kg)",
      "sp": 1
    },
    "6983": {
      "overall_average": 541,
      "id": 6983,
      "sell_average": 465,
      "members": true,
      "buy_average": 370,
      "name": "Granite (5kg)",
      "sp": 1
    },
    "7051": {
      "overall_average": 306,
      "id": 7051,
      "sell_average": 306,
      "members": true,
      "buy_average": 306,
      "name": "Unlit bug lantern",
      "sp": 130
    },
    "7054": {
      "overall_average": 358,
      "id": 7054,
      "sell_average": 358,
      "members": true,
      "buy_average": 358,
      "name": "Chilli potato",
      "sp": 13
    },
    "7056": {
      "overall_average": 0,
      "id": 7056,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Egg potato",
      "sp": 12
    },
    "7058": {
      "overall_average": 0,
      "id": 7058,
      "sell_average": 746,
      "members": true,
      "buy_average": 746,
      "name": "Mushroom potato",
      "sp": 45
    },
    "7060": {
      "overall_average": 996,
      "id": 7060,
      "sell_average": 971,
      "members": true,
      "buy_average": 961,
      "name": "Tuna potato",
      "sp": 113
    },
    "7062": {
      "overall_average": 0,
      "id": 7062,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Chilli con carne",
      "sp": 13
    },
    "7064": {
      "overall_average": 0,
      "id": 7064,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Egg and tomato",
      "sp": 12
    },
    "7066": {
      "overall_average": 0,
      "id": 7066,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mushroom & onion",
      "sp": 45
    },
    "7068": {
      "overall_average": 0,
      "id": 7068,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Tuna and corn",
      "sp": 113
    },
    "7070": {
      "overall_average": 0,
      "id": 7070,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Minced meat",
      "sp": 8
    },
    "7072": {
      "overall_average": 0,
      "id": 7072,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Spicy sauce",
      "sp": 9
    },
    "7074": {
      "overall_average": 0,
      "id": 7074,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Chopped garlic",
      "sp": 7
    },
    "7076": {
      "overall_average": 0,
      "id": 7076,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Uncooked egg",
      "sp": 8
    },
    "7078": {
      "overall_average": 0,
      "id": 7078,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Scrambled egg",
      "sp": 8
    },
    "7080": {
      "overall_average": 0,
      "id": 7080,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Sliced mushrooms",
      "sp": 42
    },
    "7082": {
      "overall_average": 0,
      "id": 7082,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fried mushrooms",
      "sp": 42
    },
    "7084": {
      "overall_average": 0,
      "id": 7084,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fried onions",
      "sp": 7
    },
    "7086": {
      "overall_average": 0,
      "id": 7086,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Chopped tuna",
      "sp": 104
    },
    "7088": {
      "overall_average": 282,
      "id": 7088,
      "sell_average": 281,
      "members": true,
      "buy_average": 255,
      "name": "Sweetcorn",
      "sp": 13
    },
    "7110": {
      "overall_average": 755,
      "id": 7110,
      "sell_average": 755,
      "members": true,
      "buy_average": 0,
      "name": "Stripy pirate shirt",
      "sp": 300
    },
    "7112": {
      "overall_average": 601,
      "id": 7112,
      "sell_average": 601,
      "members": true,
      "buy_average": 0,
      "name": "Pirate bandana",
      "sp": 100
    },
    "7114": {
      "overall_average": 368,
      "id": 7114,
      "sell_average": 360,
      "members": true,
      "buy_average": 350,
      "name": "Pirate boots",
      "sp": 350
    },
    "7116": {
      "overall_average": 0,
      "id": 7116,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Pirate leggings",
      "sp": 350
    },
    "7122": {
      "overall_average": 801,
      "id": 7122,
      "sell_average": 789,
      "members": true,
      "buy_average": 1,
      "name": "Stripy pirate shirt",
      "sp": 300
    },
    "7124": {
      "overall_average": 641,
      "id": 7124,
      "sell_average": 343,
      "members": true,
      "buy_average": 46,
      "name": "Pirate bandana",
      "sp": 100
    },
    "7126": {
      "overall_average": 0,
      "id": 7126,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Pirate leggings",
      "sp": 350
    },
    "7128": {
      "overall_average": 326,
      "id": 7128,
      "sell_average": 218,
      "members": true,
      "buy_average": 3,
      "name": "Stripy pirate shirt",
      "sp": 300
    },
    "7130": {
      "overall_average": 354,
      "id": 7130,
      "sell_average": 354,
      "members": true,
      "buy_average": 354,
      "name": "Pirate bandana",
      "sp": 100
    },
    "7132": {
      "overall_average": 1055,
      "id": 7132,
      "sell_average": 1055,
      "members": true,
      "buy_average": 0,
      "name": "Pirate leggings",
      "sp": 350
    },
    "7134": {
      "overall_average": 2800,
      "id": 7134,
      "sell_average": 2800,
      "members": true,
      "buy_average": 0,
      "name": "Stripy pirate shirt",
      "sp": 300
    },
    "7136": {
      "overall_average": 741,
      "id": 7136,
      "sell_average": 741,
      "members": true,
      "buy_average": 0,
      "name": "Pirate bandana",
      "sp": 100
    },
    "7138": {
      "overall_average": 3161,
      "id": 7138,
      "sell_average": 3161,
      "members": true,
      "buy_average": 0,
      "name": "Pirate leggings",
      "sp": 350
    },
    "7158": {
      "overall_average": 140000,
      "id": 7158,
      "sell_average": 135246,
      "members": true,
      "buy_average": 132870,
      "name": "Dragon 2h sword",
      "sp": 220000
    },
    "7159": {
      "overall_average": 536,
      "id": 7159,
      "sell_average": 461,
      "members": true,
      "buy_average": 310,
      "name": "Insulated boots",
      "sp": 200
    },
    "7162": {
      "overall_average": 0,
      "id": 7162,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Pie recipe book",
      "sp": 5
    },
    "7168": {
      "overall_average": 0,
      "id": 7168,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Raw mud pie",
      "sp": 27
    },
    "7170": {
      "overall_average": 0,
      "id": 7170,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mud pie",
      "sp": 54
    },
    "7176": {
      "overall_average": 802,
      "id": 7176,
      "sell_average": 802,
      "members": true,
      "buy_average": 802,
      "name": "Raw garden pie",
      "sp": 12
    },
    "7178": {
      "overall_average": 178,
      "id": 7178,
      "sell_average": 154,
      "members": true,
      "buy_average": 92,
      "name": "Garden pie",
      "sp": 24
    },
    "7186": {
      "overall_average": 0,
      "id": 7186,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Raw fish pie",
      "sp": 50
    },
    "7188": {
      "overall_average": 0,
      "id": 7188,
      "sell_average": 40,
      "members": true,
      "buy_average": 40,
      "name": "Fish pie",
      "sp": 100
    },
    "7196": {
      "overall_average": 0,
      "id": 7196,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Raw admiral pie",
      "sp": 155
    },
    "7198": {
      "overall_average": 218,
      "id": 7198,
      "sell_average": 216,
      "members": true,
      "buy_average": 204,
      "name": "Admiral pie",
      "sp": 310
    },
    "7206": {
      "overall_average": 0,
      "id": 7206,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Raw wild pie",
      "sp": 91
    },
    "7208": {
      "overall_average": 916,
      "id": 7208,
      "sell_average": 893,
      "members": true,
      "buy_average": 871,
      "name": "Wild pie",
      "sp": 182
    },
    "7216": {
      "overall_average": 1225,
      "id": 7216,
      "sell_average": 1225,
      "members": true,
      "buy_average": 0,
      "name": "Raw summer pie",
      "sp": 70
    },
    "7218": {
      "overall_average": 928,
      "id": 7218,
      "sell_average": 919,
      "members": true,
      "buy_average": 916,
      "name": "Summer pie",
      "sp": 140
    },
    "7223": {
      "overall_average": 0,
      "id": 7223,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Roast rabbit",
      "sp": 20
    },
    "7225": {
      "overall_average": 118,
      "id": 7225,
      "sell_average": 114,
      "members": true,
      "buy_average": 105,
      "name": "Iron spit",
      "sp": 64
    },
    "7228": {
      "overall_average": 0,
      "id": 7228,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cooked chompy",
      "sp": 85
    },
    "7319": {
      "overall_average": 1322,
      "id": 7319,
      "sell_average": 1344,
      "members": true,
      "buy_average": 1409,
      "name": "Red boater",
      "sp": 225
    },
    "7321": {
      "overall_average": 0,
      "id": 7321,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Orange boater",
      "sp": 225
    },
    "7323": {
      "overall_average": 0,
      "id": 7323,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Green boater",
      "sp": 225
    },
    "7325": {
      "overall_average": 3355,
      "id": 7325,
      "sell_average": 3355,
      "members": true,
      "buy_average": 0,
      "name": "Blue boater",
      "sp": 225
    },
    "7327": {
      "overall_average": 2668,
      "id": 7327,
      "sell_average": 2668,
      "members": true,
      "buy_average": 0,
      "name": "Black boater",
      "sp": 225
    },
    "7329": {
      "overall_average": 0,
      "id": 7329,
      "sell_average": 16,
      "members": true,
      "buy_average": 16,
      "name": "Red firelighter",
      "sp": 15
    },
    "7330": {
      "overall_average": 0,
      "id": 7330,
      "sell_average": 20,
      "members": true,
      "buy_average": 20,
      "name": "Green firelighter",
      "sp": 15
    },
    "7331": {
      "overall_average": 0,
      "id": 7331,
      "sell_average": 19,
      "members": true,
      "buy_average": 19,
      "name": "Blue firelighter",
      "sp": 15
    },
    "7332": {
      "overall_average": 0,
      "id": 7332,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black shield (h1)",
      "sp": 1632
    },
    "7334": {
      "overall_average": 0,
      "id": 7334,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Adamant shield (h1)",
      "sp": 5440
    },
    "7336": {
      "overall_average": 53120,
      "id": 7336,
      "sell_average": 53327,
      "members": false,
      "buy_average": 53396,
      "name": "Rune shield (h1)",
      "sp": 54400
    },
    "7338": {
      "overall_average": 0,
      "id": 7338,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black shield (h2)",
      "sp": 1632
    },
    "7340": {
      "overall_average": 0,
      "id": 7340,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Adamant shield (h2)",
      "sp": 5440
    },
    "7342": {
      "overall_average": 37997,
      "id": 7342,
      "sell_average": 36482,
      "members": false,
      "buy_average": 33454,
      "name": "Rune shield (h2)",
      "sp": 54400
    },
    "7344": {
      "overall_average": 0,
      "id": 7344,
      "sell_average": 855,
      "members": false,
      "buy_average": 855,
      "name": "Black shield (h3)",
      "sp": 1632
    },
    "7346": {
      "overall_average": 0,
      "id": 7346,
      "sell_average": 2869,
      "members": false,
      "buy_average": 2869,
      "name": "Adamant shield (h3)",
      "sp": 5440
    },
    "7348": {
      "overall_average": 35999,
      "id": 7348,
      "sell_average": 33095,
      "members": false,
      "buy_average": 32128,
      "name": "Rune shield (h3)",
      "sp": 54400
    },
    "7350": {
      "overall_average": 0,
      "id": 7350,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black shield (h4)",
      "sp": 1632
    },
    "7352": {
      "overall_average": 0,
      "id": 7352,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Adamant shield (h4)",
      "sp": 5440
    },
    "7354": {
      "overall_average": 0,
      "id": 7354,
      "sell_average": 33108,
      "members": false,
      "buy_average": 33108,
      "name": "Rune shield (h4)",
      "sp": 54400
    },
    "7356": {
      "overall_average": 0,
      "id": 7356,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black shield (h5)",
      "sp": 1632
    },
    "7358": {
      "overall_average": 0,
      "id": 7358,
      "sell_average": 2937,
      "members": false,
      "buy_average": 2937,
      "name": "Adamant shield (h5)",
      "sp": 5440
    },
    "7360": {
      "overall_average": 43258,
      "id": 7360,
      "sell_average": 42774,
      "members": false,
      "buy_average": 41321,
      "name": "Rune shield (h5)",
      "sp": 54400
    },
    "7362": {
      "overall_average": 0,
      "id": 7362,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Studded body (g)",
      "sp": 850
    },
    "7364": {
      "overall_average": 7968,
      "id": 7364,
      "sell_average": 7968,
      "members": false,
      "buy_average": 0,
      "name": "Studded body (t)",
      "sp": 850
    },
    "7366": {
      "overall_average": 72248,
      "id": 7366,
      "sell_average": 70465,
      "members": false,
      "buy_average": 69574,
      "name": "Studded chaps (g)",
      "sp": 750
    },
    "7368": {
      "overall_average": 0,
      "id": 7368,
      "sell_average": 16418,
      "members": false,
      "buy_average": 16418,
      "name": "Studded chaps (t)",
      "sp": 750
    },
    "7370": {
      "overall_average": 7611,
      "id": 7370,
      "sell_average": 7525,
      "members": false,
      "buy_average": 7467,
      "name": "Green d'hide body (g)",
      "sp": 7800
    },
    "7372": {
      "overall_average": 4610,
      "id": 7372,
      "sell_average": 4536,
      "members": false,
      "buy_average": 4500,
      "name": "Green d'hide body (t)",
      "sp": 7800
    },
    "7374": {
      "overall_average": 6525,
      "id": 7374,
      "sell_average": 5692,
      "members": true,
      "buy_average": 4305,
      "name": "Blue d'hide body (g)",
      "sp": 9360
    },
    "7376": {
      "overall_average": 35000,
      "id": 7376,
      "sell_average": 20200,
      "members": true,
      "buy_average": 5400,
      "name": "Blue d'hide body (t)",
      "sp": 9360
    },
    "7378": {
      "overall_average": 69880,
      "id": 7378,
      "sell_average": 69100,
      "members": false,
      "buy_average": 67801,
      "name": "Green d'hide chaps (g)",
      "sp": 3900
    },
    "7380": {
      "overall_average": 0,
      "id": 7380,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Green d'hide chaps (t)",
      "sp": 3900
    },
    "7382": {
      "overall_average": 6718,
      "id": 7382,
      "sell_average": 6719,
      "members": true,
      "buy_average": 6721,
      "name": "Blue d'hide chaps (g)",
      "sp": 4320
    },
    "7384": {
      "overall_average": 7777,
      "id": 7384,
      "sell_average": 5268,
      "members": true,
      "buy_average": 2759,
      "name": "Blue d'hide chaps (t)",
      "sp": 4320
    },
    "7386": {
      "overall_average": 33801,
      "id": 7386,
      "sell_average": 33184,
      "members": false,
      "buy_average": 31335,
      "name": "Blue skirt (g)",
      "sp": 2
    },
    "7388": {
      "overall_average": 50443,
      "id": 7388,
      "sell_average": 39504,
      "members": false,
      "buy_average": 39504,
      "name": "Blue skirt (t)",
      "sp": 2
    },
    "7390": {
      "overall_average": 317395,
      "id": 7390,
      "sell_average": 310457,
      "members": false,
      "buy_average": 300051,
      "name": "Blue wizard robe (g)",
      "sp": 15
    },
    "7392": {
      "overall_average": 70000,
      "id": 7392,
      "sell_average": 68571,
      "members": false,
      "buy_average": 66666,
      "name": "Blue wizard robe (t)",
      "sp": 15
    },
    "7394": {
      "overall_average": 206498,
      "id": 7394,
      "sell_average": 204174,
      "members": false,
      "buy_average": 202624,
      "name": "Blue wizard hat (g)",
      "sp": 2
    },
    "7396": {
      "overall_average": 80000,
      "id": 7396,
      "sell_average": 79639,
      "members": false,
      "buy_average": 79279,
      "name": "Blue wizard hat (t)",
      "sp": 2
    },
    "7398": {
      "overall_average": 53918,
      "id": 7398,
      "sell_average": 53116,
      "members": true,
      "buy_average": 47500,
      "name": "Enchanted robe",
      "sp": 80000
    },
    "7399": {
      "overall_average": 73492,
      "id": 7399,
      "sell_average": 73021,
      "members": true,
      "buy_average": 70200,
      "name": "Enchanted top",
      "sp": 120000
    },
    "7400": {
      "overall_average": 15000,
      "id": 7400,
      "sell_average": 13000,
      "members": true,
      "buy_average": 11000,
      "name": "Enchanted hat",
      "sp": 15000
    },
    "7416": {
      "overall_average": 6741,
      "id": 7416,
      "sell_average": 6688,
      "members": true,
      "buy_average": 6676,
      "name": "Mole claw",
      "sp": 600
    },
    "7418": {
      "overall_average": 5882,
      "id": 7418,
      "sell_average": 5743,
      "members": true,
      "buy_average": 5716,
      "name": "Mole skin",
      "sp": 400
    },
    "7433": {
      "overall_average": 0,
      "id": 7433,
      "sell_average": 200,
      "members": true,
      "buy_average": 200,
      "name": "Wooden spoon",
      "sp": 35
    },
    "7435": {
      "overall_average": 0,
      "id": 7435,
      "sell_average": 50,
      "members": true,
      "buy_average": 50,
      "name": "Egg whisk",
      "sp": 50
    },
    "7437": {
      "overall_average": 0,
      "id": 7437,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Spork",
      "sp": 325
    },
    "7439": {
      "overall_average": 0,
      "id": 7439,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Spatula",
      "sp": 1920
    },
    "7441": {
      "overall_average": 0,
      "id": 7441,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Frying pan",
      "sp": 1660
    },
    "7443": {
      "overall_average": 0,
      "id": 7443,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Skewer",
      "sp": 3200
    },
    "7445": {
      "overall_average": 19001,
      "id": 7445,
      "sell_average": 19001,
      "members": true,
      "buy_average": 0,
      "name": "Rolling pin",
      "sp": 14400
    },
    "7447": {
      "overall_average": 0,
      "id": 7447,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Kitchen knife",
      "sp": 8000
    },
    "7449": {
      "overall_average": 0,
      "id": 7449,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Meat tenderiser",
      "sp": 41500
    },
    "7451": {
      "overall_average": 0,
      "id": 7451,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cleaver",
      "sp": 25600
    },
    "7466": {
      "overall_average": 0,
      "id": 7466,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Cornflour",
      "sp": 1
    },
    "7468": {
      "overall_average": 2000,
      "id": 7468,
      "sell_average": 2000,
      "members": true,
      "buy_average": 0,
      "name": "Pot of cornflour",
      "sp": 10
    },
    "7521": {
      "overall_average": 0,
      "id": 7521,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cooked crab meat",
      "sp": 50
    },
    "7566": {
      "overall_average": 0,
      "id": 7566,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Raw jubbly",
      "sp": 100
    },
    "7568": {
      "overall_average": 0,
      "id": 7568,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cooked jubbly",
      "sp": 150
    },
    "7650": {
      "overall_average": 700,
      "id": 7650,
      "sell_average": 700,
      "members": true,
      "buy_average": 0,
      "name": "Silver dust",
      "sp": 200
    },
    "7660": {
      "overall_average": 0,
      "id": 7660,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Guthix balance(4)",
      "sp": 200
    },
    "7662": {
      "overall_average": 0,
      "id": 7662,
      "sell_average": 350,
      "members": true,
      "buy_average": 350,
      "name": "Guthix balance(3)",
      "sp": 200
    },
    "7664": {
      "overall_average": 0,
      "id": 7664,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Guthix balance(2)",
      "sp": 200
    },
    "7666": {
      "overall_average": 0,
      "id": 7666,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Guthix balance(1)",
      "sp": 200
    },
    "7668": {
      "overall_average": 0,
      "id": 7668,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gadderhammer",
      "sp": 3000
    },
    "7759": {
      "overall_average": 0,
      "id": 7759,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Toy soldier",
      "sp": 10
    },
    "7761": {
      "overall_average": 0,
      "id": 7761,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Toy soldier (wound)",
      "sp": 10
    },
    "7763": {
      "overall_average": 3432,
      "id": 7763,
      "sell_average": 3432,
      "members": true,
      "buy_average": 0,
      "name": "Toy doll",
      "sp": 10
    },
    "7765": {
      "overall_average": 0,
      "id": 7765,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Toy doll (wound)",
      "sp": 10
    },
    "7767": {
      "overall_average": 0,
      "id": 7767,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Toy mouse",
      "sp": 10
    },
    "7769": {
      "overall_average": 0,
      "id": 7769,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Toy mouse (wound)",
      "sp": 10
    },
    "7771": {
      "overall_average": 11635,
      "id": 7771,
      "sell_average": 8581,
      "members": true,
      "buy_average": 4000,
      "name": "Toy cat",
      "sp": 10
    },
    "7801": {
      "overall_average": 0,
      "id": 7801,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Snake hide",
      "sp": 35
    },
    "7919": {
      "overall_average": 0,
      "id": 7919,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bottle of wine",
      "sp": 500
    },
    "7936": {
      "overall_average": 5,
      "id": 7936,
      "sell_average": 5,
      "members": false,
      "buy_average": 4,
      "name": "Pure essence",
      "sp": 4
    },
    "7939": {
      "overall_average": 0,
      "id": 7939,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Tortoise shell",
      "sp": 1000
    },
    "7944": {
      "overall_average": 328,
      "id": 7944,
      "sell_average": 326,
      "members": true,
      "buy_average": 326,
      "name": "Raw monkfish",
      "sp": 230
    },
    "7946": {
      "overall_average": 424,
      "id": 7946,
      "sell_average": 424,
      "members": true,
      "buy_average": 423,
      "name": "Monkfish",
      "sp": 230
    },
    "8007": {
      "overall_average": 547,
      "id": 8007,
      "sell_average": 546,
      "members": true,
      "buy_average": 544,
      "name": "Varrock teleport",
      "sp": 1
    },
    "8008": {
      "overall_average": 512,
      "id": 8008,
      "sell_average": 511,
      "members": true,
      "buy_average": 510,
      "name": "Lumbridge teleport",
      "sp": 1
    },
    "8009": {
      "overall_average": 507,
      "id": 8009,
      "sell_average": 508,
      "members": true,
      "buy_average": 509,
      "name": "Falador teleport",
      "sp": 1
    },
    "8010": {
      "overall_average": 439,
      "id": 8010,
      "sell_average": 437,
      "members": true,
      "buy_average": 433,
      "name": "Camelot teleport",
      "sp": 1
    },
    "8011": {
      "overall_average": 563,
      "id": 8011,
      "sell_average": 558,
      "members": true,
      "buy_average": 534,
      "name": "Ardougne teleport",
      "sp": 1
    },
    "8012": {
      "overall_average": 451,
      "id": 8012,
      "sell_average": 443,
      "members": true,
      "buy_average": 434,
      "name": "Watchtower teleport",
      "sp": 1
    },
    "8013": {
      "overall_average": 504,
      "id": 8013,
      "sell_average": 506,
      "members": true,
      "buy_average": 511,
      "name": "Teleport to house",
      "sp": 1
    },
    "8014": {
      "overall_average": 740,
      "id": 8014,
      "sell_average": 740,
      "members": true,
      "buy_average": 740,
      "name": "Bones to bananas",
      "sp": 1
    },
    "8015": {
      "overall_average": 945,
      "id": 8015,
      "sell_average": 935,
      "members": true,
      "buy_average": 917,
      "name": "Bones to peaches",
      "sp": 1
    },
    "8016": {
      "overall_average": 0,
      "id": 8016,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Enchant sapphire or opal",
      "sp": 1
    },
    "8017": {
      "overall_average": 0,
      "id": 8017,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Enchant emerald or jade",
      "sp": 1
    },
    "8018": {
      "overall_average": 1710,
      "id": 8018,
      "sell_average": 1710,
      "members": true,
      "buy_average": 0,
      "name": "Enchant ruby or topaz",
      "sp": 1
    },
    "8019": {
      "overall_average": 0,
      "id": 8019,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Enchant diamond",
      "sp": 1
    },
    "8020": {
      "overall_average": 0,
      "id": 8020,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Enchant dragonstone",
      "sp": 1
    },
    "8021": {
      "overall_average": 0,
      "id": 8021,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Enchant onyx",
      "sp": 1
    },
    "8417": {
      "overall_average": 7000,
      "id": 8417,
      "sell_average": 7000,
      "members": true,
      "buy_average": 0,
      "name": "Bagged dead tree",
      "sp": 1000
    },
    "8419": {
      "overall_average": 8923,
      "id": 8419,
      "sell_average": 8923,
      "members": true,
      "buy_average": 0,
      "name": "Bagged nice tree",
      "sp": 2000
    },
    "8421": {
      "overall_average": 5712,
      "id": 8421,
      "sell_average": 5712,
      "members": true,
      "buy_average": 5712,
      "name": "Bagged oak tree",
      "sp": 5000
    },
    "8423": {
      "overall_average": 0,
      "id": 8423,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bagged willow tree",
      "sp": 10000
    },
    "8425": {
      "overall_average": 0,
      "id": 8425,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bagged maple tree",
      "sp": 15000
    },
    "8427": {
      "overall_average": 21818,
      "id": 8427,
      "sell_average": 21818,
      "members": true,
      "buy_average": 0,
      "name": "Bagged yew tree",
      "sp": 20000
    },
    "8429": {
      "overall_average": 54000,
      "id": 8429,
      "sell_average": 51750,
      "members": true,
      "buy_average": 45001,
      "name": "Bagged magic tree",
      "sp": 50000
    },
    "8431": {
      "overall_average": 0,
      "id": 8431,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bagged plant 1",
      "sp": 1000
    },
    "8433": {
      "overall_average": 0,
      "id": 8433,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bagged plant 2",
      "sp": 5000
    },
    "8435": {
      "overall_average": 12787,
      "id": 8435,
      "sell_average": 12578,
      "members": true,
      "buy_average": 10700,
      "name": "Bagged plant 3",
      "sp": 10000
    },
    "8437": {
      "overall_average": 0,
      "id": 8437,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Thorny hedge",
      "sp": 5000
    },
    "8439": {
      "overall_average": 0,
      "id": 8439,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Nice hedge",
      "sp": 10000
    },
    "8441": {
      "overall_average": 17804,
      "id": 8441,
      "sell_average": 17804,
      "members": true,
      "buy_average": 0,
      "name": "Small box hedge",
      "sp": 15000
    },
    "8443": {
      "overall_average": 23982,
      "id": 8443,
      "sell_average": 21761,
      "members": true,
      "buy_average": 15100,
      "name": "Topiary hedge",
      "sp": 20000
    },
    "8445": {
      "overall_average": 0,
      "id": 8445,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fancy hedge",
      "sp": 25000
    },
    "8447": {
      "overall_average": 0,
      "id": 8447,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Tall fancy hedge",
      "sp": 50000
    },
    "8449": {
      "overall_average": 0,
      "id": 8449,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Tall box hedge",
      "sp": 100000
    },
    "8451": {
      "overall_average": 0,
      "id": 8451,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bagged flower",
      "sp": 5000
    },
    "8453": {
      "overall_average": 0,
      "id": 8453,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bagged daffodils",
      "sp": 10000
    },
    "8455": {
      "overall_average": 0,
      "id": 8455,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bagged bluebells",
      "sp": 15000
    },
    "8457": {
      "overall_average": 4873,
      "id": 8457,
      "sell_average": 4707,
      "members": true,
      "buy_average": 4376,
      "name": "Bagged sunflower",
      "sp": 5000
    },
    "8459": {
      "overall_average": 0,
      "id": 8459,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bagged marigolds",
      "sp": 10000
    },
    "8461": {
      "overall_average": 0,
      "id": 8461,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bagged roses",
      "sp": 15000
    },
    "8496": {
      "overall_average": 509,
      "id": 8496,
      "sell_average": 500,
      "members": true,
      "buy_average": 500,
      "name": "Crude chair",
      "sp": 10
    },
    "8498": {
      "overall_average": 499,
      "id": 8498,
      "sell_average": 324,
      "members": true,
      "buy_average": 150,
      "name": "Wooden chair",
      "sp": 10
    },
    "8500": {
      "overall_average": 0,
      "id": 8500,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rocking chair",
      "sp": 10
    },
    "8502": {
      "overall_average": 0,
      "id": 8502,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak chair",
      "sp": 10
    },
    "8504": {
      "overall_average": 0,
      "id": 8504,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak armchair",
      "sp": 10
    },
    "8506": {
      "overall_average": 0,
      "id": 8506,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak armchair",
      "sp": 10
    },
    "8508": {
      "overall_average": 0,
      "id": 8508,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany armchair",
      "sp": 10
    },
    "8510": {
      "overall_average": 0,
      "id": 8510,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bookcase",
      "sp": 10
    },
    "8512": {
      "overall_average": 0,
      "id": 8512,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak bookcase",
      "sp": 10
    },
    "8514": {
      "overall_average": 0,
      "id": 8514,
      "sell_average": 223,
      "members": true,
      "buy_average": 223,
      "name": "Mahogany bookcase",
      "sp": 10
    },
    "8516": {
      "overall_average": 0,
      "id": 8516,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Beer barrel",
      "sp": 10
    },
    "8518": {
      "overall_average": 0,
      "id": 8518,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cider barrel",
      "sp": 10
    },
    "8520": {
      "overall_average": 0,
      "id": 8520,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Asgarnian ale",
      "sp": 10
    },
    "8522": {
      "overall_average": 0,
      "id": 8522,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Greenman's ale",
      "sp": 10
    },
    "8524": {
      "overall_average": 0,
      "id": 8524,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon bitter",
      "sp": 10
    },
    "8526": {
      "overall_average": 0,
      "id": 8526,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Chef's delight",
      "sp": 10
    },
    "8528": {
      "overall_average": 0,
      "id": 8528,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Kitchen table",
      "sp": 10
    },
    "8530": {
      "overall_average": 0,
      "id": 8530,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak kitchen table",
      "sp": 10
    },
    "8532": {
      "overall_average": 0,
      "id": 8532,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak kitchen table",
      "sp": 10
    },
    "8534": {
      "overall_average": 0,
      "id": 8534,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak lectern",
      "sp": 10
    },
    "8536": {
      "overall_average": 0,
      "id": 8536,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Eagle lectern",
      "sp": 10
    },
    "8538": {
      "overall_average": 0,
      "id": 8538,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Demon lectern",
      "sp": 10
    },
    "8540": {
      "overall_average": 0,
      "id": 8540,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak eagle lectern",
      "sp": 10
    },
    "8542": {
      "overall_average": 0,
      "id": 8542,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak demon lectern",
      "sp": 10
    },
    "8544": {
      "overall_average": 0,
      "id": 8544,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany eagle",
      "sp": 10
    },
    "8546": {
      "overall_average": 0,
      "id": 8546,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany demon",
      "sp": 10
    },
    "8548": {
      "overall_average": 0,
      "id": 8548,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Wood dining table",
      "sp": 10
    },
    "8550": {
      "overall_average": 0,
      "id": 8550,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak dining table",
      "sp": 10
    },
    "8552": {
      "overall_average": 0,
      "id": 8552,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Carved oak table",
      "sp": 10
    },
    "8554": {
      "overall_average": 0,
      "id": 8554,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak table",
      "sp": 10
    },
    "8556": {
      "overall_average": 0,
      "id": 8556,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Carved teak table",
      "sp": 10
    },
    "8558": {
      "overall_average": 0,
      "id": 8558,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany table",
      "sp": 10
    },
    "8560": {
      "overall_average": 0,
      "id": 8560,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Opulent table",
      "sp": 10
    },
    "8562": {
      "overall_average": 0,
      "id": 8562,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Wooden bench",
      "sp": 10
    },
    "8564": {
      "overall_average": 0,
      "id": 8564,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak bench",
      "sp": 10
    },
    "8566": {
      "overall_average": 0,
      "id": 8566,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Carved oak bench",
      "sp": 10
    },
    "8568": {
      "overall_average": 0,
      "id": 8568,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak dining bench",
      "sp": 10
    },
    "8570": {
      "overall_average": 0,
      "id": 8570,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Carved teak bench",
      "sp": 10
    },
    "8572": {
      "overall_average": 0,
      "id": 8572,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany bench",
      "sp": 10
    },
    "8574": {
      "overall_average": 0,
      "id": 8574,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gilded bench",
      "sp": 10
    },
    "8576": {
      "overall_average": 0,
      "id": 8576,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Wooden bed",
      "sp": 10
    },
    "8578": {
      "overall_average": 0,
      "id": 8578,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak bed",
      "sp": 10
    },
    "8580": {
      "overall_average": 0,
      "id": 8580,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Large oak bed",
      "sp": 10
    },
    "8582": {
      "overall_average": 0,
      "id": 8582,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak bed",
      "sp": 10
    },
    "8584": {
      "overall_average": 0,
      "id": 8584,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Large teak bed",
      "sp": 10
    },
    "8586": {
      "overall_average": 5000,
      "id": 8586,
      "sell_average": 5000,
      "members": true,
      "buy_average": 0,
      "name": "Four-poster bed",
      "sp": 10
    },
    "8588": {
      "overall_average": 0,
      "id": 8588,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gilded four-poster",
      "sp": 10
    },
    "8590": {
      "overall_average": 0,
      "id": 8590,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak clock",
      "sp": 10
    },
    "8592": {
      "overall_average": 0,
      "id": 8592,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak clock",
      "sp": 10
    },
    "8594": {
      "overall_average": 0,
      "id": 8594,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gilded clock",
      "sp": 10
    },
    "8596": {
      "overall_average": 0,
      "id": 8596,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Shaving stand",
      "sp": 10
    },
    "8598": {
      "overall_average": 0,
      "id": 8598,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak shaving stand",
      "sp": 10
    },
    "8600": {
      "overall_average": 0,
      "id": 8600,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak dresser",
      "sp": 10
    },
    "8602": {
      "overall_average": 0,
      "id": 8602,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak dresser",
      "sp": 10
    },
    "8604": {
      "overall_average": 0,
      "id": 8604,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fancy teak dresser",
      "sp": 10
    },
    "8606": {
      "overall_average": 0,
      "id": 8606,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany dresser",
      "sp": 10
    },
    "8608": {
      "overall_average": 0,
      "id": 8608,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gilded dresser",
      "sp": 10
    },
    "8610": {
      "overall_average": 0,
      "id": 8610,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Shoe box",
      "sp": 10
    },
    "8612": {
      "overall_average": 0,
      "id": 8612,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak drawers",
      "sp": 10
    },
    "8614": {
      "overall_average": 0,
      "id": 8614,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak wardrobe",
      "sp": 10
    },
    "8616": {
      "overall_average": 0,
      "id": 8616,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak drawers",
      "sp": 10
    },
    "8618": {
      "overall_average": 0,
      "id": 8618,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak wardrobe",
      "sp": 10
    },
    "8620": {
      "overall_average": 0,
      "id": 8620,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany wardrobe",
      "sp": 10
    },
    "8622": {
      "overall_average": 0,
      "id": 8622,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gilded wardrobe",
      "sp": 10
    },
    "8624": {
      "overall_average": 0,
      "id": 8624,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Crystal ball",
      "sp": 10
    },
    "8626": {
      "overall_average": 0,
      "id": 8626,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Elemental sphere",
      "sp": 10
    },
    "8628": {
      "overall_average": 0,
      "id": 8628,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Crystal of power",
      "sp": 10
    },
    "8630": {
      "overall_average": 0,
      "id": 8630,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Globe",
      "sp": 10
    },
    "8632": {
      "overall_average": 0,
      "id": 8632,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ornamental globe",
      "sp": 10
    },
    "8634": {
      "overall_average": 0,
      "id": 8634,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Lunar globe",
      "sp": 10
    },
    "8636": {
      "overall_average": 0,
      "id": 8636,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Celestial globe",
      "sp": 10
    },
    "8638": {
      "overall_average": 0,
      "id": 8638,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Armillary sphere",
      "sp": 10
    },
    "8640": {
      "overall_average": 0,
      "id": 8640,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Small orrery",
      "sp": 10
    },
    "8642": {
      "overall_average": 0,
      "id": 8642,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Large orrery",
      "sp": 10
    },
    "8644": {
      "overall_average": 0,
      "id": 8644,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Wooden telescope",
      "sp": 10
    },
    "8646": {
      "overall_average": 0,
      "id": 8646,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak telescope",
      "sp": 10
    },
    "8648": {
      "overall_average": 0,
      "id": 8648,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany telescope",
      "sp": 10
    },
    "8778": {
      "overall_average": 444,
      "id": 8778,
      "sell_average": 442,
      "members": true,
      "buy_average": 440,
      "name": "Oak plank",
      "sp": 250
    },
    "8780": {
      "overall_average": 860,
      "id": 8780,
      "sell_average": 857,
      "members": true,
      "buy_average": 856,
      "name": "Teak plank",
      "sp": 500
    },
    "8782": {
      "overall_average": 2148,
      "id": 8782,
      "sell_average": 2147,
      "members": true,
      "buy_average": 2146,
      "name": "Mahogany plank",
      "sp": 1500
    },
    "8784": {
      "overall_average": 132099,
      "id": 8784,
      "sell_average": 132053,
      "members": true,
      "buy_average": 132005,
      "name": "Gold leaf",
      "sp": 100000
    },
    "8786": {
      "overall_average": 327998,
      "id": 8786,
      "sell_average": 323435,
      "members": true,
      "buy_average": 313169,
      "name": "Marble block",
      "sp": 250000
    },
    "8788": {
      "overall_average": 982000,
      "id": 8788,
      "sell_average": 979568,
      "members": true,
      "buy_average": 979019,
      "name": "Magic stone",
      "sp": 750000
    },
    "8790": {
      "overall_average": 849,
      "id": 8790,
      "sell_average": 829,
      "members": true,
      "buy_average": 825,
      "name": "Bolt of cloth",
      "sp": 500
    },
    "8792": {
      "overall_average": 1400,
      "id": 8792,
      "sell_average": 1109,
      "members": true,
      "buy_average": 1001,
      "name": "Clockwork",
      "sp": 500
    },
    "8794": {
      "overall_average": 320,
      "id": 8794,
      "sell_average": 320,
      "members": true,
      "buy_average": 0,
      "name": "Saw",
      "sp": 10
    },
    "8837": {
      "overall_average": 0,
      "id": 8837,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Timber beam",
      "sp": 1
    },
    "8872": {
      "overall_average": 2502,
      "id": 8872,
      "sell_average": 2496,
      "members": true,
      "buy_average": 2425,
      "name": "Bone dagger",
      "sp": 2000
    },
    "8874": {
      "overall_average": 0,
      "id": 8874,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bone dagger (p)",
      "sp": 2000
    },
    "8876": {
      "overall_average": 0,
      "id": 8876,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bone dagger (p+)",
      "sp": 2000
    },
    "8878": {
      "overall_average": 8650,
      "id": 8878,
      "sell_average": 8020,
      "members": true,
      "buy_average": 7968,
      "name": "Bone dagger (p++)",
      "sp": 2000
    },
    "8880": {
      "overall_average": 3463,
      "id": 8880,
      "sell_average": 2792,
      "members": true,
      "buy_average": 1451,
      "name": "Dorgeshuun crossbow",
      "sp": 2000
    },
    "8882": {
      "overall_average": 7,
      "id": 8882,
      "sell_average": 6,
      "members": true,
      "buy_average": 6,
      "name": "Bone bolts",
      "sp": 3
    },
    "8901": {
      "overall_average": 990451,
      "id": 8901,
      "sell_average": 981138,
      "members": true,
      "buy_average": 975550,
      "name": "Black mask (10)",
      "sp": 3000
    },
    "8921": {
      "overall_average": 997356,
      "id": 8921,
      "sell_average": 994020,
      "members": true,
      "buy_average": 989294,
      "name": "Black mask",
      "sp": 3000
    },
    "8924": {
      "overall_average": 0,
      "id": 8924,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bandana eyepatch",
      "sp": 100
    },
    "8925": {
      "overall_average": 0,
      "id": 8925,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bandana eyepatch",
      "sp": 100
    },
    "8926": {
      "overall_average": 985,
      "id": 8926,
      "sell_average": 985,
      "members": true,
      "buy_average": 0,
      "name": "Bandana eyepatch",
      "sp": 100
    },
    "8927": {
      "overall_average": 0,
      "id": 8927,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bandana eyepatch",
      "sp": 100
    },
    "8928": {
      "overall_average": 0,
      "id": 8928,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Hat eyepatch",
      "sp": 100
    },
    "9003": {
      "overall_average": 0,
      "id": 9003,
      "sell_average": 23,
      "members": false,
      "buy_average": 23,
      "name": "Security book",
      "sp": 2
    },
    "9004": {
      "overall_average": 0,
      "id": 9004,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Stronghold notes",
      "sp": 2
    },
    "9026": {
      "overall_average": 0,
      "id": 9026,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ivory comb",
      "sp": 10
    },
    "9028": {
      "overall_average": 0,
      "id": 9028,
      "sell_average": 966,
      "members": true,
      "buy_average": 966,
      "name": "Golden scarab",
      "sp": 30
    },
    "9030": {
      "overall_average": 0,
      "id": 9030,
      "sell_average": 174,
      "members": true,
      "buy_average": 174,
      "name": "Stone scarab",
      "sp": 20
    },
    "9032": {
      "overall_average": 0,
      "id": 9032,
      "sell_average": 77,
      "members": true,
      "buy_average": 77,
      "name": "Pottery scarab",
      "sp": 10
    },
    "9034": {
      "overall_average": 1333,
      "id": 9034,
      "sell_average": 1277,
      "members": true,
      "buy_average": 1222,
      "name": "Golden statuette",
      "sp": 30
    },
    "9036": {
      "overall_average": 0,
      "id": 9036,
      "sell_average": 99,
      "members": true,
      "buy_average": 99,
      "name": "Pottery statuette",
      "sp": 10
    },
    "9038": {
      "overall_average": 0,
      "id": 9038,
      "sell_average": 211,
      "members": true,
      "buy_average": 211,
      "name": "Stone statuette",
      "sp": 20
    },
    "9040": {
      "overall_average": 758,
      "id": 9040,
      "sell_average": 730,
      "members": true,
      "buy_average": 730,
      "name": "Gold seal",
      "sp": 30
    },
    "9042": {
      "overall_average": 0,
      "id": 9042,
      "sell_average": 149,
      "members": true,
      "buy_average": 149,
      "name": "Stone seal",
      "sp": 20
    },
    "9044": {
      "overall_average": 5574734,
      "id": 9044,
      "sell_average": 5557034,
      "members": true,
      "buy_average": 5539334,
      "name": "Pharaoh's sceptre (3)",
      "sp": 83334
    },
    "9050": {
      "overall_average": 5560450,
      "id": 9050,
      "sell_average": 5534944,
      "members": true,
      "buy_average": 5503063,
      "name": "Pharaoh's sceptre",
      "sp": 83334
    },
    "9052": {
      "overall_average": 0,
      "id": 9052,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Locust meat",
      "sp": 1
    },
    "9075": {
      "overall_average": 146,
      "id": 9075,
      "sell_average": 146,
      "members": true,
      "buy_average": 145,
      "name": "Astral rune",
      "sp": 50
    },
    "9140": {
      "overall_average": 34,
      "id": 9140,
      "sell_average": 33,
      "members": true,
      "buy_average": 23,
      "name": "Iron bolts",
      "sp": 2
    },
    "9141": {
      "overall_average": 38,
      "id": 9141,
      "sell_average": 38,
      "members": true,
      "buy_average": 39,
      "name": "Steel bolts",
      "sp": 8
    },
    "9142": {
      "overall_average": 76,
      "id": 9142,
      "sell_average": 75,
      "members": true,
      "buy_average": 74,
      "name": "Mithril bolts",
      "sp": 20
    },
    "9143": {
      "overall_average": 212,
      "id": 9143,
      "sell_average": 211,
      "members": true,
      "buy_average": 210,
      "name": "Adamant bolts",
      "sp": 58
    },
    "9144": {
      "overall_average": 317,
      "id": 9144,
      "sell_average": 316,
      "members": true,
      "buy_average": 314,
      "name": "Runite bolts",
      "sp": 300
    },
    "9145": {
      "overall_average": 0,
      "id": 9145,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Silver bolts",
      "sp": 5
    },
    "9174": {
      "overall_average": 0,
      "id": 9174,
      "sell_average": 150,
      "members": true,
      "buy_average": 150,
      "name": "Bronze crossbow",
      "sp": 73
    },
    "9177": {
      "overall_average": 32,
      "id": 9177,
      "sell_average": 20,
      "members": true,
      "buy_average": 15,
      "name": "Iron crossbow",
      "sp": 157
    },
    "9179": {
      "overall_average": 70,
      "id": 9179,
      "sell_average": 58,
      "members": true,
      "buy_average": 11,
      "name": "Steel crossbow",
      "sp": 360
    },
    "9181": {
      "overall_average": 602,
      "id": 9181,
      "sell_average": 539,
      "members": true,
      "buy_average": 101,
      "name": "Mith crossbow",
      "sp": 783
    },
    "9183": {
      "overall_average": 4991,
      "id": 9183,
      "sell_average": 4826,
      "members": true,
      "buy_average": 4719,
      "name": "Adamant crossbow",
      "sp": 1767
    },
    "9185": {
      "overall_average": 10290,
      "id": 9185,
      "sell_average": 10175,
      "members": true,
      "buy_average": 10015,
      "name": "Rune crossbow",
      "sp": 16200
    },
    "9187": {
      "overall_average": 0,
      "id": 9187,
      "sell_average": 7,
      "members": true,
      "buy_average": 7,
      "name": "Jade bolt tips",
      "sp": 10
    },
    "9188": {
      "overall_average": 0,
      "id": 9188,
      "sell_average": 291,
      "members": true,
      "buy_average": 291,
      "name": "Topaz bolt tips",
      "sp": 13
    },
    "9189": {
      "overall_average": 0,
      "id": 9189,
      "sell_average": 45,
      "members": true,
      "buy_average": 45,
      "name": "Sapphire bolt tips",
      "sp": 17
    },
    "9190": {
      "overall_average": 55,
      "id": 9190,
      "sell_average": 57,
      "members": true,
      "buy_average": 57,
      "name": "Emerald bolt tips",
      "sp": 33
    },
    "9191": {
      "overall_average": 99,
      "id": 9191,
      "sell_average": 99,
      "members": true,
      "buy_average": 98,
      "name": "Ruby bolt tips",
      "sp": 67
    },
    "9192": {
      "overall_average": 181,
      "id": 9192,
      "sell_average": 180,
      "members": true,
      "buy_average": 180,
      "name": "Diamond bolt tips",
      "sp": 133
    },
    "9193": {
      "overall_average": 237,
      "id": 9193,
      "sell_average": 235,
      "members": true,
      "buy_average": 234,
      "name": "Dragonstone bolt tips",
      "sp": 667
    },
    "9194": {
      "overall_average": 8393,
      "id": 9194,
      "sell_average": 8399,
      "members": true,
      "buy_average": 8400,
      "name": "Onyx bolt tips",
      "sp": 1000
    },
    "9236": {
      "overall_average": 0,
      "id": 9236,
      "sell_average": 6,
      "members": true,
      "buy_average": 6,
      "name": "Opal bolts (e)",
      "sp": 7
    },
    "9238": {
      "overall_average": 0,
      "id": 9238,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Pearl bolts (e)",
      "sp": 15
    },
    "9239": {
      "overall_average": 0,
      "id": 9239,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Topaz bolts (e)",
      "sp": 24
    },
    "9240": {
      "overall_average": 60,
      "id": 9240,
      "sell_average": 60,
      "members": true,
      "buy_average": 54,
      "name": "Sapphire bolts (e)",
      "sp": 40
    },
    "9241": {
      "overall_average": 187,
      "id": 9241,
      "sell_average": 186,
      "members": true,
      "buy_average": 186,
      "name": "Emerald bolts (e)",
      "sp": 59
    },
    "9242": {
      "overall_average": 313,
      "id": 9242,
      "sell_average": 312,
      "members": true,
      "buy_average": 309,
      "name": "Ruby bolts (e)",
      "sp": 138
    },
    "9243": {
      "overall_average": 419,
      "id": 9243,
      "sell_average": 418,
      "members": true,
      "buy_average": 416,
      "name": "Diamond bolts (e)",
      "sp": 211
    },
    "9244": {
      "overall_average": 573,
      "id": 9244,
      "sell_average": 596,
      "members": true,
      "buy_average": 631,
      "name": "Dragonstone bolts (e)",
      "sp": 1063
    },
    "9245": {
      "overall_average": 8787,
      "id": 9245,
      "sell_average": 8785,
      "members": true,
      "buy_average": 8780,
      "name": "Onyx bolts (e)",
      "sp": 15000
    },
    "9287": {
      "overall_average": 0,
      "id": 9287,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron bolts (p)",
      "sp": 2
    },
    "9288": {
      "overall_average": 0,
      "id": 9288,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel bolts (p)",
      "sp": 8
    },
    "9289": {
      "overall_average": 0,
      "id": 9289,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril bolts (p)",
      "sp": 20
    },
    "9290": {
      "overall_average": 0,
      "id": 9290,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant bolts (p)",
      "sp": 58
    },
    "9291": {
      "overall_average": 0,
      "id": 9291,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Runite bolts (p)",
      "sp": 300
    },
    "9292": {
      "overall_average": 0,
      "id": 9292,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Silver bolts (p)",
      "sp": 5
    },
    "9294": {
      "overall_average": 0,
      "id": 9294,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron bolts (p+)",
      "sp": 2
    },
    "9295": {
      "overall_average": 0,
      "id": 9295,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel bolts (p+)",
      "sp": 8
    },
    "9296": {
      "overall_average": 0,
      "id": 9296,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril bolts (p+)",
      "sp": 20
    },
    "9297": {
      "overall_average": 0,
      "id": 9297,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant bolts (p+)",
      "sp": 58
    },
    "9298": {
      "overall_average": 0,
      "id": 9298,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Runite bolts (p+)",
      "sp": 300
    },
    "9299": {
      "overall_average": 0,
      "id": 9299,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Silver bolts (p+)",
      "sp": 5
    },
    "9301": {
      "overall_average": 0,
      "id": 9301,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron bolts (p++)",
      "sp": 2
    },
    "9302": {
      "overall_average": 0,
      "id": 9302,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel bolts (p++)",
      "sp": 8
    },
    "9303": {
      "overall_average": 0,
      "id": 9303,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril bolts (p++)",
      "sp": 20
    },
    "9304": {
      "overall_average": 0,
      "id": 9304,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant bolts (p++)",
      "sp": 58
    },
    "9305": {
      "overall_average": 0,
      "id": 9305,
      "sell_average": 1090,
      "members": true,
      "buy_average": 1090,
      "name": "Runite bolts (p++)",
      "sp": 300
    },
    "9306": {
      "overall_average": 0,
      "id": 9306,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Silver bolts (p++)",
      "sp": 5
    },
    "9336": {
      "overall_average": 0,
      "id": 9336,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Topaz bolts",
      "sp": 22
    },
    "9337": {
      "overall_average": 0,
      "id": 9337,
      "sell_average": 106,
      "members": true,
      "buy_average": 106,
      "name": "Sapphire bolts",
      "sp": 37
    },
    "9338": {
      "overall_average": 154,
      "id": 9338,
      "sell_average": 154,
      "members": true,
      "buy_average": 151,
      "name": "Emerald bolts",
      "sp": 53
    },
    "9339": {
      "overall_average": 314,
      "id": 9339,
      "sell_average": 311,
      "members": true,
      "buy_average": 306,
      "name": "Ruby bolts",
      "sp": 125
    },
    "9340": {
      "overall_average": 398,
      "id": 9340,
      "sell_average": 405,
      "members": true,
      "buy_average": 410,
      "name": "Diamond bolts",
      "sp": 192
    },
    "9341": {
      "overall_average": 577,
      "id": 9341,
      "sell_average": 580,
      "members": true,
      "buy_average": 587,
      "name": "Dragonstone bolts",
      "sp": 967
    },
    "9342": {
      "overall_average": 0,
      "id": 9342,
      "sell_average": 8751,
      "members": true,
      "buy_average": 8751,
      "name": "Onyx bolts",
      "sp": 13633
    },
    "9375": {
      "overall_average": 0,
      "id": 9375,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze bolts (unf)",
      "sp": 1
    },
    "9377": {
      "overall_average": 32,
      "id": 9377,
      "sell_average": 29,
      "members": true,
      "buy_average": 28,
      "name": "Iron bolts (unf)",
      "sp": 1
    },
    "9378": {
      "overall_average": 40,
      "id": 9378,
      "sell_average": 40,
      "members": true,
      "buy_average": 0,
      "name": "Steel bolts (unf)",
      "sp": 1
    },
    "9379": {
      "overall_average": 76,
      "id": 9379,
      "sell_average": 74,
      "members": true,
      "buy_average": 73,
      "name": "Mithril bolts (unf)",
      "sp": 1
    },
    "9380": {
      "overall_average": 212,
      "id": 9380,
      "sell_average": 212,
      "members": true,
      "buy_average": 212,
      "name": "Adamant bolts(unf)",
      "sp": 1
    },
    "9381": {
      "overall_average": 247,
      "id": 9381,
      "sell_average": 285,
      "members": true,
      "buy_average": 307,
      "name": "Runite bolts (unf)",
      "sp": 1
    },
    "9382": {
      "overall_average": 0,
      "id": 9382,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Silver bolts (unf)",
      "sp": 1
    },
    "9416": {
      "overall_average": 0,
      "id": 9416,
      "sell_average": 406,
      "members": true,
      "buy_average": 406,
      "name": "Mith grapple tip",
      "sp": 30
    },
    "9418": {
      "overall_average": 1000,
      "id": 9418,
      "sell_average": 937,
      "members": true,
      "buy_average": 874,
      "name": "Mith grapple",
      "sp": 48
    },
    "9419": {
      "overall_average": 1364,
      "id": 9419,
      "sell_average": 1355,
      "members": true,
      "buy_average": 766,
      "name": "Mith grapple",
      "sp": 1
    },
    "9420": {
      "overall_average": 0,
      "id": 9420,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze limbs",
      "sp": 20
    },
    "9423": {
      "overall_average": 50,
      "id": 9423,
      "sell_average": 50,
      "members": true,
      "buy_average": 0,
      "name": "Iron limbs",
      "sp": 70
    },
    "9425": {
      "overall_average": 0,
      "id": 9425,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel limbs",
      "sp": 250
    },
    "9427": {
      "overall_average": 0,
      "id": 9427,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril limbs",
      "sp": 650
    },
    "9429": {
      "overall_average": 0,
      "id": 9429,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamantite limbs",
      "sp": 1600
    },
    "9431": {
      "overall_average": 9361,
      "id": 9431,
      "sell_average": 9367,
      "members": true,
      "buy_average": 9375,
      "name": "Runite limbs",
      "sp": 16000
    },
    "9434": {
      "overall_average": 0,
      "id": 9434,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bolt mould",
      "sp": 25
    },
    "9436": {
      "overall_average": 135,
      "id": 9436,
      "sell_average": 135,
      "members": true,
      "buy_average": 0,
      "name": "Sinew",
      "sp": 2
    },
    "9438": {
      "overall_average": 231,
      "id": 9438,
      "sell_average": 229,
      "members": true,
      "buy_average": 228,
      "name": "Crossbow string",
      "sp": 1
    },
    "9440": {
      "overall_average": 5,
      "id": 9440,
      "sell_average": 5,
      "members": true,
      "buy_average": 5,
      "name": "Wooden stock",
      "sp": 20
    },
    "9442": {
      "overall_average": 0,
      "id": 9442,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak stock",
      "sp": 27
    },
    "9444": {
      "overall_average": 0,
      "id": 9444,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Willow stock",
      "sp": 53
    },
    "9446": {
      "overall_average": 0,
      "id": 9446,
      "sell_average": 10,
      "members": true,
      "buy_average": 10,
      "name": "Teak stock",
      "sp": 77
    },
    "9448": {
      "overall_average": 0,
      "id": 9448,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Maple stock",
      "sp": 100
    },
    "9450": {
      "overall_average": 0,
      "id": 9450,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany stock",
      "sp": 133
    },
    "9452": {
      "overall_average": 500,
      "id": 9452,
      "sell_average": 167,
      "members": true,
      "buy_average": 145,
      "name": "Yew stock",
      "sp": 167
    },
    "9454": {
      "overall_average": 0,
      "id": 9454,
      "sell_average": 19,
      "members": true,
      "buy_average": 19,
      "name": "Bronze crossbow (u)",
      "sp": 40
    },
    "9457": {
      "overall_average": 0,
      "id": 9457,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron crossbow (u)",
      "sp": 123
    },
    "9459": {
      "overall_average": 0,
      "id": 9459,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel crossbow (u)",
      "sp": 327
    },
    "9461": {
      "overall_average": 290,
      "id": 9461,
      "sell_average": 290,
      "members": true,
      "buy_average": 0,
      "name": "Mithril crossbow (u)",
      "sp": 750
    },
    "9463": {
      "overall_average": 0,
      "id": 9463,
      "sell_average": 2000,
      "members": true,
      "buy_average": 2000,
      "name": "Adamant crossbow (u)",
      "sp": 1733
    },
    "9465": {
      "overall_average": 10548,
      "id": 9465,
      "sell_average": 9543,
      "members": true,
      "buy_average": 9530,
      "name": "Runite crossbow (u)",
      "sp": 16167
    },
    "9469": {
      "overall_average": 0,
      "id": 9469,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Grand seed pod",
      "sp": 250
    },
    "9470": {
      "overall_average": 649370,
      "id": 9470,
      "sell_average": 642467,
      "members": true,
      "buy_average": 637865,
      "name": "Gnome scarf",
      "sp": 1000
    },
    "9472": {
      "overall_average": 45000,
      "id": 9472,
      "sell_average": 45000,
      "members": true,
      "buy_average": 0,
      "name": "Gnome goggles",
      "sp": 1000
    },
    "9475": {
      "overall_average": 0,
      "id": 9475,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mint cake",
      "sp": 250
    },
    "9629": {
      "overall_average": 0,
      "id": 9629,
      "sell_average": 1660,
      "members": true,
      "buy_average": 1660,
      "name": "Tyras helm",
      "sp": 550
    },
    "9634": {
      "overall_average": 2101,
      "id": 9634,
      "sell_average": 1829,
      "members": true,
      "buy_average": 1104,
      "name": "Vyrewatch top",
      "sp": 500
    },
    "9636": {
      "overall_average": 2366,
      "id": 9636,
      "sell_average": 2031,
      "members": true,
      "buy_average": 1696,
      "name": "Vyrewatch legs",
      "sp": 500
    },
    "9638": {
      "overall_average": 1248,
      "id": 9638,
      "sell_average": 500,
      "members": true,
      "buy_average": 126,
      "name": "Vyrewatch shoes",
      "sp": 500
    },
    "9640": {
      "overall_average": 3486,
      "id": 9640,
      "sell_average": 3486,
      "members": true,
      "buy_average": 0,
      "name": "Citizen top",
      "sp": 5
    },
    "9642": {
      "overall_average": 2500,
      "id": 9642,
      "sell_average": 2500,
      "members": true,
      "buy_average": 2500,
      "name": "Citizen trousers",
      "sp": 5
    },
    "9644": {
      "overall_average": 2000,
      "id": 9644,
      "sell_average": 2000,
      "members": true,
      "buy_average": 0,
      "name": "Citizen shoes",
      "sp": 5
    },
    "9666": {
      "overall_average": 26664,
      "id": 9666,
      "sell_average": 26664,
      "members": true,
      "buy_average": 0,
      "name": "Proselyte harness m",
      "sp": 25000
    },
    "9668": {
      "overall_average": 22370,
      "id": 9668,
      "sell_average": 22370,
      "members": true,
      "buy_average": 0,
      "name": "Initiate harness m",
      "sp": 20000
    },
    "9670": {
      "overall_average": 28000,
      "id": 9670,
      "sell_average": 28000,
      "members": true,
      "buy_average": 0,
      "name": "Proselyte harness f",
      "sp": 25000
    },
    "9672": {
      "overall_average": 0,
      "id": 9672,
      "sell_average": 4524,
      "members": true,
      "buy_average": 4524,
      "name": "Proselyte sallet",
      "sp": 8000
    },
    "9674": {
      "overall_average": 12436,
      "id": 9674,
      "sell_average": 11961,
      "members": true,
      "buy_average": 11248,
      "name": "Proselyte hauberk",
      "sp": 12000
    },
    "9676": {
      "overall_average": 14000,
      "id": 9676,
      "sell_average": 11303,
      "members": true,
      "buy_average": 9505,
      "name": "Proselyte cuisse",
      "sp": 10000
    },
    "9678": {
      "overall_average": 0,
      "id": 9678,
      "sell_average": 6514,
      "members": true,
      "buy_average": 6514,
      "name": "Proselyte tasset",
      "sp": 10000
    },
    "9729": {
      "overall_average": 0,
      "id": 9729,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Elemental helmet",
      "sp": 20
    },
    "9731": {
      "overall_average": 18992,
      "id": 9731,
      "sell_average": 18992,
      "members": true,
      "buy_average": 0,
      "name": "Mind shield",
      "sp": 3000
    },
    "9733": {
      "overall_average": 0,
      "id": 9733,
      "sell_average": 1542,
      "members": true,
      "buy_average": 1542,
      "name": "Mind helmet",
      "sp": 3000
    },
    "9735": {
      "overall_average": 85,
      "id": 9735,
      "sell_average": 82,
      "members": true,
      "buy_average": 81,
      "name": "Desert goat horn",
      "sp": 12
    },
    "9736": {
      "overall_average": 130,
      "id": 9736,
      "sell_average": 130,
      "members": true,
      "buy_average": 111,
      "name": "Goat horn dust",
      "sp": 12
    },
    "9739": {
      "overall_average": 295,
      "id": 9739,
      "sell_average": 278,
      "members": true,
      "buy_average": 246,
      "name": "Combat potion(4)",
      "sp": 215
    },
    "9741": {
      "overall_average": 200,
      "id": 9741,
      "sell_average": 165,
      "members": true,
      "buy_average": 151,
      "name": "Combat potion(3)",
      "sp": 160
    },
    "9743": {
      "overall_average": 1999,
      "id": 9743,
      "sell_average": 1939,
      "members": true,
      "buy_average": 1714,
      "name": "Combat potion(2)",
      "sp": 105
    },
    "9745": {
      "overall_average": 213,
      "id": 9745,
      "sell_average": 213,
      "members": true,
      "buy_average": 191,
      "name": "Combat potion(1)",
      "sp": 52
    },
    "9843": {
      "overall_average": 0,
      "id": 9843,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak cape rack",
      "sp": 10
    },
    "9844": {
      "overall_average": 0,
      "id": 9844,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak cape rack",
      "sp": 10
    },
    "9845": {
      "overall_average": 0,
      "id": 9845,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany cape rack",
      "sp": 10
    },
    "9846": {
      "overall_average": 0,
      "id": 9846,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gilded cape rack",
      "sp": 10
    },
    "9847": {
      "overall_average": 0,
      "id": 9847,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Marble cape rack",
      "sp": 10
    },
    "9848": {
      "overall_average": 0,
      "id": 9848,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Magic cape rack",
      "sp": 10
    },
    "9849": {
      "overall_average": 0,
      "id": 9849,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak toy box",
      "sp": 10
    },
    "9850": {
      "overall_average": 0,
      "id": 9850,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak toy box",
      "sp": 10
    },
    "9851": {
      "overall_average": 0,
      "id": 9851,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany toy box",
      "sp": 10
    },
    "9852": {
      "overall_average": 0,
      "id": 9852,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak magic wardrobe",
      "sp": 10
    },
    "9853": {
      "overall_average": 0,
      "id": 9853,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Carved oak magic wardrobe",
      "sp": 10
    },
    "9854": {
      "overall_average": 0,
      "id": 9854,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak magic wardrobe",
      "sp": 10
    },
    "9855": {
      "overall_average": 0,
      "id": 9855,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Carved teak magic wardrobe",
      "sp": 10
    },
    "9856": {
      "overall_average": 0,
      "id": 9856,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany magic wardrobe",
      "sp": 10
    },
    "9857": {
      "overall_average": 0,
      "id": 9857,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gilded magic wardrobe",
      "sp": 10
    },
    "9858": {
      "overall_average": 0,
      "id": 9858,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Marble magic wardrobe",
      "sp": 10
    },
    "9859": {
      "overall_average": 0,
      "id": 9859,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak armour case",
      "sp": 10
    },
    "9860": {
      "overall_average": 0,
      "id": 9860,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak armour case",
      "sp": 10
    },
    "9861": {
      "overall_average": 0,
      "id": 9861,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany armour case",
      "sp": 10
    },
    "9862": {
      "overall_average": 0,
      "id": 9862,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak treasure chest",
      "sp": 10
    },
    "9863": {
      "overall_average": 0,
      "id": 9863,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak treasure chest",
      "sp": 10
    },
    "9864": {
      "overall_average": 0,
      "id": 9864,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "M. treasure chest",
      "sp": 10
    },
    "9865": {
      "overall_average": 0,
      "id": 9865,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Oak fancy dress box",
      "sp": 10
    },
    "9866": {
      "overall_average": 0,
      "id": 9866,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Teak fancy dress box",
      "sp": 10
    },
    "9867": {
      "overall_average": 0,
      "id": 9867,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany fancy dress box",
      "sp": 10
    },
    "9978": {
      "overall_average": 0,
      "id": 9978,
      "sell_average": 15,
      "members": true,
      "buy_average": 15,
      "name": "Raw bird meat",
      "sp": 17
    },
    "9980": {
      "overall_average": 0,
      "id": 9980,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Roast bird meat",
      "sp": 17
    },
    "9986": {
      "overall_average": 0,
      "id": 9986,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Raw beast meat",
      "sp": 25
    },
    "9988": {
      "overall_average": 0,
      "id": 9988,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Roast beast meat",
      "sp": 25
    },
    "9994": {
      "overall_average": 0,
      "id": 9994,
      "sell_average": 47,
      "members": true,
      "buy_average": 47,
      "name": "Spicy tomato",
      "sp": 3
    },
    "9996": {
      "overall_average": 0,
      "id": 9996,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Spicy minced meat",
      "sp": 8
    },
    "9998": {
      "overall_average": 4047,
      "id": 9998,
      "sell_average": 4036,
      "members": true,
      "buy_average": 3944,
      "name": "Hunter potion(4)",
      "sp": 15
    },
    "10000": {
      "overall_average": 2659,
      "id": 10000,
      "sell_average": 2659,
      "members": true,
      "buy_average": 2659,
      "name": "Hunter potion(3)",
      "sp": 12
    },
    "10002": {
      "overall_average": 0,
      "id": 10002,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Hunter potion(2)",
      "sp": 9
    },
    "10004": {
      "overall_average": 0,
      "id": 10004,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Hunter potion(1)",
      "sp": 6
    },
    "10006": {
      "overall_average": 20,
      "id": 10006,
      "sell_average": 12,
      "members": true,
      "buy_average": 11,
      "name": "Bird snare",
      "sp": 5
    },
    "10008": {
      "overall_average": 55,
      "id": 10008,
      "sell_average": 54,
      "members": true,
      "buy_average": 50,
      "name": "Box trap",
      "sp": 32
    },
    "10010": {
      "overall_average": 3,
      "id": 10010,
      "sell_average": 3,
      "members": true,
      "buy_average": 9,
      "name": "Butterfly net",
      "sp": 20
    },
    "10012": {
      "overall_average": 43,
      "id": 10012,
      "sell_average": 40,
      "members": true,
      "buy_average": 30,
      "name": "Butterfly jar",
      "sp": 1
    },
    "10014": {
      "overall_average": 0,
      "id": 10014,
      "sell_average": 250,
      "members": true,
      "buy_average": 250,
      "name": "Black warlock",
      "sp": 70
    },
    "10016": {
      "overall_average": 0,
      "id": 10016,
      "sell_average": 1000,
      "members": true,
      "buy_average": 1000,
      "name": "Snowy knight",
      "sp": 50
    },
    "10018": {
      "overall_average": 0,
      "id": 10018,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Sapphire glacialis",
      "sp": 30
    },
    "10020": {
      "overall_average": 0,
      "id": 10020,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ruby harvest",
      "sp": 18
    },
    "10025": {
      "overall_average": 0,
      "id": 10025,
      "sell_average": 300,
      "members": true,
      "buy_average": 300,
      "name": "Magic box",
      "sp": 600
    },
    "10029": {
      "overall_average": 100,
      "id": 10029,
      "sell_average": 92,
      "members": true,
      "buy_average": 7,
      "name": "Teasing stick",
      "sp": 50
    },
    "10031": {
      "overall_average": 0,
      "id": 10031,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rabbit snare",
      "sp": 15
    },
    "10033": {
      "overall_average": 915,
      "id": 10033,
      "sell_average": 915,
      "members": true,
      "buy_average": 913,
      "name": "Chinchompa",
      "sp": 140
    },
    "10034": {
      "overall_average": 1521,
      "id": 10034,
      "sell_average": 1518,
      "members": true,
      "buy_average": 1515,
      "name": "Red chinchompa",
      "sp": 160
    },
    "10035": {
      "overall_average": 0,
      "id": 10035,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Kyatt legs",
      "sp": 200
    },
    "10037": {
      "overall_average": 0,
      "id": 10037,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Kyatt top",
      "sp": 200
    },
    "10039": {
      "overall_average": 0,
      "id": 10039,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Kyatt hat",
      "sp": 1000
    },
    "10041": {
      "overall_average": 1501,
      "id": 10041,
      "sell_average": 1394,
      "members": true,
      "buy_average": 1288,
      "name": "Larupia legs",
      "sp": 100
    },
    "10043": {
      "overall_average": 1498,
      "id": 10043,
      "sell_average": 1461,
      "members": true,
      "buy_average": 1424,
      "name": "Larupia top",
      "sp": 100
    },
    "10045": {
      "overall_average": 2038,
      "id": 10045,
      "sell_average": 1987,
      "members": true,
      "buy_average": 1937,
      "name": "Larupia hat",
      "sp": 500
    },
    "10047": {
      "overall_average": 1655,
      "id": 10047,
      "sell_average": 1655,
      "members": true,
      "buy_average": 0,
      "name": "Graahk legs",
      "sp": 150
    },
    "10049": {
      "overall_average": 2037,
      "id": 10049,
      "sell_average": 2037,
      "members": true,
      "buy_average": 0,
      "name": "Graahk top",
      "sp": 150
    },
    "10051": {
      "overall_average": 2014,
      "id": 10051,
      "sell_average": 2014,
      "members": true,
      "buy_average": 0,
      "name": "Graahk headdress",
      "sp": 750
    },
    "10053": {
      "overall_average": 9000,
      "id": 10053,
      "sell_average": 9000,
      "members": true,
      "buy_average": 0,
      "name": "Wood camo top",
      "sp": 20
    },
    "10055": {
      "overall_average": 0,
      "id": 10055,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Wood camo legs",
      "sp": 20
    },
    "10057": {
      "overall_average": 3619,
      "id": 10057,
      "sell_average": 2312,
      "members": true,
      "buy_average": 1005,
      "name": "Jungle camo top",
      "sp": 20
    },
    "10059": {
      "overall_average": 0,
      "id": 10059,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Jungle camo legs",
      "sp": 20
    },
    "10061": {
      "overall_average": 5000,
      "id": 10061,
      "sell_average": 5000,
      "members": true,
      "buy_average": 0,
      "name": "Desert camo top",
      "sp": 20
    },
    "10063": {
      "overall_average": 9000,
      "id": 10063,
      "sell_average": 9000,
      "members": true,
      "buy_average": 0,
      "name": "Desert camo legs",
      "sp": 20
    },
    "10065": {
      "overall_average": 7891,
      "id": 10065,
      "sell_average": 7972,
      "members": true,
      "buy_average": 7999,
      "name": "Polar camo top",
      "sp": 20
    },
    "10067": {
      "overall_average": 0,
      "id": 10067,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Polar camo legs",
      "sp": 20
    },
    "10069": {
      "overall_average": 1000,
      "id": 10069,
      "sell_average": 924,
      "members": true,
      "buy_average": 911,
      "name": "Spotted cape",
      "sp": 400
    },
    "10071": {
      "overall_average": 5155,
      "id": 10071,
      "sell_average": 4929,
      "members": true,
      "buy_average": 4628,
      "name": "Spottier cape",
      "sp": 800
    },
    "10075": {
      "overall_average": 3719,
      "id": 10075,
      "sell_average": 3709,
      "members": true,
      "buy_average": 3704,
      "name": "Gloves of silence",
      "sp": 600
    },
    "10077": {
      "overall_average": 486,
      "id": 10077,
      "sell_average": 486,
      "members": true,
      "buy_average": 486,
      "name": "Spiky vambraces",
      "sp": 160
    },
    "10079": {
      "overall_average": 1686,
      "id": 10079,
      "sell_average": 1686,
      "members": true,
      "buy_average": 0,
      "name": "Green spiky vambs",
      "sp": 2500
    },
    "10081": {
      "overall_average": 3924,
      "id": 10081,
      "sell_average": 3023,
      "members": true,
      "buy_average": 2122,
      "name": "Blue spiky vambs",
      "sp": 3000
    },
    "10083": {
      "overall_average": 0,
      "id": 10083,
      "sell_average": 1923,
      "members": true,
      "buy_average": 1923,
      "name": "Red spiky vambs",
      "sp": 3600
    },
    "10085": {
      "overall_average": 3534,
      "id": 10085,
      "sell_average": 3453,
      "members": true,
      "buy_average": 3421,
      "name": "Black spiky vambs",
      "sp": 4320
    },
    "10087": {
      "overall_average": 2,
      "id": 10087,
      "sell_average": 2,
      "members": true,
      "buy_average": 2,
      "name": "Stripy feather",
      "sp": 20
    },
    "10088": {
      "overall_average": 0,
      "id": 10088,
      "sell_average": 4,
      "members": true,
      "buy_average": 4,
      "name": "Red feather",
      "sp": 10
    },
    "10089": {
      "overall_average": 0,
      "id": 10089,
      "sell_average": 4,
      "members": true,
      "buy_average": 4,
      "name": "Blue feather",
      "sp": 16
    },
    "10090": {
      "overall_average": 0,
      "id": 10090,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Yellow feather",
      "sp": 13
    },
    "10091": {
      "overall_average": 3,
      "id": 10091,
      "sell_average": 2,
      "members": true,
      "buy_average": 2,
      "name": "Orange feather",
      "sp": 15
    },
    "10093": {
      "overall_average": 0,
      "id": 10093,
      "sell_average": 200,
      "members": true,
      "buy_average": 200,
      "name": "Tatty larupia fur",
      "sp": 60
    },
    "10095": {
      "overall_average": 0,
      "id": 10095,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Larupia fur",
      "sp": 80
    },
    "10097": {
      "overall_average": 0,
      "id": 10097,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Tatty graahk fur",
      "sp": 90
    },
    "10099": {
      "overall_average": 0,
      "id": 10099,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Graahk fur",
      "sp": 120
    },
    "10101": {
      "overall_average": 0,
      "id": 10101,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Tatty kyatt fur",
      "sp": 120
    },
    "10103": {
      "overall_average": 0,
      "id": 10103,
      "sell_average": 645,
      "members": true,
      "buy_average": 645,
      "name": "Kyatt fur",
      "sp": 160
    },
    "10105": {
      "overall_average": 0,
      "id": 10105,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Kebbit spike",
      "sp": 90
    },
    "10107": {
      "overall_average": 0,
      "id": 10107,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Long kebbit spike",
      "sp": 150
    },
    "10109": {
      "overall_average": 0,
      "id": 10109,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Kebbit teeth",
      "sp": 160
    },
    "10111": {
      "overall_average": 0,
      "id": 10111,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Kebbit teeth dust",
      "sp": 160
    },
    "10113": {
      "overall_average": 375,
      "id": 10113,
      "sell_average": 351,
      "members": true,
      "buy_average": 260,
      "name": "Kebbit claws",
      "sp": 43
    },
    "10115": {
      "overall_average": 0,
      "id": 10115,
      "sell_average": 555,
      "members": true,
      "buy_average": 555,
      "name": "Dark kebbit fur",
      "sp": 210
    },
    "10117": {
      "overall_average": 2000,
      "id": 10117,
      "sell_average": 2000,
      "members": true,
      "buy_average": 2000,
      "name": "Polar kebbit fur",
      "sp": 10
    },
    "10119": {
      "overall_average": 932,
      "id": 10119,
      "sell_average": 932,
      "members": true,
      "buy_average": 0,
      "name": "Feldip weasel fur",
      "sp": 14
    },
    "10121": {
      "overall_average": 0,
      "id": 10121,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Common kebbit fur",
      "sp": 12
    },
    "10123": {
      "overall_average": 0,
      "id": 10123,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Desert devil fur",
      "sp": 17
    },
    "10125": {
      "overall_average": 0,
      "id": 10125,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Spotted kebbit fur",
      "sp": 150
    },
    "10127": {
      "overall_average": 969,
      "id": 10127,
      "sell_average": 961,
      "members": true,
      "buy_average": 900,
      "name": "Dashing kebbit fur",
      "sp": 270
    },
    "10129": {
      "overall_average": 0,
      "id": 10129,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Barb-tail harpoon",
      "sp": 36
    },
    "10132": {
      "overall_average": 0,
      "id": 10132,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Strung rabbit foot",
      "sp": 30
    },
    "10134": {
      "overall_average": 0,
      "id": 10134,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rabbit foot",
      "sp": 30
    },
    "10136": {
      "overall_average": 0,
      "id": 10136,
      "sell_average": 78,
      "members": true,
      "buy_average": 78,
      "name": "Rainbow fish",
      "sp": 120
    },
    "10138": {
      "overall_average": 0,
      "id": 10138,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Raw rainbow fish",
      "sp": 120
    },
    "10142": {
      "overall_average": 0,
      "id": 10142,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Guam tar",
      "sp": 3
    },
    "10143": {
      "overall_average": 0,
      "id": 10143,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Marrentill tar",
      "sp": 1
    },
    "10144": {
      "overall_average": 1,
      "id": 10144,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Tarromin tar",
      "sp": 1
    },
    "10145": {
      "overall_average": 6,
      "id": 10145,
      "sell_average": 4,
      "members": true,
      "buy_average": 4,
      "name": "Harralander tar",
      "sp": 1
    },
    "10146": {
      "overall_average": 0,
      "id": 10146,
      "sell_average": 30,
      "members": true,
      "buy_average": 30,
      "name": "Orange salamander",
      "sp": 100
    },
    "10147": {
      "overall_average": 250,
      "id": 10147,
      "sell_average": 57,
      "members": true,
      "buy_average": 37,
      "name": "Red salamander",
      "sp": 150
    },
    "10148": {
      "overall_average": 168,
      "id": 10148,
      "sell_average": 123,
      "members": true,
      "buy_average": 79,
      "name": "Black salamander",
      "sp": 200
    },
    "10149": {
      "overall_average": 0,
      "id": 10149,
      "sell_average": 110,
      "members": true,
      "buy_average": 110,
      "name": "Swamp lizard",
      "sp": 50
    },
    "10150": {
      "overall_average": 1,
      "id": 10150,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Noose wand",
      "sp": 4
    },
    "10156": {
      "overall_average": 1532,
      "id": 10156,
      "sell_average": 1514,
      "members": true,
      "buy_average": 1513,
      "name": "Hunters' crossbow",
      "sp": 1300
    },
    "10158": {
      "overall_average": 95,
      "id": 10158,
      "sell_average": 95,
      "members": true,
      "buy_average": 95,
      "name": "Kebbit bolts",
      "sp": 18
    },
    "10159": {
      "overall_average": 0,
      "id": 10159,
      "sell_average": 644,
      "members": true,
      "buy_average": 644,
      "name": "Long kebbit bolts",
      "sp": 31
    },
    "10280": {
      "overall_average": 0,
      "id": 10280,
      "sell_average": 3808,
      "members": false,
      "buy_average": 3808,
      "name": "Willow comp bow",
      "sp": 300
    },
    "10282": {
      "overall_average": 0,
      "id": 10282,
      "sell_average": 869,
      "members": true,
      "buy_average": 869,
      "name": "Yew comp bow",
      "sp": 1800
    },
    "10284": {
      "overall_average": 7000,
      "id": 10284,
      "sell_average": 3487,
      "members": true,
      "buy_average": 2784,
      "name": "Magic comp bow",
      "sp": 2500
    },
    "10286": {
      "overall_average": 31600,
      "id": 10286,
      "sell_average": 30633,
      "members": false,
      "buy_average": 28700,
      "name": "Rune helm (h1)",
      "sp": 35200
    },
    "10288": {
      "overall_average": 0,
      "id": 10288,
      "sell_average": 21500,
      "members": false,
      "buy_average": 21500,
      "name": "Rune helm (h2)",
      "sp": 35200
    },
    "10290": {
      "overall_average": 22221,
      "id": 10290,
      "sell_average": 22221,
      "members": false,
      "buy_average": 0,
      "name": "Rune helm (h3)",
      "sp": 35200
    },
    "10292": {
      "overall_average": 0,
      "id": 10292,
      "sell_average": 21614,
      "members": false,
      "buy_average": 21614,
      "name": "Rune helm (h4)",
      "sp": 35200
    },
    "10294": {
      "overall_average": 23236,
      "id": 10294,
      "sell_average": 22814,
      "members": false,
      "buy_average": 21691,
      "name": "Rune helm (h5)",
      "sp": 35200
    },
    "10296": {
      "overall_average": 0,
      "id": 10296,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Adamant helm (h1)",
      "sp": 3520
    },
    "10298": {
      "overall_average": 1800,
      "id": 10298,
      "sell_average": 1800,
      "members": false,
      "buy_average": 0,
      "name": "Adamant helm (h2)",
      "sp": 3520
    },
    "10300": {
      "overall_average": 0,
      "id": 10300,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Adamant helm (h3)",
      "sp": 3520
    },
    "10302": {
      "overall_average": 0,
      "id": 10302,
      "sell_average": 1902,
      "members": false,
      "buy_average": 1902,
      "name": "Adamant helm (h4)",
      "sp": 3520
    },
    "10304": {
      "overall_average": 0,
      "id": 10304,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Adamant helm (h5)",
      "sp": 3520
    },
    "10306": {
      "overall_average": 0,
      "id": 10306,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black helm (h1)",
      "sp": 1056
    },
    "10308": {
      "overall_average": 0,
      "id": 10308,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black helm (h2)",
      "sp": 1056
    },
    "10310": {
      "overall_average": 0,
      "id": 10310,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black helm (h3)",
      "sp": 1056
    },
    "10312": {
      "overall_average": 0,
      "id": 10312,
      "sell_average": 2767,
      "members": false,
      "buy_average": 2767,
      "name": "Black helm (h4)",
      "sp": 1056
    },
    "10314": {
      "overall_average": 0,
      "id": 10314,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black helm (h5)",
      "sp": 1056
    },
    "10316": {
      "overall_average": 0,
      "id": 10316,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bob's red shirt",
      "sp": 3
    },
    "10318": {
      "overall_average": 0,
      "id": 10318,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bob's blue shirt",
      "sp": 3
    },
    "10320": {
      "overall_average": 0,
      "id": 10320,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bob's green shirt",
      "sp": 3
    },
    "10322": {
      "overall_average": 39000,
      "id": 10322,
      "sell_average": 39000,
      "members": true,
      "buy_average": 0,
      "name": "Bob's black shirt",
      "sp": 3
    },
    "10324": {
      "overall_average": 0,
      "id": 10324,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bob's purple shirt",
      "sp": 3
    },
    "10326": {
      "overall_average": 0,
      "id": 10326,
      "sell_average": 40,
      "members": true,
      "buy_average": 40,
      "name": "Purple firelighter",
      "sp": 15
    },
    "10327": {
      "overall_average": 20,
      "id": 10327,
      "sell_average": 20,
      "members": true,
      "buy_average": 20,
      "name": "White firelighter",
      "sp": 15
    },
    "10330": {
      "overall_average": 0,
      "id": 10330,
      "sell_average": 43212127,
      "members": true,
      "buy_average": 43212127,
      "name": "3rd age range top",
      "sp": 50800
    },
    "10332": {
      "overall_average": 0,
      "id": 10332,
      "sell_average": 18000003,
      "members": true,
      "buy_average": 18000003,
      "name": "3rd age range legs",
      "sp": 50600
    },
    "10334": {
      "overall_average": 0,
      "id": 10334,
      "sell_average": 9683000,
      "members": true,
      "buy_average": 9683000,
      "name": "3rd age range coif",
      "sp": 50400
    },
    "10336": {
      "overall_average": 0,
      "id": 10336,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "3rd age vambraces",
      "sp": 50500
    },
    "10338": {
      "overall_average": 70372725,
      "id": 10338,
      "sell_average": 70448483,
      "members": true,
      "buy_average": 70600000,
      "name": "3rd age robe top",
      "sp": 50800
    },
    "10340": {
      "overall_average": 21888888,
      "id": 10340,
      "sell_average": 21825925,
      "members": true,
      "buy_average": 21794444,
      "name": "3rd age robe",
      "sp": 50600
    },
    "10342": {
      "overall_average": 11000000,
      "id": 10342,
      "sell_average": 11000000,
      "members": true,
      "buy_average": 11000000,
      "name": "3rd age mage hat",
      "sp": 50400
    },
    "10344": {
      "overall_average": 12650000,
      "id": 10344,
      "sell_average": 12430000,
      "members": true,
      "buy_average": 12210000,
      "name": "3rd age amulet",
      "sp": 50500
    },
    "10346": {
      "overall_average": 80100000,
      "id": 10346,
      "sell_average": 80100000,
      "members": true,
      "buy_average": 0,
      "name": "3rd age platelegs",
      "sp": 200000
    },
    "10348": {
      "overall_average": 0,
      "id": 10348,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "3rd age platebody",
      "sp": 200000
    },
    "10350": {
      "overall_average": 0,
      "id": 10350,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "3rd age full helmet",
      "sp": 90000
    },
    "10352": {
      "overall_average": 0,
      "id": 10352,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "3rd age kiteshield",
      "sp": 180000
    },
    "10354": {
      "overall_average": 0,
      "id": 10354,
      "sell_average": 41724,
      "members": true,
      "buy_average": 41724,
      "name": "Amulet of glory (t4)",
      "sp": 17625
    },
    "10362": {
      "overall_average": 0,
      "id": 10362,
      "sell_average": 43010,
      "members": true,
      "buy_average": 43010,
      "name": "Amulet of glory (t)",
      "sp": 17625
    },
    "10364": {
      "overall_average": 27288,
      "id": 10364,
      "sell_average": 26309,
      "members": false,
      "buy_average": 24546,
      "name": "Strength amulet (t)",
      "sp": 2025
    },
    "10366": {
      "overall_average": 43438,
      "id": 10366,
      "sell_average": 41760,
      "members": false,
      "buy_average": 40642,
      "name": "Amulet of magic (t)",
      "sp": 900
    },
    "10368": {
      "overall_average": 43038,
      "id": 10368,
      "sell_average": 39170,
      "members": true,
      "buy_average": 35303,
      "name": "Zamorak bracers",
      "sp": 4000
    },
    "10370": {
      "overall_average": 355785,
      "id": 10370,
      "sell_average": 351727,
      "members": true,
      "buy_average": 346147,
      "name": "Zamorak d'hide",
      "sp": 13000
    },
    "10372": {
      "overall_average": 220000,
      "id": 10372,
      "sell_average": 214545,
      "members": true,
      "buy_average": 205000,
      "name": "Zamorak chaps",
      "sp": 6000
    },
    "10374": {
      "overall_average": 45239,
      "id": 10374,
      "sell_average": 42949,
      "members": true,
      "buy_average": 39133,
      "name": "Zamorak coif",
      "sp": 2000
    },
    "10376": {
      "overall_average": 11995,
      "id": 10376,
      "sell_average": 11332,
      "members": true,
      "buy_average": 11001,
      "name": "Guthix bracers",
      "sp": 6000
    },
    "10378": {
      "overall_average": 102142,
      "id": 10378,
      "sell_average": 99486,
      "members": true,
      "buy_average": 94838,
      "name": "Guthix dragonhide",
      "sp": 13000
    },
    "10380": {
      "overall_average": 72704,
      "id": 10380,
      "sell_average": 71657,
      "members": true,
      "buy_average": 70784,
      "name": "Guthix chaps",
      "sp": 6000
    },
    "10382": {
      "overall_average": 44825,
      "id": 10382,
      "sell_average": 44274,
      "members": true,
      "buy_average": 43063,
      "name": "Guthix coif",
      "sp": 2000
    },
    "10384": {
      "overall_average": 20720,
      "id": 10384,
      "sell_average": 20720,
      "members": true,
      "buy_average": 0,
      "name": "Saradomin bracers",
      "sp": 4000
    },
    "10386": {
      "overall_average": 312997,
      "id": 10386,
      "sell_average": 306436,
      "members": true,
      "buy_average": 300969,
      "name": "Saradomin d'hide",
      "sp": 13000
    },
    "10388": {
      "overall_average": 201625,
      "id": 10388,
      "sell_average": 198276,
      "members": true,
      "buy_average": 194927,
      "name": "Saradomin chaps",
      "sp": 6000
    },
    "10390": {
      "overall_average": 43120,
      "id": 10390,
      "sell_average": 40523,
      "members": true,
      "buy_average": 39081,
      "name": "Saradomin coif",
      "sp": 2000
    },
    "10392": {
      "overall_average": 10192,
      "id": 10392,
      "sell_average": 10192,
      "members": true,
      "buy_average": 0,
      "name": "A powdered wig",
      "sp": 2000
    },
    "10394": {
      "overall_average": 741988,
      "id": 10394,
      "sell_average": 717796,
      "members": true,
      "buy_average": 709732,
      "name": "Flared trousers",
      "sp": 2000
    },
    "10396": {
      "overall_average": 0,
      "id": 10396,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Pantaloons",
      "sp": 2000
    },
    "10398": {
      "overall_average": 12500,
      "id": 10398,
      "sell_average": 12500,
      "members": true,
      "buy_average": 0,
      "name": "Sleeping cap",
      "sp": 2000
    },
    "10400": {
      "overall_average": 0,
      "id": 10400,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black elegant shirt",
      "sp": 2000
    },
    "10402": {
      "overall_average": 0,
      "id": 10402,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black elegant legs",
      "sp": 2000
    },
    "10404": {
      "overall_average": 55200,
      "id": 10404,
      "sell_average": 52600,
      "members": true,
      "buy_average": 50000,
      "name": "Red elegant shirt",
      "sp": 2000
    },
    "10406": {
      "overall_average": 0,
      "id": 10406,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Red elegant legs",
      "sp": 2000
    },
    "10408": {
      "overall_average": 0,
      "id": 10408,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Blue elegant shirt",
      "sp": 2000
    },
    "10410": {
      "overall_average": 0,
      "id": 10410,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Blue elegant legs",
      "sp": 2000
    },
    "10412": {
      "overall_average": 0,
      "id": 10412,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Green elegant shirt",
      "sp": 2000
    },
    "10414": {
      "overall_average": 0,
      "id": 10414,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Green elegant legs",
      "sp": 2000
    },
    "10416": {
      "overall_average": 0,
      "id": 10416,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Purple elegant shirt",
      "sp": 2000
    },
    "10418": {
      "overall_average": 0,
      "id": 10418,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Purple elegant legs",
      "sp": 2000
    },
    "10420": {
      "overall_average": 5000,
      "id": 10420,
      "sell_average": 4694,
      "members": true,
      "buy_average": 4389,
      "name": "White elegant blouse",
      "sp": 2000
    },
    "10422": {
      "overall_average": 1200,
      "id": 10422,
      "sell_average": 1200,
      "members": true,
      "buy_average": 0,
      "name": "White elegant skirt",
      "sp": 2000
    },
    "10424": {
      "overall_average": 0,
      "id": 10424,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Red elegant blouse",
      "sp": 2000
    },
    "10426": {
      "overall_average": 0,
      "id": 10426,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Red elegant skirt",
      "sp": 2000
    },
    "10428": {
      "overall_average": 0,
      "id": 10428,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Blue elegant blouse",
      "sp": 2000
    },
    "10430": {
      "overall_average": 0,
      "id": 10430,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Blue elegant skirt",
      "sp": 2000
    },
    "10432": {
      "overall_average": 0,
      "id": 10432,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Green elegant blouse",
      "sp": 2000
    },
    "10434": {
      "overall_average": 0,
      "id": 10434,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Green elegant skirt",
      "sp": 2000
    },
    "10436": {
      "overall_average": 0,
      "id": 10436,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Purple elegant blouse",
      "sp": 2000
    },
    "10438": {
      "overall_average": 0,
      "id": 10438,
      "sell_average": 1008,
      "members": true,
      "buy_average": 1008,
      "name": "Purple elegant skirt",
      "sp": 2000
    },
    "10440": {
      "overall_average": 6000,
      "id": 10440,
      "sell_average": 6000,
      "members": true,
      "buy_average": 0,
      "name": "Saradomin crozier",
      "sp": 5000
    },
    "10442": {
      "overall_average": 0,
      "id": 10442,
      "sell_average": 4182,
      "members": true,
      "buy_average": 4182,
      "name": "Guthix crozier",
      "sp": 5000
    },
    "10444": {
      "overall_average": 11499,
      "id": 10444,
      "sell_average": 8749,
      "members": true,
      "buy_average": 6000,
      "name": "Zamorak crozier",
      "sp": 5000
    },
    "10446": {
      "overall_average": 69959,
      "id": 10446,
      "sell_average": 65975,
      "members": true,
      "buy_average": 60000,
      "name": "Saradomin cloak",
      "sp": 2000
    },
    "10448": {
      "overall_average": 22682,
      "id": 10448,
      "sell_average": 22682,
      "members": true,
      "buy_average": 22682,
      "name": "Guthix cloak",
      "sp": 2000
    },
    "10450": {
      "overall_average": 0,
      "id": 10450,
      "sell_average": 50003,
      "members": true,
      "buy_average": 50003,
      "name": "Zamorak cloak",
      "sp": 2000
    },
    "10452": {
      "overall_average": 21411,
      "id": 10452,
      "sell_average": 21411,
      "members": true,
      "buy_average": 21411,
      "name": "Saradomin mitre",
      "sp": 5000
    },
    "10454": {
      "overall_average": 21920,
      "id": 10454,
      "sell_average": 22229,
      "members": true,
      "buy_average": 23000,
      "name": "Guthix mitre",
      "sp": 5000
    },
    "10456": {
      "overall_average": 33783,
      "id": 10456,
      "sell_average": 32579,
      "members": true,
      "buy_average": 32178,
      "name": "Zamorak mitre",
      "sp": 5000
    },
    "10458": {
      "overall_average": 100000,
      "id": 10458,
      "sell_average": 100000,
      "members": true,
      "buy_average": 0,
      "name": "Saradomin robe top",
      "sp": 7000
    },
    "10460": {
      "overall_average": 198000,
      "id": 10460,
      "sell_average": 194662,
      "members": true,
      "buy_average": 184651,
      "name": "Zamorak robe top",
      "sp": 7000
    },
    "10462": {
      "overall_average": 68701,
      "id": 10462,
      "sell_average": 68084,
      "members": true,
      "buy_average": 68497,
      "name": "Guthix robe top",
      "sp": 7000
    },
    "10464": {
      "overall_average": 108000,
      "id": 10464,
      "sell_average": 105666,
      "members": true,
      "buy_average": 101000,
      "name": "Saradomin robe legs",
      "sp": 7000
    },
    "10466": {
      "overall_average": 82000,
      "id": 10466,
      "sell_average": 82000,
      "members": true,
      "buy_average": 0,
      "name": "Guthix robe legs",
      "sp": 7000
    },
    "10468": {
      "overall_average": 132000,
      "id": 10468,
      "sell_average": 120002,
      "members": true,
      "buy_average": 108004,
      "name": "Zamorak robe legs",
      "sp": 7000
    },
    "10470": {
      "overall_average": 6489,
      "id": 10470,
      "sell_average": 6457,
      "members": true,
      "buy_average": 6415,
      "name": "Saradomin stole",
      "sp": 2500
    },
    "10472": {
      "overall_average": 0,
      "id": 10472,
      "sell_average": 5000,
      "members": true,
      "buy_average": 5000,
      "name": "Guthix stole",
      "sp": 2500
    },
    "10474": {
      "overall_average": 0,
      "id": 10474,
      "sell_average": 5532,
      "members": true,
      "buy_average": 5532,
      "name": "Zamorak stole",
      "sp": 2500
    },
    "10476": {
      "overall_average": 1971,
      "id": 10476,
      "sell_average": 1965,
      "members": true,
      "buy_average": 1953,
      "name": "Purple sweets",
      "sp": 15
    },
    "10496": {
      "overall_average": 2248,
      "id": 10496,
      "sell_average": 2056,
      "members": true,
      "buy_average": 1925,
      "name": "Polished buttons",
      "sp": 1
    },
    "10564": {
      "overall_average": 56762,
      "id": 10564,
      "sell_average": 54386,
      "members": true,
      "buy_average": 52901,
      "name": "Granite body",
      "sp": 80000
    },
    "10589": {
      "overall_average": 34280,
      "id": 10589,
      "sell_average": 33806,
      "members": true,
      "buy_average": 32384,
      "name": "Granite helm",
      "sp": 46000
    },
    "10808": {
      "overall_average": 0,
      "id": 10808,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Arctic pyre logs",
      "sp": 200
    },
    "10810": {
      "overall_average": 555,
      "id": 10810,
      "sell_average": 555,
      "members": true,
      "buy_average": 0,
      "name": "Arctic pine logs",
      "sp": 35
    },
    "10812": {
      "overall_average": 1655,
      "id": 10812,
      "sell_average": 1655,
      "members": true,
      "buy_average": 0,
      "name": "Split log",
      "sp": 90
    },
    "10814": {
      "overall_average": 0,
      "id": 10814,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Hair",
      "sp": 2
    },
    "10816": {
      "overall_average": 0,
      "id": 10816,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Raw yak meat",
      "sp": 2
    },
    "10818": {
      "overall_average": 0,
      "id": 10818,
      "sell_average": 200,
      "members": true,
      "buy_average": 200,
      "name": "Yak-hide",
      "sp": 50
    },
    "10820": {
      "overall_average": 0,
      "id": 10820,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cured yak-hide",
      "sp": 100
    },
    "10822": {
      "overall_average": 813,
      "id": 10822,
      "sell_average": 788,
      "members": true,
      "buy_average": 601,
      "name": "Yak-hide armour",
      "sp": 500
    },
    "10824": {
      "overall_average": 900,
      "id": 10824,
      "sell_average": 837,
      "members": true,
      "buy_average": 804,
      "name": "Yak-hide armour",
      "sp": 500
    },
    "10826": {
      "overall_average": 1200,
      "id": 10826,
      "sell_average": 1023,
      "members": true,
      "buy_average": 759,
      "name": "Fremennik shield",
      "sp": 500
    },
    "10828": {
      "overall_average": 34547,
      "id": 10828,
      "sell_average": 34363,
      "members": true,
      "buy_average": 33859,
      "name": "Helm of neitiznot",
      "sp": 50000
    },
    "10891": {
      "overall_average": 0,
      "id": 10891,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Wooden cat",
      "sp": 1
    },
    "10925": {
      "overall_average": 27867,
      "id": 10925,
      "sell_average": 28079,
      "members": true,
      "buy_average": 28145,
      "name": "Sanfew serum(4)",
      "sp": 300
    },
    "10927": {
      "overall_average": 0,
      "id": 10927,
      "sell_average": 10142,
      "members": true,
      "buy_average": 10142,
      "name": "Sanfew serum(3)",
      "sp": 240
    },
    "10929": {
      "overall_average": 13333,
      "id": 10929,
      "sell_average": 13333,
      "members": true,
      "buy_average": 13333,
      "name": "Sanfew serum(2)",
      "sp": 180
    },
    "10931": {
      "overall_average": 0,
      "id": 10931,
      "sell_average": 8472,
      "members": true,
      "buy_average": 8472,
      "name": "Sanfew serum(1)",
      "sp": 120
    },
    "10937": {
      "overall_average": 0,
      "id": 10937,
      "sell_average": 13999,
      "members": true,
      "buy_average": 13999,
      "name": "Nail beast nails",
      "sp": 300
    },
    "10952": {
      "overall_average": 0,
      "id": 10952,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Slayer bell",
      "sp": 150
    },
    "10954": {
      "overall_average": 819,
      "id": 10954,
      "sell_average": 786,
      "members": true,
      "buy_average": 686,
      "name": "Frog-leather body",
      "sp": 1000
    },
    "10956": {
      "overall_average": 2939,
      "id": 10956,
      "sell_average": 2939,
      "members": true,
      "buy_average": 0,
      "name": "Frog-leather chaps",
      "sp": 900
    },
    "10958": {
      "overall_average": 916,
      "id": 10958,
      "sell_average": 916,
      "members": true,
      "buy_average": 0,
      "name": "Frog-leather boots",
      "sp": 200
    },
    "10973": {
      "overall_average": 447,
      "id": 10973,
      "sell_average": 447,
      "members": true,
      "buy_average": 0,
      "name": "Light orb",
      "sp": 350
    },
    "10978": {
      "overall_average": 0,
      "id": 10978,
      "sell_average": 200,
      "members": true,
      "buy_average": 200,
      "name": "Swamp weed",
      "sp": 2
    },
    "10981": {
      "overall_average": 1300,
      "id": 10981,
      "sell_average": 1199,
      "members": true,
      "buy_average": 1199,
      "name": "Cave goblin wire",
      "sp": 20
    },
    "10999": {
      "overall_average": 0,
      "id": 10999,
      "sell_average": 100,
      "members": true,
      "buy_average": 100,
      "name": "Goblin book",
      "sp": 1
    },
    "11037": {
      "overall_average": 98845,
      "id": 11037,
      "sell_average": 97366,
      "members": true,
      "buy_average": 95641,
      "name": "Brine sabre",
      "sp": 26000
    },
    "11061": {
      "overall_average": 6000,
      "id": 11061,
      "sell_average": 4916,
      "members": true,
      "buy_average": 3833,
      "name": "Ancient mace",
      "sp": 1000
    },
    "11065": {
      "overall_average": 310,
      "id": 11065,
      "sell_average": 326,
      "members": true,
      "buy_average": 407,
      "name": "Bracelet mould",
      "sp": 5
    },
    "11069": {
      "overall_average": 177,
      "id": 11069,
      "sell_average": 176,
      "members": true,
      "buy_average": 174,
      "name": "Gold bracelet",
      "sp": 550
    },
    "11072": {
      "overall_average": 0,
      "id": 11072,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Sapphire bracelet",
      "sp": 1150
    },
    "11074": {
      "overall_average": 0,
      "id": 11074,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bracelet of clay",
      "sp": 1265
    },
    "11076": {
      "overall_average": 751,
      "id": 11076,
      "sell_average": 746,
      "members": true,
      "buy_average": 715,
      "name": "Emerald bracelet",
      "sp": 1525
    },
    "11079": {
      "overall_average": 845,
      "id": 11079,
      "sell_average": 844,
      "members": false,
      "buy_average": 790,
      "name": "Castle wars bracelet(3)",
      "sp": 1675
    },
    "11085": {
      "overall_average": 1221,
      "id": 11085,
      "sell_average": 1221,
      "members": true,
      "buy_average": 1221,
      "name": "Ruby bracelet",
      "sp": 2325
    },
    "11088": {
      "overall_average": 0,
      "id": 11088,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Inoculation bracelet",
      "sp": 2560
    },
    "11090": {
      "overall_average": 2363,
      "id": 11090,
      "sell_average": 2345,
      "members": true,
      "buy_average": 2296,
      "name": "Phoenix necklace",
      "sp": 4050
    },
    "11092": {
      "overall_average": 2181,
      "id": 11092,
      "sell_average": 2182,
      "members": true,
      "buy_average": 2185,
      "name": "Diamond bracelet",
      "sp": 3825
    },
    "11095": {
      "overall_average": 0,
      "id": 11095,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Abyssal bracelet(5)",
      "sp": 4200
    },
    "11105": {
      "overall_average": 13095,
      "id": 11105,
      "sell_average": 12842,
      "members": true,
      "buy_average": 11701,
      "name": "Skills necklace(4)",
      "sp": 20200
    },
    "11113": {
      "overall_average": 11429,
      "id": 11113,
      "sell_average": 10952,
      "members": true,
      "buy_average": 10098,
      "name": "Skills necklace",
      "sp": 20200
    },
    "11115": {
      "overall_average": 11995,
      "id": 11115,
      "sell_average": 12257,
      "members": true,
      "buy_average": 12267,
      "name": "Dragonstone bracelet",
      "sp": 19125
    },
    "11118": {
      "overall_average": 13405,
      "id": 11118,
      "sell_average": 13325,
      "members": true,
      "buy_average": 13261,
      "name": "Combat bracelet(4)",
      "sp": 21040
    },
    "11126": {
      "overall_average": 12950,
      "id": 11126,
      "sell_average": 12823,
      "members": true,
      "buy_average": 12666,
      "name": "Combat bracelet",
      "sp": 21040
    },
    "11128": {
      "overall_average": 2824504,
      "id": 11128,
      "sell_average": 2817642,
      "members": true,
      "buy_average": 2806236,
      "name": "Berserker necklace",
      "sp": 202000
    },
    "11130": {
      "overall_average": 0,
      "id": 11130,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Onyx bracelet",
      "sp": 201000
    },
    "11133": {
      "overall_average": 2925390,
      "id": 11133,
      "sell_average": 2921374,
      "members": true,
      "buy_average": 2914681,
      "name": "Regen bracelet",
      "sp": 202000
    },
    "11200": {
      "overall_average": 37997,
      "id": 11200,
      "sell_average": 37780,
      "members": true,
      "buy_average": 35611,
      "name": "Dwarven helmet",
      "sp": 60000
    },
    "11205": {
      "overall_average": 0,
      "id": 11205,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Shrunk ogleroot",
      "sp": 2
    },
    "11212": {
      "overall_average": 1284,
      "id": 11212,
      "sell_average": 1280,
      "members": true,
      "buy_average": 1268,
      "name": "Dragon arrow",
      "sp": 800
    },
    "11227": {
      "overall_average": 0,
      "id": 11227,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon arrow(p)",
      "sp": 800
    },
    "11228": {
      "overall_average": 0,
      "id": 11228,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon arrow(p+)",
      "sp": 800
    },
    "11229": {
      "overall_average": 2244,
      "id": 11229,
      "sell_average": 2205,
      "members": true,
      "buy_average": 1891,
      "name": "Dragon arrow(p++)",
      "sp": 800
    },
    "11230": {
      "overall_average": 2939,
      "id": 11230,
      "sell_average": 2932,
      "members": true,
      "buy_average": 2927,
      "name": "Dragon dart",
      "sp": 500
    },
    "11231": {
      "overall_average": 0,
      "id": 11231,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon dart(p)",
      "sp": 500
    },
    "11232": {
      "overall_average": 3100,
      "id": 11232,
      "sell_average": 3125,
      "members": true,
      "buy_average": 3130,
      "name": "Dragon dart tip",
      "sp": 250
    },
    "11233": {
      "overall_average": 0,
      "id": 11233,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon dart(p+)",
      "sp": 500
    },
    "11234": {
      "overall_average": 0,
      "id": 11234,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon dart(p++)",
      "sp": 500
    },
    "11235": {
      "overall_average": 425742,
      "id": 11235,
      "sell_average": 423360,
      "members": true,
      "buy_average": 421067,
      "name": "Dark bow",
      "sp": 120002
    },
    "11237": {
      "overall_average": 1380,
      "id": 11237,
      "sell_average": 1369,
      "members": true,
      "buy_average": 1360,
      "name": "Dragon arrowtips",
      "sp": 500
    },
    "11238": {
      "overall_average": 1331,
      "id": 11238,
      "sell_average": 1323,
      "members": true,
      "buy_average": 1300,
      "name": "Baby impling jar",
      "sp": 50
    },
    "11240": {
      "overall_average": 1331,
      "id": 11240,
      "sell_average": 1326,
      "members": true,
      "buy_average": 1251,
      "name": "Young impling jar",
      "sp": 50
    },
    "11242": {
      "overall_average": 2086,
      "id": 11242,
      "sell_average": 2079,
      "members": true,
      "buy_average": 2042,
      "name": "Gourmet impling jar",
      "sp": 50
    },
    "11244": {
      "overall_average": 1382,
      "id": 11244,
      "sell_average": 1399,
      "members": true,
      "buy_average": 1434,
      "name": "Earth impling jar",
      "sp": 50
    },
    "11246": {
      "overall_average": 2082,
      "id": 11246,
      "sell_average": 2045,
      "members": true,
      "buy_average": 2004,
      "name": "Essence impling jar",
      "sp": 50
    },
    "11248": {
      "overall_average": 2583,
      "id": 11248,
      "sell_average": 2581,
      "members": true,
      "buy_average": 2580,
      "name": "Eclectic impling jar",
      "sp": 50
    },
    "11250": {
      "overall_average": 3693,
      "id": 11250,
      "sell_average": 3610,
      "members": true,
      "buy_average": 3502,
      "name": "Nature impling jar",
      "sp": 50
    },
    "11252": {
      "overall_average": 15678,
      "id": 11252,
      "sell_average": 15666,
      "members": true,
      "buy_average": 15655,
      "name": "Magpie impling jar",
      "sp": 50
    },
    "11254": {
      "overall_average": 24908,
      "id": 11254,
      "sell_average": 24694,
      "members": true,
      "buy_average": 24282,
      "name": "Ninja impling jar",
      "sp": 50
    },
    "11256": {
      "overall_average": 480000,
      "id": 11256,
      "sell_average": 476806,
      "members": true,
      "buy_average": 476112,
      "name": "Dragon impling jar",
      "sp": 50
    },
    "11260": {
      "overall_average": 743,
      "id": 11260,
      "sell_average": 733,
      "members": true,
      "buy_average": 727,
      "name": "Impling jar",
      "sp": 1
    },
    "11280": {
      "overall_average": 0,
      "id": 11280,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cavalier mask",
      "sp": 200
    },
    "11284": {
      "overall_average": 7822560,
      "id": 11284,
      "sell_average": 7822239,
      "members": true,
      "buy_average": 7821754,
      "name": "Dragonfire shield",
      "sp": 2000000
    },
    "11286": {
      "overall_average": 0,
      "id": 11286,
      "sell_average": 7810005,
      "members": true,
      "buy_average": 7810005,
      "name": "Draconic visage",
      "sp": 750000
    },
    "11324": {
      "overall_average": 0,
      "id": 11324,
      "sell_average": 8,
      "members": true,
      "buy_average": 8,
      "name": "Roe",
      "sp": 20
    },
    "11326": {
      "overall_average": 0,
      "id": 11326,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Caviar",
      "sp": 50
    },
    "11328": {
      "overall_average": 0,
      "id": 11328,
      "sell_average": 10,
      "members": true,
      "buy_average": 10,
      "name": "Leaping trout",
      "sp": 2
    },
    "11330": {
      "overall_average": 0,
      "id": 11330,
      "sell_average": 15,
      "members": true,
      "buy_average": 15,
      "name": "Leaping salmon",
      "sp": 3
    },
    "11332": {
      "overall_average": 0,
      "id": 11332,
      "sell_average": 50,
      "members": true,
      "buy_average": 50,
      "name": "Leaping sturgeon",
      "sp": 4
    },
    "11334": {
      "overall_average": 0,
      "id": 11334,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fish offcuts",
      "sp": 1
    },
    "11335": {
      "overall_average": 19465068,
      "id": 11335,
      "sell_average": 19407255,
      "members": true,
      "buy_average": 19368713,
      "name": "Dragon full helm",
      "sp": 150000
    },
    "11367": {
      "overall_average": 0,
      "id": 11367,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze hasta",
      "sp": 26
    },
    "11369": {
      "overall_average": 0,
      "id": 11369,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron hasta",
      "sp": 91
    },
    "11371": {
      "overall_average": 0,
      "id": 11371,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel hasta",
      "sp": 325
    },
    "11373": {
      "overall_average": 0,
      "id": 11373,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril hasta",
      "sp": 845
    },
    "11375": {
      "overall_average": 0,
      "id": 11375,
      "sell_average": 1057,
      "members": true,
      "buy_average": 1057,
      "name": "Adamant hasta",
      "sp": 2080
    },
    "11377": {
      "overall_average": 0,
      "id": 11377,
      "sell_average": 12614,
      "members": true,
      "buy_average": 12614,
      "name": "Rune hasta",
      "sp": 20800
    },
    "11379": {
      "overall_average": 0,
      "id": 11379,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze hasta(p)",
      "sp": 26
    },
    "11382": {
      "overall_average": 0,
      "id": 11382,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze hasta(p+)",
      "sp": 26
    },
    "11384": {
      "overall_average": 0,
      "id": 11384,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze hasta(p++)",
      "sp": 26
    },
    "11386": {
      "overall_average": 0,
      "id": 11386,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron hasta(p)",
      "sp": 91
    },
    "11389": {
      "overall_average": 0,
      "id": 11389,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron hasta(p+)",
      "sp": 91
    },
    "11391": {
      "overall_average": 0,
      "id": 11391,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron hasta(p++)",
      "sp": 91
    },
    "11393": {
      "overall_average": 0,
      "id": 11393,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel hasta(p)",
      "sp": 325
    },
    "11396": {
      "overall_average": 0,
      "id": 11396,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel hasta(p+)",
      "sp": 325
    },
    "11398": {
      "overall_average": 0,
      "id": 11398,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel hasta(p++)",
      "sp": 325
    },
    "11400": {
      "overall_average": 0,
      "id": 11400,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril hasta(p)",
      "sp": 845
    },
    "11403": {
      "overall_average": 0,
      "id": 11403,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril hasta(p+)",
      "sp": 845
    },
    "11405": {
      "overall_average": 0,
      "id": 11405,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril hasta(p++)",
      "sp": 845
    },
    "11407": {
      "overall_average": 0,
      "id": 11407,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant hasta(p)",
      "sp": 2080
    },
    "11410": {
      "overall_average": 0,
      "id": 11410,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant hasta(p+)",
      "sp": 2080
    },
    "11412": {
      "overall_average": 0,
      "id": 11412,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant hasta(p++)",
      "sp": 2080
    },
    "11414": {
      "overall_average": 0,
      "id": 11414,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune hasta(p)",
      "sp": 20800
    },
    "11417": {
      "overall_average": 0,
      "id": 11417,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune hasta(p+)",
      "sp": 20800
    },
    "11419": {
      "overall_average": 0,
      "id": 11419,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune hasta(p++)",
      "sp": 20800
    },
    "11429": {
      "overall_average": 0,
      "id": 11429,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Attack mix(2)",
      "sp": 9
    },
    "11431": {
      "overall_average": 0,
      "id": 11431,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Attack mix(1)",
      "sp": 6
    },
    "11433": {
      "overall_average": 0,
      "id": 11433,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Antipoison mix(2)",
      "sp": 216
    },
    "11435": {
      "overall_average": 0,
      "id": 11435,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Antipoison mix(1)",
      "sp": 144
    },
    "11437": {
      "overall_average": 0,
      "id": 11437,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Relicym's mix(2)",
      "sp": 150
    },
    "11439": {
      "overall_average": 0,
      "id": 11439,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Relicym's mix(1)",
      "sp": 75
    },
    "11441": {
      "overall_average": 0,
      "id": 11441,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Strength mix(1)",
      "sp": 11
    },
    "11443": {
      "overall_average": 0,
      "id": 11443,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Strength mix(2)",
      "sp": 13
    },
    "11445": {
      "overall_average": 0,
      "id": 11445,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Combat mix(2)",
      "sp": 105
    },
    "11447": {
      "overall_average": 0,
      "id": 11447,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Combat mix(1)",
      "sp": 52
    },
    "11449": {
      "overall_average": 0,
      "id": 11449,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Restore mix(2)",
      "sp": 66
    },
    "11451": {
      "overall_average": 0,
      "id": 11451,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Restore mix(1)",
      "sp": 44
    },
    "11453": {
      "overall_average": 0,
      "id": 11453,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Energy mix(2)",
      "sp": 72
    },
    "11455": {
      "overall_average": 0,
      "id": 11455,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Energy mix(1)",
      "sp": 36
    },
    "11457": {
      "overall_average": 0,
      "id": 11457,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Defence mix(2)",
      "sp": 90
    },
    "11459": {
      "overall_average": 0,
      "id": 11459,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Defence mix(1)",
      "sp": 60
    },
    "11461": {
      "overall_average": 0,
      "id": 11461,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Agility mix(2)",
      "sp": 100
    },
    "11463": {
      "overall_average": 0,
      "id": 11463,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Agility mix(1)",
      "sp": 50
    },
    "11465": {
      "overall_average": 0,
      "id": 11465,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Prayer mix(2)",
      "sp": 114
    },
    "11467": {
      "overall_average": 0,
      "id": 11467,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Prayer mix(1)",
      "sp": 76
    },
    "11469": {
      "overall_average": 0,
      "id": 11469,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Superattack mix(2)",
      "sp": 135
    },
    "11471": {
      "overall_average": 0,
      "id": 11471,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Superattack mix(1)",
      "sp": 90
    },
    "11473": {
      "overall_average": 0,
      "id": 11473,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Anti-poison supermix(2)",
      "sp": 216
    },
    "11475": {
      "overall_average": 0,
      "id": 11475,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Anti-poison supermix(1)",
      "sp": 144
    },
    "11477": {
      "overall_average": 0,
      "id": 11477,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fishing mix(2)",
      "sp": 150
    },
    "11479": {
      "overall_average": 0,
      "id": 11479,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Fishing mix(1)",
      "sp": 100
    },
    "11481": {
      "overall_average": 0,
      "id": 11481,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Super energy mix(2)",
      "sp": 160
    },
    "11483": {
      "overall_average": 0,
      "id": 11483,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Super energy mix(1)",
      "sp": 90
    },
    "11485": {
      "overall_average": 1970,
      "id": 11485,
      "sell_average": 1975,
      "members": true,
      "buy_average": 1981,
      "name": "Super str. mix(2)",
      "sp": 165
    },
    "11487": {
      "overall_average": 0,
      "id": 11487,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Super str. mix(1)",
      "sp": 110
    },
    "11489": {
      "overall_average": 0,
      "id": 11489,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Magic essence mix(2)",
      "sp": 180
    },
    "11491": {
      "overall_average": 0,
      "id": 11491,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Magic essence mix(1)",
      "sp": 130
    },
    "11493": {
      "overall_average": 0,
      "id": 11493,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Super restore mix(2)",
      "sp": 180
    },
    "11495": {
      "overall_average": 0,
      "id": 11495,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Super restore mix(1)",
      "sp": 120
    },
    "11497": {
      "overall_average": 0,
      "id": 11497,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Super def. mix(2)",
      "sp": 198
    },
    "11499": {
      "overall_average": 0,
      "id": 11499,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Super def. mix(1)",
      "sp": 132
    },
    "11501": {
      "overall_average": 0,
      "id": 11501,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Antidote+ mix(2)",
      "sp": 216
    },
    "11503": {
      "overall_average": 0,
      "id": 11503,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Antidote+ mix(1)",
      "sp": 144
    },
    "11505": {
      "overall_average": 0,
      "id": 11505,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Antifire mix(2)",
      "sp": 198
    },
    "11507": {
      "overall_average": 0,
      "id": 11507,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Antifire mix(1)",
      "sp": 132
    },
    "11509": {
      "overall_average": 0,
      "id": 11509,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ranging mix(2)",
      "sp": 216
    },
    "11511": {
      "overall_average": 0,
      "id": 11511,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ranging mix(1)",
      "sp": 144
    },
    "11513": {
      "overall_average": 0,
      "id": 11513,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Magic mix(2)",
      "sp": 200
    },
    "11515": {
      "overall_average": 0,
      "id": 11515,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Magic mix(1)",
      "sp": 150
    },
    "11517": {
      "overall_average": 0,
      "id": 11517,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Hunting mix(2)",
      "sp": 9
    },
    "11519": {
      "overall_average": 0,
      "id": 11519,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Hunting mix(1)",
      "sp": 6
    },
    "11521": {
      "overall_average": 0,
      "id": 11521,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Zamorak mix(2)",
      "sp": 150
    },
    "11523": {
      "overall_average": 0,
      "id": 11523,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Zamorak mix(1)",
      "sp": 125
    },
    "11785": {
      "overall_average": 28974588,
      "id": 11785,
      "sell_average": 28961335,
      "members": true,
      "buy_average": 28948082,
      "name": "Armadyl crossbow",
      "sp": 990000
    },
    "11787": {
      "overall_average": 374993,
      "id": 11787,
      "sell_average": 360200,
      "members": true,
      "buy_average": 350338,
      "name": "Steam battlestaff",
      "sp": 17000
    },
    "11789": {
      "overall_average": 474999,
      "id": 11789,
      "sell_average": 449000,
      "members": true,
      "buy_average": 423001,
      "name": "Mystic steam staff",
      "sp": 45000
    },
    "11791": {
      "overall_average": 6812499,
      "id": 11791,
      "sell_average": 6773859,
      "members": true,
      "buy_average": 6762819,
      "name": "Staff of the dead",
      "sp": 1000005
    },
    "11798": {
      "overall_average": 500000,
      "id": 11798,
      "sell_average": 500000,
      "members": true,
      "buy_average": 0,
      "name": "Godsword blade",
      "sp": 750000
    },
    "11802": {
      "overall_average": 21045338,
      "id": 11802,
      "sell_average": 21036384,
      "members": true,
      "buy_average": 21027811,
      "name": "Armadyl godsword",
      "sp": 1250000
    },
    "11804": {
      "overall_average": 10467345,
      "id": 11804,
      "sell_average": 10465002,
      "members": true,
      "buy_average": 10462823,
      "name": "Bandos godsword",
      "sp": 1250000
    },
    "11806": {
      "overall_average": 42761935,
      "id": 11806,
      "sell_average": 42753078,
      "members": true,
      "buy_average": 42743588,
      "name": "Saradomin godsword",
      "sp": 1250000
    },
    "11808": {
      "overall_average": 5335991,
      "id": 11808,
      "sell_average": 5329520,
      "members": true,
      "buy_average": 5324343,
      "name": "Zamorak godsword",
      "sp": 1250000
    },
    "11810": {
      "overall_average": 0,
      "id": 11810,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Armadyl hilt",
      "sp": 500000
    },
    "11812": {
      "overall_average": 9884000,
      "id": 11812,
      "sell_average": 9884500,
      "members": true,
      "buy_average": 9884571,
      "name": "Bandos hilt",
      "sp": 500000
    },
    "11814": {
      "overall_average": 42066000,
      "id": 11814,
      "sell_average": 42066000,
      "members": true,
      "buy_average": 42066000,
      "name": "Saradomin hilt",
      "sp": 500000
    },
    "11816": {
      "overall_average": 0,
      "id": 11816,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Zamorak hilt",
      "sp": 500000
    },
    "11818": {
      "overall_average": 149000,
      "id": 11818,
      "sell_average": 149000,
      "members": true,
      "buy_average": 149000,
      "name": "Godsword shard 1",
      "sp": 250000
    },
    "11820": {
      "overall_average": 0,
      "id": 11820,
      "sell_average": 157000,
      "members": true,
      "buy_average": 157000,
      "name": "Godsword shard 2",
      "sp": 250000
    },
    "11822": {
      "overall_average": 0,
      "id": 11822,
      "sell_average": 160000,
      "members": true,
      "buy_average": 160000,
      "name": "Godsword shard 3",
      "sp": 250000
    },
    "11824": {
      "overall_average": 9553899,
      "id": 11824,
      "sell_average": 9534222,
      "members": true,
      "buy_average": 9508757,
      "name": "Zamorakian spear",
      "sp": 100005
    },
    "11826": {
      "overall_average": 3879905,
      "id": 11826,
      "sell_average": 3870798,
      "members": true,
      "buy_average": 3862764,
      "name": "Armadyl helmet",
      "sp": 289000
    },
    "11828": {
      "overall_average": 37894678,
      "id": 11828,
      "sell_average": 37908929,
      "members": true,
      "buy_average": 37919854,
      "name": "Armadyl chestplate",
      "sp": 290000
    },
    "11830": {
      "overall_average": 32304918,
      "id": 11830,
      "sell_average": 32235473,
      "members": true,
      "buy_average": 32166028,
      "name": "Armadyl chainskirt",
      "sp": 289900
    },
    "11832": {
      "overall_average": 15744143,
      "id": 11832,
      "sell_average": 15731746,
      "members": true,
      "buy_average": 15715446,
      "name": "Bandos chestplate",
      "sp": 290010
    },
    "11834": {
      "overall_average": 27398052,
      "id": 11834,
      "sell_average": 27379016,
      "members": true,
      "buy_average": 27358488,
      "name": "Bandos tassets",
      "sp": 289910
    },
    "11836": {
      "overall_average": 218418,
      "id": 11836,
      "sell_average": 214489,
      "members": true,
      "buy_average": 211870,
      "name": "Bandos boots",
      "sp": 289010
    },
    "11838": {
      "overall_average": 804433,
      "id": 11838,
      "sell_average": 801348,
      "members": true,
      "buy_average": 796528,
      "name": "Saradomin sword",
      "sp": 130000
    },
    "11840": {
      "overall_average": 271567,
      "id": 11840,
      "sell_average": 275857,
      "members": true,
      "buy_average": 279666,
      "name": "Dragon boots",
      "sp": 20000
    },
    "11874": {
      "overall_average": 58,
      "id": 11874,
      "sell_average": 58,
      "members": true,
      "buy_average": 58,
      "name": "Broad arrowheads",
      "sp": 55
    },
    "11875": {
      "overall_average": 63,
      "id": 11875,
      "sell_average": 63,
      "members": true,
      "buy_average": 62,
      "name": "Broad bolts",
      "sp": 55
    },
    "11876": {
      "overall_average": 58,
      "id": 11876,
      "sell_average": 58,
      "members": true,
      "buy_average": 58,
      "name": "Unfinished broad bolts",
      "sp": 55
    },
    "11889": {
      "overall_average": 9642265,
      "id": 11889,
      "sell_average": 9617311,
      "members": true,
      "buy_average": 9588364,
      "name": "Zamorakian hasta",
      "sp": 300000
    },
    "11902": {
      "overall_average": 40703,
      "id": 11902,
      "sell_average": 40367,
      "members": true,
      "buy_average": 40312,
      "name": "Leaf-bladed sword",
      "sp": 68000
    },
    "11905": {
      "overall_average": 1062443,
      "id": 11905,
      "sell_average": 1054817,
      "members": true,
      "buy_average": 1045919,
      "name": "Trident of the seas (full)",
      "sp": 69000
    },
    "11908": {
      "overall_average": 85249,
      "id": 11908,
      "sell_average": 83649,
      "members": true,
      "buy_average": 81250,
      "name": "Uncharged trident",
      "sp": 68000
    },
    "11920": {
      "overall_average": 3794032,
      "id": 11920,
      "sell_average": 3783631,
      "members": true,
      "buy_average": 3775768,
      "name": "Dragon pickaxe",
      "sp": 97950
    },
    "11924": {
      "overall_average": 2901347,
      "id": 11924,
      "sell_average": 2895564,
      "members": true,
      "buy_average": 2891560,
      "name": "Malediction ward",
      "sp": 45000
    },
    "11926": {
      "overall_average": 3054920,
      "id": 11926,
      "sell_average": 3038874,
      "members": true,
      "buy_average": 3030851,
      "name": "Odium ward",
      "sp": 45000
    },
    "11928": {
      "overall_average": 0,
      "id": 11928,
      "sell_average": 572000,
      "members": true,
      "buy_average": 572000,
      "name": "Odium shard 1",
      "sp": 31000
    },
    "11929": {
      "overall_average": 0,
      "id": 11929,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Odium shard 2",
      "sp": 31000
    },
    "11930": {
      "overall_average": 0,
      "id": 11930,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Odium shard 3",
      "sp": 31000
    },
    "11931": {
      "overall_average": 0,
      "id": 11931,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Malediction shard 1",
      "sp": 31000
    },
    "11932": {
      "overall_average": 1405000,
      "id": 11932,
      "sell_average": 1405000,
      "members": true,
      "buy_average": 1405000,
      "name": "Malediction shard 2",
      "sp": 31000
    },
    "11933": {
      "overall_average": 0,
      "id": 11933,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Malediction shard 3",
      "sp": 31000
    },
    "11934": {
      "overall_average": 0,
      "id": 11934,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Raw dark crab",
      "sp": 325
    },
    "11936": {
      "overall_average": 1059,
      "id": 11936,
      "sell_average": 1048,
      "members": true,
      "buy_average": 1045,
      "name": "Dark crab",
      "sp": 320
    },
    "11940": {
      "overall_average": 7,
      "id": 11940,
      "sell_average": 5,
      "members": true,
      "buy_average": 5,
      "name": "Dark fishing bait",
      "sp": 3
    },
    "11943": {
      "overall_average": 4115,
      "id": 11943,
      "sell_average": 4100,
      "members": true,
      "buy_average": 4100,
      "name": "Lava dragon bones",
      "sp": 150
    },
    "11951": {
      "overall_average": 413,
      "id": 11951,
      "sell_average": 432,
      "members": true,
      "buy_average": 521,
      "name": "Extended antifire(4)",
      "sp": 440
    },
    "11953": {
      "overall_average": 0,
      "id": 11953,
      "sell_average": 258,
      "members": true,
      "buy_average": 258,
      "name": "Extended antifire(3)",
      "sp": 330
    },
    "11955": {
      "overall_average": 412,
      "id": 11955,
      "sell_average": 402,
      "members": true,
      "buy_average": 392,
      "name": "Extended antifire(2)",
      "sp": 220
    },
    "11957": {
      "overall_average": 218,
      "id": 11957,
      "sell_average": 217,
      "members": true,
      "buy_average": 183,
      "name": "Extended antifire(1)",
      "sp": 110
    },
    "11959": {
      "overall_average": 3299,
      "id": 11959,
      "sell_average": 3295,
      "members": true,
      "buy_average": 3291,
      "name": "Black chinchompa",
      "sp": 240
    },
    "11960": {
      "overall_average": 0,
      "id": 11960,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Extended antifire mix(2)",
      "sp": 240
    },
    "11962": {
      "overall_average": 0,
      "id": 11962,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Extended antifire mix(1)",
      "sp": 160
    },
    "11964": {
      "overall_average": 47723,
      "id": 11964,
      "sell_average": 51691,
      "members": true,
      "buy_average": 55659,
      "name": "Amulet of glory (t6)",
      "sp": 17625
    },
    "11968": {
      "overall_average": 14279,
      "id": 11968,
      "sell_average": 14253,
      "members": true,
      "buy_average": 13333,
      "name": "Skills necklace(6)",
      "sp": 20200
    },
    "11972": {
      "overall_average": 14271,
      "id": 11972,
      "sell_average": 14187,
      "members": true,
      "buy_average": 13868,
      "name": "Combat bracelet(6)",
      "sp": 21040
    },
    "11978": {
      "overall_average": 13567,
      "id": 11978,
      "sell_average": 13573,
      "members": true,
      "buy_average": 13577,
      "name": "Amulet of glory(6)",
      "sp": 17625
    },
    "11980": {
      "overall_average": 13745,
      "id": 11980,
      "sell_average": 13730,
      "members": true,
      "buy_average": 13637,
      "name": "Ring of wealth (5)",
      "sp": 17625
    },
    "11990": {
      "overall_average": 7995,
      "id": 11990,
      "sell_average": 7995,
      "members": true,
      "buy_average": 0,
      "name": "Fedora",
      "sp": 300
    },
    "11992": {
      "overall_average": 2005,
      "id": 11992,
      "sell_average": 2001,
      "members": true,
      "buy_average": 2001,
      "name": "Lava scale",
      "sp": 50
    },
    "11994": {
      "overall_average": 309,
      "id": 11994,
      "sell_average": 309,
      "members": true,
      "buy_average": 290,
      "name": "Lava scale shard",
      "sp": 20
    },
    "11998": {
      "overall_average": 2691068,
      "id": 11998,
      "sell_average": 2688135,
      "members": true,
      "buy_average": 2684029,
      "name": "Smoke battlestaff",
      "sp": 15500
    },
    "12000": {
      "overall_average": 2749948,
      "id": 12000,
      "sell_average": 2741375,
      "members": true,
      "buy_average": 2734361,
      "name": "Mystic smoke staff",
      "sp": 42500
    },
    "12002": {
      "overall_average": 621718,
      "id": 12002,
      "sell_average": 618721,
      "members": true,
      "buy_average": 615964,
      "name": "Occult necklace",
      "sp": 45000
    },
    "12004": {
      "overall_average": 1002082,
      "id": 12004,
      "sell_average": 994829,
      "members": true,
      "buy_average": 985076,
      "name": "Kraken tentacle",
      "sp": 83340
    },
    "12007": {
      "overall_average": 0,
      "id": 12007,
      "sell_average": 10791,
      "members": true,
      "buy_average": 10791,
      "name": "Jar of dirt",
      "sp": 1
    },
    "12193": {
      "overall_average": 79000,
      "id": 12193,
      "sell_average": 79000,
      "members": true,
      "buy_average": 79000,
      "name": "Ancient robe top",
      "sp": 7000
    },
    "12195": {
      "overall_average": 0,
      "id": 12195,
      "sell_average": 76461,
      "members": true,
      "buy_average": 76461,
      "name": "Ancient robe legs",
      "sp": 7000
    },
    "12197": {
      "overall_average": 34965,
      "id": 12197,
      "sell_average": 34161,
      "members": true,
      "buy_average": 32555,
      "name": "Ancient cloak",
      "sp": 2000
    },
    "12199": {
      "overall_average": 7600,
      "id": 12199,
      "sell_average": 5956,
      "members": true,
      "buy_average": 4313,
      "name": "Ancient crozier",
      "sp": 5000
    },
    "12201": {
      "overall_average": 4444,
      "id": 12201,
      "sell_average": 4444,
      "members": true,
      "buy_average": 4444,
      "name": "Ancient stole",
      "sp": 2500
    },
    "12203": {
      "overall_average": 21999,
      "id": 12203,
      "sell_average": 21340,
      "members": true,
      "buy_average": 20024,
      "name": "Ancient mitre",
      "sp": 5000
    },
    "12205": {
      "overall_average": 0,
      "id": 12205,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Bronze platebody (g)",
      "sp": 160
    },
    "12207": {
      "overall_average": 0,
      "id": 12207,
      "sell_average": 32334,
      "members": false,
      "buy_average": 32334,
      "name": "Bronze platelegs (g)",
      "sp": 80
    },
    "12209": {
      "overall_average": 0,
      "id": 12209,
      "sell_average": 2590,
      "members": false,
      "buy_average": 2590,
      "name": "Bronze plateskirt (g)",
      "sp": 80
    },
    "12211": {
      "overall_average": 0,
      "id": 12211,
      "sell_average": 44541,
      "members": false,
      "buy_average": 44541,
      "name": "Bronze full helm (g)",
      "sp": 48
    },
    "12213": {
      "overall_average": 0,
      "id": 12213,
      "sell_average": 34217,
      "members": false,
      "buy_average": 34217,
      "name": "Bronze kiteshield (g)",
      "sp": 64
    },
    "12215": {
      "overall_average": 15108,
      "id": 12215,
      "sell_average": 15108,
      "members": false,
      "buy_average": 0,
      "name": "Bronze platebody (t)",
      "sp": 160
    },
    "12217": {
      "overall_average": 0,
      "id": 12217,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Bronze platelegs (t)",
      "sp": 80
    },
    "12219": {
      "overall_average": 0,
      "id": 12219,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Bronze plateskirt (t)",
      "sp": 80
    },
    "12221": {
      "overall_average": 0,
      "id": 12221,
      "sell_average": 2800,
      "members": false,
      "buy_average": 2800,
      "name": "Bronze full helm (t)",
      "sp": 48
    },
    "12223": {
      "overall_average": 0,
      "id": 12223,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Bronze kiteshield (t)",
      "sp": 64
    },
    "12225": {
      "overall_average": 0,
      "id": 12225,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Iron platebody (t)",
      "sp": 560
    },
    "12227": {
      "overall_average": 42456,
      "id": 12227,
      "sell_average": 42228,
      "members": false,
      "buy_average": 42000,
      "name": "Iron platelegs (t)",
      "sp": 280
    },
    "12229": {
      "overall_average": 0,
      "id": 12229,
      "sell_average": 1367,
      "members": false,
      "buy_average": 1367,
      "name": "Iron plateskirt (t)",
      "sp": 280
    },
    "12231": {
      "overall_average": 154999,
      "id": 12231,
      "sell_average": 154999,
      "members": false,
      "buy_average": 0,
      "name": "Iron full helm (t)",
      "sp": 160
    },
    "12233": {
      "overall_average": 0,
      "id": 12233,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Iron kiteshield (t)",
      "sp": 240
    },
    "12235": {
      "overall_average": 0,
      "id": 12235,
      "sell_average": 531251,
      "members": false,
      "buy_average": 531251,
      "name": "Iron platebody (g)",
      "sp": 560
    },
    "12237": {
      "overall_average": 0,
      "id": 12237,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Iron platelegs (g)",
      "sp": 280
    },
    "12239": {
      "overall_average": 0,
      "id": 12239,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Iron plateskirt (g)",
      "sp": 280
    },
    "12241": {
      "overall_average": 0,
      "id": 12241,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Iron full helm (g)",
      "sp": 160
    },
    "12243": {
      "overall_average": 203038,
      "id": 12243,
      "sell_average": 203038,
      "members": false,
      "buy_average": 203038,
      "name": "Iron kiteshield (g)",
      "sp": 240
    },
    "12245": {
      "overall_average": 0,
      "id": 12245,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Beanie",
      "sp": 600
    },
    "12247": {
      "overall_average": 0,
      "id": 12247,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Red beret",
      "sp": 80
    },
    "12249": {
      "overall_average": 0,
      "id": 12249,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Imp mask",
      "sp": 2000
    },
    "12251": {
      "overall_average": 0,
      "id": 12251,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Goblin mask",
      "sp": 2000
    },
    "12253": {
      "overall_average": 58000,
      "id": 12253,
      "sell_average": 55750,
      "members": true,
      "buy_average": 53500,
      "name": "Armadyl robe top",
      "sp": 7000
    },
    "12255": {
      "overall_average": 65000,
      "id": 12255,
      "sell_average": 59099,
      "members": true,
      "buy_average": 59099,
      "name": "Armadyl robe legs",
      "sp": 7000
    },
    "12257": {
      "overall_average": 6997,
      "id": 12257,
      "sell_average": 6749,
      "members": true,
      "buy_average": 5665,
      "name": "Armadyl stole",
      "sp": 2500
    },
    "12259": {
      "overall_average": 29664,
      "id": 12259,
      "sell_average": 28125,
      "members": true,
      "buy_average": 23509,
      "name": "Armadyl mitre",
      "sp": 5000
    },
    "12261": {
      "overall_average": 22414,
      "id": 12261,
      "sell_average": 22018,
      "members": true,
      "buy_average": 21592,
      "name": "Armadyl cloak",
      "sp": 2000
    },
    "12263": {
      "overall_average": 0,
      "id": 12263,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Armadyl crozier",
      "sp": 5000
    },
    "12265": {
      "overall_average": 76551,
      "id": 12265,
      "sell_average": 68371,
      "members": true,
      "buy_average": 52011,
      "name": "Bandos robe top",
      "sp": 7000
    },
    "12267": {
      "overall_average": 71220,
      "id": 12267,
      "sell_average": 69300,
      "members": true,
      "buy_average": 63543,
      "name": "Bandos robe legs",
      "sp": 7000
    },
    "12269": {
      "overall_average": 0,
      "id": 12269,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bandos stole",
      "sp": 2500
    },
    "12271": {
      "overall_average": 28000,
      "id": 12271,
      "sell_average": 26001,
      "members": true,
      "buy_average": 24002,
      "name": "Bandos mitre",
      "sp": 5000
    },
    "12273": {
      "overall_average": 37880,
      "id": 12273,
      "sell_average": 35056,
      "members": true,
      "buy_average": 27996,
      "name": "Bandos cloak",
      "sp": 2000
    },
    "12275": {
      "overall_average": 3243,
      "id": 12275,
      "sell_average": 3257,
      "members": true,
      "buy_average": 3266,
      "name": "Bandos crozier",
      "sp": 5000
    },
    "12277": {
      "overall_average": 0,
      "id": 12277,
      "sell_average": 8638,
      "members": false,
      "buy_average": 8638,
      "name": "Mithril platebody (g)",
      "sp": 5200
    },
    "12279": {
      "overall_average": 6008,
      "id": 12279,
      "sell_average": 6000,
      "members": false,
      "buy_average": 5990,
      "name": "Mithril platelegs (g)",
      "sp": 2600
    },
    "12281": {
      "overall_average": 0,
      "id": 12281,
      "sell_average": 12300,
      "members": false,
      "buy_average": 12300,
      "name": "Mithril kiteshield (g)",
      "sp": 2210
    },
    "12283": {
      "overall_average": 0,
      "id": 12283,
      "sell_average": 13116,
      "members": false,
      "buy_average": 13116,
      "name": "Mithril full helm (g)",
      "sp": 1430
    },
    "12285": {
      "overall_average": 0,
      "id": 12285,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Mithril plateskirt (g)",
      "sp": 2600
    },
    "12287": {
      "overall_average": 7000,
      "id": 12287,
      "sell_average": 5956,
      "members": false,
      "buy_average": 4913,
      "name": "Mithril platebody (t)",
      "sp": 5200
    },
    "12289": {
      "overall_average": 4999,
      "id": 12289,
      "sell_average": 3697,
      "members": false,
      "buy_average": 3046,
      "name": "Mithril platelegs (t)",
      "sp": 2600
    },
    "12291": {
      "overall_average": 2705,
      "id": 12291,
      "sell_average": 2530,
      "members": false,
      "buy_average": 1830,
      "name": "Mithril kiteshield (t)",
      "sp": 2210
    },
    "12293": {
      "overall_average": 2999,
      "id": 12293,
      "sell_average": 2999,
      "members": false,
      "buy_average": 0,
      "name": "Mithril full helm (t)",
      "sp": 1430
    },
    "12295": {
      "overall_average": 0,
      "id": 12295,
      "sell_average": 1388,
      "members": false,
      "buy_average": 1388,
      "name": "Mithril plateskirt (t)",
      "sp": 2600
    },
    "12297": {
      "overall_average": 6695,
      "id": 12297,
      "sell_average": 6434,
      "members": false,
      "buy_average": 6072,
      "name": "Black pickaxe",
      "sp": 145
    },
    "12299": {
      "overall_average": 5000,
      "id": 12299,
      "sell_average": 3770,
      "members": true,
      "buy_average": 2541,
      "name": "White headband",
      "sp": 40
    },
    "12301": {
      "overall_average": 0,
      "id": 12301,
      "sell_average": 1579,
      "members": true,
      "buy_average": 1579,
      "name": "Blue headband",
      "sp": 40
    },
    "12303": {
      "overall_average": 4000,
      "id": 12303,
      "sell_average": 3298,
      "members": true,
      "buy_average": 1195,
      "name": "Gold headband",
      "sp": 40
    },
    "12305": {
      "overall_average": 7500,
      "id": 12305,
      "sell_average": 7500,
      "members": true,
      "buy_average": 0,
      "name": "Pink headband",
      "sp": 40
    },
    "12307": {
      "overall_average": 5000,
      "id": 12307,
      "sell_average": 5000,
      "members": true,
      "buy_average": 0,
      "name": "Green headband",
      "sp": 40
    },
    "12309": {
      "overall_average": 5000,
      "id": 12309,
      "sell_average": 4905,
      "members": true,
      "buy_average": 4529,
      "name": "Pink boater",
      "sp": 225
    },
    "12311": {
      "overall_average": 0,
      "id": 12311,
      "sell_average": 1500,
      "members": true,
      "buy_average": 1500,
      "name": "Purple boater",
      "sp": 225
    },
    "12313": {
      "overall_average": 0,
      "id": 12313,
      "sell_average": 1501,
      "members": true,
      "buy_average": 1501,
      "name": "White boater",
      "sp": 225
    },
    "12315": {
      "overall_average": 4998,
      "id": 12315,
      "sell_average": 4998,
      "members": true,
      "buy_average": 0,
      "name": "Pink elegant shirt",
      "sp": 2000
    },
    "12317": {
      "overall_average": 0,
      "id": 12317,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Pink elegant legs",
      "sp": 2000
    },
    "12319": {
      "overall_average": 7000,
      "id": 12319,
      "sell_average": 5666,
      "members": true,
      "buy_average": 5000,
      "name": "Crier hat",
      "sp": 5000
    },
    "12321": {
      "overall_average": 9650,
      "id": 12321,
      "sell_average": 9180,
      "members": true,
      "buy_average": 8710,
      "name": "White cavalier",
      "sp": 200
    },
    "12323": {
      "overall_average": 10000,
      "id": 12323,
      "sell_average": 10000,
      "members": true,
      "buy_average": 0,
      "name": "Red cavalier",
      "sp": 200
    },
    "12325": {
      "overall_average": 0,
      "id": 12325,
      "sell_average": 4206,
      "members": true,
      "buy_average": 4206,
      "name": "Navy cavalier",
      "sp": 200
    },
    "12327": {
      "overall_average": 9000,
      "id": 12327,
      "sell_average": 7750,
      "members": true,
      "buy_average": 7333,
      "name": "Red d'hide body (g)",
      "sp": 11230
    },
    "12329": {
      "overall_average": 18333,
      "id": 12329,
      "sell_average": 14666,
      "members": true,
      "buy_average": 11000,
      "name": "Red d'hide chaps (g)",
      "sp": 5180
    },
    "12331": {
      "overall_average": 6835,
      "id": 12331,
      "sell_average": 6411,
      "members": true,
      "buy_average": 6200,
      "name": "Red d'hide body (t)",
      "sp": 11230
    },
    "12333": {
      "overall_average": 3951,
      "id": 12333,
      "sell_average": 3844,
      "members": true,
      "buy_average": 3595,
      "name": "Red d'hide chaps (t)",
      "sp": 5180
    },
    "12335": {
      "overall_average": 260795,
      "id": 12335,
      "sell_average": 260795,
      "members": true,
      "buy_average": 260795,
      "name": "Briefcase",
      "sp": 666
    },
    "12337": {
      "overall_average": 0,
      "id": 12337,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Sagacious spectacles",
      "sp": 1400
    },
    "12339": {
      "overall_average": 5000,
      "id": 12339,
      "sell_average": 5000,
      "members": true,
      "buy_average": 0,
      "name": "Pink elegant blouse",
      "sp": 2000
    },
    "12341": {
      "overall_average": 2999,
      "id": 12341,
      "sell_average": 2999,
      "members": true,
      "buy_average": 0,
      "name": "Pink elegant skirt",
      "sp": 2000
    },
    "12343": {
      "overall_average": 0,
      "id": 12343,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gold elegant blouse",
      "sp": 2000
    },
    "12345": {
      "overall_average": 0,
      "id": 12345,
      "sell_average": 971,
      "members": true,
      "buy_average": 971,
      "name": "Gold elegant skirt",
      "sp": 2000
    },
    "12347": {
      "overall_average": 0,
      "id": 12347,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gold elegant shirt",
      "sp": 2000
    },
    "12349": {
      "overall_average": 0,
      "id": 12349,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gold elegant legs",
      "sp": 2000
    },
    "12351": {
      "overall_average": 250000,
      "id": 12351,
      "sell_average": 244895,
      "members": true,
      "buy_average": 229580,
      "name": "Musketeer hat",
      "sp": 3500
    },
    "12353": {
      "overall_average": 0,
      "id": 12353,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Monocle",
      "sp": 1200
    },
    "12355": {
      "overall_average": 0,
      "id": 12355,
      "sell_average": 145000,
      "members": true,
      "buy_average": 145000,
      "name": "Big pirate hat",
      "sp": 1500
    },
    "12357": {
      "overall_average": 385096,
      "id": 12357,
      "sell_average": 385096,
      "members": true,
      "buy_average": 0,
      "name": "Katana",
      "sp": 24000
    },
    "12359": {
      "overall_average": 0,
      "id": 12359,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Leprechaun hat",
      "sp": 1000
    },
    "12361": {
      "overall_average": 0,
      "id": 12361,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cat mask",
      "sp": 2400
    },
    "12363": {
      "overall_average": 0,
      "id": 12363,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze dragon mask",
      "sp": 10000
    },
    "12365": {
      "overall_average": 0,
      "id": 12365,
      "sell_average": 6248,
      "members": true,
      "buy_average": 6248,
      "name": "Iron dragon mask",
      "sp": 10000
    },
    "12367": {
      "overall_average": 6146,
      "id": 12367,
      "sell_average": 6146,
      "members": true,
      "buy_average": 0,
      "name": "Steel dragon mask",
      "sp": 10000
    },
    "12369": {
      "overall_average": 0,
      "id": 12369,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril dragon mask",
      "sp": 10000
    },
    "12371": {
      "overall_average": 0,
      "id": 12371,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Lava dragon mask",
      "sp": 10000
    },
    "12373": {
      "overall_average": 17000,
      "id": 12373,
      "sell_average": 16996,
      "members": true,
      "buy_average": 16961,
      "name": "Dragon cane",
      "sp": 30000
    },
    "12375": {
      "overall_average": 0,
      "id": 12375,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black cane",
      "sp": 600
    },
    "12377": {
      "overall_average": 0,
      "id": 12377,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Adamant cane",
      "sp": 1440
    },
    "12379": {
      "overall_average": 0,
      "id": 12379,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Rune cane",
      "sp": 14400
    },
    "12381": {
      "overall_average": 0,
      "id": 12381,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black d'hide body (g)",
      "sp": 13480
    },
    "12383": {
      "overall_average": 1135940,
      "id": 12383,
      "sell_average": 1134152,
      "members": true,
      "buy_average": 1127000,
      "name": "Black d'hide chaps (g)",
      "sp": 6220
    },
    "12385": {
      "overall_average": 26057,
      "id": 12385,
      "sell_average": 26057,
      "members": true,
      "buy_average": 0,
      "name": "Black d'hide body (t)",
      "sp": 13480
    },
    "12387": {
      "overall_average": 129382,
      "id": 12387,
      "sell_average": 130746,
      "members": true,
      "buy_average": 133474,
      "name": "Black d'hide chaps (t)",
      "sp": 6220
    },
    "12389": {
      "overall_average": 10695716,
      "id": 12389,
      "sell_average": 10677859,
      "members": false,
      "buy_average": 10660002,
      "name": "Gilded scimitar",
      "sp": 25600
    },
    "12391": {
      "overall_average": 6803000,
      "id": 12391,
      "sell_average": 6803000,
      "members": true,
      "buy_average": 0,
      "name": "Gilded boots",
      "sp": 12500
    },
    "12393": {
      "overall_average": 0,
      "id": 12393,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Royal gown top",
      "sp": 5000
    },
    "12395": {
      "overall_average": 0,
      "id": 12395,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Royal gown bottom",
      "sp": 5000
    },
    "12397": {
      "overall_average": 83615,
      "id": 12397,
      "sell_average": 83615,
      "members": true,
      "buy_average": 0,
      "name": "Royal crown",
      "sp": 6000
    },
    "12399": {
      "overall_average": 1222837,
      "id": 12399,
      "sell_average": 1222837,
      "members": true,
      "buy_average": 0,
      "name": "Partyhat & specs",
      "sp": 1800
    },
    "12402": {
      "overall_average": 3292,
      "id": 12402,
      "sell_average": 3256,
      "members": true,
      "buy_average": 3097,
      "name": "Nardah teleport",
      "sp": 10
    },
    "12403": {
      "overall_average": 9236,
      "id": 12403,
      "sell_average": 9063,
      "members": true,
      "buy_average": 8883,
      "name": "Digsite teleport",
      "sp": 10
    },
    "12404": {
      "overall_average": 2310,
      "id": 12404,
      "sell_average": 2261,
      "members": true,
      "buy_average": 2182,
      "name": "Feldip hills teleport",
      "sp": 10
    },
    "12405": {
      "overall_average": 5398,
      "id": 12405,
      "sell_average": 5349,
      "members": true,
      "buy_average": 5197,
      "name": "Lunar isle teleport",
      "sp": 10
    },
    "12406": {
      "overall_average": 5549,
      "id": 12406,
      "sell_average": 5541,
      "members": true,
      "buy_average": 5524,
      "name": "Mort'ton teleport",
      "sp": 10
    },
    "12407": {
      "overall_average": 992,
      "id": 12407,
      "sell_average": 837,
      "members": true,
      "buy_average": 807,
      "name": "Pest control teleport",
      "sp": 10
    },
    "12408": {
      "overall_average": 12357,
      "id": 12408,
      "sell_average": 11698,
      "members": true,
      "buy_average": 11498,
      "name": "Piscatoris teleport",
      "sp": 10
    },
    "12409": {
      "overall_average": 10977,
      "id": 12409,
      "sell_average": 10825,
      "members": true,
      "buy_average": 10554,
      "name": "Tai bwo wannai teleport",
      "sp": 10
    },
    "12410": {
      "overall_average": 2190,
      "id": 12410,
      "sell_average": 2187,
      "members": true,
      "buy_average": 2158,
      "name": "Elf camp teleport",
      "sp": 10
    },
    "12411": {
      "overall_average": 587,
      "id": 12411,
      "sell_average": 578,
      "members": true,
      "buy_average": 520,
      "name": "Mos le'harmless teleport",
      "sp": 10
    },
    "12412": {
      "overall_average": 0,
      "id": 12412,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Pirate hat & patch",
      "sp": 3000
    },
    "12422": {
      "overall_average": 0,
      "id": 12422,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "3rd age wand",
      "sp": 150000
    },
    "12424": {
      "overall_average": 0,
      "id": 12424,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "3rd age bow",
      "sp": 150000
    },
    "12426": {
      "overall_average": 0,
      "id": 12426,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "3rd age longsword",
      "sp": 150000
    },
    "12428": {
      "overall_average": 0,
      "id": 12428,
      "sell_average": 7180,
      "members": true,
      "buy_average": 7180,
      "name": "Penguin mask",
      "sp": 1200
    },
    "12430": {
      "overall_average": 0,
      "id": 12430,
      "sell_average": 30001,
      "members": true,
      "buy_average": 30001,
      "name": "Afro",
      "sp": 684
    },
    "12432": {
      "overall_average": 0,
      "id": 12432,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Top hat",
      "sp": 1800
    },
    "12434": {
      "overall_average": 154000,
      "id": 12434,
      "sell_average": 154000,
      "members": true,
      "buy_average": 0,
      "name": "Top hat & monocle",
      "sp": 4000
    },
    "12437": {
      "overall_average": 0,
      "id": 12437,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "3rd age cloak",
      "sp": 85000
    },
    "12439": {
      "overall_average": 0,
      "id": 12439,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Royal sceptre",
      "sp": 5000
    },
    "12441": {
      "overall_average": 42000,
      "id": 12441,
      "sell_average": 42000,
      "members": true,
      "buy_average": 0,
      "name": "Musketeer tabard",
      "sp": 1880
    },
    "12443": {
      "overall_average": 70000,
      "id": 12443,
      "sell_average": 70000,
      "members": true,
      "buy_average": 0,
      "name": "Musketeer pants",
      "sp": 1870
    },
    "12445": {
      "overall_average": 33859,
      "id": 12445,
      "sell_average": 31195,
      "members": false,
      "buy_average": 29864,
      "name": "Black skirt (g)",
      "sp": 2
    },
    "12447": {
      "overall_average": 28917,
      "id": 12447,
      "sell_average": 28917,
      "members": false,
      "buy_average": 0,
      "name": "Black skirt (t)",
      "sp": 2
    },
    "12449": {
      "overall_average": 304051,
      "id": 12449,
      "sell_average": 279329,
      "members": false,
      "buy_average": 271089,
      "name": "Black wizard robe (g)",
      "sp": 15
    },
    "12451": {
      "overall_average": 232815,
      "id": 12451,
      "sell_average": 232815,
      "members": false,
      "buy_average": 0,
      "name": "Black wizard robe (t)",
      "sp": 15
    },
    "12453": {
      "overall_average": 271538,
      "id": 12453,
      "sell_average": 259668,
      "members": false,
      "buy_average": 251755,
      "name": "Black wizard hat (g)",
      "sp": 2
    },
    "12455": {
      "overall_average": 147062,
      "id": 12455,
      "sell_average": 147062,
      "members": false,
      "buy_average": 0,
      "name": "Black wizard hat (t)",
      "sp": 2
    },
    "12460": {
      "overall_average": 37522,
      "id": 12460,
      "sell_average": 37522,
      "members": false,
      "buy_average": 37522,
      "name": "Ancient platebody",
      "sp": 65000
    },
    "12462": {
      "overall_average": 0,
      "id": 12462,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Ancient platelegs",
      "sp": 64000
    },
    "12464": {
      "overall_average": 0,
      "id": 12464,
      "sell_average": 37555,
      "members": false,
      "buy_average": 37555,
      "name": "Ancient plateskirt",
      "sp": 64000
    },
    "12466": {
      "overall_average": 0,
      "id": 12466,
      "sell_average": 26531,
      "members": false,
      "buy_average": 26531,
      "name": "Ancient full helm",
      "sp": 35200
    },
    "12468": {
      "overall_average": 0,
      "id": 12468,
      "sell_average": 32500,
      "members": false,
      "buy_average": 32500,
      "name": "Ancient kiteshield",
      "sp": 54400
    },
    "12470": {
      "overall_average": 0,
      "id": 12470,
      "sell_average": 38316,
      "members": false,
      "buy_average": 38316,
      "name": "Armadyl platebody",
      "sp": 65000
    },
    "12472": {
      "overall_average": 0,
      "id": 12472,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Armadyl platelegs",
      "sp": 64000
    },
    "12474": {
      "overall_average": 37891,
      "id": 12474,
      "sell_average": 37891,
      "members": false,
      "buy_average": 0,
      "name": "Armadyl plateskirt",
      "sp": 64000
    },
    "12476": {
      "overall_average": 21072,
      "id": 12476,
      "sell_average": 21072,
      "members": false,
      "buy_average": 0,
      "name": "Armadyl full helm",
      "sp": 35200
    },
    "12478": {
      "overall_average": 32000,
      "id": 12478,
      "sell_average": 32097,
      "members": false,
      "buy_average": 32194,
      "name": "Armadyl kiteshield",
      "sp": 54400
    },
    "12480": {
      "overall_average": 44000,
      "id": 12480,
      "sell_average": 36220,
      "members": false,
      "buy_average": 33627,
      "name": "Bandos platebody",
      "sp": 65000
    },
    "12482": {
      "overall_average": 40500,
      "id": 12482,
      "sell_average": 39548,
      "members": false,
      "buy_average": 37963,
      "name": "Bandos platelegs",
      "sp": 64000
    },
    "12484": {
      "overall_average": 0,
      "id": 12484,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Bandos plateskirt",
      "sp": 64000
    },
    "12486": {
      "overall_average": 21343,
      "id": 12486,
      "sell_average": 21312,
      "members": false,
      "buy_average": 21263,
      "name": "Bandos full helm",
      "sp": 35200
    },
    "12488": {
      "overall_average": 0,
      "id": 12488,
      "sell_average": 31200,
      "members": false,
      "buy_average": 31200,
      "name": "Bandos kiteshield",
      "sp": 54400
    },
    "12490": {
      "overall_average": 19000,
      "id": 12490,
      "sell_average": 16571,
      "members": true,
      "buy_average": 15761,
      "name": "Ancient bracers",
      "sp": 4000
    },
    "12492": {
      "overall_average": 101449,
      "id": 12492,
      "sell_average": 97363,
      "members": true,
      "buy_average": 94095,
      "name": "Ancient d'hide",
      "sp": 13000
    },
    "12494": {
      "overall_average": 66250,
      "id": 12494,
      "sell_average": 64695,
      "members": true,
      "buy_average": 63140,
      "name": "Ancient chaps",
      "sp": 6000
    },
    "12496": {
      "overall_average": 46065,
      "id": 12496,
      "sell_average": 45375,
      "members": true,
      "buy_average": 45145,
      "name": "Ancient coif",
      "sp": 2000
    },
    "12498": {
      "overall_average": 18736,
      "id": 12498,
      "sell_average": 18003,
      "members": true,
      "buy_average": 16977,
      "name": "Bandos bracers",
      "sp": 4000
    },
    "12500": {
      "overall_average": 95458,
      "id": 12500,
      "sell_average": 93487,
      "members": true,
      "buy_average": 92501,
      "name": "Bandos d'hide",
      "sp": 13000
    },
    "12502": {
      "overall_average": 66949,
      "id": 12502,
      "sell_average": 63182,
      "members": true,
      "buy_average": 61299,
      "name": "Bandos chaps",
      "sp": 6000
    },
    "12504": {
      "overall_average": 40266,
      "id": 12504,
      "sell_average": 39759,
      "members": true,
      "buy_average": 38948,
      "name": "Bandos coif",
      "sp": 2000
    },
    "12506": {
      "overall_average": 62033,
      "id": 12506,
      "sell_average": 60649,
      "members": true,
      "buy_average": 59067,
      "name": "Armadyl bracers",
      "sp": 4000
    },
    "12508": {
      "overall_average": 260043,
      "id": 12508,
      "sell_average": 255286,
      "members": true,
      "buy_average": 248152,
      "name": "Armadyl d'hide",
      "sp": 13000
    },
    "12510": {
      "overall_average": 202642,
      "id": 12510,
      "sell_average": 200567,
      "members": true,
      "buy_average": 197603,
      "name": "Armadyl chaps",
      "sp": 6000
    },
    "12512": {
      "overall_average": 57195,
      "id": 12512,
      "sell_average": 56513,
      "members": true,
      "buy_average": 55406,
      "name": "Armadyl coif",
      "sp": 2000
    },
    "12514": {
      "overall_average": 34522,
      "id": 12514,
      "sell_average": 31655,
      "members": true,
      "buy_average": 29504,
      "name": "Explorer backpack",
      "sp": 1550
    },
    "12516": {
      "overall_average": 2645,
      "id": 12516,
      "sell_average": 2645,
      "members": true,
      "buy_average": 2645,
      "name": "Pith helmet",
      "sp": 860
    },
    "12518": {
      "overall_average": 6259,
      "id": 12518,
      "sell_average": 6259,
      "members": true,
      "buy_average": 0,
      "name": "Green dragon mask",
      "sp": 10000
    },
    "12520": {
      "overall_average": 10000,
      "id": 12520,
      "sell_average": 7328,
      "members": true,
      "buy_average": 6438,
      "name": "Blue dragon mask",
      "sp": 10000
    },
    "12522": {
      "overall_average": 0,
      "id": 12522,
      "sell_average": 7021,
      "members": true,
      "buy_average": 7021,
      "name": "Red dragon mask",
      "sp": 10000
    },
    "12524": {
      "overall_average": 17200,
      "id": 12524,
      "sell_average": 14599,
      "members": true,
      "buy_average": 13999,
      "name": "Black dragon mask",
      "sp": 10000
    },
    "12526": {
      "overall_average": 0,
      "id": 12526,
      "sell_average": 1719085,
      "members": true,
      "buy_average": 1719085,
      "name": "Fury ornament kit",
      "sp": 5000
    },
    "12528": {
      "overall_average": 0,
      "id": 12528,
      "sell_average": 15728,
      "members": true,
      "buy_average": 15728,
      "name": "Dark infinity colour kit",
      "sp": 5000
    },
    "12530": {
      "overall_average": 0,
      "id": 12530,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Light infinity colour kit",
      "sp": 5000
    },
    "12532": {
      "overall_average": 0,
      "id": 12532,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon sq shield ornament kit",
      "sp": 5000
    },
    "12534": {
      "overall_average": 44999,
      "id": 12534,
      "sell_average": 44328,
      "members": true,
      "buy_average": 43658,
      "name": "Dragon chainbody ornament kit",
      "sp": 5000
    },
    "12536": {
      "overall_average": 0,
      "id": 12536,
      "sell_average": 99096,
      "members": true,
      "buy_average": 99096,
      "name": "Dragon legs/skirt ornament kit",
      "sp": 5000
    },
    "12538": {
      "overall_average": 0,
      "id": 12538,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon full helm ornament kit",
      "sp": 5000
    },
    "12540": {
      "overall_average": 28855,
      "id": 12540,
      "sell_average": 28134,
      "members": true,
      "buy_average": 27413,
      "name": "Deerstalker",
      "sp": 2300
    },
    "12596": {
      "overall_average": 8419011,
      "id": 12596,
      "sell_average": 8378505,
      "members": true,
      "buy_average": 8338000,
      "name": "Rangers' tunic",
      "sp": 12000
    },
    "12598": {
      "overall_average": 431689,
      "id": 12598,
      "sell_average": 426091,
      "members": true,
      "buy_average": 418004,
      "name": "Holy sandals",
      "sp": 2000
    },
    "12601": {
      "overall_average": 9899997,
      "id": 12601,
      "sell_average": 9899997,
      "members": true,
      "buy_average": 9899997,
      "name": "Ring of the gods",
      "sp": 50000
    },
    "12603": {
      "overall_average": 3725251,
      "id": 12603,
      "sell_average": 3694725,
      "members": true,
      "buy_average": 3679462,
      "name": "Tyrannical ring",
      "sp": 50000
    },
    "12605": {
      "overall_average": 1950000,
      "id": 12605,
      "sell_average": 1943328,
      "members": true,
      "buy_average": 1939992,
      "name": "Treasonous ring",
      "sp": 50000
    },
    "12613": {
      "overall_average": 0,
      "id": 12613,
      "sell_average": 2235,
      "members": true,
      "buy_average": 2235,
      "name": "Bandos page 1",
      "sp": 400
    },
    "12614": {
      "overall_average": 0,
      "id": 12614,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bandos page 2",
      "sp": 400
    },
    "12615": {
      "overall_average": 0,
      "id": 12615,
      "sell_average": 1385,
      "members": true,
      "buy_average": 1385,
      "name": "Bandos page 3",
      "sp": 400
    },
    "12616": {
      "overall_average": 0,
      "id": 12616,
      "sell_average": 1493,
      "members": true,
      "buy_average": 1493,
      "name": "Bandos page 4",
      "sp": 400
    },
    "12617": {
      "overall_average": 164000,
      "id": 12617,
      "sell_average": 142685,
      "members": true,
      "buy_average": 132027,
      "name": "Armadyl page 1",
      "sp": 400
    },
    "12618": {
      "overall_average": 252499,
      "id": 12618,
      "sell_average": 239800,
      "members": true,
      "buy_average": 231334,
      "name": "Armadyl page 2",
      "sp": 400
    },
    "12619": {
      "overall_average": 160000,
      "id": 12619,
      "sell_average": 161666,
      "members": true,
      "buy_average": 162500,
      "name": "Armadyl page 3",
      "sp": 400
    },
    "12620": {
      "overall_average": 247773,
      "id": 12620,
      "sell_average": 248886,
      "members": true,
      "buy_average": 248886,
      "name": "Armadyl page 4",
      "sp": 400
    },
    "12621": {
      "overall_average": 141249,
      "id": 12621,
      "sell_average": 141381,
      "members": true,
      "buy_average": 141779,
      "name": "Ancient page 1",
      "sp": 400
    },
    "12622": {
      "overall_average": 102307,
      "id": 12622,
      "sell_average": 101273,
      "members": true,
      "buy_average": 98583,
      "name": "Ancient page 2",
      "sp": 400
    },
    "12623": {
      "overall_average": 378167,
      "id": 12623,
      "sell_average": 373560,
      "members": true,
      "buy_average": 363579,
      "name": "Ancient page 3",
      "sp": 400
    },
    "12624": {
      "overall_average": 144572,
      "id": 12624,
      "sell_average": 143000,
      "members": true,
      "buy_average": 139857,
      "name": "Ancient page 4",
      "sp": 400
    },
    "12625": {
      "overall_average": 5409,
      "id": 12625,
      "sell_average": 5409,
      "members": true,
      "buy_average": 5410,
      "name": "Stamina potion(4)",
      "sp": 400
    },
    "12627": {
      "overall_average": 4109,
      "id": 12627,
      "sell_average": 4089,
      "members": true,
      "buy_average": 4070,
      "name": "Stamina potion(3)",
      "sp": 300
    },
    "12629": {
      "overall_average": 3009,
      "id": 12629,
      "sell_average": 3029,
      "members": true,
      "buy_average": 3035,
      "name": "Stamina potion(2)",
      "sp": 200
    },
    "12631": {
      "overall_average": 1669,
      "id": 12631,
      "sell_average": 1641,
      "members": true,
      "buy_average": 1563,
      "name": "Stamina potion(1)",
      "sp": 100
    },
    "12633": {
      "overall_average": 0,
      "id": 12633,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Stamina mix(2)",
      "sp": 160
    },
    "12635": {
      "overall_average": 0,
      "id": 12635,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Stamina mix(1)",
      "sp": 90
    },
    "12640": {
      "overall_average": 1006,
      "id": 12640,
      "sell_average": 1005,
      "members": true,
      "buy_average": 1004,
      "name": "Amylase crystal",
      "sp": 20
    },
    "12642": {
      "overall_average": 10474,
      "id": 12642,
      "sell_average": 10356,
      "members": true,
      "buy_average": 10187,
      "name": "Lumberyard teleport",
      "sp": 10
    },
    "12695": {
      "overall_average": 15629,
      "id": 12695,
      "sell_average": 15617,
      "members": true,
      "buy_average": 15604,
      "name": "Super combat potion(4)",
      "sp": 250
    },
    "12697": {
      "overall_average": 12715,
      "id": 12697,
      "sell_average": 12469,
      "members": true,
      "buy_average": 12299,
      "name": "Super combat potion(3)",
      "sp": 170
    },
    "12699": {
      "overall_average": 8008,
      "id": 12699,
      "sell_average": 7934,
      "members": true,
      "buy_average": 7700,
      "name": "Super combat potion(2)",
      "sp": 90
    },
    "12701": {
      "overall_average": 4476,
      "id": 12701,
      "sell_average": 4327,
      "members": true,
      "buy_average": 4060,
      "name": "Super combat potion(1)",
      "sp": 40
    },
    "12746": {
      "overall_average": 141782,
      "id": 12746,
      "sell_average": 141051,
      "members": true,
      "buy_average": 140065,
      "name": "Mysterious emblem",
      "sp": 50000
    },
    "12757": {
      "overall_average": 127865,
      "id": 12757,
      "sell_average": 127865,
      "members": true,
      "buy_average": 0,
      "name": "Blue dark bow paint",
      "sp": 1
    },
    "12759": {
      "overall_average": 149999,
      "id": 12759,
      "sell_average": 149999,
      "members": true,
      "buy_average": 0,
      "name": "Green dark bow paint",
      "sp": 1
    },
    "12761": {
      "overall_average": 0,
      "id": 12761,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Yellow dark bow paint",
      "sp": 1
    },
    "12763": {
      "overall_average": 136000,
      "id": 12763,
      "sell_average": 136000,
      "members": true,
      "buy_average": 0,
      "name": "White dark bow paint",
      "sp": 1
    },
    "12769": {
      "overall_average": 126195,
      "id": 12769,
      "sell_average": 126195,
      "members": true,
      "buy_average": 0,
      "name": "Frozen whip mix",
      "sp": 1
    },
    "12771": {
      "overall_average": 119000,
      "id": 12771,
      "sell_average": 119000,
      "members": true,
      "buy_average": 0,
      "name": "Volcanic whip mix",
      "sp": 1
    },
    "12775": {
      "overall_average": 2297,
      "id": 12775,
      "sell_average": 2289,
      "members": true,
      "buy_average": 2250,
      "name": "Annakarl teleport",
      "sp": 1
    },
    "12776": {
      "overall_average": 2301,
      "id": 12776,
      "sell_average": 2301,
      "members": true,
      "buy_average": 0,
      "name": "Carrallangar teleport",
      "sp": 1
    },
    "12777": {
      "overall_average": 1828,
      "id": 12777,
      "sell_average": 1828,
      "members": true,
      "buy_average": 1828,
      "name": "Dareeyak teleport",
      "sp": 1
    },
    "12778": {
      "overall_average": 2178,
      "id": 12778,
      "sell_average": 2178,
      "members": true,
      "buy_average": 0,
      "name": "Ghorrock teleport",
      "sp": 1
    },
    "12779": {
      "overall_average": 2221,
      "id": 12779,
      "sell_average": 2220,
      "members": true,
      "buy_average": 2107,
      "name": "Kharyrll teleport",
      "sp": 1
    },
    "12780": {
      "overall_average": 0,
      "id": 12780,
      "sell_average": 1557,
      "members": true,
      "buy_average": 1557,
      "name": "Lassar teleport",
      "sp": 1
    },
    "12781": {
      "overall_average": 2054,
      "id": 12781,
      "sell_average": 2054,
      "members": true,
      "buy_average": 0,
      "name": "Paddewwa teleport",
      "sp": 1
    },
    "12782": {
      "overall_average": 0,
      "id": 12782,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Senntisten teleport",
      "sp": 1
    },
    "12783": {
      "overall_average": 15590,
      "id": 12783,
      "sell_average": 15590,
      "members": true,
      "buy_average": 0,
      "name": "Ring of wealth scroll",
      "sp": 5000
    },
    "12786": {
      "overall_average": 26232,
      "id": 12786,
      "sell_average": 23795,
      "members": true,
      "buy_average": 21650,
      "name": "Magic shortbow scroll",
      "sp": 5000
    },
    "12789": {
      "overall_average": 24104,
      "id": 12789,
      "sell_average": 23999,
      "members": true,
      "buy_average": 23894,
      "name": "Clue box",
      "sp": 10
    },
    "12798": {
      "overall_average": 0,
      "id": 12798,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steam staff upgrade kit",
      "sp": 1500
    },
    "12800": {
      "overall_average": 71884,
      "id": 12800,
      "sell_average": 71884,
      "members": true,
      "buy_average": 0,
      "name": "Dragon pickaxe upgrade kit",
      "sp": 1600
    },
    "12802": {
      "overall_average": 84500,
      "id": 12802,
      "sell_average": 84500,
      "members": true,
      "buy_average": 0,
      "name": "Ward upgrade kit",
      "sp": 1500
    },
    "12804": {
      "overall_average": 4979999,
      "id": 12804,
      "sell_average": 4875891,
      "members": true,
      "buy_average": 4855070,
      "name": "Saradomin's tear",
      "sp": 40000
    },
    "12817": {
      "overall_average": 594239463,
      "id": 12817,
      "sell_average": 593950268,
      "members": true,
      "buy_average": 593612874,
      "name": "Elysian spirit shield",
      "sp": 2000000
    },
    "12819": {
      "overall_average": 0,
      "id": 12819,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Elysian sigil",
      "sp": 750000
    },
    "12821": {
      "overall_average": 56765500,
      "id": 12821,
      "sell_average": 56743700,
      "members": true,
      "buy_average": 56729166,
      "name": "Spectral spirit shield",
      "sp": 2000000
    },
    "12823": {
      "overall_average": 0,
      "id": 12823,
      "sell_average": 55101000,
      "members": true,
      "buy_average": 55101000,
      "name": "Spectral sigil",
      "sp": 750000
    },
    "12825": {
      "overall_average": 119958178,
      "id": 12825,
      "sell_average": 119934223,
      "members": true,
      "buy_average": 119911980,
      "name": "Arcane spirit shield",
      "sp": 2000000
    },
    "12827": {
      "overall_average": 0,
      "id": 12827,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Arcane sigil",
      "sp": 750000
    },
    "12829": {
      "overall_average": 117877,
      "id": 12829,
      "sell_average": 114300,
      "members": true,
      "buy_average": 111505,
      "name": "Spirit shield",
      "sp": 70000
    },
    "12831": {
      "overall_average": 727934,
      "id": 12831,
      "sell_average": 725971,
      "members": true,
      "buy_average": 722536,
      "name": "Blessed spirit shield",
      "sp": 1200000
    },
    "12833": {
      "overall_average": 0,
      "id": 12833,
      "sell_average": 582507,
      "members": true,
      "buy_average": 582507,
      "name": "Holy elixir",
      "sp": 750000
    },
    "12846": {
      "overall_average": 2021248,
      "id": 12846,
      "sell_average": 2021248,
      "members": true,
      "buy_average": 0,
      "name": "Bounty teleport scroll",
      "sp": 30000
    },
    "12849": {
      "overall_average": 62063,
      "id": 12849,
      "sell_average": 62063,
      "members": true,
      "buy_average": 0,
      "name": "Granite clamp",
      "sp": 5000
    },
    "12851": {
      "overall_average": 129371,
      "id": 12851,
      "sell_average": 126717,
      "members": true,
      "buy_average": 118755,
      "name": "Amulet of the damned (full)",
      "sp": 58001
    },
    "12863": {
      "overall_average": 762757,
      "id": 12863,
      "sell_average": 759137,
      "members": true,
      "buy_average": 756505,
      "name": "Dwarf cannon set",
      "sp": 600000
    },
    "12865": {
      "overall_average": 8169,
      "id": 12865,
      "sell_average": 7911,
      "members": false,
      "buy_average": 7854,
      "name": "Green dragonhide set",
      "sp": 5000
    },
    "12867": {
      "overall_average": 13273,
      "id": 12867,
      "sell_average": 12914,
      "members": true,
      "buy_average": 12770,
      "name": "Blue dragonhide set",
      "sp": 5000
    },
    "12869": {
      "overall_average": 16273,
      "id": 12869,
      "sell_average": 15997,
      "members": true,
      "buy_average": 15824,
      "name": "Red dragonhide set",
      "sp": 5000
    },
    "12871": {
      "overall_average": 18226,
      "id": 12871,
      "sell_average": 18222,
      "members": true,
      "buy_average": 18150,
      "name": "Black dragonhide set",
      "sp": 5000
    },
    "12873": {
      "overall_average": 4169176,
      "id": 12873,
      "sell_average": 4156264,
      "members": true,
      "buy_average": 4144786,
      "name": "Guthan's armour set",
      "sp": 400000
    },
    "12875": {
      "overall_average": 1973469,
      "id": 12875,
      "sell_average": 1965042,
      "members": true,
      "buy_average": 1948187,
      "name": "Verac's armour set",
      "sp": 400000
    },
    "12877": {
      "overall_average": 3538650,
      "id": 12877,
      "sell_average": 3536986,
      "members": true,
      "buy_average": 3534144,
      "name": "Dharok's armour set",
      "sp": 400000
    },
    "12879": {
      "overall_average": 779998,
      "id": 12879,
      "sell_average": 775747,
      "members": true,
      "buy_average": 775360,
      "name": "Torag's armour set",
      "sp": 400000
    },
    "12881": {
      "overall_average": 3417728,
      "id": 12881,
      "sell_average": 3417319,
      "members": true,
      "buy_average": 3416500,
      "name": "Ahrim's armour set",
      "sp": 200000
    },
    "12883": {
      "overall_average": 2655740,
      "id": 12883,
      "sell_average": 2657844,
      "members": true,
      "buy_average": 2658546,
      "name": "Karil's armour set",
      "sp": 200000
    },
    "12885": {
      "overall_average": 0,
      "id": 12885,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Jar of sand",
      "sp": 1
    },
    "12900": {
      "overall_average": 4157347,
      "id": 12900,
      "sell_average": 4154742,
      "members": true,
      "buy_average": 4150574,
      "name": "Uncharged toxic trident",
      "sp": 78000
    },
    "12902": {
      "overall_average": 10855821,
      "id": 12902,
      "sell_average": 10840266,
      "members": true,
      "buy_average": 10824710,
      "name": "Toxic staff (uncharged)",
      "sp": 1000006
    },
    "12905": {
      "overall_average": 2700,
      "id": 12905,
      "sell_average": 2729,
      "members": true,
      "buy_average": 2778,
      "name": "Anti-venom(4)",
      "sp": 440
    },
    "12907": {
      "overall_average": 0,
      "id": 12907,
      "sell_average": 2874,
      "members": true,
      "buy_average": 2874,
      "name": "Anti-venom(3)",
      "sp": 330
    },
    "12909": {
      "overall_average": 0,
      "id": 12909,
      "sell_average": 1377,
      "members": true,
      "buy_average": 1377,
      "name": "Anti-venom(2)",
      "sp": 220
    },
    "12911": {
      "overall_average": 795,
      "id": 12911,
      "sell_average": 1059,
      "members": true,
      "buy_average": 1085,
      "name": "Anti-venom(1)",
      "sp": 110
    },
    "12913": {
      "overall_average": 13581,
      "id": 12913,
      "sell_average": 13558,
      "members": true,
      "buy_average": 13515,
      "name": "Anti-venom+(4)",
      "sp": 444
    },
    "12915": {
      "overall_average": 0,
      "id": 12915,
      "sell_average": 10117,
      "members": true,
      "buy_average": 10117,
      "name": "Anti-venom+(3)",
      "sp": 333
    },
    "12917": {
      "overall_average": 8600,
      "id": 12917,
      "sell_average": 8600,
      "members": true,
      "buy_average": 8600,
      "name": "Anti-venom+(2)",
      "sp": 222
    },
    "12919": {
      "overall_average": 0,
      "id": 12919,
      "sell_average": 3415,
      "members": true,
      "buy_average": 3415,
      "name": "Anti-venom+(1)",
      "sp": 111
    },
    "12922": {
      "overall_average": 4070326,
      "id": 12922,
      "sell_average": 4070839,
      "members": true,
      "buy_average": 4071237,
      "name": "Tanzanite fang",
      "sp": 110000
    },
    "12924": {
      "overall_average": 4106160,
      "id": 12924,
      "sell_average": 4103903,
      "members": true,
      "buy_average": 4101333,
      "name": "Toxic blowpipe (empty)",
      "sp": 120000
    },
    "12927": {
      "overall_average": 4044090,
      "id": 12927,
      "sell_average": 4043527,
      "members": true,
      "buy_average": 4042026,
      "name": "Serpentine visage",
      "sp": 105000
    },
    "12929": {
      "overall_average": 4071113,
      "id": 12929,
      "sell_average": 4066202,
      "members": true,
      "buy_average": 4061619,
      "name": "Serpentine helm (uncharged)",
      "sp": 110000
    },
    "12932": {
      "overall_average": 4047558,
      "id": 12932,
      "sell_average": 4047743,
      "members": true,
      "buy_average": 4048078,
      "name": "Magic fang",
      "sp": 102000
    },
    "12934": {
      "overall_average": 203,
      "id": 12934,
      "sell_average": 203,
      "members": true,
      "buy_average": 202,
      "name": "Zulrah's scales",
      "sp": 20
    },
    "12936": {
      "overall_average": 29845,
      "id": 12936,
      "sell_average": 29845,
      "members": true,
      "buy_average": 0,
      "name": "Jar of swamp",
      "sp": 1
    },
    "12938": {
      "overall_average": 10328,
      "id": 12938,
      "sell_average": 10326,
      "members": true,
      "buy_average": 10324,
      "name": "Zul-andra teleport",
      "sp": 10
    },
    "12960": {
      "overall_average": 190,
      "id": 12960,
      "sell_average": 175,
      "members": false,
      "buy_average": 168,
      "name": "Bronze set (lg)",
      "sp": 200
    },
    "12962": {
      "overall_average": 250,
      "id": 12962,
      "sell_average": 250,
      "members": false,
      "buy_average": 0,
      "name": "Bronze set (sk)",
      "sp": 200
    },
    "12964": {
      "overall_average": 56333,
      "id": 12964,
      "sell_average": 56333,
      "members": false,
      "buy_average": 0,
      "name": "Bronze trimmed set (lg)",
      "sp": 200
    },
    "12966": {
      "overall_average": 0,
      "id": 12966,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Bronze trimmed set (sk)",
      "sp": 200
    },
    "12968": {
      "overall_average": 284827,
      "id": 12968,
      "sell_average": 284827,
      "members": false,
      "buy_average": 0,
      "name": "Bronze gold-trimmed set (lg)",
      "sp": 200
    },
    "12970": {
      "overall_average": 0,
      "id": 12970,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Bronze gold-trimmed set (sk)",
      "sp": 200
    },
    "12972": {
      "overall_average": 750,
      "id": 12972,
      "sell_average": 716,
      "members": false,
      "buy_average": 581,
      "name": "Iron set (lg)",
      "sp": 900
    },
    "12974": {
      "overall_average": 3490,
      "id": 12974,
      "sell_average": 3490,
      "members": false,
      "buy_average": 0,
      "name": "Iron set (sk)",
      "sp": 900
    },
    "12976": {
      "overall_average": 453492,
      "id": 12976,
      "sell_average": 453492,
      "members": false,
      "buy_average": 453492,
      "name": "Iron trimmed set (lg)",
      "sp": 900
    },
    "12978": {
      "overall_average": 0,
      "id": 12978,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Iron trimmed set (sk)",
      "sp": 900
    },
    "12980": {
      "overall_average": 1080000,
      "id": 12980,
      "sell_average": 1080000,
      "members": false,
      "buy_average": 0,
      "name": "Iron gold-trimmed set (lg)",
      "sp": 900
    },
    "12982": {
      "overall_average": 0,
      "id": 12982,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Iron gold-trimmed set (sk)",
      "sp": 900
    },
    "12984": {
      "overall_average": 3890,
      "id": 12984,
      "sell_average": 2929,
      "members": false,
      "buy_average": 2304,
      "name": "Steel set (lg)",
      "sp": 1400
    },
    "12986": {
      "overall_average": 0,
      "id": 12986,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Steel set (sk)",
      "sp": 1400
    },
    "12988": {
      "overall_average": 8694,
      "id": 12988,
      "sell_average": 8320,
      "members": false,
      "buy_average": 7721,
      "name": "Black set (lg)",
      "sp": 4500
    },
    "12990": {
      "overall_average": 0,
      "id": 12990,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black set (sk)",
      "sp": 4500
    },
    "12992": {
      "overall_average": 107817,
      "id": 12992,
      "sell_average": 105397,
      "members": false,
      "buy_average": 102978,
      "name": "Black trimmed set (lg)",
      "sp": 4500
    },
    "12994": {
      "overall_average": 0,
      "id": 12994,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black trimmed set (sk)",
      "sp": 4500
    },
    "12996": {
      "overall_average": 0,
      "id": 12996,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black gold-trimmed set (lg)",
      "sp": 4500
    },
    "12998": {
      "overall_average": 0,
      "id": 12998,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Black gold-trimmed set (sk)",
      "sp": 4500
    },
    "13000": {
      "overall_average": 6809,
      "id": 13000,
      "sell_average": 6781,
      "members": false,
      "buy_average": 6250,
      "name": "Mithril set (lg)",
      "sp": 5000
    },
    "13002": {
      "overall_average": 9823,
      "id": 13002,
      "sell_average": 9823,
      "members": false,
      "buy_average": 0,
      "name": "Mithril set (sk)",
      "sp": 5000
    },
    "13004": {
      "overall_average": 0,
      "id": 13004,
      "sell_average": 18047,
      "members": false,
      "buy_average": 18047,
      "name": "Mithril trimmed set (lg)",
      "sp": 5000
    },
    "13006": {
      "overall_average": 0,
      "id": 13006,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Mithril trimmed set (sk)",
      "sp": 5000
    },
    "13008": {
      "overall_average": 0,
      "id": 13008,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Mithril gold-trimmed set (lg)",
      "sp": 5000
    },
    "13010": {
      "overall_average": 0,
      "id": 13010,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Mithril gold-trimmed set (sk)",
      "sp": 5000
    },
    "13012": {
      "overall_average": 19044,
      "id": 13012,
      "sell_average": 18995,
      "members": false,
      "buy_average": 18753,
      "name": "Adamant set (lg)",
      "sp": 8000
    },
    "13014": {
      "overall_average": 0,
      "id": 13014,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Adamant set (sk)",
      "sp": 8000
    },
    "13016": {
      "overall_average": 0,
      "id": 13016,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Adamant trimmed set (lg)",
      "sp": 8000
    },
    "13018": {
      "overall_average": 0,
      "id": 13018,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Adamant trimmed set (sk)",
      "sp": 8000
    },
    "13020": {
      "overall_average": 96540,
      "id": 13020,
      "sell_average": 96030,
      "members": false,
      "buy_average": 94500,
      "name": "Adamant gold-trimmed set (lg)",
      "sp": 8000
    },
    "13022": {
      "overall_average": 0,
      "id": 13022,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Adamant gold-trimmed set (sk)",
      "sp": 8000
    },
    "13024": {
      "overall_average": 130683,
      "id": 13024,
      "sell_average": 130683,
      "members": false,
      "buy_average": 130683,
      "name": "Rune armour set (lg)",
      "sp": 75000
    },
    "13026": {
      "overall_average": 135000,
      "id": 13026,
      "sell_average": 131944,
      "members": false,
      "buy_average": 130000,
      "name": "Rune armour set (sk)",
      "sp": 75000
    },
    "13028": {
      "overall_average": 0,
      "id": 13028,
      "sell_average": 147474,
      "members": false,
      "buy_average": 147474,
      "name": "Rune trimmed set (lg)",
      "sp": 80000
    },
    "13030": {
      "overall_average": 0,
      "id": 13030,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Rune trimmed set (sk)",
      "sp": 80000
    },
    "13032": {
      "overall_average": 0,
      "id": 13032,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Rune gold-trimmed set (lg)",
      "sp": 80000
    },
    "13034": {
      "overall_average": 231257,
      "id": 13034,
      "sell_average": 231257,
      "members": false,
      "buy_average": 0,
      "name": "Rune gold-trimmed set (sk)",
      "sp": 80000
    },
    "13036": {
      "overall_average": 5971333,
      "id": 13036,
      "sell_average": 5971333,
      "members": false,
      "buy_average": 5971333,
      "name": "Gilded armour set (lg)",
      "sp": 80000
    },
    "13038": {
      "overall_average": 0,
      "id": 13038,
      "sell_average": 3005000,
      "members": false,
      "buy_average": 3005000,
      "name": "Gilded armour set (sk)",
      "sp": 80000
    },
    "13040": {
      "overall_average": 238125,
      "id": 13040,
      "sell_average": 237088,
      "members": false,
      "buy_average": 232942,
      "name": "Saradomin armour set (lg)",
      "sp": 80000
    },
    "13042": {
      "overall_average": 0,
      "id": 13042,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Saradomin armour set (sk)",
      "sp": 80000
    },
    "13044": {
      "overall_average": 0,
      "id": 13044,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Zamorak armour set (lg)",
      "sp": 80000
    },
    "13046": {
      "overall_average": 350000,
      "id": 13046,
      "sell_average": 350000,
      "members": false,
      "buy_average": 0,
      "name": "Zamorak armour set (sk)",
      "sp": 80000
    },
    "13048": {
      "overall_average": 149999,
      "id": 13048,
      "sell_average": 147500,
      "members": false,
      "buy_average": 140004,
      "name": "Guthix armour set (lg)",
      "sp": 80000
    },
    "13050": {
      "overall_average": 170172,
      "id": 13050,
      "sell_average": 170172,
      "members": false,
      "buy_average": 0,
      "name": "Guthix armour set (sk)",
      "sp": 80000
    },
    "13052": {
      "overall_average": 146000,
      "id": 13052,
      "sell_average": 144004,
      "members": false,
      "buy_average": 142009,
      "name": "Armadyl rune armour set (lg)",
      "sp": 80000
    },
    "13054": {
      "overall_average": 0,
      "id": 13054,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Armadyl rune armour set (sk)",
      "sp": 80000
    },
    "13056": {
      "overall_average": 146723,
      "id": 13056,
      "sell_average": 136394,
      "members": false,
      "buy_average": 131230,
      "name": "Bandos rune armour set (lg)",
      "sp": 80000
    },
    "13058": {
      "overall_average": 0,
      "id": 13058,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Bandos rune armour set (sk)",
      "sp": 80000
    },
    "13060": {
      "overall_average": 164600,
      "id": 13060,
      "sell_average": 164600,
      "members": false,
      "buy_average": 0,
      "name": "Ancient rune armour set (lg)",
      "sp": 80000
    },
    "13062": {
      "overall_average": 0,
      "id": 13062,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Ancient rune armour set (sk)",
      "sp": 80000
    },
    "13064": {
      "overall_average": 0,
      "id": 13064,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Combat potion set",
      "sp": 70
    },
    "13066": {
      "overall_average": 4236,
      "id": 13066,
      "sell_average": 4236,
      "members": true,
      "buy_average": 0,
      "name": "Super potion set",
      "sp": 100
    },
    "13149": {
      "overall_average": 15841,
      "id": 13149,
      "sell_average": 15841,
      "members": true,
      "buy_average": 0,
      "name": "Holy book page set",
      "sp": 7000
    },
    "13151": {
      "overall_average": 1644495,
      "id": 13151,
      "sell_average": 1644495,
      "members": true,
      "buy_average": 1644495,
      "name": "Unholy book page set",
      "sp": 7000
    },
    "13153": {
      "overall_average": 32444,
      "id": 13153,
      "sell_average": 27957,
      "members": true,
      "buy_average": 18985,
      "name": "Book of balance page set",
      "sp": 7000
    },
    "13155": {
      "overall_average": 14499,
      "id": 13155,
      "sell_average": 14499,
      "members": true,
      "buy_average": 0,
      "name": "Book of war page set",
      "sp": 7500
    },
    "13157": {
      "overall_average": 1009809,
      "id": 13157,
      "sell_average": 1079299,
      "members": true,
      "buy_average": 1357259,
      "name": "Book of law page set",
      "sp": 7500
    },
    "13159": {
      "overall_average": 863332,
      "id": 13159,
      "sell_average": 863332,
      "members": true,
      "buy_average": 0,
      "name": "Book of darkness page set",
      "sp": 7500
    },
    "13161": {
      "overall_average": 650000,
      "id": 13161,
      "sell_average": 628646,
      "members": true,
      "buy_average": 623308,
      "name": "Zamorak dragonhide set",
      "sp": 9000
    },
    "13163": {
      "overall_average": 642000,
      "id": 13163,
      "sell_average": 642000,
      "members": true,
      "buy_average": 0,
      "name": "Saradomin dragonhide set",
      "sp": 9000
    },
    "13165": {
      "overall_average": 0,
      "id": 13165,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Guthix dragonhide set",
      "sp": 9000
    },
    "13167": {
      "overall_average": 269000,
      "id": 13167,
      "sell_average": 257000,
      "members": true,
      "buy_average": 245000,
      "name": "Bandos dragonhide set",
      "sp": 9500
    },
    "13169": {
      "overall_average": 625000,
      "id": 13169,
      "sell_average": 625000,
      "members": true,
      "buy_average": 0,
      "name": "Armadyl dragonhide set",
      "sp": 9500
    },
    "13171": {
      "overall_average": 276666,
      "id": 13171,
      "sell_average": 261428,
      "members": true,
      "buy_average": 250000,
      "name": "Ancient dragonhide set",
      "sp": 9500
    },
    "13173": {
      "overall_average": 29000,
      "id": 13173,
      "sell_average": 27730,
      "members": false,
      "buy_average": 26460,
      "name": "Partyhat set",
      "sp": 10
    },
    "13175": {
      "overall_average": 13633,
      "id": 13175,
      "sell_average": 13166,
      "members": false,
      "buy_average": 12001,
      "name": "Halloween mask set",
      "sp": 8
    },
    "13190": {
      "overall_average": 3378900,
      "id": 13190,
      "sell_average": 3345127,
      "members": false,
      "buy_average": 3308149,
      "name": "Old school bond",
      "sp": 2000000
    },
    "13227": {
      "overall_average": 3443500,
      "id": 13227,
      "sell_average": 3424251,
      "members": true,
      "buy_average": 3405002,
      "name": "Eternal crystal",
      "sp": 45000
    },
    "13229": {
      "overall_average": 225000,
      "id": 13229,
      "sell_average": 221142,
      "members": true,
      "buy_average": 216000,
      "name": "Pegasian crystal",
      "sp": 45000
    },
    "13231": {
      "overall_average": 0,
      "id": 13231,
      "sell_average": 23400000,
      "members": true,
      "buy_average": 23400000,
      "name": "Primordial crystal",
      "sp": 45000
    },
    "13233": {
      "overall_average": 2039999,
      "id": 13233,
      "sell_average": 2033332,
      "members": true,
      "buy_average": 2000001,
      "name": "Smouldering stone",
      "sp": 45000
    },
    "13235": {
      "overall_average": 4852531,
      "id": 13235,
      "sell_average": 4828371,
      "members": true,
      "buy_average": 4806569,
      "name": "Eternal boots",
      "sp": 75000
    },
    "13237": {
      "overall_average": 33862828,
      "id": 13237,
      "sell_average": 33845906,
      "members": true,
      "buy_average": 33827816,
      "name": "Pegasian boots",
      "sp": 75000
    },
    "13239": {
      "overall_average": 23741535,
      "id": 13239,
      "sell_average": 23723034,
      "members": true,
      "buy_average": 23704944,
      "name": "Primordial boots",
      "sp": 75000
    },
    "13245": {
      "overall_average": 0,
      "id": 13245,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Jar of souls",
      "sp": 1
    },
    "13256": {
      "overall_average": 57225,
      "id": 13256,
      "sell_average": 57225,
      "members": true,
      "buy_average": 0,
      "name": "Saradomin's light",
      "sp": 34600
    },
    "13263": {
      "overall_average": 28323986,
      "id": 13263,
      "sell_average": 28310570,
      "members": true,
      "buy_average": 28297154,
      "name": "Abyssal bludgeon",
      "sp": 260000
    },
    "13265": {
      "overall_average": 7531626,
      "id": 13265,
      "sell_average": 7527347,
      "members": true,
      "buy_average": 7521643,
      "name": "Abyssal dagger",
      "sp": 115001
    },
    "13267": {
      "overall_average": 0,
      "id": 13267,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Abyssal dagger (p)",
      "sp": 115002
    },
    "13269": {
      "overall_average": 0,
      "id": 13269,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Abyssal dagger (p+)",
      "sp": 115003
    },
    "13271": {
      "overall_average": 7591513,
      "id": 13271,
      "sell_average": 7571694,
      "members": true,
      "buy_average": 7555047,
      "name": "Abyssal dagger (p++)",
      "sp": 115004
    },
    "13277": {
      "overall_average": 0,
      "id": 13277,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Jar of miasma",
      "sp": 1
    },
    "13383": {
      "overall_average": 2860,
      "id": 13383,
      "sell_average": 2813,
      "members": true,
      "buy_average": 2602,
      "name": "Xerician fabric",
      "sp": 3
    },
    "13385": {
      "overall_average": 7869,
      "id": 13385,
      "sell_average": 7719,
      "members": true,
      "buy_average": 7599,
      "name": "Xerician hat",
      "sp": 60
    },
    "13387": {
      "overall_average": 15306,
      "id": 13387,
      "sell_average": 13007,
      "members": true,
      "buy_average": 12758,
      "name": "Xerician top",
      "sp": 80
    },
    "13389": {
      "overall_average": 11263,
      "id": 13389,
      "sell_average": 10797,
      "members": true,
      "buy_average": 10075,
      "name": "Xerician robe",
      "sp": 70
    },
    "13391": {
      "overall_average": 14,
      "id": 13391,
      "sell_average": 14,
      "members": true,
      "buy_average": 13,
      "name": "Lizardman fang",
      "sp": 60
    },
    "13421": {
      "overall_average": 4,
      "id": 13421,
      "sell_average": 3,
      "members": true,
      "buy_average": 3,
      "name": "Saltpetre",
      "sp": 5
    },
    "13431": {
      "overall_average": 99,
      "id": 13431,
      "sell_average": 98,
      "members": true,
      "buy_average": 97,
      "name": "Sandworms",
      "sp": 90
    },
    "13439": {
      "overall_average": 1315,
      "id": 13439,
      "sell_average": 1314,
      "members": true,
      "buy_average": 1313,
      "name": "Raw anglerfish",
      "sp": 450
    },
    "13441": {
      "overall_average": 1338,
      "id": 13441,
      "sell_average": 1338,
      "members": true,
      "buy_average": 1338,
      "name": "Anglerfish",
      "sp": 450
    },
    "13448": {
      "overall_average": 1,
      "id": 13448,
      "sell_average": 46,
      "members": true,
      "buy_average": 207,
      "name": "Ensouled goblin head",
      "sp": 52
    },
    "13451": {
      "overall_average": 0,
      "id": 13451,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ensouled monkey head",
      "sp": 104
    },
    "13454": {
      "overall_average": 0,
      "id": 13454,
      "sell_average": 50,
      "members": true,
      "buy_average": 50,
      "name": "Ensouled imp head",
      "sp": 156
    },
    "13457": {
      "overall_average": 0,
      "id": 13457,
      "sell_average": 750,
      "members": true,
      "buy_average": 750,
      "name": "Ensouled minotaur head",
      "sp": 228
    },
    "13460": {
      "overall_average": 0,
      "id": 13460,
      "sell_average": 1264,
      "members": true,
      "buy_average": 1264,
      "name": "Ensouled scorpion head",
      "sp": 247
    },
    "13463": {
      "overall_average": 0,
      "id": 13463,
      "sell_average": 1220,
      "members": true,
      "buy_average": 1220,
      "name": "Ensouled bear head",
      "sp": 260
    },
    "13466": {
      "overall_average": 0,
      "id": 13466,
      "sell_average": 1317,
      "members": true,
      "buy_average": 1317,
      "name": "Ensouled unicorn head",
      "sp": 267
    },
    "13469": {
      "overall_average": 0,
      "id": 13469,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ensouled dog head",
      "sp": 286
    },
    "13472": {
      "overall_average": 202,
      "id": 13472,
      "sell_average": 991,
      "members": true,
      "buy_average": 1203,
      "name": "Ensouled chaos druid head",
      "sp": 299
    },
    "13475": {
      "overall_average": 1551,
      "id": 13475,
      "sell_average": 1547,
      "members": true,
      "buy_average": 1538,
      "name": "Ensouled giant head",
      "sp": 319
    },
    "13478": {
      "overall_average": 1,
      "id": 13478,
      "sell_average": 1534,
      "members": true,
      "buy_average": 1781,
      "name": "Ensouled ogre head",
      "sp": 338
    },
    "13481": {
      "overall_average": 0,
      "id": 13481,
      "sell_average": 2247,
      "members": true,
      "buy_average": 2247,
      "name": "Ensouled elf head",
      "sp": 358
    },
    "13484": {
      "overall_average": 2382,
      "id": 13484,
      "sell_average": 2383,
      "members": true,
      "buy_average": 2387,
      "name": "Ensouled troll head",
      "sp": 384
    },
    "13487": {
      "overall_average": 3100,
      "id": 13487,
      "sell_average": 3083,
      "members": true,
      "buy_average": 3082,
      "name": "Ensouled horror head",
      "sp": 403
    },
    "13490": {
      "overall_average": 0,
      "id": 13490,
      "sell_average": 3380,
      "members": true,
      "buy_average": 3380,
      "name": "Ensouled kalphite head",
      "sp": 433
    },
    "13493": {
      "overall_average": 0,
      "id": 13493,
      "sell_average": 4143,
      "members": true,
      "buy_average": 4143,
      "name": "Ensouled dagannoth head",
      "sp": 455
    },
    "13496": {
      "overall_average": 5172,
      "id": 13496,
      "sell_average": 5108,
      "members": true,
      "buy_average": 4998,
      "name": "Ensouled bloodveld head",
      "sp": 494
    },
    "13499": {
      "overall_average": 0,
      "id": 13499,
      "sell_average": 5045,
      "members": true,
      "buy_average": 5045,
      "name": "Ensouled tzhaar head",
      "sp": 507
    },
    "13502": {
      "overall_average": 0,
      "id": 13502,
      "sell_average": 6022,
      "members": true,
      "buy_average": 6022,
      "name": "Ensouled demon head",
      "sp": 527
    },
    "13505": {
      "overall_average": 0,
      "id": 13505,
      "sell_average": 7060,
      "members": true,
      "buy_average": 7060,
      "name": "Ensouled aviansie head",
      "sp": 553
    },
    "13508": {
      "overall_average": 7652,
      "id": 13508,
      "sell_average": 7617,
      "members": true,
      "buy_average": 7617,
      "name": "Ensouled abyssal head",
      "sp": 585
    },
    "13511": {
      "overall_average": 9880,
      "id": 13511,
      "sell_average": 9817,
      "members": true,
      "buy_average": 9743,
      "name": "Ensouled dragon head",
      "sp": 650
    },
    "13573": {
      "overall_average": 446,
      "id": 13573,
      "sell_average": 421,
      "members": true,
      "buy_average": 410,
      "name": "Dynamite",
      "sp": 100
    },
    "13576": {
      "overall_average": 69317678,
      "id": 13576,
      "sell_average": 69300431,
      "members": true,
      "buy_average": 69285175,
      "name": "Dragon warhammer",
      "sp": 120000
    },
    "13652": {
      "overall_average": 67863610,
      "id": 13652,
      "sell_average": 67763315,
      "members": true,
      "buy_average": 67690023,
      "name": "Dragon claws",
      "sp": 205000
    },
    "13657": {
      "overall_average": 0,
      "id": 13657,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Grape seed",
      "sp": 74
    },
    "19478": {
      "overall_average": 668077,
      "id": 19478,
      "sell_average": 664706,
      "members": true,
      "buy_average": 662112,
      "name": "Light ballista",
      "sp": 125000
    },
    "19481": {
      "overall_average": 709804,
      "id": 19481,
      "sell_average": 709562,
      "members": true,
      "buy_average": 709340,
      "name": "Heavy ballista",
      "sp": 950000
    },
    "19484": {
      "overall_average": 1285,
      "id": 19484,
      "sell_average": 1267,
      "members": true,
      "buy_average": 1265,
      "name": "Dragon javelin",
      "sp": 450
    },
    "19486": {
      "overall_average": 0,
      "id": 19486,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon javelin(p)",
      "sp": 450
    },
    "19488": {
      "overall_average": 0,
      "id": 19488,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon javelin(p+)",
      "sp": 450
    },
    "19490": {
      "overall_average": 2396,
      "id": 19490,
      "sell_average": 2396,
      "members": true,
      "buy_average": 0,
      "name": "Dragon javelin(p++)",
      "sp": 450
    },
    "19493": {
      "overall_average": 0,
      "id": 19493,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Zenyte",
      "sp": 75000
    },
    "19496": {
      "overall_average": 0,
      "id": 19496,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Uncut zenyte",
      "sp": 75000
    },
    "19501": {
      "overall_average": 0,
      "id": 19501,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Zenyte amulet (u)",
      "sp": 75000
    },
    "19529": {
      "overall_average": 11635000,
      "id": 19529,
      "sell_average": 11627000,
      "members": true,
      "buy_average": 11624334,
      "name": "Zenyte shard",
      "sp": 75000
    },
    "19532": {
      "overall_average": 0,
      "id": 19532,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Zenyte bracelet",
      "sp": 201000
    },
    "19535": {
      "overall_average": 0,
      "id": 19535,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Zenyte necklace",
      "sp": 202000
    },
    "19538": {
      "overall_average": 0,
      "id": 19538,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Zenyte ring",
      "sp": 201000
    },
    "19541": {
      "overall_average": 0,
      "id": 19541,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Zenyte amulet",
      "sp": 202000
    },
    "19544": {
      "overall_average": 14684835,
      "id": 19544,
      "sell_average": 14656382,
      "members": true,
      "buy_average": 14619561,
      "name": "Tormented bracelet",
      "sp": 201000
    },
    "19547": {
      "overall_average": 14664439,
      "id": 19547,
      "sell_average": 14659935,
      "members": true,
      "buy_average": 14654507,
      "name": "Necklace of anguish",
      "sp": 202000
    },
    "19550": {
      "overall_average": 14688579,
      "id": 19550,
      "sell_average": 14682073,
      "members": true,
      "buy_average": 14678070,
      "name": "Ring of suffering",
      "sp": 201000
    },
    "19553": {
      "overall_average": 14586430,
      "id": 19553,
      "sell_average": 14581894,
      "members": true,
      "buy_average": 14576439,
      "name": "Amulet of torture",
      "sp": 202000
    },
    "19570": {
      "overall_average": 0,
      "id": 19570,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bronze javelin heads",
      "sp": 25
    },
    "19572": {
      "overall_average": 0,
      "id": 19572,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Iron javelin heads",
      "sp": 35
    },
    "19574": {
      "overall_average": 0,
      "id": 19574,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Steel javelin heads",
      "sp": 90
    },
    "19576": {
      "overall_average": 0,
      "id": 19576,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mithril javelin heads",
      "sp": 165
    },
    "19578": {
      "overall_average": 0,
      "id": 19578,
      "sell_average": 226,
      "members": true,
      "buy_average": 226,
      "name": "Adamant javelin heads",
      "sp": 440
    },
    "19580": {
      "overall_average": 661,
      "id": 19580,
      "sell_average": 658,
      "members": true,
      "buy_average": 654,
      "name": "Rune javelin heads",
      "sp": 1350
    },
    "19582": {
      "overall_average": 1443,
      "id": 19582,
      "sell_average": 1416,
      "members": true,
      "buy_average": 1333,
      "name": "Dragon javelin heads",
      "sp": 1950
    },
    "19584": {
      "overall_average": 1,
      "id": 19584,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Javelin shaft",
      "sp": 1
    },
    "19586": {
      "overall_average": 0,
      "id": 19586,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Light frame",
      "sp": 50000
    },
    "19589": {
      "overall_average": 0,
      "id": 19589,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Heavy frame",
      "sp": 50000
    },
    "19592": {
      "overall_average": 0,
      "id": 19592,
      "sell_average": 28710,
      "members": true,
      "buy_average": 28710,
      "name": "Ballista limbs",
      "sp": 50000
    },
    "19595": {
      "overall_average": 0,
      "id": 19595,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Incomplete light ballista",
      "sp": 50000
    },
    "19598": {
      "overall_average": 0,
      "id": 19598,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Incomplete heavy ballista",
      "sp": 50000
    },
    "19601": {
      "overall_average": 0,
      "id": 19601,
      "sell_average": 29053,
      "members": true,
      "buy_average": 29053,
      "name": "Ballista spring",
      "sp": 50000
    },
    "19604": {
      "overall_average": 0,
      "id": 19604,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Unstrung light ballista",
      "sp": 50000
    },
    "19607": {
      "overall_average": 0,
      "id": 19607,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Unstrung heavy ballista",
      "sp": 50000
    },
    "19610": {
      "overall_average": 0,
      "id": 19610,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Monkey tail",
      "sp": 50000
    },
    "19613": {
      "overall_average": 1199,
      "id": 19613,
      "sell_average": 1199,
      "members": true,
      "buy_average": 0,
      "name": "Lumbridge graveyard teleport",
      "sp": 1
    },
    "19615": {
      "overall_average": 2775,
      "id": 19615,
      "sell_average": 2404,
      "members": true,
      "buy_average": 2060,
      "name": "Draynor manor teleport",
      "sp": 1
    },
    "19617": {
      "overall_average": 1514,
      "id": 19617,
      "sell_average": 1514,
      "members": true,
      "buy_average": 0,
      "name": "Mind altar teleport",
      "sp": 1
    },
    "19619": {
      "overall_average": 2175,
      "id": 19619,
      "sell_average": 2155,
      "members": true,
      "buy_average": 2124,
      "name": "Salve graveyard teleport",
      "sp": 1
    },
    "19621": {
      "overall_average": 1810,
      "id": 19621,
      "sell_average": 1752,
      "members": true,
      "buy_average": 1660,
      "name": "Fenkenstrain's castle teleport",
      "sp": 1
    },
    "19623": {
      "overall_average": 1872,
      "id": 19623,
      "sell_average": 1872,
      "members": true,
      "buy_average": 1872,
      "name": "West ardougne teleport",
      "sp": 1
    },
    "19625": {
      "overall_average": 2192,
      "id": 19625,
      "sell_average": 2183,
      "members": true,
      "buy_average": 1911,
      "name": "Harmony island teleport",
      "sp": 1
    },
    "19627": {
      "overall_average": 1572,
      "id": 19627,
      "sell_average": 1552,
      "members": true,
      "buy_average": 1507,
      "name": "Cemetery teleport",
      "sp": 1
    },
    "19629": {
      "overall_average": 2839,
      "id": 19629,
      "sell_average": 2803,
      "members": true,
      "buy_average": 2778,
      "name": "Barrows teleport",
      "sp": 1
    },
    "19631": {
      "overall_average": 3159,
      "id": 19631,
      "sell_average": 3132,
      "members": true,
      "buy_average": 2973,
      "name": "Ape atoll teleport",
      "sp": 1
    },
    "19653": {
      "overall_average": 0,
      "id": 19653,
      "sell_average": 979,
      "members": true,
      "buy_average": 979,
      "name": "Golovanova fruit top",
      "sp": 3
    },
    "19656": {
      "overall_average": 0,
      "id": 19656,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Uncooked botanical pie",
      "sp": 16
    },
    "19662": {
      "overall_average": 1798,
      "id": 19662,
      "sell_average": 1798,
      "members": true,
      "buy_average": 0,
      "name": "Botanical pie",
      "sp": 30
    },
    "19665": {
      "overall_average": 0,
      "id": 19665,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Damaged monkey tail",
      "sp": 2
    },
    "19669": {
      "overall_average": 257,
      "id": 19669,
      "sell_average": 256,
      "members": true,
      "buy_average": 254,
      "name": "Redwood logs",
      "sp": 450
    },
    "19672": {
      "overall_average": 0,
      "id": 19672,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Redwood pyre logs",
      "sp": 895
    },
    "19701": {
      "overall_average": 0,
      "id": 19701,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Jar of darkness",
      "sp": 1
    },
    "19707": {
      "overall_average": 21674561,
      "id": 19707,
      "sell_average": 21599748,
      "members": true,
      "buy_average": 21450123,
      "name": "Amulet of eternal glory",
      "sp": 17625
    },
    "19724": {
      "overall_average": 0,
      "id": 19724,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Left eye patch",
      "sp": 2
    },
    "19727": {
      "overall_average": 39960,
      "id": 19727,
      "sell_average": 39960,
      "members": true,
      "buy_average": 0,
      "name": "Double eye patch",
      "sp": 2
    },
    "19912": {
      "overall_average": 2639,
      "id": 19912,
      "sell_average": 2639,
      "members": true,
      "buy_average": 0,
      "name": "Zombie head",
      "sp": 5000
    },
    "19915": {
      "overall_average": 0,
      "id": 19915,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Cyclops head",
      "sp": 5000
    },
    "19918": {
      "overall_average": 4000,
      "id": 19918,
      "sell_average": 3425,
      "members": true,
      "buy_average": 3233,
      "name": "Nunchaku",
      "sp": 6000
    },
    "19921": {
      "overall_average": 804013,
      "id": 19921,
      "sell_average": 790520,
      "members": true,
      "buy_average": 774329,
      "name": "Ancient d'hide boots",
      "sp": 9300
    },
    "19924": {
      "overall_average": 773118,
      "id": 19924,
      "sell_average": 775077,
      "members": true,
      "buy_average": 779241,
      "name": "Bandos d'hide boots",
      "sp": 9300
    },
    "19927": {
      "overall_average": 814061,
      "id": 19927,
      "sell_average": 809773,
      "members": true,
      "buy_average": 804771,
      "name": "Guthix d'hide boots",
      "sp": 9300
    },
    "19930": {
      "overall_average": 1181498,
      "id": 19930,
      "sell_average": 1174964,
      "members": true,
      "buy_average": 1162712,
      "name": "Armadyl d'hide boots",
      "sp": 9300
    },
    "19933": {
      "overall_average": 898340,
      "id": 19933,
      "sell_average": 879723,
      "members": true,
      "buy_average": 871744,
      "name": "Saradomin d'hide boots",
      "sp": 9300
    },
    "19936": {
      "overall_average": 973056,
      "id": 19936,
      "sell_average": 970143,
      "members": true,
      "buy_average": 962567,
      "name": "Zamorak d'hide boots",
      "sp": 9300
    },
    "19943": {
      "overall_average": 1111,
      "id": 19943,
      "sell_average": 1111,
      "members": true,
      "buy_average": 0,
      "name": "Arceuus house scarf",
      "sp": 10000
    },
    "19946": {
      "overall_average": 0,
      "id": 19946,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Hosidius house scarf",
      "sp": 10000
    },
    "19949": {
      "overall_average": 0,
      "id": 19949,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Lovakengj house scarf",
      "sp": 10000
    },
    "19952": {
      "overall_average": 0,
      "id": 19952,
      "sell_average": 7937,
      "members": true,
      "buy_average": 7937,
      "name": "Piscarilius house scarf",
      "sp": 10000
    },
    "19955": {
      "overall_average": 0,
      "id": 19955,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Shayzien house scarf",
      "sp": 10000
    },
    "19958": {
      "overall_average": 0,
      "id": 19958,
      "sell_average": 2283003,
      "members": true,
      "buy_average": 2283003,
      "name": "Dark tuxedo jacket",
      "sp": 10000
    },
    "19961": {
      "overall_average": 0,
      "id": 19961,
      "sell_average": 275000,
      "members": true,
      "buy_average": 275000,
      "name": "Dark tuxedo cuffs",
      "sp": 3000
    },
    "19964": {
      "overall_average": 0,
      "id": 19964,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dark trousers",
      "sp": 6000
    },
    "19967": {
      "overall_average": 0,
      "id": 19967,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dark tuxedo shoes",
      "sp": 3000
    },
    "19970": {
      "overall_average": 0,
      "id": 19970,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dark bow tie",
      "sp": 5000
    },
    "19973": {
      "overall_average": 0,
      "id": 19973,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Light tuxedo jacket",
      "sp": 10000
    },
    "19976": {
      "overall_average": 0,
      "id": 19976,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Light tuxedo cuffs",
      "sp": 3000
    },
    "19979": {
      "overall_average": 0,
      "id": 19979,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Light trousers",
      "sp": 6000
    },
    "19982": {
      "overall_average": 0,
      "id": 19982,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Light tuxedo shoes",
      "sp": 3000
    },
    "19985": {
      "overall_average": 0,
      "id": 19985,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Light bow tie",
      "sp": 5000
    },
    "19988": {
      "overall_average": 0,
      "id": 19988,
      "sell_average": 26001,
      "members": true,
      "buy_average": 26001,
      "name": "Blacksmith's helm",
      "sp": 3000
    },
    "19991": {
      "overall_average": 92584,
      "id": 19991,
      "sell_average": 85056,
      "members": true,
      "buy_average": 70000,
      "name": "Bucket helm",
      "sp": 14000
    },
    "19994": {
      "overall_average": 2298894,
      "id": 19994,
      "sell_average": 2314763,
      "members": true,
      "buy_average": 2333806,
      "name": "Ranger gloves",
      "sp": 3400
    },
    "19997": {
      "overall_average": 778487,
      "id": 19997,
      "sell_average": 755243,
      "members": true,
      "buy_average": 732000,
      "name": "Holy wraps",
      "sp": 9600
    },
    "20002": {
      "overall_average": 1484222,
      "id": 20002,
      "sell_average": 1491944,
      "members": true,
      "buy_average": 1499666,
      "name": "Dragon scimitar ornament kit",
      "sp": 5000
    },
    "20005": {
      "overall_average": 0,
      "id": 20005,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Ring of nature",
      "sp": 8000
    },
    "20008": {
      "overall_average": 0,
      "id": 20008,
      "sell_average": 15000,
      "members": true,
      "buy_average": 15000,
      "name": "Fancy tiara",
      "sp": 8000
    },
    "20011": {
      "overall_average": 0,
      "id": 20011,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "3rd age axe",
      "sp": 55000
    },
    "20014": {
      "overall_average": 0,
      "id": 20014,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "3rd age pickaxe",
      "sp": 97950
    },
    "20017": {
      "overall_average": 0,
      "id": 20017,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Ring of coins",
      "sp": 8000
    },
    "20020": {
      "overall_average": 17595,
      "id": 20020,
      "sell_average": 17595,
      "members": true,
      "buy_average": 0,
      "name": "Lesser demon mask",
      "sp": 4000
    },
    "20023": {
      "overall_average": 0,
      "id": 20023,
      "sell_average": 20777,
      "members": true,
      "buy_average": 20777,
      "name": "Greater demon mask",
      "sp": 4000
    },
    "20026": {
      "overall_average": 0,
      "id": 20026,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black demon mask",
      "sp": 4000
    },
    "20029": {
      "overall_average": 220000,
      "id": 20029,
      "sell_average": 220000,
      "members": true,
      "buy_average": 220000,
      "name": "Old demon mask",
      "sp": 4000
    },
    "20032": {
      "overall_average": 0,
      "id": 20032,
      "sell_average": 52594,
      "members": true,
      "buy_average": 52594,
      "name": "Jungle demon mask",
      "sp": 4000
    },
    "20035": {
      "overall_average": 599837,
      "id": 20035,
      "sell_average": 599837,
      "members": true,
      "buy_average": 599837,
      "name": "Samurai kasa",
      "sp": 4000
    },
    "20038": {
      "overall_average": 175000,
      "id": 20038,
      "sell_average": 175000,
      "members": true,
      "buy_average": 0,
      "name": "Samurai shirt",
      "sp": 7000
    },
    "20041": {
      "overall_average": 0,
      "id": 20041,
      "sell_average": 276398,
      "members": true,
      "buy_average": 276398,
      "name": "Samurai gloves",
      "sp": 3200
    },
    "20044": {
      "overall_average": 88000,
      "id": 20044,
      "sell_average": 88000,
      "members": true,
      "buy_average": 0,
      "name": "Samurai greaves",
      "sp": 3200
    },
    "20047": {
      "overall_average": 0,
      "id": 20047,
      "sell_average": 34559,
      "members": true,
      "buy_average": 34559,
      "name": "Samurai boots",
      "sp": 4500
    },
    "20050": {
      "overall_average": 2333051,
      "id": 20050,
      "sell_average": 2311021,
      "members": true,
      "buy_average": 2300006,
      "name": "Obsidian cape (r)",
      "sp": 60000
    },
    "20053": {
      "overall_average": 0,
      "id": 20053,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Half moon spectacles",
      "sp": 19450
    },
    "20056": {
      "overall_average": 2790220,
      "id": 20056,
      "sell_average": 2769724,
      "members": true,
      "buy_average": 2744104,
      "name": "Ale of the gods",
      "sp": 850
    },
    "20059": {
      "overall_average": 0,
      "id": 20059,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bucket helm (g)",
      "sp": 14000
    },
    "20062": {
      "overall_average": 5280298,
      "id": 20062,
      "sell_average": 5282515,
      "members": true,
      "buy_average": 5285620,
      "name": "Torture ornament kit",
      "sp": 5000
    },
    "20065": {
      "overall_average": 5828332,
      "id": 20065,
      "sell_average": 5799439,
      "members": true,
      "buy_average": 5764124,
      "name": "Occult ornament kit",
      "sp": 5000
    },
    "20068": {
      "overall_average": 1321250,
      "id": 20068,
      "sell_average": 1321250,
      "members": true,
      "buy_average": 1250000,
      "name": "Armadyl godsword ornament kit",
      "sp": 5000
    },
    "20071": {
      "overall_average": 2904476,
      "id": 20071,
      "sell_average": 2920014,
      "members": true,
      "buy_average": 2974394,
      "name": "Bandos godsword ornament kit",
      "sp": 5000
    },
    "20074": {
      "overall_average": 6639999,
      "id": 20074,
      "sell_average": 6639999,
      "members": true,
      "buy_average": 0,
      "name": "Saradomin godsword ornament kit",
      "sp": 5000
    },
    "20077": {
      "overall_average": 890000,
      "id": 20077,
      "sell_average": 877669,
      "members": true,
      "buy_average": 871503,
      "name": "Zamorak godsword ornament kit",
      "sp": 5000
    },
    "20080": {
      "overall_average": 0,
      "id": 20080,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mummy's head",
      "sp": 1
    },
    "20083": {
      "overall_average": 0,
      "id": 20083,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mummy's body",
      "sp": 1
    },
    "20086": {
      "overall_average": 0,
      "id": 20086,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mummy's hands",
      "sp": 1
    },
    "20089": {
      "overall_average": 0,
      "id": 20089,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mummy's legs",
      "sp": 1
    },
    "20092": {
      "overall_average": 0,
      "id": 20092,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mummy's feet",
      "sp": 1
    },
    "20095": {
      "overall_average": 8779995,
      "id": 20095,
      "sell_average": 8779995,
      "members": true,
      "buy_average": 0,
      "name": "Ankou mask",
      "sp": 1
    },
    "20098": {
      "overall_average": 0,
      "id": 20098,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ankou top",
      "sp": 1
    },
    "20101": {
      "overall_average": 0,
      "id": 20101,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ankou gloves",
      "sp": 1
    },
    "20104": {
      "overall_average": 0,
      "id": 20104,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ankou's leggings",
      "sp": 1
    },
    "20107": {
      "overall_average": 0,
      "id": 20107,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ankou socks",
      "sp": 1
    },
    "20110": {
      "overall_average": 0,
      "id": 20110,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bowl wig",
      "sp": 1
    },
    "20113": {
      "overall_average": 0,
      "id": 20113,
      "sell_average": 50000,
      "members": true,
      "buy_average": 50000,
      "name": "Arceuus house hood",
      "sp": 1
    },
    "20116": {
      "overall_average": 23000,
      "id": 20116,
      "sell_average": 23000,
      "members": true,
      "buy_average": 0,
      "name": "Hosidius house hood",
      "sp": 1
    },
    "20119": {
      "overall_average": 0,
      "id": 20119,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Lovakengj house hood",
      "sp": 1
    },
    "20122": {
      "overall_average": 18678,
      "id": 20122,
      "sell_average": 18678,
      "members": true,
      "buy_average": 0,
      "name": "Piscarilius house hood",
      "sp": 1
    },
    "20125": {
      "overall_average": 140000,
      "id": 20125,
      "sell_average": 140000,
      "members": true,
      "buy_average": 0,
      "name": "Shayzien house hood",
      "sp": 1
    },
    "20128": {
      "overall_average": 116166,
      "id": 20128,
      "sell_average": 112732,
      "members": true,
      "buy_average": 102432,
      "name": "Hood of darkness",
      "sp": 10000
    },
    "20131": {
      "overall_average": 335800,
      "id": 20131,
      "sell_average": 335800,
      "members": true,
      "buy_average": 0,
      "name": "Robe top of darkness",
      "sp": 120000
    },
    "20134": {
      "overall_average": 51348,
      "id": 20134,
      "sell_average": 55674,
      "members": true,
      "buy_average": 60000,
      "name": "Gloves of darkness",
      "sp": 10000
    },
    "20137": {
      "overall_average": 217999,
      "id": 20137,
      "sell_average": 217999,
      "members": true,
      "buy_average": 0,
      "name": "Robe bottom of darkness",
      "sp": 80000
    },
    "20140": {
      "overall_average": 44730,
      "id": 20140,
      "sell_average": 44730,
      "members": true,
      "buy_average": 0,
      "name": "Boots of darkness",
      "sp": 10000
    },
    "20143": {
      "overall_average": 0,
      "id": 20143,
      "sell_average": 3656684,
      "members": true,
      "buy_average": 3656684,
      "name": "Dragon defender ornament kit",
      "sp": 5000
    },
    "20146": {
      "overall_average": 0,
      "id": 20146,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Gilded med helm",
      "sp": 19200
    },
    "20149": {
      "overall_average": 437877,
      "id": 20149,
      "sell_average": 433441,
      "members": false,
      "buy_average": 429005,
      "name": "Gilded chainbody",
      "sp": 50000
    },
    "20152": {
      "overall_average": 279177,
      "id": 20152,
      "sell_average": 277174,
      "members": false,
      "buy_average": 263159,
      "name": "Gilded sq shield",
      "sp": 38400
    },
    "20155": {
      "overall_average": 2419414,
      "id": 20155,
      "sell_average": 2404512,
      "members": false,
      "buy_average": 2330006,
      "name": "Gilded 2h sword",
      "sp": 64000
    },
    "20158": {
      "overall_average": 0,
      "id": 20158,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gilded spear",
      "sp": 20800
    },
    "20161": {
      "overall_average": 0,
      "id": 20161,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Gilded hasta",
      "sp": 20800
    },
    "20166": {
      "overall_average": 0,
      "id": 20166,
      "sell_average": 166300,
      "members": false,
      "buy_average": 166300,
      "name": "Wooden shield (g)",
      "sp": 20
    },
    "20169": {
      "overall_average": 0,
      "id": 20169,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Steel platebody (g)",
      "sp": 2000
    },
    "20172": {
      "overall_average": 8468,
      "id": 20172,
      "sell_average": 8468,
      "members": false,
      "buy_average": 0,
      "name": "Steel platelegs (g)",
      "sp": 1000
    },
    "20175": {
      "overall_average": 0,
      "id": 20175,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Steel plateskirt (g)",
      "sp": 1000
    },
    "20178": {
      "overall_average": 0,
      "id": 20178,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Steel full helm (g)",
      "sp": 550
    },
    "20181": {
      "overall_average": 0,
      "id": 20181,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Steel kiteshield (g)",
      "sp": 850
    },
    "20184": {
      "overall_average": 0,
      "id": 20184,
      "sell_average": 12984,
      "members": false,
      "buy_average": 12984,
      "name": "Steel platebody (t)",
      "sp": 2000
    },
    "20187": {
      "overall_average": 3086,
      "id": 20187,
      "sell_average": 1629,
      "members": false,
      "buy_average": 901,
      "name": "Steel platelegs (t)",
      "sp": 1000
    },
    "20190": {
      "overall_average": 0,
      "id": 20190,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Steel plateskirt (t)",
      "sp": 1000
    },
    "20193": {
      "overall_average": 28000,
      "id": 20193,
      "sell_average": 28000,
      "members": false,
      "buy_average": 0,
      "name": "Steel full helm (t)",
      "sp": 550
    },
    "20196": {
      "overall_average": 25000,
      "id": 20196,
      "sell_average": 25000,
      "members": false,
      "buy_average": 0,
      "name": "Steel kiteshield (t)",
      "sp": 850
    },
    "20199": {
      "overall_average": 0,
      "id": 20199,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Monk's robe top (g)",
      "sp": 50
    },
    "20202": {
      "overall_average": 0,
      "id": 20202,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Monk's robe (g)",
      "sp": 30
    },
    "20205": {
      "overall_average": 625290,
      "id": 20205,
      "sell_average": 625290,
      "members": false,
      "buy_average": 0,
      "name": "Golden chef's hat",
      "sp": 2
    },
    "20208": {
      "overall_average": 0,
      "id": 20208,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Golden apron",
      "sp": 2
    },
    "20211": {
      "overall_average": 3690025,
      "id": 20211,
      "sell_average": 3689624,
      "members": false,
      "buy_average": 3688823,
      "name": "Team cape zero",
      "sp": 50
    },
    "20214": {
      "overall_average": 1770272,
      "id": 20214,
      "sell_average": 1770272,
      "members": false,
      "buy_average": 0,
      "name": "Team cape x",
      "sp": 50
    },
    "20217": {
      "overall_average": 1465051,
      "id": 20217,
      "sell_average": 1457525,
      "members": false,
      "buy_average": 1450000,
      "name": "Team cape i",
      "sp": 50
    },
    "20220": {
      "overall_average": 22857,
      "id": 20220,
      "sell_average": 21174,
      "members": true,
      "buy_average": 17247,
      "name": "Holy blessing",
      "sp": 80
    },
    "20223": {
      "overall_average": 137642,
      "id": 20223,
      "sell_average": 133955,
      "members": true,
      "buy_average": 130461,
      "name": "Unholy blessing",
      "sp": 80
    },
    "20226": {
      "overall_average": 5720,
      "id": 20226,
      "sell_average": 5491,
      "members": true,
      "buy_average": 5300,
      "name": "Peaceful blessing",
      "sp": 80
    },
    "20229": {
      "overall_average": 6787,
      "id": 20229,
      "sell_average": 6516,
      "members": true,
      "buy_average": 6403,
      "name": "Honourable blessing",
      "sp": 80
    },
    "20232": {
      "overall_average": 13704,
      "id": 20232,
      "sell_average": 13123,
      "members": true,
      "buy_average": 11888,
      "name": "War blessing",
      "sp": 80
    },
    "20235": {
      "overall_average": 5742,
      "id": 20235,
      "sell_average": 5437,
      "members": true,
      "buy_average": 4828,
      "name": "Ancient blessing",
      "sp": 80
    },
    "20238": {
      "overall_average": 324,
      "id": 20238,
      "sell_average": 272,
      "members": true,
      "buy_average": 247,
      "name": "Charge dragonstone jewellery scroll",
      "sp": 1
    },
    "20240": {
      "overall_average": 26865,
      "id": 20240,
      "sell_average": 22729,
      "members": true,
      "buy_average": 18593,
      "name": "Crier coat",
      "sp": 5000
    },
    "20243": {
      "overall_average": 0,
      "id": 20243,
      "sell_average": 3000,
      "members": true,
      "buy_average": 3000,
      "name": "Crier bell",
      "sp": 5000
    },
    "20246": {
      "overall_average": 0,
      "id": 20246,
      "sell_average": 5963,
      "members": true,
      "buy_average": 5963,
      "name": "Black leprechaun hat",
      "sp": 5000
    },
    "20251": {
      "overall_average": 2230,
      "id": 20251,
      "sell_average": 1875,
      "members": true,
      "buy_average": 1520,
      "name": "Arceuus banner",
      "sp": 70
    },
    "20254": {
      "overall_average": 0,
      "id": 20254,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Hosidius banner",
      "sp": 70
    },
    "20257": {
      "overall_average": 0,
      "id": 20257,
      "sell_average": 1000,
      "members": true,
      "buy_average": 1000,
      "name": "Lovakengj banner",
      "sp": 70
    },
    "20260": {
      "overall_average": 5000,
      "id": 20260,
      "sell_average": 5000,
      "members": true,
      "buy_average": 0,
      "name": "Piscarilius banner",
      "sp": 70
    },
    "20263": {
      "overall_average": 0,
      "id": 20263,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Shayzien banner",
      "sp": 70
    },
    "20266": {
      "overall_average": 37624,
      "id": 20266,
      "sell_average": 35990,
      "members": true,
      "buy_average": 34356,
      "name": "Black unicorn mask",
      "sp": 1000
    },
    "20269": {
      "overall_average": 39589,
      "id": 20269,
      "sell_average": 39116,
      "members": true,
      "buy_average": 38959,
      "name": "White unicorn mask",
      "sp": 1000
    },
    "20272": {
      "overall_average": 0,
      "id": 20272,
      "sell_average": 3107,
      "members": true,
      "buy_average": 3107,
      "name": "Cabbage round shield",
      "sp": 3000
    },
    "20275": {
      "overall_average": 0,
      "id": 20275,
      "sell_average": 979,
      "members": true,
      "buy_average": 979,
      "name": "Gnomish firelighter",
      "sp": 1000
    },
    "20376": {
      "overall_average": 0,
      "id": 20376,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Steel trimmed set (lg)",
      "sp": 900
    },
    "20379": {
      "overall_average": 0,
      "id": 20379,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Steel trimmed set (sk)",
      "sp": 900
    },
    "20382": {
      "overall_average": 0,
      "id": 20382,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Steel gold-trimmed set (lg)",
      "sp": 900
    },
    "20385": {
      "overall_average": 0,
      "id": 20385,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Steel gold-trimmed set (sk)",
      "sp": 900
    },
    "20433": {
      "overall_average": 0,
      "id": 20433,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Evil chicken feet",
      "sp": 1
    },
    "20436": {
      "overall_average": 0,
      "id": 20436,
      "sell_average": 557777,
      "members": true,
      "buy_average": 557777,
      "name": "Evil chicken wings",
      "sp": 1
    },
    "20439": {
      "overall_average": 0,
      "id": 20439,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Evil chicken head",
      "sp": 1
    },
    "20442": {
      "overall_average": 0,
      "id": 20442,
      "sell_average": 557777,
      "members": true,
      "buy_average": 557777,
      "name": "Evil chicken legs",
      "sp": 1
    },
    "20517": {
      "overall_average": 606026,
      "id": 20517,
      "sell_average": 598989,
      "members": true,
      "buy_average": 593711,
      "name": "Elder chaos top",
      "sp": 800
    },
    "20520": {
      "overall_average": 360375,
      "id": 20520,
      "sell_average": 356190,
      "members": true,
      "buy_average": 353865,
      "name": "Elder chaos robe",
      "sp": 700
    },
    "20590": {
      "overall_average": 0,
      "id": 20590,
      "sell_average": 0,
      "members": false,
      "buy_average": 0,
      "name": "Stale baguette",
      "sp": 225
    },
    "20595": {
      "overall_average": 668225,
      "id": 20595,
      "sell_average": 658206,
      "members": true,
      "buy_average": 648187,
      "name": "Elder chaos hood",
      "sp": 500
    },
    "20716": {
      "overall_average": 424503,
      "id": 20716,
      "sell_average": 438516,
      "members": true,
      "buy_average": 452529,
      "name": "Tome of fire (empty)",
      "sp": 20000
    },
    "20718": {
      "overall_average": 4654,
      "id": 20718,
      "sell_average": 4636,
      "members": true,
      "buy_average": 4591,
      "name": "Burnt page",
      "sp": 200
    },
    "20724": {
      "overall_average": 21577273,
      "id": 20724,
      "sell_average": 21535453,
      "members": true,
      "buy_average": 21486253,
      "name": "Imbued heart",
      "sp": 14000
    },
    "20727": {
      "overall_average": 151193,
      "id": 20727,
      "sell_average": 151201,
      "members": true,
      "buy_average": 151211,
      "name": "Leaf-bladed battleaxe",
      "sp": 96000
    },
    "20730": {
      "overall_average": 110158,
      "id": 20730,
      "sell_average": 103236,
      "members": true,
      "buy_average": 98045,
      "name": "Mist battlestaff",
      "sp": 15500
    },
    "20733": {
      "overall_average": 145087,
      "id": 20733,
      "sell_average": 145087,
      "members": true,
      "buy_average": 0,
      "name": "Mystic mist staff",
      "sp": 42500
    },
    "20736": {
      "overall_average": 31191,
      "id": 20736,
      "sell_average": 29922,
      "members": true,
      "buy_average": 29218,
      "name": "Dust battlestaff",
      "sp": 15500
    },
    "20739": {
      "overall_average": 56186,
      "id": 20739,
      "sell_average": 58728,
      "members": true,
      "buy_average": 59999,
      "name": "Mystic dust staff",
      "sp": 42500
    },
    "20749": {
      "overall_average": 0,
      "id": 20749,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Zamorak's grapes",
      "sp": 50
    },
    "20756": {
      "overall_average": 657500,
      "id": 20756,
      "sell_average": 651666,
      "members": false,
      "buy_average": 640000,
      "name": "Hill giant club",
      "sp": 60000
    },
    "20849": {
      "overall_average": 3381,
      "id": 20849,
      "sell_average": 3348,
      "members": true,
      "buy_average": 3347,
      "name": "Dragon thrownaxe",
      "sp": 750
    },
    "20997": {
      "overall_average": 1187333491,
      "id": 20997,
      "sell_average": 1187939373,
      "members": true,
      "buy_average": 1188999666,
      "name": "Twisted bow",
      "sp": 90000
    },
    "21000": {
      "overall_average": 15550929,
      "id": 21000,
      "sell_average": 15532885,
      "members": true,
      "buy_average": 15507624,
      "name": "Twisted buckler",
      "sp": 90000
    },
    "21003": {
      "overall_average": 49480142,
      "id": 21003,
      "sell_average": 49428077,
      "members": true,
      "buy_average": 49395536,
      "name": "Elder maul",
      "sp": 500010
    },
    "21006": {
      "overall_average": 108654887,
      "id": 21006,
      "sell_average": 108596089,
      "members": true,
      "buy_average": 108553326,
      "name": "Kodai wand",
      "sp": 150000
    },
    "21009": {
      "overall_average": 358936,
      "id": 21009,
      "sell_average": 355984,
      "members": true,
      "buy_average": 355984,
      "name": "Dragon sword",
      "sp": 72001
    },
    "21012": {
      "overall_average": 76949468,
      "id": 21012,
      "sell_average": 76961302,
      "members": true,
      "buy_average": 76971268,
      "name": "Dragon hunter crossbow",
      "sp": 80000
    },
    "21015": {
      "overall_average": 16859999,
      "id": 21015,
      "sell_average": 16816187,
      "members": true,
      "buy_average": 16808250,
      "name": "Dinh's bulwark",
      "sp": 560000
    },
    "21018": {
      "overall_average": 20723327,
      "id": 21018,
      "sell_average": 20686604,
      "members": true,
      "buy_average": 20640699,
      "name": "Ancestral hat",
      "sp": 45000
    },
    "21021": {
      "overall_average": 106471234,
      "id": 21021,
      "sell_average": 106182942,
      "members": true,
      "buy_average": 105858614,
      "name": "Ancestral robe top",
      "sp": 120000
    },
    "21024": {
      "overall_average": 80653705,
      "id": 21024,
      "sell_average": 80525401,
      "members": true,
      "buy_average": 80461249,
      "name": "Ancestral robe bottom",
      "sp": 80000
    },
    "21028": {
      "overall_average": 4893511,
      "id": 21028,
      "sell_average": 4888321,
      "members": true,
      "buy_average": 4882761,
      "name": "Dragon harpoon",
      "sp": 55000
    },
    "21034": {
      "overall_average": 74417376,
      "id": 21034,
      "sell_average": 74388031,
      "members": true,
      "buy_average": 74346111,
      "name": "Dexterous prayer scroll",
      "sp": 80000
    },
    "21043": {
      "overall_average": 100524598,
      "id": 21043,
      "sell_average": 100524598,
      "members": true,
      "buy_average": 0,
      "name": "Kodai insignia",
      "sp": 150000
    },
    "21047": {
      "overall_average": 46950,
      "id": 21047,
      "sell_average": 46549,
      "members": true,
      "buy_average": 46464,
      "name": "Torn prayer scroll",
      "sp": 80000
    },
    "21049": {
      "overall_average": 209000000,
      "id": 21049,
      "sell_average": 209000000,
      "members": true,
      "buy_average": 0,
      "name": "Ancestral robes set",
      "sp": 145000
    },
    "21079": {
      "overall_average": 10025250,
      "id": 21079,
      "sell_average": 10010625,
      "members": true,
      "buy_average": 9996001,
      "name": "Arcane prayer scroll",
      "sp": 80000
    },
    "21081": {
      "overall_average": 0,
      "id": 21081,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Opal ring",
      "sp": 1050
    },
    "21084": {
      "overall_average": 1176,
      "id": 21084,
      "sell_average": 1176,
      "members": true,
      "buy_average": 0,
      "name": "Jade ring",
      "sp": 1275
    },
    "21087": {
      "overall_average": 0,
      "id": 21087,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Topaz ring",
      "sp": 1425
    },
    "21090": {
      "overall_average": 0,
      "id": 21090,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Opal necklace",
      "sp": 1050
    },
    "21093": {
      "overall_average": 0,
      "id": 21093,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Jade necklace",
      "sp": 1275
    },
    "21096": {
      "overall_average": 0,
      "id": 21096,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Topaz necklace",
      "sp": 1425
    },
    "21099": {
      "overall_average": 0,
      "id": 21099,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Opal amulet (u)",
      "sp": 900
    },
    "21102": {
      "overall_average": 860,
      "id": 21102,
      "sell_average": 860,
      "members": true,
      "buy_average": 860,
      "name": "Jade amulet (u)",
      "sp": 1050
    },
    "21105": {
      "overall_average": 4878,
      "id": 21105,
      "sell_average": 4887,
      "members": true,
      "buy_average": 4898,
      "name": "Topaz amulet (u)",
      "sp": 1275
    },
    "21108": {
      "overall_average": 0,
      "id": 21108,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Opal amulet",
      "sp": 900
    },
    "21111": {
      "overall_average": 999,
      "id": 21111,
      "sell_average": 998,
      "members": true,
      "buy_average": 998,
      "name": "Jade amulet",
      "sp": 1050
    },
    "21114": {
      "overall_average": 5074,
      "id": 21114,
      "sell_average": 4984,
      "members": true,
      "buy_average": 4938,
      "name": "Topaz amulet",
      "sp": 1250
    },
    "21117": {
      "overall_average": 0,
      "id": 21117,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Opal bracelet",
      "sp": 1150
    },
    "21120": {
      "overall_average": 0,
      "id": 21120,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Jade bracelet",
      "sp": 1300
    },
    "21123": {
      "overall_average": 0,
      "id": 21123,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Topaz bracelet",
      "sp": 1500
    },
    "21126": {
      "overall_average": 0,
      "id": 21126,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ring of pursuit",
      "sp": 1050
    },
    "21129": {
      "overall_average": 3950,
      "id": 21129,
      "sell_average": 1970,
      "members": true,
      "buy_average": 890,
      "name": "Ring of returning(5)",
      "sp": 1275
    },
    "21140": {
      "overall_average": 3100,
      "id": 21140,
      "sell_average": 3100,
      "members": true,
      "buy_average": 0,
      "name": "Efaritay's aid",
      "sp": 1425
    },
    "21143": {
      "overall_average": 797,
      "id": 21143,
      "sell_average": 777,
      "members": true,
      "buy_average": 770,
      "name": "Dodgy necklace",
      "sp": 1050
    },
    "21146": {
      "overall_average": 1091,
      "id": 21146,
      "sell_average": 1087,
      "members": true,
      "buy_average": 1058,
      "name": "Necklace of passage(5)",
      "sp": 1275
    },
    "21157": {
      "overall_average": 0,
      "id": 21157,
      "sell_average": 555,
      "members": true,
      "buy_average": 555,
      "name": "Necklace of faith",
      "sp": 1425
    },
    "21160": {
      "overall_average": 0,
      "id": 21160,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Amulet of bounty",
      "sp": 900
    },
    "21163": {
      "overall_average": 1608,
      "id": 21163,
      "sell_average": 1617,
      "members": true,
      "buy_average": 1624,
      "name": "Amulet of chemistry",
      "sp": 1050
    },
    "21166": {
      "overall_average": 5363,
      "id": 21166,
      "sell_average": 5290,
      "members": true,
      "buy_average": 5195,
      "name": "Burning amulet(5)",
      "sp": 1250
    },
    "21177": {
      "overall_average": 856,
      "id": 21177,
      "sell_average": 815,
      "members": true,
      "buy_average": 718,
      "name": "Expeditious bracelet",
      "sp": 1150
    },
    "21180": {
      "overall_average": 2220,
      "id": 21180,
      "sell_average": 2218,
      "members": true,
      "buy_average": 2046,
      "name": "Flamtaer bracelet",
      "sp": 1300
    },
    "21183": {
      "overall_average": 4456,
      "id": 21183,
      "sell_average": 4392,
      "members": true,
      "buy_average": 4279,
      "name": "Bracelet of slaughter",
      "sp": 2500
    },
    "21202": {
      "overall_average": 0,
      "id": 21202,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Lava staff upgrade kit",
      "sp": 1500
    },
    "21257": {
      "overall_average": 2484,
      "id": 21257,
      "sell_average": 2415,
      "members": true,
      "buy_average": 2336,
      "name": "Slayer's enchantment",
      "sp": 1200
    },
    "21270": {
      "overall_average": 5758666,
      "id": 21270,
      "sell_average": 5756250,
      "members": true,
      "buy_average": 5749000,
      "name": "Eternal gem",
      "sp": 9500
    },
    "21279": {
      "overall_average": 3045910,
      "id": 21279,
      "sell_average": 3012139,
      "members": true,
      "buy_average": 2910827,
      "name": "Obsidian armour set",
      "sp": 126000
    },
    "21298": {
      "overall_average": 830500,
      "id": 21298,
      "sell_average": 819902,
      "members": true,
      "buy_average": 816369,
      "name": "Obsidian helmet",
      "sp": 56320
    },
    "21301": {
      "overall_average": 1206676,
      "id": 21301,
      "sell_average": 1198999,
      "members": true,
      "buy_average": 1189787,
      "name": "Obsidian platebody",
      "sp": 84000
    },
    "21304": {
      "overall_average": 1030836,
      "id": 21304,
      "sell_average": 1019759,
      "members": true,
      "buy_average": 1005516,
      "name": "Obsidian platelegs",
      "sp": 67000
    },
    "21316": {
      "overall_average": 296,
      "id": 21316,
      "sell_average": 291,
      "members": true,
      "buy_average": 285,
      "name": "Amethyst broad bolts",
      "sp": 240
    },
    "21318": {
      "overall_average": 697,
      "id": 21318,
      "sell_average": 692,
      "members": true,
      "buy_average": 688,
      "name": "Amethyst javelin",
      "sp": 420
    },
    "21320": {
      "overall_average": 0,
      "id": 21320,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Amethyst javelin(p)",
      "sp": 420
    },
    "21322": {
      "overall_average": 0,
      "id": 21322,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Amethyst javelin(p+)",
      "sp": 420
    },
    "21324": {
      "overall_average": 0,
      "id": 21324,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Amethyst javelin(p++)",
      "sp": 420
    },
    "21326": {
      "overall_average": 188,
      "id": 21326,
      "sell_average": 187,
      "members": true,
      "buy_average": 187,
      "name": "Amethyst arrow",
      "sp": 490
    },
    "21332": {
      "overall_average": 450,
      "id": 21332,
      "sell_average": 450,
      "members": true,
      "buy_average": 0,
      "name": "Amethyst arrow(p)",
      "sp": 490
    },
    "21334": {
      "overall_average": 0,
      "id": 21334,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Amethyst arrow(p+)",
      "sp": 490
    },
    "21336": {
      "overall_average": 1300,
      "id": 21336,
      "sell_average": 1239,
      "members": true,
      "buy_average": 1234,
      "name": "Amethyst arrow(p++)",
      "sp": 490
    },
    "21338": {
      "overall_average": 239,
      "id": 21338,
      "sell_average": 239,
      "members": true,
      "buy_average": 232,
      "name": "Amethyst bolt tips",
      "sp": 160
    },
    "21347": {
      "overall_average": 3555,
      "id": 21347,
      "sell_average": 3548,
      "members": true,
      "buy_average": 3541,
      "name": "Amethyst",
      "sp": 3900
    },
    "21350": {
      "overall_average": 228,
      "id": 21350,
      "sell_average": 227,
      "members": true,
      "buy_average": 226,
      "name": "Amethyst arrowtips",
      "sp": 245
    },
    "21352": {
      "overall_average": 770,
      "id": 21352,
      "sell_average": 770,
      "members": true,
      "buy_average": 0,
      "name": "Amethyst javelin heads",
      "sp": 1520
    },
    "21387": {
      "overall_average": 4085,
      "id": 21387,
      "sell_average": 4078,
      "members": true,
      "buy_average": 3804,
      "name": "Master scroll book (empty)",
      "sp": 5000
    },
    "21477": {
      "overall_average": 233,
      "id": 21477,
      "sell_average": 233,
      "members": true,
      "buy_average": 0,
      "name": "Teak sapling",
      "sp": 1
    },
    "21480": {
      "overall_average": 17990,
      "id": 21480,
      "sell_average": 17928,
      "members": true,
      "buy_average": 17371,
      "name": "Mahogany sapling",
      "sp": 1
    },
    "21483": {
      "overall_average": 1074,
      "id": 21483,
      "sell_average": 1077,
      "members": true,
      "buy_average": 1086,
      "name": "Ultracompost",
      "sp": 85
    },
    "21486": {
      "overall_average": 1000,
      "id": 21486,
      "sell_average": 273,
      "members": true,
      "buy_average": 233,
      "name": "Teak seed",
      "sp": 48
    },
    "21488": {
      "overall_average": 18384,
      "id": 21488,
      "sell_average": 17654,
      "members": true,
      "buy_average": 17438,
      "name": "Mahogany seed",
      "sp": 48
    },
    "21490": {
      "overall_average": 42,
      "id": 21490,
      "sell_average": 40,
      "members": true,
      "buy_average": 35,
      "name": "Seaweed spore",
      "sp": 50
    },
    "21504": {
      "overall_average": 0,
      "id": 21504,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Giant seaweed",
      "sp": 2
    },
    "21512": {
      "overall_average": 0,
      "id": 21512,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Bird house",
      "sp": 5
    },
    "21515": {
      "overall_average": 572,
      "id": 21515,
      "sell_average": 572,
      "members": true,
      "buy_average": 0,
      "name": "Oak bird house",
      "sp": 5
    },
    "21518": {
      "overall_average": 0,
      "id": 21518,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Willow bird house",
      "sp": 5
    },
    "21521": {
      "overall_average": 0,
      "id": 21521,
      "sell_average": 1100,
      "members": true,
      "buy_average": 1100,
      "name": "Teak bird house",
      "sp": 5
    },
    "21543": {
      "overall_average": 0,
      "id": 21543,
      "sell_average": 33,
      "members": true,
      "buy_average": 33,
      "name": "Calcite",
      "sp": 30
    },
    "21545": {
      "overall_average": 0,
      "id": 21545,
      "sell_average": 46,
      "members": true,
      "buy_average": 46,
      "name": "Pyrophosphite",
      "sp": 30
    },
    "21555": {
      "overall_average": 16,
      "id": 21555,
      "sell_average": 16,
      "members": true,
      "buy_average": 17,
      "name": "Numulite",
      "sp": 50
    },
    "21622": {
      "overall_average": 243,
      "id": 21622,
      "sell_average": 243,
      "members": true,
      "buy_average": 238,
      "name": "Volcanic ash",
      "sp": 200
    },
    "21626": {
      "overall_average": 2609,
      "id": 21626,
      "sell_average": 2536,
      "members": true,
      "buy_average": 2500,
      "name": "Sulliuscep cap",
      "sp": 3
    },
    "21634": {
      "overall_average": 0,
      "id": 21634,
      "sell_average": 26700000,
      "members": true,
      "buy_average": 26700000,
      "name": "Ancient wyvern shield",
      "sp": 2000000
    },
    "21637": {
      "overall_average": 0,
      "id": 21637,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Wyvern visage",
      "sp": 750000
    },
    "21643": {
      "overall_average": 186020,
      "id": 21643,
      "sell_average": 182510,
      "members": true,
      "buy_average": 179000,
      "name": "Granite boots",
      "sp": 12500
    },
    "21646": {
      "overall_average": 232999,
      "id": 21646,
      "sell_average": 230500,
      "members": true,
      "buy_average": 228000,
      "name": "Granite longsword",
      "sp": 32000
    },
    "21649": {
      "overall_average": 0,
      "id": 21649,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Merfolk trident",
      "sp": 400
    },
    "21652": {
      "overall_average": 4990,
      "id": 21652,
      "sell_average": 4990,
      "members": true,
      "buy_average": 0,
      "name": "Drift net",
      "sp": 20
    },
    "21684": {
      "overall_average": 0,
      "id": 21684,
      "sell_average": 3575,
      "members": true,
      "buy_average": 3575,
      "name": "Uncooked mushroom pie",
      "sp": 16
    },
    "21690": {
      "overall_average": 3400,
      "id": 21690,
      "sell_average": 3317,
      "members": true,
      "buy_average": 3260,
      "name": "Mushroom pie",
      "sp": 30
    },
    "21730": {
      "overall_average": 0,
      "id": 21730,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Black tourmaline core",
      "sp": 41500
    },
    "21733": {
      "overall_average": 8378691,
      "id": 21733,
      "sell_average": 8365784,
      "members": true,
      "buy_average": 8352877,
      "name": "Guardian boots",
      "sp": 305000
    },
    "21736": {
      "overall_average": 496734,
      "id": 21736,
      "sell_average": 495772,
      "members": true,
      "buy_average": 490000,
      "name": "Granite gloves",
      "sp": 34000
    },
    "21739": {
      "overall_average": 33895,
      "id": 21739,
      "sell_average": 33917,
      "members": true,
      "buy_average": 33924,
      "name": "Granite ring",
      "sp": 15000
    },
    "21742": {
      "overall_average": 908960,
      "id": 21742,
      "sell_average": 903082,
      "members": true,
      "buy_average": 897203,
      "name": "Granite hammer",
      "sp": 64000
    },
    "21745": {
      "overall_average": 0,
      "id": 21745,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Jar of stone",
      "sp": 1
    },
    "21754": {
      "overall_average": 0,
      "id": 21754,
      "sell_average": 169,
      "members": true,
      "buy_average": 169,
      "name": "Rock thrownhammer",
      "sp": 200
    },
    "21802": {
      "overall_average": 17329,
      "id": 21802,
      "sell_average": 17408,
      "members": true,
      "buy_average": 17475,
      "name": "Revenant cave teleport",
      "sp": 10
    },
    "21804": {
      "overall_average": 853313,
      "id": 21804,
      "sell_average": 853620,
      "members": true,
      "buy_average": 855000,
      "name": "Ancient crystal",
      "sp": 250000
    },
    "21807": {
      "overall_average": 485572,
      "id": 21807,
      "sell_average": 485572,
      "members": true,
      "buy_average": 485572,
      "name": "Ancient emblem",
      "sp": 500000
    },
    "21810": {
      "overall_average": 987871,
      "id": 21810,
      "sell_average": 988629,
      "members": true,
      "buy_average": 990296,
      "name": "Ancient totem",
      "sp": 1000000
    },
    "21813": {
      "overall_average": 1981899,
      "id": 21813,
      "sell_average": 1981899,
      "members": true,
      "buy_average": 1981899,
      "name": "Ancient statuette",
      "sp": 2000000
    },
    "21817": {
      "overall_average": 43832,
      "id": 21817,
      "sell_average": 43755,
      "members": true,
      "buy_average": 43695,
      "name": "Bracelet of ethereum (uncharged)",
      "sp": 72000
    },
    "21820": {
      "overall_average": 97,
      "id": 21820,
      "sell_average": 97,
      "members": true,
      "buy_average": 96,
      "name": "Revenant ether",
      "sp": 250
    },
    "21838": {
      "overall_average": 45250,
      "id": 21838,
      "sell_average": 43020,
      "members": false,
      "buy_average": 41289,
      "name": "Shaman mask",
      "sp": 8000
    },
    "21880": {
      "overall_average": 383,
      "id": 21880,
      "sell_average": 376,
      "members": true,
      "buy_average": 362,
      "name": "Wrath rune",
      "sp": 500
    },
    "21882": {
      "overall_average": 0,
      "id": 21882,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon armour set (lg)",
      "sp": 500000
    },
    "21892": {
      "overall_average": 18479999,
      "id": 21892,
      "sell_average": 18479999,
      "members": true,
      "buy_average": 0,
      "name": "Dragon platebody",
      "sp": 2000000
    },
    "21895": {
      "overall_average": 0,
      "id": 21895,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon kiteshield",
      "sp": 1600000
    },
    "21902": {
      "overall_average": 8909061,
      "id": 21902,
      "sell_average": 8887722,
      "members": true,
      "buy_average": 8874065,
      "name": "Dragon crossbow",
      "sp": 54000
    },
    "21905": {
      "overall_average": 1678,
      "id": 21905,
      "sell_average": 1676,
      "members": true,
      "buy_average": 1671,
      "name": "Dragon bolts",
      "sp": 425
    },
    "21918": {
      "overall_average": 0,
      "id": 21918,
      "sell_average": 9000000,
      "members": true,
      "buy_average": 9000000,
      "name": "Dragon limbs",
      "sp": 35000
    },
    "21921": {
      "overall_average": 0,
      "id": 21921,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon crossbow (u)",
      "sp": 30000
    },
    "21924": {
      "overall_average": 0,
      "id": 21924,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon bolts (p)",
      "sp": 430
    },
    "21926": {
      "overall_average": 0,
      "id": 21926,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon bolts (p+)",
      "sp": 435
    },
    "21928": {
      "overall_average": 0,
      "id": 21928,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon bolts (p++)",
      "sp": 440
    },
    "21930": {
      "overall_average": 1648,
      "id": 21930,
      "sell_average": 1641,
      "members": true,
      "buy_average": 1637,
      "name": "Dragon bolts (unf)",
      "sp": 1
    },
    "21932": {
      "overall_average": 1911,
      "id": 21932,
      "sell_average": 1813,
      "members": true,
      "buy_average": 1798,
      "name": "Opal dragon bolts (e)",
      "sp": 580
    },
    "21934": {
      "overall_average": 0,
      "id": 21934,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Jade dragon bolts (e)",
      "sp": 630
    },
    "21936": {
      "overall_average": 1800,
      "id": 21936,
      "sell_average": 1800,
      "members": true,
      "buy_average": 0,
      "name": "Pearl dragon bolts (e)",
      "sp": 680
    },
    "21938": {
      "overall_average": 0,
      "id": 21938,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Topaz dragon bolts (e)",
      "sp": 730
    },
    "21940": {
      "overall_average": 0,
      "id": 21940,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Sapphire dragon bolts (e)",
      "sp": 780
    },
    "21942": {
      "overall_average": 0,
      "id": 21942,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Emerald dragon bolts (e)",
      "sp": 830
    },
    "21944": {
      "overall_average": 2029,
      "id": 21944,
      "sell_average": 2013,
      "members": true,
      "buy_average": 1993,
      "name": "Ruby dragon bolts (e)",
      "sp": 830
    },
    "21946": {
      "overall_average": 2086,
      "id": 21946,
      "sell_average": 2084,
      "members": true,
      "buy_average": 2083,
      "name": "Diamond dragon bolts (e)",
      "sp": 880
    },
    "21948": {
      "overall_average": 1877,
      "id": 21948,
      "sell_average": 1871,
      "members": true,
      "buy_average": 1865,
      "name": "Dragonstone dragon bolts (e)",
      "sp": 1150
    },
    "21950": {
      "overall_average": 9667,
      "id": 21950,
      "sell_average": 9661,
      "members": true,
      "buy_average": 9340,
      "name": "Onyx dragon bolts (e)",
      "sp": 15800
    },
    "21952": {
      "overall_average": 18,
      "id": 21952,
      "sell_average": 10,
      "members": true,
      "buy_average": 2,
      "name": "Magic stock",
      "sp": 280
    },
    "21955": {
      "overall_average": 2500,
      "id": 21955,
      "sell_average": 1825,
      "members": true,
      "buy_average": 1609,
      "name": "Opal dragon bolts",
      "sp": 550
    },
    "21957": {
      "overall_average": 0,
      "id": 21957,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Jade dragon bolts",
      "sp": 600
    },
    "21959": {
      "overall_average": 0,
      "id": 21959,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Pearl dragon bolts",
      "sp": 650
    },
    "21961": {
      "overall_average": 0,
      "id": 21961,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Topaz dragon bolts",
      "sp": 700
    },
    "21963": {
      "overall_average": 0,
      "id": 21963,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Sapphire dragon bolts",
      "sp": 750
    },
    "21965": {
      "overall_average": 0,
      "id": 21965,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Emerald dragon bolts",
      "sp": 800
    },
    "21967": {
      "overall_average": 2042,
      "id": 21967,
      "sell_average": 2042,
      "members": true,
      "buy_average": 1400,
      "name": "Ruby dragon bolts",
      "sp": 800
    },
    "21969": {
      "overall_average": 1960,
      "id": 21969,
      "sell_average": 1960,
      "members": true,
      "buy_average": 0,
      "name": "Diamond dragon bolts",
      "sp": 850
    },
    "21971": {
      "overall_average": 1904,
      "id": 21971,
      "sell_average": 1904,
      "members": true,
      "buy_average": 0,
      "name": "Dragonstone dragon bolts",
      "sp": 995
    },
    "21973": {
      "overall_average": 0,
      "id": 21973,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Onyx dragon bolts",
      "sp": 13900
    },
    "21975": {
      "overall_average": 9676,
      "id": 21975,
      "sell_average": 9038,
      "members": true,
      "buy_average": 9030,
      "name": "Crushed superior dragon bones",
      "sp": 50
    },
    "21978": {
      "overall_average": 9465,
      "id": 21978,
      "sell_average": 9415,
      "members": true,
      "buy_average": 9357,
      "name": "Super antifire potion(4)",
      "sp": 800
    },
    "21981": {
      "overall_average": 0,
      "id": 21981,
      "sell_average": 8881,
      "members": true,
      "buy_average": 8881,
      "name": "Super antifire potion(3)",
      "sp": 760
    },
    "21984": {
      "overall_average": 0,
      "id": 21984,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Super antifire potion(2)",
      "sp": 720
    },
    "21987": {
      "overall_average": 0,
      "id": 21987,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Super antifire potion(1)",
      "sp": 680
    },
    "21994": {
      "overall_average": 0,
      "id": 21994,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Super antifire mix(2)",
      "sp": 198
    },
    "22003": {
      "overall_average": 78665714,
      "id": 22003,
      "sell_average": 78513093,
      "members": true,
      "buy_average": 78406258,
      "name": "Dragonfire ward",
      "sp": 2000000
    },
    "22006": {
      "overall_average": 0,
      "id": 22006,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Skeletal visage",
      "sp": 1500000
    },
    "22097": {
      "overall_average": 0,
      "id": 22097,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon metal shard",
      "sp": 1200000
    },
    "22100": {
      "overall_average": 0,
      "id": 22100,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon metal slice",
      "sp": 100000
    },
    "22103": {
      "overall_average": 0,
      "id": 22103,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon metal lump",
      "sp": 150000
    },
    "22106": {
      "overall_average": 0,
      "id": 22106,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Jar of decay",
      "sp": 1
    },
    "22111": {
      "overall_average": 1034951,
      "id": 22111,
      "sell_average": 1022479,
      "members": true,
      "buy_average": 997536,
      "name": "Dragonbone necklace",
      "sp": 80000
    },
    "22118": {
      "overall_average": 272,
      "id": 22118,
      "sell_average": 269,
      "members": true,
      "buy_average": 265,
      "name": "Wrath talisman",
      "sp": 4
    },
    "22121": {
      "overall_average": 0,
      "id": 22121,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Wrath tiara",
      "sp": 500
    },
    "22124": {
      "overall_average": 9466,
      "id": 22124,
      "sell_average": 9475,
      "members": true,
      "buy_average": 9479,
      "name": "Superior dragon bones",
      "sp": 160
    },
    "22192": {
      "overall_average": 0,
      "id": 22192,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Maple bird house",
      "sp": 5
    },
    "22195": {
      "overall_average": 0,
      "id": 22195,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Mahogany bird house",
      "sp": 5
    },
    "22198": {
      "overall_average": 0,
      "id": 22198,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Yew bird house",
      "sp": 5
    },
    "22201": {
      "overall_average": 2999,
      "id": 22201,
      "sell_average": 2608,
      "members": true,
      "buy_average": 2201,
      "name": "Magic bird house",
      "sp": 5
    },
    "22204": {
      "overall_average": 0,
      "id": 22204,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Redwood bird house",
      "sp": 5
    },
    "22209": {
      "overall_average": 9428,
      "id": 22209,
      "sell_average": 9408,
      "members": true,
      "buy_average": 9337,
      "name": "Extended super antifire(4)",
      "sp": 800
    },
    "22212": {
      "overall_average": 8200,
      "id": 22212,
      "sell_average": 8174,
      "members": true,
      "buy_average": 8146,
      "name": "Extended super antifire(3)",
      "sp": 760
    },
    "22215": {
      "overall_average": 7500,
      "id": 22215,
      "sell_average": 6883,
      "members": true,
      "buy_average": 6473,
      "name": "Extended super antifire(2)",
      "sp": 720
    },
    "22218": {
      "overall_average": 3755,
      "id": 22218,
      "sell_average": 2524,
      "members": true,
      "buy_average": 2114,
      "name": "Extended super antifire(1)",
      "sp": 680
    },
    "22221": {
      "overall_average": 0,
      "id": 22221,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Extended super antifire mix(2)",
      "sp": 240
    },
    "22224": {
      "overall_average": 0,
      "id": 22224,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Extended super antifire mix(1)",
      "sp": 160
    },
    "22231": {
      "overall_average": 350000,
      "id": 22231,
      "sell_average": 366662,
      "members": true,
      "buy_average": 366662,
      "name": "Dragon boots ornament kit",
      "sp": 5000
    },
    "22236": {
      "overall_average": 0,
      "id": 22236,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon platebody ornament kit",
      "sp": 5000
    },
    "22239": {
      "overall_average": 0,
      "id": 22239,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Dragon kiteshield ornament kit",
      "sp": 5000
    },
    "22246": {
      "overall_average": 27100000,
      "id": 22246,
      "sell_average": 26982500,
      "members": true,
      "buy_average": 26815001,
      "name": "Anguish ornament kit",
      "sp": 5000
    },
    "22251": {
      "overall_average": 0,
      "id": 22251,
      "sell_average": 1,
      "members": true,
      "buy_average": 1,
      "name": "Oak shield",
      "sp": 80
    },
    "22254": {
      "overall_average": 17,
      "id": 22254,
      "sell_average": 20,
      "members": true,
      "buy_average": 21,
      "name": "Willow shield",
      "sp": 160
    },
    "22257": {
      "overall_average": 14,
      "id": 22257,
      "sell_average": 14,
      "members": true,
      "buy_average": 15,
      "name": "Maple shield",
      "sp": 320
    },
    "22260": {
      "overall_average": 0,
      "id": 22260,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Yew shield",
      "sp": 640
    },
    "22263": {
      "overall_average": 633,
      "id": 22263,
      "sell_average": 552,
      "members": true,
      "buy_average": 550,
      "name": "Magic shield",
      "sp": 1280
    },
    "22266": {
      "overall_average": 475,
      "id": 22266,
      "sell_average": 474,
      "members": true,
      "buy_average": 474,
      "name": "Redwood shield",
      "sp": 1280
    },
    "22269": {
      "overall_average": 3000,
      "id": 22269,
      "sell_average": 3000,
      "members": true,
      "buy_average": 0,
      "name": "Hard leather shield",
      "sp": 500
    },
    "22272": {
      "overall_average": 191,
      "id": 22272,
      "sell_average": 191,
      "members": true,
      "buy_average": 191,
      "name": "Snakeskin shield",
      "sp": 920
    },
    "22275": {
      "overall_average": 3490,
      "id": 22275,
      "sell_average": 3489,
      "members": true,
      "buy_average": 3480,
      "name": "Green d'hide shield",
      "sp": 5500
    },
    "22278": {
      "overall_average": 5283,
      "id": 22278,
      "sell_average": 5224,
      "members": true,
      "buy_average": 5026,
      "name": "Blue d'hide shield",
      "sp": 7500
    },
    "22281": {
      "overall_average": 8508,
      "id": 22281,
      "sell_average": 8390,
      "members": true,
      "buy_average": 8237,
      "name": "Red d'hide shield",
      "sp": 11000
    },
    "22284": {
      "overall_average": 20418,
      "id": 22284,
      "sell_average": 19493,
      "members": true,
      "buy_average": 17921,
      "name": "Black d'hide shield",
      "sp": 28334
    },
    "22290": {
      "overall_average": 0,
      "id": 22290,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Uncharged trident (e)",
      "sp": 98000
    },
    "22294": {
      "overall_average": 14304699,
      "id": 22294,
      "sell_average": 14288187,
      "members": true,
      "buy_average": 14271675,
      "name": "Uncharged toxic trident (e)",
      "sp": 108000
    },
    "22296": {
      "overall_average": 6311295,
      "id": 22296,
      "sell_average": 6292802,
      "members": true,
      "buy_average": 6255814,
      "name": "Staff of light",
      "sp": 1000005
    },
    "22299": {
      "overall_average": 3970513,
      "id": 22299,
      "sell_average": 3970513,
      "members": true,
      "buy_average": 3970513,
      "name": "Ancient medallion",
      "sp": 4000000
    },
    "22302": {
      "overall_average": 0,
      "id": 22302,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ancient effigy",
      "sp": 8000000
    },
    "22305": {
      "overall_average": 0,
      "id": 22305,
      "sell_average": 0,
      "members": true,
      "buy_average": 0,
      "name": "Ancient relic",
      "sp": 16000000
    }
}

export default itemMembershipStatus;

