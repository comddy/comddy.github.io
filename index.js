// 添加在文件顶部
const translations = {
  zh: {
      home: "首页",
      services: "资源与服务",
      achievements: "科研成果",
      about: "关于我们",
      slogan1: "科技改变世界，创新引领未来。",
      slogan2: "汇聚前沿智慧，共筑科技梦想，以创新之力驱动时代发展，让科技之光引领人类前行。",
      serviceTitle: "资源与服务",
      serviceIntro: "深极科技由精英团队创办，提供AI、软件开发、区块链、数字孪生等技术服务，并与广州超算中心合作，专注于深度学习、大语言模型、强化学习、量子计算等领域的研究。",
      service1: "AI技术服务",
      service2: "AI for Science",
      service3: "区块链技术服务",
      service4: "前后端开发",
      service5: "小程序开发服务",
      service6: "APP开发服务",
      service1_desc: "为各行各业提供AI算法研发模型训练模型部署服务。",
      service2_desc: "为学术界提供AI算法交叉融合研究范式助力科研探索。",
      service3_desc: "提供区块链技术的开发与应用服务，支持企业和机构构建安全可靠的分布式系统。",
      service4_desc: "提供全面的前后端开发服务，致力于打造高性能、易用且安全的网站和应用程序。",
      service5_desc: "为企业和机构开发微信小程序，提升用户的互动体验和业务覆盖率。",
      service6_desc: "提供移动应用程序的设计与开发服务，覆盖Android平台，满足各种业务需求。",
      researchTitle: "科研成果",
      research1: "AI交互数字人",
      research2: "AI for Science",
      research3: "区块链应用",
      research4: "数字文创 AI + AR",
      research5: "量子结构搜索",
      research6: "量子神经网络",
      research1_desc: "支持语音交互、表情控制、肢体动作控制均可实现高逼真度，可用于直播，展会，前台，导播等",
      research2_desc1: "- 为广东省气象局提供陆面分析预测模型",
      research2_desc2: "- 大模型数学推理研究",
      research2_desc3: "- 自研量子神经网络",
      research2_desc4: "- 与中国电信量子集团合作基于强化学习的量子算法编译研究",
      research3_desc: "基于区块链技术的去中心化应用（DAPP）具有公开透明、数据全程溯源和不可篡改的特点。通过智能合约，可以在以太坊区块链网络上开发各种功能的DAPP，实现自动化和可信任的应用。",
      research4_desc: "结合现代数字技术与文化创意产业，我们将创意内容转化为具有市场价值的数字产品。这些产品包括但不限于：增强现实（AR）、3D打印、网页设计等，将文化创意与数字技术完美融合。",
      research5_desc: "可微分量子架构搜索（DQAS）通过端到端可微分方式自动设计量子电路，优化变分量子算法（VQA）性能。它结合可微分编程、概率编程和量子编程，自动优化和发现最优参数化量子电路结构。",
      research6_desc: "设计了一种能够实现图像多分类的量子卷积神经网络，并提出了一种基于振幅编码的新型数据编码方案。",
      aboutUsTitle: "关于我们",
      aboutUsIntro: "深极科技由一支年轻富有活力的团队创办，公司核心工程师均为硕士或者博士，来自于中山大学、东京大学、西北工业大学、华南理工大学等高校。我们致力于为企业、政府部门、学校等提供包括但不限于AI技术、软件开发、区块链、数字人、数字孪生等技术服务。除此之外，我们也积极投身于人工智能、量子计算等前沿领域的研究探索。",
      contactUsTitle: "联系我们",
      contactUsIntro: "地址：广州市海珠区新港西路135号",
      contactUsPhone: "电话：14727632108",
      contactUsEmail: "电子邮箱：yangm289@mail2.sysu.edu.cn",
      serviceMenuTitle: "服务概览",
      serviceMenu1: "量子结构搜索/量子神经网络",
      serviceMenu2: "AI视觉/智能客服/RAG应用",
      serviceMenu3: "区块链/AI数字人",
      supportTitle: "帮助与支持",
      support1: "支持中心",
      support2: "联系客服",
      copyRight: "版权所有 © 2025 深根宁极(广州)科技有限公司",
      
      // 添加其他需要翻译的文本
  },
  en: {
      home: "Home",
      services: "Services",
      achievements: "Achievements",
      about: "About Us",
      slogan1: "Technology changes the world, innovation leads the future.",
      slogan2: "Gather cutting-edge insights, cultivate scientific and technological aspirations, propel the advancement of society through innovation, and allow the beacon of science and technology to guide humanity toward a brighter future.",
      serviceTitle: "Resources and services",
      serviceIntro: "Founded by an elite team, Shenji Technology provides AI, software development, blockchain, digital twin and other technical services, and cooperates with Guangzhou Supercomputing Center, focusing on deep learning, large language models, reinforcement learning, quantum computing and other fields of research.",
      service1: "AI technology services",
      service2: "AI for Science",
      service3: "Blockchain technology services",
      service4: "Front-end and back-end development",
      service5: "Mini program development services",
      service6: "APP development services",
      service1_desc: "Provide AI algorithm research and development model training model deployment services for all walks of life.",
      service2_desc: "To provide the academic community with AI algorithm cross-fusion research paradigm to help scientific research exploration.",
      service3_desc: "Provide blockchain technology development and application services to support enterprises and institutions to build safe and reliable distributed systems.",
      service4_desc: "Provide comprehensive front - and back-end development services to build high-performance, easy-to-use, and secure websites and applications.",
      service5_desc: "Develop wechat mini programs for enterprises and organizations to improve users' interactive experience and business coverage.",
      service6_desc: "Provide mobile application design and development services, covering the Android platform, to meet various business needs.",
      researchTitle: "Research Achievements",
      research1: "AI Interactive Digital Human",
      research2: "AI for Science",
      research3: "Blockchain Applications",
      research4: "Digital Cultural and Creative AI + AR",
      research5: "Quantum Structure Search",
      research6: "Quantum Neural Network",
      research1_desc: "Supports voice interaction, expression control, and body movement control, all of which can achieve high degree of authenticity, and can be used for live broadcast, exhibitions, front desk, director, etc.",
      research2_desc1: "- Provide land surface analysis and prediction model for Guangdong Meteorological Bureau",
      research2_desc2: "- Large model mathematical reasoning research",
      research2_desc3: "- Self-developed quantum neural network",
      research2_desc4: "- Cooperate with China Telecom Quantum Group to compile quantum algorithms based on reinforcement learning",
      research3_desc: "Based on blockchain technology, decentralized applications (DAPP) have the characteristics of public transparency, data traceability, and tamper-proofness. Through smart contracts, various functions of DAPP can be developed on the Ethereum blockchain network, realizing automated and trustworthy applications.",
      research4_desc: "Combining modern digital technology with the cultural and creative industry, we transform creative content into digital products with market value. These products include but are not limited to: augmented reality (AR), 3D printing, web design, etc., perfectly integrating cultural creativity with digital technology.",
      research5_desc: "Differentiable Quantum Architecture Search (DQAS) automatically designs quantum circuits through end-to-end differentiable methods, optimizing the performance of variational quantum algorithms (VQA). It combines differentiable programming, probabilistic programming, and quantum programming to automatically optimize and discover the optimal parameterized quantum circuit structure.",
      research6_desc: "A design of a quantum convolutional neural network that can achieve multi-class image classification and proposes a new data encoding scheme based on amplitude encoding.",
      aboutUsTitle: "About Us",
      aboutUsIntro: "Shenji Technology is founded by a young and energetic team. The core engineers of the company are all master or doctor, coming from Sun Yat-sen University, Tokyo University, Northwestern Polytechnical University, South China University of Technology, etc. We are committed to providing technical services including but not limited to AI technology, software development, blockchain, digital human, digital twin, etc. for enterprises, government departments, schools, etc. In addition, we are also actively involved in the research and exploration of artificial intelligence and quantum computing.",
      contactUsTitle: "Contact Us",
      contactUsIntro: "Address: No. 135, Xingang West Road, Haizhu District, Guangzhou",
      contactUsPhone: "Phone: 14727632108",
      contactUsEmail: "Email: yangm289@mail2.sysu.edu.cn",
      serviceMenuTitle: "Service Overview",
      serviceMenu1: "Quantum Structure Search/Quantum Neural Network",
      serviceMenu2: "AI Vision/Smart Customer Service/RAG Application",
      serviceMenu3: "Blockchain/AI Digital Human",
      supportTitle: "Help and Support",
      support1: "Support Center",
      support2: "Contact Customer Service",
      copyRight: "Copyright © 2025 Shenji Technology (Guangzhou) Co., Ltd.",
      // 添加其他需要翻译的文本
  }
};

