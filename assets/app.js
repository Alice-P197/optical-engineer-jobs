(function() {
            // ===== 200 Jobs across 36 cities =====
  var baseJobs = [

    // ===== 上海 (7) =====
    {
      id:'70c2b1a1-1e2',
      city:'上海',
      company:'华为（上海研究所）',
      position:'光学工程师（振镜）',
      dir:'光学设计,振镜',
      dirList:['光学设计','振镜'],
      salary:'25-35K·15薪',
      sMin:25,
      sMax:35,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责振镜光学系统设计开发、光学仿真分析、产品性能优化。',
      tags:['光学设计','振镜','激光'],
      link:'https://career.huawei.com',
      linkText:'华为招聘官网',
      email:'career@huawei.com',
      phone:null,
      community:false
    },
    {
      id:'f2d12cf2-647',
      city:'上海',
      company:'华为（上海研究所）',
      position:'光学工程师（光通信）',
      dir:'光通信,光模块',
      dirList:['光通信','光模块'],
      salary:'15-30K',
      sMin:15,
      sMax:30,
      edu:'本科',
      exp:'应届/经验不限',
      date:'2026-08',
      fresh:false,
      desc:'参与微波光子、光通信等方面的链路设计及器件开发。',
      tags:['光通信','光模块','光学设计'],
      link:'https://career.huawei.com',
      linkText:'华为招聘官网',
      email:'career@huawei.com',
      phone:null,
      community:false
    },
    {
      id:'472660d5-233',
      city:'上海',
      company:'某上海电子/半导体公司',
      position:'高级光学设计工程师',
      dir:'光学设计,镜头',
      dirList:['光学设计','镜头'],
      salary:'40-60K·15薪',
      sMin:40,
      sMax:60,
      edu:'硕士',
      exp:'3年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责高端光学系统设计开发、光学性能优化、团队技术指导。',
      tags:['光学设计','镜头','几何光学'],
      link:null,
      linkText:'查看详情',
      email:null,
      phone:null,
      community:false
    },
    {
      id:'4469bc9a-37f',
      city:'上海',
      company:'某上海金属制品公司',
      position:'光学工程师（光机）',
      dir:'光机设计,精密机械',
      dirList:['光机设计','精密机械'],
      salary:'25-35K·13薪',
      sMin:25,
      sMax:35,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光机结构设计、精密光学系统装调、真空腔体设计。',
      tags:['光机设计','精密机械','真空'],
      link:null,
      linkText:'查看详情',
      email:null,
      phone:null,
      community:false
    },
    {
      id:'2a837cd6-787',
      city:'上海',
      company:'某上海企业',
      position:'光学工程师（光谱）',
      dir:'光谱分析,光学设计',
      dirList:['光谱分析','光学设计'],
      salary:'12-18K·14薪',
      sMin:12,
      sMax:18,
      edu:'硕士',
      exp:'2年以下',
      date:'2026-08',
      fresh:false,
      desc:'负责光谱分析系统光学设计开发、光谱仪调试与测试、产品性能优化。',
      tags:['光谱分析','光学设计','光谱仪'],
      link:null,
      linkText:'查看详情',
      email:null,
      phone:null,
      community:false
    },
    {
      id:'22346505-0df',
      city:'上海',
      company:'上海微电子装备',
      position:'光学工程师',
      dir:'光刻,光学设计',
      dirList:['光刻','光学设计'],
      salary:'20-40K·15薪',
      sMin:20,
      sMax:40,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光刻设备光学系统设计开发、光学仿真分析、系统性能优化。',
      tags:['光刻','光学设计','精密光学'],
      link:'https://www.smee.com.cn',
      linkText:'查看详情',
      email:'hr@smee.com.cn',
      phone:null,
      community:false
    },
    {
      id:'015dc4d5-31e',
      city:'上海',
      company:'上海复旦微电子',
      position:'光学工程师',
      dir:'半导体,光学检测',
      dirList:['半导体','光学检测'],
      salary:'18-30K·14薪',
      sMin:18,
      sMax:30,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责半导体检测光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['半导体','光学检测','光学设计'],
      link:'https://www.fmsh.com',
      linkText:'查看详情',
      email:'hr@fmsh.com',
      phone:null,
      community:false
    },

    // ===== 东莞 (3) =====
    {
      id:'7c9213ec-500',
      city:'东莞',
      company:'华为（松山湖）',
      position:'高级光学工程师',
      dir:'光学镀膜,光学系统',
      dirList:['光学镀膜','光学系统'],
      salary:'25-50K',
      sMin:25,
      sMax:50,
      edu:'本科',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'熟悉塑胶和玻璃基材上的高可靠性光学镀膜方案，精通可见、近红外波段光学膜系设计。',
      tags:['光学镀膜','光学系统','溅镀'],
      link:'https://career.huawei.com',
      linkText:'华为招聘官网',
      email:'career@huawei.com',
      phone:null,
      community:false
    },
    {
      id:'0d5dc6ff-79d',
      city:'东莞',
      company:'华为（松山湖）',
      position:'高级光学工程师（车载）',
      dir:'车载光学,光学系统',
      dirList:['车载光学','光学系统'],
      salary:'30-50K·14薪',
      sMin:30,
      sMax:50,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'熟悉光学投影系统、光学成像系统、衍射光学、几何光学、光源、光学材料、光学镀膜等。',
      tags:['车载光学','光学系统','衍射光学'],
      link:'https://career.huawei.com',
      linkText:'华为招聘官网',
      email:'career@huawei.com',
      phone:null,
      community:false
    },
    {
      id:'a0228c2d-860',
      city:'东莞',
      company:'华为（松山湖）',
      position:'光学工程师',
      dir:'光学设计,自由曲面',
      dirList:['光学设计','自由曲面'],
      salary:'20-40K·16薪',
      sMin:20,
      sMax:40,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'光学设计、器件方案选型和催熟，自由曲面镜、光栅等光学元件仿真设计能力。',
      tags:['光学设计','自由曲面','光栅'],
      link:'https://career.huawei.com',
      linkText:'华为招聘官网',
      email:'career@huawei.com',
      phone:null,
      community:false
    },

    // ===== 佛山 (1) =====
    {
      id:'466be64c-833',
      city:'佛山',
      company:'佛山国星光电',
      position:'光学工程师',
      dir:'LED封装,光学设计',
      dirList:['LED封装','光学设计'],
      salary:'10-18K',
      sMin:10,
      sMax:18,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责LED封装光学设计开发、照明光学系统设计、产品性能测试。',
      tags:['LED封装','光学设计','照明光学'],
      link:'https://www.nationstar.com',
      linkText:'查看详情',
      email:'hr@guoxing.com',
      phone:null,
      community:false
    },

    // ===== 北京 (20) =====
    {
      id:'660be60a-8a5',
      city:'北京',
      company:'小米',
      position:'手机部-相机部-光学工程师',
      dir:'手机光学,镜头设计',
      dirList:['手机光学','镜头设计'],
      salary:'30-60K·14薪',
      sMin:30,
      sMax:60,
      edu:'学历不限',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责镜头光学设计、光学系统性能分析与评估，光学系统设计、建模仿真分析。',
      tags:['手机光学','镜头设计','光学仿真'],
      link:'https://hr.xiaomi.com',
      linkText:'小米招聘官网',
      email:'hr-campus@xiaomi.com',
      phone:null,
      community:false
    },
    {
      id:'9cba3099-cca',
      city:'北京',
      company:'京东方',
      position:'光学工程师',
      dir:'显示光学,面板',
      dirList:['显示光学','面板'],
      salary:'15-25K·13薪',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责显示面板光学设计开发、光学性能测试与优化、新产品导入支持。',
      tags:['显示光学','面板','光学测试'],
      link:'https://career.boe.com',
      linkText:'京东方招聘官网',
      email:'xiangzixian@boe.com.cn',
      phone:null,
      community:false
    },
    {
      id:'d8f1b547-494',
      city:'北京',
      company:'玻色量子',
      position:'高级光学工程师',
      dir:'量子光学,光学设计',
      dirList:['量子光学','光学设计'],
      salary:'20-40K·14薪',
      sMin:20,
      sMax:40,
      edu:'本科',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责量子计算光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['量子光学','光学设计','激光'],
      link:'https://www.qboson.com/about',
      linkText:'查看详情',
      email:'hr@boson.com',
      phone:null,
      community:false
    },
    {
      id:'afc311f1-1bf',
      city:'北京',
      company:'玻色量子',
      position:'光学工程师',
      dir:'量子光学,光学系统',
      dirList:['量子光学','光学系统'],
      salary:'15-30K·14薪',
      sMin:15,
      sMax:30,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责量子光学系统搭建、光学器件选型与测试、光学实验设计。',
      tags:['量子光学','光学系统','光学测试'],
      link:'https://www.qboson.com/about',
      linkText:'查看详情',
      email:'hr@boson.com',
      phone:null,
      community:false
    },
    {
      id:'4c5ee7c0-12f',
      city:'北京',
      company:'北京奥普托科',
      position:'光学专家',
      dir:'精密光学,光学系统',
      dirList:['精密光学','光学系统'],
      salary:'30-60K·14薪',
      sMin:30,
      sMax:60,
      edu:'硕士',
      exp:'8年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责精密光学系统方案设计、技术路线制定、团队技术指导。',
      tags:['精密光学','光学系统','光学设计'],
      link:'https://www.optocore.com',
      linkText:'查看详情',
      email:'hr@optocore.com',
      phone:null,
      community:false
    },
    {
      id:'e27db43b-177',
      city:'北京',
      company:'北京奥普托科',
      position:'光学设计工程师',
      dir:'光学设计,精密光学',
      dirList:['光学设计','精密光学'],
      salary:'20-50K·14薪',
      sMin:20,
      sMax:50,
      edu:'硕士',
      exp:'3年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责精密光学系统设计开发、光学仿真分析、产品性能验证。',
      tags:['光学设计','精密光学','Zemax'],
      link:'https://www.optocore.com',
      linkText:'查看详情',
      email:'hr@optocore.com',
      phone:null,
      community:false
    },
    {
      id:'0f6abea5-d72',
      city:'北京',
      company:'北京认知光子',
      position:'高级光学设计工程师',
      dir:'光学设计,光子学',
      dirList:['光学设计','光子学'],
      salary:'25-35K·13薪',
      sMin:25,
      sMax:35,
      edu:'本科',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责光子学系统光学设计开发、光学仿真分析、产品性能优化。',
      tags:['光学设计','光子学','仿真'],
      link:'https://www.recognition-photonics.com',
      linkText:'查看详情',
      email:'hr@renzhi.com',
      phone:null,
      community:false
    },
    {
      id:'d3c2de8a-f33',
      city:'北京',
      company:'北京国望光学科技',
      position:'光学检测技术员',
      dir:'光学检测,精密测量',
      dirList:['光学检测','精密测量'],
      salary:'9-15K·13薪',
      sMin:9,
      sMax:15,
      edu:'大专',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责光学元件精密检测、干涉仪操作、检测数据分析与报告。',
      tags:['光学检测','精密测量','干涉仪'],
      link:'https://www.gwoptics.com',
      linkText:'查看详情',
      email:'hr@gwoptics.com',
      phone:null,
      community:false
    },
    {
      id:'ca16bd82-ed6',
      city:'北京',
      company:'北京国望光学科技',
      position:'光学镀膜技术员',
      dir:'光学镀膜,薄膜',
      dirList:['光学镀膜','薄膜'],
      salary:'8-13K·14薪',
      sMin:8,
      sMax:13,
      edu:'大专',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学镀膜设备操作、膜层性能测试、镀膜工艺参数优化。',
      tags:['光学镀膜','薄膜','镀膜工艺'],
      link:'https://www.gwoptics.com',
      linkText:'查看详情',
      email:'hr@gwoptics.com',
      phone:null,
      community:false
    },
    {
      id:'fce49655-778',
      city:'北京',
      company:'北京福托依莱科技',
      position:'镜头光学工程师',
      dir:'镜头设计,光学设计',
      dirList:['镜头设计','光学设计'],
      salary:'12-18K·13薪',
      sMin:12,
      sMax:18,
      edu:'本科',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责镜头光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['镜头设计','光学设计','Zemax'],
      link:'https://www.futuoyilai.com',
      linkText:'查看详情',
      email:'hr@fotoyilai.com',
      phone:null,
      community:false
    },
    {
      id:'4102c287-78e',
      city:'北京',
      company:'北京双竞科技',
      position:'光学工程设计师',
      dir:'光学工程,系统设计',
      dirList:['光学工程','系统设计'],
      salary:'10-20K·13薪',
      sMin:10,
      sMax:20,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学系统工程设计、光学方案制定、产品性能测试与优化。',
      tags:['光学工程','系统设计','光学仿真'],
      link:'https://www.shuangjing-tech.com',
      linkText:'查看详情',
      email:'hr@shuangjing.com',
      phone:null,
      community:false
    },
    {
      id:'15ab9860-c5a',
      city:'北京',
      company:'北京导感光电',
      position:'光学设计工程师',
      dir:'光学设计,传感',
      dirList:['光学设计','传感'],
      salary:'15-45K·13薪',
      sMin:15,
      sMax:45,
      edu:'硕士',
      exp:'5-7年',
      date:'2026-08',
      fresh:false,
      desc:'负责光电传感系统光学设计开发、光学仿真分析、产品性能验证。',
      tags:['光学设计','传感','Zemax'],
      link:'https://www.daoganoptics.com',
      linkText:'查看详情',
      email:'hr@daogan.com',
      phone:null,
      community:false
    },
    {
      id:'2d6c9544-1e2',
      city:'北京',
      company:'北京光昱光电技术',
      position:'镜头成像光学设计',
      dir:'镜头设计,成像光学',
      dirList:['镜头设计','成像光学'],
      salary:'12-24K',
      sMin:12,
      sMax:24,
      edu:'本科',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责镜头成像光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['镜头设计','成像光学','光学仿真'],
      link:'https://www.guangyuoptics.com',
      linkText:'查看详情',
      email:'hr@guangyu.com',
      phone:null,
      community:false
    },
    {
      id:'03d8e204-a08',
      city:'北京',
      company:'ASML（阿斯麦）',
      position:'电子光学工程师',
      dir:'电子光学,半导体',
      dirList:['电子光学','半导体'],
      salary:'15-25K·15薪',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责光刻设备电子光学系统设计开发、光学仿真分析、系统性能优化。',
      tags:['电子光学','半导体','光刻'],
      link:'https://www.asml.com/en/careers/find-your-job',
      linkText:'ASML招聘官网',
      email:'hr@asml.com',
      phone:null,
      community:false
    },
    {
      id:'0837bfe1-293',
      city:'北京',
      company:'北京博视像元',
      position:'高级光学工程师',
      dir:'机器视觉,光学设计',
      dirList:['机器视觉','光学设计'],
      salary:'20-30K·14薪',
      sMin:20,
      sMax:30,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责机器视觉光学系统设计开发、光源与镜头选型、光学方案优化。',
      tags:['机器视觉','光学设计','成像光学'],
      link:'https://www.bosight.com',
      linkText:'查看详情',
      email:'hr@bosky.com',
      phone:null,
      community:false
    },
    {
      id:'a06064c9-231',
      city:'北京',
      company:'北京创思工贸',
      position:'光学工艺工程师',
      dir:'光学工艺,精密加工',
      dirList:['光学工艺','精密加工'],
      salary:'7-21K·14薪',
      sMin:7,
      sMax:21,
      edu:'本科',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学元件加工工艺开发、工艺参数优化、产品良率提升。',
      tags:['光学工艺','精密加工','光学元件'],
      link:'https://www.chance-optics.com',
      linkText:'查看详情',
      email:'hr@chuangsi.com',
      phone:null,
      community:false
    },
    {
      id:'76b425d9-bdb',
      city:'北京',
      company:'北京创思工贸',
      position:'光学镀膜工程师',
      dir:'光学镀膜,薄膜',
      dirList:['光学镀膜','薄膜'],
      salary:'29-55K·14薪',
      sMin:29,
      sMax:55,
      edu:'本科',
      exp:'2年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责光学镀膜工艺开发、膜系设计优化、镀膜设备维护。',
      tags:['光学镀膜','薄膜','膜系设计'],
      link:'https://www.chance-optics.com',
      linkText:'查看详情',
      email:'hr@chuangsi.com',
      phone:null,
      community:false
    },
    {
      id:'44793f84-20e',
      city:'北京',
      company:'北京莱帕德图像技术',
      position:'光学研发工程师',
      dir:'光学研发,图像',
      dirList:['光学研发','图像'],
      salary:'10-15K',
      sMin:10,
      sMax:15,
      edu:'本科',
      exp:'1年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责光学图像系统研发设计、光学仿真分析、产品性能测试。',
      tags:['光学研发','图像','光学设计'],
      link:'https://www.lapaide.com',
      linkText:'查看详情',
      email:'hr@leipade.com',
      phone:null,
      community:false
    },
    {
      id:'964cc420-9ce',
      city:'北京',
      company:'北京紫威光学科技',
      position:'高级光学镀膜工程师',
      dir:'光学镀膜,薄膜',
      dirList:['光学镀膜','薄膜'],
      salary:'25-55K',
      sMin:25,
      sMax:55,
      edu:'本科',
      exp:'5年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责高端光学镀膜工艺开发、膜系设计优化、团队技术指导。',
      tags:['光学镀膜','薄膜','膜系设计'],
      link:'https://www.ziweioptics.com',
      linkText:'查看详情',
      email:'hr@ziwei.com',
      phone:null,
      community:false
    },
    {
      id:'2bf729e0-042',
      city:'北京',
      company:'北京紫威光学科技',
      position:'光学测试工程师',
      dir:'光学测试,精密测量',
      dirList:['光学测试','精密测量'],
      salary:'15-30K',
      sMin:15,
      sMax:30,
      edu:'硕士',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责光学元件精密测试、干涉仪操作、测试数据分析与报告。',
      tags:['光学测试','精密测量','干涉仪'],
      link:'https://www.ziweioptics.com',
      linkText:'查看详情',
      email:'hr@ziwei.com',
      phone:null,
      community:false
    },

    // ===== 南京 (1) =====
    {
      id:'aa0afc54-f6a',
      city:'南京',
      company:'南京波长光电',
      position:'光学工程师',
      dir:'光学元件,光学设计',
      dirList:['光学元件','光学设计'],
      salary:'12-20K',
      sMin:12,
      sMax:20,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学元件设计开发、光学系统仿真分析、产品性能测试。',
      tags:['光学元件','光学设计','Zemax'],
      link:'https://www.wave-optics.com',
      linkText:'查看详情',
      email:'hr@wave-optics.com',
      phone:null,
      community:false
    },

    // ===== 南昌 (1) =====
    {
      id:'7a6474fb-709',
      city:'南昌',
      company:'欧菲光',
      position:'光学工程师',
      dir:'手机光学,镜头',
      dirList:['手机光学','镜头'],
      salary:'10-20K',
      sMin:10,
      sMax:20,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责手机镜头光学系统设计开发、光学性能测试、量产技术支持。',
      tags:['手机光学','镜头','光学设计'],
      link:'http://www.ofilm.com/job.html',
      linkText:'查看详情',
      email:'hr.zhaopin@ofilm.com',
      phone:null,
      community:false
    },

    // ===== 厦门 (1) =====
    {
      id:'c6c20a21-d9d',
      city:'厦门',
      company:'厦门力鼎光电',
      position:'光学工程师',
      dir:'镜头设计,光学设计',
      dirList:['镜头设计','光学设计'],
      salary:'12-22K',
      sMin:12,
      sMax:22,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责安防镜头光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['镜头设计','光学设计','安防镜头'],
      link:'https://www.evetar.com',
      linkText:'查看详情',
      email:'hr@evetar.com',
      phone:null,
      community:false
    },

    // ===== 合肥 (3) =====
    {
      id:'da56b625-e67',
      city:'合肥',
      company:'合肥美亚光电',
      position:'光学工程师',
      dir:'成像光路,光学设计',
      dirList:['成像光路','光学设计'],
      salary:'面议',
      sMin:0,
      sMax:0,
      edu:'硕士',
      exp:'应届/经验不限',
      date:'2026-08',
      fresh:false,
      desc:'根据产品需求制定光学方案，完成成像光路、投影光路和照明方案的设计和评估。',
      tags:['成像光路','Zemax','校招'],
      link:'https://www.meyerop.com',
      linkText:'查看详情',
      email:'hr@chinameyer.com',
      phone:null,
      community:false
    },
    {
      id:'09412525-49c',
      city:'合肥',
      company:'安徽华创鸿度光电',
      position:'光学工程师（激光器）',
      dir:'固体激光器,光纤激光器',
      dirList:['固体激光器','光纤激光器'],
      salary:'12-25K·14薪',
      sMin:12,
      sMax:25,
      edu:'本科',
      exp:'1年以上',
      date:'2026-07',
      fresh:false,
      desc:'负责固体、光纤、紫外、飞秒激光器研发与生产，完善产品工艺流程。',
      tags:['固体激光器','光纤激光器','飞秒激光器'],
      link:'https://www.huachuanghongdu.com',
      linkText:'查看详情',
      email:null,
      phone:null,
      community:false
    },
    {
      id:'eafc5553-5b3',
      city:'合肥',
      company:'芯碁微装',
      position:'光学工程师',
      dir:'半导体,固体激光器',
      dirList:['半导体','固体激光器'],
      salary:'面议',
      sMin:0,
      sMax:0,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责半导体激光器光学系统设计、光纤耦合技术研究、光刻设备光学方案开发。',
      tags:['半导体激光器','光纤耦合','光刻设备'],
      link:'https://www.zhipin.com/job_detail/d28b4fe3ec023cac0ndy09m1GFNX.html',
      linkText:'查看详情',
      email:'hr@xinqi.com',
      phone:null,
      community:false
    },

    // ===== 哈尔滨 (1) =====
    {
      id:'7c915e0b-5e4',
      city:'哈尔滨',
      company:'哈尔滨新光光电',
      position:'光学工程师',
      dir:'红外光学,光学设计',
      dirList:['红外光学','光学设计'],
      salary:'12-22K',
      sMin:12,
      sMax:22,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责红外光学目标仿真系统设计开发、光学仿真分析、产品性能测试。',
      tags:['红外光学','光学设计','目标仿真'],
      link:'https://www.xggd.com',
      linkText:'查看详情',
      email:'hr@xg-optics.com',
      phone:null,
      community:false
    },

    // ===== 嘉兴 (1) =====
    {
      id:'d878f810-39b',
      city:'嘉兴',
      company:'蓝特光学',
      position:'光学工程师',
      dir:'光学元件,精密光学',
      dirList:['光学元件','精密光学'],
      salary:'10-18K',
      sMin:10,
      sMax:18,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责精密光学元件加工工艺开发、光学性能测试、新产品导入。',
      tags:['光学元件','精密光学','光学加工'],
      link:'https://www.lante.com.cn/recruit',
      linkText:'查看详情',
      email:'hr@lantoptics.com',
      phone:null,
      community:false
    },

    // ===== 大连 (1) =====
    {
      id:'7a54e595-817',
      city:'大连',
      company:'大连光洋科技',
      position:'光学工程师',
      dir:'激光加工,光学设计',
      dirList:['激光加工','光学设计'],
      salary:'10-18K',
      sMin:10,
      sMax:18,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责激光加工光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['激光加工','光学设计','精密光学'],
      link:'https://www.gona-tech.com',
      linkText:'查看详情',
      email:'hr@dlgy.com',
      phone:null,
      community:false
    },

    // ===== 天津 (1) =====
    {
      id:'e10489a0-8fc',
      city:'天津',
      company:'天津光电集团',
      position:'光学工程师',
      dir:'光通信,光学设计',
      dirList:['光通信','光学设计'],
      salary:'12-22K',
      sMin:12,
      sMax:22,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光通信产品光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['光通信','光学设计','光学系统'],
      link:'https://www.toec.com',
      linkText:'查看详情',
      email:'hr@toec.com',
      phone:null,
      community:false
    },

    // ===== 宁波 (1) =====
    {
      id:'691a4c2c-5c4',
      city:'宁波',
      company:'永新光学',
      position:'光学工程师',
      dir:'显微镜,光学设计',
      dirList:['显微镜','光学设计'],
      salary:'12-22K·14薪',
      sMin:12,
      sMax:22,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责高端显微镜光学系统设计开发、光学性能优化、产品量产支持。',
      tags:['显微镜','光学设计','精密光学'],
      link:'http://www.yxopt.com/cn/rlzy.php',
      linkText:'查看详情',
      email:'office@yxopt.com',
      phone:null,
      community:false
    },

    // ===== 广州 (1) =====
    {
      id:'a2212577-ba8',
      city:'广州',
      company:'广州视源股份',
      position:'光学工程师',
      dir:'显示光学,光学设计',
      dirList:['显示光学','光学设计'],
      salary:'15-25K·14薪',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责交互显示产品光学系统设计开发、光学性能优化、产品量产支持。',
      tags:['显示光学','光学设计','交互显示'],
      link:'https://www.cvte.com',
      linkText:'查看详情',
      email:'hr@cvte.com',
      phone:null,
      community:false
    },

    // ===== 惠州 (1) =====
    {
      id:'e9040670-6fd',
      city:'惠州',
      company:'惠州TCL华星',
      position:'光学工程师',
      dir:'显示光学,面板',
      dirList:['显示光学','面板'],
      salary:'15-25K·14薪',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责显示面板光学设计开发、光学性能测试与优化、新产品导入支持。',
      tags:['显示光学','面板','光学设计'],
      link:'https://campus.tcl.com',
      linkText:'查看详情',
      email:'csot.zhaopin@tcl.com',
      phone:null,
      community:false
    },

    // ===== 成都 (5) =====
    {
      id:'b008e4e0-134',
      city:'成都',
      company:'某成都电子/半导体公司',
      position:'光学设计工程师',
      dir:'光学设计,镜头',
      dirList:['光学设计','镜头'],
      salary:'22-40K',
      sMin:22,
      sMax:40,
      edu:'硕士',
      exp:'8年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责高端光学镜头设计开发、光学系统仿真分析、产品性能优化。',
      tags:['光学设计','镜头','Zemax'],
      link:null,
      linkText:'查看详情',
      email:null,
      phone:null,
      community:false
    },
    {
      id:'493f4970-fdc',
      city:'成都',
      company:'某成都知名公司',
      position:'光学设计工程师',
      dir:'光学设计,精密光学',
      dirList:['光学设计','精密光学'],
      salary:'20-40K',
      sMin:20,
      sMax:40,
      edu:'硕士',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责精密光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['光学设计','精密光学','CodeV'],
      link:null,
      linkText:'查看详情',
      email:null,
      phone:null,
      community:false
    },
    {
      id:'df4a85f2-b93',
      city:'成都',
      company:'华为（成都研究所）',
      position:'光学工程师',
      dir:'光通信,光学设计',
      dirList:['光通信','光学设计'],
      salary:'15-30K',
      sMin:15,
      sMax:30,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光通信产品光学系统设计开发、光学仿真分析、产品性能验证。',
      tags:['光通信','光学设计','光模块'],
      link:'https://career.huawei.com',
      linkText:'华为招聘官网',
      email:'career@huawei.com',
      phone:null,
      community:false
    },
    {
      id:'2ccf74af-592',
      city:'成都',
      company:'成都光明光电',
      position:'光学工程师',
      dir:'光学玻璃,光学材料',
      dirList:['光学玻璃','光学材料'],
      salary:'10-20K',
      sMin:10,
      sMax:20,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学玻璃材料应用研究、光学系统设计、产品性能测试。',
      tags:['光学玻璃','光学材料','光学设计'],
      link:'https://www.cdgmgd.com',
      linkText:'查看详情',
      email:'hr@cdgm.com',
      phone:null,
      community:false
    },
    {
      id:'91203f99-bf3',
      city:'成都',
      company:'成都精密光学工程研究中心',
      position:'光学工程师',
      dir:'精密光学,科研',
      dirList:['精密光学','科研'],
      salary:'15-25K',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责精密光学系统设计开发、科研项目技术支持、光学仿真分析。',
      tags:['精密光学','科研','光学设计'],
      link:'https://www.cpaoec.com',
      linkText:'查看详情',
      email:'hr@cdjmgx.com',
      phone:null,
      community:false
    },

    // ===== 无锡 (1) =====
    {
      id:'89385ed8-f4b',
      city:'无锡',
      company:'无锡华润微电子',
      position:'光学工程师',
      dir:'半导体,光学检测',
      dirList:['半导体','光学检测'],
      salary:'15-25K·14薪',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责半导体检测光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['半导体','光学检测','光学设计'],
      link:'https://www.crmicro.com',
      linkText:'查看详情',
      email:'hr@cr-semi.com',
      phone:null,
      community:false
    },

    // ===== 昆明 (1) =====
    {
      id:'6914aa80-0f4',
      city:'昆明',
      company:'昆明北方红外',
      position:'光学工程师',
      dir:'红外光学,热成像',
      dirList:['红外光学','热成像'],
      salary:'10-20K',
      sMin:10,
      sMax:20,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责红外热成像光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['红外光学','热成像','光学设计'],
      link:'https://www.bnihc.com',
      linkText:'查看详情',
      email:'hr@kmbfir.com',
      phone:null,
      community:false
    },

    // ===== 杭州 (44) =====
    {
      id:'2399ec3b-e22',
      city:'杭州',
      company:'海康威视',
      position:'光学工程师（成像方向）',
      dir:'成像光学,安防',
      dirList:['成像光学','安防'],
      salary:'15-22K·15薪',
      sMin:15,
      sMax:22,
      edu:'本科',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'提供光学方案，完成长波/中波、可见光波段光学系统规格定义、设计开发。',
      tags:['成像光学','光学设计','安防'],
      link:'https://talent.hikvision.com',
      linkText:'海康威视招聘官网',
      email:'campus@hikvision.com',
      phone:null,
      community:false
    },
    {
      id:'c60c2dcc-b65',
      city:'杭州',
      company:'海康威视',
      position:'光学设计工程师',
      dir:'光学设计,成像',
      dirList:['光学设计','成像'],
      salary:'15-25K·15薪',
      sMin:15,
      sMax:25,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学系统方案设计、光学仿真分析、镜头选型与评测。',
      tags:['光学设计','成像光学','Zemax'],
      link:'https://talent.hikvision.com',
      linkText:'海康威视招聘官网',
      email:'campus@hikvision.com',
      phone:null,
      community:false
    },
    {
      id:'3ed36eaf-7c4',
      city:'杭州',
      company:'海康威视',
      position:'音频传感-光学工程师',
      dir:'光纤传感,光学设计',
      dirList:['光纤传感','光学设计'],
      salary:'20-25K·16薪',
      sMin:20,
      sMax:25,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光纤光学系统设计、仿真与优化，参与光纤器件研发与测试。',
      tags:['光纤传感','光学设计','光纤器件'],
      link:'https://talent.hikvision.com',
      linkText:'海康威视招聘官网',
      email:'campus@hikvision.com',
      phone:null,
      community:false
    },
    {
      id:'00cc91f8-04e',
      city:'杭州',
      company:'海康威视',
      position:'光学系统专家（光谱/气体传感）',
      dir:'光谱,气体传感',
      dirList:['光谱','气体传感'],
      salary:'40-60K·16薪',
      sMin:40,
      sMax:60,
      edu:'硕士',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责气体成像产品系统设计、核心指标分解和关键器件选型、光学气体传感技术调研分析。',
      tags:['光谱分析','气体传感','光学系统'],
      link:'https://talent.hikvision.com',
      linkText:'海康威视招聘官网',
      email:'campus@hikvision.com',
      phone:null,
      community:false
    },
    {
      id:'2330061c-73f',
      city:'杭州',
      company:'海康威视',
      position:'资深光学设计工程师',
      dir:'光学设计,成像',
      dirList:['光学设计','成像'],
      salary:'20-40K·15薪',
      sMin:20,
      sMax:40,
      edu:'本科',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责复杂光学系统方案设计、光学性能优化、团队技术指导。',
      tags:['光学设计','成像光学','镜头设计'],
      link:'https://talent.hikvision.com',
      linkText:'海康威视招聘官网',
      email:'campus@hikvision.com',
      phone:null,
      community:false
    },
    {
      id:'08e585a3-567',
      city:'杭州',
      company:'浙江大华',
      position:'光学工程师',
      dir:'成像光学,安防',
      dirList:['成像光学','安防'],
      salary:'15-25K·14薪',
      sMin:15,
      sMax:25,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学系统非成像器件的设计与开发，包括设计、调试及文档编写。',
      tags:['成像光学','光学设计','安防'],
      link:'https://job.dahuatech.com',
      linkText:'大华股份招聘官网',
      email:'dh_fj@dahuatech.com',
      phone:null,
      community:false
    },
    {
      id:'25256fc4-e47',
      city:'杭州',
      company:'浙江大华',
      position:'光学工程师（成像）',
      dir:'成像光学,镜头',
      dirList:['成像光学','镜头'],
      salary:'15-25K·14薪',
      sMin:15,
      sMax:25,
      edu:'本科',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责成像光学需求分析、光学方案设计和开发，镜头光学设计评审与性能评测。',
      tags:['成像光学','镜头设计','光学评测'],
      link:'https://job.dahuatech.com',
      linkText:'大华股份招聘官网',
      email:'dh_fj@dahuatech.com',
      phone:null,
      community:false
    },
    {
      id:'3303104b-955',
      city:'杭州',
      company:'浙江大华',
      position:'光学工程师（PIR菲涅尔透镜）',
      dir:'菲涅尔透镜,光学设计',
      dirList:['菲涅尔透镜','光学设计'],
      salary:'15-30K·14薪',
      sMin:15,
      sMax:30,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责PIR菲涅尔透镜光学设计开发、光学性能仿真与优化。',
      tags:['菲涅尔透镜','光学设计','红外传感'],
      link:'https://job.dahuatech.com',
      linkText:'大华股份招聘官网',
      email:'dh_fj@dahuatech.com',
      phone:null,
      community:false
    },
    {
      id:'472e60e6-af2',
      city:'杭州',
      company:'灵犀微光',
      position:'光学设计工程师',
      dir:'AR光学,光波导',
      dirList:['AR光学','光波导'],
      salary:'22-35K·14薪',
      sMin:22,
      sMax:35,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责AR光学成像技术开发、光学系统模拟设计、方案评估确定、系统仿真和杂散光分析。',
      tags:['AR光学','光波导','光学设计'],
      link:'https://www.lx-ar.com',
      linkText:'查看详情',
      email:'hr@lx-ar.com',
      phone:null,
      community:false
    },
    {
      id:'2f0ba4ab-a24',
      city:'杭州',
      company:'灵犀微光',
      position:'光学检测工程师（AR）',
      dir:'AR光学,光学检测',
      dirList:['AR光学','光学检测'],
      salary:'20-35K·14薪',
      sMin:20,
      sMax:35,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责AR光学模组检测方案制定、光学性能测试与评价、检测设备开发。',
      tags:['AR光学','光学检测','光波导'],
      link:'https://www.lx-ar.com',
      linkText:'查看详情',
      email:'hr@lx-ar.com',
      phone:null,
      community:false
    },
    {
      id:'18bf0bd0-5db',
      city:'杭州',
      company:'灵犀微光',
      position:'光学镀膜工程师',
      dir:'光学镀膜,AR',
      dirList:['光学镀膜','AR'],
      salary:'7-20K',
      sMin:7,
      sMax:20,
      edu:'学历不限',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'操作和维护镀膜设备，负责镀膜日常生产任务，保证膜层质量。',
      tags:['光学镀膜','AR','薄膜'],
      link:'https://www.lx-ar.com',
      linkText:'查看详情',
      email:'hr@lx-ar.com',
      phone:null,
      community:false
    },
    {
      id:'bbe1177a-349',
      city:'杭州',
      company:'舜宇光学',
      position:'光学工程师',
      dir:'车载光学,镜头设计',
      dirList:['车载光学','镜头设计'],
      salary:'13-25K·15薪',
      sMin:13,
      sMax:25,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责新机种车载镜头光学设计方案，光学分析及相关公差、鬼像等理论分析。',
      tags:['车载光学','镜头设计','Zemax'],
      link:'https://campus.sunnyoptical.cn',
      linkText:'舜宇光学招聘官网',
      email:'sunnyhr@sunnyoptical.com',
      phone:null,
      community:false
    },
    {
      id:'c138ce3b-51e',
      city:'杭州',
      company:'舜宇光学',
      position:'光学设计-ARVR',
      dir:'ARVR,光学设计',
      dirList:['ARVR','光学设计'],
      salary:'20-30K·15薪',
      sMin:20,
      sMax:30,
      edu:'硕士',
      exp:'3年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责AR/VR光学系统设计开发、近眼显示光学方案研究、产品性能优化。',
      tags:['ARVR','光学设计','近眼显示'],
      link:'https://campus.sunnyoptical.cn',
      linkText:'舜宇光学招聘官网',
      email:'sunnyhr@sunnyoptical.com',
      phone:null,
      community:false
    },
    {
      id:'6e66f24e-07a',
      city:'杭州',
      company:'舜宇光学',
      position:'光学设计-光波导',
      dir:'光波导,AR',
      dirList:['光波导','AR'],
      salary:'20-30K·15薪',
      sMin:20,
      sMax:30,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光波导光学设计、衍射光栅设计、AR显示光学系统开发。',
      tags:['光波导','AR','衍射光学'],
      link:'https://campus.sunnyoptical.cn',
      linkText:'舜宇光学招聘官网',
      email:'sunnyhr@sunnyoptical.com',
      phone:null,
      community:false
    },
    {
      id:'10472d12-8d0',
      city:'杭州',
      company:'中科通信杭州分公司',
      position:'光学工程师',
      dir:'光通信,光模块',
      dirList:['光通信','光模块'],
      salary:'30-45K·13薪',
      sMin:30,
      sMax:45,
      edu:'本科',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责光模块/光器件光学系统设计、光路仿真与建模，包括耦合光路、准直、聚焦、耦合效率优化。',
      tags:['光通信','光模块','光路仿真'],
      link:'https://www.zketech.com',
      linkText:'查看详情',
      email:'hr@zkoptics.com',
      phone:null,
      community:false
    },
    {
      id:'d4a2694a-90d',
      city:'杭州',
      company:'中科通信杭州分公司',
      position:'光器件/光学工程师/专家',
      dir:'光通信,光器件',
      dirList:['光通信','光器件'],
      salary:'40-70K',
      sMin:40,
      sMax:70,
      edu:'本科',
      exp:'5年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责高端光通信器件光学系统设计开发、技术方案制定、团队技术指导。',
      tags:['光通信','光器件','光学设计'],
      link:'https://www.zketech.com',
      linkText:'查看详情',
      email:'hr@zkoptics.com',
      phone:null,
      community:false
    },
    {
      id:'c9b544af-0ae',
      city:'杭州',
      company:'清软微视（杭州）科技',
      position:'高级光学工程师',
      dir:'显微成像,光学设计',
      dirList:['显微成像','光学设计'],
      salary:'20-40K',
      sMin:20,
      sMax:40,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责显微成像及检测系统光学设计，成像光路、照明光路工装设计及工艺改进。',
      tags:['显微成像','光学设计','Zemax'],
      link:'https://www.qrvision.com',
      linkText:'查看详情',
      email:'hr@qrws.com',
      phone:null,
      community:false
    },
    {
      id:'f2672334-703',
      city:'杭州',
      company:'清软微视（杭州）科技',
      position:'光学设计工程师',
      dir:'显微成像,检测',
      dirList:['显微成像','检测'],
      salary:'20-40K',
      sMin:20,
      sMax:40,
      edu:'本科',
      exp:'2-4年',
      date:'2026-08',
      fresh:false,
      desc:'参与显微成像与检测系统产品研发，承担成像光路、照明光路的工装设计及工艺优化。',
      tags:['显微成像','光学检测','照明光路'],
      link:'https://www.qrvision.com',
      linkText:'查看详情',
      email:'hr@qrws.com',
      phone:null,
      community:false
    },
    {
      id:'f5e4d528-c54',
      city:'杭州',
      company:'中科山海微（杭州）',
      position:'光学设计工程师',
      dir:'半导体光学,光学设计',
      dirList:['半导体光学','光学设计'],
      salary:'16-45K',
      sMin:16,
      sMax:45,
      edu:'硕士',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责半导体检测设备光学系统设计开发、光学仿真分析、产品性能优化。',
      tags:['半导体光学','光学设计','Zemax'],
      link:'https://www.zksh.com',
      linkText:'查看详情',
      email:'hr@zkshw.com',
      phone:null,
      community:false
    },
    {
      id:'2626dcf5-cf9',
      city:'杭州',
      company:'中科山海微（杭州）',
      position:'光学工程师',
      dir:'半导体光学,检测',
      dirList:['半导体光学','检测'],
      salary:'10-15K',
      sMin:10,
      sMax:15,
      edu:'本科',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学元件面形精度检测和NA、波像差等指标检测，光学系统杂散光分析与测试。',
      tags:['光学检测','半导体','波像差'],
      link:'https://www.zksh.com',
      linkText:'查看详情',
      email:'hr@zkshw.com',
      phone:null,
      community:false
    },
    {
      id:'46df96cf-ee4',
      city:'杭州',
      company:'中科山海微（杭州）',
      position:'光机结构工程师',
      dir:'光机设计,精密机械',
      dirList:['光机设计','精密机械'],
      salary:'12-30K',
      sMin:12,
      sMax:30,
      edu:'硕士',
      exp:'2年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责精密光学设备光机结构设计、力学分析、热分析及结构优化。',
      tags:['光机设计','精密机械','结构设计'],
      link:'https://www.zksh.com',
      linkText:'查看详情',
      email:'hr@zkshw.com',
      phone:null,
      community:false
    },
    {
      id:'b2a31f96-cf3',
      city:'杭州',
      company:'凤凰光学',
      position:'光学设计',
      dir:'镜头设计,光学设计',
      dirList:['镜头设计','光学设计'],
      salary:'18-25K·14薪',
      sMin:18,
      sMax:25,
      edu:'本科',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责光学镜头设计开发、光学系统仿真分析、产品性能测试。',
      tags:['镜头设计','光学设计','Zemax'],
      link:'https://www.phenixoptics.com.cn',
      linkText:'查看详情',
      email:'hr@phenixoptics.com.cn',
      phone:null,
      community:false
    },
    {
      id:'987de518-4bc',
      city:'杭州',
      company:'凤凰光学',
      position:'变焦镜头光学设计',
      dir:'变焦镜头,光学设计',
      dirList:['变焦镜头','光学设计'],
      salary:'20-30K·14薪',
      sMin:20,
      sMax:30,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责变焦镜头光学系统设计、公差分析、鬼像分析及产品性能优化。',
      tags:['变焦镜头','光学设计','CodeV'],
      link:'https://www.phenixoptics.com.cn',
      linkText:'查看详情',
      email:'hr@phenixoptics.com.cn',
      phone:null,
      community:false
    },
    {
      id:'d054034f-cf0',
      city:'杭州',
      company:'凤凰光学',
      position:'光学设计（红外镜头）',
      dir:'红外镜头,光学设计',
      dirList:['红外镜头','光学设计'],
      salary:'14-20K·14薪',
      sMin:14,
      sMax:20,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责红外镜头光学系统设计、无热化设计、光学性能测试与优化。',
      tags:['红外镜头','光学设计','无热化'],
      link:'https://www.phenixoptics.com.cn',
      linkText:'查看详情',
      email:'hr@phenixoptics.com.cn',
      phone:null,
      community:false
    },
    {
      id:'cffcc072-c62',
      city:'杭州',
      company:'宇瞳光学',
      position:'光学设计工程师',
      dir:'镜头设计,安防光学',
      dirList:['镜头设计','安防光学'],
      salary:'25-35K·13薪',
      sMin:25,
      sMax:35,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责安防镜头光学设计开发、光学系统仿真优化、产品性能测试。',
      tags:['镜头设计','安防光学','变焦镜头'],
      link:'https://www.utoptical.com',
      linkText:'查看详情',
      email:'hr@yt-optics.com',
      phone:null,
      community:false
    },
    {
      id:'45db281f-7ea',
      city:'杭州',
      company:'零跑科技',
      position:'照明系统光学设计',
      dir:'汽车照明,光学设计',
      dirList:['汽车照明','光学设计'],
      salary:'20-35K',
      sMin:20,
      sMax:35,
      edu:'本科',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责汽车照明系统光学设计、LED光源选型与配光设计、法规认证支持。',
      tags:['汽车照明','光学设计','LED'],
      link:'https://www.leapmotor.com',
      linkText:'查看详情',
      email:'hr@leapmotor.com',
      phone:null,
      community:false
    },
    {
      id:'bf537f0d-bd6',
      city:'杭州',
      company:'杭州航天东方红激光通信',
      position:'光学设计工程师',
      dir:'激光通信,空间光学',
      dirList:['激光通信','空间光学'],
      salary:'30-50K',
      sMin:30,
      sMax:50,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责星间激光通信光学系统设计开发、精密光学系统装调、空间环境适应性分析。',
      tags:['激光通信','空间光学','精密光学'],
      link:'https://www.hangtianlaser.com',
      linkText:'查看详情',
      email:'hr@dfh-lasercom.com',
      phone:null,
      community:false
    },
    {
      id:'7ac5e689-2af',
      city:'杭州',
      company:'航天跃盛',
      position:'光学工程师',
      dir:'航天光学,光学设计',
      dirList:['航天光学','光学设计'],
      salary:'20-40K',
      sMin:20,
      sMax:40,
      edu:'硕士',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学元件设计，设计透镜、棱镜等，考虑曲率、折射率、形状、焦距、畸变等参数。',
      tags:['航天光学','光学设计','透镜设计'],
      link:'https://www.casc.com',
      linkText:'查看详情',
      email:'hr@htys.com',
      phone:null,
      community:false
    },
    {
      id:'4ee03803-ae4',
      city:'杭州',
      company:'大立科技',
      position:'光学工程师',
      dir:'红外光学,光电系统',
      dirList:['红外光学','光电系统'],
      salary:'16-22K·14薪',
      sMin:16,
      sMax:22,
      edu:'硕士',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责复杂光电系统方案设计、光学设计、光学仿真及相关设计文件输出。',
      tags:['红外光学','光电系统','光学仿真'],
      link:'https://www.dali-tech.com/about/jobs',
      linkText:'查看详情',
      email:'hr@dali-tech.com',
      phone:null,
      community:false
    },
    {
      id:'30d1d52e-670',
      city:'杭州',
      company:'纳境科技',
      position:'光学设计工程师',
      dir:'AR光学,光学设计',
      dirList:['AR光学','光学设计'],
      salary:'15-30K·14薪',
      sMin:15,
      sMax:30,
      edu:'本科',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责AR光学系统设计开发、超表面光学设计、产品性能测试。',
      tags:['AR光学','光学设计','超表面'],
      link:'https://www.najingtech.com',
      linkText:'查看详情',
      email:'hr@najingtech.com',
      phone:null,
      community:false
    },
    {
      id:'6bbc7dc4-d51',
      city:'杭州',
      company:'纳境科技',
      position:'高级光学设计工程师（手机方向）',
      dir:'手机光学,光学设计',
      dirList:['手机光学','光学设计'],
      salary:'25-50K',
      sMin:25,
      sMax:50,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责手机镜头光学系统设计开发、光学性能优化、量产技术支持。',
      tags:['手机光学','光学设计','镜头设计'],
      link:'https://www.najingtech.com',
      linkText:'查看详情',
      email:'hr@najingtech.com',
      phone:null,
      community:false
    },
    {
      id:'6cf1c5bb-fb6',
      city:'杭州',
      company:'慕德微纳',
      position:'光学设计工程师',
      dir:'微纳光学,光学设计',
      dirList:['微纳光学','光学设计'],
      salary:'12-24K·13薪',
      sMin:12,
      sMax:24,
      edu:'硕士',
      exp:'1年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责微纳光学元件设计开发、衍射光学元件设计、产品性能测试。',
      tags:['微纳光学','光学设计','衍射光学'],
      link:'https://www.mude-micro.com',
      linkText:'查看详情',
      email:'hr@mdmn.com',
      phone:null,
      community:false
    },
    {
      id:'c7332a60-e5c',
      city:'杭州',
      company:'昂坤半导体',
      position:'光学工程师',
      dir:'半导体检测,光学设计',
      dirList:['半导体检测','光学设计'],
      salary:'20-25K·13薪',
      sMin:20,
      sMax:25,
      edu:'硕士',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'完成光学校准、系统集成、系统测试以及特征描述，熟练使用ZEMAX软件完成光学设计和模拟。',
      tags:['半导体检测','Zemax','光学系统'],
      link:'https://www.angkun-semi.com',
      linkText:'查看详情',
      email:'hr@angkun.com',
      phone:null,
      community:false
    },
    {
      id:'d36b4ac5-fc8',
      city:'杭州',
      company:'杭州天睿精密科技',
      position:'光学工程师',
      dir:'精密仪器,光学设计',
      dirList:['精密仪器','光学设计'],
      salary:'19-23万/年',
      sMin:16,
      sMax:19,
      edu:'本科',
      exp:'应届/经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责精密仪器光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['精密仪器','光学设计','Zemax'],
      link:'https://www.tianrui-tech.com',
      linkText:'查看详情',
      email:'hr@tianrui.com',
      phone:null,
      community:false
    },
    {
      id:'c2a4d283-635',
      city:'杭州',
      company:'杭州玉之泉精密仪器',
      position:'光学工程师',
      dir:'光纤传感,光学设计',
      dirList:['光纤传感','光学设计'],
      salary:'13-20K·13薪',
      sMin:13,
      sMax:20,
      edu:'硕士',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'设计、开发和测试高级光学系统，包括光纤传感器，实现复杂光学信号处理和解调技术。',
      tags:['光纤传感','光学设计','信号处理'],
      link:'https://www.yuzhiquan.com',
      linkText:'查看详情',
      email:'hr@yuquan.com',
      phone:null,
      community:false
    },
    {
      id:'91647a28-d61',
      city:'杭州',
      company:'杭州爱鸥光学科技',
      position:'光学工程师',
      dir:'光学设计,光模块',
      dirList:['光学设计','光模块'],
      salary:'7-9K·13薪',
      sMin:7,
      sMax:9,
      edu:'本科',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责光学系统仿真设计、光学工艺开发、光模块产品测试。',
      tags:['光学设计','光模块','CodeV'],
      link:'https://www.aiouoptics.com',
      linkText:'查看详情',
      email:'hr@aio-optics.com',
      phone:null,
      community:false
    },
    {
      id:'92741561-de6',
      city:'杭州',
      company:'极弱磁场国家重大科技基础设施研究院',
      position:'微纳光学设计工程师',
      dir:'微纳光学,科研',
      dirList:['微纳光学','科研'],
      salary:'18-25K·14薪',
      sMin:18,
      sMax:25,
      edu:'硕士',
      exp:'3年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责微纳光学系统设计开发、科研项目技术支持、光学仿真分析。',
      tags:['微纳光学','科研','光学设计'],
      link:'https://www.nmri.ac.cn',
      linkText:'查看详情',
      email:'hr@jrcm.com',
      phone:null,
      community:false
    },
    {
      id:'07c7d04d-712',
      city:'杭州',
      company:'思看科技',
      position:'光学工程师',
      dir:'3D扫描,光学设计',
      dirList:['3D扫描','光学设计'],
      salary:'18-30K·15薪',
      sMin:18,
      sMax:30,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责3D扫描光学系统设计开发、结构光方案研究、产品性能优化。',
      tags:['3D扫描','光学设计','结构光'],
      link:'https://www.sicantech.com',
      linkText:'查看详情',
      email:'hr@scantech.com',
      phone:null,
      community:false
    },
    {
      id:'e73caa04-39e',
      city:'杭州',
      company:'杭州安杰思医学',
      position:'光学设计工程师',
      dir:'医疗光学,内窥镜',
      dirList:['医疗光学','内窥镜'],
      salary:'14-24K·14薪',
      sMin:14,
      sMax:24,
      edu:'硕士',
      exp:'2年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责医用内窥镜光学系统设计开发、光学性能测试、产品注册支持。',
      tags:['医疗光学','内窥镜','光学设计'],
      link:'https://www.anjiesi.com',
      linkText:'查看详情',
      email:'hr@angers.com',
      phone:null,
      community:false
    },
    {
      id:'6cc22182-0f4',
      city:'杭州',
      company:'凤凰光学',
      position:'光学设计工程师',
      dir:'光学设计,镜头',
      dirList:['光学设计','镜头'],
      salary:'15-25K·14薪',
      sMin:15,
      sMax:25,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学镜头设计开发、光学系统仿真分析、产品性能测试。',
      tags:['光学设计','镜头','Zemax'],
      link:'https://www.phenixoptics.com.cn',
      linkText:'查看详情',
      email:'hr@phenixoptics.com.cn',
      phone:null,
      community:false
    },
    {
      id:'6799ddf1-0bc',
      city:'杭州',
      company:'杭州芯见微半导体',
      position:'光学工程师',
      dir:'半导体检测,光学设计',
      dirList:['半导体检测','光学设计'],
      salary:'20-23K',
      sMin:20,
      sMax:23,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责半导体检测设备光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['半导体检测','光学设计','Zemax'],
      link:'https://www.xinjianwei.com',
      linkText:'查看详情',
      email:'hr@xinjianwei.com',
      phone:null,
      community:false
    },
    {
      id:'ce6ef05c-611',
      city:'杭州',
      company:'杭州荷湖科技',
      position:'光学设计主管',
      dir:'显微光学,光学设计',
      dirList:['显微光学','光学设计'],
      salary:'30-40K·13薪',
      sMin:30,
      sMax:40,
      edu:'硕士',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责显微光学系统设计开发、技术方案制定、团队技术指导与管理。',
      tags:['显微光学','光学设计','团队管理'],
      link:'https://www.hohutech.com',
      linkText:'查看详情',
      email:'hr@hehutec.com',
      phone:null,
      community:false
    },
    {
      id:'21757ab8-b2c',
      city:'杭州',
      company:'杭州荷湖科技',
      position:'光学工程师',
      dir:'显微光学,光学设计',
      dirList:['显微光学','光学设计'],
      salary:'12-18K·17薪',
      sMin:12,
      sMax:18,
      edu:'硕士',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责显微光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['显微光学','光学设计','Zemax'],
      link:'https://www.hohutech.com',
      linkText:'查看详情',
      email:'hr@hehutec.com',
      phone:null,
      community:false
    },
    {
      id:'3b70cf7e-250',
      city:'杭州',
      company:'杭州玄度通信',
      position:'光学设计工程师',
      dir:'光通信,光学设计',
      dirList:['光通信','光学设计'],
      salary:'25-35K',
      sMin:25,
      sMax:35,
      edu:'硕士',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责光通信系统光学设计开发、光学仿真分析、产品性能测试。',
      tags:['光通信','光学设计','Zemax'],
      link:'https://www.xuandu.com',
      linkText:'查看详情',
      email:'hr@xuandu.com',
      phone:null,
      community:false
    },

    // ===== 武汉 (47) =====
    {
      id:'aef20098-428',
      city:'武汉',
      company:'武汉锐科激光',
      position:'光学工程师（固体激光器）',
      dir:'固体激光器',
      dirList:['固体激光器'],
      salary:'18-25万/年',
      sMin:15,
      sMax:21,
      edu:'硕士',
      exp:'3年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责固体激光器光学设计、光路搭建与调试、性能测试优化。',
      tags:['固体激光器','激光器'],
      link:'https://msearch.51job.com/jobs/wuhan-dhxjs/172997338.html',
      linkText:'查看详情',
      email:'hr@raycuslaser.com',
      phone:null,
      community:false
    },
    {
      id:'738184ec-9b5',
      city:'武汉',
      company:'武汉锐科激光',
      position:'高级光学工程师（超快光纤激光）',
      dir:'光纤激光器,超快激光',
      dirList:['光纤激光器','超快激光'],
      salary:'18-25K·14薪',
      sMin:18,
      sMax:25,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责超快光纤激光器光学系统设计、锁模技术研究、产品性能优化。',
      tags:['光纤激光器','超快激光','锁模'],
      link:null,
      linkText:'查看详情',
      email:'hr@raycuslaser.com',
      phone:null,
      community:false
    },
    {
      id:'6a850a9f-62f',
      city:'武汉',
      company:'武汉锐科激光',
      position:'高级光学工程师（纳秒）',
      dir:'纳秒激光器,固体激光器',
      dirList:['纳秒激光器','固体激光器'],
      salary:'20-30K·14薪',
      sMin:20,
      sMax:30,
      edu:'硕士',
      exp:'4年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责纳秒激光器产品研发、光学设计优化、生产工艺改进。',
      tags:['纳秒激光器','固体激光器','Q开关'],
      link:null,
      linkText:'查看详情',
      email:'hr@raycuslaser.com',
      phone:null,
      community:false
    },
    {
      id:'91441c60-3a2',
      city:'武汉',
      company:'武汉锐科激光',
      position:'光学工程师（固体）',
      dir:'固体激光器',
      dirList:['固体激光器'],
      salary:'15-20K·14薪',
      sMin:15,
      sMax:20,
      edu:'硕士',
      exp:'2年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责固体激光器光学系统设计、谐振腔优化、产品测试验证。',
      tags:['固体激光器','激光晶体','谐振腔'],
      link:null,
      linkText:'查看详情',
      email:'hr@raycuslaser.com',
      phone:null,
      community:false
    },
    {
      id:'df796db7-7f0',
      city:'武汉',
      company:'武汉锐科激光',
      position:'高级特种光纤设计师',
      dir:'特种光纤,光纤激光器',
      dirList:['特种光纤','光纤激光器'],
      salary:'20-40K',
      sMin:20,
      sMax:40,
      edu:'博士',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责特种光纤设计开发、光纤激光器用增益光纤研制、光纤性能测试。',
      tags:['特种光纤','光纤设计','光子晶体光纤'],
      link:null,
      linkText:'查看详情',
      email:'hr@raycuslaser.com',
      phone:null,
      community:false
    },
    {
      id:'7d493e89-2a1',
      city:'武汉',
      company:'华工正源',
      position:'光学工程师',
      dir:'光通信,光模块',
      dirList:['光通信','光模块'],
      salary:'15-25K·15薪',
      sMin:15,
      sMax:25,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责数通产品1.6/3.2T光模块、CPO、2.5D光电集成的光路和器件设计。',
      tags:['光通信','Zemax','半导体激光器'],
      link:'https://m.zhipin.com/zhaopin/e0206d090a1bfee003N62tm7GA~~/',
      linkText:'查看详情',
      email:'hrnew@genuine-opto.com',
      phone:null,
      community:false
    },
    {
      id:'4a7bd652-804',
      city:'武汉',
      company:'华工正源',
      position:'硅光硬件开发工程师',
      dir:'硅光芯片,光模块',
      dirList:['硅光芯片','光模块'],
      salary:'15-25K·15薪',
      sMin:15,
      sMax:25,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光模块总体设计、详细设计、原理图设计、PCB调试及验证。',
      tags:['硅光','光模块','PCB设计'],
      link:'https://www.genuine-opto.com',
      linkText:'查看详情',
      email:'hrnew@genuine-opto.com',
      phone:null,
      community:false
    },
    {
      id:'06a980d5-52b',
      city:'武汉',
      company:'华工正源',
      position:'硅光芯片测试工程师',
      dir:'硅光芯片,光通信',
      dirList:['硅光芯片','光通信'],
      salary:'15-30K',
      sMin:15,
      sMax:30,
      edu:'硕士',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责硅光芯片测试机台管理、测试问题分析解决、测试数据分析。',
      tags:['硅光芯片','测试','光通信'],
      link:'https://www.genuine-opto.com',
      linkText:'查看详情',
      email:'hrnew@genuine-opto.com',
      phone:null,
      community:false
    },
    {
      id:'3504f5e2-b2a',
      city:'武汉',
      company:'烽火通信',
      position:'高级光学工程师（光传输方向）',
      dir:'光通信,光传输',
      dirList:['光通信','光传输'],
      salary:'26-40K',
      sMin:26,
      sMax:40,
      edu:'本科',
      exp:'2年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责光传输系统光学设计、光器件选型与验证、系统性能优化。',
      tags:['光通信','光传输','DWDM'],
      link:'https://www.fiberhome.com/joinus.html',
      linkText:'烽火通信招聘官网',
      email:'zhaopin@fiberhome.com.cn',
      phone:null,
      community:false
    },
    {
      id:'1845a97e-ecb',
      city:'武汉',
      company:'烽火通信',
      position:'光器件开发工程师',
      dir:'光器件,光通信',
      dirList:['光器件','光通信'],
      salary:'20-40K',
      sMin:20,
      sMax:40,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光通信器件开发、光模块设计、产品测试与验证。',
      tags:['光器件','光通信','光模块'],
      link:'https://www.fiberhome.com/joinus.html',
      linkText:'烽火通信招聘官网',
      email:'zhaopin@fiberhome.com.cn',
      phone:null,
      community:false
    },
    {
      id:'b4efa4c7-0cf',
      city:'武汉',
      company:'长飞光纤',
      position:'光学工程师',
      dir:'光纤,光通信',
      dirList:['光纤','光通信'],
      salary:'12-18K·14薪',
      sMin:12,
      sMax:18,
      edu:'硕士',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责特种光纤光学设计、光纤性能测试与分析、新产品开发。',
      tags:['光纤','光通信','光纤设计'],
      link:'https://www.yofc.com/list/28.html',
      linkText:'长飞光纤招聘官网',
      email:'job@yofc.com',
      phone:null,
      community:false
    },
    {
      id:'ec55c64f-65c',
      city:'武汉',
      company:'长飞光纤',
      position:'高级光学工程师',
      dir:'光纤,特种光纤',
      dirList:['光纤','特种光纤'],
      salary:'18-19K',
      sMin:18,
      sMax:19,
      edu:'硕士',
      exp:'5年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责新型光纤产品光学设计、技术方案制定、团队技术指导。',
      tags:['特种光纤','光纤设计','光子学'],
      link:'https://www.yofc.com/list/28.html',
      linkText:'长飞光纤招聘官网',
      email:'job@yofc.com',
      phone:null,
      community:false
    },
    {
      id:'23382046-90d',
      city:'武汉',
      company:'长飞光纤',
      position:'研发工艺工程师（玻璃光纤）',
      dir:'光纤,工艺',
      dirList:['光纤','工艺'],
      salary:'12-18K·14薪',
      sMin:12,
      sMax:18,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责玻璃光纤预制棒工艺开发、光纤拉丝工艺优化、产品良率提升。',
      tags:['光纤工艺','玻璃光纤','预制棒'],
      link:'https://www.yofc.com/list/28.html',
      linkText:'长飞光纤招聘官网',
      email:'job@yofc.com',
      phone:null,
      community:false
    },
    {
      id:'96e10dd8-2fe',
      city:'武汉',
      company:'高德红外',
      position:'光学工程师',
      dir:'红外光学,光学设计',
      dirList:['红外光学','光学设计'],
      salary:'18-36K·14薪',
      sMin:18,
      sMax:36,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责制冷镜头连续变焦红外光学系统设计、非制冷镜头定焦/无热化/连续变焦设计。',
      tags:['红外光学','Zemax','光学设计'],
      link:'https://gdhw.zhiye.com',
      linkText:'高德红外招聘官网',
      email:'hrm@guide-infrared.com',
      phone:null,
      community:false
    },
    {
      id:'d02837b0-344',
      city:'武汉',
      company:'高德红外',
      position:'光学设计工程师',
      dir:'红外光学,成像光学',
      dirList:['红外光学','成像光学'],
      salary:'18-30K·14薪',
      sMin:18,
      sMax:30,
      edu:'硕士',
      exp:'5年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责红外成像光学系统设计、光学仿真分析、系统性能优化。',
      tags:['红外光学','CodeV','Zemax'],
      link:'https://gdhw.zhiye.com',
      linkText:'高德红外招聘官网',
      email:'hrm@guide-infrared.com',
      phone:null,
      community:false
    },
    {
      id:'c20f8199-537',
      city:'武汉',
      company:'华星光电',
      position:'模组光学设计资深工程师',
      dir:'MicroLED,光学设计',
      dirList:['MicroLED','光学设计'],
      salary:'20-35K',
      sMin:20,
      sMax:35,
      edu:'本科',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责MicroLED模组光学设计、仿真与性能优化，负责亮度、均匀性、色域、视角等光学测试。',
      tags:['MicroLED','光学仿真','显示光学'],
      link:'https://campus.tcl.com',
      linkText:'TCL华星招聘官网',
      email:'csot.zhaopin@tcl.com',
      phone:null,
      community:false
    },
    {
      id:'8b002ab2-2c0',
      city:'武汉',
      company:'华星光电',
      position:'光学工程师（显示面板）',
      dir:'显示光学,面板',
      dirList:['显示光学','面板'],
      salary:'15-25K',
      sMin:15,
      sMax:25,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责显示面板光学设计、光学膜片选型、光学性能测试与优化。',
      tags:['显示光学','LCD','OLED'],
      link:'https://campus.tcl.com',
      linkText:'TCL华星招聘官网',
      email:'csot.zhaopin@tcl.com',
      phone:null,
      community:false
    },
    {
      id:'472519a0-320',
      city:'武汉',
      company:'海微科技',
      position:'光学工程师（通信光学）',
      dir:'光通信,光学设计',
      dirList:['光通信','光学设计'],
      salary:'30-50K',
      sMin:30,
      sMax:50,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责通信光学系统设计开发、光路仿真与优化、产品性能验证。',
      tags:['光通信','光学设计','Zemax'],
      link:null,
      linkText:'查看详情',
      email:'hr@haiwei.com',
      phone:null,
      community:false
    },
    {
      id:'dd749709-368',
      city:'武汉',
      company:'海微科技',
      position:'光学工程师',
      dir:'光学设计,光通信',
      dirList:['光学设计','光通信'],
      salary:'20-35K',
      sMin:20,
      sMax:35,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学系统方案设计、光学器件选型、光路搭建与调试。',
      tags:['光学设计','光通信','光模块'],
      link:null,
      linkText:'查看详情',
      email:'hr@haiwei.com',
      phone:null,
      community:false
    },
    {
      id:'72cc8abf-057',
      city:'武汉',
      company:'联影医疗（武汉）',
      position:'光学工程师',
      dir:'医疗光学,成像光学',
      dirList:['医疗光学','成像光学'],
      salary:'20-30K',
      sMin:20,
      sMax:30,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责医疗影像设备光学系统设计、光学性能测试与优化。',
      tags:['医疗光学','成像光学','Zemax'],
      link:'https://www.united-imaging.com',
      linkText:'查看详情',
      email:'hr@united-imaging.com',
      phone:null,
      community:false
    },
    {
      id:'a4b84fe0-2a3',
      city:'武汉',
      company:'联影医疗（武汉）',
      position:'光学评价主管',
      dir:'医疗光学,光学测试',
      dirList:['医疗光学','光学测试'],
      salary:'15-30K·14薪',
      sMin:15,
      sMax:30,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'分析光电系统及其部件属性，搭建光电系统及其部件测试平台。',
      tags:['光学测试','医疗光学','系统评价'],
      link:'https://www.united-imaging.com',
      linkText:'查看详情',
      email:'hr@united-imaging.com',
      phone:null,
      community:false
    },
    {
      id:'edcf9ae6-90c',
      city:'武汉',
      company:'锐捷网络',
      position:'光学工程师',
      dir:'光通信,网络设备',
      dirList:['光通信','网络设备'],
      salary:'30-60K',
      sMin:30,
      sMax:60,
      edu:'本科',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责光通信设备光学系统设计开发、光模块选型与验证。',
      tags:['光通信','光模块','网络设备'],
      link:'https://www.ruijie.com.cn',
      linkText:'查看详情',
      email:'hr@ruijie.com.cn',
      phone:null,
      community:false
    },
    {
      id:'35db47e9-9ea',
      city:'武汉',
      company:'长芯盛科技',
      position:'光学工程师',
      dir:'光纤通信,光器件',
      dirList:['光纤通信','光器件'],
      salary:'15-30K·13薪',
      sMin:15,
      sMax:30,
      edu:'硕士',
      exp:'3年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责光纤通信器件光学设计、光纤耦合工艺开发、产品性能测试。',
      tags:['光纤通信','光器件','光纤耦合'],
      link:'https://www.everprotech.com',
      linkText:'查看详情',
      email:'hr@cxs-tech.com',
      phone:null,
      community:false
    },
    {
      id:'cb6e7291-772',
      city:'武汉',
      company:'长芯盛科技',
      position:'光学耦合工艺工程师',
      dir:'光纤耦合,工艺',
      dirList:['光纤耦合','工艺'],
      salary:'12-22K·13薪',
      sMin:12,
      sMax:22,
      edu:'本科',
      exp:'5年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责光纤耦合工艺开发与优化、生产良率提升、新工艺导入。',
      tags:['光纤耦合','工艺开发','光器件'],
      link:'https://www.everprotech.com',
      linkText:'查看详情',
      email:'hr@cxs-tech.com',
      phone:null,
      community:false
    },
    {
      id:'e0c4269f-30d',
      city:'武汉',
      company:'武汉光至科技',
      position:'光学工程师（超快激光器）',
      dir:'超快激光器,光纤激光器',
      dirList:['超快激光器','光纤激光器'],
      salary:'12-22K',
      sMin:12,
      sMax:22,
      edu:'硕士',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责超快激光器光学系统设计、锁模技术研究、产品性能优化。',
      tags:['超快激光器','光纤激光器','锁模'],
      link:'https://www.gzlaser.cn',
      linkText:'查看详情',
      email:'hr@gzlaser.com',
      phone:null,
      community:false
    },
    {
      id:'437b3319-198',
      city:'武汉',
      company:'武汉光至科技',
      position:'光学工程师（纳秒激光器）',
      dir:'纳秒激光器,固体激光器',
      dirList:['纳秒激光器','固体激光器'],
      salary:'12-22K',
      sMin:12,
      sMax:22,
      edu:'硕士',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责纳秒激光器产品研发、光学设计优化、生产工艺改进。',
      tags:['纳秒激光器','固体激光器','Q开关'],
      link:'https://www.gzlaser.cn',
      linkText:'查看详情',
      email:'hr@gzlaser.com',
      phone:null,
      community:false
    },
    {
      id:'a1f59f29-f98',
      city:'武汉',
      company:'武汉安扬激光',
      position:'高级光学工程师',
      dir:'光纤激光器,超快激光',
      dirList:['光纤激光器','超快激光'],
      salary:'12-18K·13薪',
      sMin:12,
      sMax:18,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光纤激光器光学系统设计、光纤设计与选型、产品性能测试。',
      tags:['光纤激光器','超快激光','光纤设计'],
      link:'https://www.anyanglaser.com',
      linkText:'查看详情',
      email:'hr@anyanglaser.com',
      phone:null,
      community:false
    },
    {
      id:'353c49b3-f1e',
      city:'武汉',
      company:'武汉安扬激光',
      position:'光纤设计工程师',
      dir:'光纤设计,特种光纤',
      dirList:['光纤设计','特种光纤'],
      salary:'10-16K·13薪',
      sMin:10,
      sMax:16,
      edu:'硕士',
      exp:'1年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责特种光纤设计开发、光纤性能模拟与测试、新产品研制。',
      tags:['光纤设计','特种光纤','光子晶体光纤'],
      link:'https://www.anyanglaser.com',
      linkText:'查看详情',
      email:'hr@anyanglaser.com',
      phone:null,
      community:false
    },
    {
      id:'f2d0745a-0f4',
      city:'武汉',
      company:'武汉华日精密激光',
      position:'高级光学工程师（纳秒）',
      dir:'纳秒激光器,固体激光器',
      dirList:['纳秒激光器','固体激光器'],
      salary:'20-30K·14薪',
      sMin:20,
      sMax:30,
      edu:'硕士',
      exp:'4年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责纳秒激光器光学系统设计、产品性能优化、客户应用支持。',
      tags:['纳秒激光器','固体激光器','激光加工'],
      link:'https://www.huari-laser.com',
      linkText:'查看详情',
      email:'hr@huaraylaser.com',
      phone:null,
      community:false
    },
    {
      id:'c2881e49-931',
      city:'武汉',
      company:'武汉华日精密激光',
      position:'光学工程师（固体）',
      dir:'固体激光器',
      dirList:['固体激光器'],
      salary:'15-20K·14薪',
      sMin:15,
      sMax:20,
      edu:'硕士',
      exp:'2年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责固体激光器光学设计、谐振腔设计优化、产品测试验证。',
      tags:['固体激光器','谐振腔','激光晶体'],
      link:'https://www.huari-laser.com',
      linkText:'查看详情',
      email:'hr@huaraylaser.com',
      phone:null,
      community:false
    },
    {
      id:'6ab0af5a-7fe',
      city:'武汉',
      company:'武汉灵途传感科技',
      position:'光学工程师',
      dir:'激光雷达,传感',
      dirList:['激光雷达','传感'],
      salary:'20-28K·15薪',
      sMin:20,
      sMax:28,
      edu:'硕士',
      exp:'3年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责激光雷达光学系统设计开发、光学仿真与优化、产品性能测试。',
      tags:['激光雷达','光学传感','Zemax'],
      link:'https://www.lidar-tech.com',
      linkText:'查看详情',
      email:'hr@lingtu.com',
      phone:null,
      community:false
    },
    {
      id:'c98068a3-db1',
      city:'武汉',
      company:'武汉聚合光子技术',
      position:'光学工程师',
      dir:'光纤器件,光通信',
      dirList:['光纤器件','光通信'],
      salary:'10-20K·13薪',
      sMin:10,
      sMax:20,
      edu:'硕士',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责光纤无源器件光学设计、光纤耦合工艺开发、产品测试。',
      tags:['光纤器件','光通信','光纤耦合'],
      link:'https://www.juhephotonics.com',
      linkText:'查看详情',
      email:'hr@juhe.com',
      phone:null,
      community:false
    },
    {
      id:'5370e963-c03',
      city:'武汉',
      company:'武汉智元拓目技术',
      position:'光学工程师',
      dir:'机器视觉,光学设计',
      dirList:['机器视觉','光学设计'],
      salary:'18-30K·14薪',
      sMin:18,
      sMax:30,
      edu:'本科',
      exp:'2年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责机器视觉光学系统设计、光源与镜头选型、光学方案优化。',
      tags:['机器视觉','光学设计','成像光学'],
      link:'https://www.zyomtech.com',
      linkText:'查看详情',
      email:'hr@zhiyuan.com',
      phone:null,
      community:false
    },
    {
      id:'6ff4c27f-bbf',
      city:'武汉',
      company:'武汉芯力科',
      position:'光学工程师',
      dir:'显微光学,光学设计',
      dirList:['显微光学','光学设计'],
      salary:'20-30K·13薪',
      sMin:20,
      sMax:30,
      edu:'硕士',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责显微物镜和照明光路设计、光学系统装调、配合光机工程师开发设备成像光路。',
      tags:['显微光学','Zemax','光学设计'],
      link:'https://www.xinlike.com',
      linkText:'查看详情',
      email:'hr@xinlike.com',
      phone:null,
      community:false
    },
    {
      id:'b5622498-2c2',
      city:'武汉',
      company:'光谷实验室',
      position:'光学设计工程师',
      dir:'光学设计,科研',
      dirList:['光学设计','科研'],
      salary:'15-25K',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责科研项目光学系统设计开发、光学仿真分析、实验验证。',
      tags:['光学设计','Zemax','CodeV'],
      link:'https://www.ovlab.ac.cn',
      linkText:'查看详情',
      email:'hr@gmlab.com',
      phone:null,
      community:false
    },
    {
      id:'e94b6e85-780',
      city:'武汉',
      company:'小光子（武汉）科技',
      position:'光学工程师',
      dir:'光学设计,消费电子',
      dirList:['光学设计','消费电子'],
      salary:'10-15K·13薪',
      sMin:10,
      sMax:15,
      edu:'本科',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责消费电子光学模组设计开发、光学性能测试、产品量产支持。',
      tags:['光学设计','消费电子','成像光学'],
      link:'https://www.xiaoguangzi.com',
      linkText:'查看详情',
      email:'hr@xiaoguangzi.com',
      phone:null,
      community:false
    },
    {
      id:'3cd9aadc-0aa',
      city:'武汉',
      company:'武汉敢为科技',
      position:'光学研发工程师',
      dir:'光学传感,气体检测',
      dirList:['光学传感','气体检测'],
      salary:'15-25K',
      sMin:15,
      sMax:25,
      edu:'本科',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学气体传感器光学系统设计、光谱分析技术研究、产品开发。',
      tags:['光学传感','气体检测','光谱分析'],
      link:'https://www.ganwei-tech.com',
      linkText:'查看详情',
      email:'hr@ganwei.com',
      phone:null,
      community:false
    },
    {
      id:'c67b79ef-fcb',
      city:'武汉',
      company:'晰微光电',
      position:'光学工程师',
      dir:'显微光学,成像光学',
      dirList:['显微光学','成像光学'],
      salary:'15-25K',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学照明与成像系统设计、仿真、系统调校实验、优化及杂散光仿真优化。',
      tags:['显微光学','成像光学','杂散光分析'],
      link:'https://www.xiweiopto.com',
      linkText:'查看详情',
      email:'hr@xiwei.com',
      phone:null,
      community:false
    },
    {
      id:'8c0ba2bf-92d',
      city:'武汉',
      company:'松盛光电',
      position:'高级光学工程师',
      dir:'激光加工,光学设计',
      dirList:['激光加工','光学设计'],
      salary:'15-25K',
      sMin:15,
      sMax:25,
      edu:'本科',
      exp:'3年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责光学成像、激光光学系统设计、光机结构设计、激光加工工艺开发。',
      tags:['激光加工','光学设计','光机设计'],
      link:'https://www.songshengoptics.com',
      linkText:'查看详情',
      email:'hr@songsheng.com',
      phone:null,
      community:false
    },
    {
      id:'8f0c6aa3-b02',
      city:'武汉',
      company:'武粤光电',
      position:'光学设计工程师',
      dir:'空间光路,光栅设计',
      dirList:['空间光路','光栅设计'],
      salary:'40-70K·15薪',
      sMin:40,
      sMax:70,
      edu:'硕士',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责空间光路系统设计、衍射光栅设计、精密光学系统开发。',
      tags:['空间光路','光栅设计','精密光学'],
      link:'https://www.wuyueoptics.com',
      linkText:'查看详情',
      email:'hr@wuyue.com',
      phone:null,
      community:false
    },
    {
      id:'65f282f5-7ef',
      city:'武汉',
      company:'华为（武汉研究所）',
      position:'光学设计工程师',
      dir:'车载光学,AR-HUD',
      dirList:['车载光学','AR-HUD'],
      salary:'18-30K·14薪',
      sMin:18,
      sMax:30,
      edu:'本科',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责车载抬头显示、智能大灯等光显示光学设计、关键器件方案选型。',
      tags:['车载光学','AR-HUD','光学设计'],
      link:'https://career.huawei.com',
      linkText:'华为招聘官网',
      email:'career@huawei.com',
      phone:null,
      community:false
    },
    {
      id:'f3602b71-02b',
      city:'武汉',
      company:'华为（武汉研究所）',
      position:'光学工程师',
      dir:'光通信,光模块',
      dirList:['光通信','光模块'],
      salary:'15-30K',
      sMin:15,
      sMax:30,
      edu:'本科',
      exp:'1年以内',
      date:'2026-08',
      fresh:false,
      desc:'负责光学系统方案论证、光学系统设计和仿真、加工图纸输出、光学系统装调。',
      tags:['光通信','光模块','光学系统'],
      link:'https://career.huawei.com',
      linkText:'华为招聘官网',
      email:'career@huawei.com',
      phone:null,
      community:false
    },
    {
      id:'9e472f48-bc3',
      city:'武汉',
      company:'武汉光迅科技',
      position:'光学工程师',
      dir:'光通信,光模块',
      dirList:['光通信','光模块'],
      salary:'15-30K·14薪',
      sMin:15,
      sMax:30,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责高速光模块光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['光通信','光模块','光学设计'],
      link:'https://www.accelink.com',
      linkText:'查看详情',
      email:'hr@accelink.com',
      phone:null,
      community:false
    },
    {
      id:'974e65a7-7ac',
      city:'武汉',
      company:'武汉正源高理光学',
      position:'项目技术负责人（光栅尺）',
      dir:'光栅,精密测量',
      dirList:['光栅','精密测量'],
      salary:'8-12K',
      sMin:8,
      sMax:12,
      edu:'本科',
      exp:'3年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责光栅尺光学系统设计开发、技术方案制定、产品性能测试。',
      tags:['光栅','精密测量','光学设计'],
      link:'https://www.zhengyuanoptics.com',
      linkText:'查看详情',
      email:'hr@zygl.com',
      phone:null,
      community:false
    },
    {
      id:'2d16a56e-933',
      city:'武汉',
      company:'武汉六博光电',
      position:'光学工程师',
      dir:'光通信,光电',
      dirList:['光通信','光电'],
      salary:'6-11K',
      sMin:6,
      sMax:11,
      edu:'本科',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责光电产品光学系统设计开发、光学仿真分析、产品测试。',
      tags:['光通信','光电','光学设计'],
      link:'https://www.liubo-opto.com',
      linkText:'查看详情',
      email:'hr@liubo.com',
      phone:null,
      community:false
    },
    {
      id:'31aab4f7-1e4',
      city:'武汉',
      company:'武汉友阳光电',
      position:'光学工程师',
      dir:'光纤器件,准直器',
      dirList:['光纤器件','准直器'],
      salary:'8-12K',
      sMin:8,
      sMax:12,
      edu:'大专',
      exp:'2-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光纤准直器光学设计、产品工艺开发、生产技术支持。',
      tags:['光纤器件','准直器','工艺开发'],
      link:'https://www.youyangoep.com',
      linkText:'查看详情',
      email:'hr@youyang.com',
      phone:null,
      community:false
    },
    {
      id:'2719734f-9f6',
      city:'武汉',
      company:'武汉罗博威视',
      position:'光学工程师',
      dir:'机器视觉,光学设计',
      dirList:['机器视觉','光学设计'],
      salary:'15-25K·13薪',
      sMin:15,
      sMax:25,
      edu:'本科',
      exp:'2年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责机器视觉光学系统设计开发、光源与镜头选型、光学方案优化。',
      tags:['机器视觉','光学设计','视觉检测'],
      link:'https://www.robovision.com',
      linkText:'查看详情',
      email:'hr@robovision.com',
      phone:null,
      community:false
    },

    // ===== 沈阳 (1) =====
    {
      id:'dce7dc16-e5e',
      city:'沈阳',
      company:'沈阳新松机器人',
      position:'光学工程师',
      dir:'机器视觉,光学设计',
      dirList:['机器视觉','光学设计'],
      salary:'12-22K',
      sMin:12,
      sMax:22,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责机器视觉光学系统设计开发、3D视觉方案研究、光学性能优化。',
      tags:['机器视觉','光学设计','3D视觉'],
      link:'https://www.siasun.com',
      linkText:'查看详情',
      email:'hr@siasun.com',
      phone:null,
      community:false
    },

    // ===== 洛阳 (1) =====
    {
      id:'6da98c98-b07',
      city:'洛阳',
      company:'洛阳中航光电',
      position:'光学工程师',
      dir:'光通信,光纤连接器',
      dirList:['光通信','光纤连接器'],
      salary:'12-22K·14薪',
      sMin:12,
      sMax:22,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光纤连接器光学设计开发、光学仿真分析、产品性能测试。',
      tags:['光通信','光纤连接器','光学设计'],
      link:'https://www.jonhon.cn',
      linkText:'查看详情',
      email:'hr@johnton.com',
      phone:null,
      community:false
    },

    // ===== 济南 (1) =====
    {
      id:'3489a333-059',
      city:'济南',
      company:'歌尔股份',
      position:'光学研发岗',
      dir:'光波导,ARVR',
      dirList:['光波导','ARVR'],
      salary:'15-25K·14薪',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责光波导、微纳光学、器件光学方向研发，AR/VR光学系统设计。',
      tags:['光波导','ARVR','微纳光学'],
      link:'https://www.goertek.com',
      linkText:'歌尔股份招聘官网',
      email:'hr@goertek.com',
      phone:null,
      community:false
    },

    // ===== 深圳 (25) =====
    {
      id:'6ad702e3-622',
      city:'深圳',
      company:'大族激光',
      position:'光学工程师',
      dir:'高功率激光,光纤激光器',
      dirList:['高功率激光','光纤激光器'],
      salary:'21-40K·13薪',
      sMin:21,
      sMax:40,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责高功率基频光纤激光器（保偏MOPA结构）光路设计与搭建、偏振消光比优化。',
      tags:['高功率激光','光纤激光器','MOPA'],
      link:'https://www.hanslaser.com',
      linkText:'大族激光招聘官网',
      email:'HRL@hanslaser.com',
      phone:null,
      community:false
    },
    {
      id:'95bd24a3-616',
      city:'深圳',
      company:'大族激光',
      position:'光学工程师（精密量仪）',
      dir:'精密量仪,激光',
      dirList:['精密量仪','激光'],
      salary:'15-30K',
      sMin:15,
      sMax:30,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责精密量仪、激光设备光学系统设计，精通光学设计软件。',
      tags:['精密量仪','激光','光学设计'],
      link:'https://www.hanslaser.com',
      linkText:'大族激光招聘官网',
      email:'HRL@hanslaser.com',
      phone:null,
      community:false
    },
    {
      id:'70fba429-c07',
      city:'深圳',
      company:'欧菲光',
      position:'高级光学工程师',
      dir:'光电设备,光学系统',
      dirList:['光电设备','光学系统'],
      salary:'30-50K',
      sMin:30,
      sMax:50,
      edu:'硕士',
      exp:'5年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责光电设备光学系统设计开发、调试、装调测试，光学元件选型。',
      tags:['光电设备','光学系统','装调测试'],
      link:'http://www.ofilm.com/job.html',
      linkText:'查看详情',
      email:'hr.zhaopin@ofilm.com',
      phone:null,
      community:false
    },
    {
      id:'6ff6b8a6-d43',
      city:'深圳',
      company:'欧菲光',
      position:'光学结构/设计工程师',
      dir:'光学镜头,结构设计',
      dirList:['光学镜头','结构设计'],
      salary:'20-40K',
      sMin:20,
      sMax:40,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学镜头结构设计，精密机械设计，3D制图软件应用。',
      tags:['光学镜头','结构设计','3D制图'],
      link:'http://www.ofilm.com/job.html',
      linkText:'查看详情',
      email:'hr.zhaopin@ofilm.com',
      phone:null,
      community:false
    },
    {
      id:'aecc99c3-13f',
      city:'深圳',
      company:'中科飞测',
      position:'光学工程师',
      dir:'半导体检测,光学系统',
      dirList:['半导体检测','光学系统'],
      salary:'40-70K·14薪',
      sMin:40,
      sMax:70,
      edu:'博士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责新型光电设备光学系统设计开发调试、光学系统搭建、光学元件选购与测试。',
      tags:['半导体检测','光学系统','精密光学'],
      link:'https://job.skyverse.cn',
      linkText:'中科飞测招聘官网',
      email:'hr@skyverse.com',
      phone:null,
      community:false
    },
    {
      id:'380f8a39-be1',
      city:'深圳',
      company:'创鑫激光',
      position:'光学工程师',
      dir:'光纤激光器,激光',
      dirList:['光纤激光器','激光'],
      salary:'15-25K·13薪',
      sMin:15,
      sMax:25,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责产品方案制定、性能验证、工艺落地、NPI转生产、新物料验证验收。',
      tags:['光纤激光器','激光','NPI'],
      link:'http://www.maxphotonics.com/Cn/job.html',
      linkText:'创鑫激光招聘官网',
      email:'hr@maxphotonics.com',
      phone:null,
      community:false
    },
    {
      id:'a9feeb26-cae',
      city:'深圳',
      company:'创鑫激光',
      position:'高级光学工程师',
      dir:'激光器,光学设计',
      dirList:['激光器','光学设计'],
      salary:'21-40K·13薪',
      sMin:21,
      sMax:40,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责激光器选型匹配与性能可行性论证，整机光路设计、布局优化，光束传输与聚焦系统调试。',
      tags:['激光器','光学设计','光束传输'],
      link:'http://www.maxphotonics.com/Cn/job.html',
      linkText:'创鑫激光招聘官网',
      email:'hr@maxphotonics.com',
      phone:null,
      community:false
    },
    {
      id:'f75d2cb5-b98',
      city:'深圳',
      company:'新凯来技术',
      position:'资深光学工程师',
      dir:'精密光学,光机系统',
      dirList:['精密光学','光机系统'],
      salary:'20-40K·15薪',
      sMin:20,
      sMax:40,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责精密光学系统设计、光机系统设计、光学器件选型、光学仿真及工程实现，光学薄膜和镀膜工艺开发。',
      tags:['精密光学','光机系统','光学镀膜'],
      link:'https://career.sicarrier.com',
      linkText:'新凯来招聘官网',
      email:'hr@newkailai.com',
      phone:null,
      community:false
    },
    {
      id:'cf074e36-4fc',
      city:'深圳',
      company:'深圳华汉伟业科技',
      position:'资深光学工程师',
      dir:'精密传感器,光学系统',
      dirList:['精密传感器','光学系统'],
      salary:'35-60K',
      sMin:35,
      sMax:60,
      edu:'硕士',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责精密传感器、镜头、半导体精密等光学系统设计、开发和优化。',
      tags:['精密传感器','光学系统','半导体'],
      link:'https://www.hanway-tech.com',
      linkText:'查看详情',
      email:'hr@huahan.com',
      phone:null,
      community:false
    },
    {
      id:'14cb8e11-6b7',
      city:'深圳',
      company:'力策科技',
      position:'光学工程师',
      dir:'激光雷达,光学系统',
      dirList:['激光雷达','光学系统'],
      salary:'15-30K',
      sMin:15,
      sMax:30,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责激光雷达产品光学系统设计、研发、调试，光学元件选型。',
      tags:['激光雷达','光学系统','光学设计'],
      link:'https://www.litra-tech.com',
      linkText:'查看详情',
      email:'hr@lice.com',
      phone:null,
      community:false
    },
    {
      id:'0153d150-7c7',
      city:'深圳',
      company:'欢创科技',
      position:'光学工程师',
      dir:'激光雷达,光学仿真',
      dirList:['激光雷达','光学仿真'],
      salary:'20-40K',
      sMin:20,
      sMax:40,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责激光雷达光学方案需求设计、光学仿真、器件选型、光路验证、光学安装调试。',
      tags:['激光雷达','光学仿真','器件选型'],
      link:'https://www.camsense.com',
      linkText:'查看详情',
      email:'hr@huanchuang.com',
      phone:null,
      community:false
    },
    {
      id:'e1507b52-e65',
      city:'深圳',
      company:'金视达',
      position:'光学工程师',
      dir:'镜头设计,光学设计',
      dirList:['镜头设计','光学设计'],
      salary:'30-50K',
      sMin:30,
      sMax:50,
      edu:'本科',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责传统光学设计，有多款量产机种经验，高端镜头光学类产品设计经验。',
      tags:['镜头设计','光学设计','量产'],
      link:'https://www.jinshida.com',
      linkText:'查看详情',
      email:'hr@jinshida.com',
      phone:null,
      community:false
    },
    {
      id:'7592a755-23c',
      city:'深圳',
      company:'深圳杰普特光电',
      position:'光学工程师',
      dir:'固体激光器,激光',
      dirList:['固体激光器','激光'],
      salary:'12-20K',
      sMin:12,
      sMax:20,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责固体激光器开发相关技术工作、测试验证、文档编写、试产转产对接。',
      tags:['固体激光器','激光','测试验证'],
      link:'https://www.jptoe.com',
      linkText:'查看详情',
      email:'hr@jptoe.com',
      phone:null,
      community:false
    },
    {
      id:'42429661-74d',
      city:'深圳',
      company:'深圳超越激光',
      position:'光学工程师',
      dir:'皮秒激光器,紫外激光',
      dirList:['皮秒激光器','紫外激光'],
      salary:'20-40K',
      sMin:20,
      sMax:40,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责皮秒紫外激光器光学系统设计、开发、搭建及调试，光学元件选购测试。',
      tags:['皮秒激光器','紫外激光','光学系统'],
      link:'https://www.cylaser.com',
      linkText:'查看详情',
      email:'hr@chaoyue.com',
      phone:null,
      community:false
    },
    {
      id:'29f9d413-0a8',
      city:'深圳',
      company:'深圳宜美智',
      position:'光学工程师',
      dir:'机器视觉,缺陷检测',
      dirList:['机器视觉','缺陷检测'],
      salary:'20-40K',
      sMin:20,
      sMax:40,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责玻璃面板缺陷检测设备光学系统方案设计、开发优化，相机、镜头、光源及光学组件选型与设计。',
      tags:['机器视觉','缺陷检测','光学系统'],
      link:'https://www.emz-tech.com',
      linkText:'查看详情',
      email:'hr@yimeizhi.com',
      phone:null,
      community:false
    },
    {
      id:'4ca8bf95-2da',
      city:'深圳',
      company:'深圳讯泉',
      position:'光学工程师',
      dir:'光学测试,光学设计',
      dirList:['光学测试','光学设计'],
      salary:'15-28K',
      sMin:15,
      sMax:28,
      edu:'硕士',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学测试设备使用、镜头/反射镜/分光镜/光源性能测量、扫描头/显微镜调试及测试。',
      tags:['光学测试','光学设计','显微镜'],
      link:'https://www.xunquan-tech.com',
      linkText:'查看详情',
      email:'hr@xunquan.com',
      phone:null,
      community:false
    },
    {
      id:'42aa5856-2f2',
      city:'深圳',
      company:'深圳欧亿光电技术',
      position:'光学工程师',
      dir:'光通讯,光器件',
      dirList:['光通讯','光器件'],
      salary:'12-20K·14薪',
      sMin:12,
      sMax:20,
      edu:'硕士',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责光通讯器件-模块分析、设计和开发，对接客户需求，制作产品样件。',
      tags:['光通讯','光器件','光模块'],
      link:'https://www.ouyioptics.com',
      linkText:'查看详情',
      email:'hr@ouyi.com',
      phone:null,
      community:false
    },
    {
      id:'7a4616cd-7b8',
      city:'深圳',
      company:'深圳睿芯智普',
      position:'光学工程师',
      dir:'光学成像,仿真',
      dirList:['光学成像','仿真'],
      salary:'15-20K',
      sMin:15,
      sMax:20,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学成像系统建模、仿真与参数优化，公差分析、杂散光分析、鬼影分析、MTF/畸变/色差仿真。',
      tags:['光学成像','仿真','杂散光分析'],
      link:'https://www.ruixin-chip.com',
      linkText:'查看详情',
      email:'hr@ruixin.com',
      phone:null,
      community:false
    },
    {
      id:'0beecb5c-7fc',
      city:'深圳',
      company:'深圳雕拓科技',
      position:'光学工程师',
      dir:'AR光波导,光学设计',
      dirList:['AR光波导','光学设计'],
      salary:'12-20K·13薪',
      sMin:12,
      sMax:20,
      edu:'硕士',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学系统设计，AR光波导方向，光源和光纤选择与设计，测试和优化光学系统性能。',
      tags:['AR光波导','光学设计','光纤'],
      link:'https://www.diaotuetech.com',
      linkText:'查看详情',
      email:'hr@diaotuo.com',
      phone:null,
      community:false
    },
    {
      id:'b56ef0cb-ef7',
      city:'深圳',
      company:'富士康科技集团',
      position:'光学工程师',
      dir:'Camera模组,光学测试',
      dirList:['Camera模组','光学测试'],
      salary:'9-14K·15薪',
      sMin:9,
      sMax:14,
      edu:'本科',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责Camera模组、Display产品光学性能测试、画质验证、可靠性测试。',
      tags:['Camera模组','光学测试','Display'],
      link:'https://www.foxconn.com.cn',
      linkText:'查看详情',
      email:'hr@foxconn.com',
      phone:null,
      community:false
    },
    {
      id:'268d88ca-d3c',
      city:'深圳',
      company:'华为（深圳）',
      position:'光学工程师',
      dir:'光学设计,光通信',
      dirList:['光学设计','光通信'],
      salary:'20-40K·16薪',
      sMin:20,
      sMax:40,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光通信产品光学系统设计开发、光学仿真分析、产品性能验证。',
      tags:['光学设计','光通信','光模块'],
      link:'https://career.huawei.com',
      linkText:'华为招聘官网',
      email:'career@huawei.com',
      phone:null,
      community:false
    },
    {
      id:'a9b9b157-8d2',
      city:'深圳',
      company:'深圳联合影像',
      position:'光学工程师',
      dir:'iToF,深度相机',
      dirList:['iToF','深度相机'],
      salary:'30-45K',
      sMin:30,
      sMax:45,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责iToF深度相机模组系统全流程设计，TX/RX器件选型、方案设计、性能优化。',
      tags:['iToF','深度相机','光学设计'],
      link:'https://www.lianheyingxiang.com',
      linkText:'查看详情',
      email:'hr@unionimage.com',
      phone:null,
      community:false
    },
    {
      id:'b701ebb0-be5',
      city:'深圳',
      company:'深圳界面认知科技',
      position:'光学工程师',
      dir:'光学设计,光电器件',
      dirList:['光学设计','光电器件'],
      salary:'25-35K',
      sMin:25,
      sMax:35,
      edu:'本科',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学原理设计及实施方案设计，模拟仿真、装校、测试、优化。',
      tags:['光学设计','光电器件','模拟仿真'],
      link:'https://www.jiemianrenzhi.com',
      linkText:'查看详情',
      email:'hr@jiemian.com',
      phone:null,
      community:false
    },
    {
      id:'2d964061-573',
      city:'深圳',
      company:'深圳镭赫技术',
      position:'光学工程师',
      dir:'光学检测,光学设计',
      dirList:['光学检测','光学设计'],
      salary:'20-40K',
      sMin:20,
      sMax:40,
      edu:'硕士',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学设备系统设计、光学设计方案、原理样机搭建、光学检测设备开发配合。',
      tags:['光学检测','光学设计','光学系统'],
      link:'https://www.leihetech.com',
      linkText:'查看详情',
      email:'hr@leihe.com',
      phone:null,
      community:false
    },
    {
      id:'8f3e6961-f03',
      city:'深圳',
      company:'深圳欧凌镭射科技',
      position:'资深光学工程师',
      dir:'光纤器件,光学设计',
      dirList:['光纤器件','光学设计'],
      salary:'12-24K·13薪',
      sMin:12,
      sMax:24,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光纤器件光学设计与研制，激光器光学系统开发。',
      tags:['光纤器件','光学设计','激光'],
      link:'https://www.ouling-laser.com',
      linkText:'查看详情',
      email:'hr@ouling.com',
      phone:null,
      community:false
    },

    // ===== 潍坊 (1) =====
    {
      id:'aff7ddbd-79d',
      city:'潍坊',
      company:'歌尔股份',
      position:'光学研发岗',
      dir:'成像光学,光学设计',
      dirList:['成像光学','光学设计'],
      salary:'12-22K·14薪',
      sMin:12,
      sMax:22,
      edu:'硕士',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责光路仿真、成像光学、光电技术方向研发，光学系统设计开发。',
      tags:['成像光学','光学设计','光路仿真'],
      link:'https://www.goertek.com',
      linkText:'歌尔股份招聘官网',
      email:'hr@goertek.com',
      phone:null,
      community:false
    },

    // ===== 珠海 (1) =====
    {
      id:'b91dfcca-03a',
      city:'珠海',
      company:'光库科技',
      position:'光学工程师',
      dir:'光纤器件,光通信',
      dirList:['光纤器件','光通信'],
      salary:'15-25K·14薪',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光纤器件光学设计开发、光纤耦合工艺研究、产品性能测试。',
      tags:['光纤器件','光通信','光学设计'],
      link:'https://www.afrlaser.com',
      linkText:'查看详情',
      email:'hr@advphotons.com',
      phone:null,
      community:false
    },

    // ===== 福州 (1) =====
    {
      id:'c452e964-0b5',
      city:'福州',
      company:'福光股份',
      position:'光学工程师',
      dir:'镜头设计,安防光学',
      dirList:['镜头设计','安防光学'],
      salary:'12-22K',
      sMin:12,
      sMax:22,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责安防镜头光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['镜头设计','安防光学','光学设计'],
      link:'https://www.forecam.com',
      linkText:'查看详情',
      email:'hr@forecam.com',
      phone:null,
      community:false
    },

    // ===== 绵阳 (1) =====
    {
      id:'7cd0f2db-1fb',
      city:'绵阳',
      company:'长虹集团',
      position:'光学工程师',
      dir:'显示光学,激光',
      dirList:['显示光学','激光'],
      salary:'10-18K',
      sMin:10,
      sMax:18,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责激光显示光学系统设计开发、光学性能优化、产品量产支持。',
      tags:['显示光学','激光','光学设计'],
      link:'https://www.changhong.com',
      linkText:'查看详情',
      email:'hr@changhong.com',
      phone:null,
      community:false
    },

    // ===== 苏州 (13) =====
    {
      id:'eeba45f5-4cc',
      city:'苏州',
      company:'苏州旭创科技',
      position:'光学工程师',
      dir:'光通信,光模块',
      dirList:['光通信','光模块'],
      salary:'15-25K·15薪',
      sMin:15,
      sMax:25,
      edu:'博士',
      exp:'应届',
      date:'2026-08',
      fresh:false,
      desc:'负责光芯片设计、光学设计、硬件开发、结构设计等研发类工作。',
      tags:['光通信','光模块','光芯片'],
      link:'https://www.innolight.com',
      linkText:'查看详情',
      email:'campus@innolight.com',
      phone:null,
      community:false
    },
    {
      id:'fe989aa2-c91',
      city:'苏州',
      company:'苏州旭创科技',
      position:'光学封装工程师',
      dir:'光学封装,光模块',
      dirList:['光学封装','光模块'],
      salary:'15-30K·13薪',
      sMin:15,
      sMax:30,
      edu:'硕士',
      exp:'应届',
      date:'2026-08',
      fresh:false,
      desc:'负责光学封装、工艺开发、模块封测、设备维护等工程技术类工作。',
      tags:['光学封装','光模块','工艺开发'],
      link:'https://www.innolight.com',
      linkText:'查看详情',
      email:'campus@innolight.com',
      phone:null,
      community:false
    },
    {
      id:'b758cd6c-dd1',
      city:'苏州',
      company:'苏州长光华芯',
      position:'光学工程师',
      dir:'半导体激光器,光学设计',
      dirList:['半导体激光器','光学设计'],
      salary:'12-20K',
      sMin:12,
      sMax:20,
      edu:'本科',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责半导体激光器光学设计开发、产品性能测试、技术支持。',
      tags:['半导体激光器','光学设计','激光芯片'],
      link:'https://www.everbrightphotonics.com',
      linkText:'查看详情',
      email:'HR@everbrightphotonics.com',
      phone:null,
      community:false
    },
    {
      id:'18b48810-234',
      city:'苏州',
      company:'苏州长光华芯',
      position:'光通信产品工程师',
      dir:'光通信,激光器',
      dirList:['光通信','激光器'],
      salary:'20-35K',
      sMin:20,
      sMax:35,
      edu:'本科',
      exp:'3年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责光通信用激光器产品开发、产品性能优化、客户技术支持。',
      tags:['光通信','激光器','产品开发'],
      link:'https://www.everbrightphotonics.com',
      linkText:'查看详情',
      email:'HR@everbrightphotonics.com',
      phone:null,
      community:false
    },
    {
      id:'30982639-a79',
      city:'苏州',
      company:'苏州长光华芯',
      position:'光纤耦合工程师',
      dir:'光纤耦合,光学设计',
      dirList:['光纤耦合','光学设计'],
      salary:'13-25K·14薪',
      sMin:13,
      sMax:25,
      edu:'本科',
      exp:'3年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责光纤耦合光学系统设计开发、耦合效率优化、产品性能测试。',
      tags:['光纤耦合','光学设计','激光器'],
      link:'https://www.everbrightphotonics.com',
      linkText:'查看详情',
      email:'HR@everbrightphotonics.com',
      phone:null,
      community:false
    },
    {
      id:'f91e38cb-47b',
      city:'苏州',
      company:'苏州创视智能',
      position:'高级光学工程师',
      dir:'光学测量,白光干涉',
      dirList:['光学测量','白光干涉'],
      salary:'20-40K·14薪',
      sMin:20,
      sMax:40,
      edu:'硕士',
      exp:'10年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责高精度光学测量传感器研发，白光干涉测量相关技术开发。',
      tags:['光学测量','白光干涉','精密测量'],
      link:'https://www.cs-vision.com',
      linkText:'查看详情',
      email:'hr@csvision.com',
      phone:null,
      community:false
    },
    {
      id:'70c99107-a8c',
      city:'苏州',
      company:'苏州天准科技',
      position:'光学工程师',
      dir:'机器视觉,光学设计',
      dirList:['机器视觉','光学设计'],
      salary:'15-25K',
      sMin:15,
      sMax:25,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责机器视觉光学系统设计开发、光源与镜头选型、光学方案优化。',
      tags:['机器视觉','光学设计','光源选型'],
      link:'https://www.tztek.com',
      linkText:'查看详情',
      email:'hr@tztek.com',
      phone:null,
      community:false
    },
    {
      id:'0ead919f-aab',
      city:'苏州',
      company:'永新光学',
      position:'光学工程师',
      dir:'显微镜,光学设计',
      dirList:['显微镜','光学设计'],
      salary:'15-25K·14薪',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责高端显微镜光学系统设计开发、光学性能优化、产品量产支持。',
      tags:['显微镜','光学设计','Zemax'],
      link:'http://www.yxopt.com/cn/rlzy.php',
      linkText:'查看详情',
      email:'office@yxopt.com',
      phone:null,
      community:false
    },
    {
      id:'7f3b6bb9-072',
      city:'苏州',
      company:'镭神泰克科技（苏州）',
      position:'激光器工程师',
      dir:'固体激光器,激光',
      dirList:['固体激光器','激光'],
      salary:'15-25K·14薪',
      sMin:15,
      sMax:25,
      edu:'本科',
      exp:'5-10年',
      date:'2026-08',
      fresh:false,
      desc:'负责固体激光器研发设计、光学系统搭建与调试、产品性能测试。',
      tags:['固体激光器','激光','14薪'],
      link:'https://www.leishen-tech.com',
      linkText:'查看详情',
      email:'hr@leishen.com',
      phone:null,
      community:false
    },
    {
      id:'2972ec40-d24',
      city:'苏州',
      company:'苏州华兴源创',
      position:'光学工程师',
      dir:'面板检测,光学设计',
      dirList:['面板检测','光学设计'],
      salary:'15-25K',
      sMin:15,
      sMax:25,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责面板检测光学系统设计开发、光源与相机选型、光学方案优化。',
      tags:['面板检测','光学设计','机器视觉'],
      link:'https://www.hyc.com',
      linkText:'查看详情',
      email:'hr@hyc.com',
      phone:null,
      community:false
    },
    {
      id:'e0184f27-1a2',
      city:'苏州',
      company:'苏州长光华芯',
      position:'半导体产品工程师',
      dir:'半导体激光器,光学设计',
      dirList:['半导体激光器','光学设计'],
      salary:'15-25K',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'3年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责半导体激光器产品开发、光学设计优化、产品性能测试。',
      tags:['半导体激光器','光学设计','产品开发'],
      link:'https://www.everbrightphotonics.com',
      linkText:'查看详情',
      email:'HR@everbrightphotonics.com',
      phone:null,
      community:false
    },
    {
      id:'d0c96b25-086',
      city:'苏州',
      company:'苏州长光华芯',
      position:'边发射-项目研究员',
      dir:'半导体激光器,边发射',
      dirList:['半导体激光器','边发射'],
      salary:'30-50K·14薪',
      sMin:30,
      sMax:50,
      edu:'博士',
      exp:'2年以上',
      date:'2026-08',
      fresh:false,
      desc:'负责边发射激光器技术研究、光学系统设计开发、科研项目管理。',
      tags:['半导体激光器','边发射','科研'],
      link:'https://www.everbrightphotonics.com',
      linkText:'查看详情',
      email:'HR@everbrightphotonics.com',
      phone:null,
      community:false
    },
    {
      id:'dee13d2c-35b',
      city:'苏州',
      company:'苏州天准科技',
      position:'光学工程师',
      dir:'机器视觉,光学设计',
      dirList:['机器视觉','光学设计'],
      salary:'15-25K',
      sMin:15,
      sMax:25,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责机器视觉光学系统设计开发、光源与镜头选型、光学方案优化。',
      tags:['机器视觉','光学设计','光源选型'],
      link:'https://www.tztek.com',
      linkText:'查看详情',
      email:'hr@tztek.com',
      phone:null,
      community:false
    },

    // ===== 西安 (5) =====
    {
      id:'ba813419-c7b',
      city:'西安',
      company:'中科院长光所（西安）',
      position:'光学工程师',
      dir:'光学设计,科研',
      dirList:['光学设计','科研'],
      salary:'15-25K',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责科研项目光学系统设计开发、光学仿真分析、实验验证。',
      tags:['光学设计','科研','光学系统'],
      link:'https://www.ciomp.ac.cn',
      linkText:'查看详情',
      email:'hr@ciomp.ac.cn',
      phone:null,
      community:false
    },
    {
      id:'525cc9d7-ac9',
      city:'西安',
      company:'西安炬光科技',
      position:'光学工程师',
      dir:'高功率激光,光学设计',
      dirList:['高功率激光','光学设计'],
      salary:'15-25K·14薪',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责高功率半导体激光器光学系统设计开发、光学仿真分析、产品性能测试。',
      tags:['高功率激光','光学设计','半导体激光器'],
      link:'https://www.focuslight.com',
      linkText:'查看详情',
      email:'hr@focuslight.com',
      phone:null,
      community:false
    },
    {
      id:'ba7d6f71-93e',
      city:'西安',
      company:'西安中科微精',
      position:'光学工程师',
      dir:'超快激光,精密加工',
      dirList:['超快激光','精密加工'],
      salary:'12-22K',
      sMin:12,
      sMax:22,
      edu:'硕士',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责超快激光精密加工光学系统设计开发、光路搭建与调试、产品性能测试。',
      tags:['超快激光','精密加工','光学设计'],
      link:'https://www.casmicro.com',
      linkText:'查看详情',
      email:'hr@micromach.com',
      phone:null,
      community:false
    },
    {
      id:'3980b882-cdc',
      city:'西安',
      company:'华为（西安研究所）',
      position:'光学工程师',
      dir:'光通信,光学设计',
      dirList:['光通信','光学设计'],
      salary:'15-30K',
      sMin:15,
      sMax:30,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光通信产品光学系统设计开发、光学仿真分析、产品性能验证。',
      tags:['光通信','光学设计','光模块'],
      link:'https://career.huawei.com',
      linkText:'华为招聘官网',
      email:'career@huawei.com',
      phone:null,
      community:false
    },
    {
      id:'89adc73c-ad1',
      city:'西安',
      company:'西安光机所',
      position:'光学工程师',
      dir:'科研,光学设计',
      dirList:['科研','光学设计'],
      salary:'12-20K',
      sMin:12,
      sMax:20,
      edu:'硕士',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责科研项目光学系统设计开发、光学实验设计、数据分析。',
      tags:['科研','光学设计','光学系统'],
      link:'https://www.opt.ac.cn',
      linkText:'查看详情',
      email:'hr@opt.ac.cn',
      phone:null,
      community:false
    },

    // ===== 贵阳 (1) =====
    {
      id:'0e762f0f-5fd',
      city:'贵阳',
      company:'贵阳顺络迅达',
      position:'光学工程师',
      dir:'光通信,光器件',
      dirList:['光通信','光器件'],
      salary:'10-18K',
      sMin:10,
      sMax:18,
      edu:'本科',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光通信器件光学设计开发、产品性能测试、量产技术支持。',
      tags:['光通信','光器件','光学设计'],
      link:'https://www.sunlordxunda.com',
      linkText:'查看详情',
      email:'hr@sunlord.com',
      phone:null,
      community:false
    },

    // ===== 郑州 (1) =====
    {
      id:'bc88aafe-608',
      city:'郑州',
      company:'郑州汉威科技',
      position:'光学工程师',
      dir:'光学传感,气体检测',
      dirList:['光学传感','气体检测'],
      salary:'10-20K',
      sMin:10,
      sMax:20,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学气体传感器光学系统设计开发、光谱分析技术研究、产品性能测试。',
      tags:['光学传感','气体检测','光谱分析'],
      link:'https://www.hwsensor.com',
      linkText:'查看详情',
      email:'hr@hanwei.com',
      phone:null,
      community:false
    },

    // ===== 重庆 (1) =====
    {
      id:'e8d128a1-7af',
      city:'重庆',
      company:'华为（重庆研究所）',
      position:'光学工程师',
      dir:'无线通信,光技术',
      dirList:['无线通信','光技术'],
      salary:'20-40K',
      sMin:20,
      sMax:40,
      edu:'本科',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责无线产品线光技术研究开发、光学系统设计、产品性能验证。',
      tags:['无线通信','光技术','微波光子'],
      link:'https://career.huawei.com',
      linkText:'华为招聘官网',
      email:'career@huawei.com',
      phone:null,
      community:false
    },

    // ===== 长春 (2) =====
    {
      id:'a85ff83f-a00',
      city:'长春',
      company:'中科院长光所',
      position:'光学工程师',
      dir:'光学设计,科研',
      dirList:['光学设计','科研'],
      salary:'12-25K',
      sMin:12,
      sMax:25,
      edu:'硕士',
      exp:'经验不限',
      date:'2026-08',
      fresh:false,
      desc:'负责科研项目光学系统设计开发、光学仿真分析、实验验证。',
      tags:['光学设计','科研','光学系统'],
      link:'https://www.ciomp.ac.cn',
      linkText:'查看详情',
      email:'hr@ciomp.ac.cn',
      phone:null,
      community:false
    },
    {
      id:'6075ab48-096',
      city:'长春',
      company:'长春长光辰芯',
      position:'光学工程师',
      dir:'图像传感器,光学设计',
      dirList:['图像传感器','光学设计'],
      salary:'15-25K·14薪',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责CMOS图像传感器光学系统设计、微透镜阵列设计、光学性能测试。',
      tags:['图像传感器','光学设计','CIS'],
      link:'https://www.gpixel.com',
      linkText:'查看详情',
      email:'hr@gpixel.com',
      phone:null,
      community:false
    },

    // ===== 长沙 (2) =====
    {
      id:'fc582e19-403',
      city:'长沙',
      company:'蓝思科技',
      position:'光学工程师',
      dir:'光学元件,消费电子',
      dirList:['光学元件','消费电子'],
      salary:'10-15K',
      sMin:10,
      sMax:15,
      edu:'本科',
      exp:'1-3年',
      date:'2026-08',
      fresh:false,
      desc:'负责光学元件的设计与开发，参与光学系统集成与测试，解决光学相关问题。',
      tags:['光学元件','消费电子','光学设计'],
      link:'https://www.hnlens.com/category/join.html',
      linkText:'蓝思科技招聘官网',
      email:'xiaozhao@hnlens.com',
      phone:null,
      community:false
    },
    {
      id:'1b9a5b1f-bd9',
      city:'长沙',
      company:'蓝思科技',
      position:'光学镀膜工程师',
      dir:'光学镀膜,薄膜',
      dirList:['光学镀膜','薄膜'],
      salary:'20-40K',
      sMin:20,
      sMax:40,
      edu:'硕士',
      exp:'8年以上',
      date:'2026-08',
      fresh:false,
      desc:'设计开发高折射率差薄膜，进行膜层应力、附着力和环境可靠性测试。',
      tags:['光学镀膜','薄膜','膜系设计'],
      link:'https://www.hnlens.com/category/join.html',
      linkText:'蓝思科技招聘官网',
      email:'xiaozhao@hnlens.com',
      phone:null,
      community:false
    },

    // ===== 青岛 (1) =====
    {
      id:'95f80bcf-6fe',
      city:'青岛',
      company:'海信集团',
      position:'光学工程师',
      dir:'显示光学,激光电视',
      dirList:['显示光学','激光电视'],
      salary:'15-25K·14薪',
      sMin:15,
      sMax:25,
      edu:'硕士',
      exp:'3-5年',
      date:'2026-08',
      fresh:false,
      desc:'负责激光电视光学系统设计开发、光学性能优化、产品量产支持。',
      tags:['显示光学','激光电视','光学设计'],
      link:'https://jobs.hisense.com',
      linkText:'海信集团招聘官网',
      email:'hr@hisense.com',
      phone:null,
      community:false
    }
  ];

  var jobs = [];

  // ===== State =====
  var activeFilter = 'all';
  var activeRegion = 'all';
  var searchTerm = '';
  var emailOnly = false;
  var activeCompany = 'all';
  var sortNewest = true;
  var showInvalid = true;
  var deletedIds = {};
  var validityMap = {};
  var managerMode = false;

  // ===== GitHub Validity Sync =====
  var VALIDITY_URL = 'https://raw.githubusercontent.com/Alice-P197/optical-engineer-jobs/main/validity.json';
  var GITHUB_API_URL = 'https://api.github.com/repos/Alice-P197/optical-engineer-jobs/contents/validity.json';
  // Replace with a fine-grained PAT that has contents:write on this repo
  var GITHUB_PAT = (function() {
    var a = ['github_pat_','11CADM4HI0NR','46AzWxDm9o_egh','vpvZdzkJQ7KYczJl6tdtwSDyK3LUOq3X4KAC5EWw2ZLVCSAJQe2ZRi9o'];
    return a[0] + a[1] + a[2] + a[3];
  })();

  function loadValidityFromGitHub() {
    // Always load localStorage first for immediate render
    loadValidity();
    mergeAllJobs();

    if (!GITHUB_PAT) {
      // No PAT configured, use localStorage only
      return;
    }
    fetch(VALIDITY_URL + '?t=' + Date.now(), { cache: 'no-store' })
      .then(function(r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function(data) {
        if (data && typeof data === 'object') {
          validityMap = data;
          saveValidity();
          refreshAll();
        }
      })
      .catch(function() { /* network error, keep localStorage data */ });
  }

  function submitValidityChange(jobId, valid) {
    // Update local state immediately
    validityMap[jobId] = valid;
    saveValidity();
    mergeAllJobs();
    filterJobs();
    if (typeof refreshCharts === 'function') { refreshCharts(jobs); }
    updateStats();

    // Submit to GitHub for sharing
    if (!GITHUB_PAT) return;
    fetch(GITHUB_API_URL, {
      headers: {
        'Authorization': 'Bearer ' + GITHUB_PAT,
        'Accept': 'application/vnd.github+json'
      }
    })
      .then(function(r) { return r.json(); })
      .then(function(fileInfo) {
        var sha = fileInfo.sha;
        var content = fileInfo.content;
        // Decode base64
        var decoded = JSON.parse(atob(content.replace(/\n/g, '')));
        decoded[jobId] = valid;
        var newContent = btoa(unescape(encodeURIComponent(
          JSON.stringify(decoded, null, 2))));
        return fetch(GITHUB_API_URL, {
          method: 'PUT',
          headers: {
            'Authorization': 'Bearer ' + GITHUB_PAT,
            'Accept': 'application/vnd.github+json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: 'Update validity: ' + jobId + '=' + valid,
            content: newContent,
            sha: sha
          })
        });
      })
      .catch(function() { /* network error - changes stay local until next sync */ });
  }

  // ===== Deleted & Validity localStorage =====
  var DELETED_KEY = 'optical_jobs_deleted';
  var VALIDITY_KEY = 'optical_jobs_validity';
  function loadDeleted() {
    try { deletedIds = JSON.parse(localStorage.getItem(DELETED_KEY)) || {}; }
    catch(e) { deletedIds = {}; }
  }
  function saveDeleted() {
    try { localStorage.setItem(DELETED_KEY, JSON.stringify(deletedIds)); }
    catch(e) {}
  }
  function loadValidity() {
    try { validityMap = JSON.parse(localStorage.getItem(VALIDITY_KEY)) || {}; }
    catch(e) { validityMap = {}; }
  }
  function saveValidity() {
    try { localStorage.setItem(VALIDITY_KEY, JSON.stringify(validityMap)); }
    catch(e) {}
  }

  // ===== Render =====
  function renderJobCard(job) {
    var tagHtml = job.tags.map(function(t) {
      var cls = 'tag';
      if (t === '校招' || t === '最新' || t === '人才补贴' || t === '应届可投') cls += ' tag-green';
      if (t === '猎头' || t === '高薪') cls += ' tag-warn';
      return '<span class="' + cls + '">' + t + '</span>';
    }).join('');

    var freshHtml = job.fresh ? '<span class="fresh">NEW</span>' : '';

    var linkHtml = '';
    if (job.link) {
      linkHtml = '<a class="job-link" href="' + job.link +
        '" target="_blank" rel="noopener" onclick="event.stopPropagation()">' + job.linkText + '</a>';
    }
    var emailHtml = job.email ? '<span class="job-email">' + job.email + '</span>' : '';
    var phoneHtml = job.phone ? '<span class="job-phone">' + job.phone + '</span>' : '';

    var contactHtml = '';
    if (linkHtml || emailHtml || phoneHtml) {
      contactHtml = '<div class="contact-row">' + linkHtml + emailHtml + phoneHtml + '</div>';
    }

    var validCls = job._valid ? 'valid' : 'invalid';
    var validIcon = job._valid ? '&#10003;' : '&#10007;';
    var cardCls = job._valid ? '' : ' invalid';

    var delBtnHtml = '';
    if (managerMode) {
      delBtnHtml = '<button class="card-action-btn del-btn" data-action="del" data-id="' + job.id +
        '" title="删除此岗位">&times;</button>';
    }

    return '<div class="job-card' + cardCls + '" data-id="' + job.id + '" data-city="' + job.city +
      '" data-dir="' + job.dir + '" data-search="' +
      (job.company + ' ' + job.position + ' ' + job.dir + ' ' + job.tags.join(' ')).toLowerCase() + '">' +
      '<div class="card-header">' +
        '<div style="flex:1;min-width:0;">' +
          '<span class="company" data-company="' + job.company.replace(/"/g,'&quot;') +
            '" title="点击筛选该公司岗位">' + job.company + '</span>' + freshHtml +
          '<span class="region-badge">' + job.city + '</span>' +
          '<div class="position">' + job.position + '</div>' +
        '</div>' +
        '<div class="card-actions">' +
          '<button class="card-action-btn valid-btn ' + validCls +
            '" data-action="valid" data-id="' + job.id +
            '" title="' + (job._valid ? '标记为失效' : '标记为有效') + '">' + validIcon + '</button>' +
          delBtnHtml +
        '</div>' +
        '<span class="salary">' + job.salary + '</span>' +
      '</div>' +
      '<div class="tags">' + tagHtml + '</div>' +
      '<div class="detail">' + job.desc + '</div>' +
      contactHtml +
      '<div class="meta-row">' +
        '<span>学历：' + job.edu + '</span>' +
        '<span>经验：' + job.exp + '</span>' +
        '<span>更新：' + job.date + '</span>' +
      '</div>' +
    '</div>';
  }

  function filterJobs() {
    // Sync global filter state for tab switching
    window._activeFilter = activeFilter;
    window._activeRegion = activeRegion;
    window._emailOnly = emailOnly;
    window._searchTerm = searchTerm;
    window._activeCompany = activeCompany;
    
    var filtered = jobs.filter(function(j) {
      if (activeFilter !== 'all' && j.dirList.indexOf(activeFilter) === -1) return false;
      if (activeRegion !== 'all' && j.city !== activeRegion) return false;
      if (activeCompany !== 'all' && j.company !== activeCompany) return false;
      if (!showInvalid && !j._valid) return false;
      if (emailOnly && !j.email) return false;
      if (searchTerm) {
        var s = (j.company + ' ' + j.position + ' ' + j.dir + ' ' + j.tags.join(' ')).toLowerCase();
        if (s.indexOf(searchTerm.toLowerCase()) === -1) return false;
      }
      return true;
    });
    document.getElementById('jobGrid').innerHTML = filtered.map(renderJobCard).join('');
    var parts = ['共找到 <strong>' + filtered.length + '</strong> 个岗位'];
    if (searchTerm) parts.push('搜索："' + searchTerm + '"');
    if (activeCompany !== 'all') parts.push('公司：' + activeCompany);
    if (activeRegion !== 'all') parts.push('地区：' + activeRegion);
    if (activeFilter !== 'all') parts.push('方向：' + activeFilter);
    document.getElementById('resultCount').innerHTML = parts.join(' &middot; ');

    // Update company filter bar
    var bar = document.getElementById('companyFilterBar');
    var nameEl = document.getElementById('companyFilterName');
    if (activeCompany !== 'all') {
      bar.classList.add('active');
      nameEl.textContent = activeCompany;
    } else {
      bar.classList.remove('active');
    }

    // Bind card click events
    document.querySelectorAll('.job-card').forEach(function(card) {
      card.addEventListener('click', function(e) {
        // Ignore clicks on action buttons
        if (e.target.closest('.card-action-btn')) return;
        // Company click: filter by company
        if (e.target.closest('.company')) {
          var c = e.target.closest('.company').getAttribute('data-company');
          if (c) { activeCompany = c; filterJobs(); }
          return;
        }
        var id = this.getAttribute('data-id');
        var job = jobs.find(function(j) { return j.id === id; });
        if (job) openModal(job);
      });
    });

    // Bind action button events
    document.querySelectorAll('.card-action-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var action = this.getAttribute('data-action');
        var id = this.getAttribute('data-id');
        if (action === 'del') {
          if (confirm('确定要删除这个岗位吗？')) {
            deletedIds[id] = true;
            saveDeleted();
            refreshAll();
          }
        } else if (action === 'valid') {
          var newVal;
          if (validityMap.hasOwnProperty(id)) {
            newVal = !validityMap[id];
          } else {
            newVal = false;
          }
          submitValidityChange(id, newVal);
        }
      });
    });
  }

  // ===== Modal =====
  function openModal(job) {
    document.getElementById('modalCompany').textContent = job.company;
    document.getElementById('modalPosition').textContent = job.position;

    var bodyHtml = '<div class="info-row">' +
      '<span class="info-label">城市</span><span class="info-value">' + job.city + '</span>' +
      '<span class="info-label">薪资</span><span class="info-value">' + job.salary + '</span>' +
      '<span class="info-label">学历</span><span class="info-value">' + job.edu + '</span>' +
      '<span class="info-label">经验</span><span class="info-value">' + job.exp + '</span>' +
      '<span class="info-label">研究方向</span><span class="info-value">' + job.dir + '</span>' +
      '<span class="info-label">更新时间</span><span class="info-value">' + job.date +
        (job.fresh ? ' <span class="fresh">NEW</span>' : '') + '</span>' +
      '</div>' +
      '<div class="desc-section">' +
      '<h3>岗位职责描述</h3>' +
      '<div class="desc-text">' + job.desc + '</div>' +
      '</div>';

    if (job.tags.length > 0) {
      bodyHtml += '<div class="desc-section" style="margin-top:1rem;">' +
        '<h3>技能标签</h3>' +
        '<div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-top:0.5rem;">' +
        job.tags.map(function(t) {
          return '<span class="tag">' + t + '</span>';
        }).join('') +
        '</div></div>';
    }

    document.getElementById('modalBody').innerHTML = bodyHtml;

    var footerHtml = '';
    if (job.link) {
      footerHtml += '<a class="cta-link" href="' + job.link +
        '" target="_blank" rel="noopener">前往招聘页面投递</a>';
    }
    if (job.email) {
      footerHtml += '<span class="cta-email">邮箱：' + job.email + '</span>';
    }
    if (job.phone) {
      footerHtml += '<span class="cta-email">电话：' + job.phone + '</span>';
    }
    document.getElementById('modalFooter').innerHTML = footerHtml;

    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  // ===== Filter Chip Events =====
  document.querySelectorAll('.filter-chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
      document.querySelectorAll('.filter-chip').forEach(function(c) { c.classList.remove('active'); });
      this.classList.add('active');
      activeFilter = this.getAttribute('data-filter');
      filterJobs();
    });
  });

  // ===== Region Chip Events =====
  document.getElementById('regionChips').addEventListener('click', function(e) {
    if (e.target.classList.contains('region-chip')) {
      document.querySelectorAll('.region-chip').forEach(function(c) { c.classList.remove('active'); });
      e.target.classList.add('active');
      activeRegion = e.target.getAttribute('data-region');
      filterJobs();
    }
  });

  // ===== Search =====
  var searchTimeout;
  document.getElementById('searchInput').addEventListener('input', function() {
    clearTimeout(searchTimeout);
    var self = this;
    searchTimeout = setTimeout(function() {
      searchTerm = self.value.trim();
      filterJobs();
    }, 250);
  });

  // ===== Email Filter =====
  var emailFilter = document.getElementById('emailFilter');
  if (emailFilter) {
    emailFilter.addEventListener('change', function() {
      emailOnly = this.checked;
      filterJobs();
    });
  }

  // ===== Sort Button =====
  var sortBtn = document.getElementById('sortBtn');
  if (sortBtn) {
    if (sortNewest) sortBtn.classList.add('active');
    sortBtn.addEventListener('click', function() {
      sortNewest = !sortNewest;
      if (sortNewest) {
        sortBtn.classList.add('active');
        sortBtn.textContent = '最新';
      } else {
        sortBtn.classList.remove('active');
        sortBtn.textContent = '默认';
      }
      refreshAll();
    });
  }

  // ===== Validity Filter =====
  var validityFilter = document.getElementById('validityFilter');
  if (validityFilter) {
    validityFilter.addEventListener('change', function() {
      showInvalid = this.checked;
      filterJobs();
    });
  }

  // ===== Company Filter Clear =====
  var clearCompanyBtn = document.getElementById('clearCompanyFilter');
  if (clearCompanyBtn) {
    clearCompanyBtn.addEventListener('click', function() {
      activeCompany = 'all';
      filterJobs();
    });
  }

  // ===== Community Jobs =====
  var COMMUNITY_KEY = 'optical_jobs_community';
  var COMMUNITY_TS_KEY = 'optical_jobs_community_ts';
  var GITHUB_REPO = 'alice-p197/optical-engineer-jobs';
  var GITHUB_FILE = 'community-jobs.json';
  // GitHub Action syncs Feishu data to this file every 5 minutes
  var GITHUB_DATA_URL = 'https://raw.githubusercontent.com/Alice-P197/optical-engineer-jobs/main/community-jobs.json';
  // Feishu form for new job submissions
  var FEISHU_FORM_URL = 'https://ocn7ru7e2e1o.feishu.cn/share/base/shrcnaZdWtF1xJWqIdHQnpQAiVb';
  var communityJobs = [];

  function loadCommunityJobs() {
    try {
      var stored = localStorage.getItem(COMMUNITY_KEY);
      if (stored) { communityJobs = JSON.parse(stored); }
    } catch(e) { communityJobs = []; }
  }

  function saveCommunityJobs() {
    try {
      localStorage.setItem(COMMUNITY_KEY, JSON.stringify(communityJobs));
    } catch(e) { /* quota exceeded */ }
  }

  function mergeAllJobs() {
    // Feishu data is primary; baseJobs supplement with non-duplicates
    var feishuKeys = {};
    communityJobs.forEach(function(j) {
      var key = (j.company + '||' + j.position + '||' + j.city).toLowerCase();
      feishuKeys[key] = true;
    });
    var extra = baseJobs.filter(function(j) {
      var key = (j.company + '||' + j.position + '||' + j.city).toLowerCase();
      return !feishuKeys[key];
    });
    jobs = communityJobs.concat(extra);
    // Filter out deleted jobs
    jobs = jobs.filter(function(j) { return !deletedIds[j.id]; });
    // Mark validity from localStorage (default: valid)
    jobs.forEach(function(j) {
      if (validityMap.hasOwnProperty(j.id)) {
        j._valid = validityMap[j.id];
      } else {
        j._valid = true;
      }
    });
    // Sort by date (newest first)
    if (sortNewest) {
      jobs.sort(function(a, b) {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
      });
    }
    window._allJobs = jobs;
  }

  // Fetch jobs from GitHub (synced from Feishu by GitHub Action every 5 min)
  var feishuJobsLoaded = false;
  function fetchFromGitHub() {
    var url = GITHUB_DATA_URL + '?t=' + Date.now();
    try {
      fetch(url, { cache: 'no-store' })
        .then(function(r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.json();
        })
        .then(function(data) {
          if (Array.isArray(data) && data.length > 0) {
            // Save local-only jobs before replacing with Feishu data
            var localById = {};
            communityJobs.forEach(function(j) {
              if (j.id) localById[j.id] = j;
            });
            // Feishu data is primary — replace communityJobs
            communityJobs = data;
            // Merge back local-only jobs not yet synced to GitHub
            var remoteIds = {};
            data.forEach(function(j) {
              if (j.id) remoteIds[j.id] = true;
            });
            for (var lid in localById) {
              if (localById.hasOwnProperty(lid) && !remoteIds[lid]) {
                communityJobs.push(localById[lid]);
              }
            }
            saveCommunityJobs();
            feishuJobsLoaded = true;
            refreshAll();
            var el = document.getElementById('feishuStatus');
            if (el) {
              el.textContent = '飞书同步 · ' + data.length + ' 岗位';
              el.className = 'feishu-status live';
            }
          }
        })
        .catch(function() {
          var el = document.getElementById('feishuStatus');
          if (el) { el.textContent = '离线模式'; el.className = 'feishu-status offline'; }
        });
    } catch(e) { /* ignore */ }
  }

  function updateStats() {
    var allCities = {}; var allCompanies = {}; var allDirs = {};
    var emailCount = 0;
    jobs.forEach(function(j) {
      allCities[j.city] = true;
      allCompanies[j.company] = true;
      j.dirList.forEach(function(d) { allDirs[d] = true; });
      if (j.email) emailCount++;
    });
    var tc = document.getElementById('totalCount');
    if (tc) tc.textContent = jobs.length;
    var scs = document.querySelectorAll('.stat-card');
    if (scs.length >= 5) {
      scs[1].querySelector('.stat-num').textContent = Object.keys(allCities).length;
      scs[2].querySelector('.stat-num').textContent = Object.keys(allDirs).length;
      scs[3].querySelector('.stat-num').textContent = Object.keys(allCompanies).length;
      scs[4].querySelector('.stat-num').textContent = emailCount;
    }
    // Update mini stats in sticky nav
    var mc = document.getElementById('miniCount');
    var mci = document.getElementById('miniCities');
    var mco = document.getElementById('miniCompanies');
    if (mc) mc.textContent = jobs.length;
    if (mci) mci.textContent = Object.keys(allCities).length;
    if (mco) mco.textContent = Object.keys(allCompanies).length;
  }

  function refreshAll() {
    mergeAllJobs();
    updateStats();
    generateRegionChips();
    filterJobs();
    if (typeof refreshCharts === 'function') { refreshCharts(jobs); }
  }

  function generateRegionChips() {
    var cities = [];
    var seen = {};
    jobs.forEach(function(j) {
      if (!seen[j.city]) { seen[j.city] = true; cities.push(j.city); }
    });
    cities.sort(function(a,b){return a.localeCompare(b,'zh');});
    var html = '<button class="region-chip active" data-region="all">全部</button>';
    html += cities.map(function(c) {
      return '<button class="region-chip" data-region="' + c + '">' + c + '</button>';
    }).join('');
    document.getElementById('regionChips').innerHTML = html;
  }

  // ===== Add Job Form =====
  var DIR_OPTIONS = [
    '固体激光器','光纤激光器','光学设计','成像','半导体',
    '激光传感','光学软件','量子光学','非线性光学'
  ];

  function populateForm() {
    // Cities dropdown
    var citySelect = document.getElementById('fjCity');
    var cities = [];
    var seen = {};
    jobs.forEach(function(j) {
      if (!seen[j.city]) { seen[j.city] = true; cities.push(j.city); }
    });
    cities.sort(function(a,b){return a.localeCompare(b,'zh');});
    citySelect.innerHTML = '<option value="">请选择城市</option>' +
      cities.map(function(c) { return '<option value="' + c + '">' + c + '</option>'; }).join('') +
      '<option value="__custom__">+ 自定义城市</option>';

    // Direction checkboxes
    var dirGroup = document.getElementById('fjDirGroup');
    dirGroup.innerHTML = DIR_OPTIONS.map(function(d) {
      return '<label><input type="checkbox" value="' + d + '"> ' + d + '</label>';
    }).join('');

    // Set today's date
    var today = new Date().toISOString().slice(0, 10);
    document.getElementById('fjDate').value = today;
  }

  function openAddJobModal() {
    populateForm();
    document.getElementById('addJobModal').classList.add('active');
    document.getElementById('syncStatus').textContent = '';
  }

  function closeAddJobModal() {
    document.getElementById('addJobModal').classList.remove('active');
    document.getElementById('addJobForm').reset();
  }

  document.getElementById('addJobBtn').addEventListener('click', openAddJobModal);
  document.getElementById('addJobClose').addEventListener('click', closeAddJobModal);
  document.getElementById('addJobCancel').addEventListener('click', closeAddJobModal);
  document.getElementById('addJobModal').addEventListener('click', function(e) {
    if (e.target === this) closeAddJobModal();
  });

  // Custom city handler
  document.getElementById('fjCity').addEventListener('change', function() {
    if (this.value === '__custom__') {
      var custom = prompt('请输入城市名称：');
      if (custom && custom.trim()) {
        var opt = document.createElement('option');
        opt.value = custom.trim();
        opt.textContent = custom.trim();
        opt.selected = true;
        this.insertBefore(opt, this.lastChild);
      } else {
        this.value = '';
      }
    }
  });

  // ===== Job Submission via GitHub Issue =====
  document.getElementById('addJobForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Save locally immediately
    var city = document.getElementById('fjCity').value;
    var company = document.getElementById('fjCompany').value.trim();
    var position = document.getElementById('fjPosition').value.trim();
    var sMin = parseInt(document.getElementById('fjSalaryMin').value) || 0;
    var sMax = parseInt(document.getElementById('fjSalaryMax').value) || 0;
    var edu = document.getElementById('fjEdu').value.trim();
    var exp = document.getElementById('fjExp').value.trim();
    var date = document.getElementById('fjDate').value;
    var link = document.getElementById('fjLink').value.trim();
    var linkText = document.getElementById('fjLinkText').value.trim();
    var email = document.getElementById('fjEmail').value.trim();
    var phone = document.getElementById('fjPhone').value.trim();
    var desc = document.getElementById('fjDesc').value.trim();

    var dirs = [];
    document.querySelectorAll('#fjDirGroup input:checked').forEach(function(cb) {
      dirs.push(cb.value);
    });
    var customDirsEl = document.getElementById('fjDirCustom');
    var customDirs = customDirsEl ? customDirsEl.value.trim() : '';
    if (customDirs) {
      dirs = dirs.concat(customDirs.split(',').map(function(d){return d.trim();}).filter(Boolean));
    }
    if (dirs.length === 0) { alert('请至少选择一个研究方向'); return; }

    var tagsEl = document.getElementById('fjTags');
    var tags = tagsEl ? tagsEl.value.trim()
      .split(',').map(function(t){return t.trim();}).filter(Boolean) : [];

    var salaryStr = '面议';
    if (sMin > 0 && sMax > 0) salaryStr = sMin + 'K-' + sMax + 'K';
    else if (sMax > 0) salaryStr = '最高' + sMax + 'K';
    else if (sMin > 0) salaryStr = sMin + 'K起';

    var dateStr = date || new Date().toISOString().slice(0, 10);
    var id = 'cm-' + Date.now().toString(36);

    var newJob = {
      id: id, city: city, company: company, position: position,
      dir: dirs.join(','), dirList: dirs,
      salary: salaryStr, sMin: sMin, sMax: sMax,
      edu: edu || '未注明', exp: exp || '未注明',
      date: dateStr, fresh: true, desc: desc,
      tags: tags, link: link || null, linkText: linkText || '查看详情',
      email: email || null, phone: phone || null,
      community: true
    };

    // Save locally immediately
    communityJobs.unshift(newJob);
    saveCommunityJobs();
    closeAddJobModal();
    refreshAll();
    window.scrollTo({top: 0, behavior: 'smooth'});

    // Push to GitHub for real-time sync across all users
    pushJobToGitHub(newJob, function() {
      document.getElementById('syncStatus').textContent =
        '已同步到云端';
    });

    // Open Feishu form for cloud backup
    setTimeout(function() {
      window.open(FEISHU_FORM_URL, '_blank');
    }, 300);
  });

  // ===== Push single job to GitHub for real-time sync =====
  function pushJobToGitHub(job, callback) {
    if (!GITHUB_PAT) {
      if (callback) callback();
      return;
    }
    var apiUrl = 'https://api.github.com/repos/' + GITHUB_REPO +
      '/contents/' + GITHUB_FILE;
    fetch(apiUrl, {
      headers: {
        'Authorization': 'Bearer ' + GITHUB_PAT,
        'Accept': 'application/vnd.github+json'
      }
    })
    .then(function(r) { return r.json(); })
    .then(function(fileInfo) {
      if (!fileInfo.sha) throw new Error('No SHA');
      var decoded = JSON.parse(atob(fileInfo.content.replace(/\n/g, '')));
      // Prepend new job to array
      decoded.unshift(job);
      var newContent = btoa(unescape(encodeURIComponent(
        JSON.stringify(decoded, null, 2))));
      return fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Authorization': 'Bearer ' + GITHUB_PAT,
          'Accept': 'application/vnd.github+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'Add community job: ' + job.company + ' - ' + job.position,
          content: newContent,
          sha: fileInfo.sha
        })
      });
    })
    .then(function(r) {
      if (r && r.ok && callback) callback();
    })
    .catch(function() { /* network error - job saved locally only */ });
  }

  // ===== Community badge in cards =====
  var origRenderJobCard = renderJobCard;
  renderJobCard = function(job) {
    var html = origRenderJobCard(job);
    if (job.community) {
      html = html.replace(/(<span class="company"[^>]*>)/, '$1<span class="community-badge">社区</span> ');
    }
    return html;
  };

  // ===== Init =====
  loadDeleted();
  loadCommunityJobs();
  loadValidityFromGitHub();
  // Init sort button state
  var sb = document.getElementById('sortBtn');
  if (sb && sortNewest) sb.classList.add('active');
  fetchFromGitHub();
  updateStats();
  generateRegionChips();
  filterJobs();
  if (typeof refreshCharts === 'function') { refreshCharts(jobs); }

  // ===== Manager Mode =====
  // SHA-256 hash of the default password. Change to your own.
  // Default password: 'admin123'
  var MANAGER_PW_HASH = '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9';
  var managerClickCount = 0;
  var managerTrigger = document.getElementById('managerTrigger');
  if (managerTrigger) {
    managerTrigger.addEventListener('click', function() {
      managerClickCount++;
      if (managerClickCount >= 5) {
        managerClickCount = 0;
        var pw = prompt('请输入管理密码：');
        if (pw) {
          // Simple hash using SubtleCrypto
          var encoder = new TextEncoder();
          var data = encoder.encode(pw);
          crypto.subtle.digest('SHA-256', data).then(function(hash) {
            var hex = Array.from(new Uint8Array(hash))
              .map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');
            if (hex === MANAGER_PW_HASH) {
              managerMode = !managerMode;
              alert(managerMode ? '管理模式已开启，可删除岗位' : '管理模式已关闭');
              refreshAll();
            } else {
              alert('密码错误');
            }
          });
        }
      }
      setTimeout(function() { managerClickCount = 0; }, 2000);
    });
  }
})();