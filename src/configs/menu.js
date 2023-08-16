
let User       = JSON.parse(localStorage.getItem('User'))
// The following array contains the menu items that appear on the top bat of the app,
// Each item has four options that need to be filled,
// 1. name: this has to be present in the locale files as a "key", 
//          whose value will be returned in the menu (although, for now, only icons are shown)
// 2. icon: the name of the icon for the menu item (Following the VueJS FA integration)
// 3. path: the route (destination) of the menu item
// 4. show: (A boolean / expression that returns a boolean), whether the item is shown or not depends on its value.
//           In this instance, we limit showing the items to authenticated users via their role ( User.role <= 1 )
//           The items that are shown only to admins ( User.role <= 0 )
const menuItems = [
    {
        name: 'dashboard',
        icon: ['fa', 'dashboard'],
        path: '/',
        show: User?.role <= 1
    },
    {
        name: 'bookings',
        icon: ['fas', 'calendar-days'],
        path: '/bookings',
        show: User?.role <= 1
    },
    {
        name: 'users',
        icon: ['fa', 'users'],
        path: '/users',
        show: User?.role <= 0
    },
    {
        name: 'clients',
        icon: ['fa', 'users'],
        path: '/clients',
        show: User?.role <= 0
    },
    {
        name: 'rooms',
        icon: ['fa', 'bed'],
        path: '/rooms',
        show: User?.role <= 0
    },
    {
        name: 'types',
        icon: ['fa', 'dashboard'],
        path: '/rooms/types',
        show: User?.role <= 1
    },

]


export default menuItems