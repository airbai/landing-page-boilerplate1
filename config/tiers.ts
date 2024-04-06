
import { siteConfig } from "@/config/site";
import { Tier, TiersEnum } from "@/types/pricing";

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Free",
    price: "Free",
    href: "https://www.gptshunter.com/gpts/profile/user-4rYdjbqXWjA7Sgiw4N35Yc1G",
    description: "Access all GPTs from the GPT Store.",
    features: [
      "Free",
      "Access all GTPs",
      "Direct use of tools for office chart generation",
      "MIT License",
    ],
    buttonText: "Start",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Customize",
    href: siteConfig.authors[0].twitter || "#",
    description: "Pay to unlock all GPTs capabilities, including editing, modification, cloud saving, and sharing.",
    price: "$19.9/month",
    features: [
      "Access all GTPs",
      "Editing, modification",
      "Cloud saving, sharing",
      "After-sales service",
      "More powerful and versatile GPT office capabilities",
    ],
    buttonText: "Contact Us",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];


export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "免费",
    price: "免费",
    href: "https://www.gptshunter.com/gpts/profile/user-4rYdjbqXWjA7Sgiw4N35Yc1G",
    description: "可从 GPT Store 访问所有GPTs。",
    features: [
      "免费",
      "访问全部GTPs",
      "直接使用工具进行办公生成图表",
      "MIT 许可证",
    ],
    buttonText: "开始",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "定制",
    href: siteConfig.authors[0].twitter || "#",
    description: "支付打开所有 GPTs 能力，编辑、修改、云保存，分享。",
    price: "$19.9/月",
    features: [
      "访问全部GTPs",
      "编辑、修改",
      "云保存，分享",
      "售后服务",
      "更多更强的GPT 办公能力",
    ],
    buttonText: "联系我们",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_JA: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "無料",
    price: "無料",
    href: "https://www.gptshunter.com/gpts/profile/user-4rYdjbqXWjA7Sgiw4N35Yc1G",
    description: "GPT StoreからすべてのGPTsにアクセス可能。",
    features: [
      "無料",
      "全てのGTPsへのアクセス",
      "ツールを使用して直接オフィスの図を生成",
      "MIT ライセンス",
    ],
    buttonText: "開始",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "カスタマイズ",
    href: siteConfig.authors[0].twitter || "#",
    description: "すべてのGPTsの機能を開放し、編集、修正、クラウド保存、共有を行います。",
    price: "19.9ドル/月",
    features: [
      "全てのGTPsへのアクセス",
      "編集・修正",
      "クラウド保存、共有",
      "アフターサービス",
      "より多くの強力なGPTオフィス機能",
    ],
    buttonText: "お問い合わせ",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_AR: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "مجاني",
    price: "مجاناً",
    href: "https://www.gptshunter.com/gpts/profile/user-4rYdjbqXWjA7Sgiw4N35Yc1G",
    description: "يمكن الوصول إلى جميع GPTs من متجر GPT.",
    features: [
      "مجاني",
      "الوصول إلى جميع GTPs",
      "استخدام الأدوات مباشرة لإنتاج الرسوم البيانية المكتبية",
      "ترخيص MIT",
    ],
    buttonText: "ابدأ",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "تخصيص",
    href: siteConfig.authors[0].twitter || "#",
    description: "ادفع لفتح جميع قدرات GPTs، بما في ذلك التحرير، التعديل، الحفظ السحابي، والمشاركة.",
    price: "$19.9/شهر",
    features: [
      "الوصول إلى جميع GTPs",
      "التحرير، التعديل",
      "الحفظ السحابي، المشاركة",
      "خدمة ما بعد البيع",
      "قدرات GPT المكتبية الأقوى والأكثر تنوعًا",
    ],
    buttonText: "تواصل معنا",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ES: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Gratuito",
    price: "Gratis",
    href: "https://www.gptshunter.com/gpts/profile/user-4rYdjbqXWjA7Sgiw4N35Yc1G",
    description: "Acceso a todos los GPTs desde la tienda GPT.",
    features: [
      "Gratis",
      "Acceso a todos los GTPs",
      "Usar las herramientas directamente para generar diagramas de oficina",
      "Licencia MIT",
    ],
    buttonText: "Empezar",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Personalizar",
    href: siteConfig.authors[0].twitter || "#",
    description: "Paga para desbloquear todas las capacidades de GPTs, incluyendo edición, modificación, guardado en la nube, y compartir.",
    price: "19.9$/mes",
    features: [
      "Acceso a todos los GTPs",
      "Edición, modificación",
      "Guardado en la nube, compartir",
      "Servicio postventa",
      "Capacidades de oficina GPT más potentes y versátiles",
    ],
    buttonText: "Contáctanos",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_RU: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Бесплатно",
    price: "Бесплатно",
    href: "https://www.gptshunter.com/gpts/profile/user-4rYdjbqXWjA7Sgiw4N35Yc1G",
    description: "Доступ ко всем GPTs из GPT Store.",
    features: [
      "Бесплатно",
      "Доступ ко всем GTPs",
      "Прямое использование инструментов для создания офисных диаграмм",
      "Лицензия MIT",
    ],
    buttonText: "Начать",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Настройка",
    href: siteConfig.authors[0].twitter || "#",
    description: "Оплата за разблокировку всех возможностей GPTs, включая редактирование, изменение, облачное сохранение и обмен.",
    price: "$19.9/месяц",
    features: [
      "Доступ ко всем GTPs",
      "Редактирование, изменение",
      "Облачное сохранение, обмен",
      "Послепродажное обслуживание",
      "Более мощные и разнообразные офисные возможности GPT",
    ],
    buttonText: "Связаться с нами",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];


interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
  TIERS_JA,
  TIERS_AR,
  TIERS_ES,
  TIERS_RU
}