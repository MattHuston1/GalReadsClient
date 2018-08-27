import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import Books from '@/pages/Books'
import BookSelected from '@/pages/BookSelected'
import NewBook from '@/pages/NewBook'
import EditBook from '@/pages/EditBook'
import DeleteBook from '@/pages/DeleteBook'
import Authors from '@/pages/Authors'
import AuthorSelected from '@/pages/AuthorSelected'
import NewAuthor from '@/pages/NewAuthor'
import EditAuthor from '@/pages/EditAuthor'
import DeleteAuthor from '@/pages/DeleteAuthor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/books/:id',
      name: 'BookSelected',
      component: BookSelected
    },
    {
      path: '/books/new',
      name: 'NewBook',
      component: NewBook
    },
    {
      path: '/books/:id/edit',
      name: 'EditBook',
      component: EditBook
    },
    {
      path: '/books/:id/delete',
      name: 'DeleteBook',
      component: DeleteBook
    },
    {
      path: '/authors',
      name: 'Authors',
      component: Authors
    },
    {
      path: '/authors/:id',
      name: 'AuthorSelected',
      component: AuthorSelected
    },
    {
      path: '/authors/new',
      name: 'NewAuthor',
      component: NewAuthor
    },
    {
      path: '/authors/:id/edit',
      name: 'EditAuthor',
      component: EditAuthor
    },
    {
      path: '/authors/:id/delete',
      name: 'DeleteAuthor',
      component: DeleteAuthor
    }
  ]
})
