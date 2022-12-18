module.exports = {
    siteUrl: process.env.SITE_URL || 'https://eatlater.ng',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{
            userAgent: '*',
            allow: '/',
        }]
    }
}
