const { expect } = require('@wdio/globals')
const UsersPage = require('../pages/users.page')


describe('My Users page', () => {
    it('load data', async () => {
      await UsersPage.loadData()
    })

    it('delete user', async () => {
      //  await UsersPage.loadData()
        await UsersPage.deleteUser()
    })


})

