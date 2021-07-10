import NProgress from 'nprogress'
import { UserModule } from '~/types'

const whiteList: string[] = ['/login']

export const install: UserModule = ({ isClient, router }) => {
  router.beforeEach(async (to, _from, next) => {
    if (isClient) NProgress.start()
    if (whiteList.includes(to.path)) return next()

    try {
      await new Promise((resolve) => setTimeout(resolve, 400))
      const ok = localStorage.getItem('isLoggedIn') === 'true'
      console.log({ ok })
      if (!ok) throw new Error('no auth')

      next()
    } catch (err) {
      console.error(err)
      next('/login')
    }
  })
  router.afterEach(() => {
    if (isClient) NProgress.done()
  })
}
