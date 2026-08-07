import type { SiteContent } from '../i18n/types';
import { siteImages } from './images';

export const zh: SiteContent = {
  site: {
    brand: '空间设计工作室',
    lang: 'zh-CN',
    title:
      '多风格住宅设计｜法式轻奢 · 俄式 · 意式简约 · 现代简约 · 美式 · 中式',
    description:
      '专注法式轻奢、俄式古典、意式简约、现代简约、美式与中式住宅设计。暖色配色、精致细节与全程落地，服务私宅及法英等拓展市场。',
  },
  ui: {
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    mainNav: '主导航',
    mobileNav: '移动端导航',
    languageLabel: '语言',
  },
  nav: [
    { label: '设计服务', href: '#services' },
    { label: '精选案例', href: '#portfolio' },
    { label: '联系我们', href: '#contact' },
  ],
  philosophy: {
    items: [
      {
        title: '简约精工',
        description:
          '我们以清晰的空间逻辑与严谨的施工细节为设计原则。暖色材质、精致线条与实用收纳并重——无论法式线脚、俄式木作，还是现代简约的干净界面，每一项选择都在视觉精致与真实生活动线之间取得平衡。',
        image: siteImages.philosophy[0],
        imageAlt: '暖光古典长廊与精致细节',
      },
      {
        title: '温润细节',
        description:
          '好的家宅会在时间中慢慢展开——光线的变化、视线的框景、空间的收放。我们注重营造这些随时间愈发迷人的居住瞬间。层次丰富的材质、柔和的氛围灯光与精心框定的视线，让日常空间成为值得停留的地方。',
        image: siteImages.philosophy[1],
        imageAlt: '暖光古典卧室空间',
      },
      {
        title: '全程共创',
        description:
          '设计不是单向输出，而是与您共同完成的过程。从户型沟通到风格与选材落地，设计师全程直接对接，确保方案贴合您的生活方式、风格偏好与预算。每个阶段都有清晰反馈，直接沟通、无中间销售。',
        image: siteImages.philosophy[2],
        imageAlt: '温暖会客空间，便于沟通方案',
      },
    ],
  },
  hero: {
    label: '多风格 · 住宅设计',
    title: '法式轻奢与暖色古典私宅｜意式 · 现代 · 美式 · 中式',
    subtitle:
      '从奶油法式客厅、俄式古典套房，到意式静奢与现代简约——只做贴合您生活方式的专属方案；法国、英国等市场同步拓展中。',
    primaryBtn: '免费户型优化',
    secondaryBtn: '浏览案例',
    image: siteImages.hero,
    imageAlt: '法式轻奢奶油客厅，浅蓝沙发与水晶灯',
  },
  about: {
    label: '关于我们',
    paragraphs: [
      '专注法式轻奢、俄式古典、意式简约、现代简约、美式与中式住宅设计，擅长暖色配色、线条与材质把控，以及旧房焕新。',
      '主打一对一原创设计、户型优化、软装全案、收纳升级与施工落地跟进，让家宅兼具风格格调与生活温度，亦服务拓展中的法英市场客户。',
      '拒绝冰冷模板化出图，根据家庭结构、生活习惯、风格偏好与预算，定制完整家装方案。全程设计师直接对接，无中间销售。',
    ],
  },
  services: {
    label: '专业领域',
    title: '设计服务',
    items: [
      {
        number: '01',
        title: '全屋住宅设计',
        image: siteImages.services[0],
        imageAlt: '古典挑高玄关与木作楼梯',
        description: [
          '法式、俄式、意式、现代、美式、中式等多风格全屋设计、平面布局、效果图与全套施工图',
          '客厅、卧室、餐厨空间格局优化与采光整改',
          '旧房改造：墙面线条、地面材质、灯光氛围整体升级',
        ],
      },
      {
        number: '02',
        title: '暖色软装全案',
        image: siteImages.services[1],
        imageAlt: '奶油衣帽间与水晶吊灯',
        description: [
          '按选定风格统筹家具、灯具、窗帘与配色体系',
          '装饰语言与当代生活需求的平衡落地',
        ],
      },
      {
        number: '03',
        title: '局部精装改造',
        image: siteImages.services[2],
        imageAlt: '木作玻璃隔断局部改造',
        description: ['客厅背景墙、卧室衣帽间、玄关与厨卫等局部翻新'],
      },
    ],
  },
  included: {
    label: '包含服务',
    items: ['免费户型分析', '风格与配色建议', '选材指导', '预算参考', '施工对接答疑'],
  },
  portfolio: {
    label: '精选展示',
    title: '按风格看案例',
    archiveLink: '预约设计',
    filterAll: '全部风格',
    comingSoon: '中式案例筹备中，欢迎提前预约风格方向沟通。',
    featuredBadge: '主打系列',
    projects: [
      {
        title: '欧美风格',
        category: '欧美',
        styleKey: 'american',
        tagline:
          '深色木作、大理石台面与层次灯光交织，植物纹样与金属点缀并存——别墅级欧美主打系，一眼定调。',
        images: [...siteImages.portfolio.american],
        featured: true,
      },
      {
        title: '法式轻奢',
        category: '法式',
        styleKey: 'french',
        tagline: '奶油石材、水晶灯光与柔和古典线条，为别墅与城市住宅带来精致温暖。',
        images: [...siteImages.portfolio.french],
      },
      {
        title: '意式简约',
        category: '意式',
        styleKey: 'italian',
        tagline: '暖中性色调中的静奢——大理石、原木与克制比例，成就日常优雅。',
        images: [...siteImages.portfolio.italian],
      },
      {
        title: '现代简约',
        category: '现代',
        styleKey: 'modern',
        tagline: '干净界面与层次灯光服务住宅，亦覆盖当代商业与办公空间能力展示。',
        images: [...siteImages.portfolio.modern],
      },
      {
        title: '俄式风格',
        category: '俄式',
        styleKey: 'russian',
        tagline: '深色木作、金色点缀与端庄对称，庄重而可居的欧俄古典套房。',
        images: [...siteImages.portfolio.russian],
      },
      {
        title: '中式风格',
        category: '中式',
        styleKey: 'chinese',
        tagline: '新中式与当代东方住宅方向可先行沟通，落地案例筹备中。',
        images: [...siteImages.portfolio.chinese],
        comingSoon: true,
      },
    ],
  },
  advantages: {
    label: '设计优势',
    title: '为什么选择我们',
    items: [
      {
        number: '01',
        icon: 'warmth',
        title: '多风格专长',
        description: '法式轻奢、俄式古典、意式、现代、欧美与中式，暖色可落地',
      },
      {
        number: '02',
        icon: 'transparency',
        title: '无隐形增项',
        description: '方案、图纸、清单清晰透明',
      },
      {
        number: '03',
        icon: 'personal',
        title: '全程一对一',
        description: '设计师直接对接，不转手不换人',
      },
      {
        number: '04',
        icon: 'craft',
        title: '重落地效果',
        description: '氛围可落地、好居住、好打理',
      },
    ],
  },
  process: {
    label: '服务流程',
    title: '从咨询到完工',
    steps: [
      '咨询沟通',
      '需求与风格确认',
      '免费户型规划',
      '方案定稿',
      '全套图纸交付',
      '选材指导',
      '施工对接答疑',
      '完工验收',
    ],
  },
  faq: {
    label: '常见问题',
    title: '您可能想了解',
    items: [
      {
        question: '你们做哪些风格？',
        answer:
          '法式轻奢、俄式古典、意式简约、现代简约、美式与中式。我们会根据户型、生活方式与预算，帮您选定合适方向。',
      },
      {
        question: '设计怎么收费？',
        answer: '按户型面积和设计需求一口价，提前说明，无后续加价。',
      },
      {
        question: '异地或海外可以设计吗？',
        answer:
          '支持全国异地设计，并配合法国、英国等市场拓展需求，提供全套图纸与线上全程跟进。',
      },
      {
        question: '包含哪些图纸？',
        answer: '平面布局、拆改、水电、天花、地面、立面、节点施工图+效果图+选材清单。',
      },
    ],
  },
  cta: {
    label: '私人咨询',
    title: '开启您的家宅设计',
    quote: '每一处线条与暖光，皆为家的温度而设计。',
    contact: '添加微信 · 免费咨询',
    button: '预约私人咨询',
    wechatId: 'yzkongjian',
    modalTitle: '添加微信',
    modalHint: '复制微信号后，打开微信搜索添加，免费咨询。',
    copyLabel: '复制微信号',
    copiedLabel: '已复制',
    closeLabel: '关闭',
  },
  footer: {
    about:
      '多风格住宅设计——法式轻奢、俄式古典、意式简约、现代简约、美式与中式，以专属方案打造温馨耐看、可落地的高品质居住体验。',
    columns: [
      {
        title: '工作室',
        links: [
          { label: '关于我们', href: '#about' },
          { label: '设计服务', href: '#services' },
          { label: '落地案例', href: '#portfolio' },
        ],
      },
      {
        title: '咨询',
        links: [
          { label: '免费户型优化', href: '#contact' },
          { label: '预约设计', href: '#contact' },
          { label: '常见问题', href: '#faq' },
        ],
      },
    ],
    copyright: '© 2026 空间设计工作室. 保留所有权利.',
  },
};
