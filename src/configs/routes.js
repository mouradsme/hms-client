
import Dashboard from '../views/Dashboard.vue'
import BookingsHome from '../views/Bookings/Home.vue'


import RoomsHome from '../views/Rooms/Home.vue'

import UsersHome from '../views/Users/Home.vue'
import AddUser from '../views/Users/Add.vue'
function adminOnly(to, from, next)
{
 let User       = JSON.parse(localStorage.getItem('User'))
 let UserRole   = User.role
 let isAdmin    = UserRole == 0 ? true : false; 
 if (isAdmin) next(); 
  else next(from.path); 
 
} 
const routes = [
    { 
        path: '/', 
        component: Dashboard, 
        name: "dashboard" 
    }, 
    { 
        path: '/bookings', 
        component: BookingsHome, 
        name: "bookings"  
    },



    // Admin Only Routes
    
    { 
        path: '/rooms', 
        component: RoomsHome, 
        name: "rooms",
        beforeEnter : adminOnly,
 
    },
    { 
        path: '/users', 
        component: UsersHome, 
        name: "users",
        beforeEnter : adminOnly,
 
    },
    { 
        path: '/users/add', 
        component: AddUser, 
        name: "adduser",
        beforeEnter : adminOnly,
    },
]

export default routes;