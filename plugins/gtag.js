// plugins/google-analytics.js

export default ({ app }) => {
    if (process.client) {
      // Load the Google Analytics script
      ;(function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r
        ;(i[r] =
          i[r] ||
          function () {
            ;(i[r].q = i[r].q || []).push(arguments)
          }),
          (i[r].l = 1 * new Date())
        ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
        a.async = 1
        a.src = g
        m.parentNode.insertBefore(a, m)
      })(
        window,
        document,
        'script',
        'https://www.google-analytics.com/analytics.js',
        'ga'
      )
  
      // Initialize Google Analytics with your tracking ID
      ga('create', 'G-7H68NSCCK1', 'auto')
      // Send the pageview to Google Analytics
      app.router.afterEach((to, from) => {
        ga('set', 'page', to.fullPath)
        ga('send', 'pageview')
      })
    }
  }