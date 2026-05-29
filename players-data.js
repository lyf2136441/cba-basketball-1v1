// CBA 2024-2025赛季 全部20支球队球员数据
var CBA_TEAMS = [
  {id:'liaoning',name:'辽宁本钢',abbr:'辽宁',color:'#c8102e',players:[
    {id:'zhaojiwei',name:'赵继伟',num:3,pos:'PG',shooting:82,speed:85,strength:65,defense:78,dribbling:92,jumping:68,height:185},
    {id:'guoailun',name:'郭艾伦',num:13,pos:'SG',shooting:78,speed:92,strength:72,defense:75,dribbling:95,jumping:75,height:192},
    {id:'zhangzhenlin',name:'张镇麟',num:77,pos:'SF',shooting:80,speed:88,strength:80,defense:82,dribbling:78,jumping:90,height:205},
    {id:'fugao',name:'付豪',num:1,pos:'PF',shooting:76,speed:72,strength:85,defense:70,dribbling:68,jumping:72,height:208},
    {id:'hanjun',name:'韩德君',num:55,pos:'C',shooting:65,speed:50,strength:95,defense:78,dribbling:45,jumping:45,height:215},
    {id:'lixiaoxu',name:'李晓旭',num:22,pos:'PF',shooting:70,speed:65,strength:88,defense:82,dribbling:60,jumping:62,height:207},
    {id:'congmingchen',name:'丛明晨',num:10,pos:'SF',shooting:78,speed:76,strength:68,defense:70,dribbling:72,jumping:74,height:199},
    {id:'morland',name:'莫兰德',num:25,pos:'C',shooting:55,speed:65,strength:92,defense:90,dribbling:50,jumping:78,height:208},
    {id:'fogg',name:'弗格',num:4,pos:'SG',shooting:90,speed:86,strength:75,defense:82,dribbling:88,jumping:76,height:191},
    {id:'liuhuyi',name:'刘雁宇',num:17,pos:'C',shooting:60,speed:62,strength:80,defense:68,dribbling:48,jumping:70,height:210},
  ]},
  {id:'guangdong',name:'广东东阳光',abbr:'广东',color:'#003399',players:[
    {id:'yijianlian',name:'易建联',num:9,pos:'C',shooting:85,speed:72,strength:90,defense:88,dribbling:62,jumping:88,height:213},
    {id:'humingxuan',name:'胡明轩',num:3,pos:'SG',shooting:84,speed:86,strength:72,defense:80,dribbling:85,jumping:78,height:191},
    {id:'xujie',name:'徐杰',num:2,pos:'PG',shooting:82,speed:84,strength:58,defense:74,dribbling:90,jumping:66,height:179},
    {id:'zhourui',name:'周琦',num:26,pos:'C',shooting:72,speed:70,strength:88,defense:92,dribbling:55,jumping:85,height:216},
    {id:'renjunfei',name:'任骏飞',num:20,pos:'PF',shooting:74,speed:68,strength:82,defense:78,dribbling:65,jumping:68,height:203},
    {id:'duzhunwang',name:'杜润旺',num:18,pos:'PF',shooting:80,speed:66,strength:78,defense:65,dribbling:62,jumping:64,height:205},
    {id:'zhanghaoji',name:'张皓嘉',num:25,pos:'SF',shooting:72,speed:72,strength:74,defense:68,dribbling:70,jumping:72,height:200},
    {id:'waters',name:'沃特斯',num:1,pos:'PG',shooting:85,speed:94,strength:62,defense:72,dribbling:95,jumping:80,height:178},
    {id:'weems',name:'威姆斯',num:13,pos:'SF',shooting:78,speed:82,strength:80,defense:75,dribbling:82,jumping:82,height:198},
    {id:'xuxin',name:'徐昕',num:19,pos:'C',shooting:56,speed:55,strength:82,defense:72,dribbling:40,jumping:65,height:226},
  ]},
  {id:'xinjiang',name:'新疆伊力特',abbr:'新疆',color:'#0055a5',players:[
    {id:'abdusalam',name:'阿不都沙拉木',num:23,pos:'PF',shooting:82,speed:76,strength:84,defense:80,dribbling:72,jumping:76,height:202},
    {id:'qilin',name:'齐麟',num:11,pos:'SF',shooting:84,speed:82,strength:74,defense:72,dribbling:76,jumping:85,height:199},
    {id:'zhaorui',name:'赵睿',num:8,pos:'SG',shooting:78,speed:86,strength:80,defense:82,dribbling:86,jumping:78,height:195},
    {id:'jones',name:'多米尼克·琼斯',num:55,pos:'SG',shooting:80,speed:88,strength:85,defense:78,dribbling:90,jumping:82,height:193},
    {id:'wuguanxi',name:'吴冠希',num:9,pos:'C',shooting:62,speed:62,strength:86,defense:80,dribbling:48,jumping:70,height:210},
    {id:'xirreli',name:'西热力江',num:7,pos:'SG',shooting:76,speed:72,strength:74,defense:76,dribbling:74,jumping:66,height:191},
    {id:'liyiyang',name:'李炎哲',num:13,pos:'C',shooting:56,speed:52,strength:92,defense:78,dribbling:38,jumping:55,height:211},
    {id:'tangcaiyu',name:'唐才育',num:5,pos:'SF',shooting:74,speed:74,strength:68,defense:68,dribbling:70,jumping:72,height:197},
    {id:'huangrongqi',name:'黄荣奇',num:4,pos:'PG',shooting:68,speed:84,strength:66,defense:70,dribbling:80,jumping:76,height:190},
    {id:'zhuan',name:'朱旭航',num:22,pos:'PF',shooting:76,speed:70,strength:80,defense:74,dribbling:65,jumping:74,height:203},
  ]},
  {id:'zhejiang',name:'浙江稠州金租',abbr:'浙江',color:'#b22222',players:[
    {id:'wuqiang',name:'吴前',num:33,pos:'SG',shooting:92,speed:84,strength:68,defense:72,dribbling:85,jumping:70,height:189},
    {id:'chengpeng',name:'程帅澎',num:6,pos:'SG',shooting:80,speed:82,strength:72,defense:78,dribbling:80,jumping:76,height:193},
    {id:'liuyize',name:'刘泽一',num:10,pos:'PF',shooting:72,speed:74,strength:82,defense:76,dribbling:66,jumping:74,height:204},
    {id:'wangyibo',name:'王奕博',num:15,pos:'PG',shooting:70,speed:86,strength:62,defense:74,dribbling:84,jumping:70,height:186},
    {id:'yujiahao',name:'余嘉豪',num:11,pos:'C',shooting:68,speed:55,strength:90,defense:82,dribbling:42,jumping:62,height:221},
    {id:'luzhouwenbo',name:'陆文博',num:8,pos:'SF',shooting:76,speed:78,strength:70,defense:76,dribbling:70,jumping:78,height:192},
    {id:'gaily',name:'盖利',num:3,pos:'SF',shooting:78,speed:86,strength:78,defense:82,dribbling:80,jumping:84,height:196},
    {id:'wangzilu',name:'王子路',num:12,pos:'PF',shooting:68,speed:70,strength:78,defense:72,dribbling:62,jumping:70,height:202},
  ]},
  {id:'guangsha',name:'浙江广厦雄狮',abbr:'广厦',color:'#f5a623',players:[
    {id:'sunminghui',name:'孙铭徽',num:17,pos:'PG',shooting:80,speed:90,strength:74,defense:82,dribbling:92,jumping:80,height:188},
    {id:'huzhinqiu',name:'胡金秋',num:21,pos:'PF',shooting:86,speed:74,strength:84,defense:80,dribbling:68,jumping:76,height:210},
    {id:'zhaoyanhao',name:'赵岩昊',num:25,pos:'SG',shooting:82,speed:84,strength:65,defense:72,dribbling:80,jumping:74,height:195},
    {id:'zhujunlong',name:'朱俊龙',num:10,pos:'SF',shooting:74,speed:78,strength:76,defense:82,dribbling:72,jumping:80,height:200},
    {id:'xuzhonghao',name:'许钟豪',num:24,pos:'C',shooting:60,speed:50,strength:90,defense:78,dribbling:40,jumping:52,height:212},
    {id:'okafo',name:'奥卡福',num:15,pos:'C',shooting:72,speed:65,strength:88,defense:82,dribbling:52,jumping:74,height:211},
    {id:'weizhe',name:'威哲',num:2,pos:'PG',shooting:74,speed:82,strength:66,defense:70,dribbling:86,jumping:72,height:185},
    {id:'wuxiao',name:'吴骁',num:5,pos:'PF',shooting:62,speed:68,strength:82,defense:72,dribbling:55,jumping:68,height:204},
  ]},
  {id:'shanghai',name:'上海久事',abbr:'上海',color:'#1e40af',players:[
    {id:'wangzhelin',name:'王哲林',num:94,pos:'C',shooting:76,speed:62,strength:88,defense:78,dribbling:52,jumping:65,height:214},
    {id:'liutricen',name:'刘铮',num:5,pos:'SG',shooting:78,speed:80,strength:68,defense:84,dribbling:78,jumping:72,height:192},
    {id:'luohandichen',name:'罗汉琛',num:33,pos:'PG',shooting:72,speed:84,strength:62,defense:70,dribbling:82,jumping:66,height:185},
    {id:'renjewei',name:'任骏威',num:9,pos:'PF',shooting:74,speed:68,strength:80,defense:74,dribbling:64,jumping:64,height:202},
    {id:'guohaowen',name:'郭昊文',num:7,pos:'SG',shooting:72,speed:88,strength:74,defense:66,dribbling:82,jumping:84,height:201},
    {id:'lihongquan',name:'李弘权',num:14,pos:'SF',shooting:74,speed:76,strength:78,defense:72,dribbling:70,jumping:78,height:198},
    {id:'bledsoe',name:'布莱德索',num:2,pos:'PG',shooting:78,speed:90,strength:82,defense:80,dribbling:92,jumping:82,height:185},
    {id:'yanpengfei',name:'闫鹏飞',num:10,pos:'C',shooting:64,speed:58,strength:84,defense:72,dribbling:45,jumping:58,height:210},
  ]},
  {id:'beijing',name:'北京北汽',abbr:'北京',color:'#0066cc',players:[
    {id:'zengfanbo',name:'曾凡博',num:1,pos:'SF',shooting:82,speed:84,strength:72,defense:78,dribbling:74,jumping:90,height:206},
    {id:'fangshou',name:'方硕',num:8,pos:'SG',shooting:80,speed:78,strength:70,defense:72,dribbling:82,jumping:68,height:189},
    {id:'zhairan',name:'翟晓川',num:20,pos:'PF',shooting:76,speed:74,strength:82,defense:80,dribbling:68,jumping:76,height:204},
    {id:'fanzi',name:'范子铭',num:17,pos:'C',shooting:68,speed:62,strength:86,defense:76,dribbling:48,jumping:62,height:210},
    {id:'tianyouxiang',name:'田宇翔',num:25,pos:'PG',shooting:68,speed:82,strength:64,defense:74,dribbling:80,jumping:68,height:183},
    {id:'leaf',name:'利夫',num:2,pos:'PF',shooting:72,speed:74,strength:82,defense:78,dribbling:66,jumping:80,height:208},
    {id:'zhangcairren',name:'张才仁',num:16,pos:'SG',shooting:72,speed:74,strength:68,defense:68,dribbling:72,jumping:70,height:196},
    {id:'johnson',name:'尼克·约翰逊',num:0,pos:'PG',shooting:76,speed:88,strength:74,defense:76,dribbling:88,jumping:80,height:188},
  ]},
  {id:'beikong',name:'北京控股',abbr:'北控',color:'#8b0000',players:[
    {id:'zhangfan',name:'张帆',num:6,pos:'SG',shooting:84,speed:80,strength:70,defense:72,dribbling:78,jumping:70,height:193},
    {id:'zozotonglin',name:'邹雨宸',num:10,pos:'C',shooting:68,speed:62,strength:88,defense:80,dribbling:48,jumping:72,height:207},
    {id:'liuleather',name:'廖三宁',num:2,pos:'PG',shooting:72,speed:86,strength:66,defense:70,dribbling:88,jumping:76,height:189},
    {id:'wangshaojie',name:'王少杰',num:14,pos:'PF',shooting:70,speed:74,strength:78,defense:74,dribbling:64,jumping:78,height:208},
    {id:'shenjie',name:'沈梓捷',num:11,pos:'C',shooting:64,speed:68,strength:86,defense:82,dribbling:48,jumping:80,height:210},
    {id:'field',name:'费尔德',num:5,pos:'PG',shooting:80,speed:92,strength:72,defense:74,dribbling:92,jumping:82,height:175},
    {id:'mengzokai',name:'孟子凯',num:1,pos:'SF',shooting:74,speed:74,strength:72,defense:68,dribbling:70,jumping:74,height:196},
  ]},
  {id:'shandong',name:'山东高速',abbr:'山东',color:'#e60012',players:[
    {id:'gaosyan',name:'高诗岩',num:0,pos:'PG',shooting:72,speed:84,strength:68,defense:84,dribbling:84,jumping:72,height:186},
    {id:'taohanlin',name:'陶汉林',num:20,pos:'C',shooting:65,speed:58,strength:94,defense:78,dribbling:42,jumping:60,height:209},
    {id:'chenpeidong',name:'陈培东',num:44,pos:'SG',shooting:76,speed:82,strength:68,defense:70,dribbling:78,jumping:74,height:190},
    {id:'jiachengyi',name:'贾诚',num:23,pos:'PF',shooting:72,speed:68,strength:84,defense:72,dribbling:60,jumping:68,height:207},
    {id:'hanslin',name:'哈德森',num:14,pos:'SG',shooting:88,speed:82,strength:76,defense:74,dribbling:84,jumping:74,height:188},
    {id:'gailiwo',name:'吉伦沃特',num:33,pos:'PF',shooting:78,speed:74,strength:86,defense:74,dribbling:68,jumping:76,height:204},
    {id:'jiaoclong',name:'焦海龙',num:4,pos:'PF',shooting:70,speed:70,strength:80,defense:74,dribbling:62,jumping:72,height:206},
  ]},
  {id:'guangzhou',name:'广州龙狮',abbr:'广州',color:'#e20613',players:[
    {id:'chenyingjun',name:'陈盈骏',num:9,pos:'PG',shooting:78,speed:84,strength:70,defense:76,dribbling:88,jumping:72,height:183},
    {id:'zhumingzhen',name:'祝铭震',num:7,pos:'SF',shooting:76,speed:78,strength:78,defense:78,dribbling:72,jumping:76,height:196},
    {id:'cuijinyi',name:'崔永熙',num:8,pos:'SG',shooting:78,speed:82,strength:74,defense:76,dribbling:78,jumping:84,height:199},
    {id:'jiabumingru',name:'贾明儒',num:3,pos:'PG',shooting:70,speed:80,strength:62,defense:66,dribbling:82,jumping:66,height:185},
    {id:'guoKaifa',name:'郭凯',num:14,pos:'PF',shooting:68,speed:68,strength:82,defense:74,dribbling:58,jumping:66,height:205},
    {id:'moore',name:'摩尔',num:4,pos:'SG',shooting:84,speed:86,strength:72,defense:72,dribbling:84,jumping:76,height:185},
    {id:'campbell',name:'坎普',num:22,pos:'PF',shooting:70,speed:72,strength:84,defense:74,dribbling:62,jumping:74,height:203},
  ]},
  {id:'shenzhen',name:'深圳马可波罗',abbr:'深圳',color:'#c41230',players:[
    {id:'hexi',name:'贺希宁',num:3,pos:'SG',shooting:80,speed:82,strength:76,defense:80,dribbling:80,jumping:78,height:195},
    {id:'shenkijie2',name:'沈梓捷',num:11,pos:'C',shooting:64,speed:68,strength:86,defense:84,dribbling:48,jumping:82,height:210},
    {id:'gumingyang',name:'顾全',num:12,pos:'SF',shooting:82,speed:70,strength:78,defense:70,dribbling:68,jumping:66,height:201},
    {id:'baijintian',name:'白昊天',num:2,pos:'PG',shooting:70,speed:82,strength:66,defense:72,dribbling:82,jumping:70,height:188},
    {id:'zhoupeng',name:'周鹏',num:9,pos:'PF',shooting:76,speed:68,strength:80,defense:85,dribbling:66,jumping:68,height:206},
    {id:'salinger',name:'萨林杰',num:0,pos:'PF',shooting:78,speed:72,strength:90,defense:82,dribbling:68,jumping:74,height:206},
    {id:'sunhuoqin',name:'孙浩钦',num:5,pos:'SG',shooting:72,speed:80,strength:66,defense:68,dribbling:76,jumping:74,height:192},
  ]},
  {id:'qingdao',name:'青岛国信海天',abbr:'青岛',color:'#004c97',players:[
    {id:'yanghanshen',name:'杨瀚森',num:15,pos:'C',shooting:68,speed:60,strength:84,defense:86,dribbling:58,jumping:66,height:216},
    {id:'wangrh',name:'王睿泽',num:2,pos:'SF',shooting:80,speed:78,strength:76,defense:74,dribbling:74,jumping:78,height:197},
    {id:'zhaojiayi2',name:'赵嘉义',num:33,pos:'PF',shooting:74,speed:72,strength:78,defense:72,dribbling:66,jumping:74,height:203},
    {id:'dangmuyi',name:'段昂君',num:3,pos:'PG',shooting:70,speed:84,strength:64,defense:68,dribbling:82,jumping:72,height:185},
    {id:'pomurray',name:'鲍威尔',num:13,pos:'SG',shooting:84,speed:86,strength:74,defense:74,dribbling:84,jumping:78,height:188},
    {id:'michl',name:'米切尔',num:1,pos:'PF',shooting:70,speed:74,strength:86,defense:78,dribbling:62,jumping:80,height:206},
  ]},
  {id:'fujian',name:'福建浔兴',abbr:'福建',color:'#005eb8',players:[
    {id:'chenlinjian',name:'陈林坚',num:15,pos:'SF',shooting:88,speed:76,strength:72,defense:66,dribbling:72,jumping:72,height:196},
    {id:'liyiyang2',name:'黎伊扬',num:3,pos:'PG',shooting:68,speed:86,strength:60,defense:72,dribbling:88,jumping:68,height:183},
    {id:'young',name:'约瑟夫·杨',num:1,pos:'SG',shooting:86,speed:90,strength:72,defense:66,dribbling:90,jumping:82,height:188},
    {id:'makar',name:'梅克',num:5,pos:'C',shooting:66,speed:68,strength:84,defense:82,dribbling:50,jumping:78,height:213},
    {id:'zhuangzhan',name:'黄毅超',num:6,pos:'SG',shooting:74,speed:80,strength:68,defense:68,dribbling:74,jumping:74,height:195},
    {id:'suimran',name:'孙岩松',num:11,pos:'C',shooting:60,speed:58,strength:84,defense:72,dribbling:42,jumping:60,height:210},
  ]},
  {id:'jiangsu',name:'江苏肯帝亚',abbr:'江苏',color:'#003d7c',players:[
    {id:'wuguanxi2',name:'吴冠希',num:11,pos:'C',shooting:64,speed:62,strength:86,defense:80,dribbling:48,jumping:68,height:210},
    {id:'liutao',name:'刘志轩',num:7,pos:'SG',shooting:78,speed:72,strength:72,defense:74,dribbling:76,jumping:64,height:194},
    {id:'cuixialong',name:'崔晓龙',num:5,pos:'PG',shooting:70,speed:84,strength:68,defense:70,dribbling:82,jumping:72,height:186},
    {id:'majianhao',name:'马建豪',num:1,pos:'SF',shooting:72,speed:76,strength:68,defense:66,dribbling:70,jumping:74,height:200},
    {id:'blakeney',name:'布莱克尼',num:2,pos:'SG',shooting:88,speed:88,strength:76,defense:70,dribbling:86,jumping:82,height:193},
  ]},
  {id:'tongxi',name:'南京头排苏酒',abbr:'南京',color:'#002b5c',players:[
    {id:'linwei',name:'林葳',num:23,pos:'SG',shooting:86,speed:84,strength:70,defense:68,dribbling:80,jumping:78,height:191},
    {id:'wanglanjin',name:'王岚嵚',num:8,pos:'PG',shooting:74,speed:86,strength:64,defense:72,dribbling:88,jumping:70,height:183},
    {id:'bryant',name:'布莱恩特',num:0,pos:'PF',shooting:72,speed:74,strength:84,defense:78,dribbling:64,jumping:80,height:208},
    {id:'zengfanri',name:'曾繁日',num:15,pos:'C',shooting:58,speed:60,strength:86,defense:74,dribbling:42,jumping:64,height:206},
    {id:'zhaobaozhen',name:'赵柏清',num:13,pos:'PF',shooting:74,speed:70,strength:80,defense:70,dribbling:62,jumping:72,height:204},
  ]},
  {id:'jilin',name:'吉林九台农商',abbr:'吉林',color:'#dd0033',players:[
    {id:'jiangweize',name:'姜伟泽',num:13,pos:'SG',shooting:88,speed:84,strength:66,defense:68,dribbling:82,jumping:72,height:181},
    {id:'jiangyuxing',name:'姜宇星',num:5,pos:'SF',shooting:76,speed:82,strength:78,defense:76,dribbling:78,jumping:80,height:193},
    {id:'lidong',name:'李安',num:12,pos:'C',shooting:64,speed:58,strength:86,defense:76,dribbling:44,jumping:60,height:209},
    {id:'junior',name:'琼斯',num:55,pos:'SG',shooting:80,speed:88,strength:84,defense:78,dribbling:90,jumping:82,height:193},
    {id:'zhongChen',name:'钟诚',num:21,pos:'PF',shooting:70,speed:64,strength:84,defense:78,dribbling:58,jumping:62,height:205},
  ]},
  {id:'tianjin',name:'天津先行者',abbr:'天津',color:'#003893',players:[
    {id:'linqian',name:'林庭谦',num:0,pos:'PG',shooting:78,speed:86,strength:66,defense:74,dribbling:88,jumping:74,height:185},
    {id:'shideshuai',name:'时德帅',num:10,pos:'PF',shooting:74,speed:72,strength:80,defense:74,dribbling:64,jumping:72,height:205},
    {id:'terry',name:'田雨',num:7,pos:'SF',shooting:76,speed:74,strength:72,defense:68,dribbling:70,jumping:72,height:197},
    {id:'james',name:'大卫·詹姆斯',num:31,pos:'PF',shooting:76,speed:78,strength:86,defense:80,dribbling:68,jumping:82,height:203},
    {id:'lairongpei',name:'赖俊豪',num:9,pos:'C',shooting:58,speed:60,strength:82,defense:70,dribbling:40,jumping:64,height:207},
  ]},
  {id:'sichuan',name:'四川锦城',abbr:'四川',color:'#003d7c',players:[
    {id:'zuolian',name:'左朕年',num:13,pos:'SF',shooting:74,speed:74,strength:76,defense:68,dribbling:68,jumping:74,height:200},
    {id:'hanyu',name:'韩硕',num:33,pos:'PG',shooting:72,speed:72,strength:66,defense:74,dribbling:80,jumping:62,height:185},
    {id:'jinganyi',name:'景菡一',num:1,pos:'SG',shooting:72,speed:78,strength:70,defense:68,dribbling:74,jumping:74,height:192},
    {id:'zhangdayu',name:'张大宇',num:15,pos:'C',shooting:62,speed:58,strength:84,defense:74,dribbling:44,jumping:60,height:213},
    {id:'gordon',name:'高登',num:2,pos:'SG',shooting:84,speed:88,strength:74,defense:68,dribbling:86,jumping:78,height:190},
  ]},
  {id:'ningbo',name:'宁波町渥',abbr:'宁波',color:'#1a6dd4',players:[
    {id:'liyu',name:'李原宇',num:1,pos:'PF',shooting:68,speed:64,strength:82,defense:70,dribbling:54,jumping:62,height:206},
    {id:'wangchen',name:'王成',num:5,pos:'SF',shooting:68,speed:72,strength:70,defense:66,dribbling:66,jumping:70,height:198},
    {id:'ninghongyu',name:'宁鸿宇',num:9,pos:'C',shooting:58,speed:56,strength:84,defense:72,dribbling:40,jumping:58,height:210},
    {id:'mitch',name:'米切尔',num:2,pos:'SG',shooting:76,speed:82,strength:74,defense:72,dribbling:80,jumping:76,height:193},
    {id:'zhangbiaa',name:'张彪',num:7,pos:'PF',shooting:66,speed:66,strength:78,defense:68,dribbling:56,jumping:64,height:201},
  ]},
];

