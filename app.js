const navigationEntry=performance.getEntriesByType('navigation')[0];
const isPageReload=navigationEntry?.type==='reload';
if(isPageReload){
  if('scrollRestoration' in history)history.scrollRestoration='manual';
  if(location.hash)history.replaceState(null,'',location.pathname+location.search);
  window.addEventListener('pageshow',()=>{
    document.documentElement.style.scrollBehavior='auto';
    window.scrollTo(0,0);
  },{once:true});
}

const copy = {
  ko: {
    navSignature:'시그니처',navWorks:'시술 결과',navDirector:'원장 소개',navVisit:'오시는 길',navProcess:'시술 과정',quickDesign:'1:1 맞춤 디자인',book:'네이버 예약',heroKicker:'BUSAN · KOREA',heroTopRight:'PERSONAL BROW DESIGN STUDIO',heroCaption:'당신의 인상에 오래 어울리는 디자인',heroEyebrow:'BEAUTY, IN YOUR OWN BALANCE',heroTitle:'나답게 선명해지는 아름다움.',heroText:'얼굴의 균형과 표정을 살펴, 지금의 나에게 자연스럽게 어울리는 눈썹을 디자인합니다.',discover:'뷰티데이트 알아보기',heroBottomLeft:'SUYEON CHO · DIRECTOR',introMeta:'A thoughtful approach to semi-permanent beauty',introTitle:'조용하지만 분명하게, 당신다운 아름다움.',introText:'뷰티데이트는 유행하는 모양을 그대로 따르기보다, 얼굴형과 눈매, 기존 눈썹의 결을 세심하게 살펴 한 사람에게 어울리는 균형을 찾습니다.',ourApproach:'우리의 디자인 방식',featureQuote:'“좋은 디자인은 당신의 얼굴에 원래 있었던 것처럼.”',featureNote:'1:1 상담부터 디자인 확인, 시술 후 안내까지 조수연 원장이 함께합니다.',consult:'맞춤 상담 문의',worksMeta:'A collection of real brow designs',worksTitle:'작은 결의 차이가 전체 인상을 바꿉니다.',worksText:'실제 고객의 시술 결과를 살펴보세요. 피부와 기존 눈썹에 따라 결과는 달라질 수 있습니다.',galleryCaption1:'SOFT & NATURAL',galleryCaption2:'BALANCED ARCH',galleryCaption3:'A NATURAL FINISH',galleryFootnote:'사진은 실제 시술 사례입니다. 고객의 사진 사용 동의를 받은 뒤 게시해 주세요.',processMeta:'Considered at every step',processTitle:'서두르지 않고, 함께 완성합니다.',step1Title:'상담',step1Text:'원하는 분위기와 현재 눈썹 상태, 피부 컨디션을 먼저 확인합니다.',step2Title:'디자인 확인',step2Text:'얼굴의 비율과 눈매에 맞춰 디자인하고, 시술 전 충분히 조율합니다.',step3Title:'섬세한 시술',step3Text:'확정한 디자인을 바탕으로 차분하게 시술을 진행합니다.',step4Title:'사후 안내',step4Text:'시술 후 관리 방법과 리터치 관련 내용을 안내해 드립니다.',directorMeta:'Beautydate, Busan',directorEyebrow:'DIRECTOR · SUYEON CHO',directorTitle:'12년의 경험, 한 사람을 위한 디자인.',directorText:'반영구 시술 12년, 샵 운영 8년의 경험을 바탕으로 고객 한 분 한 분의 얼굴에 어울리는 디자인을 고민합니다. 충분히 듣고, 함께 확인하고, 세심하게 마무리합니다.',yearsService:'YEARS OF EXPERIENCE',yearsStudio:'YEARS OF STUDIO',studioMeta:'A calm space, just for you',studioTitle:'편안한 마음으로 머무는 곳.',visitMeta:'We look forward to meeting you',visitTitle:'부산에서 만나요.',visitText:'정확한 주소와 운영 시간, 찾아오시는 방법을 확인해 업데이트할 예정입니다.',addressLabel:'ADDRESS',addressPending:'부산 · 상세 주소 업데이트 예정',hoursLabel:'HOURS',hoursPending:'운영 시간 확인 후 업데이트 예정',contactTitle:'나에게 어울리는 디자인, 함께 이야기해요.',contactText:'전화·카카오채널·네이버 예약 중 편한 방법으로 문의해 주세요.',bookingPending:'예약 링크 업데이트 예정',channelPending:'카카오톡 상담 링크 업데이트 예정',footerName:'뷰티데이트 · 조수연 원장',footerNotice:'부산 · 상세 사업자 및 연락처 정보 업데이트 예정',backTop:'맨 위로 ↑',mobileCta:'네이버 예약',description:'부산 뷰티데이트. 조수연 원장의 1:1 맞춤 눈썹 반영구 디자인과 시술 포트폴리오를 만나보세요.'
  },
  ja: {
    navSignature:'シグネチャー',navWorks:'施術事例',navDirector:'代表紹介',navVisit:'アクセス',navProcess:'施術の流れ',quickDesign:'一人ひとりに合わせたデザイン',book:'Naverで予約',heroKicker:'BUSAN · KOREA',heroTopRight:'PERSONAL BROW DESIGN STUDIO',heroCaption:'あなたの印象に長くなじむデザイン',heroEyebrow:'BEAUTY, IN YOUR OWN BALANCE',heroTitle:'私らしさが、自然に際立つ。',heroText:'お顔のバランスや表情を見つめ、今のあなたに自然になじむ眉をデザインします。',discover:'ビューティーデートについて',heroBottomLeft:'SUYEON CHO · DIRECTOR',introMeta:'半永久メイクに、丁寧なアプローチを',introTitle:'静かに、でも確かに。あなたらしい美しさ。',introText:'流行の形をそのまま取り入れるのではなく、顔立ちや目元、今ある眉の毛流れを丁寧に見ながら、その人に似合うバランスを探します。',ourApproach:'デザインへのこだわり',featureQuote:'「良いデザインは、もともとあなたの顔にあったように。」',featureNote:'1対1のカウンセリングからデザイン確認、施術後のご案内まで、チョ・スヨンが担当します。',consult:'カウンセリングを申し込む',worksMeta:'実際の眉デザインをご紹介',worksTitle:'小さな毛流れの違いが、印象を変える。',worksText:'実際のお客様の施術例をご覧ください。肌や自眉の状態により仕上がりには個人差があります。',galleryCaption1:'SOFT & NATURAL',galleryCaption2:'BALANCED ARCH',galleryCaption3:'A NATURAL FINISH',galleryFootnote:'掲載写真は実際の施術例です。お客様の写真使用許可を得たうえで掲載してください。',processMeta:'一つひとつの工程を大切に',processTitle:'急がず、一緒に仕上げます。',step1Title:'カウンセリング',step1Text:'ご希望の雰囲気や現在の眉、肌の状態を確認します。',step2Title:'デザイン確認',step2Text:'顔のバランスや目元に合わせてデザインし、施術前に十分に調整します。',step3Title:'丁寧な施術',step3Text:'確認したデザインに沿って、落ち着いて施術を進めます。',step4Title:'アフターケア',step4Text:'施術後のケア方法とリタッチについてご案内します。',directorMeta:'Beautydate · 釜山',directorEyebrow:'DIRECTOR · SUYEON CHO',directorTitle:'12年の経験を、一人ひとりのデザインに。',directorText:'アートメイク歴12年、サロン運営8年の経験をもとに、お客様一人ひとりに似合うデザインを考えています。お話を伺い、一緒に確認し、丁寧に仕上げます。',yearsService:'施術経験',yearsStudio:'サロン運営',studioMeta:'お客様のための穏やかな空間',studioTitle:'心地よく過ごせる場所。',visitMeta:'お会いできるのを楽しみにしています',visitTitle:'釜山でお待ちしています。',visitText:'住所、営業時間、アクセス方法は確認後に掲載します。',addressLabel:'ADDRESS',addressPending:'釜山 · 詳細住所は後日掲載',hoursLabel:'HOURS',hoursPending:'営業時間は確認後に掲載',contactTitle:'あなたに似合うデザインを、一緒に相談しましょう。',contactText:'お電話、Kakaoチャンネル、Naver予約からお問い合わせください。',bookingPending:'予約リンク準備中',channelPending:'カカオトーク相談リンク準備中',footerName:'Beautydate · チョ・スヨン',footerNotice:'釜山 · 事業者情報・連絡先は後日掲載',backTop:'トップへ ↑',mobileCta:'Naverで予約',description:'釜山のBeautydate。チョ・スヨン代表による一人ひとりに合わせた眉アートメイクをご紹介します。'
  },
  'zh-TW': {
    navSignature:'招牌設計',navWorks:'作品案例',navDirector:'設計師介紹',navVisit:'交通方式',navProcess:'服務流程',quickDesign:'一對一量身設計',book:'Naver 預約',heroKicker:'BUSAN · KOREA',heroTopRight:'PERSONAL BROW DESIGN STUDIO',heroCaption:'為你的神情打造耐看的眉型',heroEyebrow:'BEAUTY, IN YOUR OWN BALANCE',heroTitle:'自然展現，專屬於你的美。',heroText:'細看臉部比例與神情，為現在的你設計自然合適的眉型。',discover:'認識 Beautydate',heroBottomLeft:'SUYEON CHO · DIRECTOR',introMeta:'細緻呈現半永久美感',introTitle:'安靜而鮮明，展現你的樣子。',introText:'不盲從流行眉型，而是仔細觀察臉型、眼神與原生眉毛走向，找到最適合每個人的平衡。',ourApproach:'了解我們的設計方式',featureQuote:'「好的設計，就像原本就屬於你的臉。」',featureNote:'從一對一諮詢、確認眉型到術後照護，皆由趙秀妍設計師親自服務。',consult:'預約個人諮詢',worksMeta:'真實眉型設計作品',worksTitle:'眉毛細節的不同，改變整體神情。',worksText:'看看實際顧客的施作成果。效果會因膚況與原生眉毛而有所不同。',galleryCaption1:'SOFT & NATURAL',galleryCaption2:'BALANCED ARCH',galleryCaption3:'A NATURAL FINISH',galleryFootnote:'照片為實際施作案例，請於取得顧客照片使用同意後再公開。',processMeta:'重視每一個步驟',processTitle:'不急不趕，一起完成。',step1Title:'諮詢',step1Text:'先了解你的期待、目前眉型與肌膚狀況。',step2Title:'確認設計',step2Text:'依照臉部比例與眼型設計，施作前充分溝通確認。',step3Title:'細緻施作',step3Text:'依照確認後的眉型，仔細完成施作。',step4Title:'術後照護',step4Text:'提供術後照護方式與補色相關說明。',directorMeta:'Beautydate · 釜山',directorEyebrow:'DIRECTOR · SUYEON CHO',directorTitle:'12年經驗，為每個人細心設計。',directorText:'擁有12年半永久彩妝經驗與8年店務經驗，為每位顧客思考適合自己的眉型。仔細聆聽、一起確認，再用心完成。',yearsService:'施作經驗',yearsStudio:'店務經驗',studioMeta:'為你準備的舒心空間',studioTitle:'安心自在的美麗時光。',visitMeta:'期待與你相見',visitTitle:'釜山見。',visitText:'詳細地址、營業時間與交通方式確認後將更新於此。',addressLabel:'ADDRESS',addressPending:'釜山 · 詳細地址即將更新',hoursLabel:'HOURS',hoursPending:'營業時間確認後更新',contactTitle:'一起聊聊，找到適合你的眉型。',contactText:'歡迎透過電話、Kakao頻道或 Naver 預約聯絡我們。',bookingPending:'預約連結即將更新',channelPending:'KakaoTalk 諮詢連結即將更新',footerName:'Beautydate · 趙秀妍設計師',footerNotice:'釜山 · 商家與聯絡資訊即將更新',backTop:'回到頂端 ↑',mobileCta:'Naver 預約',description:'釜山 Beautydate，趙秀妍設計師為你量身打造自然眉型與半永久眉毛設計。'
  },
  en: {
    navSignature:'Signature',navWorks:'Selected works',navDirector:'Director',navVisit:'Visit us',navProcess:'Treatment flow',quickDesign:'One-to-one design',book:'Book on Naver',heroKicker:'BUSAN · KOREA',heroTopRight:'PERSONAL BROW DESIGN STUDIO',heroCaption:'A design that feels like you',heroEyebrow:'BEAUTY, IN YOUR OWN BALANCE',heroTitle:'A clearer kind of you.',heroText:'We look at your features and expression to create brows that feel naturally yours.',discover:'Discover Beautydate',heroBottomLeft:'SUYEON CHO · DIRECTOR',introMeta:'A thoughtful approach to semi-permanent beauty',introTitle:'Quietly distinct. Entirely your own.',introText:'Rather than follow a passing trend, we consider your face shape, eyes and natural brow pattern to find a balance that belongs to you.',ourApproach:'Our design approach',featureQuote:'“The best design feels as if it was always yours.”',featureNote:'Director Suyeon Cho guides you from one-to-one consultation through design, treatment and aftercare.',consult:'Request a consultation',worksMeta:'A collection of real brow designs',worksTitle:'Small details. A different impression.',worksText:'Explore real client results. Outcomes vary with skin and natural brow conditions.',galleryCaption1:'SOFT & NATURAL',galleryCaption2:'BALANCED ARCH',galleryCaption3:'A NATURAL FINISH',galleryFootnote:'These are real treatment examples. Publish client photos only with their permission.',processMeta:'Considered at every step',processTitle:'Unhurried, made together.',step1Title:'Consultation',step1Text:'We begin with your goals, current brows and skin condition.',step2Title:'Design review',step2Text:'We shape a design for your features and adjust it together before treatment.',step3Title:'Careful treatment',step3Text:'Your confirmed design guides a calm, precise treatment.',step4Title:'Aftercare',step4Text:'We explain aftercare and retouch options for your brows.',directorMeta:'Beautydate, Busan',directorEyebrow:'DIRECTOR · SUYEON CHO',directorTitle:'12 years of experience. A design for you.',directorText:'With 12 years in semi-permanent beauty and 8 years running a studio, Suyeon considers a design that suits each client. She listens, reviews the shape with you and finishes with care.',yearsService:'YEARS OF EXPERIENCE',yearsStudio:'YEARS OF STUDIO',studioMeta:'A calm space, just for you',studioTitle:'A place to feel at ease.',visitMeta:'We look forward to meeting you',visitTitle:'Meet us in Busan.',visitText:'Our exact address, hours and directions will be added once confirmed.',addressLabel:'ADDRESS',addressPending:'Busan · Full address coming soon',hoursLabel:'HOURS',hoursPending:'Hours will be updated soon',contactTitle:'Let’s find a design that feels like you.',contactText:'Call, contact us on Kakao Channel, or book on Naver.',bookingPending:'Booking link coming soon',channelPending:'KakaoTalk link coming soon',footerName:'Beautydate · Director Suyeon Cho',footerNotice:'Busan · Business and contact details coming soon',backTop:'Back to top ↑',mobileCta:'Book on Naver',description:'Beautydate in Busan. Discover natural, personalized semi-permanent brow design by director Suyeon Cho.'
  }
};

