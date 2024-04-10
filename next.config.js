/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{
			protocol: 'https',
			hostname: 'dlcqtwlchbtfodekhrtd.supabase.co',
		}, {
			protocol: 'http',
			hostname: 'localhost',
		}]
	},
};

module.exports = nextConfig;