function getAllPlayers(){
  var all=[];
  for(var i=0;i<CBA_TEAMS.length;i++){
    var t=CBA_TEAMS[i];
    for(var j=0;j<t.players.length;j++){
      var p=t.players[j];
      p.teamId=t.id; p.teamName=t.name; p.teamAbbr=t.abbr; p.teamColor=t.color;
      all.push(p);
    }
  }
  return all;
}

function getPlayerById(id){
  for(var i=0;i<CBA_TEAMS.length;i++){
    var t=CBA_TEAMS[i];
    for(var j=0;j<t.players.length;j++){
      if(t.players[j].id===id){
        var p=t.players[j];
        p.teamId=t.id; p.teamName=t.name; p.teamAbbr=t.abbr; p.teamColor=t.color;
        return p;
      }
    }
  }
  return null;
}

function getTeams(){return CBA_TEAMS.map(function(t){return{id:t.id,name:t.name,abbr:t.abbr,color:t.color,count:t.players.length}})}
function getPlayersByTeam(tid){for(var i=0;i<CBA_TEAMS.length;i++){if(CBA_TEAMS[i].id===tid){var t=CBA_TEAMS[i];return t.players.map(function(p){p.teamId=t.id;p.teamName=t.name;p.teamAbbr=t.abbr;p.teamColor=t.color;return p})}}return[]}