Object.assign(copy.ko,{contactText:'전화·카카오채널·네이버 예약 중 편한 방법으로 문의해 주세요.',bookingCall:'전화로 예약 문의',kakaoInquiry:'카카오채널 문의',naverBooking:'네이버 예약 바로가기',mobileCta:'전화로 예약 문의',mobileBookingPrompt:'네이버 예약 · 카카오 상담',footerNotice:'부산 · 전화 010-7597-8444'});
Object.assign(copy.ja,{contactText:'お電話、Kakaoチャンネル、Naver予約からお問い合わせください。',bookingCall:'電話で予約する',kakaoInquiry:'Kakaoチャンネルで相談',naverBooking:'Naver予約はこちら',mobileCta:'電話で予約する',mobileBookingPrompt:'予約・お問い合わせ',footerNotice:'釜山 · 電話 010-7597-8444'});
Object.assign(copy['zh-TW'],{contactText:'歡迎透過電話、Kakao頻道或 Naver 預約聯絡我們。',bookingCall:'電話預約',kakaoInquiry:'Kakao 頻道諮詢',naverBooking:'前往 Naver 預約',mobileCta:'電話預約',mobileBookingPrompt:'快速預約・諮詢',footerNotice:'釜山 · 電話 010-7597-8444'});
Object.assign(copy.en,{contactText:'Contact us by phone, Kakao Channel, or Naver Booking.',bookingCall:'Call to book',kakaoInquiry:'Kakao Channel enquiry',naverBooking:'Book on Naver',mobileCta:'Call to book',mobileBookingPrompt:'Quick booking · enquiry',footerNotice:'Busan · Phone 010-7597-8444'});
Object.assign(copy.ko,{navProcess:'시술 과정',quickDesign:'1:1 맞춤 디자인',book:'네이버 예약'});
Object.assign(copy.ja,{navProcess:'施術の流れ',quickDesign:'一人ひとりに合わせたデザイン',book:'Naverで予約'});
Object.assign(copy['zh-TW'],{navProcess:'服務流程',quickDesign:'一對一量身設計',book:'Naver 預約'});
Object.assign(copy.en,{navProcess:'Treatment flow',quickDesign:'One-to-one design',book:'Book on Naver'});
Object.assign(copy.ko,{navOffer:'이벤트',eventTitle:'반영구 눈썹 이벤트',eventIntro:'1:1 디자인 상담부터 시술 전 디자인 확인까지, 조수연 원장이 함께합니다.',eventRegular:'정가',eventSale:'',eventForeign:'외국인 고객 눈썹 시술가',eventFineprint:'달러 표기는 참고 환산가이며, 최종 금액은 상담 시 확인해 주세요.'});
Object.assign(copy.ja,{navOffer:'特別価格',eventTitle:'眉アートメイク特別価格',eventIntro:'1対1のデザイン相談から施術前の確認まで、チョ・スヨンが担当します。',eventRegular:'通常価格',eventSale:'',eventForeign:'海外のお客様向け価格',eventFineprint:'米ドル表記は参考換算額です。最終料金はご相談時にご確認ください。'});
Object.assign(copy['zh-TW'],{navOffer:'優惠價格',eventTitle:'霧眉半永久優惠價',eventIntro:'從一對一設計諮詢到施作前確認，由趙秀妍設計師親自服務。',eventRegular:'原價',eventSale:'',eventForeign:'海外顧客眉毛施作價格',eventFineprint:'美元標價為參考換算金額，最終價格請於諮詢時確認。'});
Object.assign(copy.en,{navOffer:'Special price',eventTitle:'Special price on brow design',eventIntro:'Director Suyeon Cho guides you from one-to-one design consultation through the pre-treatment review.',eventRegular:'Regular price',eventSale:'',eventForeign:'Price for international clients',eventFineprint:'USD is an approximate conversion. Please confirm the final price during your consultation.'});
Object.assign(copy.ja,{contactText:'InstagramまたはLINEからお問い合わせください。',eventTitle:'施術メニュー・料金',eventIntro:'1対1のカウンセリングから施術前のデザイン確認まで、チョ・スヨンが担当します。',eventForeign:'海外のお客様向け料金',faqThreeA:'InstagramまたはLINEからお問い合わせください。旅行日程に合わせ、ご希望の時間をお知らせください。',foreignMenuHeading:'海外のお客様向け施術メニュー',serviceNatural:'ナチュラル眉',serviceCombo:'コンボ眉',serviceShadow:'パウダー眉',serviceEyeliner:'アイライン',serviceHairline:'ヘアライン',serviceLip:'リップ',premiumRetouch:'プレミアムリタッチ',retouchTerms:'4か月以内は無料 · 6か月以内は50%割引 · 1年以内は30%割引',foreignPigment:'高品質認証色素を使用し、ニードルはお客様ごとに交換します。',foreignCardFee:'海外カード決済手数料込み',foreignSchedule:'旅行日程に合わせ、通常営業時間外や定休日も予約時間を調整いたします。',foreignPriceNote:'料金は韓国ウォン（KRW）表記です。最終料金はご予約前にご確認ください。',bookingHeading:'LINEで予約・お問い合わせ',instagramLink:'Instagram',lineLink:'LINEで予約',whatsappLink:'WhatsApp'});
Object.assign(copy['zh-TW'],{contactText:'歡迎透過 Instagram 或 LINE 聯絡我們。',eventTitle:'施作項目與價格',eventIntro:'從一對一諮詢到施作前確認眉型，皆由趙秀妍設計師親自服務。',eventForeign:'海外顧客施作價格',faqThreeA:'歡迎透過 Instagram 或 LINE 聯絡我們，並告知方便配合的旅遊日期與時段。',foreignMenuHeading:'海外顧客施作項目',serviceNatural:'自然眉',serviceCombo:'組合眉',serviceShadow:'粉霧眉',serviceEyeliner:'眼線',serviceHairline:'髮際線',serviceLip:'唇部',premiumRetouch:'尊榮補色',retouchTerms:'4個月內免費 · 6個月內享5折 · 1年內享7折',foreignPigment:'使用高品質認證色乳，並為每位顧客單獨更換針具。',foreignCardFee:'已包含海外信用卡手續費',foreignSchedule:'可配合旅客行程協調預約時段，包含一般營業時間外及公休日。',foreignPriceNote:'價格以韓元（KRW）標示，實際金額請於預約前確認。',bookingHeading:'透過 LINE 預約與諮詢',instagramLink:'Instagram',lineLink:'LINE 預約',whatsappLink:'WhatsApp'});
Object.assign(copy.en,{contactText:'Message us on Instagram and WhatsApp to arrange your appointment.',eventTitle:'Treatment menu & pricing',eventIntro:'Director Suyeon Cho guides you from a one-to-one consultation through the pre-treatment design review.',eventForeign:'Rates for international clients',faqThreeA:'Message us on Instagram or WhatsApp and share your travel dates and preferred appointment time.',foreignMenuHeading:'International treatment menu',serviceNatural:'Natural brows',serviceCombo:'Combo brows',serviceShadow:'Powder brows',serviceEyeliner:'Eyeliner',serviceHairline:'Hairline',serviceLip:'Lip blush',premiumRetouch:'Premium retouch',retouchTerms:'Free within 4 months · 50% off within 6 months · 30% off within 1 year',foreignPigment:'Premium certified pigments; a separate needle is used for each client.',foreignCardFee:'Overseas card processing fees included',foreignSchedule:'We can arrange appointments around your travel plans, including outside regular business hours and on days off.',foreignPriceNote:'Prices are listed in KRW (Korean won). Please confirm the final amount before booking.',bookingHeading:'Book your appointment',instagramLink:'Instagram',lineLink:'LINE',whatsappLink:'Book on WhatsApp'});
Object.assign(copy.ko,{approachLabel:'01 — OUR DESIGN',approachMeta:'Designed around your features',approachTitle:'유행하는 모양보다, 나에게 어울리는 균형.',approachText:'얼굴형과 눈매, 기존 눈썹의 결을 살펴 지금의 인상에 자연스럽게 어울리는 디자인을 찾습니다.',approachOneTitle:'먼저 충분히 듣고',approachOneText:'원하는 분위기와 평소 메이크업 습관을 상담합니다.',approachTwoTitle:'함께 디자인을 보고',approachTwoText:'시술 전 눈썹 모양을 확인하고 조율합니다.',approachThreeTitle:'차분히 마무리합니다',approachThreeText:'확인한 디자인을 바탕으로 세심하게 시술합니다.',concernsLabel:'02 — DOES THIS FEEL FAMILIAR?',concernsMeta:'A little more ease, every morning',concernsTitle:'눈썹을 그릴 때마다 마음에 걸리는 게 있나요?',concernsText:'매일 반복되는 작은 불편부터, 처음 시술을 앞둔 걱정까지 편하게 이야기해 주세요.',concernOne:'양쪽 눈썹 모양을 맞추기 어려워요.',concernTwo:'빈 곳을 채우다 보면 인상이 진해져요.',concernThree:'매일 그리는 시간을 조금 줄이고 싶어요.',concernFour:'처음이라 어떤 모양이 어울릴지 모르겠어요.',concernsFoot:'서두르지 않고 상담한 뒤, 얼굴과 취향에 맞는 방향을 함께 찾아갑니다.',faqMeta:'Good to know before booking',faqTitle:'예약 전에 궁금한 점, 먼저 확인해 보세요.',faqText:'시술 전 충분히 상담하고, 궁금한 점은 예약 전에 편하게 문의하실 수 있어요.',faqOneQ:'시술 전에 디자인을 확인할 수 있나요?',faqOneA:'상담 후 디자인을 제안하고, 시술 전에 함께 확인하고 조율합니다.',faqTwoQ:'시술 결과가 모두 똑같이 나오나요?',faqTwoA:'피부와 기존 눈썹 상태에 따라 결과에 차이가 있을 수 있습니다.',faqThreeQ:'예약은 어떻게 하면 되나요?',faqThreeA:'네이버 예약 또는 카카오채널로 문의해 주세요. 전화 문의도 가능합니다.',faqFourQ:'리터치 조건과 가격은 어떻게 되나요?',faqFourA:'리터치 적용 기간과 비용은 예약 전에 카카오채널로 확인해 주세요.',recommendMeta:'Who this may suit',recommendTitle:'이런 분이라면, 편하게 상담부터 시작해 보세요.',recommendOne:'얼굴형과 눈매에 맞는 눈썹을 찾고 싶은 분',recommendTwo:'너무 진하거나 인위적인 느낌이 걱정되는 분',recommendThree:'시술 전 모양을 함께 확인하고 싶은 분',recommendFour:'처음이라 차근차근 설명을 듣고 싶은 분',visitMeta:'We look forward to meeting you',visitTitle:'부산에서 만나요.',visitText:'정확한 주소와 운영 시간은 예약 전에 문의해 주세요.',addressLabel:'ADDRESS',addressPending:'부산 · 상세 주소는 확인 후 안내',hoursLabel:'HOURS',hoursPending:'운영 시간은 문의해 주세요',galleryFootnote:'실제 시술 사례이며, 결과는 피부와 기존 눈썹 상태에 따라 다를 수 있습니다.'});
Object.assign(copy.ja,{approachLabel:'01 — デザイン',approachMeta:'お顔立ちに合わせたデザイン',approachTitle:'流行の形より、あなたに似合うバランス。',approachText:'顔立ちや目元、今ある眉の毛流れを見ながら、自然になじむデザインを探します。',approachOneTitle:'まずは丁寧にお話を聞き',approachOneText:'ご希望の雰囲気や普段のメイクを伺います。',approachTwoTitle:'一緒にデザインを確認し',approachTwoText:'施術前に眉の形を見て調整します。',approachThreeTitle:'落ち着いて仕上げます',approachThreeText:'確認したデザインに沿って丁寧に施術します。',concernsLabel:'02 — こんなお悩みは？',concernsMeta:'毎朝を少し心地よく',concernsTitle:'眉を描くたびに、気になることはありますか？',concernsText:'毎日の小さなお悩みから初めての施術への不安まで、お気軽にご相談ください。',concernOne:'左右の眉の形をそろえるのが難しい。',concernTwo:'足りない部分を描くと濃く見える。',concernThree:'毎朝眉を描く時間を少し減らしたい。',concernFour:'初めてなので似合う形がわからない。',concernsFoot:'ゆっくり相談しながら、お顔とお好みに合う形を一緒に探します。',faqMeta:'ご予約前にご確認ください',faqTitle:'ご予約前の疑問にお答えします。',faqText:'施術前にしっかり相談できます。気になることはご予約前にお問い合わせください。',faqOneQ:'施術前にデザインを確認できますか？',faqOneA:'カウンセリング後にデザインをご提案し、施術前に一緒に確認・調整します。',faqTwoQ:'施術結果は誰でも同じですか？',faqTwoA:'肌や自眉の状態によって仕上がりには個人差があります。',faqThreeQ:'予約方法を教えてください。',faqThreeA:'Naver予約またはKakaoチャンネルからご連絡ください。電話でもお問い合わせいただけます。',faqFourQ:'リタッチの条件と料金を教えてください。',faqFourA:'リタッチの期間と料金はご予約前にKakaoチャンネルでご確認ください。',recommendMeta:'こんな方におすすめ',recommendTitle:'まずはお気軽にご相談ください。',recommendOne:'顔立ちや目元に合う眉を見つけたい方',recommendTwo:'濃すぎる眉や不自然な印象が心配な方',recommendThree:'施術前に形を一緒に確認したい方',recommendFour:'初めてなので丁寧な説明を聞きたい方',visitMeta:'ご来店をお待ちしております',visitTitle:'釜山でお会いしましょう。',visitText:'詳しい住所と営業時間はご予約前にお問い合わせください。',addressLabel:'住所',addressPending:'釜山 · 詳細住所はお問い合わせください',hoursLabel:'営業時間',hoursPending:'営業時間はお問い合わせください',galleryFootnote:'実際の施術例です。仕上がりは肌や自眉の状態によって異なります。'});
Object.assign(copy['zh-TW'],{approachLabel:'01 — 設計理念',approachMeta:'依照五官量身設計',approachTitle:'不追隨流行，只尋找適合你的眉型。',approachText:'仔細觀察臉型、眼神與原有眉毛走向，設計自然融入個人氣質的眉型。',approachOneTitle:'先聆聽你的想法',approachOneText:'了解你喜歡的感覺與平常的上妝習慣。',approachTwoTitle:'一起確認眉型',approachTwoText:'施作前先確認並調整眉型。',approachThreeTitle:'細心完成施作',approachThreeText:'依照確認過的設計細緻施作。',concernsLabel:'02 — 你也有這些困擾嗎？',concernsMeta:'讓每個早晨更從容',concernsTitle:'每次畫眉時，是否總有些在意的地方？',concernsText:'無論是每天的小困擾，或第一次施作前的不安，都歡迎輕鬆聊聊。',concernOne:'左右眉型總是很難畫得一致。',concernTwo:'補上空隙後，整體看起來太濃。',concernThree:'希望減少每天畫眉的時間。',concernFour:'第一次施作，不知道哪種眉型適合自己。',concernsFoot:'我們會先慢慢諮詢，一起找出符合臉型與喜好的方向。',faqMeta:'預約前值得了解的資訊',faqTitle:'預約前有疑問？先看看這裡。',faqText:'施作前會充分諮詢，也歡迎預約前先詢問任何問題。',faqOneQ:'施作前可以確認眉型嗎？',faqOneA:'諮詢後提出設計，並在施作前一起確認與調整。',faqTwoQ:'每個人的施作成果都一樣嗎？',faqTwoA:'成果會依膚況與原有眉毛狀態有所不同。',faqThreeQ:'如何預約？',faqThreeA:'請透過 Naver 預約或 Kakao 頻道聯絡，也可以來電詢問。',faqFourQ:'補色的條件與費用如何計算？',faqFourA:'補色期限與費用請在預約前透過 Kakao 頻道確認。',recommendMeta:'推薦給這樣的你',recommendTitle:'如果你也有這些想法，歡迎先來諮詢。',recommendOne:'想找到適合臉型與眼神的眉型',recommendTwo:'擔心眉毛太濃或不自然',recommendThree:'希望施作前一起確認眉型',recommendFour:'第一次體驗，希望先聽完整說明',visitMeta:'期待與你相見',visitTitle:'釜山見。',visitText:'詳細地址與營業時間，請於預約前洽詢。',addressLabel:'地址',addressPending:'釜山 · 詳細地址請洽詢',hoursLabel:'營業時間',hoursPending:'營業時間請洽詢',galleryFootnote:'照片為實際施作案例，成果會因膚況與原有眉毛狀態而異。'});
Object.assign(copy.en,{approachLabel:'01 — OUR DESIGN',approachMeta:'Designed around your features',approachTitle:'Less about trends. More about your balance.',approachText:'We consider your face shape, eyes and natural brow pattern to find a design that feels like you.',approachOneTitle:'We start by listening',approachOneText:'Tell us about the look you want and your daily makeup routine.',approachTwoTitle:'We review the design together',approachTwoText:'We check and adjust your brow shape before treatment.',approachThreeTitle:'We finish with care',approachThreeText:'Your confirmed design guides a thoughtful treatment.',concernsLabel:'02 — DOES THIS FEEL FAMILIAR?',concernsMeta:'A little more ease, every morning',concernsTitle:'Does anything about your brows keep bothering you?',concernsText:'From small everyday frustrations to first-time treatment concerns, feel free to talk them through with us.',concernOne:'It is hard to make both brows look alike.',concernTwo:'Filling sparse areas makes my brows look too dark.',concernThree:'I would like to spend less time drawing my brows each day.',concernFour:'It is my first time and I do not know what shape suits me.',concernsFoot:'We take time to talk and find a direction that suits your features and preferences.',faqMeta:'Good to know before booking',faqTitle:'A few questions before you book.',faqText:'We will talk through your preferences before treatment. Ask us anything before booking.',faqOneQ:'Can I review the design before treatment?',faqOneA:'After a consultation, we suggest a design and review and adjust it together before treatment.',faqTwoQ:'Will everyone get the same result?',faqTwoA:'Results can vary depending on skin and natural brow conditions.',faqThreeQ:'How can I make a booking?',faqThreeA:'Contact us through Naver Booking or Kakao Channel. You can also call us.',faqFourQ:'What are the retouch terms and price?',faqFourA:'Please confirm the retouch period and price through Kakao Channel before booking.',recommendMeta:'Who this may suit',recommendTitle:'If this sounds like you, start with a conversation.',recommendOne:'You want brows that suit your face and eyes.',recommendTwo:'You are concerned about brows looking too dark or unnatural.',recommendThree:'You would like to review the shape before treatment.',recommendFour:'You are new to brow treatments and want a clear explanation.',visitMeta:'We look forward to meeting you',visitTitle:'Meet us in Busan.',visitText:'Please contact us before booking for the full address and hours.',addressLabel:'ADDRESS',addressPending:'Busan · Please ask us for the address',hoursLabel:'HOURS',hoursPending:'Please contact us for current hours',galleryFootnote:'Real treatment examples. Results may vary with skin and natural brow conditions.'});
Object.assign(copy.ko,{filmLabel:'CONSULTATION · TREATMENT',filmTitle:'상담부터 시술까지, 편안한 흐름으로.',filmText:'충분히 이야기를 나누고, 차분하게 시술을 진행합니다.'});
Object.assign(copy.ja,{filmLabel:'CONSULTATION · TREATMENT',filmTitle:'カウンセリングから施術まで、心地よい流れで。',filmText:'じっくりお話を伺い、落ち着いて施術を進めます。'});
Object.assign(copy['zh-TW'],{filmLabel:'CONSULTATION · TREATMENT',filmTitle:'從諮詢到施作，細心而從容。',filmText:'充分溝通後，再以細緻的步調進行施作。'});
Object.assign(copy.en,{filmLabel:'CONSULTATION · TREATMENT',filmTitle:'From consultation to treatment, with care.',filmText:'We take time to listen, then move through each step calmly.'});
Object.assign(copy.ko,{heroEyebrow:'BROW DESIGN · BUSAN',heroTitle:'눈썹문신, 하고 싶은데 망설여지나요?',heroText:'너무 진해질까, 내 얼굴에 어울릴까. 먼저 편하게 상담해 보세요.',quickDesign:'한 분 한 분을 위한 1:1 디자인',concernsLabel:'CHAPTER 1 — BEFORE YOU DECIDE',concernsMeta:'처음이라면, 걱정부터 편하게 이야기해 주세요',concernsTitle:'처음이라 걱정되는 건, 너무 당연합니다.',concernsText:'무조건 시술을 권하기보다, 지금의 눈썹과 바라는 변화를 먼저 살펴봅니다.',concernOne:'원하는 것보다 너무 진해질까 걱정돼요.',concernTwo:'유행하는 모양이 내 얼굴에도 어울릴지 모르겠어요.',concernThree:'예전 시술 자국이나 잔흔도 상담하고 싶어요.',concernFour:'시술 전에 디자인을 충분히 확인하고 싶어요.',concernsFoot:'충분히 살펴보고 이야기한 뒤, 그때 결정하셔도 괜찮습니다.',approachLabel:'OUR DESIGN · MADE FOR YOU',approachMeta:'A design that feels like you',approachTitle:'유행하는 모양보다, 내 얼굴에 어울리는 균형.',approachText:'얼굴형과 눈매, 현재 눈썹의 결을 살펴 지금의 인상에 자연스럽게 어울리는 방향을 함께 찾습니다.',approachOneTitle:'먼저 충분히 듣고',approachOneText:'원하는 분위기와 평소 메이크업 습관을 세심하게 여쭙습니다.',approachTwoTitle:'얼굴과 눈썹을 살피고',approachTwoText:'눈매와 피부, 기존 눈썹의 결을 함께 확인합니다.',approachThreeTitle:'디자인을 함께 확인합니다',approachThreeText:'시술 전 모양을 함께 보고 충분히 조율합니다.',filmLabel:'A LOOK INSIDE BEAUTYDATE',filmTitle:'처음 만나는 순간부터, 차분한 시술까지.',filmText:'충분히 이야기를 나누고, 디자인을 확인한 뒤 시술을 진행합니다.',directorLabel:'CHAPTER 2 — MEET YOUR DIRECTOR',directorMeta:'Beautydate, Busan',directorTitle:'12년의 경험을 담아, 한 분에게 맞는 디자인.',directorText:'반영구 시술 12년, 뷰티데이트 운영 8년. 조수연 원장은 고객의 얼굴과 눈매, 기존 눈썹의 결을 살피고 충분히 상담한 뒤 디자인을 함께 확인합니다.',processLabel:'CHAPTER 3 — A CONSULTATION FIRST',processMeta:'A thoughtful process, at your pace',processTitle:'시술보다 먼저, 당신의 이야기를 듣습니다.',step1Title:'고민을 먼저 듣습니다',step1Text:'원하는 분위기와 평소 메이크업, 눈썹 고민을 편하게 이야기합니다.',step2Title:'얼굴과 눈썹을 살핍니다',step2Text:'얼굴형과 눈매, 피부와 기존 눈썹 상태를 함께 확인합니다.',step3Title:'디자인을 함께 확인합니다',step3Text:'시술 전 눈썹 모양을 보고 원하는 방향으로 조율합니다.',step4Title:'차분히 시술하고 안내합니다',step4Text:'확인한 디자인에 맞춰 시술한 뒤 관리 방법을 안내합니다.',worksLabel:'REAL BROW STORIES',worksMeta:'실제 시술 사례로 만나는 뷰티데이트',worksTitle:'작은 결의 차이가, 전체 인상을 바꿉니다.',worksText:'실제 고객의 시술 결과를 살펴보세요. 피부와 기존 눈썹 상태에 따라 결과는 달라질 수 있습니다.',faqLabel:'CHAPTER 4 — BEFORE YOU BOOK',faqMeta:'예약 전에 궁금한 점을 확인해 보세요',faqTitle:'망설이게 하는 질문들, 먼저 답해드릴게요.',faqText:'통증이나 디자인, 나에게 필요한 시술인지 궁금한 점을 미리 확인해 보세요.',faqOneQ:'시술은 많이 아픈가요?',faqOneA:'통증에는 개인차가 있습니다. 걱정되는 점은 상담 때 말씀해 주시고, 진행 중에도 불편함을 알려주세요.',faqTwoQ:'너무 진해지면 어떡하죠?',faqTwoA:'시술 전에 디자인을 함께 확인하고 조율합니다. 피부와 기존 눈썹 상태에 따라 회복 후 결과에는 차이가 있을 수 있습니다.',faqThreeQ:'나에게 꼭 필요한 시술일까요?',faqThreeA:'평소 불편한 점과 원하는 변화를 충분히 듣고 함께 살펴봅니다. 결정을 서두르지 않으셔도 괜찮습니다.',faqFourQ:'시술 결과가 모두 똑같이 나오나요?',faqFourA:'피부와 기존 눈썹 상태에 따라 결과에 차이가 있을 수 있습니다.',recommendLabel:'BEFORE CHOOSING A STUDIO',recommendMeta:'예약 전 살펴볼 세 가지 기준',recommendTitle:'가격을 비교하기 전에, 이것부터 확인해 보세요.',recommendOne:'내 얼굴과 현재 눈썹 상태를 함께 살피는지',recommendTwo:'시술 전에 디자인을 보여주고 조율하는지',recommendThree:'상담부터 시술 후 안내까지 꼼꼼한지',recommendFour:'가격과 리터치 기준을 미리 확인할 수 있는지',eventKicker:'BEAUTYDATE · BROW DESIGN EVENT',eventIntro:'조수연 원장과 1:1 상담 후, 시술 전 디자인을 확인하고 진행합니다.',eventFineprint:'이벤트 적용과 최종 금액은 상담 시 확인해 주세요.',contactTitle:'내 얼굴에 어울리는 눈썹, 먼저 상담해 보세요.',contactText:'어떤 디자인이 어울릴지 몰라도 괜찮습니다. 얼굴과 원하는 분위기를 함께 살펴볼게요.'});
Object.assign(copy.ja,{heroEyebrow:'BROW DESIGN · BUSAN',heroTitle:'眉のアートメイク、気になるけれど迷っていませんか？',heroText:'濃くなりすぎないか、自分に似合うか。まずは気軽にご相談ください。',quickDesign:'一人ひとりに合わせたデザイン',concernsLabel:'CHAPTER 1 — BEFORE YOU DECIDE',concernsMeta:'初めてなら、不安なことからお聞かせください',concernsTitle:'初めてで不安になるのは、自然なことです。',concernsText:'無理に施術をおすすめするのではなく、今の眉と希望する変化を一緒に確認します。',concernOne:'希望より濃くなりすぎないか心配。',concernTwo:'流行の形が自分の顔にも似合うかわからない。',concernThree:'以前の施術跡や残色も相談したい。',concernFour:'施術前にデザインをしっかり確認したい。',concernsFoot:'じっくり相談した後に決めていただいて大丈夫です。',approachLabel:'OUR DESIGN · MADE FOR YOU',approachMeta:'あなたらしさになじむデザイン',approachTitle:'流行の形より、あなたに似合うバランス。',approachText:'顔立ちや目元、今ある眉の毛流れを見ながら、自然になじむデザインを一緒に探します。',approachOneTitle:'まずは丁寧にお話を聞き',approachOneText:'ご希望の雰囲気や普段のメイクについて伺います。',approachTwoTitle:'顔立ちと眉を確認し',approachTwoText:'目元や肌、今ある眉の状態を一緒に確認します。',approachThreeTitle:'デザインを一緒に確認',approachThreeText:'施術前に眉の形を見て、ご希望に合わせて調整します。',filmLabel:'A LOOK INSIDE BEAUTYDATE',filmTitle:'初めてお会いする時から、落ち着いた施術まで。',filmText:'ゆっくりお話しし、デザインを確認してから施術します。',directorLabel:'CHAPTER 2 — MEET YOUR DIRECTOR',directorTitle:'12年の経験を、一人ひとりに合うデザインへ。',directorText:'アートメイク施術12年、Beautydate運営8年。チョ・スヨンが顔立ちや目元、今ある眉を見て丁寧に相談し、デザインを一緒に確認します。',processLabel:'CHAPTER 3 — A CONSULTATION FIRST',processMeta:'一つずつ丁寧に進めます',processTitle:'施術の前に、まずお話を聞かせてください。',step1Title:'お悩みを伺います',step1Text:'ご希望の雰囲気や普段のメイク、眉のお悩みをお聞きします。',step2Title:'顔立ちと眉を確認します',step2Text:'顔立ちや目元、肌と今ある眉の状態を確認します。',step3Title:'デザインを一緒に確認します',step3Text:'施術前に眉の形を見て、ご希望に合わせて調整します。',step4Title:'丁寧に施術し、ご案内します',step4Text:'確認したデザインに沿って施術し、アフターケアをご案内します。',worksLabel:'REAL BROW STORIES',worksMeta:'実際の施術例をご紹介',worksTitle:'小さな毛流れの違いが、印象を変える。',worksText:'実際のお客様の施術例をご覧ください。肌や自眉の状態により仕上がりには個人差があります。',faqLabel:'CHAPTER 4 — BEFORE YOU BOOK',faqMeta:'ご予約前にご確認ください',faqTitle:'迷っていることに、先にお答えします。',faqText:'痛みやデザイン、自分に必要な施術かどうかなど、気になる点をご確認ください。',faqOneQ:'施術はかなり痛いですか？',faqOneA:'痛みの感じ方には個人差があります。不安な点はカウンセリング時にお伝えください。施術中も気になることがあればお知らせください。',faqTwoQ:'濃くなりすぎませんか？',faqTwoA:'施術前にデザインを一緒に確認し調整します。肌や自眉の状態によって仕上がりには個人差があります。',faqThreeQ:'自分に本当に必要な施術でしょうか？',faqThreeA:'普段のお悩みや希望する変化を伺い、一緒に考えます。急いで決めなくても大丈夫です。',faqFourQ:'誰でも同じ仕上がりになりますか？',faqFourA:'肌や自眉の状態によって仕上がりには個人差があります。',recommendLabel:'BEFORE CHOOSING A STUDIO',recommendMeta:'ご予約前に確認したいポイント',recommendTitle:'価格だけでなく、こちらもご確認ください。',recommendOne:'顔立ちや今ある眉を丁寧に見てくれるか',recommendTwo:'施術前にデザインを確認・調整できるか',recommendThree:'相談から施術後の案内まで丁寧か',recommendFour:'料金やリタッチ条件を事前に確認できるか',eventKicker:'BEAUTYDATE · BROW DESIGN EVENT',eventIntro:'チョ・スヨンとの1対1相談後、施術前にデザインを確認して進めます。',contactTitle:'あなたに似合う眉を、まずはご相談ください。',contactText:'どんなデザインが似合うかわからなくても大丈夫です。お顔立ちとご希望を一緒に確認します。'});
Object.assign(copy['zh-TW'],{heroEyebrow:'BROW DESIGN · BUSAN',heroTitle:'想做霧眉，卻還在猶豫嗎？',heroText:'擔心顏色太濃，或不確定適不適合自己？歡迎先輕鬆聊聊。',quickDesign:'為每位客人量身設計',concernsLabel:'CHAPTER 1 — BEFORE YOU DECIDE',concernsMeta:'第一次嘗試，先聊聊你的顧慮',concernsTitle:'第一次感到擔心，是很自然的。',concernsText:'我們不會急著推薦施作，而是先了解目前眉型與你期待的改變。',concernOne:'擔心施作後比想像中更濃。',concernTwo:'不確定流行眉型是否適合自己的臉。',concernThree:'也想詢問過去施作留下的痕跡。',concernFour:'希望施作前能充分確認眉型。',concernsFoot:'充分了解與討論之後，再決定也完全沒問題。',approachLabel:'OUR DESIGN · MADE FOR YOU',approachMeta:'自然融入你的個人特色',approachTitle:'不追隨流行，只尋找適合你的眉型。',approachText:'仔細觀察臉型、眼神與原有眉毛走向，一起尋找自然融入個人氣質的設計。',approachOneTitle:'先聆聽你的想法',approachOneText:'了解你喜歡的感覺與平常的上妝習慣。',approachTwoTitle:'觀察臉型與眉毛',approachTwoText:'一起確認眼神、膚況與原有眉毛狀態。',approachThreeTitle:'一起確認設計',approachThreeText:'施作前先確認眉型，並依照你的想法調整。',filmLabel:'A LOOK INSIDE BEAUTYDATE',filmTitle:'從初次諮詢，到細心完成施作。',filmText:'充分溝通並確認眉型後，再開始施作。',directorLabel:'CHAPTER 2 — MEET YOUR DIRECTOR',directorTitle:'以12年經驗，為每個人尋找合適的眉型。',directorText:'半永久施作經驗12年，經營 Beautydate 8年。趙秀妍會仔細觀察臉型、眼神與原有眉毛，充分諮詢後再一起確認設計。',processLabel:'CHAPTER 3 — A CONSULTATION FIRST',processMeta:'依照你的步調，細心進行每一步',processTitle:'施作之前，先聽聽你的想法。',step1Title:'先了解你的困擾',step1Text:'聊聊你喜歡的感覺、上妝習慣與眉毛困擾。',step2Title:'觀察臉型與眉毛',step2Text:'一起確認臉型、眼神、膚況與原有眉毛狀態。',step3Title:'一起確認眉型設計',step3Text:'施作前先確認眉型，並依照期待的方向調整。',step4Title:'細心施作並提供說明',step4Text:'依照確認的設計進行施作，並說明術後照護方式。',worksLabel:'REAL BROW STORIES',worksMeta:'看看實際施作案例',worksTitle:'眉毛細節的不同，會改變整體印象。',worksText:'歡迎參考實際施作案例。成果會因膚況與原有眉毛狀態而異。',faqLabel:'CHAPTER 4 — BEFORE YOU BOOK',faqMeta:'預約前，先確認常見問題',faqTitle:'把讓你猶豫的問題，先說清楚。',faqText:'關於疼痛、眉型，或是否適合施作，都可以先了解。',faqOneQ:'施作會很痛嗎？',faqOneA:'每個人對疼痛的感受不同。若有擔心的地方，請在諮詢時告訴我們；施作中感到不舒服也請隨時提出。',faqTwoQ:'如果眉毛顏色太濃怎麼辦？',faqTwoA:'施作前會一起確認並調整眉型。成果也會因膚況與原有眉毛狀態而有所不同。',faqThreeQ:'我真的需要做這項施作嗎？',faqThreeA:'我們會先了解平常的不便與期待的改變，再一起討論。不必急著決定。',faqFourQ:'每個人的成果都一樣嗎？',faqFourA:'成果會依膚況與原有眉毛狀態有所不同。',recommendLabel:'BEFORE CHOOSING A STUDIO',recommendMeta:'預約前可以確認的幾件事',recommendTitle:'比較價格前，也請先確認這些細節。',recommendOne:'是否仔細觀察臉型與原有眉毛',recommendTwo:'施作前是否能一起確認並調整眉型',recommendThree:'是否從諮詢到術後說明都細心清楚',recommendFour:'是否能事先了解價格與補色條件',eventKicker:'BEAUTYDATE · BROW DESIGN EVENT',eventIntro:'由趙秀妍提供一對一諮詢，並在施作前一起確認眉型。',contactTitle:'想找到適合自己的眉型？先來聊聊。',contactText:'還不確定什麼眉型適合也沒關係，我們會一起看看你的臉型與期待。'});
Object.assign(copy.en,{heroEyebrow:'BROW DESIGN · BUSAN',heroTitle:'Thinking about brow design, but still unsure?',heroText:'Worried it may look too dark, or unsure what suits you? Start with a conversation.',quickDesign:'A personal design for every face',concernsLabel:'CHAPTER 1 — BEFORE YOU DECIDE',concernsMeta:'If it is your first time, start with your concerns',concernsTitle:'It is completely natural to feel unsure at first.',concernsText:'We do not rush into recommending treatment. First, we look at your current brows and what you hope to change.',concernOne:'I am worried the result may look darker than I want.',concernTwo:'I do not know whether a trending shape will suit my face.',concernThree:'I would also like advice about pigment left from an earlier treatment.',concernFour:'I want to review the design carefully before treatment.',concernsFoot:'Take time to talk it through, then decide when you are ready.',approachLabel:'OUR DESIGN · MADE FOR YOU',approachMeta:'A design that feels like you',approachTitle:'Less about trends. More about your balance.',approachText:'We consider your face, eyes and natural brow pattern to find a design that feels right for you.',approachOneTitle:'We start by listening',approachOneText:'Tell us about the look you want and your daily makeup routine.',approachTwoTitle:'We look at your face and brows',approachTwoText:'Together, we review your eyes, skin and existing brow condition.',approachThreeTitle:'We review the design together',approachThreeText:'Before treatment, we check and adjust the shape together.',filmLabel:'A LOOK INSIDE BEAUTYDATE',filmTitle:'From your first conversation to thoughtful care.',filmText:'We take time to talk and review the design before treatment.',directorLabel:'CHAPTER 2 — MEET YOUR DIRECTOR',directorTitle:'12 years of experience, shaped around each person.',directorText:'With 12 years in semi-permanent brow treatment and 8 years running Beautydate, Suyeon Cho takes time to understand each client’s features, existing brows and preferences before reviewing the design together.',processLabel:'CHAPTER 3 — A CONSULTATION FIRST',processMeta:'A thoughtful process, at your pace',processTitle:'Before treatment, we listen to your story.',step1Title:'We hear your concerns',step1Text:'Tell us about your preferred look, daily makeup and brow concerns.',step2Title:'We look at your face and brows',step2Text:'Together, we review your features, skin and existing brow condition.',step3Title:'We review the design together',step3Text:'We check the shape before treatment and adjust it to your preferences.',step4Title:'Careful treatment and aftercare',step4Text:'We follow the design you approved and explain aftercare.',worksLabel:'REAL BROW STORIES',worksMeta:'Real examples from Beautydate',worksTitle:'Small details can change the whole impression.',worksText:'Explore real treatment examples. Results vary with skin and natural brow conditions.',faqLabel:'CHAPTER 4 — BEFORE YOU BOOK',faqMeta:'Questions to consider before booking',faqTitle:'Let us answer the questions that give you pause.',faqText:'Learn more about comfort, design and whether treatment is right for you.',faqOneQ:'Will the treatment hurt a lot?',faqOneA:'Pain varies from person to person. Please share your concerns during consultation, and let us know if you feel uncomfortable during treatment.',faqTwoQ:'What if my brows look too dark?',faqTwoA:'We review and adjust the design together before treatment. Results also vary with skin and existing brow condition.',faqThreeQ:'Do I really need this treatment?',faqThreeA:'We listen to what feels inconvenient and what you hope to change, then talk it through together. There is no need to rush your decision.',faqFourQ:'Will everyone get the same result?',faqFourA:'Results can vary depending on skin and natural brow conditions.',recommendLabel:'BEFORE CHOOSING A STUDIO',recommendMeta:'A few things to check before booking',recommendTitle:'Before comparing prices, check these details too.',recommendOne:'Do they consider your face and existing brows?',recommendTwo:'Can you review and adjust the design before treatment?',recommendThree:'Is the process clear from consultation through aftercare?',recommendFour:'Can you confirm prices and retouch terms in advance?',eventKicker:'BEAUTYDATE · BROW DESIGN EVENT',eventIntro:'Director Suyeon Cho offers a one-to-one consultation and reviews the design with you before treatment.',contactTitle:'Let us find a brow design that feels like you.',contactText:'It is okay if you are not sure what suits you. We can look at your features and preferences together.'});
const names={'ko':'KO','ja':'日本語','zh-TW':'繁體','en':'EN'};
const langButtons=[...document.querySelectorAll('[data-lang]')];
document.querySelectorAll('.offer-price .offer-actions a').forEach((button,index)=>{
  button.style.setProperty('animation','event-booking-bounce 1.8s ease-in-out infinite','important');
  button.style.setProperty('animation-delay',`${index*0.35}s`,'important');
});

