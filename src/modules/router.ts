import NProgress from 'nprogress'
import { UserModule } from '~/types'

const whiteList: string[] = ['/login']

export const install: UserModule = ({ app, isClient, router }) => {
  app.use(router)

  router.beforeEach(async (to, _from, next) => {
    NProgress.start()
    if (whiteList.includes(to.path)) return next()

    try {
      await new Promise((resolve) => setTimeout(resolve, 400))
      const ok = localStorage.getItem('isLoggedIn') === 'true'

      if (!ok) throw new Error('no auth')

      next()
    } catch (err) {
      console.error(err)
      next('/login')
    }
  })
  router.afterEach(() => {
    NProgress.done()
  })
}
