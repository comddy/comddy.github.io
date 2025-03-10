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
