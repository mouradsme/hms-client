
let User       = JSON.parse(localStorage.getItem('User'))
const menuItems = [
    {
        name: 'dashboard',
        icon: ['fa', 'dashboard'],
        path: '/',
        show: User.role <= 1
    },
    {
        name: 'bookings',
        icon: ['fas', 'calendar-days'],
        path: '/bookings',
        show: User.role <= 1
    },
    {
        name: 'users',
        icon: ['fa', 'users'],
        path: '/users',
        show: User.role <= 0
    },
    {
        name: 'rooms',
        icon: ['fa', 'bed'],
        path: '/rooms',
        show: User.role <= 0
    },

]


export default menuItems