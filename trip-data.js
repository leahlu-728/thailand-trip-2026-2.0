window.TRIP_DATA = {
  title: "曼谷・清迈旅行攻略",
  startDate: "2026-09-29",
  endDate: "2026-10-06",
  timezone: "Asia/Bangkok",
  travelers: ["lxr", "熊", "cxl"],

  notices: [
    {
      type: "danger",
      text:
        "高风险衔接：10月6日06:20夜车抵达曼谷后，lxr、熊需要赶11:00国际航班。车站至机场交通时间、值机截止时间及夜车延误风险均待核实。"
    },
    {
      type: "warning",
      text:
        "价格、营业时间、签证及入境要求、预约状态和交通规则，请在出发前再次核对。"
    }
  ],

  journeyCards: [
    {
      {
  label: "FLIGHT 01 / 03",
  title: "lxr、熊 · 航班与接驳",
  travelers: "lxr、熊（上海接驳仅限lxr）",

  departures: [
    "2026-09-29T14:40:00+08:00",
    "2026-09-29T23:40:00+08:00",
    "2026-10-06T11:00:00+07:00",
    "2026-10-08T07:15:00+08:00"
  ],

  segments: [
    {
      date: "9月29日",
      provider: "东方航空",
      number: "MU5343 · 仅lxr",
      fromCode: "PVG",
      fromCity: "上海浦东T1",
      toCode: "SZX",
      toCity: "深圳宝安T3",
      departure: "14:40",
      arrival: "17:30",
      mode: "FLIGHT"
    },
    {
      date: "9月29日",
      provider: "香港航空",
      number: "HX767 · lxr、熊",
      fromCode: "HKG",
      fromCity: "香港T2",
      toCode: "BKK",
      toCity: "曼谷",
      departure: "23:40",
      arrival: "次日 01:40",
      mode: "FLIGHT"
    },
    {
      date: "10月6日",
      provider: "国泰航空",
      number: "CX750 · lxr、熊",
      fromCode: "BKK",
      fromCity: "曼谷",
      toCode: "HKG",
      toCity: "香港T1",
      departure: "11:00",
      arrival: "15:05",
      mode: "FLIGHT"
    },
    {
      date: "10月8日",
      provider: "东方航空",
      number: "MU5332 · 仅lxr",
      fromCode: "SZX",
      fromCity: "深圳宝安T3",
      toCode: "PVG",
      toCity: "上海浦东T1",
      departure: "07:15",
      arrival: "09:45",
      mode: "FLIGHT"
    }
  ]
},
    {
      label: "FLIGHT 02 / 03",
      title: "cxl · 往返航班",
      travelers: "cxl",
      departures: [
        "2026-09-29T18:55:00+08:00",
        "2026-10-06T14:40:00+07:00"
      ],
      segments: [
        {
          date: "9月29日",
          provider: "澳门航空",
          number: "NX992",
          fromCode: "MFM",
          fromCity: "澳门",
          toCode: "BKK",
          toCity: "曼谷",
          departure: "18:55",
          arrival: "21:10",
          mode: "FLIGHT"
        },
        {
          date: "10月6日",
          provider: "澳门航空",
          number: "NX935",
          fromCode: "BKK",
          fromCity: "曼谷",
          toCode: "MFM",
          toCity: "澳门",
          departure: "14:40",
          arrival: "18:25",
          mode: "FLIGHT"
        }
      ]
    },
    {
      label: "TRAIN 03 / 03",
      title: "全员 · 往返夜间火车",
      travelers: "lxr、熊、cxl",
      departures: [
        "2026-10-02T18:40:00+07:00",
        "2026-10-05T18:20:00+07:00"
      ],
      segments: [
        {
          date: "10月2日",
          provider: "红丝绒夜间火车",
          number: "车次待核对",
          fromCode: "BKK",
          fromCity: "曼谷",
          toCode: "CNX",
          toCity: "清迈",
          departure: "18:40",
          arrival: "次日 07:40",
          mode: "TRAIN"
        },
        {
          date: "10月5日",
          provider: "夜间火车",
          number: "车次待核对",
          fromCode: "CNX",
          fromCity: "清迈",
          toCode: "BKK",
          toCity: "曼谷",
          departure: "18:20",
          arrival: "次日 06:20",
          mode: "TRAIN"
        }
      ]
    }
  ],

  routeMap: {
    image: "trip-map.png",
    alt: "泰国曼谷至清迈往返旅行路线插画",
    navigationUrl:
      "https://www.google.com/maps/dir/Bangkok,+Thailand/Chiang+Mai,+Thailand/Bangkok,+Thailand/",
    stops: [
      {
        number: 1,
        city: "曼谷",
        date: "9月29日－10月2日"
      },
      {
        number: 2,
        city: "清迈",
        date: "10月3日－10月5日"
      },
      {
        number: 3,
        city: "曼谷",
        date: "10月6日返程"
      }
    ]
  },

  upcomingEvents: [
  {
    datetime: "2026-09-29T14:40:00+08:00",
    title: "lxr · 东方航空MU5343 上海浦东T1→深圳宝安T3",
    icon: "✈️"
  },
  {
    datetime: "2026-09-29T18:55:00+08:00",
    title: "cxl · 澳门航空NX992 澳门→曼谷",
    icon: "✈️"
  },
  {
    datetime: "2026-09-29T23:40:00+08:00",
    title: "lxr、熊 · 香港航空HX767 香港→曼谷",
    icon: "✈️"
  },
  {
    datetime: "2026-09-30T05:15:00+07:00",
    title: "搭乘第一班地铁前往酒店",
    icon: "🚇"
  },
  {
    datetime: "2026-09-30T17:49:00+07:00",
    title: "IconSiam码头 · 湄南河观光船",
    icon: "⛴️"
  },
  {
    datetime: "2026-10-02T13:30:00+07:00",
    title: "Bangkok Shooting Range射击体验",
    icon: "🎯",
    approximate: true
  },
  {
    datetime: "2026-10-02T18:40:00+07:00",
    title: "曼谷→清迈 · 红丝绒夜间火车",
    icon: "🚆"
  },
  {
    datetime: "2026-10-03T07:40:00+07:00",
    title: "夜间火车抵达清迈",
    icon: "🚆"
  },
  {
    datetime: "2026-10-04T09:00:00+07:00",
    title: "粘粘瀑布 · 包车出发",
    icon: "🏞️",
    approximate: true
  },
  {
    datetime: "2026-10-04T13:00:00+07:00",
    title: "Skyline丛林飞跃酒店接送",
    icon: "🌳"
  },
  {
    datetime: "2026-10-05T18:20:00+07:00",
    title: "清迈→曼谷 · 夜间火车",
    icon: "🚆"
  },
  {
    datetime: "2026-10-06T06:20:00+07:00",
    title: "夜间火车抵达曼谷并前往机场",
    icon: "⚠️"
  },
  {
    datetime: "2026-10-06T11:00:00+07:00",
    title: "lxr、熊 · 国泰CX750 曼谷→香港",
    icon: "✈️"
  },
  {
    datetime: "2026-10-06T14:40:00+07:00",
    title: "cxl · 澳门航空NX935 曼谷→澳门",
    icon: "✈️"
  },
  {
    datetime: "2026-10-06T17:00:00+08:00",
    title: "lxr抵达香港后前往中山",
    icon: "🚗",
    approximate: true
  },
  {
    datetime: "2026-10-08T04:30:00+08:00",
    title: "lxr由中山出发前往深圳宝安机场",
    icon: "🚗",
    approximate: true
  },
  {
    datetime: "2026-10-08T07:15:00+08:00",
    title: "lxr · 东方航空MU5332 深圳宝安T3→上海浦东T1",
    icon: "✈️"
  }
],
  transport: [
  {
  date: "2026-09-29",
  category: "接驳航班",
  provider: "东方航空",
  number: "MU5343",
  travelers: "lxr",
  from: "上海浦东国际机场 T1",
  to: "深圳宝安国际机场 T3",
  departure: "14:40",
  arrival: "17:30",
  status: "已确认"
},
      date: "2026-09-29",
      category: "航班",
      provider: "澳门航空",
      number: "NX992",
      travelers: "cxl",
      from: "澳门国际机场",
      to: "曼谷素万纳普机场",
      departure: "18:55",
      arrival: "21:10",
      status: "已确认"
    },
    {
      date: "2026-09-29",
      category: "航班",
      provider: "香港航空",
      number: "HX767",
      travelers: "lxr、熊",
      from: "香港国际机场 T2",
      to: "曼谷素万纳普机场",
      departure: "23:40",
      arrival: "次日 01:40",
      status: "已确认"
    },
    {
      date: "2026-10-02",
      category: "夜间火车",
      provider: "红丝绒火车",
      number: "车次待核对",
      travelers: "全员",
      from: "Bang Sue Grand Station",
      to: "清迈",
      departure: "18:40",
      arrival: "10月3日 07:40",
      status: "已预订"
    },
    {
      date: "2026-10-05",
      category: "夜间火车",
      provider: "具体班次待核对",
      number: "",
      travelers: "全员",
      from: "清迈",
      to: "曼谷",
      departure: "18:20",
      arrival: "10月6日 06:20",
      status: "已预订"
    },
    {
      date: "2026-10-06",
      category: "航班",
      provider: "国泰航空",
      number: "CX750",
      travelers: "lxr、熊",
      from: "曼谷素万纳普机场",
      to: "香港国际机场 T1",
      departure: "11:00",
      arrival: "15:05",
      status: "已确认",
      risk: true
    },
    {
      date: "2026-10-06",
      category: "航班",
      provider: "澳门航空",
      number: "NX935",
      travelers: "cxl",
      from: "曼谷素万纳普机场",
      to: "澳门国际机场",
      departure: "14:40",
      arrival: "18:25",
      status: "已确认"
    },
{
  date: "2026-10-08",
  category: "返程接驳航班",
  provider: "东方航空",
  number: "MU5332",
  travelers: "lxr",
  from: "深圳宝安国际机场 T3",
  to: "上海浦东国际机场 T1",
  departure: "07:15",
  arrival: "09:45",
  status: "已确认"
}
  ],

  hotels: [
    {
      city: "曼谷",
      name: "Hilton Garden Inn Bangkok Riverside",
      address:
        "ICS Tower, K201/2, 2楼, Charoen Nakhon Rd, Khlong San",
      checkin: "2026-09-30",
      checkout: "2026-10-02",
      status: "已预订"
    },
    {
      city: "清迈",
      name: "U Nimman Chiang Mai",
      address:
        "Nimmana Haeminda Rd Lane 1, Suthep, Mueang Chiang Mai District, Chiang Mai",
      checkin: "2026-10-03",
      checkout: "2026-10-05",
      status: "已预订"
    }
  ],

  days: [
    {
  date: "2026-09-29",
  city: "上海／香港／澳门→曼谷",
  title: "启程与前程接驳",
  items: [
    {
      time: "14:40",
      title: "lxr乘东方航空MU5343",
      note: "上海浦东国际机场T1出发，17:30抵达深圳宝安国际机场T3。",
      place: "Shanghai Pudong International Airport Terminal 1"
    },
    {
      time: "抵深后",
      title: "lxr由深圳前往香港机场",
      note:
        "深圳宝安机场至香港机场的具体交通方式、过关时间及行李安排待确认。",
      status: "待确认"
    },
    {
      time: "18:55",
      title: "cxl乘澳门航空NX992",
      note: "澳门出发，21:10抵达曼谷。",
      place: "Macau International Airport"
    },
    {
      time: "23:40",
      title: "lxr、熊乘香港航空HX767",
      note: "香港国际机场T2出发，次日01:40抵达曼谷。",
      place: "Hong Kong International Airport Terminal 2"
    }
  ]
},
    {
      date: "2026-09-30",
      city: "曼谷",
      title: "抵达与城市漫游",
      items: [
        {
          time: "01:40",
          title: "lxr、熊抵达素万纳普机场",
          note: "",
          place: "Suvarnabhumi Airport"
        },
        {
          time: "05:15",
          title: "搭乘第一班地铁",
          note: "具体线路、首班时间和运营情况待确认。"
        },
        {
          time: "07:00",
          title: "抵达曼谷酒店",
          note: "寄存行李，并询问能否提前入住。",
          place: "Hilton Garden Inn Bangkok Riverside"
        },
        {
          time: "中午",
          title: "午餐与饮品",
          note: "备选：Boost、椰奶饮品。"
        },
        {
          time: "下午",
          title: "四面佛参拜",
          note: "实际交通时间待确认。",
          place: "Erawan Shrine Bangkok"
        },
        {
          time: "下午",
          title: "按摩",
          note: "店铺和时间待确认。"
        },
        {
          time: "17:49",
          title: "湄南河观光船",
          note:
            "从IconSiam码头乘蓝色观光船。原记录40泰铢、三站到郑王庙，请复核票价和班次。",
          place: "ICONSIAM Pier"
        },
        {
          time: "晚上",
          title: "返回酒店休息",
          note: ""
        }
      ]
    },
    {
      date: "2026-10-01",
      city: "曼谷",
      title: "购物与美食",
      items: [
        {
          time: "上午",
          title: "IconSiam",
          note:
            "Pet Safari、Big Camera、Aesop生姜滚珠、Thong Smith Boat Noodles。",
          place: "ICONSIAM"
        },
        {
          time: "中午",
          title: "CityWalk／Factory No.1",
          note: "具体位置和营业时间待确认。",
          place: "Factory No.1 Bangkok"
        },
        {
          time: "下午",
          title: "Ari街区",
          note:
            "Crepe、Ace Jolun、Soi 1牛肉面、Nana Coffee。",
          place: "Ari Bangkok"
        },
        {
          time: "傍晚",
          title: "Stussy曼谷限定",
          note: "库存和排队情况待确认。",
          place: "Stussy Bangkok"
        },
        {
          time: "日落前",
          title: "Sky Flyer日落飞椅",
          note: "地址、票价和停止入场时间待确认。",
          place: "Sky Flyer Bangkok"
        },
        {
          time: "晚上",
          title: "朱拉隆功夜市",
          note: "计划前往Pa Nee Kung Chae Nam Pla生腌店。",
          place: "Chulalongkorn Night Market Bangkok"
        }
      ]
    },
    {
      date: "2026-10-02",
      city: "曼谷→清迈",
      title: "早午餐、射击与夜间火车",
      items: [
        {
          time: "上午",
          title: "Nai Lert Park早午餐",
          note: "备选Samantao Heritage Coffee，营业时间待确认。",
          place: "Nai Lert Park Heritage Home"
        },
        {
          time: "退房前",
          title: "酒店退房及寄存行李",
          note: "酒店退房时间待确认。",
          place: "Hilton Garden Inn Bangkok Riverside"
        },
        {
          time: "下午",
          title: "Bangkok Shooting Range",
          note:
            "可通过Klook、大众点评或携程预约。具体时间、价格及行李安排待确认。",
          place: "Bangkok Shooting Range Phaya Thai",
          status: "待预约"
        },
        {
          time: "18:40",
          title: "红丝绒夜间火车前往清迈",
          note:
            "确认车站、站台和取票方式，并为取行李及前往车站预留时间。",
          place: "Krung Thep Aphiwat Central Terminal"
        },
        {
          time: "夜间",
          title: "卧铺体验",
          note: "随身携带小毯子和眼罩。"
        }
      ]
    },
    {
      date: "2026-10-03",
      city: "清迈",
      title: "市集、咖啡与兴趣班",
      items: [
        {
          time: "07:40",
          title: "抵达清迈",
          note: "到达时间可能受铁路运行影响。",
          place: "Chiang Mai Railway Station"
        },
        {
          time: "上午",
          title: "寄存行李与JJ Market",
          note: "酒店正式入住时间待确认。",
          place: "Jing Jai Market Chiang Mai"
        },
        {
          time: "中午",
          title: "Joost山竹冰沙",
          note: "门店和库存待确认。",
          place: "Joost Chiang Mai"
        },
        {
          time: "下午",
          title: "宁曼路与Lot维也纳咖啡",
          note: "具体店铺位置待确认。",
          place: "Nimman Road Chiang Mai"
        },
        {
          time: "下午",
          title: "海娜花臂纹身",
          note: "需提前通过Instagram预约，价格待核对。",
          status: "待预约"
        },
        {
          time: "晚间",
          title: "Guu Fusion Roti & Tea",
          note: "营业状态待确认。",
          place: "Guu Fusion Roti & Tea Chiang Mai"
        },
        {
          time: "晚间",
          title: "打铁工坊／画墙艺术",
          note: "可选体验，具体项目待确认。"
        }
      ]
    },
    {
      date: "2026-10-04",
      city: "清迈",
      title: "瀑布与丛林飞跃",
      items: [
        {
          time: "上午",
          title: "粘粘瀑布",
          note: "计划包车前往，携带替换衣物。",
          place: "Bua Tong Sticky Waterfalls"
        },
        {
          time: "13:00－13:30",
          title: "Skyline丛林飞跃酒店接送",
          note:
            "已通过携程预订；接车位置、活动时长及返程时间待确认。",
          status: "已预订"
        },
        {
          time: "下午",
          title: "按摩",
          note: "结合丛林飞跃结束时间安排。"
        },
        {
          time: "全天",
          title: "兴趣班与集市",
          note:
            "备选瑜伽、拳击、尊巴；付款方式以现场为准。"
        }
      ]
    },
    {
      date: "2026-10-05",
      city: "清迈→曼谷",
      title: "清迈最后一天",
      items: [
        {
          time: "上午",
          title: "兴趣班",
          note: "可选，需为退房和前往车站预留时间。"
        },
        {
          time: "退房前",
          title: "清迈酒店退房",
          note: "退房后行李寄存安排待确认。",
          place: "U Nimman Chiang Mai"
        },
        {
          time: "18:20",
          title: "夜间火车返回曼谷",
          note:
            "预计10月6日06:20抵达；确认车次、车站和取票方式。",
          place: "Chiang Mai Railway Station"
        }
      ]
    },
    {
      date: "2026-10-06",
      city: "曼谷→香港／澳门",
      title: "返程",
      risk: true,
      warning:
        "06:20抵达曼谷后，lxr、熊衔接11:00国际航班。必须核实到达车站、机场交通、值机截止时间及火车晚点替代方案。",
      items: [
        {
          time: "06:20",
          title: "夜间火车抵达曼谷",
          note: "实际到站时间和准点率待确认。"
        },
        {
          time: "抵达后",
          title: "前往素万纳普机场",
          note: "lxr、熊应优先前往机场。",
          place: "Suvarnabhumi Airport"
        },
        {
          time: "11:00",
          title: "lxr、熊乘国泰航空CX750",
          note: "曼谷起飞，15:05抵达香港国际机场T1。"
        },
        {
  time: "15:05",
  title: "lxr、熊抵达香港",
  note: "抵达香港国际机场T1。"
},
{
  time: "抵港后",
  title: "lxr前往中山",
  note:
    "具体交通方式、出发地点、过关安排和预计抵达时间待确认。",
  status: "待确认",
  place: "Zhongshan Guangdong"
},
        {
          time: "14:40",
          title: "cxl乘澳门航空NX935",
          note: "曼谷起飞，18:25抵达澳门。"
        },
        {
  date: "2026-10-08",
  city: "中山→深圳→上海",
  title: "lxr返程接驳",
  items: [
    {
      time: "待确认",
      title: "由中山出发前往深圳宝安机场",
      note:
        "需要根据道路情况、航班值机截止时间和托运行李安排确认送机出发时间。",
      status: "待确认",
      place: "Shenzhen Bao'an International Airport Terminal 3"
    },
    {
      time: "07:15",
      title: "lxr乘东方航空MU5332",
      note:
        "深圳宝安国际机场T3出发，09:45抵达上海浦东国际机场T1。",
      place: "Shenzhen Bao'an International Airport Terminal 3"
    },
    {
      time: "09:45",
      title: "抵达上海浦东机场",
      note: "抵达上海浦东国际机场T1。",
      place: "Shanghai Pudong International Airport Terminal 1"
    }
  ]
}
      ]
    }
  ],

  places: {
    "景点与体验": [
      {
        name: "四面佛",
        note: "9月30日下午，开放安排待核对。",
        query: "Erawan Shrine Bangkok"
      },
      {
        name: "湄南河观光船",
        note: "IconSiam码头出发，票价及班次待核对。",
        query: "ICONSIAM Pier"
      },
      {
        name: "Bangkok Shooting Range",
        note: "10月2日下午，预约时间与价格待确认。",
        query: "Bangkok Shooting Range Phaya Thai"
      },
      {
        name: "粘粘瀑布",
        note: "10月4日上午，计划包车前往。",
        query: "Bua Tong Sticky Waterfalls"
      },
      {
        name: "Skyline丛林飞跃",
        note: "已预订酒店接送，活动详情待确认。",
        query: "Skyline Adventure Chiang Mai"
      }
    ],

    "餐厅与咖啡": [
      {
        name: "Thong Smith Boat Noodles",
        note: "计划在IconSiam用餐。",
        query: "Thong Smith ICONSIAM"
      },
      {
        name: "Nana Coffee",
        note: "Ari街区备选。",
        query: "Nana Coffee Roasters Ari"
      },
      {
        name: "Pa Nee Kung Chae Nam Pla",
        note: "朱拉隆功夜市生腌店。",
        query: "Pa Nee Kung Chae Nam Pla Bangkok"
      },
      {
        name: "Joost",
        note: "计划购买山竹冰沙，门店待确认。",
        query: "Joost Chiang Mai"
      },
      {
        name: "Guu Fusion Roti & Tea",
        note: "10月3日晚间用餐。",
        query: "Guu Fusion Roti & Tea Chiang Mai"
      }
    ],

    "购物": [
      {
        name: "7-Eleven灯牌",
        note: "优先级：⭐⭐⭐。",
        query: "7-Eleven Bangkok"
      },
      {
        name: "Stussy曼谷限定",
        note: "优先级：⭐⭐⭐，库存待确认。",
        query: "Stussy Bangkok"
      },
      {
        name: "Aesop生姜滚珠",
        note: "IconSiam，优先级：⭐⭐。",
        query: "Aesop ICONSIAM"
      },
      {
        name: "Montbell泰国限定",
        note: "曼谷，具体门店待确认。",
        query: "Montbell Bangkok"
      },
      {
        name: "Big Camera电子产品",
        note: "IconSiam，按需购买。",
        query: "Big Camera ICONSIAM"
      }
    ]
  },

  bookings: [
    {
      name: "曼谷→清迈夜间火车",
      date: "2026-10-02",
      time: "18:40",
      status: "已预订",
      note: "车次、车站、取票方式和登车时间需复核。"
    },
    {
      name: "清迈→曼谷夜间火车",
      date: "2026-10-05",
      time: "18:20",
      status: "已预订",
      note: "预计次日06:20抵达，需制定晚点预案。"
    },
    {
      name: "Skyline丛林飞跃",
      date: "2026-10-04",
      time: "13:00－13:30接送",
      status: "已预订",
      note: "已通过携程预订。"
    },
    {
      name: "Bangkok Shooting Range",
      date: "2026-10-02",
      time: "下午",
      status: "待预约",
      note: "可查看Klook、大众点评或携程。"
    },
    {
      name: "海娜花臂纹身",
      date: "2026-10-03",
      time: "下午",
      status: "待预约",
      note: "计划通过Instagram预约。"
    },
    {
      name: "空中瑜伽／拳击课",
      date: "待确认",
      time: "待确认",
      status: "待预约",
      note: "清迈兴趣班。"
    }
  ],

  todos: [
    "预约10月3日海娜花臂纹身",
    "预约清迈空中瑜伽",
    "预约清迈拳击课",
    "预约Bangkok Shooting Range",
    "购买泰国手机卡",
    "在清迈Daiso购买瑜伽垫",
    "准备粘粘瀑布替换衣物",
    "确认10月6日曼谷火车站至机场路线和耗时",
    "确认CX750值机截止时间",
    "制定夜间火车晚点替代方案",
    "复核景点、餐厅和项目价格及营业时间",
    "复核签证、入境规定和交通规则"
  ],

  packing: [
    "小毯子 × 2（夜间火车）",
    "眼罩（夜间火车遮光）",
    "长袖外套",
    "长裤或半身长裙",
    "过滤花洒",
    "粘粘瀑布替换衣物",
    "信用卡",
    "Apple Pay",
    "泰铢现金"
  ],

  sharedExpense: {
    title: "旅行共享账本",
    description:
      "记录日期、项目、类别、金额、币种、付款人和参与人。",
    url: "",
    status: "待绑定在线表格"
  }
};
