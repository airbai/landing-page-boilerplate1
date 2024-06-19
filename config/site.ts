import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const OPEN_SOURCE_URL = 'https://github.com/weijunext/landing-page-boilerplate'

const baseSiteConfig = {
  name: "Fiit.AI GPTs Collections",
  description:
    "A simple, powerful GPTs collection that helps you quickly draw mind maps, flowcharts, treemaps, PPTs, etc., boosting work efficiency, with complex tasks completed in just minutes.",
  url: "https://fiit.ai",
  ogImage: "https://landingpage.weijunext.com/og1.png",
  metadataBase: '/',
  keywords: ["ChatGPT", "GPTs", "GPT 4", "GPT 3.5", "mindmap", 
  "flowchart", "timeline", "treemap", "office"],
  authors: [
    {
      name: "Fiit.AI",
      url: "https://fiit.ai",
      twitter: 'mailto:dothingsatonce@gmail.com',
    }
  ],
  creator: '@Fiit.AI',
  openSourceURL: 'https://github.com/?TBD',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/?TBD", icon: SiBuymeacoffee },
    { name: 'Dashboard', href: "/sign-in", icon: BsTwitterX },
  ],
  footerLinks: [
    { name: 'email', href: "mailto:dothingsatonce@gmail.com", icon: MdEmail },
    { name: 'twitter', href: "https://twitter.com/?TBD", icon: BsTwitterX },
    { name: 'github', href: "https://github.com/?TBD", icon: BsGithub },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/?TBD", icon: SiBuymeacoffee },
    { name: 'Fiit.AI', href: "https://Fiit.AI", icon: SiJuejin },
    { name: 'weChat', href: "https://Fiit.AI?TBD", icon: BsWechat }
  ],
  footerProducts: [
    { url: 'https://Fiit.AI/', name: 'Fiit.AI' }
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
