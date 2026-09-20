import type { PageRoute } from '../types';

export interface CoursePlanet {
  symbol: string;
  name: string;
  color: string;
  question: string;
  desc: string;
}

export interface CourseStep {
  number: string;
  title: string;
  desc: string;
}

export interface CourseStoryAction {
  label: string;
  desc: string;
}

export interface CourseFaq {
  question: string;
  answer: string[];
}

export interface CourseData {
  id: string;
  seriesNumber: string;
  seriesName: string;
  planetsSummary: string;
  theme: string;
  banner: {
    src: string;
    alt: string;
  };
  hero: {
    headlineLine1: string;
    headlineLine2: string;
    date: string;
    location: string;
  };
  resonance: {
    cards: string[];
    boxTitleLine1: string;
    boxTitleLine2: string;
    boxDescLine1: string;
    boxDescLine2: string;
    boxHighlight: string;
  };
  organize: {
    title: string;
    desc: string;
    image?: {
      src: string;
      alt: string;
    };
  };
  threeAngles: {
    title: string;
    desc?: string;
    planets: CoursePlanet[];
    image?: {
      src: string;
      alt: string;
    };
  };
  practice: {
    title: string;
    desc: string;
    steps: CourseStep[];
    cardImage?: {
      src: string;
      alt: string;
    };
  };
  takeaway: {
    image?: {
      src: string;
      alt: string;
    };
    quote: string;
    quoteHighlight: string;
    quoteSuffix?: string;
  };
  story: {
    badge: string;
    title: string;
    quote: string;
    introParagraphs: string[];
    actionIntro: string;
    actions: CourseStoryAction[];
    conclusion: string;
  };
  whyAstrology: {
    title: string;
    paragraphs: string[];
    highlightParagraph: string;
  };
  instructors: {
    title: string;
    list: {
      name: string;
      image: string;
    }[];
  };
  details: {
    title: string;
    time: string;
    price: string;
    earlyBird: string;
    locationName: string;
    locationAddress: string;
    mapQuery: string;
    mapEmbedUrl: string;
    registrationOpen: boolean;
    registerPath?: PageRoute;
    registerNotice?: string;
  };
  faqs: CourseFaq[];
  finalCta: {
    headline1: string;
    headline2: string;
    body: string;
    tagDate: string;
    tagPrice: string;
    registrationOpen: boolean;
    registerPath?: PageRoute;
    notice?: string;
  };
}