function changeLanguage(lang) {
  fetch(`i18n/${lang}.json`)
      .then(response => response.json())
      .then(data => {
          document.querySelectorAll('[data-i18n]').forEach(el => {
              const key = el.getAttribute('data-i18n');
              if (data[key]) {
                  el.textContent = data[key];
              }
          });
          
          // 同步更新语言选择器状态
          const selector = document.getElementById('language-selector');
          selector.value = lang;
      });
}

// 初始化时检查存储的语言设置
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'zh';
  changeLanguage(savedLang);
  
  // 设置选择器初始值
  document.getElementById('language-selector').value = savedLang;
});

function switchLanguage(lang) {
  // 更新所有带data-i18n属性的元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
          el.textContent = translations[lang][key];
      }
  });

  // 更新按钮状态
  document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // 存储语言偏好
  localStorage.setItem('preferredLanguage', lang);
}

// 初始化时设置下拉框选中状态
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'zh';
document.querySelector('.language-dropdown').value = preferredLanguage;

// 添加语言切换事件
document.querySelector('.language-dropdown').addEventListener('change', function() {
  switchLanguage(this.value);
});


// 导航实例
const headerEl = document.querySelector("header");
// 返回顶部实例
const scrollToTop = document.querySelector(".scrollToTop");

// 窗口滚动处理
window.addEventListener("scroll", () => {
  // 检查是否为移动端
  const isMobile = window.innerWidth <= 768;
  
  // 只在非移动端处理固定导航
  if (!isMobile) {
    if (window.pageYOffset > 110) {
      if (!headerEl.classList.contains("sticky")) {
        headerEl.classList.add("sticky");
      }
    } else {
      headerEl.classList.remove("sticky");
    }
  }

  // 显示返回顶部
  if (window.pageYOffset > 2000) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});