function setLanguage(lang){
  const dict=copy[lang]||copy.ko;
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(dict[key]){
      const safeText=dict[key].replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
      el.innerHTML=safeText.replace(/([,，、])\s*/g,'$1<br>');
    }
  });
  document.querySelector('meta[name="description"]').content=dict.description;
  document.title=lang==='ko'?'뷰티데이트 | 조수연 원장':`Beautydate | Suyeon Cho`;
  document.querySelector('.lang-current').innerHTML=`${names[lang]} <span>⌄</span>`;
  document.querySelector('.language').classList.remove('open');
  document.querySelector('.lang-current').setAttribute('aria-expanded','false');
  updateForeignBookingLinks(lang,dict);
  try{localStorage.setItem('beautydate-language',lang)}catch{}
}
function updateForeignBookingLinks(lang,dict){
  const isKorean=lang==='ko';
  const instagram='https://www.instagram.com/beautydate.studio/';
  const line='https://line.me/R/ti/p/@209fyimp';
  const whatsapp='https://wa.me/message/ZYBILW5MJYEUH1';
  const messengerUrl=lang==='en'?whatsapp:line;
  const messengerLabel=lang==='en'?dict.whatsappLink:dict.lineLink;
  const setLink=(anchor,url,label)=>{
    if(!anchor)return;
    anchor.href=url;
    const text=anchor.querySelector('span');
    if(text&&label)text.textContent=label;
    if(!isKorean){anchor.target='_blank';anchor.rel='noopener noreferrer'}
  };
  setLink(document.querySelector('.header-book'),isKorean?'https://pcmap.place.naver.com/place/1254580452/booking':messengerUrl,isKorean?dict.book:messengerLabel);
  document.querySelectorAll('.hero-actions,.offer-actions,.contact-actions,.mobile-cta').forEach(group=>{
    const links=[...group.querySelectorAll('a')];
    setLink(links[0],isKorean?'https://pcmap.place.naver.com/place/1254580452/booking':messengerUrl,isKorean?dict.naverBooking:messengerLabel);
    setLink(links[1],isKorean?'https://pf.kakao.com/_fQxjnT':instagram,isKorean?dict.kakaoInquiry:dict.instagramLink);
    if(group.classList.contains('contact-actions')&&links[2]){
      if(isKorean)links[2].style.removeProperty('display');
      else links[2].style.display='none';
    }
  });
  setLink(document.querySelector('.visit-booking'),isKorean?'https://pcmap.place.naver.com/place/1254580452/booking':messengerUrl,isKorean?dict.naverBooking:messengerLabel);
}
document.querySelector('.lang-current').addEventListener('click',()=>{
  const wrap=document.querySelector('.language');wrap.classList.toggle('open');
  document.querySelector('.lang-current').setAttribute('aria-expanded',wrap.classList.contains('open'));
});
langButtons.forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',()=>document.querySelector('.site-header').classList.remove('nav-open')));
let savedLanguage='ko';
try{savedLanguage=localStorage.getItem('beautydate-language')||'ko'}catch{}
setLanguage(savedLanguage);

