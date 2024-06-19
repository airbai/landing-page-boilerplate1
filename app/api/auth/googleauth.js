import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // 可选配置：自定义页面，重定向等
  pages: {
    signIn: '/auth/signin',  // 自定义登录页面的路径
  },

  // 数据库配置（如果需要）
})