// 添加窗口大小改变监听
window.addEventListener('resize', () => {
  const isMobile = window.innerWidth <= 768;
  if (isMobile && headerEl.classList.contains("sticky")) {
    headerEl.classList.remove("sticky");
  }
});

// 初始轮播
const glide = new Glide(".glide");
// 获取轮播标题实例
const captionsEl = document.querySelectorAll(".slide-caption");
// 当轮播加载完成后，每个轮播完成时，加载标题动画
glide.on(["mount.after", "run.after"], () => {
  // 获取当前展示的轮播index
  const caption = captionsEl[glide.index];
  anime({
    // 对每个子元素进行动画
    targets: caption.children,
    // 透明度
    opacity: [0, 1],
    // 持续时间
    duration: 400,
    easing: "linear",
    // 每个子元素相继延迟400毫秒，第一个延迟300毫秒
    delay: anime.stagger(400, { start: 300 }),
    // 从下向上移动，每行从40到10递减，最后移动到0
    translateY: [anime.stagger([40, 10]), 0]
  });
});

// 轮播进行前，把标题透明度设置为0，还原
glide.on("run.before", () => {
  document.querySelectorAll(".slide-caption > *").forEach(el => {
    el.style.opacity = 0;
  });
});

// 加载轮播，必须在添加事件处理函数之后
glide.mount();

// 成功案例
// 初始化isotope
const isotope = new Isotope(".cases", {
  // 适应行布局，每行宽度一样
  layoutMode: "fitRows",
  // 每个案例的class选择器
  itemSelector: ".case-item"
  // percentPosition: true
});

// 成功案例筛选
const filterBtns = document.querySelector(".filter-btns");
// 当点击筛选按钮时
if (filterBtns) {
  filterBtns.addEventListener("click", e => {
    let { target = {} } = e;
    const filterOption = target.getAttribute("data-filter");
    if (filterOption) {
      // 取消其他按钮active状态
      document
        .querySelectorAll(".filter-btn.active")
        .forEach(btn => btn.classList.remove("active"));
      target.classList.add("active");
      // 筛选
      isotope.arrange({ filter: filterOption });
    }
  });
}