export const series1Data: CourseData = {
  id: 'series-1',
  seriesNumber: '01',
  seriesName: '系列一',
  planetsSummary: '太陽・月亮・金星',
  theme: '告別盲從焦慮，站上天賦舞台',
  banner: {
    src: '/images/course_banner_1.jpg',
    alt: '【人生星方向系列一】太陽・月亮・金星 告別盲從焦慮，站上天賦舞台',
  },
  hero: {
    headlineLine1: '為什麼聽了這麼多成功經驗，',
    headlineLine2: '我依然不知道該怎麼做？',
    date: '12/19（六）10:00–17:00',
    location: '台中｜實體小班課程',
  },
  resonance: {
    cards: [
      '「我一直在學，卻不知道哪個適合我。」',
      '「我知道很多方法，卻還是不敢做決定。」',
      '「我想改變，卻不知道該從哪裡開始。」',
    ],
    boxTitleLine1: '你可能不是不夠努力，',
    boxTitleLine2: '而是不確定什麼才適合自己。',
    boxDescLine1: '當我們還不了解自己真正需要什麼，',
    boxDescLine2: '很容易開始複製別人的成功方式。',
    boxHighlight: '越努力，越不像自己。',
  },
  organize: {
    title: '這堂課程，要幫你整理什麼？',
    desc: '我們不急著告訴你「應該怎麼做」，而是先從自己開始。',
    image: {
      src: '/images/series1_card1.jpg',
      alt: '自我成長四步驟：01 看見自己、02 理解需求、03 對照經驗、04 找到自己的方式',
    },
  },
  threeAngles: {
    title: '在這堂課程中，我們會從三個角度重新認識自己',
    planets: [
      {
        symbol: '☉',
        name: '太陽',
        color: '#f4d03f',
        question: '我想成為誰？',
        desc: '發現自己想往哪裡發展。',
      },
      {
        symbol: '☽',
        name: '月亮',
        color: '#9aaabd',
        question: '我需要什麼？',
        desc: '理解自己的情緒需求與安全感來源。',
      },
      {
        symbol: '♀',
        name: '金星',
        color: '#d28b4c',
        question: '什麼對我來說是好的？',
        desc: '看見價值取向、喜好與選擇方式。',
      },
    ],
    image: {
      src: '/images/series1_card2.jpg',
      alt: '太陽、月亮、金星 核心架構',
    },
  },
  practice: {
    title: '你會在這堂課程得到什麼？',
    desc: '在這堂課程中，你不只會學到占星的知識，\n還會實際地把占星放回生活，使用這套工具來解決問題。',
    steps: [
      {
        number: '01',
        title: '認識自己的星盤',
        desc: '從太陽、月亮、金星開始理解自己的特質。',
      },
      {
        number: '02',
        title: '對照自己的生活',
        desc: '把占星放回工作、關係與日常經驗。',
      },
      {
        number: '03',
        title: '找出「想要」與「需要」',
        desc: '辨認哪些選擇來自自己，哪些只是別人的標準。',
      },
      {
        number: '04',
        title: '完成個人整理',
        desc: '把理解轉化成一套比較適合自己的方式。',
      },
    ],
  },
  takeaway: {
    image: {
      src: '/images/series1_card4.jpg',
      alt: '一天結束後你會帶走什麼',
    },
    quote: '你能帶走的，不只是與你自身有關的占星知識，更是一套在未來遇到選擇時，還能拿起來使用的',
    quoteHighlight: '自我整理工具',
    quoteSuffix: '。',
  },
  story: {
    badge: '我們的真實案例',
    title: '從不敢開口，到找到自己的下一步',
    quote: '「我想幫忙，卻總是不敢開口。」',
    introParagraphs: [
      '一位網頁設計師的學員，和我們分享他在職場上遇到的煩惱。他很羨慕主管能力很好，獨自完成很多任務，還有餘力可以主動幫助別人。他也想變強、想多接一些事情，卻擔心造成別人的困擾，最後只能默默把自己的事情做好。',
      '他原本以為，自己缺的是能力。但課程中的發現是：真正卡住他的，是太在意別人的回應，還沒開始，就先否定了自己。',
    ],
    actionIntro: '於是，我們在課程中引導他，開始用適合自己的方式練習：',
    actions: [
      { label: '主動詢問：', desc: '先確認對方是否需要協助。' },
      { label: '從小事開始：', desc: '慢慢累積信任。' },
      { label: '重新聚焦：', desc: '把注意力放在「創造價值」，而不是害怕犯錯。' },
    ],
    conclusion: '理解自己之後，他更清楚知道下一步怎麼開始。',
  },
  whyAstrology: {
    title: '為什麼我們使用占星？',
    paragraphs: [
      '我們使用占星，不是用它來預測未來，也不是替自己貼標籤。',
      '是因為它提供了一套有架構的觀察方式，讓我們重新整理自己的思考、需求與價值。',
    ],
    highlightParagraph: '理解自己，不是為了得到標準答案，而是更有底氣做自己的選擇。',
  },
  instructors: {
    title: '我們會教你這套實用的方法！',
    list: [
      { name: '阿拉丁 Aladdin', image: '/images/instructor_Aladdin.jpg' },
      { name: '顏惠貞 Gudhata', image: '/images/instructor_Gudhata.jpg' },
    ],
  },
  details: {
    title: '活動資訊',
    time: '12/19（六）10:00–17:00',
    price: 'NT$ 4,000',
    earlyBird: '早鳥優惠價 NT$ 3,600 起',
    locationName: '益人咖啡－台中大道店',
    locationAddress: '407 臺中市西屯區福雅里台灣大道四段796號',
    mapQuery: '407臺中市西屯區福雅里台灣大道四段796號+益人咖啡台中大道店',
    mapEmbedUrl: 'https://maps.google.com/maps?q=407%E8%87%BA%E4%B8%AD%E5%B8%82%E8%A5%BF%E5%B1%AF%E5%8D%80%E7%A6%8F%E9%9B%85%E9%87%8C%E5%8F%B0%E7%81%A3%E5%A4%A7%E9%81%93%E5%9B%9B%E6%AE%B5796%E8%99%9F&t=&z=16&ie=UTF8&iwloc=&output=embed',
    registrationOpen: false,
    registerNotice: '報名尚未開放，敬請期待。',
  },
  faqs: [
    {
      question: 'Q｜不知道出生時間可以參加嗎？',
      answer: [
        '可以參加！最推薦本人攜帶身分證至全台任一戶政事務所臨櫃申請「出生證明書」（謄本/影本，每份約10–15元，現場即可領取且載有精確時分）。',
        '若暫時無法申請，亦可向出生醫院病歷室調閱，或向長輩詢問出生的概略時段（如清晨、上午、下午、傍晚或深夜），填寫報名表時於備註欄註明即可。',
      ],
    },
    {
      question: 'Q｜活動費用包含午餐嗎？',
      answer: [
        '本活動費用不包含餐點，午餐時間敬請自理。場地周邊與台灣大道沿線有眾多餐飲店家與便利商店，方便外出用餐或稍作休息。',
      ],
    },
    {
      question: 'Q｜活動當天需要準備什麼？',
      answer: [
        '請帶著輕鬆開放的心情與個人筆記用具即可。活動開始前 30 分鐘（09:30）開放報到，敬請準時出席。',
      ],
    },
    {
      question: 'Q｜活動會拍照錄影嗎？',
      answer: [
        '本次活動將進行現場攝影及錄影記錄，作為後續活動花絮回顧與宣傳使用。我們不會將您的個人影像資料移作其他商業用途或提供給無關第三方。',
      ],
    },
    {
      question: 'Q｜我的出生資料會怎麼使用？',
      answer: [
        '報名時所填寫之出生年月日、時間與地點等星盤資訊，僅用於本次課程個人專屬星盤排盤計算、講義印製與現場教學引導。Galaxy Answers 星聲工作室恪守個人隱私保密原則，絕不洩漏或挪作他用。',
      ],
    },
    {
      question: 'Q｜報名後如果有問題怎麼聯繫？',
      answer: [
        '您可以隨時透過官方信箱、LINE 官方帳號，或 Facebook 粉絲專頁與我們聯繫，我們將於 1-3 個工作日內盡速為您回覆確認。',
      ],
    },
  ],
  finalCta: {
    headline1: '如果你最近，正好在思考',
    headline2: '「下一步該怎麼走」',
    body: '給自己一個下午的時間，\n放下外在的標準，\n讓占星，成為你重新閱讀自己的開始。',
    tagDate: '12/19（六）｜ 益人咖啡－台中大道店',
    tagPrice: '早鳥預定中',
    registrationOpen: false,
    notice: '報名尚未開放，敬請期待。',
  },
};