const heroVideo=document.querySelector('.hero-portrait video');
if(heroVideo){
  const heroPortrait=heroVideo.closest('.hero-portrait');
  const playHeroVideo=()=>{
    if(document.visibilityState==='hidden')return;
    heroVideo.muted=true;
    heroVideo.defaultMuted=true;
    heroVideo.playsInline=true;
    const attempt=heroVideo.play();
    if(attempt&&typeof attempt.then==='function'){
      attempt.then(()=>heroPortrait.classList.remove('autoplay-blocked'))
        .catch(()=>heroPortrait.classList.add('autoplay-blocked'));
    }
  };
  heroVideo.addEventListener('playing',()=>heroPortrait.classList.remove('autoplay-blocked'));
  heroVideo.addEventListener('canplay',playHeroVideo,{once:true});
  document.querySelector('.hero-video-play').addEventListener('click',()=>{
    heroVideo.muted=true;
    heroVideo.play().then(()=>heroPortrait.classList.remove('autoplay-blocked'))
      .catch(()=>heroPortrait.classList.add('autoplay-blocked'));
  });
  window.addEventListener('pageshow',playHeroVideo);
  document.addEventListener('visibilitychange',playHeroVideo);
  playHeroVideo();
}

const treatmentGallery=document.querySelector('.treatment-gallery');
const galleryLightbox=document.querySelector('.gallery-lightbox');
if(treatmentGallery&&galleryLightbox){
  const casePhotos=[22,3,6,9,12,15,18,21,24,27,30,33,36,41,44];
  const lightboxImage=galleryLightbox.querySelector('img');
  const lightboxCaption=galleryLightbox.querySelector('figcaption');
  let activePhoto=0;
  const showPhoto=index=>{
    activePhoto=(index+casePhotos.length)%casePhotos.length;
    const number=casePhotos[activePhoto];
    lightboxImage.src=`assets/brow-${String(number).padStart(2,'0')}.jpg`;
    lightboxImage.alt=`뷰티데이트 눈썹 디자인 시술 사례 ${activePhoto+1}`;
    lightboxCaption.textContent=`${String(activePhoto+1).padStart(2,'0')} / ${String(casePhotos.length).padStart(2,'0')} · BEAUTYDATE BROW DESIGN`;
  };
  casePhotos.forEach((number,index)=>{
    const figure=document.createElement('figure');
    figure.className='gallery-item';
    figure.tabIndex=0;
    figure.setAttribute('role','button');
    figure.setAttribute('aria-label',`시술 사진 ${index+1} 크게 보기`);
    const image=document.createElement('img');
    image.src=`assets/brow-${String(number).padStart(2,'0')}.jpg`;
    image.alt=`뷰티데이트 눈썹 디자인 시술 사례 ${index+1}`;
    image.loading='lazy';
    image.decoding='async';
    const caption=document.createElement('figcaption');
    caption.innerHTML=`<span>${String(index+1).padStart(2,'0')}</span><span>BEAUTYDATE · BROW DESIGN</span>`;
    figure.append(image,caption);
    figure.addEventListener('click',()=>{showPhoto(index);galleryLightbox.showModal()});
    figure.addEventListener('keydown',event=>{
      if(event.key==='Enter'||event.key===' '){event.preventDefault();showPhoto(index);galleryLightbox.showModal()}
    });
    treatmentGallery.append(figure);
  });
  galleryLightbox.querySelector('.gallery-close').addEventListener('click',()=>galleryLightbox.close());
  galleryLightbox.querySelector('.gallery-previous').addEventListener('click',()=>showPhoto(activePhoto-1));
  galleryLightbox.querySelector('.gallery-next').addEventListener('click',()=>showPhoto(activePhoto+1));
  galleryLightbox.addEventListener('click',event=>{
    if(event.target===galleryLightbox)galleryLightbox.close();
  });
}

