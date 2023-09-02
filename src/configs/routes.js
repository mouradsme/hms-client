
import Dashboard from '../views/Dashboard.vue'
import BookingsHome from '../views/Bookings/Home.vue'

import AddBooking from '../views/Bookings/Add.vue'

import RoomsHome from '../views/Rooms/Home.vue'
import AddRoom from '../views/Rooms/Add.vue'

import RoomTypesHome from '../views/RoomTypes/Home.vue'
import AddRoomTypes from '../views/RoomTypes/Add.vue'

import UsersHome from '../views/Users/Home.vue'
import AddUser from '../views/Users/Add.vue'

import ClientsHome from '../views/Clients/Home.vue'
import AddClient from '../views/Clients/Add.vue'
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
    { 
        path: '/bookings/add', 
        component: AddBooking, 
        name: "bookings_add"  
    },



    // Admin Only Routes
    
    { 
        path: '/rooms', 
        component: RoomsHome, 
        name: "rooms",
        beforeEnter : adminOnly,
 
    },
    { 
        path: '/rooms/add', 
        component: AddRoom, 
        name: "rooms_add",
        beforeEnter : adminOnly,
 
    },
    { 
        path: '/rooms/types', 
        component: RoomTypesHome, 
        name: "types",
        beforeEnter : adminOnly,
 
    },
    { 
        path: '/rooms/type/add', 
        component: AddRoomTypes, 
        name: "types_add",
        beforeEnter : adminOnly,
 
    },
    { 
        path: '/clients', 
        component: ClientsHome, 
        name: "clients",
        beforeEnter : adminOnly,
 
    },
    { 
        path: '/clients/add', 
        component: AddClient, 
        name: "clients_add",
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
        name: "users_add",
        beforeEnter : adminOnly,
    },
]

export default routes;