export const series2Data: CourseData = {
  id: 'series-2',
  seriesNumber: '02',
  seriesName: '系列二',
  planetsSummary: '太陽・水星・木星',
  theme: '突破表達無力感，發揮社群影響力',
  banner: {
    src: '/images/course_banner_2.jpg',
    alt: '人生星方向系列二：太陽・水星・木星，突破表達無力感，發揮社群影響力',
  },
  hero: {
    headlineLine1: '為什麼真正想說的話，',
    headlineLine2: '總是在對話結束後才慢慢浮現？',
    date: '10/17（六）10:00–17:00',
    location: '台中｜實體小班課程',
  },
  resonance: {
    cards: [
      '準備了很多內容，真正開口時卻突然腦袋一片空白；',
      '講了很多話，卻發現對方始終抓不到自己真正想表達的重點；',
      '總是在對話結束後，才不停回想：「如果剛剛這樣說，會不會更容易被理解？」',
    ],
    boxTitleLine1: '每個人都希望自己的想法，',
    boxTitleLine2: '能被真正理解。',
    boxDescLine1: '但真正影響表達的，往往不是口才，',
    boxDescLine2: '而是思考、傳達與引起共鳴的方式。',
    boxHighlight: '不是不擅長說話，而是缺少一套適合自己的表達脈絡。',
  },
  organize: {
    title: '讓想法被理解，從整理「表達」開始',
    desc: '不只是說話技巧，而是釐清思考、組織架構，用對方聽得懂的方式傳達並引起共鳴。',
    image: {
      src: '/images/series2_card1.jpg',
      alt: '什麼是表達：01 整理想法、02 表達架構、03 促進理解、04 引起共鳴。',
    },
  },
  threeAngles: {
    title: '為什麼你需要這一場星座課程？',
    desc: '占星學是一套具體、有框架的自我觀察系統，幫助我們看見自己的多元面向。透過太陽、水星、木星三個核心面向，由內而外地幫助你破除表達障礙。',
    planets: [
      {
        symbol: '☉',
        name: '太陽的主張',
        color: '#f4d03f',
        question: '找到自主的觀點',
        desc: '抓到切入議題的角度，點出個人特色的觀點。',
      },
      {
        symbol: '☿',
        name: '水星的脈絡',
        color: '#9aaabd',
        question: '整理自己的表達',
        desc: '剖析解讀資訊的方式，讓想法的表達更好理解。',
      },
      {
        symbol: '♃',
        name: '木星的擴散',
        color: '#d28b4c',
        question: '掌握群眾魅力',
        desc: '找到自己的分享方式，讓表達引起共鳴與迴響。',
      },
    ],
    image: {
      src: '/images/series2_card3.jpg',
      alt: '太陽的主張：找到自主的觀點；水星的脈絡：整理自己的表達；木星的擴散：掌握群眾魅力。',
    },
  },
  practice: {
    title: '我們如何陪你建立自己的表達策略？',
    desc: '課程中，我們會一步一步陪伴你，\n把抽象的占星知識轉化成真正能運用在生活中的工具。',
    steps: [
      {
        number: '01',
        title: '建立占星的分析架構',
        desc: '理解太陽/水星/木星各自代表的思考與溝通特質。',
      },
      {
        number: '02',
        title: '連結生活經驗',
        desc: '看見自己的思考慣性，如何影響表達和與他人互動的方式。',
      },
      {
        number: '03',
        title: '講師引導 x 夥伴交流',
        desc: '透過討論與分享，理解不同的人如何接收資訊和想法。',
      },
      {
        number: '04',
        title: '完成個人表達策略',
        desc: '整理個人的表達方案，建立真正能發揮影響力的溝通模式。',
      },
    ],
    cardImage: {
      src: '/images/series2_card2.jpg',
      alt: '我們如何陪你建立自己的表達策略：建立占星分析架構、連結生活經驗、講師引導與夥伴交流、完成個人表達策略。',
    },
  },
  takeaway: {
    image: {
      src: '/images/series2_card4.jpg',
      alt: '課程結束後你會帶走什麼：看懂思考模式、理解表達盲點、觀點更易被理解、聚焦輸出實戰技巧、可反覆使用的表達工具。',
    },
    quote: '除了理解太陽、水星、木星的核心概念之外，你也會完成一份',
    quoteHighlight: '屬於自己的表達策略',
    quoteSuffix: '。未來無論在工作簡報、團隊合作或社群分享，都能重新回到這份整理。',
  },
  story: {
    badge: '我們的真實案例',
    title: '讓清楚的邏輯，也有溫暖的聲音',
    quote: '「我一直認為，理性的溝通才能真正幫助別人理解我。」',
    introParagraphs: [
      '一位女學員，在擔任專案經理多年後，在課堂中分享：「我一直認為，理性的溝通才能真正幫助別人理解我。」',
      '她總是努力用客觀、公平的角度解釋自己的感受，希望避免情緒影響判斷。然而透過占星的解析，我們發現，她真正擅長的並不是冰冷的邏輯，而是透過情感、故事與感受建立連結。',
    ],
    actionIntro: '於是，我們一起建立了一套適合她的表達方式：',
    actions: [
      { label: '保留架構加入溫度：', desc: '保留清楚的邏輯架構，但加入更多真實感受與故事。' },
      { label: '先同理後分享：', desc: '先同理對方的感受，再分享自己的觀點。' },
      { label: '放下完全客觀的執著：', desc: '試著理解不同人的狀況與接收方式。' },
    ],
    conclusion: '當開始用自己真正擅長的方式表達之後，原本冰冷的邏輯，也能變成貼近人心的溫暖話語。',
  },
  whyAstrology: {
    title: '跳脫標籤，掌握生命驅動力',
    paragraphs: [
      '我們希望跳脫星座的娛樂化標籤，透過比對與討論，帶領你掌握行為與決策背後的生命驅動力。',
      '占星學是一套具體、有框架的自我觀察系統，幫助我們看見自己的多元面向，規劃出最適合的個人成長路徑。',
    ],
    highlightParagraph: '我們相信占星，不是為了替人生下定論，而是能幫助每個人理解自己，重新做出新的選擇。',
  },
  instructors: {
    title: '星象引導顧問與心靈導師',
    list: [
      { name: '阿拉丁 Aladdin｜星象引導顧問', image: '/images/instructor_Aladdin.jpg' },
      { name: '顏惠貞 Gudhata｜占星性靈導師', image: '/images/instructor_Gudhata.jpg' },
    ],
  },
  details: {
    title: '活動資訊',
    time: '10/17（六）10:00–17:00',
    price: 'NT$ 4,000',
    earlyBird: '早鳥優惠價 NT$ 3,600 起｜早鳥優惠至 9/30',
    locationName: '益人咖啡－台中大道店',
    locationAddress: '407 臺中市西屯區福雅里台灣大道四段796號',
    mapQuery: '407 臺中市西屯區福雅里台灣大道四段796號+益人咖啡',
    mapEmbedUrl: 'https://maps.google.com/maps?q=407%E8%87%BA%E4%B8%AD%E5%B8%82%E8%A5%BF%E5%B1%AF%E5%8D%80%E7%A6%8F%E9%9B%85%E9%87%8C%E5%8F%B0%E7%81%A3%E5%A4%A7%E9%81%93%E5%9B%9B%E6%AE%B5796%E8%99%9F&t=&z=16&ie=UTF8&iwloc=&output=embed',
    registrationOpen: true,
    registerPath: '/register',
  },
  faqs: [
    {
      question: 'Q｜不確定精確出生時間，也可以報名參加嗎？',
      answer: [
        '可以參加！最推薦攜帶身分證至全台任一戶政事務所臨櫃申請「出生證明書」（每份約 10 元，現場即可領取且載有精確時分）。',
        '若暫時無法申請，亦可向出生醫院病歷室調閱（約 20~200 元），或向長輩詢問出生概略時段（例如早上 11 點初或半以後、早子還是晚子等），並在報名備註欄註明即可。',
      ],
    },
    {
      question: 'Q｜活動當天有包含午餐嗎？',
      answer: [
        '本活動費用不包含餐點，午餐時間敬請自理。您可於午餐時間自行安排外出用餐或稍作休息。',
      ],
    },
    {
      question: 'Q｜活動當天需要準備什麼？幾點開始報到？',
      answer: [
        '活動開始前 30 分鐘（09:30）開放報到，請參加者準時出席。請帶著輕鬆開放的心情與個人筆記用具即可。',
      ],
    },
    {
      question: 'Q｜活動會進行現場拍照與錄影記錄嗎？',
      answer: [
        '本次活動將進行現場攝影及錄影記錄，作為後續活動花絮回顧與宣傳使用。我們絕不會將您的個人影像資料移作其他商業用途或提供給無關第三方。',
      ],
    },
    {
      question: 'Q｜報名時填寫的出生個人資料會怎麼使用？',
      answer: [
        '您所填寫之出生年月日、時間與地點等星盤資訊，僅用於本次課程個人專屬星盤排盤計算、講義印製與現場教學引導。Galaxy Answers 星聲工作室恪守個人隱私保密原則，個案若具教學分享價值亦會在完全去識別化的前提下進行。',
      ],
    },
    {
      question: 'Q｜報名後如果有問題該怎麼聯繫主辦單位？',
      answer: [
        '您可以隨時透過官方信箱、LINE 官方帳號，或 Facebook 粉絲專頁與我們聯繫，我們將於 1-3 個工作日內盡速為您回覆確認。',
      ],
    },
  ],
  finalCta: {
    headline1: '別讓你的好想法，',
    headline2: '淹沒在無力感裡！',
    body: '給自己一個下午的時間，放下外在干擾，\n用占星，重新整理思考與表達方式。',
    tagDate: '10/17（六）｜ 益人咖啡－台中大道店',
    tagPrice: '早鳥優惠至 9/30',
    registrationOpen: true,
    registerPath: '/register',
  },
};

