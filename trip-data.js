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

  transport: [
     journeyCards: [
    {
      id: "lxr-bear-flights",
      type: "航班",
      label: "FLIGHT 01 / 03",
      title: "lxr & 熊 · 往返航班",
      travelers: "lxr、熊",
      nextDeparture: "2026-09-29T23:40:00+08:00",
      segments: [
        {
          date: "9月29日",
          airline: "香港航空",
          number: "HX767",
          fromCode: "HKG",
          fromCity: "香港",
          toCode: "BKK",
          toCity: "曼谷",
          departure: "23:40",
          arrival: "次日 01:40"
        },
        {
          date: "10月6日",
          airline: "国泰航空",
          number: "CX750",
          fromCode: "BKK",
          fromCity: "曼谷",
          toCode: "HKG",
          toCity: "香港",
          departure: "11:00",
          arrival: "15:05"
        }
      ]
    },
    {
      id: "cxl-flights",
      type: "航班",
      label: "FLIGHT 02 / 03",
      title: "cxl · 往返航班",
      travelers: "cxl",
      nextDeparture: "2026-09-29T18:55:00+08:00",
      segments: [
        {
          date: "9月29日",
          airline: "澳门航空",
          number: "NX992",
          fromCode: "MFM",
          fromCity: "澳门",
          toCode: "BKK",
          toCity: "曼谷",
          departure: "18:55",
          arrival: "21:10"
        },
        {
          date: "10月6日",
          airline: "澳门航空",
          number: "NX935",
          fromCode: "BKK",
          fromCity: "曼谷",
          toCode: "MFM",
          toCity: "澳门",
          departure: "14:40",
          arrival: "18:25"
        }
      ]
    },
    {
      id: "night-trains",
      type: "夜间火车",
      label: "TRAIN 03 / 03",
      title: "全员 · 往返夜车",
      travelers: "lxr、熊、cxl",
      nextDeparture: "2026-10-02T18:40:00+07:00",
      segments: [
        {
          date: "10月2日",
          airline: "红丝绒夜间火车",
          number: "车次待核对",
          fromCode: "BKK",
          fromCity: "曼谷",
          toCode: "CNX",
          toCity: "清迈",
          departure: "18:40",
          arrival: "次日 07:40"
        },
        {
          date: "10月5日",
          airline: "夜间火车",
          number: "车次待核对",
          fromCode: "CNX",
          fromCity: "清迈",
          toCode: "BKK",
          toCity: "曼谷",
          departure: "18:20",
          arrival: "次日 06:20"
        }
      ]
    }
  ],

  routeMap: {
    image: "trip-map.png",
    alt: "泰国曼谷至清迈往返旅行路线插画地图",
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
        date: "10月6日"
      }
    ],
    navigationUrl:
      "https://www.google.com/maps/dir/Bangkok,+Thailand/Chiang+Mai,+Thailand/Bangkok,+Thailand/"
  },

  sharedExpense: {
    title: "多人共享记账",
    description: "记录付款人、参与人、金额和费用类别，旅行结束后统一分账。",
    url: "",
    status: "待绑定在线表格"
  },
    {
      date: "2026-09-29",
      category: "航班",
      provider: "澳门航空",
      number: "NX992",
      travelers: "cxl",
      from: "澳门",
      to: "曼谷",
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
      number: "",
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
      provider: "待核对具体班次",
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
      from: "曼谷",
      to: "澳门",
      departure: "14:40",
      arrival: "18:25",
      status: "已确认"
    }
  ],

  days: [
    {
      date: "2026-09-29",
      city: "香港／澳门→曼谷",
      title: "启程",
      items: [
        {
          time: "18:55",
          title: "cxl 乘坐澳门航空 NX992",
          note: "澳门出发，21:10抵达曼谷。",
          place: "Macau International Airport"
        },
        {
          time: "23:40",
          title: "lxr、熊乘坐香港航空 HX767",
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
          title: "lxr、熊抵达曼谷",
          note: "抵达素万纳普机场。",
          place: "Suvarnabhumi Airport"
        },
        {
          time: "05:15",
          title: "搭乘第一班地铁",
          note: "具体线路、首班时间和运营情况待确认。"
        },
        {
          time: "07:00",
          title: "到达曼谷酒店",
          note: "预计车程约1小时40分钟；寄存行李并询问能否提前入住。",
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
          note: "原计划往返约2小时，实际交通时间待确认。",
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
            "计划从IconSiam码头乘坐蓝色观光船，原记录价格40泰铢、三站直达郑王庙；票价、班次和运营时间请再次核对。",
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
            "B1 Pet Safari（猪脚姜购物）、Big Camera、Aesop生姜滚珠、Thong Smith Boat Noodles。",
          place: "ICONSIAM"
        },
        {
          time: "中午",
          title: "CityWalk／Factory No.1",
          note: "具体店铺位置与营业时间待确认。",
          place: "Factory No.1 Bangkok"
        },
        {
          time: "下午",
          title: "Ari街区",
          note:
            "Crepe、Ace Jolun（Dirty Burgers）、Soi 1牛肉面、Nana Coffee。",
          place: "Ari Bangkok"
        },
        {
          time: "傍晚",
          title: "Stussy曼谷限定",
          note: "预计可能需要排队；库存和营业时间待确认。",
          place: "Stussy Bangkok"
        },
        {
          time: "日落前",
          title: "Sky Flyer日落飞椅",
          note:
            "原计划最晚19:00，飞猪可购票；项目名称、地址、票价和停止入场时间待确认。",
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
      title: "早午餐与夜间火车",
      items: [
        {
          time: "上午",
          title: "Neilert Prak早午餐",
          note: "备选：Samantao Heritage Coffee。地点拼写及营业时间待确认。",
          place: "Nai Lert Park Heritage Home"
        },
        {
          time:"下午",
          title: "Bangkok Shooting Range曼谷市区射击场",
          note: "klook,大众点评, Ctrip预定",
          place: "Bangkok Shooting Range • Phaya Thai"
        },   
        {
          time: "退房前",
          title: "曼谷酒店退房",
          note: "退房时间待向酒店确认。",
          place: "Hilton Garden Inn Bangkok Riverside"
        },
        {
          time: "18:40",
          title: "乘坐红丝绒夜间火车",
          note:
            "从Bang Sue Grand Station出发前往清迈。请提前确认车站、站台、取票方式和登车时间。",
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
          note: "实际到达时间可能受铁路运行影响。",
          place: "Chiang Mai Railway Station"
        },
        {
          time: "上午",
          title: "寄存行李并前往JJ Market",
          note: "酒店正式入住时间待确认。",
          place: "Jing Jai Market Chiang Mai"
        },
        {
          time: "中午",
          title: "Joost山竹冰沙",
          note: "具体门店、库存和营业时间待确认。",
          place: "Joost Chiang Mai"
        },
        {
          time: "下午",
          title: "宁曼路与Lot维也纳咖啡",
          note: "店名或具体位置待确认。",
          place: "Nimman Road Chiang Mai"
        },
        {
          time: "下午",
          title: "海娜花臂纹身",
          note:
            "需要提前通过Instagram预约；原预算约60元，实际价格请再次核对。",
          status: "待预约"
        },
        {
          time: "晚间",
          title: "Guu Fusion Roti & Tea",
          note: "用餐时间与营业状态待确认。",
          place: "Guu Fusion Roti & Tea Chiang Mai"
        },
        {
          time: "晚间",
          title: "打铁工坊／画墙艺术",
          note: "可选体验，具体项目待确认。"
        },
        {
          time: "全天",
          title: "清迈兴趣班",
          note: "具体课程及时间待预约。"
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
          note: "计划自行包车；携带一套替换衣物。",
          place: "Bua Tong Sticky Waterfalls"
        },
        {
          time: "13:00–13:30",
          title: "Skyline丛林飞跃酒店接送",
          note:
            "已通过携程预订。具体接车位置、活动时长、装备要求和返程时间待确认。",
          status: "已预订"
        },
        {
          time: "下午",
          title: "按摩",
          note: "需结合丛林飞跃结束时间安排。"
        },
        {
          time: "全天",
          title: "兴趣班",
          note: "备选：射击、瑜伽、拳击、尊巴；具体课程待预约。"
        },
        {
          time: "全天",
          title: "逛集市",
          note: "是否接受信用卡或Apple Pay请以现场为准。"
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
          note: "可选，需为退房及前往火车站预留时间。"
        },
        {
          time: "退房前",
          title: "清迈酒店退房",
          note: "退房后行李寄存安排待确认。",
          place: "U Nimman Chiang Mai"
        },
        {
          time: "18:20",
          title: "乘坐夜间火车返回曼谷",
          note:
            "预计10月6日06:20抵达。具体车次、到达车站、取票和登车时间待确认。",
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
        "06:20抵达曼谷后衔接11:00国际航班时间紧张。必须核实火车到达车站、前往素万纳普机场的时间、值机截止时间及延误替代方案。",
      items: [
        {
          time: "06:20",
          title: "夜间火车抵达曼谷",
          note: "实际到达车站和准点率待确认。"
        },
        {
          time: "抵达后",
          title: "前往曼谷机场",
          note:
            "交通方式和预计耗时待确认。lxr、熊应优先前往素万纳普机场。",
          place: "Suvarnabhumi Airport"
        },
        {
          time: "11:00",
          title: "lxr、熊乘坐国泰航空CX750",
          note: "曼谷飞往香港，预计15:05抵达香港国际机场T1。"
        },
        {
          time: "14:40",
          title: "cxl乘坐澳门航空NX935",
          note: "曼谷飞往澳门，预计18:25抵达。"
        }
      ]
    }
  ],

  places: {
    "景点与体验": [
      {
        name: "四面佛",
        note: "9月30日下午；开放安排待核对。",
        query: "Erawan Shrine Bangkok"
      },
      {
        name: "湄南河观光船",
        note: "IconSiam码头出发；票价及班次待核对。",
        query: "ICONSIAM Pier"
      },
      {
        name: "Sky Flyer",
        note: "日落飞椅；地址、票价与营业时间待确认。",
        query: "Sky Flyer Bangkok"
      },
      {
        name: "粘粘瀑布",
        note: "10月4日上午；计划包车前往。",
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
        name: "Samantao Heritage Coffee",
        note: "10月2日早午餐备选；名称待核对。",
        query: "Samantao Heritage Coffee Bangkok"
      },
      {
        name: "Joost",
        note: "计划购买山竹冰沙；门店待确认。",
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
        note: "各地7-Eleven，优先级：⭐⭐⭐。",
        query: "7-Eleven Bangkok"
      },
      {
        name: "Stussy曼谷限定",
        note: "优先级：⭐⭐⭐；库存待确认。",
        query: "Stussy Bangkok"
      },
      {
        name: "Aesop生姜滚珠",
        note: "IconSiam，优先级：⭐⭐。",
        query: "Aesop ICONSIAM"
      },
      {
        name: "Montbell泰国限定",
        note: "曼谷，优先级：⭐⭐；门店待确认。",
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
      note: "预计次日06:20抵达，需确认到达车站和延误预案。"
    },
    {
      name: "Skyline丛林飞跃",
      date: "2026-10-04",
      time: "13:00–13:30酒店接送",
      status: "已预订",
      note: "已通过携程预订，订单链接未公开。"
    },
    {
      name: "海娜花臂纹身",
      date: "2026-10-03",
      time: "下午",
      status: "待预约",
      note: "通过Instagram预约；价格待核对。"
    },
    {
      name: "空中瑜伽",
      date: "待确认",
      time: "待确认",
      status: "待预约",
      note: "清迈兴趣班。"
    },
    {
      name: "拳击课",
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
    "购买泰国手机卡",
    "在清迈Daiso购买瑜伽垫",
    "准备粘粘瀑布替换衣物",
    "确认10月6日曼谷火车站至机场路线和耗时",
    "确认CX750国际航班值机截止时间",
    "制定夜间火车晚点时的替代交通方案",
    "复核景点、餐厅和项目的价格及营业时间",
    "复核签证、入境规定和交通规则"
  ],

  packing: [
    "小毯子 × 2（夜间火车使用）",
    "眼罩（夜间火车遮光）",
    "长袖外套",
    "长裤或半身长裙",
    "过滤花洒",
    "粘粘瀑布替换衣物",
    "信用卡",
    "Apple Pay",
    "泰铢现金"
  ],

  budget: [],

  emergency: []
};
