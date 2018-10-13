import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Movie from 'components/movie/movie'
import Tv from 'components/tv/tv'
import Variety from 'components/variety/variety'
import Member from 'components/member/member'
import Search from 'components/search/search'
import Login from 'components/login/login'
import NewMovie from 'components/new-movie/new-movie'

Vue.use(Router)

export default new Router({
  routes: [
	    {
	      path: '/',
	      redirect: '/Home'
	    },
	    {
	      path: '/Home',
	      name: 'Home',
	      component: Home
	    },
	     {
	      path: '/Movie',
	      name: 'Movie',
	      component: Movie
	    },
	     {
	      path: '/Tv',
	      name: 'Tv',
	      component: Tv
	    },
	     {
	      path: '/Variety',
	      name: 'Variety',
	      component: Variety
	    },
	    {
	      path: '/Member',
	      name: 'Member',
	      component: Member
	    },
	    {
	      path: '/Search',
	      name: 'Search',
	      component: Search
	    },
	    {
	      path: '/Login',
	      name: 'Login',
	      component: Login
	    },
	    {
	      path: '/NewMovie',
	      name: 'NewMovie',
	      component: NewMovie
	    }
  ]
})