export const series3Data: CourseData = {
  id: 'series-3',
  seriesNumber: '03',
  seriesName: '系列三',
  planetsSummary: '太陽・火星・土星',
  theme: '推進目標達成，實現願景藍圖',
  banner: {
    src: '/images/course_banner_3.jpg',
    alt: '人生星方向系列三：太陽・火星・土星，推進目標達成，實現願景藍圖',
  },
  hero: {
    headlineLine1: '努力，真的就一定能',
    headlineLine2: '完成目標嗎？',
    date: '11/22（日）10:00–17:00',
    location: '台中｜實體小班課程',
  },
  resonance: {
    cards: [
      '每年都設定目標，最後卻沒幾個真正完成。',
      '明明知道下一步該做什麼，卻總是提不起勁開始。',
      '努力了一段時間，卻總在中途失去前進動力。',
    ],
    boxTitleLine1: '完成目標，可能不只是靠意志力，',
    boxTitleLine2: '而是你是否了解自己的運作模式。',
    boxDescLine1: '當我們還不清楚自己的動能與節奏，',
    boxDescLine2: '很容易在硬撐中耗盡熱情。',
    boxHighlight: '不是要更用力，而是要更了解自己。',
  },
  organize: {
    title: '這堂課程，要幫你整理什麼？',
    desc: '我們不急著要求你「立刻行動」，而是先看清自己的動能與盲點。',
    image: {
      src: '/images/series3_card1.jpg',
      alt: '這堂課程要幫你整理什麼',
    },
  },
  threeAngles: {
    title: '在這堂課程中，我們會從三個角度推進目標',
    desc: '占星學是一套有系統的自我觀察工具，幫助你看見自己的行為模式。',
    planets: [
      {
        symbol: '☉',
        name: '太陽',
        color: '#f4d03f',
        question: '我想達成什麼？',
        desc: '確認真正重視的事物，找到值得投入的方向。',
      },
      {
        symbol: '♂',
        name: '火星',
        color: '#e67e22',
        question: '我的動力在哪裡？',
        desc: '理解內在驅動機制，讓行動自然且持續。',
      },
      {
        symbol: '♄',
        name: '土星',
        color: '#d4ac0d',
        question: '如何走得穩健？',
        desc: '看清阻力與限制，建立持續累積的自律節奏。',
      },
    ],
    image: {
      src: '/images/series3_card2.jpg',
      alt: '太陽、火星、土星 核心架構',
    },
  },
  practice: {
    title: '你會在這堂課程得到什麼？',
    desc: '在這堂課程中，你不只會學到占星知識，\n還會實際把占星放回生活，建立一套適合自己的實踐系統。',
    steps: [
      {
        number: '01',
        title: '認識太陽・火星・土星',
        desc: '從三顆行星出發，理解個人的行動模式與內在動能。',
      },
      {
        number: '02',
        title: '對照生活與目標經驗',
        desc: '檢視過去卡關的盲點，看見影響落實的思考慣性。',
      },
      {
        number: '03',
        title: '釐清內在動力與阻力',
        desc: '辨認什麼能驅動自己，什麼是真正需要突破的限制。',
      },
      {
        number: '04',
        title: '完成個人目標藍圖',
        desc: '把理解轉化為一套持續可行的自律與實踐策略。',
      },
    ],
    cardImage: {
      src: '/images/series3_card3.jpg',
      alt: '課程內容與實踐方法',
    },
  },
  takeaway: {
    image: {
      src: '/images/series3_card4.jpg',
      alt: '一天結束後你會帶走什麼',
    },
    quote: '你能帶走的，不只是目標設定的方法，更是一套在遇到瓶頸與卡關時，還能穩定前進的',
    quoteHighlight: '個人實踐系統',
    quoteSuffix: '。',
  },
  story: {
    badge: '我們的真實案例',
    title: '工程師學員的發現：不是意志力不足，而是思考慣性',
    quote: '「我一直希望把事情做到最好，卻總在各方期待中疲於奔命。」',
    introParagraphs: [
      '一位擔任工程師的學員，分享自己在工作與專案推進上的困擾。他總是希望每一次合作都能面面俱到，甚至不自覺退一步妥協，結果讓核心目標一再延宕，常常懷疑自己是否缺乏執行力。',
      '透過占星的解析，我們發現這不是行動力不足，而是太想照顧所有需求，導致精力分散，缺乏堅定的決策優先順序。',
    ],
    actionIntro: '於是，我們陪伴他重新梳理適合自己的前進方式：',
    actions: [
      { label: '確立核心目標：', desc: '始終把最關鍵的事情放在第一優先。' },
      { label: '依循價值決策：', desc: '相信自己的專業判斷，勇敢做出取捨。' },
      { label: '承擔前進責任：', desc: '適度放下皆大歡喜的執著，專注把結果落實。' },
    ],
    conclusion: '釐清運作模式後，他不再陷入自我懷疑，而是穩健推進真正重要的成果。',
  },
  whyAstrology: {
    title: '為什麼我們使用占星？',
    paragraphs: [
      '我們使用占星，不是為了替人生下定論，也不是給自己貼標籤。',
      '是因為它提供了一套客觀的觀察架構，幫助你看清內在動能與行動模式。',
    ],
    highlightParagraph: '跳脫標籤・看清盲點，建立屬於自己的目標實踐系統。',
  },
  instructors: {
    title: '我們會教你這套實用的方法！',
    list: [
      { name: '阿拉丁 Aladdin｜星象引導顧問', image: '/images/instructor_Aladdin.jpg' },
      { name: '顏惠貞 Gudhata｜占星性靈導師', image: '/images/instructor_Gudhata.jpg' },
    ],
  },
  details: {
    title: '活動資訊',
    time: '11/22（日）10:00–17:00',
    price: 'NT$ 4,000',
    earlyBird: '早鳥優惠價 NT$ 3,600 起',
    locationName: '益人咖啡－台中大道店',
    locationAddress: '407 臺中市西屯區福雅里台灣大道四段796號',
    mapQuery: '407臺中市西屯區福雅里台灣大道四段796號+益人咖啡',
    mapEmbedUrl: 'https://maps.google.com/maps?q=407%E8%87%BA%E4%B8%AD%E5%B8%82%E8%A5%BF%E5%B1%AF%E5%8D%80%E7%A6%8F%E9%9B%85%E9%87%8C%E5%8F%B0%E7%81%A3%E5%A4%A7%E9%81%93%E5%9B%9B%E6%AE%B5796%E8%99%9F&t=&z=16&ie=UTF8&iwloc=&output=embed',
    registrationOpen: false,
    registerNotice: '報名尚未開放，敬請期待。',
  },
  faqs: [
    {
      question: 'Q｜不確定精確出生時間，也可以報名參加嗎？',
      answer: [
        '可以參加！最推薦攜帶身分證至全台任一戶政事務所臨櫃申請「出生證明書」（每份約 10-15 元，現場即可領取且載有精確時分）。',
        '若暫時無法申請，亦可向出生醫院病歷室調閱（約 20~200 元），或向長輩詢問出生概略時段（例如早上 11 點初或半以後、早子還是晚子等），並在報名備註欄註明即可。',
      ],
    },
    {
      question: 'Q｜活動當天有包含午餐嗎？',
      answer: [
        '本活動費用不包含餐點，午餐時間敬請自理。您可於午餐時間自行安排外出用餐或稍作休息。',
      ],
    },
    {
      question: 'Q｜活動當天需要準備什麼？幾點開始報到？',
      answer: [
        '活動開始前 30 分鐘（09:30）開放報到，請參加者準時出席。請帶著輕鬆開放的心情與個人筆記用具即可。',
      ],
    },
    {
      question: 'Q｜活動會進行現場拍照與錄影記錄嗎？',
      answer: [
        '本次活動將進行現場攝影及錄影記錄，作為後續活動花絮回顧與宣傳使用。我們絕不會將您的個人影像資料移作其他商業用途或提供給無關第三方。',
      ],
    },
    {
      question: 'Q｜報名時填寫的出生個人資料會怎麼使用？',
      answer: [
        '您所填寫之出生年月日、時間與地點等星盤資訊，僅用於本次課程個人專屬星盤排盤計算、講義印製與現場教學引導。Galaxy Answers 星聲工作室恪守個人隱私保密原則，個案若具教學分享價值亦會在完全去識別化的前提下進行。',
      ],
    },
    {
      question: 'Q｜報名後如果有問題該怎麼聯繫主辦單位？',
      answer: [
        '您可以隨時透過官方信箱、LINE 官方帳號，或 Facebook 粉絲專頁與我們聯繫，我們將於 1-3 個工作日內盡速為您回覆確認。',
      ],
    },
  ],
  finalCta: {
    headline1: '如果你希望不再只是，',
    headline2: '反覆嘗試各種方法',
    body: '給自己一個下午的時間，\n建立一套能持續完成目標的推進系統。',
    tagDate: '11/22（日）｜ 益人咖啡－台中大道店',
    tagPrice: '早鳥預定中',
    registrationOpen: false,
    notice: '報名尚未開放，敬請期待。',
  },
};
