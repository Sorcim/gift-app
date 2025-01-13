/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const ListReservationsController = () =>
  import('#admin/reservations/controllers/list_reservations_controller')
const DeleteReservationsController = () =>
  import('#reservations/controllers/delete_reservations_controller')
const AdminDeleteReservationsController = () =>
  import('#admin/reservations/controllers/delete_reservations_controller')
const StoreReservationsController = () =>
  import('../app/reservations/controllers/store_reservations_controller.js')
const ShowGiftController = () => import('#gifts/controllers/show_gift_controller')
const ListAdminGiftController = () => import('#admin/gifts/controllers/list_gifts_controller')
const StoreGiftsController = () => import('#admin/gifts/controllers/store_gifts_controller')
const UpdateGiftsController = () => import('#admin/gifts/controllers/update_gifts_controller')
const DeleteGiftsController = () => import('#admin/gifts/controllers/delete_gifts_controller')
const DeleteBeneficiariesController = () =>
  import('#admin/beneficiaries/controllers/delete_beneficiaries_controller')
const UpdateBeneficiariesController = () =>
  import('#admin/beneficiaries/controllers/update_beneficiaries_controller')
const LogoutController = () => import('#auth/controllers/logout_controller')
const StoreBeneficiariesController = () =>
  import('#admin/beneficiaries/controllers/store_beneficiaries_controller')

const ListBeneficiariesController = () =>
  import('#admin/beneficiaries/controllers/list_beneficiaries_controller')
const DashboardController = () => import('#admin/dashboard/controllers/dashboard_controller')
const LoginController = () => import('#auth/controllers/login_controller')
const ListGiftController = () => import('#gifts/controllers/list_gift_controller')

//App
router.get('/', [ListGiftController, 'render']).as('home')
router.get('gift/:id', [ShowGiftController, 'render']).as('gift.show')
router.post('reservations/:id', [StoreReservationsController, 'execute'])
router.get('reservations/:id', [DeleteReservationsController, 'render']).as('reservation.delete')
router.delete('reservations/:id', [DeleteReservationsController, 'execute'])

//Auth
router.get('/login', [LoginController, 'render']).as('login')
router.post('/login', [LoginController, 'execute'])
router.get('/logout', [LogoutController, 'execute']).as('logout')

//Admin
router
  .group(() => {
    router.get('/', [DashboardController, 'render']).as('admin.dashboard')
    router.get('beneficiaries', [ListBeneficiariesController, 'render']).as('admin.beneficiaries')
    router.post('beneficiaries', [StoreBeneficiariesController, 'execute'])
    router.post('beneficiaries/:id', [UpdateBeneficiariesController, 'execute'])
    router.delete('beneficiaries/:id', [DeleteBeneficiariesController, 'execute'])
    router.get('gifts', [ListAdminGiftController, 'render']).as('admin.gifts')
    router.post('gifts', [StoreGiftsController, 'execute'])
    router.post('gifts/:id', [UpdateGiftsController, 'execute'])
    router.delete('gifts/:id', [DeleteGiftsController, 'execute'])
    router.get('reservations', [ListReservationsController, 'render']).as('admin.reservations')
    router.delete('reservations/:id', [AdminDeleteReservationsController, 'execute'])
  })
  .prefix('admin')
  .middleware([middleware.auth()])
