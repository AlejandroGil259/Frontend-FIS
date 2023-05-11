import { ItemsMenu } from '../interfaces';

export const ITEMS_DASHBOARD: ItemsMenu[] = [
  {
    id: 1,
    icon: 'pi pi-desktop',
    label: 'Equipos',
    routerLink: '/equipment/list-equipment',
    color: '#ff0f08',
  },
  {
    id: 2,
    icon: 'pi pi-users',
    label: 'Usuarios',
    routerLink: '/users',
    color: '#ae7efc',
  },
  {
    id: 3,
    icon: 'pi pi-comments',
    label: 'Préstamos',
    routerLink: '/loan',
    color: '#e88049',
  },
  {
    id: 4,
    icon: 'pi pi-building',
    label: 'Laboratorios',
    routerLink: '/laboratory',
    color: '#fc9f00',
  },
];
