import { IconHome, IconPlus } from '@tabler/icons-react'

export const navbarConfig = [
  {
    mainLink: { label: 'Tổng quan', path: '' },
    icon: <IconHome size={20} color="silver" />,
    subLink: [{ label: 'Thống kê phân tích', path: '/statistic' }]
  },
  {
    mainLink: { label: 'Tạo lập', path: '' },
    icon: <IconPlus size={20} color="silver" />,
    subLink: [
      { label: 'Dự án', path: '/projects' },
      { label: 'Khách hàng', path: '/clients' }
    ]
  }
]