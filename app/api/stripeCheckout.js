// 引入 Stripe Node.js SDK
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // 创建一个 Stripe 支付意图
            const paymentIntent = await stripe.paymentIntents.create({
                amount: req.body.amount,
                currency: 'usd',
            });

            // 将客户端密钥作为响应返回给前端
            res.status(200).json({ clientSecret: paymentIntent.client_secret });
        } catch (error) {
            // 如果有错误发生，返回错误信息
            res.status(500).json({ error: error.message });
        }
    } else {
        // 处理非 POST 请求
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
