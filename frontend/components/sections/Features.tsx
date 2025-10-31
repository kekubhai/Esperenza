'use client';
import { motion } from 'framer-motion';
import { Users, Gift, Wallet, Star, ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Marquee } from '@/components/ui/marquee';

const features = [
	{
		title: 'Referral Exchange',
		description: 'Granters list referral codes, seekers discover and use them — both win.',
		icon: Users,
		gradient: 'from-blue-500 to-cyan-500',
		stats: '10K+ Active Users',
		badge: 'Popular',
	},
	{
		title: 'Goodies Marketplace',
		description: 'Redeem earned points for curated goodies and partner perks.',
		icon: Gift,
		gradient: 'from-purple-500 to-pink-500',
		stats: '500+ Rewards',
		badge: 'New',
	},
	{
		title: 'Wallet & Micro-donations',
		description: 'Built-in cUSD balance, micro-donation flow and quick payouts.',
		icon: Wallet,
		gradient: 'from-green-500 to-emerald-500',
		stats: '$50K+ Transacted',
		badge: 'Secure',
	},
	{
		title: 'Reputation & Status',
		description: 'Granters gain reputation and open/closed status based on contributions.',
		icon: Star,
		gradient: 'from-orange-500 to-red-500',
		stats: '95% Success Rate',
		badge: 'Trusted',
	},
];

const stats = [
	{ label: 'Active Users', value: '10,000+', icon: Users },
	{ label: 'Referral Codes', value: '5,000+', icon: TrendingUp },
	{ label: 'Transactions', value: '$50K+', icon: Wallet },
	{ label: 'Success Rate', value: '95%', icon: Shield },
];

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

const floatingVariants = {
	animate: {
		y: [-10, 10, -10],
		transition: {
			duration: 4,
			repeat: Infinity,
			ease: 'easeInOut' as const,
		},
	},
};

export const Features = () => {
	return (
		<section className="relative py-20 overflow-hidden bg-black">
			{/* Background Elements */}
			<div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
			{/* Green gradient spots */}
			<div className="absolute top-40 right-10 w-96 h-96 bg-green-500/15 rounded-full blur-3xl"></div>
			<div className="absolute bottom-40 left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
			<div className="absolute top-1/3 right-1/3 w-72 h-72 bg-teal-500/8 rounded-full blur-3xl"></div>

			<div className="container relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center max-w-4xl mx-auto mb-16 relative z-20"
				>
					<Badge 
						variant="outline" 
						className="mb-4 px-4 py-2 text-sm text-white font-medium bg-white/10 backdrop-blur-sm shadow-sm border-white/20"
					>
						<Zap className="w-4 h-4 mr-2" />
						Powered by Celo Blockchain
					</Badge>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
						What You Can Do
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg">
						Browse referral codes, claim goodies, and grow your reputation — all in one lightweight app.
						Join thousands of users building the future of decentralized referrals.
					</p>
				</motion.div>

				{/* Stats Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
				>
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
						>
							<stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
							<div className="text-2xl font-bold text-white">{stat.value}</div>
							<div className="text-sm text-gray-400">{stat.label}</div>
						</motion.div>
					))}
				</motion.div>

				{/* Features Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
				>
					{features.map((feature, index) => (
						<motion.div key={index} variants={itemVariants}>
							<Card className="group relative overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
								<CardHeader className="pb-4">
									<div className="flex items-center justify-between mb-4">
										<motion.div
											variants={floatingVariants}
											animate="animate"
											className={`h-14 w-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}
										>
											<feature.icon className="h-7 w-7 text-white" />
										</motion.div>
										<Badge variant={feature.badge === 'New' ? 'default' : 'secondary'}>
											{feature.badge}
										</Badge>
									</div>
									<CardTitle className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
										{feature.title}
									</CardTitle>
									<CardDescription className="text-gray-300 leading-relaxed">
										{feature.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="pt-0">
									<div className="flex items-center justify-between">
										<span className="text-sm font-medium text-gray-400">{feature.stats}</span>
										<ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
									</div>
								</CardContent>

								{/* Hover Effect */}
								<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</Card>
						</motion.div>
					))}
				</motion.div>

				{/* Trusted By Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="text-center mb-8"
				>
					<p className="text-gray-300 mb-6">Trusted by leading organizations</p>
					<Marquee pauseOnHover className="[--duration:20s] text-white">
						{[
							'Celo Foundation',
							'Chainlink',
							'Polygon',
							'Ethereum Foundation',
							'ConsenSys',
							'Coinbase',
							'Binance',
							'OpenSea',
							'Uniswap',
							'Aave',
						].map((company, index) => (
							<div key={index} className="mx-8 text-gray-300 font-medium">
								{company}
							</div>
						))}
					</Marquee>
				</motion.div>

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="text-center"
				>
					<Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
						Get Started Today
						<ArrowRight className="ml-2 w-5 h-5" />
					</Button>
				</motion.div>
			</div>
		</section>
	);
};