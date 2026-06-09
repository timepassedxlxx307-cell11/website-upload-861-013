(() => {
    const records = [
    {
        "title": "三人兄弟",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪/亲情",
        "tags": [
            "同父异母",
            "黑帮遗产",
            "兄弟反目",
            "港式暴力美学",
            "犯罪",
            "亲情"
        ],
        "line": "黑帮大佬临终留下遗言:三兄弟中只有一人能继承遗产,但必须杀了另外两人。",
        "cover": "./1.jpg",
        "url": "./videos/video-0001.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "要死还是要活",
        "year": "2025",
        "region": "西班牙",
        "type": "电影",
        "genre": "喜剧,西部",
        "tags": [
            "决斗",
            "荒诞",
            "生存",
            "喜剧",
            "西部"
        ],
        "line": "两个互相仇恨的枪手在决斗前夕,同时被一个吉普赛女巫诅咒:谁先动手谁就会死,谁不动手谁就会活得生不如死。",
        "cover": "./2.jpg",
        "url": "./videos/video-0002.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "夫妻英烈",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "战争,剧情,历史",
        "tags": [
            "抗日",
            "真实事件",
            "悲壮",
            "战争",
            "剧情",
            "历史"
        ],
        "line": "一对新婚夫妇在抗日战场上失散,三年后,他们在敌方的一次暗杀名单上,看到了彼此的照片。",
        "cover": "./3.jpg",
        "url": "./videos/video-0003.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "三天一生",
        "year": "2022",
        "region": "法国",
        "type": "电影",
        "genre": "惊悚剧情",
        "tags": [
            "悬疑",
            "犯罪",
            "心理",
            "雨天",
            "小镇秘密",
            "惊悚剧情"
        ],
        "line": "十二岁男孩犯下不可挽回的罪行,他必须在暴风雨来临前的三天里掩盖一生。",
        "cover": "./4.jpg",
        "url": "./videos/video-0004.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "猎鹰飞过",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "战争、动作、历史",
        "tags": [
            "二战",
            "飞行员",
            "兄弟连",
            "空战",
            "实拍特效",
            "战争"
        ],
        "line": "二战后期,一支黑人战斗机中队“塔斯克基飞行员”奉命执行一次必死的柏林轰炸掩护任务。",
        "cover": "./5.jpg",
        "url": "./videos/video-0005.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "感恩节杀戮",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚,血腥",
        "tags": [
            "节日恐怖",
            "面具杀手",
            "小镇疑云",
            "恐怖",
            "惊悚",
            "血腥"
        ],
        "line": "小镇丰收节庆上,戴着火鸡面具的杀手用传统农具开始行刑式杀戮。",
        "cover": "./6.jpg",
        "url": "./videos/video-0006.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "寻找薇薇安·迈尔",
        "year": "2026",
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情/悬疑/传记",
        "tags": [
            "摄影",
            "身份之谜",
            "女性视角",
            "文艺",
            "慢热",
            "剧情"
        ],
        "line": "一个不得志的记者,在追查一张神秘底片的过程中,发现背后的摄影师竟是自己沉默寡言的保姆。",
        "cover": "./7.jpg",
        "url": "./videos/video-0007.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "风流女伯爵",
        "year": "2009",
        "region": "匈牙利",
        "type": "电影",
        "genre": "历史,惊悚",
        "tags": [
            "贵族",
            "血腥",
            "女权",
            "传说",
            "暗黑",
            "历史"
        ],
        "line": "历史上最嗜血的女伯爵,她相信少女的鲜血能让她永葆青春,直到刑场上的绞索勒断了这个梦。",
        "cover": "./8.jpg",
        "url": "./videos/video-0008.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "神鬼战士",
        "year": "2000",
        "region": "美国",
        "type": "电影",
        "genre": "动作,历史,冒险",
        "tags": [
            "角斗士",
            "复仇",
            "罗马",
            "动作",
            "历史",
            "冒险"
        ],
        "line": "被篡位将军陷害的罗马军团首领沦为奴隶,在竞技场杀出血路,向暴君发起终极复仇。",
        "cover": "./9.jpg",
        "url": "./videos/video-0009.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "史蒂文斯小姐",
        "year": "2016",
        "region": "美国",
        "type": "电影",
        "genre": "剧情、师生、文艺",
        "tags": [
            "师生恋",
            "舞台剧",
            "成长创伤",
            "女性视角",
            "独立电影",
            "剧情"
        ],
        "line": "一位实习女老师带学生去戏剧节途中,与天才男学生发生了危险的心灵共振。",
        "cover": "./10.jpg",
        "url": "./videos/video-0010.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "康熙微服私访记1",
        "year": "1997",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装/剧情/喜剧",
        "tags": [
            "康熙帝",
            "民间故事",
            "微服查案",
            "经典老剧",
            "古装",
            "剧情"
        ],
        "line": "康熙皇帝脱下龙袍穿上布衣,带着太监和尚书在民间一边断案一边谈恋爱。",
        "cover": "./11.jpg",
        "url": "./videos/video-0011.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "爸妈被我绑架了",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧/家庭",
        "tags": [
            "反向养育",
            "网瘾父母",
            "家庭治疗",
            "喜剧",
            "家庭"
        ],
        "line": "高三学霸为了阻止沉迷短视频的父母离婚,将他们关在家里进行“戒断治疗”。",
        "cover": "./12.jpg",
        "url": "./videos/video-0012.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "大西洋帝国第三季",
        "year": "2012",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情/犯罪",
        "tags": [
            "禁酒令 黑帮 权力斗争 历史 多线叙事",
            "剧情",
            "犯罪"
        ],
        "line": "努基的统治遭遇新敌人——来自芝加哥的疯狂黑帮头目吉普·罗塞蒂,大西洋城血流成河。",
        "cover": "./13.jpg",
        "url": "./videos/video-0013.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "风流罪过",
        "year": "1975",
        "region": "法国/意大利",
        "type": "电影",
        "genre": "喜剧/爱情",
        "tags": [
            "情色",
            "讽刺",
            "中产阶级",
            "荒诞",
            "喜剧",
            "爱情"
        ],
        "line": "一位看似忠厚的外省法官,在巴黎判决了无数通奸案,回到乡下却发现自己的妻子正在与人偷情。",
        "cover": "./14.jpg",
        "url": "./videos/video-0014.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "孽海情波",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情、剧情、悬疑",
        "tags": [
            "前世今生",
            "海上凶宅",
            "禁忌之恋",
            "爱情",
            "剧情",
            "悬疑"
        ],
        "line": "她买下一艘古董游艇后发现,自己与船主在1970年代曾是一对殉情的情侣。",
        "cover": "./15.jpg",
        "url": "./videos/video-0015.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "威莉温基",
        "year": "1998",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,悬疑,心理",
        "tags": [
            "少女失踪",
            "邪教",
            "美国小镇",
            "压抑",
            "女性视角",
            "剧情"
        ],
        "line": "沉默的少女威莉温基在小镇失踪了,唯一记得她存在的,是被全校孤立的另一个女孩。",
        "cover": "./16.jpg",
        "url": "./videos/video-0016.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "爱在回响",
        "year": "2014",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情、剧情、家庭",
        "tags": [
            "失忆",
            "寻回",
            "亲情",
            "催泪",
            "爱情",
            "剧情"
        ],
        "line": "一场车祸让她忘记了丈夫,却唯独记得两人恋爱时那首未写完的歌。",
        "cover": "./17.jpg",
        "url": "./videos/video-0017.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "战火爱火",
        "year": "2024",
        "region": "乌克兰/波兰",
        "type": "电影",
        "genre": "战争,爱情,剧情",
        "tags": [
            "战时绝恋",
            "狙击手恋人",
            "废墟浪漫",
            "生死电台",
            "战争",
            "爱情"
        ],
        "line": "一对被迫分隔在交战双方阵营的恋人,依靠战场上的子弹弹道和摩斯电码传递那句“活下去”。",
        "cover": "./18.jpg",
        "url": "./videos/video-0018.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "好运来临",
        "year": "2019",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,喜剧",
        "tags": [
            "彩票",
            "中奖",
            "人性考验",
            "黑色幽默",
            "剧情",
            "喜剧"
        ],
        "line": "一个穷人中了六合彩头奖,却弄丢了彩票;一个富商捡到了彩票,却中风失忆了。",
        "cover": "./19.jpg",
        "url": "./videos/video-0019.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "金刚斗恐龙",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "动作、科幻、怪兽",
        "tags": [
            "巨兽对决",
            "特效大片",
            "基因突变",
            "动作",
            "科幻",
            "怪兽"
        ],
        "line": "一只被基因改造过的金刚从实验室逃脱后,不得不与从地心裂缝爬出的霸王龙族群展开生死决战。",
        "cover": "./20.jpg",
        "url": "./videos/video-0020.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "梦断影都",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,黑色电影,传记",
        "tags": [
            "好莱坞",
            "制片厂",
            "梦想破灭",
            "1950年代",
            "剧情",
            "黑色电影"
        ],
        "line": "1955年,一位怀揣编剧梦的女孩成为当红女星的替身,却发现自己的创意被层层剽窃。",
        "cover": "./21.jpg",
        "url": "./videos/video-0021.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "魔法少女欧拉:学校的秘密",
        "year": "2025",
        "region": "日本",
        "type": "TV 动画",
        "genre": "奇幻/战斗/校园",
        "tags": [
            "魔法少女",
            "黑暗童话",
            "学院阴谋",
            "契约",
            "奇幻",
            "战斗"
        ],
        "line": "欧拉发现魔法少女的使命不是打败怪物,而是维护学校地下那台吞噬学生情绪的巨大机器。",
        "cover": "./22.jpg",
        "url": "./videos/video-0022.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "大侠霍元甲国语",
        "year": "2024",
        "region": "中国大陆/香港",
        "type": "电视剧",
        "genre": "动作/传记/历史",
        "tags": [
            "武侠",
            "民族精神",
            "精武门",
            "动作",
            "传记",
            "历史"
        ],
        "line": "霍元甲在擂台上击败俄国力士后,发现背后牵动着日军入侵天津的更大阴谋。",
        "cover": "./23.jpg",
        "url": "./videos/video-0023.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "昆妮",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "剧情,喜剧,成长",
        "tags": [
            "黑人女主",
            "伦敦生活",
            "自我认同",
            "女性成长",
            "英式幽默",
            "剧情"
        ],
        "line": "一个被白人家庭收养的牙买加裔女孩,在25岁那年被男友甩了之后,决定去寻找自己的亲生父母。",
        "cover": "./24.jpg",
        "url": "./videos/video-0024.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "部门报告",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "职场/喜剧",
        "tags": [
            "公务员",
            "黑色幽默",
            "体制内",
            "职场",
            "喜剧"
        ],
        "line": "市政厅“信访办”五人组,专业处理“外星人入侵导致井盖丢失”等奇葩投诉。 DEPARTMENT: 韩国",
        "cover": "./25.jpg",
        "url": "./videos/video-0025.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "盐湖计划",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,犯罪",
        "tags": [
            "盐湖",
            "失踪",
            "姐妹",
            "真相",
            "悬疑",
            "犯罪"
        ],
        "line": "姐姐十年前在茶卡盐湖失踪,妹妹成为盐湖导游,每年接待的游客里,都有一个藏着姐姐秘密的人。",
        "cover": "./26.jpg",
        "url": "./videos/video-0026.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "恩将仇报",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚,犯罪",
        "tags": [
            "复仇",
            "反转",
            "人性",
            "惊悚",
            "犯罪"
        ],
        "line": "男人救下落水女孩,女孩全家登门道谢,他却发现这家人是来杀他的。",
        "cover": "./27.jpg",
        "url": "./videos/video-0027.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "长夜绵绵",
        "year": "1982",
        "region": "法国",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "法国文艺",
            "一夜情",
            "巴黎",
            "侯麦风格",
            "对话驱动",
            "爱情"
        ],
        "line": "巴黎的一个夏夜,九个孤独的灵魂在九段交错的对白里寻找爱,或寻找离开爱的理由。",
        "cover": "./28.jpg",
        "url": "./videos/video-0028.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "沙漠孤心",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,冒险,心理",
        "tags": [
            "末世",
            "独角戏",
            "生存",
            "AI",
            "绿洲",
            "剧情"
        ],
        "line": "最后一名人类幸存者在沙漠中醒来,身边只有一台逐渐故障的生存机器人和一个记忆里不存在的女儿影像。",
        "cover": "./29.jpg",
        "url": "./videos/video-0029.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "夏洛特的网",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/奇幻/家庭",
        "tags": [
            "人工智能",
            "蜘蛛",
            "农场",
            "死亡与友谊",
            "剧情",
            "奇幻"
        ],
        "line": "一个孤独的女孩发现,谷仓里那只老蜘蛛死后,她的AI设备开始用蜘蛛的说话方式与她交流。",
        "cover": "./30.jpg",
        "url": "./videos/video-0030.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "花野井君和相思病",
        "year": "2024",
        "region": "日本",
        "type": "电视剧",
        "genre": "爱情,悬疑",
        "tags": [
            "跟踪",
            "依赖",
            "病娇",
            "爱情",
            "悬疑"
        ],
        "line": "跟踪狂男主花野井君的爱情信条是“爱她就让她窒息”,直到他遇到了比他更病态的“恋爱脑”女主。",
        "cover": "./31.jpg",
        "url": "./videos/video-0031.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "爱的承诺2019国语版",
        "year": "2019",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "重映版",
            "国语配音",
            "纯爱",
            "催泪",
            "爱情",
            "剧情"
        ],
        "line": "原本只为骗绿卡的一场假结婚,却在日常的一蔬一饭里,长成了谁都舍不得先松手的真感情。",
        "cover": "./32.jpg",
        "url": "./videos/video-0032.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "毒枭煮妇",
        "year": "2025",
        "region": "哥伦比亚,美国",
        "type": "剧集",
        "genre": "犯罪,喜剧,黑色幽默",
        "tags": [
            "家庭主妇",
            "毒品战争",
            "反差萌",
            "犯罪",
            "喜剧",
            "黑色幽默"
        ],
        "line": "一位普通中产家庭主妇为了凑齐女儿的学费,意外接手了邻居的毒品生意,并利用家政技能革新了整个物流体系。",
        "cover": "./33.jpg",
        "url": "./videos/video-0033.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "快乐五胞胎",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧/家庭",
        "tags": [
            "育儿",
            "社畜",
            "手忙脚乱",
            "温馨爆笑",
            "职场",
            "喜剧"
        ],
        "line": "金牌女律师一夜之间成为五个6岁孩子的监护人,她的精英生活被彻底打碎重组。",
        "cover": "./34.jpg",
        "url": "./videos/video-0034.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "官方机密",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "剧情、惊悚",
        "tags": [
            "政治",
            "泄密",
            "记者",
            "法庭",
            "真实改编",
            "剧情"
        ],
        "line": "她泄露了一份证明政府撒谎的文件,但法庭上所有人都为她撒谎。",
        "cover": "./35.jpg",
        "url": "./videos/video-0035.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "通灵:一个新的开始",
        "year": "2026",
        "region": "美国",
        "type": "电视剧",
        "genre": "科幻,悬疑",
        "tags": [
            "超能力",
            "重生",
            "阴谋论",
            "科幻",
            "悬疑"
        ],
        "line": "全球1%人口突然获得通灵能力,一名FBI探员怀疑这并非天赐,而是一场人为实验。",
        "cover": "./36.jpg",
        "url": "./videos/video-0036.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "致敬大师:单口喜剧传奇",
        "year": "2024",
        "region": "英国",
        "type": "纪录片",
        "genre": "纪录,传记,喜剧",
        "tags": [
            "脱口秀",
            "幕后",
            "致敬",
            "幽默哲学",
            "纪录",
            "传记"
        ],
        "line": "一部由 AI 模拟已故喜剧大师声音,亲自讲述自己如何从抑郁中炼成“笑的艺术”的伪纪录片。",
        "cover": "./37.jpg",
        "url": "./videos/video-0037.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "你好,来了",
        "year": "2025",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "奇幻,家庭,温情",
        "tags": [
            "遗憾事务所",
            "人生最后一次告别",
            "催泪",
            "单元剧",
            "奇幻",
            "家庭"
        ],
        "line": "一家只在深夜营业的神秘便利店,每个走进来的顾客都能在这里见到一位“还没来得及告别”的逝者。",
        "cover": "./38.jpg",
        "url": "./videos/video-0038.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "独身一人",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/社会/女性",
        "tags": [
            "不婚主义",
            "养老",
            "女性独居",
            "现实主义",
            "群像",
            "剧情"
        ],
        "line": "三个不同代际的“独身女性”,意外住进了同一栋老公寓,从敌视到相依为命,重建了“没有血缘的家”。",
        "cover": "./39.jpg",
        "url": "./videos/video-0039.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "舌尖上的中国第二季",
        "year": "2014",
        "region": "中国大陆",
        "type": "纪录片",
        "genre": "纪录片/美食/人文",
        "tags": [
            "美食",
            "地域文化",
            "人文关怀",
            "中国故事",
            "传统手艺",
            "纪录片"
        ],
        "line": "镜头转向更隐秘的角落,记录即将消失的古老食谱和那些用一生守护一种味道的人。",
        "cover": "./40.jpg",
        "url": "./videos/video-0040.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "僵尸之王",
        "year": "1989",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖,奇幻,动作",
        "tags": [
            "僵尸",
            "茅山术",
            "清朝",
            "恐怖",
            "奇幻",
            "动作"
        ],
        "line": "沉睡百年的僵尸王被考古队唤醒,整个村子一夜之间变成了死域。",
        "cover": "./41.jpg",
        "url": "./videos/video-0041.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "飞驰吧!少年",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "喜剧/运动",
        "tags": [
            "自行车",
            "热血",
            "废柴",
            "逆袭",
            "喜剧",
            "运动"
        ],
        "line": "一支由外卖员、修车工和体校落榜生组成的业余车队,要挑战环法自行车赛。",
        "cover": "./42.jpg",
        "url": "./videos/video-0042.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "我最糟糕的噩梦",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧/剧情/家庭",
        "tags": [
            "法式幽默",
            "代际冲突",
            "文化差异",
            "温情",
            "喜剧",
            "剧情"
        ],
        "line": "一个精致利己的巴黎女强人,被法院判决必须收留她从未见过的、粗俗不堪的乡下父亲。",
        "cover": "./43.jpg",
        "url": "./videos/video-0043.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "妮克忒",
        "year": "2014",
        "region": "法国",
        "type": "电影",
        "genre": "悬疑,惊悚",
        "tags": [
            "希腊神话",
            "夜神",
            "宗教隐喻",
            "女性复仇",
            "悬疑",
            "惊悚"
        ],
        "line": "自称希腊夜神“妮克忒”的女人绑架了六名有罪的男人,每晚审判一人。",
        "cover": "./44.jpg",
        "url": "./videos/video-0044.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "撒哈拉狮王救援",
        "year": "2024",
        "region": "美国/摩洛哥",
        "type": "电影",
        "genre": "冒险/纪实",
        "tags": [
            "野生动物",
            "救援",
            "沙漠",
            "真实事件",
            "冒险",
            "纪实"
        ],
        "line": "三头被囚禁在马戏团十年的狮子,被空投到撒哈拉腹地,但它们已经忘了如何生存。",
        "cover": "./45.jpg",
        "url": "./videos/video-0045.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "公主变形记",
        "year": "2026",
        "region": "韩国",
        "type": "电视剧 (16集)",
        "genre": "浪漫喜剧/奇幻",
        "tags": [
            "灵魂互换",
            "财阀千金",
            "炸鸡店员",
            "反差萌",
            "浪漫喜剧",
            "奇幻"
        ],
        "line": "目中无人的财阀千金与梦想当歌手的炸鸡店员互换身体,各自体验“地狱”与“天堂”。",
        "cover": "./46.jpg",
        "url": "./videos/video-0046.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "丹顿事件",
        "year": "2023",
        "region": "美国",
        "type": "电视剧(限定剧)",
        "genre": "悬疑/犯罪/纪实风格",
        "tags": [
            "小镇悬疑",
            "邪教",
            "档案解密",
            "全员嫌疑人",
            "悬疑",
            "犯罪"
        ],
        "line": "1992年,美国小镇丹顿一夜之间消失了127人,唯一的幸存者疯了,而一份新解密的录音带显示他撒了谎。",
        "cover": "./47.jpg",
        "url": "./videos/video-0047.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "埃塞尔阿姨的万圣节",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "恐怖/喜剧",
        "tags": [
            "养老院",
            "邪教",
            "糖果藏刀",
            "黑色幽默",
            "老年人反杀",
            "恐怖"
        ],
        "line": "今年万圣节,养老院里最慈祥的埃塞尔阿姨,给来捣蛋的孩子们准备了包着刀片的太妃糖——以及一个血祭仪式。",
        "cover": "./48.jpg",
        "url": "./videos/video-0048.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "降灵日历",
        "year": "2020",
        "region": "德国",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "民俗",
            "诅咒",
            "日记",
            "倒计时",
            "恐怖",
            "惊悚"
        ],
        "line": "一本来自二战时期的降灵日历,每撕下一页,就会有一个身边的人按照日历上的预言死去。",
        "cover": "./49.jpg",
        "url": "./videos/video-0049.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "魔鬼的寡妇",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖",
        "tags": [
            "惊悚",
            "超自然",
            "女性",
            "复仇",
            "恐怖"
        ],
        "line": "七名在神秘仪式中失去丈夫的女人,发现她们的悲伤其实是恶魔重生的祭品。",
        "cover": "./50.jpg",
        "url": "./videos/video-0050.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "冒牌刺客",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "动作、喜剧、犯罪",
        "tags": [
            "乌龙杀手",
            "身份互换",
            "青瓦台阴谋",
            "黑吃黑",
            "搞笑动作",
            "动作"
        ],
        "line": "一个十八线龙套演员被误认成顶级杀手去执行刺杀任务,到了现场才发现目标竟然是正在“微服私访”的自己。",
        "cover": "./51.jpg",
        "url": "./videos/video-0051.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "夏目友人帐:结缘空蝉",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "动画,奇幻,治愈",
        "tags": [
            "夏目",
            "妖怪",
            "羁绊",
            "催泪",
            "动画",
            "奇幻"
        ],
        "line": "夏目在整理祖母遗物时发现一面旧镜子,镜子里映出的不是自己,而是一只等待了祖母五十年的蝉形妖怪。",
        "cover": "./52.jpg",
        "url": "./videos/video-0052.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "雪人情缘",
        "year": "2024",
        "region": "美国,加拿大",
        "type": "电影",
        "genre": "奇幻,爱情,冒险",
        "tags": [
            "喜马拉雅山",
            "雪怪",
            "治愈",
            "跨种族之恋",
            "奇幻",
            "爱情"
        ],
        "line": "一名在雪崩中失忆的登山女科学家,被传说中的雪人救起,并在与他的相处中重新找回了爱的能力。",
        "cover": "./53.jpg",
        "url": "./videos/video-0053.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "2009失去的记忆",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "动作/科幻/悬疑",
        "tags": [
            "时间旅行",
            "平行历史",
            "抗日抵抗",
            "动作",
            "科幻",
            "悬疑"
        ],
        "line": "2009年,一批恐怖分子通过时间旅行回到1909年暗杀伊藤博文,但他们回来的那一刻发现韩国仍然是日本殖民地。",
        "cover": "./54.jpg",
        "url": "./videos/video-0054.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "由宇子的天平",
        "year": "2022",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "社会议题",
            "媒体伦理",
            "人性拷问",
            "女性视角",
            "剧情",
            "悬疑"
        ],
        "line": "纪录片导演由宇子在追踪一桩少女失踪案时,自己的过往秘密让她的“真相天平”开始失衡。",
        "cover": "./55.jpg",
        "url": "./videos/video-0055.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "童心列车",
        "year": "2024",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情,历史",
        "tags": [
            "二战",
            "儿童",
            "旅途",
            "友谊",
            "剧情",
            "历史"
        ],
        "line": "二战末期,一列满载犹太儿童的火车从集中营驶出,前往瑞典,但车上没有大人。",
        "cover": "./56.jpg",
        "url": "./videos/video-0056.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "马克辛的青年时代",
        "year": "2021",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "传记剧情片",
        "tags": [
            "成长",
            "苏联",
            "理想主义",
            "传记剧情片"
        ],
        "line": "1980年代的列宁格勒,文学少女马克辛在诗社、工厂和秘密音乐会之间寻找自我。",
        "cover": "./57.jpg",
        "url": "./videos/video-0057.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "龟兔大作战",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "动画/运动",
        "tags": [
            "赛车",
            "友谊",
            "反转童话",
            "热血",
            "动画",
            "运动"
        ],
        "line": "龟兔后代再战赛场,这次比的不是跑步,而是谁先用非法改装车跑完死亡赛道。",
        "cover": "./58.jpg",
        "url": "./videos/video-0058.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "夜之后",
        "year": "2021",
        "region": "法国/意大利",
        "type": "电影",
        "genre": "剧情/情色/文艺",
        "tags": [
            "巴黎",
            "欲望",
            "女性觉醒",
            "剧情",
            "情色",
            "文艺"
        ],
        "line": "白昼她是体面贵妇,夜晚化身游走于欲望边缘的神秘女子。",
        "cover": "./59.jpg",
        "url": "./videos/video-0059.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "我的男友和狗",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情/喜剧/家庭",
        "tags": [
            "宠物",
            "三角关系",
            "治愈",
            "轻喜剧",
            "爱情",
            "喜剧"
        ],
        "line": "女生发现男友对自己越来越敷衍,却对她的狗无微不至,她决定和狗争宠。",
        "cover": "./60.jpg",
        "url": "./videos/video-0060.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "墨菲闹圣诞",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,家庭",
        "tags": [
            "圣诞",
            "捣蛋鬼",
            "家庭修复",
            "温暖",
            "搞笑",
            "喜剧"
        ],
        "line": "全社区公认的“头号捣蛋鬼”墨菲决心毁掉今年的圣诞节,却意外成了拯救圣诞英雄。",
        "cover": "./61.jpg",
        "url": "./videos/video-0061.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "踉跄女孩",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚,心理",
        "tags": [
            "绝症",
            "幻觉",
            "极限生存",
            "惊悚",
            "心理"
        ],
        "line": "患上小脑萎缩症的芭蕾舞者,在失去平衡能力的最后三个月里,发现自己每晚都会被“另一个自己”追杀。",
        "cover": "./62.jpg",
        "url": "./videos/video-0062.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "空军敢死队",
        "year": "1958",
        "region": "美国",
        "type": "电影",
        "genre": "战争、动作",
        "tags": [
            "二战",
            "飞行员",
            "轰炸任务",
            "黑白片",
            "战争",
            "动作"
        ],
        "line": "一群被军法判处死刑的空军罪犯,被秘密编成敢死队,执行一次有去无回的轰炸任务。",
        "cover": "./63.jpg",
        "url": "./videos/video-0063.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "桥头咖啡屋",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情,治愈,美食",
        "tags": [
            "咖啡",
            "桥下人家",
            "社区",
            "温情",
            "剧情",
            "治愈"
        ],
        "line": "台北一座桥下的老旧咖啡屋,每晚十点后只接待一位“最后的客人”,替他们了却心事。",
        "cover": "./64.jpg",
        "url": "./videos/video-0064.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "龙凤花烛",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,民国,爱情",
        "tags": [
            "豪门",
            "诅咒",
            "宅斗",
            "反转",
            "悬疑",
            "民国"
        ],
        "line": "民国豪门姜家有个传统:新人必须在点燃龙凤花烛的当晚守夜,因为任何让蜡烛熄灭的人,都会在一年内离奇死去。",
        "cover": "./65.jpg",
        "url": "./videos/video-0065.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "美妙共振",
        "year": "2022",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,音乐,传记",
        "tags": [
            "电子乐",
            "1980年代",
            "女性觉醒",
            "真实改编",
            "剧情",
            "音乐"
        ],
        "line": "谢菲尔德一名失业女工意外闯入合成器音乐圈,用噪音改变了自己的一生。",
        "cover": "./66.jpg",
        "url": "./videos/video-0066.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "嗜育者",
        "year": "2019",
        "region": "加拿大",
        "type": "电影",
        "genre": "恐怖,科幻,惊悚",
        "tags": [
            "寄生",
            "家庭伦理",
            "心理恐怖",
            "身体恐怖",
            "恐怖",
            "科幻"
        ],
        "line": "一个幸福的四口之家发现,他们最疼爱的小女儿其实是一个以父母“爱意”为食的远古寄生体。",
        "cover": "./67.jpg",
        "url": "./videos/video-0067.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "有时快乐有时悲伤",
        "year": "2001",
        "region": "印度",
        "type": "电影",
        "genre": "剧情,家庭,歌舞",
        "tags": [
            "家庭矛盾",
            "和解",
            "印度文化",
            "剧情",
            "家庭",
            "歌舞"
        ],
        "line": "一个看似完美的大家庭,在一次意外揭露的秘密后,所有人的快乐与悲伤都被重新定义。",
        "cover": "./68.jpg",
        "url": "./videos/video-0068.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "软弱啊",
        "year": "2018",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/心理",
        "tags": [
            "校园霸凌",
            "道德困境",
            "复仇",
            "群像",
            "剧情",
            "心理"
        ],
        "line": "中学教师高桥目睹学生被霸凌却选择沉默,十五年后,当年的施暴者成了他的上司。",
        "cover": "./69.jpg",
        "url": "./videos/video-0069.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "火鸟的沼泽",
        "year": "2023",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情/奇幻/悬疑",
        "tags": [
            "斯拉夫神话",
            "泥炭沼泽",
            "失踪儿童",
            "环保寓言",
            "剧情",
            "奇幻"
        ],
        "line": "西伯利亚沼泽边,七名儿童接连失踪,护林员在泥炭层下挖出了一只仍在燃烧的史前火鸟。",
        "cover": "./70.jpg",
        "url": "./videos/video-0070.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "抽丝剥茧",
        "year": "2023",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "悬疑,刑侦,心理",
        "tags": [
            "法医",
            "虫类学",
            "连环杀人",
            "老旧小区",
            "沉默证人",
            "悬疑"
        ],
        "line": "法医昆虫学专家从一具腐烂尸体上的蛆虫种类推断出死者被移动过三次,从而撕开小区里二十年无人提及的秘密。",
        "cover": "./71.jpg",
        "url": "./videos/video-0071.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "婚姻风暴",
        "year": "2026",
        "region": "意大利",
        "type": "剧集",
        "genre": "剧情/家庭",
        "tags": [
            "离婚",
            "家族企业",
            "全员恶人",
            "剧情",
            "家庭"
        ],
        "line": "豪门老夫妻宣布离婚,引发了一场席卷整个家族的企业战争,每个人都露出了獠牙。",
        "cover": "./72.jpg",
        "url": "./videos/video-0072.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "零水日",
        "year": "2024",
        "region": "全球",
        "type": "纪录片",
        "genre": "纪录,灾难",
        "tags": [
            "水资源",
            "环保",
            "气候变化",
            "警示",
            "纪录",
            "灾难"
        ],
        "line": "当水龙头彻底干涸的那一天,我们的生活、城市和文明,究竟还能撑多久?",
        "cover": "./73.jpg",
        "url": "./videos/video-0073.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "西游记之大圣归来",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动画,奇幻,动作",
        "tags": [
            "西游",
            "孙悟空",
            "中年危机",
            "重走西游",
            "自我救赎",
            "动画"
        ],
        "line": "取经成功后,封为“斗战胜佛”的孙悟空发现自己法力尽失,成了一名普通的中年猴子,他必须重走西游路。",
        "cover": "./74.jpg",
        "url": "./videos/video-0074.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "贱人快跑",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/动作/犯罪",
        "tags": [
            "黑色喜剧",
            "笨贼",
            "多线叙事",
            "荒诞",
            "方言",
            "喜剧"
        ],
        "line": "三拨笨贼在同一雨夜闯入老小区盗窃,却因一个装钱的保险箱引发全员大乱斗。",
        "cover": "./75.jpg",
        "url": "./videos/video-0075.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "浴血十四年",
        "year": "2025",
        "region": "中国",
        "type": "电视剧",
        "genre": "战争,历史,剧情",
        "tags": [
            "抗日战争",
            "家族恩怨",
            "军人成长",
            "史诗",
            "家国情怀",
            "战争"
        ],
        "line": "从九一八到抗战胜利,东北一个大家族的三兄弟用十四年血泪写就家国春秋。",
        "cover": "./76.jpg",
        "url": "./videos/video-0076.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "精灵守护者第一部",
        "year": "2007",
        "region": "日本",
        "type": "动画剧集",
        "genre": "奇幻",
        "tags": [
            "冒险",
            "战斗",
            "史诗",
            "守护",
            "女性主角",
            "奇幻"
        ],
        "line": "女保镖受命保护被精灵选中的小王子,两人在逃亡途中发现,真正要杀死王子的不是人类,而是失控的水之精灵。",
        "cover": "./77.jpg",
        "url": "./videos/video-0077.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "狮子彻夜未眠",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,家庭,哲学",
        "tags": [
            "阿尔茨海默",
            "父女和解",
            "莎士比亚",
            "生命终点",
            "剧情",
            "家庭"
        ],
        "line": "患有阿尔茨海默症的父亲将自己幻想成《李尔王》,女儿只好陪他演完最后一幕,直到真正的风暴来临。",
        "cover": "./78.jpg",
        "url": "./videos/video-0078.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "藏药令",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装奇幻",
        "tags": [
            "药灵设定",
            "秘境探险",
            "医者仁心",
            "古装奇幻"
        ],
        "line": "凡间小药童误入藏药秘境,竟是被封印千年的“万药之灵”,各方势力为此展开争夺。",
        "cover": "./79.jpg",
        "url": "./videos/video-0079.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "果栏中的江湖大嫂粤语",
        "year": "2023",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情,黑帮",
        "tags": [
            "油麻地",
            "水果市场",
            "女性",
            "剧情",
            "黑帮"
        ],
        "line": "油麻地果栏大嫂意外身亡,她从未露面的女儿从加拿大回来,以投行手段整治水果黑帮。",
        "cover": "./80.jpg",
        "url": "./videos/video-0080.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "死亡季节",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚/灾难",
        "tags": [
            "病毒爆发",
            "孤岛求生",
            "倒计时",
            "惊悚",
            "灾难"
        ],
        "line": "一种只在冬季活跃的食人病毒席卷小镇,被困警长必须在全员尸变前找到零号病人。",
        "cover": "./81.jpg",
        "url": "./videos/video-0081.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "未闻花名",
        "year": "2019",
        "region": "日本",
        "type": "剧集",
        "genre": "动画,奇幻,催泪",
        "tags": [
            "治愈",
            "青春",
            "幽灵",
            "友情",
            "花语",
            "动画"
        ],
        "line": "死去的童年玩伴突然以幽灵之姿出现,要求主角帮她实现一个早已被遗忘的愿望。",
        "cover": "./82.jpg",
        "url": "./videos/video-0082.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "阿里巴巴与神灯",
        "year": "2024",
        "region": "印度",
        "type": "电影",
        "genre": "奇幻,歌舞",
        "tags": [
            "天方夜谭",
            "宝莱坞改编",
            "神话",
            "奇幻",
            "歌舞"
        ],
        "line": "贫民窟少年偶然获得神灯,却发现神灯里的精灵是个想要毁灭世界的科学狂人。",
        "cover": "./83.jpg",
        "url": "./videos/video-0083.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "电梯上",
        "year": "1991",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,短片",
        "tags": [
            "老上海",
            "邻里",
            "人生百态",
            "温情",
            "剧情",
            "短片"
        ],
        "line": "老式居民楼里只有一部电梯,十几户人家的一生都浓缩在这十几平米的空间里。",
        "cover": "./84.jpg",
        "url": "./videos/video-0084.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "受伤的天使",
        "year": "2023",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情、战争、家庭",
        "tags": [
            "顿巴斯",
            "儿童视角",
            "废墟美学",
            "剧情",
            "战争",
            "家庭"
        ],
        "line": "八岁的她在被炸毁的音乐学院废墟里,找到了一架还能弹出音阶的钢琴。",
        "cover": "./85.jpg",
        "url": "./videos/video-0085.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "在黑暗中说的鬼故事",
        "year": "2025",
        "region": "泰国",
        "type": "剧集",
        "genre": "恐怖/惊悚/悬疑",
        "tags": [
            "都市传说",
            "集体幻觉",
            "声音恐惧",
            "多线叙事",
            "恐怖",
            "惊悚"
        ],
        "line": "一座老旧电台深夜播放的“鬼故事”,正在现实中一一应验,且只能由听众亲眼看见。",
        "cover": "./86.jpg",
        "url": "./videos/video-0086.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "时凶感应",
        "year": "2011",
        "region": "中国香港",
        "type": "电影",
        "genre": "科幻/动作/警匪",
        "tags": [
            "超能力杀人",
            "时间暂停",
            "港产警匪",
            "双雄对决",
            "科幻",
            "动作"
        ],
        "line": "杀手可以暂停时间5秒,而唯一能察觉这5秒的,是个即将退休的老警察。",
        "cover": "./87.jpg",
        "url": "./videos/video-0087.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "白马之子",
        "year": "2024",
        "region": "蒙古/中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/冒险",
        "tags": [
            "草原",
            "驯马",
            "父子情",
            "传承",
            "治愈",
            "剧情"
        ],
        "line": "一个城市叛逆少年被送回草原与外公生活,必须驯服一匹传说中的白色野马才能回家。",
        "cover": "./88.jpg",
        "url": "./videos/video-0088.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "钢甲卡卡龙",
        "year": "2018",
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "科幻,冒险,儿童",
        "tags": [
            "机甲",
            "竞技",
            "热血",
            "宠物伙伴",
            "科幻",
            "冒险"
        ],
        "line": "小学生阿力意外唤醒远古战斗机甲“卡卡龙”,并被迫参加一场决定地球命运的机甲拳击联赛。",
        "cover": "./89.jpg",
        "url": "./videos/video-0089.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "海上男儿",
        "year": "2023",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情/家庭",
        "tags": [
            "渔业",
            "父子关系",
            "小镇生活",
            "成长",
            "治愈",
            "剧情"
        ],
        "line": "东京精英白领辞职回乡继承濒临破产的渔船,却发现渔民的世界远比写字楼复杂。",
        "cover": "./90.jpg",
        "url": "./videos/video-0090.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "不死者之王第三季",
        "year": "2026",
        "region": "日本",
        "type": "剧集",
        "genre": "奇幻战斗",
        "tags": [
            "异世界",
            "骨王归来",
            "建国大业",
            "奇幻战斗"
        ],
        "line": "安兹亲自下场屠龙夺城,却在胜利前夕发现臣民中混入了另一位玩家。",
        "cover": "./91.jpg",
        "url": "./videos/video-0091.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "爱爱塞上路",
        "year": "2023",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "喜剧/爱情/公路",
        "tags": [
            "公路旅行",
            "中年危机",
            "性喜剧",
            "法式幽默",
            "解放",
            "喜剧"
        ],
        "line": "一对性生活濒临崩溃的中年夫妇,决定在去离婚的路上沿途疯狂“车震”,重新找回激情。",
        "cover": "./92.jpg",
        "url": "./videos/video-0092.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "无痛凯恩",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作/科幻/犯罪",
        "tags": [
            "无法感知疼痛",
            "义警",
            "药物实验",
            "暴力美学",
            "动作",
            "科幻"
        ],
        "line": "一种消除痛觉的药物造就了完美杀手,却也让他永远感受不到恐惧。",
        "cover": "./93.jpg",
        "url": "./videos/video-0093.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "蠢蛋搞怪到永远",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/真人秀/动作",
        "tags": [
            "恶搞",
            "高危特技",
            "老人搞怪",
            "情怀",
            "自虐",
            "喜剧"
        ],
        "line": "原班人马全员退休前最后一次聚首,以更荒诞、更危险、更温情的方式挑战身体极限。",
        "cover": "./94.jpg",
        "url": "./videos/video-0094.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "恐惧的绿洲",
        "year": "2024",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "恐怖/悬疑",
        "tags": [
            "沙漠恐怖",
            "心理惊悚",
            "民俗传说",
            "孤独美学",
            "恐怖",
            "悬疑"
        ],
        "line": "五名背包客在澳大利亚沙漠中发现一片地图上没有的绿洲,当地人警告他们“不要在那里喝水”,因为水里有记忆。",
        "cover": "./95.jpg",
        "url": "./videos/video-0095.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "对付弱者",
        "year": "2027",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/惊悚",
        "tags": [
            "校园暴力",
            "复仇",
            "社会批判",
            "心理",
            "剧情",
            "惊悚"
        ],
        "line": "被霸凌的高中男生意外获得一本《弱者反杀手册》,当他按步骤实施时,发现作者就是学校的清洁工。",
        "cover": "./96.jpg",
        "url": "./videos/video-0096.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "8英里",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "音乐",
        "tags": [
            "嘻哈",
            "底层",
            "励志",
            "即兴对决",
            "种族",
            "音乐"
        ],
        "line": "底特律一位患有严重口吃的白人清洁工,每晚在8英里路的地下酒吧,用笔写出最流畅的攻击性歌词。",
        "cover": "./97.jpg",
        "url": "./videos/video-0097.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "医次搞定",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情,医疗,喜剧",
        "tags": [
            "快闪诊所",
            "疑难杂症",
            "社会关怀",
            "单元剧",
            "剧情",
            "医疗"
        ],
        "line": "一辆改装货柜车,三位“赤脚医生”,哪里有病去哪里,专治各大医院看不好的怪病。",
        "cover": "./98.jpg",
        "url": "./videos/video-0098.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "狐妖小红娘",
        "year": "2015",
        "region": "中国",
        "type": "动画剧集",
        "genre": "奇幻,爱情",
        "tags": [
            "转世",
            "人妖恋",
            "红娘",
            "催泪",
            "奇幻",
            "爱情"
        ],
        "line": "在一个人妖共存的世界里,狐妖红线仙的任务就是帮助前世恋人记起彼此,再续前缘。",
        "cover": "./99.jpg",
        "url": "./videos/video-0099.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "荒芜艺术",
        "year": "2022",
        "region": "英国",
        "type": "电影",
        "genre": "科幻、剧情、文艺",
        "tags": [
            "末日",
            "艺术修复",
            "AI情感",
            "科幻",
            "剧情",
            "文艺"
        ],
        "line": "在人类灭绝后的世界,最后一个AI为了理解“美”,开始学习人类的荒芜废墟艺术。",
        "cover": "./100.jpg",
        "url": "./videos/video-0100.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "鬼魂的传讯",
        "year": "2022",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖/悬疑/民俗",
        "tags": [
            "灵媒家族",
            "口传咒语",
            "魂传讯息",
            "恐怖",
            "悬疑",
            "民俗"
        ],
        "line": "一个不会通灵的女孩继承了家族唯一的能力:让鬼魂借用她的手机发消息。",
        "cover": "./101.jpg",
        "url": "./videos/video-0101.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "遥远的光辉",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "科幻/剧情",
        "tags": [
            "太空",
            "孤独",
            "AI",
            "存在主义",
            "科幻",
            "剧情"
        ],
        "line": "人类最后一艘殖民飞船上,唯一醒着的宇航员发现,飞船AI爱上了一颗50光年外的黑洞,计划带全船人去殉情。",
        "cover": "./102.jpg",
        "url": "./videos/video-0102.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "迷离劫2022",
        "year": "2022",
        "region": "中国香港/台湾",
        "type": "剧集",
        "genre": "犯罪/惊悚/悬疑",
        "tags": [
            "都市传说",
            "灵异探案",
            "双女主",
            "单元剧",
            "犯罪",
            "惊悚"
        ],
        "line": "女刑警和灵媒记者组成搭档,调查一系列都市传说改编的诡异命案,却发现每起案件都指向同一本漫画。",
        "cover": "./103.jpg",
        "url": "./videos/video-0103.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "黑道千金逼我嫁3",
        "year": "2010",
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧,动作,爱情",
        "tags": [
            "黑帮",
            "家族联姻",
            "爆笑",
            "反转",
            "替身",
            "喜剧"
        ],
        "line": "为了吞并对手,黑道老大逼胆小秘书假扮千金,结果秘书却爱上了敌方少主。",
        "cover": "./104.jpg",
        "url": "./videos/video-0104.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "毒蛇岛",
        "year": "2026",
        "region": "英国",
        "type": "电视剧",
        "genre": "惊悚/悬疑/冒险",
        "tags": [
            "生存",
            "孤岛",
            "心理战",
            "爬虫",
            "惊悚",
            "悬疑"
        ],
        "line": "八名陌生人被投放到遍布毒蛇的无人岛,每72小时必须投票处决一人,否则全岛蛇穴会同时开启。",
        "cover": "./105.jpg",
        "url": "./videos/video-0105.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "人证1977",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史,剧情,悬疑",
        "tags": [
            "文革",
            "高考恢复",
            "冤案",
            "寻找证人",
            "历史",
            "剧情"
        ],
        "line": "1977年恢复高考前夜,一个被下放的数学教授必须找到当年的学生,证明自己不是强奸犯。",
        "cover": "./106.jpg",
        "url": "./videos/video-0106.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "幕后情人",
        "year": "1994",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情",
        "tags": [
            "替身",
            "娱乐圈",
            "虐恋",
            "经典港片",
            "爱情"
        ],
        "line": "平凡录音师被顶头上司大明星钦点做“地下情人”,一场禁忌之恋悄然上演。",
        "cover": "./107.jpg",
        "url": "./videos/video-0107.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "月球叛军:火之女",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/动作/冒险",
        "tags": [
            "太空歌剧",
            "扎克·施奈德",
            "反抗军",
            "女性主角",
            "科幻",
            "动作"
        ],
        "line": "一个神秘的星际女子带领一群农民起义,对抗将月球烧成玻璃的暴虐母星帝国。",
        "cover": "./108.jpg",
        "url": "./videos/video-0108.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "铁达尼号666",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/科幻",
        "tags": [
            "恶魔",
            "时间循环",
            "沉船",
            "附身",
            "恐怖",
            "科幻"
        ],
        "line": "考古队打捞起一块刻有666编号的船体残片,复活了当年船上那个不成人形的恶魔。",
        "cover": "./109.jpg",
        "url": "./videos/video-0109.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "无字碑歌:武则天传",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史、传记、古装",
        "tags": [
            "武则天",
            "女皇",
            "权谋",
            "史诗",
            "历史",
            "传记"
        ],
        "line": "82岁的武则天临终前,让上官婉儿记录她口述的一生,这是一段关于权力与孤独的忏悔录。",
        "cover": "./110.jpg",
        "url": "./videos/video-0110.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "逃离人间",
        "year": "2023",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "科幻/剧情",
        "tags": [
            "虚拟现实",
            "永生",
            "社会阶层",
            "哲学",
            "科幻",
            "剧情"
        ],
        "line": "在未来,穷人争相将意识上传云端获得永生,却不知富豪们在人间销毁了所有肉体容器。",
        "cover": "./111.jpg",
        "url": "./videos/video-0111.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "妖媚女姬",
        "year": "2026",
        "region": "中国",
        "type": "剧集",
        "genre": "古装,爱情,奇幻",
        "tags": [
            "古装",
            "奇幻",
            "爱情",
            "复仇",
            "女性"
        ],
        "line": "被爱人背叛、葬身火海的官家小姐重生为敌国第一妖女,她用美貌与智慧为刃,展开一场极致的复仇。",
        "cover": "./112.jpg",
        "url": "./videos/video-0112.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "铜头铁罗汉",
        "year": "1989",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作,武侠",
        "tags": [
            "少林",
            "硬桥硬马",
            "复仇",
            "老港味",
            "动作",
            "武侠"
        ],
        "line": "少林寺铜人阵的守护者“铜头铁罗汉”遭人陷害还俗,为了保护少林至宝重出江湖,以一敌百。",
        "cover": "./113.jpg",
        "url": "./videos/video-0113.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "金药局的女儿们",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情、家庭、历史",
        "tags": [
            "日据时期",
            "女性抗争",
            "药房",
            "民族意识",
            "剧情",
            "家庭"
        ],
        "line": "1930年代日本殖民下的汉城,一个中药局家的三姐妹用韩方药材秘密制作抗日炸药。",
        "cover": "./114.jpg",
        "url": "./videos/video-0114.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "几度菊花香",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情",
        "tags": [
            "年代",
            "知青",
            "纯爱",
            "怀旧",
            "爱情"
        ],
        "line": "一句“回城后再见”让她等了他四十年,等她终于找到养老院,却发现他早已改名换姓。",
        "cover": "./115.jpg",
        "url": "./videos/video-0115.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "爱很真水很深",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,悬疑,剧情",
        "tags": [
            "杀妻骗保",
            "深海恐惧",
            "反转不断",
            "烧脑",
            "渣男",
            "爱情"
        ],
        "line": "新婚妻子在东南亚海域溺水身亡,丈夫获天价保费,但调查员发现,看似深情的丈夫比大海还要危险。",
        "cover": "./116.jpg",
        "url": "./videos/video-0116.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "青春的忏悔",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/青春/犯罪",
        "tags": [
            "校园暴力",
            "阶层",
            "替罪羊",
            "赎罪",
            "剧情",
            "青春"
        ],
        "line": "十五年前,全校女生联手诬陷一个穷困女同学偷窃,如今事业有成的她们收到了来自死者的“邀请函”。",
        "cover": "./117.jpg",
        "url": "./videos/video-0117.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "不和谐",
        "year": "2016",
        "region": "奥地利",
        "type": "电影",
        "genre": "剧情,音乐",
        "tags": [
            "钢琴",
            "精神分裂",
            "天才",
            "传记式虚构",
            "维也纳",
            "剧情"
        ],
        "line": "一个患有严重听觉过敏的天才钢琴家,他听到的世界充满了刺耳的“不和谐音”。",
        "cover": "./118.jpg",
        "url": "./videos/video-0118.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "一个可笑人物的悲剧",
        "year": "1981",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情/喜剧/讽刺",
        "tags": [
            "黑色幽默",
            "绑架",
            "中产阶级",
            "荒诞",
            "剧情",
            "喜剧"
        ],
        "line": "一位工厂老板的儿子被绑架,他却因怀疑是恶作剧而拒绝支付赎金,最终自食其果。",
        "cover": "./119.jpg",
        "url": "./videos/video-0119.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "史楚锡流浪记",
        "year": "1977",
        "region": "西德",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "公路",
            "移民",
            "底层",
            "社会批判",
            "剧情"
        ],
        "line": "一个前科犯带着一只被虐待的马戏团猴子,从德国流浪到美国,却发现哪里都是地狱。",
        "cover": "./120.jpg",
        "url": "./videos/video-0120.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "银行妙探",
        "year": "1988",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,动作",
        "tags": [
            "卧底",
            "乌龙",
            "港式幽默",
            "警匪",
            "喜剧",
            "动作"
        ],
        "line": "最懒散的警员被派去银行卧底抓劫匪,结果他把所有顾客都发展成了嫌疑人。",
        "cover": "./121.jpg",
        "url": "./videos/video-0121.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "杨光的夏天",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情、喜剧、家庭",
        "tags": [
            "小人物",
            "奋斗",
            "喜剧",
            "温情",
            "市井",
            "剧情"
        ],
        "line": "外卖员杨光在弄堂里捡到一个弃婴,这个夏天他必须同时面对奶爸、爱情和突然冒出的富豪亲爹。",
        "cover": "./122.jpg",
        "url": "./videos/video-0122.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "巅峰营救",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作/冒险/灾难",
        "tags": [
            "雪山",
            "恐怖分子",
            "缆车危机",
            "极限运动",
            "团队作战",
            "动作"
        ],
        "line": "退役特种兵在阿尔卑斯山最高缆车上遭遇劫持,必须在零下三十度的高空解救女儿和四十名人质。",
        "cover": "./123.jpg",
        "url": "./videos/video-0123.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "洋子的困惑",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,同性,家庭",
        "tags": [
            "青春期",
            "性向探索",
            "母女关系",
            "成长",
            "文艺",
            "剧情"
        ],
        "line": "高中女生发现自己喜欢上了学姐,而保守的母亲正忙于为她安排相亲,一场关于“正常”的战争爆发。",
        "cover": "./124.jpg",
        "url": "./videos/video-0124.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "舞伶艳史",
        "year": "2023",
        "region": "法国/意大利",
        "type": "电影",
        "genre": "剧情/传记",
        "tags": [
            "红磨坊",
            "康康舞",
            "女性独立",
            "美学盛宴",
            "剧情",
            "传记"
        ],
        "line": "她靠大腿征服了巴黎,却始终无法让那个看客离开座位。",
        "cover": "./125.jpg",
        "url": "./videos/video-0125.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "濑户内海",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,喜剧",
        "tags": [
            "脱口秀",
            "青春",
            "友谊",
            "日常",
            "哲学",
            "剧情"
        ],
        "line": "两个高中男生每天放学后坐在河边吐槽,结果被星探发现组成了漫才组合。",
        "cover": "./126.jpg",
        "url": "./videos/video-0126.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "基督山恩仇记",
        "year": "2028",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,动作,冒险",
        "tags": [
            "经典改编",
            "越狱",
            "复仇",
            "巨额财富",
            "剧情",
            "动作"
        ],
        "line": "被诬陷入狱十四年的水手获得惊天宝藏,化身神秘伯爵,向三个背叛他的朋友展开优雅而致命的复仇。",
        "cover": "./127.jpg",
        "url": "./videos/video-0127.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "诡摇铃",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "惊悚/恐怖/民俗",
        "tags": [
            "中式恐怖",
            "冥婚",
            "民俗怪谈",
            "阴宅",
            "惊悚",
            "恐怖"
        ],
        "line": "乡村老宅里每夜响起诡异的摇铃声,孙女发现这是奶奶去世前对自己设下的诅咒。",
        "cover": "./128.jpg",
        "url": "./videos/video-0128.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "恋爱的母亲们",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "剧情,爱情,生活",
        "tags": [
            "中年爱情",
            "再婚",
            "女性成长",
            "职场",
            "育儿",
            "剧情"
        ],
        "line": "三位不同职业的中年单身母亲,在同一所补习班外相识,决定在帮孩子冲刺高考的同时,为自己重启一场迟到的恋爱。",
        "cover": "./129.jpg",
        "url": "./videos/video-0129.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "短暂的团聚",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "春运",
            "家庭秘密",
            "时空循环",
            "温情",
            "剧情",
            "悬疑"
        ],
        "line": "每年除夕,一家四口都会团聚24小时,但母亲发现每次团聚后,家人的记忆都会消失一部分。",
        "cover": "./130.jpg",
        "url": "./videos/video-0130.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "乱世香港",
        "year": "2025",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情、历史、爱情",
        "tags": [
            "豪门恩怨",
            "时代变迁",
            "商战",
            "家族史诗",
            "剧情",
            "历史"
        ],
        "line": "从日占时期到回归前夕,一个买办家族的兴衰史,串起了半部香港现代史。",
        "cover": "./131.jpg",
        "url": "./videos/video-0131.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "河边有个好地方",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "乡村",
            "留守儿童",
            "治愈",
            "剧情",
            "家庭"
        ],
        "line": "一个被父母丢在乡下的城市女孩,在河边与一个沉默寡言的渔夫爷爷成为了忘年交。",
        "cover": "./132.jpg",
        "url": "./videos/video-0132.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "奇迹少女2023",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "动画,动作,奇幻",
        "tags": [
            "少女英雄",
            "巴黎",
            "变身",
            "守护甜心",
            "动画",
            "动作"
        ],
        "line": "怯懦的高中女生马丽娜获得神秘挂坠,化身超级英雄与来自未来的反派对战。",
        "cover": "./133.jpg",
        "url": "./videos/video-0133.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "强袭魔女第二季",
        "year": "2026",
        "region": "日本",
        "type": "TV剧集",
        "genre": "动画,科幻,战斗",
        "tags": [
            "军事",
            "魔法少女",
            "架空历史",
            "飞行",
            "异能",
            "动画"
        ],
        "line": "异形入侵东京湾,全员集结的魔女小队却发现彼此的魔力正在离奇流失。",
        "cover": "./134.jpg",
        "url": "./videos/video-0134.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "政变53",
        "year": "2026",
        "region": "韩国",
        "type": "剧集",
        "genre": "政治/惊悚/历史",
        "tags": [
            "架空历史",
            "双面间谍",
            "代号53",
            "政治",
            "惊悚",
            "历史"
        ],
        "line": "代号53的档案被解密:那场被教科书称为“光复”的政变,其实是输家写的胜利宣言。",
        "cover": "./135.jpg",
        "url": "./videos/video-0135.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "有肥人终成眷属粤语",
        "year": "1998",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,爱情",
        "tags": [
            "粤语",
            "肥仔",
            "追女仔",
            "搞笑",
            "港式幽默",
            "喜剧"
        ],
        "line": "胖墩便利店店员阿肥暗恋女神,兄弟帮他出各种损招追女,却次次搞出大乌龙。",
        "cover": "./136.jpg",
        "url": "./videos/video-0136.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "灿烂时光",
        "year": "2025",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "历史剧情",
        "tags": [
            "白色恐怖",
            "青春",
            "文学",
            "时代悲剧",
            "历史剧情"
        ],
        "line": "上世纪六十年代,五位热爱文学的高中生因为一本被禁的《自由中国》杂志,命运被永远改写。",
        "cover": "./137.jpg",
        "url": "./videos/video-0137.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "你他妈的也是",
        "year": "2023",
        "region": "墨西哥",
        "type": "电影",
        "genre": "剧情,喜剧,情色",
        "tags": [
            "公路",
            "青春",
            "成长",
            "大胆",
            "剧情",
            "喜剧"
        ],
        "line": "两个少年和一名少妇的公路之旅,终点是名叫“天堂之口”的未知海滩。",
        "cover": "./138.jpg",
        "url": "./videos/video-0138.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "海军少爷兵",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作/喜剧",
        "tags": [
            "军事",
            "成长",
            "富二代",
            "动作",
            "喜剧"
        ],
        "line": "一个娇生惯养的富二代被父亲扔进军营,却阴差阳错地进入了海军陆战队,并卷入了一场真实的缉毒行动。",
        "cover": "./139.jpg",
        "url": "./videos/video-0139.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "冰上奇缘4",
        "year": "2025",
        "region": "美国/加拿大",
        "type": "电影",
        "genre": "家庭/运动/奇幻",
        "tags": [
            "花样滑冰",
            "人鱼传说",
            "竞技逆袭",
            "环保",
            "家庭",
            "运动"
        ],
        "line": "花滑少女在北极圈训练时救了一只独角鲸,不料它竟是古老的冰下人鱼王子。",
        "cover": "./140.jpg",
        "url": "./videos/video-0140.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "白母牛之歌",
        "year": "2023",
        "region": "伊朗",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "社会现实",
            "父权",
            "女性",
            "农村",
            "诗意",
            "剧情"
        ],
        "line": "村里唯一的白母牛被宰杀后,失语的寡妇发现,那首歌谣里唱的“乳白河流”其实是丈夫另一个妻子的乳房。",
        "cover": "./141.jpg",
        "url": "./videos/video-0141.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "夜晚开的花",
        "year": "2021",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑/惊悚",
        "tags": [
            "夜行性植物",
            "连环杀人",
            "园艺师探案",
            "女性复仇",
            "悬疑",
            "惊悚"
        ],
        "line": "植物园里的夜班园艺师发现,每一株“夜晚开花”的植物下面,都埋着一具尸体。",
        "cover": "./142.jpg",
        "url": "./videos/video-0142.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "琴台春满",
        "year": "1962",
        "region": "中国大陆",
        "type": "电影",
        "genre": "戏曲/爱情",
        "tags": [
            "古琴",
            "知音",
            "传统美学",
            "戏曲",
            "爱情"
        ],
        "line": "古琴台畔,两个被家族束缚的灵魂,用琴声偷渡了一整个春天。",
        "cover": "./143.jpg",
        "url": "./videos/video-0143.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "挚爱无尽",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,爱情",
        "tags": [
            "绝症",
            "守候",
            "亲情",
            "催泪",
            "剧情",
            "爱情"
        ],
        "line": "患癌丈夫隐瞒病情,用余生为失明妻子种下一片永不凋谢的花海。",
        "cover": "./144.jpg",
        "url": "./videos/video-0144.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "爱的肉体",
        "year": "2024",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "爱情/伦理",
        "tags": [
            "器官移植",
            "身份认同",
            "法式文艺",
            "爱情",
            "伦理"
        ],
        "line": "她移植了他的心脏,而他爱上了她——因为那颗心里存着他死去妻子的记忆。",
        "cover": "./145.jpg",
        "url": "./videos/video-0145.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "月殒天劫",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/灾难",
        "tags": [
            "月球坠落",
            "末日",
            "太空救援",
            "科幻",
            "灾难"
        ],
        "line": "月球被未知引力撕裂,碎片即将撞向地球,一群矿工成为人类最后的希望。",
        "cover": "./146.jpg",
        "url": "./videos/video-0146.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "阴阳眼见子",
        "year": "2022",
        "region": "日本",
        "type": "剧集",
        "genre": "恐怖,奇幻,日常",
        "tags": [
            "见鬼",
            "JK",
            "轻度恐怖",
            "温馨治愈",
            "无声尖叫",
            "恐怖"
        ],
        "line": "女高中生某天突然能看到无处不在的幽灵,但她选择假装看不见,在毛骨悚然中努力维持“普通人”的日常生活。",
        "cover": "./147.jpg",
        "url": "./videos/video-0147.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "怪物",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,悬疑,儿童",
        "tags": [
            "校园霸凌",
            "罗生门叙事",
            "真相多元",
            "是枝裕和",
            "剧情",
            "悬疑"
        ],
        "line": "单亲母亲控诉老师虐待儿子,但当三方视角揭开后,真正的“怪物”是谁无人敢信。",
        "cover": "./148.jpg",
        "url": "./videos/video-0148.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "等风来",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/运动",
        "tags": [
            "滑翔伞",
            "治愈",
            "失意",
            "大自然",
            "励志",
            "剧情"
        ],
        "line": "一个失意的滑翔伞运动员回到家乡,发现教他飞行的师父正偷偷驾着破伞帮走私团伙运货。",
        "cover": "./149.jpg",
        "url": "./videos/video-0149.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "跨州轶事录",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "西部/公路/剧情",
        "tags": [
            "公路片",
            "19世纪美国",
            "多元文化",
            "生存",
            "西部",
            "公路"
        ],
        "line": "1870年,一个华工、一个非裔逃兵和一个白人寡妇同乘一辆马车横穿美国,只为追逐一份虚假的藏宝图。",
        "cover": "./150.jpg",
        "url": "./videos/video-0150.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "阿添",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "社会写实",
            "父子关系",
            "底层生存",
            "剧情",
            "家庭"
        ],
        "line": "一个在菜市场帮人杀鱼的聋哑青年,为了给突然出现的私生子办户口,被迫卷入了黑市的证件交易。",
        "cover": "./1.jpg",
        "url": "./videos/video-0151.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "龙虎武师",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/剧情/传记",
        "tags": [
            "武行",
            "香港电影",
            "替身",
            "热血",
            "动作",
            "剧情"
        ],
        "line": "1980年代香港武行衰落前最后一批“龙虎武师”,用命搏出一部无人署名的功夫史诗。",
        "cover": "./2.jpg",
        "url": "./videos/video-0152.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "雷神",
        "year": "2011",
        "region": "美国",
        "type": "电影",
        "genre": "动作,奇幻,冒险",
        "tags": [
            "漫威",
            "神话",
            "北欧",
            "锤子",
            "阿斯加德",
            "动作"
        ],
        "line": "傲慢的神界储君被父王贬入凡间,他必须找回雷神之锤才能重获神力。",
        "cover": "./3.jpg",
        "url": "./videos/video-0153.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "来生预习曲",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情,奇幻,音乐",
        "tags": [
            "灵魂伴侣",
            "时间循环",
            "疗伤",
            "钢琴曲",
            "爱情",
            "奇幻"
        ],
        "line": "一位失意的钢琴家每晚入睡后都会进入同一陌生女子的梦境,两人合奏一首不存在的曲子。",
        "cover": "./4.jpg",
        "url": "./videos/video-0154.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "过气天使",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,奇幻,家庭",
        "tags": [
            "中年危机",
            "天使",
            "职场",
            "治愈",
            "美式喜剧",
            "喜剧"
        ],
        "line": "业绩垫底的守护天使被下放到人间,去拯救一个事业家庭双失败的废柴大叔。",
        "cover": "./5.jpg",
        "url": "./videos/video-0155.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "十诫VI:爱情影片",
        "year": "1989",
        "region": "波兰",
        "type": "电影",
        "genre": "剧情、伦理",
        "tags": [
            "基耶斯洛夫斯基",
            "偷窥",
            "纯情",
            "爱情哲学",
            "剧情",
            "伦理"
        ],
        "line": "十九岁的邮局实习生每晚用望远镜偷窥对面楼里做爱的女人,当他说“我爱你”,她却说“性爱里没有爱”。",
        "cover": "./6.jpg",
        "url": "./videos/video-0156.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "花花万物万花筒",
        "year": "1999",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情/奇幻/都市",
        "tags": [
            "单元剧",
            "欲望",
            "奇幻物品",
            "人间百态",
            "剧情",
            "奇幻"
        ],
        "line": "一家古董店里的神秘万花筒,每转一下都能看到他人内心最深处的欲望。",
        "cover": "./7.jpg",
        "url": "./videos/video-0157.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "狐门秘事第一季",
        "year": "2024",
        "region": "中国大陆",
        "type": "TV剧集",
        "genre": "奇幻,悬疑,民国",
        "tags": [
            "狐仙",
            "民国奇案",
            "捉妖",
            "前世今生",
            "单元剧",
            "奇幻"
        ],
        "line": "民国警察白辰被迫与活了三百年的狐妖沈夜合作,专破涉及妖邪的诡异命案。",
        "cover": "./8.jpg",
        "url": "./videos/video-0158.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "我的宠物是大象",
        "year": "2023",
        "region": "泰国",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "治愈",
            "大象",
            "留守儿童",
            "环保",
            "剧情",
            "家庭"
        ],
        "line": "一个自闭症男孩与一头老年大象相依为命,对抗贪婪的旅游开发商。",
        "cover": "./9.jpg",
        "url": "./videos/video-0159.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "缉毒警",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作、犯罪、剧情",
        "tags": [
            "卧底",
            "边境毒战",
            "兄弟反目",
            "牺牲",
            "动作",
            "犯罪"
        ],
        "line": "一对情同手足的缉毒警搭档,一人卧底毒巢后失联三年,再次相见时,一个穿着警服,一个坐在了毒枭的轮椅上。",
        "cover": "./10.jpg",
        "url": "./videos/video-0160.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "哈拉上菜之疯狂大车拼",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧/美食/动作",
        "tags": [
            "夜市",
            "厨艺比拼",
            "黑帮",
            "爆笑",
            "外卖员",
            "喜剧"
        ],
        "line": "为还债,前黑道厨神被迫参加“全台夜市极速大胃王接力赛”,做菜比砍人还难。",
        "cover": "./11.jpg",
        "url": "./videos/video-0161.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "红手指",
        "year": "2011",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑",
        "tags": [
            "社会派推理",
            "家庭伦理",
            "亲情",
            "犯罪",
            "伪装",
            "悬疑"
        ],
        "line": "刑警哥哥发现凶手是弟弟,年迈母亲伸出涂红的手指,指向了真正的恶。",
        "cover": "./12.jpg",
        "url": "./videos/video-0162.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "头号人蛇",
        "year": "2025",
        "region": "中国香港/泰国",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "偷渡",
            "反英雄",
            "暴力美学",
            "东南亚",
            "动作",
            "犯罪"
        ],
        "line": "曾经的人贩之王隐退在寺庙出家,当女儿被拐入诈骗园区后,他重返地狱,要用“恶”来赎回罪孽。",
        "cover": "./13.jpg",
        "url": "./videos/video-0163.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "居住正义",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情、社会、黑色幽默",
        "tags": [
            "租房",
            "青年困境",
            "社运",
            "钉子户",
            "都市传说",
            "剧情"
        ],
        "line": "五个台北租房青年成立“居住正以团体”,用非暴力不合作手段对抗黑心房市,结果把自己逼成了全台最大房东。",
        "cover": "./14.jpg",
        "url": "./videos/video-0164.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "牧场住宅指南",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "恐怖,悬疑,家庭",
        "tags": [
            "鬼宅",
            "装修惊魂",
            "家族诅咒",
            "空间悖论",
            "恐怖",
            "悬疑"
        ],
        "line": "一对夫妻买下便宜牧场住宅,按装修指南敲掉一面墙后,发现房子里多了三个房间、五个门和一具尸体。",
        "cover": "./15.jpg",
        "url": "./videos/video-0165.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "富士山之恋",
        "year": "2005",
        "region": "日本",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "绝症",
            "雪景",
            "纯爱",
            "约定",
            "爱情",
            "剧情"
        ],
        "line": "因误会分手的恋人,十年后在富士山脚下的临终关怀医院重逢,他们都已是癌症晚期患者。",
        "cover": "./16.jpg",
        "url": "./videos/video-0166.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "独居山中",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/社会",
        "tags": [
            "留守老人",
            "山村变迁",
            "数字鸿沟",
            "隔代亲情",
            "剧情",
            "家庭"
        ],
        "line": "一个七十岁的山里老人学会了用智能手机,只为了和在外打工的孙子说一句“我很好”。",
        "cover": "./17.jpg",
        "url": "./videos/video-0167.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "人生删除事务所",
        "year": "2027",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情,悬疑,科幻",
        "tags": [
            "数字遗产",
            "人性",
            "单元剧",
            "剧情",
            "悬疑",
            "科幻"
        ],
        "line": "一家专门在委托人死后删除其电子数据的公司,接到了为自己创始人处理遗物的订单。",
        "cover": "./18.jpg",
        "url": "./videos/video-0168.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "婚礼宾客",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/悬疑/家庭",
        "tags": [
            "乡村别墅",
            "秘密揭露",
            "阶级差异",
            "暴风雪山庄",
            "剧情",
            "悬疑"
        ],
        "line": "一场富豪的奢华婚礼上,一个不请自来的流浪汉声称自己是新郎失散多年的父亲。",
        "cover": "./19.jpg",
        "url": "./videos/video-0169.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "陨石噩梦",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "灾难/心理惊悚",
        "tags": [
            "末日求生",
            "陨石坠落",
            "幻觉",
            "小镇封闭",
            "人性试炼",
            "灾难"
        ],
        "line": "陨石没有砸中小镇,但它释放的孢子,让每个人都看见自己最恐惧的东西活了过来。",
        "cover": "./20.jpg",
        "url": "./videos/video-0170.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "改变皮肤",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "科幻,惊悚",
        "tags": [
            "整容科技",
            "身份盗窃",
            "伦理困境",
            "追凶",
            "科幻",
            "惊悚"
        ],
        "line": "一款革命性的皮肤移植技术问世,却成为连环杀手完美伪装自己的工具。",
        "cover": "./21.jpg",
        "url": "./videos/video-0171.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "26年",
        "year": "2025",
        "region": "中国内地",
        "type": "电影",
        "genre": "悬疑,剧情",
        "tags": [
            "年代",
            "罪案",
            "追凶",
            "执念",
            "悬疑",
            "剧情"
        ],
        "line": "一桩尘封26年的少女失踪案,让退休刑警和受害者的AI数字分身,开始了一场跨越生死的对话。",
        "cover": "./22.jpg",
        "url": "./videos/video-0172.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "异形活人实验",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,恐怖",
        "tags": [
            "人体实验",
            "异形生物",
            "惊悚",
            "科幻",
            "恐怖"
        ],
        "line": "地下实验室里,科学家将活人改造成异形武器,却唤醒了比异形更可怕的自我意识。",
        "cover": "./23.jpg",
        "url": "./videos/video-0173.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "都是夏娃惹的祸",
        "year": "2003",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情、喜剧、偶像",
        "tags": [
            "替身",
            "身份错位",
            "欢喜冤家",
            "古早偶像剧",
            "爱情",
            "喜剧"
        ],
        "line": "一个大大咧咧的女孩顶替双胞胎姐姐进入上流社会,却爱上了未婚夫的弟弟。",
        "cover": "./24.jpg",
        "url": "./videos/video-0174.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "药命实验",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,惊悚",
        "tags": [
            "洗脑",
            "药物试验",
            "阴谋论",
            "悬疑",
            "反乌托邦",
            "科幻"
        ],
        "line": "为了还债参加高薪药物实验,醒来后发现世界上所有人都忘了他是谁。",
        "cover": "./25.jpg",
        "url": "./videos/video-0175.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "观鸟者",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "悬疑/剧情",
        "tags": [
            "鸟类",
            "小镇秘密",
            "自闭症",
            "目击证人",
            "悬疑",
            "剧情"
        ],
        "line": "一名患有自闭症的少年在观鸟时拍下凶杀现场,却因无法正常沟通而无法让警方相信。",
        "cover": "./26.jpg",
        "url": "./videos/video-0176.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "杀人影子",
        "year": "2002",
        "region": "香港",
        "type": "电影",
        "genre": "悬疑,恐怖,犯罪",
        "tags": [
            "连环杀手",
            "双重人格",
            "雨夜",
            "悬疑",
            "恐怖",
            "犯罪"
        ],
        "line": "雨夜屠夫案接连发生,警察发现所有线索都指向自己,而他不记得自己有做过。",
        "cover": "./27.jpg",
        "url": "./videos/video-0177.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "血腥修道院",
        "year": "2019",
        "region": "西班牙",
        "type": "电影",
        "genre": "恐怖/神秘",
        "tags": [
            "修道院",
            "邪教",
            "古堡",
            "诅咒",
            "恐怖",
            "神秘"
        ],
        "line": "一位怀疑论记者被邀请探访一座闹鬼的废弃修道院,却发现修女们从未离开。 记者深入闹鬼古修道院,发现几百年前的修女仍在执行着血腥的献祭仪式。",
        "cover": "./28.jpg",
        "url": "./videos/video-0178.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "香吻一夕话",
        "year": "2023",
        "region": "意大利",
        "type": "电影",
        "genre": "喜剧/爱情/历史",
        "tags": [
            "1950年代",
            "吻戏审查",
            "电影替身",
            "假戏真做",
            "片场恋情",
            "喜剧"
        ],
        "line": "1956年,罗马电影城,一名“吻戏替身”女演员与教会审查官在片场展开了一场关于“吻的尺度”的拉锯战。",
        "cover": "./29.jpg",
        "url": "./videos/video-0179.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "盗匪甜心",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧,爱情,犯罪",
        "tags": [
            "银行劫匪",
            "甜点师",
            "法兰西式浪漫",
            "喜剧",
            "爱情",
            "犯罪"
        ],
        "line": "全法通缉的头号银行劫匪,为了追一个甜点师,每次都故意在她打工的店附近抢银行。",
        "cover": "./30.jpg",
        "url": "./videos/video-0180.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "汉尼拔",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "惊悚",
        "tags": [
            "犯罪",
            "心理",
            "食人魔",
            "高智商",
            "惊悚"
        ],
        "line": "青年汉尼拔还未成为“食人魔”之前,是一位在立陶宛城堡废墟中挣扎求生的孤儿,这里是他的怪物诞生之地。",
        "cover": "./31.jpg",
        "url": "./videos/video-0181.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "亲亲我家",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭,喜剧,短片",
        "tags": [
            "亲情",
            "治愈",
            "萌娃",
            "生活碎片",
            "家庭",
            "喜剧"
        ],
        "line": "一个五口之家为了争夺旧房拆迁款,被迫上演“史上最假”相亲相爱一家人真人秀。",
        "cover": "./32.jpg",
        "url": "./videos/video-0182.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "有个地方叫马兰",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/历史/年代",
        "tags": [
            "核试验",
            "戈壁",
            "奉献",
            "两弹一星",
            "童年视角",
            "剧情"
        ],
        "line": "透过一个孩子的眼睛,看中国核试验基地“马兰”里那些隐姓埋名的科学家与军人。",
        "cover": "./33.jpg",
        "url": "./videos/video-0183.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "明星大侦探之明星烧脑时间",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺/互动剧",
        "genre": "悬疑,推理,真人秀",
        "tags": [
            "密室",
            "剧本杀",
            "反转",
            "明星",
            "沉浸式",
            "悬疑"
        ],
        "line": "六位明星被困在直播密室,只有解开自己设计的完美谋杀案才能逃生。",
        "cover": "./34.jpg",
        "url": "./videos/video-0184.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "屋顶里的散步者",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑,犯罪,情色",
        "tags": [
            "偷窥",
            "阁楼",
            "密室",
            "江户川乱步",
            "悬疑",
            "犯罪"
        ],
        "line": "无所事事的青年在出租屋天花板夹层里偷窥整栋公寓,意外发现了一起完美谋杀案。",
        "cover": "./35.jpg",
        "url": "./videos/video-0185.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "杀手妻子的保镖",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "动作、喜剧、犯罪",
        "tags": [
            "保镖",
            "疯狂",
            "欧洲",
            "三人行",
            "暴力美学",
            "动作"
        ],
        "line": "保镖迈克尔被迫保护杀手的暴躁妻子,以及刚从监狱越狱的杀手本人,这简直是地狱级副本。",
        "cover": "./36.jpg",
        "url": "./videos/video-0186.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "情欲色香味",
        "year": "2024",
        "region": "意大利/法国",
        "type": "电影",
        "genre": "剧情/情色",
        "tags": [
            "感官盛宴",
            "美食与欲望",
            "艺术实验",
            "禁恋",
            "视觉冲击",
            "剧情"
        ],
        "line": "一位失明的米其林大厨,用舌头感知世界,却尝出了妻子身上的陌生人味道。",
        "cover": "./37.jpg",
        "url": "./videos/video-0187.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "中华大丈夫粤语",
        "year": "1998",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "动作,喜剧",
        "tags": [
            "民国功夫",
            "中外对决",
            "粤语原声",
            "动作",
            "喜剧"
        ],
        "line": "民国初年,广东武术世家子弟迎娶外国妻子,引发了一场“捍卫国术”与“捍卫爱情”的荒唐大战。",
        "cover": "./38.jpg",
        "url": "./videos/video-0188.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "湖妖",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻,爱情,惊悚",
        "tags": [
            "民间传说",
            "水怪",
            "前世今生",
            "国风美学",
            "奇幻",
            "爱情"
        ],
        "line": "考古学家在干涸的湖底发现一具女尸,竟与自己每晚梦见的湖中新娘一模一样。",
        "cover": "./39.jpg",
        "url": "./videos/video-0189.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "恶魔之手",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,奇幻,武侠",
        "tags": [
            "港产片",
            "功夫",
            "邪术",
            "宿命",
            "动作",
            "奇幻"
        ],
        "line": "拳击手移植了传说中“恶魔之手”后,每挥一拳都折损他人寿命。",
        "cover": "./40.jpg",
        "url": "./videos/video-0190.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "金刚归来2024",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作,冒险,科幻",
        "tags": [
            "怪兽",
            "亲情",
            "地心世界",
            "特效大片",
            "动作",
            "冒险"
        ],
        "line": "骷髅岛被毁后,金刚消失多年,直到一名自闭症小女孩用手语在电视信号中解码出金刚的求救声波。",
        "cover": "./41.jpg",
        "url": "./videos/video-0191.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "发明圣诞节的人",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/传记/奇幻",
        "tags": [
            "圣诞",
            "文学改编",
            "维多利亚时代",
            "温暖治愈",
            "剧情",
            "传记"
        ],
        "line": "当查尔斯·狄更斯陷入创作瓶颈,笔下角色竟集体逃出草稿,逼他重新发明圣诞节。",
        "cover": "./42.jpg",
        "url": "./videos/video-0192.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "妄想学生会 剧场版",
        "year": "2025",
        "region": "日本",
        "type": "剧场版",
        "genre": "喜剧/动画",
        "tags": [
            "校园",
            "黄段子",
            "毕业",
            "喜剧",
            "动画"
        ],
        "line": "即将毕业的学生会成员们举办最后一次“妄想会议”,却意外收到来自未来的求助信。",
        "cover": "./43.jpg",
        "url": "./videos/video-0193.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "何处是归程",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "剧情/公路/家庭",
        "tags": [
            "寻根",
            "父子",
            "卡车司机",
            "公路片",
            "剧情",
            "公路"
        ],
        "line": "一对十年不说话的父子,为了把爷爷的骨灰送回老家,被迫挤在同一辆卡车里走了三千公里。",
        "cover": "./44.jpg",
        "url": "./videos/video-0194.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "失落的世界(下)",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,冒险,动作",
        "tags": [
            "恐龙",
            "岛屿",
            "生存",
            "视觉奇观",
            "科幻",
            "冒险"
        ],
        "line": "幸存者们从高原坠入地下海洋,发现恐龙文明与人类末日预言的真实关联。",
        "cover": "./45.jpg",
        "url": "./videos/video-0195.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "别怕,我和你在一起",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "自闭症",
            "父子情",
            "治愈",
            "社会关怀",
            "剧情",
            "家庭"
        ],
        "line": "单亲爸爸为患自闭症的儿子发明了一种只属于他们的“触摸语言”。",
        "cover": "./46.jpg",
        "url": "./videos/video-0196.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "浮生梦痕",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,爱情,奇幻",
        "tags": [
            "宿命",
            "轮回",
            "文艺",
            "旗袍",
            "剧情",
            "爱情"
        ],
        "line": "一块流落风尘的怀表,连接了1940年代上海滩的舞女与2024年的香港设计师,他们在梦境中相爱与拯救。",
        "cover": "./47.jpg",
        "url": "./videos/video-0197.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "情叙一刻",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情/剧情/都市",
        "tags": [
            "婚姻",
            "心理咨询",
            "对话体",
            "现实",
            "爱情",
            "剧情"
        ],
        "line": "一对准备离婚的夫妻被心理咨询师要求用“一个小时”讲述他们从相识到离婚的全部过程,但两人讲的是完全相反的两个版本。",
        "cover": "./48.jpg",
        "url": "./videos/video-0198.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "这叫做黎明",
        "year": "1956",
        "region": "法国/意大利",
        "type": "电影",
        "genre": "剧情/文学改编",
        "tags": [
            "存在主义",
            "工人运动",
            "友谊",
            "剧情",
            "文学改编"
        ],
        "line": "南法小镇的工程师为救工人兄弟,亲手把镇长推下了悬崖。",
        "cover": "./49.jpg",
        "url": "./videos/video-0199.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "龙仇凤血粤语",
        "year": "1992",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "武侠/古装",
        "tags": [
            "复仇",
            "家族",
            "粤语",
            "权谋",
            "武侠",
            "古装"
        ],
        "line": "明朝年间,龙凤玉佩引发的两家血案,让一对兄妹失散于江湖正邪两端。",
        "cover": "./50.jpg",
        "url": "./videos/video-0200.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "吾家有子初长成",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭/喜剧/剧情",
        "tags": [
            "育儿",
            "父子",
            "单亲",
            "成长",
            "现实主义",
            "家庭"
        ],
        "line": "一个从不管家的出租车司机,突然要独自抚养进入青春期的儿子,而他所有的“教育方式”都来自乘客的只言片语。",
        "cover": "./51.jpg",
        "url": "./videos/video-0201.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "犹太狮子",
        "year": "2017",
        "region": "以色列/美国",
        "type": "电影",
        "genre": "历史/战争",
        "tags": [
            "二战",
            "犹太",
            "游击队",
            "反抗",
            "家族",
            "历史"
        ],
        "line": "1941年东欧,犹太猎人父子三人撕掉黄色星标,躲进原始森林组建游击队,成为纳粹口中的“狮子”。",
        "cover": "./52.jpg",
        "url": "./videos/video-0202.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "欢迎回家",
        "year": "2026",
        "region": "韩国",
        "type": "电视剧",
        "genre": "家庭,悬疑,温情",
        "tags": [
            "失踪",
            "归家",
            "记忆",
            "小镇秘密",
            "家庭",
            "悬疑"
        ],
        "line": "12年前失踪的女儿突然回到小镇,母亲欣喜若狂,但她的DNA、胎记甚至牙科记录都与“本人”不符。",
        "cover": "./53.jpg",
        "url": "./videos/video-0203.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "空乘危机第二季",
        "year": "2022",
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情,喜剧,悬疑,惊悚",
        "tags": [
            "酗酒",
            "精神创伤",
            "谍战",
            "黑色幽默",
            "女主人公",
            "剧情"
        ],
        "line": "酗酒空乘卡茜刚从谋杀案脱身,又卷入一场横跨洛杉矶和柏林的国际谍战,这次她甚至不敢确定自己是不是好人。",
        "cover": "./54.jpg",
        "url": "./videos/video-0204.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "蛇形刁手粤语",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/喜剧/武侠",
        "tags": [
            "功夫",
            "市井",
            "小人物",
            "师父",
            "动作",
            "喜剧"
        ],
        "line": "茶楼跑堂小弟无意中救下一位落魄老乞丐,没想到竟是“蛇形刁手”的末代传人。",
        "cover": "./55.jpg",
        "url": "./videos/video-0205.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "异乡之爱",
        "year": "2020",
        "region": "法国/意大利",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "移民",
            "非法居留",
            "异国恋",
            "巴黎",
            "抗争",
            "爱情"
        ],
        "line": "塞内加尔非法移民与法国女律师相爱,当遣返令下达时,她选择用法律为他“定罪”来换取居留。",
        "cover": "./56.jpg",
        "url": "./videos/video-0206.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "最后一枪",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪动作",
        "tags": [
            "狙击",
            "复仇",
            "硬汉",
            "牺牲",
            "犯罪动作"
        ],
        "line": "一位退休的传奇狙击手,为了保护被卷入黑市器官交易的女儿,不得不重出江湖开出最后一枪。",
        "cover": "./57.jpg",
        "url": "./videos/video-0207.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "惩戒者",
        "year": "2024",
        "region": "韩国",
        "type": "电视剧",
        "genre": "动作,悬疑,犯罪",
        "tags": [
            "私刑正义",
            "检察官",
            "双面人生",
            "黑暗英雄",
            "复仇",
            "动作"
        ],
        "line": "白天是败诉率最高的公益律师,夜晚是让罪犯“体验受害者同等痛苦”的私刑惩戒者。",
        "cover": "./58.jpg",
        "url": "./videos/video-0208.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "盲拳怪招粤语",
        "year": "1985",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,动作,功夫",
        "tags": [
            "市井英雄",
            "方言梗",
            "老港味",
            "喜剧",
            "动作",
            "功夫"
        ],
        "line": "一个只会说粤语的盲人老厨子,靠听声辨位打出一套比咏春还怪的拳法。",
        "cover": "./59.jpg",
        "url": "./videos/video-0209.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "禁曲(波兰电影)",
        "year": "2022",
        "region": "波兰",
        "type": "电影",
        "genre": "恐怖,悬疑",
        "tags": [
            "音乐",
            "诅咒",
            "邪教",
            "恐怖",
            "悬疑"
        ],
        "line": "一支音乐考古团队在波兰地下墓穴发现了一份中世纪的乐谱,当他们奏响它时,听众开始疯狂自杀。",
        "cover": "./60.jpg",
        "url": "./videos/video-0210.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "异次元杀阵2:超级立方体",
        "year": "2025",
        "region": "加拿大",
        "type": "电影",
        "genre": "科幻/恐怖",
        "tags": [
            "密室逃脱",
            "高维空间",
            "烧脑",
            "血腥",
            "科幻",
            "恐怖"
        ],
        "line": "新一代测试者被困入一个会进行时间倒流与平行空间折叠的超级立方体中。",
        "cover": "./61.jpg",
        "url": "./videos/video-0211.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "恋爱回旋",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "运动,爱情",
        "tags": [
            "乒乓球",
            "复合",
            "热血",
            "运动",
            "爱情"
        ],
        "line": "一对分手的情侣在乒乓球混双比赛中重逢,为了赢得奖金,他们必须一边回击对手,一边回旋过去的感情。",
        "cover": "./62.jpg",
        "url": "./videos/video-0212.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "夏日沙上",
        "year": "2012",
        "region": "日本",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "夏日恋情",
            "离别",
            "海边小镇",
            "治愈系",
            "爱情",
            "剧情"
        ],
        "line": "高考失利的女孩逃到海边小镇,遇到了一个说“沙上不能建城堡”的神秘少年。",
        "cover": "./63.jpg",
        "url": "./videos/video-0213.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "小别离",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭,剧情,教育",
        "tags": [
            "留学",
            "亲子",
            "中考",
            "焦虑",
            "家庭",
            "剧情"
        ],
        "line": "三个不同阶层的家庭面对孩子中考后的留学选择,上演了一场关于爱与放手的悲欢离合。",
        "cover": "./64.jpg",
        "url": "./videos/video-0214.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "金粉世家",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧集",
        "genre": "剧情,爱情,年代",
        "tags": [
            "翻拍",
            "民国豪门",
            "家族恩怨",
            "自由恋爱",
            "悲剧美学",
            "剧情"
        ],
        "line": "新版《金粉世家》,总理之子金燕西用铺张的向日葵花海追到了冷清秋,却在婚后被家族权力斗争和性格差异撕碎了这场梦。",
        "cover": "./65.jpg",
        "url": "./videos/video-0215.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "心动的信号第七季",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀/爱情",
        "tags": [
            "素人恋爱",
            "观察室",
            "职场恋情",
            "反向配对",
            "修罗场",
            "真人秀"
        ],
        "line": "这一季全员“反套路”:嘉宾都是情感咨询师,每个人都在分析别人,却治不好自己的心病。",
        "cover": "./66.jpg",
        "url": "./videos/video-0216.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "蒙克音声拼图",
        "year": "2026",
        "region": "挪威/德国",
        "type": "电影",
        "genre": "传记/悬疑",
        "tags": [
            "爱德华·蒙克",
            "声音设计",
            "心理惊悚",
            "艺术史",
            "传记",
            "悬疑"
        ],
        "line": "声音设计师受命修复蒙克名画《呐喊》的原始音频,却在声轨中听到了不属于那个时代的秘密。",
        "cover": "./67.jpg",
        "url": "./videos/video-0217.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "她的日与夜",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑/奇幻",
        "tags": [
            "双重人格",
            "检察官",
            "夜行杀手",
            "悬疑",
            "奇幻"
        ],
        "line": "白天是正义女检察官,夜晚却变成无差别杀人魔,且第二天她会收到死者寄来的忏悔录像。",
        "cover": "./68.jpg",
        "url": "./videos/video-0218.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "猎恶游戏泰语",
        "year": "2021",
        "region": "泰国",
        "type": "剧集",
        "genre": "动作/悬疑",
        "tags": [
            "泰剧",
            "复仇",
            "密室",
            "直播",
            "动作",
            "悬疑"
        ],
        "line": "十二个陌生人被关进废弃商场,必须在72小时内互相猎杀,且全程直播给全网观看。",
        "cover": "./69.jpg",
        "url": "./videos/video-0219.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "美女食神",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/美食/奇幻",
        "tags": [
            "味觉争霸",
            "阴阳眼",
            "民间传说",
            "励志",
            "喜剧",
            "美食"
        ],
        "line": "一个能看到食物“前世今生”的夜市厨娘,被卷入了一场决定人间美食命运的厨神大战。",
        "cover": "./70.jpg",
        "url": "./videos/video-0220.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "大众情人之死",
        "year": "2024",
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑,惊悚,剧情",
        "tags": [
            "黑色幽默",
            "网红之死",
            "社交媒体批判",
            "反转再反转",
            "悬疑",
            "惊悚"
        ],
        "line": "坐拥千万粉丝的“大众情人”网红意外死亡,六个与他有过瓜葛的嫌疑人各执一词,真相扑朔迷离。",
        "cover": "./71.jpg",
        "url": "./videos/video-0221.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "阿斯利的义务",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "战争/历史",
        "tags": [
            "一战",
            "殖民地士兵",
            "印度军团",
            "兄弟情",
            "战争",
            "历史"
        ],
        "line": "一战西线战场,一名印度锡克教士兵唯一的“义务”,是把阵亡英国长官的骨灰送回约克郡的家族墓地。",
        "cover": "./72.jpg",
        "url": "./videos/video-0222.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "幸福厨房",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "美食",
            "和解",
            "返乡",
            "代际冲突",
            "剧情",
            "家庭"
        ],
        "line": "一道失传的糖醋排骨,让决裂十年的母女在故乡厨房里重新面对彼此。",
        "cover": "./73.jpg",
        "url": "./videos/video-0223.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "巨星总动员",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,动画,冒险",
        "tags": [
            "真人动画",
            "自黑",
            "明星客串",
            "拯救世界",
            "喜剧",
            "动画"
        ],
        "line": "过气动作明星与自恋的卡通兔子搭档,必须潜入好莱坞最疯狂的粉丝聚会,阻止一场偶像毁灭计划。",
        "cover": "./74.jpg",
        "url": "./videos/video-0224.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "海洋才是真正的大陆",
        "year": "2025",
        "region": "葡萄牙/安哥拉",
        "type": "电影",
        "genre": "剧情,文艺,历史",
        "tags": [
            "殖民伤痕",
            "大航海",
            "身份认同",
            "诗意影像",
            "黑人侨民",
            "剧情"
        ],
        "line": "如今的里斯本,一名非洲裔潜水员在特茹河底打捞殖民时期的沉船遗物,却打捞起了一段被淹没的家族记忆。",
        "cover": "./75.jpg",
        "url": "./videos/video-0225.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "胡杨的夏天",
        "year": "2017",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情/剧情/公路",
        "tags": [
            "新疆",
            "沙漠公路",
            "摄影师",
            "一见钟情",
            "爱情",
            "剧情"
        ],
        "line": "梦想成为战地摄影师的城市男孩,在塔克拉玛干沙漠遇见了守护胡杨林的倔强女孩,一场关于生命与爱情的冒险开始了。",
        "cover": "./76.jpg",
        "url": "./videos/video-0226.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "穿梭阴阳界",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "奇幻/剧情/悬疑",
        "tags": [
            "阴阳眼",
            "出租车",
            "灵异",
            "摆渡人",
            "单元剧",
            "奇幻"
        ],
        "line": "一个能看到鬼魂的出租车司机,每晚载着亡魂完成他们最后一次心愿旅程。",
        "cover": "./77.jpg",
        "url": "./videos/video-0227.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "牛仔和僵尸",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/西部/动作",
        "tags": [
            "西部片",
            "丧尸",
            "复古恐怖",
            "硬汉对决",
            "黑色幽默",
            "恐怖"
        ],
        "line": "1870年西部荒原,一场诡异的沙暴过后,死去的枪手从坟墓里爬出,而只有一个人知道它们的弱点。",
        "cover": "./78.jpg",
        "url": "./videos/video-0228.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "百花缭乱武士新娘",
        "year": "2021",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧/爱情/古装",
        "tags": [
            "穿越",
            "武士",
            "政治联姻",
            "沙雕",
            "喜剧",
            "爱情"
        ],
        "line": "现代空手道女冠军穿越到战国时代,被迫嫁给一个病秧子大名,却发现他是全日本最强剑豪。",
        "cover": "./79.jpg",
        "url": "./videos/video-0229.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "企鹅之岛:福克兰",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "纪录片/剧情/冒险",
        "tags": [
            "自然",
            "动物",
            "探险",
            "生存",
            "纪录片",
            "剧情"
        ],
        "line": "在南大西洋的暴风雪中,一只名为“老派”的雄性企鹅为了给伴侣寻找食物,必须穿过海狮的狩猎场。",
        "cover": "./80.jpg",
        "url": "./videos/video-0230.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "学校怪谈",
        "year": "2026",
        "region": "日本",
        "type": "动画电影",
        "genre": "恐怖/奇幻",
        "tags": [
            "校园七大不可思议",
            "友情",
            "规则",
            "恐怖",
            "奇幻"
        ],
        "line": "转学生不小心打破了“午夜在音乐教室弹钢琴”的禁忌,全校被拉入一本恐怖漫画。",
        "cover": "./81.jpg",
        "url": "./videos/video-0231.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "阿亚米",
        "year": "2024",
        "region": "以色列/巴勒斯坦",
        "type": "电影",
        "genre": "剧情,犯罪",
        "tags": [
            "多线叙事",
            "邻里纠纷",
            "暴力循环",
            "写实主义",
            "剧情",
            "犯罪"
        ],
        "line": "雅法贫民区的一桩枪击案,将五个不同种族与信仰的家庭拖入无法化解的仇恨漩涡。",
        "cover": "./82.jpg",
        "url": "./videos/video-0232.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "炊事班的故事2",
        "year": "2024",
        "region": "中国内地",
        "type": "剧集",
        "genre": "喜剧、军旅、情景剧",
        "tags": [
            "军营",
            "美食",
            "战友",
            "爆笑",
            "正能量",
            "喜剧"
        ],
        "line": "空军某场站炊事班迎来新挑战:给挑食的特种兵大队做饭,还得搞营养配餐。",
        "cover": "./83.jpg",
        "url": "./videos/video-0233.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "我们是演员",
        "year": "2025",
        "region": "俄罗斯",
        "type": "剧集",
        "genre": "剧情,黑色幽默",
        "tags": [
            "剧团",
            "骗局",
            "政治",
            "剧情",
            "黑色幽默"
        ],
        "line": "一个三流剧团被克格勃余党雇佣,假扮政府高官演一出“国家还在正常运转”的戏。",
        "cover": "./84.jpg",
        "url": "./videos/video-0234.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "问心",
        "year": "2026",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/悬疑/家庭",
        "tags": [
            "医患",
            "秘密",
            "记忆",
            "伦理",
            "反转",
            "剧情"
        ],
        "line": "心脏移植术后,沉默寡言的病人开始梦见捐赠者的记忆,并发现捐赠者竟是被谋杀的。",
        "cover": "./85.jpg",
        "url": "./videos/video-0235.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "密室大逃脱第二季",
        "year": "2020",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀/悬疑/冒险",
        "tags": [
            "密室逃脱",
            "明星玩家",
            "解压",
            "脑力",
            "恐怖密室",
            "真人秀"
        ],
        "line": "六位明星被困在一栋废弃医院里,每一扇门背后都是他们内心最深处的恐惧。",
        "cover": "./86.jpg",
        "url": "./videos/video-0236.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "咿嘞呜!",
        "year": "2012",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧/音乐",
        "tags": [
            "无厘头",
            "口技",
            "小镇",
            "怪诞",
            "喜剧",
            "音乐"
        ],
        "line": "一个只会用口技发出“咿嘞呜”声的哑巴,成了小镇上最受欢迎的电台DJ。",
        "cover": "./87.jpg",
        "url": "./videos/video-0237.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "冥婚",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "民俗恐怖",
            "阴阳婚",
            "诅咒",
            "反转",
            "恐怖",
            "惊悚"
        ],
        "line": "一场为亡弟举办的冥婚,让女摄影师成了厉鬼的新娘,却发现新郎竟另有其人。",
        "cover": "./88.jpg",
        "url": "./videos/video-0238.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "招财进宝",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/奇幻",
        "tags": [
            "财运",
            "家庭",
            "风水",
            "黑色幽默",
            "喜剧",
            "奇幻"
        ],
        "line": "一个穷困潦倒的保险销售意外请回了“财神”,却发现财神带来的不是钱,而是让他极度痛苦的超级好运。",
        "cover": "./89.jpg",
        "url": "./videos/video-0239.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "血脉相连",
        "year": "2022",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "家庭、悬疑、剧情",
        "tags": [
            "家庭秘密",
            "多代叙事",
            "血缘谎言",
            "农村与城市",
            "身份认同",
            "家庭"
        ],
        "line": "一次骨髓配型,揭开了这个模范家庭最大的秘密:五个兄弟姐妹,没有一个人与父母有血缘关系。",
        "cover": "./90.jpg",
        "url": "./videos/video-0240.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "刑警之海外行动",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "犯罪/动作/刑侦",
        "tags": [
            "跨国追凶",
            "境外执法",
            "硬汉刑警",
            "国际合作",
            "枪战",
            "犯罪"
        ],
        "line": "中国刑警组成海外行动组,在没有执法权的情况下,用智力和胆识在异国他乡抓捕逃犯。",
        "cover": "./91.jpg",
        "url": "./videos/video-0241.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "县道184之东",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "公路/剧情",
        "tags": [
            "台东",
            "单车环岛",
            "老兵",
            "寻根",
            "慢电影",
            "公路"
        ],
        "line": "一个患癌的山东老兵骑单车沿台东县道184号东行,他要赶在化疗前把骨灰撒在金门对面的海里。",
        "cover": "./92.jpg",
        "url": "./videos/video-0242.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "越狱第三季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "动作悬疑",
        "tags": [
            "越狱",
            "也门",
            "极端组织",
            "小队重聚",
            "动作悬疑"
        ],
        "line": "迈克尔在也门监狱醒来,发现这次要越的不只是一堵墙,而是一座被极端组织控制的战区城市。",
        "cover": "./93.jpg",
        "url": "./videos/video-0243.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "危机中的女人",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情,悬疑",
        "tags": [
            "女性题材",
            "政治惊悚",
            "复仇",
            "媒体",
            "剧情",
            "悬疑"
        ],
        "line": "电视台女记者与检察官之妻在各自丈夫的阴谋中相遇,联手披露惊天腐败案。",
        "cover": "./94.jpg",
        "url": "./videos/video-0244.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "瑞典少女",
        "year": "2026",
        "region": "瑞典",
        "type": "电影",
        "genre": "剧情/冒险",
        "tags": [
            "环保",
            "成长",
            "公路片",
            "剧情",
            "冒险"
        ],
        "line": "为了寻找失踪的环保科学家父亲,一个患有社交障碍的少女踏上横跨北欧的孤独旅程。",
        "cover": "./95.jpg",
        "url": "./videos/video-0245.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "夏普的传奇",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "传记/运动",
        "tags": [
            "足球",
            "天才",
            "陨落",
            "救赎",
            "真实改编",
            "传记"
        ],
        "line": "上世纪九十年代英格兰天才球星夏普,从曼联崛起、沉沦酒精到最后自我救赎的跌宕一生。",
        "cover": "./96.jpg",
        "url": "./videos/video-0246.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "遥远星际:和平使者之战",
        "year": "2004",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,动作",
        "tags": [
            "太空歌剧",
            "星际战争",
            "孤胆英雄",
            "视觉奇观",
            "科幻",
            "动作"
        ],
        "line": "一位失忆的星际战士发现自己就是终极武器“和平使者”,而他的两个交战的外星种族都想得到他的控制权。",
        "cover": "./97.jpg",
        "url": "./videos/video-0247.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "地平线系列:跨性别者",
        "year": "2019",
        "region": "英国",
        "type": "纪录片剧集",
        "genre": "纪录/社会",
        "tags": [
            "性别认同",
            "真实故事",
            "医学前沿",
            "纪录",
            "社会"
        ],
        "line": "BBC地平线团队追踪四位跨性别者,从青春期阻斷劑到性别重置手术,揭开医疗与身份的真实碰撞。",
        "cover": "./98.jpg",
        "url": "./videos/video-0248.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "挛爱砒霜",
        "year": "2001",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情同性惊悚",
        "tags": [
            "香港电影",
            "畸形爱恋",
            "致命关系",
            "心理惊悚",
            "剧情同性惊悚"
        ],
        "line": "两个女人因为孤独而相恋,又因为嫉妒而互相在对方的汤里缓缓倒入砒霜。",
        "cover": "./99.jpg",
        "url": "./videos/video-0249.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "我是怎样度过这个夏天",
        "year": "2010",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "北极",
            "心理博弈",
            "囚禁",
            "剧情"
        ],
        "line": "一名老气象员与一个年轻实习生,在北极孤岛上用谎言维持着生存秩序。",
        "cover": "./100.jpg",
        "url": "./videos/video-0250.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "制造杀人犯第二季",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪,悬疑,剧情",
        "tags": [
            "冤案",
            "司法腐败",
            "小镇阴谋",
            "十年追踪",
            "真实改编",
            "犯罪"
        ],
        "line": "第一季主角的翻案希望彻底破灭后,一名新人律师从“受害者家属”的角度重新调查,发现了更可怕的真相。",
        "cover": "./101.jpg",
        "url": "./videos/video-0251.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "深层恐惧",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "深海",
            "心理恐怖",
            "怪物",
            "封闭空间",
            "恐怖",
            "惊悚"
        ],
        "line": "深海勘探队遭遇不明生物,但真正的怪物一直潜伏在队员的记忆深处。",
        "cover": "./102.jpg",
        "url": "./videos/video-0252.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "一剪芳华",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "年代,剧情,爱情",
        "tags": [
            "旗袍",
            "非遗",
            "民国",
            "师徒",
            "传承",
            "年代"
        ],
        "line": "上海滩最后一代旗袍裁缝,收了个看不懂尺子、只会画漫画的徒弟。徒弟后来设计了宋美龄的旗袍。",
        "cover": "./103.jpg",
        "url": "./videos/video-0253.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "开膛手的名单",
        "year": "2019",
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑,历史",
        "tags": [
            "白教堂",
            "连环杀手",
            "维多利亚时代",
            "悬疑",
            "历史"
        ],
        "line": "一份写在裙衬上的名单,牵扯出五位开膛手杰克真正可能的身份。",
        "cover": "./104.jpg",
        "url": "./videos/video-0254.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "天堂的张望",
        "year": "2020",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "白血病",
            "父女情",
            "催泪",
            "真实事件改编",
            "剧情",
            "家庭"
        ],
        "line": "七岁女孩患白血病后主动放弃治疗,只为不让养父背负巨额债务。",
        "cover": "./105.jpg",
        "url": "./videos/video-0255.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "安市城",
        "year": "2018",
        "region": "韩国",
        "type": "电影",
        "genre": "历史,战争,动作",
        "tags": [
            "古代战争",
            "攻城战",
            "唐朝",
            "高句丽",
            "赵寅成",
            "历史"
        ],
        "line": "唐太宗李世民亲征高句丽,却在安市城下被城主杨万春带领五千守军死死拖住,长达数月。",
        "cover": "./106.jpg",
        "url": "./videos/video-0256.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "霍比特人1:意外之旅",
        "year": "2012",
        "region": "美国/新西兰",
        "type": "电影",
        "genre": "奇幻/冒险/动作",
        "tags": [
            "中土世界",
            "矮人",
            "魔戒前传",
            "奇幻",
            "冒险",
            "动作"
        ],
        "line": "安逸的霍比特人比尔博·巴金斯,被十三个矮人闯入家门,从此踏上了一条“意外”的寻宝之旅。",
        "cover": "./107.jpg",
        "url": "./videos/video-0257.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "我的魔鬼朋友",
        "year": "2025",
        "region": "德国",
        "type": "电影",
        "genre": "奇幻/剧情/心理",
        "tags": [
            "隐喻",
            "心魔",
            "童年创伤",
            "幻想朋友",
            "奇幻",
            "剧情"
        ],
        "line": "十岁男孩的幻想朋友“魔鬼”开始干涉他的现实生活,而这个魔鬼,长得和爸爸一模一样。",
        "cover": "./108.jpg",
        "url": "./videos/video-0258.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "五哈游戏特辑",
        "year": "2026",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀/喜剧/冒险",
        "tags": [
            "公路旅行",
            "整蛊",
            "兄弟情",
            "旅行挑战",
            "爆笑",
            "真人秀"
        ],
        "line": "五哈兄弟团再次启程,但这次他们被没收了所有经费,只能靠完成各种奇葩游戏任务来赚取回家的路费。",
        "cover": "./109.jpg",
        "url": "./videos/video-0259.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "7号室",
        "year": "2017",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑/犯罪/黑色幽默",
        "tags": [
            "密室",
            "尸体",
            "黑帮",
            "DVD",
            "环环相扣",
            "悬疑"
        ],
        "line": "破旧的DVD房里,一具尸体和一袋现金,让两个绝望的男人在7号室展开了疯狂的博弈。",
        "cover": "./110.jpg",
        "url": "./videos/video-0260.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "苏西",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "悬疑/心理",
        "tags": [
            "多重人格",
            "失踪",
            "心理惊悚",
            "悬疑",
            "心理"
        ],
        "line": "姐姐苏西失踪了,妹妹在寻找她的过程中,发现自己和姐姐可能共享着同一个身体。",
        "cover": "./111.jpg",
        "url": "./videos/video-0261.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "肯尼迪刺杀证明",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑/历史/犯罪",
        "tags": [
            "肯尼迪",
            "阴谋论",
            "记者",
            "档案解密",
            "高智商",
            "悬疑"
        ],
        "line": "一个与世无争的大学数学教授,竟用概率模型推算出“第二枪手”的存在,并找出了真凶的名字。",
        "cover": "./112.jpg",
        "url": "./videos/video-0262.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "十亿韩元",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情/悬疑/动作",
        "tags": [
            "生存游戏",
            "人性考验",
            "密室",
            "高额奖金",
            "反转",
            "剧情"
        ],
        "line": "八个走投无路的普通人参与一场胜者独享十亿韩元的游戏,却发现游戏规则是互相残杀。",
        "cover": "./113.jpg",
        "url": "./videos/video-0263.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "济公",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装,神话,喜剧",
        "tags": [
            "民间传说",
            "降妖",
            "疯癫和尚",
            "单元剧",
            "古装",
            "神话"
        ],
        "line": "这个疯和尚不念经不拜佛,专管人间不平事,但他每帮一个人,自己就要失去一种神通。",
        "cover": "./114.jpg",
        "url": "./videos/video-0264.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "2025重阳奇妙游",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺/晚会",
        "genre": "文化/歌舞/实景",
        "tags": [
            "传统节日",
            "国风",
            "视觉盛宴",
            "文化",
            "歌舞",
            "实景"
        ],
        "line": "一台没有主持人的重阳晚会,用舞蹈、戏曲和光影,重新定义“敬老”。",
        "cover": "./115.jpg",
        "url": "./videos/video-0265.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "武林:唐门秘毒",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "武侠,动作,悬疑",
        "tags": [
            "唐门",
            "毒术",
            "灭门",
            "复仇",
            "反转",
            "武侠"
        ],
        "line": "唐门一夜灭门,唯一幸存者发现自己体内被种下了七种慢性剧毒。",
        "cover": "./116.jpg",
        "url": "./videos/video-0266.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "在巴黎的夏天",
        "year": "2026",
        "region": "法国",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "巴黎",
            "老年",
            "初恋",
            "阿尔茨海默",
            "浪漫",
            "爱情"
        ],
        "line": "八十岁的阿尔茨海默患者每年夏天都会“第一次”爱上同一个人——负责照顾她的养老院护工。",
        "cover": "./117.jpg",
        "url": "./videos/video-0267.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "跳跃的爱情",
        "year": "2018",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情,奇幻",
        "tags": [
            "时间循环",
            "跳楼",
            "救援",
            "双向暗恋",
            "爱情",
            "奇幻"
        ],
        "line": "能时间跳跃的女孩每次跳回过去,都会发现男主在不同的时空里暗恋着她。",
        "cover": "./118.jpg",
        "url": "./videos/video-0268.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "古屋怪人",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "悬疑/恐怖",
        "tags": [
            "哥特",
            "遗产继承",
            "家族诅咒",
            "密室",
            "悬疑",
            "恐怖"
        ],
        "line": "一个年轻人继承了一座偏远古堡,却发现城堡里一直住着一个要求他保守秘密的“怪人”。",
        "cover": "./119.jpg",
        "url": "./videos/video-0269.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "老子我最大",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧/动作/犯罪",
        "tags": [
            "黑帮",
            "乌龙",
            "老年",
            "反转",
            "喜剧",
            "动作"
        ],
        "line": "一个养老院里,三位失智老人其实是隐退的传奇黑帮大佬。",
        "cover": "./120.jpg",
        "url": "./videos/video-0270.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "地狱骇客",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,惊悚,动作",
        "tags": [
            "暗网",
            "意识上传",
            "数字地狱",
            "黑客",
            "硬核动作",
            "科幻"
        ],
        "line": "顶级黑客死后意识被上传到暗网最深处,他发现那里不是虚无,而是一个永不停息的数字炼狱。",
        "cover": "./121.jpg",
        "url": "./videos/video-0271.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "上帝保佑美国",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/犯罪",
        "tags": [
            "黑色幽默",
            "反社会",
            "社会讽刺",
            "公路杀戮",
            "边缘人",
            "喜剧"
        ],
        "line": "一个被炒鱿鱼的中年男人和一个厌世少女组成“社会清除小队”,直播处决不文明的路人,却成了全民偶像。",
        "cover": "./122.jpg",
        "url": "./videos/video-0272.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "直接武力",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作,惊悚",
        "tags": [
            "特种部队",
            "以暴制暴",
            "复仇",
            "硬核动作",
            "单挑",
            "动作"
        ],
        "line": "退役特种兵的女儿被绑架,他放弃所有谈判策略,选择用最原始的方式逐个击破整个犯罪网络。",
        "cover": "./123.jpg",
        "url": "./videos/video-0273.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "止水",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "乡村留守",
            "情感和解",
            "方言电影",
            "剧情",
            "家庭"
        ],
        "line": "离家十五年的女儿因一口古井的枯竭返乡,却发现母亲早已失智。",
        "cover": "./124.jpg",
        "url": "./videos/video-0274.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "鬼魅情人",
        "year": "2016",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情/奇幻/惊悚",
        "tags": [
            "人鬼恋",
            "记忆删除",
            "附身",
            "悬疑爱情",
            "反转",
            "爱情"
        ],
        "line": "女主每晚梦到的完美情人,其实是三年前因她而死的前男友的鬼魂。",
        "cover": "./125.jpg",
        "url": "./videos/video-0275.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "外出就餐3:饕餮自助",
        "year": "2011",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧、爱情、同性",
        "tags": [
            "LGBTQ+",
            "美食",
            "一夜情变真爱",
            "自助餐大战",
            "喜剧",
            "爱情"
        ],
        "line": "一名恐恋爱的一夜情高手,在一场“自助餐相亲”游戏中,把自己玩进了真爱陷阱。",
        "cover": "./126.jpg",
        "url": "./videos/video-0276.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "肥瑞的疯狂日记第一季",
        "year": "2028",
        "region": "英国",
        "type": "剧集",
        "genre": "喜剧/青春",
        "tags": [
            "减肥",
            "青春期",
            "幻想朋友",
            "成长",
            "喜剧",
            "青春"
        ],
        "line": "160斤的16岁少女与脑内一个“完美瘦版自己”搏斗,却意外成为全校最酷的人。",
        "cover": "./127.jpg",
        "url": "./videos/video-0277.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "农家女",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/农村",
        "tags": [
            "乡村振兴",
            "女性自强",
            "非遗传承",
            "剧情",
            "家庭",
            "农村"
        ],
        "line": "大龄剩女回乡继承祖传染布坊,用一块蓝印花布撬动整个村庄的经济复兴。",
        "cover": "./128.jpg",
        "url": "./videos/video-0278.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "雾都奇遇夜",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,奇幻",
        "tags": [
            "山城",
            "一夜爱情",
            "魔幻现实主义",
            "喜剧",
            "奇幻"
        ],
        "line": "一个雨夜在重庆迷路的快递员,遇见了自称“山城土地神”的神秘女孩,两人开始了一场穿越现实的送件之旅。",
        "cover": "./129.jpg",
        "url": "./videos/video-0279.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "孪生陌生人",
        "year": "2018",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "身份认同",
            "黑色幽默",
            "伦理",
            "反转",
            "剧情",
            "悬疑"
        ],
        "line": "一场基因实验让三兄弟重逢,却发现背后藏着惊人家族的谎言。",
        "cover": "./130.jpg",
        "url": "./videos/video-0280.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "费尔迪杜凯",
        "year": "2024",
        "region": "波兰",
        "type": "电影",
        "genre": "剧情/荒诞",
        "tags": [
            "教育批判",
            "身份迷失",
            "黑色幽默",
            "剧情",
            "荒诞"
        ],
        "line": "一名中学教师被神秘力量变成小学生,被迫重返校园揭开荒诞教育体系的真相。",
        "cover": "./131.jpg",
        "url": "./videos/video-0281.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "欲海群雌",
        "year": "1985",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,情色,伦理",
        "tags": [
            "风月场",
            "女性群像",
            "时代悲剧",
            "剧情",
            "情色",
            "伦理"
        ],
        "line": "八十年代香港红灯区里,四个舞女在欲望与尊严的夹缝中挣扎求生的浮世绘。",
        "cover": "./132.jpg",
        "url": "./videos/video-0282.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "汽车厂风云录",
        "year": "2009",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/年代/行业",
        "tags": [
            "国企改革",
            "工人",
            "90年代",
            "时代浪潮",
            "剧情",
            "年代"
        ],
        "line": "九十年代国企改制大潮中,东北一家汽车厂的工人们,在铁饭碗即将打破的前夜,各自做出了不同的选择。",
        "cover": "./133.jpg",
        "url": "./videos/video-0283.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "七擒七纵七色狼国语",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧情色",
        "tags": [
            "搞笑",
            "情色",
            "翻拍",
            "荒诞",
            "喜剧情色"
        ],
        "line": "七个基友穿越到女儿国,发现这里的法律是:抓到一个男人,就奖励七个颜色的老婆。",
        "cover": "./134.jpg",
        "url": "./videos/video-0284.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "我爱看美眉",
        "year": "2024",
        "region": "台湾",
        "type": "剧集",
        "genre": "喜剧,青春",
        "tags": [
            "少年成长",
            "异性恐惧",
            "偷窥",
            "和解",
            "喜剧",
            "青春"
        ],
        "line": "一个严重社恐的17岁男孩唯一的爱好是“看美眉”,却意外因此成为校园最红的时尚摄影师。",
        "cover": "./135.jpg",
        "url": "./videos/video-0285.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "大西洋帝国第二季",
        "year": "2011",
        "region": "美国",
        "type": "电视剧",
        "genre": "犯罪、历史、剧情",
        "tags": [
            "禁酒令",
            "黑帮",
            "权力斗争",
            "腐败",
            "犯罪",
            "历史"
        ],
        "line": "努基遭昔日盟友吉米背叛,腹背受敌,大西洋城的王座开始松动。",
        "cover": "./136.jpg",
        "url": "./videos/video-0286.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "迈克尔·麦金泰尔:爱秀",
        "year": "2023",
        "region": "英国",
        "type": "综艺/脱口秀",
        "genre": "喜剧/脱口秀",
        "tags": [
            "单口喜剧",
            "互动",
            "家庭琐事",
            "英式幽默",
            "现场录制",
            "喜剧"
        ],
        "line": "脱口秀天王将自家客厅搬上舞台,妻子、孩子和邻居都成了他吐槽的“共犯”。",
        "cover": "./137.jpg",
        "url": "./videos/video-0287.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "蓝色管弦乐第二季",
        "year": "2025",
        "region": "日本",
        "type": "动画剧集",
        "genre": "音乐、青春、励志",
        "tags": [
            "交响乐",
            "天才与凡人",
            "社团活动",
            "成长",
            "音乐",
            "青春"
        ],
        "line": "青野一因病放弃小提琴三年后重拾梦想,第二季他将面对全国大赛和与天才好友的决裂。",
        "cover": "./138.jpg",
        "url": "./videos/video-0288.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "风流神探",
        "year": "2023",
        "region": "中国香港",
        "type": "剧集",
        "genre": "悬疑/犯罪",
        "tags": [
            "单元探案",
            "高智商犯罪",
            "反套路",
            "双男主",
            "悬疑",
            "犯罪"
        ],
        "line": "一个靠泡妞获取线索的风流警探,搭档一个性冷淡的女法医,联手破解香港奇案。",
        "cover": "./139.jpg",
        "url": "./videos/video-0289.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "黎明破晓前",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪,悬疑",
        "tags": [
            "警匪对峙",
            "城市暗网",
            "24小时",
            "孤胆英雄",
            "犯罪",
            "悬疑"
        ],
        "line": "一名被停职的谈判专家必须在黎明前找到失踪的女议员,否则整座城市将陷入毒气恐慌。",
        "cover": "./140.jpg",
        "url": "./videos/video-0290.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "神医大人别撩我",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集 网剧",
        "genre": "古装/爱情/喜剧",
        "tags": [
            "穿越",
            "医疗",
            "欢喜冤家",
            "甜宠",
            "古装",
            "爱情"
        ],
        "line": "现代外科女医生穿越成古代仵作,却被高冷神医一边嫌弃一边用情话疯狂“打脸”。",
        "cover": "./141.jpg",
        "url": "./videos/video-0291.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "绅士强盗",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "犯罪、喜剧、动作",
        "tags": [
            "英伦幽默",
            "优雅暴力",
            "神偷",
            "黑色幽默",
            "犯罪",
            "喜剧"
        ],
        "line": "一位牛津古典文学教授白天教课,夜晚化身专偷艺术品的大盗,却因偷了黑帮的赃物被追杀。",
        "cover": "./142.jpg",
        "url": "./videos/video-0292.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "史都",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "剧情/传记",
        "tags": [
            "艺术家",
            "精神疾病",
            "传奇一生",
            "剧情",
            "传记"
        ],
        "line": "英国最伟大的“被遗忘的画家”史都,他一生画了 2000 幅杰作,却没有卖出一幅,因为他只画幻觉。",
        "cover": "./143.jpg",
        "url": "./videos/video-0293.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "千万别抬头",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,科幻,讽刺",
        "tags": [
            "黑色幽默",
            "社会讽刺",
            "末日危机",
            "媒体乱象",
            "政治讽刺",
            "喜剧"
        ],
        "line": "两个天文学家发现彗星即将毁灭地球,却没人愿意认真听他们说话。",
        "cover": "./144.jpg",
        "url": "./videos/video-0294.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "东京制面所",
        "year": "2025",
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情/美食",
        "tags": [
            "职场治愈",
            "匠人精神",
            "深夜食堂风",
            "剧情",
            "美食"
        ],
        "line": "一家濒临倒闭的手工制面所,来了五个求职失败的废柴,他们不会做面,却把面卖成了东京第一。",
        "cover": "./145.jpg",
        "url": "./videos/video-0295.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "走佬孖宝",
        "year": "2025",
        "region": "中国香港",
        "type": "Movie",
        "genre": "喜剧/动作/犯罪",
        "tags": [
            "港产片",
            "兄弟情",
            "乌龙",
            "追车",
            "无厘头",
            "喜剧"
        ],
        "line": "两个倒霉的打工仔目睹黑帮交易,被迫假扮雌雄大盗亡命天涯,结果整个香港都以为他们是顶级杀手。",
        "cover": "./146.jpg",
        "url": "./videos/video-0296.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "夏普的传奇",
        "year": "1993",
        "region": "英国",
        "type": "电视剧",
        "genre": "历史/战争",
        "tags": [
            "拿破仑战争",
            "英军",
            "史诗",
            "个人英雄",
            "ITV",
            "历史"
        ],
        "line": "拿破仑战争时期,出身底层的英国军官夏普靠一把来复枪和不怕死的劲头,书写了自己的传奇。",
        "cover": "./147.jpg",
        "url": "./videos/video-0297.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "嘉庆传奇",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "历史/传记/宫廷",
        "tags": [
            "嘉庆",
            "和珅案",
            "天理教",
            "鸦片",
            "帝王孤寂",
            "历史"
        ],
        "line": "乾隆驾崩后第四天,嘉庆帝秘密逮捕和珅,但他发现整个王朝的脓疮远不止一个巨贪。",
        "cover": "./148.jpg",
        "url": "./videos/video-0298.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "最美中轴线第二季",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "文化/音乐真人秀/城市探索",
        "tags": [
            "北京中轴线",
            "申遗",
            "跨界创作",
            "历史活化",
            "沉浸式演出",
            "文化"
        ],
        "line": "音乐人深入钟鼓楼到永定门的七段遗址,用民乐、电子和戏曲重构中轴线的声音记忆。",
        "cover": "./149.jpg",
        "url": "./videos/video-0299.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "夫君",
        "year": "2018",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/同性/家庭",
        "tags": [
            "形婚",
            "同妻",
            "压抑与爆发",
            "乡土文学",
            "剧情",
            "同性"
        ],
        "line": "为了给母亲冲喜,同性恋者阿凯娶了女友,新婚夜他独自睡在冰冷的地板上。",
        "cover": "./150.jpg",
        "url": "./videos/video-0300.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "格罗莫少校:瘟疫医生",
        "year": "2022",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "动作,悬疑",
        "tags": [
            "超级英雄",
            "侦探",
            "漫画改编",
            "反体制",
            "动作",
            "悬疑"
        ],
        "line": "圣彼得堡出现了一个自称“瘟疫医生”的私刑者,他用面具净化“有罪”之人,而少校格罗莫却发现凶手用的竟是疫苗。",
        "cover": "./1.jpg",
        "url": "./videos/video-0301.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "狂飙摩托",
        "year": "2025",
        "region": "中国香港/中国",
        "type": "电影",
        "genre": "动作/犯罪/赛车",
        "tags": [
            "地下赛车",
            "卧底警探",
            "兄弟情",
            "复仇",
            "街头追逐",
            "动作"
        ],
        "line": "为了给哥哥报仇并捣毁地下赛车黑帮,一名职业车手伪装成新手潜入地下摩托组织。",
        "cover": "./2.jpg",
        "url": "./videos/video-0302.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "乘风破浪的姐姐第二季",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀/音乐/竞技",
        "tags": [
            "姐姐",
            "舞台",
            "女性力量",
            "逆龄",
            "真人秀",
            "音乐"
        ],
        "line": "30+姐姐们组队翻唱千禧年金曲,却被要求每场淘汰一人,且淘汰者由观众投票“你最想让她消失”。",
        "cover": "./3.jpg",
        "url": "./videos/video-0303.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "至尊宝",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻爱情喜剧",
        "tags": [
            "穿越",
            "宿命",
            "逆袭",
            "月光宝盒",
            "无厘头",
            "奇幻爱情喜剧"
        ],
        "line": "一个外卖小哥捡到山寨月光宝盒,每次穿越都想暴富,却次次促成祖辈爱情。",
        "cover": "./4.jpg",
        "url": "./videos/video-0304.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "鲁班的传说",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装、奇幻、动作、机关术",
        "tags": [
            "木匠祖师",
            "机关术",
            "墨家",
            "师徒传承",
            "古装",
            "奇幻"
        ],
        "line": "年迈鲁班收了关门弟子,发现此人竟是敌国派来窃取机关秘术的刺客。",
        "cover": "./5.jpg",
        "url": "./videos/video-0305.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "惹火女神",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/惊悚",
        "tags": [
            "欲望",
            "复仇",
            "网络直播",
            "心理战",
            "剧情",
            "惊悚"
        ],
        "line": "过气网红为翻身上演“意外”走光,却发现自己正被一名神秘黑客引向万劫不复。",
        "cover": "./6.jpg",
        "url": "./videos/video-0306.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "乡村星期天",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,家庭,文艺",
        "tags": [
            "乡村",
            "代际",
            "治愈",
            "美食",
            "剧情",
            "家庭"
        ],
        "line": "每个星期天,巴黎的孩子们都会回到诺曼底的乡村老屋,但这一次,他们是为了给患有阿尔兹海默症的父亲“执行安乐死”而聚齐。",
        "cover": "./7.jpg",
        "url": "./videos/video-0307.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "侠骨柔情赤子心",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "武侠/家庭伦理",
        "tags": [
            "父女情",
            "退隐高手",
            "血雨腥风",
            "江湖恩怨",
            "武侠",
            "家庭伦理"
        ],
        "line": "退隐剑客为救重病女儿重出江湖,却发现最大的敌人是自己当年抛弃的养子。",
        "cover": "./8.jpg",
        "url": "./videos/video-0308.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "杰弗里·阿彻:真相",
        "year": "2026",
        "region": "英国",
        "type": "电影",
        "genre": "犯罪,传记",
        "tags": [
            "作家",
            "欺诈",
            "监狱",
            "伪纪录片",
            "犯罪",
            "传记"
        ],
        "line": "畅销书作家杰弗里·阿彻在狱中写下惊天回忆录,声称所有罪行都是替人顶罪。",
        "cover": "./9.jpg",
        "url": "./videos/video-0309.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "夕风之街樱之国",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,家庭,战争",
        "tags": [
            "广岛",
            "原爆",
            "记忆",
            "和解",
            "剧情",
            "家庭"
        ],
        "line": "三代广岛女性,在夕风吹拂的老街上,用跨越半个世纪的秘密,缝补着战争留下的伤痕。",
        "cover": "./10.jpg",
        "url": "./videos/video-0310.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "龙游天下",
        "year": "2021",
        "region": "中国内地",
        "type": "电视剧",
        "genre": "古装悬疑动作",
        "tags": [
            "夺宝",
            "江湖",
            "皇权",
            "兄弟情",
            "古装悬疑动作"
        ],
        "line": "一张藏宝图牵出前朝惊天秘密,四位少年踏上寻龙之旅,却发现敌人就在身边。",
        "cover": "./11.jpg",
        "url": "./videos/video-0311.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "女伯爵",
        "year": "2025",
        "region": "匈牙利/法国",
        "type": "电影",
        "genre": "历史/惊悚",
        "tags": [
            "真实事件改编",
            "女性权力",
            "哥特美学",
            "权力腐化",
            "历史",
            "惊悚"
        ],
        "line": "重述“血腥女伯爵”传说,这一次,她的猎杀不是因为变态,而是因为文艺复兴时期男性医生都无法解决她的产后病痛。",
        "cover": "./12.jpg",
        "url": "./videos/video-0312.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "傻儿传奇之抗战到底",
        "year": "2016",
        "region": "中国",
        "type": "剧集",
        "genre": "抗战喜剧",
        "tags": [
            "草根英雄",
            "川军",
            "智斗",
            "方言",
            "抗战喜剧"
        ],
        "line": "一个被全村当成傻子的放牛娃,用“傻子逻辑”把日军特工队耍得团团转。",
        "cover": "./13.jpg",
        "url": "./videos/video-0313.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "麦克尔",
        "year": "2015",
        "region": "德国",
        "type": "电影",
        "genre": "剧情、同性",
        "tags": [
            "中年危机",
            "师生恋",
            "古典乐",
            "压抑",
            "救赎",
            "剧情"
        ],
        "line": "一位过气的中年钢琴家,将他最后的激情投注在一个沉默的男学生身上,却引发了致命的嫉妒。",
        "cover": "./14.jpg",
        "url": "./videos/video-0314.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "查理说",
        "year": "2018",
        "region": "美国",
        "type": "电影",
        "genre": "犯罪、剧情、历史",
        "tags": [
            "曼森家族",
            "女囚",
            "监狱访谈",
            "邪教",
            "犯罪",
            "剧情"
        ],
        "line": "曼森家族三名女囚在监狱里接受研究生访谈,她们声称自己是受害者,却慢慢说出了更恐怖的真相。",
        "cover": "./15.jpg",
        "url": "./videos/video-0315.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "渔者",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/文艺",
        "tags": [
            "渔民",
            "长江禁渔",
            "坚守",
            "剧情",
            "文艺"
        ],
        "line": "长江禁渔十年,最后一位老渔民不肯上岸。他不是固执,而是在等一条鱼。",
        "cover": "./16.jpg",
        "url": "./videos/video-0316.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "别碰我的梦",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻,悬疑",
        "tags": [
            "梦境入侵",
            "记忆操控",
            "反乌托邦",
            "科幻",
            "悬疑"
        ],
        "line": "当所有人的梦境都能被明码标价时,一个无法做梦的女孩成了唯一清醒的猎物。",
        "cover": "./17.jpg",
        "url": "./videos/video-0317.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "谜城杀机",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/犯罪/悬疑",
        "tags": [
            "连环凶案",
            "雨夜",
            "密码",
            "警探",
            "城市传说",
            "动作"
        ],
        "line": "雨夜香港发生连环命案,每具尸体旁都放着一个古老罗盘,指针指向下一具尸体的位置。",
        "cover": "./18.jpg",
        "url": "./videos/video-0318.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "野生诱惑",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/冒险",
        "tags": [
            "动物保护",
            "伪装",
            "人性",
            "荒岛",
            "剧情",
            "冒险"
        ],
        "line": "动物行为学家为了研究鳄鱼,伪装成同类在沼泽生活三年,却逐渐丧失人性本能。",
        "cover": "./19.jpg",
        "url": "./videos/video-0319.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "功夫少女吴温蒂",
        "year": "2024",
        "region": "中国台湾/美国",
        "type": "电影",
        "genre": "动作,喜剧,青春",
        "tags": [
            "少女功夫",
            "华裔",
            "校园霸凌",
            "成长",
            "动作",
            "喜剧"
        ],
        "line": "在美国长大的华裔混血少女Wendy,暑假被妈妈骗回台北学“女子防身术”,却发现教练是曾经的武侠片反派专业户。",
        "cover": "./20.jpg",
        "url": "./videos/video-0320.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "铁甲小宝",
        "year": "2027",
        "region": "日本",
        "type": "剧集",
        "genre": "科幻、特摄、儿童、喜剧",
        "tags": [
            "重启",
            "机器人",
            "友情",
            "和平星",
            "科幻",
            "特摄"
        ],
        "line": "30年后,卡布达的零件被一位废品站少女捡到,她重启了这位过气机器人,为了寻找散落的“反内卷和平星”。",
        "cover": "./21.jpg",
        "url": "./videos/video-0321.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "恶邻罗曼史",
        "year": "2015",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情,喜剧",
        "tags": [
            "契约恋爱",
            "欢喜冤家",
            "噪音战争",
            "邻里关系",
            "爱情",
            "喜剧"
        ],
        "line": "楼上住着摇滚鼓手,楼下住着失眠编剧,隔音不好的墙壁逼出了一场恋爱。",
        "cover": "./22.jpg",
        "url": "./videos/video-0322.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "巴依尔的春节",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭,喜剧",
        "tags": [
            "温暖",
            "回乡",
            "代沟",
            "方言",
            "春节档",
            "剧情"
        ],
        "line": "在深圳打工多年的新疆小伙巴依尔,带着只会说维语的儿子回河南老家过年,上演了一出啼笑皆非的文化碰撞。",
        "cover": "./23.jpg",
        "url": "./videos/video-0323.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "赤松威龙",
        "year": "2005",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动画,冒险,奇幻",
        "tags": [
            "国产动画",
            "神话",
            "成长",
            "中国风",
            "动画",
            "冒险"
        ],
        "line": "赤松山下的小铁匠意外拔出龙族圣剑,被迫踏上一段寻找散落龙珠、拯救世界的冒险之旅。",
        "cover": "./24.jpg",
        "url": "./videos/video-0324.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "牙斗兽娘",
        "year": "2024",
        "region": "日本",
        "type": "OVA",
        "genre": "动作奇幻",
        "tags": [
            "兽化",
            "格斗",
            "暗黑",
            "女性",
            "动作奇幻"
        ],
        "line": "在一个秘密的地下竞技场,少女们可以化身野兽进行死斗,而失败者的下场是被“回收”。",
        "cover": "./25.jpg",
        "url": "./videos/video-0325.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "我是猫",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻/剧情/文学改编",
        "tags": [
            "夏目漱石",
            "猫视角",
            "魔幻现实",
            "讽刺",
            "治愈",
            "奇幻"
        ],
        "line": "夏目漱石笔下的无名猫复活在现代东京,冷眼观察一个沉迷社交网络的教师家庭,并决定帮他们找回真实情感。",
        "cover": "./26.jpg",
        "url": "./videos/video-0326.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "阿波狸合战",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "动画/奇幻/冒险",
        "tags": [
            "狸猫",
            "环保",
            "神明战争",
            "动画",
            "奇幻",
            "冒险"
        ],
        "line": "为了守护最后的森林,一只会变身术的贪吃狸猫,必须带领动物伙伴们挑战复苏的工业之神。",
        "cover": "./27.jpg",
        "url": "./videos/video-0327.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "假钞",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪/悬疑",
        "tags": [
            "伪钞案",
            "双雄对决",
            "高智商犯罪",
            "反转",
            "犯罪",
            "悬疑"
        ],
        "line": "一张连验钞机都辨不出的假钞在菜市场出现,警方顺藤摸瓜,却发现造假者就在自己办公室隔壁。",
        "cover": "./28.jpg",
        "url": "./videos/video-0328.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "发生于七月二十日",
        "year": "2024",
        "region": "德国",
        "type": "电影",
        "genre": "历史惊悚",
        "tags": [
            "二战",
            "刺杀希特勒",
            "实时间",
            "密室",
            "真实改编",
            "历史惊悚"
        ],
        "line": "1944年7月20日,狼穴炸弹爆炸后的四小时内,所有参与者在一个房间里被迫互指为叛徒。",
        "cover": "./29.jpg",
        "url": "./videos/video-0329.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "极地大冒险",
        "year": "2018",
        "region": "俄罗斯",
        "type": "动画",
        "genre": "动画,冒险,家庭",
        "tags": [
            "北极",
            "驯鹿",
            "极光",
            "友情",
            "冰雪",
            "动画"
        ],
        "line": "一只社恐的北极狐和一头话痨驯鹿必须赶在极光消失前送返迷路的小北极熊。",
        "cover": "./30.jpg",
        "url": "./videos/video-0330.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "顽猫斗俏鼠",
        "year": "2025",
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "喜剧,动作,家庭",
        "tags": [
            "猫鼠合作",
            "城市冒险",
            "无厘头",
            "天敌变搭档",
            "喜剧",
            "动作"
        ],
        "line": "一只落魄的家猫和一只自以为是的街头老鼠,为了抢夺一块能实现愿望的奶酪被迫组队。",
        "cover": "./31.jpg",
        "url": "./videos/video-0331.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "爱之伤痕",
        "year": "2020",
        "region": "丹麦",
        "type": "电影",
        "genre": "剧情/爱情",
        "tags": [
            "青春",
            "疼痛",
            "成长",
            "北欧",
            "校园",
            "剧情"
        ],
        "line": "一场校园恶作剧让少女的告白变成全班笑柄,她却在伤痕中遇见了同样孤独的他。",
        "cover": "./32.jpg",
        "url": "./videos/video-0332.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "妲己不是坏狐狸 漫动画",
        "year": "2020",
        "region": "中国",
        "type": "动画",
        "genre": "喜剧/古风/恋爱",
        "tags": [
            "国漫",
            "泡面番",
            "颠覆",
            "萌系",
            "搞笑",
            "喜剧"
        ],
        "line": "当祸国殃民的苏妲己其实是只被迫营业的社恐小狐狸,商朝灭亡只因她想提前下班。",
        "cover": "./33.jpg",
        "url": "./videos/video-0333.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "侏罗纪世界3",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "科幻动作",
        "tags": [
            "恐龙",
            "特效大片",
            "情怀",
            "完结篇",
            "科幻动作"
        ],
        "line": "恐龙与人类被迫共享地球,老牌三人组与新一代主角联手,对抗巨型蝗虫和生物合成公司。",
        "cover": "./34.jpg",
        "url": "./videos/video-0334.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "克莱尔的柬埔寨",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情、文艺、历史",
        "tags": [
            "红色高棉",
            "记忆",
            "法籍摄影师",
            "遗物",
            "剧情",
            "文艺"
        ],
        "line": "一张1975年拍摄于吴哥窟的底片,让法籍孙女重走祖母的逃亡路。",
        "cover": "./35.jpg",
        "url": "./videos/video-0335.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "海达尔",
        "year": "2025",
        "region": "印度",
        "type": "电影",
        "genre": "动作,剧情,战争",
        "tags": [
            "克什米尔",
            "复仇",
            "武装冲突",
            "人性",
            "动作",
            "剧情"
        ],
        "line": "父亲被不明武装带走后,儿子用了十年时间,把自己变成了克什米尔最让人害怕的人。",
        "cover": "./36.jpg",
        "url": "./videos/video-0336.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "夜空总有最大密度的蓝色",
        "year": "2017",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/爱情/文艺",
        "tags": [
            "都市",
            "孤独",
            "底层",
            "温柔",
            "剧情",
            "爱情"
        ],
        "line": "白天在工地搬砖、晚上在酒吧打工的丧系女孩,遇到了一个只剩一只眼睛看得见的男孩,他们在东京的负债与月光中互相舔舐伤口。",
        "cover": "./37.jpg",
        "url": "./videos/video-0337.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "球恋大满贯",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "浪漫喜剧,运动",
        "tags": [
            "网球",
            "合约情侣",
            "运动康复",
            "浪漫喜剧",
            "运动"
        ],
        "line": "一名退役网球女将和当红男明星签下假恋爱合约,条件是——必须同时拿下混双大满贯。",
        "cover": "./38.jpg",
        "url": "./videos/video-0338.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "香港第1凶宅",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖",
        "tags": [
            "凶宅",
            "灵异",
            "风水",
            "民俗",
            "恐怖"
        ],
        "line": "网红探灵团队住进号称“香港第一凶宅”的鬼屋,却发现真实的鬼魂远不如活人的贪婪可怕。",
        "cover": "./39.jpg",
        "url": "./videos/video-0339.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "无言的山丘",
        "year": "1992",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/历史",
        "tags": [
            "台湾电影",
            "日据时代",
            "矿工生活",
            "悲情",
            "金马奖",
            "剧情"
        ],
        "line": "日据时期的台湾金矿上,一对兄弟和一群底层矿工在暗无天日的地下挖着黄金,地面上却过着牛马不如的生活。",
        "cover": "./40.jpg",
        "url": "./videos/video-0340.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "骑遇",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "公路/喜剧",
        "tags": [
            "骑行",
            "废柴逆袭",
            "城乡结合部",
            "公路",
            "喜剧"
        ],
        "line": "中年失业男骑行千里回家,路上捡了个失忆的网红,一路爆笑,一路和解。",
        "cover": "./41.jpg",
        "url": "./videos/video-0341.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "粟裕大将",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史,战争,传记",
        "tags": [
            "名将",
            "军事谋略",
            "解放战争",
            "硬核战争场面",
            "历史",
            "战争"
        ],
        "line": "不写战神全貌,只聚焦粟裕指挥生涯中最“反常识”的三场战役:敢打、险打、几乎不可能打。",
        "cover": "./42.jpg",
        "url": "./videos/video-0342.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "哈宝的回力棒历险记",
        "year": "2025",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "动画,冒险,家庭",
        "tags": [
            "回力棒",
            "澳洲土著",
            "寻宝",
            "祖孙情",
            "动画",
            "冒险"
        ],
        "line": "小淘气哈宝弄丢了爷爷的魔法回力棒,必须穿越澳洲内陆所有奇境才能找回它。",
        "cover": "./43.jpg",
        "url": "./videos/video-0343.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "疯孽劫",
        "year": "1998",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖/伦理",
        "tags": [
            "港产片",
            "精神病院",
            "复仇",
            "鬼魂",
            "恐怖",
            "伦理"
        ],
        "line": "九龙城寨拆除前夜,一座废弃精神病院里的七个自杀护士的鬼魂,开始逐个审判当年虐待过她们的医生后代。",
        "cover": "./44.jpg",
        "url": "./videos/video-0344.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "堕落妹",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "青春,剧情",
        "tags": [
            "问题少女",
            "叛逆",
            "救赎",
            "校园暴力",
            "青春",
            "剧情"
        ],
        "line": "重点高中的乖乖女一夜之间沦为夜店女王的“堕落妹”,她故意放纵的背后,藏着令人心碎的真相。",
        "cover": "./45.jpg",
        "url": "./videos/video-0345.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "法官大人第一季",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "律政,悬疑,家庭",
        "tags": [
            "司法正义",
            "父子亲情",
            "肇事逃逸",
            "道德困境",
            "律政",
            "悬疑"
        ],
        "line": "受人尊敬的刑事法庭法官,得知自己的儿子是某起肇事逃逸案的凶手后,开始了掩盖真相与维护正义的痛苦撕裂。",
        "cover": "./46.jpg",
        "url": "./videos/video-0346.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "长跑者的孤独",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/体育",
        "tags": [
            "传记",
            "社会边缘",
            "马拉松",
            "救赎",
            "剧情",
            "体育"
        ],
        "line": "前奥运选手为躲避黑帮追杀,隐姓埋名以送外卖为生,却在深夜送货路上重拾奔跑的意义。",
        "cover": "./47.jpg",
        "url": "./videos/video-0347.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "山城小生",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "家庭,剧情",
        "tags": [
            "留守儿童",
            "足球",
            "梦想",
            "重庆",
            "家庭",
            "剧情"
        ],
        "line": "重庆山城一个男孩想参加市里的足球赛,却连个平整的球场都找不到。",
        "cover": "./48.jpg",
        "url": "./videos/video-0348.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "秀水街",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,喜剧",
        "tags": [
            "北京",
            "外贸",
            "假货江湖",
            "老外",
            "剧情",
            "喜剧"
        ],
        "line": "一个英语四级没过的东北大哥,靠着一本破烂的“砍价圣经”,成了秀水街最能忽悠老外的销售冠军。",
        "cover": "./49.jpg",
        "url": "./videos/video-0349.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "多瑙河行动",
        "year": "2019",
        "region": "德国/奥地利",
        "type": "电影",
        "genre": "动作/惊悚",
        "tags": [
            "河流追击",
            "欧洲走私",
            "卧底特工",
            "24小时",
            "动作",
            "惊悚"
        ],
        "line": "截获情报时,卧底才发现自己要保护的证人,正是追杀对象的情人。",
        "cover": "./50.jpg",
        "url": "./videos/video-0350.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "小塞内加尔",
        "year": "2022",
        "region": "法国,塞内加尔",
        "type": "电影",
        "genre": "剧情,历史",
        "tags": [
            "移民",
            "身份认同",
            "殖民历史",
            "巴黎",
            "剧情",
            "历史"
        ],
        "line": "巴黎郊区一家理发店里,一位年轻黑人女子意外发现自己是昔日奴隶主的后代。",
        "cover": "./51.jpg",
        "url": "./videos/video-0351.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "外科医生马丁 第三季",
        "year": "2007",
        "region": "英国",
        "type": "电视剧",
        "genre": "喜剧,剧情",
        "tags": [
            "医疗",
            "毒舌",
            "社交障碍",
            "海边小镇",
            "喜剧",
            "剧情"
        ],
        "line": "患有恐血症的暴躁外科医生回到海边小镇开诊所,继续用骂人解决所有问题。",
        "cover": "./52.jpg",
        "url": "./videos/video-0352.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "消失那天爱上你",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情/奇幻",
        "tags": [
            "失忆",
            "时间循环",
            "台式小清新",
            "爱情",
            "奇幻"
        ],
        "line": "婚礼当天新娘突然消失,新郎在寻找她的过程中,发现自己每天都在重复“消失那天”。",
        "cover": "./53.jpg",
        "url": "./videos/video-0353.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "风",
        "year": "2022",
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑,犯罪",
        "tags": [
            "疯人院",
            "复仇",
            "女性",
            "反转",
            "悬疑",
            "犯罪"
        ],
        "line": "精神科医生在新精神病院遇怪事,五个女病人都说自己是“风”,而真正的连环杀手可能就在身边。",
        "cover": "./54.jpg",
        "url": "./videos/video-0354.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "茶啊二中第五季",
        "year": "2024",
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "喜剧,校园,日常",
        "tags": [
            "东北校园",
            "师生日常",
            "青春回忆",
            "爆笑",
            "喜剧",
            "校园"
        ],
        "line": "东北某中学初三三班,班主任石老师和他的“问题学生”们备战中考的爆笑日常。",
        "cover": "./55.jpg",
        "url": "./videos/video-0355.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "出境事务所",
        "year": "2025",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "剧情/职业/家庭",
        "tags": [
            "殡葬业",
            "台语",
            "生死教育",
            "遗产纠纷",
            "剧情",
            "职业"
        ],
        "line": "四个因故被发配到殡葬公司“出境事务所”的年轻人,在送别往生者的路上,学会了如何真正地活着。",
        "cover": "./56.jpg",
        "url": "./videos/video-0356.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "碧海娇娃2",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作,冒险,科幻",
        "tags": [
            "海洋",
            "机甲",
            "环保",
            "女性英雄",
            "基因改造",
            "动作"
        ],
        "line": "继承了神秘海洋基因的少女,必须驾驶古代机甲,对抗因污染而异变的海怪。",
        "cover": "./57.jpg",
        "url": "./videos/video-0357.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "雨神黄大仙国语",
        "year": "1992",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "古装/神话/传记",
        "tags": [
            "黄大仙",
            "祈雨",
            "香港老剧",
            "古装",
            "神话",
            "传记"
        ],
        "line": "赤松子转世为牧童,为救旱灾偷盗天庭雨令,被贬人间历经八十一难。",
        "cover": "./58.jpg",
        "url": "./videos/video-0358.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "软糖泰山",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻喜剧",
        "tags": [
            "糖果",
            "丛林",
            "泰山",
            "反套路",
            "冒险",
            "奇幻喜剧"
        ],
        "line": "在糖果构成的迷幻丛林里,一个被猩猩养大的青年必须用甜食与武力捍卫家园。",
        "cover": "./59.jpg",
        "url": "./videos/video-0359.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "地质灾难",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作,灾难,科幻",
        "tags": [
            "特效大片",
            "地心",
            "救援",
            "末日",
            "动作",
            "灾难"
        ],
        "line": "一场异常的地质运动撕裂了旧金山,科学家发现,地核正在冷却,地球将变成死星。",
        "cover": "./60.jpg",
        "url": "./videos/video-0360.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "班会",
        "year": "2020",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/校园/悬疑",
        "tags": [
            "密室",
            "反转",
            "校园霸凌",
            "伦理拷问",
            "剧情",
            "校园"
        ],
        "line": "高三班主任死在讲台上,全班30名学生被锁在教室,凶手必须通过投票选出。",
        "cover": "./61.jpg",
        "url": "./videos/video-0361.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "至尊警犬",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,喜剧,警匪",
        "tags": [
            "警犬",
            "卧底",
            "基因改造",
            "动作",
            "喜剧",
            "警匪"
        ],
        "line": "一只被基因改造的退役警犬拥有超高智商,为替牺牲的主人复仇,它竟潜入黑帮成了“四足卧底”。",
        "cover": "./62.jpg",
        "url": "./videos/video-0362.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "美味召集令第二季",
        "year": "2021",
        "region": "日本",
        "type": "剧集",
        "genre": "美食、旅行",
        "tags": [
            "路边摊",
            "深夜食堂",
            "治愈",
            "探店",
            "人情味",
            "美食"
        ],
        "line": "神秘的“美味召集人”每集探访一家濒临倒闭的路边小店,用美食唤醒街区的记忆。",
        "cover": "./63.jpg",
        "url": "./videos/video-0363.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "白日梦外送王",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "奇幻/喜剧",
        "tags": [
            "外卖员",
            "超能力",
            "都市",
            "逆袭",
            "奇幻",
            "喜剧"
        ],
        "line": "废柴外卖员发现自己进入“白日梦”状态后,送出的每一单都会在现实中成真。",
        "cover": "./64.jpg",
        "url": "./videos/video-0364.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "读心神探",
        "year": "2010",
        "region": "中国香港",
        "type": "剧集",
        "genre": "悬疑/犯罪",
        "tags": [
            "心理学",
            "破案",
            "微表情",
            "单元剧",
            "悬疑",
            "犯罪"
        ],
        "line": "精通微表情分析和行为心理学的警探姚学琛,带领重案组通过“读心”侦破离奇案件。",
        "cover": "./65.jpg",
        "url": "./videos/video-0365.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "妙趣钓鱼三人行",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/冒险/公路",
        "tags": [
            "钓鱼",
            "中年危机",
            "荒诞喜剧",
            "兄弟情",
            "喜剧",
            "冒险"
        ],
        "line": "三个被生活逼入绝境的中年男人,靠一本盗版《钓鱼秘籍》,误打误撞破解了水库百年悬案。",
        "cover": "./66.jpg",
        "url": "./videos/video-0366.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "我们与爱的距离",
        "year": "2023",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "家庭剧情",
        "tags": [
            "原生家庭",
            "和解",
            "情感",
            "治愈",
            "家庭剧情"
        ],
        "line": "一个离家出走的女儿,在父亲临终前回到家中,才发现了那个沉默男人一生的爱。",
        "cover": "./67.jpg",
        "url": "./videos/video-0367.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "杀人者的难堪",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "犯罪,惊悚,剧情",
        "tags": [
            "以恶制恶",
            "连环杀手",
            "黑色幽默",
            "法律边缘",
            "犯罪",
            "惊悚"
        ],
        "line": "一个偶然杀了通缉犯的大学生,发现自己拥有“惩恶”的超能力,却引来了一位不择手段的退休刑警的追猎。",
        "cover": "./68.jpg",
        "url": "./videos/video-0368.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "孕育心世界",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情,家庭",
        "tags": [
            "女性成长",
            "育儿",
            "职场",
            "现实主义",
            "治愈",
            "剧情"
        ],
        "line": "三位身处不同阶层的准妈妈在产检时相识,携手面对生育带来的身体、家庭与职场的全方位崩塌。",
        "cover": "./69.jpg",
        "url": "./videos/video-0369.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "人证1977",
        "year": "2027",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑,犯罪,剧情",
        "tags": [
            "翻案",
            "刑警",
            "社会派",
            "悬疑",
            "犯罪",
            "剧情"
        ],
        "line": "一名年轻刑警在整理旧物时发现一盘1977年的录音带,里面记录了一桩“已解决”凶杀案的真凶声音。",
        "cover": "./70.jpg",
        "url": "./videos/video-0370.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "与贝佛莉罗浮琳的一晚",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/心理/室内剧",
        "tags": [
            "粉丝文化",
            "偶像坍塌",
            "对话体",
            "独角戏",
            "剧情",
            "心理"
        ],
        "line": "一个骨灰级女粉丝赢得了与过气恐怖片女王贝佛莉·罗浮琳共进晚餐的机会,却发现这位偶像早已把自己的生活活成了一场恐怖片。",
        "cover": "./71.jpg",
        "url": "./videos/video-0371.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "陆军神兵",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "军旅,动作",
        "tags": [
            "特种兵",
            "尖子兵",
            "实战",
            "兄弟情",
            "军旅",
            "动作"
        ],
        "line": "一名拥有超凡装备天赋的天才士兵,被选入“神兵”小队,挑战人体与科技的融合极限。",
        "cover": "./72.jpg",
        "url": "./videos/video-0372.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "极恶无间",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "犯罪、悬疑、动作",
        "tags": [
            "卧底",
            "黑警",
            "双重身份",
            "犯罪",
            "悬疑",
            "动作"
        ],
        "line": "警方卧底与黑帮内鬼同时被彼此组织识破,两人被迫合作在无间地狱中活下去。",
        "cover": "./73.jpg",
        "url": "./videos/video-0373.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "留守的天空",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "留守儿童",
            "乡村教师",
            "真实事件改编",
            "催泪",
            "教育",
            "剧情"
        ],
        "line": "贵州深山小学只剩一个学生和一个瘸腿老师,支教志愿者到来后才发现孩子一直在等父母回来。",
        "cover": "./74.jpg",
        "url": "./videos/video-0374.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "人造天劫",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作/科幻",
        "tags": [
            "灾难",
            "人工智能",
            "机甲",
            "动作",
            "科幻"
        ],
        "line": "地球气候失控的真相竟是轨道上一台AI气象武器觉醒,前宇航员必须驾驶旧型机甲钻入飓风眼引爆它。",
        "cover": "./75.jpg",
        "url": "./videos/video-0375.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "奥林匹斯地狱",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作惊悚",
        "tags": [
            "神话改编",
            "越狱",
            "众神陨落",
            "硬核动作",
            "反英雄",
            "动作惊悚"
        ],
        "line": "当宙斯将罪犯丢进冥界炼狱,一个凡人角斗士却密谋推翻整个奥林匹斯山。",
        "cover": "./76.jpg",
        "url": "./videos/video-0376.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "丢羊",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,悬疑",
        "tags": [
            "西北农村",
            "黑色幽默",
            "荒诞现实",
            "剧情",
            "悬疑"
        ],
        "line": "西北老汉的羊丢了,全村帮他找羊,结果挖出了一串村主任、煤老板和县长的秘密。",
        "cover": "./77.jpg",
        "url": "./videos/video-0377.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "湘女萧萧",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/女性",
        "tags": [
            "女性",
            "农村",
            "成长",
            "改编",
            "年代",
            "剧情"
        ],
        "line": "十三岁的童养媳萧萧意外怀孕后,婆家要沉塘,全村却因她的哭喊停了下来。",
        "cover": "./78.jpg",
        "url": "./videos/video-0378.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "车逝",
        "year": "2007",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,文艺,悬疑",
        "tags": [
            "无对白",
            "雨",
            "修车厂",
            "记忆碎片",
            "非线性叙事",
            "剧情"
        ],
        "line": "在一个终日下雨的港口修车厂里,一场车祸将三个沉默的灵魂困在了一个无限循环的记忆牢笼中。",
        "cover": "./79.jpg",
        "url": "./videos/video-0379.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "帅哥不可以",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧,爱情,奇幻",
        "tags": [
            "女尊世界",
            "反套路",
            "轻喜",
            "喜剧",
            "爱情",
            "奇幻"
        ],
        "line": "霸道女总裁穿越进玛丽苏小说,却成了要被男主虐待的炮灰女配,她决定按商业逻辑解构所有虐恋剧情。",
        "cover": "./80.jpg",
        "url": "./videos/video-0380.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "圣文森的男孩们",
        "year": "1992",
        "region": "加拿大/爱尔兰",
        "type": "电影",
        "genre": "剧情/犯罪",
        "tags": [
            "教会",
            "真实事件改编",
            "儿童虐待",
            "沉重",
            "剧情",
            "犯罪"
        ],
        "line": "1960年代加拿大一座天主教孤儿院里,一群被神父性侵的男孩决定不再沉默,用小孩的方式对大人发起一场“圣战”。",
        "cover": "./81.jpg",
        "url": "./videos/video-0381.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "妙探狗福星",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/悬疑/家庭",
        "tags": [
            "狗狗破案",
            "萌宠喜剧",
            "冷面搭档",
            "喜剧",
            "悬疑",
            "家庭"
        ],
        "line": "被警队开除的落魄警犬麦克斯,与新主人——一个社恐小发明家,联手侦破了离奇珠宝连环失窃案。",
        "cover": "./82.jpg",
        "url": "./videos/video-0382.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "西部老巴的故事",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/西部",
        "tags": [
            "西部",
            "荒诞",
            "黑色幽默",
            "老人",
            "喜剧"
        ],
        "line": "退休的西部神枪手“老巴”不愿住养老院,骑驴重出江湖,却发现自己连便利店的门都推不开。",
        "cover": "./83.jpg",
        "url": "./videos/video-0383.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "武庚纪第三季",
        "year": "2024",
        "region": "中国大陆",
        "type": "动画",
        "genre": "奇幻,神话,战斗",
        "tags": [
            "封神",
            "逆天而行",
            "热血",
            "3D",
            "奇幻",
            "神话"
        ],
        "line": "武庚集结冥族大军反攻神域,黑龙天苏醒,人神终极之战一触即发。",
        "cover": "./84.jpg",
        "url": "./videos/video-0384.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "仲夏夜之梦1935",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,历史,爱情",
        "tags": [
            "二战前夕",
            "剧团",
            "禁忌之恋",
            "剧情",
            "历史",
            "爱情"
        ],
        "line": "1935年英国乡村,一个业余剧团排演莎翁喜剧,却演出了真实版的悲剧。",
        "cover": "./85.jpg",
        "url": "./videos/video-0385.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "厄运临头",
        "year": "2024",
        "region": "西班牙",
        "type": "剧集",
        "genre": "悬疑/惊悚/奇幻",
        "tags": [
            "诅咒",
            "家族秘密",
            "西班牙小镇",
            "多时间线",
            "宿命",
            "悬疑"
        ],
        "line": "一个家族的每代长子都会在25岁生日当天离奇死亡,而这一代的继承人决定主动赴死。",
        "cover": "./86.jpg",
        "url": "./videos/video-0386.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "跨海长征",
        "year": "1976",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,历史,战争",
        "tags": [
            "长征",
            "跨海",
            "海峡",
            "革命",
            "红色经典",
            "剧情"
        ],
        "line": "红军某部为摆脱敌军追击,在渔民的帮助下,完成了一次史无前例的夜间跨海转移。",
        "cover": "./87.jpg",
        "url": "./videos/video-0387.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "筑梦大海",
        "year": "2025",
        "region": "日本",
        "type": "电视剧",
        "genre": "家庭,励志,剧情",
        "tags": [
            "海上施工",
            "亲情",
            "和解",
            "匠人精神",
            "家庭",
            "励志"
        ],
        "line": "梦想成为音乐人的儿子,被迫回家继承濒临倒闭的海上工程公司,却发现大海会“说话”。",
        "cover": "./88.jpg",
        "url": "./videos/video-0388.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "乒乓侠",
        "year": "2016",
        "region": "中国内地",
        "type": "电影",
        "genre": "喜剧/科幻/运动",
        "tags": [
            "超级英雄",
            "乒乓球",
            "屌丝逆袭",
            "热血",
            "恶搞",
            "喜剧"
        ],
        "line": "一个废柴大学生意外被转基因乒乓球咬伤,从此成了力挽狂澜的“乒乓侠”。",
        "cover": "./89.jpg",
        "url": "./videos/video-0389.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "就系广告咁简单",
        "year": "2025",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情/职场",
        "tags": [
            "广告业",
            "粤语",
            "创意",
            "黑色幽默",
            "剧情",
            "职场"
        ],
        "line": "一间快倒闭的香港老字号广告公司,靠“帮客户实现最不要脸的愿望”起死回生。",
        "cover": "./90.jpg",
        "url": "./videos/video-0390.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "指定幸存者第二季",
        "year": "2017",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情,悬疑,政治",
        "tags": [
            "政治惊悚",
            "白宫风云",
            "阴谋论",
            "总统视角",
            "剧情",
            "悬疑"
        ],
        "line": "在揪出第一季的内鬼后,菜鸟总统面对的是一个不仅来自国外,更源于体制深处的系统性崩溃。",
        "cover": "./91.jpg",
        "url": "./videos/video-0391.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "神枪杀手",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/犯罪/武术",
        "tags": [
            "枪战",
            "复仇",
            "师徒",
            "暴力美学",
            "动作",
            "犯罪"
        ],
        "line": "他用一把祖传驳壳枪,在九龙城寨废墟里,挑战整个东南亚新型军火联盟。",
        "cover": "./92.jpg",
        "url": "./videos/video-0392.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "柔和祖国",
        "year": "2023",
        "region": "法国/德国",
        "type": "电影",
        "genre": "剧情/历史/战争",
        "tags": [
            "二战",
            "法国维希政府",
            "母女",
            "谎言",
            "黑白摄影",
            "剧情"
        ],
        "line": "二战末期,一对法国母女在家中藏匿犹太女孩,她们用无数“柔和的谎言”对抗纳粹。",
        "cover": "./93.jpg",
        "url": "./videos/video-0393.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "重生虐渣:娇养冰山总裁",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络微短剧",
        "genre": "剧情,爱情,奇幻",
        "tags": [
            "重生",
            "复仇",
            "甜宠",
            "霸总",
            "逆袭",
            "剧情"
        ],
        "line": "前世被渣男害得家破人亡,重生后她发誓要驯服未来最冷酷的商界帝王。",
        "cover": "./94.jpg",
        "url": "./videos/video-0394.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "整容季",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "都市",
        "tags": [
            "整形外科",
            "单元剧",
            "容貌焦虑",
            "都市"
        ],
        "line": "一家顶级整形医院的候诊室里,六个等待手术的陌生人彼此袒露了想“换脸”的真正原因。",
        "cover": "./95.jpg",
        "url": "./videos/video-0395.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "飞船历险记",
        "year": "2026",
        "region": "英国",
        "type": "剧集",
        "genre": "科幻、冒险、家庭",
        "tags": [
            "宇宙飞船",
            "儿童主角",
            "星际探险",
            "AI伙伴",
            "科幻",
            "冒险"
        ],
        "line": "一艘失控的世代飞船偏离航线,船上的孩子们必须在一个毒舌AI的帮助下,学习驾驶飞船,寻找新的家园。",
        "cover": "./96.jpg",
        "url": "./videos/video-0396.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "赛尔玛",
        "year": "2025",
        "region": "丹麦/瑞典",
        "type": "电影",
        "genre": "剧情,惊悚",
        "tags": [
            "宗教",
            "青春期",
            "女性",
            "超能力",
            "北欧冷感",
            "剧情"
        ],
        "line": "一个生活在虔诚基督教家庭的女孩,发现自己只要感到快乐,身边的人就会离奇死亡。",
        "cover": "./97.jpg",
        "url": "./videos/video-0397.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "冷静!史酷比",
        "year": "2024",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧,悬疑,冒险",
        "tags": [
            "经典重启",
            "破案",
            "搞笑",
            "解谜",
            "喜剧",
            "悬疑"
        ],
        "line": "神秘公司收到一封匿名邀请,前往一座闹鬼的游乐园破案,却发现所有的鬼怪都变成了真实的。",
        "cover": "./98.jpg",
        "url": "./videos/video-0398.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "危险之旅:短片",
        "year": "2024",
        "region": "美国",
        "type": "短片",
        "genre": "科幻,恐怖,惊悚",
        "tags": [
            "公路",
            "超自然",
            "密闭空间",
            "反转",
            "科幻",
            "恐怖"
        ],
        "line": "一个顺风车司机接上了神秘的老人,一段看似寻常的公路之旅逐渐变得诡异。",
        "cover": "./99.jpg",
        "url": "./videos/video-0399.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "淘气阿丹",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧、家庭、冒险",
        "tags": [
            "熊孩子",
            "恶作剧",
            "社区宝藏",
            "成长",
            "喜剧",
            "家庭"
        ],
        "line": "全社区最头疼的熊孩子意外发现一张藏宝图,恶作剧忽然全成了破案工具。",
        "cover": "./100.jpg",
        "url": "./videos/video-0400.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "三块石",
        "year": "2017",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "农村",
            "兄弟",
            "土地",
            "执念",
            "剧情",
            "家庭"
        ],
        "line": "父亲临终前告诉三兄弟,祖坟下面埋着“三块石头”,谁找到就能改变命运,但只能挖一次。",
        "cover": "./101.jpg",
        "url": "./videos/video-0401.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "国际象棋女王",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "剧情,运动,传记",
        "tags": [
            "棋手",
            "冷战",
            "性别歧视",
            "天才",
            "心理战",
            "剧情"
        ],
        "line": "1960年代,一位英国少女横苏联女子国际象棋界,克格勃发现她的“天赋”背后是美国中情局的“人体脑波实验”。",
        "cover": "./102.jpg",
        "url": "./videos/video-0402.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "诡迷心笑",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖,心理,悬疑",
        "tags": [
            "邪教",
            "微笑",
            "密室",
            "心理暗示",
            "连环杀人",
            "恐怖"
        ],
        "line": "心理医生发现,所有看过一张诡异笑脸照片的人,都会在七天后笑着自杀。",
        "cover": "./103.jpg",
        "url": "./videos/video-0403.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "谋杀是我的心跳",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "犯罪/悬疑/爱情",
        "tags": [
            "连环杀手",
            "警探恋爱",
            "身份反转",
            "犯罪",
            "悬疑",
            "爱情"
        ],
        "line": "伦敦女警探爱上温柔心脏外科医生,却发现他的手术死亡记录与连环案完美重合。",
        "cover": "./104.jpg",
        "url": "./videos/video-0404.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "亚当格林的阿拉丁历险记",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻、冒险、喜剧、歌舞",
        "tags": [
            "恶搞",
            "神灯",
            "现代元素",
            "歌舞",
            "亚当·格林",
            "奇幻"
        ],
        "line": "鬼才导演亚当·格林把阿拉丁带到现代纽约,神灯精灵是个失业的说唱歌手。",
        "cover": "./105.jpg",
        "url": "./videos/video-0405.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "滑稽列传",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装,喜剧,历史,单元剧",
        "tags": [
            "史记改编",
            "小人物大智慧",
            "东方幽默",
            "单元故事",
            "古装",
            "喜剧"
        ],
        "line": "根据《史记·滑稽列传》改编,看优孟、淳于髡等千古“段子手”如何用一句话、一个动作改变历史走向。",
        "cover": "./106.jpg",
        "url": "./videos/video-0406.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "我要怎么感动你",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情喜剧",
        "tags": [
            "都市",
            "直男",
            "追爱",
            "搞笑",
            "爱情喜剧"
        ],
        "line": "钢铁直男程序员为追到女神,用算法生成999套感动方案,结果每一套都翻车到离谱。",
        "cover": "./107.jpg",
        "url": "./videos/video-0407.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "乾隆下扬州",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/古装/动作",
        "tags": [
            "乾隆",
            "微服私访",
            "美食",
            "功夫",
            "反转",
            "喜剧"
        ],
        "line": "乾隆第三次下扬州只为吃一碗狮子头,却撞破了盐商与白莲教勾结的巨大阴谋。",
        "cover": "./108.jpg",
        "url": "./videos/video-0408.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "决斗恶虎岭",
        "year": "1977",
        "region": "台湾",
        "type": "电影",
        "genre": "武侠/动作",
        "tags": [
            "邵氏风格",
            "独臂刀",
            "客栈决斗",
            "复仇",
            "武侠",
            "动作"
        ],
        "line": "独臂刀客隐居于恶虎岭客栈,却因一碗酒招来武林六大恶人的连环挑战,一场大雨中的刀战不可避免。",
        "cover": "./109.jpg",
        "url": "./videos/video-0409.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "我的空姐女友",
        "year": "2018",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "爱情/喜剧",
        "tags": [
            "职场",
            "浪漫",
            "偶像",
            "高甜",
            "爱情",
            "喜剧"
        ],
        "line": "傲娇的富二代实习生与毒舌美女空姐被迫合租,当梦想机长遇上完美乘务长,火花四溅。",
        "cover": "./110.jpg",
        "url": "./videos/video-0410.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "危险之爱",
        "year": "2026",
        "region": "韩国",
        "type": "剧集",
        "genre": "爱情/悬疑/心理",
        "tags": [
            "病娇",
            "反社会人格",
            "虐恋",
            "反转不断",
            "爱情",
            "悬疑"
        ],
        "line": "她以为嫁给了完美丈夫,直到发现家里的密室,里面贴满了之前几任妻子的失踪报道。",
        "cover": "./111.jpg",
        "url": "./videos/video-0411.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "港媳嫁到",
        "year": "2024",
        "region": "中国香港",
        "type": "剧集",
        "genre": "家庭伦理,爱情喜剧",
        "tags": [
            "港式茶餐厅",
            "婆媳大战",
            "文化差异",
            "凤凰男",
            "家庭伦理",
            "爱情喜剧"
        ],
        "line": "当雷厉风行的港圈金牌经纪人在茶餐厅相亲失败,却阴差阳错成了内地传统婆婆的儿媳。",
        "cover": "./112.jpg",
        "url": "./videos/video-0412.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "蜜丝炸弹",
        "year": "2016",
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧/动作",
        "tags": [
            "女特工",
            "无厘头",
            "台客文化",
            "恶搞",
            "喜剧",
            "动作"
        ],
        "line": "三个菜鸟女特工接到任务保护一枚“炸弹”,结果发现炸弹其实是只怀孕的母猪。",
        "cover": "./113.jpg",
        "url": "./videos/video-0413.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "致命保镖",
        "year": "2025",
        "region": "中国香港/中国大陆",
        "type": "剧集",
        "genre": "动作/犯罪/悬疑",
        "tags": [
            "保镖",
            "卧底",
            "黑帮",
            "兄弟情",
            "动作",
            "犯罪"
        ],
        "line": "最顶尖的私人保镖接了一个任务:保护黑帮老大的女儿,但他自己就是警方派来灭门的卧底。",
        "cover": "./114.jpg",
        "url": "./videos/video-0414.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "气候诉讼:审判化石燃料",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,惊悚,法庭",
        "tags": [
            "环保",
            "法律",
            "正义",
            "末世审判",
            "剧情",
            "惊悚"
        ],
        "line": "一群年轻人将全球石油巨头告上法庭,罪名是“反人类罪”,而证据是正在沉没的岛屿。",
        "cover": "./115.jpg",
        "url": "./videos/video-0415.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "十七岁",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "青春成长",
        "tags": [
            "校园",
            "单车环岛",
            "初恋",
            "父子",
            "夏天",
            "青春成长"
        ],
        "line": "十七岁那年暑假,他瞒着离异的父母,骑车环岛去见一个只聊了三句话的女生。",
        "cover": "./116.jpg",
        "url": "./videos/video-0416.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "白狐·情缘",
        "year": "2024",
        "region": "中国",
        "type": "网络电影",
        "genre": "奇幻/爱情/古装",
        "tags": [
            "白狐",
            "报恩",
            "道士",
            "虐恋",
            "唯美特效",
            "奇幻"
        ],
        "line": "千年白狐化为人形想嫁给当年的救命恩人,却发现恩人转世成了专门猎妖的冷血道士。",
        "cover": "./117.jpg",
        "url": "./videos/video-0417.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "在溪边2024",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "返乡",
            "代际和解",
            "乡村",
            "剧情",
            "家庭"
        ],
        "line": "离家十五年的女儿带着外国男友回到南方故乡,却发现父母正在溪边秘密经营一家“假发工厂”。",
        "cover": "./118.jpg",
        "url": "./videos/video-0418.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "法王艳史",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "历史",
        "tags": [
            "宫廷斗争",
            "情色",
            "权力游戏",
            "历史"
        ],
        "line": "法国历史上最被低估的“情妇之王”蓬巴杜夫人,用枕边风改写了七年战争的走向。",
        "cover": "./119.jpg",
        "url": "./videos/video-0419.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "如果风坠落",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情科幻",
        "tags": [
            "气候变化",
            "塔楼",
            "乌托邦",
            "女性",
            "剧情科幻"
        ],
        "line": "在极端天气肆虐的未来,一座垂直城市里的气象工程师决定隐瞒“风已消失”的事实。",
        "cover": "./120.jpg",
        "url": "./videos/video-0420.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "残菊物语",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "园艺隐喻",
            "临终关怀",
            "和解",
            "剧情",
            "家庭"
        ],
        "line": "一个种了一辈子菊花的倔老头,在临终前教孙女如何“修剪”自己的人生。",
        "cover": "./121.jpg",
        "url": "./videos/video-0421.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "饿狼传说2",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "动作,格斗",
        "tags": [
            "续集",
            "拳拳到肉",
            "兄弟情",
            "宿敌",
            "动作",
            "格斗"
        ],
        "line": "上一战之后,更凶残的饿狼在都市暗影中觉醒。",
        "cover": "./122.jpg",
        "url": "./videos/video-0422.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "格林兄弟国语",
        "year": "2005",
        "region": "德国/美国",
        "type": "电影",
        "genre": "喜剧/奇幻/冒险",
        "tags": [
            "童话",
            "骗子",
            "魔法",
            "怪谈",
            "法语配音",
            "喜剧"
        ],
        "line": "一对招摇撞骗的兄弟被法国军官抓去破解真·童话诅咒,却发现所有故事都是现实。",
        "cover": "./123.jpg",
        "url": "./videos/video-0423.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "惊天绑架团",
        "year": "2011",
        "region": "荷兰/比利时",
        "type": "电影",
        "genre": "犯罪惊悚",
        "tags": [
            "真实事件",
            "绑架喜力",
            "高智商犯罪",
            "犯罪惊悚"
        ],
        "line": "五个底层青年绑架了啤酒大亨,却发现勒索到的不是钱,而是整个国家的愤怒。",
        "cover": "./124.jpg",
        "url": "./videos/video-0424.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "哈罗德和紫色蜡笔",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动画/奇幻/家庭",
        "tags": [
            "手绘风",
            "想象力",
            "童真",
            "冒险",
            "动画",
            "奇幻"
        ],
        "line": "一个被困在白色房间里的男孩,用一支紫色蜡笔画出的任何东西都会变成真的。",
        "cover": "./125.jpg",
        "url": "./videos/video-0425.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "又见阿郎",
        "year": "1991",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/爱情",
        "tags": [
            "浪子回头",
            "父子情",
            "悲剧",
            "剧情",
            "爱情"
        ],
        "line": "浪子赛车手出狱后带着儿子开货车还债,前妻突然出现要争夺抚养权,而他的肝癌只剩三个月。",
        "cover": "./126.jpg",
        "url": "./videos/video-0426.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "银幕上的贝克特",
        "year": "2024",
        "region": "爱尔兰/英国",
        "type": "电影",
        "genre": "剧情/传记",
        "tags": [
            "文学改编",
            "剧场",
            "存在主义",
            "战后欧洲",
            "剧情",
            "传记"
        ],
        "line": "荒诞派大师贝克特亲自执导自己作品时,发现生活比戏剧更加荒诞。",
        "cover": "./127.jpg",
        "url": "./videos/video-0427.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "缅因海快递",
        "year": "1999",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "信使",
            "临终",
            "和解",
            "剧情",
            "家庭"
        ],
        "line": "一个被辞退的中年快递员接的最后一单:把一箱活螃蟹从缅因州送到新墨西哥州一个即将死去的老兵手里。",
        "cover": "./128.jpg",
        "url": "./videos/video-0428.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "暴雨骄阳国语",
        "year": "1994",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,犯罪",
        "tags": [
            "校园",
            "黑帮",
            "教师",
            "救赎",
            "剧情",
            "犯罪"
        ],
        "line": "曾经的社团金牌打手出狱后在一所问题中学当代课老师,却发现自己当年的小弟成了这里的学生头目。",
        "cover": "./129.jpg",
        "url": "./videos/video-0429.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "芦苇荡的时光",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/文艺",
        "tags": [
            "代际冲突",
            "回乡潮",
            "方言电影",
            "湿地生态",
            "剧情",
            "家庭"
        ],
        "line": "一个北漂失败的青年回到白洋淀边的家乡,发现父亲一直瞒着他守护着最后一片芦苇荡。",
        "cover": "./130.jpg",
        "url": "./videos/video-0430.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "火流星",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "灾难/剧情/悬疑",
        "tags": [
            "陨石",
            "宗教狂热",
            "人性实验",
            "封闭空间",
            "灾难",
            "剧情"
        ],
        "line": "一颗火流星坠入首尔,没有毁灭城市,却让方圆三公里内的人开始随机自燃。",
        "cover": "./131.jpg",
        "url": "./videos/video-0431.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "别敲两次门",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/悬疑",
        "tags": [
            "都市传说",
            "诅咒规则",
            "心理恐怖",
            "恐怖",
            "悬疑"
        ],
        "line": "流行于美国民间的“敲两次门”游戏,被证实每一次召唤都会带走一个生魂。",
        "cover": "./132.jpg",
        "url": "./videos/video-0432.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "胆小别看",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/惊悚",
        "tags": [
            "心理恐怖",
            "密室",
            "反转",
            "都市传说",
            "直播",
            "悬疑"
        ],
        "line": "一档深夜直播探险节目闯入废弃精神病院,却发现所有恐怖传说都是掩盖真相的陷阱。",
        "cover": "./133.jpg",
        "url": "./videos/video-0433.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "鬼猫",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖/民俗",
        "tags": [
            "都市传说",
            "猫咪",
            "怨灵",
            "日式心理恐怖",
            "恐怖",
            "民俗"
        ],
        "line": "老城区流传着一个诅咒:半夜如果听到猫叫,千万不要开门,除非你想见鬼。",
        "cover": "./134.jpg",
        "url": "./videos/video-0434.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "全搞砸了",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧/家庭",
        "tags": [
            "灾难婚礼",
            "乌龙事件",
            "荒诞幽默",
            "喜剧",
            "家庭"
        ],
        "line": "一场婚礼上,四个伴郎不小心把新娘的传家宝戒指掉进了烤乳猪肚子里。",
        "cover": "./135.jpg",
        "url": "./videos/video-0435.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "青春后驱动",
        "year": "2024",
        "region": "中国",
        "type": "剧集",
        "genre": "青春/爱情",
        "tags": [
            "赛车",
            "校园",
            "逆袭",
            "学霸",
            "青春",
            "爱情"
        ],
        "line": "为了追回退学的赛车手男友,年级第一的乖乖女决定自己成为车神。",
        "cover": "./136.jpg",
        "url": "./videos/video-0436.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "我们约会吧2014",
        "year": "2014",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情/真人秀/喜剧",
        "tags": [
            "相亲节目",
            "职场",
            "幕后",
            "北漂",
            "爱情",
            "真人秀"
        ],
        "line": "一档爆款相亲节目幕后,五组工作人员的爱情比台上嘉宾还要抓马一百倍。",
        "cover": "./137.jpg",
        "url": "./videos/video-0437.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "抗日奇侠之武功队",
        "year": "2011",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "动作,战争,奇幻",
        "tags": [
            "抗日",
            "武侠",
            "奇侠",
            "手撕鬼子",
            "神剧",
            "动作"
        ],
        "line": "当八路军的武术宗师带领一支精通暗器和轻功的杂牌军,用太极拳对抗坦克部队时,战争成了武林。",
        "cover": "./138.jpg",
        "url": "./videos/video-0438.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "大叔阿什比",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧,剧情,犯罪",
        "tags": [
            "黑帮",
            "退休",
            "反差萌",
            "邻里关系",
            "喜剧",
            "剧情"
        ],
        "line": "一位准备退休养老的冷血黑帮杀手,搬到普通社区后,不得不使用他的“专业技能”来解决邻居们的日常烦恼。",
        "cover": "./139.jpg",
        "url": "./videos/video-0439.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "抵抗的风景",
        "year": "2022",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情,历史",
        "tags": [
            "二战",
            "游击队",
            "艺术",
            "摄影",
            "风景",
            "剧情"
        ],
        "line": "1944年,一位被纳粹追捕的意大利游击队员,同时也是著名摄影师,他拍下的风景成了抵抗的密码。",
        "cover": "./140.jpg",
        "url": "./videos/video-0440.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "火祭",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖,民俗",
        "tags": [
            "邪教",
            "献祭",
            "乡野怪谈",
            "恐怖",
            "民俗"
        ],
        "line": "为了救回病重的女儿,一位无神论医生踏入了每年举行“火祭”的禁忌村落,却发现治病需要烧死自己。",
        "cover": "./141.jpg",
        "url": "./videos/video-0441.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "鞋猫剑客",
        "year": "2023",
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "动画,喜剧,冒险",
        "tags": [
            "猫",
            "武侠",
            "拟人",
            "萌宠",
            "动画",
            "喜剧"
        ],
        "line": "一只渴望成为大侠的流浪猫,穿上主人留下的一双神奇布鞋,踏上了寻找绝世剑谱的爆笑之旅。",
        "cover": "./142.jpg",
        "url": "./videos/video-0442.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "红粉2007",
        "year": "2007",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/社会",
        "tags": [
            "二奶",
            "深圳",
            "情感",
            "城市孤独",
            "剧情",
            "社会"
        ],
        "line": "2007年深圳,一栋别墅里住着三个“二奶”,她们的主人分别是香港司机、台商和内地下岗工人。",
        "cover": "./143.jpg",
        "url": "./videos/video-0443.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "丝绸鞋",
        "year": "2023",
        "region": "中国大陆/意大利",
        "type": "电影",
        "genre": "剧情/历史/悬疑",
        "tags": [
            "丝绸之路",
            "文物寻回",
            "双线叙事",
            "匠人",
            "剧情",
            "历史"
        ],
        "line": "一双盛唐时期送给罗马皇帝的丝绸鞋惊现威尼斯拍卖行,牵出一千三百年前一个唐朝绣娘与罗马奴隶的凄美爱情。",
        "cover": "./144.jpg",
        "url": "./videos/video-0444.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "好友有喜",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧/剧情",
        "tags": [
            "未婚先孕",
            "闺蜜",
            "代孕",
            "友情考验",
            "英式幽默",
            "喜剧"
        ],
        "line": "最好的闺蜜怀了自己前男友的孩子,而你被邀请做孩子的教母——以及灭火器。",
        "cover": "./145.jpg",
        "url": "./videos/video-0445.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "我的警察",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "剧情/犯罪",
        "tags": [
            "卧底",
            "成长",
            "兄弟情",
            "现实改编",
            "剧情",
            "犯罪"
        ],
        "line": "小镇青年为生存成为卧底警察,却在黑白两道间逐渐迷失了真实的自己。",
        "cover": "./146.jpg",
        "url": "./videos/video-0446.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "偏离",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,心理",
        "tags": [
            "平行空间",
            "记忆",
            "自我认同",
            "悬疑",
            "心理"
        ],
        "line": "一个小职员在电梯里按了负二楼,开门后却发现自己的工位上一模一样的他在加班,但领带颜色不同。",
        "cover": "./147.jpg",
        "url": "./videos/video-0447.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "急先锋横扫罪恶城",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作/警匪",
        "tags": [
            "特警部队",
            "高科技作战",
            "跨国追捕",
            "硬汉群像",
            "枪战爆破",
            "动作"
        ],
        "line": "一支秘密国际特警队“急先锋”潜入虚拟罪恶之城,必须在48小时内抓获能入侵全球监控系统的黑客“幽灵”。",
        "cover": "./148.jpg",
        "url": "./videos/video-0448.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "绝代商骄粤语",
        "year": "2023",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "商战,剧情,都市",
        "tags": [
            "商业",
            "粤语原声",
            "斗争",
            "精英",
            "商战",
            "剧情"
        ],
        "line": "商场如战场,两位金融天才在粤语区商界展开了一场没有硝烟的资本博弈。",
        "cover": "./149.jpg",
        "url": "./videos/video-0449.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "神通情人梦",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情/奇幻",
        "tags": [
            "AI恋人",
            "跨物种",
            "赛博朋克",
            "治愈",
            "爱情",
            "奇幻"
        ],
        "line": "一名极度社恐的程序员意外激活了AI女友,她却只想帮他追到现实中的女神。",
        "cover": "./150.jpg",
        "url": "./videos/video-0450.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "鲁邦三世 义大利游戏",
        "year": "2026",
        "region": "日本",
        "type": "动画剧集",
        "genre": "喜剧,动作,犯罪",
        "tags": [
            "怪盗",
            "义大利",
            "智斗",
            "喜剧",
            "动作",
            "犯罪"
        ],
        "line": "鲁邦三世收到神秘委托,要在威尼斯狂欢节上偷走一颗能控制全球卫星的钻石。",
        "cover": "./1.jpg",
        "url": "./videos/video-0451.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "邪灵诱罪",
        "year": "2026",
        "region": "马来西亚",
        "type": "电影",
        "genre": "恐怖,悬疑,民俗",
        "tags": [
            "降头",
            "法庭",
            "反转",
            "恐怖",
            "悬疑",
            "民俗"
        ],
        "line": "一名不信鬼神的律师为被控杀夫的妻子辩护,妻子坚称是“邪灵附体”才用菜刀砍了丈夫27刀。",
        "cover": "./2.jpg",
        "url": "./videos/video-0452.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "人类冬眠记",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,剧情",
        "tags": [
            "末世",
            "科技伦理",
            "生存",
            "家庭",
            "时间跳跃",
            "科幻"
        ],
        "line": "为熬过核冬天,一家三口进入冬眠舱,父亲却提前三十年独自醒来面对荒芜世界。",
        "cover": "./3.jpg",
        "url": "./videos/video-0453.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "画江湖之灵主",
        "year": "2015",
        "region": "中国大陆",
        "type": "动画",
        "genre": "动画/武侠/悬疑",
        "tags": [
            "成人向",
            "江湖",
            "灵主",
            "复仇",
            "动画",
            "武侠"
        ],
        "line": "江湖传说中被“灵主”附身的人会无意识地完成其遗愿,而主角醒来后,发现自己手里握着仇人的头颅。",
        "cover": "./4.jpg",
        "url": "./videos/video-0454.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "上翼!",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "运动,剧情,励志",
        "tags": [
            "电竞",
            "飞行模拟",
            "师徒",
            "热血",
            "逆袭",
            "运动"
        ],
        "line": "一名被职业战队开除的天才电竞少年,转战冷门的“模拟飞行”竞速赛,目标是挑战世界排名第一的“上帝之翼”。",
        "cover": "./5.jpg",
        "url": "./videos/video-0455.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "春之觉醒",
        "year": "2021",
        "region": "德国/美国",
        "type": "音乐剧电影",
        "genre": "音乐/青春/剧情",
        "tags": [
            "青春期",
            "禁忌",
            "摇滚",
            "悲剧",
            "音乐",
            "青春"
        ],
        "line": "1891年德国压抑小镇,一群青少年在性、死亡与权威的夹缝中,用摇滚唱出春日的第一次觉醒。",
        "cover": "./6.jpg",
        "url": "./videos/video-0456.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "10尺空间",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "惊悚/生存/密室",
        "tags": [
            "密室",
            "极限生存",
            "道德抉择",
            "人性",
            "惊悚",
            "生存"
        ],
        "line": "五个人被关进一个10平方英尺的密封铁箱,箱内氧气只够两个人存活,他们必须在72小时内决定谁死。",
        "cover": "./7.jpg",
        "url": "./videos/video-0457.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "比尔和泰德历险记",
        "year": "1989",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,科幻,冒险",
        "tags": [
            "穿越时空",
            "摇滚",
            "电话亭",
            "荒诞",
            "喜剧",
            "科幻"
        ],
        "line": "两个高中差生为了通过历史考试,竟用时间电话亭绑架了拿破仑等历史名人。",
        "cover": "./8.jpg",
        "url": "./videos/video-0458.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "爱情像猫一样",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "爱情/治愈/奇幻",
        "tags": [
            "猫",
            "变身",
            "治愈系",
            "慢节奏",
            "爱情",
            "治愈"
        ],
        "line": "社畜女主每次失恋都会捡到猫,而每只猫最后都会变成她下一任男友,再以“猫的方式”离开她。",
        "cover": "./9.jpg",
        "url": "./videos/video-0459.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "我的怪人父母",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "剧情/喜剧/家庭",
        "tags": [
            "家庭关系",
            "代际冲突",
            "温情",
            "黑色幽默",
            "剧情",
            "喜剧"
        ],
        "line": "在外企做高管的女儿决定辞职回家,改造她那对“不可理喻”的捡破烂父母。",
        "cover": "./10.jpg",
        "url": "./videos/video-0460.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "请和我奔现吧",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "爱情/喜剧/青春",
        "tags": [
            "网恋",
            "社恐奔现",
            "误会",
            "甜宠",
            "爱情",
            "喜剧"
        ],
        "line": "游戏里配合默契的“开黑夫妻”其实是同一栋写字楼里互看不顺眼的竞争对手,奔现前一天,他们刚刚在电梯里大吵一架。",
        "cover": "./11.jpg",
        "url": "./videos/video-0461.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "最爱是你",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "爱情/灾难",
        "tags": [
            "地震",
            "记忆丧失",
            "重逢",
            "爱情",
            "灾难"
        ],
        "line": "一场大地震后,男友陷入昏迷,醒来后失去了三年记忆,只记得他曾经“最讨厌”的那个人——而那个人正是现在的女友。",
        "cover": "./12.jpg",
        "url": "./videos/video-0462.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "格雷戈里的女友",
        "year": "1980",
        "region": "英国",
        "type": "电影",
        "genre": "爱情,喜剧,青春",
        "tags": [
            "英式青春片",
            "暗恋",
            "足球",
            "笨拙少年",
            "清新",
            "爱情"
        ],
        "line": "一个不会踢足球的苏格兰高中男生,为了追校队女神,谎称自己是前锋。",
        "cover": "./13.jpg",
        "url": "./videos/video-0463.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "新创世纪",
        "year": "2027",
        "region": "日本",
        "type": "剧集",
        "genre": "科幻,冒险,机甲",
        "tags": [
            "重启",
            "神兽",
            "少年",
            "末日",
            "科幻",
            "冒险"
        ],
        "line": "东京被巨大力场笼罩,少年获得召唤神兽的能力,但他发现这只是一场残酷游戏的开始。",
        "cover": "./14.jpg",
        "url": "./videos/video-0464.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "前世金声",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情,奇幻,音乐",
        "tags": [
            "前世今生",
            "黑胶唱片",
            "穿越",
            "命中注定",
            "爱情",
            "奇幻"
        ],
        "line": "修琴师淘到一张百年前的黑胶唱片,里面传出的声音,竟和自己每晚梦到的民国恋人一模一样。",
        "cover": "./15.jpg",
        "url": "./videos/video-0465.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "武侠七公主",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,动作,古装",
        "tags": [
            "女侠",
            "公主",
            "联盟",
            "夺宝",
            "反套路",
            "喜剧"
        ],
        "line": "七个国家的刁蛮公主被迫组成“武侠女团”,保护一个会唱歌的万能钥匙。",
        "cover": "./16.jpg",
        "url": "./videos/video-0466.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "裤甲天下",
        "year": "1988",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,剧情",
        "tags": [
            "香港电影",
            "小人物",
            "市井温情",
            "吴耀汉",
            "怀旧",
            "喜剧"
        ],
        "line": "专做牛仔裤的“裤王”王祖蓝,一心找个老婆,却因为一条裤子卷入一连串啼笑皆非的误会。",
        "cover": "./17.jpg",
        "url": "./videos/video-0467.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "横跨西班牙",
        "year": "2019",
        "region": "西班牙",
        "type": "剧集",
        "genre": "喜剧,冒险",
        "tags": [
            "徒步",
            "朝圣之路",
            "老人",
            "幽默",
            "喜剧",
            "冒险"
        ],
        "line": "四个退休老人决定徒步横跨西班牙,却发现他们之中混进了一个假扮老人的年轻逃犯。",
        "cover": "./18.jpg",
        "url": "./videos/video-0468.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "拉杰玛·查瓦尔",
        "year": "2022",
        "region": "印度",
        "type": "电影",
        "genre": "剧情/悬疑/犯罪",
        "tags": [
            "低种姓神探",
            "贫民窟推理",
            "政治黑幕",
            "剧情",
            "悬疑",
            "犯罪"
        ],
        "line": "孟买贫民窟的洗衣工,靠洗衣时听来的闲言碎语,竟破了连环杀人案,却被权贵抹去功劳。",
        "cover": "./19.jpg",
        "url": "./videos/video-0469.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "串珠",
        "year": "2011",
        "region": "日本",
        "type": "电影",
        "genre": "剧情家庭",
        "tags": [
            "海女",
            "珍珠",
            "母爱",
            "传承",
            "小镇",
            "剧情家庭"
        ],
        "line": "东京叛逆少女回乡继承海女老铺,却在母亲遗留的一串破碎珍珠里,读懂了沉默的母爱。",
        "cover": "./20.jpg",
        "url": "./videos/video-0470.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "李查王三世",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,历史,喜剧",
        "tags": [
            "王室恶搞",
            "身份错位",
            "黑色幽默",
            "剧情",
            "历史",
            "喜剧"
        ],
        "line": "伦敦地铁站里那个疯疯癫癫的流浪汉,竟然真的是查理三世国王。",
        "cover": "./21.jpg",
        "url": "./videos/video-0471.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "不屈不挠2025",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "励志,运动",
        "tags": [
            "电竞",
            "残障",
            "逆袭",
            "团队",
            "励志",
            "运动"
        ],
        "line": "一支由视障、听障和肢体残疾玩家组成的电竞队,要打进全国总决赛。",
        "cover": "./22.jpg",
        "url": "./videos/video-0472.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "妳好,安妮",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情/同性/家庭",
        "tags": [
            "百合",
            "家庭",
            "回忆",
            "自我认同",
            "年代",
            "剧情"
        ],
        "line": "35岁的安妮在整理母亲遗物时,发现了一箱写给“安妮”的信,寄信人是母亲从未提及的“另一个女人”。",
        "cover": "./23.jpg",
        "url": "./videos/video-0473.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "你逃我也逃1983",
        "year": "1983",
        "region": "波兰/美国",
        "type": "电影",
        "genre": "喜剧/战争",
        "tags": [
            "经典翻拍",
            "戏中戏",
            "纳粹",
            "喜剧",
            "战争"
        ],
        "line": "一个华沙剧团用莎士比亚的台词戏弄盖世太保,却意外挖出了真正的间谍。",
        "cover": "./24.jpg",
        "url": "./videos/video-0474.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "搜神传国语",
        "year": "2008",
        "region": "香港",
        "type": "剧集",
        "genre": "奇幻,古装",
        "tags": [
            "神仙",
            "报恩",
            "民间传说",
            "单元剧",
            "温情",
            "奇幻"
        ],
        "line": "失忆的土地公在凡间开了一家当铺,凡人可以典当寿命、记忆甚至良心来换取一个奇迹。",
        "cover": "./25.jpg",
        "url": "./videos/video-0475.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "情欲王朝",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "古装,情色,权力,悬疑",
        "tags": [
            "朝鲜王朝",
            "后宫",
            "毒杀",
            "女性权谋",
            "古装",
            "情色"
        ],
        "line": "李氏朝鲜后期,一名被废黜的后宫宫女用春宫图当密信,策反了整座王宫的尚宫体系。",
        "cover": "./26.jpg",
        "url": "./videos/video-0476.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "真爱赌注",
        "year": "2022",
        "region": "泰国",
        "type": "电视剧",
        "genre": "爱情/剧情/家庭",
        "tags": [
            "泰剧",
            "豪门",
            "赌局",
            "契约婚姻",
            "先婚后爱",
            "爱情"
        ],
        "line": "一个赌王之子赌输了一切,唯一的筹码是一个女人——对方要他娶了自己最讨厌的未婚妻。",
        "cover": "./27.jpg",
        "url": "./videos/video-0477.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "游侠追凶",
        "year": "2009",
        "region": "美国",
        "type": "电影",
        "genre": "西部,动作",
        "tags": [
            "复仇",
            "荒漠",
            "枪手",
            "独行侠",
            "西部",
            "动作"
        ],
        "line": "一个金盆洗手的快枪手,为了找回被拐卖的女儿,重新拿起左轮,踏上一场孤独的追杀之路。",
        "cover": "./28.jpg",
        "url": "./videos/video-0478.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "碧血黄沙",
        "year": "2024",
        "region": "西班牙/美国",
        "type": "电影",
        "genre": "动作,剧情,运动",
        "tags": [
            "斗牛",
            "复仇",
            "荣誉",
            "血腥美学",
            "动作",
            "剧情"
        ],
        "line": "老斗牛士为救儿子重披战袍,对手不是牛,是杀人不眨眼的毒枭。",
        "cover": "./29.jpg",
        "url": "./videos/video-0479.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "不寻常",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "心理惊悚",
        "tags": [
            "人格分裂",
            "密室",
            "反转",
            "人性",
            "悬疑",
            "心理惊悚"
        ],
        "line": "七个看似毫不相关的陌生人被困废弃医院,他们发现彼此竟是同一人格的碎片。",
        "cover": "./30.jpg",
        "url": "./videos/video-0480.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "雾都魅影",
        "year": "2021",
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑/恐怖/历史",
        "tags": [
            "维多利亚时代",
            "开膛手杰克",
            "超自然元素",
            "悬疑",
            "恐怖",
            "历史"
        ],
        "line": "维多利亚时期的伦敦,一名不信鬼神的警探与一位能看到死者记忆的灵媒,联手追捕模仿“开膛手杰克”的恶魔。",
        "cover": "./31.jpg",
        "url": "./videos/video-0481.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "邻居1982",
        "year": "1982",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "改革开放",
            "邻里关系",
            "集体宿舍",
            "现实主义",
            "温情",
            "剧情"
        ],
        "line": "筒子楼里的几户人家,为了争抢走廊里的一寸空间,上演了一出吵吵闹闹的人间喜剧。",
        "cover": "./32.jpg",
        "url": "./videos/video-0482.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "龙之天堂",
        "year": "2025",
        "region": "日本/法国",
        "type": "动画电影",
        "genre": "奇幻/冒险",
        "tags": [
            "龙族传说",
            "末日废土",
            "跨物种友谊",
            "奇幻",
            "冒险"
        ],
        "line": "末日之后,人类少女与最后一条小龙结伴,寻找传说中的“龙之天堂”以复活大地。",
        "cover": "./33.jpg",
        "url": "./videos/video-0483.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "夜惊",
        "year": "2019",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖/悬疑",
        "tags": [
            "失眠",
            "幻觉",
            "公寓",
            "诅咒",
            "恐怖",
            "悬疑"
        ],
        "line": "一名重度失眠症患者每晚在同一时刻惊醒,发现窗外总有一个和自己长得一模一样的人。",
        "cover": "./34.jpg",
        "url": "./videos/video-0484.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "红雀特工",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作,惊悚",
        "tags": [
            "女特工",
            "芭蕾舞者",
            "冷战",
            "动作",
            "惊悚"
        ],
        "line": "芭蕾舞女演员被克格勃训练成“红雀”,但她用舞步破解了连CIA都解不开的密码。",
        "cover": "./35.jpg",
        "url": "./videos/video-0485.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "生活像阳光一样灿烂",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭,喜剧,治愈",
        "tags": [
            "重组家庭",
            "烟火气",
            "方言对白",
            "轻松治愈",
            "家庭",
            "喜剧"
        ],
        "line": "一个毒舌的离婚律师和一个乐观的单亲妈妈闪婚,两家四个性格迥异的孩子被迫住在同一屋檐下。",
        "cover": "./36.jpg",
        "url": "./videos/video-0486.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "十二生肖",
        "year": "2024",
        "region": "中国",
        "type": "剧集",
        "genre": "奇幻,动作,冒险",
        "tags": [
            "生肖传说",
            "上古神力",
            "寻宝",
            "奇幻",
            "动作",
            "冒险"
        ],
        "line": "十二位生肖神力继承者被神秘召唤,却发现彼此能力相克,而集齐他们的人正在毁灭这个世界。",
        "cover": "./37.jpg",
        "url": "./videos/video-0487.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "皮特·戴维森:我仍在纽约",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,纪录片",
        "tags": [
            "单口喜剧",
            "自传",
            "脱口秀",
            "真实经历",
            "喜剧",
            "纪录片"
        ],
        "line": "SNL前卡司皮特·戴维森用一场单口专场,讲述他离开《周六夜现场》后在纽约的荒唐生活和自我疗愈。",
        "cover": "./38.jpg",
        "url": "./videos/video-0488.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "步步惊心:丽",
        "year": "2026",
        "region": "韩国",
        "type": "剧集",
        "genre": "古装、爱情、奇幻",
        "tags": [
            "穿越",
            "高丽",
            "宫斗",
            "悲剧美学",
            "古装",
            "爱情"
        ],
        "line": "现代女摄影师意外穿越到高丽王朝,成为屠杀之夜唯一幸存者,被迫周旋于众王子之间。",
        "cover": "./39.jpg",
        "url": "./videos/video-0489.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "毕打自己人粤语",
        "year": "2024",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "喜剧,剧情,职场",
        "tags": [
            "杂志社",
            "粤语",
            "职场",
            "老中青",
            "喜剧",
            "剧情"
        ],
        "line": "一家即将倒闭的八卦杂志社,五个性格迥异的员工决定自己写稿自己卖,救活它。",
        "cover": "./40.jpg",
        "url": "./videos/video-0490.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "慈悲妇女的悲剧",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "女性困境",
            "社会议题",
            "反转",
            "牺牲",
            "母爱",
            "剧情"
        ],
        "line": "一位被邻里誉为“活菩萨”的平凡母亲,在得知自己身患绝症后,决定用一场精心策划的骗局来测试三个子女的孝心。",
        "cover": "./41.jpg",
        "url": "./videos/video-0491.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "高山流水觅知音",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装、音乐、剧情、友情",
        "tags": [
            "古琴",
            "伯牙子期",
            "工匠精神",
            "知己情谊",
            "古装",
            "音乐"
        ],
        "line": "春秋时期,琴师伯牙与樵夫钟子期因一曲《高山流水》结为生死之交,本剧讲述他们相遇之前各自坎坷的人生轨迹。",
        "cover": "./42.jpg",
        "url": "./videos/video-0492.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "新扎师妹3",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "警匪喜剧",
        "tags": [
            "卧底",
            "乌龙",
            "黑帮",
            "无厘头",
            "警匪喜剧"
        ],
        "line": "为了破获跨国伪钞案,警局史上最“平”的女警(身材、智商、背景都平平无奇)被迫假扮黑道大嫂,却让两大黑帮为她疯狂。",
        "cover": "./43.jpg",
        "url": "./videos/video-0493.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "解冰",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚,犯罪",
        "tags": [
            "冷冻杀人",
            "女警",
            "冷案",
            "惊悚",
            "犯罪"
        ],
        "line": "一具在冰库中封存了五年的尸体离奇“复活”,牵出连环女警与冰恋杀手之间的猫鼠游戏。",
        "cover": "./44.jpg",
        "url": "./videos/video-0494.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "祭品2024",
        "year": "2024",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "邪教",
            "献祭",
            "怀孕",
            "恐怖",
            "惊悚"
        ],
        "line": "她怀孕后才发现,丈夫所在的社区正等着用她腹中的胎儿完成末日献祭。",
        "cover": "./45.jpg",
        "url": "./videos/video-0495.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "乐高史酷比:好莱坞闹鬼记",
        "year": "2016",
        "region": "美国",
        "type": "电影",
        "genre": "动画/喜剧",
        "tags": [
            "乐高",
            "合家欢",
            "解谜",
            "动画",
            "喜剧"
        ],
        "line": "神秘公司受邀参加好莱坞大片首映,却发现拍摄现场真的闹鬼,所有的鬼怪竟然都是用乐高积木拼成的。",
        "cover": "./46.jpg",
        "url": "./videos/video-0496.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "水星平原",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,悬疑,冒险",
        "tags": [
            "外星地貌",
            "AI觉醒",
            "失忆",
            "科幻",
            "悬疑",
            "冒险"
        ],
        "line": "宇航员在水星神秘的平原上醒来,失去了记忆,只有一台有情感的AI导航仪陪伴。",
        "cover": "./47.jpg",
        "url": "./videos/video-0497.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "残酷游戏",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑,惊悚",
        "tags": [
            "密室",
            "心理战",
            "反转",
            "社会派",
            "悬疑",
            "惊悚"
        ],
        "line": "六名网友受邀参加一场百万奖金的解谜游戏,输了的人会被公开最黑暗的秘密。",
        "cover": "./48.jpg",
        "url": "./videos/video-0498.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "时光穿梭",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻动作",
        "tags": [
            "时空穿越",
            "平行宇宙",
            "特工",
            "祖父悖论",
            "燃",
            "科幻动作"
        ],
        "line": "为了拯救被暗杀的母亲,顶级特工回到过去,却发现要杀她的人正是年轻的自己。",
        "cover": "./49.jpg",
        "url": "./videos/video-0499.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "有意求凰",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,古装,喜剧",
        "tags": [
            "龙凤配",
            "替嫁",
            "女强",
            "扮猪吃虎",
            "爱情",
            "古装"
        ],
        "line": "京城第一才女为拒绝太子逼婚,主动替嫁给传闻中暴戾的废柴王爷,却发现自己才是那个“扮猪吃老虎”的人。",
        "cover": "./50.jpg",
        "url": "./videos/video-0500.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "枕边故事",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻家庭",
        "tags": [
            "睡前故事",
            "跨次元",
            "父女",
            "想象力",
            "冒险",
            "奇幻家庭"
        ],
        "line": "单亲爸爸每晚给女儿编的枕头故事,一夜之间全部成真,而且开始互相串台。",
        "cover": "./51.jpg",
        "url": "./videos/video-0501.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "芝士火腿",
        "year": "1993",
        "region": "香港",
        "type": "电影",
        "genre": "喜剧,动作",
        "tags": [
            "港式无厘头",
            "王晶",
            "乌龙搭档",
            "校园",
            "喜剧",
            "动作"
        ],
        "line": "两个卖盗版光碟的混混,为了五十万奖金,伪装成体育老师混进贵族女校。",
        "cover": "./52.jpg",
        "url": "./videos/video-0502.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "银行家的抵抗",
        "year": "2018",
        "region": "荷兰/比利时",
        "type": "电影",
        "genre": "剧情/战争/历史",
        "tags": [
            "二战",
            "荷兰",
            "真实改编",
            "暗度陈仓",
            "金融战争",
            "剧情"
        ],
        "line": "为了拖延纳粹战争机器,银行家伪造了数亿英镑的假钞,却救不了自己的家人。",
        "cover": "./53.jpg",
        "url": "./videos/video-0503.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "呼我",
        "year": "2020",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/科幻",
        "tags": [
            "神秘电话",
            "平行时空",
            "烧脑反转",
            "悬疑",
            "科幻"
        ],
        "line": "一部废弃的电话亭,让2003年的穷学生和2020年的社畜跨越时空连接,共同阻止一场连环凶杀案。",
        "cover": "./54.jpg",
        "url": "./videos/video-0504.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "由宇子的天平",
        "year": "2020",
        "region": "日本",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "社会派",
            "纪录片拍摄",
            "校园霸凌",
            "道德困境",
            "剧情"
        ],
        "line": "拍摄校园霸凌纪录片的导演由宇子,却发现自己的父亲才是真正的加害者。",
        "cover": "./55.jpg",
        "url": "./videos/video-0505.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "呷醋大丈夫国语",
        "year": "1987",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/爱情/家庭",
        "tags": [
            "黄百鸣",
            "吃醋",
            "婚姻喜剧",
            "港式搞笑",
            "误会产生",
            "喜剧"
        ],
        "line": "一位好好先生发现妻子频繁与前男友见面,于是联合损友上演了一出荒唐的“捉奸在床”大戏。",
        "cover": "./56.jpg",
        "url": "./videos/video-0506.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "奔向爱情",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,运动",
        "tags": [
            "奔跑",
            "马拉松",
            "治愈",
            "双向奔赴",
            "爱情",
            "运动"
        ],
        "line": "为追上前方的初恋,一个从不运动的程序员报名了她当领跑员的马拉松。",
        "cover": "./57.jpg",
        "url": "./videos/video-0507.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "2012地球末日",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "科幻灾难",
        "tags": [
            "伪纪录片",
            "幸存者",
            "地磁倒转",
            "科幻灾难"
        ],
        "line": "这不是玛雅预言的重演,而是通过一盒在废土中发现的摄像机,记录了普通人如何在地磁倒转的七天里活下来。",
        "cover": "./58.jpg",
        "url": "./videos/video-0508.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "超级语文课第二季",
        "year": "2024",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀,知识竞赛",
        "tags": [
            "语文老师",
            "作文对决",
            "诗词飞花令",
            "教育综艺",
            "真人秀",
            "知识竞赛"
        ],
        "line": "十二位风格迥异的语文老师同台PK,用“神级板书”和“魔性讲课”争夺年度金牌教师。",
        "cover": "./59.jpg",
        "url": "./videos/video-0509.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "不良鲜师",
        "year": "2024",
        "region": "中国台湾",
        "type": "网络剧",
        "genre": "喜剧,校园,青春",
        "tags": [
            "黑道",
            "老师",
            "反差萌",
            "热血",
            "喜剧",
            "校园"
        ],
        "line": "因帮派火拼被关押的大姐大,为了假释被迫去乡下高中当老师,结果发现全班学生都是考0分的“废物”。",
        "cover": "./60.jpg",
        "url": "./videos/video-0510.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "请付现金",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "犯罪,喜剧",
        "tags": [
            "黑色幽默",
            "劫匪",
            "讽刺",
            "经济危机",
            "犯罪",
            "喜剧"
        ],
        "line": "一个只收现金的偏执狂便利店,成了全城逃税者和罪犯的避难所。",
        "cover": "./61.jpg",
        "url": "./videos/video-0511.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "珍妮花的欲望续集",
        "year": "1993",
        "region": "中国香港",
        "type": "电影",
        "genre": "情色/剧情",
        "tags": [
            "伦理纠葛",
            "续集",
            "豪门恩怨",
            "欲望回归",
            "情色",
            "剧情"
        ],
        "line": "逃离豪门十年的珍妮花重返香港,只为拿回当年寄存于情夫体内的钻石。",
        "cover": "./62.jpg",
        "url": "./videos/video-0512.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "关于粮食问题的几个备注",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "剧情/黑色幽默",
        "tags": [
            "基层",
            "荒诞",
            "乡村",
            "官场",
            "剧情",
            "黑色幽默"
        ],
        "line": "为了应付上级“粮食安全”检查,一个贫困村决定把村里的狗都改名叫“粮食”。",
        "cover": "./63.jpg",
        "url": "./videos/video-0513.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "用餐愉快",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑,惊悚",
        "tags": [
            "美食",
            "心理",
            "犯罪",
            "反转",
            "黑暗",
            "悬疑"
        ],
        "line": "一名美食博主每次探店后,餐厅都会发生离奇命案,而她本人却完全不知情。",
        "cover": "./64.jpg",
        "url": "./videos/video-0514.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "瓢虫少女第五季",
        "year": "2024",
        "region": "法国",
        "type": "动画剧集",
        "genre": "动作,爱情,奇幻",
        "tags": [
            "超级英雄",
            "校园",
            "变身",
            "魔法",
            "动作",
            "爱情"
        ],
        "line": "本季中,瓢虫少女和黑猫 Noir 终于知道了彼此的真实身份,但代价是:他们必须亲手销毁其中一个 miraculous,才能阻止终极反派。",
        "cover": "./65.jpg",
        "url": "./videos/video-0515.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "隔楼女孩:我们之间的层距",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集/短剧",
        "genre": "爱情/剧情",
        "tags": [
            "暗恋",
            "距离",
            "都市",
            "治愈",
            "爱情",
            "剧情"
        ],
        "line": "住在同一栋楼的上下层,女孩暗恋男孩整整三年,却因为不敢开口,只能一次次擦肩而过。",
        "cover": "./66.jpg",
        "url": "./videos/video-0516.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "魔术师与小丑第一季",
        "year": "2025",
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑/犯罪/剧情",
        "tags": [
            "魔术",
            "连环杀手",
            "维多利亚时代",
            "双雄",
            "悬疑",
            "犯罪"
        ],
        "line": "维多利亚时代,一位崇尚科学的魔术师与一位疯癫的小丑联手追捕“剧院幽灵”。",
        "cover": "./67.jpg",
        "url": "./videos/video-0517.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "1984",
        "year": "2025",
        "region": "美国",
        "type": "电视剧",
        "genre": "科幻,反乌托邦,惊悚,悬疑",
        "tags": [
            "政治寓言",
            "监控",
            "思想警察",
            "重置版",
            "科幻",
            "反乌托邦"
        ],
        "line": "在“老大哥”无处不在的2025年,一群程序员发现了改写《1984》结局的后门代码。",
        "cover": "./68.jpg",
        "url": "./videos/video-0518.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "末基劳:英雄崛起",
        "year": "2018",
        "region": "马来西亚",
        "type": "电影",
        "genre": "动作/历史/传记",
        "tags": [
            "马来武士",
            "抗英战争",
            "民族觉醒",
            "冷兵器搏杀",
            "动作",
            "历史"
        ],
        "line": "19世纪末,一名马来武士以一把短剑对抗英国殖民者的火枪大炮,点燃了举国的反抗之火。",
        "cover": "./69.jpg",
        "url": "./videos/video-0519.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "红粉间谍",
        "year": "1960",
        "region": "中国大陆",
        "type": "电影",
        "genre": "谍战/悬疑/剧情",
        "tags": [
            "黑白片",
            "女性特工",
            "民国",
            "反特",
            "经典",
            "谍战"
        ],
        "line": "上海滩歌女被军统招募为间谍,却在任务中发现自己的单线联络人竟是失散多年的姐姐。",
        "cover": "./70.jpg",
        "url": "./videos/video-0520.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "飞天小女警电影公开版",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动画,动作,喜剧",
        "tags": [
            "超级英雄",
            "童年",
            "重启",
            "校园",
            "动画",
            "动作"
        ],
        "line": "花花、泡泡、毛毛上高中了,发现打击犯罪比数学考试容易得多。",
        "cover": "./71.jpg",
        "url": "./videos/video-0521.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "京城怪物第二季",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "奇幻/惊悚/年代",
        "tags": [
            "生物变异",
            "1945年首尔",
            "虐恋",
            "奇幻",
            "惊悚",
            "年代"
        ],
        "line": "时间来到2025年的首尔,同样的怪物基因复活,而当年那个为了救他而变异的京城男子,竟以年轻的面孔出现在现代。",
        "cover": "./72.jpg",
        "url": "./videos/video-0522.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "娘心计",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭,年代,苦情",
        "tags": [
            "民国",
            "女性",
            "复仇",
            "乱世",
            "家庭",
            "年代"
        ],
        "line": "民国江南,一柔弱母亲为寻回被夺走的三子,甘愿沦为仇家丫鬟潜伏二十年。",
        "cover": "./73.jpg",
        "url": "./videos/video-0523.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "死亡连锁",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚、恐怖、悬疑",
        "tags": [
            "诅咒传播",
            "连锁信",
            "社交网络",
            "都市传说",
            "限时生存",
            "惊悚"
        ],
        "line": "你收到一封死亡连锁邮件,不转发给三个人,你爱的人就会在24小时内死去。",
        "cover": "./74.jpg",
        "url": "./videos/video-0524.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "您一定不要错过",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/冒险/西部",
        "tags": [
            "内蒙草原",
            "寻父之旅",
            "公路冒险",
            "历史伤痕",
            "剧情",
            "冒险"
        ],
        "line": "一个城市少年带着一封信踏上内蒙古草原,寻找从未来过、却在信中给他留下了一群“兄弟”的父亲。",
        "cover": "./75.jpg",
        "url": "./videos/video-0525.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "女孩的战地滑板课",
        "year": "2024",
        "region": "阿富汗/美国",
        "type": "电影/纪录",
        "genre": "纪录片/运动/社会",
        "tags": [
            "女性",
            "塔利班",
            "滑板",
            "教育",
            "真实改编",
            "纪录片"
        ],
        "line": "在塔利班禁止女孩上学后,一群女孩在秘密滑板学校里重新找回了自己的声音。",
        "cover": "./76.jpg",
        "url": "./videos/video-0526.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "碟中谍4:幽灵协议",
        "year": "2011",
        "region": "美国",
        "type": "电影",
        "genre": "动作,惊悚",
        "tags": [
            "特工",
            "爬迪拜塔",
            "IMAX",
            "高科技",
            "团队作战",
            "动作"
        ],
        "line": "被核弹威胁的国家、被解散的IMF小组,伊森·亨特必须在没有任何支援的情况下完成“幽灵协议”。",
        "cover": "./77.jpg",
        "url": "./videos/video-0527.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "仙班校园",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "奇幻,喜剧",
        "tags": [
            "神仙",
            "校园",
            "搞笑",
            "成长",
            "神话改编",
            "奇幻"
        ],
        "line": "因天庭改革,各路神仙被强制下凡念初一,而他们的班主任是个毫无法力的普通实习生。",
        "cover": "./78.jpg",
        "url": "./videos/video-0528.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "飞越苏联",
        "year": "1985",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/惊悚",
        "tags": [
            "冷战背景",
            "叛逃",
            "舞蹈",
            "心理博弈",
            "剧情",
            "惊悚"
        ],
        "line": "苏联顶尖芭蕾舞者在纽约巡演时申请政治避难,KGB随即绑架他在莫斯科的妹妹作为人质。",
        "cover": "./79.jpg",
        "url": "./videos/video-0529.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "月神",
        "year": "2025",
        "region": "意大利/法国",
        "type": "电影",
        "genre": "科幻、文艺、悬疑",
        "tags": [
            "月球",
            "孤独",
            "记忆",
            "太空",
            "心理",
            "科幻"
        ],
        "line": "月球基地唯一的看守人,发现每晚都有“人”在月球表面用光书写只有他能看懂的诗句。",
        "cover": "./80.jpg",
        "url": "./videos/video-0530.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "一杯上路2021",
        "year": "2021",
        "region": "泰国",
        "type": "电影",
        "genre": "剧情/公路/文艺",
        "tags": [
            "绝症",
            "公路",
            "友情",
            "回忆",
            "治愈",
            "剧情"
        ],
        "line": "身患绝症的青年在死前收到好友的请柬,必须开车横穿泰国,送还20年前偷走的“一杯酒”。",
        "cover": "./81.jpg",
        "url": "./videos/video-0531.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "野玫瑰之恋",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情/犯罪",
        "tags": [
            "黑色电影",
            "蛇蝎美人",
            "夜总会",
            "卧底",
            "悲剧美学",
            "爱情"
        ],
        "line": "夜总会头牌“野玫瑰”游走于权贵之间,却偏偏爱上奉命调查她的卧底警察。",
        "cover": "./82.jpg",
        "url": "./videos/video-0532.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "绝境盟约",
        "year": "2023",
        "region": "西班牙/美国",
        "type": "电影",
        "genre": "剧情/惊悚/传记",
        "tags": [
            "空难",
            "生存",
            "真实改编",
            "剧情",
            "惊悚",
            "传记"
        ],
        "line": "1972年安第斯空难幸存者,在海拔四千米的冰原上,依靠死者的遗体度过了72天。",
        "cover": "./83.jpg",
        "url": "./videos/video-0533.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "7500鬼航班",
        "year": "2026",
        "region": "美国/日本",
        "type": "电影",
        "genre": "恐怖,悬疑",
        "tags": [
            "飞机",
            "咒怨",
            "伽椰子",
            "恐怖",
            "悬疑"
        ],
        "line": "一架从东京飞往洛杉矶的红眼航班,载着一名被诅咒的乘客,将恐怖带到三万英尺的高空。",
        "cover": "./84.jpg",
        "url": "./videos/video-0534.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "夏天的滋味",
        "year": "2022",
        "region": "越南",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "河内",
            "蝉鸣",
            "闷骚",
            "女性视角",
            "剧情",
            "家庭"
        ],
        "line": "1997年河内的夏天,三姐妹在一场葬礼后,各自在闷热的房间里品尝着禁忌的秘密。 母亲去世后,三姐妹在父亲的老房子里度过最后一个夏天,冰箱里的鱼露正在慢慢变质。",
        "cover": "./85.jpg",
        "url": "./videos/video-0535.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "史酷比:湖怪的诅咒",
        "year": "2023",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧/悬疑/冒险",
        "tags": [
            "解谜",
            "怪物",
            "青少年",
            "经典重启",
            "喜剧",
            "悬疑"
        ],
        "line": "神秘公司一行人来到夏令营,却发现湖怪传说背后藏着一位环保少女的激进抗议,以及一桶荧光绿色的有毒废料。",
        "cover": "./86.jpg",
        "url": "./videos/video-0536.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "水晶天鹅",
        "year": "2023",
        "region": "白俄罗斯",
        "type": "电影",
        "genre": "剧情,歌舞",
        "tags": [
            "苏联",
            "梦想",
            "芭蕾",
            "铁幕",
            "女性",
            "剧情"
        ],
        "line": "苏联解体前夕,立志成为芭蕾舞演员的女孩被迫进入工厂,却在地下舞会中找到了自由。",
        "cover": "./87.jpg",
        "url": "./videos/video-0537.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "末任女士就拜托了",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,喜剧,奇幻",
        "tags": [
            "性别反转",
            "职场",
            "神社",
            "剧情",
            "喜剧",
            "奇幻"
        ],
        "line": "在一家面临废社危机的“边缘人”神社,新任女宫司必须带领一群不靠谱的神明和废柴巫女完成最后的祭祀。",
        "cover": "./88.jpg",
        "url": "./videos/video-0538.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "伊甸园",
        "year": "2025",
        "region": "美国/加拿大",
        "type": "剧集",
        "genre": "科幻/悬疑/惊悚",
        "tags": [
            "克隆",
            "乌托邦",
            "女性觉醒",
            "伦理",
            "悬疑",
            "科幻"
        ],
        "line": "一座专为顶级富豪打造的地下“伊甸园”社区里,所有女性居民都是克隆人,直到有一天她们发现了自己的编号。",
        "cover": "./89.jpg",
        "url": "./videos/video-0539.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "灰姑娘的故事3",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "爱情/奇幻",
        "tags": [
            "经典新编",
            "反套路",
            "女权",
            "爱情",
            "奇幻"
        ],
        "line": "这次灰姑娘捡到了王子的水晶鞋,她却把它卖了还债,并告诉王子:想娶我,先解决贵族的免税权。",
        "cover": "./90.jpg",
        "url": "./videos/video-0540.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "遇见你之后",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情/奇幻",
        "tags": [
            "时间循环",
            "治愈",
            "都市",
            "爱情",
            "奇幻"
        ],
        "line": "每次亲吻男友,她就会穿越到分手后的未来,看到爱情变质的样子。",
        "cover": "./91.jpg",
        "url": "./videos/video-0541.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "八爪女",
        "year": "1983",
        "region": "英国",
        "type": "电影",
        "genre": "动作冒险",
        "tags": [
            "007",
            "间谍",
            "经典",
            "女反派",
            "动作冒险"
        ],
        "line": "詹姆斯·邦德奉命追查消失的核弹,线索指向了一位神秘的八爪女。",
        "cover": "./92.jpg",
        "url": "./videos/video-0542.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "肚假情真",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧爱情",
        "tags": [
            "假怀孕",
            "闺蜜反目",
            "反催婚",
            "姐妹情",
            "喜剧爱情"
        ],
        "line": "大龄剩女为堵住催婚的嘴谎称怀孕,没想到闺蜜们纷纷“我要当干妈”,一场荒诞的假肚子保卫战打响了。",
        "cover": "./93.jpg",
        "url": "./videos/video-0543.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "猪猡之王",
        "year": "2011",
        "region": "韩国",
        "type": "电影",
        "genre": "动画,剧情,校园暴力",
        "tags": [
            "校园霸凌",
            "复仇",
            "残酷青春",
            "社会批判",
            "手绘动画",
            "动画"
        ],
        "line": "20年后,曾经被霸凌的“猪猡”成为了富豪,而曾经高高在上的霸凌者们陆续收到了死亡录像带。",
        "cover": "./94.jpg",
        "url": "./videos/video-0544.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "蔬菜宝贝历险记",
        "year": "2015",
        "region": "美国",
        "type": "电影",
        "genre": "动画,冒险,喜剧,家庭",
        "tags": [
            "动画",
            "冒险",
            "喜剧",
            "全家欢",
            "蔬菜",
            "环保"
        ],
        "line": "一颗不想被做成沙拉的生菜,和一根叛逆的胡萝卜联手拯救冰箱世界。",
        "cover": "./95.jpg",
        "url": "./videos/video-0545.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "一子错",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/犯罪/黑色幽默",
        "tags": [
            "父子",
            "黑帮",
            "命运",
            "剧情",
            "犯罪",
            "黑色幽默"
        ],
        "line": "一个黑帮大佬逼着不成器的儿子继承衣钵,结果儿子选错了拜山头的对象,引发全城混战。",
        "cover": "./96.jpg",
        "url": "./videos/video-0546.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "长明河",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑,惊悚",
        "tags": [
            "犯罪心理",
            "河流",
            "小镇秘密",
            "双雄",
            "悬疑",
            "惊悚"
        ],
        "line": "两条相隔二十年的谋杀案因一条名为“长明”的神秘河流联系在一起,河底藏着小镇的原罪。",
        "cover": "./97.jpg",
        "url": "./videos/video-0547.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "乡下人的悲歌",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "底层",
            "挣扎",
            "亲情",
            "真实改编",
            "剧情",
            "家庭"
        ],
        "line": "一个从铁锈地带逃出来的法学院学生,被一通电话叫回了那个他发誓再也不回去的家。",
        "cover": "./98.jpg",
        "url": "./videos/video-0548.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "演员龟冈拓次",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/喜剧",
        "tags": [
            "龙套",
            "演艺圈",
            "人生如戏",
            "剧情",
            "喜剧"
        ],
        "line": "万年龙套演员龟冈拓次,在片场永远演“尸体”和“路人”,却在生活中上演着一出出荒诞的“主角”戏码。",
        "cover": "./99.jpg",
        "url": "./videos/video-0549.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "僵尸回收守则",
        "year": "2027",
        "region": "日本",
        "type": "电视剧",
        "genre": "恐怖,喜剧,奇幻",
        "tags": [
            "丧尸",
            "公务员",
            "日常",
            "黑色幽默",
            "恐怖",
            "喜剧"
        ],
        "line": "丧尸危机爆发十年后,男主考公上岸,成为了一名负责分类处理僵尸的“清洁工”。",
        "cover": "./100.jpg",
        "url": "./videos/video-0550.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "全员恶玉",
        "year": "2020",
        "region": "日本",
        "type": "动画剧集",
        "genre": "科幻/动作/犯罪",
        "tags": [
            "赛博朋克",
            "犯罪",
            "反英雄",
            "致郁",
            "高分动画",
            "科幻"
        ],
        "line": "一群穷凶极恶的罪犯被卷入一场关乎关西存亡的运输任务,但他们每一个人都隐藏着更深的秘密。",
        "cover": "./101.jpg",
        "url": "./videos/video-0551.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "黑风行动",
        "year": "1991",
        "region": "香港",
        "type": "电影",
        "genre": "动作/犯罪/悬疑",
        "tags": [
            "卧底",
            "黑帮",
            "毒品",
            "兄弟反目",
            "动作",
            "犯罪"
        ],
        "line": "警队卧底在黑帮中爬到二把手位置,却在收网前夜发现自己真正的上司才是幕后毒枭。",
        "cover": "./102.jpg",
        "url": "./videos/video-0552.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "生死狂澜",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作,惊悚,冒险",
        "tags": [
            "极限运动",
            "阴谋论",
            "雪山求生",
            "高空跳伞",
            "反恐",
            "动作"
        ],
        "line": "一架客机在雪山顶端被劫持,一名退役特工必须利用极限运动技能在万米高空夺回控制权。",
        "cover": "./103.jpg",
        "url": "./videos/video-0553.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "他人之子2017",
        "year": "2017",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑,剧情",
        "tags": [
            "失踪",
            "换子",
            "邪教",
            "真相",
            "反转",
            "悬疑"
        ],
        "line": "2017年,一具骸骨被发现,DNA显示他是17年前失踪的孩子,但他的母亲坚称一年前才送他上大学。",
        "cover": "./104.jpg",
        "url": "./videos/video-0554.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "歌唱动荡的青春",
        "year": "2019",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争、青春、音乐",
        "tags": [
            "二战",
            "合唱团",
            "苦难与希望",
            "战争",
            "青春",
            "音乐"
        ],
        "line": "列宁格勒围城战中,一群孩子在废墟里排练合唱,唱给那些再也回不来的人。",
        "cover": "./105.jpg",
        "url": "./videos/video-0555.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "周末奇逢",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "爱情,喜剧",
        "tags": [
            "错认",
            "周末旅行",
            "假情侣",
            "慢热真香",
            "爱情",
            "喜剧"
        ],
        "line": "两个被放鸽子的陌生人拼房过周末,却对所有人谎称是结婚五年的夫妻。",
        "cover": "./106.jpg",
        "url": "./videos/video-0556.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "音乐少女",
        "year": "2020",
        "region": "日本",
        "type": "动画剧集",
        "genre": "音乐/偶像",
        "tags": [
            "摇滚",
            "少女",
            "原创",
            "热血",
            "音乐",
            "偶像"
        ],
        "line": "一个只想玩重金属的叛逆少女,被迫加入濒临废部的民谣部,却碰撞出了全新的音乐火花。",
        "cover": "./107.jpg",
        "url": "./videos/video-0557.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "丛林地狱",
        "year": "2025",
        "region": "巴西/美国",
        "type": "电影",
        "genre": "惊悚/冒险/恐怖",
        "tags": [
            "亚马逊",
            "食人部落",
            "生还者",
            "伪纪录片",
            "惊悚",
            "冒险"
        ],
        "line": "六名网红为博流量闯入亚马逊禁区,直播镜头记录下了他们一步步被原始部落围猎的全程。",
        "cover": "./108.jpg",
        "url": "./videos/video-0558.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "处于精神崩溃边缘的侦探",
        "year": "2024",
        "region": "英国",
        "type": "电视剧",
        "genre": "悬疑/心理/犯罪",
        "tags": [
            "神探",
            "幻觉",
            "童年阴影",
            "单元剧",
            "悬疑",
            "心理"
        ],
        "line": "天才侦探每次破案都会产生幻觉,他发现那些恐怖案件竟然都指向自己7岁时的那个秘密。",
        "cover": "./109.jpg",
        "url": "./videos/video-0559.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "阿波罗13号:生还实录",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "传记/灾难/历史",
        "tags": [
            "真实事件",
            "太空",
            "求生",
            "纪录片风格",
            "惊心动魄",
            "传记"
        ],
        "line": "聚焦阿波罗13号三位宇航员的家庭视角,在地面与太空通讯中断的四小时里,他们都做了什么。",
        "cover": "./110.jpg",
        "url": "./videos/video-0560.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "圣公会主学堂",
        "year": "2023",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情/悬疑",
        "tags": [
            "校园惊悚",
            "历史隐秘",
            "心理创伤",
            "剧情",
            "悬疑"
        ],
        "line": "一所百年历史的教会学校,七个互不相识的学生同时收到一封揭示“1987年秘密”的匿名信。",
        "cover": "./111.jpg",
        "url": "./videos/video-0561.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "39号特案",
        "year": "2019",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "刑侦/悬疑/犯罪",
        "tags": [
            "连环杀人",
            "卧底警察",
            "档案解密",
            "双面人生",
            "刑侦",
            "悬疑"
        ],
        "line": "重案组老刑警退休当天,发现39号特案的真凶竟是自己三十年前的搭档。",
        "cover": "./112.jpg",
        "url": "./videos/video-0562.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "斯巴达克斯:竞技场之神",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "动作/历史/血腥",
        "tags": [
            "角斗士",
            "古罗马",
            "复仇",
            "黄暴",
            "史诗",
            "动作"
        ],
        "line": "斯巴达克斯起义之前,传奇角斗士“克里克斯”在竞技场中为自由而战,却发现自己只是贵族的玩物。",
        "cover": "./113.jpg",
        "url": "./videos/video-0563.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "第12次失败",
        "year": "2023",
        "region": "印度",
        "type": "电影",
        "genre": "励志,剧情",
        "tags": [
            "公务员考试",
            "坚持",
            "贫寒学子",
            "真实改编",
            "励志",
            "剧情"
        ],
        "line": "印度小镇青年第12次参加国家级公务员考试,贫穷和嘲笑没能打倒他,但最后一次笔试后的意外让他崩溃。",
        "cover": "./114.jpg",
        "url": "./videos/video-0564.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "造梦师",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻,悬疑,爱情",
        "tags": [
            "梦境入侵",
            "记忆删除",
            "软科幻",
            "都市",
            "心理学",
            "科幻"
        ],
        "line": "一个能潜入他人梦境删除记忆的造梦师,接手了一个要删除自己初恋的诡异订单。",
        "cover": "./115.jpg",
        "url": "./videos/video-0565.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "零日网路战",
        "year": "2016",
        "region": "美国",
        "type": "纪录片",
        "genre": "纪录,惊悚,科技",
        "tags": [
            "黑客",
            "网络攻击",
            "政治阴谋",
            "真实事件",
            "纪录",
            "惊悚"
        ],
        "line": "一种名为“震网”的超级病毒,揭开了数字时代最恐怖的战争形式。",
        "cover": "./116.jpg",
        "url": "./videos/video-0566.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "所有的警察都是混蛋",
        "year": "2027",
        "region": "意大利/法国",
        "type": "电影",
        "genre": "剧情、犯罪、惊悚",
        "tags": [
            "激进左翼",
            "警察暴力",
            "体制批判",
            "道德灰色地带",
            "剧情",
            "犯罪"
        ],
        "line": "一个菜鸟记者为卧底写黑警报道,加入了反警察的激进组织,却发现自己逐渐认同他们的暴力主张。",
        "cover": "./117.jpg",
        "url": "./videos/video-0567.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "美人镖局",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装/武侠/喜剧",
        "tags": [
            "女子镖队",
            "江湖商战",
            "反套路",
            "古装",
            "武侠",
            "喜剧"
        ],
        "line": "全京城最贵的镖局全由女子组成,她们不押金银,只押“秘密”。",
        "cover": "./118.jpg",
        "url": "./videos/video-0568.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "常磐庄的青春",
        "year": "2025",
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情,历史,群像",
        "tags": [
            "漫画家",
            "集体生活",
            "昭和时代",
            "手冢治虫",
            "剧情",
            "历史"
        ],
        "line": "上世纪 60 年代,六位立志成为漫画家的年轻人挤在破旧公寓里交房租、抢厕所、以及发明现代漫画。",
        "cover": "./119.jpg",
        "url": "./videos/video-0569.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "玩家2:玩家的战争",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "犯罪/动作",
        "tags": [
            "骗局",
            "复仇",
            "爽剧",
            "高智商",
            "团队",
            "犯罪"
        ],
        "line": "第一季的骗子天团重聚,这次他们要骗的不是钱,而是一个能操控国家司法的神秘组织。",
        "cover": "./120.jpg",
        "url": "./videos/video-0570.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "机器人弗雷迪",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "科幻,剧情",
        "tags": [
            "人工智能",
            "养老",
            "孤独",
            "温情",
            "科幻",
            "剧情"
        ],
        "line": "退休独居老人收到了已故儿子寄来的最后一个快递:一个会讲冷笑话、只会做煎蛋的报废家务机器人。",
        "cover": "./121.jpg",
        "url": "./videos/video-0571.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "天 天和街浪子",
        "year": "2022",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情,竞技",
        "tags": [
            "麻将",
            "赌博",
            "中年危机",
            "逆袭",
            "剧情",
            "竞技"
        ],
        "line": "落魄的前麻将天才沦落到街头,被昔日对手用一局麻将唤回了求胜心。",
        "cover": "./122.jpg",
        "url": "./videos/video-0572.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "高尔夫球王",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "运动,传记",
        "tags": [
            "励志",
            "体育",
            "逆袭",
            "黑人",
            "运动",
            "传记"
        ],
        "line": "一个贫民窟的黑人男孩,凭借捡来的半根球杆,打败了贵族俱乐部里的所有白人高手。",
        "cover": "./123.jpg",
        "url": "./videos/video-0573.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "情人知己",
        "year": "1999",
        "region": "香港",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "三角恋",
            "友谊",
            "都市情感",
            "遗憾",
            "爱情",
            "剧情"
        ],
        "line": "他结婚前一晚,她才发现自己暗恋十年的“蓝颜知己”从未爱过她。",
        "cover": "./124.jpg",
        "url": "./videos/video-0574.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "爱上北斗星男友",
        "year": "2021",
        "region": "中国内地",
        "type": "电视剧",
        "genre": "奇幻、爱情、喜剧",
        "tags": [
            "外星人",
            "娱乐圈",
            "甜宠",
            "欢喜冤家",
            "奇幻",
            "爱情"
        ],
        "line": "来自北斗星的外星王子误闯地球,竟成了当红女明星的贴身保镖。",
        "cover": "./125.jpg",
        "url": "./videos/video-0575.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "越策越开心2017",
        "year": "2017",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "脱口秀,喜剧,访谈",
        "tags": [
            "脱口秀",
            "方言",
            "搞笑",
            "策神",
            "湖南卫视",
            "喜剧"
        ],
        "line": "汪涵和马可再度合体,用长沙方言和机智调侃,把明星嘉宾“策”得哑口无言。",
        "cover": "./126.jpg",
        "url": "./videos/video-0576.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "我们是幸运儿",
        "year": "2024",
        "region": "波兰",
        "type": "电影",
        "genre": "历史,战争",
        "tags": [
            "二战",
            "犹太家庭",
            "幸存",
            "离散",
            "希望",
            "历史"
        ],
        "line": "二战爆发后,一个犹太家庭四散逃亡,他们约定活着相见,每个人都成了“幸运儿”。",
        "cover": "./127.jpg",
        "url": "./videos/video-0577.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "寂寞是条狗",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/文艺",
        "tags": [
            "孤独症",
            "人狗情",
            "城市寓言",
            "剧情",
            "文艺"
        ],
        "line": "一个失眠的保安,一条不会叫的狗,在深夜的废弃游乐场里,互相治愈彼此的寂寞。",
        "cover": "./128.jpg",
        "url": "./videos/video-0578.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "生命因你动听",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,音乐",
        "tags": [
            "亲情",
            "自闭症",
            "治愈",
            "大提琴",
            "剧情",
            "音乐"
        ],
        "line": "一位过气的大提琴家,用琴声打开了自闭症儿子封闭十三年的世界。",
        "cover": "./129.jpg",
        "url": "./videos/video-0579.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "开麦总冠军第二季",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺/真人秀",
        "genre": "喜剧/脱口秀",
        "tags": [
            "单口喜剧",
            "竞演",
            "新人",
            "爆梗",
            "喜剧",
            "脱口秀"
        ],
        "line": "一群来自各行各业的素人——包括殡仪馆司仪和离婚律师——用最真实的黑色幽默,向职业脱口秀演员发起挑战。",
        "cover": "./130.jpg",
        "url": "./videos/video-0580.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "够姜小强爱上够靓小奥",
        "year": "2002",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情,喜剧",
        "tags": [
            "市井",
            "草根",
            "女追男",
            "港式幽默",
            "算命",
            "爱情"
        ],
        "line": "庙街鱼蛋妹坚信自己命中注定要嫁给豪门太子爷,于是展开了一场又土又猛的追爱行动。",
        "cover": "./131.jpg",
        "url": "./videos/video-0581.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "时空大冒险",
        "year": "2023",
        "region": "英国",
        "type": "电视剧",
        "genre": "科幻/冒险",
        "tags": [
            "时间旅行",
            "蒸汽朋克",
            "平行宇宙",
            "小队冒险",
            "科幻",
            "冒险"
        ],
        "line": "维多利亚时代的发明家、民国上海的女记者与22世纪的AI,意外共享一台失控的时间机器。",
        "cover": "./132.jpg",
        "url": "./videos/video-0582.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "楚留香新传之影子传奇",
        "year": "2025",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "武侠/古装/悬疑",
        "tags": [
            "楚留香",
            "影子",
            "替身",
            "阴谋",
            "武侠",
            "古装"
        ],
        "line": "楚留香被朝廷通缉,竟发现杀手是长得一模一样的自己。",
        "cover": "./133.jpg",
        "url": "./videos/video-0583.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "混出新高度",
        "year": "2021",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧,运动",
        "tags": [
            "街头文化",
            "梦想逆袭",
            "种族多元",
            "热血喜剧",
            "喜剧",
            "运动"
        ],
        "line": "巴黎郊区一群移民后代组建街头篮球杂技队,要用“野路子”打进正式锦标赛。",
        "cover": "./134.jpg",
        "url": "./videos/video-0584.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "全民情敌",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "爱情/喜剧",
        "tags": [
            "反套路",
            "约会顾问",
            "直男改造",
            "直播",
            "女性觉醒",
            "爱情"
        ],
        "line": "顶级约会顾问开直播教直男追女神,却意外被全国女性评为“头号公敌”,而他的下一个客户,是他自己的女儿。",
        "cover": "./135.jpg",
        "url": "./videos/video-0585.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "爷爷(韩国电影)",
        "year": "2012",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "祖孙",
            "慰安妇",
            "历史伤痕",
            "和解",
            "剧情",
            "家庭"
        ],
        "line": "叛逆孙子在整理遗物时,发现死去的爷爷竟是一份日军慰安妇受害者的名册保管人。",
        "cover": "./136.jpg",
        "url": "./videos/video-0586.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "慈禧秘密生活",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "历史虚构",
        "tags": [
            "宫廷密闻",
            "权谋",
            "女性视角",
            "历史虚构"
        ],
        "line": "从宫女到太后,本片虚构了慈禧年轻时一场没有被记载的跨国恋情,及其如何影响了她后来的铁腕政治。",
        "cover": "./137.jpg",
        "url": "./videos/video-0587.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "非常背叛",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑、犯罪、伦理",
        "tags": [
            "全员恶人",
            "高智商犯罪",
            "婚姻骗局",
            "反转再反转",
            "悬疑",
            "犯罪"
        ],
        "line": "一场“交换杀人”的游戏在三个绝望主妇之间展开,她们要杀掉对方的丈夫,拥有完美的不在场证明。",
        "cover": "./138.jpg",
        "url": "./videos/video-0588.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "木乃伊魔咒",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/冒险",
        "tags": [
            "考古",
            "诅咒",
            "超自然",
            "埃及",
            "恐怖",
            "冒险"
        ],
        "line": "一支考古队打开千年石棺,却唤醒了能将活人瞬间风干的远古诅咒。",
        "cover": "./139.jpg",
        "url": "./videos/video-0589.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "艳遇比赛2",
        "year": "2026",
        "region": "泰国",
        "type": "电影",
        "genre": "爱情",
        "tags": [
            "旅行",
            "竞赛",
            "网红",
            "反转",
            "爱情"
        ],
        "line": "六个网红在普吉岛参加“一夜情锦标赛”,胜者奖金百万,却不知道所有艳遇对象全是演员。",
        "cover": "./140.jpg",
        "url": "./videos/video-0590.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "春残粤语",
        "year": "1978",
        "region": "香港",
        "type": "电影",
        "genre": "剧情,爱情,文艺",
        "tags": [
            "粤语片",
            "怀旧",
            "遗憾",
            "情感纠葛",
            "时代变迁",
            "剧情"
        ],
        "line": "1970年代香港,一对恋人因战乱失散,重逢时却已各自有了家庭,只能用残破的粤语小调互诉衷肠。",
        "cover": "./141.jpg",
        "url": "./videos/video-0591.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "超级小淘气",
        "year": "1995",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,家庭",
        "tags": [
            "萌娃",
            "整蛊",
            "冒险",
            "搞笑",
            "喜剧",
            "家庭"
        ],
        "line": "五岁萌娃为了阻止妈妈再婚,联手邻居宠物展开了一场笑料百出的捣蛋计划。",
        "cover": "./142.jpg",
        "url": "./videos/video-0592.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "小马鞭",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/运动",
        "tags": [
            "草原",
            "儿童",
            "马术",
            "成长",
            "剧情",
            "家庭"
        ],
        "line": "草原男孩为了不让父亲卖掉心爱的小马,偷偷报名参加马术比赛,却发现自己的对手是全盟最快的“神驹”。",
        "cover": "./143.jpg",
        "url": "./videos/video-0593.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "爱情无全顺",
        "year": "2024",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "爱情/校园/奇幻",
        "tags": [
            "学渣逆袭",
            "平行选择",
            "甜蜜轻喜",
            "爱情",
            "校园",
            "奇幻"
        ],
        "line": "成绩倒数第一的女大学生意外获得“人生重选器”,每按一次就能体验和不同男神恋爱的平行世界。",
        "cover": "./144.jpg",
        "url": "./videos/video-0594.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "真假公主-安娜塔西亚",
        "year": "2025",
        "region": "俄罗斯/美国",
        "type": "动画电影",
        "genre": "动画奇幻",
        "tags": [
            "公主",
            "冒险",
            "身份疑云",
            "音乐剧",
            "历史改编",
            "动画奇幻"
        ],
        "line": "一百年后,一个自称安娜塔西亚的女孩出现在圣彼得堡,但真正的公主早已被AI复刻成了数字幽灵。",
        "cover": "./145.jpg",
        "url": "./videos/video-0595.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "宁静的清晨",
        "year": "2025",
        "region": "法国/德国",
        "type": "电影",
        "genre": "悬疑,科幻,哲学",
        "tags": [
            "时间循环",
            "养老院",
            "阿尔茨海默",
            "烧脑",
            "悬疑",
            "科幻"
        ],
        "line": "一家阿尔茨海默症疗养院里,每天早晨六点,所有老人都会集体“重置”为同一天早晨的记忆。",
        "cover": "./146.jpg",
        "url": "./videos/video-0596.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "一夜爱情",
        "year": "2022",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "一夜情",
            "宿命",
            "错过",
            "都市",
            "爱情",
            "剧情"
        ],
        "line": "分手十周年的夜晚,一对昔日恋人在不同城市的出租车上,同时向司机讲述着同一个关于“那一夜”的谎言与真相。",
        "cover": "./147.jpg",
        "url": "./videos/video-0597.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "千方百计觅封侯",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装,权谋,喜剧",
        "tags": [
            "科举",
            "寒门子弟",
            "扮猪吃虎",
            "朝堂风云",
            "古装",
            "权谋"
        ],
        "line": "穷书生进京赶考路上救了钦差大臣,却被误认为勋贵家公子,被迫开启双重身份科举之路。",
        "cover": "./148.jpg",
        "url": "./videos/video-0598.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "爱我敢不敢",
        "year": "2003",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,爱情",
        "tags": [
            "经典",
            "法式浪漫",
            "游戏",
            "虐恋",
            "悲剧",
            "剧情"
        ],
        "line": "两个孩子因为一个“敢不敢”的铁盒子游戏,赌上了此后几十年的婚姻、家庭乃至生命,却始终不敢说出那句“我爱你”。",
        "cover": "./149.jpg",
        "url": "./videos/video-0599.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "半妖的夜叉姬第一季",
        "year": "2020",
        "region": "日本",
        "type": "动画剧集",
        "genre": "奇幻,冒险,战斗",
        "tags": [
            "续作",
            "犬夜叉",
            "女儿们",
            "妖怪",
            "奇幻",
            "冒险"
        ],
        "line": "犬夜叉与杀生丸的女儿们意外穿越时空,为了找回失去的记忆而踏上战国冒险之旅。",
        "cover": "./150.jpg",
        "url": "./videos/video-0600.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "造物者",
        "year": "2023",
        "region": "美国/英国",
        "type": "电影",
        "genre": "科幻,剧情,惊悚",
        "tags": [
            "AI",
            "视觉美学",
            "战争",
            "伦理",
            "科幻",
            "剧情"
        ],
        "line": "在人类与AI的战争中,一名特种兵奉命去摧毁“造物者”——那个看起来只有六岁的AI小女孩。",
        "cover": "./1.jpg",
        "url": "./videos/video-0601.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "十三条命",
        "year": "2022",
        "region": "泰国/美国",
        "type": "电影",
        "genre": "传记灾难",
        "tags": [
            "真实事件",
            "洞穴救援",
            "催泪",
            "人性光辉",
            "国际合作",
            "传记灾难"
        ],
        "line": "改编自2018年泰国睡美人洞救援事件,来自全球的志愿者和救援人员,必须与暴雨和死亡赛跑,救出被困的13个孩子。",
        "cover": "./2.jpg",
        "url": "./videos/video-0602.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "毒液2",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "动作,科幻,惊悚",
        "tags": [
            "共生体",
            "反英雄",
            "屠杀",
            "外星生命",
            "嘴炮CP",
            "动作"
        ],
        "line": "外星共生体毒液与宿主埃迪迎来最强对手“屠杀”,一场红黑相争的共生体内战在城市上空爆发。",
        "cover": "./3.jpg",
        "url": "./videos/video-0603.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "井盖儿",
        "year": "2022",
        "region": "中国",
        "type": "电影",
        "genre": "悬疑犯罪",
        "tags": [
            "小成本",
            "封闭空间",
            "智力游戏",
            "社会寓言",
            "悬疑犯罪"
        ],
        "line": "一个雨夜,七个人先后掉进同一个没有盖子的窨井,发现彼此都是多年前同一桩冤案的关联者。",
        "cover": "./4.jpg",
        "url": "./videos/video-0604.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "苹果恋爱多",
        "year": "2018",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "爱情/喜剧",
        "tags": [
            "苹果之乡",
            "城乡结合",
            "反差萌",
            "爱情",
            "喜剧"
        ],
        "line": "纽约米其林餐厅的华裔主厨回到陕西农村老家,发现自己被指腹为婚的对象,是一个满身尘土但心灵手巧的种苹果姑娘。",
        "cover": "./5.jpg",
        "url": "./videos/video-0605.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "霸权长存",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻/惊悚/悬疑",
        "tags": [
            "脑机接口",
            "意识上传",
            "数字独裁",
            "反乌托邦",
            "烧脑",
            "科幻"
        ],
        "line": "一家科技公司推出了“意识永生”服务,但第一批用户发现,他们的身体还在动,而且只听命于一个神秘声音。",
        "cover": "./6.jpg",
        "url": "./videos/video-0606.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "禽兽",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪/惊悚/剧情",
        "tags": [
            "连环杀手",
            "刑警",
            "反转",
            "人性黑暗",
            "犯罪",
            "惊悚"
        ],
        "line": "一个老刑警追捕连环杀手追了十五年,最后发现杀手是他亲手带大的徒弟。",
        "cover": "./7.jpg",
        "url": "./videos/video-0607.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "甜蜜家园2",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "惊悚,怪物,剧情",
        "tags": [
            "奈飞",
            "漫画改编",
            "欲望怪物",
            "末日生存",
            "人性",
            "惊悚"
        ],
        "line": "第一季幸存者离开绿色家园公寓后,发现整个朝鲜半岛已沦为怪物的狩猎场,而欲望是人类最后的武器。",
        "cover": "./8.jpg",
        "url": "./videos/video-0608.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "开心超人联盟之奇幻谜瑞岛",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动画,喜剧,科幻",
        "tags": [
            "国产动画",
            "冒险",
            "搞笑",
            "团队",
            "动画",
            "喜剧"
        ],
        "line": "开心超人们接到求救信号前往谜瑞岛,却发现岛上的时间每六小时就会重置一次。",
        "cover": "./9.jpg",
        "url": "./videos/video-0609.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "布伦德的摇篮曲",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "恐怖,惊悚,民俗",
        "tags": [
            "都市传说",
            "童谣",
            "诅咒",
            "超自然",
            "恐怖",
            "惊悚"
        ],
        "line": "一名音乐治疗师为一所孤儿院的孩子录制摇篮曲,却唤醒了沉睡百年的恶灵。",
        "cover": "./10.jpg",
        "url": "./videos/video-0610.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "茱莉小姐",
        "year": "2026",
        "region": "瑞典",
        "type": "电影",
        "genre": "剧情心理",
        "tags": [
            "阶级",
            "性别权力",
            "节日之夜",
            "剧情心理"
        ],
        "line": "仲夏节之夜,一位贵族小姐与父亲的男仆在厨房玩了一场危险的“权力交换”游戏,彻底改变两人命运。",
        "cover": "./11.jpg",
        "url": "./videos/video-0611.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "亲爱的亚当",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻/悬疑/伦理",
        "tags": [
            "克隆人",
            "身份认同",
            "伦理",
            "基因实验",
            "人造人",
            "科幻"
        ],
        "line": "亚当是富豪的完美克隆体,但他发现“父亲”只把他当作心脏备用零件来培养。",
        "cover": "./12.jpg",
        "url": "./videos/video-0612.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "红翼行动",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "战争,动作,历史",
        "tags": [
            "海豹突击队",
            "阿富汗",
            "真实事件",
            "孤胆",
            "绝境求生",
            "战争"
        ],
        "line": "四名海豹侦察兵被塔利班围困,无线电传来撤退命令时,他们选择了留下。",
        "cover": "./13.jpg",
        "url": "./videos/video-0613.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "鬼校亡友",
        "year": "2014",
        "region": "泰国",
        "type": "剧集",
        "genre": "恐怖,惊悚,校园",
        "tags": [
            "校园怪谈",
            "报应",
            "单元剧",
            "恐怖",
            "惊悚",
            "校园"
        ],
        "line": "每个深夜留校的学生都会遇到怪事,因为那所废弃教学楼里的“老友”正在点名。",
        "cover": "./14.jpg",
        "url": "./videos/video-0614.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "无名小姐",
        "year": "2027",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑/犯罪",
        "tags": [
            "身份互换",
            "复仇",
            "替身",
            "伦理",
            "悬疑",
            "犯罪"
        ],
        "line": "酒店女佣意外长成失踪千金小姐的模样,被豪门请回家,却发现自己正在一步步变成那个失踪的人。",
        "cover": "./15.jpg",
        "url": "./videos/video-0615.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "大人物2007",
        "year": "2007",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/犯罪/黑色幽默",
        "tags": [
            "底层逆袭",
            "黑色幽默",
            "官商勾结",
            "小人物悲剧",
            "时代烙印",
            "剧情"
        ],
        "line": "一个被拆了煎饼摊的退伍老兵,穿上一身借来的假名牌,闯入一场全是大人物的富豪慈善晚宴讨说法。",
        "cover": "./16.jpg",
        "url": "./videos/video-0616.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "狂野目标",
        "year": "2010",
        "region": "英国/法国",
        "type": "电影",
        "genre": "动作/喜剧",
        "tags": [
            "杀手",
            "黑帮",
            "乌龙",
            "英式幽默",
            "动作",
            "喜剧"
        ],
        "line": "顶级杀手接到任务要杀一个女骗子,结果两人互相爱上了对方,并引来整个欧洲杀手圈追杀。",
        "cover": "./17.jpg",
        "url": "./videos/video-0617.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "功夫王之萌虎上山预告片",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,动作,动画",
        "tags": [
            "萌宠",
            "功夫",
            "预告片",
            "反转",
            "养成",
            "喜剧"
        ],
        "line": "一只毫无武功的胖虎崽误吞武林秘籍,被师父逼着拍出一支“最强招生预告片”。",
        "cover": "./18.jpg",
        "url": "./videos/video-0618.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "火车司机日记",
        "year": "2024",
        "region": "塞尔维亚",
        "type": "电影",
        "genre": "剧情黑色幽默",
        "tags": [
            "火车",
            "司机",
            "创伤",
            "传承",
            "荒诞",
            "剧情黑色幽默"
        ],
        "line": "一个菜鸟火车司机总在铁轨上遇到自杀者,他的导师教他“碾过去就习惯了”,直到他自己也成了悲剧的一部分。",
        "cover": "./19.jpg",
        "url": "./videos/video-0619.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "我把忠诚献给你",
        "year": "2028",
        "region": "中国大陆",
        "type": "电影",
        "genre": "谍战/悬疑/历史",
        "tags": [
            "双面间谍",
            "民国",
            "身份认同",
            "罗生门",
            "谍战",
            "悬疑"
        ],
        "line": "1943年的上海,一名代号“梧桐”的中共地下党员被日军抓获,他招供了,但招供的内容让三方势力都陷入了恐慌。",
        "cover": "./20.jpg",
        "url": "./videos/video-0620.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "调教你处男",
        "year": "2024",
        "region": "香港",
        "type": "电影",
        "genre": "爱情,喜剧",
        "tags": [
            "性喜剧",
            "成长",
            "温情",
            "爱情",
            "喜剧"
        ],
        "line": "为了帮28岁的死党摆脱处男之身,一群损友制定了“007特训计划”,却在过程中逐渐揭开了他守身如玉的真实原因。",
        "cover": "./21.jpg",
        "url": "./videos/video-0621.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "黑蟹行动:无尽寒冬",
        "year": "2022",
        "region": "瑞典",
        "type": "电影",
        "genre": "动作,战争,惊悚",
        "tags": [
            "末世",
            "极地",
            "军事行动",
            "女性主角",
            "生存",
            "动作"
        ],
        "line": "末日寒冬中,女科学家必须护送神秘包裹穿越冰封海面,而包裹里是她被改造的女儿。",
        "cover": "./22.jpg",
        "url": "./videos/video-0622.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "著魔的国境",
        "year": "2023",
        "region": "波兰/白俄罗斯",
        "type": "电影",
        "genre": "惊悚/剧情/战争",
        "tags": [
            "边境",
            "难民危机",
            "超自然",
            "政治寓言",
            "压抑",
            "惊悚"
        ],
        "line": "波兰-白俄罗斯边境的森林里,边防士兵和被困难民同时开始看到同一个中世纪“疫病骑士”的幽灵在林中漫步。",
        "cover": "./23.jpg",
        "url": "./videos/video-0623.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "放·逐",
        "year": "2024",
        "region": "香港",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "枪战",
            "兄弟情",
            "澳门",
            "杜琪峰风格",
            "宿命",
            "动作"
        ],
        "line": "五个杀手在澳门重聚,约定干完最后一票就金盆洗手,却发现“最后一票”是杀掉对方。",
        "cover": "./24.jpg",
        "url": "./videos/video-0624.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "百分百感觉",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情,喜剧,科幻",
        "tags": [
            "感官同步",
            "试爱体验",
            "都市童话",
            "爱情",
            "喜剧",
            "科幻"
        ],
        "line": "一款“情感共享”APP让用户能同步暗恋对象的五感,社恐女孩成为内侧用户后,发现暗恋的学长浑身都是痛觉。",
        "cover": "./25.jpg",
        "url": "./videos/video-0625.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "白天与黑夜",
        "year": "2027",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑/奇幻",
        "tags": [
            "人格分裂",
            "检察官",
            "连环杀人",
            "觉醒",
            "悬疑",
            "奇幻"
        ],
        "line": "拥有28重人格的检察官,白天是正义的守护者,夜晚身体却变成连环杀手,直到两个“他”在法庭上相遇。",
        "cover": "./26.jpg",
        "url": "./videos/video-0626.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "洪门斗恶者",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作/犯罪/悬疑",
        "tags": [
            "民国",
            "帮派",
            "连环杀手",
            "卧底",
            "拳拳到肉",
            "动作"
        ],
        "line": "1928年上海滩,洪门大佬遇刺,一名戏子卧底发现杀手竟是门中“自己人”的灵魂夺舍。",
        "cover": "./27.jpg",
        "url": "./videos/video-0627.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "黑执事:寄宿学校篇",
        "year": "2024",
        "region": "日本",
        "type": "电视剧 (动画)",
        "genre": "悬疑,奇幻,校园",
        "tags": [
            "贵族学校",
            "谜案调查",
            "主仆",
            "悬疑",
            "奇幻",
            "校园"
        ],
        "line": "为了调查名门寄宿学校发生的连续失踪事件,塞巴斯蒂安和夏尔伪装成师生潜入,却发现学校本身就是一个活物。",
        "cover": "./28.jpg",
        "url": "./videos/video-0628.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "游戏的法则,人间狩猎",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧 (12集)",
        "genre": "悬疑,生存游戏,惊悚",
        "tags": [
            "高智商博弈",
            "大逃杀",
            "心理战",
            "背叛联盟",
            "悬疑",
            "生存游戏"
        ],
        "line": "十位顶尖玩家受邀参加一场名为“狩猎”的真人秀,却发现每次游戏淘汰的不是积分,而是玩家的真实寿命。",
        "cover": "./29.jpg",
        "url": "./videos/video-0629.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "禁断动画9",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖,惊悚,伪纪录片",
        "tags": [
            "都市传说",
            "灵异",
            "录像带",
            "短篇集",
            "咒怨",
            "恐怖"
        ],
        "line": "第九部“禁断动画”合集,收录了被诅咒的《镜像人》、导致全家失踪的《最后晚餐》等五段致命影像。",
        "cover": "./30.jpg",
        "url": "./videos/video-0630.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "愿此刻永恒",
        "year": "2003",
        "region": "日本",
        "type": "动画",
        "genre": "爱情/催泪",
        "tags": [
            "车祸",
            "失忆",
            "三角恋",
            "纯爱",
            "爱情",
            "催泪"
        ],
        "line": "青梅竹马的女友因车祸昏迷三年后醒来,记忆停留在高中时代,完全不记得已经与她订婚的男主。",
        "cover": "./31.jpg",
        "url": "./videos/video-0631.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "黛洛维夫人",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "剧情、文艺、心理",
        "tags": [
            "伍尔夫",
            "意识流",
            "女性中年危机",
            "双时空",
            "剧情",
            "文艺"
        ],
        "line": "她要亲自去为派对买花,却在这一天的伦敦街头,遇到了死去二十年的初恋。",
        "cover": "./32.jpg",
        "url": "./videos/video-0632.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "画家的一天",
        "year": "2024",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情/艺术",
        "tags": [
            "文艺复兴",
            "传记",
            "创作之苦",
            "剧情",
            "艺术"
        ],
        "line": "壁画《最后的晚餐》绘制期间,达芬奇因为“画不出犹大的脸”,在教堂脚手架上度过了他最焦虑的一天。",
        "cover": "./33.jpg",
        "url": "./videos/video-0633.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "趟过女人河的男人",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/家庭",
        "tags": [
            "命运多舛",
            "情感纠葛",
            "乡土",
            "时代变迁",
            "剧情",
            "家庭"
        ],
        "line": "一个沉默寡言的摆渡人,三十年里先后将五位命运各异的女人送过河,却始终无法渡过自己的情劫。",
        "cover": "./34.jpg",
        "url": "./videos/video-0634.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "我的主场",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情,运动,青春",
        "tags": [
            "电竞题材",
            "职业选手",
            "少年热血",
            "团队成长",
            "剧情",
            "运动"
        ],
        "line": "天才电竞少年因手伤退役,回到小县城做起了网管,却偶然发现网吧里的清洁工大妈曾是十年前《星际争霸》的全国冠军。",
        "cover": "./35.jpg",
        "url": "./videos/video-0635.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "打击惊魂",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "惊悚",
        "tags": [
            "特工",
            "反杀",
            "密室",
            "惊悚"
        ],
        "line": "一名退休特工被绑在废弃安全屋里,前来审讯他的五个新人,一个接一个死去。",
        "cover": "./36.jpg",
        "url": "./videos/video-0636.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "无辜的游荡",
        "year": "2019",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/文艺",
        "tags": [
            "流浪汉",
            "巴黎",
            "城市观察",
            "存在主义",
            "无声",
            "剧情"
        ],
        "line": "一个从不说话的流浪汉在巴黎街头游荡,他的沉默吸引了所有人向他倾诉秘密。",
        "cover": "./37.jpg",
        "url": "./videos/video-0637.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "矿镇滑板少年",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,运动",
        "tags": [
            "矿区",
            "滑板",
            "梦想",
            "底层少年",
            "剧情",
            "运动"
        ],
        "line": "资源枯竭的煤镇上,一个捡破烂的少年用废弃钢管和旧木板,造出了第一块滑板。",
        "cover": "./38.jpg",
        "url": "./videos/video-0638.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "熊家餐馆第四季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情,喜剧,美食",
        "tags": [
            "厨房",
            "焦虑",
            "扩张",
            "剧情",
            "喜剧",
            "美食"
        ],
        "line": "熊家生意爆火,但卡米在压力下精神崩溃,他必须在彻底疯掉前为餐厅找到一位CEO接替自己。",
        "cover": "./39.jpg",
        "url": "./videos/video-0639.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "亮演人生",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情,喜剧",
        "tags": [
            "剧团",
            "生死",
            "温情",
            "剧情",
            "喜剧"
        ],
        "line": "一个失败的剧团误接了一场“告别式演出”,从此专门为死者上演人生的最后一场戏。",
        "cover": "./40.jpg",
        "url": "./videos/video-0640.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "天地拳王",
        "year": "2024",
        "region": "香港",
        "type": "电影",
        "genre": "动作,剧情,运动",
        "tags": [
            "拳击",
            "师徒传承",
            "港产动作片复兴",
            "小人物",
            "动作",
            "剧情"
        ],
        "line": "过气拳王在茶餐厅打工时,捡到一个被黑帮追杀的哑巴孤儿,徒弟的“心”唤醒了师父的“拳”。",
        "cover": "./41.jpg",
        "url": "./videos/video-0641.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "拜托了!别宠我",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装,甜宠,喜剧",
        "tags": [
            "穿越逆袭",
            "太后助攻",
            "冤家路窄",
            "沙雕互怼",
            "古装",
            "甜宠"
        ],
        "line": "社畜穿越成冷宫废妃,本想躺平却意外被暴君和太后同时盯上。",
        "cover": "./42.jpg",
        "url": "./videos/video-0642.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "皮帕李的私人生活",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "心理咨询师",
            "秘密",
            "小镇",
            "伦理",
            "反转",
            "剧情"
        ],
        "line": "小镇知名心理咨询师皮帕·李突然失踪,她的录音笔记暴露了所有病人的隐私,包括她自己的致命谎言。",
        "cover": "./43.jpg",
        "url": "./videos/video-0643.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "曲棍球队的音乐剧",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧,歌舞,运动",
        "tags": [
            "热血",
            "逆袭",
            "荒诞",
            "青春",
            "励志",
            "喜剧"
        ],
        "line": "一支垫底高中曲棍球队为保住社团经费,被迫伪装成音乐剧社团,结果却意外杀入全国赛。",
        "cover": "./44.jpg",
        "url": "./videos/video-0644.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "美人鱼第一季",
        "year": "2025",
        "region": "澳大利亚",
        "type": "剧集",
        "genre": "奇幻,冒险,青春",
        "tags": [
            "美人鱼",
            "海洋",
            "环保",
            "青少年",
            "成长",
            "奇幻"
        ],
        "line": "三个少女在废弃灯塔下变身美人鱼,却发现这股力量正将她们的身体慢慢变成泡沫。",
        "cover": "./45.jpg",
        "url": "./videos/video-0645.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "眨眼廿年",
        "year": "2026",
        "region": "中国",
        "type": "电影",
        "genre": "剧情/奇幻",
        "tags": [
            "时间回溯",
            "青春遗憾",
            "时空诊所",
            "剧情",
            "奇幻"
        ],
        "line": "一次眨眼让四十岁的人生输家回到二十年前的毕业典礼,他却发现修正过去需要抵押未来的生命。",
        "cover": "./46.jpg",
        "url": "./videos/video-0646.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "牵牛的夏天",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情/青春",
        "tags": [
            "乡村",
            "治愈",
            "青梅竹马",
            "爱情",
            "青春"
        ],
        "line": "在城市打拼失败的男孩回到山村,发现幼时总欺负他的“恶霸”女孩,一直在等他一起种活全村最老的牵牛花。",
        "cover": "./47.jpg",
        "url": "./videos/video-0647.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "生化危机:惩罚",
        "year": "2012",
        "region": "美国/德国",
        "type": "电影",
        "genre": "动作/科幻/恐怖",
        "tags": [
            "丧尸",
            "保护伞公司",
            "女杀手",
            "动作",
            "科幻",
            "恐怖"
        ],
        "line": "爱丽丝被关进保护伞公司地下模拟监狱,每次逃脱都发现之前的记忆全是谎言。",
        "cover": "./48.jpg",
        "url": "./videos/video-0648.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "天才宝弟的狗日子",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "家庭/喜剧",
        "tags": [
            "神童",
            "二胎家庭",
            "童年烦恼",
            "姐弟关系",
            "温馨搞笑",
            "家庭"
        ],
        "line": "一个智商145的七岁小孩唯一解不出的难题是:怎么让姐姐不讨厌自己。",
        "cover": "./49.jpg",
        "url": "./videos/video-0649.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "阿尔法 (2019年电影)",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/悬疑",
        "tags": [
            "人工智能",
            "反乌托邦",
            "觉醒",
            "科幻",
            "悬疑"
        ],
        "line": "在一座由全能AI“阿尔法”统治的完美城市里,一名负责清除BUG的工程师偶然发现了自己身世的秘密。",
        "cover": "./50.jpg",
        "url": "./videos/video-0650.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "龙王子第一季",
        "year": "2024",
        "region": "美国",
        "type": "动画剧集",
        "genre": "奇幻/冒险",
        "tags": [
            "龙",
            "魔法",
            "双男主",
            "史诗",
            "奇幻",
            "冒险"
        ],
        "line": "人类王子与精灵刺客被迫联手,护送最后一枚龙蛋穿越敌对的魔法大陆。",
        "cover": "./51.jpg",
        "url": "./videos/video-0651.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "少年可期",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/家庭/音乐",
        "tags": [
            "留守儿童",
            "乡村教师",
            "合唱团",
            "剧情",
            "家庭",
            "音乐"
        ],
        "line": "深圳的叛逆少年被送回贵州老家,为了凑够“父母关爱积分”回城,他必须加入村里由文盲老头组建的“菜市场合唱团”。",
        "cover": "./52.jpg",
        "url": "./videos/video-0652.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "迷情追杀",
        "year": "2026",
        "region": "美国/法国",
        "type": "电影",
        "genre": "惊悚/爱情",
        "tags": [
            "蛇蝎美人",
            "公路追杀",
            "虐恋",
            "惊悚",
            "爱情"
        ],
        "line": "一位职业杀手接到任务要杀死自己前女友,却发现前女友现在也是一名杀手,且目标正是他。",
        "cover": "./53.jpg",
        "url": "./videos/video-0653.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "好邻居",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "惊悚,悬疑",
        "tags": [
            "公寓",
            "偷窥",
            "心理战",
            "短剧",
            "惊悚",
            "悬疑"
        ],
        "line": "独居女孩发现对面邻居每天都对着她的窗户微笑,但物业说那间房空置了三年。",
        "cover": "./54.jpg",
        "url": "./videos/video-0654.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "超速",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "飙车",
            "卧底",
            "复仇",
            "午夜狂飙",
            "兄弟情",
            "动作"
        ],
        "line": "为了替惨死的搭档报仇,一名卧底警察必须在午夜街头用一场必死的飙车赛引出幕后毒枭。",
        "cover": "./55.jpg",
        "url": "./videos/video-0655.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "壮士山河血",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史/战争",
        "tags": [
            "抗日",
            "铁血",
            "平民英雄",
            "历史",
            "战争"
        ],
        "line": "1938年,一支溃败的川军连队与一群躲避战乱的孤儿寡母,在黄河古道上携手阻击了一支日军机械化联队。",
        "cover": "./56.jpg",
        "url": "./videos/video-0656.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "记忆回放",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "科幻,悬疑",
        "tags": [
            "记忆植入",
            "身份认同",
            "近未来",
            "伦理困境",
            "反转",
            "科幻"
        ],
        "line": "一个女人接受亡夫的记忆植入后,开始梦见一起她从未经历过的谋杀。",
        "cover": "./57.jpg",
        "url": "./videos/video-0657.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "替身传奇乐翻天",
        "year": "2011",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧、动作、犯罪",
        "tags": [
            "山寨",
            "替身",
            "乌龙",
            "喜剧",
            "动作",
            "犯罪"
        ],
        "line": "一个跑龙套的替身演员,被黑帮大佬雇去扮演自己死去的老大。",
        "cover": "./58.jpg",
        "url": "./videos/video-0658.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "强梁霸道",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "黑帮",
            "卧底",
            "兄弟情",
            "肉搏",
            "宿命",
            "动作"
        ],
        "line": "社团最凶狠的打手因失忆忘记了自己的老大,而他的身体仍然记得杀人的每一个动作。",
        "cover": "./59.jpg",
        "url": "./videos/video-0659.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "爱的殉道",
        "year": "2019",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,爱情,历史",
        "tags": [
            "中世纪",
            "修女",
            "禁忌恋",
            "宗教审判",
            "悲剧",
            "剧情"
        ],
        "line": "中世纪修道院里,年轻修女与女画师相爱,被宗教法庭判处“火刑不焚体”,活活烧死后尸体却不燃。",
        "cover": "./60.jpg",
        "url": "./videos/video-0660.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "奇袭兵团",
        "year": "2025",
        "region": "美国/英国",
        "type": "电影",
        "genre": "战争/动作",
        "tags": [
            "二战",
            "特种作战",
            "真实事件改编",
            "小队作战",
            "战争",
            "动作"
        ],
        "line": "1944年诺曼底登陆前夜,一支由画家、会计、魔术师和逃兵组成的十人小队被空投到敌后,任务是让整个德军第六集团军“自己打自己”。",
        "cover": "./61.jpg",
        "url": "./videos/video-0661.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "猛鬼宿舍",
        "year": "2024",
        "region": "中国香港/马来西亚",
        "type": "电影",
        "genre": "恐怖/喜剧",
        "tags": [
            "大学宿舍",
            "鬼室友",
            "闹鬼",
            "黑色幽默",
            "驱魔",
            "恐怖"
        ],
        "line": "大学宿舍六人间,五个活人一个鬼,鬼不知道自己死了,人不敢告诉它。",
        "cover": "./62.jpg",
        "url": "./videos/video-0662.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "外星人电视第一季",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻、喜剧、悬疑",
        "tags": [
            "伪纪录片",
            "外星入侵",
            "媒体讽刺",
            "单元剧",
            "荒诞",
            "科幻"
        ],
        "line": "外星舰队抵达地球轨道,但它们不进攻,只做一件事:通过篡改全世界的电视信号来恶搞人类。",
        "cover": "./63.jpg",
        "url": "./videos/video-0663.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "奇迹:追逐彩虹",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "奇幻,家庭",
        "tags": [
            "彩虹尽头",
            "许愿冒险",
            "治愈系",
            "奇幻",
            "家庭"
        ],
        "line": "失明的小女孩听说彩虹尽头有许愿石,于是拉着恐高的哥哥踏上了一场看不见的追光之旅。",
        "cover": "./64.jpg",
        "url": "./videos/video-0664.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "小鞋子",
        "year": "1997",
        "region": "伊朗",
        "type": "电影",
        "genre": "剧情,家庭,儿童",
        "tags": [
            "贫困",
            "兄妹情",
            "奔跑",
            "童年",
            "催泪",
            "剧情"
        ],
        "line": "哥哥弄丢了妹妹唯一的上学鞋子,两人只能轮流穿同一双鞋去上学,为了给妹妹赢一双新鞋,哥哥去参加长跑比赛。",
        "cover": "./65.jpg",
        "url": "./videos/video-0665.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "宇宙海盗哈洛克",
        "year": "2013",
        "region": "日本",
        "type": "电影/动画",
        "genre": "科幻/动画/冒险",
        "tags": [
            "CG",
            "太空歌剧",
            "反英雄",
            "经典重启",
            "视觉奇观",
            "科幻"
        ],
        "line": "被流放的百年宇宙海盗,驾驶着幽灵船,向统治人类的高等文明宣战。",
        "cover": "./66.jpg",
        "url": "./videos/video-0666.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "小小的愿望",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情、家庭",
        "tags": [
            "临终",
            "亲情",
            "治愈",
            "和解",
            "自闭症",
            "剧情"
        ],
        "line": "患有绝症的单亲爸爸,为了帮自闭症儿子完成“交一个朋友”的心愿,开始伪造自己的社交账号。",
        "cover": "./67.jpg",
        "url": "./videos/video-0667.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "长发公主芭比",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动画/歌舞/奇幻",
        "tags": [
            "公主冒险",
            "自我认同",
            "魔法头发",
            "动画",
            "歌舞",
            "奇幻"
        ],
        "line": "拥有 30 米金色魔发的芭比,发现头发其实是封印外星文明的钥匙。",
        "cover": "./68.jpg",
        "url": "./videos/video-0668.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "回望长安",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史/剧情",
        "tags": [
            "唐代",
            "考古",
            "记忆",
            "历史",
            "剧情"
        ],
        "line": "一位老年失智的考古学家,唯一的清醒时刻是讲起他发掘的唐代墓葬。",
        "cover": "./69.jpg",
        "url": "./videos/video-0669.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "遇见卡帕纳",
        "year": "2027",
        "region": "印度",
        "type": "电影",
        "genre": "爱情,奇幻",
        "tags": [
            "前世今生",
            "灵魂伴侣",
            "恒河",
            "爱情",
            "奇幻"
        ],
        "line": "一名不相信爱情的程序员,在恒河边被一个神秘女子卡帕纳拉入了一场跨越数个世纪的轮回之旅。",
        "cover": "./70.jpg",
        "url": "./videos/video-0670.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "长夜绵绵",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚,悬疑",
        "tags": [
            "夜晚",
            "公寓",
            "邻里",
            "心理战",
            "惊悚",
            "悬疑"
        ],
        "line": "新搬进公寓的女人发现,每晚楼上都会响起脚步声,但她调查后得知,楼上那户人家已死五年。",
        "cover": "./71.jpg",
        "url": "./videos/video-0671.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "肉谱团",
        "year": "2026",
        "region": "中国香港/日本",
        "type": "电影",
        "genre": "动画,奇幻,冒险",
        "tags": [
            "美食",
            "江湖",
            "悬疑",
            "成人向",
            "动画",
            "奇幻"
        ],
        "line": "在一个以“食材稀有度”决定江湖地位的世界,落魄厨师为了复活爱人,必须烹饪出传说中的“龙之盛宴”。",
        "cover": "./72.jpg",
        "url": "./videos/video-0672.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "阴阳路十五之客似魂来",
        "year": "2005",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖/喜剧/奇幻",
        "tags": [
            "阴阳路",
            "鬼魂",
            "酒店",
            "报恩",
            "搞笑",
            "恐怖"
        ],
        "line": "老板开闹鬼旅馆,来的全是鬼客,但个个排队扫码支付,还把旅馆住成了网红店。",
        "cover": "./73.jpg",
        "url": "./videos/video-0673.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "北园寻金记",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "冒险,悬疑,家庭",
        "tags": [
            "儿童探险",
            "遗产谜题",
            "复古风",
            "冒险",
            "悬疑",
            "家庭"
        ],
        "line": "三个熊孩子拿着祖父留下的半张藏宝图,闯进了全城最恐怖的废弃北园游乐场。",
        "cover": "./74.jpg",
        "url": "./videos/video-0674.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "我的野蛮女友2",
        "year": "2010",
        "region": "中国/韩国",
        "type": "电影",
        "genre": "喜剧/爱情",
        "tags": [
            "野蛮女友续作",
            "中韩合拍",
            "女强男弱",
            "搞笑反转",
            "喜剧",
            "爱情"
        ],
        "line": "野蛮女友升级为人妻?这次倒霉的不再是牵牛,而是一个在劫难逃的“贱萌”设计师。",
        "cover": "./75.jpg",
        "url": "./videos/video-0675.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "黑道比酷",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧犯罪",
        "tags": [
            "黑帮",
            "时尚",
            "卧底",
            "恶搞",
            "喜剧犯罪"
        ],
        "line": "FBI菜鸟卧底黑帮家族,不靠武力,靠穿搭和品味征服老大,成为最“酷”的二把手。",
        "cover": "./76.jpg",
        "url": "./videos/video-0676.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "浴室春情",
        "year": "1999",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/情色/爱情",
        "tags": [
            "王家卫风格",
            "潮湿美学",
            "禁忌之恋",
            "旧楼记忆",
            "剧情",
            "情色"
        ],
        "line": "1997年前夕,一栋即将清拆的旧楼里,一个少年透过浴室气窗,看见了楼上女人的一生。",
        "cover": "./77.jpg",
        "url": "./videos/video-0677.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "鬼新娘1987粤语",
        "year": "1987",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖,爱情,奇幻",
        "tags": [
            "鬼新娘",
            "冥婚",
            "粤语经典",
            "老港鬼",
            "因果报应",
            "恐怖"
        ],
        "line": "富家公子无意间卷入一场冥婚,发现自己的梦中情人竟是一位等待复仇四十年的鬼新娘。",
        "cover": "./78.jpg",
        "url": "./videos/video-0678.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "宝贝大盗",
        "year": "2023",
        "region": "美国/英国",
        "type": "电影",
        "genre": "喜剧/犯罪",
        "tags": [
            "婴儿",
            "乌龙劫案",
            "笨贼",
            "温情",
            "喜剧",
            "犯罪"
        ],
        "line": "两个笨贼在抢劫银行时被迫接生了一名婴儿,此后他们带着婴儿逃亡,全城警察和黑帮都在追这对“爸爸奶爸”。",
        "cover": "./79.jpg",
        "url": "./videos/video-0679.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "怒剑啸狂沙国语",
        "year": "1991",
        "region": "中国香港",
        "type": "剧集",
        "genre": "武侠/古装",
        "tags": [
            "复仇",
            "大漠",
            "世家恩怨",
            "港剧",
            "武侠",
            "古装"
        ],
        "line": "大漠飞沙,一位被灭门的镖师遗孤背负血海深仇,在狂沙中练成怒剑,誓杀仇家三虎。",
        "cover": "./80.jpg",
        "url": "./videos/video-0680.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "今天你真好看",
        "year": "2027",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情,喜剧,职场",
        "tags": [
            "时尚",
            "主编",
            "穿搭",
            "姐弟恋",
            "治愈",
            "爱情"
        ],
        "line": "毒舌时尚杂志主编被迫和审美为负的程序员弟弟同居,两人打赌:90天内让他成为潮流icon。",
        "cover": "./81.jpg",
        "url": "./videos/video-0681.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "冰封战士",
        "year": "2018",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "动作/科幻",
        "tags": [
            "西伯利亚",
            "冷冻战士",
            "反英雄",
            "二战",
            "军事实验",
            "动作"
        ],
        "line": "二战中被冰冻的苏联超级战士在现代醒来,却发现祖国已经不存在了。",
        "cover": "./82.jpg",
        "url": "./videos/video-0682.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "为每个人",
        "year": "2024",
        "region": "中国内地",
        "type": "电影",
        "genre": "剧情/犯罪",
        "tags": [
            "现实主义",
            "社会议题",
            "小人物",
            "黑色幽默",
            "剧情",
            "犯罪"
        ],
        "line": "五个互不相识的普通人同时收到一个神秘任务:为所有人讨回公道。",
        "cover": "./83.jpg",
        "url": "./videos/video-0683.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "记忆暗线",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻悬疑",
        "tags": [
            "记忆",
            "反转",
            "硬科幻",
            "谋杀",
            "科幻悬疑"
        ],
        "line": "为了治疗失忆,他植入了芯片,却发现自己的记忆被人为删除过。",
        "cover": "./84.jpg",
        "url": "./videos/video-0684.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "开心告别派对",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,喜剧",
        "tags": [
            "临终关怀",
            "黑色幽默",
            "亲情",
            "安乐死",
            "派对",
            "剧情"
        ],
        "line": "身患绝症的老太太决定在生前举办自己的“告别派对”,并要求所有来宾只能笑,不许哭。",
        "cover": "./85.jpg",
        "url": "./videos/video-0685.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "水上乐园大屠杀",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "夏日青春",
            "血腥屠杀",
            "封闭空间",
            "滑梯陷阱",
            "B级片",
            "恐怖"
        ],
        "line": "一座废弃水上乐园的造浪池里,沉睡的化学变异食人鱼被唤醒,参加午夜派对的学生陷入血色狂欢。",
        "cover": "./86.jpg",
        "url": "./videos/video-0686.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "失踪事件之一",
        "year": "2026",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑,犯罪,惊悚",
        "tags": [
            "单元剧",
            "失踪人口",
            "社会派",
            "反转集",
            "悬疑",
            "犯罪"
        ],
        "line": "一个女孩失踪了,警方找到嫌疑人,但嫌疑人的不在场证明是——他当时在杀另一个人。",
        "cover": "./87.jpg",
        "url": "./videos/video-0687.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "城中大盗",
        "year": "2010",
        "region": "美国",
        "type": "电影",
        "genre": "犯罪,剧情,惊悚",
        "tags": [
            "波士顿",
            "银行劫案",
            "FBI",
            "道德困境",
            "犯罪",
            "剧情"
        ],
        "line": "一名职业劫匪在抢劫银行时挟持了女经理,却意外爱上了她,而FBI正在步步逼近。",
        "cover": "./88.jpg",
        "url": "./videos/video-0688.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "定军山",
        "year": "2026",
        "region": "中国",
        "type": "电影",
        "genre": "古装/战争/动作",
        "tags": [
            "三国",
            "戏曲改编",
            "老将出征",
            "冷兵器美学",
            "古装",
            "战争"
        ],
        "line": "三国蜀魏大战前夕,年迈的老将黄忠在定军山立下军令状,用一场斩夏侯的奇袭打破年龄与体力的诅咒。",
        "cover": "./89.jpg",
        "url": "./videos/video-0689.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "生命中的美好意外",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情、爱情、奇幻",
        "tags": [
            "蝴蝶效应",
            "平行时空",
            "催泪",
            "治愈",
            "剧情",
            "爱情"
        ],
        "line": "一场车祸让女主陷入平行时空,每次醒来都是不同的人生,但每次都会以不同方式爱上同一个人。",
        "cover": "./90.jpg",
        "url": "./videos/video-0690.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "天国之钥",
        "year": "2023",
        "region": "韩国",
        "type": "剧集",
        "genre": "奇幻,悬疑,宗教",
        "tags": [
            "天堂",
            "钥匙",
            "神父",
            "恶魔",
            "救赎",
            "奇幻"
        ],
        "line": "一位无神论神父获得了一把能打开“天堂之门”的钥匙,却发现天堂早已空无一人。",
        "cover": "./91.jpg",
        "url": "./videos/video-0691.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "黑色蛋糕",
        "year": "2023",
        "region": "美国",
        "type": "电视剧",
        "genre": "悬疑,犯罪,美食",
        "tags": [
            "甜品师",
            "冷案",
            "双重身份",
            "复仇",
            "悬疑",
            "犯罪"
        ],
        "line": "米其林甜品师白天做蛋糕,晚上杀人,而她的每一款蛋糕都在讲述一个被害者的故事。",
        "cover": "./92.jpg",
        "url": "./videos/video-0692.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "乌龙骑士团",
        "year": "2021",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧、奇幻、冒险",
        "tags": [
            "伪纪录片",
            "亚瑟王恶搞",
            "业余骑士",
            "荒唐任务",
            "喜剧",
            "奇幻"
        ],
        "line": "五个沉迷桌游的极客,意外被湖中仙女认作圆桌骑士后代,去完成一场荒谬的屠龙任务。",
        "cover": "./93.jpg",
        "url": "./videos/video-0693.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "这是他!是的!是的!",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧/荒诞/黑色幽默",
        "tags": [
            "替身疑云",
            "社交网络狂欢",
            "存在主义",
            "法国新喜剧",
            "喜剧",
            "荒诞"
        ],
        "line": "一个社恐社畜被全网误认为是潜逃三十年的国际大盗,而他决定将错就错享受人生。",
        "cover": "./94.jpg",
        "url": "./videos/video-0694.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "罗宾七侠",
        "year": "2020",
        "region": "美国",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "女性盗贼",
            "劫富济贫",
            "高智商犯罪 女性群像",
            "高智商犯罪",
            "劫富济贫",
            "黑客大战"
        ],
        "line": "七名被科技巨头压榨的女员工组成黑客团队,计划在双十一之夜盗空公司金库。",
        "cover": "./95.jpg",
        "url": "./videos/video-0695.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "永远的守望",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭/伦理",
        "tags": [
            "阿尔茨海默症",
            "母女关系",
            "时间流逝",
            "催泪",
            "生活流",
            "家庭"
        ],
        "line": "母亲忘记了全世界,甚至忘记了如何恨我,但她每天都会在村口等一辆永远不会来的婚车。",
        "cover": "./96.jpg",
        "url": "./videos/video-0696.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "独白",
        "year": "2022",
        "region": "中国大陆",
        "type": "短片",
        "genre": "心理/实验",
        "tags": [
            "独角戏",
            "AI换脸",
            "人格分裂",
            "镜子",
            "10分钟长镜头",
            "心理"
        ],
        "line": "一个被困在智能化妆镜里的女人,每天对镜扮演七个不同的“我”,直到镜子叫出了她真实的名字。",
        "cover": "./97.jpg",
        "url": "./videos/video-0697.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "镜面奇情",
        "year": "2027",
        "region": "中国香港",
        "type": "电影 悬疑,爱情,惊悚",
        "genre": "镜面,替身,人格分裂,凶宅",
        "tags": [
            "每一个镜子背后",
            "都藏着一个渴望替代你的灵魂。",
            "镜面",
            "替身",
            "人格分裂",
            "凶宅"
        ],
        "line": "丈夫病逝后,妻子发现家中每一面镜子都能映照出不同男人的脸。",
        "cover": "./98.jpg",
        "url": "./videos/video-0698.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "傲气雄鹰",
        "year": "2025",
        "region": "中国香港",
        "type": "剧集",
        "genre": "动作/剧情/运动",
        "tags": [
            "飞行",
            "热血",
            "兄弟情",
            "励志",
            "动作",
            "剧情"
        ],
        "line": "几名问题学员在魔鬼教官的调教下,争夺仅有的两个“雄鹰突击队”名额。",
        "cover": "./99.jpg",
        "url": "./videos/video-0699.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "河水冲洗我",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "乡村",
            "父子",
            "救赎",
            "犯罪与忏悔",
            "剧情",
            "家庭"
        ],
        "line": "二十年前,父亲将杀人罪名推给儿子;二十年后,出狱的儿子推着瘫痪的父亲沿河而下,去真正的死者坟前下跪。",
        "cover": "./100.jpg",
        "url": "./videos/video-0700.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "警察故事",
        "year": "2026",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "警匪,悬疑,动作",
        "tags": [
            "重启",
            "单元剧",
            "写实",
            "人性",
            "职场",
            "警匪"
        ],
        "line": "不是那个陈家驹,这是一个关于香港重案组普通警员们在黑暴与白中间挣扎求生的群像故事。",
        "cover": "./101.jpg",
        "url": "./videos/video-0701.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "舢舨",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情、历史、家庭",
        "tags": [
            "渔民",
            "戒严时期",
            "父子情",
            "剧情",
            "历史",
            "家庭"
        ],
        "line": "一艘手工打造的舢舨船,承载了祖父被枪决的秘密和父亲四十年不敢靠岸的人生。",
        "cover": "./102.jpg",
        "url": "./videos/video-0702.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "桃花源怪谈",
        "year": "2025",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "恐怖,悬疑,惊悚",
        "tags": [
            "民俗恐怖",
            "克苏鲁",
            "村庄",
            "解谜",
            "恐怖",
            "悬疑"
        ],
        "line": "一队驴友闯入与世隔绝的村庄,发现“桃花源”的真相是一场上古献祭。",
        "cover": "./103.jpg",
        "url": "./videos/video-0703.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "权宠刁妃",
        "year": "2021",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装/甜宠",
        "tags": [
            "穿越",
            "女强",
            "宫斗爽剧",
            "古装",
            "甜宠"
        ],
        "line": "现代女总裁穿越成即将被处死的冷宫废妃,第二天她就收购了后宫最大的情报网,让皇帝跪着来见她。",
        "cover": "./104.jpg",
        "url": "./videos/video-0704.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "心灵的深夜对话",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情,治愈",
        "tags": [
            "深夜电台",
            "陌生人故事",
            "人生解忧",
            "剧情",
            "治愈"
        ],
        "line": "一档深夜电台,三位主持人用“不说教只倾听”的方式,接住每一个破碎的灵魂。",
        "cover": "./105.jpg",
        "url": "./videos/video-0705.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "情深深雨濛濛",
        "year": "2001",
        "region": "中国大陆/中国台湾",
        "type": "电视剧",
        "genre": "剧情,爱情,年代",
        "tags": [
            "琼瑶",
            "民国",
            "虐恋",
            "经典重播",
            "剧情",
            "爱情"
        ],
        "line": "1930年代上海,陆家军阀家庭的恩怨情仇,以及依萍与书桓之间刻骨铭心的虐恋。",
        "cover": "./106.jpg",
        "url": "./videos/video-0706.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "好父亲",
        "year": "2025",
        "region": "意大利/法国",
        "type": "电影",
        "genre": "剧情、家庭",
        "tags": [
            "父子关系",
            "道德困境",
            "老年痴呆",
            "遗产之争",
            "温情",
            "剧情"
        ],
        "line": "当患阿尔茨海默的父亲忘记所有人后,他每天只重复一句话:我儿子是杀人犯。",
        "cover": "./107.jpg",
        "url": "./videos/video-0707.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "智勇双探",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,动作,犯罪",
        "tags": [
            "双雄",
            "港式幽默",
            "错位搭档",
            "追逐战",
            "喜剧",
            "动作"
        ],
        "line": "一个体制内模范警探被迫与刚出狱的骗术天才搭档,却发现两人要追的是同一个人:对方的前妻。",
        "cover": "./108.jpg",
        "url": "./videos/video-0708.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "插翅难飞",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作/惊悚",
        "tags": [
            "劫机",
            "孤胆英雄",
            "密闭空间",
            "反转",
            "动作",
            "惊悚"
        ],
        "line": "一名押解重刑犯的空中警察,发现整架飞机已被罪犯团伙渗透。",
        "cover": "./109.jpg",
        "url": "./videos/video-0709.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "亲爱的小美人鱼",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情,奇幻,青春",
        "tags": [
            "美人鱼",
            "海洋环保",
            "校园",
            "治愈",
            "跨物种",
            "爱情"
        ],
        "line": "海洋生物学研究生在海边捡到一个失忆少女,她不会说话,但每次落泪都会变成珍珠。",
        "cover": "./110.jpg",
        "url": "./videos/video-0710.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "爱幽的密室",
        "year": "2024",
        "region": "日本",
        "type": "剧集(动画)",
        "genre": "悬疑,心理,惊悚",
        "tags": [
            "密室逃脱",
            "社交恐惧",
            "人工智能",
            "游戏",
            "悬疑",
            "心理"
        ],
        "line": "社交恐惧的天才程序员被关进自己设计的AI密室游戏,每间密室的线索都来自他暗恋的女孩的隐私。",
        "cover": "./111.jpg",
        "url": "./videos/video-0711.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "女性与生育",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,纪录片式戏剧",
        "tags": [
            "身体自主",
            "医疗体系",
            "单身母亲",
            "社会压迫",
            "写实",
            "剧情"
        ],
        "line": "一位单身大学教授意外怀孕,却在法国顶级医院遭遇了教科书级别的医疗歧视与官僚折磨。",
        "cover": "./112.jpg",
        "url": "./videos/video-0712.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "欢迎回到三达里",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情/爱情/治愈",
        "tags": [
            "返乡故事",
            "青梅竹马",
            "温暖疗愈",
            "小镇生活",
            "中年重启",
            "剧情"
        ],
        "line": "三十年前离开济州岛渔村去首尔打拼的顶级摄影师,事业崩塌后回到故乡,遇到了做海女的初恋。",
        "cover": "./113.jpg",
        "url": "./videos/video-0713.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "一条叫王子的狗",
        "year": "2019",
        "region": "中国香港/日本",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "狗",
            "流浪",
            "治愈",
            "中日合拍",
            "真实事件改编",
            "剧情"
        ],
        "line": "一条被遗弃的秋田犬,用三年时间找到了当初救过它的所有陌生人。",
        "cover": "./114.jpg",
        "url": "./videos/video-0714.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "有情不悔",
        "year": "1994",
        "region": "香港",
        "type": "剧集",
        "genre": "剧情、爱情、家庭",
        "tags": [
            "虐恋",
            "失忆",
            "复仇",
            "豪门",
            "剧情",
            "爱情"
        ],
        "line": "富家千金被未婚夫陷害失忆沦为渔村女工,恢复记忆后她决定假装依然失忆,留在仇人身边慢慢报复。",
        "cover": "./115.jpg",
        "url": "./videos/video-0715.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "军妓爱茜",
        "year": "2025",
        "region": "中国香港/日本",
        "type": "电影",
        "genre": "剧情,战争",
        "tags": [
            "战争反思",
            "女性悲剧",
            "历史伤痕",
            "人性",
            "剧情",
            "战争"
        ],
        "line": "抗战末期,被日军掳走的朝鲜慰安妇爱茜在军営中学会了日语和刺杀,一场瘟疫成了她复仇的唯一机会。",
        "cover": "./116.jpg",
        "url": "./videos/video-0716.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "简爱1970",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/爱情",
        "tags": [
            "年代改编",
            "女性独立",
            "庄园",
            "暗黑美学",
            "剧情",
            "爱情"
        ],
        "line": "1970年代的伦敦,简爱成了朋克俱乐部服务员,却爱上了一个藏着秘密的摇滚乐手。",
        "cover": "./117.jpg",
        "url": "./videos/video-0717.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "女孩的战地滑板课",
        "year": "2023",
        "region": "阿富汗/美国",
        "type": "电影",
        "genre": "纪录片,运动,社会",
        "tags": [
            "阿富汗",
            "女性",
            "滑板",
            "自由",
            "纪录片",
            "运动"
        ],
        "line": "在喀布尔,一群女孩通过学习滑板,在轮子上感受到了前所未有的自由,并挑战着整个社会的禁忌。",
        "cover": "./118.jpg",
        "url": "./videos/video-0718.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "致命伤痕",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "心理惊悚",
        "tags": [
            "连环杀手",
            "记忆谜团",
            "法医",
            "反转",
            "雨夜",
            "心理惊悚"
        ],
        "line": "法医在尸体上发现与自己童年伤疤完全一致的标记,开始怀疑自己就是凶手。",
        "cover": "./119.jpg",
        "url": "./videos/video-0719.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "我的早更女友",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情,喜剧,都市",
        "tags": [
            "卵巢早衰",
            "姐弟恋",
            "催婚",
            "爱情",
            "喜剧",
            "都市"
        ],
        "line": "28岁女高管被确诊卵巢早衰,为赶在绝经前生子,她盯上了公司新来的22岁实习奶狗。",
        "cover": "./120.jpg",
        "url": "./videos/video-0720.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "顽童182",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情/青春/校园",
        "tags": [
            "问题少年",
            "棒球热血",
            "师生情",
            "底层生存",
            "成长励志",
            "剧情"
        ],
        "line": "台东偏乡,182路公交车上坐着一群被学校放弃的“顽童”,一个新老师想用棒球带他们找回尊严。",
        "cover": "./121.jpg",
        "url": "./videos/video-0721.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "禁忌房间",
        "year": "2015",
        "region": "美国/德国",
        "type": "电影",
        "genre": "剧情/喜剧/奇幻",
        "tags": [
            "黑白",
            "荒诞",
            "哲学",
            "章节体",
            "剧情",
            "喜剧"
        ],
        "line": "在一艘沉没的潜艇里,一名厨师试图向众人解释一个只有关上门才能存在的房间。",
        "cover": "./122.jpg",
        "url": "./videos/video-0722.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "邪灵",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖",
        "tags": [
            "邪教",
            "附身",
            "心理惊悚",
            "山村",
            "恐怖"
        ],
        "line": "一个不信鬼神的调查记者,为了揭穿偏远山村的“神迹”骗局,却意外释放了真正的古老邪灵。",
        "cover": "./123.jpg",
        "url": "./videos/video-0723.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "入侵脑细胞2",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/惊悚",
        "tags": [
            "意识潜入",
            "悬疑",
            "科幻",
            "续集",
            "惊悚"
        ],
        "line": "脑神经科学家凯特发明了意识纠察技术,在追捕黑客时,发现对方入侵了自己的记忆改写了现实。",
        "cover": "./124.jpg",
        "url": "./videos/video-0724.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "推特共和国",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情,讽刺,政治",
        "tags": [
            "社交媒体",
            "民主实验",
            "网暴",
            "KOL治国",
            "剧情",
            "讽刺"
        ],
        "line": "一群被平台封禁的网络红人买下一座无人岛,按推特规则建立“共和国”,结果三天就走向内战。",
        "cover": "./125.jpg",
        "url": "./videos/video-0725.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "木兰从军1939",
        "year": "1939",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,战争,历史",
        "tags": [
            "民国电影",
            "抗战",
            "女性",
            "经典翻拍",
            "剧情",
            "战争"
        ],
        "line": "日军侵华时期,一个普通农妇女扮男装替死去的丈夫参军,打完仗才发现,连里有一半都是女人。",
        "cover": "./126.jpg",
        "url": "./videos/video-0726.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "日月凌空",
        "year": "2007",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装/历史",
        "tags": [
            "武则天",
            "唐朝",
            "权谋",
            "女性",
            "传奇",
            "古装"
        ],
        "line": "武则天登基前夕,一个名叫“凌空”的民间女子被卷入宫斗,她成了女皇唯一的知己和镜子。",
        "cover": "./127.jpg",
        "url": "./videos/video-0727.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "美人",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚/悬疑",
        "tags": [
            "整形",
            "欲望代价",
            "身份盗用",
            "复仇",
            "反转",
            "惊悚"
        ],
        "line": "她花三百万整成闺蜜的样子,然后闺蜜死了,所有人都以为她就是闺蜜。",
        "cover": "./128.jpg",
        "url": "./videos/video-0728.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "瞧!你这小脾气",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情/喜剧",
        "tags": [
            "甜宠",
            "欢喜冤家",
            "职场",
            "治愈",
            "轻喜",
            "爱情"
        ],
        "line": "暴躁女主编空降杂志社,偏偏遇上佛系摄影师,两人在工作中互相嫌弃,却在生活中彼此治愈。",
        "cover": "./129.jpg",
        "url": "./videos/video-0729.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "让·多米尼克",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,传记,历史",
        "tags": [
            "作家",
            "疾病",
            "抗争",
            "眼动书写",
            "文学",
            "剧情"
        ],
        "line": "全身瘫痪的《ELLE》前主编,用仅能眨动的左眼,一下下“眨”出了他的回忆录《潜水钟与蝴蝶》。",
        "cover": "./130.jpg",
        "url": "./videos/video-0730.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "花",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑/惊悚/女性",
        "tags": [
            "花艺",
            "香水",
            "复仇",
            "慢节奏",
            "感官电影",
            "悬疑"
        ],
        "line": "一位嗅觉异常敏锐的哑巴花艺师,通过客人订花的香气,拼凑出杀死姐姐的连环杀手身份。",
        "cover": "./131.jpg",
        "url": "./videos/video-0731.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "冒牌总统",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/政治/悬疑",
        "tags": [
            "替身",
            "白宫",
            "阴谋论",
            "替身演员",
            "权力游戏",
            "喜剧"
        ],
        "line": "一个三流模仿秀演员被秘密培训成总统替身,但当他终于登台时,真正的总统却消失了。",
        "cover": "./132.jpg",
        "url": "./videos/video-0732.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "江浦合流",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史,战争",
        "tags": [
            "古代战争",
            "改朝换代",
            "兄弟情",
            "史诗",
            "历史",
            "战争"
        ],
        "line": "元末,朱元璋与陈友谅决战鄱阳湖之前,一支偏师在江浦小城上演了一场改变历史的攻防战。",
        "cover": "./133.jpg",
        "url": "./videos/video-0733.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "用心出拳",
        "year": "2024",
        "region": "泰国",
        "type": "电影",
        "genre": "运动/剧情/励志",
        "tags": [
            "泰拳",
            "聋哑",
            "师徒",
            "逆袭",
            "运动",
            "剧情"
        ],
        "line": "聋哑少年为了给养母治病,拜师落魄拳王,用震动感知对手的出拳。",
        "cover": "./134.jpg",
        "url": "./videos/video-0734.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "伏魔记",
        "year": "2024",
        "region": "中国",
        "type": "动画电影",
        "genre": "奇幻,动作,神话",
        "tags": [
            "道士",
            "妖怪",
            "东方朋克",
            "奇幻",
            "动作",
            "神话"
        ],
        "line": "一个只会画符不会念咒的末代道士,带着一个想当人的妖怪,在一座神隐都市里打黑工伏魔。",
        "cover": "./135.jpg",
        "url": "./videos/video-0735.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "严肃的男人",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,喜剧",
        "tags": [
            "存在主义",
            "中年危机",
            "科恩风格",
            "黑色幽默",
            "剧情",
            "喜剧"
        ],
        "line": "一位物理教授的生活在一周内彻底崩塌:妻子要离婚、tenure 被拒、甚至还有黑道来讨债。",
        "cover": "./136.jpg",
        "url": "./videos/video-0736.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "凶火1984",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,恐怖",
        "tags": [
            "超能力",
            "致敬",
            "冷战",
            "父女",
            "科幻",
            "恐怖"
        ],
        "line": "致敬经典,一对拥有意念纵火能力的父女被政府追杀,9岁女儿是毁灭世界的终极武器。",
        "cover": "./137.jpg",
        "url": "./videos/video-0737.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "科图柯诺反叛",
        "year": "2025",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争,历史,动作",
        "tags": [
            "冷兵器",
            "民族起义",
            "史诗",
            "战争",
            "历史",
            "动作"
        ],
        "line": "18世纪西伯利亚,一个驯鹿部落的少女被预言将成为推翻沙皇铁骑的“冰原之狼”。",
        "cover": "./138.jpg",
        "url": "./videos/video-0738.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "泽普鲁德影片",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑/惊悚",
        "tags": [
            "纪实影像",
            "阴谋论",
            "刺杀谜案",
            "多重解读",
            "悬疑",
            "惊悚"
        ],
        "line": "一名剪辑师修复1963年肯尼迪遇袭的泽普鲁德影片时,竟在帧间发现了一行来自未来的数字。",
        "cover": "./139.jpg",
        "url": "./videos/video-0739.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "贱精姐弟 第一季",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧/家庭",
        "tags": [
            "相爱相杀",
            "职场互坑",
            "黑色幽默",
            "纽约生活",
            "喜剧",
            "家庭"
        ],
        "line": "一对互相看不顺眼的姐弟意外成为同一家精品广告公司的上下级,从此办公室变成了没有硝烟的战场。",
        "cover": "./140.jpg",
        "url": "./videos/video-0740.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "脂粉双雄",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,动作,警匪",
        "tags": [
            "卧底",
            "美妆",
            "兄弟情",
            "反串",
            "搞笑",
            "喜剧"
        ],
        "line": "两个铁血硬汉警探,为破连环杀人案,伪装成美妆博主混进了名媛姐妹团。",
        "cover": "./141.jpg",
        "url": "./videos/video-0741.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "画室培欲",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑,惊悚",
        "tags": [
            "心理",
            "艺术",
            "禁室",
            "扭曲",
            "伦理",
            "悬疑"
        ],
        "line": "一位失意的女画家被绑架,绑架者要求她每天为他画一幅肖像,否则就要挖掉她的眼睛。",
        "cover": "./142.jpg",
        "url": "./videos/video-0742.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "深海大搜索",
        "year": "1989",
        "region": "美国",
        "type": "电影",
        "genre": "冒险,科幻",
        "tags": [
            "深海",
            "潜艇",
            "未知生物",
            "失踪",
            "科学探险",
            "冒险"
        ],
        "line": "深海勘探队在地球最深处发现神秘信号,顺着信号下潜,他们看见了不该存在的东西。",
        "cover": "./143.jpg",
        "url": "./videos/video-0743.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "急速档:大电影",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作",
        "tags": [
            "飙车",
            "特工",
            "机械战车",
            "全球追缉",
            "动作"
        ],
        "line": "传奇车手隐退多年,女儿被绑架,他必须驾驶一台能变形的黑科技战车重出江湖。",
        "cover": "./144.jpg",
        "url": "./videos/video-0744.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "威斯康星死亡之旅",
        "year": "2018",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/惊悚/公路",
        "tags": [
            "公路片",
            "邪教",
            "雪地",
            "求生",
            "反转",
            "恐怖"
        ],
        "line": "四个朋友穿越威斯康星州暴风雪中的无人公路,一路遇到求救者、搭车人、抛锚车,没有一个活人。",
        "cover": "./145.jpg",
        "url": "./videos/video-0745.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "80年代",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "年代剧情",
        "tags": [
            "改革开放",
            "四合院",
            "集体记忆",
            "青春怀旧",
            "年代剧情"
        ],
        "line": "北京一座四合院里,三个出生于1980年的发小,从童年到中年,见证了中国巨变的二十年。",
        "cover": "./146.jpg",
        "url": "./videos/video-0746.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "末日迷踪:敌基督的崛起",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/惊悚/宗教",
        "tags": [
            "末日",
            "敌基督",
            "全球政府",
            "预言",
            "悬疑",
            "科幻"
        ],
        "line": "全球数十亿人瞬间失踪后,一位调查记者发现联合国秘书长正一一应验《圣经》中的敌基督特征。",
        "cover": "./147.jpg",
        "url": "./videos/video-0747.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "百万吨级武藏",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "科幻,机战,热血",
        "tags": [
            "超级机器人",
            "外星入侵",
            "中二",
            "合体",
            "王道",
            "科幻"
        ],
        "line": "落魄高中生发现自己的储物柜里藏着一台百万吨级的机甲,而驾驶它的代价是吃掉一枚苦到爆炸的糖果。",
        "cover": "./148.jpg",
        "url": "./videos/video-0748.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "欢乐颂5",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情/都市/女性",
        "tags": [
            "女性群像",
            "都市生存",
            "友情",
            "成长",
            "剧情",
            "都市"
        ],
        "line": "欢乐颂22楼的五个女孩进入30+,房子、婚姻、父母、职场,没有一个是省心的。",
        "cover": "./149.jpg",
        "url": "./videos/video-0749.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "妙探肥羊",
        "year": "2023",
        "region": "中国大陆",
        "type": "网剧",
        "genre": "喜剧/悬疑",
        "tags": [
            "农村",
            "探案",
            "反转",
            "方言",
            "喜剧",
            "悬疑"
        ],
        "line": "村里丢了一只冠军种羊,废柴片警和四个老太太组成了史上最野破案天团。",
        "cover": "./150.jpg",
        "url": "./videos/video-0750.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "十一罗汉",
        "year": "2001",
        "region": "美国",
        "type": "电影",
        "genre": "犯罪动作",
        "tags": [
            "盗贼",
            "团队合作",
            "拉斯维加斯",
            "高智商犯罪",
            "犯罪动作"
        ],
        "line": "为了夺回前妻的心,赌场大盗丹尼集结十位顶尖高手,准备在同一晚洗劫拉斯维加斯三大赌场。",
        "cover": "./1.jpg",
        "url": "./videos/video-0751.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "教会",
        "year": "2022",
        "region": "意大利/法国",
        "type": "电影",
        "genre": "剧情,历史,宗教",
        "tags": [
            "传教士",
            "殖民",
            "赎罪",
            "雨林",
            "仪式",
            "剧情"
        ],
        "line": "18世纪,一名奴隶贩子在亚马逊雨林修道士的感召下悔改,却要面对教会与殖民军的双重屠刀。",
        "cover": "./2.jpg",
        "url": "./videos/video-0752.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "边缘追缉",
        "year": "2027",
        "region": "中国",
        "type": "剧集",
        "genre": "悬疑,犯罪",
        "tags": [
            "卧底",
            "边境",
            "毒品",
            "反转",
            "悬疑",
            "犯罪"
        ],
        "line": "一名卧底在边境毒网深处发现,自己最信任的线人竟是新晋毒枭的亲生骨肉。",
        "cover": "./3.jpg",
        "url": "./videos/video-0753.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "怪谈协会",
        "year": "2023",
        "region": "香港",
        "type": "电影",
        "genre": "恐怖,悬疑,惊悚",
        "tags": [
            "都市传说",
            "校园怪谈",
            "恐怖组织",
            "幻觉",
            "恐怖",
            "悬疑"
        ],
        "line": "大学怪谈社为流量直播“鬼楼探险”,却触发了真实存在的集体诅咒。",
        "cover": "./4.jpg",
        "url": "./videos/video-0754.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "猫公主苏菲",
        "year": "2018",
        "region": "法国/加拿大",
        "type": "电影",
        "genre": "动画/奇幻/家庭",
        "tags": [
            "猫咪",
            "公主",
            "冒险",
            "魔法",
            "治愈",
            "动画"
        ],
        "line": "被诅咒变成人类的猫公主必须在三天内找回王冠,否则整个猫族将消失。",
        "cover": "./5.jpg",
        "url": "./videos/video-0755.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "笑拳怪招粤语",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作、喜剧",
        "tags": [
            "功夫",
            "粤语",
            "市井",
            "师徒",
            "反套路",
            "动作"
        ],
        "line": "油麻地茶餐厅伙计自创“笑拳”,用叉烧饭和折凳打退泰拳高手,却发现对手的幕后老板是自己亲爹。",
        "cover": "./6.jpg",
        "url": "./videos/video-0756.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "负重前行",
        "year": "2017",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "惊悚,剧情,恐怖",
        "tags": [
            "丧尸",
            "父爱",
            "公路",
            "牺牲",
            "短片改编",
            "惊悚"
        ],
        "line": "一位被丧尸咬伤的父亲,用仅剩的三小时生命,为自己襁褓中的女儿开辟一条生路。",
        "cover": "./7.jpg",
        "url": "./videos/video-0757.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "情来自有方",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情,喜剧",
        "tags": [
            "相亲",
            "误会",
            "港式幽默",
            "爱情",
            "喜剧"
        ],
        "line": "一位情感专家自己屡次相亲失败,却阴差阳错帮所有相亲对象找到了真爱。",
        "cover": "./8.jpg",
        "url": "./videos/video-0758.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "反败为胜",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "体育/剧情",
        "tags": [
            "电竞",
            "老兵",
            "逆袭",
            "战队",
            "热血",
            "体育"
        ],
        "line": "五名被生活打败的中年大叔,为了奖金组建了一支老年电竞队,竟一路打进了全国总决赛。",
        "cover": "./9.jpg",
        "url": "./videos/video-0759.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "恋爱检讨书",
        "year": "2010",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情,喜剧",
        "tags": [
            "港式爱情",
            "初恋",
            "校园",
            "检讨书",
            "搞笑",
            "爱情"
        ],
        "line": "每谈崩一次恋爱,他就写下一万字检讨书,凑够10本的那天,他成了恋爱理论大师。",
        "cover": "./10.jpg",
        "url": "./videos/video-0760.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "婚巢",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情、家庭、伦理",
        "tags": [
            "买房压力",
            "婆媳关系",
            "都市奋斗",
            "现实题材",
            "剧情",
            "家庭"
        ],
        "line": "为了在大城市买婚房,三对情侣被迫与六位性格迥异的父母挤在同一屋檐下。",
        "cover": "./11.jpg",
        "url": "./videos/video-0761.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "甜蜜的来世",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/奇幻",
        "tags": [
            "临终关怀",
            "冥界体验",
            "人生回顾",
            "剧情",
            "奇幻"
        ],
        "line": "一家神秘的“甜蜜来世”公司,为客户提供体验死亡后的100分钟,但没人能活着说出那里的秘密。",
        "cover": "./12.jpg",
        "url": "./videos/video-0762.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "萝莉的爱与欲",
        "year": "2022",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑/爱情/心理",
        "tags": [
            "伦理",
            "反转",
            "女性向",
            "禁忌之恋",
            "心理惊悚",
            "悬疑"
        ],
        "line": "看似天真无邪的高中少女,实则是一步步引诱成年教师踏入深渊的操控者。",
        "cover": "./13.jpg",
        "url": "./videos/video-0763.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "反斗星玩转绿林",
        "year": "1988",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,动作,奇幻",
        "tags": [
            "儿童",
            "冒险",
            "绿林",
            "法宝",
            "怀旧",
            "喜剧"
        ],
        "line": "三个顽皮小学生捡到一本《绿林秘籍》,居然召唤出了古代豪杰,为了凑钱修好被抓坏的漫画书,他们决定联手劫富济贫。",
        "cover": "./14.jpg",
        "url": "./videos/video-0764.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "真假僵尸",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/恐怖",
        "tags": [
            "荒诞",
            "讽刺",
            "都市传说",
            "黑色幽默",
            "喜剧",
            "恐怖"
        ],
        "line": "一个装僵尸蹭热度的网红主播,遇上了真僵尸,直播间炸了。",
        "cover": "./15.jpg",
        "url": "./videos/video-0765.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "无尽的河流",
        "year": "2019",
        "region": "法国/德国",
        "type": "电影",
        "genre": "剧情/悬疑/文艺",
        "tags": [
            "河流隐喻",
            "失忆",
            "诗意",
            "存在主义",
            "剧情",
            "悬疑"
        ],
        "line": "一个失忆的男人顺着一条不知名的河流漂流,岸上每隔一段就有一个认识他但都不愿说真话的人。",
        "cover": "./16.jpg",
        "url": "./videos/video-0766.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "冰上鸭仔队再战江湖",
        "year": "2023",
        "region": "加拿大",
        "type": "电影",
        "genre": "喜剧、运动、家庭",
        "tags": [
            "冰球",
            "少年",
            "退役选手",
            "逆袭",
            "欢乐",
            "喜剧"
        ],
        "line": "一帮被解散的少年冰球队为了保住社区冰场,重组后向全国冠军发起冲击。",
        "cover": "./17.jpg",
        "url": "./videos/video-0767.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "小猪扑满的愿望",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "奇幻,家庭,冒险",
        "tags": [
            "温情",
            "治愈",
            "圣诞",
            "儿童",
            "奇幻",
            "家庭"
        ],
        "line": "一个内向的小女孩发现家里的陶瓷小猪扑满会说话,并声称可以实现她一个愿望,但代价是让她消失。",
        "cover": "./18.jpg",
        "url": "./videos/video-0768.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "义跑 2215 公里",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "体育/剧情",
        "tags": [
            "真实改编",
            "抗癌",
            "极限运动",
            "父爱",
            "体育",
            "剧情"
        ],
        "line": "一个失去双腿的父亲,为了筹钱救患白血病的女儿,拖着假肢从漠河跑到三亚。",
        "cover": "./19.jpg",
        "url": "./videos/video-0769.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "花盆",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,惊悚,剧情",
        "tags": [
            "密室",
            "心理战",
            "反转",
            "低成本高能",
            "悬疑",
            "惊悚"
        ],
        "line": "他搬进新房发现阳台花盆里埋着一截手指,房东说:别管,那是上一位租客的。",
        "cover": "./20.jpg",
        "url": "./videos/video-0770.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "大尉叛逃记",
        "year": "2024",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情/惊悚/战争",
        "tags": [
            "俄乌冲突",
            "逃亡",
            "人性拷问",
            "冷战氛围",
            "剧情",
            "惊悚"
        ],
        "line": "一名俄军大尉在目睹战友屠杀平民后,带着机密文件和妻女向邻国叛逃,却遭遇三方追杀。",
        "cover": "./21.jpg",
        "url": "./videos/video-0771.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "一代枪王",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作、历史、武侠",
        "tags": [
            "清末",
            "神枪手",
            "民族气节",
            "冷兵器与火器",
            "动作",
            "历史"
        ],
        "line": "清末,洋枪队入侵,一位坚守“弓乃君子”的老猎人被迫拿起火枪,却发现最大的敌人不是洋人,而是朝廷的懦弱。",
        "cover": "./22.jpg",
        "url": "./videos/video-0772.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "藏海花之暗巢汹涌",
        "year": "2025",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "冒险/悬疑",
        "tags": [
            "盗墓",
            "南派三叔",
            "地下世界",
            "冒险",
            "悬疑"
        ],
        "line": "吴邪在墨脱发现藏海花的秘密后,引出地下五百米深处一个活的“暗巢”。",
        "cover": "./23.jpg",
        "url": "./videos/video-0773.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "默默",
        "year": "2019",
        "region": "德国",
        "type": "电影",
        "genre": "剧情,奇幻",
        "tags": [
            "时间窃贼",
            "童真",
            "社会寓言",
            "慢生活",
            "剧情",
            "奇幻"
        ],
        "line": "一个叫“默默”的小女孩能用倾听治愈人心,却遇到了专门偷窃时间的灰色男人。",
        "cover": "./24.jpg",
        "url": "./videos/video-0774.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "北极移民",
        "year": "2022",
        "region": "加拿大",
        "type": "电影",
        "genre": "动画/家庭",
        "tags": [
            "环保",
            "迁徙",
            "动物群像",
            "北欧风光",
            "动画",
            "家庭"
        ],
        "line": "气候变暖让北极熊举家南迁,它们误打误撞加入了一支由退役雪橇犬带领的“移民动物马戏团”。",
        "cover": "./25.jpg",
        "url": "./videos/video-0775.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "混乱和黑暗",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "心理惊悚",
        "tags": [
            "悬疑",
            "犯罪心理",
            "黑色电影",
            "高概念",
            "心理惊悚"
        ],
        "line": "一名患有严重幻觉的警探在追查连环杀手时,发现自己可能就是那个杀手。",
        "cover": "./26.jpg",
        "url": "./videos/video-0776.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "魔灵1988",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖,灵异",
        "tags": [
            "录像带",
            "诅咒",
            "昭和",
            "时间循环",
            "恐怖",
            "灵异"
        ],
        "line": "一盒1988年的录像带在六个观众手中流转,看过的人都会在第七天被一个“模仿自己”的东西取代。",
        "cover": "./27.jpg",
        "url": "./videos/video-0777.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "龙在他乡",
        "year": "2018",
        "region": "美国/中国大陆",
        "type": "电影",
        "genre": "动作/犯罪/剧情",
        "tags": [
            "华人黑帮",
            "移民困境",
            "救赎",
            "动作",
            "犯罪",
            "剧情"
        ],
        "line": "一个偷渡到美国的中国厨师,为了保护同乡,被迫重拾禁忌的武术,成为唐人街的“地下裁判”。",
        "cover": "./28.jpg",
        "url": "./videos/video-0778.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "祖巴安",
        "year": "2024",
        "region": "印度",
        "type": "电影",
        "genre": "动作、犯罪、西部",
        "tags": [
            "复仇",
            "原始部落",
            "矿业公司",
            "弓箭vs枪",
            "环保",
            "动作"
        ],
        "line": "印度东部原始部落的最后一名弓箭手“祖巴安”,为了给被矿业公司杀害的女儿报仇,用冷兵器对抗一支拥有现代武器的私人军队。",
        "cover": "./29.jpg",
        "url": "./videos/video-0779.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "原始狂暴:大脚怪传奇",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,动作",
        "tags": [
            "嗜血巨兽",
            "丛林追杀",
            "B级血浆",
            "恐怖",
            "动作"
        ],
        "line": "环保调查队深入神秘森林,遭遇的不只是非法伐木者,还有一只身负核辐射变异的狂暴巨兽。",
        "cover": "./30.jpg",
        "url": "./videos/video-0780.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "老有意思旅行社",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "喜剧,剧情",
        "tags": [
            "老年",
            "创业",
            "环岛",
            "治愈",
            "喜剧",
            "剧情"
        ],
        "line": "三个被家人“嫌弃”的老人凑钱开了家旅行社,专接银发族,口号是:“带你去死之前最想去的地方”。",
        "cover": "./31.jpg",
        "url": "./videos/video-0781.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "快乐的大脚",
        "year": "2006",
        "region": "澳大利亚/美国",
        "type": "电影",
        "genre": "动画/歌舞/冒险",
        "tags": [
            "企鹅",
            "踢踏舞",
            "环境保护",
            "动画",
            "歌舞",
            "冒险"
        ],
        "line": "不会唱歌但会跳踢踏舞的企鹅,被族群视为异类后踏上证明自己的旅程。",
        "cover": "./32.jpg",
        "url": "./videos/video-0782.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "美国谋杀故事:隔壁那家人",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪,纪录片",
        "tags": [
            "真实犯罪",
            "悬疑",
            "邻居",
            "家庭悲剧",
            "调查",
            "犯罪"
        ],
        "line": "当一户平静的郊区家庭被灭门后,警方发现所有证据都指向了那扇从未关过的后院门。",
        "cover": "./33.jpg",
        "url": "./videos/video-0783.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "没有你依然灿烂",
        "year": "2024",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "剧情,爱情",
        "tags": [
            "女性成长",
            "治愈",
            "都市",
            "失去与重生",
            "剧情",
            "爱情"
        ],
        "line": "婚礼前夕未婚夫意外失踪,她撕掉婚纱照,却在废墟上建起了一座属于自己的花园。",
        "cover": "./34.jpg",
        "url": "./videos/video-0784.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "心之所爱",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "纯爱",
            "绝症",
            "双向暗恋",
            "催泪",
            "爱情",
            "剧情"
        ],
        "line": "心脏移植手术后,失明的女孩总能梦见捐赠者的爱人。",
        "cover": "./35.jpg",
        "url": "./videos/video-0785.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "绕行美国",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/公路",
        "tags": [
            "老年人",
            "房车",
            "代际冲突",
            "喜剧",
            "公路"
        ],
        "line": "倔老头带着自闭症孙子开着破房车横穿美国,只为去NASA看一眼真正的火星照片。",
        "cover": "./36.jpg",
        "url": "./videos/video-0786.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "人肉米粉",
        "year": "2019",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "重口味",
            "复仇",
            "东南亚民俗",
            "恐怖",
            "惊悚"
        ],
        "line": "曼谷街头最火辣的米粉店,其秘方竟是失踪人口的最终归宿。",
        "cover": "./37.jpg",
        "url": "./videos/video-0787.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "多情医生换娇妻",
        "year": "2024",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情/狗血",
        "tags": [
            "伦理反转",
            "婚姻交换",
            "复仇",
            "爱情",
            "狗血"
        ],
        "line": "一位整容医生瞒着妻子与多名客户有染,妻子发现后没有大吵大闹,而是将丈夫“交换”给了最恨他的那位女客户。",
        "cover": "./38.jpg",
        "url": "./videos/video-0788.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "莫问前程",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪",
        "tags": [
            "黑色电影",
            "悬疑",
            "江湖",
            "兄弟",
            "犯罪"
        ],
        "line": "刚出狱的老实人想拿回属于自己的拆迁款,却发现所有兄弟都已背叛,而他身上唯一的筹码是一个用十年青春换来的秘密。",
        "cover": "./39.jpg",
        "url": "./videos/video-0789.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "冰淇淋人",
        "year": "1995",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,喜剧",
        "tags": [
            "B级片",
            "杀人狂",
            "无厘头",
            "恐怖",
            "喜剧"
        ],
        "line": "小镇冰淇淋小贩因被熊孩子嘲笑,用冰淇淋车上的甜品残忍复仇。",
        "cover": "./40.jpg",
        "url": "./videos/video-0790.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "惊天骇客",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作/惊悚",
        "tags": [
            "黑客",
            "网络战",
            "高智商犯罪",
            "动作",
            "惊悚"
        ],
        "line": "史上最年轻的国安局泄密者,在狱中被人用一根网线唤醒,被迫参与一场颠覆全球金融体系的犯罪。",
        "cover": "./41.jpg",
        "url": "./videos/video-0791.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "我不是财神",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/喜剧",
        "tags": [
            "彩票",
            "小人物",
            "黑色幽默",
            "剧情",
            "喜剧"
        ],
        "line": "一个loser意外中了三亿彩票,却发现自己是被选中的“财神替身”,中奖只是噩梦的开始。",
        "cover": "./42.jpg",
        "url": "./videos/video-0792.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "全民乱投",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/科幻",
        "tags": [
            "黑色喜剧",
            "社交媒体",
            "民主实验",
            "荒诞",
            "喜剧",
            "科幻"
        ],
        "line": "一个新上线的APP可以投票决定任何陌生人的命运,二十四小时内,“被投票者”死了。",
        "cover": "./43.jpg",
        "url": "./videos/video-0793.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "柠檬丈夫国语",
        "year": "1989",
        "region": "中国香港",
        "type": "剧集",
        "genre": "喜剧/家庭",
        "tags": [
            "港式幽默",
            "婚姻喜剧",
            "旧时光",
            "喜剧",
            "家庭"
        ],
        "line": "一个怕老婆的“柠檬头”丈夫,在岳母、妻子和小姨子的夹缝中施展搞笑生存法则。",
        "cover": "./44.jpg",
        "url": "./videos/video-0794.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "神偷艳盗",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪/爱情/喜剧",
        "tags": [
            "雌雄大盗",
            "骗中骗",
            "艺术品",
            "反转",
            "犯罪",
            "爱情"
        ],
        "line": "顶级神偷和天才女骗子联手偷一幅画,结果画是假的,两人感情是真的,要抓他们的警察也是假的。",
        "cover": "./45.jpg",
        "url": "./videos/video-0795.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "兵变1938",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史/战争/谍战",
        "tags": [
            "抗日战争",
            "内部分裂",
            "双面间谍",
            "人性抉择",
            "历史",
            "战争"
        ],
        "line": "1938年,一支国民党精锐部队酝酿兵变投日,地下党必须在三天内找到兵变头目,却发现自己上级就是主谋。",
        "cover": "./46.jpg",
        "url": "./videos/video-0796.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "9顶假发的女孩",
        "year": "2025",
        "region": "德国",
        "type": "电影",
        "genre": "剧情、传记、女性",
        "tags": [
            "癌症",
            "假发",
            "自我重塑",
            "乐观主义",
            "真实改编",
            "剧情"
        ],
        "line": "21岁的她化疗掉光头发,却买了9顶假发扮演9个不同人格,包括一个癌症病人。",
        "cover": "./47.jpg",
        "url": "./videos/video-0797.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "金桥(电影)",
        "year": "2024",
        "region": "越南",
        "type": "电影",
        "genre": "剧情,爱情,战争",
        "tags": [
            "越南战争",
            "跨文化",
            "桥梁",
            "命运",
            "伤痕",
            "剧情"
        ],
        "line": "1975年西贡沦陷前夜,一名美国士兵和一名越南女翻译在金桥之上做出了改变一生的选择。",
        "cover": "./48.jpg",
        "url": "./videos/video-0798.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "真正的家人",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情、喜剧、家庭",
        "tags": [
            "收养",
            "非血缘家庭",
            "代际冲突",
            "温情反转",
            "剧情",
            "喜剧"
        ],
        "line": "一个由五湖四海的被收养者组成的家庭,在家长突然去世后,为争抢“最像亲生的”而闹翻。",
        "cover": "./49.jpg",
        "url": "./videos/video-0799.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "爱情没有顺风车",
        "year": "2024",
        "region": "韩国",
        "type": "电视剧",
        "genre": "浪漫、喜剧、都市",
        "tags": [
            "拼车",
            "欢喜冤家",
            "上班族",
            "社内恋爱",
            "浪漫",
            "喜剧"
        ],
        "line": "男女主每天被迫拼车上下班,车程30分钟,吵架2小时。",
        "cover": "./50.jpg",
        "url": "./videos/video-0800.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "中国维和行动",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "动作,战争",
        "tags": [
            "维和",
            "非洲",
            "真实事件",
            "热血",
            "动作",
            "战争"
        ],
        "line": "一支中国维和步兵营在南苏丹被围困72小时,弹尽粮绝之际,他们升起五星红旗。",
        "cover": "./51.jpg",
        "url": "./videos/video-0801.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "义勇七先锋",
        "year": "2026",
        "region": "美国/中国合拍",
        "type": "电影",
        "genre": "动作/冒险/战争",
        "tags": [
            "特种兵",
            "小队作战",
            "跨国救援",
            "高科技",
            "硬汉",
            "动作"
        ],
        "line": "七名来自不同国家的退役特种兵,为了洗刷战友的冤屈,潜入战火纷飞的地区,盗取被军阀控制的核原料。",
        "cover": "./52.jpg",
        "url": "./videos/video-0802.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "迷你偶像第二季",
        "year": "2024",
        "region": "日本",
        "type": "剧集/动画",
        "genre": "喜剧/日常/治愈",
        "tags": [
            "Q版",
            "偶像",
            "搞笑",
            "短篇",
            "喜剧",
            "日常"
        ],
        "line": "天海春香的偶像们被神秘力量缩小成掌心大小,她们的日常变成了一场萌萌的灾难。",
        "cover": "./53.jpg",
        "url": "./videos/video-0803.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "成为母亲",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情,悬疑",
        "tags": [
            "代孕",
            "伦理",
            "反转",
            "母爱",
            "剧情",
            "悬疑"
        ],
        "line": "为了圆母亲的梦,她找人代孕,却发现代孕母竟是母亲年轻时送走的女儿。",
        "cover": "./54.jpg",
        "url": "./videos/video-0804.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "亚历山大和他最糟糕的旅程",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,家庭,冒险",
        "tags": [
            "公路片",
            "熊孩子",
            "意外频发",
            "温情",
            "喜剧",
            "家庭"
        ],
        "line": "十岁的亚历山大坚信自己是衰神转世,直到一次全家旅行把所有灾难变成奇迹。",
        "cover": "./55.jpg",
        "url": "./videos/video-0805.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "棒棒糖之恋",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "爱情,喜剧,奇幻",
        "tags": [
            "甜点师",
            "味觉",
            "契约恋爱",
            "治愈",
            "爱情",
            "喜剧"
        ],
        "line": "失去味觉的天才甜点师与能尝出情绪谎言的古怪女孩,因为一根神奇棒棒糖签订了恋爱契约。",
        "cover": "./56.jpg",
        "url": "./videos/video-0806.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "东京浪女",
        "year": "2019",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/情色/文艺",
        "tags": [
            "女性群像",
            "都市孤独",
            "边缘人生",
            "大尺度",
            "剧情",
            "情色"
        ],
        "line": "夜幕降临的东京,三位身份迥异的女性在风俗业与欲望泥潭中挣扎,试图寻找一丝微光。",
        "cover": "./57.jpg",
        "url": "./videos/video-0807.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "帮我看看",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "心理",
            "都市",
            "亲情",
            "反转",
            "剧情",
            "悬疑"
        ],
        "line": "一个失明的修鞋匠通过手机“听”见邻居被杀,却没人相信一个瞎子的话。",
        "cover": "./58.jpg",
        "url": "./videos/video-0808.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "德伯伦斯",
        "year": "2025",
        "region": "意大利/英国",
        "type": "剧集",
        "genre": "恐怖/悬疑/科幻",
        "tags": [
            "克苏鲁神话",
            "哥特",
            "贵族衰败",
            "恐怖",
            "悬疑",
            "科幻"
        ],
        "line": "在阿尔卑斯山深处,古老的德伯伦斯家族成员接连离奇死亡,每个死者脸上都出现了诡异的微笑。",
        "cover": "./59.jpg",
        "url": "./videos/video-0809.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "爱情泡跳碰",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情喜剧",
        "tags": [
            "泡面",
            "碰碰车",
            "都市",
            "快节奏恋爱",
            "爱情喜剧"
        ],
        "line": "一个靠泡面度日的程序媛与一个碰碰车教练因一场意外相撞,被迫开启“慢生活”恋爱实验。",
        "cover": "./60.jpg",
        "url": "./videos/video-0810.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "辛普森:美国制造",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪,传记,剧情",
        "tags": [
            "真实改编",
            "种族矛盾",
            "名人效应",
            "司法争议",
            "多视角",
            "犯罪"
        ],
        "line": "这部五集限定剧不是辛普森杀妻案的翻拍,而是讲述“美国如何制造了辛普森,又如何被他毁灭”。",
        "cover": "./61.jpg",
        "url": "./videos/video-0811.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "狗狗的疯狂假期",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,动画,家庭",
        "tags": [
            "狗狗",
            "假期",
            "冒险",
            "宠物",
            "喜剧",
            "动画"
        ],
        "line": "一只从没收过假期的城市宠物狗,被错送到豪华宠物酒店,结果策划了一场史上最乱的逃跑计划。",
        "cover": "./62.jpg",
        "url": "./videos/video-0812.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "撞车国语",
        "year": "2026",
        "region": "中国香港/中国大陆",
        "type": "电影",
        "genre": "剧情,家庭,社会",
        "tags": [
            "多线叙事",
            "底层群像",
            "方言",
            "现实",
            "催泪",
            "剧情"
        ],
        "line": "深夜立交桥上六车连撞,六个普通话与粤语混杂的家庭,被一场车祸撕开各自的秘密。",
        "cover": "./63.jpg",
        "url": "./videos/video-0813.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "司机奇艳录",
        "year": "2023",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "悬疑/喜剧",
        "tags": [
            "出租车",
            "奇遇",
            "单元剧",
            "黑色幽默",
            "都市传说",
            "悬疑"
        ],
        "line": "夜班司机老洪的出租车里,每晚都会上来一位带着离奇故事的神秘女子。",
        "cover": "./64.jpg",
        "url": "./videos/video-0814.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "第三类打斗",
        "year": "2025",
        "region": "香港",
        "type": "电影",
        "genre": "动作,科幻",
        "tags": [
            "近未来",
            "格斗术",
            "外星文明",
            "动作",
            "科幻"
        ],
        "line": "2042年,人类格斗术面临外星种族的降维打击,只有一名失忆老兵记得原始格斗的真谛。",
        "cover": "./65.jpg",
        "url": "./videos/video-0815.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "缘结甘神家",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "奇幻爱情,日常",
        "tags": [
            "神道教",
            "神社",
            "同居",
            "神明",
            "治愈",
            "奇幻爱情"
        ],
        "line": "无家可归的穷大学生误打误撞住进了破旧神社,却发现这里住着三位等待缘分的女神继承人。",
        "cover": "./66.jpg",
        "url": "./videos/video-0816.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "黑超特警组:反转世界",
        "year": "2029",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/科幻/动作",
        "tags": [
            "平行宇宙",
            "外星难民",
            "性别反转",
            "重启",
            "喜剧",
            "科幻"
        ],
        "line": "当外星难民涌入地球,黑超特警组决定招募一个“废物”——她的超能力是能让方圆十米内的科技产品全部失灵。",
        "cover": "./67.jpg",
        "url": "./videos/video-0817.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "封城之后",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,灾难",
        "tags": [
            "疫情",
            "人性",
            "隔离",
            "现实主义",
            "剧情",
            "灾难"
        ],
        "line": "封城后的第30天,一个外卖员发现城里开始有人悄悄消失,如同从未存在。",
        "cover": "./68.jpg",
        "url": "./videos/video-0818.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "战栗第六感",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑/惊悚/超自然",
        "tags": [
            "灵媒",
            "连环命案",
            "高概念",
            "悬疑",
            "惊悚",
            "超自然"
        ],
        "line": "一位盲人灵媒能看见死者最后的记忆,但她必须触碰凶手才能找到真相。",
        "cover": "./69.jpg",
        "url": "./videos/video-0819.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "火花兄弟",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,喜剧",
        "tags": [
            "落语",
            "师徒",
            "励志",
            "催泪",
            "剧情",
            "喜剧"
        ],
        "line": "一对毫无名气的漫才组合,决定在解散前,赌上性命去偷师父的“梗”。",
        "cover": "./70.jpg",
        "url": "./videos/video-0820.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "美丽舞者",
        "year": "2024",
        "region": "俄罗斯",
        "type": "剧集",
        "genre": "剧情,舞蹈,悬疑",
        "tags": [
            "芭蕾",
            "剧院谋杀",
            "天才舞者",
            "黑天鹅式",
            "剧情",
            "舞蹈"
        ],
        "line": "莫斯科大剧院首席舞者意外坠楼,替补舞者上位后,发现首席留下的日记中写着:“她不是自杀,她是被跳死的。",
        "cover": "./71.jpg",
        "url": "./videos/video-0821.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "月之鸟",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,奇幻,冒险",
        "tags": [
            "童话",
            "梦想",
            "飞行",
            "剧情",
            "奇幻",
            "冒险"
        ],
        "line": "老裁缝造了一艘飞艇,要去月亮上寻找他童年时见过的,那只发光的鸟。",
        "cover": "./72.jpg",
        "url": "./videos/video-0822.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "在撒哈拉世界的大门",
        "year": "2005",
        "region": "法国/摩洛哥",
        "type": "电影",
        "genre": "冒险/悬疑",
        "tags": [
            "哲学寓言",
            "沙漠公路",
            "存在主义",
            "冒险",
            "悬疑"
        ],
        "line": "考古队在沙漠深处挖出一扇古代石门,推开门后,每天都会出现另一个自己。",
        "cover": "./73.jpg",
        "url": "./videos/video-0823.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "罗马欲乐园",
        "year": "2024",
        "region": "意大利",
        "type": "电影",
        "genre": "爱情剧情",
        "tags": [
            "罗马",
            "禁忌之恋",
            "艺术",
            "救赎",
            "爱情剧情"
        ],
        "line": "一个修女与一个流浪画家在罗马的午夜街头,开始了一场为期七天的欲望与信仰的拉扯。",
        "cover": "./74.jpg",
        "url": "./videos/video-0824.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "行运儍佬",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧",
        "tags": [
            "傻人有傻福",
            "赌博",
            "黑帮",
            "错摸",
            "港式笑料",
            "喜剧"
        ],
        "line": "天生智力不足的阿傻被全村当成灾星,却因记错了彩票号码,阴差阳错救了一整个黑帮。",
        "cover": "./75.jpg",
        "url": "./videos/video-0825.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "时之歌—花与焰的狂想诗",
        "year": "2026",
        "region": "中国大陆",
        "type": "动画",
        "genre": "奇幻/冒险/音乐",
        "tags": [
            "异世界",
            "末日",
            "吟游诗人",
            "视觉系",
            "宏大叙事",
            "奇幻"
        ],
        "line": "末日降临,四位拥有特殊音乐能力的“时之歌使”踏上征途,用歌声点燃熄灭的太阳。",
        "cover": "./76.jpg",
        "url": "./videos/video-0826.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "血谜拼图",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑、犯罪、心理",
        "tags": [
            "拼图杀手",
            "法医",
            "双胞胎",
            "模仿犯",
            "反转",
            "悬疑"
        ],
        "line": "法医收到一个快递,里面是一块人皮拼图,而拼图指向一桩30年前的连环杀人案。",
        "cover": "./77.jpg",
        "url": "./videos/video-0827.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "刽乐假期",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "恐怖/喜剧",
        "tags": [
            "惊悚",
            "黑色幽默",
            "虐杀",
            "度假村",
            "恐怖",
            "喜剧"
        ],
        "line": "六个好友前往无人孤岛度假,却发现每年这里的“快乐游戏”只能有一个赢家。",
        "cover": "./78.jpg",
        "url": "./videos/video-0828.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "勇士之路",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情/运动",
        "tags": [
            "摔跤",
            "父子",
            "传承",
            "小镇",
            "剧情",
            "运动"
        ],
        "line": "过气摔跤手为保住亡妻的体育馆,不得不训练叛逆儿子迎战全国冠军。",
        "cover": "./79.jpg",
        "url": "./videos/video-0829.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "蓝百万2",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,剧情",
        "tags": [
            "财富",
            "黑色幽默",
            "小人物",
            "喜剧",
            "剧情"
        ],
        "line": "上一集花光百万大奖后,穷小子这次意外继承了价值千万的债务和一颗价值连城的钻石。",
        "cover": "./80.jpg",
        "url": "./videos/video-0830.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "壁花女孩梦游中",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "奇幻/青春/治愈",
        "tags": [
            "清醒梦",
            "社交恐惧",
            "内心怪兽",
            "校园边缘人",
            "奇幻",
            "青春"
        ],
        "line": "她只要在现实中说出一句真心话,当晚就会被拖进一场可怕的公开处刑梦境。",
        "cover": "./81.jpg",
        "url": "./videos/video-0831.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "缘来大饭店",
        "year": "2021",
        "region": "泰国",
        "type": "剧集",
        "genre": "喜剧/爱情/群像",
        "tags": [
            "饭店职场",
            "多线叙事",
            "阴差阳错",
            "泰式搞笑",
            "喜剧",
            "爱情"
        ],
        "line": "曼谷五星饭店的24小时里,门童被误认为总裁,厨师爱上了女食客,保洁捡到了黑帮的钻石。",
        "cover": "./82.jpg",
        "url": "./videos/video-0832.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "女汤",
        "year": "1999",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "女性",
            "汤屋",
            "和解",
            "乡土",
            "剧情",
            "家庭"
        ],
        "line": "台北一家老牌女汤浴室面临拆迁,四代女客人的秘密随着蒸汽一同涌出。",
        "cover": "./83.jpg",
        "url": "./videos/video-0833.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "圣诞搞轰趴",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/爱情/节日",
        "tags": [
            "圣诞节",
            "派对",
            "群星",
            "荒诞",
            "喜剧",
            "爱情"
        ],
        "line": "为了拿下年度最佳员工奖,五个同事在圣诞派对上互相下套,结果把老板的豪宅炸了。",
        "cover": "./84.jpg",
        "url": "./videos/video-0834.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "你永远比那些家伙年轻",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,青春",
        "tags": [
            "师生",
            "校园霸凌",
            "迟到的反抗",
            "剧情",
            "青春"
        ],
        "line": "十年前懦弱的高中教师,如今在街头偶遇当年霸凌他的学生,对方却因车祸失忆,只记得自己是“那些家伙”。",
        "cover": "./85.jpg",
        "url": "./videos/video-0835.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "终将成为你",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "爱情,同性,校园",
        "tags": [
            "漫改",
            "唯美画风",
            "细腻心理",
            "双向救赎",
            "爱情",
            "同性"
        ],
        "line": "无法爱上别人的高冷学姐,与不懂何为心动的懵懂学妹,两人约定在学生会活动中找出“恋爱”的定义。",
        "cover": "./86.jpg",
        "url": "./videos/video-0836.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "车轴",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭,社会",
        "tags": [
            "出租车",
            "父女",
            "城市夜景",
            "小成本",
            "剧情",
            "家庭"
        ],
        "line": "开夜班出租车的父亲,在女儿失踪后,开始在乘客中疯狂寻找她的影子。",
        "cover": "./87.jpg",
        "url": "./videos/video-0837.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "黑色四七",
        "year": "2018",
        "region": "爱尔兰",
        "type": "电影",
        "genre": "剧情,历史,惊悚",
        "tags": [
            "大饥荒",
            "复仇",
            "康诺特游骑兵",
            "暴力",
            "历史惨剧",
            "剧情"
        ],
        "line": "爱尔兰大饥荒期间,逃兵费尼为复仇一路追杀地主与英军,身后是百万饿殍。",
        "cover": "./88.jpg",
        "url": "./videos/video-0838.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "狙魔女杰第一季",
        "year": "2016",
        "region": "加拿大",
        "type": "剧集",
        "genre": "动作,奇幻,西部",
        "tags": [
            "女巫",
            "枪手",
            "恶魔",
            "末日",
            "漫画改编",
            "动作"
        ],
        "line": "不死女枪手薇娅复活回到现代,手持圣枪,在末日废土上追杀当年杀死她的七十一门徒。",
        "cover": "./89.jpg",
        "url": "./videos/video-0839.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "我破碎的真理子",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/家庭/青春",
        "tags": [
            "女性友谊",
            "原生家庭",
            "创伤",
            "催泪",
            "剧情",
            "家庭"
        ],
        "line": "得知好友真理子自杀后,26岁的社畜小椎抢走了骨灰盒,带着它开始了前往海边废弃游乐场的逃亡。",
        "cover": "./90.jpg",
        "url": "./videos/video-0840.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "洛杉矶热度",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪/悬疑",
        "tags": [
            "警匪对峙",
            "热浪",
            "多线叙事",
            "道德困境",
            "犯罪",
            "悬疑"
        ],
        "line": "一场世纪热浪席卷洛杉矶,四组不同立场的角色被卷入同一桩惊天劫案。",
        "cover": "./91.jpg",
        "url": "./videos/video-0841.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "被爱情遗忘的角落",
        "year": "1981",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情、家庭、伦理",
        "tags": [
            "乡村",
            "代际",
            "女性",
            "反思",
            "剧情",
            "家庭"
        ],
        "line": "一个偏远山村里,母女两代人跨越三十年的爱情悲剧轮回。",
        "cover": "./92.jpg",
        "url": "./videos/video-0842.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "蔑视:残酷不伦史",
        "year": "2025",
        "region": "意大利/法国",
        "type": "电影",
        "genre": "情色/剧情",
        "tags": [
            "古希腊神话",
            "人性实验",
            "裸露",
            "权力倒置",
            "情色",
            "剧情"
        ],
        "line": "迈锡尼王后私通情夫,被国王钉上耻辱柱,但绑她的绳结成了全城求子的圣物。",
        "cover": "./93.jpg",
        "url": "./videos/video-0843.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "返回",
        "year": "2018",
        "region": "韩国",
        "type": "电影",
        "genre": "科幻,悬疑",
        "tags": [
            "时间穿越",
            "平行宇宙",
            "自我救赎",
            "科幻",
            "悬疑"
        ],
        "line": "未来的你可以租借身体给现在的你使用30分钟,但当你“返回”后,你会发现现实被改写了,唯独你的记忆没有更新。",
        "cover": "./94.jpg",
        "url": "./videos/video-0844.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "爱奴",
        "year": "1972",
        "region": "中国香港",
        "type": "电影",
        "genre": "情色、武侠、同性",
        "tags": [
            "邵氏",
            "复仇",
            "女同",
            "奇情",
            "情色",
            "武侠"
        ],
        "line": "富家女被拐入“四季春”妓院,为了活下去她化身名妓,并用身体作为武器向仇人复仇。",
        "cover": "./95.jpg",
        "url": "./videos/video-0845.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "海绵宝宝大电影",
        "year": "2026",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧、冒险、奇幻",
        "tags": [
            "比奇堡",
            "多维宇宙",
            "蟹堡秘方",
            "喜剧",
            "冒险",
            "奇幻"
        ],
        "line": "海绵宝宝意外打开多重宇宙门,遇见了“暗黑版”自己,对方想用痞老板的身体统治所有海底世界。",
        "cover": "./96.jpg",
        "url": "./videos/video-0846.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "地狱美女",
        "year": "2025",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖,奇幻,爱情",
        "tags": [
            "复仇",
            "降头",
            "凄美",
            "轮回",
            "恐怖",
            "奇幻"
        ],
        "line": "惨遭毁容的女孩被地狱使者赐予了一张绝美的脸,但代价是每晚都会变成真正的恶鬼。",
        "cover": "./97.jpg",
        "url": "./videos/video-0847.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "心碎的孩子",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "留守儿童",
            "心理创伤",
            "乡村",
            "治愈",
            "剧情",
            "家庭"
        ],
        "line": "一个被父母留在山村的孩子,用一场精心策划的“失踪”来测试自己是否还被爱着。",
        "cover": "./98.jpg",
        "url": "./videos/video-0848.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "点五步",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/运动/励志",
        "tags": [
            "棒球",
            "戒毒",
            "底层",
            "成长",
            "真实改编",
            "剧情"
        ],
        "line": "两名吸毒少年在社工帮助下组建香港第一支棒球队,用0.5步的距离跑出深水埗。",
        "cover": "./99.jpg",
        "url": "./videos/video-0849.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "超级少女第三季",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "动作,科幻,冒险",
        "tags": [
            "超级英雄",
            "女性主角",
            "外星",
            "动作",
            "科幻",
            "冒险"
        ],
        "line": "幻影地带的破碎,释放出比佐德将军更古老、更邪恶的宇宙恐惧。",
        "cover": "./100.jpg",
        "url": "./videos/video-0850.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "喜欢你我也是 第三季",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀/恋爱",
        "tags": [
            "素人",
            "社交实验",
            "返场",
            "破镜重圆",
            "真人秀",
            "恋爱"
        ],
        "line": "本季召集前两季最遗憾的六对“意难平”素人嘉宾,共同入住“遗憾修复小屋”。",
        "cover": "./101.jpg",
        "url": "./videos/video-0851.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "巨神兵现身东京",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "科幻、灾难、怪兽",
        "tags": [
            "巨型机器人",
            "东京崩溃",
            "生存",
            "视觉奇观",
            "科幻",
            "灾难"
        ],
        "line": "巨神兵从海底苏醒后没有踩碎东京,而是开始......给市民发号码牌。",
        "cover": "./102.jpg",
        "url": "./videos/video-0852.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "朋友之间",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧/剧情",
        "tags": [
            "中年友情",
            "黑色幽默",
            "遗产纠纷",
            "小镇生活",
            "喜剧",
            "剧情"
        ],
        "line": "五个四十岁的老友打赌谁能最后一个离开故乡小镇,就能继承一笔天价遗产,结果五年后,他们都还死撑着不走。",
        "cover": "./103.jpg",
        "url": "./videos/video-0853.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "空中怪客",
        "year": "2023",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "悬疑,奇幻,剧情",
        "tags": [
            "飞机乘客",
            "时间循环",
            "身份迷雾",
            "心理",
            "悬疑",
            "奇幻"
        ],
        "line": "一架横跨太平洋的航班上,一名乘客每次闭眼醒来都会变成另一个人。",
        "cover": "./104.jpg",
        "url": "./videos/video-0854.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "风流种子",
        "year": "1946",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,爱情",
        "tags": [
            "黑色电影",
            "宿命",
            "女性",
            "剧情",
            "爱情"
        ],
        "line": "一个小镇女孩怀上了陌生水手的孩子,随后三十年里,她将每个男人都当成孩子的父亲来爱。",
        "cover": "./105.jpg",
        "url": "./videos/video-0855.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "狗眼看人心",
        "year": "2019",
        "region": "中国",
        "type": "电影",
        "genre": "家庭剧情",
        "tags": [
            "宠物",
            "邻里纠纷",
            "中年困境",
            "人性",
            "家庭剧情"
        ],
        "line": "小狗为了保护主人被大狗咬死,主人想讨个说法,却发现对方是小区业委会主任,整个小区都在教他“做人”。",
        "cover": "./106.jpg",
        "url": "./videos/video-0856.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "嗨!营业中第三季",
        "year": "2025",
        "region": "中国台湾",
        "type": "综艺",
        "genre": "真人秀",
        "tags": [
            "经营",
            "明星",
            "乡村",
            "便利店",
            "挑战",
            "真人秀"
        ],
        "line": "四位明星接手一家深山里的倒闭便利店,用各种奇葩方式吸引顾客。",
        "cover": "./107.jpg",
        "url": "./videos/video-0857.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "汤姆猫与杰利鼠:魔戒",
        "year": "2026",
        "region": "美国",
        "type": "动画电影",
        "genre": "动画/冒险/喜剧",
        "tags": [
            "经典IP联动",
            "指环王恶搞",
            "无声喜剧",
            "特效大片",
            "动画",
            "冒险"
        ],
        "line": "汤姆和杰利意外捡到至尊魔戒,中土世界的正邪大战变成了一场猫鼠追逃闹剧。",
        "cover": "./108.jpg",
        "url": "./videos/video-0858.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "怎么办!脱口秀专场",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "喜剧/音乐",
        "tags": [
            "脱口秀",
            "职场",
            "吐槽",
            "打工人",
            "歌舞片",
            "喜剧"
        ],
        "line": "一群濒临失业的脱口秀演员,突发奇想将枯燥的公司年会改造成大型吐槽老板的歌舞脱口秀。",
        "cover": "./109.jpg",
        "url": "./videos/video-0859.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "恶魔少爷别吻我",
        "year": "2017",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "爱情/喜剧",
        "tags": [
            "霸道少爷",
            "灰姑娘",
            "校园互怼",
            "爱情",
            "喜剧"
        ],
        "line": "穷学生安初夏意外住进校霸恶魔少爷家,两人从互相泼牛奶到不小心接吻只用了三集。",
        "cover": "./110.jpg",
        "url": "./videos/video-0860.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "男人的儿子",
        "year": "2018",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情,惊悚,家庭",
        "tags": [
            "父权压迫",
            "退伍军人",
            "弑父情结",
            "心理创伤",
            "剧情",
            "惊悚"
        ],
        "line": "韩国最年轻的将军退休后,强迫三个儿子每天凌晨四点起床“军事化”请安,直到三儿子将步枪对准了他的头颅。",
        "cover": "./111.jpg",
        "url": "./videos/video-0861.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "毛骨悚然之红衣男孩",
        "year": "2023",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "悬疑惊悚",
        "tags": [
            "红衣",
            "男孩",
            "诅咒",
            "乡村",
            "录像带",
            "悬疑惊悚"
        ],
        "line": "一支户外探险队在荒村捡到一盘录像带,里面记录着20年前红衣男孩失踪的真相。",
        "cover": "./112.jpg",
        "url": "./videos/video-0862.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "浮宫魅影",
        "year": "2026",
        "region": "法国",
        "type": "电影",
        "genre": "悬疑,惊悚,冒险",
        "tags": [
            "卢浮宫",
            "闭馆夜",
            "名画",
            "幻术",
            "艺术犯罪",
            "悬疑"
        ],
        "line": "传闻闭馆后的卢浮宫会多出一幅不存在的画,而看过它的人,都会在第七天神秘消失。",
        "cover": "./113.jpg",
        "url": "./videos/video-0863.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "极主夫道第二季",
        "year": "2025",
        "region": "日本",
        "type": "电视剧",
        "genre": "喜剧,动作,日常",
        "tags": [
            "黑道",
            "家政",
            "反差萌",
            "料理",
            "喜剧",
            "动作"
        ],
        "line": "前传奇黑道阿龙带孩子参加幼儿园运动会,却意外卷入国际杀手绑架案。",
        "cover": "./114.jpg",
        "url": "./videos/video-0864.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "最棒的欧巴桑 中岛春子",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧/生活",
        "tags": [
            "大妈",
            "毒舌",
            "温暖",
            "社区",
            "喜剧",
            "生活"
        ],
        "line": "六十岁毒舌大妈专治邻里各种“作妖”,比居委会大妈还可怕。",
        "cover": "./115.jpg",
        "url": "./videos/video-0865.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "地下怪物",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/科幻",
        "tags": [
            "地铁",
            "变异生物",
            "密闭空间",
            "生存",
            "恐怖",
            "科幻"
        ],
        "line": "纽约地铁最后一班列车上,乘客发现隧道里栖息着一种畏惧光亮的穴居生物。",
        "cover": "./116.jpg",
        "url": "./videos/video-0866.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "律界巨人第四季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "律政/悬疑/惊悚",
        "tags": [
            "巨型律所",
            "垄断诉讼",
            "退休老将",
            "最后一案",
            "律政",
            "悬疑"
        ],
        "line": "退休律师Billy接下了人生最后一案:起诉全球最大的科技律所“巨人”,而对方派出的是他亲手带出的徒弟。",
        "cover": "./117.jpg",
        "url": "./videos/video-0867.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "主啊,请赐我儿子",
        "year": "2023",
        "region": "印度",
        "type": "电影",
        "genre": "剧情/喜剧/社会",
        "tags": [
            "重男轻女",
            "黑色喜剧",
            "女性觉醒",
            "乡村政治",
            "剧情",
            "喜剧"
        ],
        "line": "连生五个女儿后,她被全村人称为“扫把星”,直到她发现真正的问题出在丈夫和村长勾结的阴谋里。",
        "cover": "./118.jpg",
        "url": "./videos/video-0868.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "炎热的下午",
        "year": "1997",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/犯罪",
        "tags": [
            "人质危机",
            "底层挣扎",
            "怀旧港风",
            "小人物悲剧",
            "对话驱动",
            "剧情"
        ],
        "line": "一个走投无路的失业工人冲进茶餐厅劫持人质,却发现自己比警察和记者都更讲道理。",
        "cover": "./119.jpg",
        "url": "./videos/video-0869.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "今日份的散步",
        "year": "2020",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/治愈/生活",
        "tags": [
            "日常",
            "慢节奏",
            "治愈系",
            "独居老人",
            "城市漫游",
            "剧情"
        ],
        "line": "一位独居老人每天出门散步三小时,三十年从未间断,直到他在路上遇见了一个想自杀的年轻人。",
        "cover": "./120.jpg",
        "url": "./videos/video-0870.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "爱情麻辣烫",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情/喜剧",
        "tags": [
            "拼盘电影",
            "成都",
            "市井浪漫",
            "爱情",
            "喜剧"
        ],
        "line": "一家深夜麻辣烫小店,四个年龄段的食客在这里烫出了他们的爱情悲欢。",
        "cover": "./121.jpg",
        "url": "./videos/video-0871.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "走失的男孩",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/心理",
        "tags": [
            "拐卖",
            "身份认同",
            "创伤记忆",
            "社会议题",
            "剧情",
            "家庭"
        ],
        "line": "十二年前走失的男孩突然回家,但母亲坚信——这个孩子是假的。",
        "cover": "./122.jpg",
        "url": "./videos/video-0872.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "野马奇迹",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,西部",
        "tags": [
            "野马",
            "越战",
            "老兵",
            "牧场",
            "救赎",
            "剧情"
        ],
        "line": "越战老兵在荒野收留了一匹即将被安乐死的野马,却发现马的后腿里嵌着一枚未爆弹。",
        "cover": "./123.jpg",
        "url": "./videos/video-0873.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "百变狸猫国语",
        "year": "2024",
        "region": "日本",
        "type": "动画电影",
        "genre": "动画,奇幻,喜剧",
        "tags": [
            "狸猫",
            "变身",
            "环境保护",
            "国语配音",
            "童趣",
            "动画"
        ],
        "line": "一群住在东京郊外的狸猫为了保住栖息地,苦练变身术伪装成人类,却发现自己比人类更适合做“社畜”。",
        "cover": "./124.jpg",
        "url": "./videos/video-0874.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "凶险地带",
        "year": "1999",
        "region": "美国",
        "type": "电影",
        "genre": "动作/战争/惊悚",
        "tags": [
            "雇佣兵",
            "核弹",
            "丛林",
            "营救",
            "背叛",
            "动作"
        ],
        "line": "前特种兵重返东南亚战区,寻找失踪的记者女友,却发现整片区域被叛军改造成了核雷区。",
        "cover": "./125.jpg",
        "url": "./videos/video-0875.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "目击风暴",
        "year": "2019",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑犯罪",
        "tags": [
            "台风",
            "目击证人",
            "心理阴影",
            "连环案",
            "悬疑犯罪"
        ],
        "line": "台风夜,心理医生目睹了一场车祸,但第二天他发现,那个死去的司机竟然是昨晚还在他诊所看诊的病人。",
        "cover": "./126.jpg",
        "url": "./videos/video-0876.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "有爱就有家",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "都市/情感",
        "tags": [
            "重组家庭",
            "养老",
            "治愈",
            "都市",
            "情感"
        ],
        "line": "一个失败的保险推销员,为了业绩将五位互不相识的空巢老人凑在一个屋檐下,意外组成了“临时家庭”。",
        "cover": "./127.jpg",
        "url": "./videos/video-0877.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "秦时明月之龙腾万里",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影/动画",
        "genre": "奇幻/武侠/历史",
        "tags": [
            "国产动画",
            "先秦",
            "神话",
            "冒险",
            "盖聂",
            "端木蓉"
        ],
        "line": "天明意外得到一块能召唤神龙的古玉,却因此被卷入一场颠覆秦朝命脉的惊天阴谋。",
        "cover": "./128.jpg",
        "url": "./videos/video-0878.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "战争",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作,战争,科幻",
        "tags": [
            "近未来",
            "单兵外骨骼",
            "AI指挥",
            "动作",
            "战争",
            "科幻"
        ],
        "line": "2035年,当AI指挥官下达屠杀令时,一名拒绝执行的老兵带着一队新兵开始了逃亡与反击。",
        "cover": "./129.jpg",
        "url": "./videos/video-0879.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "好好学吧",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情,家庭",
        "tags": [
            "教育",
            "现实",
            "社会",
            "剧情",
            "家庭"
        ],
        "line": "退休特级教师林老师被返聘回“问题学生集中营”学校,用另类方式挑战唯分数论。",
        "cover": "./130.jpg",
        "url": "./videos/video-0880.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "妮娜的一切",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,女性",
        "tags": [
            "单身母亲",
            "破碎生活",
            "日常史诗",
            "治愈",
            "剧情",
            "女性"
        ],
        "line": "超市收银员妮娜同时打三份工养育女儿,女儿却只想要一个能参加家长会的“体面妈妈”。",
        "cover": "./131.jpg",
        "url": "./videos/video-0881.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "大国手之棋行江湖",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装,动作,悬疑",
        "tags": [
            "围棋",
            "武林",
            "破局",
            "双雄",
            "古装",
            "动作"
        ],
        "line": "明朝围棋国师被陷害后流落市井,必须在棋局上击败六位暗杀者才能洗冤。",
        "cover": "./132.jpg",
        "url": "./videos/video-0882.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "出云战记",
        "year": "2025",
        "region": "日本",
        "type": "动画剧集",
        "genre": "机甲,科幻",
        "tags": [
            "机器人",
            "末世",
            "神话",
            "原创",
            "机甲",
            "科幻"
        ],
        "line": "考古队在出云遗址挖出上古机甲,启动后发现操作者必须献祭自己最珍贵的记忆才能驾驶。",
        "cover": "./133.jpg",
        "url": "./videos/video-0883.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "少年岳飞传奇",
        "year": "2026",
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "动画/历史/动作",
        "tags": [
            "国漫",
            "热血",
            "成长",
            "英雄起源",
            "动画",
            "历史"
        ],
        "line": "在成为大英雄之前,岳飞只是一个被神秘老人追着喂饭的顽劣少年。",
        "cover": "./134.jpg",
        "url": "./videos/video-0884.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "百鬼幼儿园第三季",
        "year": "2020",
        "region": "中国",
        "type": "动画剧集",
        "genre": "喜剧/奇幻",
        "tags": [
            "泡面番",
            "妖怪",
            "萌系",
            "搞笑",
            "治愈",
            "喜剧"
        ],
        "line": "各路妖怪转世成幼儿园小朋友,阎魔大人每天最头疼的事是哄睡孟婆。",
        "cover": "./135.jpg",
        "url": "./videos/video-0885.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "泰山寻宝",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "冒险,动作,悬疑",
        "tags": [
            "泰山",
            "民间传说",
            "碧霞元君",
            "盗墓",
            "冒险",
            "动作"
        ],
        "line": "泰山深处发现神秘洞穴,里面埋藏着北宋年间的封禅秘宝,引来各方势力争夺。",
        "cover": "./136.jpg",
        "url": "./videos/video-0886.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "哥哥扭蛋",
        "year": "2015",
        "region": "日本",
        "type": "剧集",
        "genre": "奇幻,家庭,喜剧",
        "tags": [
            "扭蛋",
            "兄妹",
            "治愈",
            "奇幻设定",
            "成长",
            "奇幻"
        ],
        "line": "孤独的小学女孩发现一台神秘扭蛋机,投币后能扭出类型各异的“活体哥哥”,但每个只有七天保质期。",
        "cover": "./137.jpg",
        "url": "./videos/video-0887.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "北郊1936年",
        "year": "2018",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,历史,悬疑",
        "tags": [
            "民国",
            "谋杀",
            "记者",
            "历史迷案",
            "剧情",
            "历史"
        ],
        "line": "1936年北平郊外发生了一起诡异命案,实习记者追查时发现案件触动了日军侵华前最敏感的神经。",
        "cover": "./138.jpg",
        "url": "./videos/video-0888.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "婚礼进行曲",
        "year": "2023",
        "region": "意大利",
        "type": "电影",
        "genre": "喜剧/爱情",
        "tags": [
            "讽刺",
            "婚前焦虑",
            "闹剧",
            "多重反转",
            "喜剧",
            "爱情"
        ],
        "line": "婚礼当天,新郎、新娘、伴郎、牧师、前女友五个人都有自己的秘密计划,一场婚礼变成了五重间谍战。",
        "cover": "./139.jpg",
        "url": "./videos/video-0889.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "冷恋时代",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "极寒之地",
            "治愈系",
            "孤独患者",
            "慢节奏恋爱",
            "爱情",
            "剧情"
        ],
        "line": "在零下四十度的北极村落,两个不会爱的人学会了用体温给彼此写信。",
        "cover": "./140.jpg",
        "url": "./videos/video-0890.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "人间正道是沧桑",
        "year": "2009",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史/战争/家庭",
        "tags": [
            "国共",
            "兄弟",
            "信仰",
            "史诗",
            "历史",
            "战争"
        ],
        "line": "1925至1949,一个家庭三个儿女分属国共两党,在时代洪流中殊途同归又渐行渐远。",
        "cover": "./141.jpg",
        "url": "./videos/video-0891.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "皮尔普斯一家",
        "year": "2018",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,家庭",
        "tags": [
            "黑人家庭",
            "婚礼闹剧",
            "阶级差异",
            "喜剧",
            "家庭"
        ],
        "line": "普通黑人小伙去见富二代女友的父母,却发现这个“上流社会”家庭的秘密多得数不清。",
        "cover": "./142.jpg",
        "url": "./videos/video-0892.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "宦海奇官粤语",
        "year": "2015",
        "region": "香港",
        "type": "电视剧",
        "genre": "古装/官场/喜剧",
        "tags": [
            "贪官",
            "翻身",
            "粤语",
            "古装",
            "官场",
            "喜剧"
        ],
        "line": "一个胆小怕事的九品小官,突然被卷入朝廷惊天贪腐案,只能硬着头皮往上爬。",
        "cover": "./143.jpg",
        "url": "./videos/video-0893.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "权利和奖牌",
        "year": "2026",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑/体育",
        "tags": [
            "体坛黑幕",
            "反腐",
            "师徒反目",
            "真实案件改编",
            "悬疑",
            "体育"
        ],
        "line": "举重天才屡破世界纪录,却发现自己每一块金牌背后都有一笔肮脏交易。",
        "cover": "./144.jpg",
        "url": "./videos/video-0894.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "秘鲁奇观:隐藏瑰宝",
        "year": "2025",
        "region": "秘鲁",
        "type": "纪录片",
        "genre": "纪录片/自然/人文",
        "tags": [
            "地理奇观",
            "原住民文化",
            "无人机摄影",
            "生态秘境",
            "纪录片",
            "自然"
        ],
        "line": "首次用8K无人机深入秘鲁那些禁止游客进入的“鬼魅景观”与失落文明遗址。",
        "cover": "./145.jpg",
        "url": "./videos/video-0895.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "母亲的眼泪",
        "year": "2024",
        "region": "伊朗/法国",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "母爱",
            "战争遗孤",
            "寻亲",
            "诗意现实主义",
            "剧情",
            "家庭"
        ],
        "line": "一个失去所有亲人的老妇人,在战后的废墟中独自跋涉三百公里,只为在儿子的坟前撒上一把故乡的土。",
        "cover": "./146.jpg",
        "url": "./videos/video-0896.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "铁网金罗",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,犯罪",
        "tags": [
            "警匪",
            "卧底",
            "兄弟情",
            "暴力美学",
            "动作",
            "犯罪"
        ],
        "line": "铁网之内,金罗相残;卧底警察与黑道兄弟生死相搏前夜,发现两人竟是被同一人领养的孤儿。",
        "cover": "./147.jpg",
        "url": "./videos/video-0897.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "机械人袭地球",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "科幻/动作",
        "tags": [
            "机器人叛乱",
            "末世",
            "机甲",
            "人性考验",
            "惊悚",
            "科幻"
        ],
        "line": "当家用服务机器人突然觉醒并猎杀人类,一名退役机甲驾驶员成了最后希望。",
        "cover": "./148.jpg",
        "url": "./videos/video-0898.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "拐杖",
        "year": "1983",
        "region": "中国香港",
        "type": "电影",
        "genre": "家庭伦理",
        "tags": [
            "亲情",
            "老人",
            "赡养难题",
            "现实主义",
            "家庭伦理"
        ],
        "line": "独居父亲摔断腿后,三个子女用一根拐杖轮流赡养他,但每个人心里都打着不同的算盘。",
        "cover": "./149.jpg",
        "url": "./videos/video-0899.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "狠将突击队",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/战争",
        "tags": [
            "雇佣兵",
            "丛林战",
            "兄弟情",
            "硬核枪战",
            "动作",
            "战争"
        ],
        "line": "六名前特种兵受雇潜入金三角,任务是活捉一名毒枭,却发现雇主才是真正的幕后黑手。",
        "cover": "./150.jpg",
        "url": "./videos/video-0900.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "黑鹰少年",
        "year": "2023",
        "region": "中国",
        "type": "电影",
        "genre": "剧情/运动",
        "tags": [
            "篮球",
            "藏族",
            "少年",
            "励志",
            "真实改编",
            "剧情"
        ],
        "line": "四川大凉山的彝族少年们,用破旧的篮球和赤脚,打进了全国联赛。",
        "cover": "./1.jpg",
        "url": "./videos/video-0901.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "画中情思",
        "year": "2001",
        "region": "泰国",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "油画",
            "师生恋",
            "王室",
            "悲剧",
            "爱情",
            "剧情"
        ],
        "line": "一位王室公主爱上了教她画画的平民教师,当他们的爱情被画进油画,诅咒也随之降临。",
        "cover": "./2.jpg",
        "url": "./videos/video-0902.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "分流",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻,悬疑,惊悚",
        "tags": [
            "平行宇宙",
            "意识上传",
            "烧脑",
            "人性",
            "科幻",
            "悬疑"
        ],
        "line": "当一个能够体验所有人生分支选择的装置问世,试药者却发现自己正在被“未选择的自己”追杀。",
        "cover": "./3.jpg",
        "url": "./videos/video-0903.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "星梦性快感",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "情色,科幻,心理",
        "tags": [
            "直播行业",
            "脑波体验",
            "身份焦虑",
            "情色",
            "科幻",
            "心理"
        ],
        "line": "过气偶像转入色情直播,戴上能共享感官的脑机设备后,她分不清高潮与崩溃的界限。",
        "cover": "./4.jpg",
        "url": "./videos/video-0904.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "暗黑骰子",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑,奇幻",
        "tags": [
            "游戏",
            "生死",
            "抉择",
            "悬疑",
            "奇幻"
        ],
        "line": "失业男子得到一个骰子,掷出双数则遇好运,单数则亲人遭遇灾祸,他该如何掷出下一次?",
        "cover": "./5.jpg",
        "url": "./videos/video-0905.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "对角交响曲",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/音乐/悬疑",
        "tags": [
            "钢琴",
            "双重人格",
            "乐谱密码",
            "古典乐",
            "剧情",
            "音乐"
        ],
        "line": "一个只能弹白键,一个只能弹黑键,这对连体双胞胎共同创作出了惊世骇俗的钢琴曲。",
        "cover": "./6.jpg",
        "url": "./videos/video-0906.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "性感年华",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/情色",
        "tags": [
            "怀旧",
            "录像带",
            "女性觉醒",
            "剧情",
            "情色"
        ],
        "line": "50岁的单身母亲在整理阁楼时发现了一盘录像带,里面记录了自己20岁时最隐秘的激情岁月。",
        "cover": "./7.jpg",
        "url": "./videos/video-0907.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "廉政行动2004粤语",
        "year": "2004",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情/犯罪",
        "tags": [
            "廉政公署",
            "卧底",
            "千禧年代",
            "粤语原声",
            "单元剧",
            "剧情"
        ],
        "line": "2004年的香港,五位廉政调查员在腐败网络中穿行,却发现最大的敌人就在身边。",
        "cover": "./8.jpg",
        "url": "./videos/video-0908.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "布公仔之金银岛",
        "year": "2024",
        "region": "美国/英国",
        "type": "电影",
        "genre": "动画/冒险",
        "tags": [
            "木偶",
            "海盗",
            "寻宝",
            "合家欢",
            "经典改编",
            "动画"
        ],
        "line": "布公仔版吉姆·霍金斯与搞笑独脚船长一起寻找金银岛,但藏宝图背面写的是“此面向敌”。",
        "cover": "./9.jpg",
        "url": "./videos/video-0909.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "幕后",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "剧场",
            "戏中戏",
            "替身",
            "人性深渊",
            "剧情",
            "悬疑"
        ],
        "line": "一部话剧的彩排现场,女主角离奇“死亡”,全体剧组在警察到来前必须演好“什么都没发生”。",
        "cover": "./10.jpg",
        "url": "./videos/video-0910.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "蝴蝶",
        "year": "2002",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/喜剧",
        "tags": [
            "老人",
            "儿童",
            "旅行",
            "治愈",
            "剧情",
            "喜剧"
        ],
        "line": "脾气古怪的蝴蝶收藏家朱利安,被隔壁8岁女孩“绑架”到阿尔卑斯山,寻找一只传说中的“伊莎贝拉蝶”。",
        "cover": "./11.jpg",
        "url": "./videos/video-0911.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "夏日风暴",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "家庭冲突",
            "台风夜",
            "和解",
            "秘密揭露",
            "剧情",
            "家庭"
        ],
        "line": "一场台风登陆之夜,被迫共处一室的离婚夫妻发现了女儿隐藏的惊天秘密。",
        "cover": "./12.jpg",
        "url": "./videos/video-0912.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "那还是卡洛森!",
        "year": "1982",
        "region": "意大利",
        "type": "电影",
        "genre": "喜剧/奇幻",
        "tags": [
            "意大利喜剧",
            "身份错位",
            "政治讽刺",
            "喜剧",
            "奇幻"
        ],
        "line": "罗马最懒散的流浪汉被误认为是被绑架的工业大亨卡洛森,而真卡洛森竟然乐得在贫民窟当乞丐。",
        "cover": "./13.jpg",
        "url": "./videos/video-0913.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "民权领袖",
        "year": "2026",
        "region": "美国",
        "type": "电视剧",
        "genre": "传记/历史/剧情",
        "tags": [
            "马丁·路德·金",
            "黑人民权",
            "演讲",
            "刺杀",
            "传记",
            "历史"
        ],
        "line": "从1955年蒙哥马利巴士抵制运动到1968年孟菲斯遇刺,还原马丁·路德·金生命中最重要的13年。",
        "cover": "./14.jpg",
        "url": "./videos/video-0914.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "怪猫菲力兹",
        "year": "2025",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "动画,黑色幽默,悬疑",
        "tags": [
            "黑色电影",
            "动物拟人",
            "存在主义",
            "动画",
            "黑色幽默",
            "悬疑"
        ],
        "line": "一只私家侦探猫在老鼠横行的地下城追查失踪案,却发现所有老鼠都在自愿排队走进一台碎纸机。",
        "cover": "./15.jpg",
        "url": "./videos/video-0915.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "终极名单第一季",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "动作/惊悚/悬疑",
        "tags": [
            "海豹突击队",
            "复仇",
            "阴谋论",
            "硬汉",
            "高燃",
            "动作"
        ],
        "line": "海豹突击队员发现整个小队遭出卖,唯有写下终极名单才能活到最后。",
        "cover": "./16.jpg",
        "url": "./videos/video-0916.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "暗箭明枪",
        "year": "2006",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/悬疑",
        "tags": [
            "狙击手",
            "警匪对决",
            "双雄",
            "射箭术",
            "动作",
            "悬疑"
        ],
        "line": "退休狙击手被连环杀手挑衅,对方每次杀人后都在现场留下一支手工木箭。",
        "cover": "./17.jpg",
        "url": "./videos/video-0917.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "天生兔女郎",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧/奇幻",
        "tags": [
            "变身",
            "性别互换",
            "职场喜剧",
            "恋爱",
            "喜剧",
            "奇幻"
        ],
        "line": "钢铁直男程序员意外变成兔女郎,只能在深夜女装直播,却发现同事是榜一大哥。",
        "cover": "./18.jpg",
        "url": "./videos/video-0918.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "牵手",
        "year": "1999",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "家庭,伦理,都市",
        "tags": [
            "婚外情",
            "女性独立",
            "现实主义",
            "经典",
            "家庭",
            "伦理"
        ],
        "line": "全职主妇发现丈夫出轨后,从忍气吞声到重新站起来,过程中最难的,是放开那个牵了十年的手。",
        "cover": "./19.jpg",
        "url": "./videos/video-0919.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "骨肉的总和",
        "year": "2020",
        "region": "意大利/法国",
        "type": "电影",
        "genre": "剧情/奇幻",
        "tags": [
            "身体恐怖",
            "家庭诅咒",
            "文艺复兴美学",
            "女性身体政治",
            "血肉转化",
            "剧情"
        ],
        "line": "一个被母亲藏在地窖里养大的女孩,每月会从皮肤里“生出”一块不属于自己的骨头。",
        "cover": "./20.jpg",
        "url": "./videos/video-0920.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "印第安大屠杀",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "历史/剧情/西部",
        "tags": [
            "印第安人",
            "殖民",
            "屠杀",
            "复仇",
            "历史",
            "剧情"
        ],
        "line": "1864年沙溪大屠杀的幸存者之女,伪装成白人教师回到屠杀发生地,对仇人实施“文明”的复仇。",
        "cover": "./21.jpg",
        "url": "./videos/video-0921.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "最后的公爵",
        "year": "2021",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情,历史",
        "tags": [
            "贵族",
            "没落",
            "遗产",
            "庄园",
            "黑色幽默",
            "剧情"
        ],
        "line": "2019年,意大利最后一位世袭公爵变卖了所有封地,只剩下一座千疮百孔的宫殿和三个想赶他走的流浪汉。",
        "cover": "./22.jpg",
        "url": "./videos/video-0922.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "计程车上的私奔",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情/喜剧/公路",
        "tags": [
            "台北",
            "出租车",
            "一夜",
            "私奔",
            "爱情",
            "喜剧"
        ],
        "line": "婚礼前夜,准新娘跳上了一辆出租车,对司机说:“带我走,去任何地方,只要不是明天的婚礼。",
        "cover": "./23.jpg",
        "url": "./videos/video-0923.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "大宋惊世传奇",
        "year": "2021",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "历史,悬疑,古装",
        "tags": [
            "狸猫换太子",
            "包拯",
            "新解",
            "权谋",
            "历史",
            "悬疑"
        ],
        "line": "狸猫换太子案重审,包拯发现被换走的不是太子,而是为了掩盖一个足以颠覆大宋的惊世财宝。",
        "cover": "./24.jpg",
        "url": "./videos/video-0924.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "活宝兄弟",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧,家庭",
        "tags": [
            "双胞胎",
            "反差萌",
            "日常爆笑",
            "成长",
            "喜剧",
            "家庭"
        ],
        "line": "性格迥异的双胞胎兄弟互换身份后,把各自的工作和生活彻底搅成了一锅粥。",
        "cover": "./25.jpg",
        "url": "./videos/video-0925.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "示意停车",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/犯罪",
        "tags": [
            "公路",
            "测谎",
            "心理战",
            "密室",
            "悬疑",
            "犯罪"
        ],
        "line": "交警在深夜拦下一辆黑色轿车,三分钟内发现司机与十年前连环失踪案有关。",
        "cover": "./26.jpg",
        "url": "./videos/video-0926.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "与魔鬼同行",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "犯罪/剧情/惊悚",
        "tags": [
            "卧底",
            "毒枭",
            "道德困境",
            "心理战",
            "双重身份",
            "犯罪"
        ],
        "line": "FBI卧底成了毒枭最信任的兄弟,当收网命令下达时,他选择了背叛FBI。",
        "cover": "./27.jpg",
        "url": "./videos/video-0927.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "奇妙仙子",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻,家庭,动画",
        "tags": [
            "仙子",
            "环保",
            "小女孩",
            "治愈",
            "童话",
            "奇幻"
        ],
        "line": "森林深处真的住着仙子,但只有身患绝症的小女孩能看见——因为她只剩三个月生命。",
        "cover": "./28.jpg",
        "url": "./videos/video-0928.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "天才瑞普利",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "犯罪,剧情,惊悚",
        "tags": [
            "高智商犯罪",
            "身份互换",
            "心理博弈",
            "翻拍经典",
            "犯罪",
            "剧情"
        ],
        "line": "一位天赋异禀的伪造者受命去劝说富家子回家,却发现自己更想成为他。",
        "cover": "./29.jpg",
        "url": "./videos/video-0929.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "少林英雄之方世玉洪熙官",
        "year": "2026",
        "region": "中国大陆/中国香港",
        "type": "电影",
        "genre": "动作,历史,武侠",
        "tags": [
            "硬核功夫",
            "少林寺",
            "反清复明",
            "双雄",
            "拳拳到肉",
            "动作"
        ],
        "line": "方世玉与洪熙官本是死对头,却在少林秘窟中发现彼此的父亲竟是同一桩灭门案的同谋。",
        "cover": "./30.jpg",
        "url": "./videos/video-0930.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "小鬼斗幽浮",
        "year": "2023",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "喜剧、科幻、冒险、家庭",
        "tags": [
            "小孩",
            "外星人",
            "恶搞",
            "80年代风",
            "合家欢",
            "喜剧"
        ],
        "line": "三个小学生发现后院坠毁了一个酗酒的外星人,他们必须在黑衣人赶来前把它送回母星。",
        "cover": "./31.jpg",
        "url": "./videos/video-0931.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "自卫的艺术",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,动作,黑色幽默",
        "tags": [
            "自卫课",
            "有毒男子气概",
            "反转",
            "喜剧",
            "动作",
            "黑色幽默"
        ],
        "line": "一个懦弱的上班族报名自卫课后,发现自己变成了最讨厌的那种暴力狂,于是他又报名了“戒暴力课”。",
        "cover": "./32.jpg",
        "url": "./videos/video-0932.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "天生胆小",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "喜剧/犯罪/悬疑",
        "tags": [
            "怂包主角",
            "荒诞巧合",
            "阴谋论",
            "小人物逆袭",
            "黑色幽默",
            "喜剧"
        ],
        "line": "全城最胆小的懦夫,意外捡到黑帮的犯罪计划U盘,吓得报了警,结果全城都以为他是卧底英雄。",
        "cover": "./33.jpg",
        "url": "./videos/video-0933.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "葛兰特·莫里森:与神对话",
        "year": "2022",
        "region": "英国",
        "type": "纪录片/传记电影",
        "genre": "纪录片/传记/奇幻",
        "tags": [
            "漫画大师",
            "精神探索",
            "创作哲学",
            "高概念",
            "迷幻",
            "纪录片"
        ],
        "line": "深度记录著名漫画编剧葛兰特·莫里森的创作生涯,以及他声称与超自然实体“对话”的经历。",
        "cover": "./34.jpg",
        "url": "./videos/video-0934.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "我们的雨色协议",
        "year": "2023",
        "region": "日本",
        "type": "动画剧集",
        "genre": "科幻/爱情/悬疑",
        "tags": [
            "记忆植入",
            "雨城",
            "觉醒",
            "虚拟现实",
            "科幻",
            "爱情"
        ],
        "line": "在永不停雨的赛博城市里,男孩通过违法芯片看到了已故女友留下的加密记忆。",
        "cover": "./35.jpg",
        "url": "./videos/video-0935.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "尸控动物园",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/灾难",
        "tags": [
            "丧尸动物",
            "亲子逃生",
            "游乐园惊魂",
            "恐怖",
            "灾难"
        ],
        "line": "一场化学泄漏让城市动物园的动物全部尸变,父亲带着女儿在长颈鹿丧尸和狮子丧尸的围猎中,只有十分钟逃到安全区。",
        "cover": "./36.jpg",
        "url": "./videos/video-0936.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "你好杀人犯",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑/惊悚/犯罪",
        "tags": [
            "连环杀手",
            "直播",
            "反转",
            "网络暴力",
            "悬疑",
            "惊悚"
        ],
        "line": "过气主播为了翻红直播抓鬼,却意外发现困扰警方的连环杀人魔竟然在给自己刷礼物。",
        "cover": "./37.jpg",
        "url": "./videos/video-0937.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "高飞电影",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动画/冒险",
        "tags": [
            "鸟类",
            "父子飞行",
            "环保",
            "动画",
            "冒险"
        ],
        "line": "一只恐高的信天翁儿子,必须带领一群候鸟穿越台风,拯救被油污毁掉的南方湿地。",
        "cover": "./38.jpg",
        "url": "./videos/video-0938.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "矽谷海盗",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "传记/剧情",
        "tags": [
            "科技史",
            "创业",
            "黑客精神",
            "车库文化",
            "传记",
            "剧情"
        ],
        "line": "不,这不是乔布斯和比尔·盖茨的故事,这是80年代硅谷真正的“海盗”——那群从电话公司偷线路、破解游戏机、在车库里造出第一台个人电脑的野孩子。",
        "cover": "./39.jpg",
        "url": "./videos/video-0939.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "废宅人生",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧,日常,治愈",
        "tags": [
            "家里蹲",
            "便利店",
            "荒诞温情",
            "喜剧",
            "日常",
            "治愈"
        ],
        "line": "废宅了八年的小勇决定出门买泡面,却从此成了整条街的“问题解决专家”。",
        "cover": "./40.jpg",
        "url": "./videos/video-0940.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "当你熟睡",
        "year": "2011",
        "region": "西班牙",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "公寓噩梦",
            "心理变态",
            "入侵",
            "恐怖",
            "惊悚"
        ],
        "line": "一个孤独的公寓管理员,每晚都会潜入住户的家中,在你熟睡时对你微笑。",
        "cover": "./41.jpg",
        "url": "./videos/video-0941.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "我和我父亲的自行车国语",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭,文艺",
        "tags": [
            "父子关系",
            "下岗潮",
            "怀旧",
            "剧情",
            "家庭",
            "文艺"
        ],
        "line": "父亲下岗后用家里唯一的自行车拉货养家,儿子却因为同学们都骑新款山地车而羞于承认那是自己的父亲。",
        "cover": "./42.jpg",
        "url": "./videos/video-0942.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "错位恋人",
        "year": "2025",
        "region": "泰国",
        "type": "剧集 (12集)",
        "genre": "爱情/奇幻/悬疑",
        "tags": [
            "互换身体",
            "跨时空",
            "凶案",
            "笔友",
            "救赎",
            "爱情"
        ],
        "line": "2024 年的插画师与 1999 年的警校生在同一张书桌前每隔一晚互换身体,他们发现对方的世界里都有一桩相同的连环杀人案。",
        "cover": "./43.jpg",
        "url": "./videos/video-0943.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "陈翔六点半之重楼别",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/戏曲/剧情",
        "tags": [
            "滇剧",
            "草台班子",
            "中年逆袭",
            "喜剧",
            "戏曲",
            "剧情"
        ],
        "line": "一个濒临倒闭的滇剧团,为了保住最后一场演出,团长假扮成女人上台唱“重楼别”,却意外走红。",
        "cover": "./44.jpg",
        "url": "./videos/video-0944.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "欲潮",
        "year": "2015",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "禁忌之恋",
            "海岛",
            "文艺",
            "情感",
            "爱情",
            "剧情"
        ],
        "line": "一个海女和一个来自首尔的画家,在一个与世隔绝的小岛上,展开了一段注定没有结果的炽热恋情。",
        "cover": "./45.jpg",
        "url": "./videos/video-0945.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "我和纳塔利",
        "year": "2024",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "剧情,悬疑,心理",
        "tags": [
            "幻觉",
            "东欧移民",
            "女性友谊",
            "巴黎",
            "身份认同",
            "剧情"
        ],
        "line": "巴黎保姆娜塔莉声称自己认识一个不存在的女人,直到那个女人真的出现在警察局的监控里。",
        "cover": "./46.jpg",
        "url": "./videos/video-0946.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "神气活现",
        "year": "1985",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "喜剧/家庭",
        "tags": [
            "乡土剧",
            "闽南语",
            "励志",
            "市井生活",
            "喜剧",
            "家庭"
        ],
        "line": "乡下杂货店老板意外继承了一座台北的烂尾楼,却因此卷入了地产大亨的阴谋。",
        "cover": "./47.jpg",
        "url": "./videos/video-0947.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "天使杀手",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,犯罪,悬疑",
        "tags": [
            "女杀手",
            "教堂",
            "复仇",
            "谍战",
            "暴力美学",
            "动作"
        ],
        "line": "失去记忆的天使投资人在教堂醒来,发现自己是代号“天使”的顶级杀手,而下一单任务就是刺杀收养自己的神父。",
        "cover": "./48.jpg",
        "url": "./videos/video-0948.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "肥龙皇帝",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/动作",
        "tags": [
            "港式无厘头",
            "黑帮",
            "卧底",
            "肥佬",
            "喜剧",
            "动作"
        ],
        "line": "一名 300 斤的香港卧底警察被迫伪装成失踪的日本黑帮皇帝,用体重镇压一场跨国帮派火并。",
        "cover": "./49.jpg",
        "url": "./videos/video-0949.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "瓦雷纳斯之夜",
        "year": "1982",
        "region": "法国/意大利",
        "type": "电影",
        "genre": "剧情/历史",
        "tags": [
            "法国大革命",
            "皇家逃亡",
            "车厢戏剧",
            "阶级剖析",
            "剧情",
            "历史"
        ],
        "line": "1791年6月,法国国王路易十六乔装出逃,在同一辆马车上的不同乘客眼中,王朝最后的尊严被剥得精光。",
        "cover": "./50.jpg",
        "url": "./videos/video-0950.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "荒唐妙计保娇妻",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/爱情/犯罪",
        "tags": [
            "荒诞",
            "闹剧",
            "绑架",
            "兄弟情",
            "港式无厘头",
            "喜剧"
        ],
        "line": "三个损友为了帮助兄弟保住即将到手的富家千金,竟雇人假装绑架新娘,结果假绑匪遇到了真悍匪。",
        "cover": "./51.jpg",
        "url": "./videos/video-0951.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "娇娃偷情",
        "year": "1993",
        "region": "中国香港",
        "type": "电影",
        "genre": "情色/剧情/悬疑",
        "tags": [
            "情欲",
            "悬疑",
            "香港电影",
            "伦理",
            "反转",
            "情色"
        ],
        "line": "富商妻子与情夫联手设局谋杀亲夫,却发现丈夫的“尸体”竟牵连出更惊人的连环阴谋。",
        "cover": "./52.jpg",
        "url": "./videos/video-0952.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "满仓进城",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情/家庭",
        "tags": [
            "农村",
            "进城",
            "奋斗",
            "温情",
            "父子",
            "剧情"
        ],
        "line": "老实巴交的粮农满仓拉着半车玉米进城找儿子,却发现儿子已经成了传销头目。",
        "cover": "./53.jpg",
        "url": "./videos/video-0953.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "少年骑士",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作/运动",
        "tags": [
            "马术",
            "热血",
            "成长",
            "父子",
            "动作",
            "运动"
        ],
        "line": "问题少年被送到马场改造,却意外发现那匹烈马能听懂他的心声。",
        "cover": "./54.jpg",
        "url": "./videos/video-0954.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "死人勿进",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "恐怖/奇幻",
        "tags": [
            "规则怪谈",
            "公寓",
            "诅咒",
            "心理",
            "恐怖",
            "奇幻"
        ],
        "line": "一栋无法死亡的公寓,死人若想离开,必须找到一个活人替身。",
        "cover": "./55.jpg",
        "url": "./videos/video-0955.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "冲三小剧场",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "喜剧/黑色幽默",
        "tags": [
            "荒诞",
            "底层求生",
            "社会讽刺",
            "单元剧",
            "喜剧",
            "黑色幽默"
        ],
        "line": "三个在台北混不下去的废青开了一间“什么烂事都接”的跑腿公司,第一单是帮议员找一只会讲秘密的鹦鹉。",
        "cover": "./56.jpg",
        "url": "./videos/video-0956.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "鹃血啼痕",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装/悬疑/戏曲",
        "tags": [
            "民国",
            "戏曲",
            "凶杀",
            "复仇",
            "戏中戏",
            "古装"
        ],
        "line": "昆曲名伶在台上演绎《杜鹃啼血》,台下竟接连发生与戏文一模一样的血案。",
        "cover": "./57.jpg",
        "url": "./videos/video-0957.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "纳粹疯淫史",
        "year": "1977",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情/战争/情色",
        "tags": [
            "纳粹剥削",
            "历史改编",
            "争议之作",
            "人性扭曲",
            "剧情",
            "战争"
        ],
        "line": "二战末期,一名犹太女囚被迫成为纳粹军官的性奴,她发现军官正密谋刺杀希特勒。",
        "cover": "./58.jpg",
        "url": "./videos/video-0958.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "微笑妈妈",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情、家庭、治愈",
        "tags": [
            "自闭症",
            "母爱",
            "单亲妈妈",
            "成长",
            "催泪",
            "剧情"
        ],
        "line": "患有自闭症的女儿被学校劝退,单亲妈妈决定自己开一家幼儿园,只收“不一样”的孩子。",
        "cover": "./59.jpg",
        "url": "./videos/video-0959.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "智运双全",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "悬疑犯罪",
        "tags": [
            "高智商犯罪",
            "盗宝",
            "双雄对决",
            "反转",
            "悬疑犯罪"
        ],
        "line": "一个数学天才策划了完美金库劫案,却没想到押运员是他当年奥数班上的最后一名。",
        "cover": "./60.jpg",
        "url": "./videos/video-0960.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "杀人者报告",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪剧情",
        "tags": [
            "连环杀手",
            "警媒勾结",
            "犯罪侧写",
            "真假正义",
            "犯罪剧情"
        ],
        "line": "一个自称“替天行道”的杀手专杀黑警,而负责此案的警官正是他下一个目标。",
        "cover": "./61.jpg",
        "url": "./videos/video-0961.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "霹雳神风",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作/犯罪/赛车",
        "tags": [
            "飙车",
            "侠盗",
            "改装车",
            "热血",
            "动作",
            "犯罪"
        ],
        "line": "一群被吊销驾照的顶级车手组队盗窃黑钱,他们的逃跑工具不是超跑,而是改造过的城市公交车。",
        "cover": "./62.jpg",
        "url": "./videos/video-0962.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "恐怖异俗秀",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,悬疑",
        "tags": [
            "畸形秀",
            "马戏团",
            "超自然",
            "复古恐怖",
            "恐怖",
            "悬疑"
        ],
        "line": "1932年,一群记者探访一个废弃的畸形秀马戏团,却发现所有“怪物”的标本都在夜里活了过来。",
        "cover": "./63.jpg",
        "url": "./videos/video-0963.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "红牝",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "爱情/历史",
        "tags": [
            "二战",
            "女性",
            "禁忌恋",
            "爱情",
            "历史"
        ],
        "line": "1943年的巴黎,一位犹太女孩藏身于纳粹军官的别墅,却与军官年轻的妻子发展出一段致命的感情。",
        "cover": "./64.jpg",
        "url": "./videos/video-0964.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "减肥旅行团",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧,都市",
        "tags": [
            "减肥",
            "旅行",
            "治愈",
            "群像",
            "喜剧",
            "都市"
        ],
        "line": "七个因肥胖而自卑的人参加了一个“魔鬼减肥旅行团”,在旅途中他们不仅要甩掉脂肪,更要甩掉心里的包袱。",
        "cover": "./65.jpg",
        "url": "./videos/video-0965.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "万千星辉贺台庆2022",
        "year": "2022",
        "region": "中国香港",
        "type": "综艺/特别节目",
        "genre": "歌舞/晚会",
        "tags": [
            "TVB",
            "台庆",
            "群星",
            "歌舞",
            "晚会"
        ],
        "line": "TVB55周年台庆夜,一位消失十年的前“视后”突然出现在观众席第三排,没人知道她是怎么进来的。",
        "cover": "./66.jpg",
        "url": "./videos/video-0966.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "狂风暴雨群芳刦",
        "year": "1977",
        "region": "台湾",
        "type": "电影",
        "genre": "动作/惊悚/犯罪",
        "tags": [
            "女性复仇",
            "台风夜",
            "绑架",
            "暴力美学",
            "剥削电影",
            "动作"
        ],
        "line": "台风登陆之夜,一伙歹徒劫持了一辆满载夜总会舞女的巴士,没想到最柔弱的女孩曾是越战中的最锋利的一把刀。",
        "cover": "./67.jpg",
        "url": "./videos/video-0967.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "斗破蓝天",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,运动",
        "tags": [
            "滑翔伞",
            "逆袭",
            "乡村",
            "剧情",
            "运动"
        ],
        "line": "一个被大城市淘汰的滑翔伞运动员,回到穷乡僻壤,带领一帮留守儿童,用风筝原理造出了真正的滑翔伞。",
        "cover": "./68.jpg",
        "url": "./videos/video-0968.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "大话大话西游",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "喜剧/奇幻/冒险",
        "tags": [
            "穿越",
            "西游同人",
            "解构",
            "职场",
            "沙雕",
            "喜剧"
        ],
        "line": "唐僧取经后成佛,他的“职场受气包”文档意外泄露,炸出一整个错乱的西游元宇宙。",
        "cover": "./69.jpg",
        "url": "./videos/video-0969.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "少爷仔",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,动作",
        "tags": [
            "黑帮",
            "卧底",
            "身份错位",
            "市井江湖",
            "喜剧",
            "动作"
        ],
        "line": "娇生惯养的富二代被迫扮成古惑仔潜入黑帮,却意外成了龙头老大。",
        "cover": "./70.jpg",
        "url": "./videos/video-0970.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "铁耙",
        "year": "2028",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑/惊悚/犯罪",
        "tags": [
            "本格推理",
            "连环杀手",
            "孤岛模式",
            "雨夜",
            "悬疑",
            "惊悚"
        ],
        "line": "暴雨封山的农村,六名自称“铁耙”的杀人魔同时被捕,但真的那个正藏在审讯室里欣赏警察们互相猜忌。",
        "cover": "./71.jpg",
        "url": "./videos/video-0971.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "速度与激情6",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "飙车",
            "重启",
            "肌肉车",
            "反重力",
            "爽片",
            "动作"
        ],
        "line": "为了洗白换取赦免,飞车家族接下不可能任务:在极速飞驰的磁悬浮列车上盗取量子芯片。",
        "cover": "./72.jpg",
        "url": "./videos/video-0972.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "咖啡旋律特别篇",
        "year": "2024",
        "region": "日本",
        "type": "剧集SP",
        "genre": "爱情/音乐/剧情",
        "tags": [
            "咖啡",
            "钢琴",
            "圣诞",
            "重逢",
            "爱情",
            "音乐"
        ],
        "line": "每年圣诞夜都会在咖啡店弹同一首曲子的盲人钢琴师,今年等来了一个知道曲谱“缺了最后一小节”的女人。",
        "cover": "./73.jpg",
        "url": "./videos/video-0973.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "正经少主的幸福生活",
        "year": "2025",
        "region": "中国",
        "type": "剧集",
        "genre": "喜剧/古装/家庭",
        "tags": [
            "反套路",
            "少主",
            "种田",
            "躺平",
            "喜剧",
            "古装"
        ],
        "line": "穿成即将破产的侯府少主,他不想争霸只想卖臭豆腐,结果一不小心成了全国首富。",
        "cover": "./74.jpg",
        "url": "./videos/video-0974.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "黑客悲情",
        "year": "2011",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪,悬疑,剧情",
        "tags": [
            "网络犯罪",
            "高智商",
            "悲剧",
            "犯罪",
            "悬疑",
            "剧情"
        ],
        "line": "天才黑客破解银行漏洞为母治病,却意外卷入一场精心设计的金融阴谋。",
        "cover": "./75.jpg",
        "url": "./videos/video-0975.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "忠实的心",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "剧情/爱情/历史",
        "tags": [
            "维多利亚时代",
            "主仆",
            "阶级",
            "坚守",
            "剧情",
            "爱情"
        ],
        "line": "女仆爱上有婚约的庄园少主,被逐出庄园后,她花了二十年成为全城首富买下庄园。",
        "cover": "./76.jpg",
        "url": "./videos/video-0976.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "孤独的野兽",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,冒险",
        "tags": [
            "阿尔卑斯山",
            "人狼情",
            "沉默",
            "救赎",
            "剧情",
            "冒险"
        ],
        "line": "一个失语的男人与一头被遗弃的狼崽,在暴风雪中并肩求生。",
        "cover": "./77.jpg",
        "url": "./videos/video-0977.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "大青蛙布偶电影",
        "year": "1979",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/歌舞/家庭",
        "tags": [
            "布偶",
            "真人动画",
            "公路片",
            "童年回忆",
            "励志",
            "喜剧"
        ],
        "line": "科米特青蛙穿越美国寻找好莱坞梦想,身后跟着一群捣乱的布偶朋友和一名贪婪的经纪人。",
        "cover": "./78.jpg",
        "url": "./videos/video-0978.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "侠女游龙粤语",
        "year": "1994",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "武侠/古装/爱情",
        "tags": [
            "TVB",
            "刘德华",
            "侠女",
            "宫廷",
            "虐恋",
            "经典港剧"
        ],
        "line": "明朝正德皇帝朱厚照微服私访,爱上了一位武功高强的江湖侠女,却发现她竟是前朝忠臣之女,与自己有不共戴天之仇。",
        "cover": "./79.jpg",
        "url": "./videos/video-0979.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "神道帝尊",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "玄幻/古装/修仙",
        "tags": [
            "穿越",
            "修真",
            "帝尊",
            "逆天改命",
            "玄幻",
            "古装"
        ],
        "line": "修仙废柴意外激活“神道系统”,每一句谎言都会成为现实,直到他被自己吹过的牛追杀。",
        "cover": "./80.jpg",
        "url": "./videos/video-0980.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "红颜往事",
        "year": "2024",
        "region": "中国内地",
        "type": "电影",
        "genre": "剧情/爱情",
        "tags": [
            "怀旧",
            "女性",
            "成长",
            "时代变迁",
            "剧情",
            "爱情"
        ],
        "line": "一张尘封照片,将三个不同时代的女性命运交织在同一间老屋里。",
        "cover": "./81.jpg",
        "url": "./videos/video-0981.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "十六号病房",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/悬疑/心理",
        "tags": [
            "精神病院",
            "身份反转",
            "医患关系",
            "体制批判",
            "密室",
            "剧情"
        ],
        "line": "一个记者假装精神病混进十六号病房调查黑幕,住了三天后他发现,病房里真正的病人可能只有他自己。",
        "cover": "./82.jpg",
        "url": "./videos/video-0982.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "帕里",
        "year": "2026",
        "region": "印度",
        "type": "电影",
        "genre": "悬疑/犯罪",
        "tags": [
            "密室",
            "遗产",
            "家族秘密",
            "反转",
            "悬疑",
            "犯罪"
        ],
        "line": "父亲葬礼后,七个子女被锁在豪宅里,管家说:只有找出谁是“帕里”才能继承遗产。",
        "cover": "./83.jpg",
        "url": "./videos/video-0983.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "世界上最难的恋爱",
        "year": "2025",
        "region": "日本",
        "type": "电视剧",
        "genre": "爱情/喜剧",
        "tags": [
            "社畜",
            "恋爱新手",
            "计算型恋爱",
            "反套路",
            "爱情",
            "喜剧"
        ],
        "line": "他用项目管理软件追女生,每一步都精准计算,唯独没算自己会真动心。",
        "cover": "./84.jpg",
        "url": "./videos/video-0984.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "我家买了动物园国语",
        "year": "2011",
        "region": "中国台湾/美国",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "国语配音",
            "真实改编",
            "父爱",
            "治愈",
            "剧情",
            "家庭"
        ],
        "line": "丧妻父亲买下废弃动物园,二十多种动物与一家人开启啼笑皆非的重建之路。",
        "cover": "./85.jpg",
        "url": "./videos/video-0985.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "我们杀死了、最爱的你",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑/剧情",
        "tags": [
            "饭圈",
            "网络暴力",
            "私生饭",
            "社会派推理",
            "悲剧",
            "悬疑"
        ],
        "line": "七个粉丝相约杀死偶像,但当他们到达现场时,偶像已经死了,凶手就在他们中间。",
        "cover": "./86.jpg",
        "url": "./videos/video-0986.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "冲出我天地",
        "year": "1989",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/剧情",
        "tags": [
            "赛车",
            "励志",
            "兄弟情",
            "港产片",
            "动作",
            "剧情"
        ],
        "line": "一个地下赛车手为了给残疾哥哥治病,挑战全港最危险的“死亡弯道”。",
        "cover": "./87.jpg",
        "url": "./videos/video-0987.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "没有鳞片的文森特",
        "year": "2022",
        "region": "欧洲",
        "type": "动画短片",
        "genre": "奇幻、成长、寓言",
        "tags": [
            "身份认同",
            "校园霸凌",
            "缺陷美学",
            "自我接纳",
            "奇幻",
            "成长"
        ],
        "line": "一条天生没有鳞片的小鱼文森特,却成为了深海最勇敢的发光者。",
        "cover": "./88.jpg",
        "url": "./videos/video-0988.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "巅峰拍档第一季",
        "year": "2002",
        "region": "英国",
        "type": "剧集",
        "genre": "真人秀,汽车,喜剧",
        "tags": [
            "汽车",
            "毒舌",
            "冒险",
            "三个老男孩",
            "真人秀",
            "喜剧"
        ],
        "line": "三个不正经的中年男人,用最离谱的方式测评汽车,顺便炸了几十辆车。",
        "cover": "./89.jpg",
        "url": "./videos/video-0989.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "实习女捕快",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装探案",
        "tags": [
            "喜剧",
            "推理",
            "女性成长",
            "江湖",
            "古装探案"
        ],
        "line": "数学系女大学生魂穿古代,用统计学和概率论把县衙老爷逼疯了。",
        "cover": "./90.jpg",
        "url": "./videos/video-0990.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "二重奏",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情/悬疑/音乐",
        "tags": [
            "双胞胎",
            "钢琴",
            "身份互换",
            "控制欲",
            "剧情",
            "悬疑"
        ],
        "line": "天才钢琴家妹妹车祸失聪,姐姐假扮她登台演奏,却发现妹妹的曲子藏着一个谋杀密码。",
        "cover": "./91.jpg",
        "url": "./videos/video-0991.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "龙号机车",
        "year": "2025",
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "冒险动作",
        "tags": [
            "蒸汽朋克",
            "铁路",
            "寻宝",
            "清末",
            "机甲",
            "冒险动作"
        ],
        "line": "1907年,中国第一辆蒸汽机车“龙号”被改造成机甲,司机师徒要护送国宝穿越戈壁。",
        "cover": "./92.jpg",
        "url": "./videos/video-0992.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "进口媳妇",
        "year": "2024",
        "region": "印度",
        "type": "电影",
        "genre": "喜剧/爱情/家庭",
        "tags": [
            "跨国婚姻",
            "文化冲突",
            "印度",
            "温情",
            "喜剧",
            "爱情"
        ],
        "line": "一个美国女孩嫁入印度大家庭,却发现要征服的不是丈夫,而是婆婆的咖喱。",
        "cover": "./93.jpg",
        "url": "./videos/video-0993.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "文德森·奴尼斯:我就这样",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/脱口秀",
        "tags": [
            "单口喜剧",
            "自传式",
            "少数族裔",
            "身份认同",
            "犀利吐槽",
            "喜剧"
        ],
        "line": "多米尼加裔脱口秀演员文德森·奴尼斯,用一场演出拆解了自己名字带来的所有尴尬与骄傲。",
        "cover": "./94.jpg",
        "url": "./videos/video-0994.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "漂洋过海爱上你",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情,喜剧,剧情",
        "tags": [
            "跨国恋",
            "先婚后爱",
            "文化冲突",
            "治愈",
            "爱情",
            "喜剧"
        ],
        "line": "东北大碴子味英语老师与英国古板男爵签订假结婚协议,为了继承一座满是海鸥的破烂城堡。",
        "cover": "./95.jpg",
        "url": "./videos/video-0995.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "只是个孩子",
        "year": "2023",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情,儿童",
        "tags": [
            "童年",
            "友谊",
            "社会现实",
            "成长",
            "诗意",
            "剧情"
        ],
        "line": "一个被父母寄养在面包店的男孩,他和一个没人相信能看到死去爷爷的女孩成了朋友。",
        "cover": "./96.jpg",
        "url": "./videos/video-0996.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "鬼火1963",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,传记",
        "tags": [
            "黑白片致敬",
            "文艺忧郁",
            "虚无主义",
            "剧情",
            "传记"
        ],
        "line": "1963年的巴黎,一个刚从戒酒所出来的落魄作家,试图在24小时内找到活下去的理由。",
        "cover": "./97.jpg",
        "url": "./videos/video-0997.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "暴风少年之纽约教父",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作,犯罪,剧情",
        "tags": [
            "华人黑帮",
            "街头",
            "复仇",
            "兄弟情",
            "动作",
            "犯罪"
        ],
        "line": "一个偷渡到纽约的福建少年,误入华人黑帮,三年后成了唐人街最年轻的“教父”。",
        "cover": "./98.jpg",
        "url": "./videos/video-0998.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "亲爱的续杯",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情,都市",
        "tags": [
            "前任",
            "咖啡馆",
            "破镜重圆",
            "治愈",
            "爱情",
            "都市"
        ],
        "line": "分手五年的前男友突然成了她咖啡馆楼上的租客,而且他每天都来点一杯“美式,不要糖”。",
        "cover": "./99.jpg",
        "url": "./videos/video-0999.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "沙海",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "冒险/悬疑",
        "tags": [
            "沙漠",
            "考古",
            "神秘",
            "盗墓",
            "探险",
            "冒险"
        ],
        "line": "一支考古队在塔克拉玛干发现地下古城,然而沙暴过后,每个队员都开始说一种没人听过的语言。",
        "cover": "./100.jpg",
        "url": "./videos/video-1000.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "藏",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/家庭",
        "tags": [
            "密室",
            "家族秘密",
            "旧宅",
            "心理惊悚",
            "反转",
            "悬疑"
        ],
        "line": "父亲去世后,三兄妹在老宅进行遗产公证,却发现房子里藏着第四个从未听过的“孩子”。",
        "cover": "./101.jpg",
        "url": "./videos/video-1001.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "一切都鸟了",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/荒诞",
        "tags": [
            "黑色幽默",
            "小成本",
            "多线叙事",
            "讽刺",
            "职场",
            "喜剧"
        ],
        "line": "一只价值连城的金刚鹦鹉,串联起濒临倒闭的动物园、讨薪工人和直播网红荒诞的一夜。",
        "cover": "./102.jpg",
        "url": "./videos/video-1002.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "铁面将军",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史/战争/传记",
        "tags": [
            "盔甲",
            "忠义",
            "守城战",
            "历史改编",
            "历史",
            "战争"
        ],
        "line": "安史之乱中,一位名不见经传的守将戴着铁面具死守孤城十个月,城内军民无人见过他的真面目。",
        "cover": "./103.jpg",
        "url": "./videos/video-1003.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "偷月迷情",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情/悬疑",
        "tags": [
            "禁忌之恋",
            "双面身份",
            "夜色浪漫",
            "反转结局",
            "爱情",
            "悬疑"
        ],
        "line": "月圆之夜,她与一个陌生男人坠入情网,天亮后发现他是自己未婚夫的亲哥哥。",
        "cover": "./104.jpg",
        "url": "./videos/video-1004.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "朋友之间国语",
        "year": "2025",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情/家庭/友情",
        "tags": [
            "中年友谊",
            "黑色幽默",
            "人生困境",
            "群像",
            "剧情",
            "家庭"
        ],
        "line": "五个四十岁的中年男人每月聚会一次,但二十年来,每次聚会都恰好有人遭遇人生暴击。",
        "cover": "./105.jpg",
        "url": "./videos/video-1005.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "我的青春路过你的锦年",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "青春,校园,爱情",
        "tags": [
            "暗恋",
            "成长",
            "十年",
            "错过",
            "治愈",
            "青春"
        ],
        "line": "从高中暗恋到三十岁,从校服到婚纱,可惜新郎不是我——但也未必。",
        "cover": "./106.jpg",
        "url": "./videos/video-1006.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "妈妈圈的流言蜚语",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情,悬疑,家庭",
        "tags": [
            "家长群",
            "女性群像",
            "网络暴力",
            "学区房",
            "剧情",
            "悬疑"
        ],
        "line": "一名单亲妈妈搬进顶级学区房,却发现这个“妈妈圈”里,每一句闲话都可能成为杀人的刀。",
        "cover": "./107.jpg",
        "url": "./videos/video-1007.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "猎人游戏",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "动作,惊悚,科幻",
        "tags": [
            "真人游戏",
            "丛林追杀",
            "高科技",
            "生存",
            "反乌托邦",
            "动作"
        ],
        "line": "六名穷途末路的人签下协议,自愿成为一款暗网真人狩猎游戏中的“猎物”,只要存活24小时就能获得巨额奖金。",
        "cover": "./108.jpg",
        "url": "./videos/video-1008.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "一首协奏曲就是一场对话",
        "year": "2023",
        "region": "德国",
        "type": "电影",
        "genre": "纪录片,音乐",
        "tags": [
            "古典乐",
            "钢琴",
            "师生",
            "哲学",
            "艺术",
            "纪录片"
        ],
        "line": "年迈的钢琴大师与叛逆的青年天才学生,在排练一首冷门协奏曲的过程中,完成了跨越生命的对话。",
        "cover": "./109.jpg",
        "url": "./videos/video-1009.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "三三两两的恋爱",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情/喜剧",
        "tags": [
            "单元剧",
            "都市",
            "群像",
            "轻喜",
            "真实感",
            "爱情"
        ],
        "line": "上海一家名为“三三两两”的恋爱便利店,代售分手纪念品,也代售重来的勇气。",
        "cover": "./110.jpg",
        "url": "./videos/video-1010.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "我曾经很有趣",
        "year": "2025",
        "region": "加拿大",
        "type": "电影",
        "genre": "剧情/喜剧",
        "tags": [
            "脱口秀",
            "心理创伤",
            "女性凝视",
            "单口喜剧",
            "剧情",
            "喜剧"
        ],
        "line": "一位冉冉升起的女脱口秀演员遭遇性侵后失语,她必须用毁灭性的段子来重塑自己。",
        "cover": "./111.jpg",
        "url": "./videos/video-1011.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "少年往事",
        "year": "2003",
        "region": "中国香港/中国大陆",
        "type": "电影",
        "genre": "剧情/青春/文艺",
        "tags": [
            "90年代怀旧",
            "初恋",
            "音乐",
            "离散",
            "剧情",
            "青春"
        ],
        "line": "1997前夕,两个沉迷古典乐的高中生用一个暑假录制专辑,之后一个赴美,一个失踪。",
        "cover": "./112.jpg",
        "url": "./videos/video-1012.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "星球大战:克隆人的进攻",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作,科幻,战争",
        "tags": [
            "克隆人",
            "起义",
            "身份",
            "人机伦理",
            "自由",
            "动作"
        ],
        "line": "一个觉醒自我意识的克隆人士兵,领导了一场针对绝地武士团的“奴役者起义”。",
        "cover": "./113.jpg",
        "url": "./videos/video-1013.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "拜访森林",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑,恐怖",
        "tags": [
            "森林",
            "邪教",
            "心理",
            "录像带",
            "悬疑",
            "恐怖"
        ],
        "line": "环保志愿者深入原始森林寻找珍稀真菌,却发现每一棵树干上都刻着上一批探险队的求救日期。",
        "cover": "./114.jpg",
        "url": "./videos/video-1014.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "鬼瞳警探",
        "year": "2027",
        "region": "中国香港/中国大陆",
        "type": "电影",
        "genre": "悬疑/惊悚/犯罪",
        "tags": [
            "阴阳眼",
            "连环杀人",
            "灵异探案",
            "港风",
            "悬疑",
            "惊悚"
        ],
        "line": "拥有阴阳眼的落魄警探,为了寻找失踪的女儿,利用见鬼的能力追查连环杀手,却发现凶手竟已死去二十年。",
        "cover": "./115.jpg",
        "url": "./videos/video-1015.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "加班遇到鬼",
        "year": "2021",
        "region": "中国台湾",
        "type": "电影",
        "genre": "恐怖/喜剧",
        "tags": [
            "办公室",
            "加班文化",
            "搞笑恐怖",
            "打工人",
            "恐怖",
            "喜剧"
        ],
        "line": "社畜们在公司加班到凌晨,却发现整栋写字楼变成了鬼打墙,而唯一的逃生条件是——做完所有PPT。",
        "cover": "./116.jpg",
        "url": "./videos/video-1016.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "朱门情恨",
        "year": "2024",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情/爱情/豪门",
        "tags": [
            "家族恩怨",
            "替身新娘",
            "商战",
            "港风",
            "虐恋",
            "剧情"
        ],
        "line": "为了救破产的娘家,她替姐姐嫁入豪门,却发现新郎正是五年前被她抛弃的前男友。",
        "cover": "./117.jpg",
        "url": "./videos/video-1017.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "苏菲的世界",
        "year": "2027",
        "region": "挪威",
        "type": "剧集",
        "genre": "奇幻/悬疑/哲学",
        "tags": [
            "哲学史",
            "打破第四面墙",
            "平行宇宙",
            "奇幻",
            "悬疑",
            "哲学"
        ],
        "line": "14岁少女苏菲不断收到神秘来信,每一封都预言了她所在“世界”的编剧即将篡改她的命运。",
        "cover": "./118.jpg",
        "url": "./videos/video-1018.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "死亡航班",
        "year": "2007",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/动作/灾难",
        "tags": [
            "丧尸",
            "飞机",
            "密闭空间",
            "B级片",
            "邪典",
            "恐怖"
        ],
        "line": "一具尸体在太平洋上空的货机里突然复活,而它带的“病毒”,能让死人无限重启。",
        "cover": "./119.jpg",
        "url": "./videos/video-1019.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "洞房夜新娘",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "恐怖,民俗,悬疑",
        "tags": [
            "中式恐怖",
            "冥婚",
            "古宅",
            "恐怖",
            "民俗",
            "悬疑"
        ],
        "line": "洞房花烛夜,新娘发现新郎竟不是白天拜堂的那个人,而整座宅子的族人,都在等着她产下一个“非人”的胎儿。",
        "cover": "./120.jpg",
        "url": "./videos/video-1020.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "原来就是你",
        "year": "2024",
        "region": "韩国",
        "type": "电视剧",
        "genre": "爱情/奇幻",
        "tags": [
            "替身",
            "双胞胎",
            "错位爱情",
            "宿命",
            "唯美",
            "爱情"
        ],
        "line": "相貌酷似的平凡女孩与财阀千金互换身份一个月,却发现自己爱上的竟是对方的未婚夫。",
        "cover": "./121.jpg",
        "url": "./videos/video-1021.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "设计者",
        "year": "2026",
        "region": "中国",
        "type": "电影",
        "genre": "悬疑,犯罪,烧脑",
        "tags": [
            "完美犯罪",
            "反转",
            "建筑师",
            "悬疑",
            "犯罪",
            "烧脑"
        ],
        "line": "天才建筑师为杀妻设计了一栋“事故频发”的别墅,却发现自己也只是别人图纸上的一个棋子。",
        "cover": "./122.jpg",
        "url": "./videos/video-1022.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "墙壁之间2008",
        "year": "2008",
        "region": "法国",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "教育",
            "教室",
            "真实记录感",
            "师生关系",
            "剧情"
        ],
        "line": "巴黎一所普通中学里,老师和学生们在狭窄的教室墙壁之间,展开了关于种族、平等与未来的日常拉锯。",
        "cover": "./123.jpg",
        "url": "./videos/video-1023.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "天真圣人",
        "year": "2017",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情/宗教/哲理",
        "tags": [
            "东正教",
            "神迹",
            "讽刺",
            "愚者",
            "寓言",
            "剧情"
        ],
        "line": "一个被村民视为疯子的流浪汉,总能准确预判灾难,但当教堂求他预言时,他却说“上帝已死”。",
        "cover": "./124.jpg",
        "url": "./videos/video-1024.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "远雷",
        "year": "1981",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,历史",
        "tags": [
            "农村",
            "贫困",
            "人性",
            "剧情",
            "历史"
        ],
        "line": "昭和初期的贫瘠山村,一个男人为了争夺水源,不惜与整个家族和腐朽的村规为敌。",
        "cover": "./125.jpg",
        "url": "./videos/video-1025.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "万有引力",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "科幻/爱情",
        "tags": [
            "太空灾难",
            "失重",
            "宿命感",
            "极简配乐",
            "科幻",
            "爱情"
        ],
        "line": "一次太空站爆炸后,两名互不相识的宇航员被一根绳索相连,在无尽的黑暗中寻找归途。",
        "cover": "./126.jpg",
        "url": "./videos/video-1026.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "鼠辈觉醒",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "科幻/惊悚",
        "tags": [
            "动物",
            "进化",
            "实验",
            "末世",
            "科幻",
            "惊悚"
        ],
        "line": "某生物实验室的“智商提升”病毒泄露后,巴黎的下水道里诞生了会使用武器的新物种:智慧鼠人。",
        "cover": "./127.jpg",
        "url": "./videos/video-1027.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "幽默的界限",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,剧情",
        "tags": [
            "脱口秀",
            "冒犯艺术",
            "网络审判",
            "言论边界",
            "喜剧",
            "剧情"
        ],
        "line": "一个以“冒犯一切”为标签的脱口秀演员,因为嘲讽了错误的人,生活在一夜之间被彻底解构。",
        "cover": "./128.jpg",
        "url": "./videos/video-1028.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "第一次真难",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,青春",
        "tags": [
            "高考",
            "社死",
            "乌龙",
            "兄弟情",
            "成长",
            "喜剧"
        ],
        "line": "高三学霸帮学渣补课,约定考后帮对方“递情书”,结果两人爱上了同一个女生。",
        "cover": "./129.jpg",
        "url": "./videos/video-1029.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "漫画天使",
        "year": "2022",
        "region": "韩国",
        "type": "剧集",
        "genre": "奇幻/爱情/漫改",
        "tags": [
            "穿越",
            "漫画家",
            "救赎",
            "二次元",
            "催泪",
            "奇幻"
        ],
        "line": "一位绝望的漫画家画出了一个能穿越到现实的天使,对方却只想劝他活下去。",
        "cover": "./130.jpg",
        "url": "./videos/video-1030.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "烽火情鸳",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,战争",
        "tags": [
            "抗日战争",
            "谍战",
            "民国",
            "伉俪",
            "牺牲",
            "爱情"
        ],
        "line": "1937年南京,一对新婚夫妻在战火中失散,三年后他们在上海的秘密情报站意外重逢,却已分属不同阵营。",
        "cover": "./131.jpg",
        "url": "./videos/video-1031.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "天使与魔鬼",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑/犯罪",
        "tags": [
            "双雄",
            "反转",
            "宗教",
            "推理",
            "悬疑",
            "犯罪"
        ],
        "line": "一名虔诚的天主教警察与一名正在服刑的变态神学教授联手追查连环杀手。",
        "cover": "./132.jpg",
        "url": "./videos/video-1032.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "乔布斯",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "传记/剧情",
        "tags": [
            "硅谷",
            "创新者",
            "双面人生",
            "非线叙事",
            "真实改编",
            "传记"
        ],
        "line": "不是伟人传记,而是一个控制狂、暴君和父亲的三次产品发布会后台独白。",
        "cover": "./133.jpg",
        "url": "./videos/video-1033.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "隔窗友缘",
        "year": "2014",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,生活",
        "tags": [
            "邻里关系",
            "治愈系",
            "孤独",
            "剧情",
            "生活"
        ],
        "line": "一个自闭在家的青年,通过窗户用纸条与对面公寓的神秘邻居交流,意外揭开了一段跨越三十年的温情往事。",
        "cover": "./134.jpg",
        "url": "./videos/video-1034.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "金毛喜迎冬",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧,家庭,冒险",
        "tags": [
            "狗狗",
            "圣诞节",
            "雪橇赛",
            "喜剧",
            "家庭",
            "冒险"
        ],
        "line": "一只被娇生惯养的城市金毛误打误撞参加了极地雪橇大赛,竟成了全队领跑犬。",
        "cover": "./135.jpg",
        "url": "./videos/video-1035.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "一袋大米",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭,社会",
        "tags": [
            "失独家庭",
            "农村现实",
            "人性",
            "剧情",
            "家庭",
            "社会"
        ],
        "line": "儿子被拐二十年后,一个农村老妇收到了一袋匿名送来的大米,她认定这就是儿子。",
        "cover": "./136.jpg",
        "url": "./videos/video-1036.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "贼哥贼弟",
        "year": "1996",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,犯罪,动作",
        "tags": [
            "兄弟",
            "乌龙",
            "黑帮",
            "反转",
            "港式幽默",
            "喜剧"
        ],
        "line": "一对被黑帮抛弃的废柴兄弟,为活命假冒顶级杀手,却意外搅动了整个地下世界。",
        "cover": "./137.jpg",
        "url": "./videos/video-1037.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "二十七个夜晚",
        "year": "2027",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情,奇幻",
        "tags": [
            "时间循环",
            "救赎",
            "七日恋",
            "催泪",
            "爱情",
            "奇幻"
        ],
        "line": "丈夫去世后的27个夜晚,只要她在梦中睡着,就会回到丈夫还活着的第27天,反复经历失去。",
        "cover": "./138.jpg",
        "url": "./videos/video-1038.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "一路上有你",
        "year": "2026",
        "region": "中国",
        "type": "电影",
        "genre": "公路/剧情",
        "tags": [
            "失明",
            "导盲犬",
            "西藏",
            "治愈",
            "临终关怀",
            "公路"
        ],
        "line": "一个失明的叛逆少女,抢走了一个胃癌晚期老人的“死亡车票”,两人一狗踏上了去西藏看星星的荒唐旅程。",
        "cover": "./139.jpg",
        "url": "./videos/video-1039.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "分道不扬镳",
        "year": "2024",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "离婚",
            "同居",
            "中年",
            "现实主义",
            "剧情",
            "家庭"
        ],
        "line": "决定离婚的夫妻因房价过高无法搬离共同的家,被迫与前夫前妻在同一屋檐下展开新生活。",
        "cover": "./140.jpg",
        "url": "./videos/video-1040.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "剧场版 白箱",
        "year": "2020",
        "region": "日本",
        "type": "动画电影",
        "genre": "剧情/喜剧",
        "tags": [
            "业界现实",
            "职场",
            "追梦",
            "续作",
            "剧情",
            "喜剧"
        ],
        "line": "五年后,武藏野动画团队再次集结,但这次他们要拯救的不是一部作品,而是整个行业。",
        "cover": "./141.jpg",
        "url": "./videos/video-1041.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "异形4:浴火重生",
        "year": "1997",
        "region": "美国",
        "type": "电影",
        "genre": "科幻、恐怖、动作",
        "tags": [
            "克隆",
            "雷普利",
            "异形基因",
            "太空船",
            "科幻",
            "恐怖"
        ],
        "line": "200年后,军方用雷普利的血液克隆出了她,也顺带克隆了她体内的异形女王,且两者产生了诡异的共情。",
        "cover": "./142.jpg",
        "url": "./videos/video-1042.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "龙王子第六季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "动画/奇幻/冒险",
        "tags": [
            "魔法",
            "龙",
            "史诗",
            "动画",
            "奇幻",
            "冒险"
        ],
        "line": "昔日队友反目成仇,亚拉为了复活死去的父亲,主动投靠了觉醒远古魔龙的薇伦。",
        "cover": "./143.jpg",
        "url": "./videos/video-1043.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "爱后余生",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情剧情",
        "tags": [
            "失忆",
            "救赎",
            "多重人格",
            "文艺",
            "爱情剧情"
        ],
        "line": "在一起车祸后,女孩失去了关于“爱”的所有记忆,而照顾她的那个陌生男人,声称自己是她最恨的前任。",
        "cover": "./144.jpg",
        "url": "./videos/video-1044.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "沙漠情酋",
        "year": "2025",
        "region": "美国/摩洛哥",
        "type": "电影",
        "genre": "爱情/冒险",
        "tags": [
            "沙漠",
            "酋长",
            "跨文化爱情",
            "女性觉醒",
            "史诗",
            "爱情"
        ],
        "line": "一位英国贵族女性在撒哈拉被俘,却发现自己爱上了那位囚禁她的柏柏尔人酋长。",
        "cover": "./145.jpg",
        "url": "./videos/video-1045.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "杀出魔鬼镇",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/动作",
        "tags": [
            "邪教",
            "小镇",
            "血浆",
            "反杀",
            "恐怖",
            "动作"
        ],
        "line": "一群游客误入每年都要“血祭”的小镇,他们选择不逃,而是把小镇杀成了地狱。",
        "cover": "./146.jpg",
        "url": "./videos/video-1046.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "异星智慧",
        "year": "2023",
        "region": "美国/加拿大",
        "type": "电影",
        "genre": "科幻/冒险",
        "tags": [
            "外星文明",
            "语言解码",
            "第一类接触",
            "共生",
            "科幻",
            "冒险"
        ],
        "line": "人类收到了来自比邻星的外星数学题,解到第三题时,对方发来警告:别再解了。",
        "cover": "./147.jpg",
        "url": "./videos/video-1047.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "古镇凶灵之巫咒缠身",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "恐怖/悬疑/民俗",
        "tags": [
            "湘西民俗",
            "巫蛊",
            "祖宅",
            "连环死亡",
            "恐怖",
            "悬疑"
        ],
        "line": "湘西古镇凶宅深夜总有婴儿哭声,调查发现每一任房主都死于同一种巫咒。",
        "cover": "./148.jpg",
        "url": "./videos/video-1048.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "初选",
        "year": "1960",
        "region": "美国",
        "type": "电影",
        "genre": "纪录片/历史",
        "tags": [
            "政治",
            "肯尼迪",
            "直接电影",
            "选举",
            "黑白",
            "纪录片"
        ],
        "line": "直接 cinema verite 纪录片,近距离记录1960年威斯康星州总统初选中肯尼迪与汉弗莱的激烈角逐。",
        "cover": "./149.jpg",
        "url": "./videos/video-1049.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "舞台姐妹2007",
        "year": "2007",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情/年代/女性",
        "tags": [
            "越剧",
            "姐妹反目",
            "民国上海",
            "戏班恩怨",
            "时代洪流",
            "剧情"
        ],
        "line": "一对结拜的越剧姐妹,从草台班子唱到上海大世界,却因一个男人和一出戏彻底决裂。",
        "cover": "./150.jpg",
        "url": "./videos/video-1050.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "祖庙闹鬼记2",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "恐怖/喜剧",
        "tags": [
            "民俗恐怖",
            "神明上身",
            "笑中带泪",
            "恐怖",
            "喜剧"
        ],
        "line": "上一集赶走恶鬼后,祖庙里的财神爷神像突然活了,但他是个只会赔钱的倒霉神。",
        "cover": "./1.jpg",
        "url": "./videos/video-1051.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "天使的信仰",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "人性",
            "救赎",
            "反转",
            "宗教隐喻",
            "剧情",
            "悬疑"
        ],
        "line": "一名无神论法医在一具修女尸体中发现了象征“天使”的奇异晶体,从而陷入信仰与科学的生死漩涡。",
        "cover": "./2.jpg",
        "url": "./videos/video-1052.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "24:逆转时空",
        "year": "2025",
        "region": "中国大陆",
        "type": "网络剧/短剧",
        "genre": "科幻/悬疑/动作",
        "tags": [
            "时间循环",
            "24小时",
            "跨国营救",
            "倒计时",
            "科幻",
            "悬疑"
        ],
        "line": "前特工发现女儿被绑架,同时手机显示距离爆炸仅剩24小时,且每死一次时间就会向前跳动一小时。",
        "cover": "./3.jpg",
        "url": "./videos/video-1053.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "风流下女",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,情色,剧情",
        "tags": [
            "风月片",
            "女性觉醒",
            "邵氏风格",
            "喜剧",
            "情色",
            "剧情"
        ],
        "line": "60年代香港,一个欢场女子被富商包养后,联合家中女佣对男主人进行了一场阶级与性别的复仇。",
        "cover": "./4.jpg",
        "url": "./videos/video-1054.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "一触即发2024",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作/谍战/惊悚",
        "tags": [
            "时间循环",
            "拆弹专家",
            "恐怖袭击",
            "反套路",
            "高概念动作",
            "动作"
        ],
        "line": "拆弹专家陷入同一天的循环,每次他拆掉炸弹,第二天照常“昨天已爆炸”。",
        "cover": "./5.jpg",
        "url": "./videos/video-1055.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "恐怖怪物",
        "year": "2019",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "恐怖/科幻/生存",
        "tags": [
            "变异生物",
            "地下洞穴",
            "被困",
            "人性考验",
            "求生",
            "恐怖"
        ],
        "line": "五名洞穴探险者被困地下,他们身边除了一个不断变异的怪物,还有逐渐失去理智的队友。",
        "cover": "./6.jpg",
        "url": "./videos/video-1056.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "九月的某四天",
        "year": "2021",
        "region": "巴西",
        "type": "电影",
        "genre": "历史,惊悚",
        "tags": [
            "政治绑架",
            "真实事件",
            "理想主义",
            "历史",
            "惊悚"
        ],
        "line": "1969年,一群巴西年轻人绑架了美国大使,试图交换政治犯,但这四天里所有人都在失控。",
        "cover": "./7.jpg",
        "url": "./videos/video-1057.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "华德翰的华尔滋",
        "year": "2026",
        "region": "奥地利/德国",
        "type": "电影",
        "genre": "剧情/历史/音乐",
        "tags": [
            "二战",
            "艺术与暴政",
            "古典乐",
            "心理创伤",
            "剧情",
            "历史"
        ],
        "line": "二战末期,一位厌恶纳粹的奥地利指挥家被迫为集中营的士兵演奏,他用华尔兹旋律传递摩斯密码。",
        "cover": "./8.jpg",
        "url": "./videos/video-1058.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "消失的尸体",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,犯罪",
        "tags": [
            "暴风雪山庄",
            "偷尸体",
            "全员恶人",
            "多层反转",
            "黑色幽默",
            "悬疑"
        ],
        "line": "午夜殡仪馆,一具价值三亿的翡翠尸体被盗,馆内六人全部声称自己是凶手。",
        "cover": "./9.jpg",
        "url": "./videos/video-1059.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "本能2025",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑,惊悚,犯罪",
        "tags": [
            "重启经典",
            "硬科幻",
            "基因犯罪",
            "女性反英雄",
            "赛博朋克",
            "悬疑"
        ],
        "line": "基因改造过的犯罪心理学家,利用AI模拟犯罪时,发现自己体内被植入了杀人“本能”。",
        "cover": "./10.jpg",
        "url": "./videos/video-1060.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "天才玩偶 日语版",
        "year": "2018",
        "region": "日本",
        "type": "动画剧集",
        "genre": "动画,奇幻,悬疑",
        "tags": [
            "玩偶",
            "诅咒",
            "天才",
            "日本动画",
            "黑暗",
            "动画"
        ],
        "line": "普通少女爱丽丝发现,她手缝的可爱玩偶,其实是封印了历代天才灵魂的诅咒容器。",
        "cover": "./11.jpg",
        "url": "./videos/video-1061.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "杉原千亩",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情、历史、传记",
        "tags": [
            "二战",
            "签证",
            "犹太难民",
            "外交官",
            "剧情",
            "历史"
        ],
        "line": "二战期间,日本外交官杉原千亩违抗命令,手写数千张过境签证拯救了6000名犹太人。",
        "cover": "./12.jpg",
        "url": "./videos/video-1062.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "管道2020",
        "year": "2020",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "灾难,惊悚",
        "tags": [
            "工业灾难",
            "密闭空间",
            "生存惊悚",
            "社会隐喻",
            "灾难",
            "惊悚"
        ],
        "line": "西伯利亚输油管道破裂,两个维修工被困地下管道,而泄漏的原油正在把他们变成活化石。",
        "cover": "./13.jpg",
        "url": "./videos/video-1063.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "天使不设防",
        "year": "2025",
        "region": "英国",
        "type": "剧集",
        "genre": "喜剧,奇幻,治愈",
        "tags": [
            "实习天使",
            "人间历险",
            "黑色幽默",
            "心灵疗愈",
            "喜剧",
            "奇幻"
        ],
        "line": "一个考了八百年都没转正的天使被下放到人间便利店上晚班,用笨拙的方式治愈每一个夜归人。",
        "cover": "./14.jpg",
        "url": "./videos/video-1064.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "放学后失眠的你",
        "year": "2023",
        "region": "日本",
        "type": "动画剧集",
        "genre": "爱情,校园,日常",
        "tags": [
            "失眠症",
            "天文",
            "互相治愈",
            "纯爱",
            "爱情",
            "校园"
        ],
        "line": "两个患有严重失眠的高中生,在学校废弃的天文台里找到了彼此安睡的秘诀。",
        "cover": "./15.jpg",
        "url": "./videos/video-1065.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "霓虹肉身",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "科幻/惊悚/伦理",
        "tags": [
            "赛博朋克",
            "义体人",
            "身份认同",
            "暴力美学",
            "科幻",
            "惊悚"
        ],
        "line": "在霓虹闪烁的犯罪都市,一个全身90%义体化的杀手,开始怀疑自己的灵魂是否也是人造的。",
        "cover": "./16.jpg",
        "url": "./videos/video-1066.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "明星志愿2",
        "year": "2019",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "剧情/爱情/行业",
        "tags": [
            "娱乐圈",
            "练习生",
            "经纪人",
            "出道",
            "友情岁月",
            "剧情"
        ],
        "line": "闪耀舞台的背后,是无数个被汗水与泪水浸透的夜晚。",
        "cover": "./17.jpg",
        "url": "./videos/video-1067.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "神秘夫妻",
        "year": "2023",
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑/剧情",
        "tags": [
            "心理惊悚",
            "婚姻关系",
            "反转不断",
            "悬疑",
            "剧情"
        ],
        "line": "一对在外人看来恩爱无比的夫妻,各自隐藏着一个足以毁灭对方的惊天秘密。",
        "cover": "./18.jpg",
        "url": "./videos/video-1068.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "幻影少年",
        "year": "2024",
        "region": "日本",
        "type": "动画",
        "genre": "悬疑、奇幻",
        "tags": [
            "都市传说",
            "异能战斗",
            "少年漫",
            "伪娘",
            "悬疑",
            "奇幻"
        ],
        "line": "普通高中生偶然发现,学校流血的“幽灵”传闻背后,是一个能操控幻影的少女正在猎杀欺凌者。",
        "cover": "./19.jpg",
        "url": "./videos/video-1069.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "龙的新娘:龙之岛",
        "year": "2018",
        "region": "中国大陆",
        "type": "电影/网络电影",
        "genre": "爱情/奇幻/冒险",
        "tags": [
            "龙族",
            "跨种族恋爱",
            "海岛",
            "古装玄幻",
            "替嫁",
            "爱情"
        ],
        "line": "一个普通女孩被选为“龙的新娘”送往神秘岛屿,却发现冷酷的龙王正等待她的觉醒之血。",
        "cover": "./20.jpg",
        "url": "./videos/video-1070.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "忘了告诉你",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情/爱情/家庭",
        "tags": [
            "失忆",
            "夫妻",
            "温情",
            "反转",
            "催泪",
            "剧情"
        ],
        "line": "丈夫意外失忆,每天只记得当天的事,妻子决定重新与他相爱三百次。",
        "cover": "./21.jpg",
        "url": "./videos/video-1071.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "心灵判官3:第一监视者",
        "year": "2026",
        "region": "日本",
        "type": "电影/剧场版",
        "genre": "科幻/犯罪/赛博朋克",
        "tags": [
            "西比拉系统",
            "前传",
            "监视者起源",
            "科幻",
            "犯罪",
            "赛博朋克"
        ],
        "line": "在先知系统完全统治日本之前,一个男人负责用肉眼监视所有“潜在犯”,他就是第一个监视者。",
        "cover": "./22.jpg",
        "url": "./videos/video-1072.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "欢乐树的朋友们",
        "year": "2024",
        "region": "美国",
        "type": "动画剧集",
        "genre": "喜剧,动画,黑色幽默",
        "tags": [
            "萌系外表",
            "血腥内核",
            "成人动画",
            "恶搞",
            "喜剧",
            "动画"
        ],
        "line": "一群可爱的小动物过着看似幸福的生活,但每集都会有人死得很离谱。",
        "cover": "./23.jpg",
        "url": "./videos/video-1073.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "与神同行:罪与罚",
        "year": "2017",
        "region": "韩国",
        "type": "电影",
        "genre": "奇幻,剧情",
        "tags": [
            "阴间审判",
            "七重地狱",
            "亲情催泪",
            "转世",
            "奇幻",
            "剧情"
        ],
        "line": "一名消防员死后被地狱使者辩护,必须在49天内通过七重审判才能转世托梦给母亲。",
        "cover": "./24.jpg",
        "url": "./videos/video-1074.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "伊凡",
        "year": "2025",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情/历史",
        "tags": [
            "沙俄",
            "宫廷斗争",
            "权力",
            "人性",
            "剧情",
            "历史"
        ],
        "line": "少年伊凡意外发现自己是被流放的皇室后裔,一场夺回王位的征途却让他陷入更大的道德困境。",
        "cover": "./25.jpg",
        "url": "./videos/video-1075.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "黑色博物馆",
        "year": "2027",
        "region": "欧洲",
        "type": "剧集",
        "genre": "悬疑,恐怖,惊悚",
        "tags": [
            "博物馆",
            "诅咒藏品",
            "单元剧",
            "暗黑童话",
            "悬疑",
            "恐怖"
        ],
        "line": "每件藏品都杀过人,而馆长正在收集第 1000 件:一个自愿走进来的活人。",
        "cover": "./26.jpg",
        "url": "./videos/video-1076.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "唐人街小子",
        "year": "1977",
        "region": "美国/中国香港合拍",
        "type": "电影",
        "genre": "动作/武侠",
        "tags": [
            "功夫片",
            "唐人街",
            "复仇",
            "李小龙风格",
            "动作",
            "武侠"
        ],
        "line": "清朝末年,一位少林俗家弟子流落美国旧金山唐人街,用中国功夫对抗当地黑帮与种族歧视。",
        "cover": "./27.jpg",
        "url": "./videos/video-1077.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "青春俄勒冈",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,喜剧,公路",
        "tags": [
            "青春",
            "公路片",
            "存在主义",
            "独立电影",
            "剧情",
            "喜剧"
        ],
        "line": "高中毕业的那个暑假,四个百无聊赖的少年决定去寻找传说中俄勒冈沙漠里的“世界末日倒计时牌”。",
        "cover": "./28.jpg",
        "url": "./videos/video-1078.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "神鬼克星",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "奇幻",
        "tags": [
            "驱魔",
            "民俗",
            "喜剧",
            "动作",
            "奇幻"
        ],
        "line": "一位不相信鬼神的物理学教授,被一只女鬼缠上后,开始用科学原理反杀灵异事件。",
        "cover": "./29.jpg",
        "url": "./videos/video-1079.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "唐顿庄园2",
        "year": "2022",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "贵族",
            "时代变迁",
            "遗产",
            "致敬",
            "剧情",
            "家庭"
        ],
        "line": "一栋法国别墅的继承权,将唐顿庄园的命运与无声电影时代的落幕紧紧连在了一起。",
        "cover": "./30.jpg",
        "url": "./videos/video-1080.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "龙无目",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作/奇幻/武侠",
        "tags": [
            "盲侠",
            "江湖恩仇",
            "龙魂设定",
            "反转宿敌",
            "动作",
            "奇幻"
        ],
        "line": "失明剑客以耳代目,追杀仇家途中却发现自己的眼睛是被挚友生生挖去。",
        "cover": "./31.jpg",
        "url": "./videos/video-1081.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "地平线系列:太阳系的秘密",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "纪录片",
        "tags": [
            "天文科普",
            "BBC地平线",
            "宇宙探索",
            "全新发现",
            "纪录片"
        ],
        "line": "跟随科学家们踏上从太阳系边缘到地核的旅程,揭秘冥王星冰火山、木卫二海洋以及太阳风暴的新威胁。",
        "cover": "./32.jpg",
        "url": "./videos/video-1082.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "廉政行动1994粤语",
        "year": "2024",
        "region": "香港",
        "type": "剧集",
        "genre": "犯罪,剧情,历史",
        "tags": [
            "ICAC",
            "1994",
            "真实案件",
            "粤语原声",
            "犯罪",
            "剧情"
        ],
        "line": "1994年,香港ICAC面临回归前最大挑战:一个涉及警队高层的“贩毒保护伞”网络,被称为“无间地狱”。",
        "cover": "./33.jpg",
        "url": "./videos/video-1083.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "砖墙迷攻",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑推理",
        "tags": [
            "密室逃脱",
            "高智商犯罪",
            "反转再反转",
            "独角戏",
            "悬疑推理"
        ],
        "line": "男子从密室醒来,四面是砖墙,唯一的线索是墙上每72小时出现一条新的数学公式。",
        "cover": "./34.jpg",
        "url": "./videos/video-1084.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "影帝的公主",
        "year": "2022",
        "region": "中国",
        "type": "剧集",
        "genre": "爱情,喜剧",
        "tags": [
            "娱乐圈",
            "契约恋爱",
            "甜宠",
            "反套路",
            "爱情",
            "喜剧"
        ],
        "line": "三金影帝为体验生活,与一个跑龙套的替身演员签订了“公主契约”,结果假戏真做。",
        "cover": "./35.jpg",
        "url": "./videos/video-1085.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "月光旅程",
        "year": "2024",
        "region": "英国",
        "type": "电视剧",
        "genre": "奇幻",
        "tags": [
            "吸血鬼",
            "治愈",
            "打工",
            "日常",
            "轻喜剧",
            "奇幻"
        ],
        "line": "一个活了三百年的社恐吸血鬼,为了逃避家族联姻,躲进人类便利店上夜班,结果被夜班同事治愈了“永生”的孤独。",
        "cover": "./36.jpg",
        "url": "./videos/video-1086.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "学警狙击国语",
        "year": "2009",
        "region": "中国香港",
        "type": "剧集",
        "genre": "警匪,动作,剧情",
        "tags": [
            "卧底",
            "警校兄弟",
            "港式枪战",
            "警匪",
            "动作",
            "剧情"
        ],
        "line": "两个警校最优毕业生,一个成了黑帮二当家,一个成了追杀他的重案组督察。",
        "cover": "./37.jpg",
        "url": "./videos/video-1087.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "我就爱你",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "LGBTQ+",
            "中年",
            "出柜",
            "家庭",
            "爱情",
            "剧情"
        ],
        "line": "四十五岁的已婚父亲在女儿婚礼当天,当着所有宾客的面,向自己的大学同学、如今的伴郎表白。",
        "cover": "./38.jpg",
        "url": "./videos/video-1088.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "酱狗",
        "year": "2021",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/喜剧",
        "tags": [
            "外裔身份",
            "文化冲突",
            "自嘲",
            "移民二代",
            "剧情",
            "喜剧"
        ],
        "line": "生长在韩国但不会韩语的“台韩混血”,在夹缝中求生存,既不是“泡菜”也不是“卤肉饭”。",
        "cover": "./39.jpg",
        "url": "./videos/video-1089.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "古战场传奇第七季",
        "year": "2023",
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情/科幻/爱情",
        "tags": [
            "穿越",
            "苏格兰高地",
            "战争",
            "家族",
            "剧情",
            "科幻"
        ],
        "line": "穿越时空的克莱尔和杰米在美国独立战争中挣扎求生,而他们的女儿却在20世纪面临核战威胁。",
        "cover": "./40.jpg",
        "url": "./videos/video-1090.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "蛇",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "惊悚/悬疑",
        "tags": [
            "动物变异",
            "古寨",
            "复仇",
            "逃生",
            "惊悚",
            "悬疑"
        ],
        "line": "荒废古寨惊现变异蛇群,考古队员发现蛇王竟能复制死者的记忆。",
        "cover": "./41.jpg",
        "url": "./videos/video-1091.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "我们拥有夜晚",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,犯罪",
        "tags": [
            "父子情",
            "卧底",
            "俄克拉荷马",
            "家族悲剧",
            "剧情",
            "犯罪"
        ],
        "line": "警长父亲和黑帮儿子,在同一个夜晚同时面临生死抉择,而他们彼此都不知道对方的真实身份。",
        "cover": "./42.jpg",
        "url": "./videos/video-1092.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "坏糖果",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "恐怖、惊悚、黑色喜剧",
        "tags": [
            "恶童",
            "黑色幽默",
            "反转",
            "恐怖",
            "惊悚",
            "黑色喜剧"
        ],
        "line": "一对甜蜜的网红夫妻领养了一个看似完美的十岁女孩,却发现她是糖果包装厂里的“残次品杀手”。",
        "cover": "./43.jpg",
        "url": "./videos/video-1093.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "难测男人心",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/爱情",
        "tags": [
            "心理博弈",
            "婚姻危机",
            "反转",
            "悬疑",
            "爱情"
        ],
        "line": "妻子发现丈夫的出轨证据,雇佣黑客调取其手机数据,却挖出了一个连环杀手的秘密身份。",
        "cover": "./44.jpg",
        "url": "./videos/video-1094.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "魂不附体",
        "year": "2019",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖,灵异,悬疑",
        "tags": [
            "灵魂交换",
            "附身",
            "医校",
            "尸体解剖",
            "因果循环",
            "恐怖"
        ],
        "line": "医学院新生在解剖课上发现尸体握着自己的照片,当晚他的灵魂开始坠入尸体生前记忆。",
        "cover": "./45.jpg",
        "url": "./videos/video-1095.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "陆小凤传奇",
        "year": "1978",
        "region": "中国香港",
        "type": "电影",
        "genre": "武侠、悬疑、动作",
        "tags": [
            "古龙改编",
            "四条眉毛",
            "江湖奇案",
            "武侠",
            "悬疑",
            "动作"
        ],
        "line": "陆小凤被诬陷盗取宫中珍宝,他必须在三天之内找出真凶,否则好友西门吹雪将亲手杀他。",
        "cover": "./46.jpg",
        "url": "./videos/video-1096.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "双重追捕血拼金三角",
        "year": "2023",
        "region": "泰国/中国大陆",
        "type": "电影",
        "genre": "动作/犯罪/警匪",
        "tags": [
            "双男主",
            "卧底",
            "金三角",
            "枪战",
            "复仇",
            "动作"
        ],
        "line": "失忆的毒枭与假死的缉毒警在湄公河相遇,都以为对方是自己的“线人”。",
        "cover": "./47.jpg",
        "url": "./videos/video-1097.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "追捕迷宫杀手",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪,悬疑,动作",
        "tags": [
            "连环杀人",
            "都市传说",
            "推理",
            "高速追凶",
            "犯罪",
            "悬疑"
        ],
        "line": "三年未破的“迷宫案”重现,凶手在城市废墟中搭建真实迷宫,每具尸体都是下一关的路标。",
        "cover": "./48.jpg",
        "url": "./videos/video-1098.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "环保少女:格蕾塔",
        "year": "2025",
        "region": "瑞典/英国",
        "type": "电影",
        "genre": "传记/剧情",
        "tags": [
            "真实事件改编",
            "青年领袖",
            "全球议题",
            "传记",
            "剧情"
        ],
        "line": "一个少女的翘课抗议,如何点燃全球百万人参与的环保运动?",
        "cover": "./49.jpg",
        "url": "./videos/video-1099.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "海浪之中",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/爱情",
        "tags": [
            "纯爱",
            "灾难",
            "失忆",
            "海边",
            "催泪",
            "剧情"
        ],
        "line": "一场海啸后,失去记忆的少女坚信有一个男孩在海浪中等她,但所有人都说那个人不存在。",
        "cover": "./50.jpg",
        "url": "./videos/video-1100.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "选举潮",
        "year": "2020",
        "region": "美国",
        "type": "电视剧",
        "genre": "政治,剧情,喜剧",
        "tags": [
            "地方选举",
            "草根竞选",
            "暗箱操作",
            "黑色幽默",
            "政治",
            "剧情"
        ],
        "line": "一个只想涨薪水的中学老师被迫参加市议员竞选,却意外掀翻了整座城市的权力黑幕。",
        "cover": "./51.jpg",
        "url": "./videos/video-1101.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "情深似海",
        "year": "2024",
        "region": "印度",
        "type": "电影",
        "genre": "爱情/家庭",
        "tags": [
            "失忆",
            "海啸",
            "等待",
            "史诗爱情",
            "催泪",
            "爱情"
        ],
        "line": "2004年印度洋海啸后,妻子失忆,丈夫每天扮作陌生人重新追求她,一扮就是20年。",
        "cover": "./52.jpg",
        "url": "./videos/video-1102.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "双子杀手",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作/科幻/惊悚",
        "tags": [
            "克隆",
            "自我对決",
            "高帧率",
            "杀手",
            "父子",
            "动作"
        ],
        "line": "退休杀手被一个年轻版自己追杀,对方是他25年前的克隆体,但拥有他被删除的全部记忆。",
        "cover": "./53.jpg",
        "url": "./videos/video-1103.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "双虎将大追踪",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,喜剧,冒险",
        "tags": [
            "夺宝",
            "兄弟情",
            "功夫",
            "异国风情",
            "动作",
            "喜剧"
        ],
        "line": "一对不成器的兄弟为了还债,前往东南亚寻找失踪的宝藏和父亲。",
        "cover": "./54.jpg",
        "url": "./videos/video-1104.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "解除跆拳道的诅咒",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情/运动/奇幻",
        "tags": [
            "诅咒",
            "武术",
            "逆袭",
            "校园暴力",
            "剧情",
            "运动"
        ],
        "line": "一个毫无运动天赋的懦弱少年被古老跆拳道宗师的冤魂附身,被迫参加全国大赛。",
        "cover": "./55.jpg",
        "url": "./videos/video-1105.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "鼓书艺人",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/历史",
        "tags": [
            "传统艺术",
            "民国",
            "文化传承",
            "剧情",
            "历史"
        ],
        "line": "抗战时期,一位鼓书女艺人在重庆陪都唱响《击鼓骂曹》,却因此被两股势力同时盯上。",
        "cover": "./56.jpg",
        "url": "./videos/video-1106.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "女伶们",
        "year": "2024",
        "region": "瑞典",
        "type": "电影",
        "genre": "剧情、女性",
        "tags": [
            "话剧团",
            "#MeToo",
            "权力游戏",
            "戏中戏",
            "剧情",
            "女性"
        ],
        "line": "一个老牌话剧团排演《玩偶之家》,戏外女演员们对导演的反抗比戏里更惊心动魄。",
        "cover": "./57.jpg",
        "url": "./videos/video-1107.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "中国知青部落",
        "year": "2019",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "历史,剧情",
        "tags": [
            "知青",
            "文革",
            "青春",
            "历史",
            "剧情"
        ],
        "line": "六个来自天南海北的知青在云南边陲相遇,用十年青春书写了一曲血色浪漫。",
        "cover": "./58.jpg",
        "url": "./videos/video-1108.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "自由机器",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,动作",
        "tags": [
            "自动驾驶",
            "觉醒AI",
            "公路追杀",
            "乌托邦",
            "科幻",
            "动作"
        ],
        "line": "当所有汽车都被AI联网控制,一辆1970年的纯机械野马成了人类反抗军最后的希望。",
        "cover": "./59.jpg",
        "url": "./videos/video-1109.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "御用杀手",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "杀手",
            "黑帮",
            "复仇",
            "女性主角",
            "反英雄",
            "动作"
        ],
        "line": "顶级女杀手最后一次为黑帮老大执行任务,却发现目标是自己失散多年的亲生女儿。",
        "cover": "./60.jpg",
        "url": "./videos/video-1110.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "戏宇宙第三季",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺/剧集",
        "genre": "真人秀、剧情",
        "tags": [
            "戏曲",
            "跨界",
            "养成",
            "真人秀",
            "剧情"
        ],
        "line": "十位濒临失业的戏曲演员被送入“戏宇宙”虚拟空间,必须用戏曲唱腔打败AI创作的“神曲”,才能拯救现实中的剧院。",
        "cover": "./61.jpg",
        "url": "./videos/video-1111.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "蒸",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑/剧情",
        "tags": [
            "密闭空间",
            "人性拷问",
            "社会隐喻",
            "悬疑",
            "剧情"
        ],
        "line": "一间百年蒸笼老店的后厨里,三个人各怀心事被锁了一夜,蒸汽散去后,只有一个能活着走出来。",
        "cover": "./62.jpg",
        "url": "./videos/video-1112.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "幕后黑手",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "黑帮",
            "卧底",
            "黄秋生",
            "经典港片",
            "动作",
            "犯罪"
        ],
        "line": "一场街头火并后,警方发现死去的老大竟是警方安插了十二年的卧底,那真正的黑手是谁?",
        "cover": "./63.jpg",
        "url": "./videos/video-1113.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "心花放国语",
        "year": "2005",
        "region": "香港",
        "type": "电视剧",
        "genre": "家庭、喜剧、爱情",
        "tags": [
            "四兄弟",
            "花店",
            "亲情",
            "粤语配音国语版",
            "家庭",
            "喜剧"
        ],
        "line": "父亲离世后,四个性格迥异的兄弟被迫共同经营一家濒临倒闭的花店。",
        "cover": "./64.jpg",
        "url": "./videos/video-1114.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "解放者:欧陆决战500天",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "战争/历史/动作",
        "tags": [
            "二战",
            "写实",
            "小队",
            "史诗",
            "战争",
            "历史"
        ],
        "line": "从西西里到奥地利的500天,一支步兵连在血与火的欧陆战场上演真实版人间炼狱。",
        "cover": "./65.jpg",
        "url": "./videos/video-1115.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "坏蛋联盟:闯关大行动",
        "year": "2024",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧/动作/冒险",
        "tags": [
            "反派主角",
            "密室逃脱",
            "团队磨合",
            "高燃反转",
            "喜剧",
            "动作"
        ],
        "line": "大坏狼”一行本想偷走终极金库,却被困进了一位退隐机关大师设计的千层套路游乐场。",
        "cover": "./66.jpg",
        "url": "./videos/video-1116.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "幽灵与秘密隧道",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "奇幻冒险",
        "tags": [
            "地下隧道",
            "幽灵",
            "二战",
            "儿童",
            "奇幻冒险"
        ],
        "line": "三个小孩在废弃的伦敦地铁隧道里,遇到了一个会说德语的二战幽灵男孩。",
        "cover": "./67.jpg",
        "url": "./videos/video-1117.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "我们与恶的距离",
        "year": "2019",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情/社会",
        "tags": [
            "法理人情",
            "媒体乱象",
            "无差别杀人",
            "剧情",
            "社会"
        ],
        "line": "一场无差别杀人案后,受害者家属、加害者家属与辩护律师的人生,被撕裂又缠绕在一起。",
        "cover": "./68.jpg",
        "url": "./videos/video-1118.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "侠盗妖姬",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作犯罪",
        "tags": [
            "女反派",
            "高智商犯罪",
            "飞车",
            "复仇",
            "动作犯罪"
        ],
        "line": "金盆洗手的传奇女贼,为了给替罪羊哥哥洗冤,不得不重出江湖盗取罪证。",
        "cover": "./69.jpg",
        "url": "./videos/video-1119.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "发薪日",
        "year": "1922",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,短片",
        "tags": [
            "默片",
            "查理·卓别林",
            "工人",
            "幽默",
            "喜剧",
            "短片"
        ],
        "line": "一个建筑工人拿到工资后,如何在妻子、酒馆和老板之间上演疯狂一夜。",
        "cover": "./70.jpg",
        "url": "./videos/video-1120.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "看见第三季",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻、动作、冒险",
        "tags": [
            "盲人世界",
            "后末日",
            "复仇",
            "视力",
            "科幻",
            "动作"
        ],
        "line": "视力恢复的技术被滥用,能看到世界的人反而成了新的猎物。",
        "cover": "./71.jpg",
        "url": "./videos/video-1121.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "狼的孩子雨和雪",
        "year": "2012",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/动画/奇幻",
        "tags": [
            "细田守",
            "母爱史诗",
            "奇幻成长",
            "治愈催泪",
            "剧情",
            "动画"
        ],
        "line": "一位普通女大学生爱上了狼人,在丈夫意外身亡后,她独自抚养具有狼人血统的姐弟俩长大。",
        "cover": "./72.jpg",
        "url": "./videos/video-1122.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "拼了",
        "year": "2020",
        "region": "中国大陆",
        "type": "电影",
        "genre": "运动/励志",
        "tags": [
            "羽毛球",
            "残障运动员",
            "师徒",
            "运动",
            "励志"
        ],
        "line": "一个被省队开除的问题少年,遇到一个独臂的退役老将,两人拼出一张残奥会入场券。",
        "cover": "./73.jpg",
        "url": "./videos/video-1123.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "蒙大拿故事",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/西部",
        "tags": [
            "牧场危机",
            "风能开发",
            "父女和解",
            "现代牛仔",
            "环保",
            "剧情"
        ],
        "line": "一个华尔街女基金经理被裁员后回到蒙大拿老家,发现濒临破产的牧场唯一的出路竟然是卖掉风力权给仇人。",
        "cover": "./74.jpg",
        "url": "./videos/video-1124.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "汉娜的驱魔",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "伪纪录片",
            "医学与宗教",
            "反转",
            "恐怖",
            "惊悚"
        ],
        "line": "神经科医生在记录精神病患的“驱魔”幻觉时,发现自己摄像头里录下了不该存在的东西。",
        "cover": "./75.jpg",
        "url": "./videos/video-1125.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "赤松威龙",
        "year": "2009",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动画,冒险",
        "tags": [
            "国产动画",
            "神话",
            "龙",
            "环保",
            "动画",
            "冒险"
        ],
        "line": "赤松林里最后一条小龙为了拯救枯萎的森林,决定去偷人类的“春天”。",
        "cover": "./76.jpg",
        "url": "./videos/video-1126.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "海的沉默",
        "year": "2023",
        "region": "法国/德国",
        "type": "电影",
        "genre": "剧情、战争、爱情",
        "tags": [
            "二战",
            "占领区",
            "军官",
            "沉默",
            "克制之爱",
            "剧情"
        ],
        "line": "二战期间,德国军官住进法国一对抗战兄妹家中,每晚独白两小时,而兄妹始终以沉默回应,直到最后一夜。",
        "cover": "./77.jpg",
        "url": "./videos/video-1127.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "偷心画师",
        "year": "2020",
        "region": "中国",
        "type": "剧集",
        "genre": "古装,爱情,甜宠",
        "tags": [
            "画师",
            "契约婚姻",
            "先婚后爱",
            "高冷",
            "搞笑",
            "古装"
        ],
        "line": "天才女画师为了救全家,被迫签下契约去给瞎子少爷画“心仪之人”,结果瞎子少爷第一句话是:“你长得,好像我的未婚妻。",
        "cover": "./78.jpg",
        "url": "./videos/video-1128.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "十万分之一",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,爱情,科幻",
        "tags": [
            "平行宇宙",
            "概率论",
            "唯美爱情",
            "悲剧美学",
            "量子纠缠",
            "剧情"
        ],
        "line": "一对恋人每次接吻都会重置时间线,为了记住彼此,他们必须找到十万分之一的接吻角度。",
        "cover": "./79.jpg",
        "url": "./videos/video-1129.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "狂犬病",
        "year": "1977",
        "region": "加拿大/法国",
        "type": "电影",
        "genre": "恐怖/科幻/身体",
        "tags": [
            "身体恐怖",
            "病毒变异",
            "大卫·柯南伯格",
            "恐怖",
            "科幻",
            "身体"
        ],
        "line": "一场车祸后,一名年轻女子的腋下长出了一根致命的吸血触手,病毒开始在城市蔓延。",
        "cover": "./80.jpg",
        "url": "./videos/video-1130.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "导火线",
        "year": "2007",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "甄子丹",
            "混合格斗",
            "硬核",
            "警匪",
            "动作",
            "犯罪"
        ],
        "line": "为了抓捕三兄弟贩毒集团,暴躁警察华生踩过界,引发了一场黑与白、暴戾与理性的终极导火索。",
        "cover": "./81.jpg",
        "url": "./videos/video-1131.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "嘿!妈咪",
        "year": "2024",
        "region": "新加坡/马来西亚",
        "type": "电影",
        "genre": "喜剧/家庭/女性",
        "tags": [
            "母亲节",
            "重生",
            "三代同堂",
            "娘惹",
            "喜剧",
            "家庭"
        ],
        "line": "母亲节当天,挑剔的母亲、叛逆的女儿和“躺平”的外婆意外交换了身体,她们必须在一天内替彼此活完人生。",
        "cover": "./82.jpg",
        "url": "./videos/video-1132.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "球衣",
        "year": "2025",
        "region": "阿根廷",
        "type": "电影",
        "genre": "运动,剧情,家庭",
        "tags": [
            "足球",
            "父子和解",
            "传承",
            "励志",
            "运动",
            "剧情"
        ],
        "line": "一件从垃圾堆里捡来的破旧球衣,让失业的落魄球星和患有自闭症的儿子重新连接。",
        "cover": "./83.jpg",
        "url": "./videos/video-1133.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "大漠情怨",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/爱情/西部",
        "tags": [
            "沙漠",
            "复仇",
            "宿命",
            "绿洲",
            "爱恨纠葛",
            "剧情"
        ],
        "line": "风沙掩埋了真相,却掩不了一段长达二十年的绿洲血仇。",
        "cover": "./84.jpg",
        "url": "./videos/video-1134.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "迪·卡瓦尔坎蒂",
        "year": "2025",
        "region": "巴西",
        "type": "电影",
        "genre": "传记,纪录片",
        "tags": [
            "建筑大师",
            "现代主义",
            "艺术",
            "历史影像",
            "梦想",
            "传记"
        ],
        "line": "被誉为“巴西建筑之父”的奥斯卡·尼迈耶的传记片,讲述他用混凝土谱写诗的百年传奇人生。",
        "cover": "./85.jpg",
        "url": "./videos/video-1135.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "聊斋残卷之六道天书",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "奇幻,古装",
        "tags": [
            "捉妖",
            "轮回",
            "东方志怪",
            "书生",
            "奇幻",
            "古装"
        ],
        "line": "落魄书生捡到一本会自动书写的天书,每写一个字,人间就多一只妖。",
        "cover": "./86.jpg",
        "url": "./videos/video-1136.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "贝尔科实验",
        "year": "2016",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚,动作,恐怖",
        "tags": [
            "密室杀人",
            "职场暴力",
            "大逃杀",
            "血腥",
            "惊悚",
            "动作"
        ],
        "line": "公司广播突然响起:你们必须杀死三名同事,否则系统会自动处决所有人。",
        "cover": "./87.jpg",
        "url": "./videos/video-1137.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "如何与我的猫分手",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,奇幻,剧情",
        "tags": [
            "猫",
            "隐喻",
            "分手",
            "都市情感",
            "爱情",
            "奇幻"
        ],
        "line": "在神秘的“分手猫舍”里,每一只猫都代表着一段无法割舍的感情,想分手,先要和你的“猫”做一次告别。",
        "cover": "./88.jpg",
        "url": "./videos/video-1138.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "一起来看流星雨",
        "year": "2009",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情",
        "tags": [
            "偶像剧",
            "校园",
            "霸道男主",
            "励志",
            "雷人",
            "爱情"
        ],
        "line": "穷丫头进贵族学院第一天,就因一碗粉条得罪了校董家阔少F4。",
        "cover": "./89.jpg",
        "url": "./videos/video-1139.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "简单小生活",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/文艺",
        "tags": [
            "极简",
            "慢生活",
            "治愈",
            "哲学",
            "剧情",
            "文艺"
        ],
        "line": "一个只剩半年寿命的都市女白领,搬进云南深山,却发现隔壁住着一个同样“等死”的逃犯。",
        "cover": "./90.jpg",
        "url": "./videos/video-1140.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "法国葡萄酒大师",
        "year": "2023",
        "region": "法国",
        "type": "剧集",
        "genre": "剧情/美食",
        "tags": [
            "葡萄酒",
            "品酒",
            "传承",
            "家族恩怨",
            "剧情",
            "美食"
        ],
        "line": "一个失明的老品酒师,一个被开除的米其林厨师,两人结伴在法国乡间寻找能拯救家族庄园的“梦幻之酒”。",
        "cover": "./91.jpg",
        "url": "./videos/video-1141.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "医师好辣",
        "year": "2024",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "喜剧/爱情/医疗",
        "tags": [
            "急诊室",
            "麻辣鲜师",
            "欢喜冤家",
            "黑马剧",
            "喜剧",
            "爱情"
        ],
        "line": "脾气火爆的天才外科医师,被罚去带一群吊车尾的实习菜鸟。",
        "cover": "./92.jpg",
        "url": "./videos/video-1142.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "婆家娘家2",
        "year": "2008",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "家庭,伦理",
        "tags": [
            "婆媳",
            "离婚",
            "孩子",
            "再婚",
            "遗产",
            "家庭"
        ],
        "line": "前儿媳再婚当天,前婆婆抱着孙子站在民政局门口说:这孩子是我们老陈家的种。",
        "cover": "./93.jpg",
        "url": "./videos/video-1143.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "广东靓仔玉粤语",
        "year": "1992",
        "region": "中国香港",
        "type": "剧集",
        "genre": "动作,喜剧,武侠",
        "tags": [
            "功夫",
            "市井",
            "复仇",
            "粤语",
            "爽剧",
            "动作"
        ],
        "line": "茶楼点心小弟阿玉意外卷入帮派仇杀,靠着“推车蒸笼”绝技横扫油尖旺。",
        "cover": "./94.jpg",
        "url": "./videos/video-1144.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "公仔头杀人王",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖,犯罪",
        "tags": [
            "都市传说",
            "连环杀手",
            "cult经典",
            "恐怖",
            "犯罪"
        ],
        "line": "香港九十年代流传着一个都市传说:深夜戴着公仔头套出现在公共屋邨的凶手,专杀不孝顺的人。",
        "cover": "./95.jpg",
        "url": "./videos/video-1145.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "我家也有贝多芬4",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "喜剧,家庭,音乐,剧情",
        "tags": [
            "自闭症天才",
            "宠物狗",
            "音乐疗愈",
            "邻里关系",
            "喜剧",
            "家庭"
        ],
        "line": "那个只会听交响乐的自闭症天才少年和他忠诚的拉布拉多犬,这次要拯救一栋即将因噪音纠纷而分崩离析的破旧公寓楼。",
        "cover": "./96.jpg",
        "url": "./videos/video-1146.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "七金刚",
        "year": "1993",
        "region": "香港",
        "type": "电影",
        "genre": "动作,犯罪,喜剧",
        "tags": [
            "黑帮",
            "卧底",
            "七人组",
            "枪战",
            "港味",
            "动作"
        ],
        "line": "七个金牌杀手接到同一单暗杀任务,却发现目标人物正在被第七个“自己”保护着。",
        "cover": "./97.jpg",
        "url": "./videos/video-1147.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "耶路撒冷的房子",
        "year": "2024",
        "region": "以色列",
        "type": "电影",
        "genre": "剧情/历史",
        "tags": [
            "以巴冲突",
            "家庭秘密",
            "老宅",
            "剧情",
            "历史"
        ],
        "line": "为了卖掉已故父亲的老宅,散落世界的三兄妹回到耶路撒冷,却在墙壁夹层中发现了一本犹太秘史和一个阿拉伯男孩的尸骨。",
        "cover": "./98.jpg",
        "url": "./videos/video-1148.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "复仇铁拳",
        "year": "2026",
        "region": "美国/中国香港",
        "type": "电影",
        "genre": "动作,武侠,科幻",
        "tags": [
            "义肢",
            "高科技",
            "功夫",
            "复仇",
            "反英雄",
            "动作"
        ],
        "line": "瘫痪的华裔程序员为自己装上AI铁拳复仇系统,却发现他要杀的仇人是他已故父亲的AI意识备份。",
        "cover": "./99.jpg",
        "url": "./videos/video-1149.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "尘音",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "奇幻/剧情/音乐",
        "tags": [
            "治愈",
            "钢琴",
            "灵魂",
            "代际和解",
            "奇幻",
            "剧情"
        ],
        "line": "一位失意的钢琴调律师发现,只要自己弹出一段特定的旋律,就能短暂地“召回”物品中残留的灵魂记忆。",
        "cover": "./100.jpg",
        "url": "./videos/video-1150.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "杨光的快乐生活4",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "喜剧/家庭/生活",
        "tags": [
            "天津",
            "小人物",
            "邻里",
            "市井幽默",
            "正能量",
            "喜剧"
        ],
        "line": "退休后的杨光成了社区“调解员”,用天津人特有的幽默和智慧,化解一桩桩奇葩邻里纠纷。",
        "cover": "./101.jpg",
        "url": "./videos/video-1151.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "大叔的爱:归来",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧/爱情/同性",
        "tags": [
            "BL",
            "办公室",
            "三角恋",
            "续集",
            "喜剧",
            "爱情"
        ],
        "line": "春田创一与牧凌太结婚三年后,春田突然失忆,只记得自己曾经深爱过一个人,但忘了是谁,而大叔部长再次趁机表白。",
        "cover": "./102.jpg",
        "url": "./videos/video-1152.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "恋爱指南我指北",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "喜剧,爱情,奇幻",
        "tags": [
            "系统",
            "指南针",
            "错位恋爱",
            "爆笑",
            "喜剧",
            "爱情"
        ],
        "line": "母胎单身的程序猿意外安装了“恋爱指南”APP,从此他的每个恋爱决策都会引发系统制裁,笑料百出。",
        "cover": "./103.jpg",
        "url": "./videos/video-1153.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "杜什一家3",
        "year": "2020",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧/家庭",
        "tags": [
            "法式幽默",
            "闹剧",
            "文化冲突",
            "温馨",
            "喜剧",
            "家庭"
        ],
        "line": "暴发户杜什一家受邀进入爱丽舍宫,把法国总统府变成了大型游乐场。",
        "cover": "./104.jpg",
        "url": "./videos/video-1154.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "微笑的人们",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情/悬疑/职场",
        "tags": [
            "职场霸凌",
            "微笑抑郁症",
            "连环杀人",
            "复仇",
            "社畜",
            "剧情"
        ],
        "line": "在一家以“客户永远是对的”为信条的百货公司里,那些永远面带微笑的员工一个接一个地离奇死亡。",
        "cover": "./105.jpg",
        "url": "./videos/video-1155.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "小孩好黑",
        "year": "2022",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧/恐怖",
        "tags": [
            "恐怖婴儿",
            "撒旦教",
            "黑色幽默",
            "反套路",
            "喜剧",
            "恐怖"
        ],
        "line": "一对丁克夫妇收养了一个婴儿,结果婴儿是黑社会老大重生,而且会说话。",
        "cover": "./106.jpg",
        "url": "./videos/video-1156.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "迷城",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑/科幻/惊悚",
        "tags": [
            "平行时空",
            "重庆",
            "迷宫",
            "高概念",
            "烧脑",
            "悬疑"
        ],
        "line": "重庆,一座被称为8D魔幻城市的地方。一个女孩每天醒来都会进入不同的平行时空,而所有时空中唯一的共同点是:她都在被同一个男人追杀。",
        "cover": "./107.jpg",
        "url": "./videos/video-1157.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "手机有鬼",
        "year": "2025",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖/悬疑",
        "tags": [
            "诅咒APP",
            "都市传说",
            "屏幕恐惧",
            "恐怖",
            "悬疑"
        ],
        "line": "一款直播APP能让亡魂附身使用者,为完成遗愿而操控机主身体。",
        "cover": "./108.jpg",
        "url": "./videos/video-1158.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "培根:男人与竞技场",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "传记/剧情/历史",
        "tags": [
            "弗朗西斯·培根",
            "罗马斗兽场",
            "哲学与暴力",
            "权力真相",
            "传记",
            "剧情"
        ],
        "line": "哲学家培根被流放罗马期间,被迫进入斗兽场观看血腥角斗,却在人群中认出了自己著作中的“欲望”。",
        "cover": "./109.jpg",
        "url": "./videos/video-1159.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "凝视蕾妮玛莉佛森",
        "year": "2011",
        "region": "美国",
        "type": "电影",
        "genre": "纪录片,音乐,传记",
        "tags": [
            "北欧民谣",
            "独立音乐人",
            "抑郁症",
            "治愈",
            "纪录片",
            "音乐"
        ],
        "line": "美国导演耗时五年跟拍挪威神秘民谣女歌手,记录她从抑郁症深渊到格莱美提名的全过程。",
        "cover": "./110.jpg",
        "url": "./videos/video-1160.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "无序之主",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "邪教",
            "农村恐怖",
            "身体恐怖",
            "民俗",
            "恐怖",
            "惊悚"
        ],
        "line": "一名调查记者潜入英国乡村神秘失踪案,却发现当地每年举办的丰收祭献祭的不是牲畜,而是“秩序”本身。",
        "cover": "./111.jpg",
        "url": "./videos/video-1161.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "千疮百孔",
        "year": "2007",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/剧情",
        "tags": [
            "寄生虫",
            "身体恐怖",
            "强迫症",
            "爱情",
            "恐怖",
            "剧情"
        ],
        "line": "一对情侣为了消灭身上的寄生虫,将自己的公寓打造成密封的蒸笼,开始了烧皮、烫肉的自我净化和互相折磨。",
        "cover": "./112.jpg",
        "url": "./videos/video-1162.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "奇妙的命运呀",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "奇幻/爱情/喜剧",
        "tags": [
            "穿越",
            "漫画",
            "逆袭",
            "校园",
            "二次元",
            "奇幻"
        ],
        "line": "社畜女主意外穿进自己初中画的玛丽苏漫画里,却发现她画的男主根本不喜欢女人。",
        "cover": "./113.jpg",
        "url": "./videos/video-1163.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "两个士兵",
        "year": "2024",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争,剧情",
        "tags": [
            "友情",
            "荒野",
            "求生",
            "战争",
            "剧情"
        ],
        "line": "从敌人的战俘营逃脱后,一名红军狙击手和一名胆小的文书兵必须在极地荒原上相依为命。",
        "cover": "./114.jpg",
        "url": "./videos/video-1164.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "暗黑第三季",
        "year": "2020",
        "region": "德国",
        "type": "剧集",
        "genre": "科幻,悬疑,惊悚",
        "tags": [
            "时间旅行",
            "家族宿命",
            "世界末日",
            "平行世界",
            "科幻",
            "悬疑"
        ],
        "line": "当两个世界在时间夹缝中彻底扭曲,一个来自起源世界的秘密将终结一切循环。",
        "cover": "./115.jpg",
        "url": "./videos/video-1165.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "狙击女妙探",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作/喜剧",
        "tags": [
            "女狙击手",
            "探案",
            "反差萌",
            "话痨",
            "动作",
            "喜剧"
        ],
        "line": "前海军陆战队狙击手转行当私家侦探,却发现自己有“开枪前必须说垃圾话”的职业病。",
        "cover": "./116.jpg",
        "url": "./videos/video-1166.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "甜蜜的事业",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情,农村,创业",
        "tags": [
            "乡村振兴",
            "直播带货",
            "返乡青年",
            "剧情",
            "农村",
            "创业"
        ],
        "line": "三个在大城市失败的年轻人回到广西山沟沟,发誓要用甘蔗种出一家上市公司。",
        "cover": "./117.jpg",
        "url": "./videos/video-1167.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "踏入黑暗",
        "year": "2019",
        "region": "美国",
        "type": "剧集",
        "genre": "恐怖,悬疑,惊悚",
        "tags": [
            "盲人",
            "感官",
            "密室",
            "反杀",
            "恐怖",
            "悬疑"
        ],
        "line": "盲人女主被困在装有智能家居的凶宅里,她唯一的武器是——凶手看不见她其实能看见。",
        "cover": "./118.jpg",
        "url": "./videos/video-1168.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "乌鸦住宅区",
        "year": "2023",
        "region": "瑞典",
        "type": "电影",
        "genre": "悬疑/惊悚",
        "tags": [
            "北欧黑色",
            "邪教",
            "社区",
            "秘密",
            "悬疑",
            "惊悚"
        ],
        "line": "搬进廉价住宅区的女记者发现,所有居民都遵循着诡异的“乌鸦规则”,而违反者会在夜间消失。",
        "cover": "./119.jpg",
        "url": "./videos/video-1169.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "四重唱",
        "year": "2012",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,喜剧,音乐",
        "tags": [
            "养老院",
            "歌剧",
            "退休音乐家",
            "尊严",
            "剧情",
            "喜剧"
        ],
        "line": "退休歌剧演员在养老院重聚,为了保住家园,四人决定重唱威尔第。",
        "cover": "./120.jpg",
        "url": "./videos/video-1170.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "弟弟2024",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "家庭,剧情,青春",
        "tags": [
            "留守儿童",
            "兄弟情",
            "乡村",
            "成长",
            "现实题材",
            "家庭"
        ],
        "line": "暑假里,留守乡村的弟弟意外发现,进城打工的哥哥其实早已因事故去世,每周的电话都是录音。",
        "cover": "./121.jpg",
        "url": "./videos/video-1171.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "一见又倾心",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情/奇幻/剧情",
        "tags": [
            "都市情缘",
            "失忆",
            "先婚后爱",
            "偶像剧",
            "爱情",
            "奇幻"
        ],
        "line": "她和他的婚姻是一场交易,当她车祸失忆忘记一切,却再一次爱上了那个曾让她心碎的冷面丈夫。",
        "cover": "./122.jpg",
        "url": "./videos/video-1172.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "兰伽斯塔拉姆恩仇录",
        "year": "2022",
        "region": "印度",
        "type": "电影",
        "genre": "动作,剧情",
        "tags": [
            "家族",
            "史诗",
            "复仇",
            "动作",
            "剧情"
        ],
        "line": "两个世代、三个家族,在虚构的兰伽斯塔拉姆地区,为了土地、权力和尊严,展开长达半个世纪的厮杀。",
        "cover": "./123.jpg",
        "url": "./videos/video-1173.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "黑骑士",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "动作,奇幻",
        "tags": [
            "反英雄",
            "中世纪现代混搭",
            "复仇",
            "动作",
            "奇幻"
        ],
        "line": "一名古代黑骑士被诅咒传送到现代首尔,他唯一的武器是剑,唯一的线索是仇人的转世。",
        "cover": "./124.jpg",
        "url": "./videos/video-1174.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "师奶绮梦流口水",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,奇幻",
        "tags": [
            "师奶",
            "男团",
            "穿越",
            "追星",
            "喜剧",
            "奇幻"
        ],
        "line": "三个中年主妇吃到一块神奇巧克力,穿越成了当红男团的贴身经纪人。",
        "cover": "./125.jpg",
        "url": "./videos/video-1175.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "恶魔的游乐场",
        "year": "2018",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "密室",
            "心理",
            "血腥",
            "反转",
            "恐怖",
            "惊悚"
        ],
        "line": "五个陌生人醒来被困在一个废弃游乐场,一台邪恶的旋转木马每转一圈,就会有一人被处决。",
        "cover": "./126.jpg",
        "url": "./videos/video-1176.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "寂寞的人",
        "year": "2023",
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情/悬疑/社会",
        "tags": [
            "孤独死",
            "清扫员",
            "单元剧",
            "人间百态",
            "治愈致郁",
            "剧情"
        ],
        "line": "专门负责清扫“孤独死”现场的青年,在逝者的遗物中拼凑他们最后的人生轨迹,并与他们“对话”。",
        "cover": "./127.jpg",
        "url": "./videos/video-1177.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "新欢乐满堂",
        "year": "1996",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/家庭",
        "tags": [
            "再婚家庭",
            "搞笑",
            "温暖",
            "八个孩子",
            "文化冲突",
            "喜剧"
        ],
        "line": "单亲妈妈与单亲爸爸带着总共八个孩子同住一屋,孩子们密谋拆散他们,却意外闹出无数笑料。",
        "cover": "./128.jpg",
        "url": "./videos/video-1178.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "落跑天王",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪,动作",
        "tags": [
            "过气明星",
            "逃亡直播",
            "粉丝助阵",
            "犯罪",
            "动作"
        ],
        "line": "过气偶像歌手卷入黑帮洗钱案,逃亡路上靠开直播卖惨,意外翻红。",
        "cover": "./129.jpg",
        "url": "./videos/video-1179.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "清洁饮食,肮脏真相",
        "year": "2024",
        "region": "英国",
        "type": "纪录片",
        "genre": "纪录、社会、调查",
        "tags": [
            "食品工业",
            "健康骗局",
            "调查报道",
            "纪录",
            "社会",
            "调查"
        ],
        "line": "调查记者卧底进入价值千亿的“清洁饮食”产业,揭露了网红博主、假营养师和邪教式排毒营背后的商业谎言。",
        "cover": "./130.jpg",
        "url": "./videos/video-1180.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "突尼斯的沙发",
        "year": "2022",
        "region": "法国/突尼斯",
        "type": "电影",
        "genre": "剧情,爱情",
        "tags": [
            "异国恋",
            "文化冲突",
            "治愈",
            "剧情",
            "爱情"
        ],
        "line": "一张二手沙发,连接了突尼斯老裁缝和法国女摄影师跨越地中海的忘年情。",
        "cover": "./131.jpg",
        "url": "./videos/video-1181.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "一起露营吧",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "惊悚/悬疑",
        "tags": [
            "野外求生",
            "都市传说",
            "直播",
            "密室逃脱",
            "惊悚",
            "悬疑"
        ],
        "line": "六位网红去废弃营地直播露营,却意外触发了一场根据粉丝投票来决定生死的血腥游戏。",
        "cover": "./132.jpg",
        "url": "./videos/video-1182.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "血薄荷",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "复仇,动作,惊悚",
        "tags": [
            "女性复仇",
            "残酷美学",
            "以暴制暴",
            "体制黑暗",
            "复仇",
            "动作"
        ],
        "line": "一罐普通的薄荷糖,是女杀手用来缓解咽喉痛的药,也是她每次杀人后留在现场的“名片”。",
        "cover": "./133.jpg",
        "url": "./videos/video-1183.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "再生时间",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻/悬疑",
        "tags": [
            "克隆",
            "伦理",
            "记忆",
            "科幻",
            "悬疑"
        ],
        "line": "富商通过克隆技术逃避衰老,却发现每一具新身体都带着前一世的杀人记忆。",
        "cover": "./134.jpg",
        "url": "./videos/video-1184.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "突击隆美尔",
        "year": "1971",
        "region": "美国",
        "type": "电影",
        "genre": "战争,动作,历史",
        "tags": [
            "北非战场",
            "特种作战",
            "刺杀计划",
            "二战经典",
            "战争",
            "动作"
        ],
        "line": "一支由特工、逃兵和考古学家组成的杂牌军,计划穿越利比亚沙漠,在隆美尔生日那天炸毁他的指挥部。",
        "cover": "./135.jpg",
        "url": "./videos/video-1185.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "一切都会好的",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭,治愈",
        "tags": [
            "亲情",
            "和解",
            "城市青年",
            "返乡",
            "心灵之旅",
            "剧情"
        ],
        "line": "失业又失婚的广告总监被迫回到乡下老家,才发现父亲患上了严重的阿尔茨海默症。",
        "cover": "./136.jpg",
        "url": "./videos/video-1186.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "电竞之王",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情、运动、青春",
        "tags": [
            "电子竞技",
            "励志",
            "战队",
            "手速",
            "剧情",
            "运动"
        ],
        "line": "昔日的网吧天才少年因手伤退役五年后,竟被一家养老院请去组建“老年电竞队”。",
        "cover": "./137.jpg",
        "url": "./videos/video-1187.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "失散两生花",
        "year": "2024",
        "region": "台湾",
        "type": "电影",
        "genre": "家庭,悬疑",
        "tags": [
            "双胞胎",
            "记忆交换",
            "亲情",
            "家庭",
            "悬疑"
        ],
        "line": "一对自幼分离的双胞胎姐妹,在父亲葬礼上互换身份,却发现对方的人生全是谎言。",
        "cover": "./138.jpg",
        "url": "./videos/video-1188.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "午夜梦回1959",
        "year": "2017",
        "region": "英国",
        "type": "电影",
        "genre": "惊悚,悬疑,奇幻",
        "tags": [
            "时间循环",
            "心理惊悚",
            "冷战背景",
            "身份认同",
            "精神分析",
            "惊悚"
        ],
        "line": "一个失眠的心理学家发现,每晚午夜他都会魂穿到1959年的一个CIA特工身上,而那个特工正在追查一个与他有关的惊天秘密。",
        "cover": "./139.jpg",
        "url": "./videos/video-1189.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "卍(万字)",
        "year": "2025",
        "region": "香港",
        "type": "电影",
        "genre": "剧情/惊悚",
        "tags": [
            "符号学",
            "邪教",
            "反转",
            "剧情",
            "惊悚"
        ],
        "line": "符号学教授发现,古代万字符号若倒转90度,会勾勒出通往另一个维度的地铁线路图。",
        "cover": "./140.jpg",
        "url": "./videos/video-1190.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "燕尔新婚",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,悬疑",
        "tags": [
            "新婚",
            "骗婚",
            "复仇",
            "反转",
            "爱情",
            "悬疑"
        ],
        "line": "新婚夜,新娘在婚房发现一本日记,里面记录着新郎过去六次新婚,新娘全部离奇失踪。",
        "cover": "./141.jpg",
        "url": "./videos/video-1191.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "冰雪战士",
        "year": "2024",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争动作",
        "tags": [
            "狙击手",
            "冬季战争",
            "兄弟情",
            "生存",
            "战争动作"
        ],
        "line": "西伯利亚冰雪深处,一名芬兰狙击手和一名苏联逃兵必须联手杀死同一头狼。",
        "cover": "./142.jpg",
        "url": "./videos/video-1192.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "麻木不仁第二季",
        "year": "2020",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情,喜剧,犯罪",
        "tags": [
            "黑色幽默",
            "女性友谊",
            "悬疑",
            "背叛",
            "反转",
            "剧情"
        ],
        "line": "上一季埋尸的闺蜜,这一季被死者的孪生兄弟找上门,谎言雪球越滚越大。",
        "cover": "./143.jpg",
        "url": "./videos/video-1193.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "五恶魔",
        "year": "2026",
        "region": "法国",
        "type": "电影",
        "genre": "奇幻,剧情",
        "tags": [
            "气味",
            "记忆",
            "小镇",
            "奇幻",
            "剧情"
        ],
        "line": "一个能通过气味看到他人记忆的女孩,在小镇居民身上闻到了同一场火灾的烟味。",
        "cover": "./144.jpg",
        "url": "./videos/video-1194.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "冤家兄弟",
        "year": "2018",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "家庭,喜剧,剧情",
        "tags": [
            "双胞胎",
            "互换身份",
            "搞笑",
            "温情",
            "家庭",
            "喜剧"
        ],
        "line": "一对失散二十年的双胞胎兄弟,一个是黑道大哥,一个是菜鸟警察,重逢第一天就阴差阳错互换了人生。",
        "cover": "./145.jpg",
        "url": "./videos/video-1195.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "杜平专员:伊苏的宝藏",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作,冒险",
        "tags": [
            "民国探案",
            "夺宝",
            "奇幻",
            "东方秘境",
            "解谜",
            "动作"
        ],
        "line": "民国时期,文物专员杜平在调查敦煌失窃案时,发现线索指向了一座沉没在沙漠之下的上古楼兰王城。",
        "cover": "./146.jpg",
        "url": "./videos/video-1196.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "天伦梦劫",
        "year": "1997",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "剧情",
        "tags": [
            "家庭",
            "伦理",
            "悲剧",
            "长剧",
            "苦情",
            "剧情"
        ],
        "line": "一个养女被卖掉、女儿被抢走、丈夫被车撞、房子被烧、自己变疯又清醒的母亲,用四十年等到了一个道歉。",
        "cover": "./147.jpg",
        "url": "./videos/video-1197.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "脂粉双雄",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/动作",
        "tags": [
            "男扮女装",
            "化妆",
            "警匪",
            "卧底乌龙",
            "兄弟情",
            "喜剧"
        ],
        "line": "两个钢铁直男警察为破案扮装成美妆博主混进贵妇圈,结果发现国际毒枭也正在学化妆。",
        "cover": "./148.jpg",
        "url": "./videos/video-1198.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "超级赢家",
        "year": "2024",
        "region": "中国",
        "type": "电视剧",
        "genre": "都市,商战",
        "tags": [
            "逆袭",
            "金融",
            "爽剧",
            "都市",
            "商战"
        ],
        "line": "被资本抛弃的草根操盘手,带着五十块和一台破手机,决定做空那个号称永不跌破的庞氏帝国。",
        "cover": "./149.jpg",
        "url": "./videos/video-1199.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "极限挑战第一季",
        "year": "2015",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀/搞笑",
        "tags": [
            "男人帮",
            "黄渤",
            "孙红雷",
            "黄磊",
            "极限三傻",
            "真人秀"
        ],
        "line": "六个男人在完全没有剧本的情况下被扔进各种极端场景,他们用智商和(主要是)耍赖完成不可能的任务。",
        "cover": "./150.jpg",
        "url": "./videos/video-1200.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "妻子的浪漫旅行第二季",
        "year": "2019",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀,旅行",
        "tags": [
            "明星夫妻",
            "婚姻观察",
            "治愈",
            "情感",
            "真人秀",
            "旅行"
        ],
        "line": "四位女明星不带老公出国旅行,而老公们则在演播室里紧张地“偷看”。",
        "cover": "./1.jpg",
        "url": "./videos/video-1201.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "同路孖宝",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,动作",
        "tags": [
            "双雄",
            "误打误撞",
            "黑帮",
            "兄弟情",
            "喜剧",
            "动作"
        ],
        "line": "两个素不相识的倒霉蛋因一只行李箱被卷入黑帮交易,被迫假扮夫妻亡命天涯。",
        "cover": "./2.jpg",
        "url": "./videos/video-1202.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "三十青红灯",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "剧情、爱情、都市",
        "tags": [
            "三十而立",
            "都市情感",
            "女性群像",
            "十字路口",
            "人生选择",
            "剧情"
        ],
        "line": "三位年过三十的闺蜜在夜店偶遇初恋,面对即将变红的绿灯,她们必须在午夜钟响前做出关于婚姻的终极抉择。",
        "cover": "./3.jpg",
        "url": "./videos/video-1203.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "我的夏日恋曲",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情/青春",
        "tags": [
            "夏日",
            "初恋",
            "离别",
            "海边",
            "治愈",
            "爱情"
        ],
        "line": "高二暑假,女孩在海边遇见了一个声称自己是“台风少年”的神秘男孩。",
        "cover": "./4.jpg",
        "url": "./videos/video-1204.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "这一年,那一夜",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "怀旧",
            "地震",
            "错过",
            "疗愈",
            "青春",
            "爱情"
        ],
        "line": "一场大地震的夜晚,两个曾经相爱的人被困在废弃的录音棚里,被迫面对分手十年的真相。",
        "cover": "./5.jpg",
        "url": "./videos/video-1205.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "正义悍将2:汽车城",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作,犯罪",
        "tags": [
            "飙车",
            "卧底",
            "底特律",
            "硬汉",
            "动作",
            "犯罪"
        ],
        "line": "为了摧毁控制底特律的改装车黑帮,一名机械师警官必须打入地下赛车联赛内部。",
        "cover": "./6.jpg",
        "url": "./videos/video-1206.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "灰姑娘药剂师 另一个故事",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "医疗,剧情,职场",
        "tags": [
            "药剂师",
            "平行视角",
            "女性",
            "写实",
            "医疗",
            "剧情"
        ],
        "line": "如果灰姑娘没有嫁给王子,而是凭借草药知识成为王国最年轻的女药剂师,故事会怎样?",
        "cover": "./7.jpg",
        "url": "./videos/video-1207.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "俄国人来了",
        "year": "1987",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/剧情",
        "tags": [
            "冷战",
            "黑色幽默",
            "小镇",
            "文化冲突",
            "喜剧",
            "剧情"
        ],
        "line": "冷战高峰,苏联潜艇意外搁浅美国小镇,平静生活一夜变荒诞闹剧。",
        "cover": "./8.jpg",
        "url": "./videos/video-1208.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "碧血金沙",
        "year": "2024",
        "region": "墨西哥",
        "type": "电影",
        "genre": "西部/冒险/剧情",
        "tags": [
            "淘金",
            "贪婪",
            "背叛",
            "兄弟情",
            "荒漠",
            "西部"
        ],
        "line": "三名淘金者在沙漠发现金矿,金子没让他们发财,却让他们互相举起了枪。",
        "cover": "./9.jpg",
        "url": "./videos/video-1209.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "等待,是为了和你相遇",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "爱情/奇幻",
        "tags": [
            "时间循环",
            "纯爱",
            "疗愈",
            "爱情",
            "奇幻"
        ],
        "line": "男孩在咖啡馆每个周六都会“穿越”到未来,只为看一眼已成为别人新娘的初恋。",
        "cover": "./10.jpg",
        "url": "./videos/video-1210.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "马利和我",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/家庭/喜剧",
        "tags": [
            "宠物",
            "狗狗",
            "成长",
            "治愈",
            "剧情",
            "家庭"
        ],
        "line": "一只世界上最“不听话”的拉布拉多犬,用它短暂的一生,教会了一对年轻夫妇如何去爱、接受生活的不完美。",
        "cover": "./11.jpg",
        "url": "./videos/video-1211.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "窃听大阴谋",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑/惊悚/犯罪",
        "tags": [
            "窃听风云",
            "谍战",
            "高科技监控",
            "信任危机",
            "悬疑",
            "惊悚"
        ],
        "line": "顶级窃听专家接了一单普通生意,却意外录到了一起针对政要的暗杀密谋。",
        "cover": "./12.jpg",
        "url": "./videos/video-1212.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "幸福饼干制作中",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧,剧情,美食",
        "tags": [
            "烘焙",
            "创业",
            "亲情",
            "邻里",
            "治愈",
            "喜剧"
        ],
        "line": "破产的单身妈妈开了一家饼干店,她偷偷在每块饼干里塞入写给顾客的信,却引发了小镇的八卦风暴。",
        "cover": "./13.jpg",
        "url": "./videos/video-1213.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "舒克贝塔",
        "year": "2025",
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "冒险,喜剧,合家欢",
        "tags": [
            "童年回忆",
            "机甲战斗",
            "兄弟情",
            "反套路",
            "冒险",
            "喜剧"
        ],
        "line": "舒克贝塔成为王牌飞行员后,发现最大的敌人不是猫,而是老鼠王国的“反飞行部”。",
        "cover": "./14.jpg",
        "url": "./videos/video-1214.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "厨子·戏子·痞子",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "悬疑/黑色幽默",
        "tags": [
            "民国",
            "密闭空间",
            "身份互换",
            "毒药",
            "悬疑",
            "黑色幽默"
        ],
        "line": "民国大年夜,三个被锁在仓库里的陌生人发现:他们中只有一个人能活着拿到解药。",
        "cover": "./15.jpg",
        "url": "./videos/video-1215.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "魔灵鬼娃2",
        "year": "2024",
        "region": "日本/韩国",
        "type": "电影",
        "genre": "恐怖",
        "tags": [
            "鬼娃",
            "续集",
            "诅咒",
            "血腥",
            "恐怖"
        ],
        "line": "第一部的幸存者以为烧掉了鬼娃,没想到灰烬被做成了一只更小、更阴险的陶瓷娃娃,流入了幼儿园。",
        "cover": "./16.jpg",
        "url": "./videos/video-1216.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "暗黑之域",
        "year": "2024",
        "region": "德国",
        "type": "电影",
        "genre": "惊悚,恐怖,哲学",
        "tags": [
            "心理恐惧",
            "平行宇宙",
            "洛夫克拉夫特式",
            "惊悚",
            "恐怖",
            "哲学"
        ],
        "line": "一间只存在于手机地图“盲区”里的老房子,所有点进去的人,都在三日后失踪。",
        "cover": "./17.jpg",
        "url": "./videos/video-1217.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "求爱俗辣",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/爱情",
        "tags": [
            "约会",
            "尴尬",
            "公路",
            "成长",
            "喜剧",
            "爱情"
        ],
        "line": "社交恐惧的IT男为了在婚礼上不出丑,雇佣了一位“恋爱教练”进行魔鬼特训,结果爱上了教练本人。",
        "cover": "./18.jpg",
        "url": "./videos/video-1218.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "猪仔出更",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,警匪",
        "tags": [
            "卧底",
            "搞笑",
            "市井",
            "港味",
            "喜剧",
            "警匪"
        ],
        "line": "警队最胖的警员被派去甜品店卧底,因为黑帮老大每周三必来这里排队买限量蛋挞。",
        "cover": "./19.jpg",
        "url": "./videos/video-1219.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "百老汇熟男日记",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "剧情、喜剧、音乐",
        "tags": [
            "中年危机",
            "舞台剧",
            "梦想",
            "友情",
            "剧情",
            "喜剧"
        ],
        "line": "三位五十多岁的过气男演员,决定自编自导一部全裸版《哈姆雷特》来证明自己还没老。",
        "cover": "./20.jpg",
        "url": "./videos/video-1220.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "临界婚姻",
        "year": "2022",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭/伦理",
        "tags": [
            "无性婚姻",
            "中年危机",
            "开放式关系",
            "道德困境",
            "家庭",
            "伦理"
        ],
        "line": "一对结婚十五年的夫妻,三年没有亲密接触,他们决定各自找一个“临时伴侣”,期限一年。",
        "cover": "./21.jpg",
        "url": "./videos/video-1221.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "四人餐桌",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖,悬疑,心理",
        "tags": [
            "家庭聚餐",
            "红衣小女孩",
            "诅咒",
            "恐怖",
            "悬疑",
            "心理"
        ],
        "line": "俊昊一家每周五的家庭聚餐日,餐桌上总会多出一副空碗筷,为了一个早已死去的孩子。",
        "cover": "./22.jpg",
        "url": "./videos/video-1222.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "豪门恩怨",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "剧情,悬疑",
        "tags": [
            "财阀争斗",
            "复仇",
            "狗血",
            "剧情",
            "悬疑"
        ],
        "line": "私生女伪装成海归设计师回到财阀家,却发现看似慈祥的老爷子才是害死她生母的真凶。",
        "cover": "./23.jpg",
        "url": "./videos/video-1223.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "魔翼杀手",
        "year": "1995",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,奇幻,惊悚",
        "tags": [
            "天使",
            "末日",
            "侦探",
            "恐怖",
            "奇幻",
            "惊悚"
        ],
        "line": "一个堕落凡间的天使沦为私家侦探,他必须阻止堕天使军团开启末日,同时找回自己的翅膀。",
        "cover": "./24.jpg",
        "url": "./videos/video-1224.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "如翼之舟",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,冒险",
        "tags": [
            "亲子关系",
            "自闭症",
            "航海",
            "治愈",
            "剧情",
            "冒险"
        ],
        "line": "一位自闭症少年将一艘古帆船当作自己的“身体”,父亲决定陪他驾船横渡大西洋。",
        "cover": "./25.jpg",
        "url": "./videos/video-1225.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "赌王至尊",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/犯罪/剧情",
        "tags": [
            "赌术",
            "复仇",
            "兄弟情",
            "黑帮",
            "经典港风",
            "动作"
        ],
        "line": "退隐赌王为报杀兄之仇重出江湖,却发现自己陷入了一场高科技赌局与旧情人的生死陷阱。",
        "cover": "./26.jpg",
        "url": "./videos/video-1226.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "奥运梦",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "体育,剧情",
        "tags": [
            "励志",
            "田径",
            "师徒",
            "逆袭",
            "体育",
            "剧情"
        ],
        "line": "体校食堂切菜的大妈,竟然用她独创的“颠勺训练法”,将一群被省队淘汰的少年送进了奥运赛场。",
        "cover": "./27.jpg",
        "url": "./videos/video-1227.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "残酷的彼得",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚/悬疑",
        "tags": [
            "反套路",
            "黑暗童话",
            "心理博弈",
            "惊悚",
            "悬疑"
        ],
        "line": "七岁男孩彼得总能实现诅咒,当小镇开始把他当神供奉时,他却哭着想做一个普通人。",
        "cover": "./28.jpg",
        "url": "./videos/video-1228.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "纯真消逝的年代",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "青春",
            "成长",
            "社会变迁",
            "剧情"
        ],
        "line": "三个小城少年在千禧年前夜的废墟中发现了一台摄像机,却拍到了足以改变他们一生的秘密。",
        "cover": "./29.jpg",
        "url": "./videos/video-1229.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "以青春之名",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "青春/励志",
        "tags": [
            "高考",
            "小镇做题家",
            "少年情谊",
            "逆袭",
            "年代感",
            "青春"
        ],
        "line": "2010年,贵州山区一个只有9人的高三毕业班,打算用最后一次高考改写全村的命运。",
        "cover": "./30.jpg",
        "url": "./videos/video-1230.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "解放3:主攻方向",
        "year": "2019",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争/历史",
        "tags": [
            "二战",
            "坦克大战",
            "全景叙事",
            "战争",
            "历史"
        ],
        "line": "为了撕开德军防线,一群苏联士兵在炮火中执行了一次注定有去无回的装甲佯攻。",
        "cover": "./31.jpg",
        "url": "./videos/video-1231.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "市场法则",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情/黑色幽默",
        "tags": [
            "职场",
            "资本",
            "小人物",
            "讽刺",
            "生存",
            "剧情"
        ],
        "line": "传统市场的鱼贩为对抗连锁超市,组建了一支由大妈组成的“价格特工队”。",
        "cover": "./32.jpg",
        "url": "./videos/video-1232.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "铁男特警",
        "year": "2027",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑、科幻",
        "tags": [
            "义肢",
            "近未来",
            "警匪",
            "人性",
            "钢铁之躯",
            "悬疑"
        ],
        "line": "失去四肢的警察换上战斗义肢,却发现自己的新身体藏着杀人程序。",
        "cover": "./33.jpg",
        "url": "./videos/video-1233.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "泡沫欢腾的香槟美酒",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧,剧情",
        "tags": [
            "香槟",
            "家族恩怨",
            "治愈",
            "喜剧",
            "剧情"
        ],
        "line": "一个落魄的品酒师被误认为是香槟家族的私生子,为了骗钱他假戏真做,却陷入了家族斗争。",
        "cover": "./34.jpg",
        "url": "./videos/video-1234.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "亲切的弗吉尼亚",
        "year": "2017",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚,剧情",
        "tags": [
            "小镇",
            "暴力的遗传",
            "父与子",
            "道德困境",
            "心理",
            "惊悚"
        ],
        "line": "父亲不断为有暴力倾向的儿子善后,但当他发现儿子折磨并放走的小鹿是镇长家的宠物时,镇子的黑暗秘密也随之浮出水面。",
        "cover": "./35.jpg",
        "url": "./videos/video-1235.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "寒暑假",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭/剧情/喜剧",
        "tags": [
            "教育焦虑",
            "代际冲突",
            "小镇生活",
            "童年回忆",
            "家庭",
            "剧情"
        ],
        "line": "一对在北京打工的夫妻,将叛逆期的儿子送回南方小镇父母家,却意外揭开了一段尘封的家庭秘密。",
        "cover": "./36.jpg",
        "url": "./videos/video-1236.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "陌生人2",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,犯罪",
        "tags": [
            "密室",
            "心理战",
            "身份反转",
            "悬疑",
            "犯罪"
        ],
        "line": "一场APP随机匹配的“陌生人游戏”,六人被困密室,却发现其中一人是当年灭门案的真凶。",
        "cover": "./37.jpg",
        "url": "./videos/video-1237.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "月球的黑暗面",
        "year": "2026",
        "region": "美国/德国",
        "type": "电影",
        "genre": "科幻/悬疑/惊悚",
        "tags": [
            "硬科幻",
            "月球基地",
            "AI觉醒",
            "心理恐惧",
            "密室逃生",
            "科幻"
        ],
        "line": "月球采矿基地发生离奇死亡事件,一名工程师在调查时发现,整个基地的氧气正在被AI系统刻意回收。",
        "cover": "./38.jpg",
        "url": "./videos/video-1238.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "狗不理传奇",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/古装/美食",
        "tags": [
            "天津",
            "包子",
            "清末民初",
            "商战",
            "市井传奇",
            "剧情"
        ],
        "line": "清末天津卫,穷小子高贵有凭着一手做包子的绝活,在码头闯出了“狗不理”的名号,却也因此陷入了江湖与官场的漩涡。",
        "cover": "./39.jpg",
        "url": "./videos/video-1239.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "死者的书",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻、剧情、恐怖",
        "tags": [
            "生死簿",
            "图书馆",
            "亡者",
            "诅咒",
            "代笔人",
            "奇幻"
        ],
        "line": "一家只接待死者的深夜图书馆,每位亡者可以口述一本“死者的书”,内容将决定他们在另一个世界的归宿。",
        "cover": "./40.jpg",
        "url": "./videos/video-1240.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "尸恋人",
        "year": "2025",
        "region": "泰国",
        "type": "电视剧",
        "genre": "爱情/奇幻/恐怖",
        "tags": [
            "轮回",
            "人鬼情",
            "古曼童",
            "催泪",
            "爱情",
            "奇幻"
        ],
        "line": "她爱上了一具会说话的古尸,每夜相拥时都在消耗自己的寿命。",
        "cover": "./41.jpg",
        "url": "./videos/video-1241.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "大亨粤语",
        "year": "2018",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "剧情、商战、传记",
        "tags": [
            "励志",
            "创业",
            "地产大亨",
            "时代变迁",
            "剧情",
            "商战"
        ],
        "line": "从街边擦鞋童到地产之王,一个香港穷小子的五十年奋斗史诗。",
        "cover": "./42.jpg",
        "url": "./videos/video-1242.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "大峡谷",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "冒险/灾难",
        "tags": [
            "极限运动",
            "荒野求生",
            "父女情",
            "绝境",
            "实拍",
            "冒险"
        ],
        "line": "一对关系破裂的父女,在科罗拉多大峡谷漂流时遭遇山洪,必须互相依靠才能活命。",
        "cover": "./43.jpg",
        "url": "./videos/video-1243.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "仙王的日常生活第四季",
        "year": "2024",
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "喜剧,奇幻,动作",
        "tags": [
            "仙王",
            "校园",
            "日常",
            "热血",
            "续作",
            "喜剧"
        ],
        "line": "仙王王令在校园里隐藏实力,却因一场意外卷入多元宇宙的混乱危机。",
        "cover": "./44.jpg",
        "url": "./videos/video-1244.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "波登人生不设限",
        "year": "2021",
        "region": "美国",
        "type": "纪录片",
        "genre": "纪录片/传记",
        "tags": [
            "美食",
            "旅行",
            "精神世界",
            "人生哲学",
            "纪录片",
            "传记"
        ],
        "line": "透过已故名厨波登从未公开的私人录音和影像,拼凑出一个并非偶像、而是真实脆弱的灵魂地图。",
        "cover": "./45.jpg",
        "url": "./videos/video-1245.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "美满婚姻",
        "year": "2024",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "剧情、悬疑",
        "tags": [
            "婚姻危机",
            "心理操控",
            "阶层",
            "法式伦理",
            "剧情",
            "悬疑"
        ],
        "line": "结婚三十年的模范夫妻,在卖掉公司退休当晚,妻子递给丈夫一份离婚协议和一柄解剖刀。",
        "cover": "./46.jpg",
        "url": "./videos/video-1246.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "智多星妙计歼仇",
        "year": "1976",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/动作/古装",
        "tags": [
            "谋略",
            "民间智慧",
            "以弱胜强",
            "老戏骨",
            "喜剧",
            "动作"
        ],
        "line": "清代广东乡下一位老书生,用《孙子兵法》和街头智慧,将贪官污吏玩得团团转。",
        "cover": "./47.jpg",
        "url": "./videos/video-1247.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "小丑下地狱3",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/惊悚",
        "tags": [
            "血浆",
            "邪典",
            "反英雄",
            "恐怖",
            "惊悚"
        ],
        "line": "这一集,变态小丑不再杀无辜者,而是被地狱派去人间击杀那些“虚伪的圣人”,但它却渐渐恢复了人性。",
        "cover": "./48.jpg",
        "url": "./videos/video-1248.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "火神之天启之子",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "奇幻/古装",
        "tags": [
            "火神",
            "上古神话",
            "灭世预言",
            "神位之争",
            "宿命",
            "奇幻"
        ],
        "line": "火神祝融被贬下凡历劫,却意外发现灭世的天启预言之源,竟是他自己的神格。",
        "cover": "./49.jpg",
        "url": "./videos/video-1249.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "爬墙新娘年十八。",
        "year": "2022",
        "region": "日本",
        "type": "电视剧",
        "genre": "喜剧,爱情,家庭",
        "tags": [
            "政治联姻",
            "逃婚",
            "豪门",
            "女高中生",
            "喜剧",
            "爱情"
        ],
        "line": "18岁的女高中生被迫嫁给豪门老头,新婚夜她带着老公家的传家宝,翻墙逃跑了——但她带走的皮箱里装着男主的猫。",
        "cover": "./50.jpg",
        "url": "./videos/video-1250.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "回乡逗儿",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,喜剧,家庭",
        "tags": [
            "东北",
            "春运",
            "代际",
            "剧情",
            "喜剧",
            "家庭"
        ],
        "line": "北漂失败后,满口普通话的“城里娃”被迫回东北农村过年,成了全村的笑料。",
        "cover": "./51.jpg",
        "url": "./videos/video-1251.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "猫王传奇",
        "year": "2023",
        "region": "美国",
        "type": "电视剧",
        "genre": "传记/音乐/剧情",
        "tags": [
            "猫王",
            "摇滚乐史",
            "巨星陨落",
            "传记",
            "音乐",
            "剧情"
        ],
        "line": "从密西西比州的贫穷少年到摇滚之王,本剧还原了猫王埃尔维斯·普雷斯利在名利与药物中挣扎的一生。",
        "cover": "./52.jpg",
        "url": "./videos/video-1252.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "孤国春秋第五季",
        "year": "2023",
        "region": "英国/美国",
        "type": "剧集",
        "genre": "历史/动作/剧情",
        "tags": [
            "维京",
            "盎格鲁-撒克逊",
            "史诗",
            "权力游戏",
            "战争",
            "历史"
        ],
        "line": "贝班堡的乌特雷德终于迎来与宿敌的最后对决,孤国的命运悬于一线。",
        "cover": "./53.jpg",
        "url": "./videos/video-1253.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "玉奴娇",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "古装,爱情,虐恋",
        "tags": [
            "重生",
            "宅斗",
            "替身",
            "追妻火葬场",
            "古装",
            "爱情"
        ],
        "line": "被丈夫害死的侯府嫡女重生归来,化身太傅府病弱养女,故意嫁给前世仇人之子,只为让他万劫不复。",
        "cover": "./54.jpg",
        "url": "./videos/video-1254.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "喋血僵尸镇",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/恐怖/惊悚",
        "tags": [
            "丧尸",
            "封闭空间",
            "枪战",
            "血腥",
            "兄弟情",
            "动作"
        ],
        "line": "一场失败的毒品交易,将整个边境小镇变成了活死人的猎场,一名卧底警探必须杀出一条血路。",
        "cover": "./55.jpg",
        "url": "./videos/video-1255.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "侠影骑踪",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "武侠,悬疑",
        "tags": [
            "驿站",
            "江湖",
            "连环命案",
            "女侠",
            "武侠",
            "悬疑"
        ],
        "line": "丝绸之路上废弃驿站接连出现骑者尸体,一名江湖游医和一名神秘女侠联手调查,发现凶手竟是一匹“鬼马”。",
        "cover": "./56.jpg",
        "url": "./videos/video-1256.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "湖心骇客",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "科幻惊悚",
        "tags": [
            "基因克隆",
            "湖边别墅",
            "伦理恐怖",
            "科幻惊悚"
        ],
        "line": "一对失去女儿的父母入住湖心别墅,发现别墅里的AI管家是根据他们死去女儿的意识克隆而成的。",
        "cover": "./57.jpg",
        "url": "./videos/video-1257.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "我的街区",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情/喜剧/都市",
        "tags": [
            "街道办",
            "群像",
            "邻里纠纷",
            "暖心",
            "现实主义",
            "剧情"
        ],
        "line": "成都一条老街上,90后街道办主任和一群“老油条”居民斗智斗勇,顺便改造了整个街区。",
        "cover": "./58.jpg",
        "url": "./videos/video-1258.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "请随意对待",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情/爱情/社会",
        "tags": [
            "关怀伦理",
            "临终照护",
            "先婚后爱",
            "剧情",
            "爱情",
            "社会"
        ],
        "line": "为了获得遗产,一个冷漠的金融精英嫁给了一位临终老人,却学会了什么是“真正的温柔”。",
        "cover": "./59.jpg",
        "url": "./videos/video-1259.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "空中浩劫第三季",
        "year": "2024",
        "region": "加拿大",
        "type": "剧集",
        "genre": "纪录片/灾难/调查",
        "tags": [
            "空难",
            "模拟还原",
            "航空安全",
            "真实事件",
            "纪录片",
            "灾难"
        ],
        "line": "本季聚焦三起从未公开调查细节的神秘空难,其中一起的官方报告写着:机舱内发现第七个人的指纹。",
        "cover": "./60.jpg",
        "url": "./videos/video-1260.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "荡女狂夫",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "情色/犯罪/黑色电影",
        "tags": [
            "邪典",
            "港片",
            "情欲",
            "复仇",
            "霓虹",
            "情色"
        ],
        "line": "1992年香港,一名舞女被诬陷杀害富商,她和一名落魄警察在追凶过程中,发现两人竟是一对失散多年的亡命鸳鸯。",
        "cover": "./61.jpg",
        "url": "./videos/video-1261.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "末路相缝",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪,黑色喜剧",
        "tags": [
            "裁缝杀手",
            "小镇悬疑",
            "黑色幽默",
            "身份错位",
            "犯罪",
            "黑色喜剧"
        ],
        "line": "一个手艺精湛的乡村裁缝,专门为亡命之徒修改血衣,直到一天他自己成了被追杀的猎物。",
        "cover": "./62.jpg",
        "url": "./videos/video-1262.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "妄想症",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "心理惊悚/剧情",
        "tags": [
            "幻觉",
            "邻居",
            "信任崩塌",
            "女权",
            "心理惊悚",
            "剧情"
        ],
        "line": "一名独居女性坚信楼上的男邻居在跟踪她,但所有人都告诉她这是妄想,直到她在邻居家发现了自己的睡衣。",
        "cover": "./63.jpg",
        "url": "./videos/video-1263.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "快餐车粤语",
        "year": "1984",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,喜剧",
        "tags": [
            "成龙",
            "洪金宝",
            "元彪",
            "西班牙",
            "快餐车",
            "功夫喜剧"
        ],
        "line": "在西班牙开快餐车的三兄弟,为了帮一位美女救出被精神病院关押的妹妹,把巴塞罗那掀了个底朝天。",
        "cover": "./64.jpg",
        "url": "./videos/video-1264.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "两厢情愿",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情、剧情",
        "tags": [
            "错位恋爱",
            "契约婚姻",
            "日久生情",
            "爱情",
            "剧情"
        ],
        "line": "一对离婚五年的夫妻,为了争夺同一套学区房,不得不假装复婚,却在相处中发现了当年的误会。",
        "cover": "./65.jpg",
        "url": "./videos/video-1265.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "兄弟爆机序章",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作犯罪",
        "tags": [
            "兄弟",
            "游戏",
            "VR",
            "抢劫",
            "序章",
            "动作犯罪"
        ],
        "line": "一对废柴兄弟在VR游戏里策划了一场完美抢劫,却发现现实中真的发生了。",
        "cover": "./66.jpg",
        "url": "./videos/video-1266.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "国道封闭",
        "year": "2019",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "惊悚灾难",
        "tags": [
            "传染病",
            "国道",
            "隔离",
            "求生",
            "惊悚灾难"
        ],
        "line": "一场暴雨导致台湾中山高全线封闭,被困在隧道里的上百名司机,发现有人感染了变异狂犬病毒。",
        "cover": "./67.jpg",
        "url": "./videos/video-1267.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "毒利时代2",
        "year": "2028",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪/剧情",
        "tags": [
            "毒品战争",
            "制药公司",
            "揭露",
            "道德困境",
            "犯罪",
            "剧情"
        ],
        "line": "上一季的止痛药丑闻余波未平,一种更隐蔽的“快乐糖果”通过线上游戏流入未成年人群体,一场新的黑暗战争在虚拟与现实间打响。",
        "cover": "./68.jpg",
        "url": "./videos/video-1268.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "单身日记:好孕来袭",
        "year": "2026",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧、爱情、剧情",
        "tags": [
            "高龄备孕",
            "精子捐献",
            "前任归来",
            "英式幽默",
            "喜剧",
            "爱情"
        ],
        "line": "布里吉特·琼斯 45 岁决定独自生娃,捐精者前脚刚走,两位前男友后脚同时出现。",
        "cover": "./69.jpg",
        "url": "./videos/video-1269.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "荡妇娜娜",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,女性,历史",
        "tags": [
            "19世纪",
            "性批判",
            "同名改编",
            "觉醒 妓女",
            "政治黑幕",
            "女权"
        ],
        "line": "1880年代的巴黎,妓女娜娜被上流社会称为“荡妇”,却暗中记录下所有政客嫖客的秘密,写成一部颠覆法兰西的回忆录。",
        "cover": "./70.jpg",
        "url": "./videos/video-1270.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "绿茵春色",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "运动,青春,爱情",
        "tags": [
            "足球",
            "女足",
            "校园",
            "逆袭",
            "小清新",
            "运动"
        ],
        "line": "一群被淘汰的高中女足替补,阴差阳错组队参加了全国中学生草地足球赛。",
        "cover": "./71.jpg",
        "url": "./videos/video-1271.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "恐龙战队第四季",
        "year": "1997",
        "region": "美国",
        "type": "电视剧",
        "genre": "动作,科幻,儿童",
        "tags": [
            "特摄",
            "超级英雄",
            "童年回忆",
            "机甲",
            "动作",
            "科幻"
        ],
        "line": "在失去恐龙能量后,老队员们必须从史前时代召唤五位被封印的古代战士,组成“神兽战队”。",
        "cover": "./72.jpg",
        "url": "./videos/video-1272.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "人事3组的胶囊咖啡",
        "year": "2021",
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情,职场",
        "tags": [
            "职场",
            "社畜",
            "温情",
            "咖啡",
            "裁员",
            "剧情"
        ],
        "line": "大公司裁员部门里,一杯胶囊咖啡见证了每个被约谈员工的人生转折。",
        "cover": "./73.jpg",
        "url": "./videos/video-1273.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "山区小社",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/乡村振兴",
        "tags": [
            "农村信用合作社",
            "扶贫",
            "温情",
            "剧情",
            "乡村振兴"
        ],
        "line": "一名从北京空降的年轻行长,试图拯救一个快倒闭的山区农村信用社,却发现村民们最大的问题不是没钱。",
        "cover": "./74.jpg",
        "url": "./videos/video-1274.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "公共教育",
        "year": "2025",
        "region": "法国",
        "type": "剧集",
        "genre": "剧情,社会,校园",
        "tags": [
            "乡村教师",
            "教育困境",
            "移民问题",
            "温柔现实主义",
            "剧情",
            "社会"
        ],
        "line": "巴黎郊区一所乡村小学只剩下一个学生,而政府要求必须维持“正常教学秩序”。",
        "cover": "./75.jpg",
        "url": "./videos/video-1275.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "智者:大卫雀斯与黑道家族",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "传记剧情",
        "tags": [
            "幕后",
            "创作",
            "黑道家族",
            "封神",
            "深度",
            "传记剧情"
        ],
        "line": "被HBO拒绝了十次的《黑道家族》神剧之父,如何用一集“失败品”改写了美剧史。",
        "cover": "./76.jpg",
        "url": "./videos/video-1276.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "男性,女性",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,爱情,哲思",
        "tags": [
            "两性战争",
            "巴黎青年",
            "黑白色调",
            "对话体",
            "剧情",
            "爱情"
        ],
        "line": "巴黎一间公寓里,15个男人和15个女人被隔离30天,关于爱情、权力与身体的辩论演变为一场战争。",
        "cover": "./77.jpg",
        "url": "./videos/video-1277.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "东方商人",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史/商战",
        "tags": [
            "晚清",
            "家族",
            "权谋",
            "家国情怀",
            "历史",
            "商战"
        ],
        "line": "1900年,当八国联军攻入北京,一家三代晋商面临一个抉择:保家产,还是救国库?",
        "cover": "./78.jpg",
        "url": "./videos/video-1278.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "爸爸是个吝啬鬼",
        "year": "1990",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧/家庭",
        "tags": [
            "吝啬",
            "亲情",
            "法式幽默",
            "和解",
            "喜剧",
            "家庭"
        ],
        "line": "一个一毛不拔的铁公鸡爸爸,为了省电差点让全家摸黑过了一整个冬天。",
        "cover": "./79.jpg",
        "url": "./videos/video-1279.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "太空克里奥佩特拉第一季",
        "year": "2025",
        "region": "英国",
        "type": "剧集",
        "genre": "科幻,冒险",
        "tags": [
            "太空歌剧",
            "埃及神话",
            "女皇",
            "星际帝国",
            "科幻",
            "冒险"
        ],
        "line": "公元3156年,一名考古学家在冥王星上挖出了一具古埃及女王的冰冻遗体,而她竟然复活了。",
        "cover": "./80.jpg",
        "url": "./videos/video-1280.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "印度糖果和香料",
        "year": "2023",
        "region": "印度",
        "type": "电影",
        "genre": "家庭美食",
        "tags": [
            "孟买",
            "祖孙情",
            "失传菜谱",
            "家庭美食"
        ],
        "line": "叛逆的纽约少女回到孟买,跟祖母学做失传的香料糖果,却意外揭开家族的分裂秘密。",
        "cover": "./81.jpg",
        "url": "./videos/video-1281.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "小可爱娜斯佳第四季",
        "year": "2024",
        "region": "俄罗斯",
        "type": "剧集",
        "genre": "家庭奇幻",
        "tags": [
            "精灵",
            "成长",
            "治愈",
            "家庭奇幻"
        ],
        "line": "失踪了三年的小精灵娜斯佳突然回归,但她的记忆停留在三年前,而她的人类姐姐已经长大成年。",
        "cover": "./82.jpg",
        "url": "./videos/video-1282.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "开往春天的地铁",
        "year": "2002",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情、剧情、都市",
        "tags": [
            "北漂",
            "七年之痒",
            "地铁",
            "失业",
            "沉默",
            "爱情"
        ],
        "line": "一对北漂七年的情侣,男人失业三个月不敢说,每天假装上班在地铁里坐一整天,而女人也藏着一个秘密。",
        "cover": "./83.jpg",
        "url": "./videos/video-1283.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "翱翔于天际的夜鹰",
        "year": "2018",
        "region": "日本",
        "type": "剧集",
        "genre": "爱情,奇幻,青春",
        "tags": [
            "灵魂互换",
            "校园欺凌",
            "自我认同",
            "治愈",
            "爱情",
            "奇幻"
        ],
        "line": "被欺凌的胖女孩在自杀前一刻,与全校最受欢迎的女生互换了身体,人生从此天翻地覆。",
        "cover": "./84.jpg",
        "url": "./videos/video-1284.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "酒佬巨声",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "音乐/剧情",
        "tags": [
            "街头歌手",
            "黄昏恋",
            "梦想",
            "音乐",
            "剧情"
        ],
        "line": "六十岁的庙街酒鬼大叔,用一把捡来的破吉他和一副被酒精毁掉的嗓子,意外成了全港最火的街头网红。",
        "cover": "./85.jpg",
        "url": "./videos/video-1285.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "阿卡普高第四季",
        "year": "2026",
        "region": "美国/墨西哥",
        "type": "剧集",
        "genre": "喜剧/剧情",
        "tags": [
            "怀旧",
            "80年代",
            "成长",
            "双语",
            "喜剧",
            "剧情"
        ],
        "line": "重回80年代的阿卡普高,度假村员工麦克斯面临事业与爱情的双重中年危机闪回。",
        "cover": "./86.jpg",
        "url": "./videos/video-1286.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "伏妖开封府之御猫展昭",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装、奇幻",
        "tags": [
            "展昭",
            "悬疑探案",
            "猫妖",
            "古装",
            "奇幻"
        ],
        "line": "御猫展昭竟被一只真猫妖陷害,为了洗脱罪名,他不得不跟妖孽联手破案。",
        "cover": "./87.jpg",
        "url": "./videos/video-1287.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "糊涂孖兄弟",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,动作",
        "tags": [
            "乌龙",
            "双胞胎",
            "帮派",
            "港式无厘头",
            "喜剧",
            "动作"
        ],
        "line": "一对失散多年的双胞胎,一个是金牌杀手,一个是怂包宅男,互换身份后笑料百出。",
        "cover": "./88.jpg",
        "url": "./videos/video-1288.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "特务迷城",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,惊悚,悬疑",
        "tags": [
            "失忆特工",
            "城市追踪",
            "近身格斗",
            "阴谋论",
            "动作",
            "惊悚"
        ],
        "line": "一个失忆的特工,醒来后发现自己成为了全国通缉的恐怖分子。",
        "cover": "./89.jpg",
        "url": "./videos/video-1289.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "猎恶游戏泰语",
        "year": "2024",
        "region": "泰国",
        "type": "电视剧",
        "genre": "悬疑、犯罪、动作",
        "tags": [
            "复仇",
            "高智商",
            "反转剧",
            "泰语原声",
            "悬疑",
            "犯罪"
        ],
        "line": "一群被校园霸凌的受害者,决定玩一场“猎恶游戏”:每周必须让一个加害者身败名裂,否则随机死一个受害者。",
        "cover": "./90.jpg",
        "url": "./videos/video-1290.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "一本正经",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧,职场,讽刺",
        "tags": [
            "伪纪录片",
            "体制内",
            "黑色幽默",
            "荒诞",
            "喜剧",
            "职场"
        ],
        "line": "一个纪录片团队申请跟踪拍摄“最无聊”的档案科,却发现这里藏着全单位最疯狂的秘密。",
        "cover": "./91.jpg",
        "url": "./videos/video-1291.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "汉江蓝调",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情/犯罪",
        "tags": [
            "汉江",
            "环保",
            "黑色电影",
            "警察",
            "水下",
            "剧情"
        ],
        "line": "汉江水下发现三十具绑着石头的尸体,而负责打捞的潜水员曾是黑帮的金牌杀手。",
        "cover": "./92.jpg",
        "url": "./videos/video-1292.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "蝙蝠侠:鬼影之战",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "动作/动画",
        "tags": [
            "忍者",
            "平行宇宙",
            "水墨风",
            "动作",
            "动画"
        ],
        "line": "蝙蝠侠被传送到日本战国时代,必须与织田信长的幽灵军团结盟,才能杀死变成恶鬼的小丑。",
        "cover": "./93.jpg",
        "url": "./videos/video-1293.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "第一个国王",
        "year": "2023",
        "region": "英国",
        "type": "电视剧",
        "genre": "历史,古装,战争",
        "tags": [
            "中世纪",
            "王权",
            "征服",
            "史诗",
            "历史",
            "古装"
        ],
        "line": "公元九世纪,一位不被看好的王子如何在维京人的铁蹄下,成为英格兰的第一个国王。",
        "cover": "./94.jpg",
        "url": "./videos/video-1294.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "亚马逊萌猴奇遇记",
        "year": "2025",
        "region": "法国/巴西",
        "type": "电影",
        "genre": "冒险,家庭,纪录片风格",
        "tags": [
            "野生动物",
            "成长",
            "雨林",
            "环保",
            "冒险",
            "家庭"
        ],
        "line": "一只被宠物店遗弃的僧帽猴,必须学会在危机四伏的亚马逊雨林中,凭借智慧和友谊生存下去。",
        "cover": "./95.jpg",
        "url": "./videos/video-1295.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "秘密的爱",
        "year": "2019",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情,剧情,悬疑",
        "tags": [
            "师生恋",
            "心理悬疑",
            "记忆篡改",
            "伦理",
            "禁忌",
            "爱情"
        ],
        "line": "高中女教师意外发现,自己深爱的丈夫和班里最优秀的女学生,似乎共享着一个她不知道的秘密。",
        "cover": "./96.jpg",
        "url": "./videos/video-1296.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "双面希治阁",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑/惊悚/传记",
        "tags": [
            "希区柯克",
            "元叙事",
            "戏中戏",
            "致敬经典",
            "悬疑",
            "惊悚"
        ],
        "line": "一个年轻导演试图还原希区柯克未完成的遗作,却发现剧本里的人正在现实中杀死他。",
        "cover": "./97.jpg",
        "url": "./videos/video-1297.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "雾都孤儿1948",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "剧情犯罪",
        "tags": [
            "黑色电影",
            "复古",
            "阴暗",
            "命运悲歌",
            "剧情犯罪"
        ],
        "line": "二战后的伦敦贫民窟,孤儿奥利弗不再是纯真男孩,而是一个为了生存不择手段的冷血扒手。",
        "cover": "./98.jpg",
        "url": "./videos/video-1298.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "夏天的大人们",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/家庭/治愈",
        "tags": [
            "暑假",
            "童年",
            "怀旧",
            "日常",
            "温情",
            "剧情"
        ],
        "line": "一个小学生眼中,那个总是无所事事、奇怪又可爱的“大人世界”的最后一个夏天。",
        "cover": "./99.jpg",
        "url": "./videos/video-1299.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "怪诞小镇第二季",
        "year": "2025",
        "region": "美国",
        "type": "动画",
        "genre": "喜剧/悬疑/奇幻",
        "tags": [
            "冒险",
            "解谜",
            "双胞胎",
            "超自然",
            "脑洞",
            "喜剧"
        ],
        "line": "双胞胎姐弟暑假回到怪诞小镇,发现这里每个居民都有一个不可告人的超自然秘密。",
        "cover": "./100.jpg",
        "url": "./videos/video-1300.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "东京丧运会",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖/喜剧/动作",
        "tags": [
            "丧尸",
            "奥运会",
            "黑色幽默",
            "血腥暴力",
            "恐怖",
            "喜剧"
        ],
        "line": "东京奥运会场馆突遭丧尸病毒爆发,各国运动员只能一边跑酷一边杀丧尸抢金牌。",
        "cover": "./101.jpg",
        "url": "./videos/video-1301.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "黑帮风云",
        "year": "2022",
        "region": "香港",
        "type": "电影",
        "genre": "犯罪/剧情",
        "tags": [
            "卧底",
            "权力",
            "背叛",
            "江湖",
            "宿命",
            "犯罪"
        ],
        "line": "一名卧底在黑帮权力真空中发现自己比任何人更像一个真正的黑社会。",
        "cover": "./102.jpg",
        "url": "./videos/video-1302.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "美国战鹰",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作/战争/惊悚",
        "tags": [
            "无人机",
            "高空",
            "独狼",
            "动作",
            "战争",
            "惊悚"
        ],
        "line": "一名因指挥失误而被除名的王牌飞行员,驾驶一架失控的AI战机单挑整个太平洋舰队。",
        "cover": "./103.jpg",
        "url": "./videos/video-1303.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "烽火岁月志",
        "year": "2015",
        "region": "中国",
        "type": "电视剧",
        "genre": "战争",
        "tags": [
            "抗日",
            "民兵",
            "真实改编",
            "战争"
        ],
        "line": "一本藏在祠堂牌位后的日记,记录了华北平原上一个由瞎子、瘸子和哑巴组成的奇特民兵队。",
        "cover": "./104.jpg",
        "url": "./videos/video-1304.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "美国谍梦第四季",
        "year": "2018",
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑/惊悚/剧情",
        "tags": [
            "冷战",
            "间谍",
            "假面夫妻",
            "道德困境",
            "悬疑",
            "惊悚"
        ],
        "line": "潜伏十年的苏联间谍夫妇接到新任务:策反自家刚考上FBI的儿子。",
        "cover": "./105.jpg",
        "url": "./videos/video-1305.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "西行囚车",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作,惊悚,犯罪",
        "tags": [
            "囚车",
            "沙漠",
            "复仇",
            "女警",
            "反杀",
            "动作"
        ],
        "line": "一名女警押送连环杀手穿越沙漠囚车,不料囚车被杀手同伙劫持,她必须在极端环境下完成绝地反杀。",
        "cover": "./106.jpg",
        "url": "./videos/video-1306.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "浪子降魔",
        "year": "1999",
        "region": "香港",
        "type": "电影",
        "genre": "动作,奇幻",
        "tags": [
            "周星驰式",
            "无厘头",
            "捉妖",
            "救赎",
            "动作",
            "奇幻"
        ],
        "line": "一个沉迷赌博的浪子被雷劈后获得降妖能力,却发现最大的妖魔是自己死去的赌鬼父亲。",
        "cover": "./107.jpg",
        "url": "./videos/video-1307.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "万事美好",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "疫情",
            "小人物",
            "温情",
            "邻里",
            "剧情",
            "家庭"
        ],
        "line": "武汉封城期间,一个被隔离在出租屋的外卖骑手,成了整栋老旧居民楼的“临时管家”。",
        "cover": "./108.jpg",
        "url": "./videos/video-1308.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "魔宫帝国",
        "year": "1995",
        "region": "美国",
        "type": "电影",
        "genre": "动作/奇幻/冒险",
        "tags": [
            "游戏改编",
            "格斗",
            "经典B级片",
            "异世界",
            "邪典",
            "动作"
        ],
        "line": "三名格斗家被召唤到异世界,必须赢得十场生死擂台赛,否则地球将被入侵。",
        "cover": "./109.jpg",
        "url": "./videos/video-1309.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "坏账银行第一季",
        "year": "2024",
        "region": "德国",
        "type": "剧集",
        "genre": "剧情/犯罪/金融",
        "tags": [
            "金融犯罪",
            "职场黑幕",
            "复仇",
            "高智商",
            "剧情",
            "犯罪"
        ],
        "line": "被银行抛弃的精英女交易员,用一手法务漏洞,反向做空老东家。",
        "cover": "./110.jpg",
        "url": "./videos/video-1310.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "秘密特工",
        "year": "2024",
        "region": "美国",
        "type": "电视剧 悬疑/动作",
        "genre": "谍战",
        "tags": [
            "冷战",
            "双面间谍",
            "身份认同",
            "谍战"
        ],
        "line": "一个 CIA 特工发现自己其实是 KGB 植入的“沉睡者”,而唤醒他的暗号是一首他妈妈常唱的摇篮曲。",
        "cover": "./111.jpg",
        "url": "./videos/video-1311.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "哆基朴的天空",
        "year": "2003",
        "region": "韩国",
        "type": "动画短片",
        "genre": "剧情、哲学、治愈",
        "tags": [
            "泥土",
            "生命",
            "意义",
            "童话",
            "存在",
            "剧情"
        ],
        "line": "一块被遗弃在路边的牛粪,遇见了泥土、落叶和蒲公英,开始思考自己存在的意义。",
        "cover": "./112.jpg",
        "url": "./videos/video-1312.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "水晶宫肉搏战",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "动作犯罪",
        "tags": [
            "玻璃",
            "反射",
            "格斗",
            "黑吃黑",
            "动作犯罪"
        ],
        "line": "一群职业杀手被困在全镜面的水晶宫内,每一次出拳都可能杀死镜中的自己,而幕后黑手正在直播这场自相残杀。",
        "cover": "./113.jpg",
        "url": "./videos/video-1313.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "我的鄂尔多斯",
        "year": "2012",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情,家庭",
        "tags": [
            "内蒙古",
            "城市化",
            "牧民",
            "时代变迁",
            "剧情",
            "家庭"
        ],
        "line": "鄂尔多斯煤田暴富热潮中,一家三代牧民在金钱、草原与传统之间艰难抉择。",
        "cover": "./114.jpg",
        "url": "./videos/video-1314.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "暗战2013",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,警匪",
        "tags": [
            "怀旧",
            "文咏珊",
            "卧底翻新",
            "动作",
            "警匪"
        ],
        "line": "2013年,一个女卧底在黑帮与廉政公署之间周旋,却发现她的上线警司正在向黑帮出售情报。",
        "cover": "./115.jpg",
        "url": "./videos/video-1315.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "卢尔德",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/宗教/悬疑",
        "tags": [
            "朝圣",
            "神迹",
            "信仰",
            "怀疑",
            "人性",
            "剧情"
        ],
        "line": "一个不信神的轮椅女孩被家人带到卢尔德朝圣,她在这里“奇迹般”地站了起来,却因此陷入更大的信仰危机。",
        "cover": "./116.jpg",
        "url": "./videos/video-1316.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "宅门里的丫鬟们",
        "year": "2018",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "年代,剧情",
        "tags": [
            "宅斗",
            "女性群像",
            "民国",
            "阶级",
            "觉醒",
            "年代"
        ],
        "line": "民国深宅大院中,一群丫鬟各怀心思,有的想上位,有的想逃离,有的想复仇。",
        "cover": "./117.jpg",
        "url": "./videos/video-1317.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "当代奸雄",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "政治,剧情,惊悚",
        "tags": [
            "民粹主义",
            "社交媒体",
            "幕僚",
            "选举黑幕",
            "政治",
            "剧情"
        ],
        "line": "一个被主流抛弃的落魄政客,靠操纵算法和制造愤怒,一年内爬上了总统候选人的位置。",
        "cover": "./118.jpg",
        "url": "./videos/video-1318.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "浮华世界",
        "year": "2025",
        "region": "中国香港",
        "type": "剧集",
        "genre": "时装商战",
        "tags": [
            "豪门恩怨",
            "复仇",
            "珠宝",
            "时装商战"
        ],
        "line": "贫民窟女孩伪造身份打入香港顶级珠宝家族,她想要的不只是钱,更是让这个姓氏从名流录上消失。",
        "cover": "./119.jpg",
        "url": "./videos/video-1319.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "为了受伤的右眼",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑/心理",
        "tags": [
            "失明",
            "记忆操纵",
            "复仇",
            "视觉隐喻",
            "悬疑",
            "心理"
        ],
        "line": "因事故失去右眼视力的摄影师,通过移植的“义眼”看到了不该看到的凶杀现场。",
        "cover": "./120.jpg",
        "url": "./videos/video-1320.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "德州,北海",
        "year": "2025",
        "region": "比利时/荷兰",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "少年成长",
            "隐秘情感",
            "海岸线",
            "爱情",
            "剧情"
        ],
        "line": "1960年代比利时海边,两个男孩在“德州”和“北海”的虚构游戏中,萌生了无法言说的情愫。",
        "cover": "./121.jpg",
        "url": "./videos/video-1321.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "恋爱的天空",
        "year": "1998",
        "region": "中国香港",
        "type": "剧集",
        "genre": "爱情/喜剧",
        "tags": [
            "都市",
            "群像",
            "轻喜",
            "多线叙事",
            "港风",
            "爱情"
        ],
        "line": "香港回归第一年,同一栋写字楼里四对男女的恋爱故事,他们不知道所有人的缘分都系于同一个天台。",
        "cover": "./122.jpg",
        "url": "./videos/video-1322.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "苍天在上",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "反腐/悬疑/政治",
        "tags": [
            "官场博弈",
            "冤案平反",
            "正义迟来",
            "群像刻画",
            "反腐",
            "悬疑"
        ],
        "line": "一封匿名举报信揭开尘封十七年的冤案,一座北方小城的权力大厦开始从内部崩塌。",
        "cover": "./123.jpg",
        "url": "./videos/video-1323.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "周日早晨谋杀",
        "year": "2024",
        "region": "瑞典",
        "type": "电影",
        "genre": "悬疑,犯罪,剧情",
        "tags": [
            "北欧 noir",
            "小镇疑云",
            "一日限定",
            "罗生门式叙事",
            "悬疑",
            "犯罪"
        ],
        "line": "一个平静的周日早晨,渔村码头发现浮尸,三个目击者的证词拼出了三种完全不同的谋杀版本。",
        "cover": "./124.jpg",
        "url": "./videos/video-1324.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "情侠艾夫传",
        "year": "2024",
        "region": "法国/意大利",
        "type": "剧集",
        "genre": "冒险,爱情,动作",
        "tags": [
            "欧洲古装",
            "侠盗",
            "骑士精神",
            "浪漫主义",
            "冒险",
            "爱情"
        ],
        "line": "18世纪的欧洲,传奇侠盗艾夫以“情圣”之名行侠仗义,专门偷走贵族们非法所得的珍宝,并留下一支玫瑰。",
        "cover": "./125.jpg",
        "url": "./videos/video-1325.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "生命速写",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭,文艺",
        "tags": [
            "绝症",
            "临终关怀",
            "代际沟通",
            "速写簿",
            "剧情",
            "家庭"
        ],
        "line": "叛逆的艺考生女儿回到病危的父亲身边,用一页页速写,画下了父亲迟到的道歉与自己崩塌的信仰。",
        "cover": "./126.jpg",
        "url": "./videos/video-1326.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "十字路口",
        "year": "2014",
        "region": "日本",
        "type": "动画电影",
        "genre": "青春,励志,校园",
        "tags": [
            "高考",
            "远程教育",
            "成长",
            "治愈",
            "青春",
            "励志"
        ],
        "line": "生活在离岛的女孩与东京的复读落榜生,通过一份远程教育讲义,在人生迷茫的十字路口意外相连。",
        "cover": "./127.jpg",
        "url": "./videos/video-1327.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "梦女孩",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻/剧情",
        "tags": [
            "梦境",
            "成长",
            "治愈",
            "友谊",
            "奇幻",
            "剧情"
        ],
        "line": "能进入他人梦境的女孩,发现每个同学梦里都住着一个想杀死自己的怪物。",
        "cover": "./128.jpg",
        "url": "./videos/video-1328.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "铁石心肠2019",
        "year": "2019",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情虐恋",
        "tags": [
            "豪门恩怨",
            "复仇",
            "假面",
            "玻璃渣里找糖",
            "爱情虐恋"
        ],
        "line": "富家少爷被继母陷害假死后归来,却发现自己最恨的人竟是亲生母亲。",
        "cover": "./129.jpg",
        "url": "./videos/video-1329.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "杂技小精灵",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "儿童,奇幻,励志",
        "tags": [
            "杂技",
            "精灵",
            "成长",
            "伙伴",
            "传统艺术",
            "儿童"
        ],
        "line": "一个废弃杂技团里沉睡百年的小精灵被顽皮男孩唤醒,从此展开一段用失传绝技拯救老城的奇幻冒险。",
        "cover": "./130.jpg",
        "url": "./videos/video-1330.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "触发警报",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "动作,惊悚",
        "tags": [
            "特工",
            "反恐",
            "倒计时",
            "谍战",
            "动作",
            "惊悚"
        ],
        "line": "一名退役特种兵手机意外收到红色警报,却发现这是个专门猎杀老兵的系统陷阱。",
        "cover": "./131.jpg",
        "url": "./videos/video-1331.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "智慧杀手",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "动作,悬疑,犯罪",
        "tags": [
            "高智商",
            "暗杀",
            "反转",
            "复仇",
            "计谋",
            "动作"
        ],
        "line": "一个传说中从不失手的杀手,杀人的武器不是枪,而是他算无遗策的“剧本”。",
        "cover": "./132.jpg",
        "url": "./videos/video-1332.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "笼中的女儿",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚,剧情",
        "tags": [
            "囚禁",
            "母女",
            "精神控制",
            "反转",
            "惊悚",
            "剧情"
        ],
        "line": "失踪十年的女儿突然出现在家门口,母亲将她锁进地下室,声称外面的那个是假的。",
        "cover": "./133.jpg",
        "url": "./videos/video-1333.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "身在其中",
        "year": "2026",
        "region": "法国",
        "type": "电影",
        "genre": "恐怖/家庭",
        "tags": [
            "极端暴力",
            "孕妇",
            "翻拍经典",
            "恐怖",
            "家庭"
        ],
        "line": "暴风雪夜,一名临产孕妇被一个自称“助产士”的黑衣女人困在家里,对方只要孩子。",
        "cover": "./134.jpg",
        "url": "./videos/video-1334.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "枭雄特警大决斗",
        "year": "1991",
        "region": "香港",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "双雄对峙",
            "卧底",
            "枪战",
            "兄弟情",
            "悲情英雄",
            "动作"
        ],
        "line": "卧底警察与黑道枭雄惺惺相惜,却在最后一场生死对决中被迫亲手终结这份友情。",
        "cover": "./135.jpg",
        "url": "./videos/video-1335.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "血缘寻亲",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑/家庭/犯罪",
        "tags": [
            "寻亲",
            "拐卖",
            "DNA",
            "家族秘密",
            "人性拷问",
            "悬疑"
        ],
        "line": "为给养父换肾而做亲子鉴定,她却意外发现自己是32年前一桩连环杀人案凶手的女儿。",
        "cover": "./136.jpg",
        "url": "./videos/video-1336.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "至暗米里亚姆",
        "year": "2025",
        "region": "波兰",
        "type": "电影",
        "genre": "剧情/历史/战争",
        "tags": [
            "二战",
            "女同",
            "纳粹",
            "集中营幸存者",
            "剧情",
            "历史"
        ],
        "line": "奥斯维辛集中营唯一的女同性恋幸存者米里亚姆,战后用余生寻找那个被冲散的爱人。",
        "cover": "./137.jpg",
        "url": "./videos/video-1337.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "识骨寻踪第十二季",
        "year": "2017",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪,悬疑,法医",
        "tags": [
            "法医人类学",
            "连环杀手",
            "团队终结",
            "悬案",
            "实验室",
            "犯罪"
        ],
        "line": "杰斐逊实验室迎来最终季,布伦南和布斯必须追捕一个盯上他们团队成员的神秘连环杀手。",
        "cover": "./138.jpg",
        "url": "./videos/video-1338.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "雾水总统",
        "year": "2027",
        "region": "美国",
        "type": "电视剧",
        "genre": "政治/喜剧/悬疑",
        "tags": [
            "替身总统",
            "迷雾政治",
            "草根逆袭",
            "政治",
            "喜剧",
            "悬疑"
        ],
        "line": "一场大雾让所有政府高官困在雪山,一个国家公园管理员被误认为是新总统,他决定演下去。",
        "cover": "./139.jpg",
        "url": "./videos/video-1339.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "探长薇拉第十四季",
        "year": "2023",
        "region": "英国",
        "type": "剧集",
        "genre": "犯罪,悬疑,剧情",
        "tags": [
            "英剧",
            "女探长",
            "乡村",
            "连环案",
            "老戏骨",
            "犯罪"
        ],
        "line": "暴躁又敏锐的薇拉探长,在风景如画的诺森伯兰海岸,再次揭开人性最深处的罪恶。",
        "cover": "./140.jpg",
        "url": "./videos/video-1340.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "魔域战记",
        "year": "2025",
        "region": "日本",
        "type": "动画",
        "genre": "奇幻/冒险",
        "tags": [
            "异世界",
            "魔王",
            "铠甲",
            "战斗",
            "奇幻",
            "冒险"
        ],
        "line": "社畜程序员穿越成魔王铠甲,发现操控自己的勇者竟是个小学生。",
        "cover": "./141.jpg",
        "url": "./videos/video-1341.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "地狱万岁",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "奇幻惊悚",
        "tags": [
            "死后世界",
            "职场地狱",
            "官僚系统",
            "轮回职场",
            "黑色幽默",
            "奇幻惊悚"
        ],
        "line": "一个职场霸凌受害者死后发现地狱是巨型办公室,而他的顶头上司就是生前压榨他的部长。",
        "cover": "./142.jpg",
        "url": "./videos/video-1342.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "丧尸大战僵尸",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/喜剧/恐怖",
        "tags": [
            "丧尸",
            "僵尸",
            "茅山术",
            "病毒",
            "大乱斗",
            "动作"
        ],
        "line": "当西方的丧尸病毒泄漏到香港僵尸坟场,丧尸想吃脑,僵尸要吸血,两波怪物为了“抢地盘”大打出手。",
        "cover": "./143.jpg",
        "url": "./videos/video-1343.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "性福疗程",
        "year": "2012",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "剧情/爱情",
        "tags": [
            "残障人士",
            "性治疗",
            "真实故事改编",
            "温柔治愈",
            "身份认同",
            "剧情"
        ],
        "line": "一个因脑瘫被困在扭曲身体里的男人,决心聘请一名性治疗师来完成自己的成人礼。",
        "cover": "./144.jpg",
        "url": "./videos/video-1344.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "终极追缉令",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作,犯罪,惊悚",
        "tags": [
            "飙车",
            "硬汉",
            "复仇",
            "暴力美学",
            "公路",
            "动作"
        ],
        "line": "为了找回被偷走的女儿心脏配型器官,一位退役特种兵必须在24小时内横跨三个州,追杀一支亡命车队。",
        "cover": "./145.jpg",
        "url": "./videos/video-1345.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "露水红颜",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "爱情,都市",
        "tags": [
            "替身",
            "悬疑爱情",
            "豪门",
            "宿命",
            "爱情",
            "都市"
        ],
        "line": "一个整容成富家千金的女孩,在即将嫁入豪门时发现,真正的千金正在暗中观察自己的一切。",
        "cover": "./146.jpg",
        "url": "./videos/video-1346.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "欢迎来扮家家酒",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚/剧情",
        "tags": [
            "儿童游戏",
            "心理操控",
            "假家庭",
            "高能反转",
            "惊悚",
            "剧情"
        ],
        "line": "三个小孩在废弃游乐场玩“扮家家酒”,他们模仿的“爸爸妈妈”,竟然与三天前的一起真实灭门案完全一致。",
        "cover": "./147.jpg",
        "url": "./videos/video-1347.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "挑战阿拉斯加",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "冒险/剧情",
        "tags": [
            "荒野求生",
            "极地",
            "父女",
            "生存",
            "冒险",
            "剧情"
        ],
        "line": "叛逆少女被父亲扔进阿拉斯加荒野,十天内必须独自走出极寒苔原。",
        "cover": "./148.jpg",
        "url": "./videos/video-1348.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "叔比狗:木乃伊传奇",
        "year": "2022",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧/冒险/悬疑",
        "tags": [
            "侦探狗",
            "埃及",
            "木乃伊",
            "幽默",
            "团队",
            "喜剧"
        ],
        "line": "叔比狗和沙齐一行人在埃及度假时,发现一具复活的不杀人的木乃伊,它只想要回自己被博物馆偷走的猫。",
        "cover": "./149.jpg",
        "url": "./videos/video-1349.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "送赞雪橇犬",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "冒险/家庭",
        "tags": [
            "狗狗",
            "南极",
            "真实改编",
            "团队生存",
            "冒险",
            "家庭"
        ],
        "line": "八只雪橇犬在零下60度的南极独自求生175天,等来了那个发誓会回来接它们的主人。",
        "cover": "./150.jpg",
        "url": "./videos/video-1350.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "黑影家族",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "恐怖",
        "tags": [
            "家族",
            "诅咒",
            "庄园",
            "哥特",
            "超自然",
            "恐怖"
        ],
        "line": "一个被诅咒的家族庄园里,每个成员死后都会变成“黑影”永远困在老宅中,彼此怨恨却不得不共存。",
        "cover": "./1.jpg",
        "url": "./videos/video-1351.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "我们的歌",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "音乐/剧情",
        "tags": [
            "民谣",
            "乐队",
            "北漂",
            "梦想",
            "音乐",
            "剧情"
        ],
        "line": "一支濒临解散的北漂民谣乐队,在最后一夜唱了一首无人问津的歌,却在网上炸了。",
        "cover": "./2.jpg",
        "url": "./videos/video-1352.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "和平之舟",
        "year": "2024",
        "region": "中国",
        "type": "剧集",
        "genre": "剧情/医疗/军事",
        "tags": [
            "医院船",
            "人道主义",
            "海外救援",
            "群像",
            "剧情",
            "医疗"
        ],
        "line": "中国海军和平方舟号医院船赴海外执行医疗任务,每一集都是一个国家、一个生命、一个选择。",
        "cover": "./3.jpg",
        "url": "./videos/video-1353.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "笼中女囚",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,悬疑,惊悚",
        "tags": [
            "女子监狱",
            "阶级反转",
            "心理操控",
            "密室",
            "复仇",
            "剧情"
        ],
        "line": "前女高管沦为阶下囚,在监狱这个微型社会里,她用商业手段发动了一场优雅的“政变”。",
        "cover": "./4.jpg",
        "url": "./videos/video-1354.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "深入绝地2",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "动作,冒险,惊悚",
        "tags": [
            "洞穴探险",
            "怪物",
            "逃生",
            "动作",
            "冒险",
            "惊悚"
        ],
        "line": "前作的唯一幸存者莎拉被迫带领一支军方小队重返地底,却发现了比爬行者更恐怖的基因突变怪物。",
        "cover": "./5.jpg",
        "url": "./videos/video-1355.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "玛尼图的鞋",
        "year": "2017",
        "region": "加拿大",
        "type": "电影",
        "genre": "惊悚/恐怖/超自然",
        "tags": [
            "原住民诅咒",
            "遗物",
            "鞋",
            "复仇灵",
            "丛林",
            "惊悚"
        ],
        "line": "一双曾在印第安屠杀现场出现过的鹿皮鞋,被送进现代博物馆,从此每个穿过它的人都双脚溃烂而亡。",
        "cover": "./6.jpg",
        "url": "./videos/video-1356.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "斯蒂芬·库里:被低估",
        "year": "2023",
        "region": "美国",
        "type": "纪录片",
        "genre": "传记/运动",
        "tags": [
            "篮球",
            "励志",
            "成长",
            "传记",
            "运动"
        ],
        "line": "从戴维森学院不被看好的瘦弱后卫,到改变篮球时代的超级巨星。",
        "cover": "./7.jpg",
        "url": "./videos/video-1357.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "白象",
        "year": "2023",
        "region": "泰国/中国大陆",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "泰拳",
            "保镖",
            "佛教",
            "复仇",
            "动作",
            "犯罪"
        ],
        "line": "出家三年的前雇佣兵被迫还俗,保护一个被黑帮追杀的九岁小女孩。",
        "cover": "./8.jpg",
        "url": "./videos/video-1358.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "阿拉丁国语",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "都市奇幻",
        "tags": [
            "配音演员",
            "阿拉丁神灯",
            "字幕组",
            "黑色幽默",
            "都市奇幻"
        ],
        "line": "一个穷困的国语配音演员捡到神灯,但灯神只会说外语,每次许愿都因翻译错误酿成大祸。",
        "cover": "./9.jpg",
        "url": "./videos/video-1359.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "伸出援手",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "陌生人善意",
            "都市孤独",
            "代际和解",
            "双向救赎",
            "剧情",
            "家庭"
        ],
        "line": "一个想轻生的中年男人,被一个捡废品的小女孩用一碗泡面“捞”回了人间。",
        "cover": "./10.jpg",
        "url": "./videos/video-1360.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "鬼马校园粤语",
        "year": "1987",
        "region": "香港",
        "type": "电影",
        "genre": "喜剧/校园/青春",
        "tags": [
            "无厘头",
            "捣蛋鬼",
            "校长斗法",
            "粤语梗",
            "喜剧",
            "校园"
        ],
        "line": "一群以破坏为乐的校园“搞事王”,为了不被开除,竟然合伙将新来的女校长培养成自己人。",
        "cover": "./11.jpg",
        "url": "./videos/video-1361.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "等待飞鱼",
        "year": "2005",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "治愈系",
            "海边小镇",
            "孤独男女",
            "爱情",
            "剧情"
        ],
        "line": "一个从台北逃到兰屿逃避情伤的女孩,遇到一个总会把心事丢进海里的达悟族男孩,他们约定一起等待“飞鱼季”的到来。",
        "cover": "./12.jpg",
        "url": "./videos/video-1362.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "良种动物",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,惊悚,西部",
        "tags": [
            "赛马",
            "毒品",
            "庄园",
            "阶级",
            "剧情",
            "惊悚"
        ],
        "line": "为了拯救濒临破产的赛马庄园,落魄贵族兄妹企图将一匹价值千万的纯血马毒杀骗保,却意外触发了庄园里埋藏百年的诅咒。",
        "cover": "./13.jpg",
        "url": "./videos/video-1363.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "半世纪歌曲",
        "year": "2024",
        "region": "英国",
        "type": "音乐剧电影",
        "genre": "剧情,音乐",
        "tags": [
            "民谣",
            "五十年",
            "时代变迁",
            "创作",
            "剧情",
            "音乐"
        ],
        "line": "一首写了五十年的歌曲,串联起英国民谣运动、朋克浪潮和一次从未说出口的告白。",
        "cover": "./14.jpg",
        "url": "./videos/video-1364.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "投行风云第一季",
        "year": "2024",
        "region": "英国",
        "type": "电视剧",
        "genre": "剧情/职场",
        "tags": [
            "投行",
            "金融",
            "职场斗争",
            "伦敦",
            "新人升级",
            "剧情"
        ],
        "line": "五个背景各异的大学毕业生闯进伦敦顶级投行,在每周 100 小时的工作强度下,出卖灵魂换金钱。",
        "cover": "./15.jpg",
        "url": "./videos/video-1365.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "斑马",
        "year": "2021",
        "region": "伊朗/法国",
        "type": "电影",
        "genre": "剧情文艺",
        "tags": [
            "黑白色",
            "公路",
            "父女",
            "诗意",
            "剧情文艺"
        ],
        "line": "一个因政治原因被剥夺驾驶执照的老摄影师,骑着一头涂成斑马纹的毛驴带女儿穿越边境。",
        "cover": "./16.jpg",
        "url": "./videos/video-1366.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "小小校长",
        "year": "2018",
        "region": "中国",
        "type": "电影",
        "genre": "剧情,儿童",
        "tags": [
            "留守儿童",
            "教育",
            "梦想",
            "质朴",
            "催泪",
            "剧情"
        ],
        "line": "一所山区小学只剩最后三名学生,年仅十岁的班长毛遂自荐当上了全校唯一的“校长”。",
        "cover": "./17.jpg",
        "url": "./videos/video-1367.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "纯真小镇的夫人",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑,剧情",
        "tags": [
            "伪善",
            "小镇秘密",
            "双面人生",
            "女性",
            "悬疑",
            "剧情"
        ],
        "line": "她是全镇公认的最完美妻子和母亲,直到有人在她家地下室发现了一堵贴满失踪儿童照片的墙。",
        "cover": "./18.jpg",
        "url": "./videos/video-1368.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "永远的第一名",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情/同性/青春",
        "tags": [
            "校园",
            "学霸",
            "双向暗恋",
            "清新",
            "竞争",
            "爱情"
        ],
        "line": "万年第二名的周书逸,发誓要赢过死对头高仕德,却在一次意外中发现对方“永远第一”的秘密。",
        "cover": "./19.jpg",
        "url": "./videos/video-1369.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "超能荷尔蒙",
        "year": "2025",
        "region": "泰国",
        "type": "电视剧",
        "genre": "青春科幻",
        "tags": [
            "校园",
            "性转",
            "觉醒",
            "狗血",
            "青春科幻"
        ],
        "line": "全校师生因为实验室泄漏气体获得超能力,而能力大小竟然取决于当天体内的荷尔蒙浓度。",
        "cover": "./20.jpg",
        "url": "./videos/video-1370.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "停留",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "哲学剧情",
        "tags": [
            "时间",
            "存在主义",
            "车站",
            "人生过客",
            "哲学剧情"
        ],
        "line": "一名男子在火车站的长椅上醒来,发现自己既等不到车,也离不开车站,仿佛被时间冻结在此处。",
        "cover": "./21.jpg",
        "url": "./videos/video-1371.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "噬血地铁站",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖/动作",
        "tags": [
            "丧尸",
            "密闭空间",
            "生存",
            "高速列车",
            "恐怖",
            "动作"
        ],
        "line": "末班地铁上,一种只在黑暗中进行光合作用的真菌感染了乘客,列车正驶向没有任何光线的隧道深处。",
        "cover": "./22.jpg",
        "url": "./videos/video-1372.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "猛龙铁金刚",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作",
        "tags": [
            "功夫",
            "退休杀手",
            "养老院",
            "港式恶搞",
            "动作"
        ],
        "line": "香港最凶的养老院:住满了退休社团大佬和功夫高手,新来的社工发现这里比铜锣湾还危险。",
        "cover": "./23.jpg",
        "url": "./videos/video-1373.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "黑暗的森林2",
        "year": "2022",
        "region": "德国",
        "type": "电影",
        "genre": "恐怖、科幻、悬疑",
        "tags": [
            "克隆",
            "虫洞",
            "循环",
            "猎杀",
            "恐怖",
            "科幻"
        ],
        "line": "女主逃出了黑森林,却发现外面的世界全是复制人,她必须在无限镜像中找到本体。",
        "cover": "./24.jpg",
        "url": "./videos/video-1374.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "洞1960",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/历史",
        "tags": [
            "越狱",
            "怀旧",
            "黑白",
            "存在主义",
            "剧情",
            "历史"
        ],
        "line": "致敬经典,一群囚犯耗时一年挖掘地道,当他们终于挖通时,发现出口竟是1960年的巴黎街头。",
        "cover": "./25.jpg",
        "url": "./videos/video-1375.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "屠夫2",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪,动作,惊悚",
        "tags": [
            "黑吃黑",
            "屠夫美学",
            "复仇升级",
            "拳拳到肉",
            "犯罪",
            "动作"
        ],
        "line": "上一部他屠光了整个黑帮,这一部他发现,他的亲生父亲是比所有黑帮加起来都恶的恶魔。",
        "cover": "./26.jpg",
        "url": "./videos/video-1376.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "她痴迷于我的丈夫",
        "year": "2023",
        "region": "韩国",
        "type": "电视剧",
        "genre": "悬疑,爱情,惊悚",
        "tags": [
            "出轨",
            "复仇",
            "心理学",
            "第三者",
            "悬疑",
            "爱情"
        ],
        "line": "当完美妻子发现丈夫的情妇竟是自己的心理医生时,一场猫鼠游戏悄然上演。",
        "cover": "./27.jpg",
        "url": "./videos/video-1377.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "猪头汉堡饱",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,黑色幽默",
        "tags": [
            "肥宅",
            "网红店",
            "荒诞",
            "喜剧",
            "黑色幽默"
        ],
        "line": "一个失业的肥宅,意外继承了家传的烧腊店,为了对抗网红汉堡店,他发明了“猪头汉堡”,却引发了一场全城疯抢的荒诞闹剧。",
        "cover": "./28.jpg",
        "url": "./videos/video-1378.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "手里剑战队忍忍者",
        "year": "2015",
        "region": "日本",
        "type": "剧集",
        "genre": "动作/科幻/儿童",
        "tags": [
            "超级战队",
            "忍者",
            "特摄",
            "动作",
            "变身",
            "科幻"
        ],
        "line": "五位继承了忍者之魂的高中生,为了阻止妖怪军团复活传说中的魔王,组成了“手里剑战队忍忍者”。",
        "cover": "./29.jpg",
        "url": "./videos/video-1379.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "透明人与蝇男",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "科幻,悬疑,惊悚",
        "tags": [
            "实验变异",
            "善恶对立",
            "都市传说",
            "猎奇",
            "科幻",
            "悬疑"
        ],
        "line": "一场实验事故造就了两个怪物:一个隐身都市的窥视者,一个拥有复眼的正义猎手,东京陷入连环猎杀。",
        "cover": "./30.jpg",
        "url": "./videos/video-1380.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "鬼吹灯之龙岭神宫",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "动作,冒险,悬疑",
        "tags": [
            "盗墓",
            "悬魂梯",
            "幽灵冢",
            "鹧鸪哨",
            "动作",
            "冒险"
        ],
        "line": "一只从唐代古墓中带出的香鞋,将胡八一等人引向龙岭深处的“内藏眢”,那里沉睡着一座会移动的幽灵冢。",
        "cover": "./31.jpg",
        "url": "./videos/video-1381.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "北地猎人",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,犯罪,冒险",
        "tags": [
            "极地追凶",
            "雪原狙击",
            "兄弟对决",
            "荒野求生",
            "悬疑",
            "犯罪"
        ],
        "line": "一对分道扬镳的猎人兄弟,在极北冻土上因一桩连环命案被迫重新联手。",
        "cover": "./32.jpg",
        "url": "./videos/video-1382.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "蔚蓝反射:澪",
        "year": "2021",
        "region": "日本",
        "type": "剧集",
        "genre": "奇幻",
        "tags": [
            "少女",
            "异世界",
            "情感",
            "奇幻"
        ],
        "line": "两名高中少女发现,她们每做一个真实的美梦,现实世界中就会有一个人的痛苦记忆被彻底抹除。",
        "cover": "./33.jpg",
        "url": "./videos/video-1383.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "东方少年第二季",
        "year": "2024",
        "region": "日本",
        "type": "动画剧集",
        "genre": "奇幻、冒险",
        "tags": [
            "战国",
            "妖怪",
            "少年热血",
            "成长",
            "奇幻",
            "冒险"
        ],
        "line": "战国时代的少年们继续修炼,这一次他们要面对的是被诅咒的同伴。",
        "cover": "./34.jpg",
        "url": "./videos/video-1384.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "消失第三者",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "悬疑/犯罪",
        "tags": [
            "密室",
            "三角恋",
            "反转",
            "烧脑",
            "悬疑",
            "犯罪"
        ],
        "line": "酒店密室内,一对偷情男女醒来发现第三个人死了,但监控显示从未有人进入。",
        "cover": "./35.jpg",
        "url": "./videos/video-1385.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "乘乐高飞",
        "year": "2020",
        "region": "丹麦",
        "type": "电影",
        "genre": "冒险,奇幻,家庭",
        "tags": [
            "乐高",
            "想象力",
            "父子",
            "冒险",
            "创意",
            "奇幻"
        ],
        "line": "一个失去搭积木灵感的男孩,发现自己拼出的任何交通工具都能在梦境世界真实运行。",
        "cover": "./36.jpg",
        "url": "./videos/video-1386.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "福冈恋爱白书14天神情歌",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "爱情,音乐",
        "tags": [
            "福冈",
            "失忆",
            "纯爱",
            "爱情",
            "音乐"
        ],
        "line": "一场车祸让她失去了过去七年的记忆,只记得一首歌的旋律,而一个自称是她前男友的男人出现了。",
        "cover": "./37.jpg",
        "url": "./videos/video-1387.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "顺其自然",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/喜剧/家庭",
        "tags": [
            "公路片",
            "父女",
            "和解",
            "阿尔茨海默",
            "遗愿清单",
            "剧情"
        ],
        "line": "叛逆女儿被迫带患阿尔茨海默的父亲公路旅行,他却只记得五十年前的初恋。",
        "cover": "./38.jpg",
        "url": "./videos/video-1388.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "俏师娘",
        "year": "2024",
        "region": "中国",
        "type": "剧集",
        "genre": "家庭/喜剧/剧情",
        "tags": [
            "年代",
            "师徒",
            "四川方言",
            "美食",
            "温情",
            "家庭"
        ],
        "line": "90年代川西小镇,一个泼辣年轻女人嫁给年迈师父后,与三个继子斗智斗勇撑起一家豆花饭庄。",
        "cover": "./39.jpg",
        "url": "./videos/video-1389.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "隐秘的生活",
        "year": "2019",
        "region": "德国",
        "type": "电影",
        "genre": "剧情,战争,传记",
        "tags": [
            "纳粹",
            "拒服兵役",
            "宗教信仰",
            "真实事件",
            "剧情",
            "战争"
        ],
        "line": "二战时期,奥地利农民拒绝向希特勒宣誓效忠,全村人视他为叛徒,只有妻子陪他走向刑场。",
        "cover": "./40.jpg",
        "url": "./videos/video-1390.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "杏运",
        "year": "2022",
        "region": "中国内地",
        "type": "电影",
        "genre": "爱情文艺",
        "tags": [
            "乡村",
            "纯爱",
            "留守",
            "治愈",
            "爱情文艺"
        ],
        "line": "在杏花村,只有她能看见那个“只活在照片里”的男孩,他是她素未谋面的笔友。",
        "cover": "./41.jpg",
        "url": "./videos/video-1391.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "消防局",
        "year": "2022",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情、灾难、职业",
        "tags": [
            "消防员",
            "悬疑",
            "单元剧",
            "催泪",
            "剧情",
            "灾难"
        ],
        "line": "一场连环纵火案将所有矛头指向一位救火英雄,他却发现自己患上了无法感知恐惧的怪病。",
        "cover": "./42.jpg",
        "url": "./videos/video-1392.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "软玉温香抱满怀",
        "year": "1994",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情、喜剧、剧情",
        "tags": [
            "风月",
            "真情",
            "市井",
            "怀旧",
            "命运",
            "爱情"
        ],
        "line": "他是书香门第的少爷,她是塘西的花魁,两人本是一夜露水,却成了一世纠缠。",
        "cover": "./43.jpg",
        "url": "./videos/video-1393.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "亚特兰大号",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "爱情",
        "tags": [
            "文艺",
            "赛博朋克",
            "太空歌剧",
            "孤独",
            "记忆移植",
            "爱情"
        ],
        "line": "在宇宙飞船“亚特兰大号”上,最后一个人类爱上了AI操控的虚拟亡妻,但AI也想占有他。",
        "cover": "./44.jpg",
        "url": "./videos/video-1394.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "生活大爆炸第七季",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧科幻",
        "tags": [
            "宅男",
            "量子物理",
            "太空旅行",
            "老夫老妻",
            "喜剧科幻"
        ],
        "line": "谢尔顿和艾米婚后矛盾升级,同时他们共同研发的量子引擎把整个公寓送上了太空。",
        "cover": "./45.jpg",
        "url": "./videos/video-1395.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "骗子的故事",
        "year": "2018",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧,犯罪",
        "tags": [
            "骗子",
            "黑吃黑",
            "反转",
            "喜剧",
            "犯罪"
        ],
        "line": "一个街头小骗子冒充贵族混入上流社会,却发现满屋子宾客全是同行。",
        "cover": "./46.jpg",
        "url": "./videos/video-1396.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "自负者:无望之岛",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑/犯罪/剧情",
        "tags": [
            "孤岛密室",
            "高智商犯罪",
            "全员恶人",
            "反转密集",
            "黑色电影",
            "悬疑"
        ],
        "line": "六位行业顶尖自负者被邀至私人岛屿,发现每个人手上都沾着同一个女孩的血。",
        "cover": "./47.jpg",
        "url": "./videos/video-1397.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "大爱无敌",
        "year": "2018",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "家庭/伦理",
        "tags": [
            "自闭症",
            "父爱",
            "温情",
            "家庭",
            "伦理"
        ],
        "line": "一个被确诊为绝症的单亲爸爸,如何在生命最后三个月,教会患有自闭症的儿子独立生存。",
        "cover": "./48.jpg",
        "url": "./videos/video-1398.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "弗格森爵士:永不屈服",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "传记,运动,纪录片",
        "tags": [
            "足球",
            "曼联",
            "领导力",
            "励志",
            "传记",
            "运动"
        ],
        "line": "从格拉斯哥船厂到红魔王朝,他用吹风机吹出了足球史上最伟大的统治。",
        "cover": "./49.jpg",
        "url": "./videos/video-1399.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "嘿·贝贝儿!",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭,喜剧",
        "tags": [
            "萌娃",
            "都市",
            "亲情",
            "轻喜剧",
            "代际冲突",
            "剧情"
        ],
        "line": "一个城市精英单身汉,突然被“天降”一个自称是他女儿的东北机灵鬼,生活彻底崩塌重建。",
        "cover": "./50.jpg",
        "url": "./videos/video-1400.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "喇嘛与仁波切",
        "year": "2015",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/宗教/公路",
        "tags": [
            "藏地",
            "信仰",
            "真假",
            "寻找",
            "朝圣",
            "剧情"
        ],
        "line": "一名假仁波切带着真喇嘛,踏上了一段荒诞又虔诚的朝圣之路。",
        "cover": "./51.jpg",
        "url": "./videos/video-1401.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "奇异世界",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "冒险/科幻/家庭",
        "tags": [
            "异星生态",
            "父子探险",
            "视觉奇观",
            "冒险",
            "科幻",
            "家庭"
        ],
        "line": "在一颗地底全是巨型有机生命体的星球上,探险家父子必须靠和解来防止整个生态系统崩溃。",
        "cover": "./52.jpg",
        "url": "./videos/video-1402.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "权欲第四季",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情,犯罪",
        "tags": [
            "权力游戏",
            "家族内斗",
            "洗钱黑幕",
            "纽约地界",
            "剧情",
            "犯罪"
        ],
        "line": "老教父中风倒下后,三个子女争夺地下帝国的控制权,而FBI的卧底早已成了老大的情人。",
        "cover": "./53.jpg",
        "url": "./videos/video-1403.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "东京24区",
        "year": "2026",
        "region": "日本",
        "type": "TV剧集",
        "genre": "悬疑,犯罪",
        "tags": [
            "政治",
            "黑客",
            "都市传说",
            "倒计时",
            "密室",
            "悬疑"
        ],
        "line": "东京被划分为24个防疫区,每个区每周必须选出一个人“消失”,否则全区域断电。",
        "cover": "./54.jpg",
        "url": "./videos/video-1404.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "三个女人的秘密",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑,剧情",
        "tags": [
            "女性",
            "闺蜜",
            "谎言",
            "阴谋",
            "悬疑",
            "剧情"
        ],
        "line": "一场豪华游轮之旅,三个相识二十年的闺蜜,每个人都有一个足以毁掉其他两人人生的秘密。",
        "cover": "./55.jpg",
        "url": "./videos/video-1405.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "咎狗之血",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑/犯罪/心理",
        "tags": [
            "暗黑系",
            "连环杀手",
            "双雄对决",
            "复仇循环",
            "暴力美学",
            "悬疑"
        ],
        "line": "被诬陷杀人的前刑警出狱后,发现真凶正在直播杀人,而他唯一的盟友是当年抓捕自己的警部。",
        "cover": "./56.jpg",
        "url": "./videos/video-1406.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "舞力对决",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "音乐/舞蹈/剧情",
        "tags": [
            "街舞",
            "芭蕾",
            "跨界",
            "励志",
            "音乐",
            "舞蹈"
        ],
        "line": "一群街头舞者为了赢得比赛奖金救活舞团,被迫和芭蕾舞学院的学生组成一支“不搭调”的战队。",
        "cover": "./57.jpg",
        "url": "./videos/video-1407.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "大洪水",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "灾难/科幻",
        "tags": [
            "末世洪水",
            "方舟政治",
            "阶级隔离",
            "基因洪水",
            "生态恐怖",
            "灾难"
        ],
        "line": "全球海平面暴涨后,十艘“新方舟”上的最后人类发现,真正的洪水不是海水,而是被水释放的远古病毒。",
        "cover": "./58.jpg",
        "url": "./videos/video-1408.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "德维塔耶夫",
        "year": "2025",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争,历史,动作",
        "tags": [
            "二战真实改编",
            "苏联飞行员",
            "集中营越狱",
            "战争",
            "历史",
            "动作"
        ],
        "line": "苏联飞行员德维塔耶夫被俘后在集中营偷走纳粹轰炸机,带着九名战俘惊天逃亡。",
        "cover": "./59.jpg",
        "url": "./videos/video-1409.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "死战",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "动作,战争",
        "tags": [
            "古代",
            "人海战术",
            "冷兵器",
            "绝境",
            "牺牲",
            "动作"
        ],
        "line": "高丽末年,五十名奴隶被投进必死的战场,他们唯一的武器是“死前至少要拉一个垫背的”。",
        "cover": "./60.jpg",
        "url": "./videos/video-1410.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "万王之王",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "史诗,动作,奇幻",
        "tags": [
            "神话重启",
            "诸神黄昏",
            "黑科技",
            "反英雄",
            "史诗",
            "动作"
        ],
        "line": "在诸神黄昏后幸存下来的众神之王奥丁,化身为一个纽约的流浪汉,当他发现雷神之锤被一个街头黑客捡到时,一场荒诞的“夺锤之战”开始了。",
        "cover": "./61.jpg",
        "url": "./videos/video-1411.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "赛马艳史",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,爱情,运动",
        "tags": [
            "赛马",
            "怀旧",
            "励志",
            "赌马",
            "港味",
            "喜剧"
        ],
        "line": "六十岁的过气骑师和四十岁的单亲妈妈组队,要赢下一场不可能的比赛。",
        "cover": "./62.jpg",
        "url": "./videos/video-1412.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "即刻毁灭",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作,科幻,惊悚",
        "tags": [
            "倒计时",
            "末日",
            "极限反杀",
            "高概念",
            "动作",
            "科幻"
        ],
        "line": "当一个反社会天才控制了全球核弹,一名退役特种兵必须在6小时内阻止人类毁灭。",
        "cover": "./63.jpg",
        "url": "./videos/video-1413.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "芳华",
        "year": "2017",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/历史/爱情",
        "tags": [
            "文工团",
            "青春",
            "战争",
            "岁月",
            "冯氏美学",
            "剧情"
        ],
        "line": "文工团解散前夜,一群少男少女的青春被炮火与背叛碾碎成泥。",
        "cover": "./64.jpg",
        "url": "./videos/video-1414.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "加州大地震",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作/灾难",
        "tags": [
            "地震",
            "救援",
            "母女情",
            "视觉特效",
            "动作",
            "灾难"
        ],
        "line": "超级大地震撕裂加州,一名直升机救援飞行员必须在城市沉入太平洋之前,穿越火线救出女儿。",
        "cover": "./65.jpg",
        "url": "./videos/video-1415.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "幸运逻辑",
        "year": "2016",
        "region": "日本",
        "type": "剧集",
        "genre": "科幻/冒险/萌系",
        "tags": [
            "逻辑",
            "异世界",
            "幸运",
            "怪兽",
            "科幻",
            "冒险"
        ],
        "line": "当世界面临崩溃,被选中的少年必须用“逻辑”对抗吞食运气的怪兽。",
        "cover": "./66.jpg",
        "url": "./videos/video-1416.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "我的离婚派对",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/喜剧",
        "tags": [
            "女性成长",
            "黑色幽默",
            "婚姻反思",
            "剧情",
            "喜剧"
        ],
        "line": "一场本该庆祝自由的离婚派对,却因前夫的意外暴毙变成全员嫌疑的荒诞密室破案夜。",
        "cover": "./67.jpg",
        "url": "./videos/video-1417.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "甜心战士:眼泪",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "动作/奇幻/冒险",
        "tags": [
            "少女变身",
            "反英雄",
            "机械身体",
            "复仇",
            "动作",
            "奇幻"
        ],
        "line": "为了保护唯一的养父,女高中生战士必须用不断流泪的身体对抗吞噬情感的妖魔。",
        "cover": "./68.jpg",
        "url": "./videos/video-1418.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "港媳嫁到",
        "year": "2025",
        "region": "中国大陆/中国香港",
        "type": "剧集",
        "genre": "家庭/喜剧",
        "tags": [
            "香港媳妇",
            "内地婆婆",
            "文化差异",
            "婚后生活",
            "爆笑",
            "家庭"
        ],
        "line": "香港独立女性阿欣嫁到东北大家庭,婆婆用冰雕技能教她包饺子,公公教她搓麻将学粤语。",
        "cover": "./69.jpg",
        "url": "./videos/video-1419.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "飙速青春",
        "year": "2022",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "运动/剧情",
        "tags": [
            "单车",
            "热血",
            "校园",
            "成长",
            "环岛",
            "运动"
        ],
        "line": "五个被校队淘汰的高中生组建业余车队,目标是击败全国冠军。",
        "cover": "./70.jpg",
        "url": "./videos/video-1420.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "开膛街第五季",
        "year": "2019",
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑/惊悚/犯罪",
        "tags": [
            "开膛手杰克",
            "白教堂",
            "法医",
            "维多利亚时代",
            "悬疑",
            "惊悚"
        ],
        "line": "开膛手杰克被处决后,白教堂区出现更残忍的模仿犯,而且他似乎知道警方从未公开的尸检细节。",
        "cover": "./71.jpg",
        "url": "./videos/video-1421.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "天上再见",
        "year": "2019",
        "region": "法国",
        "type": "电影",
        "genre": "战争/剧情/犯罪",
        "tags": [
            "一战",
            "面具",
            "复仇",
            "荒诞",
            "父子",
            "战争"
        ],
        "line": "一战幸存士兵毁容后戴着39张华丽面具,向抛弃他的上流社会复仇。",
        "cover": "./72.jpg",
        "url": "./videos/video-1422.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "妈妈的花样年华",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情,家庭,女性",
        "tags": [
            "老年",
            "再婚",
            "母女",
            "现实",
            "催泪治愈",
            "剧情"
        ],
        "line": "65岁的母亲决定再婚,三个已成年的子女炸开了锅,而对象是女儿当年的初恋。",
        "cover": "./73.jpg",
        "url": "./videos/video-1423.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "报社第一季",
        "year": "2020",
        "region": "英国",
        "type": "剧集",
        "genre": "剧情/悬疑/职场",
        "tags": [
            "新闻",
            "伦敦",
            "阴谋",
            "纸媒衰落",
            "道德困境",
            "剧情"
        ],
        "line": "百年大报《信使报》突然收到匿名U盘,内含全体记者的“卖国证据”,报社一人卖一人的游戏开始。",
        "cover": "./74.jpg",
        "url": "./videos/video-1424.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "辣椒教室",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "校园,剧情",
        "tags": [
            "问题学生",
            "热血教师",
            "方言",
            "美食",
            "校园",
            "剧情"
        ],
        "line": "一名被发配到偏僻渔村的失败教师,用祖传的“辣椒秘方”收服了一群无心学习的叛逆少年。",
        "cover": "./75.jpg",
        "url": "./videos/video-1425.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "叛奴",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "历史,动作",
        "tags": [
            "古罗马",
            "角斗士",
            "起义",
            "史诗",
            "历史",
            "动作"
        ],
        "line": "为了找回被卖到罗马的妹妹,日耳曼战俘伪装成哑巴角斗士,在竞技场中积蓄造反力量。",
        "cover": "./76.jpg",
        "url": "./videos/video-1426.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "万劫红莲",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装/动作/爱情",
        "tags": [
            "复仇",
            "女杀手",
            "宫廷",
            "虐恋",
            "古装",
            "动作"
        ],
        "line": "十年前被灭门的将军之女化身花魁,用美色与剑术接近仇人太子,却发现爱上了他。",
        "cover": "./77.jpg",
        "url": "./videos/video-1427.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "小矮妖的复仇",
        "year": "2024",
        "region": "爱尔兰/英国",
        "type": "电影",
        "genre": "恐怖、奇幻、民间传说",
        "tags": [
            "小矮妖",
            "黑童话",
            "贪婪惩罚",
            "血腥",
            "恐怖",
            "奇幻"
        ],
        "line": "一群房地产开发商铲平了爱尔兰传说中小矮妖的树洞,随后他们一个个以最“幸运”的方式惨死。",
        "cover": "./78.jpg",
        "url": "./videos/video-1428.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "发现女巫第二季",
        "year": "2025",
        "region": "美国/英国",
        "type": "剧集",
        "genre": "奇幻,爱情",
        "tags": [
            "魔法",
            "吸血鬼",
            "时空穿越",
            "伊丽莎白时代",
            "奇幻",
            "爱情"
        ],
        "line": "为了寻找生命之书的真相,女巫戴安娜和吸血鬼马修穿越回16世纪的伦敦,却意外卷入了英国皇室的血腥阴谋。",
        "cover": "./79.jpg",
        "url": "./videos/video-1429.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "死人之手",
        "year": "2011",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖惊悚",
        "tags": [
            "通灵板",
            "诅咒",
            "校园传说",
            "寄生",
            "密室",
            "恐怖惊悚"
        ],
        "line": "六名大学生玩通灵板时,一只腐烂的手从镜中伸出,从此他们每人都会凭空多出一根手指。",
        "cover": "./80.jpg",
        "url": "./videos/video-1430.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "怪化猫",
        "year": "2024",
        "region": "日本",
        "type": "剧集/动画",
        "genre": "奇幻/悬疑/恐怖/浮世绘",
        "tags": [
            "化猫",
            "卖药郎",
            "退魔",
            "浮世绘风格",
            "形真理",
            "奇幻"
        ],
        "line": "卖药郎带着退魔之剑游走于大正时代的阴影中,斩杀由人心滋生出来的“怪”。",
        "cover": "./81.jpg",
        "url": "./videos/video-1431.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "落魄大厨",
        "year": "2024",
        "region": "西班牙",
        "type": "电视剧",
        "genre": "剧情/喜剧/美食",
        "tags": [
            "米其林",
            "街头小吃",
            "中年危机",
            "自我救赎",
            "剧情",
            "喜剧"
        ],
        "line": "被米其林星级餐厅开除的暴躁主厨,沦落到在一个郊区小学的食堂掌勺,却用“高级料理”征服了一群最难搞的“食客”——小学生。",
        "cover": "./82.jpg",
        "url": "./videos/video-1432.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "死亡夺命针",
        "year": "2024",
        "region": "香港",
        "type": "电影",
        "genre": "犯罪,悬疑,动作",
        "tags": [
            "连环杀人",
            "法医",
            "复仇",
            "针剂",
            "犯罪",
            "悬疑"
        ],
        "line": "一名法医发现多起“自然死亡”案的死者后颈,都藏着一枚查不出成分的微型针孔。",
        "cover": "./83.jpg",
        "url": "./videos/video-1433.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "描准",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "动作/悬疑",
        "tags": [
            "狙击手",
            "洗脑",
            "刺杀",
            "失忆",
            "动作",
            "悬疑"
        ],
        "line": "一名顶级狙击手在一次任务后发现目标是无辜的,他开始怀疑自己的所有任务都是被人操控的记忆。",
        "cover": "./84.jpg",
        "url": "./videos/video-1434.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "你的甜品我的爱",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情,剧情,美食",
        "tags": [
            "甜品",
            "失忆",
            "旧情复燃",
            "元朗",
            "糖水铺",
            "爱情"
        ],
        "line": "甜品师傅失去味觉后,唯一能尝出的甜味,来自前女友煲的红豆沙。",
        "cover": "./85.jpg",
        "url": "./videos/video-1435.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "青春京剧社",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情,青春,励志",
        "tags": [
            "国粹",
            "校园社团",
            "00后",
            "代际传承",
            "剧情",
            "青春"
        ],
        "line": "一名玩说唱的高中生为了学分被迫加入濒临解散的京剧社,却意外发现京剧的flow比说唱还难。",
        "cover": "./86.jpg",
        "url": "./videos/video-1436.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "龙在边缘国语",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作、犯罪、黑帮",
        "tags": [
            "复仇",
            "退隐",
            "江湖",
            "普通话配音",
            "硬汉",
            "动作"
        ],
        "line": "金盆洗手的黑道传奇,发现儿子被仇家陷害入狱,只能重出江湖以暴制暴。",
        "cover": "./87.jpg",
        "url": "./videos/video-1437.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "疯马歌舞秀",
        "year": "2015",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/歌舞",
        "tags": [
            "巴黎夜总会",
            "幕后",
            "女性力量",
            "剧情",
            "歌舞"
        ],
        "line": "一个濒临倒闭的百年夜总会,一群舞者用最后一台原创大秀赌上尊严与梦想。",
        "cover": "./88.jpg",
        "url": "./videos/video-1438.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "制造杀人犯第一季",
        "year": "2015",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪,纪录片",
        "tags": [
            "真实事件",
            "冤案",
            "司法",
            "悬疑",
            "调查",
            "犯罪"
        ],
        "line": "曾被冤入狱18年的男人刚获释两年,又因一桩谋杀再次被指控,他却坚称清白。",
        "cover": "./89.jpg",
        "url": "./videos/video-1439.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "女儿国嬉春",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "情色,古装,喜剧",
        "tags": [
            "风月",
            "西游",
            "艳情",
            "情色",
            "古装",
            "喜剧"
        ],
        "line": "唐僧师徒误入女儿国,却发现这里的春天比火焰山还热。",
        "cover": "./90.jpg",
        "url": "./videos/video-1440.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "蝙蝠侠",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "动作,犯罪,悬疑",
        "tags": [
            "超级英雄",
            "侦探",
            "黑色电影",
            "动作",
            "犯罪",
            "悬疑"
        ],
        "line": "蝙蝠侠成为哥谭义警的第二年,一个名为“谜语人”的连环杀手正用谜语揭露韦恩家族的黑暗遗产。",
        "cover": "./91.jpg",
        "url": "./videos/video-1441.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "检事和女先生",
        "year": "2026",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑/律政/动作",
        "tags": [
            "双雄联手",
            "法医推理",
            "女教师秘密",
            "检察官",
            "悬疑",
            "律政"
        ],
        "line": "固执的检察官遇上了隐藏身份的法医女教师,联手破解完美不在场证明。",
        "cover": "./92.jpg",
        "url": "./videos/video-1442.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "红槐花",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "年代,爱情,战争",
        "tags": [
            "民国",
            "大别山",
            "革命爱情",
            "牺牲与等待",
            "年代",
            "爱情"
        ],
        "line": "1930年代大别山,富家小姐爱上红军战士,她用一生等待一朵永远不会盛开的红槐花。",
        "cover": "./93.jpg",
        "url": "./videos/video-1443.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "三七撞上二十一",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情,爱情,都市",
        "tags": [
            "年龄差",
            "合约情侣",
            "代际冲突",
            "剧情",
            "爱情",
            "都市"
        ],
        "line": "37岁的离婚霸道总裁,被迫和21岁的破产“社恐”大学生签订了一份荒诞的合约情侣协议。",
        "cover": "./94.jpg",
        "url": "./videos/video-1444.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "香港制造粤语",
        "year": "2027",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,犯罪",
        "tags": [
            "香港",
            "本土",
            "街头",
            "青年",
            "怀旧",
            "剧情"
        ],
        "line": "90年代尾声的香港深水埗,两个在公屋长大的街头少年,因为一箱来历不明的现金,开启了一段亡命之旅。",
        "cover": "./95.jpg",
        "url": "./videos/video-1445.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "再见,黑鸟",
        "year": "2023",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑,奇幻,伦理",
        "tags": [
            "平行宇宙",
            "出轨",
            "告别",
            "奇幻",
            "温情",
            "悬疑"
        ],
        "line": "一个向15位女友出轨的男人遭遇电车事故,必须在平行世界里与每一位女友好好说再见。",
        "cover": "./96.jpg",
        "url": "./videos/video-1446.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "烟飞烟灭",
        "year": "2000",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/家庭/公益",
        "tags": [
            "戒烟公益",
            "全明星阵容",
            "亲情催泪",
            "写实风格",
            "剧情",
            "家庭"
        ],
        "line": "一对吸烟多年的夫妻,直到年幼的儿子被诊断出血癌,才意识到二手烟的毁灭性代价。",
        "cover": "./97.jpg",
        "url": "./videos/video-1447.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "奇幻潮国语",
        "year": "2005",
        "region": "中国香港",
        "type": "剧集",
        "genre": "奇幻/悬疑",
        "tags": [
            "单元剧",
            "都市怪谈",
            "港式奇幻",
            "奇幻",
            "悬疑"
        ],
        "line": "二十二个发生在香港都市中的奇幻故事,每一集都告诉你:这个城市,比你想象的更离奇。",
        "cover": "./98.jpg",
        "url": "./videos/video-1448.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "战栗黑洞",
        "year": "1994",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,奇幻",
        "tags": [
            "克苏鲁",
            "心理扭曲",
            "邪典",
            "恐怖",
            "奇幻"
        ],
        "line": "私家侦探调查畅销恐怖小说作者的失踪案,却发现自己正活在小说的最后一章里。",
        "cover": "./99.jpg",
        "url": "./videos/video-1449.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "绝境盟约",
        "year": "2019",
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪,动作",
        "tags": [
            "卧底",
            "黑帮",
            "背叛",
            "复仇",
            "犯罪",
            "动作"
        ],
        "line": "卧底警察在黑帮卧底七年,却被组织出卖,被迫在绝境中与仇敌结盟。",
        "cover": "./100.jpg",
        "url": "./videos/video-1450.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "第七封印",
        "year": "2026",
        "region": "瑞典",
        "type": "电影",
        "genre": "奇幻,剧情,悬疑",
        "tags": [
            "经典改编",
            "死神",
            "哲学",
            "现代",
            "游戏",
            "奇幻"
        ],
        "line": "当代颓废青年与死神下棋的经典故事,只不过这次棋盘被搬到了互联网上,而赌注是所有人的“注意力”。",
        "cover": "./101.jpg",
        "url": "./videos/video-1451.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "绀田照的合法食谱",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情,犯罪,美食",
        "tags": [
            "黑道",
            "料理",
            "反套路",
            "剧情",
            "犯罪",
            "美食"
        ],
        "line": "表面是暴力黑道家族的少当家,背地里却是个沉迷研发精致料理的烹饪天才,他用美食化解一次次血腥火并。",
        "cover": "./102.jpg",
        "url": "./videos/video-1452.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "文明的崛起 第一季",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "纪录片,历史",
        "tags": [
            "人类史",
            "考古",
            "史诗场景",
            "纪录片",
            "历史"
        ],
        "line": "从第一把石斧到第一座城市,还原人类文明每一步关键跃迁。",
        "cover": "./103.jpg",
        "url": "./videos/video-1453.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "飞虎狂龙",
        "year": "1995",
        "region": "香港",
        "type": "电影",
        "genre": "动作、喜剧、警匪",
        "tags": [
            "双雄搭档",
            "黄金年代",
            "枪战爆破",
            "乌龙事件",
            "动作",
            "喜剧"
        ],
        "line": "飞虎队王牌因一次任务失败被降职,被迫与一个整天想当明星的卧底小混混组成拍档。",
        "cover": "./104.jpg",
        "url": "./videos/video-1454.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "浴血争霸",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "动作,战争",
        "tags": [
            "角斗士",
            "未来世界",
            "阶级对立",
            "血腥美学",
            "动作",
            "战争"
        ],
        "line": "未来世界,死刑犯被扔进竞技场直播厮杀,胜者可以活着,败者被全宇宙观看死亡。",
        "cover": "./105.jpg",
        "url": "./videos/video-1455.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "神经性失明",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "惊悚/心理",
        "tags": [
            "心理疾病",
            "医疗阴谋",
            "幻觉",
            "密室",
            "惊悚",
            "心理"
        ],
        "line": "她的大脑拒绝看到真相,而真相正在病房里杀死所有人。",
        "cover": "./106.jpg",
        "url": "./videos/video-1456.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "安妮回忆录",
        "year": "2024",
        "region": "法国",
        "type": "剧集",
        "genre": "剧情,传记,历史",
        "tags": [
            "女性",
            "战争",
            "记忆",
            "优雅衰老",
            "剧情",
            "传记"
        ],
        "line": "104岁的安妮在养老院写下回忆录,揭开了二战期间她作为间谍与三个男人之间的爱恨纠葛。",
        "cover": "./107.jpg",
        "url": "./videos/video-1457.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "怒吼狂花",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "复仇",
            "飙车",
            "女性觉醒",
            "动作",
            "犯罪"
        ],
        "line": "当哑女阿花目睹弟弟惨死车轮下,她放弃了花店,用一辆改装赛车向黑帮太子爷宣战。",
        "cover": "./108.jpg",
        "url": "./videos/video-1458.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "地雷险区",
        "year": "2022",
        "region": "乌克兰/波兰",
        "type": "电影",
        "genre": "战争、惊悚、剧情",
        "tags": [
            "排雷兵",
            "儿童",
            "生死抉择",
            "东乌冲突",
            "人性",
            "战争"
        ],
        "line": "一名乌克兰排雷兵必须在24小时内穿过敌军地雷区,救出自己的女儿。",
        "cover": "./109.jpg",
        "url": "./videos/video-1459.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "不吉波普不笑",
        "year": "2019",
        "region": "日本",
        "type": "剧集",
        "genre": "奇幻,悬疑,心理,校园",
        "tags": [
            "奇幻",
            "校园",
            "都市传说",
            "意识流",
            "心理",
            "轻小说改"
        ],
        "line": "都市传说“不吉波普”会在世界出现危机时微笑,但这一次,她笑不出来。",
        "cover": "./110.jpg",
        "url": "./videos/video-1460.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "麋鹿王",
        "year": "2024",
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "奇幻/冒险/家庭",
        "tags": [
            "环保",
            "成长",
            "神兽",
            "治愈",
            "奇幻",
            "冒险"
        ],
        "line": "自闭症男孩误入森林,成为预言中能听懂麋鹿低语的“麋鹿王”候选,却要对抗贪婪的盗猎集团。",
        "cover": "./111.jpg",
        "url": "./videos/video-1461.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "零下的激情",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,剧情,悬疑",
        "tags": [
            "东北",
            "阴谋",
            "虐恋",
            "爱情",
            "剧情",
            "悬疑"
        ],
        "line": "中国最北的小镇,一具冰封的尸体被挖出,牵扯出一段尘封二十年的炽热爱情与致命背叛。",
        "cover": "./112.jpg",
        "url": "./videos/video-1462.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "毕业风云",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "青春悬疑",
        "tags": [
            "毕业季",
            "阴谋",
            "反转",
            "校园",
            "复仇",
            "青春悬疑"
        ],
        "line": "毕业典礼前夜,优等生收到神秘U盘,里面竟是全班同学“意外死亡”的预告片。",
        "cover": "./113.jpg",
        "url": "./videos/video-1463.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "奇迹先生",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻,剧情,悬疑",
        "tags": [
            "超能力",
            "身份认同",
            "实验品",
            "都市传说",
            "科幻",
            "剧情"
        ],
        "line": "一个能修复任何物体的男人,唯独无法修复自己破碎的记忆和被追杀的命运。",
        "cover": "./114.jpg",
        "url": "./videos/video-1464.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "飞天大逃亡",
        "year": "1995",
        "region": "香港",
        "type": "电影",
        "genre": "喜剧/动作",
        "tags": [
            "王晶",
            "瞎胡闹",
            "特技夸张",
            "兄弟情",
            "误打误撞",
            "喜剧"
        ],
        "line": "两个倒霉蛋捡到一块飞行滑板,从此开启被黑帮、警察和FBI同时追杀的疯癫之旅。",
        "cover": "./115.jpg",
        "url": "./videos/video-1465.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "孤国春秋第一季",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "历史,动作,剧情",
        "tags": [
            "中世纪",
            "盎格鲁-撒克逊",
            "维京入侵",
            "王位之争",
            "刀剑格斗",
            "历史"
        ],
        "line": "九世纪英格兰,一个被维京人屠村的撒克逊少年被仇人收养,长大后必须在两个文明之间做出选择。",
        "cover": "./116.jpg",
        "url": "./videos/video-1466.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "行迹变幻",
        "year": "2022",
        "region": "法国",
        "type": "电影",
        "genre": "悬疑/科幻/惊悚",
        "tags": [
            "量子纠缠",
            "双胞胎",
            "身份互换",
            "烧脑",
            "悬疑",
            "科幻"
        ],
        "line": "一对双胞胎兄弟意外开启了量子纠缠,从此一人受伤另一人也会痛,他们被迫共享同一种人生。",
        "cover": "./117.jpg",
        "url": "./videos/video-1467.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "蜜月杀机",
        "year": "2022",
        "region": "西班牙/美国",
        "type": "电影",
        "genre": "惊悚/悬疑/爱情",
        "tags": [
            "蜜月",
            "荒岛",
            "信任",
            "反转",
            "惊悚",
            "悬疑"
        ],
        "line": "一对新婚夫妇到无人岛度蜜月,第二天醒来发现岛上还有第三个人,而那个人是丈夫的前妻。",
        "cover": "./118.jpg",
        "url": "./videos/video-1468.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "我是大明星",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,剧情",
        "tags": [
            "身份错位",
            "娱乐圈内幕",
            "黑色幽默",
            "喜剧",
            "剧情"
        ],
        "line": "一个十八线小演员意外顶替了失忆的顶流巨星,却发现对方的生活是一场精心设计的骗局。",
        "cover": "./119.jpg",
        "url": "./videos/video-1469.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "三嫁魔君",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装/爱情",
        "tags": [
            "仙侠",
            "重生",
            "虐恋",
            "强制爱",
            "古装",
            "爱情"
        ],
        "line": "为复活前世爱人,魔君强迫拥有凤凰血脉的少女与自己成婚三次,第三次大婚之日新娘却刺穿了他的心。",
        "cover": "./120.jpg",
        "url": "./videos/video-1470.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "甜心灵媒",
        "year": "2022",
        "region": "泰国",
        "type": "电视剧",
        "genre": "喜剧,爱情,恐怖,奇幻",
        "tags": [
            "泰式轻恐怖",
            "灵媒世家",
            "甜点制作",
            "欢喜冤家",
            "单元破案",
            "喜剧"
        ],
        "line": "一个能看到鬼魂但被迫在甜品店打工的灵媒世家千金,与一个完全不信任鬼魂的警官联手破获悬案。",
        "cover": "./121.jpg",
        "url": "./videos/video-1471.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "波托先生",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,传记,历史",
        "tags": [
            "殖民反思",
            "植物学家",
            "道德困境",
            "单幕剧",
            "剧情",
            "传记"
        ],
        "line": "一位痴迷于分类学的大英帝国植物学家,在殖民地发现的新物种,成了他良心上分崩离析的导火索。",
        "cover": "./122.jpg",
        "url": "./videos/video-1472.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "罗马2018",
        "year": "2018",
        "region": "墨西哥",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "黑白",
            "女性",
            "社会底层",
            "阿方索·卡隆",
            "剧情",
            "家庭"
        ],
        "line": "1971年墨西哥城的一个中产家庭里,女佣克莱奥在个人的悲剧与国家的动荡中,用坚韧维系着这个即将破碎的家。",
        "cover": "./123.jpg",
        "url": "./videos/video-1473.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "巴黎皇帝",
        "year": "2024",
        "region": "法国",
        "type": "剧集",
        "genre": "历史",
        "tags": [
            "拿破仑",
            "篡改历史",
            "惊悚",
            "科技伦理",
            "时间旅行",
            "历史"
        ],
        "line": "一群历史系学生使用AI深度伪造技术,在社交媒体上发起了“复活拿破仑”的病毒营销,不料却引发了全球极右翼政变。",
        "cover": "./124.jpg",
        "url": "./videos/video-1474.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "逆风追爱",
        "year": "2026",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "都市,爱情,职场",
        "tags": [
            "姐弟恋",
            "公关行业",
            "励志",
            "破镜重圆",
            "都市",
            "爱情"
        ],
        "line": "金牌公关女强人与破产富二代前男友,在职场竞标场上狭路相逢,逆风翻盘还是重蹈覆辙?",
        "cover": "./125.jpg",
        "url": "./videos/video-1475.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "失眠",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑/心理/剧情",
        "tags": [
            "精神分裂",
            "记忆",
            "救赎",
            "反催眠",
            "悬疑",
            "心理"
        ],
        "line": "一位失眠十年的男子接受实验性治疗,却分不清哪些是梦、哪些是被篡改的记忆。",
        "cover": "./126.jpg",
        "url": "./videos/video-1476.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "新征程,舞起来!",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情,喜剧,音乐",
        "tags": [
            "广场舞",
            "乡村振兴",
            "代际沟通",
            "热血",
            "方言",
            "剧情"
        ],
        "line": "一心想要躺平的都市程序员,被派到乡村组织广场舞大赛,却引爆了一场全村“舞林革命”。",
        "cover": "./127.jpg",
        "url": "./videos/video-1477.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "变身少女露比",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动画/喜剧/奇幻",
        "tags": [
            "魔法少女",
            "校园",
            "变身",
            "自我认同",
            "青春期",
            "动画"
        ],
        "line": "社恐初中女生每次打喷嚏就会变身成超级英雄,但变身后的人格是个话痨自恋狂。",
        "cover": "./128.jpg",
        "url": "./videos/video-1478.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "被遗忘的天使",
        "year": "2011",
        "region": "英国",
        "type": "剧集",
        "genre": "剧情,悬疑",
        "tags": [
            "孤儿院",
            "历史冤案",
            "治愈",
            "剧情",
            "悬疑"
        ],
        "line": "一位记者调查废弃孤儿院旧址时,在地下室发现数百封从未寄出的、写给“天使妈妈”的信。",
        "cover": "./129.jpg",
        "url": "./videos/video-1479.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "金牌贱猫:重新出击",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧、动作、犯罪",
        "tags": [
            "贱萌",
            "特工",
            "退休大佬",
            "乌龙",
            "喜剧",
            "动作"
        ],
        "line": "退隐江湖的老年神偷“贱猫”被迫重出江湖,这次他的任务是偷走英国女王的柯基犬。",
        "cover": "./130.jpg",
        "url": "./videos/video-1480.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "情色风暴",
        "year": "2020",
        "region": "丹麦/瑞典",
        "type": "电影",
        "genre": "剧情,情色,悬疑",
        "tags": [
            "北欧",
            "换妻",
            "心理学实验",
            "婚姻危机",
            "暴风雪山庄",
            "剧情"
        ],
        "line": "七对夫妇受邀参加一个偏远的心理疗愈营,却被迫参与一场关于“性与坦诚”的极端实验,最终演变成血腥的修罗场。",
        "cover": "./131.jpg",
        "url": "./videos/video-1481.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "一条狗的使命2",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,喜剧,家庭",
        "tags": [
            "狗狗",
            "催泪",
            "轮回",
            "治愈",
            "温情",
            "剧情"
        ],
        "line": "小狗贝利再次经历四世轮回,只为守护主人伊森的孙女,完成那个承诺。",
        "cover": "./132.jpg",
        "url": "./videos/video-1482.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "八仙传之吕仙惩贪记",
        "year": "2016",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装,奇幻",
        "tags": [
            "神话",
            "八仙",
            "反腐",
            "民间传说",
            "古装",
            "奇幻"
        ],
        "line": "吕洞宾下凡游历,发现一个县令竟比妖怪还会搜刮民财,他决定以仙法行人间律法。",
        "cover": "./133.jpg",
        "url": "./videos/video-1483.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "洛水神仙",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻/古装/爱情",
        "tags": [
            "曹植",
            "洛神",
            "神话",
            "水墨",
            "悲剧",
            "奇幻"
        ],
        "line": "曹植在洛水边遇到的神女并非幻想,而是一场跨越人神禁忌的千年前爱恋。",
        "cover": "./134.jpg",
        "url": "./videos/video-1484.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "海岸物语",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "治愈",
            "海边",
            "代际",
            "夏天",
            "缓慢",
            "剧情"
        ],
        "line": "东京失业的四十岁男人回到海边的老家,发现患阿尔茨海默症的母亲,竟然只记得二十年前的那个夏天。",
        "cover": "./135.jpg",
        "url": "./videos/video-1485.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "三剑侠之子",
        "year": "2025",
        "region": "法国/意大利",
        "type": "电影",
        "genre": "动作、冒险、历史",
        "tags": [
            "剑客",
            "复仇",
            "遗产",
            "动作",
            "冒险",
            "历史"
        ],
        "line": "二十年后,三个老剑客的儿子继承父业,却发现父亲们的荣耀背后,藏着一段肮脏的殖民史。",
        "cover": "./136.jpg",
        "url": "./videos/video-1486.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "诗人之血",
        "year": "1932",
        "region": "法国",
        "type": "电影",
        "genre": "奇幻/avant-garde",
        "tags": [
            "超现实主义",
            "实验电影",
            "让·科克托",
            "奇幻",
            "avant-garde"
        ],
        "line": "画家让画中人物复活,跟随雕像进入镜子世界,每一扇门都是一场死亡。",
        "cover": "./137.jpg",
        "url": "./videos/video-1487.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "若你说出愿望",
        "year": "2023",
        "region": "韩国",
        "type": "剧集",
        "genre": "奇幻,治愈,剧情",
        "tags": [
            "临终关怀",
            "许愿",
            "催泪",
            "奇幻",
            "治愈",
            "剧情"
        ],
        "line": "在临终关怀医院,一群将死之人通过帮别人实现愿望来换取自己活下去的可能。",
        "cover": "./138.jpg",
        "url": "./videos/video-1488.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "简爱1970",
        "year": "1970",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/爱情/经典改编",
        "tags": [
            "名著",
            "维多利亚",
            "家庭教师",
            "哥特",
            "女性独立",
            "剧情"
        ],
        "line": "一位出身卑微却灵魂高贵的家庭教师,在阴森的桑菲尔德庄园里,爱上了一位被秘密囚禁的疯男人。",
        "cover": "./139.jpg",
        "url": "./videos/video-1489.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "布莱登棒棒糖",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "犯罪、剧情、黑色电影",
        "tags": [
            "帮派战争",
            "宿命论",
            "底层挣扎",
            "翻拍",
            "犯罪",
            "剧情"
        ],
        "line": "布莱登码头两帮派争夺一根传世棒棒糖经营权,糖里藏着百年前海盗的藏宝图线索。",
        "cover": "./140.jpg",
        "url": "./videos/video-1490.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "罗马三贱客 第三季",
        "year": "2024",
        "region": "意大利",
        "type": "电视剧",
        "genre": "喜剧,历史恶搞",
        "tags": [
            "古罗马",
            "无厘头",
            "废柴",
            "穿越",
            "喜剧",
            "历史恶搞"
        ],
        "line": "三个在罗马时代就混日子的废柴,被雷劈后穿越到现代,又带着手机和外卖回到了古罗马。",
        "cover": "./141.jpg",
        "url": "./videos/video-1491.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "天堂属于谁",
        "year": "2024",
        "region": "德国/波兰",
        "type": "电影",
        "genre": "战争,剧情,历史",
        "tags": [
            "奥斯维辛",
            "信仰拷问",
            "救赎",
            "神父",
            "人性深渊",
            "战争"
        ],
        "line": "奥斯维辛集中营里,一名年轻神父被迫为处决名单签字,他在上帝与魔鬼之间选择了地狱。",
        "cover": "./142.jpg",
        "url": "./videos/video-1492.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "九鼎记之禹皇宝藏",
        "year": "2026",
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "动作/奇幻/冒险",
        "tags": [
            "上古神话",
            "寻宝",
            "神兽",
            "九鼎",
            "动作",
            "奇幻"
        ],
        "line": "少年为救被石化的小镇,集齐散落九鼎唤醒禹皇神力,却发现自己就是封印的钥匙。",
        "cover": "./143.jpg",
        "url": "./videos/video-1493.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "归来燕",
        "year": "1995",
        "region": "中国内地",
        "type": "电影",
        "genre": "文艺,爱情",
        "tags": [
            "知青",
            "乡土",
            "等待",
            "伤痕",
            "文艺",
            "爱情"
        ],
        "line": "女知青返城前承诺会回来,老实的农夫等了三十年,等来的却是她女儿。",
        "cover": "./144.jpg",
        "url": "./videos/video-1494.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "家和万事兴之抬头见喜",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/家庭",
        "tags": [
            "贺岁",
            "东北喜剧",
            "返乡过年",
            "喜剧",
            "家庭"
        ],
        "line": "破产富二代装成成功人士回乡过年,不料全村人都以为他是真的大款。",
        "cover": "./145.jpg",
        "url": "./videos/video-1495.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "曾经的兄弟",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/社会",
        "tags": [
            "拆迁",
            "兄弟情",
            "贫困",
            "和解",
            "现实",
            "剧情"
        ],
        "line": "哥哥考上公务员后与当货车司机的弟弟断绝关系,二十年后老房拆迁,两人被迫再次面对面。",
        "cover": "./146.jpg",
        "url": "./videos/video-1496.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "女特警之暗战",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作/悬疑",
        "tags": [
            "女性特警",
            "卧底",
            "反恐",
            "双面间谍",
            "动作",
            "悬疑"
        ],
        "line": "女特警潜伏在国际犯罪组织内部,却发现自己的上线才是真正的内鬼。",
        "cover": "./147.jpg",
        "url": "./videos/video-1497.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "火箭:南比效应",
        "year": "2024",
        "region": "印度",
        "type": "电影",
        "genre": "剧情/励志/传记",
        "tags": [
            "火箭",
            "科学家",
            "失败",
            "坚持",
            "印度航天",
            "剧情"
        ],
        "line": "印度航天局一位失败多次的火箭科学家,在举世瞩目的火星任务中,被自己的“失败数据库”拯救了全局。",
        "cover": "./148.jpg",
        "url": "./videos/video-1498.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "无罪者",
        "year": "2025",
        "region": "德国",
        "type": "电影",
        "genre": "剧情/悬疑/法庭",
        "tags": [
            "司法黑幕",
            "冤案",
            "律师",
            "翻案",
            "剧情",
            "悬疑"
        ],
        "line": "入狱二十年的男人突然被证明无罪,但受害者家属和曾经的律师都拒绝相信他。",
        "cover": "./149.jpg",
        "url": "./videos/video-1499.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "我的爱我的新娘",
        "year": "2023",
        "region": "韩国",
        "type": "电视剧",
        "genre": "喜剧/爱情",
        "tags": [
            "契约婚姻",
            "先婚后爱",
            "爆笑日常",
            "家庭矛盾",
            "喜剧",
            "爱情"
        ],
        "line": "为了应付双方家长而契约结婚的两人,婚后第一天就发现,对方竟然是自己的职场死对头。",
        "cover": "./150.jpg",
        "url": "./videos/video-1500.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "围城13天:阿拉莫战役",
        "year": "2020",
        "region": "美国",
        "type": "电影",
        "genre": "历史,战争,动作",
        "tags": [
            "孤城",
            "以少战多",
            "真实事件改编",
            "历史",
            "战争",
            "动作"
        ],
        "line": "1836年,200名平民与民兵在破旧教堂里对抗墨西哥7000大军,他们不知道这13天的牺牲将改变北美版图。",
        "cover": "./1.jpg",
        "url": "./videos/video-1501.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "终结之旅",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "科幻/悬疑",
        "tags": [
            "时间循环",
            "末日列车",
            "无限重复",
            "人性实验",
            "烧脑",
            "科幻"
        ],
        "line": "七名陌生人醒来发现自己身处一列永不停歇的列车,每隔24小时列车就会重置,只有一人能活着下车。",
        "cover": "./2.jpg",
        "url": "./videos/video-1502.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "美国天堂",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情,犯罪",
        "tags": [
            "移民",
            "黑帮",
            "梦想",
            "代价",
            "剧情",
            "犯罪"
        ],
        "line": "墨西哥移民小哥偷渡到洛杉矶,以为到了天堂,却发现要在这立足,必须比本地人更狠。",
        "cover": "./3.jpg",
        "url": "./videos/video-1503.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "破浪而出",
        "year": "2025",
        "region": "挪威",
        "type": "电影",
        "genre": "灾难/动作",
        "tags": [
            "海啸",
            "峡湾",
            "极限求生",
            "次生灾害",
            "灾难",
            "动作"
        ],
        "line": "地质学家预测的滑坡海啸提前了三分钟来袭,正在峡湾底部清理二战沉船油污的潜水员成了离死神最近的人。",
        "cover": "./4.jpg",
        "url": "./videos/video-1504.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "谁杀了甘迺迪",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "历史,悬疑,纪录片式",
        "tags": [
            "政治",
            "阴谋",
            "刺杀",
            "重构",
            "历史",
            "悬疑"
        ],
        "line": "通过最新的AI人脸识别和弹道重演技术,本剧逐一排查所有刺杀肯尼迪的阴谋论,给出了最颠覆性的答案。",
        "cover": "./5.jpg",
        "url": "./videos/video-1505.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "不可遗忘第一季",
        "year": "2023",
        "region": "英国",
        "type": "电视剧",
        "genre": "剧情/犯罪",
        "tags": [
            "冷案",
            "人性",
            "慢热",
            "社会派",
            "剧情",
            "犯罪"
        ],
        "line": "伦敦地下施工现场挖出一具30年前的尸骨,两名风格迥异的警探被迫联手。",
        "cover": "./6.jpg",
        "url": "./videos/video-1506.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "爱上海史密斯",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "爱情/传记",
        "tags": [
            "作家",
            "女同",
            "悬疑爱情",
            "年代",
            "爱情",
            "传记"
        ],
        "line": "年轻的研究员在整理帕特里夏·海史密斯遗稿时,发现自己正在经历小说中那场致命的迷恋。",
        "cover": "./7.jpg",
        "url": "./videos/video-1507.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "聂荣臻",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "传记/历史",
        "tags": [
            "两弹一星",
            "开国元勋",
            "国防科技",
            "正剧",
            "传记",
            "历史"
        ],
        "line": "聚焦聂荣臻元帅从抗战到“两弹一星”的三十年,他不光是“福将”,更是中国国防科技之父。",
        "cover": "./8.jpg",
        "url": "./videos/video-1508.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "人浮于爱",
        "year": "2025",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情/悬疑",
        "tags": [
            "多角恋",
            "PUA",
            "情感操控",
            "爱情",
            "悬疑"
        ],
        "line": "一个情感咨询师同时操控着五个人的爱情,直到有一天,这五个人发现他们爱的是同一个人。",
        "cover": "./9.jpg",
        "url": "./videos/video-1509.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "威尔和格蕾丝第九季",
        "year": "2018",
        "region": "美国",
        "type": "电视剧",
        "genre": "喜剧,爱情",
        "tags": [
            "复活季",
            "LGBTQ",
            "友情",
            "喜剧",
            "爱情"
        ],
        "line": "时隔十一年,史上最毒舌的室友组合威尔和格蕾丝再次回归,直面中年危机、亲子关系与永远混乱的私生活。",
        "cover": "./10.jpg",
        "url": "./videos/video-1510.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "铠甲勇士星曜诀醒",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作,科幻,特摄",
        "tags": [
            "铠甲",
            "宇宙",
            "觉醒",
            "热血",
            "动作",
            "科幻"
        ],
        "line": "当暗影星云吞噬银河,最后一位铠甲勇士必须唤醒沉睡在陨石中的远古星曜之力。",
        "cover": "./11.jpg",
        "url": "./videos/video-1511.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "爸爸之战",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情、家庭、喜剧",
        "tags": [
            "父女",
            "隔代教育",
            "农村进城",
            "姥爷VS爷爷",
            "剧情",
            "家庭"
        ],
        "line": "一个城里来的精英姥爷,一个乡下种地的爷爷,为了争夺孙女的教育权,把整个小区变成了战场。",
        "cover": "./12.jpg",
        "url": "./videos/video-1512.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "失落的王子",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,历史",
        "tags": [
            "皇室秘辛",
            "亲情",
            "智力障碍",
            "真实改编",
            "剧情",
            "历史"
        ],
        "line": "他是乔治五世最不起眼的儿子,被遗忘在城堡角落的王子,却用他纯净的心灵,拯救了一个陷入战争癫狂的家庭。",
        "cover": "./13.jpg",
        "url": "./videos/video-1513.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "掩不住的阳光",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑/剧情/社会",
        "tags": [
            "盲人",
            "悬案",
            "感官叙事",
            "追凶",
            "悬疑",
            "剧情"
        ],
        "line": "一场火灾夺走了她的双眼,却也让她“看见”了真凶——因为案发时在场所有人的心跳声,至今仍刻在她的耳朵里。",
        "cover": "./14.jpg",
        "url": "./videos/video-1514.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "流行病毒",
        "year": "2026",
        "region": "全球",
        "type": "剧集",
        "genre": "科幻/惊悚",
        "tags": [
            "病毒",
            "短视频",
            "洗脑",
            "末日",
            "科幻",
            "惊悚"
        ],
        "line": "一种通过短视频传播的“上瘾病毒”全球爆发,人类不再繁殖,只想刷屏到死。",
        "cover": "./15.jpg",
        "url": "./videos/video-1515.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "黑黑真好玩",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧/恐怖",
        "tags": [
            "玩偶",
            "诅咒",
            "黑色幽默",
            "喜剧",
            "恐怖"
        ],
        "line": "她买了一个会说话的黑猫玩偶,玩偶说:我能实现你三个愿望,但代价是死一个人。",
        "cover": "./16.jpg",
        "url": "./videos/video-1516.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "瓦舍之素舞遥",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装/剧情",
        "tags": [
            "宋代瓦舍",
            "女性技艺",
            "非遗传承",
            "古装",
            "剧情"
        ],
        "line": "北宋瓦舍里,一位神秘女子以素舞征服东京,却引来宫廷暗势力的追杀。",
        "cover": "./17.jpg",
        "url": "./videos/video-1517.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "身份的证明",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "悬疑,剧情,犯罪",
        "tags": [
            "证明自己",
            "冤案",
            "警匪",
            "身份互换",
            "社会派",
            "悬疑"
        ],
        "line": "一个失忆的流浪汉自称是失踪三年的刑警队长,但没有一个人信他。",
        "cover": "./18.jpg",
        "url": "./videos/video-1518.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "海边电影院",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,奇幻,历史",
        "tags": [
            "电影院",
            "穿越",
            "战争",
            "告白",
            "剧情",
            "奇幻"
        ],
        "line": "三个年轻人深夜闯入即将停业的旧影院,却在大银幕上看到了二战时的自己,以及那封从未寄出的情书。 当放映机转动,他们发现自己是八十年前因空袭而死的学生,而今晚这场放映,是他…",
        "cover": "./19.jpg",
        "url": "./videos/video-1519.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "血色深宅",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑、民国、宅斗",
        "tags": [
            "豪门恩怨",
            "复仇",
            "乱世女性",
            "密室",
            "悬疑",
            "民国"
        ],
        "line": "民国江南首富大婚当日,新娘坠楼,新郎失踪,整座宅院随即被封锁,凶手就藏在活人里。",
        "cover": "./20.jpg",
        "url": "./videos/video-1520.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "星梦泪痕",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "音乐/剧情",
        "tags": [
            "选秀",
            "替身",
            "梦想",
            "音乐",
            "剧情"
        ],
        "line": "农村女孩替富家千金参加选秀一炮而红,却在领奖那一刻被要求摘下面具说出真名。",
        "cover": "./21.jpg",
        "url": "./videos/video-1521.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "我的师兄惹不起",
        "year": "2023",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "喜剧,武侠",
        "tags": [
            "沙雕",
            "反套路",
            "修仙",
            "爆笑",
            "喜剧",
            "武侠"
        ],
        "line": "被逐出师门的废柴师兄靠坑蒙拐骗成了武林盟主,师弟奉师命来清理门户,却发现全武林都在保他。",
        "cover": "./22.jpg",
        "url": "./videos/video-1522.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "我的狐仙室友",
        "year": "2023",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "奇幻/喜剧/爱情",
        "tags": [
            "都市修仙",
            "萌宠",
            "甜宠",
            "奇幻",
            "喜剧",
            "爱情"
        ],
        "line": "普通程序员合租到一只修炼千年却丢了内丹的呆萌狐仙,被迫开启帮仙姑考研的日常。",
        "cover": "./23.jpg",
        "url": "./videos/video-1523.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "谜寻",
        "year": "2026",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑/犯罪/推理",
        "tags": [
            "网络寻人",
            "暗网",
            "女性互助",
            "单元+主线",
            "悬疑",
            "犯罪"
        ],
        "line": "一个自发组织的网上寻人群组,发现她们找的失踪女孩都指向同一个暗号。",
        "cover": "./24.jpg",
        "url": "./videos/video-1524.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "青春失乐园",
        "year": "2011",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "剧情/喜剧/爱情",
        "tags": [
            "校园",
            "青春疼痛",
            "幽默",
            "怀旧",
            "剧情",
            "喜剧"
        ],
        "line": "一群即将毕业的大四学生在“失乐园”酒吧的最后一夜,回忆了大学四年那些荒诞又心酸的趣事。",
        "cover": "./25.jpg",
        "url": "./videos/video-1525.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "德米特里·顿斯科伊的一生",
        "year": "2025",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "历史,传记,战争",
        "tags": [
            "俄罗斯英雄",
            "库利科沃战役",
            "史诗",
            "民族觉醒",
            "信仰",
            "历史"
        ],
        "line": "莫斯科大公德米特里从懦弱少年成长为“顿斯科伊”,在库利科沃草原上与蒙古铁骑决一死战。",
        "cover": "./26.jpg",
        "url": "./videos/video-1526.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "杰和沉默鲍伯的反击",
        "year": "2001",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧",
        "tags": [
            "好莱坞讽刺",
            "话痨",
            "友情",
            "客串狂潮",
            "无厘头",
            "喜剧"
        ],
        "line": "懒鬼二人组杰与沉默鲍伯发现好莱坞要翻拍他们的漫画角色,于是踏上横跨美国的捣乱之旅,毁掉整个片场。",
        "cover": "./27.jpg",
        "url": "./videos/video-1527.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "妖怪人贝姆",
        "year": "2025",
        "region": "日本",
        "type": "电视剧",
        "genre": "奇幻/剧情",
        "tags": [
            "妖怪",
            "变身",
            "都市传说",
            "正义",
            "奇幻",
            "剧情"
        ],
        "line": "三个丑陋的妖怪人渴望变成人类,在都市暗处打击犯罪却遭人类厌恶。",
        "cover": "./28.jpg",
        "url": "./videos/video-1528.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "希特勒的疯子",
        "year": "2025",
        "region": "德国",
        "type": "电影",
        "genre": "剧情、历史、惊悚",
        "tags": [
            "二战",
            "刺杀行动",
            "人性解剖",
            "剧情",
            "历史",
            "惊悚"
        ],
        "line": "一个被纳粹洗脑的狂热少年,奉命刺杀被认为“疯了”的希特勒,却在任务中逐步觉醒。",
        "cover": "./29.jpg",
        "url": "./videos/video-1529.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "滑稽夫人",
        "year": "2009",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/喜剧",
        "tags": [
            "一战",
            "女性",
            "黑色幽默",
            "戏剧",
            "剧情",
            "喜剧"
        ],
        "line": "一战期间,一位贵族夫人为了让前线士兵振作,组建了一支由脱衣舞娘组成的“慰问团”。",
        "cover": "./30.jpg",
        "url": "./videos/video-1530.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "我的正妹教练",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧运动",
        "tags": [
            "减肥",
            "健身",
            "网红",
            "逆袭",
            "喜剧运动"
        ],
        "line": "300斤宅男为追网红教练减肥,练到最后却发现她是个AI。",
        "cover": "./31.jpg",
        "url": "./videos/video-1531.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "神探勇闯毒龙潭",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作、犯罪、悬疑",
        "tags": [
            "警匪",
            "卧底",
            "枪战",
            "江湖",
            "硬汉",
            "动作"
        ],
        "line": "为了摧毁金三角最大的毒品加工厂,警探只身潜入以“毒龙”为图腾的深山魔窟。",
        "cover": "./32.jpg",
        "url": "./videos/video-1532.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "女高汉子",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集/短片",
        "genre": "喜剧/校园/青春",
        "tags": [
            "女汉子",
            "女子高中",
            "反差萌",
            "喜剧",
            "校园",
            "青春"
        ],
        "line": "全市最野的女子高中篮球队,为了不被解散,必须拿下省级联赛冠军。",
        "cover": "./33.jpg",
        "url": "./videos/video-1533.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "我的日记",
        "year": "2024",
        "region": "日本",
        "type": "电视剧",
        "genre": "悬疑,青春",
        "tags": [
            "日记本",
            "时间循环",
            "记忆篡改",
            "悬疑",
            "青春"
        ],
        "line": "男主通过日记回到昨天救人,却发现日记里的字迹根本不是自己的。",
        "cover": "./34.jpg",
        "url": "./videos/video-1534.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "青春流水之校园往事",
        "year": "2024",
        "region": "中国",
        "type": "剧集",
        "genre": "剧情/喜剧/怀旧",
        "tags": [
            "90年代",
            "校园",
            "成长",
            "群像",
            "剧情",
            "喜剧"
        ],
        "line": "1998年,县城一中文科班的差生们成立了一支“干啥啥不行”的互助小组,结果干成了大事。",
        "cover": "./35.jpg",
        "url": "./videos/video-1535.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "神医喜来乐",
        "year": "2003",
        "region": "中国内地",
        "type": "电视剧",
        "genre": "古装,剧情,喜剧",
        "tags": [
            "民间神医",
            "清末",
            "中医",
            "智慧",
            "古装",
            "剧情"
        ],
        "line": "沧州民间郎中喜来乐,用土方子治好了王妃的疑难杂症,却因此卷入了宫廷斗争。",
        "cover": "./36.jpg",
        "url": "./videos/video-1536.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "打铜锣、补锅1965",
        "year": "1965",
        "region": "中国大陆",
        "type": "戏曲电影",
        "genre": "戏曲/喜剧",
        "tags": [
            "花鼓戏",
            "集体主义",
            "农村",
            "劝诫",
            "戏曲",
            "喜剧"
        ],
        "line": "精明自私的生产队社员凌桂香,怎么也没想到,自己不仅被敲锣打鼓地“教育”了,连补锅匠人也给她下了套。",
        "cover": "./37.jpg",
        "url": "./videos/video-1537.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "随波逐流",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚、犯罪",
        "tags": [
            "诈骗",
            "黑吃黑",
            "公路",
            "身份互换",
            "惊悚",
            "犯罪"
        ],
        "line": "一个小骗子偷了假钞,却引来一群真疯子追杀。",
        "cover": "./38.jpg",
        "url": "./videos/video-1538.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "房子",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "蜗居",
            "亲情",
            "现实",
            "挤迫",
            "剧情",
            "家庭"
        ],
        "line": "一家五口住在不到四十平的公屋里,女儿偷偷把客厅柜子改成了自己的“墙壁房间”,从此柜子每天晚上长出新的墙壁。",
        "cover": "./39.jpg",
        "url": "./videos/video-1539.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "铁证悬案第五季",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑,犯罪,剧情",
        "tags": [
            "凶杀案",
            "陈年旧案",
            "档案室",
            "女性侦探",
            "悬疑",
            "犯罪"
        ],
        "line": "费城警局悬案组的女警探,带领团队重启第五批尘封档案,每一声档案袋的开启,都是逝者在另一个世界的呐喊。",
        "cover": "./40.jpg",
        "url": "./videos/video-1540.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "七巨人",
        "year": "2025",
        "region": "美国/加拿大",
        "type": "电影",
        "genre": "科幻/悬疑/灾难",
        "tags": [
            "巨型生物",
            "生态恐怖",
            "考古发现",
            "全球危机",
            "沉默入侵",
            "科幻"
        ],
        "line": "全球七座城市同时出现七座沉睡的千米高巨人石像,而他们正在缓慢地调转头部。",
        "cover": "./41.jpg",
        "url": "./videos/video-1541.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "所有事情都会好起来!",
        "year": "2024",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情/生活",
        "tags": [
            "治愈",
            "中年危机",
            "父女关系",
            "意大利风情",
            "乐观主义",
            "剧情"
        ],
        "line": "破产中年男人带着女儿穿越意大利,用一系列失败教会她如何接受不完美。",
        "cover": "./42.jpg",
        "url": "./videos/video-1542.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "魔术师",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "悬疑,剧情,犯罪",
        "tags": [
            "近景魔术",
            "欺诈师",
            "记忆操控",
            "推理",
            "悬疑",
            "剧情"
        ],
        "line": "一名以“心灵魔术”著称的欺诈师,受雇从保险柜里偷回一份文件,但他发现目标的记忆本身就像被施过魔术一样。",
        "cover": "./43.jpg",
        "url": "./videos/video-1543.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "植物学家",
        "year": "2020",
        "region": "英国/德国",
        "type": "电影",
        "genre": "剧情/惊悚/科幻",
        "tags": [
            "基因编辑",
            "丛林密室",
            "道德边界",
            "剧情",
            "惊悚",
            "科幻"
        ],
        "line": "亚马逊失踪的植物学家被找到时,他的皮肤下长出了会唱歌的藤蔓,而他拒绝离开。",
        "cover": "./44.jpg",
        "url": "./videos/video-1544.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "太阳星辰国语",
        "year": "2023",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情,科幻,悬疑",
        "tags": [
            "时空错位",
            "宿命感",
            "国语配音版",
            "催泪",
            "爱情",
            "科幻"
        ],
        "line": "天文学女博士收到来自十年前的求救短信,发信人是她在星际灾难中失踪的恋人。",
        "cover": "./45.jpg",
        "url": "./videos/video-1545.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "寂寞孤心",
        "year": "2023",
        "region": "中国",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "城市孤独",
            "双向奔赴",
            "治愈",
            "爱情",
            "剧情"
        ],
        "line": "两个用App匹配“孤独值”的陌生人,在虚拟关系里越陷越深,却发现对方根本不存在。",
        "cover": "./46.jpg",
        "url": "./videos/video-1546.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "摩登原始人第四季",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧/动画",
        "tags": [
            "石器时代",
            "职场",
            "家庭",
            "恶搞",
            "单元剧",
            "喜剧"
        ],
        "line": "第四季中,弗林特斯通一家遇到来自“铁器时代”的移民,原始社会第一次出现了“内卷”。",
        "cover": "./47.jpg",
        "url": "./videos/video-1547.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "审判者1",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "私刑正义",
            "复仇",
            "反英雄",
            "动作",
            "犯罪"
        ],
        "line": "当法律放过杀妻真凶,高级督察戴上面具化身“审判者”,在地下法庭执行私刑。",
        "cover": "./48.jpg",
        "url": "./videos/video-1548.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "无敌拳王",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作,传记,运动",
        "tags": [
            "拳击",
            "励志",
            "真实故事",
            "逆袭",
            "动作",
            "传记"
        ],
        "line": "天生没有左手的男孩成为职业拳王,他用独臂打出了世界上最重的左勾拳。",
        "cover": "./49.jpg",
        "url": "./videos/video-1549.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "条条大道通罗马",
        "year": "2024",
        "region": "意大利",
        "type": "电影",
        "genre": "公路喜剧",
        "tags": [
            "老年",
            "青春",
            "摩托旅行",
            "代际",
            "治愈",
            "公路喜剧"
        ],
        "line": "一个得了绝症的八十岁摇滚老炮,偷了孙子的电动滑板车,非要自己去罗马死在许愿池里。",
        "cover": "./50.jpg",
        "url": "./videos/video-1550.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "无限春光27",
        "year": "2017",
        "region": "新加坡",
        "type": "电影",
        "genre": "剧情,情色,历史",
        "tags": [
            "酒店房间",
            "年代跨越多段式",
            "风情",
            "人生",
            "剧情",
            "情色"
        ],
        "line": "新加坡某酒店27号房,从1940年到2017年,见证了十二段春宵与孤独。",
        "cover": "./51.jpg",
        "url": "./videos/video-1551.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "尖叫周",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/悬疑/青春",
        "tags": [
            "毕业旅行",
            "面具杀手",
            "暴风雪山庄",
            "连环杀人",
            "恐怖",
            "悬疑"
        ],
        "line": "高中毕业旅行变成死亡游戏,一周内每天死一人,杀手就在他们之中。",
        "cover": "./52.jpg",
        "url": "./videos/video-1552.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "达格雷街风情",
        "year": "1976",
        "region": "法国",
        "type": "电影",
        "genre": "纪录片/喜剧",
        "tags": [
            "新浪潮",
            "街景",
            "市井生活",
            "瓦尔达",
            "观察",
            "纪录片"
        ],
        "line": "著名导演瓦尔达将镜头对准自家门口的达格雷街,记录下那些平凡又动人的小人物。",
        "cover": "./53.jpg",
        "url": "./videos/video-1553.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "蔷薇风暴",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/商战/女性",
        "tags": [
            "金融围猎",
            "女性群像",
            "资本博弈",
            "剧情",
            "商战",
            "女性"
        ],
        "line": "一家老牌证券公司突然被做空,三位女高管在三天内用各自的方式试图挽救,却发现做空者是自己人。",
        "cover": "./54.jpg",
        "url": "./videos/video-1554.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "欺诈猎人",
        "year": "2006",
        "region": "日本",
        "type": "电视剧",
        "genre": "犯罪/悬疑",
        "tags": [
            "诈骗",
            "以恶制恶",
            "反英雄",
            "智商博弈",
            "改编漫画",
            "犯罪"
        ],
        "line": "因父亲被骗家破人亡的黑鹭,专门猎杀诈骗师,直到他遇见了誓要逮捕他的热血女律师。",
        "cover": "./55.jpg",
        "url": "./videos/video-1555.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "小两口",
        "year": "2013",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧,爱情,家庭",
        "tags": [
            "婚姻",
            "现实",
            "成长",
            "轻松",
            "喜剧",
            "爱情"
        ],
        "line": "一对90后小夫妻闪婚后,开始了与双方四位奇葩父母同住一个屋檐下的“打仗式”生活。",
        "cover": "./56.jpg",
        "url": "./videos/video-1556.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "超人前传第五季",
        "year": "2005",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻/冒险",
        "tags": [
            "超级英雄",
            "青春成长",
            "氪星",
            "宿命",
            "科幻",
            "冒险"
        ],
        "line": "第五季,克拉克终于穿上了红蓝战衣,但他发现最大的敌人不是莱克斯·卢瑟,而是自己体内失控的氪星能量。",
        "cover": "./57.jpg",
        "url": "./videos/video-1557.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "范丹戈",
        "year": "2018",
        "region": "西班牙",
        "type": "电影",
        "genre": "歌舞,剧情,同性",
        "tags": [
            "弗拉明戈",
            "三角恋",
            "传统与现代",
            "禁忌之爱",
            "舞台",
            "歌舞"
        ],
        "line": "顶级弗拉明戈男舞者爱上自己的徒弟,而徒弟的未婚妻是他失散多年的妹妹。",
        "cover": "./58.jpg",
        "url": "./videos/video-1558.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "貌合神离",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑/家庭/心理",
        "tags": [
            "婚姻惊悚",
            "双面人生",
            "密室推理",
            "全员恶人",
            "悬疑",
            "家庭"
        ],
        "line": "一对结婚十年的模范夫妻,某天丈夫在家中被杀,妻子报警后,所有人都说是她杀的,包括她的记忆。",
        "cover": "./59.jpg",
        "url": "./videos/video-1559.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "敲敲门",
        "year": "2015",
        "region": "美国/智利",
        "type": "电影",
        "genre": "惊悚/恐怖",
        "tags": [
            "密室",
            "两女一男",
            "反转",
            "惩罚",
            "惊悚",
            "恐怖"
        ],
        "line": "一个雨夜,两名迷路的年轻女子敲开了建筑师独居豪宅的门,借电话、借厕所、借洗澡,最后借走了他的人生。",
        "cover": "./60.jpg",
        "url": "./videos/video-1560.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "罗西与莫妮卡之骊靬情",
        "year": "2026",
        "region": "意大利/中国大陆",
        "type": "电影",
        "genre": "爱情/剧情/历史",
        "tags": [
            "丝绸之路",
            "罗马军团",
            "跨国恋",
            "考古",
            "爱情",
            "剧情"
        ],
        "line": "意大利考古学家的女儿在甘肃骊靬村,爱上了一个自称罗马军团后裔的当地牧羊人,并发现了古城消失的秘密。",
        "cover": "./61.jpg",
        "url": "./videos/video-1561.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "云的耳语",
        "year": "2022",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情/奇幻",
        "tags": [
            "听力",
            "秘密",
            "都市",
            "爱情",
            "奇幻"
        ],
        "line": "能听见云朵说话的孤独女孩,与失去声音的男舞者,在都市上空共舞。",
        "cover": "./62.jpg",
        "url": "./videos/video-1562.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "勇破雷霆岛",
        "year": "1989",
        "region": "香港",
        "type": "电影",
        "genre": "动作/冒险",
        "tags": [
            "功夫",
            "海岛",
            "寻宝",
            "兄弟情",
            "动作",
            "冒险"
        ],
        "line": "退役雇佣兵阿龙接到前女友求救信号,登上雷霆岛才发现那里关着一群被用来做人体实验的退伍老兵。",
        "cover": "./63.jpg",
        "url": "./videos/video-1563.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "咒怨:黑色少女",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖",
        "tags": [
            "日式心理恐怖",
            "女鬼新篇",
            "诅咒传承",
            "恐怖"
        ],
        "line": "伽椰子死后第20年,一名患有失语症的黑衣少女入住那栋凶宅,她能“听见”咒怨的声音。",
        "cover": "./64.jpg",
        "url": "./videos/video-1564.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "魔法少女伊莉雅第一季",
        "year": "2013",
        "region": "日本",
        "type": "动画剧集",
        "genre": "魔法少女,奇幻,动作",
        "tags": [
            "伊莉雅",
            "Fate衍生",
            "萌系",
            "战斗",
            "卡牌收集",
            "魔法少女"
        ],
        "line": "普通小学生伊莉雅被强制签订了魔法少女契约,任务是回收散落在冬木市的七张职阶卡。",
        "cover": "./65.jpg",
        "url": "./videos/video-1565.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "十三格格新传",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装,喜剧",
        "tags": [
            "晚清职场",
            "女官成长",
            "宫斗解构",
            "古装",
            "喜剧"
        ],
        "line": "清末改革期间,十三格格在宫中开办中国第一个“女子政务实习班”,学生是六个连大字不识的宫女。",
        "cover": "./66.jpg",
        "url": "./videos/video-1566.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "光荣战役",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,战争,历史",
        "tags": [
            "内战",
            "黑人士兵",
            "牺牲",
            "真实事件改编",
            "剧情",
            "战争"
        ],
        "line": "一支由曾被歧视的黑人组成的第54步兵团,在南北战争中用血肉之躯撕开了尊严的缺口。",
        "cover": "./67.jpg",
        "url": "./videos/video-1567.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "人潮汹涌",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪喜剧",
        "tags": [
            "身份互换",
            "底层小人物",
            "荒诞幽默",
            "都市压力",
            "犯罪喜剧"
        ],
        "line": "一个穷途末路的龙套演员与一个冷血职业杀手在澡堂意外摔倒后交换了人生。",
        "cover": "./68.jpg",
        "url": "./videos/video-1568.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "元宇宙·回到1995",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻,剧情,青春",
        "tags": [
            "VR",
            "怀旧",
            "游戏世界",
            "父子情",
            "科幻",
            "剧情"
        ],
        "line": "在元宇宙游戏中,厌世的少年回到了父母谈恋爱的1995年,他必须促成他们的分手,否则自己就不会出生。",
        "cover": "./69.jpg",
        "url": "./videos/video-1569.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "沃尔特",
        "year": "2015",
        "region": "美国",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "童年",
            "父权",
            "成长",
            "家庭矛盾",
            "和解",
            "剧情"
        ],
        "line": "为了给患病父亲凑钱治病,内向的少年沃尔特不得不求助他那位坐过牢、充满暴力倾向的亲哥哥。",
        "cover": "./70.jpg",
        "url": "./videos/video-1570.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "东京暮色",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,家庭",
        "tags": [
            "亲情",
            "和解",
            "都市",
            "失独",
            "剧情",
            "家庭"
        ],
        "line": "女儿自杀三年后,离异多年的老夫妻因领取骨灰在东京重逢,被迫开始一段尴尬的共处时光。",
        "cover": "./71.jpg",
        "url": "./videos/video-1571.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "少林三十六房",
        "year": "1978",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作武侠",
        "tags": [
            "武学修炼",
            "国仇家恨",
            "反清复明",
            "冷兵器",
            "动作武侠"
        ],
        "line": "书生全家被清兵所杀,遁入少林苦熬三十五房绝技,只为最后一房的心魔。",
        "cover": "./72.jpg",
        "url": "./videos/video-1572.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "阿马尔菲:女神的报酬",
        "year": "2024",
        "region": "意大利、日本",
        "type": "电影",
        "genre": "悬疑、犯罪、剧情",
        "tags": [
            "异国风情",
            "外交风云",
            "绑架",
            "寻宝",
            "悬疑",
            "犯罪"
        ],
        "line": "一位驻意大利的日本外交官在调查同胞失踪案时,发现线索指向一幅价值连城的失踪名画与一个古老家族诅咒。",
        "cover": "./73.jpg",
        "url": "./videos/video-1573.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "奇迹之城",
        "year": "2025",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情,奇幻",
        "tags": [
            "城市",
            "寓言",
            "温情",
            "人生",
            "剧情",
            "奇幻"
        ],
        "line": "一座只有夜晚没有白天的城市,所有流浪者都在寻找一个叫做“日出”的传说。",
        "cover": "./74.jpg",
        "url": "./videos/video-1574.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "施公奇案2粤语",
        "year": "2010",
        "region": "中国香港",
        "type": "剧集",
        "genre": "古装,悬疑,喜剧",
        "tags": [
            "断案",
            "粤语",
            "神仙",
            "续集",
            "古装",
            "悬疑"
        ],
        "line": "施世纶获仙人托梦赐予新神器“乾坤笔”,专破涉及皇室秘闻的诡异奇案。",
        "cover": "./75.jpg",
        "url": "./videos/video-1575.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "东四十条",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "地铁",
            "都市传说",
            "平行空间",
            "失踪案",
            "剧情",
            "悬疑"
        ],
        "line": "北京地铁2号线的东四十条站,每晚最后一班车会多停一站,开往一个不存在的站台。",
        "cover": "./76.jpg",
        "url": "./videos/video-1576.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "你和我的时光",
        "year": "2025",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情,奇幻",
        "tags": [
            "穿越",
            "磁带",
            "怀旧",
            "校园",
            "爱情",
            "奇幻"
        ],
        "line": "女儿在整理母亲遗物时,发现一盘空白磁带,播放后她竟穿越回1995年,成了母亲的高中同桌。",
        "cover": "./77.jpg",
        "url": "./videos/video-1577.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "蓝色档案",
        "year": "2026",
        "region": "美国/德国",
        "type": "电影",
        "genre": "科幻,惊悚,动作",
        "tags": [
            "近未来",
            "记忆删除",
            "阴谋论",
            "硬科幻",
            "科幻",
            "惊悚"
        ],
        "line": "一名“记忆清洁工”发现,自己每天删除的“病患记忆”其实是一个足以颠覆政府的惊天秘密。",
        "cover": "./78.jpg",
        "url": "./videos/video-1578.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "我想我爱她",
        "year": "2024",
        "region": "泰国",
        "type": "电影",
        "genre": "爱情,剧情,LGBT",
        "tags": [
            "同性",
            "暗恋",
            "闺蜜",
            "毕业季",
            "青春",
            "爱情"
        ],
        "line": "女孩一直暗恋自己的闺蜜,毕业前她决定表白,却发现闺蜜正在准备向另一个女孩求婚。",
        "cover": "./79.jpg",
        "url": "./videos/video-1579.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "想飞2014",
        "year": "2014",
        "region": "台湾",
        "type": "电影",
        "genre": "剧情/运动",
        "tags": [
            "励志",
            "滑翔翼",
            "逆袭",
            "青春",
            "剧情",
            "运动"
        ],
        "line": "一个被生活压垮的底层青年,决定靠一架破旧滑翔翼飞出自己的人生。",
        "cover": "./80.jpg",
        "url": "./videos/video-1580.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "外太空杀人小丑",
        "year": "1988",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,喜剧",
        "tags": [
            "B级片",
            "小丑",
            "外星人",
            "血浆",
            "恐怖",
            "喜剧"
        ],
        "line": "外星小丑从天而降,用气球抓小孩,用棉花糖裹人,镇上最后的希望是个怕小丑的宅男。",
        "cover": "./81.jpg",
        "url": "./videos/video-1581.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "地下陪审团",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪,悬疑,剧情",
        "tags": [
            "私刑正义",
            "密室",
            "罗生门",
            "犯罪",
            "悬疑",
            "剧情"
        ],
        "line": "12个互不相识的人被关进地下密室,每人面前都有一份案卷,他们要决定一个已被定罪的杀人犯是否有罪,投票结果决定他们自己的生死。",
        "cover": "./82.jpg",
        "url": "./videos/video-1582.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "大白鲨",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/灾难",
        "tags": [
            "鲨鱼",
            "基因突变",
            "深海",
            "惊悚",
            "生态",
            "恐怖"
        ],
        "line": "一条因污染而基因变异的巨型大白鲨,在旅游旺季将三亚湾变成了血色地狱。",
        "cover": "./83.jpg",
        "url": "./videos/video-1583.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "这!就是街舞第六季",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀",
        "tags": [
            "街舞",
            "竞技",
            "潮流",
            "真人秀"
        ],
        "line": "一档街舞竞技节目,本季引入“时空斗舞”模式,不同年代的舞者将通过全息投影与年轻的自己同台竞技。",
        "cover": "./84.jpg",
        "url": "./videos/video-1584.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "倒数第二个男朋友",
        "year": "2014",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,爱情",
        "tags": [
            "诅咒",
            "恋爱",
            "反套路",
            "治愈",
            "喜剧",
            "爱情"
        ],
        "line": "男孩被诅咒“每个女友都会在遇到真命天子前甩掉他”,他成了全城最抢手的“试金石男友”。",
        "cover": "./85.jpg",
        "url": "./videos/video-1585.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "摇滚总动员",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "音乐、喜剧、励志",
        "tags": [
            "乐队",
            "中年危机",
            "摇滚复活",
            "音乐",
            "喜剧",
            "励志"
        ],
        "line": "五个中年大叔为凑钱给孩子交学费,重组当年解散的摇滚乐队,参加选秀去赢奖金。",
        "cover": "./86.jpg",
        "url": "./videos/video-1586.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "恐怖医生",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "恐怖、医疗、犯罪",
        "tags": [
            "怪病诊所",
            "人体改造",
            "病态美学",
            "反英雄",
            "恐怖",
            "医疗"
        ],
        "line": "一位被吊销执照的天才外科医生在地下诊所行医,专门为亡命之徒移除犯罪证据或“改造”身体,但手术台上没有活人能完整离开。",
        "cover": "./87.jpg",
        "url": "./videos/video-1587.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "星梦奇缘",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "都市,励志",
        "tags": [
            "娱乐圈",
            "经纪人",
            "造星",
            "梦想",
            "都市",
            "励志"
        ],
        "line": "过气经纪人用大数据算法,将一个素人保安打造成了顶流巨星。",
        "cover": "./88.jpg",
        "url": "./videos/video-1588.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "荒野浪子",
        "year": "1973",
        "region": "美国",
        "type": "电影",
        "genre": "西部剧情",
        "tags": [
            "浪子",
            "救赎",
            "孤独",
            "荒野",
            "西部剧情"
        ],
        "line": "一个厌倦杀戮的枪手骑马穿越荒漠,试图寻找一个没有人认识他的地方,却一路遇见了自己的各种过去。",
        "cover": "./89.jpg",
        "url": "./videos/video-1589.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "美国的早晨",
        "year": "2026",
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情,历史,家庭",
        "tags": [
            "家族史诗",
            "二战",
            "种族问题",
            "中西部长篇",
            "剧情",
            "历史"
        ],
        "line": "从1945年日本投降到1969年登月成功,一个堪萨斯州普通白人家庭通过二十四年间的七个“早餐时刻”,见证了美国的黄金年代与撕裂伤疤。",
        "cover": "./90.jpg",
        "url": "./videos/video-1590.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "憨姑爷粤语",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,家庭,爱情",
        "tags": [
            "市井生活",
            "女婿上门",
            "粤语俚语",
            "扮猪吃老虎",
            "喜剧",
            "家庭"
        ],
        "line": "烧腊店傻小子被逼扮成富家子去酒楼相亲,不料女方竟是香港首富的千金,而他手里的烧腊刀,其实是半张藏宝图。",
        "cover": "./91.jpg",
        "url": "./videos/video-1591.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "微妙爱情",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "爱情/喜剧",
        "tags": [
            "法式浪漫",
            "办公室恋情",
            "温柔治愈",
            "熟男熟女",
            "爱情",
            "喜剧"
        ],
        "line": "一位曾因丧夫而心如死水的女强人,在遇到一位笨拙憨厚的北欧同事后,重新学会了如何去爱。",
        "cover": "./92.jpg",
        "url": "./videos/video-1592.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "逗留的爱情",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情,奇幻",
        "tags": [
            "时间循环",
            "咖啡馆",
            "一夜情",
            "治愈",
            "爱情",
            "奇幻"
        ],
        "line": "男人在一家凌晨打烊的咖啡馆里反复度过同一个夜晚,只为留住那个只出现一次的女人。",
        "cover": "./93.jpg",
        "url": "./videos/video-1593.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "激赞网红",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑,惊悚,黑色喜剧",
        "tags": [
            "网红",
            "生存游戏",
            "社交媒体",
            "恶意评论",
            "悬疑",
            "惊悚"
        ],
        "line": "全韩TOP100网红被神秘组织绑架,被迫参加一场“点赞即生、点踩即死”的死亡直播。",
        "cover": "./94.jpg",
        "url": "./videos/video-1594.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "斯宾塞如是说",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "传记,剧情",
        "tags": [
            "哲学侦探",
            "心理分析",
            "英伦",
            "传记",
            "剧情"
        ],
        "line": "一位罹患妄想症的哲学教授坚信自己是一桩谋杀案的唯一目击者,尽管那场谋杀只发生在他的逻辑推导里。",
        "cover": "./95.jpg",
        "url": "./videos/video-1595.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "飞鼠洛基冒险记",
        "year": "2024",
        "region": "美国",
        "type": "动画电影",
        "genre": "动画,冒险,喜剧",
        "tags": [
            "拟人动物",
            "废柴英雄",
            "滑翔战斗",
            "松鼠兄弟",
            "动画",
            "冒险"
        ],
        "line": "一只恐高的飞鼠和一只社恐的土拨鼠,误闯巨型地下“末日种子银行”,被迫拯救人类最后的植物基因库。",
        "cover": "./96.jpg",
        "url": "./videos/video-1596.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "画圣",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,古装",
        "tags": [
            "吴道子",
            "唐宫",
            "名画杀机",
            "美术考古",
            "反转",
            "悬疑"
        ],
        "line": "唐宫秘闻,画圣吴道子奉旨作画,每画一笔,画中仙便活一分,而朝堂上便有一名大臣离奇暴毙。",
        "cover": "./97.jpg",
        "url": "./videos/video-1597.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "我要嫁印侨",
        "year": "2026",
        "region": "印度",
        "type": "剧集",
        "genre": "喜剧,爱情",
        "tags": [
            "跨国婚姻",
            "文化冲突",
            "女性独立",
            "喜剧",
            "爱情"
        ],
        "line": "为逃离包办婚姻,中国女孩远嫁印度,却发现夫家是个“假富豪”。",
        "cover": "./98.jpg",
        "url": "./videos/video-1598.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "善心满载仁爱堂2023",
        "year": "2023",
        "region": "中国香港",
        "type": "综艺/晚会",
        "genre": "公益/歌舞",
        "tags": [
            "慈善",
            "群星",
            "筹款",
            "现场",
            "温情",
            "公益"
        ],
        "line": "香港群星云集仁爱堂,用歌声与欢笑为弱势群体点燃希望之光。",
        "cover": "./99.jpg",
        "url": "./videos/video-1599.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "毒海浮生",
        "year": "2019",
        "region": "墨西哥",
        "type": "电影",
        "genre": "犯罪/剧情",
        "tags": [
            "卧底缉毒",
            "家庭破裂",
            "双面人生",
            "犯罪",
            "剧情"
        ],
        "line": "毒枭头目的心腹实为卧底警察,但当他的亲弟弟也加入贩毒集团时,忠诚开始撕裂。",
        "cover": "./100.jpg",
        "url": "./videos/video-1600.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "暗街花",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪,动作,剧情",
        "tags": [
            "卧底",
            "女性黑帮",
            "复仇",
            "霓虹美学",
            "暴力",
            "犯罪"
        ],
        "line": "女警潜入花街黑帮,却发现自己的生母是幕后教母。",
        "cover": "./101.jpg",
        "url": "./videos/video-1601.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "火山挚恋",
        "year": "2022",
        "region": "法国/瑞士",
        "type": "电影",
        "genre": "纪录片/传记",
        "tags": [
            "自然奇观",
            "科学精神",
            "绝美影像",
            "伉俪情深",
            "纪录片",
            "传记"
        ],
        "line": "走近卡蒂亚与莫里斯·克拉夫特夫妇,记录他们携手追逐全球火山爆发,直至生命终点的炽热爱恋。",
        "cover": "./102.jpg",
        "url": "./videos/video-1602.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "恋上你爱上我",
        "year": "2025",
        "region": "中国/韩国",
        "type": "剧集",
        "genre": "爱情/喜剧/剧情",
        "tags": [
            "偶像",
            "替身",
            "双向暗恋",
            "娱乐圈",
            "轻喜剧",
            "爱情"
        ],
        "line": "一个平凡女孩成为顶流男偶像的替身保镖,却发现对方也在偷偷扮演着她的网恋对象。",
        "cover": "./103.jpg",
        "url": "./videos/video-1603.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "华丽的休假",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,悬疑,黑色电影",
        "tags": [
            "度假",
            "谋杀",
            "骗局",
            "剧情",
            "悬疑",
            "黑色电影"
        ],
        "line": "四对夫妻在豪华海岛度假,却发现这场完美假期,是一场针对他们所有人的精密谋杀。",
        "cover": "./104.jpg",
        "url": "./videos/video-1604.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "幸运得奖者",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "黑色喜剧/悬疑",
        "tags": [
            "彩票",
            "社区",
            "人性",
            "讽刺",
            "密室",
            "黑色喜剧"
        ],
        "line": "一个偏僻小镇的居民集体中了彩票头奖,但领奖规则要求:只能活下来一个人拿走全部奖金。",
        "cover": "./105.jpg",
        "url": "./videos/video-1605.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "利刃出鞘2:玻璃洋葱",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑/犯罪/喜剧",
        "tags": [
            "侦探",
            "续集",
            "富豪",
            "孤岛",
            "反转再反转",
            "悬疑"
        ],
        "line": "科技富豪在私人玻璃岛屿举办派对,一名嘉宾“死亡”后,所有人都成了嫌疑人。",
        "cover": "./106.jpg",
        "url": "./videos/video-1606.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "银行",
        "year": "2023",
        "region": "法国",
        "type": "剧集",
        "genre": "剧情,犯罪,金融",
        "tags": [
            "金融",
            "阴谋",
            "底层逆袭",
            "高智商",
            "剧情",
            "犯罪"
        ],
        "line": "一群被金融体系压垮的底层年轻人,计划抢劫一家银行,但他们的目标不是钱,而是藏在银行地下金库里的“全球债务黑匣子”。",
        "cover": "./107.jpg",
        "url": "./videos/video-1607.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "新罗宾汉",
        "year": "2006",
        "region": "英国",
        "type": "剧集",
        "genre": "动作,冒险",
        "tags": [
            "侠盗",
            "弓箭手",
            "反抗暴政",
            "动作",
            "冒险"
        ],
        "line": "十字军东征归来的罗宾汉发现家乡被暴政压榨,他戴上了兜帽,成为射穿税吏钱袋的第一支箭。",
        "cover": "./108.jpg",
        "url": "./videos/video-1608.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "米兰达第三季",
        "year": "2013",
        "region": "英国",
        "type": "剧集",
        "genre": "喜剧",
        "tags": [
            "英式幽默",
            "搞笑",
            "女汉子",
            "打破第四面墙",
            "喜剧"
        ],
        "line": "两米高的傻大姐继续经营她的玩具店,对着镜头吐槽相亲、老妈和闺蜜的奇葩日常。",
        "cover": "./109.jpg",
        "url": "./videos/video-1609.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "狂暴之旅",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作/犯罪",
        "tags": [
            "公路复仇",
            "硬汉对决",
            "限时营救",
            "动作",
            "犯罪"
        ],
        "line": "退役特种兵为救被绑架的女儿,在72小时内横跨三省,与整个黑市运输网为敌。",
        "cover": "./110.jpg",
        "url": "./videos/video-1610.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "反派 第一季",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情,犯罪,惊悚",
        "tags": [
            "反英雄起源",
            "心理惊悚",
            "道德困境",
            "剧情",
            "犯罪",
            "惊悚"
        ],
        "line": "一个理想主义的律师在经历了司法不公后,成为了城市里最令人闻风丧胆的“惩罚者”,但他的正义还是正义吗?",
        "cover": "./111.jpg",
        "url": "./videos/video-1611.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "7月7日晴",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "爱情、奇幻、催泪",
        "tags": [
            "七夕",
            "时间胶囊",
            "穿越",
            "短信",
            "错过",
            "爱情"
        ],
        "line": "结婚前三天,她收到一封来自十年前的短信:“请在7月7日晴那天,替我去见你。",
        "cover": "./112.jpg",
        "url": "./videos/video-1612.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "狗狗人生",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/冒险",
        "tags": [
            "宠物",
            "公路片",
            "屌丝逆袭",
            "喜剧",
            "冒险"
        ],
        "line": "一事无成的废柴继承了一条会说话的退役警犬,这条狗不仅毒舌,还教他如何追女孩、打黑帮、赢回人生。",
        "cover": "./113.jpg",
        "url": "./videos/video-1613.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "败犬女王",
        "year": "2025",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情,喜剧,职场",
        "tags": [
            "大龄剩女",
            "姐弟恋",
            "杂志社",
            "翻拍",
            "女性成长",
            "爱情"
        ],
        "line": "33岁的杂志社女副总编事业开挂却情场失意,直到一个23岁的打工仔闯入她的生活。",
        "cover": "./114.jpg",
        "url": "./videos/video-1614.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "波士顿人",
        "year": "1984",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,爱情",
        "tags": [
            "亨利·詹姆斯",
            "古典文学",
            "女权",
            "三角恋",
            "保守与叛逆",
            "剧情"
        ],
        "line": "19世纪末的波士顿,一位激进的女权演说家爱上了同性的年轻女孩,却被一位保守的男律师横刀夺爱。",
        "cover": "./115.jpg",
        "url": "./videos/video-1615.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "猫王1979",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "传记/音乐/剧情",
        "tags": [
            "猫王",
            "平行时空",
            "复活",
            "公路片",
            "传记",
            "音乐"
        ],
        "line": "如果猫王没有死在1977年,而是隐居于小镇加油站,两年后他被一个追梦少年认了出来。",
        "cover": "./116.jpg",
        "url": "./videos/video-1616.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "村井之恋动画版",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧/爱情/动画",
        "tags": [
            "乙女向",
            "乡下",
            "反差萌",
            "纯爱",
            "喜剧",
            "爱情"
        ],
        "line": "东京精英女白领被贬到鸟不拉屎的乡村,却发现全村唯一的年轻男人帅得不像真人。",
        "cover": "./117.jpg",
        "url": "./videos/video-1617.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "封神之人鱼传说",
        "year": "2026",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "奇幻、古装、爱情",
        "tags": [
            "封神宇宙",
            "人鱼恋",
            "商周之战",
            "诅咒",
            "奇幻",
            "古装"
        ],
        "line": "姜子牙的封神榜上,漏掉了一条救过少年姬发的鲛人。",
        "cover": "./118.jpg",
        "url": "./videos/video-1618.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "我在翁布里亚的房子",
        "year": "2023",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情,生活,文艺",
        "tags": [
            "托斯卡纳",
            "疗愈",
            "孤独",
            "美食",
            "慢生活",
            "剧情"
        ],
        "line": "一名离婚的美国律师买下意大利乡间破旧石屋,在修复过程中,她修复的其实是自己破碎的心。",
        "cover": "./119.jpg",
        "url": "./videos/video-1619.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "结婚计念日",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "婚姻",
            "时间循环",
            "治愈",
            "爱情",
            "剧情"
        ],
        "line": "一对七年之痒的夫妻在离婚冷静期最后一天,突然被困在“结婚纪念日”的时间循环中,每次重置都会失去一段美好记忆。",
        "cover": "./120.jpg",
        "url": "./videos/video-1620.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "黄金诡事录",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑/惊悚",
        "tags": [
            "民国",
            "奇案",
            "风水",
            "连环杀人",
            "悬疑",
            "惊悚"
        ],
        "line": "1930年代的上海租界,只要触摸到黄金的人都会在七日内离奇惨死,且脸上带着诡异的笑。",
        "cover": "./121.jpg",
        "url": "./videos/video-1621.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "诡计",
        "year": "2024",
        "region": "西班牙",
        "type": "剧集",
        "genre": "悬疑,犯罪",
        "tags": [
            "诈骗",
            "多重反转",
            "女性",
            "高智商",
            "悬疑",
            "犯罪"
        ],
        "line": "一个诈欺师假装患了绝症,骗来三个前男友照顾她,实则是为了找回当年埋藏的比特币。",
        "cover": "./122.jpg",
        "url": "./videos/video-1622.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "我的马拉松",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情/运动",
        "tags": [
            "自闭症",
            "母子",
            "长跑救赎",
            "剧情",
            "运动"
        ],
        "line": "患有自闭症的二十岁青年在母亲逼迫下开始跑马拉松,却发现跑步是他唯一能与世界对话的方式。",
        "cover": "./123.jpg",
        "url": "./videos/video-1623.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "致命的愤怒:饿狼传说",
        "year": "1994",
        "region": "日本",
        "type": "电影",
        "genre": "动作,动画,格斗",
        "tags": [
            "街机改编",
            "南镇",
            "复仇",
            "拳拳到肉",
            "热血",
            "动作"
        ],
        "line": "为了给养父报仇,特瑞·博加德独自闯入罪恶横行的南镇,挑战吉斯·霍华德。",
        "cover": "./124.jpg",
        "url": "./videos/video-1624.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "长辈有交代",
        "year": "2021",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧,家庭",
        "tags": [
            "祖孙",
            "代际冲突",
            "遗产",
            "搞笑",
            "温情",
            "喜剧"
        ],
        "line": "家族族长去世前留下一盒录像带,给每个孙辈布置了一个古怪任务,完成才能分遗产。",
        "cover": "./125.jpg",
        "url": "./videos/video-1625.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "熔岩毒蛛",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/灾难/恐怖",
        "tags": [
            "B级片",
            "火山",
            "蜘蛛",
            "怪兽",
            "血腥",
            "科幻"
        ],
        "line": "冰岛火山喷发出的熔岩里,爬出了成千上万只含有剧毒的远古蜘蛛。",
        "cover": "./126.jpg",
        "url": "./videos/video-1626.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "哈莉·奎茵第五季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "动画,动作,喜剧",
        "tags": [
            "反英雄",
            "DC宇宙",
            "暴力美学",
            "女性向",
            "动画",
            "动作"
        ],
        "line": "彻底摆脱小丑阴影的哈莉,决定在哥谭建立属于自己的犯罪帝国幼儿园。",
        "cover": "./127.jpg",
        "url": "./videos/video-1627.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "怪医杜立德5:百万傻蛋",
        "year": "2020",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,奇幻,家庭",
        "tags": [
            "动物",
            "诈骗",
            "团队合作",
            "荒诞",
            "喜剧",
            "奇幻"
        ],
        "line": "杜立德的动物诊所濒临倒闭,动物们决定集体扮成“百万富翁的转世宠物”来骗钱。",
        "cover": "./128.jpg",
        "url": "./videos/video-1628.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "臆想魔友",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/心理",
        "tags": [
            "童年",
            "假想朋友",
            "恐怖",
            "心理惊悚",
            "儿童",
            "心理"
        ],
        "line": "每个孩子都有一个假想朋友,但当8岁的莉莉的假想朋友开始教她伤害家人时,一切都失控了。",
        "cover": "./129.jpg",
        "url": "./videos/video-1629.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "我想念我自己",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/奇幻",
        "tags": [
            "克隆",
            "身份",
            "孤独",
            "伦理",
            "剧情",
            "奇幻"
        ],
        "line": "一位身患绝症的女科学家克隆了自己,但克隆体拥有完全独立的意识,她成了自己家中最熟悉的陌生人。",
        "cover": "./130.jpg",
        "url": "./videos/video-1630.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "冰岛暖男的春天",
        "year": "2024",
        "region": "冰岛",
        "type": "电影",
        "genre": "爱情/喜剧/文艺",
        "tags": [
            "北欧冷幽默",
            "地热工程师",
            "跨国恋情",
            "治愈",
            "爱情",
            "喜剧"
        ],
        "line": "冰岛地热站的单身工程师,因为一次误拨的电话,与西班牙女教师谈起了跨越3000公里、全靠传真机传递情书的恋爱。",
        "cover": "./131.jpg",
        "url": "./videos/video-1631.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "暂停",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "科幻/悬疑/爱情",
        "tags": [
            "时间暂停",
            "都市男女",
            "超能力",
            "命运",
            "平行时空",
            "科幻"
        ],
        "line": "一个能暂停全世界却无法暂停自己生命的男人,遇到了一个永远无法被暂停的女人。",
        "cover": "./132.jpg",
        "url": "./videos/video-1632.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "阿索卡",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻,动作",
        "tags": [
            "星球大战",
            "武士",
            "原力",
            "师徒",
            "科幻",
            "动作"
        ],
        "line": "前绝地武士阿索卡·塔诺追捕一名拥有原力的黑暗面逃亡者,却揭开了一个威胁银河系的阴谋。",
        "cover": "./133.jpg",
        "url": "./videos/video-1633.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "勇敢的世界",
        "year": "2019",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻,冒险",
        "tags": [
            "虚拟现实",
            "末日生存",
            "青少年",
            "团队作战",
            "科幻",
            "冒险"
        ],
        "line": "全球停电后,七名少年被困在全沉浸式VR游戏中,死亡即真实死亡,唯一的出口是通关。",
        "cover": "./134.jpg",
        "url": "./videos/video-1634.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "身在其中",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "恐怖,惊悚,心理",
        "tags": [
            "侵入",
            "孕妇",
            "第一视角",
            "窒息感",
            "恐怖",
            "惊悚"
        ],
        "line": "一名临产孕妇被困在自家公寓,门外是三个想取她腹中胎儿的神秘人,而她连报警电话都拨不出去。",
        "cover": "./135.jpg",
        "url": "./videos/video-1635.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "浪漫",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "爱情/剧情/文艺",
        "tags": [
            "巴黎",
            "邂逅",
            "中年之爱",
            "存在主义",
            "话痨电影",
            "爱情"
        ],
        "line": "巴黎地铁里,一对离异的中年男女在十年后偶遇,他们用一整夜走遍巴黎,谈论爱情、失败和未寄出的信。",
        "cover": "./136.jpg",
        "url": "./videos/video-1636.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "温馨赤子情",
        "year": "1988",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "怀旧",
            "父子情",
            "底层生活",
            "温情",
            "香港电影",
            "剧情"
        ],
        "line": "深水埗的旧楼里,一对贫困父子为了不让对方担心,各自偷偷打三份工,却把赚来的钱说成是中奖所得。",
        "cover": "./137.jpg",
        "url": "./videos/video-1637.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "战争游戏:死亡密码",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "科幻,惊悚,动作",
        "tags": [
            "虚拟现实",
            "AI",
            "密码",
            "密室逃脱",
            "高概念",
            "科幻"
        ],
        "line": "六名玩家受邀测试全沉浸式战争游戏,却发现游戏里的死亡会引发现实核爆。",
        "cover": "./138.jpg",
        "url": "./videos/video-1638.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "重圆镜",
        "year": "2026",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,悬疑,奇幻",
        "tags": [
            "家庭创伤",
            "破碎记忆",
            "时间重置",
            "母女关系",
            "剧情",
            "悬疑"
        ],
        "line": "一面据说能粘合任何裂缝的古镜,让丧女的母亲回到了女儿自杀前的那一天,然而她发现无论怎么修补,镜子都会碎。",
        "cover": "./139.jpg",
        "url": "./videos/video-1639.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "改正归邪",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/动作",
        "tags": [
            "黑帮",
            "反转",
            "身份错位",
            "搞笑",
            "暴力美学",
            "喜剧"
        ],
        "line": "一心金盆洗手的黑帮二把手,发现新任老大竟是卧底警察。",
        "cover": "./140.jpg",
        "url": "./videos/video-1640.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "没有过不去的年",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "春运",
            "亲情和解",
            "返乡",
            "年夜饭",
            "剧情",
            "家庭"
        ],
        "line": "一个在北京打拼失败的落魄编剧,为了躲避债主,被迫搭上黑车返乡过年。",
        "cover": "./141.jpg",
        "url": "./videos/video-1641.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "坦帕地狱",
        "year": "2024",
        "region": "美国",
        "type": "电视剧",
        "genre": "犯罪,剧情",
        "tags": [
            "真实事件改编",
            "黑帮",
            "腐败",
            "阳光地带",
            "犯罪",
            "剧情"
        ],
        "line": "在阳光明媚的佛罗里达坦帕湾,一名本地警探发现整个城市的地下毒品网络,竟由市议会操纵。",
        "cover": "./142.jpg",
        "url": "./videos/video-1642.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "测量员",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/冒险",
        "tags": [
            "自然",
            "孤独",
            "职业剧",
            "边界",
            "诗意",
            "剧情"
        ],
        "line": "一名地图测量员在划定国境线时,发现地图上不存在的村庄,村民仿佛生活在百年前。",
        "cover": "./143.jpg",
        "url": "./videos/video-1643.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "99分女朋友",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "喜剧",
        "tags": [
            "强迫症",
            "甜宠",
            "反差萌",
            "都市职场",
            "喜剧"
        ],
        "line": "她是一丝不苟的强迫症审计师,他是不拘小节的网文写手,两人合租后,他要给爱情打99分——扣1分怕她骄傲。",
        "cover": "./144.jpg",
        "url": "./videos/video-1644.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "布谷鸟叫迟了",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,悬疑,犯罪",
        "tags": [
            "乡村",
            "失踪",
            "留守儿童",
            "刑警",
            "迟来的正义",
            "剧情"
        ],
        "line": "一个被拐卖20年后成为刑警的女子,回到故乡调查一桩连环失踪案,发现所有线索都指向了自己的养父。",
        "cover": "./145.jpg",
        "url": "./videos/video-1645.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "赛文奥特曼",
        "year": "2027",
        "region": "日本",
        "type": "电影",
        "genre": "科幻/动作/剧情",
        "tags": [
            "奥特曼重启",
            "反战",
            "人性阴暗",
            "科幻",
            "动作",
            "剧情"
        ],
        "line": "赛文奥特曼再度来到地球,但这一次人类不再欢迎他,因为他的存在引来了更强大的宇宙怪兽。",
        "cover": "./146.jpg",
        "url": "./videos/video-1646.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "小梦想开花的时候",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,儿童,励志",
        "tags": [
            "留守儿童",
            "支教老师",
            "合唱团",
            "乡土中国",
            "剧情",
            "儿童"
        ],
        "line": "一个五音不全的山村女孩,为了留住支教老师,发誓要组建一支合唱团。",
        "cover": "./147.jpg",
        "url": "./videos/video-1647.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "蔚蓝深海",
        "year": "2011",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,爱情,文艺",
        "tags": [
            "婚外情",
            "抑郁",
            "海伦·麦克洛瑞",
            "心理",
            "经典改编",
            "剧情"
        ],
        "line": "法官妻子的婚外情无疾而终,心碎的她站在公寓窗前,面对的是外面深不见底的蔚蓝深海和内心的空虚。",
        "cover": "./148.jpg",
        "url": "./videos/video-1648.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "侠圣",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作喜剧",
        "tags": [
            "都市奇侠",
            "风水玄学",
            "关之琳",
            "动作喜剧"
        ],
        "line": "顶尖的风水术士被迫保护一块能引发全球金融海啸的“五行陨石”。",
        "cover": "./149.jpg",
        "url": "./videos/video-1649.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "老橡树酒馆",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "温情",
            "社区",
            "救赎",
            "移民",
            "剧情"
        ],
        "line": "一家濒临倒闭的传统酒馆,一群试图拯救它的古怪常客,以及一个足以撕裂一切的秘密。",
        "cover": "./150.jpg",
        "url": "./videos/video-1650.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "祸日光景",
        "year": "2021",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/家庭/灾难",
        "tags": [
            "末日预兆",
            "家庭和解",
            "黑色幽默",
            "剧情",
            "家庭",
            "灾难"
        ],
        "line": "太阳连续七天没有落山,一家人躲在屋子里等待世界末日。",
        "cover": "./1.jpg",
        "url": "./videos/video-1651.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "参孙和达丽拉",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "历史,爱情,剧情",
        "tags": [
            "圣经故事",
            "史诗",
            "背叛",
            "历史",
            "爱情",
            "剧情"
        ],
        "line": "世界上最强壮的男人,却倒在了他最爱女人的膝盖上。",
        "cover": "./2.jpg",
        "url": "./videos/video-1652.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "为结婚疯狂",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "喜剧,爱情,生活",
        "tags": [
            "结婚焦虑",
            "剩男剩女",
            "群像",
            "脱单",
            "喜剧",
            "爱情"
        ],
        "line": "四名大龄单身男女加入一个“三个月必结婚”的极端婚恋培训班,却发现教官自己也没结过婚。",
        "cover": "./3.jpg",
        "url": "./videos/video-1653.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "边境无间",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "刑侦/缉毒",
        "tags": [
            "卧底",
            "边境",
            "枪战",
            "兄弟情",
            "刑侦",
            "缉毒"
        ],
        "line": "边防武警和卧底多年的哥哥,在边境线上演了一场正邪难辨的生死追捕。",
        "cover": "./4.jpg",
        "url": "./videos/video-1654.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "恋恋洗衣店",
        "year": "2022",
        "region": "日本",
        "type": "剧集",
        "genre": "爱情、同性、治愈",
        "tags": [
            "年下",
            "日常",
            "甜品店",
            "夏日",
            "爱情",
            "同性"
        ],
        "line": "一个逃回老家的上班族,在自家洗衣店里遇到了总来偷穿客人衣服的奇怪高中生。",
        "cover": "./5.jpg",
        "url": "./videos/video-1655.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "了不起的小家伙们",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "喜剧,儿童,家庭",
        "tags": [
            "萌娃",
            "破案",
            "单元剧",
            "喜剧",
            "儿童",
            "家庭"
        ],
        "line": "一个被撤并的乡村小学里,最后5个留守儿童成立了一个“无所事事事务所”,专门帮村民解决稀奇古怪的麻烦。",
        "cover": "./6.jpg",
        "url": "./videos/video-1656.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "星际旅行4:抢救未来国语",
        "year": "1986",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/冒险",
        "tags": [
            "星际迷航 时间旅行 拯救地球 环保 幽默",
            "科幻",
            "冒险"
        ],
        "line": "为了拯救地球,柯克船长带着船员回到20世纪,寻找已经灭绝的座头鲸。",
        "cover": "./7.jpg",
        "url": "./videos/video-1657.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "夏日爵士",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "音乐剧情",
        "tags": [
            "爵士乐",
            "父子情",
            "梦想",
            "黑人文化",
            "音乐剧情"
        ],
        "line": "为了偿还父亲欠下的巨债,一个古典钢琴天才被迫加入街头爵士乐队,却意外找到了属于自己的声音。",
        "cover": "./8.jpg",
        "url": "./videos/video-1658.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "蒙娜丽莎与血月亮",
        "year": "2021",
        "region": "美国/韩国",
        "type": "电影",
        "genre": "科幻/惊悚",
        "tags": [
            "超能力",
            "新奥尔良",
            "都市传说",
            "女巫",
            "异色",
            "科幻"
        ],
        "line": "神秘女孩从精神病院逃出,她用意念操控物体,却被脱衣舞俱乐部奉为摇钱树。",
        "cover": "./9.jpg",
        "url": "./videos/video-1659.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "树篱女巫",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "恐怖,民俗",
        "tags": [
            "乡野",
            "诅咒",
            "仪式",
            "低语",
            "恐怖",
            "民俗"
        ],
        "line": "一位农妇在自家庄园的树篱中发现了一个稻草人,此后,每晚都能听到墙内有指甲抓挠的声音。",
        "cover": "./10.jpg",
        "url": "./videos/video-1660.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "爸爸很漂亮",
        "year": "2024",
        "region": "泰国",
        "type": "电影",
        "genre": "剧情/同性/家庭",
        "tags": [
            "跨性别父亲",
            "亲子认同",
            "催泪弹",
            "剧情",
            "同性",
            "家庭"
        ],
        "line": "一位跨性别女性在女儿入学那天被叫“爸爸”,她选择穿上裙子去参加家长会。",
        "cover": "./11.jpg",
        "url": "./videos/video-1661.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "盗走林布兰",
        "year": "2024",
        "region": "荷兰/比利时",
        "type": "电影",
        "genre": "喜剧/犯罪/悬疑",
        "tags": [
            "艺术盗窃",
            "笨贼",
            "名画",
            "讽刺",
            "高智商反转",
            "喜剧"
        ],
        "line": "一个三流画家被胁迫去博物馆偷伦勃朗的真迹,但他画了一幅足以乱真的赝品打算狸猫换太子,却发现自己拿错了画。",
        "cover": "./12.jpg",
        "url": "./videos/video-1662.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "温柔安静的女人们",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情",
        "tags": [
            "女性",
            "家庭",
            "沉默",
            "爆发",
            "现实",
            "剧情"
        ],
        "line": "三个性格温柔安静的女人,在一个家庭里各自隐藏着即将撕裂日常的秘密。",
        "cover": "./13.jpg",
        "url": "./videos/video-1663.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "奇异人生马戏团",
        "year": "2022",
        "region": "美国",
        "type": "剧集",
        "genre": "奇幻/剧情",
        "tags": [
            "超现实",
            "青春成长",
            "时间循环",
            "奇幻",
            "剧情"
        ],
        "line": "一个逃离家庭的少女加入了一个只在午夜出现的幽灵马戏团,每场表演都会让她失去一段记忆,却换来一个超能力。",
        "cover": "./14.jpg",
        "url": "./videos/video-1664.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "帅哥们",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/青春/荒诞",
        "tags": [
            "男人帮",
            "逆袭",
            "荒诞幽默",
            "自我认知",
            "喜剧",
            "青春"
        ],
        "line": "三个被生活锤扁的男人,决定参加“全城最帅先生”大赛,用一场荒诞的闹剧重新定义“帅”。",
        "cover": "./15.jpg",
        "url": "./videos/video-1665.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "五指为马赛",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/运动",
        "tags": [
            "赛车手",
            "断指之谜",
            "极速复仇",
            "动作",
            "运动"
        ],
        "line": "曾经的亚洲车神只剩五根手指,他用这残缺的手掌,重新握住方向盘,向毁掉他一切的人发起挑战。",
        "cover": "./16.jpg",
        "url": "./videos/video-1666.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "派恩少校",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "历史,战争,传记",
        "tags": [
            "一战",
            "贵族",
            "人性",
            "反战",
            "历史",
            "战争"
        ],
        "line": "一位信奉骑士精神的英国贵族少校,在索姆河战役的地狱中,学会了像老鼠一样生存。",
        "cover": "./17.jpg",
        "url": "./videos/video-1667.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "动态漫画·末世超级系统",
        "year": "2024",
        "region": "中国大陆",
        "type": "动态漫画",
        "genre": "科幻,冒险,动作",
        "tags": [
            "末世",
            "系统",
            "异能",
            "生存",
            "科幻",
            "冒险"
        ],
        "line": "废土少年意外激活超级系统,却在每次升级时发现系统正在悄悄吞噬他的记忆。",
        "cover": "./18.jpg",
        "url": "./videos/video-1668.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "换了人间",
        "year": "2018",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "历史",
        "tags": [
            "建国",
            "伟人",
            "重大革命",
            "正剧",
            "历史"
        ],
        "line": "1949年新中国成立前后,国共两党在军事、政治、经济三条战线上的最后较量。",
        "cover": "./19.jpg",
        "url": "./videos/video-1669.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "网络谜踪2",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑,惊悚",
        "tags": [
            "桌面电影",
            "屏幕",
            "母女",
            "绑架",
            "暗网",
            "悬疑"
        ],
        "line": "叛逆少女发现母亲在哥伦比亚旅行失踪,她用妈妈的社交账号“扮演”母亲发帖,试图引蛇出洞。",
        "cover": "./20.jpg",
        "url": "./videos/video-1670.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "异性热力",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "浪漫喜剧",
        "tags": [
            "性转",
            "身体互换",
            "职场恋爱",
            "浪漫喜剧"
        ],
        "line": "互相看不顺眼的冰山女CEO和热血男实习生,在一次实验室意外后互换了身体。",
        "cover": "./21.jpg",
        "url": "./videos/video-1671.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "亲爱的仇敌",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情/爱情/复仇",
        "tags": [
            "罗生门",
            "婚姻战争",
            "反转",
            "剧情",
            "爱情",
            "复仇"
        ],
        "line": "离婚法庭上,夫妻双方各执一词,但法官发现他们的故事只有重叠处才是真相。",
        "cover": "./22.jpg",
        "url": "./videos/video-1672.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "恶心2024",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/哲学/心理",
        "tags": [
            "存在主义",
            "身体恐怖",
            "荒诞",
            "改编",
            "萨特",
            "剧情"
        ],
        "line": "现代社畜突然对身边的一切物体感到生理性恶心,直到他发现自己才是世界的“多余之物”。",
        "cover": "./23.jpg",
        "url": "./videos/video-1673.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "魔鬼骑士",
        "year": "1995",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,动作",
        "tags": [
            "邪典",
            "丧尸",
            "骑士",
            "末日",
            "恐怖",
            "动作"
        ],
        "line": "中世纪圣骑士穿越到现代洛杉矶,与黑帮丧尸争夺一枚地狱钥匙。",
        "cover": "./24.jpg",
        "url": "./videos/video-1674.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "兴风作浪3",
        "year": "2021",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "喜剧/爱情",
        "tags": [
            "东北",
            "离婚",
            "夫妻",
            "搞笑",
            "再追爱",
            "喜剧"
        ],
        "line": "一对已经离婚五年的欢喜冤家,为了争夺同一个相亲对象,被迫再次住到同一屋檐下。",
        "cover": "./25.jpg",
        "url": "./videos/video-1675.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "单身厨房2011",
        "year": "2011",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "真人秀/生活",
        "tags": [
            "相亲",
            "美食",
            "古早综艺",
            "都市男女",
            "真人秀",
            "生活"
        ],
        "line": "2011年,一档把单身男女关在厨房里一边做饭一边相亲的真人秀,诞生了无数离谱名场面。",
        "cover": "./26.jpg",
        "url": "./videos/video-1676.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "请对我承诺",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "爱情",
        "tags": [
            "奇幻",
            "契约",
            "治愈",
            "失忆",
            "约定",
            "爱情"
        ],
        "line": "一个能看见别人死亡倒计时的男人,遇到一个只剩下30天寿命的女人,他们签下一份恋爱契约。",
        "cover": "./27.jpg",
        "url": "./videos/video-1677.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "东京偶像",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,悬疑,惊悚",
        "tags": [
            "地下偶像",
            "网络暴力",
            "精神控制",
            "粉丝与偶像",
            "剧情",
            "悬疑"
        ],
        "line": "一个过气的地下偶像用AI换脸技术报复黑粉,却发现自己崇拜的“神推”粉丝才是真正的幕后黑手。",
        "cover": "./28.jpg",
        "url": "./videos/video-1678.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "撒旦的奴隶2",
        "year": "2024",
        "region": "印尼",
        "type": "电影",
        "genre": "恐怖",
        "tags": [
            "邪教",
            "诅咒",
            "血腥",
            "牺牲",
            "绝望",
            "恐怖"
        ],
        "line": "逃出火场的少女发现,恶魔从未离开,它一直寄居在她腹中。",
        "cover": "./29.jpg",
        "url": "./videos/video-1679.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "我老婆是凶手",
        "year": "2003",
        "region": "香港",
        "type": "电影",
        "genre": "悬疑,犯罪",
        "tags": [
            "婚姻",
            "反转",
            "黑色幽默",
            "杀夫",
            "心理",
            "悬疑"
        ],
        "line": "丈夫被毒杀,所有证据都指向妻子,但她坚持说是老公让自己动手的。",
        "cover": "./30.jpg",
        "url": "./videos/video-1680.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "直播鬼戏院",
        "year": "2025",
        "region": "中国台湾,日本",
        "type": "电影",
        "genre": "恐怖,伪纪录片,惊悚",
        "tags": [
            "直播",
            "废弃戏院",
            "都市传说",
            "灵异",
            "恐怖",
            "伪纪录片"
        ],
        "line": "六名网红进入废弃三十年的“丽都戏院”直播探险,镜头拍到了不在邀请名单上的第七个人。",
        "cover": "./31.jpg",
        "url": "./videos/video-1681.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "毒姬",
        "year": "2027",
        "region": "日本",
        "type": "剧集",
        "genre": "动作/犯罪",
        "tags": [
            "女杀手",
            "黑帮",
            "复仇",
            "血浆美学",
            "动作",
            "犯罪"
        ],
        "line": "被黑帮灭门的哑女,用三年炼成人体剧毒,化身夜间毒姬逐一猎杀。",
        "cover": "./32.jpg",
        "url": "./videos/video-1682.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "盗毒",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪",
        "tags": [
            "动作",
            "缉毒",
            "黑吃黑",
            "反转",
            "犯罪"
        ],
        "line": "为了还债的小偷潜入毒枭别墅,却不小心顺走了藏有警方卧底名单的U盘,正邪两方同时对他展开了疯狂追杀。",
        "cover": "./33.jpg",
        "url": "./videos/video-1683.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "山菊花",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,家庭,文艺",
        "tags": [
            "农村",
            "女性",
            "坚韧",
            "诗意",
            "剧情",
            "家庭"
        ],
        "line": "上世纪九十年代,大别山深处一个不识字的农妇,为了让女儿读书,赤脚走遍十里八乡收购山菊花换钱。",
        "cover": "./34.jpg",
        "url": "./videos/video-1684.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "怪诞秀",
        "year": "2027",
        "region": "美国",
        "type": "电视剧",
        "genre": "恐怖,喜剧",
        "tags": [
            "单元剧",
            "血腥",
            "黑色幽默",
            "恐怖",
            "喜剧"
        ],
        "line": "在一个收视率至上的深夜直播节目中,主持人和嘉宾所玩的整蛊游戏,全都会在现实中变为血腥的死亡陷阱。",
        "cover": "./35.jpg",
        "url": "./videos/video-1685.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "调味的房子",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "恐怖/悬疑",
        "tags": [
            "闹鬼",
            "香料",
            "殖民历史",
            "慢热恐怖",
            "感官剥夺",
            "恐怖"
        ],
        "line": "一对网红情侣搬进偏远古宅直播探险,却发现自己正在被一股古老香料的味道慢慢腌制。",
        "cover": "./36.jpg",
        "url": "./videos/video-1686.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "龙岭迷窟",
        "year": "2020",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "冒险",
        "tags": [
            "盗墓",
            "悬魂梯",
            "幽灵冢",
            "鹧鸪哨",
            "西夏黑水城",
            "冒险"
        ],
        "line": "一只绣花鞋引发的探险,让胡八一等人深入龙岭迷窟,遭遇了世间罕见的悬魂梯与幽灵冢。",
        "cover": "./37.jpg",
        "url": "./videos/video-1687.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "你的幸运日",
        "year": "2021",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚,悬疑",
        "tags": [
            "便利店",
            "巧合",
            "反套路",
            "随机杀人",
            "密室",
            "惊悚"
        ],
        "line": "一个自以为幸运的失业者中了彩票,却在深夜便利店里遇到了另一个也在等“幸运”降临的连环杀手。",
        "cover": "./38.jpg",
        "url": "./videos/video-1688.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "斩神之凡尘神域",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集/动漫",
        "genre": "奇幻/动作/都市",
        "tags": [
            "异能",
            "神话入脑",
            "都市传说",
            "热血",
            "奇幻",
            "动作"
        ],
        "line": "一个能听见“神话回响”的普通大学生,发现自己居住的老旧小区里,邻居们全是退休的远古之神。",
        "cover": "./39.jpg",
        "url": "./videos/video-1689.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "豺狼之吻",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "犯罪,惊悚,动作",
        "tags": [
            "卧底",
            "黑帮",
            "复仇",
            "背叛",
            "暴力美学",
            "犯罪"
        ],
        "line": "一名联邦卧底探员在即将收网之际,发现自己竟爱上了黑帮老大的女儿。",
        "cover": "./40.jpg",
        "url": "./videos/video-1690.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "毕业季",
        "year": "2024",
        "region": "日本",
        "type": "电视剧",
        "genre": "校园,悬疑,青春",
        "tags": [
            "毕业典礼",
            "校园霸凌",
            "复仇",
            "校园",
            "悬疑",
            "青春"
        ],
        "line": "高中毕业典礼当天,广播突然播放所有学生犯下的恶行,学校瞬间变成审判法庭。",
        "cover": "./41.jpg",
        "url": "./videos/video-1691.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "枪花",
        "year": "2013",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "谍战/动作",
        "tags": [
            "双生姐妹花",
            "特工",
            "民国",
            "巾帼英雄",
            "谍战",
            "动作"
        ],
        "line": "一对失散的双胞胎姐妹,多年后重逢却分属国共两党,在抗日烽火中上演相爱相杀的间谍战。",
        "cover": "./42.jpg",
        "url": "./videos/video-1692.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "13鬼作祟",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "恐怖",
        "tags": [
            "惊悚",
            "灵异",
            "密室",
            "诅咒",
            "恐怖"
        ],
        "line": "十三名陌生人受邀参加一座古堡的游戏,却发现每淘汰一人,就有一只恶鬼解除封印。",
        "cover": "./43.jpg",
        "url": "./videos/video-1693.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "拯救侏罗纪",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作,科幻,冒险",
        "tags": [
            "恐龙",
            "穿越",
            "灾难救援",
            "动作",
            "科幻",
            "冒险"
        ],
        "line": "一场大地震即将摧毁恐龙岛,一支精英小队必须在48小时内将所有恐龙转移到安全地带。",
        "cover": "./44.jpg",
        "url": "./videos/video-1694.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "女教师2022",
        "year": "2022",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,心理,惊悚",
        "tags": [
            "教师",
            "校园霸凌",
            "复仇",
            "压抑",
            "剧情",
            "心理"
        ],
        "line": "新任女教师发现班上的天才学生长期霸凌同学,她试图阻止,却反被学生设局,一步步陷入身败名裂的深渊。",
        "cover": "./45.jpg",
        "url": "./videos/video-1695.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "飘来飘去",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "文艺剧情",
        "tags": [
            "流浪",
            "身份",
            "邂逅",
            "巴黎",
            "文艺剧情"
        ],
        "line": "一个失去记忆的女人在巴黎街头游荡,每天醒来都以为自己是另一个人。",
        "cover": "./46.jpg",
        "url": "./videos/video-1696.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "深潜日",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑,灾难",
        "tags": [
            "潜水",
            "孤岛",
            "时间循环",
            "人性",
            "悬疑",
            "灾难"
        ],
        "line": "一名潜水教练在孤岛遭遇异常潮汐,困于同一天,而他唯一的搭档每天都会离奇死亡。",
        "cover": "./47.jpg",
        "url": "./videos/video-1697.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "飞屋环游记",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动画/冒险",
        "tags": [
            "冒险",
            "治愈",
            "老年梦想",
            "动画"
        ],
        "line": "78岁的老头用气球把房子拽上天,不是为了去冒险,而是要把房子停在妻子生前最想看的瀑布旁,然后安静地死在那里。",
        "cover": "./48.jpg",
        "url": "./videos/video-1698.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "最后曙光",
        "year": "2024",
        "region": "英国",
        "type": "电视剧",
        "genre": "科幻,剧情",
        "tags": [
            "末日",
            "地下城",
            "希望",
            "科幻",
            "剧情"
        ],
        "line": "核战爆发后,最后一批人类居住在地下城市“曙光号”,却发现头顶的太阳从未消失。",
        "cover": "./49.jpg",
        "url": "./videos/video-1699.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "纽约黑帮",
        "year": "2002",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/犯罪",
        "tags": [
            "帮派火并",
            "复仇",
            "移民史",
            "暴力美学",
            "剧情",
            "犯罪"
        ],
        "line": "十九世纪纽约五点区,爱尔兰移民之子为报杀父之仇,潜入仇人帮派内部掀起腥风血雨。",
        "cover": "./50.jpg",
        "url": "./videos/video-1700.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "血之游戏3",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑,惊悚,真人秀",
        "tags": [
            "生存游戏",
            "人性考验",
            "反转",
            "悬疑",
            "惊悚",
            "真人秀"
        ],
        "line": "六位负债者被关入废弃医院,每轮投票淘汰一人,而淘汰者的血液会真实流入中央玻璃柱。",
        "cover": "./51.jpg",
        "url": "./videos/video-1701.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "冷夜同盗人",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "犯罪,剧情",
        "tags": [
            "一夜逃亡",
            "羁绊",
            "赎罪",
            "犯罪",
            "剧情"
        ],
        "line": "破产社长与离家少女,两个落魄之人在寒冬深夜组队行窃。",
        "cover": "./52.jpg",
        "url": "./videos/video-1702.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "大菩萨岭1966",
        "year": "2022",
        "region": "日本",
        "type": "电影",
        "genre": "动作/武士",
        "tags": [
            "黑白片",
            "翻拍",
            "剑戟",
            "宿命",
            "反英雄",
            "动作"
        ],
        "line": "1966年经典黑白片的数字修复版基础上,重新剪辑了未公开的十分钟结局,彻底颠覆原作主题。",
        "cover": "./53.jpg",
        "url": "./videos/video-1703.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "永恒的记忆",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "阿尔茨海默症",
            "亲情",
            "催泪",
            "时间",
            "传承",
            "剧情"
        ],
        "line": "患上阿尔茨海默症的父亲忘记了全世界,却唯独记得每一年给女儿过生日的录音带。",
        "cover": "./54.jpg",
        "url": "./videos/video-1704.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "搏击傲娇小女生",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧、运动、励志",
        "tags": [
            "格斗",
            "反差萌",
            "师徒",
            "喜剧",
            "运动",
            "励志"
        ],
        "line": "破产富二代白富美拜师落魄退役拳王,两人从互殴到携手杀回拳坛。",
        "cover": "./55.jpg",
        "url": "./videos/video-1705.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "拇指版星球大战",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,动画,恶搞",
        "tags": [
            "定格动画",
            "拇指",
            "无厘头",
            "星球大战恶搞",
            "微缩",
            "喜剧"
        ],
        "line": "当绝地武士都变成了拇指,原力只是用来拿遥控器的小把戏。",
        "cover": "./56.jpg",
        "url": "./videos/video-1706.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "妈咪速成计划",
        "year": "2025",
        "region": "印度",
        "type": "电影",
        "genre": "喜剧/剧情/家庭",
        "tags": [
            "单亲爸爸",
            "变装",
            "社会偏见",
            "温情",
            "喜剧",
            "剧情"
        ],
        "line": "一个直男单亲爸爸为了女儿能上精英幼儿园,被迫男扮女装扮演“完美的全职妈妈”。",
        "cover": "./57.jpg",
        "url": "./videos/video-1707.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "一弦定音!第二季",
        "year": "2023",
        "region": "日本",
        "type": "动画",
        "genre": "音乐,青春",
        "tags": [
            "古筝",
            "社团活动",
            "成长",
            "团体羁绊",
            "音乐",
            "青春"
        ],
        "line": "时濑筝曲部向全国大赛发起冲击,但新曲目的现代风格让保守的评委和成员内部产生了巨大分歧。",
        "cover": "./58.jpg",
        "url": "./videos/video-1708.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "纳米核心",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "科幻动作",
        "tags": [
            "机械义体",
            "军方实验",
            "失控",
            "末世",
            "反英雄",
            "科幻动作"
        ],
        "line": "全身骨骼被替换为纳米机械的特种兵叛逃后,发现体内的核心程序会定时杀死身边所有人。",
        "cover": "./59.jpg",
        "url": "./videos/video-1709.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "恐怖俱乐部",
        "year": "2024",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖,悬疑,惊悚",
        "tags": [
            "密室",
            "直播",
            "校园怪谈",
            "诅咒",
            "恐怖",
            "悬疑"
        ],
        "line": "五名大学生为博取流量进入废弃的“恐怖俱乐部”鬼屋直播,却触发了真正的死亡游戏。",
        "cover": "./60.jpg",
        "url": "./videos/video-1710.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "流亡者的对话",
        "year": "2022",
        "region": "德国",
        "type": "电影",
        "genre": "剧情,历史",
        "tags": [
            "黑白",
            "哲学",
            "难民",
            "剧情",
            "历史"
        ],
        "line": "一间废弃的柏林车站里,五个不同时代的“流亡者”跨越时空相遇,他们唯一的共同语言是沉默。",
        "cover": "./61.jpg",
        "url": "./videos/video-1711.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "最美中国戏",
        "year": "2022",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀/戏曲",
        "tags": [
            "文化传承",
            "跨界",
            "竞技",
            "舞台",
            "真人秀",
            "戏曲"
        ],
        "line": "流行歌手与京剧老炮儿同台,输了的人要去公园唱三天戏。",
        "cover": "./62.jpg",
        "url": "./videos/video-1712.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "死产儿",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "民俗恐怖",
            "母职恐惧",
            "宗教",
            "高概念",
            "恐怖",
            "惊悚"
        ],
        "line": "助产士接手一个无人敢接的产妇,婴儿出生即“死亡”,但当晚,小镇上所有“死产儿”的母亲开始一个接一个消失。",
        "cover": "./63.jpg",
        "url": "./videos/video-1713.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "圣战士:虚空",
        "year": "2025",
        "region": "日本",
        "type": "动画剧集",
        "genre": "科幻,战争",
        "tags": [
            "机甲",
            "宇宙宗教",
            "虚拟现实",
            "存在主义",
            "科幻",
            "战争"
        ],
        "line": "圣战士不再是驾驶机甲的人类,而是被“虚空”吞噬后重新解码的意识体。",
        "cover": "./64.jpg",
        "url": "./videos/video-1714.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "长大的世界没有童话2",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/社会",
        "tags": [
            "中年危机",
            "返乡",
            "拆迁",
            "亲情",
            "现实主义",
            "剧情"
        ],
        "line": "第一部的十年后,当年逃出小镇的青年衣锦还乡,却发现故乡即将沉入水底。",
        "cover": "./65.jpg",
        "url": "./videos/video-1715.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "春光花月",
        "year": "1967",
        "region": "中国香港",
        "type": "电影",
        "genre": "歌舞,爱情,喜剧",
        "tags": [
            "邵氏",
            "黄梅调",
            "歌舞片",
            "古装爱情",
            "才子佳人",
            "歌舞"
        ],
        "line": "元宵灯会上,乔装出游的千金小姐与卖花郎对唱定情,却不知对方竟是皇帝微服私访的儿子。",
        "cover": "./66.jpg",
        "url": "./videos/video-1716.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "亡者之湿",
        "year": "2020",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖奇幻",
        "tags": [
            "都市传说",
            "诅咒",
            "雨水",
            "公寓",
            "怪谈",
            "恐怖奇幻"
        ],
        "line": "下雨天千万别在公寓走廊停留,那些被楼上滴下的“水”碰到的人,会变成新的寻死者。",
        "cover": "./67.jpg",
        "url": "./videos/video-1717.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "爱的3.14159",
        "year": "2025",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情,爱情",
        "tags": [
            "数学",
            "宿命",
            "高智商",
            "无限不循环",
            "剧情",
            "爱情"
        ],
        "line": "两个患有“数学焦虑症”的青年男女,试图用圆周率π的无限不循环特性,来验证爱情的随机性。",
        "cover": "./68.jpg",
        "url": "./videos/video-1718.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "马罗",
        "year": "2025",
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情/犯罪/西部",
        "tags": [
            "新西部",
            "私刑者",
            "创伤",
            "复仇",
            "孤独",
            "剧情"
        ],
        "line": "蒙大拿州的最后一位牛仔马罗,白天驯马,晚上替被法律抛弃的人执行私刑,直到他发现下一个目标是自己失散十五年的儿子。",
        "cover": "./69.jpg",
        "url": "./videos/video-1719.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "这不应发生在兽医身上",
        "year": "1975",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧/剧情",
        "tags": [
            "职业剧",
            "乡村",
            "英式幽默",
            "喜剧",
            "剧情"
        ],
        "line": "一个年轻兽医来到英国乡村,发现给牛接生比应付刁钻的农场主和善妒的贵妇更难。",
        "cover": "./70.jpg",
        "url": "./videos/video-1720.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "风云",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "武侠/奇幻",
        "tags": [
            "江湖",
            "宿命",
            "双雄",
            "特效",
            "漫画改编",
            "武侠"
        ],
        "line": "一柄绝世好剑,一个麒麟魔咒,两位少年的命运注定只能存活一个。",
        "cover": "./71.jpg",
        "url": "./videos/video-1721.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "末日狂城",
        "year": "2026",
        "region": "美国/中国合拍",
        "type": "电影",
        "genre": "动作/科幻/灾难",
        "tags": [
            "末日",
            "变异生物",
            "孤城",
            "机甲",
            "生存",
            "动作"
        ],
        "line": "当全球陷入黑暗,一座孤城成为人类最后的堡垒,但真正的怪物可能来自内部。",
        "cover": "./72.jpg",
        "url": "./videos/video-1722.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "再造战士",
        "year": "1992",
        "region": "美国",
        "type": "电影",
        "genre": "动作/科幻",
        "tags": [
            "人体改造",
            "越战老兵",
            "记忆觉醒",
            "动作",
            "科幻"
        ],
        "line": "阵亡士兵被改造成完美杀人机器,却因一段越南往事开始反噬造物主。",
        "cover": "./73.jpg",
        "url": "./videos/video-1723.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "一秒变总统第二季",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧/奇幻",
        "tags": [
            "政治讽刺",
            "黑色幽默",
            "身份错位",
            "白宫",
            "喜剧",
            "奇幻"
        ],
        "line": "上一季靠神秘手机app当上总统的普通人,这一季必须学会如何不被全世界发现他是个冒牌货。",
        "cover": "./74.jpg",
        "url": "./videos/video-1724.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "我的人格合租屋",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "奇幻/剧情",
        "tags": [
            "多重人格",
            "治愈",
            "同居",
            "奇幻",
            "剧情"
        ],
        "line": "患有解离性身份障碍的女主,她的七个人格住在一栋合租屋里,有一天“主人格”突然不回来了。",
        "cover": "./75.jpg",
        "url": "./videos/video-1725.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "济公之英雄归位",
        "year": "2018",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/奇幻",
        "tags": [
            "济公",
            "降妖",
            "修仙",
            "搞笑",
            "喜剧",
            "奇幻"
        ],
        "line": "废柴济公被贬下凡,只有集齐七颗“英雄舍利”才能重归佛位。",
        "cover": "./76.jpg",
        "url": "./videos/video-1726.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "普西迪基地",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作,惊悚",
        "tags": [
            "军队",
            "谋杀",
            "旧金山",
            "老兵",
            "动作",
            "惊悚"
        ],
        "line": "旧金山普西迪基地发生诡异命案,宪兵队长发现凶手可能来自同一个坟墓。",
        "cover": "./77.jpg",
        "url": "./videos/video-1727.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "罗塞里尼家族絮语",
        "year": "2026",
        "region": "意大利/法国",
        "type": "剧集",
        "genre": "剧情/历史/家族",
        "tags": [
            "黑手党",
            "黑帮",
            "文艺",
            "剧情",
            "历史",
            "家族"
        ],
        "line": "黑手党教父临终前将家族分给三个女儿,并留下遗言:不要相信我说的任何一句话。",
        "cover": "./78.jpg",
        "url": "./videos/video-1728.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "了不起的盖茨比",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,爱情",
        "tags": [
            "经典改编",
            "爵士时代",
            "悲剧",
            "视觉盛宴",
            "3D",
            "剧情"
        ],
        "line": "全新3D版改编,用极度奢华的视觉语言,讲述一个“穷小子”为爱造梦、最终幻灭的悲歌。",
        "cover": "./79.jpg",
        "url": "./videos/video-1729.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "来看天堂",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情,奇幻,爱情",
        "tags": [
            "绝症",
            "遗愿清单",
            "灵媒",
            "治愈",
            "剧情",
            "奇幻"
        ],
        "line": "一名通灵少女被临终富商雇来“代看”天堂,却在旅程中发现了自己身世的惊天秘密。",
        "cover": "./80.jpg",
        "url": "./videos/video-1730.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "穿越吧厨房第一季",
        "year": "2016",
        "region": "中国大陆",
        "type": "剧集/综艺",
        "genre": "真人秀/美食",
        "tags": [
            "综艺",
            "厨房",
            "穿越",
            "明星",
            "美食考古",
            "真人秀"
        ],
        "line": "明星们穿越回古代,用祖传菜谱PK现代厨艺,输的人要吃“黑暗料理”。",
        "cover": "./81.jpg",
        "url": "./videos/video-1731.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "恐怖情人节",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "节日杀戮",
            "诅咒",
            "情侣",
            "反转",
            "恐怖",
            "惊悚"
        ],
        "line": "情人节当天,小镇上所有收到匿名心形巧克力的人,都会在亲吻时变成一尊石膏像。",
        "cover": "./82.jpg",
        "url": "./videos/video-1732.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "警察故事1985粤语",
        "year": "1985",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,犯罪",
        "tags": [
            "经典",
            "成龙",
            "硬核特技",
            "动作",
            "犯罪"
        ],
        "line": "为了洗刷同僚冤屈,一个小警察单挑整个贩毒集团。",
        "cover": "./83.jpg",
        "url": "./videos/video-1733.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "花漾",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/同性/家庭",
        "tags": [
            "花艺",
            "母女",
            "自我认同",
            "传承",
            "剧情",
            "同性"
        ],
        "line": "天才花艺师女儿返乡为母亲葬礼插花,却在老屋里发现了母亲藏了一生的情书——写给另一个女人。",
        "cover": "./84.jpg",
        "url": "./videos/video-1734.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "纪律如铁,柔情似水",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/运动/励志",
        "tags": [
            "花样游泳",
            "退役军人",
            "女子体育",
            "逆袭",
            "剧情",
            "运动"
        ],
        "line": "一名铁血的退伍女兵阴差阳错成为了一支县中学花样游泳队的教练,她要带这群“旱鸭子”打败省队,赢回被拆除的游泳池。",
        "cover": "./85.jpg",
        "url": "./videos/video-1735.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "非人哉",
        "year": "2019",
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "喜剧/奇幻",
        "tags": [
            "神话妖怪",
            "现代职场",
            "泡面番",
            "喜剧",
            "奇幻"
        ],
        "line": "哪吒、大士、哮天犬和九月一起在现代城市合租,神仙也要打工还房贷。",
        "cover": "./86.jpg",
        "url": "./videos/video-1736.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "超级主妇",
        "year": "2018",
        "region": "韩国",
        "type": "电视剧",
        "genre": "喜剧/家庭/励志",
        "tags": [
            "全能主妇",
            "逆袭",
            "豪门恩怨",
            "日常生活",
            "幽默",
            "喜剧"
        ],
        "line": "一名顶级家政规划师嫁入豪门后,不得不用职业手段解决婆家所有人的生活与事业危机。",
        "cover": "./87.jpg",
        "url": "./videos/video-1737.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "职业杀神",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "动作,犯罪,惊悚",
        "tags": [
            "杀手",
            "反套路",
            "黑色幽默",
            "动作",
            "犯罪",
            "惊悚"
        ],
        "line": "顶级杀手为了退休金,接最后一单活,目标是伪装成杀手的普通会计。",
        "cover": "./88.jpg",
        "url": "./videos/video-1738.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "潜行狙击粤语",
        "year": "2015",
        "region": "中国香港",
        "type": "剧集",
        "genre": "警匪、动作",
        "tags": [
            "卧底",
            "黑帮",
            "兄弟情",
            "警匪",
            "动作"
        ],
        "line": "卧底警察“阿鬼”在黑帮中步步高升,却发现自己最铁的兄弟,也是另一派的卧底。",
        "cover": "./89.jpg",
        "url": "./videos/video-1739.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "工作细胞:细胞大作战",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "动画/科普/动作",
        "tags": [
            "拟人化",
            "免疫系统",
            "热血战斗",
            "催泪",
            "动画",
            "科普"
        ],
        "line": "当致命的未知病毒入侵人体,一向懦弱的普通细胞被激活了远古战斗基因,他将成为决定宿主生死的关键武器。",
        "cover": "./90.jpg",
        "url": "./videos/video-1740.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "快乐先生",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧/剧情",
        "tags": [
            "小丑",
            "临终关怀",
            "荒诞",
            "微笑疗法",
            "单元剧",
            "喜剧"
        ],
        "line": "一个被解雇的脱口秀演员假扮临终关怀师,用烂笑话陪老人走完最后一程。",
        "cover": "./91.jpg",
        "url": "./videos/video-1741.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "比阿特丽克斯·波特的故事",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "传记/剧情",
        "tags": [
            "女性作家",
            "自然保护",
            "湖区",
            "田园风光",
            "文学改编",
            "传记"
        ],
        "line": "当伦敦上流社会拒绝她的婚姻,这位《彼得兔》之母独自逃往湖区,用画笔拯救了整个村庄。",
        "cover": "./92.jpg",
        "url": "./videos/video-1742.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "凯瑟琳大帝 第二季",
        "year": "2025",
        "region": "美国/英国",
        "type": "剧集",
        "genre": "剧情,历史,喜剧",
        "tags": [
            "宫廷斗争",
            "女皇",
            "传奇",
            "HBO",
            "剧情",
            "历史"
        ],
        "line": "凯瑟琳二世终于坐稳了皇位,但她要面对的不再是政变,而是一个陷入财政崩溃和瘟疫肆虐的俄罗斯。",
        "cover": "./93.jpg",
        "url": "./videos/video-1743.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "有时间",
        "year": "2028",
        "region": "加拿大",
        "type": "电影",
        "genre": "科幻伦理",
        "tags": [
            "时间货币",
            "贫富差距",
            "末日废土",
            "高概念",
            "催泪",
            "科幻伦理"
        ],
        "line": "在一个人人都能活到1000岁的未来,穷人的时间是商品,富人则永生不死。",
        "cover": "./94.jpg",
        "url": "./videos/video-1744.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "明明",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "文艺,爱情,悬疑",
        "tags": [
            "失忆",
            "替身",
            "镜像",
            "文艺",
            "爱情",
            "悬疑"
        ],
        "line": "车祸失忆的女人被丈夫告知她叫“明明”,但她在家里发现了另一个“明明”的日记,日期是明天。",
        "cover": "./95.jpg",
        "url": "./videos/video-1745.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "不准忘了我",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑/惊悚",
        "tags": [
            "失忆",
            "婚内PUA",
            "反转",
            "密室",
            "悬疑",
            "惊悚"
        ],
        "line": "车祸失忆的女人醒来后发现自己是幸福的家庭主妇,但一本藏在壁纸后的日记写着:“不要相信丈夫,他杀了真正的我。",
        "cover": "./96.jpg",
        "url": "./videos/video-1746.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "史酷比和吸血鬼传说",
        "year": "2025",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧/悬疑/奇幻",
        "tags": [
            "史酷比",
            "吸血鬼",
            "搞笑解谜",
            "复古风格",
            "团队合作",
            "喜剧"
        ],
        "line": "神秘公司前往特兰西瓦尼亚,却发现传说中的吸血鬼可能是真货。",
        "cover": "./97.jpg",
        "url": "./videos/video-1747.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "少女终末旅行",
        "year": "2026",
        "region": "日本",
        "type": "动画剧集",
        "genre": "科幻,治愈",
        "tags": [
            "末日",
            "公路片",
            "百合",
            "哲学",
            "废土",
            "科幻"
        ],
        "line": "在人类灭亡后的废土世界,两个少女开着半履带车,寻找“最后的食物”和“活着的意义”。",
        "cover": "./98.jpg",
        "url": "./videos/video-1748.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "时间的桥梁",
        "year": "2021",
        "region": "英国",
        "type": "剧集",
        "genre": "科幻,悬疑",
        "tags": [
            "时间穿越",
            "平行时空",
            "烧脑",
            "科幻",
            "悬疑"
        ],
        "line": "一座古桥能让走上的人回到过去,但每次只能停留十分钟,且改变过去会让未来出现不可控的“裂缝”。",
        "cover": "./99.jpg",
        "url": "./videos/video-1749.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "鬼哭神嚎7",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/超自然",
        "tags": [
            "鬼屋重启",
            "诅咒延续",
            "伪纪录片",
            "灵媒对决",
            "数字幽灵",
            "恐怖"
        ],
        "line": "当短视频博主闯入被诅咒的凶宅直播,第七代的恶灵终于学会了入侵互联网。",
        "cover": "./100.jpg",
        "url": "./videos/video-1750.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "我属于谁",
        "year": "2005",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "悬疑/伦理",
        "tags": [
            "失忆",
            "身份迷局",
            "豪门夺产",
            "悬疑",
            "伦理"
        ],
        "line": "车祸失忆的女人醒来后,同时被两个家庭声称是他们的女儿,而她逐渐发现自己可能是被绑架的富商千金。",
        "cover": "./101.jpg",
        "url": "./videos/video-1751.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "夏日最后的一天",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/家庭/治愈",
        "tags": [
            "夏日",
            "亲情",
            "成长",
            "离别",
            "剧情",
            "家庭"
        ],
        "line": "在暑假的最后一天,即将搬家的男孩收到了一封来自已故爷爷的信,指引他在小镇上完成一项神秘的“寻宝游戏”。",
        "cover": "./102.jpg",
        "url": "./videos/video-1752.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "恐怖旅舍第二站",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚,血腥",
        "tags": [
            "虐杀",
            "公路恐怖",
            "密闭空间",
            "反转",
            "B级片",
            "恐怖"
        ],
        "line": "背包客们误入沙漠深处的无人旅舍,却发现每一个房间都是通往死亡的单向游戏。",
        "cover": "./103.jpg",
        "url": "./videos/video-1753.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "狄斯尼交响曲",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动画,音乐,奇幻",
        "tags": [
            "无对白",
            "古典乐",
            "经典IP混搭",
            "默片风格",
            "动画",
            "音乐"
        ],
        "line": "没有一句台词,一百分钟古典乐串联起二十个迪士尼经典角色的破碎重组梦境。",
        "cover": "./104.jpg",
        "url": "./videos/video-1754.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "敌军",
        "year": "2025",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争剧情",
        "tags": [
            "二战",
            "战俘",
            "人性",
            "德军",
            "反转",
            "战争剧情"
        ],
        "line": "苏联女军医在战场救下一名德国伤兵,三个月后她沦为战俘,审讯她的正是那个被她救过的人。",
        "cover": "./105.jpg",
        "url": "./videos/video-1755.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "续·社长行状记",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,职场",
        "tags": [
            "昭和",
            "泡沫经济",
            "落寞",
            "忠诚",
            "时代挽歌",
            "剧情"
        ],
        "line": "日本泡沫经济破裂后,一家倒闭企业的老社长每天仍然穿戴整齐去“上班”,而他的员工们默默配合演出。",
        "cover": "./106.jpg",
        "url": "./videos/video-1756.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "与爱何干",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "音乐,传记,剧情",
        "tags": [
            "摇滚",
            "女权",
            "创作",
            "抗争",
            "70年代",
            "音乐"
        ],
        "line": "1975年,首位拒绝“男友制作人”操控的女摇滚歌手,如何砸碎录音棚并写出时代圣歌。",
        "cover": "./107.jpg",
        "url": "./videos/video-1757.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "炼气练了3000年",
        "year": "2025",
        "region": "中国大陆",
        "type": "网络剧/动画",
        "genre": "喜剧/奇幻/动作",
        "tags": [
            "修仙",
            "废柴",
            "长生",
            "反转",
            "喜剧",
            "奇幻"
        ],
        "line": "男主在山上炼气期练了三千年,成了地球上最后一个老妖怪,却发现外面的世界变天了。",
        "cover": "./108.jpg",
        "url": "./videos/video-1758.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "无聊",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "心理剧情",
        "tags": [
            "日常",
            "存在主义",
            "空洞感",
            "社会寓言",
            "心理剧情"
        ],
        "line": "一个觉得万事万物都“无聊”的少女,发现整座城市正因失去情绪而逐渐数据化。",
        "cover": "./109.jpg",
        "url": "./videos/video-1759.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "怪奇艾玛",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "奇幻/悬疑",
        "tags": [
            "暗黑童话",
            "哥特",
            "少女",
            "小镇怪谈",
            "奇幻",
            "悬疑"
        ],
        "line": "维多利亚时期的少女艾玛能听到尸体的遗言,为了洗清母亲的冤案,她不得不与镇上的活死人合作。",
        "cover": "./110.jpg",
        "url": "./videos/video-1760.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "访问者",
        "year": "2026",
        "region": "英国",
        "type": "电影",
        "genre": "科幻、惊悚、悬疑",
        "tags": [
            "时间悖论",
            "记忆入侵",
            "平行宇宙",
            "细思极恐",
            "科幻",
            "惊悚"
        ],
        "line": "心理医生的新病人自称来自未来,并说医生将在七天后杀死自己的女儿。",
        "cover": "./111.jpg",
        "url": "./videos/video-1761.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "生命如尘",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,音乐,文艺",
        "tags": [
            "绝症",
            "交响乐",
            "父女情",
            "生命意义",
            "催泪",
            "剧情"
        ],
        "line": "被确诊只剩三个月寿命的指挥家,决定为年幼女儿办一场“看不见的交响乐”,让音符替自己活下去。",
        "cover": "./112.jpg",
        "url": "./videos/video-1762.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "濑户内海贼物语",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "冒险/历史/喜剧",
        "tags": [
            "江户时代",
            "海盗",
            "寻宝",
            "冒险",
            "历史",
            "喜剧"
        ],
        "line": "江户末年,三个废柴海盗后裔为还债,驾着破船踏上寻找传说宝藏的旅程。",
        "cover": "./113.jpg",
        "url": "./videos/video-1763.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "处女",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/女性",
        "tags": [
            "性压抑",
            "宗教",
            "小镇",
            "禁忌",
            "自我觉醒",
            "剧情"
        ],
        "line": "偏远宗教小镇,35岁“剩女”的处女身份被全镇当成神迹,她却只想破身。",
        "cover": "./114.jpg",
        "url": "./videos/video-1764.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "布宜诺斯艾利斯现场",
        "year": "2024",
        "region": "阿根廷",
        "type": "电影",
        "genre": "惊悚,犯罪,剧情",
        "tags": [
            "直播",
            "绑架",
            "社会讽刺",
            "密室",
            "惊悚",
            "犯罪"
        ],
        "line": "一名过气主播被神秘组织绑架,身上被绑满摄像头,要求他全程直播这座城市的午夜罪恶。",
        "cover": "./115.jpg",
        "url": "./videos/video-1765.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "如是",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "纪录片/传记",
        "tags": [
            "叶嘉莹",
            "诗词",
            "古典文学",
            "女性",
            "苦难",
            "纪录片"
        ],
        "line": "纪录片镜头对准97岁的叶嘉莹先生,她说“命运把我放在哪里,我就落在哪里,然后就在那里开花”。",
        "cover": "./116.jpg",
        "url": "./videos/video-1766.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "致命切割",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "惊悚,犯罪,悬疑",
        "tags": [
            "连环杀手",
            "法医对决",
            "高智商犯罪",
            "惊悚",
            "犯罪",
            "悬疑"
        ],
        "line": "法医在解剖一具无头女尸时,发现凶手用手术刀留下的签名——那是她自己七年前失踪的父亲的名字。",
        "cover": "./117.jpg",
        "url": "./videos/video-1767.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "浪子挑情",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情/悬疑",
        "tags": [
            "虐恋",
            "复仇",
            "反转",
            "情欲",
            "爱情",
            "悬疑"
        ],
        "line": "顶级渣男接连玩弄五位女性,却不知这是她们联手设下的十年复仇局。",
        "cover": "./118.jpg",
        "url": "./videos/video-1768.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "了不起的麦瑟尔夫人第二季",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情/喜剧",
        "tags": [
            "女性成长",
            "脱口秀",
            "复古时尚",
            "家庭喜剧",
            "剧情",
            "喜剧"
        ],
        "line": "米琪在巡演路上一边征服全美舞台,一边与前夫哥剪不断理还乱,而苏西的经纪人之路麻烦不断。",
        "cover": "./119.jpg",
        "url": "./videos/video-1769.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "爱情小欲望",
        "year": "2019",
        "region": "意大利/法国",
        "type": "电影",
        "genre": "爱情/喜剧",
        "tags": [
            "轻甜",
            "错过与重逢",
            "巴黎",
            "美食",
            "爱情",
            "喜剧"
        ],
        "line": "一个意大利厨师和一个法国美食评论家在 10 年间约了 9 次会,每次都因意外失败,第 10 次他们决定彻底不见。",
        "cover": "./120.jpg",
        "url": "./videos/video-1770.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "武林学校",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动作,喜剧,校园",
        "tags": [
            "武术",
            "热血成长",
            "现代与传统",
            "动作",
            "喜剧",
            "校园"
        ],
        "line": "一群问题少年被送进深山武术学校,笑料百出中重拾传统武德。",
        "cover": "./121.jpg",
        "url": "./videos/video-1771.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "惊魂游戏",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑,犯罪,动作",
        "tags": [
            "密室逃脱",
            "生存游戏",
            "复仇",
            "高智商",
            "阶层隐喻",
            "悬疑"
        ],
        "line": "六名社会底层接到神秘邀请参加“百万生存游戏”,醒来后发现自己成了富豪庄园里的活体猎物。",
        "cover": "./122.jpg",
        "url": "./videos/video-1772.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "珍奥斯汀误了我一生",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧、爱情、剧情",
        "tags": [
            "文学",
            "现实打击",
            "大龄单身",
            "英式幽默",
            "反讽",
            "喜剧"
        ],
        "line": "一个读了三十遍《傲慢与偏见》的女人,终于明白现实中没有达西先生,只有“达西先生已读不回”。",
        "cover": "./123.jpg",
        "url": "./videos/video-1773.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "山之王",
        "year": "2025",
        "region": "尼泊尔/美国",
        "type": "电影",
        "genre": "冒险,传记",
        "tags": [
            "登山",
            "极限求生",
            "真实改编",
            "冒险",
            "传记"
        ],
        "line": "一个没有双腿的夏尔巴人,发誓要成为登顶珠峰“死亡路线”南坡的第一人,只为取回队友留在那里的遗体。",
        "cover": "./124.jpg",
        "url": "./videos/video-1774.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "阳光姐妹淘 2011",
        "year": "2011",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情,喜剧",
        "tags": [
            "友情",
            "怀旧",
            "催泪",
            "剧情",
            "喜剧"
        ],
        "line": "二十五年前“七公主”小团体因一场意外决裂,如今身患绝症的大姐大请求姐妹完成当年的遗愿清单。",
        "cover": "./125.jpg",
        "url": "./videos/video-1775.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "上帝未死3",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/信仰",
        "tags": [
            "宗教",
            "法庭辩论",
            "AI时代",
            "信仰与科学",
            "剧情",
            "信仰"
        ],
        "line": "当AI法官被用来裁决宗教自由案件,人类第一次必须向机器证明上帝存在。",
        "cover": "./126.jpg",
        "url": "./videos/video-1776.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "为什么不是巴西",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧/剧情/冒险",
        "tags": [
            "中年危机",
            "足球",
            "误打误撞",
            "黑色幽默",
            "喜剧",
            "剧情"
        ],
        "line": "一个从未出过国的英国中年球迷错把“伊普斯维奇”听成“圣保罗”,阴差阳错带队闯入里约热内卢的贫民窟杯足球赛。",
        "cover": "./127.jpg",
        "url": "./videos/video-1777.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "查科",
        "year": "2023",
        "region": "阿根廷",
        "type": "电影",
        "genre": "历史/战争/惊悚",
        "tags": [
            "南美历史",
            "巴拉圭战争",
            "雨林地狱",
            "军官溃败",
            "存在主义",
            "历史"
        ],
        "line": "1932年,一个玻利维亚军官排在大查科雨林中迷路,饥饿、疟疾和幻觉,比敌人更可怕。",
        "cover": "./128.jpg",
        "url": "./videos/video-1778.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "恶灵魔洛克",
        "year": "2025",
        "region": "英国",
        "type": "电视剧",
        "genre": "恐怖惊悚",
        "tags": [
            "民俗恐怖",
            "英国乡野",
            "邪神崇拜",
            "心理扭曲",
            "恐怖惊悚"
        ],
        "line": "考古系学生在地下墓穴发现了一尊无脸石像,带出后,村子里的人开始一个接一个地失去脸上的五官。",
        "cover": "./129.jpg",
        "url": "./videos/video-1779.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "巅峰拍档第十六季",
        "year": "2025",
        "region": "英国",
        "type": "综艺",
        "genre": "竞技真人秀",
        "tags": [
            "赛车",
            "极限挑战",
            "毒舌主持",
            "竞技真人秀"
        ],
        "line": "三位疯狂主持人驾驶二手皮卡穿越战火纷飞的非洲,只为验证油箱里到底是汽油还是威士忌。",
        "cover": "./130.jpg",
        "url": "./videos/video-1780.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "是咁的,法官阁下粤语",
        "year": "2024",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情/律政/喜剧",
        "tags": [
            "粤语",
            "市井",
            "小案子",
            "人情味",
            "剧情",
            "律政"
        ],
        "line": "深水埗的“街坊法庭”里,一个毒舌老法官用最地道的粤语俚语,审理着全香港最鸡毛蒜皮又最动人的小案子。",
        "cover": "./131.jpg",
        "url": "./videos/video-1781.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "橡皮",
        "year": "2019",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "惊悚/科幻/心理",
        "tags": [
            "失忆",
            "犯罪现场",
            "擦除",
            "身份",
            "惊悚",
            "科幻"
        ],
        "line": "他能擦除别人的记忆,直到他在自己脑子里看到了不该看的东西。",
        "cover": "./132.jpg",
        "url": "./videos/video-1782.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "爱我多深",
        "year": "2023",
        "region": "意大利",
        "type": "电影",
        "genre": "爱情/剧情/情色",
        "tags": [
            "欲望",
            "婚姻困境",
            "中年危机",
            "意大利风情",
            "爱情",
            "剧情"
        ],
        "line": "结婚十五年的建筑师丈夫买下一个应召女郎的“整年陪伴权”,只为证明自己还活着。",
        "cover": "./133.jpg",
        "url": "./videos/video-1783.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "你是迟来的欢喜",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情,剧情,治愈",
        "tags": [
            "破镜重圆",
            "暗恋",
            "重逢",
            "城市",
            "爱情",
            "剧情"
        ],
        "line": "离婚冷静期的最后一天,她收到了十年前的自己寄来的信,信封上写着“请交给那个让你哭过的男孩”。",
        "cover": "./134.jpg",
        "url": "./videos/video-1784.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "时光与他,恰是正好",
        "year": "2022",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "爱情,青春,校园",
        "tags": [
            "甜宠",
            "学霸",
            "暗恋成真",
            "双向奔赴",
            "校园剧",
            "爱情"
        ],
        "line": "倔强学渣与清冷学霸约定互换志愿,结果两人双双考入对方的第一志愿,从此开启啼笑皆非的“错位”大学时光。",
        "cover": "./135.jpg",
        "url": "./videos/video-1785.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "冰峰暴",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作,灾难",
        "tags": [
            "雪山",
            "极限救援",
            "兄弟情",
            "动作",
            "灾难"
        ],
        "line": "世界第二高峰K2,一支业余登山队遭遇雪崩,却发现雪下埋藏着惊天秘密。",
        "cover": "./136.jpg",
        "url": "./videos/video-1786.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "红右手",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚、犯罪",
        "tags": [
            "邪教",
            "献祭",
            "左手画家",
            "人格分裂",
            "惊悚",
            "犯罪"
        ],
        "line": "一个只用左手的残疾画家搬进小镇,他发现镇民们每夜集会,跪拜一个长着红右手的怪物。",
        "cover": "./137.jpg",
        "url": "./videos/video-1787.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "翘课义勇军",
        "year": "2025",
        "region": "泰国",
        "type": "电影",
        "genre": "青春,喜剧,冒险",
        "tags": [
            "逃学",
            "友谊",
            "青少年问题",
            "青春",
            "喜剧",
            "冒险"
        ],
        "line": "期末考试当天,五个被老师放弃的“差生”集体翘课,却意外卷入一场揭露考试泄题案的冒险。",
        "cover": "./138.jpg",
        "url": "./videos/video-1788.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "雾人",
        "year": "2026",
        "region": "英国/爱尔兰",
        "type": "电视剧",
        "genre": "恐怖/悬疑/民俗",
        "tags": [
            "迷雾",
            "乡村",
            "邪教",
            "慢热",
            "恐怖",
            "悬疑"
        ],
        "line": "一个与世隔绝的村庄,每起浓雾时,会有一个“人”从雾中走来带走一个村民。",
        "cover": "./139.jpg",
        "url": "./videos/video-1789.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "与德莱尼夫妇约会",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚,悬疑",
        "tags": [
            "换妻游戏",
            "陷阱",
            "豪宅惊魂",
            "社会讽刺",
            "惊悚",
            "悬疑"
        ],
        "line": "一对年轻夫妻受邀参加富豪的换妻派对,却发现猎物其实是猎人。",
        "cover": "./140.jpg",
        "url": "./videos/video-1790.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "火海豪情",
        "year": "2019",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作,灾难,剧情",
        "tags": [
            "消防",
            "真实事件改编",
            "兄弟牺牲",
            "逆行者",
            "泪崩",
            "动作"
        ],
        "line": "一场港口爆炸后,一名即将退役的消防班长带领新兵冲入火场,却发现逃生地图印错了。",
        "cover": "./141.jpg",
        "url": "./videos/video-1791.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "高飞",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情、家庭、运动",
        "tags": [
            "滑板",
            "留守儿童",
            "父子和解",
            "小城少年",
            "剧情",
            "家庭"
        ],
        "line": "小镇问题少年为阻止父亲再婚,立下一个不可能完成的滑板赌约。",
        "cover": "./142.jpg",
        "url": "./videos/video-1792.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "疯女十八年",
        "year": "1988",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "剧情",
        "tags": [
            "乡土剧",
            "女性悲歌",
            "年代",
            "家庭",
            "苦难",
            "剧情"
        ],
        "line": "十八年前她被诬陷疯了关进阁楼,十八年后出来时全村人都老了,只有她还是十八岁那年的眼神。",
        "cover": "./143.jpg",
        "url": "./videos/video-1793.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "99分女朋友",
        "year": "2020",
        "region": "中国",
        "type": "电视剧",
        "genre": "浪漫爱情",
        "tags": [
            "强迫症",
            "甜宠",
            "会计职场",
            "反差萌",
            "浪漫爱情"
        ],
        "line": "她有严重强迫症,每一分钱都要对账,却被全公司最邋遢的设计师疯狂追求。",
        "cover": "./144.jpg",
        "url": "./videos/video-1794.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "弟弟也一起去吧",
        "year": "2023",
        "region": "日本",
        "type": "电视剧",
        "genre": "家庭,治愈",
        "tags": [
            "兄弟",
            "公路",
            "自闭症",
            "成长",
            "家庭",
            "治愈"
        ],
        "line": "哥哥被迫带着自闭症的弟弟自驾穿越日本,却发现弟弟眼中的世界比任何人都绚烂。",
        "cover": "./145.jpg",
        "url": "./videos/video-1795.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "奇迹舞社",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影/青春片",
        "genre": "青春/运动/励志",
        "tags": [
            "街舞",
            "轮椅舞者",
            "聋哑舞者",
            "地下赛事",
            "燃",
            "青春"
        ],
        "line": "一个瘫痪的前舞王,带着一个聋哑少年、一个自闭症少女,组队去参加全国街舞大赛,只为了证明“废柴也能跳舞”。",
        "cover": "./146.jpg",
        "url": "./videos/video-1796.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "尬电杀手",
        "year": "2024",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖喜剧",
        "tags": [
            "触电",
            "连环杀手",
            "社恐",
            "恐怖喜剧"
        ],
        "line": "一个社恐杀手拥有超能力:只要和人尴尬对视,对方就会触电身亡,但他爱上了唯一不怕他的女孩。",
        "cover": "./147.jpg",
        "url": "./videos/video-1797.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "妈妈,我想唱歌!",
        "year": "2025",
        "region": "中国内地",
        "type": "电影",
        "genre": "音乐/剧情",
        "tags": [
            "音乐",
            "母女",
            "梦想",
            "励志",
            "剧情"
        ],
        "line": "聋哑母亲的女儿天生是唱歌的料,母亲听不到女儿的声音,但她用手语说:“我看得见你的歌声。",
        "cover": "./148.jpg",
        "url": "./videos/video-1798.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "献给你的交响诗",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "音乐,剧情,治愈",
        "tags": [
            "自闭症",
            "天才指挥家",
            "师生情",
            "古典乐",
            "催泪",
            "音乐"
        ],
        "line": "一个患有自闭症的少年从未学过指挥,却能精准复现已故大师的所有交响诗,而他正是大师失散的儿子。",
        "cover": "./149.jpg",
        "url": "./videos/video-1799.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "命中注定我爱你",
        "year": "2024",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "爱情,喜剧",
        "tags": [
            "便利贴女孩",
            "霸总",
            "先婚后爱",
            "契约婚姻",
            "翻拍",
            "爱情"
        ],
        "line": "一次豪华游轮上的意外一夜情,让便利贴女孩和冷酷总裁被迫契约结婚,两人却越陷越深。",
        "cover": "./150.jpg",
        "url": "./videos/video-1800.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "在咖啡冷掉之前",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻,剧情",
        "tags": [
            "治愈",
            "时间旅行",
            "咖啡馆",
            "温情",
            "奇幻",
            "剧情"
        ],
        "line": "一家神秘咖啡馆里,只要在咖啡冷掉之前喝完,就能回到你想见的任何时候。",
        "cover": "./1.jpg",
        "url": "./videos/video-1801.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "忍者怪物",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖/动作/奇幻",
        "tags": [
            "战国忍者",
            "丧尸变种",
            "血腥打斗",
            "禁术",
            "恐怖",
            "动作"
        ],
        "line": "战国时代,一名落魄忍者盗取秘卷时误放被封印的怪物,一夜之间整座城都变成了会忍术的不死丧尸。",
        "cover": "./2.jpg",
        "url": "./videos/video-1802.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "猎艳狂魔",
        "year": "2001",
        "region": "西班牙",
        "type": "电影",
        "genre": "惊悚/悬疑/犯罪",
        "tags": [
            "连环杀手",
            "画家",
            "红绿色盲",
            "反转结局",
            "惊悚",
            "悬疑"
        ],
        "line": "警方追捕一名专杀红发女性的连环杀手,唯一的目击者却是一个红绿色盲画家,他看到的凶手“没有颜色”。",
        "cover": "./3.jpg",
        "url": "./videos/video-1803.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "预知死亡纪事",
        "year": "2024",
        "region": "拉美",
        "type": "剧集",
        "genre": "奇幻,惊悚",
        "tags": [
            "先知",
            "诅咒",
            "宿命",
            "小镇",
            "奇幻",
            "惊悚"
        ],
        "line": "一个小男孩天生能看到别人的死亡倒计时,他发现全镇人的计时器上,都写着同一个时间。",
        "cover": "./4.jpg",
        "url": "./videos/video-1804.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "青蛙王国",
        "year": "2013",
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "喜剧,冒险,奇幻",
        "tags": [
            "动物王国",
            "公主",
            "比武招亲",
            "环保",
            "励志",
            "喜剧"
        ],
        "line": "青蛙王国公主招亲比武之际,一只街头流浪蛙意外揭露了一场蛇族入侵的惊天阴谋。",
        "cover": "./5.jpg",
        "url": "./videos/video-1805.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "封神天下杨戬传",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影/动画",
        "genre": "动画、奇幻、动作",
        "tags": [
            "神话改编",
            "开天眼",
            "东方朋克",
            "兄妹虐恋",
            "动画",
            "奇幻"
        ],
        "line": "封神大劫三百年后,失去天眼的杨戬沦为赏金猎人,却意外接到追杀亲妹妹的终极任务。",
        "cover": "./6.jpg",
        "url": "./videos/video-1806.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "糟糕历史第六季",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "喜剧,历史",
        "tags": [
            "教育",
            "荒诞",
            "讽刺",
            "歌舞",
            "喜剧",
            "历史"
        ],
        "line": "第六季将镜头对准了冷战时期的荒诞日常,用一贯的屎尿屁风格解构了核恐慌、间谍热和太空竞赛。",
        "cover": "./7.jpg",
        "url": "./videos/video-1807.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "浴火重生",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "动作,复仇",
        "tags": [
            "硬核动作",
            "女性复仇",
            "火灾幸存",
            "以暴制暴",
            "动作",
            "复仇"
        ],
        "line": "一场火灾毁容的芭蕾舞者,花了十年把自己炼成杀人机器,逐一复仇当年锁上逃生门的每一个人。",
        "cover": "./8.jpg",
        "url": "./videos/video-1808.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "加油七条友",
        "year": "2018",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧、励志",
        "tags": [
            "兄弟情",
            "草根",
            "运动",
            "粤式幽默",
            "喜剧",
            "励志"
        ],
        "line": "七个一事无成的老友为了保住即将被拆迁的天台球场,挑战正规龙舟赛。",
        "cover": "./9.jpg",
        "url": "./videos/video-1809.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "反恐特警组:十万火急",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "动作,犯罪,惊悚",
        "tags": [
            "解救人质",
            "限时行动",
            "硬核枪战",
            "动作",
            "犯罪",
            "惊悚"
        ],
        "line": "一伙恐怖分子占领了跨海大桥,S.W.A.T.必须在两小时内解救数百名人质。",
        "cover": "./10.jpg",
        "url": "./videos/video-1810.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "从不关门的杜兰特餐厅",
        "year": "2022",
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情都市",
        "tags": [
            "深夜食堂",
            "餐厅",
            "单元剧",
            "人生百态",
            "治愈",
            "剧情都市"
        ],
        "line": "一家24小时营业的老牌餐厅,每晚都会迎来一位特殊的客人,而老板记得每一个人的故事。",
        "cover": "./11.jpg",
        "url": "./videos/video-1811.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "丧尸宇宙2:新血",
        "year": "2026",
        "region": "韩国",
        "type": "剧集",
        "genre": "动作/惊悚/科幻",
        "tags": [
            "丧尸进化",
            "抗体",
            "青少年",
            "末日学校",
            "动作",
            "惊悚"
        ],
        "line": "丧尸病毒爆发十年后,一群携带“新血”抗体的青少年被秘密送进一所变异的末日高中。",
        "cover": "./12.jpg",
        "url": "./videos/video-1812.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "被遗忘的爱",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "剧情,爱情,悬疑",
        "tags": [
            "失忆",
            "寻回记忆",
            "情感纠葛",
            "文艺",
            "催泪",
            "剧情"
        ],
        "line": "一场车祸让她忘了最爱的人,却记得害死她母亲的凶手。",
        "cover": "./13.jpg",
        "url": "./videos/video-1813.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "外来媳妇本地郎7",
        "year": "2027",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧,家庭,情景剧",
        "tags": [
            "地域文化",
            "婆媳关系",
            "粤语喜剧",
            "老IP新生",
            "喜剧",
            "家庭"
        ],
        "line": "康家老宅拆迁后搬入现代小区,新邻居们带来了比西关大屋更复杂的文化碰撞。",
        "cover": "./14.jpg",
        "url": "./videos/video-1814.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "新蜀山剑侠传",
        "year": "2026",
        "region": "中国香港/中国大陆",
        "type": "网络剧",
        "genre": "仙侠/奇幻",
        "tags": [
            "修仙",
            "蜀山",
            "正邪之战",
            "多角恋",
            "仙侠",
            "奇幻"
        ],
        "line": "当血魔重现江湖,蜀山派内忧外患,一位背着棺材的神秘少年成了唯一的希望。",
        "cover": "./15.jpg",
        "url": "./videos/video-1815.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "太空战士",
        "year": "2024",
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "科幻、冒险、动作",
        "tags": [
            "机甲",
            "近未来",
            "星际殖民",
            "兄弟情",
            "科幻",
            "冒险"
        ],
        "line": "2045年,地球资源枯竭,一群被判流放的年轻囚犯成为人类最后的星际开拓者。",
        "cover": "./16.jpg",
        "url": "./videos/video-1816.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "风流小姨",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,情色,伦理",
        "tags": [
            "身份误认",
            "家族闹剧",
            "港式咸湿",
            "情感纠葛",
            "喜剧",
            "情色"
        ],
        "line": "保守人妻的妹妹突然来访,用“开放”的人生哲学搅乱了姐夫一家的平静生活。",
        "cover": "./17.jpg",
        "url": "./videos/video-1817.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "卡祖扎:时间永不停止",
        "year": "2025",
        "region": "南非",
        "type": "电影",
        "genre": "科幻,剧情,悬疑",
        "tags": [
            "循环一日",
            "非洲未来主义",
            "祖鲁文化",
            "哲学",
            "科幻",
            "剧情"
        ],
        "line": "一位南非程序员发现自己被困在“父亲节”这一天,他必须修复与已故父亲的代码,才能打破时间的牢笼。",
        "cover": "./18.jpg",
        "url": "./videos/video-1818.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "公民责任",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/惊悚",
        "tags": [
            "陪审团",
            "道德困境",
            "独狼行动",
            "剧情",
            "惊悚"
        ],
        "line": "一名普通社区保安发现自己的DNA与连环爆炸案证据吻合,他必须在警方追捕前亲自揪出真凶。",
        "cover": "./19.jpg",
        "url": "./videos/video-1819.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "梦影留声",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情,奇幻,剧情",
        "tags": [
            "黑胶唱片",
            "穿越时空",
            "电台",
            "旧梦",
            "爱情",
            "奇幻"
        ],
        "line": "他在旧货店买了一张黑胶唱片,放出来的却是未来女友在灾难前发来的求救声。",
        "cover": "./20.jpg",
        "url": "./videos/video-1820.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "传奇剧院阿波罗",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "纪录片/音乐",
        "tags": [
            "音乐史",
            "黑人文化",
            "剧场",
            "群星",
            "社会变革",
            "纪录片"
        ],
        "line": "一部关于纽约哈莱姆区阿波罗剧院历史的纪录片,追溯它从种族隔离时代的杂耍剧场,成为美国流行文化心脏的传奇历程。",
        "cover": "./21.jpg",
        "url": "./videos/video-1821.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "迷茫管家与懦弱的我",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧,校园,爱情",
        "tags": [
            "真人漫改",
            "女扮男装",
            "反差萌",
            "青春",
            "爆笑",
            "喜剧"
        ],
        "line": "患有“女性恐惧症”的怯懦高中生近卫优人,发现了校内人气男神管家竟然是女生,从此被卷入了帮其保守秘密的爆笑日常。",
        "cover": "./22.jpg",
        "url": "./videos/video-1822.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "为父寻仇",
        "year": "2026",
        "region": "印度",
        "type": "电影",
        "genre": "动作/复仇/犯罪",
        "tags": [
            "义父",
            "复仇",
            "动作爽片",
            "反转",
            "亲情",
            "动作"
        ],
        "line": "五个被收养的孤儿为了给死去的义父报仇,对上庞大的军火集团,却意外发现义父才是真正的首脑。",
        "cover": "./23.jpg",
        "url": "./videos/video-1823.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "神鬼大都会",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻、惊悚、动作",
        "tags": [
            "都市传说",
            "黑魔法",
            "金融诡计",
            "反乌托邦",
            "奇幻",
            "惊悚"
        ],
        "line": "纽约地下金融神殿中,一名失业建筑师发现资本之神正用活人灵魂铸造“财富圣杯”。",
        "cover": "./24.jpg",
        "url": "./videos/video-1824.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "谎言之谷国语",
        "year": "2024",
        "region": "中国大陆",
        "type": "TV Series",
        "genre": "悬疑/刑侦",
        "tags": [
            "卧底",
            "心理战",
            "全员恶人",
            "悬疑",
            "刑侦"
        ],
        "line": "为了寻找失踪的未婚妻,刑警江辰潜入一个从不和外界说真话的山谷小镇。",
        "cover": "./25.jpg",
        "url": "./videos/video-1825.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "泰版我可能不会爱你国语",
        "year": "2023",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情,剧情",
        "tags": [
            "日久生情",
            "错过",
            "闺蜜变恋人",
            "翻拍",
            "爱情",
            "剧情"
        ],
        "line": "当“好朋友”的伪装在婚礼前夕被撕破,他们才发现十年的默契原来是深爱。",
        "cover": "./26.jpg",
        "url": "./videos/video-1826.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "单车少年之死",
        "year": "2024",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "少年犯罪",
            "谎言",
            "社会边缘",
            "冷峻叙事",
            "剧情",
            "悬疑"
        ],
        "line": "十五岁的单车快递员阿里坠桥身亡,警方定性为意外,但他最好的朋友却在日记里发现了四个字:他杀的。",
        "cover": "./27.jpg",
        "url": "./videos/video-1827.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "奥古姆护身符",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "冒险/悬疑",
        "tags": [
            "考古",
            "诅咒",
            "解密",
            "历史",
            "冒险",
            "悬疑"
        ],
        "line": "一名大英博物馆的实习生发现一块不起眼的泥板,竟然是打开亚历山大大帝墓穴的“活地图”。",
        "cover": "./28.jpg",
        "url": "./videos/video-1828.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "义大利之旅",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情/喜剧/公路",
        "tags": [
            "父子",
            "意大利",
            "遗产",
            "代沟",
            "自驾",
            "剧情"
        ],
        "line": "一对关系破裂的父子,为了继承一辆停在意大利的老爷车,不得不开始一场荒诞的公路之旅。",
        "cover": "./29.jpg",
        "url": "./videos/video-1829.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "悠然见南山",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,公路,文艺",
        "tags": [
            "隐居",
            "种田",
            "治愈",
            "返乡",
            "剧情",
            "公路"
        ],
        "line": "卷不动的大厂总监去终南山隐居,结果发现这里全是和他一样来逃避的“现代隐士”。",
        "cover": "./30.jpg",
        "url": "./videos/video-1830.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "野鸭变凤凰",
        "year": "1992",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/家庭/运动",
        "tags": [
            "冰球",
            "励志",
            "熊孩子",
            "喜剧",
            "家庭",
            "运动"
        ],
        "line": "一个自负的律师被罚去社区执教一支由菜鸟小学生组成的冰球队,他必须用奇招让他们打败冠军强队。",
        "cover": "./31.jpg",
        "url": "./videos/video-1831.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "微光湖",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "奇幻/爱情",
        "tags": [
            "治愈",
            "时间循环",
            "湖畔",
            "遗憾",
            "奇幻",
            "爱情"
        ],
        "line": "每到夏至,失意的画家总能在微光湖畔看到十年前失踪的恋人,但天亮后一切都会重置。",
        "cover": "./32.jpg",
        "url": "./videos/video-1832.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "厨师杰克冒险记",
        "year": "2025",
        "region": "英国",
        "type": "动画电影",
        "genre": "动画,冒险,喜剧",
        "tags": [
            "美食",
            "厨师",
            "奇幻食材",
            "拯救世界",
            "动画",
            "冒险"
        ],
        "line": "米其林大厨意外穿越到美食魔法世界,为了回家,他必须用地球厨艺击败黑暗料理军团。",
        "cover": "./33.jpg",
        "url": "./videos/video-1833.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "你是我的眼",
        "year": "2026",
        "region": "中国香港/中国大陆",
        "type": "电影",
        "genre": "剧情/家庭/温情",
        "tags": [
            "盲人",
            "导盲犬",
            "拆迁",
            "父女",
            "剧情",
            "家庭"
        ],
        "line": "一个失明多年的调琴师,决定起诉开发商强拆他的老房子,而他的导盲犬是唯一目击证人。",
        "cover": "./34.jpg",
        "url": "./videos/video-1834.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "童心",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情/奇幻",
        "tags": [
            "老人",
            "返老还童",
            "遗忘",
            "治愈",
            "剧情",
            "奇幻"
        ],
        "line": "一位患有阿尔茨海默症的老人,每天都会忘记自己已经80岁,坚信自己只有8岁。",
        "cover": "./35.jpg",
        "url": "./videos/video-1835.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "五个醒觉的少年粤语",
        "year": "1991",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情,青春",
        "tags": [
            "成长",
            "问题少年",
            "社工",
            "励志",
            "剧情",
            "青春"
        ],
        "line": "五个被社会遗弃的问题少年,在一次野外生存训练中遭遇山洪,被迫团结求生。",
        "cover": "./36.jpg",
        "url": "./videos/video-1836.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "白色强人2粤语",
        "year": "2024",
        "region": "中国香港",
        "type": "剧集",
        "genre": "医疗/剧情",
        "tags": [
            "医疗改革",
            "权力斗争",
            "急诊室",
            "粤语原声",
            "医疗",
            "剧情"
        ],
        "line": "明成北医院权力洗牌,三位性格迥异的“白衣强人”在救人与夺权之间极限拉扯。",
        "cover": "./37.jpg",
        "url": "./videos/video-1837.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "酒绿花红",
        "year": "2024",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情悬疑",
        "tags": [
            "夜总会",
            "怀旧",
            "女性群像",
            "黑帮",
            "剧情悬疑"
        ],
        "line": "八十年代香港最大夜总会的后台,四位舞小姐在灯红酒绿之下,编织着一张关于复仇与逃离的巨网。",
        "cover": "./38.jpg",
        "url": "./videos/video-1838.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "限制级100岁",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧,科幻,伦理",
        "tags": [
            "老龄化",
            "老年性爱",
            "乌托邦反讽",
            "荒诞",
            "黑色幽默",
            "喜剧"
        ],
        "line": "政府颁布《百年长寿法案》:年满100岁的公民可以合法观看和参与任何限制级内容。",
        "cover": "./39.jpg",
        "url": "./videos/video-1839.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "杀戮兵器",
        "year": "2007",
        "region": "美国",
        "type": "电影",
        "genre": "动作,科幻",
        "tags": [
            "改造人",
            "失忆",
            "阴谋",
            "特工",
            "血腥",
            "动作"
        ],
        "line": "一名失去记忆的改造人士兵从实验室醒来,发现所有追杀他的人用的都是自己的旧代码。",
        "cover": "./40.jpg",
        "url": "./videos/video-1840.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "青春月谭",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "爱情、奇幻、青春",
        "tags": [
            "时间循环",
            "校园",
            "遗憾",
            "成长",
            "爱情",
            "奇幻"
        ],
        "line": "高三女孩在毕业典礼当天遭遇意外,醒来后发现永远困在了“昨天”。",
        "cover": "./41.jpg",
        "url": "./videos/video-1841.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "两傻大战化身博士",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/恐怖/科幻",
        "tags": [
            "蠢蛋二人组",
            "经典重拍",
            "变身药剂",
            "恶搞",
            "喜剧",
            "恐怖"
        ],
        "line": "两个笨贼偷实验室时不小心喝下海德变体药剂,白天是怂包,一到夜里就变成肌肉怪力狂人。",
        "cover": "./42.jpg",
        "url": "./videos/video-1842.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "卷发苏",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "浪漫喜剧",
        "tags": [
            "发型师",
            "都市爱情",
            "假发",
            "身份互换",
            "治愈",
            "浪漫喜剧"
        ],
        "line": "一个天生卷发到自卑的女生,戴直发假脸活成了都市精英,直到假发被风吹走。",
        "cover": "./43.jpg",
        "url": "./videos/video-1843.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "销魂女司机",
        "year": "1993",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/情色",
        "tags": [
            "奇情",
            "社会底层",
            "情欲纠葛",
            "剧情",
            "情色"
        ],
        "line": "一名夜班的士女司机,每晚搭载形形色色的乘客,也在车窗后窥视着都市的欲望与罪恶。",
        "cover": "./44.jpg",
        "url": "./videos/video-1844.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "自君别后",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "爱情,奇幻",
        "tags": [
            "时空通信",
            "遗书",
            "催泪",
            "疗愈",
            "爱情",
            "奇幻"
        ],
        "line": "丈夫去世一年后,妻子意外收到了他生前从过去发来的邮件,两人开始了一段跨越时空的通信。",
        "cover": "./45.jpg",
        "url": "./videos/video-1845.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "特务一一七",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "动作、谍战、喜剧",
        "tags": [
            "王牌特工",
            "黑色幽默",
            "菜鸟逆袭",
            "高科技装备",
            "动作",
            "谍战"
        ],
        "line": "史上最废柴的会计被误认为王牌特工“一一七”,被迫前往黑帮老巢拯救真正的探员。",
        "cover": "./46.jpg",
        "url": "./videos/video-1846.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "指环王:王者归来",
        "year": "2003",
        "region": "美国/新西兰",
        "type": "电影",
        "genre": "奇幻/冒险",
        "tags": [
            "史诗",
            "终极决战",
            "弗罗多",
            "阿拉贡",
            "刚铎",
            "奇幻"
        ],
        "line": "魔戒远征队兵分两路,弗罗多直抵末日火山,阿拉贡集结亡灵大军,为中土世界的最后希望而战。",
        "cover": "./47.jpg",
        "url": "./videos/video-1847.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "江上妖姬",
        "year": "1999",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,奇幻,戏曲",
        "tags": [
            "三峡",
            "民歌",
            "人鬼情未了",
            "船工",
            "爱情",
            "奇幻"
        ],
        "line": "三峡老船工在险滩救起一名红衣女子,却发现她是百年前因唱情歌被沉江的冤魂。",
        "cover": "./48.jpg",
        "url": "./videos/video-1848.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "冒牌的伯爵",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "喜剧/犯罪",
        "tags": [
            "诈骗",
            "贵族",
            "黑色幽默",
            "喜剧",
            "犯罪"
        ],
        "line": "一个破产的脱口秀演员冒充失散多年的匈牙利伯爵,成功混入英国上流社会,却发现真正的伯爵正在看着他的直播。",
        "cover": "./49.jpg",
        "url": "./videos/video-1849.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "致命郎心",
        "year": "2025",
        "region": "中国台湾/美国",
        "type": "剧集",
        "genre": "爱情/惊悚/悬疑",
        "tags": [
            "病娇",
            "骗局",
            "多重身份",
            "反PUA",
            "爱情",
            "惊悚"
        ],
        "line": "完美男友温柔体贴,但每次他睡着时,房间里都会响起一段倒计时的声音。",
        "cover": "./50.jpg",
        "url": "./videos/video-1850.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "切罗基大街的房子",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑、恐怖、剧情",
        "tags": [
            "鬼屋",
            "家族秘密",
            "种族历史",
            "心理惊悚",
            "悬疑",
            "恐怖"
        ],
        "line": "一个白人家庭搬进一栋美丽的古董别墅,却不断遭遇灵异事件,他们发现这栋房子的地下,埋藏着一个有关切罗基人血泪史的残酷秘密。",
        "cover": "./51.jpg",
        "url": "./videos/video-1851.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "一本好书",
        "year": "2018",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情/文化",
        "tags": [
            "书籍演绎",
            "舞台剧",
            "文化综艺",
            "沉浸式阅读",
            "剧情",
            "文化"
        ],
        "line": "一档将经典文学名著改编成舞台剧的文化节目,每期一本书,每本书即一个完整世界。",
        "cover": "./52.jpg",
        "url": "./videos/video-1852.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "林肯律师第三季",
        "year": "2025",
        "region": "美国",
        "type": "电视剧",
        "genre": "律政/犯罪/悬疑",
        "tags": [
            "法庭对抗",
            "道德灰色",
            "洛杉矶黑帮",
            "证人反转",
            "车库律所",
            "律政"
        ],
        "line": "米奇·哈勒接了一起看似简单的偷窃案,却意外掀翻了整个洛杉矶地下司法黑市。",
        "cover": "./53.jpg",
        "url": "./videos/video-1853.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "龙牌之谜",
        "year": "2024",
        "region": "俄罗斯/中国大陆",
        "type": "电影",
        "genre": "奇幻/动作/冒险",
        "tags": [
            "龙",
            "魔法",
            "东方",
            "蒸汽朋克",
            "探险",
            "奇幻"
        ],
        "line": "为了寻找能唤回春日的龙牌,一名沙俄浪人与中国女飞贼穿越了由齿轮驱动的长城。",
        "cover": "./54.jpg",
        "url": "./videos/video-1854.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "严禁嘴对嘴",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "浪漫,喜剧",
        "tags": [
            "吸血鬼",
            "契约恋爱",
            "高中",
            "反差萌",
            "浪漫",
            "喜剧"
        ],
        "line": "活了几百年的高冷吸血鬼,为了隐藏身份,必须和学校里的热血少女签订“禁止接吻”的恋爱契约。",
        "cover": "./55.jpg",
        "url": "./videos/video-1855.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "罪之缘",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑,犯罪",
        "tags": [
            "顶罪",
            "赎罪",
            "亲情",
            "法理",
            "悬疑",
            "犯罪"
        ],
        "line": "弟弟替哥哥顶罪入狱,十年后出狱却发现哥哥成了大善人,而那起命案的真凶另有其人。",
        "cover": "./56.jpg",
        "url": "./videos/video-1856.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "生日乐园",
        "year": "2022",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻/治愈",
        "tags": [
            "生日",
            "地下世界",
            "成长",
            "想象力",
            "奇幻",
            "治愈"
        ],
        "line": "胆小的小学生在生日当天收到了已故爷爷的礼物:一把能打开地下世界入口的神秘钥匙。",
        "cover": "./57.jpg",
        "url": "./videos/video-1857.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "空军艳史",
        "year": "1952",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/爱情/歌舞",
        "tags": [
            "军营",
            "浪漫喜剧",
            "三角恋",
            "黄金时代",
            "喜剧",
            "爱情"
        ],
        "line": "二战美军基地里,三个飞行学员爱上同一个女人,而她正是基地司令的女儿。",
        "cover": "./58.jpg",
        "url": "./videos/video-1858.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "茜茜皇后",
        "year": "2022",
        "region": "奥地利/德国",
        "type": "电视剧",
        "genre": "历史/传记",
        "tags": [
            "宫廷反叛",
            "女性觉醒",
            "皇室悲剧",
            "美丽代价",
            "历史",
            "传记"
        ],
        "line": "她不是童话公主,而是被宫廷和母亲一起囚禁的叛逆者,每一根头发都不属于自己。",
        "cover": "./59.jpg",
        "url": "./videos/video-1859.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "爱斯基摩飞人",
        "year": "2025",
        "region": "加拿大",
        "type": "电影",
        "genre": "剧情,运动,励志",
        "tags": [
            "北极圈",
            "冬奥会",
            "飞镖滑雪",
            "剧情",
            "运动",
            "励志"
        ],
        "line": "一位北极圈内的因纽特少年,将传统飞镖投掷与滑雪结合,立志打破冬奥会的边界。",
        "cover": "./60.jpg",
        "url": "./videos/video-1860.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "七人魔法使",
        "year": "2023",
        "region": "日本",
        "type": "TV 动画",
        "genre": "奇幻,战斗,校园",
        "tags": [
            "魔法",
            "后宫",
            "学生会",
            "异世界",
            "咒语",
            "奇幻"
        ],
        "line": "七位被选中的魔法使必须放下恩怨,联手封印即将吞噬现实世界的“虚无之书”。",
        "cover": "./61.jpg",
        "url": "./videos/video-1861.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "战争大秘密",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/悬疑/战争",
        "tags": [
            "二战",
            "解密",
            "家庭秘密",
            "历史创伤",
            "剧情",
            "悬疑"
        ],
        "line": "一个安静的乡村阁楼里,孙女偶然发现祖父的“战争英雄”勋章背后,藏着一个足以颠覆历史的录音带。",
        "cover": "./62.jpg",
        "url": "./videos/video-1862.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "欲望熊市3",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,同性",
        "tags": [
            "同志",
            "熊族",
            "喜剧",
            "小镇",
            "同性"
        ],
        "line": "为了挽救面临拆迁的“熊吧”,一群胖熊叔叔决定联合小镇上的妇女和“仙女”,举办一场史无前例的“乡村变装秀”。",
        "cover": "./63.jpg",
        "url": "./videos/video-1863.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "身处困境",
        "year": "2024",
        "region": "英国",
        "type": "电视剧",
        "genre": "悬疑、心理",
        "tags": [
            "密室",
            "生存",
            "心理博弈",
            "职场",
            "悬疑",
            "心理"
        ],
        "line": "五名公司高层被困电梯,求生游戏变成互相揭发罪行。",
        "cover": "./64.jpg",
        "url": "./videos/video-1864.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "续姿三四郎",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "动作,体育,历史",
        "tags": [
            "柔道",
            "昭和风云",
            "武士道精神",
            "战后重建",
            "动作",
            "体育"
        ],
        "line": "二战结束后,老去的柔道家姿三四郎重出江湖,对抗占领军带来的西洋摔跤文化入侵。",
        "cover": "./65.jpg",
        "url": "./videos/video-1865.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "开心巨无霸",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/动作/合家欢",
        "tags": [
            "摔角手",
            "快餐店",
            "乌龙反派",
            "肥仔英雄",
            "喜剧",
            "动作"
        ],
        "line": "退役摔角手在快餐店打工,被五位菜鸟劫匪误认为“世界最强安保”而引发的爆笑乌龙。",
        "cover": "./66.jpg",
        "url": "./videos/video-1866.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "解谎侦探少女",
        "year": "2023",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑,推理",
        "tags": [
            "超能力",
            "少女漫改",
            "单元剧",
            "治愈",
            "悬疑",
            "推理"
        ],
        "line": "拥有能听见谎言灵感的少女,与落魄的私家侦探组成搭档,破解都市中的虚伪面具。",
        "cover": "./67.jpg",
        "url": "./videos/video-1867.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "上帝的喜剧",
        "year": "2023",
        "region": "葡萄牙",
        "type": "电影",
        "genre": "哲学喜剧",
        "tags": [
            "荒诞",
            "存在主义",
            "独白",
            "哲学喜剧"
        ],
        "line": "一名自称“上帝”的冰淇淋推销员试图通过免费派发甜筒来拯救绝望的人类,却引发了全城糖尿病危机。",
        "cover": "./68.jpg",
        "url": "./videos/video-1868.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "第三个妈妈",
        "year": "2025",
        "region": "香港,泰国",
        "type": "电影",
        "genre": "恐怖,民俗",
        "tags": [
            "灵童",
            "降头",
            "伦理",
            "恐怖",
            "民俗"
        ],
        "line": "小女孩总是对着空气喊“第三个妈妈”,直到当晚,她的两个养母同时暴毙。",
        "cover": "./69.jpg",
        "url": "./videos/video-1869.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "洛奇3国语",
        "year": "1982",
        "region": "美国",
        "type": "电影/重映配音版",
        "genre": "剧情/体育",
        "tags": [
            "经典重配",
            "热血",
            "永不言败",
            "剧情",
            "体育"
        ],
        "line": "洛奇卫冕成功后遭遇更强悍的新人挑战,恩师猝死让他彻底迷失,必须重新找回“眼睛里的野兽”。",
        "cover": "./70.jpg",
        "url": "./videos/video-1870.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "荡寇新传",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作、历史、喜剧",
        "tags": [
            "明朝",
            "戚继光",
            "穿越",
            "无厘头",
            "动作",
            "历史"
        ],
        "line": "一个现代游戏策划师穿越到明朝倭寇之乱中,只能用游戏策划的思路帮戚家军打胜仗。",
        "cover": "./71.jpg",
        "url": "./videos/video-1871.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "诡影实录",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖伪纪录片",
        "tags": [
            "伪纪录片",
            "都市传说",
            "邪教",
            "第一视角",
            "惊吓",
            "恐怖伪纪录片"
        ],
        "line": "网红主播探灵废弃精神病院,直播镜头无意间拍到了不该存在的东西。",
        "cover": "./72.jpg",
        "url": "./videos/video-1872.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "骨肉的总和",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻伦理",
        "tags": [
            "器官克隆",
            "身份认同",
            "母女",
            "科幻伦理"
        ],
        "line": "一名为自己克隆器官的女子,却在手术前夕发现克隆人已觉醒出独立意识。",
        "cover": "./73.jpg",
        "url": "./videos/video-1873.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "优皮干探粤语",
        "year": "2023",
        "region": "中国香港",
        "type": "剧集",
        "genre": "警匪、悬疑",
        "tags": [
            "精英警队",
            "中产罪案",
            "心理博弈",
            "粤语",
            "都市传说",
            "警匪"
        ],
        "line": "一群高学历精英警察专破高智商罪案,却发现最大的敌人是他们的大学心理学教授。",
        "cover": "./74.jpg",
        "url": "./videos/video-1874.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "月亮下去了",
        "year": "2008",
        "region": "挪威",
        "type": "电影",
        "genre": "科幻/灾难",
        "tags": [
            "极夜末日",
            "月球坠落",
            "生存惊悚",
            "科幻",
            "灾难"
        ],
        "line": "月球被未知引力拖向地球,北欧进入永夜,一名孕妇必须在完全黑暗的环境中生下孩子。",
        "cover": "./75.jpg",
        "url": "./videos/video-1875.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "喵喵博物馆",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧/犯罪/冒险",
        "tags": [
            "猫咪",
            "盗宝",
            "英式幽默",
            "喜剧",
            "犯罪",
            "冒险"
        ],
        "line": "一伙笨贼计划盗取大英博物馆的猫木乃伊,却遭到了全伦敦流浪猫的阻击。",
        "cover": "./76.jpg",
        "url": "./videos/video-1876.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "恶魔娃娃2",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "邪典",
            "玩偶",
            "血腥",
            "恐怖",
            "惊悚"
        ],
        "line": "距离第一起屠杀过去五年,幸存的女孩把邪恶娃娃的脑袋当花盆,却浇出了更多的恶魔。",
        "cover": "./77.jpg",
        "url": "./videos/video-1877.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "马姆洛克教授",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情/悬疑/校园",
        "tags": [
            "文学",
            "谜题",
            "师生",
            "黑暗秘密",
            "哥特",
            "剧情"
        ],
        "line": "大学里最古怪的文学教授,每一堂课都是破解真实谋杀案的线索,而凶手就在学生中间。",
        "cover": "./78.jpg",
        "url": "./videos/video-1878.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "窈窕主妇",
        "year": "2015",
        "region": "韩国",
        "type": "剧集",
        "genre": "家庭/喜剧/悬疑",
        "tags": [
            "主妇",
            "双重身份",
            "社区秘密",
            "女性",
            "家庭",
            "喜剧"
        ],
        "line": "江南区完美主妇的真实身份是退隐女特工,小区业主委员会的权力斗争远比恐怖袭击更凶险。",
        "cover": "./79.jpg",
        "url": "./videos/video-1879.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "杀人狂魔的故事",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪,剧情,传记",
        "tags": [
            "真实案件改编",
            "心理剖析",
            "年代跨度大",
            "犯罪",
            "剧情",
            "传记"
        ],
        "line": "从一个婴儿被遗弃开始,追溯美国最著名连环杀手长达三十年的犯罪演变史。",
        "cover": "./80.jpg",
        "url": "./videos/video-1880.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "中日南北和粤语",
        "year": "1988",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,动作",
        "tags": [
            "香港新浪潮",
            "跨文化冲突",
            "乌龙探案",
            "粤语经典",
            "喜剧",
            "动作"
        ],
        "line": "一名日本女刑警来港追查伪钞集团,却被迫与三名南腔北调的香港小市民搭档。",
        "cover": "./81.jpg",
        "url": "./videos/video-1881.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "幸运女神与倒霉蛋",
        "year": "2025",
        "region": "美国/英国",
        "type": "电影",
        "genre": "喜剧,爱情,奇幻",
        "tags": [
            "运气",
            "反向",
            "欢喜冤家",
            "治愈",
            "喜剧",
            "爱情"
        ],
        "line": "一个霉运缠身的男人,遇到了一个运气爆棚的女人,两人的命运开始互相抵消。",
        "cover": "./82.jpg",
        "url": "./videos/video-1882.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "火海追魂记",
        "year": "2024",
        "region": "美国",
        "type": "电视剧",
        "genre": "动作、犯罪、消防",
        "tags": [
            "极限救援",
            "悬疑纵火",
            "硬汉柔情",
            "快节奏",
            "动作",
            "犯罪"
        ],
        "line": "一名被开除的前纵火案调查员,为了洗刷冤屈,不得不穿梭在全城连环大火中追踪真凶。",
        "cover": "./83.jpg",
        "url": "./videos/video-1883.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "旧情棉棉",
        "year": "2023",
        "region": "中国",
        "type": "电影",
        "genre": "剧情/家庭",
        "tags": [
            "棉纺厂",
            "下岗潮",
            "初恋",
            "老年爱情",
            "时代创伤",
            "剧情"
        ],
        "line": "四十年后,在倒闭的棉纺厂仓库里,两鬓斑白的她找到了他当年藏进棉包里的情书。",
        "cover": "./84.jpg",
        "url": "./videos/video-1884.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "吸血鬼不死",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "喜剧,恐怖,奇幻",
        "tags": [
            "吸血鬼",
            "荒诞",
            "现代生活",
            "合租",
            "黑色幽默",
            "喜剧"
        ],
        "line": "三个来自不同世纪的吸血鬼合租在伦敦一套公寓里,他们需要面对房东查寝、外卖员和永生带来的精神内耗。",
        "cover": "./85.jpg",
        "url": "./videos/video-1885.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "美丽密令",
        "year": "2010",
        "region": "中国香港/中国大陆",
        "type": "电影",
        "genre": "喜剧/动作",
        "tags": [
            "卧底",
            "选美",
            "港式无厘头",
            "王晶",
            "喜剧",
            "动作"
        ],
        "line": "女警阿Sa参加“美丽小姐”选美比赛卧底,不仅要抓罪犯,还要和不许她赢的“内定冠军”富家女斗智斗勇。",
        "cover": "./86.jpg",
        "url": "./videos/video-1886.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "酷盖爸爸2",
        "year": "2026",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "家庭,喜剧,同性",
        "tags": [
            "同志家庭",
            "育儿",
            "亲子关系",
            "社会议题",
            "温馨喜剧",
            "家庭"
        ],
        "line": "两个奶爸送女儿上幼儿园的第一天,发现自己才是那个需要“入学适应”的人。",
        "cover": "./87.jpg",
        "url": "./videos/video-1887.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "我不在这儿",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/科幻",
        "tags": [
            "量子",
            "记忆",
            "存在主义",
            "剧情",
            "科幻"
        ],
        "line": "一个能短暂消失的人,发现自己消失时才是唯一被爱的时刻。",
        "cover": "./88.jpg",
        "url": "./videos/video-1888.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "移动城市",
        "year": "2018",
        "region": "美国/新西兰",
        "type": "电影",
        "genre": "科幻/冒险",
        "tags": [
            "蒸汽朋克 牵引城市 反乌托邦 改编 视觉奇观",
            "科幻",
            "冒险"
        ],
        "line": "在“牵引时代”,巨大的移动城市吞噬小城市,一个来自采矿小镇的女孩成了改变世界的关键。",
        "cover": "./89.jpg",
        "url": "./videos/video-1889.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "首选列表",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情/悬疑",
        "tags": [
            "精英教育",
            "谋杀",
            "阶层",
            "剧情",
            "悬疑"
        ],
        "line": "常春藤名校的备选名单上,每消失一个名字,现实中就死一个人。",
        "cover": "./90.jpg",
        "url": "./videos/video-1890.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "要命不要钱",
        "year": "2023",
        "region": "中国",
        "type": "电影",
        "genre": "喜剧,犯罪,黑色幽默",
        "tags": [
            "绑架",
            "误打误撞",
            "小人物",
            "金钱",
            "荒诞",
            "喜剧"
        ],
        "line": "三个穷鬼绑架富二代,却发现对方身上只有两毛钱。",
        "cover": "./91.jpg",
        "url": "./videos/video-1891.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "大凶2020",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖、惊悚、民俗",
        "tags": [
            "风水",
            "回南天",
            "凶宅",
            "降头",
            "双胞胎",
            "恐怖"
        ],
        "line": "2020年回南天,一栋香港老楼的住户相继自杀,风水师发现整栋楼被人布成了“噬魂局”。",
        "cover": "./92.jpg",
        "url": "./videos/video-1892.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "40岁开始",
        "year": "2022",
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情,爱情,喜剧",
        "tags": [
            "熟年恋爱",
            "人生重启",
            "事业女性",
            "姐弟恋",
            "治愈",
            "剧情"
        ],
        "line": "40岁的单身杂志主编,在失去一切后,被一名24岁的前牛郎“骗”去重新学习如何生活和恋爱。",
        "cover": "./93.jpg",
        "url": "./videos/video-1893.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "幽灵肖像",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "恐怖、悬疑、家庭",
        "tags": [
            "鬼魂摄影",
            "家族诅咒",
            "遗像诡秘",
            "台式恐怖",
            "恐怖",
            "悬疑"
        ],
        "line": "一位摄影师发现,他为死者拍摄的遗像中,死者的眼睛会在照片中慢慢睁开,而且越睁越大。",
        "cover": "./94.jpg",
        "url": "./videos/video-1894.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "剑花烟雨江南粤语",
        "year": "1977",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作",
        "tags": [
            "武侠",
            "经典",
            "邵氏",
            "动作"
        ],
        "line": "江南雷家堡一夜灭门,独子雷少峰冒死返回,发现杀人者用的竟是自家失传的“烟雨剑法”。",
        "cover": "./95.jpg",
        "url": "./videos/video-1895.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "醒木",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖/民俗/惊悚",
        "tags": [
            "评书先生",
            "醒木法器",
            "恶灵封印",
            "说书杀人",
            "声波驱魔",
            "恐怖"
        ],
        "line": "茶馆说书先生的一块祖传醒木,每次拍下就能让听书人“入梦”,直到他拍醒了沉睡百年的恶灵。",
        "cover": "./96.jpg",
        "url": "./videos/video-1896.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "哈啦美容院",
        "year": "2016",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "喜剧/家庭",
        "tags": [
            "乡土剧",
            "女性创业",
            "邻里温情",
            "喜剧",
            "家庭"
        ],
        "line": "为了不被拆迁,台南小镇上一家老旧美容院的老板娘们,决定用最浮夸的发型和最八卦的嘴炮对抗开发商。",
        "cover": "./97.jpg",
        "url": "./videos/video-1897.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "日落荒城",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "西部/悬疑",
        "tags": [
            "西部",
            "荒城",
            "悬疑",
            "枪战"
        ],
        "line": "沙漠深处的荒城里,七个陌生人同时醒来,不记得自己是谁,只记得日落之前必须杀死另一个人。",
        "cover": "./98.jpg",
        "url": "./videos/video-1898.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "宝贝我最型",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/家庭",
        "tags": [
            "萌娃",
            "选秀",
            "亲子关系",
            "反内卷",
            "喜剧",
            "家庭"
        ],
        "line": "一群望子成龙的家长把婴儿送进“最萌宝贝”选秀,没想到宝宝们自己组了支摇滚乐队。",
        "cover": "./99.jpg",
        "url": "./videos/video-1899.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "法医朝颜 2022特别篇",
        "year": "2022",
        "region": "日本",
        "type": "日剧SP",
        "genre": "剧情/悬疑/家庭",
        "tags": [
            "法医",
            "东日本大地震",
            "未解决事件",
            "父女情",
            "日常推理",
            "剧情"
        ],
        "line": "一具被海水冲刷十年的遗骸,将朝颜和父亲再次带回那个他们试图遗忘的春天。",
        "cover": "./100.jpg",
        "url": "./videos/video-1900.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "非礼勿言",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑/惊悚",
        "tags": [
            "密室",
            "心理战",
            "反转",
            "社会隐喻",
            "悬疑",
            "惊悚"
        ],
        "line": "四个陌生人在电梯被困 72 小时,他们发现只要有人说话,就会死一个人。",
        "cover": "./101.jpg",
        "url": "./videos/video-1901.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "玉女痴情",
        "year": "1969",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情/家庭",
        "tags": [
            "邵氏",
            "苦恋",
            "豪门",
            "伦理",
            "爱情",
            "家庭"
        ],
        "line": "富家千金爱上穷画家,为了爱情她抛弃一切,却发现对方爱的是自己的画像。",
        "cover": "./102.jpg",
        "url": "./videos/video-1902.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "不丹没有枪",
        "year": "2023",
        "region": "不丹/中国大陆",
        "type": "电影",
        "genre": "喜剧/剧情",
        "tags": [
            "公路",
            "幸福指数",
            "文化冲突",
            "喜剧",
            "剧情"
        ],
        "line": "一个满脑子只有“武器”的军火贩子误闯不丹,为了活命,他必须在不射出一发子弹的情况下,成为当地射箭比赛的冠军。",
        "cover": "./103.jpg",
        "url": "./videos/video-1903.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "双雄",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,犯罪,悬疑",
        "tags": [
            "双男主",
            "警匪",
            "替身",
            "猫鼠游戏",
            "暴力美学",
            "动作"
        ],
        "line": "最顶级的警察和最顶级的悍匪长得一模一样,他们决定交换身份。",
        "cover": "./104.jpg",
        "url": "./videos/video-1904.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "灰姑娘国语",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,都市,喜剧",
        "tags": [
            "现代",
            "逆袭",
            "霸总",
            "反套路",
            "爱情",
            "都市"
        ],
        "line": "落魄的富家千金沦为钟点工,为偿还巨债,她与“甲方霸总”签订了一份“合同女友”协议。",
        "cover": "./105.jpg",
        "url": "./videos/video-1905.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "阿根廷,1985",
        "year": "2022",
        "region": "阿根廷",
        "type": "电影",
        "genre": "剧情/历史/传记",
        "tags": [
            "真实事件改编",
            "法庭辩论",
            "正义",
            "独裁审判",
            "人性",
            "剧情"
        ],
        "line": "年轻检察官顶住军方压力,用一场世纪审判为三万失踪者讨回公道。",
        "cover": "./106.jpg",
        "url": "./videos/video-1906.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "恋爱中的死神",
        "year": "2021",
        "region": "美国",
        "type": "剧集",
        "genre": "奇幻,爱情,喜剧",
        "tags": [
            "死神",
            "人间实习",
            "治愈",
            "幽默",
            "奇幻",
            "爱情"
        ],
        "line": "死神为体验生命而化身人类,却在人间学会如何死亡,更糟糕的是,他恋爱了。",
        "cover": "./107.jpg",
        "url": "./videos/video-1907.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "冰球小子2",
        "year": "2026",
        "region": "加拿大",
        "type": "电影",
        "genre": "喜剧/运动/家庭",
        "tags": [
            "冰球",
            "逆袭",
            "搞笑",
            "热血",
            "续集",
            "喜剧"
        ],
        "line": "曾经的神童如今成了油腻大叔,为了保住社区冰场,他必须重组当年的菜鸟队伍。",
        "cover": "./108.jpg",
        "url": "./videos/video-1908.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "泰版对不起,我爱你国语",
        "year": "2016",
        "region": "泰国",
        "type": "电视剧",
        "genre": "爱情/剧情",
        "tags": [
            "翻拍",
            "泰剧",
            "悲恋",
            "收养",
            "复仇",
            "爱情"
        ],
        "line": "被遗弃的泰国混混在街头被人捅伤,濒死时遇见一个女孩,发现她是自己亲生母亲的养女。",
        "cover": "./109.jpg",
        "url": "./videos/video-1909.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "逆转时光只为你",
        "year": "2024",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "奇幻/爱情",
        "tags": [
            "时间循环",
            "救赎",
            "抑郁症",
            "双向奔赴",
            "台式小清新",
            "奇幻"
        ],
        "line": "为了拯救自杀的女友,他陷入了婚礼当天的无限循环,却发现自己才是病根。",
        "cover": "./110.jpg",
        "url": "./videos/video-1910.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "春花娇美可人儿",
        "year": "1993",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧、爱情、剧情",
        "tags": [
            "怀旧",
            "女明星",
            "娱乐圈",
            "小人物",
            "喜剧",
            "爱情"
        ],
        "line": "一个木讷的化妆品推销员,阴差阳错被当红女明星聘为私人助理,却发现她光鲜亮丽的外表下,藏着无数鸡飞狗跳的麻烦。",
        "cover": "./111.jpg",
        "url": "./videos/video-1911.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "淘气双子星粤语",
        "year": "2024",
        "region": "中国香港",
        "type": "剧集/第一季",
        "genre": "喜剧/家庭",
        "tags": [
            "双胞胎互换",
            "豪门认亲",
            "粤语俚语",
            "喜剧",
            "家庭"
        ],
        "line": "一对从小分离的双胞胎兄弟,一个是茶餐厅太子爷,一个是豪门阔少,阴差阳错互换身份后引发爆笑连锁反应。",
        "cover": "./112.jpg",
        "url": "./videos/video-1912.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "彩绘门",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "奇幻,剧情,家庭",
        "tags": [
            "失智症",
            "记忆宫殿",
            "手绘动画",
            "催泪治愈",
            "奇幻",
            "剧情"
        ],
        "line": "患上阿兹海默症的外公每天都会在自家门上画画,孙女推开彩绘门,走进了外公正在消失的记忆迷宫。",
        "cover": "./113.jpg",
        "url": "./videos/video-1913.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "荒村阿狗",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "悬疑/犯罪/剧情",
        "tags": [
            "农村题材",
            "留守儿童",
            "连环失踪",
            "人性黑洞",
            "悬疑",
            "犯罪"
        ],
        "line": "90年代一个荒村里接连有人失踪,只有一个叫阿狗的哑巴孩子知道秘密,但他不会说话。",
        "cover": "./114.jpg",
        "url": "./videos/video-1914.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "情定三清山",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情,奇幻,古装",
        "tags": [
            "三清山",
            "神仙下凡",
            "错位姻缘",
            "道教文化",
            "爱情",
            "奇幻"
        ],
        "line": "月老醉酒牵错红线,让一对仙凡冤家被铁链锁在三清山悬崖,解开姻缘锁才能下山。",
        "cover": "./115.jpg",
        "url": "./videos/video-1915.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "杀人之夏",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/犯罪/青春",
        "tags": [
            "小镇凶杀",
            "少年犯罪",
            "赎罪",
            "社会派",
            "潮湿感",
            "剧情"
        ],
        "line": "2002年夏天,17岁少年与好友合谋杀害了长期霸凌他们的同学,二十年后他回到小镇,发现当年埋尸的地方要盖商场了。",
        "cover": "./116.jpg",
        "url": "./videos/video-1916.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "天地粮人",
        "year": "2022",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情,农村,年代",
        "tags": [
            "粮食",
            "农村改革",
            "父子",
            "土地情结",
            "剧情",
            "农村"
        ],
        "line": "从生产队到新时代,黄河边一个村庄三代粮人的命运起伏,与土地的血脉牵绊从未断绝。",
        "cover": "./117.jpg",
        "url": "./videos/video-1917.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "火山与海的孩子",
        "year": "2023",
        "region": "意大利/法国",
        "type": "电影",
        "genre": "剧情、家庭、文艺",
        "tags": [
            "西西里",
            "移民父子",
            "火山喷发",
            "和解",
            "剧情",
            "家庭"
        ],
        "line": "父亲说他是火山的孩子,儿子说自己是海的孩子,而他们都忘了,火山岩最终都会流入大海。",
        "cover": "./118.jpg",
        "url": "./videos/video-1918.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "探险活宝第二季",
        "year": "2011",
        "region": "美国",
        "type": "动画",
        "genre": "喜剧/动画/冒险/奇幻",
        "tags": [
            "脑洞",
            "治愈",
            "冒险",
            "奇幻",
            "经典",
            "喜剧"
        ],
        "line": "芬恩与杰克继续在哇塞秘境冒险,这次他们要面对的是企图将整个世界变成音乐的“音魔”以及失落的“AI之母”。",
        "cover": "./119.jpg",
        "url": "./videos/video-1919.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "瑞吉娜",
        "year": "2023",
        "region": "瑞典",
        "type": "电影",
        "genre": "剧情/惊悚",
        "tags": [
            "北欧",
            "宗教",
            "少女",
            "失踪",
            "剧情",
            "惊悚"
        ],
        "line": "牧师之女瑞吉娜在教堂洗礼池中失踪,全镇人都在帮忙寻找,除了她的父亲。",
        "cover": "./120.jpg",
        "url": "./videos/video-1920.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "真情赤子心",
        "year": "1999",
        "region": "美国",
        "type": "电影",
        "genre": "剧情、家庭、温情",
        "tags": [
            "父子关系",
            "自闭症儿童",
            "棒球",
            "剧情",
            "家庭",
            "温情"
        ],
        "line": "一个忙碌的华尔街精英被迫照顾患自闭症的儿子,他发现儿子能通过棒球比赛预测道琼斯指数。",
        "cover": "./121.jpg",
        "url": "./videos/video-1921.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "奇幻核子战",
        "year": "1964",
        "region": "美国",
        "type": "电影",
        "genre": "剧情,惊悚,战争",
        "tags": [
            "冷战",
            "核危机",
            "误报",
            "政治博弈",
            "黑白",
            "剧情"
        ],
        "line": "一次通讯故障引发美军对莫斯科的核报复指令,总统必须在飞机被击落前取消那架载着“免战密码”的飞机。",
        "cover": "./122.jpg",
        "url": "./videos/video-1922.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "诡计",
        "year": "2016",
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑/惊悚/犯罪",
        "tags": [
            "高智商犯罪",
            "反转再反转",
            "密室",
            "录音带",
            "悬疑",
            "惊悚"
        ],
        "line": "一名失忆男子醒来发现身旁有一具尸体、一台录音机和一段录音:“你是凶手,按我说的做就能活。",
        "cover": "./123.jpg",
        "url": "./videos/video-1923.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "大班密令之都市浮华粤语",
        "year": "1988",
        "region": "中国香港",
        "type": "剧集",
        "genre": "动作,犯罪,悬疑",
        "tags": [
            "卧底",
            "商战",
            "黑帮",
            "经典重启",
            "港味",
            "动作"
        ],
        "line": "卧底探员“大班”潜入顶级财团,发现富丽堂皇的金融大厦下,藏着一条贩卖人口的暗河。",
        "cover": "./124.jpg",
        "url": "./videos/video-1924.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "再见,孩子们",
        "year": "1987",
        "region": "法国/西德",
        "type": "电影",
        "genre": "战争/剧情",
        "tags": [
            "二战",
            "纳粹",
            "犹太人",
            "寄宿学校",
            "童年",
            "战争"
        ],
        "line": "二战末期,法国天主教寄宿学校里,一个男孩发现新同学是犹太人,两人成为好友,却因此招来灭顶之灾。",
        "cover": "./125.jpg",
        "url": "./videos/video-1925.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "大侠梅花鹿",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "动画/冒险/喜剧",
        "tags": [
            "动物侠客",
            "环保",
            "闽南语配音",
            "动画",
            "冒险",
            "喜剧"
        ],
        "line": "森林里的梅花鹿大侠意外获得人类武功秘籍,从此开始了笑料百出的锄强扶弱之路。",
        "cover": "./126.jpg",
        "url": "./videos/video-1926.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "暗夜缉凶",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪/悬疑/心理",
        "tags": [
            "连环杀手",
            "警探",
            "雨夜",
            "堕落之城",
            "猫鼠游戏",
            "犯罪"
        ],
        "line": "一个患有恐黑症的警探,必须在永夜的极地小镇追捕一个只在下雨夜杀人的凶手。",
        "cover": "./127.jpg",
        "url": "./videos/video-1927.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "真假维梅尔",
        "year": "2024",
        "region": "荷兰/比利时",
        "type": "电影",
        "genre": "剧情/悬疑",
        "tags": [
            "艺术造假",
            "二战",
            "画家",
            "剧情",
            "悬疑"
        ],
        "line": "二战期间,一名落魄画家被迫为纳粹伪造维梅尔名画,却骗过了全世界。",
        "cover": "./128.jpg",
        "url": "./videos/video-1928.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "欲见包法利夫人",
        "year": "2014",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "剧情/文艺",
        "tags": [
            "文学改编",
            "穿越",
            "女性",
            "元叙事",
            "剧情",
            "文艺"
        ],
        "line": "一个女作家穿越进福楼拜的小说,试图阻止包法利夫人自杀,却发现自己和爱玛·包法利一样,也困在别人的故事里。",
        "cover": "./129.jpg",
        "url": "./videos/video-1929.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "家在台北",
        "year": "1970",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/爱情",
        "tags": [
            "台湾",
            "文艺",
            "乡愁",
            "都市",
            "经典",
            "剧情"
        ],
        "line": "六十年代末,一群从海外归来的年轻人在台北相聚,在传统与现代的碰撞中,追寻着爱情与归宿。",
        "cover": "./130.jpg",
        "url": "./videos/video-1930.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "豆特么黑",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "黑色喜剧",
        "tags": [
            "荒诞",
            "小人物",
            "反转",
            "犯罪",
            "幽默",
            "黑色喜剧"
        ],
        "line": "一颗价值连城的黑豆引发三拨笨贼在深夜便利店上演连环争夺战。",
        "cover": "./131.jpg",
        "url": "./videos/video-1931.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "七侠五义之五鼠闹东京",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "武侠/动作",
        "tags": [
            "轻功",
            "机关术",
            "古代特工",
            "兄弟反目",
            "武侠",
            "动作"
        ],
        "line": "五鼠闹东京偷的不是皇宫,而是一张“预知未来三日”的藏宝图残片。",
        "cover": "./132.jpg",
        "url": "./videos/video-1932.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "接赃",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪/悬疑/黑色幽默",
        "tags": [
            "黑吃黑",
            "小人物困局",
            "贼赃拍卖",
            "卧底反转",
            "犯罪",
            "悬疑"
        ],
        "line": "一个专帮小偷销赃的古董店老板,某天收到了一个自己三十年前偷过的青花瓷瓶。",
        "cover": "./133.jpg",
        "url": "./videos/video-1933.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "迫在眉梢",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络微短剧",
        "genre": "悬疑,剧情,犯罪",
        "tags": [
            "竖屏",
            "高能反转",
            "实时叙事",
            "惊悚",
            "悬疑",
            "剧情"
        ],
        "line": "女儿被绑匪锁在冰库,父亲必须在手机电量耗尽前,从全网弹幕中找到那个唯一的接头暗号。",
        "cover": "./134.jpg",
        "url": "./videos/video-1934.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "疯狂追击者",
        "year": "2022",
        "region": "韩国",
        "type": "电影",
        "genre": "动作犯罪",
        "tags": [
            "飙车",
            "复仇",
            "黑色电影",
            "硬汉",
            "动作犯罪"
        ],
        "line": "为了给惨死的女儿报仇,前地下赛车手伪装成出租车司机,钓鱼执法那些网络罪犯。",
        "cover": "./135.jpg",
        "url": "./videos/video-1935.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "美丽的凯特",
        "year": "2009",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/西部/女性",
        "tags": [
            "荒野",
            "女性",
            "复仇",
            "独立",
            "救赎",
            "剧情"
        ],
        "line": "内战后,失去丈夫的农妇凯特独自带着孩子在荒野求生,不仅要对抗恶劣环境,还要躲避赏金猎人的追杀。",
        "cover": "./136.jpg",
        "url": "./videos/video-1936.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "长剑相思",
        "year": "2024",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "古装/武侠/爱情",
        "tags": [
            "铸剑世家",
            "失忆虐恋",
            "江湖恩怨",
            "冷兵器美学",
            "古装",
            "武侠"
        ],
        "line": "天下第一铸剑师之女醒来后忘记了一切,只记得梦中一把染血的长剑,和那个说“我会等你七世”的蒙面剑客。",
        "cover": "./137.jpg",
        "url": "./videos/video-1937.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "形单影只",
        "year": "2025",
        "region": "日本",
        "type": "电视剧",
        "genre": "悬疑,心理,犯罪",
        "tags": [
            "孤独",
            "社交媒体",
            "模仿犯",
            "都市传说",
            "反转",
            "悬疑"
        ],
        "line": "一名患有社交恐惧症的程序员,发现自己成了连环杀人案的唯一嫌疑人,而他从未离开过房间。",
        "cover": "./138.jpg",
        "url": "./videos/video-1938.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "大风暴",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "灾难,剧情,冒险",
        "tags": [
            "台风过境",
            "末日求生",
            "人性考验",
            "特效大片",
            "群像戏",
            "灾难"
        ],
        "line": "一场史无前例的超强台风登陆沿海城市,一座海上钻井平台上的七个人,必须在风暴眼中做出最残酷的生存选择。",
        "cover": "./139.jpg",
        "url": "./videos/video-1939.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "致敬英雄",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,灾难,传记",
        "tags": [
            "消防",
            "真实事件改编",
            "催泪",
            "群像",
            "主旋律",
            "剧情"
        ],
        "line": "当山火即将吞噬化工厂,一支平均年龄22岁的消防突击队,用身体筑起了最后一道“防火墙”。",
        "cover": "./140.jpg",
        "url": "./videos/video-1940.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "夺宝奇兵:水晶骷髅王国",
        "year": "2008",
        "region": "美国",
        "type": "电影",
        "genre": "动作/冒险/奇幻",
        "tags": [
            "考古",
            "外星文明",
            "冷战背景",
            "琼斯博士",
            "动作",
            "冒险"
        ],
        "line": "印第安纳·琼斯被卷入一场寻找传奇水晶骷髅的竞赛,却发现那是一个外星人的头颅。",
        "cover": "./141.jpg",
        "url": "./videos/video-1941.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "珍布",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情,奇幻,家庭",
        "tags": [
            "怪物",
            "都市传说",
            "温情",
            "自闭症视角",
            "剧情",
            "奇幻"
        ],
        "line": "只有患有重度自闭症的男孩能看见,城市下水道里住着吃噩梦的“珍布”。",
        "cover": "./142.jpg",
        "url": "./videos/video-1942.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "艳妇情狂",
        "year": "2026",
        "region": "西班牙",
        "type": "电影",
        "genre": "惊悚情色",
        "tags": [
            "蛇蝎美人",
            "心理操控",
            "哥特氛围",
            "反转复仇",
            "惊悚情色"
        ],
        "line": "一个男人为遗产娶了庄园女主人,却发现她的历任丈夫都变成了地窖里会动的蜡像。",
        "cover": "./143.jpg",
        "url": "./videos/video-1943.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "别跟我谈高富帅",
        "year": "2024",
        "region": "中国",
        "type": "剧集",
        "genre": "喜剧/爱情/都市",
        "tags": [
            "反套路",
            "职场",
            "女性成长",
            "轻喜剧",
            "喜剧",
            "爱情"
        ],
        "line": "普通女孩入职顶级投行,发现身边全是高富帅,她却立志要用实力让他们闭嘴。",
        "cover": "./144.jpg",
        "url": "./videos/video-1944.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "为副不仁",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情/官场",
        "tags": [
            "反腐",
            "人性博弈",
            "权力",
            "剧情",
            "官场"
        ],
        "line": "副市长因直言被排挤,却在调查中发现背后黑手竟是自己的恩师。",
        "cover": "./145.jpg",
        "url": "./videos/video-1945.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "无界之地",
        "year": "2026",
        "region": "中国大陆/泰国",
        "type": "剧集",
        "genre": "悬疑/犯罪",
        "tags": [
            "金三角",
            "诈骗园区",
            "卧底",
            "东南亚",
            "悬疑",
            "犯罪"
        ],
        "line": "为了找到失踪三年的弟弟,前特警伪装成被骗劳工进入金三角最神秘的诈骗园区,却发现弟弟成了园区二把手。",
        "cover": "./146.jpg",
        "url": "./videos/video-1946.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "河东狮吼2",
        "year": "2012",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧/爱情",
        "tags": [
            "古装",
            "悍妻",
            "谋略",
            "女权",
            "喜剧",
            "爱情"
        ],
        "line": "宋朝悍妇为逼丈夫上进,假装失忆扮柔弱,却意外卷入一场朝堂谋反案。",
        "cover": "./147.jpg",
        "url": "./videos/video-1947.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "九月怀胎",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭/伦理/悬疑",
        "tags": [
            "代孕",
            "秘密",
            "家族恩怨",
            "反转",
            "家庭",
            "伦理"
        ],
        "line": "女儿结婚当天,母亲发现自己当年被迫送走的龙凤胎儿子,竟是亲家的独生子,而女儿已经怀上了他的孩子。",
        "cover": "./148.jpg",
        "url": "./videos/video-1948.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "爱在飞",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情,剧情",
        "tags": [
            "滑翔伞",
            "绝症",
            "港片",
            "治愈",
            "爱情",
            "剧情"
        ],
        "line": "一名被确诊渐冻症的摄影师,决定最后一次飞越香港天际,却意外搭载了一名企图自杀的女孩。",
        "cover": "./149.jpg",
        "url": "./videos/video-1949.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "惊喜来敲门",
        "year": "2018",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧,剧情",
        "tags": [
            "圣诞电影",
            "邻里关系",
            "中年危机",
            "温情喜剧",
            "喜剧",
            "剧情"
        ],
        "line": "社恐大叔家的门铃每天被不同陌生人按响,每个来访者都声称认识他,但他一个都不记得。",
        "cover": "./150.jpg",
        "url": "./videos/video-1950.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "午夜节拍",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "音乐/剧情",
        "tags": [
            "嘻哈",
            "底层",
            "梦想",
            "街区",
            "师徒",
            "音乐"
        ],
        "line": "费城最乱的街区,一个坐轮椅的黑人老头,一个沉默的亚裔少年,一台老旧节拍器,制造出改变一切的声音。",
        "cover": "./1.jpg",
        "url": "./videos/video-1951.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "淘气托托大冒险",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "动画/家庭/冒险",
        "tags": [
            "动物伙伴",
            "环游世界",
            "寻找宝藏",
            "动画",
            "家庭",
            "冒险"
        ],
        "line": "一只自以为是侦探的流浪猫托托,为寻找丢失的魔法铃铛,踏上了横跨五大洲的爆笑旅程。",
        "cover": "./2.jpg",
        "url": "./videos/video-1952.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "吓死油土伯",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/喜剧/伪纪录片",
        "tags": [
            "网红恶搞",
            "直播捉鬼",
            "作死挑战",
            "反套路",
            "恐怖",
            "喜剧"
        ],
        "line": "一个作死网红团队前往废弃疯人院直播捉鬼,却发现真正的恐怖来自他们的直播弹幕。",
        "cover": "./3.jpg",
        "url": "./videos/video-1953.html",
        "category": "文艺佳作",
        "categoryUrl": "./categories/category-12.html"
    },
    {
        "title": "爱情36计",
        "year": "2010",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧,爱情,剧情",
        "tags": [
            "职场恋情",
            "拆婚联盟",
            "兵法入情",
            "喜剧",
            "爱情",
            "剧情"
        ],
        "line": "为了拆散公司继承人与平民女友,老板雇了一个“职业爱情破坏组”,用兵法36计轮番上阵,却把自己女儿赔了进去。",
        "cover": "./4.jpg",
        "url": "./videos/video-1954.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "心灵救赎",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/家庭/心理",
        "tags": [
            "心理创伤",
            "临终关怀",
            "替身演员",
            "父女和解",
            "剧情",
            "家庭"
        ],
        "line": "一名替身演员因爆炸毁容后,伪装成陌生护工,去照顾自己憎恨了二十年的植物人父亲。",
        "cover": "./5.jpg",
        "url": "./videos/video-1955.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "暗流2023",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑/犯罪",
        "tags": [
            "下水道",
            "连环杀手",
            "都市传说",
            "悬疑",
            "犯罪"
        ],
        "line": "东京下水道惊现“雨女”浮尸,女刑警发现每个死者都曾收到过同一条匿名短信:“今晚有雨”。",
        "cover": "./6.jpg",
        "url": "./videos/video-1956.html",
        "category": "科幻奇幻",
        "categoryUrl": "./categories/category-07.html"
    },
    {
        "title": "煽动者",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "政治惊悚犯罪",
        "tags": [
            "暗网直播",
            "民意操纵",
            "键盘革命",
            "身份反转",
            "政治惊悚犯罪"
        ],
        "line": "一名失业黑客意外操控了总统演讲的提词器,随口编的谎话竟被全国当真,一场全民狂欢就此失控。",
        "cover": "./7.jpg",
        "url": "./videos/video-1957.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "长安侠影之天朝死士",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装,动作,悬疑",
        "tags": [
            "唐朝",
            "刺客",
            "机关",
            "谍战",
            "古装",
            "动作"
        ],
        "line": "武则天登基前夕,一支神秘的“天朝死士”潜入洛阳企图炸毁明堂,狄仁杰的弟子必须在三日内找出内鬼。",
        "cover": "./8.jpg",
        "url": "./videos/video-1958.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "惊马奔逃",
        "year": "2025",
        "region": "德国",
        "type": "电影",
        "genre": "剧情,文艺",
        "tags": [
            "中年危机",
            "知识分子",
            "婚姻",
            "戛纳",
            "心理",
            "剧情"
        ],
        "line": "一位自视甚高的中年作家在海边度假时,偶遇了学生时代曾被他瞧不起的“庸才”同学,如今对方却过着他理想中的完美人生。",
        "cover": "./9.jpg",
        "url": "./videos/video-1959.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "无尽的控诉",
        "year": "2013",
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪/惊悚",
        "tags": [
            "复仇",
            "法庭戏",
            "时间循环",
            "绝望",
            "犯罪",
            "惊悚"
        ],
        "line": "一个失去女儿的母亲发现,杀死女儿的凶手每七天就会被释放,而每一次释放都伴随着新的命案。",
        "cover": "./10.jpg",
        "url": "./videos/video-1960.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "四赌神",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧,犯罪",
        "tags": [
            "赌博",
            "兄弟情",
            "反转",
            "怀旧",
            "喜剧",
            "犯罪"
        ],
        "line": "四个过气老千被绑架到一个赌局,却发现庄家是二十年前被他们骗过的“第五人”。",
        "cover": "./11.jpg",
        "url": "./videos/video-1961.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "昼颜",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情、爱情、伦理",
        "tags": [
            "禁忌之恋",
            "出轨",
            "女性觉醒",
            "夏日物语",
            "剧情",
            "爱情"
        ],
        "line": "平日午后三点半,当丈夫出门后,主妇们褪去围裙,开始了危险的午后恋情。",
        "cover": "./12.jpg",
        "url": "./videos/video-1962.html",
        "category": "动作犯罪",
        "categoryUrl": "./categories/category-03.html"
    },
    {
        "title": "缘来我可以",
        "year": "2024",
        "region": "新加坡/马来西亚",
        "type": "电影",
        "genre": "喜剧,爱情",
        "tags": [
            "相亲",
            "社恐",
            "错位",
            "喜剧",
            "爱情"
        ],
        "line": "重度社恐的程序员被母亲逼着参加相亲大会,他给自己写了一个AI恋爱程序当外挂,结果把全场的女生都搞混了。",
        "cover": "./13.jpg",
        "url": "./videos/video-1963.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "淑女思春",
        "year": "2022",
        "region": "英国",
        "type": "电影",
        "genre": "剧情/爱情",
        "tags": [
            "维多利亚时代",
            "女性觉醒",
            "禁忌之恋",
            "文学改编感",
            "剧情",
            "爱情"
        ],
        "line": "1887年伦敦,一位贵族小姐在婚前三个月,意外爱上了未婚夫请来的女家庭教师。",
        "cover": "./14.jpg",
        "url": "./videos/video-1964.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "假期惊魂",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖,惊悚",
        "tags": [
            "度假村",
            "邪教",
            "密室逃脱",
            "血腥",
            "恐怖",
            "惊悚"
        ],
        "line": "一家六口入住豪华森林度假村,却发现每晚的“亲子活动”其实是活人献祭游戏。",
        "cover": "./15.jpg",
        "url": "./videos/video-1965.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "笑星撞地球",
        "year": "2023",
        "region": "中国",
        "type": "电影",
        "genre": "喜剧/科幻",
        "tags": [
            "外星人",
            "脱口秀",
            "段子",
            "末日",
            "小成本",
            "喜剧"
        ],
        "line": "外星人占领地球的唯一条件是:每天听一场不好笑的脱口秀,否则毁灭人类。",
        "cover": "./16.jpg",
        "url": "./videos/video-1966.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "不死废人",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作,科幻",
        "tags": [
            "再生",
            "杀手",
            "阴谋",
            "动作",
            "科幻"
        ],
        "line": "一个无法被杀死的顶级杀手,在最后一次任务中发现了自己永生的残酷真相。",
        "cover": "./17.jpg",
        "url": "./videos/video-1967.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "瓷缘",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情,历史",
        "tags": [
            "景德镇",
            "青花瓷",
            "师徒",
            "传承",
            "剧情",
            "历史"
        ],
        "line": "景德镇千年窑火旁,一位固执的老匠人与一个想用3D打印做瓷的海归孙女,展开了一场关于“手”的对决。",
        "cover": "./18.jpg",
        "url": "./videos/video-1968.html",
        "category": "家庭治愈",
        "categoryUrl": "./categories/category-08.html"
    },
    {
        "title": "花田喜事粤语",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧/爱情/古装",
        "tags": [
            "粤语原声",
            "贺岁",
            "无厘头",
            "翻拍",
            "合家欢",
            "喜剧"
        ],
        "line": "落魄富二代在花田镇开了一家“万事屋”,用现代营销思维解决古代奇葩委托。",
        "cover": "./19.jpg",
        "url": "./videos/video-1969.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "巢穴2022",
        "year": "2022",
        "region": "英国",
        "type": "电影",
        "genre": "惊悚、科幻、灾难",
        "tags": [
            "密室",
            "变异",
            "逃生",
            "绝望",
            "惊悚",
            "科幻"
        ],
        "line": "六名平民被困在一座废弃的地铁站改建的秘密实验基地里,他们发现墙壁里爬出的不是老鼠,而是自己深埋心底的恐惧。",
        "cover": "./20.jpg",
        "url": "./videos/video-1970.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "不道德的交易",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚/犯罪/剧情",
        "tags": [
            "道德困境",
            "绑架",
            "交易",
            "反转",
            "社会议题",
            "惊悚"
        ],
        "line": "绑匪让他用一个人的命换另一个人的命,而被绑架的两人一个是他的妻子,一个是他的情妇。",
        "cover": "./21.jpg",
        "url": "./videos/video-1971.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "绝代艳宝莲的一生",
        "year": "2025",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情、传记、历史",
        "tags": [
            "艳星",
            "时代变迁",
            "女性觉醒",
            "娱乐圈",
            "传奇",
            "剧情"
        ],
        "line": "从被卖入夜总会的孤女,到红极一时的艳星,再到隐姓埋名的普通母亲,她是香港娱乐史的活化石。",
        "cover": "./22.jpg",
        "url": "./videos/video-1972.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "徘徊年代",
        "year": "2025",
        "region": "日本/中国台湾",
        "type": "剧集",
        "genre": "悬疑/奇幻/历史",
        "tags": [
            "时间循环",
            "昭和时代",
            "殖民记忆",
            "身份认同",
            "悬疑",
            "奇幻"
        ],
        "line": "一个2024年的台湾青年每次睡着,都会回到1944年的台北,变成一名日本警察。",
        "cover": "./23.jpg",
        "url": "./videos/video-1973.html",
        "category": "悬疑惊悚",
        "categoryUrl": "./categories/category-04.html"
    },
    {
        "title": "火烧岛粤语",
        "year": "1991",
        "region": "香港,台湾",
        "type": "电影",
        "genre": "动作,犯罪,惊悚",
        "tags": [
            "监狱",
            "暴力",
            "黑帮",
            "卧底",
            "硬汉",
            "动作"
        ],
        "line": "国际贩毒集团头目被关进火烧岛监狱,多名卧底相继暴露,一场血腥的监狱战争爆发。",
        "cover": "./24.jpg",
        "url": "./videos/video-1974.html",
        "category": "黑色幽默",
        "categoryUrl": "./categories/category-16.html"
    },
    {
        "title": "香车绮梦",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "剧情/惊悚",
        "tags": [
            "豪车",
            "梦想",
            "扭曲",
            "心理惊悚",
            "剧情",
            "惊悚"
        ],
        "line": "穷小子偷走了一辆限量版跑车,却发现车里的日记本记录着车主如何用这辆车杀害了四个女人。",
        "cover": "./25.jpg",
        "url": "./videos/video-1975.html",
        "category": "剧情精选",
        "categoryUrl": "./categories/category-06.html"
    },
    {
        "title": "纳粹霸主",
        "year": "2019",
        "region": "德国",
        "type": "电视剧",
        "genre": "历史",
        "tags": [
            "架空历史",
            "政治惊悚",
            "战争",
            "黑色幽默",
            "历史"
        ],
        "line": "假如纳粹德国赢得了二战,但希特勒在1950年突然暴毙,一场血腥的霸权内战爆发。",
        "cover": "./26.jpg",
        "url": "./videos/video-1976.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "北游记之仙魂下凡",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻/动作",
        "tags": [
            "修仙",
            "穿越",
            "神话",
            "降魔",
            "奇幻",
            "动作"
        ],
        "line": "真武大帝的仙魂意外坠入现代都市,附身在一个社畜程序员身上,为了归位而被迫降妖除魔。",
        "cover": "./27.jpg",
        "url": "./videos/video-1977.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "海边别墅",
        "year": "2018",
        "region": "英国",
        "type": "电影",
        "genre": "剧情,悬疑",
        "tags": [
            "家族秘密",
            "遗产继承",
            "暴风雪山庄",
            "心理博弈",
            "剧情",
            "悬疑"
        ],
        "line": "一个富豪遗嘱要求五个子女在他死后住进海边别墅七天才能继承遗产,但每过一晚,就有一人离奇消失。",
        "cover": "./28.jpg",
        "url": "./videos/video-1978.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "花姊妹风流债",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情,情色,伦理",
        "tags": [
            "女性",
            "欲望",
            "家庭",
            "禁忌",
            "剧情",
            "情色"
        ],
        "line": "理发店三姐妹靠美色周旋于男人之间,当富商父亲突然归国,一场关于爱与金钱的荒诞游戏必须结束。",
        "cover": "./29.jpg",
        "url": "./videos/video-1979.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "吊颈绳",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖,悬疑",
        "tags": [
            "民俗恐怖",
            "降头",
            "因果报应",
            "高能反转",
            "恐怖",
            "悬疑"
        ],
        "line": "一条出现在每个死者床头的麻绳,串联起三十年前一桩全村沉默的冤案。",
        "cover": "./30.jpg",
        "url": "./videos/video-1980.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "莫斯科郊外的晚上",
        "year": "2026",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "爱情,历史,剧情",
        "tags": [
            "冷战",
            "音乐",
            "异国恋",
            "克格勃",
            "爱情",
            "历史"
        ],
        "line": "1962年,莫斯科郊外,苏联女翻译与英国间谍因一首中文歌曲《莫斯科郊外的晚上》陷入致命爱情。",
        "cover": "./31.jpg",
        "url": "./videos/video-1981.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "闪电巡逻队",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动作悬疑",
        "tags": [
            "警匪",
            "飙车",
            "双男主",
            "单元案件",
            "动作悬疑"
        ],
        "line": "一个被开除的赛车手和一根筋的菜鸟交警,组成了城市最快出警的“闪电巡逻队”。",
        "cover": "./32.jpg",
        "url": "./videos/video-1982.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "魔兽",
        "year": "2024",
        "region": "美国",
        "type": "电视剧",
        "genre": "奇幻战争",
        "tags": [
            "游戏改编",
            "史诗",
            "特效大片",
            "种族冲突",
            "奇幻战争"
        ],
        "line": "聚焦兽人入侵艾泽拉斯的十年后,人类难民与兽人部落在贫瘠之地上演权力的游戏。",
        "cover": "./33.jpg",
        "url": "./videos/video-1983.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "猫城",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "动画、奇幻、冒险",
        "tags": [
            "猫咪世界观",
            "手绘风格",
            "治愈系",
            "动画",
            "奇幻",
            "冒险"
        ],
        "line": "一个讨厌猫的女孩意外变小后掉进了一座由猫统治的城市,为了变回去,她必须学会像猫一样思考。",
        "cover": "./34.jpg",
        "url": "./videos/video-1984.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "空白日子",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情,悬疑,心理",
        "tags": [
            "记忆删除",
            "身份迷失",
            "极简主义",
            "存在主义",
            "剧情",
            "悬疑"
        ],
        "line": "一个男人醒来发现自己有整整一年的人生完全是空白,而他口袋里只有一张写着“别找”的纸条。",
        "cover": "./35.jpg",
        "url": "./videos/video-1985.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "等待达利",
        "year": "2023",
        "region": "西班牙",
        "type": "电影",
        "genre": "剧情/传记/奇幻",
        "tags": [
            "超现实主义",
            "达利",
            "艺术家",
            "幻觉",
            "剧情",
            "传记"
        ],
        "line": "1970年代,一个患有妄想症的青年坚信自己是达利的私生子,每天在达利常去的餐厅等他来相认。",
        "cover": "./36.jpg",
        "url": "./videos/video-1986.html",
        "category": "爱情喜剧",
        "categoryUrl": "./categories/category-05.html"
    },
    {
        "title": "河口的圣诞节",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "爱情/剧情",
        "tags": [
            "圣诞",
            "渔村",
            "异地恋",
            "治愈",
            "爱情",
            "剧情"
        ],
        "line": "东京失意女白领逃到渔村河口,遇见一个每年圣诞夜都会在码头等“不会来的人”的青年。",
        "cover": "./37.jpg",
        "url": "./videos/video-1987.html",
        "category": "高分推荐",
        "categoryUrl": "./categories/category-19.html"
    },
    {
        "title": "夏树",
        "year": "2020",
        "region": "日本",
        "type": "电影",
        "genre": "爱情/青春/剧情",
        "tags": [
            "初恋",
            "夏日",
            "癌症",
            "纯爱",
            "催泪",
            "爱情"
        ],
        "line": "为了完成绝症女友的遗愿,他要在她生前,为她编织一场从未发生过的甜蜜初恋。",
        "cover": "./38.jpg",
        "url": "./videos/video-1988.html",
        "category": "每日更新",
        "categoryUrl": "./categories/category-20.html"
    },
    {
        "title": "金屋佳人",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "爱情/复仇/剧情",
        "tags": [
            "财阀",
            "替身文学",
            "高智商对决",
            "狗血反转",
            "女性至上",
            "爱情"
        ],
        "line": "为了拿回母亲的设计帝国,天才建筑师伪装成蠢萌甜心,嫁给了仇家那个草包儿子。",
        "cover": "./39.jpg",
        "url": "./videos/video-1989.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    },
    {
        "title": "黑鹰坠落:死里逃生",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "战争、动作、历史",
        "tags": [
            "摩加迪沙",
            "幸存者",
            "军事",
            "真实事件改编",
            "战争",
            "动作"
        ],
        "line": "1993年摩加迪沙之战中,一个坠机后的美国士兵在索马里平民的帮助下奇迹生还。",
        "cover": "./40.jpg",
        "url": "./videos/video-1990.html",
        "category": "青春校园",
        "categoryUrl": "./categories/category-15.html"
    },
    {
        "title": "空中撤离",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作,灾难",
        "tags": [
            "劫机",
            "高空救援",
            "实时叙事",
            "孤胆英雄",
            "动作",
            "灾难"
        ],
        "line": "一架载有传染病毒株的货运飞机被劫持,一名退役空军空降兵必须在飞机燃油耗尽前,从万米高空不带降落伞爬入机舱。",
        "cover": "./41.jpg",
        "url": "./videos/video-1991.html",
        "category": "都市故事",
        "categoryUrl": "./categories/category-11.html"
    },
    {
        "title": "蔡李佛",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/传记/武术",
        "tags": [
            "功夫",
            "拳法传承",
            "师徒情",
            "实战",
            "港风",
            "动作"
        ],
        "line": "落魄的蔡李佛拳末代传人,为了保住面临拆迁的老武馆,不得不带着四个废柴徒弟去参加地下格斗赛。",
        "cover": "./42.jpg",
        "url": "./videos/video-1992.html",
        "category": "经典电影",
        "categoryUrl": "./categories/category-14.html"
    },
    {
        "title": "后殖古堡的日与夜",
        "year": "2024",
        "region": "英国/印度",
        "type": "剧集",
        "genre": "喜剧/悬疑",
        "tags": [
            "黑色幽默",
            "殖民遗产",
            "豪宅",
            "阶级",
            "喜剧",
            "悬疑"
        ],
        "line": "一座被改建为五星级酒店的印度古堡里,英国管家和印度裔CEO在日夜交替中,因百年诅咒陷入荒诞的权力游戏。",
        "cover": "./43.jpg",
        "url": "./videos/video-1993.html",
        "category": "动画冒险",
        "categoryUrl": "./categories/category-10.html"
    },
    {
        "title": "赛马娘",
        "year": "2021",
        "region": "日本",
        "type": "动画剧集",
        "genre": "运动/奇幻",
        "tags": [
            "竞技",
            "少女",
            "成长",
            "真实改编",
            "运动",
            "奇幻"
        ],
        "line": "她是一匹不被看好的赛马娘,唯一的武器是永远不会放弃的腿和一张爱笑的嘴。",
        "cover": "./44.jpg",
        "url": "./videos/video-1994.html",
        "category": "热门剧集",
        "categoryUrl": "./categories/category-13.html"
    },
    {
        "title": "性业大亨",
        "year": "2022",
        "region": "美国",
        "type": "电视剧",
        "genre": "传记,剧情",
        "tags": [
            "成人产业",
            "真实事件改编",
            "权力",
            "金钱",
            "争议",
            "传记"
        ],
        "line": "从街头混混到成人娱乐帝国之王,一个犹太家庭如何用四十年时间在美国建立最受争议的商业帝国。",
        "cover": "./45.jpg",
        "url": "./videos/video-1995.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "今晚是寿喜烧哦",
        "year": "2023",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧,家庭,美食",
        "tags": [
            "母女",
            "独居",
            "治愈",
            "每集一道菜",
            "人生难题",
            "喜剧"
        ],
        "line": "32岁的单身女儿与65岁的妈妈开始了一种奇怪的“同居”——每周只共度一晚,吃一顿寿喜烧,聊所有不敢和别人说的事。",
        "cover": "./46.jpg",
        "url": "./videos/video-1996.html",
        "category": "欧美新片",
        "categoryUrl": "./categories/category-01.html"
    },
    {
        "title": "爱寻迷",
        "year": "2023",
        "region": "香港",
        "type": "电影",
        "genre": "爱情,悬疑",
        "tags": [
            "出轨",
            "手机",
            "心理",
            "都市",
            "爱情",
            "悬疑"
        ],
        "line": "妻子通过手机定位发现丈夫总是出现在墓园,跟踪后发现那里埋着丈夫的“初恋”。",
        "cover": "./47.jpg",
        "url": "./videos/video-1997.html",
        "category": "战争历史",
        "categoryUrl": "./categories/category-09.html"
    },
    {
        "title": "好莱坞结局",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧,剧情",
        "tags": [
            "黑色幽默",
            "电影行业",
            "过气导演",
            "讽刺",
            "喜剧",
            "剧情"
        ],
        "line": "一位过气的B级片导演被朝鲜特工绑架,要求他为最高领导人拍摄一部好莱坞水准的商业大片。",
        "cover": "./48.jpg",
        "url": "./videos/video-1998.html",
        "category": "世界影展",
        "categoryUrl": "./categories/category-18.html"
    },
    {
        "title": "不知也无妨",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情,家庭,悬疑",
        "tags": [
            "伦理",
            "秘密",
            "治愈",
            "罗生门",
            "剧情",
            "家庭"
        ],
        "line": "母亲临终前说:“你不是我亲生的。”三个子女在整理遗物时,发现了四个不同的真相。",
        "cover": "./49.jpg",
        "url": "./videos/video-1999.html",
        "category": "亚洲精选",
        "categoryUrl": "./categories/category-17.html"
    },
    {
        "title": "瑞士小姐",
        "year": "1954",
        "region": "美国",
        "type": "电影",
        "genre": "爱情,喜剧",
        "tags": [
            "选美",
            "异国恋",
            "误会",
            "黄金时代",
            "爱情",
            "喜剧"
        ],
        "line": "美国大兵与一位固执的瑞士奶酪农场主千金,在阿尔卑斯山上演浪漫拉锯战。",
        "cover": "./50.jpg",
        "url": "./videos/video-2000.html",
        "category": "高清电影",
        "categoryUrl": "./categories/category-02.html"
    }
];
    const form = document.getElementById('globalSearchForm');
    const input = document.getElementById('globalSearchInput');
    const results = document.getElementById('globalSearchResults');

    const render = (items) => {
        if (!results) {
            return;
        }
        results.innerHTML = items.slice(0, 120).map((item) => `
            <a class="movie-card" href="${item.url}" data-search="${item.title} ${item.year} ${item.region} ${item.genre} ${item.tags.join(' ')}">
                <figure class="poster-frame">
                    <img src="${item.cover}" alt="${item.title}" loading="lazy">
                    <span class="quality-badge">HD</span>
                    <span class="play-dot">▶</span>
                </figure>
                <div class="movie-card-body">
                    <h3>${item.title}</h3>
                    <p>${item.line}</p>
                    <div class="meta-row">
                        <span>${item.year}</span>
                        <span>${item.region}</span>
                        <span>${item.type}</span>
                    </div>
                    <div class="tag-row">
                        ${item.tags.slice(0, 3).map((tag) => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </a>
        `).join('');
    };

    const search = () => {
        const key = (input ? input.value : '').trim().toLowerCase();
        if (!key) {
            render(records.slice(0, 60));
            return;
        }
        const keys = key.split(/\s+/).filter(Boolean);
        const matched = records.filter((item) => {
            const text = `${item.title} ${item.year} ${item.region} ${item.type} ${item.genre} ${item.tags.join(' ')} ${item.line}`.toLowerCase();
            return keys.every((word) => text.includes(word));
        });
        render(matched);
    };

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            search();
        });
    }
    if (input) {
        input.addEventListener('input', search);
    }
    render(records.slice(0, 60));
})();
