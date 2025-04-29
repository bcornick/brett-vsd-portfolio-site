module.exports = {
  siteUrl: 'https://brettcornick.com',
  generateRobotsTxt: true,
  sitemapSize: 7000, // Split sitemaps if exceeding 7k URLs [1][4]
  exclude: ['/admin/*', '/secret'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [], // Add custom sitemaps if needed
  },
}