// 滚动展示插件
// 通用动画配置，从底部50象素滑出来
const staggeringOption = {
  delay: 300,
  distance: "50px",
  duration: 500,
  easing: "ease-in-out",
  origin: "bottom"
};

// 移除 service-item 的动画
ScrollReveal().reveal(".feature", { ...staggeringOption, interval: 350 });
// ScrollReveal().reveal(".service-item", { ...staggeringOption, interval: 350 }); // 注释或删除这行

// 数据部分
const dataSectionEl = document.querySelector(".data-section");
if (dataSectionEl) {
  ScrollReveal().reveal(".data-section", {
    beforeReveal: () => {
      // 在展示之前，加载anime动画，使数据从0增长到定义好的数值
      anime({
        targets: ".data-piece .num",
        innerHTML: el => {
          return [0, el.innerHTML];
        },
        duration: 2000,
        round: 1,
        easing: "easeInExpo"
      });
      dataSectionEl.style.backgroundPosition = `center calc(50% - ${dataSectionEl.getBoundingClientRect()
        .bottom / 5}px)`;
    }
  });

  // 数据，背景视差滚动
  window.addEventListener("scroll", () => {
    const bottom = dataSectionEl.getBoundingClientRect().bottom;
    const top = dataSectionEl.getBoundingClientRect().top;
    // 如果在可见区域内
    if (bottom >= 0 && top <= window.innerHeight) {
      dataSectionEl.style.backgroundPosition = `center calc(50% - ${bottom /
        5}px)`;
    }
  });
}

/* ***** 响应式**** */

// 折叠按钮
const burgerEl = document.querySelector(".burger");
const nav = document.querySelector("header nav");
burgerEl.addEventListener("click", () => {
  headerEl.classList.toggle("open");
});

// 流畅滚动
const scroll = new SmoothScroll('nav a[href*="#"], .scrollToTop a[href*="#"]', {
  // 自动计算固定导航的高度
  header: "header",
  // 偏移80象素
  offset: 80
});

// 探索更多按钮的处理函数
const exploreBtnEl = document.querySelector(".explore-btn");
if (exploreBtnEl) {
  exploreBtnEl.addEventListener("click", () => {
    scroll.animateScroll(document.querySelector("#about-us"));
  });
}

// 折叠菜单打开时，如果点击了链接，则自动关闭全屏导航
document.addEventListener("scrollStart", () => {
  if (headerEl.classList.contains("open")) {
    headerEl.classList.remove("open");
  }
});

// 初始化地图
const map = new AMap.Map('container', {
    zoom: 15,  // 地图缩放级别
    center: [113.296798, 23.09609],  // 经纬度坐标
    viewMode: '2D',  // 使用2D模式
    lang: 'zh_cn',  // 设置语言
    mapStyle: 'amap://styles/normal',  // 设置地图样式
    resizeEnable: true  // 是否监控地图容器尺寸变化
});

// 添加地图控件
map.plugin(['AMap.ToolBar', 'AMap.Scale'], function(){
    // 添加工具条
    const toolbar = new AMap.ToolBar();
    map.addControl(toolbar);
    // 添加比例尺
    const scale = new AMap.Scale();
    map.addControl(scale);
});

// 添加标记点
const marker = new AMap.Marker({
    position: [113.296798, 23.09609],
    title: '深根宁极(广州)科技有限公司',
    icon: new AMap.Icon({
        // 使用自定义图标
        size: new AMap.Size(40, 40),  // 调整图标大小
        image: 'images/Marker.png',   // 图标路径
        imageSize: new AMap.Size(40, 40)  // 调整图片大小
    }),
    offset: new AMap.Pixel(-20, -40)  // 调整偏移量
});

map.add(marker);

// 添加信息窗体
const infoWindow = new AMap.InfoWindow({
    content: `
        <div style="padding: 15px;">
            <h3 style="margin: 0 0 10px 0; color: #1890ff;">深根宁极(广州)科技有限公司</h3>
            <p style="margin: 0; line-height: 1.5;">地址：广州市海珠区新港西路135号</p>
        </div>
    `,
    offset: new AMap.Pixel(0, -30)
});

// 默认打开信息窗体
infoWindow.open(map, marker.getPosition());

// 确保地图加载完成
map.on('complete', function() {
    console.log('地图加载完成');
});