const header=document.querySelector('.site-header');
const menuToggle=document.querySelector('.menu-toggle');
menuToggle.setAttribute('aria-expanded','false');
menuToggle.addEventListener('click',()=>{
  const isOpen=header.classList.contains('nav-open');
  header.classList.toggle('nav-open',!isOpen);
  menuToggle.setAttribute('aria-expanded',String(!isOpen));
  menuToggle.setAttribute('aria-label',isOpen?'Open navigation':'Close navigation');
});
document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',()=>{
  menuToggle.setAttribute('aria-expanded','false');
  menuToggle.setAttribute('aria-label','Open navigation');
}));
document.addEventListener('click',event=>{
  if(!event.target.closest('.language')){
    document.querySelector('.language').classList.remove('open');
    document.querySelector('.lang-current').setAttribute('aria-expanded','false');
  }
  if(!event.target.closest('.site-header')&&header.classList.contains('nav-open')){
    header.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded','false');
    menuToggle.setAttribute('aria-label','Open navigation');
  }
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){
    document.querySelector('.language').classList.remove('open');
    header.classList.remove('nav-open');
    document.querySelector('.lang-current').setAttribute('aria-expanded','false');
    menuToggle.setAttribute('aria-expanded','false');
  }
});

if ('IntersectionObserver' in window) {
  document.body.classList.add('motion-ready');
  const revealGroups = [
    ['.hero-topline', 'rise'], ['.hero-word', 'left'],
    ['.hero-message', 'right'], ['.hero-caption', 'rise'], ['.hero-bottom', 'rise'],
    ['.section-heading', 'rise'],
    ['.approach-intro > *', 'rise'], ['.approach-points article', 'right'],
    ['.concerns-heading > *', 'rise'], ['.concerns-list p', 'right'], ['.concerns-foot', 'rise'],
    ['.intro-grid h2', 'left'], ['.intro-copy', 'right'],
    ['.feature-photo', 'image'], ['.feature-copy > *', 'right'],
    ['.works-title > *', 'rise'], ['.gallery-item', 'image'], ['.gallery-footnote', 'rise'],
    ['.process-grid > :first-child', 'left'], ['.steps article', 'right'],
    ['.faq-heading > *', 'rise'], ['.faq-list details', 'right'],
    ['.director-grid figure', 'image'], ['.director-copy > *', 'right'],
    ['.recommend-content > *', 'rise'], ['.visit-card > *', 'rise'],
    ['.studio h2', 'rise'], ['.studio-gallery img', 'image'],
    ['.visit-grid > :first-child', 'left'], ['.visit-details > div', 'right'],
    ['.contact-inner > *', 'zoom'], ['.site-footer > *', 'rise']
  ];
  const revealItems = [];
  revealGroups.forEach(([selector, motion]) => {
    document.querySelectorAll(selector).forEach((item, index) => {
      item.dataset.reveal = motion;
      item.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 85}ms`);
      revealItems.push(item);
    });
  });
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting));
  }, { threshold: 0.16, rootMargin: '-6% 0px -8% 0px' });
  revealItems.forEach(item => revealObserver.observe(item));
}

const designFilm=document.querySelector('[data-design-film]');
if(designFilm){
  const clips=[...designFilm.querySelectorAll('video')];
  const caption=designFilm.parentElement.querySelector('[data-film-caption]');
  let currentClip=0,filmTimer=null,filmVisible=false;
  const clipLabels=['01\u00a0 / \u00a0CONSULTATION','02\u00a0 / \u00a0TREATMENT'];
  const pauseFilm=()=>{clearTimeout(filmTimer);filmTimer=null;clips.forEach(clip=>clip.pause())};
  const playCurrent=()=>{
    if(!filmVisible||document.hidden)return;
    const active=clips[currentClip];
    active.muted=true;
    active.play().catch(()=>{});
    clearTimeout(filmTimer);
    filmTimer=setTimeout(()=>{
      const outgoing=clips[currentClip];
      const nextIndex=(currentClip+1)%clips.length;
      const incoming=clips[nextIndex];
      incoming.currentTime=0;
      incoming.muted=true;
      incoming.play().catch(()=>{});
      incoming.classList.add('is-active');
      outgoing.classList.remove('is-active');
      currentClip=nextIndex;
      if(caption)caption.textContent=clipLabels[currentClip];
      filmTimer=setTimeout(()=>{outgoing.pause();playCurrent()},900);
    },4500);
  };
  const setFilmVisible=visible=>{
    filmVisible=visible;
    if(visible)playCurrent();else pauseFilm();
  };
  if('IntersectionObserver' in window){
    new IntersectionObserver(entries=>setFilmVisible(entries[0].isIntersecting),{threshold:.2}).observe(designFilm);
  }else setFilmVisible(true);
  document.addEventListener('visibilitychange',()=>document.hidden?pauseFilm():filmVisible&&playCurrent());
}
