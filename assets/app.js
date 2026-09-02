(function() {
  // ===== 72 Jobs across 25 cities (base) =====
  var baseJobs = [
    // ===== 合肥 (13) =====
    {id:'hf-01',city:'合肥',company:'合肥美亚光电',position:'光学工程师',dir:'光学设计,成像',dirList:['光学设计','成像'],salary:'面议',sMin:0,sMax:0,edu:'硕士',exp:'应届/经验不限',date:'2026-08-25',fresh:true,desc:'根据产品需求制定光学方案，完成成像光路、投影光路和照明方案的设计和评估；光学器件选型（镜头、激光器、滤光片、相机等）；光路结构装配、调试和测试。',tags:['成像光路','Zemax','校招'],link:'https://www.meyerop.com',linkText:'官网投递',email:'hr@chinameyer.com',phone:'0551-65317745'},
    {id:'hf-02',city:'合肥',company:'安徽华创鸿度光电',position:'光学工程师（激光器）',dir:'固体激光器,光纤激光器',dirList:['固体激光器','光纤激光器'],salary:'12-25K·14薪',sMin:12,sMax:25,edu:'本科',exp:'1年以上',date:'2026-07-09',fresh:false,desc:'负责参与固体、光纤、紫外、飞秒激光器研发与生产；完善公司产品工艺流程，迭代及优化现有产品技术方案。高企、专精特新"小巨人"。',tags:['固体激光器','光纤激光器','飞秒激光器','紫外激光器'],link:'https://www.huachuanghongdu.com',linkText:'官网',email:null,phone:'0551-6565****'},
    {id:'hf-03',city:'合肥',company:'芯碁微装',position:'光学工程师',dir:'半导体,固体激光器',dirList:['半导体','固体激光器'],salary:'面议',sMin:0,sMax:0,edu:'硕士',exp:'3-5年',date:'2026-08',fresh:false,desc:'负责半导体激光器光纤耦合模块、空间合束模块的光学设计与方案开发；参与光源系统集成，解决合束效率、热管理、光束质量等工程问题。',tags:['半导体激光器','光纤耦合','空间合束','光刻设备'],link:'https://www.zhipin.com/job_detail/d28b4fe3ec023cac0ndy09m1GFNX.html',linkText:'BOSS直聘投递',email:null,phone:null},
    {id:'hf-04',city:'合肥',company:'幺正量子',position:'光学工程师',dir:'量子光学,固体激光器',dirList:['量子光学','固体激光器'],salary:'12-21K·14薪',sMin:12,sMax:21,edu:'硕士',exp:'经验不限',date:'2026-08',fresh:false,desc:'激光器使用与维护，空间光路搭建，激光稳频，频率调制，光束整形。离子阱量子系统相关光学工作。',tags:['激光稳频','频率调制','光束整形','空间光路'],link:'https://www.unitqc.com/?c=5',linkText:'官网招聘页',email:'hr@unitqc.com',phone:null},
    {id:'hf-05',city:'合肥',company:'柏逸激光',position:'光学工程师',dir:'固体激光器',dirList:['固体激光器'],salary:'面议',sMin:0,sMax:0,edu:'本科',exp:'3-5年',date:'2026-08',fresh:false,desc:'激光器相关光学系统设计、测试与优化。负责部门光学组件的设计、加工、打样、应用开发。',tags:['激光器','光学设计'],link:'https://www.boyilaser.com/list_19/',linkText:'官网招聘页',email:'hr@boyilaser.com',phone:'0551-65652935'},
    {id:'hf-06',city:'合肥',company:'中科君达视界',position:'光学工程师（流式/激光器）',dir:'光学设计,成像,固体激光器',dirList:['光学设计','成像','固体激光器'],salary:'20-35K·14薪',sMin:20,sMax:35,edu:'本科/硕士',exp:'3年以上',date:'2026-08',fresh:false,desc:'流式光学系统设计与开发；双腔/多腔脉冲激光、PIV光源或高重频调Q激光完整项目经验。B轮融资。',tags:['流式光学','PIV光源','调Q激光','B轮'],link:'https://www.gaosuxiangji.com/home/category/detail/id/834.html',linkText:'官网招聘页',email:'hr@gaosuxiangji.com',phone:'0551-63635897'},
    {id:'hf-07',city:'合肥',company:'御微半导体',position:'光学工程师/光学设计工程师',dir:'半导体,光学设计',dirList:['半导体','光学设计'],salary:'15-40K·14薪',sMin:15,sMax:40,edu:'本科及以上',exp:'1-5年',date:'2026-08',fresh:false,desc:'负责成像光学系统开发及成像系统指标分解；成像系统测试方案开发；参与光学及光电系统的集成调试。',tags:['成像光学','半导体检测','Zemax'],link:'http://yuweitk.com/en/SocialRecruitment/index.aspx',linkText:'官网招聘页',email:'hr@yuweitk.com',phone:'0551-65651750'},
    {id:'hf-08',city:'合肥',company:'九川智能',position:'光学工程师',dir:'光学设计,成像',dirList:['光学设计','成像'],salary:'20-30K·13薪',sMin:20,sMax:30,edu:'硕士',exp:'5-10年',date:'2026-08',fresh:false,desc:'PCB外观检测设备的光学成像系统（线扫/面阵相机、镜头、光源及光学组件）方案设计、仿真与验证，满足高精度（微米级）检测需求。',tags:['PCB检测','光学成像','Zemax','TracePro'],link:'https://www.zhipin.com/job_detail/7d093f83606e06380nB83dW1EVRU.html',linkText:'BOSS直聘投递',email:null,phone:null},
    {id:'hf-09',city:'合肥',company:'合肥国家实验室',position:'光学工程师（多个方向）',dir:'固体激光器,光学设计,量子光学',dirList:['固体激光器','光学设计','量子光学'],salary:'事业编制（面议）',sMin:0,sMax:0,edu:'硕士及以上',exp:'3年以上',date:'2026-07-14',fresh:true,desc:'方向包括：光纤激光器研发与调试、超稳激光系统搭建、激光器光路设计与集成、光学系统设计测试等。国家级实验室平台，事业编制，含五险一金及子女入学安排。',tags:['光纤激光器','超稳激光','事业编制','国家级平台'],link:'https://recruit.hfnl.cn/',linkText:'官方招聘系统',email:'hr@hfnl.cn（请勿直接投递简历）',phone:null},
    {id:'hf-10',city:'合肥',company:'合肥脉博光电',position:'光学工程师',dir:'光学设计',dirList:['光学设计'],salary:'10-15K·13薪',sMin:10,sMax:15,edu:'本科',exp:'经验不限',date:'2026-08',fresh:false,desc:'光学系统设计与开发相关工作。',tags:['光学设计'],link:'https://www.zhipin.com/',linkText:'BOSS直聘查看',email:null,phone:null},
    {id:'hf-11',city:'合肥',company:'量伙半导体设备',position:'光学设计工程师',dir:'半导体,光学设计',dirList:['半导体','光学设计'],salary:'面议',sMin:0,sMax:0,edu:'硕士及以上',exp:'经验不限',date:'2026-08-05',fresh:true,desc:'可见光、近红外等光学检测方案设计及关键光学器件设计；X射线检测、CT成像等光学方案设计。熟练使用Lighttools、Zemax、CODE V等。',tags:['半导体检测','光学设计','Zemax','校招'],link:'https://m.yingjiesheng.com/job-008-024-139.html',linkText:'应届生求职网',email:null,phone:null},
    {id:'hf-12',city:'合肥',company:'安徽岑锋科技',position:'光学设计工程师',dir:'光学设计,激光传感',dirList:['光学设计','激光传感'],salary:'12-16K',sMin:12,sMax:16,edu:'硕士及以上',exp:'2年以上',date:'2026-08',fresh:false,desc:'中科院环境光学博士团队创立，主要从事激光光谱检测分析的技术研发。负责光学模拟仿真设计、产品光学模块设计开发。',tags:['激光光谱','环境光学','Zemax','CodeV'],link:'http://www.ahcfgs.com/details_45857.html',linkText:'官网招聘页',email:'trn@ahcfkj.cn',phone:'18133613799'},
    {id:'hf-13',city:'合肥',company:'苏州叠序宇宙科技',position:'光学工程师',dir:'光学设计,成像',dirList:['光学设计','成像'],salary:'20-30K·15薪',sMin:20,sMax:30,edu:'本科',exp:'3-5年',date:'2026-08',fresh:false,desc:'光源选型、镜头匹配及多通道/多光谱光路布局，使用Zemax/TracePro等工具进行仿真验证；成像质量优化。工作地点：合肥肥西。',tags:['Zemax','TracePro','多光谱','光路布局'],link:'https://www.zhipin.com/',linkText:'BOSS直聘查看',email:null,phone:null},

    // ===== 杭州 (12) =====
    {id:'hz-01',city:'杭州',company:'奥创光子',position:'光学工程师/光学研发工程师-激光器',dir:'固体激光器',dirList:['固体激光器'],salary:'10-55K·13薪',sMin:10,sMax:55,edu:'本科/硕士/博士',exp:'1-3年/经验不限（博士）',date:'2026-08-31',fresh:false,desc:'参与固体激光器（Nd:YAG、光纤激光器）设计、开发与优化；搭建实验平台，完成性能测试与参数调试；使用COMSOL、MATLAB、FDTD Solutions进行光场分布、热效应建模分析。国家级专精特新"小巨人"，D轮及以上。',tags:['Nd:YAG','光纤激光器','COMSOL','MATLAB','D轮+'],link:'https://www.zhipin.com/job_detail/a0f150cd52bbdcfe03d82ty6GVVQ.html',linkText:'BOSS直聘投递',email:'pr@ultronphotonics.com',phone:'400-618-0339'},
    {id:'hz-02',city:'杭州',company:'荧博科技',position:'高级光学工程师（激光器及光学成像）',dir:'固体激光器,成像',dirList:['固体激光器','成像'],salary:'15-25K·13薪',sMin:15,sMax:25,edu:'本科',exp:'3-5年',date:'2026-08',fresh:false,desc:'负责团队完成固体激光器产品的设计、开发、测试；固体激光器生产工艺开发，制定工艺文件与操作指导书，协助生产部门建立固体激光器生产线。',tags:['固体激光器','生产工艺','生产线建设'],link:'https://www.zhipin.com/job_detail/e97b9a45edb99ce21Xx92tm7GVBV.html',linkText:'BOSS直聘投递',email:'support@inper.com',phone:'0571-86035376'},
    {id:'hz-03',city:'杭州',company:'海康威视',position:'光学工程师-激光传感/光学系统专家',dir:'激光传感,光学设计',dirList:['激光传感','光学设计'],salary:'20-60K·16薪',sMin:20,sMax:60,edu:'硕士及以上',exp:'3-10年',date:'2026-08-25',fresh:true,desc:'激光传感系统方案设计、核心指标分解与关键器件选型；光学气体传感相关技术调研、分析与验证；成像产品系统设计。上市公司平台。',tags:['激光传感','气体传感','光谱分析','上市公司'],link:'https://talent.hikvision.com/home/socity/position?postId=D4DB3BABC605090E52D8C9A8AF077354',linkText:'海康威视招聘官网',email:null,phone:null},
    {id:'hz-04',city:'杭州',company:'昂坤视觉',position:'高级光学工程师',dir:'光学设计,半导体',dirList:['光学设计','半导体'],salary:'20-40K·14薪',sMin:20,sMax:40,edu:'硕士',exp:'1-3年',date:'2026-08',fresh:false,desc:'完成光学校准、系统集成、系统测试及特征描述；熟练使用ZEMAX完成光学设计和模拟；光学元件产品信息调研、选型与订购。D轮及以上。',tags:['ZEMAX','半导体检测','光学校准','D轮+'],link:'https://www.zhipin.com/job_detail/d6c771276fa4bd4f1XB43N60GFRS.html',linkText:'BOSS直聘投递',email:'guangfen_xu@akoptics.com',phone:'189-1838-9189'},
    {id:'hz-05',city:'杭州',company:'灵犀微光',position:'光学检测工程师',dir:'光学设计,成像',dirList:['光学设计','成像'],salary:'13-15K·14薪',sMin:13,sMax:15,edu:'硕士',exp:'1-3年',date:'2026-08',fresh:false,desc:'AR眼镜核心光学元件检测，阵列光波导与衍射光波导方案验证。D轮及以上。',tags:['AR光波导','衍射光波导','光学检测','D轮+'],link:'https://m.liepin.com/company/8643124/',linkText:'猎聘投递',email:'hr@lx-ar.com',phone:null},
    {id:'hz-06',city:'杭州',company:'凯瑟斯技术（杭州）',position:'光学工程师',dir:'光学设计,量子光学',dirList:['光学设计','量子光学'],salary:'10-25K·13薪',sMin:10,sMax:25,edu:'本科及以上',exp:'经验不限',date:'2026-08',fresh:false,desc:'开展光学领域尤其是量子光学、光谱光学、光学系统设计与开发相关工作。',tags:['量子光学','光谱光学','光学设计'],link:'https://www.zhipin.com/job_detail/a3887c366cf2364203V92di5FFpQ.html',linkText:'BOSS直聘投递',email:'lemon@caces.com',phone:'0571-63126668'},
    {id:'hz-07',city:'杭州',company:'杭州天睿精密科技',position:'光学工程师',dir:'光学设计,固体激光器',dirList:['光学设计','固体激光器'],salary:'年薪23万',sMin:19,sMax:23,edu:'硕士',exp:'应届/经验不限',date:'2026-08-26',fresh:true,desc:'各类光学设备总体设计、工程化设计；光学技术创新与预研；光学测试实验设计和执行。清华大学IC装备团队背景，含人才补贴3年共10万。',tags:['精密光学','IC装备','清华背景','校招','人才补贴'],link:'https://m.yingjiesheng.com/job-008-039-465.html',linkText:'应届生求职网',email:'yuanyf@u-precision.com',phone:'13045976826'},
    {id:'hz-08',city:'杭州',company:'曦智科技',position:'光电系统仿真工程师',dir:'光学软件,光学设计',dirList:['光学软件','光学设计'],salary:'30-60K·15薪',sMin:30,sMax:60,edu:'硕士',exp:'3-5年',date:'2026-08-26',fresh:false,desc:'光电系统仿真与建模，涉及光学设计软件与仿真工具链搭建。全球领先的光电混合算力提供商，C轮融资。',tags:['光电仿真','系统建模','高薪','C轮'],link:'https://www.xztech.ai/about-us/contact-us',linkText:'官网联系页',email:'kara.zhong@lightelligence.ai',phone:'0571-88620639'},
    {id:'hz-09',city:'杭州',company:'舜宇光学（浙江）研究院',position:'算法工程师（光学方向）',dir:'光学软件,成像',dirList:['光学软件','成像'],salary:'面议',sMin:0,sMax:0,edu:'硕士及以上',exp:'经验不限',date:'2026-08',fresh:false,desc:'基于应用场景完成算法设计、验证和实现；基于数据和光学设计软件、渲染软件等工具，构建端到端仿真链路，构建专业领域大模型。985/211优先。',tags:['光学仿真','AI算法','大模型','985/211'],link:'https://campus.sunnyoptical.cn',linkText:'校招官网',email:'gxhr@sunnyoptical.com',phone:'0574-62534517'},
    {id:'hz-10',city:'杭州',company:'浙江视亿医疗科技',position:'光学工程师',dir:'光学设计,固体激光器',dirList:['光学设计','固体激光器'],salary:'面议',sMin:0,sMax:0,edu:'硕士',exp:'1-3年',date:'2026-09-01',fresh:true,desc:'负责光路系统搭建与优化设计，包括光路系统总体设计、光路搭建、照明成像、性能测试及优化改进；熟悉Zemax或COMSOL等光学仿真软件。医疗光学方向。',tags:['医疗光学','飞秒激光','Zemax','COMSOL','最新'],link:'https://www.zhipin.com/',linkText:'BOSS直聘查看',email:null,phone:null},
    {id:'hz-11',city:'杭州',company:'某杭州电子半导体公司（A轮）',position:'光学工程师（激光器）',dir:'固体激光器',dirList:['固体激光器'],salary:'25-35K·14薪',sMin:25,sMax:35,edu:'硕士',exp:'5-10年',date:'2026-08',fresh:false,desc:'激光器研发相关，A轮融资高科技企业。（猎头发布，需通过猎头渠道联系）',tags:['激光器','A轮','猎头'],link:'https://m.liepin.com/',linkText:'猎聘查看',email:null,phone:null},
    {id:'hz-12',city:'杭州',company:'某杭州AI上市公司',position:'光学工程师（非成像补光照明）',dir:'光学设计',dirList:['光学设计'],salary:'30-40K·16薪',sMin:30,sMax:40,edu:'本科',exp:'3-5年',date:'2026-08',fresh:false,desc:'非成像补光照明光学系统设计。已上市AI公司。（猎头发布，需通过猎头渠道联系）',tags:['非成像光学','照明光学','上市公司','猎头'],link:'https://m.liepin.com/',linkText:'猎聘查看',email:null,phone:null},

    // ===== 北京 (4) =====
    {id:'bj-01',city:'北京',company:'创鑫激光',position:'光学工程师（超快方向）',dir:'固体激光器',dirList:['固体激光器'],salary:'面议',sMin:0,sMax:0,edu:'硕士',exp:'3-5年',date:'2026-08',fresh:false,desc:'负责固体超快激光器光路方案设计、光路搭建、调试、验证、优化改进；固体激光器中光学元器件的选型、测试以及检验标准的建立；光器件、光模块测试&失效分析。',tags:['超快激光器','固体激光器','光路设计'],link:'https://m.zhipin.com/job_detail/b0d5aba2b4a46d911Hd409S-EFBZ.html',linkText:'BOSS直聘投递',email:null,phone:null},
    {id:'bj-02',city:'北京',company:'先导科技集团',position:'硬件工程师-固体激光器',dir:'固体激光器',dirList:['固体激光器'],salary:'10-20K',sMin:10,sMax:20,edu:'本科',exp:'2年以上',date:'2026-08',fresh:false,desc:'固体激光器硬件开发。B轮融资。',tags:['固体激光器','B轮'],link:'https://m.liepin.com/city-bj/zpjgqgcsmkr614/',linkText:'猎聘查看',email:null,phone:null},
    {id:'bj-03',city:'北京',company:'中辉激光',position:'光学工程师（固体激光器方向）',dir:'固体激光器',dirList:['固体激光器'],salary:'面议',sMin:0,sMax:0,edu:'本科及以上',exp:'经验不限',date:'2026-08-31',fresh:true,desc:'负责激光器产品技术方案的拟定、技术评审及方案迭代优化；固体激光器方向研发。',tags:['固体激光器','技术方案','校招'],link:'https://m.yingjiesheng.com/job-008-044-115.html',linkText:'应届生求职网',email:null,phone:null},
    {id:'bj-04',city:'北京',company:'榜首激光',position:'光学工程师',dir:'固体激光器,光纤激光器',dirList:['固体激光器','光纤激光器'],salary:'15-30K',sMin:15,sMax:30,edu:'本科',exp:'1-3年',date:'2026-08',fresh:false,desc:'负责参与固体、光纤、灯泵、紫外、飞秒激光器研发与生产；完善公司产品工艺流程，迭代及优化公司现有产品技术方案。',tags:['固体激光器','光纤激光器','飞秒激光器','紫外激光器'],link:'https://m.zhipin.com/zhaopin/5bed0a9750d00a721HN_2960EA~~/',linkText:'BOSS直聘查看',email:null,phone:null},

    // ===== 上海 (5) =====
    {id:'sh-01',city:'上海',company:'上海频准激光科技',position:'光学工程师（光纤激光器）',dir:'光纤激光器',dirList:['光纤激光器'],salary:'面议',sMin:0,sMax:0,edu:'本科及以上',exp:'经验不限',date:'2026-08',fresh:false,desc:'负责光纤激光器系统方案制定，包括光路架构、泵浦方案，核心器件选型，输出完整设计方案与BOM；搭建光纤激光器实验光路，完成光纤熔接、耦合对准等。已上市。',tags:['光纤激光器','光路架构','泵浦方案','已上市'],link:'https://msearch.51job.com/jobs/shanghai-jdq/173168534.html',linkText:'前程无忧投递',email:null,phone:null},
    {id:'sh-02',city:'上海',company:'上海镱镭飞秒激光技术',position:'光学研发工程师',dir:'固体激光器',dirList:['固体激光器'],salary:'20-40K·13薪',sMin:20,sMax:40,edu:'本科及以上',exp:'经验不限',date:'2026-08',fresh:false,desc:'参与飞秒激光产品的研发与设计，提出创新方案；设计激光系统子单元，确保性能达标；负责研发产品安装、调试与性能测试。',tags:['飞秒激光','光学研发','13薪'],link:'https://www.yingjiesheng.com/job-008-044-495.html',linkText:'应届生求职网',email:null,phone:null},
    {id:'sh-03',city:'上海',company:'某中型半导体/芯片融资公司（B轮）',position:'光学工程师',dir:'固体激光器,量子光学',dirList:['固体激光器','量子光学'],salary:'博士面议',sMin:0,sMax:0,edu:'博士',exp:'1-3年',date:'2026-08',fresh:false,desc:'负责中性原子量子计算配套窄线宽ECDL、稳频半导体激光器、光纤激光系统设计、光路搭建、频率锁定与整机调试，支撑MOT磁光阱、光镊阵列、里德堡激发光路开发。',tags:['量子计算','ECDL','稳频激光','光镊阵列'],link:'https://refund.zhipin.com/job_detail/311269ecb4fc17fc0nB809q-E1NU.html',linkText:'BOSS直聘查看',email:null,phone:null},
    {id:'sh-04',city:'上海',company:'上海频准激光科技',position:'光学工程师（25届/26届应届生）',dir:'固体激光器,光纤激光器',dirList:['固体激光器','光纤激光器'],salary:'校招面议',sMin:0,sMax:0,edu:'硕士',exp:'应届',date:'2026-08',fresh:false,desc:'设计和开发激光器光学系统，确保其性能满足项目需求；进行激光器光学元件的选择与测试，保证系统稳定性和可靠性。招聘截止日期2027.01.01。',tags:['固体激光器','光纤激光器','紫外激光器','半导体激光器','校招'],link:'https://www.zhipin.com/job_detail/3767f973fe70c22803N629i9FlFR.html',linkText:'BOSS直聘投递',email:null,phone:null},
    {id:'sh-05',city:'上海',company:'深圳星空视角科技',position:'光学仿真工程师（全国多地有岗）',dir:'光学软件,光学设计',dirList:['光学软件','光学设计'],salary:'25-50K·14薪',sMin:25,sMax:50,edu:'硕士',exp:'5年以上',date:'2026-08',fresh:false,desc:'波动光学仿真，光学仿真工程师。全国多地有岗（北京、上海均有）。',tags:['光学仿真','波动光学','高薪'],link:'https://m.liepin.com/zpbdgxfzgcs8a5d/',linkText:'猎聘查看',email:null,phone:null},

    // ===== 深圳 (5) =====
    {id:'sz-01',city:'深圳',company:'深圳深浦电气',position:'光学工程师',dir:'光学设计',dirList:['光学设计'],salary:'面议',sMin:0,sMax:0,edu:'本科',exp:'3-5年',date:'2026-08',fresh:false,desc:'负责工业类镜头光学系统设计、仿真建模，完成光路布局、镜片选型、光机匹配；使用Zemax、CodeV完成像质分析，包含畸变、色差、MTF、照度、杂散光优化。',tags:['工业镜头','Zemax','CodeV','像质分析'],link:'https://msearch.51job.com/jobs/shenzhen-baq/173310753.html',linkText:'前程无忧投递',email:null,phone:null},
    {id:'sz-02',city:'深圳',company:'华汉伟业科技',position:'资深光学工程师',dir:'光学设计,半导体',dirList:['光学设计','半导体'],salary:'面议',sMin:0,sMax:0,edu:'本科及以上',exp:'3-5年',date:'2026-08',fresh:false,desc:'负责精密传感器、镜头、半导体精密等光学系统的设计、开发和优化；使用Zemax、Code V进行光学系统仿真和优化；制定光学系统加工和装调工艺。',tags:['显微成像','半导体设备','AOI','封装'],link:'https://www.zhipin.com/job_detail/4463b5d378d6c1db03dz3Nq-F1FX.html',linkText:'BOSS直聘投递',email:null,phone:null},
    {id:'sz-03',city:'深圳',company:'中科飞测',position:'光学工程师（深圳）',dir:'光学设计,半导体',dirList:['光学设计','半导体'],salary:'面议',sMin:0,sMax:0,edu:'硕士',exp:'3-5年',date:'2026-08',fresh:false,desc:'负责半导体光学检量测设备成像光路和照明光路的设计；干涉光学系统设计。',tags:['干涉','半导体检测','成像光路'],link:'https://www.zhipin.com/job_detail/f0662f88f7c1d9bc1HZ70tu8FlZW.html',linkText:'BOSS直聘投递',email:null,phone:null},
    {id:'sz-04',city:'深圳',company:'盛鼎东方光学科技',position:'光学/激光开发工程师',dir:'光学设计,固体激光器',dirList:['光学设计','固体激光器'],salary:'7-12K',sMin:7,sMax:12,edu:'本科',exp:'1-3年',date:'2026-08',fresh:false,desc:'激光器研发、Zemax/CodeV光学系统集成调试、激光技术应用、光学性能优化。',tags:['激光器','Zemax','CodeV','光学调试'],link:'https://www.zhaopin.com/sou/jl765/kwA54LMPITSLT0MNG8/p1',linkText:'智联招聘投递',email:null,phone:null},
    {id:'sz-05',city:'深圳',company:'大族激光',position:'光学工程师',dir:'光学设计',dirList:['光学设计'],salary:'面议',sMin:0,sMax:0,edu:'本科及以上',exp:'经验不限',date:'2026-08',fresh:false,desc:'大族激光科技产业集团，上市公司，10000人以上。光学工程师招聘10人。',tags:['大族激光','上市公司','光学工程'],link:'https://career.gdut.edu.cn/teachin/view/id/190730',linkText:'校招宣讲会',email:null,phone:null},

    // ===== 武汉 (4) =====
    {id:'wh-01',city:'武汉',company:'武汉锐科激光',position:'高级光学工程师（脉冲激光器）',dir:'光纤激光器,固体激光器',dirList:['光纤激光器','固体激光器'],salary:'22-35万/年',sMin:22,sMax:35,edu:'硕士以上',exp:'经验不限',date:'2026-08',fresh:false,desc:'武汉锐科光纤激光技术股份有限公司（上市公司），脉冲激光器光学系统研发。',tags:['脉冲激光器','光纤激光器','上市公司'],link:'https://m.jobui.com/company/12537841/jobs/all/wuhan/',linkText:'职友集查看',email:null,phone:null},
    {id:'wh-02',city:'武汉',company:'武汉华工激光',position:'光学工程师（衍射光学设计）',dir:'光学设计',dirList:['光学设计'],salary:'面议',sMin:0,sMax:0,edu:'本科及以上',exp:'经验不限',date:'2026-08',fresh:false,desc:'负责激光加工设备所需衍射光学元件（DOE）的设计、建模与仿真，调控激光光场参数，完成平顶光、环形光等常用光场设计。',tags:['DOE','衍射光学','光场调控','平顶光'],link:'https://refund.zhipin.com/job_detail/9e3d0e4172916a630nd43NW5EVBZ.html',linkText:'BOSS直聘投递',email:null,phone:null},
    {id:'wh-03',city:'武汉',company:'高跃科技',position:'光学工程师',dir:'光学设计,激光传感',dirList:['光学设计','激光传感'],salary:'面议',sMin:0,sMax:0,edu:'硕士及以上',exp:'经验不限',date:'2026-08',fresh:false,desc:'掌握几何光学和物理光学理论知识，熟悉光路设计，熟练运用ZEMAX、Matlab、Mathcad等设计软件；熟悉光学系统中平面、球面、非球面、衍射光学元件等。',tags:['ZEMAX','Matlab','非球面','衍射光学'],link:'https://www.gyscientech.com/index.do?job',linkText:'官网招聘页',email:null,phone:null},
    {id:'wh-04',city:'武汉',company:'山东中科际联（武汉）',position:'光学设计及封装工程师（窄线宽半导体激光器）',dir:'半导体,光学设计',dirList:['半导体','光学设计'],salary:'17-40K',sMin:17,sMax:40,edu:'大专及以上',exp:'3-5年',date:'2026-08',fresh:false,desc:'窄线宽半导体激光器方向光学设计及封装。B轮融资。',tags:['窄线宽','半导体激光器','封装','B轮'],link:'https://m.liepin.com/city-wuhan/zpjgqt9rjk/',linkText:'猎聘查看',email:null,phone:null},

    // ===== 西安 (4) =====
    {id:'xa-01',city:'西安',company:'西安凝聚光电科技',position:'激光工程师',dir:'固体激光器',dirList:['固体激光器'],salary:'15-25K',sMin:15,sMax:25,edu:'本科',exp:'3-5年',date:'2026-08',fresh:false,desc:'专业研发生产全固态激光器及相关系统的高新技术企业。专注于半导体泵浦全固态激光器研发。',tags:['全固态激光器','半导体泵浦'],link:'https://m.liepin.com/company/13960495/',linkText:'猎聘查看',email:null,phone:null},
    {id:'xa-02',city:'西安',company:'西安精英光电技术',position:'固体激光器研发工程师',dir:'固体激光器',dirList:['固体激光器'],salary:'10-20K',sMin:10,sMax:20,edu:'本科',exp:'5-10年',date:'2026-08',fresh:false,desc:'固体激光器研发。',tags:['固体激光器'],link:'https://m.liepin.com/city-shanxi/zpjgqgxgygcswurt0y/pn0/',linkText:'猎聘查看',email:null,phone:null},
    {id:'xa-03',city:'西安',company:'卓镭激光',position:'光学工程师（校园招聘）',dir:'固体激光器',dirList:['固体激光器'],salary:'校招面议',sMin:0,sMax:0,edu:'本科',exp:'应届',date:'2026-08',fresh:false,desc:'负责常规产品的安装、调试；根据工艺和流程测试激光器性能，记录测试过程中的工况和数据；协助工艺文件等技术文件的编写。',tags:['激光器调试','应届','校招'],link:'http://www.gracelaser.com/join/campus',linkText:'官网校招',email:null,phone:null},
    {id:'xa-04',city:'西安',company:'西安立芯光电科技',position:'光学工程师（光纤激光器方向）',dir:'光纤激光器',dirList:['光纤激光器'],salary:'10-15K·14薪',sMin:10,sMax:15,edu:'硕士',exp:'3-5年',date:'2026-04-21',fresh:false,desc:'负责激光光学系统类新产品的设计开发项目，与设计团队一起完成新产品设计；主导产品光学工艺开发及样品装调测试。',tags:['光纤激光器','光学工艺','14薪'],link:'https://m.qcc.com/jobdetail/a879ec97f0fb3a26a802a9ee3b40ea9c.html',linkText:'企查查查看',email:null,phone:null},

    // ===== 成都 (5) =====
    {id:'cd-01',city:'成都',company:'思创激光',position:'光学工程师',dir:'光纤激光器',dirList:['光纤激光器'],salary:'20-35K',sMin:20,sMax:35,edu:'本科',exp:'5-10年',date:'2026-08',fresh:false,desc:'负责光纤激光器产品光学方案设计与验证定型；负责光纤激光器产品的光路制造工艺设计与优化改进；负责光纤激光器件的选型、验证与标准制定。',tags:['光纤激光器','光学方案','光路工艺'],link:'https://m.zhipin.com/zhaopin/cdf7f67223e4fedf03B_2tq1Ew~~/',linkText:'BOSS直聘查看',email:null,phone:null},
    {id:'cd-02',city:'成都',company:'融为科技',position:'光学设计师',dir:'光学设计,激光传感',dirList:['光学设计','激光传感'],salary:'25-45K·14薪',sMin:25,sMax:45,edu:'硕士',exp:'3-5年',date:'2026-08',fresh:false,desc:'独立开展激光通信系统光学方案设计与论证；负责激光通信系统总体方案设计与论证；负责光学子系统任务分析、指标分解、方案设计、任务书编制。',tags:['激光通信','光学方案','系统设计','14薪'],link:'https://m.zhipin.com/zhaopin/dd6b8f16536688640nd92tW8Ew~~/',linkText:'BOSS直聘查看',email:null,phone:null},
    {id:'cd-03',city:'成都',company:'九洲集团成都创智融合',position:'光学光路设计仿真工程师',dir:'光学设计,激光传感,光学软件',dirList:['光学设计','激光传感','光学软件'],salary:'面议',sMin:0,sMax:0,edu:'硕士及以上',exp:'经验不限',date:'2026-08',fresh:false,desc:'负责强激光发射系统架构设计；激光发射装置激光光路设计、仿真与矫正；白光、红外等光学传感器镜头设计、仿真；激光气体检测腔镜光学设计、仿真。',tags:['强激光','光路仿真','气体检测','国企'],link:'https://m.gaoxiaojob.com/job/detail/2037968.html',linkText:'高校人才网',email:null,phone:null},
    {id:'cd-04',city:'成都',company:'某成都电子半导体公司（C轮）',position:'光学工程师（激光器）',dir:'固体激光器',dirList:['固体激光器'],salary:'20-40K',sMin:20,sMax:40,edu:'本科',exp:'1-3年',date:'2026-09-01',fresh:true,desc:'激光器研发相关，C轮融资高科技企业。（猎头发布）',tags:['激光器','C轮','猎头'],link:'https://m.liepin.com/city-sichuan/zpopticalengineer03/',linkText:'猎聘查看',email:null,phone:null},
    {id:'cd-05',city:'成都',company:'星火时空（成都）',position:'光学仿真软件测试工程师',dir:'光学软件',dirList:['光学软件'],salary:'12-13K',sMin:12,sMax:13,edu:'本科',exp:'1-3年',date:'2026-08-28',fresh:false,desc:'光学仿真软件测试，天使轮，航天/军工背景。',tags:['光学仿真','软件测试','航天军工'],link:'https://www.zhaopin.com/zhaopin/8a9b160ddbe14442889d8176b91bb30d/',linkText:'智联招聘投递',email:null,phone:null},

    // ===== 苏州/南京 (4) =====
    {id:'su-01',city:'苏州',company:'新辰智慧',position:'高级光学工程师（激光）',dir:'光学设计,固体激光器',dirList:['光学设计','固体激光器'],salary:'30-40K·13薪',sMin:30,sMax:40,edu:'本科',exp:'5年以上',date:'2026-07-13',fresh:false,desc:'负责光伏、半导体、钙钛矿、3C等领域激光精密加工设备的光学系统设计、仿真与优化（如激光准直、整形、聚焦光路）。',tags:['激光加工','光学系统设计','光伏','半导体'],link:'https://m.liepin.com/job/1981935643.shtml',linkText:'猎聘投递',email:null,phone:null},
    {id:'su-02',city:'苏州',company:'镭神泰克科技（苏州）',position:'激光器工程师',dir:'固体激光器',dirList:['固体激光器'],salary:'15-25K·14薪',sMin:15,sMax:25,edu:'本科',exp:'5-10年',date:'2026-08',fresh:false,desc:'激光器工程师。',tags:['激光器','14薪'],link:'https://msearch.51job.com/jobs/suzhou-gyyq/173234928.html',linkText:'前程无忧投递',email:null,phone:null},
    {id:'su-03',city:'苏州',company:'某苏州中型专用设备公司',position:'光学工程师（飞秒方向）',dir:'固体激光器',dirList:['固体激光器'],salary:'面议',sMin:0,sMax:0,edu:'本科',exp:'3-5年',date:'2026-08',fresh:false,desc:'主导设计飞秒激光器系统产品路线及新产品导入；结合竞品及本公司技术优势，完成原理性实验及可行性验证。',tags:['飞秒激光器','固体激光器','超快激光器'],link:'https://m.zhipin.com/job_detail/64818efd1581397403x-2d-4EVZY.html',linkText:'BOSS直聘查看',email:null,phone:null},
    {id:'nj-01',city:'南京',company:'南京某仪器仪表公司（C轮）',position:'光学工程师',dir:'光学设计',dirList:['光学设计'],salary:'面议',sMin:0,sMax:0,edu:'学历不限',exp:'3-5年',date:'2026-08',fresh:false,desc:'光学工程师，C轮融资。（猎头发布）',tags:['C轮','猎头'],link:'https://m.liepin.com/city-jiangsu/zpjglgcsa1u5/pn0/',linkText:'猎聘查看',email:null,phone:null},

    // ===== 长春 (3) =====
    {id:'cc-01',city:'长春',company:'吉林省永利激光科技',position:'高级光学工程师',dir:'固体激光器',dirList:['固体激光器'],salary:'8-12K',sMin:8,sMax:12,edu:'硕士',exp:'1-3年',date:'2026-08',fresh:false,desc:'研究新型光学材料在射频激光器中的应用，提升器件响应速度与稳定性；构建实验平台，完成光学器件的性能测试与参数标定。',tags:['射频激光器','光学材料','参数标定'],link:'https://www.zhipin.com/job_detail/a4ce111bc0a6a39b03Z53N-7E1RS.html',linkText:'BOSS直聘投递',email:null,phone:null},
    {id:'cc-02',city:'长春',company:'吉林省科英激光',position:'固体/光纤激光器研发工程师',dir:'固体激光器,光纤激光器',dirList:['固体激光器','光纤激光器'],salary:'面议',sMin:0,sMax:0,edu:'学历不限',exp:'应届/有经验',date:'2026-08',fresh:false,desc:'激光器预研项目的技术调查、实验研究；固体/光纤激光器研发。',tags:['固体激光器','光纤激光器','应届可投'],link:'https://www.jrzp.com/job3507054.shtml',linkText:'今日招聘查看',email:null,phone:null},
    {id:'cc-03',city:'长春',company:'长春光学精密机械与物理研究所',position:'光学类（激光技术方向）',dir:'固体激光器,光学设计',dirList:['固体激光器','光学设计'],salary:'事业编制',sMin:0,sMax:0,edu:'硕士及以上',exp:'经验不限',date:'2026-08-17',fresh:true,desc:'中国科学院长春光学精密机械与物理研究所（长春光机所）。光学类：光学理论、光学设计、光学镀膜、光学加工、光学检测、激光技术、光通信技术等。',tags:['中科院','光机所','激光技术','事业编制','国家级平台'],link:'http://www.ciomp.ac.cn/tzgg/202608/t20260817_8260888.html',linkText:'光机所官网',email:null,phone:null},

    // ===== 天津 (2) =====
    {id:'tj-01',city:'天津',company:'北京凯普林光电（天津）',position:'光学工程师（光纤/校招）',dir:'光纤激光器',dirList:['光纤激光器'],salary:'12-15K·14薪',sMin:12,sMax:15,edu:'硕士',exp:'应届/经验不限',date:'2026-08',fresh:false,desc:'根据市场应用需求，按照公司流程，完成激光相关器件的方案设计、方案验证、光路实现、产品量产等。',tags:['光纤激光器','方案设计','校招','14薪'],link:'https://m.liepin.com/job/1981973845.shtml',linkText:'猎聘投递',email:null,phone:null},
    {id:'tj-02',city:'天津',company:'东方锐镭科技',position:'光学工程师',dir:'光学设计',dirList:['光学设计'],salary:'12-15K·15薪',sMin:12,sMax:15,edu:'本科',exp:'1-3年',date:'2026-08-30',fresh:false,desc:'光学工程师，15薪。',tags:['光学设计','15薪'],link:'https://m.liepin.com/city-tj/career/jiguang/',linkText:'猎聘查看',email:null,phone:null},

    // ===== 广州/东莞 (3) =====
    {id:'gz-01',city:'广州',company:'大族激光（广州）',position:'高级光学工程师（激光加工）',dir:'光学设计',dirList:['光学设计'],salary:'25-50K',sMin:25,sMax:50,edu:'博士',exp:'1-3年',date:'2026-08',fresh:false,desc:'高级光学工程师（激光加工方向），大族激光科技产业集团，上市公司。',tags:['激光加工','大族激光','博士','上市公司'],link:'https://msearch.51job.com/jobs/guangzhou/173023808.html',linkText:'前程无忧投递',email:null,phone:null},
    {id:'dg-01',city:'东莞',company:'广东中科微精',position:'激光光学工程师',dir:'固体激光器,光纤激光器',dirList:['固体激光器','光纤激光器'],salary:'面议',sMin:0,sMax:0,edu:'本科',exp:'1-3年',date:'2026-08',fresh:false,desc:'具有光纤激光器、固体激光器开发经验，熟悉机械类绘图软件，熟练绘制光学系统平面图。',tags:['光纤激光器','固体激光器','光学绘图'],link:'https://www.zhipin.com/job_detail/dbf3192b5d9b9c8e1Xd939S_EVFQ.html',linkText:'BOSS直聘投递',email:null,phone:null},
    {id:'dg-02',city:'东莞',company:'炬光科技',position:'超快激光加工工程师',dir:'固体激光器,光学设计',dirList:['固体激光器','光学设计'],salary:'15-22K·14薪',sMin:15,sMax:22,edu:'本科',exp:'8年以上',date:'2026-09-02',fresh:true,desc:'超快激光加工工程师，炬光科技（已上市）。',tags:['超快激光','激光加工','已上市','14薪'],link:'https://m.liepin.com/city-guangdong/zppmjggcs2b9l/',linkText:'猎聘查看',email:null,phone:null},

    // ===== 济南/青岛 (3) =====
    {id:'jn-01',city:'济南',company:'济南邦德激光',position:'光学专家（激光头）',dir:'光学设计,光纤激光器',dirList:['光学设计','光纤激光器'],salary:'15-30K·13薪',sMin:15,sMax:30,edu:'本科',exp:'5年以上',date:'2026-08',fresh:false,desc:'光学专家（激光头方向），邦德激光股份有限公司，2000-5000人规模。',tags:['激光头','光学专家','13薪'],link:'https://m.liepin.com/company-jobs/8734171/jc-N24/',linkText:'猎聘查看',email:null,phone:null},
    {id:'qd-01',city:'青岛',company:'青岛兴航光电技术',position:'半导体激光器光学工程师',dir:'半导体',dirList:['半导体'],salary:'20-40K',sMin:20,sMax:40,edu:'本科',exp:'3年以上',date:'2026-08',fresh:false,desc:'半导体激光器光学工程师，A轮融资。',tags:['半导体激光器','A轮'],link:'https://m.liepin.com/city-shandong/zppmjggcs2b9l/pn1/',linkText:'猎聘查看',email:null,phone:null},
    {id:'qd-02',city:'青岛',company:'镭测创芯',position:'光学工程师',dir:'激光传感,光纤激光器',dirList:['激光传感','光纤激光器'],salary:'11-22K·13薪',sMin:11,sMax:22,edu:'本科',exp:'经验不限',date:'2026-08',fresh:false,desc:'负责激光雷达系统的激光器选型和测试；负责激光雷达系统无源器件和有源器件的选型和测试；负责高功率光纤激光器的研发工作。',tags:['激光雷达','光纤激光器','高功率'],link:'https://m.zhipin.com/zhaopin/f4ccb20eb08477980nZ739i0Fg~~/',linkText:'BOSS直聘查看',email:null,phone:null},

    // ===== 厦门 (3) =====
    {id:'xm-01',city:'厦门',company:'奥谱天成',position:'高级光学工程师',dir:'光学设计,成像',dirList:['光学设计','成像'],salary:'15-30K·13薪',sMin:15,sMax:30,edu:'本科',exp:'3-5年',date:'2026-09',fresh:false,desc:'负责仪器光学系统的设计开发（照明设计、成像设计、系统设计）；负责各类光学设计验证及装配调试；负责光学元件的选型，供应商的联系、跟踪。',tags:['光学设计','成像设计','Lighttools','ZEMAX'],link:'https://m.zhipin.com/job_detail/1fcd2d1a1f8f4cbe1HVz2d65ElBY.html',linkText:'BOSS直聘投递',email:null,phone:null},
    {id:'xm-02',city:'厦门',company:'厦门某光电企业',position:'光学设计工程师',dir:'光学设计',dirList:['光学设计'],salary:'7-12K',sMin:7,sMax:12,edu:'本科',exp:'经验不限',date:'2026-08-31',fresh:true,desc:'光学工程、光电信息等相关专业；具备扎实的光学理论基础，包括几何光学、物理光学、像差理论，掌握光学设计的思想和方法。',tags:['光学设计','几何光学','像差理论','校招'],link:'https://www.xmrc.com.cn/',linkText:'厦门人才网',email:null,phone:null},
    {id:'xm-03',city:'厦门',company:'厦门力鼎光电',position:'光学设计工程师',dir:'光学设计,成像',dirList:['光学设计','成像'],salary:'10-20K·13薪',sMin:10,sMax:20,edu:'本科',exp:'1-3年',date:'2026-08',fresh:false,desc:'光学镜头设计开发，熟练使用Zemax/CodeV等光学设计软件；成像光学系统设计、仿真与优化。',tags:['光学镜头','Zemax','CodeV','成像'],link:'https://www.zhipin.com/',linkText:'BOSS直聘查看',email:null,phone:null},

    // ===== 长沙 (2) =====
    {id:'cs-01',city:'长沙',company:'麦格米特（长沙）',position:'光学工程师',dir:'光学设计,光纤激光器',dirList:['光学设计','光纤激光器'],salary:'15-25K',sMin:15,sMax:25,edu:'本科',exp:'3-5年',date:'2026-09',fresh:false,desc:'负责企业激光配套部件的技术研发与生产实施；针对设备内的光学系统开展仿真建模与数值计算；综合运用光学设计、光学元件、光学软件、光加工工艺推进项目开发。',tags:['激光加工','光学仿真','系统设计'],link:'https://m.yupao.com/zhaogong/380884437.html',linkText:'鱼泡网查看',email:null,phone:null},
    {id:'cs-02',city:'长沙',company:'长沙青波光电',position:'光学工程师',dir:'光学设计,激光传感',dirList:['光学设计','激光传感'],salary:'10-18K',sMin:10,sMax:18,edu:'本科',exp:'1-3年',date:'2026-08',fresh:false,desc:'光学检测系统设计开发；激光传感光学方案设计；光学系统搭建与调试。',tags:['光学检测','激光传感','方案设计'],link:'https://www.zhipin.com/',linkText:'BOSS直聘查看',email:null,phone:null},

    // ===== 无锡 (3) =====
    {id:'wx-01',city:'无锡',company:'无锡锐科激光',position:'光学工艺工程师（超快）',dir:'固体激光器,光纤激光器',dirList:['固体激光器','光纤激光器'],salary:'6-10K',sMin:6,sMax:10,edu:'本科',exp:'1-3年',date:'2026-09-02',fresh:true,desc:'负责皮秒、飞秒等高功率超快激光放大器光学部分的设计搭建、调试及优化改进；负责新型超快激光器的研发。锐科激光子公司，国企背景。',tags:['超快激光','皮秒','飞秒','国企','最新'],link:'https://m.zhaopin.com/jobs/CC868430630J40782791214.htm',linkText:'智联招聘投递',email:'raycuswx_hr@163.com',phone:'18012458689'},
    {id:'wx-02',city:'无锡',company:'江苏亮点光电',position:'激光工程师（固体激光器）',dir:'固体激光器',dirList:['固体激光器'],salary:'12-22K·14薪',sMin:12,sMax:22,edu:'本科',exp:'3-5年',date:'2026-08',fresh:false,desc:'负责固体激光器产品的设计、光路搭建、性能测试及优化改进；负责激光器中光学元器件的选型、测试及研发技术文件的编制。',tags:['固体激光器','光路搭建','器件选型','14薪'],link:'https://msearch.51job.com/jobs/wuxi-xsq/173271737.html',linkText:'前程无忧投递',email:null,phone:null},
    {id:'wx-03',city:'无锡',company:'无锡某光电公司',position:'光学设计工程师',dir:'光学设计,半导体',dirList:['光学设计','半导体'],salary:'20-30K·16薪',sMin:20,sMax:30,edu:'本科',exp:'3-10年',date:'2026-08',fresh:false,desc:'光学设计工程师，半导体/光电方向。',tags:['光学设计','半导体','16薪'],link:'https://m.liepin.com/city-wuxi/zpgxgcs/',linkText:'猎聘查看',email:null,phone:null},

    // ===== 重庆 (2) =====
    {id:'cq-01',city:'重庆',company:'重庆理微智谱',position:'光学工程师（微型光谱仪）',dir:'光学设计,激光传感',dirList:['光学设计','激光传感'],salary:'10-18K',sMin:10,sMax:18,edu:'本科',exp:'1-3年',date:'2026-09-01',fresh:true,desc:'负责光学系统整体光路架构设计、光链路预算及核心技术指标拆解；完成光纤、透镜等核心元器件的光学设计、光束耦合与级间光路匹配；仿真与优化。',tags:['光谱仪','光路架构','光束耦合','最新'],link:'http://www.zzjob88.com/mobile/jobdetail_53702112.htm',linkText:'重庆人才网',email:null,phone:null},
    {id:'cq-02',city:'重庆',company:'重庆某光电企业',position:'光电工程师',dir:'光学设计,激光传感',dirList:['光学设计','激光传感'],salary:'4-8K·13薪',sMin:4,sMax:8,edu:'本科',exp:'经验不限',date:'2026-09-02',fresh:true,desc:'光学方案统筹、设计；光学系统搭建和调试；光学分析和光纤传感技术调研、预研。',tags:['光学设计','光纤传感','应届可投','最新'],link:'https://m.huibo.com/cq/jobs/guangdianzijish/',linkText:'汇博招聘',email:null,phone:null},

    // ===== 珠海 (1) =====
    {id:'zh-01',city:'珠海',company:'映讯芯光',position:'光学研发工程师',dir:'光学设计,固体激光器',dirList:['光学设计','固体激光器'],salary:'20-35K·14薪',sMin:20,sMax:35,edu:'硕士',exp:'5-10年',date:'2026-08',fresh:false,desc:'设计和开发与光学、激光器有关的光学产品及工艺流程；负责基本的光学设计、计算及模拟、开发安装及调试并完成初步的测试。',tags:['激光器','光学设计','光电器件','14薪'],link:'https://m.zhipin.com/job_detail/b8d2d32d9bbc71851Hx509-6FFtQ.html',linkText:'BOSS直聘投递',email:null,phone:null},

    // ===== 郑州 (1) =====
    {id:'zz-01',city:'郑州',company:'郑州中镭光电',position:'光纤激光器工程师',dir:'光纤激光器',dirList:['光纤激光器'],salary:'10-20K',sMin:10,sMax:20,edu:'本科',exp:'3-5年',date:'2026-09',fresh:false,desc:'负责光纤激光器产品光学方案设计与验证定型；负责光纤激光器产品的光路制造工艺设计与优化改进；负责光纤激光器件的选型、验证与标准制定。',tags:['光纤激光器','光学方案','光路工艺'],link:'https://m.zhipin.com/job_detail/804bbab1c516627703Jy09y6EVVS.html',linkText:'BOSS直聘投递',email:null,phone:null},

    // ===== 南昌 (1) =====
    {id:'nc-01',city:'南昌',company:'欧菲光集团',position:'光学仿真工程师',dir:'光学软件,光学设计',dirList:['光学软件','光学设计'],salary:'15-30K·14薪',sMin:15,sMax:30,edu:'硕士',exp:'1-3年',date:'2026-08',fresh:false,desc:'精通电磁仿真原理，熟悉FDTD、RCWA、COMSOL等仿真软件；有纳米光学器件（超透镜、光栅、DOE）设计经验者优先；熟悉参数优化方法。',tags:['FDTD','RCWA','COMSOL','超透镜','DOE','14薪'],link:'https://www.jrzp.com/job3733935.shtml',linkText:'今日招聘查看',email:null,phone:null},

    // ===== 福州 (2) =====
    {id:'fz-01',city:'福州',company:'福建光旭科技',position:'光学工程师',dir:'光学设计',dirList:['光学设计'],salary:'8-15K·13薪',sMin:8,sMax:15,edu:'本科',exp:'经验不限',date:'2026-09-01',fresh:true,desc:'掌握Zemax/CodeV、LightTool/Tracepro等光学设计软件；熟悉CAD、ProE/SolidWorks等机械设计软件。光电等物理相关专业。',tags:['Zemax','CodeV','LightTools','应届可投','最新'],link:'https://m.zhipin.com/job_detail/c97b591714354d091HZ80t6_EFtT.html',linkText:'BOSS直聘投递',email:null,phone:null},
    {id:'fz-02',city:'福州',company:'福建展智激光',position:'光学工程师',dir:'固体激光器,光纤激光器',dirList:['固体激光器','光纤激光器'],salary:'6-12K·13薪',sMin:6,sMax:12,edu:'本科',exp:'3年以上',date:'2026-08',fresh:false,desc:'激光器研发、光学系统集成调试；激光技术应用、光学性能优化。',tags:['激光器','光学调试','13薪'],link:'https://msearch.51job.com/jobs/fuzhou-mhx/173245903.html',linkText:'前程无忧投递',email:null,phone:null},

    // ===== 哈尔滨 (1) =====
    {id:'heb-01',city:'哈尔滨',company:'哈尔滨新光光电',position:'光学设计工程师',dir:'光学设计,成像',dirList:['光学设计','成像'],salary:'8-15K',sMin:8,sMax:15,edu:'硕士',exp:'1-3年',date:'2026-08',fresh:false,desc:'光学系统设计、仿真与优化；红外光学系统设计；精密光学仪器开发。',tags:['红外光学','光学设计','精密仪器'],link:'https://www.zhipin.com/',linkText:'BOSS直聘查看',email:null,phone:null},

    // ===== 补充：深圳 (2) =====
    {id:'sz-06',city:'深圳',company:'创鑫激光',position:'光学工程师',dir:'光纤激光器,固体激光器',dirList:['光纤激光器','固体激光器'],salary:'15-30K',sMin:15,sMax:30,edu:'本科',exp:'1-3年',date:'2026-08',fresh:false,desc:'负责公司未来一到两年内的新型技术更新；调研热门前沿的技术方案和专利，总结核心技术；整合现有技术思想，确定技术路线。招聘30人。',tags:['光纤激光器','技术预研','专利分析','大规模招聘'],link:'http://www.maxphotonics.com/cn/job_2.html',linkText:'官网投递',email:'hr@maxphotonics.com',phone:null},

    // ===== 补充：上海 (1) =====
    {id:'sh-06',city:'上海',company:'上海镱镭飞秒',position:'光学研发工程师（校招）',dir:'固体激光器',dirList:['固体激光器'],salary:'校招面议',sMin:0,sMax:0,edu:'硕士',exp:'应届',date:'2026-08-30',fresh:true,desc:'飞秒激光器研发；光学系统设计、搭建与调试。北京、上海、深圳均有岗。',tags:['飞秒激光','校招','多地有岗'],link:'https://m.yingjiesheng.com/job-008-044-495.html',linkText:'应届生求职网',email:'jingna_zhang@yi-laser.com',phone:null},

    // ===== 补充：苏州 (1) =====
    {id:'su-04',city:'苏州',company:'凌云光技术',position:'光学工程师',dir:'光学设计,成像',dirList:['光学设计','成像'],salary:'15-25K·14薪',sMin:15,sMax:25,edu:'硕士',exp:'应届/经验不限',date:'2026-08',fresh:false,desc:'机器视觉光学系统设计开发；本硕均光学相关专业背景；至少一篇EI以上论文或发明专利授权。六险一金、周末双休。',tags:['机器视觉','光学设计','校招','六险一金'],link:'https://m.yingjiesheng.com/job-008-037-246.html',linkText:'应届生求职网',email:'yagao@lusterinc.com',phone:null},

    // ===== 补充：武汉 (2) =====
    {id:'wh-05',city:'武汉',company:'锐科激光（总部）',position:'光学工程师（校招/社招）',dir:'光纤激光器,固体激光器',dirList:['光纤激光器','固体激光器'],salary:'12-25K·14薪',sMin:12,sMax:25,edu:'本科及以上',exp:'应届/经验不限',date:'2026-08',fresh:false,desc:'锐科激光总部招聘光学工程师，光纤激光器方向，含校招和社招。上市公司，央企背景，五险一金。',tags:['光纤激光器','上市公司','央企','校招','14薪'],link:'http://job.hust.edu.cn/zjob/2310734.htm',linkText:'华科就业网',email:'raycus_xyzp@163.com',phone:'027-81338818-8013'},

    // ===== 补充：杭州 (1) =====
    {id:'hz-13',city:'杭州',company:'东莱科技',position:'光学工程师（固体激光器）',dir:'固体激光器',dirList:['固体激光器'],salary:'15-30K',sMin:15,sMax:30,edu:'本科',exp:'1-3年',date:'2026-08',fresh:false,desc:'负责倍频、和频等非线性频率转换激光系统的研发与测试；根据实际需求对非线性晶体（PPLN、LBO等）进行分析和选型；使用MATLAB、ZEMAX进行光束传播仿真。',tags:['非线性光学','倍频','PPLN','LBO','ZEMAX'],link:'https://refund.zhipin.com/job_detail/88ebe28b1669b5990nV82Ny9E1pV.html',linkText:'BOSS直聘投递',email:null,phone:null}
  ];

  var jobs = [];

  // ===== State =====
  var activeFilter = 'all';
  var activeRegion = 'all';
  var searchTerm = '';
  var emailOnly = false;

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

    return '<div class="job-card" data-id="' + job.id + '" data-city="' + job.city +
      '" data-dir="' + job.dir + '" data-search="' +
      (job.company + ' ' + job.position + ' ' + job.dir + ' ' + job.tags.join(' ')).toLowerCase() + '">' +
      '<div class="card-header">' +
        '<div>' +
          '<span class="company">' + job.company + '</span>' + freshHtml +
          '<span class="region-badge">' + job.city + '</span>' +
          '<div class="position">' + job.position + '</div>' +
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
    var filtered = jobs.filter(function(j) {
      if (activeFilter !== 'all' && j.dirList.indexOf(activeFilter) === -1) return false;
      if (activeRegion !== 'all' && j.city !== activeRegion) return false;
      if (emailOnly && !j.email) return false;
      if (searchTerm) {
        var s = (j.company + ' ' + j.position + ' ' + j.dir + ' ' + j.tags.join(' ')).toLowerCase();
        if (s.indexOf(searchTerm.toLowerCase()) === -1) return false;
      }
      return true;
    });
    document.getElementById('jobGrid').innerHTML = filtered.map(renderJobCard).join('');
    document.getElementById('resultCount').innerHTML =
      '共找到 <strong>' + filtered.length + '</strong> 个岗位 ' +
      (searchTerm ? '（搜索："' + searchTerm + '"）' : '') +
      (activeRegion !== 'all' ? '（地区：' + activeRegion + '）' : '') +
      (activeFilter !== 'all' ? '（方向：' + activeFilter + '）' : '');

    // Bind card click events
    document.querySelectorAll('.job-card').forEach(function(card) {
      card.addEventListener('click', function() {
        var id = this.getAttribute('data-id');
        var job = jobs.find(function(j) { return j.id === id; });
        if (job) openModal(job);
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

  // ===== Community Jobs =====
  var COMMUNITY_KEY = 'optical_jobs_community';
  var COMMUNITY_TS_KEY = 'optical_jobs_community_ts';
  var GITHUB_REPO = 'alice-p197/optical-engineer-jobs';
  var GITHUB_FILE = 'jobs-community.json';
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
    jobs = baseJobs.concat(communityJobs);
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
    document.getElementById('totalCount').textContent = jobs.length;
    document.querySelectorAll('.stat-card')[1].querySelector('.stat-num').textContent = Object.keys(allCities).length;
    document.querySelectorAll('.stat-card')[2].querySelector('.stat-num').textContent = Object.keys(allDirs).length;
    document.querySelectorAll('.stat-card')[3].querySelector('.stat-num').textContent = Object.keys(allCompanies).length;
    document.querySelectorAll('.stat-card')[4].querySelector('.stat-num').textContent = emailCount;
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
    var customDirs = document.getElementById('fjDirCustom').value.trim();
    if (customDirs) {
      dirs = dirs.concat(customDirs.split(',').map(function(d){return d.trim();}).filter(Boolean));
    }
    if (dirs.length === 0) { alert('请至少选择一个研究方向'); return; }

    var tags = document.getElementById('fjTags').value.trim()
      .split(',').map(function(t){return t.trim();}).filter(Boolean);

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
    refreshAll();
    closeAddJobModal();
    window.scrollTo({top: 0, behavior: 'smooth'});

    // Open GitHub issue for cloud sync
    var issueTitle = '[岗位提交] ' + company + ' - ' + position;
    var jobJson = JSON.stringify(newJob, null, 2);
    var issueBody = '## 岗位提交\n\n' +
      '以下岗位由光学就业网用户提交。\n\n' +
      '```json\n' + jobJson + '\n```\n\n' +
      '> 提交时间：' + new Date().toISOString() + '\n';
    var issueUrl = 'https://github.com/' + GITHUB_REPO +
      '/issues/new?title=' + encodeURIComponent(issueTitle) +
      '&body=' + encodeURIComponent(issueBody) +
      '&labels=job-submission';
    setTimeout(function() { window.open(issueUrl, '_blank'); }, 600);
  });

  function fetchCommunityFromGitHub() {
    // Use raw.githubusercontent.com — no auth needed for public repos
    var rawUrl = 'https://raw.githubusercontent.com/' + GITHUB_REPO +
      '/main/' + GITHUB_FILE;
    // Add cache-busting param to avoid stale responses
    fetch(rawUrl + '?t=' + Date.now(), { cache: 'no-store' })
      .then(function(r) {
        if (!r.ok) throw new Error('Not found');
        return r.json();
      })
      .then(function(remote) {
        if (!Array.isArray(remote) || remote.length === 0) return;
        // Merge: remote data wins for same ID, keep local-only jobs
        var localIds = {};
        communityJobs.forEach(function(j) { localIds[j.id] = true; });
        var merged = remote.slice();
        communityJobs.forEach(function(j) {
          if (!remote.some(function(rj) { return rj.id === j.id; })) {
            merged.push(j);
          }
        });
        communityJobs = merged;
        saveCommunityJobs();
        refreshAll();
      })
      .catch(function() { /* offline — use localStorage */ });
  }

  // ===== Community badge in cards =====
  var origRenderJobCard = renderJobCard;
  renderJobCard = function(job) {
    var html = origRenderJobCard(job);
    if (job.community) {
      html = html.replace('<span class="company">', '<span class="company">' +
        '<span class="community-badge">社区</span> ');
    }
    return html;
  };

  // ===== Init =====
  loadCommunityJobs();
  mergeAllJobs();
  fetchCommunityFromGitHub();
  updateStats();
  generateRegionChips();
  filterJobs();
  if (typeof refreshCharts === 'function') { refreshCharts(jobs); }
})();