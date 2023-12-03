import {
  CELEBRATIONS,
  CHUYEN_XE_NHAN_SAC,
  DoubleArrowIcon,
  EDUTEK,
  HIEP_HUONG,
  JANET_STUDIO,
  KGN_COFFEE,
  MARKEE_RESTAURANT,
  ONE_COFFEE,
  ONE_MATCHA,
  ONE_PROJECT,
  VINPEARL_LUXURY,
  VINPEARL_VOUCHER
} from '@/assets'
import Button from '@/components/Button'
import { translation } from '@/configs/i18n/i18n'
import { useTranslation } from 'react-i18next'
import HomeHeader from '../HomeHeader'
import HomeLayout from '../HomeLayout'
import HomeProjectContainer from '../HomeProjectContainer'
import classes from './ProjectSection.module.scss'

const ProjectSection = () => {
  const { t } = useTranslation()
  return (
    <HomeLayout
      header={
        <HomeHeader
          title={t(translation.global.projects)}
          rightSection={
            <Button icon={<DoubleArrowIcon />} variant="outline">
              {t(translation.global.viewAll)}
            </Button>
          }
        />
      }
    >
      <div className={classes.project}>
        <HomeProjectContainer
          mainImage={{
            path: ONE_PROJECT,
            title: 'ONE Drink & Food - Website Thương Mại F&B',
            description: 'Client: ONE Drink & Food',
            link: 'http://www.onedrinkandfood.com',
            numberOfImages: 3
          }}
          subImage={[
            {
              path: ONE_COFFEE,
              title: 'Cà Phê Đá - Concept Chụp Hình',
              description: 'Client: ONE Drink & Food',
              link: 'http://www.onedrinkandfood.com',
              numberOfImages: 20
            },
            {
              path: ONE_MATCHA,
              title: 'Mát Dạ Cùng Matcha - Poster Trà Xanh',
              description: 'Client: ONE Drink & Food',
              numberOfImages: 7
            }
          ]}
        />

        <HomeProjectContainer
          subImage={[
            {
              path: EDUTEK,
              title: 'Edutek - Brand Identity',
              description: 'Client: Edutek',
              numberOfImages: 15
            },
            {
              path: KGN_COFFEE,
              title: 'Kong Coffee - Brand Identity',
              description: 'Client: Kong Coffee',
              numberOfImages: 9
            }
          ]}
          mainImage={{
            path: JANET_STUDIO,
            title: 'Janet Studio - Brand Identity',
            description: 'Client: Janet Studio',
            type: 'video',
            numberOfImages: 7
          }}
          direction="right"
        />

        <HomeProjectContainer
          subImage={[
            {
              path: MARKEE_RESTAURANT,
              title: 'Menu Nhà Hàng Markee',
              description: 'Client: Markee',
              numberOfImages: 10
            },
            {
              path: HIEP_HUONG,
              title: 'Mua Gạch Nhận Vàng - Poster Chương Trình',
              description: 'Client: Hiệp Hương',
              numberOfImages: 5
            }
          ]}
          mainImage={{
            path: CHUYEN_XE_NHAN_SAC,
            title: 'Chuyến Xe Nhan Sắc - Chương Trình Họp Báo',
            description: 'Client: Cao Ky Entertainment',
            type: 'video'
          }}
        />

        <HomeProjectContainer
          subImage={[
            {
              path: VINPEARL_VOUCHER,
              title: 'Voucher Ẩm Thực & Đồ Uống',
              description: 'Client: Vinpearl Landmark 81',
              numberOfImages: 5
            },
            {
              path: CELEBRATIONS,
              title: 'Catalog Vinpearl Trong Giáng Sinh & Năm Mới 2022',
              description: 'Client: Vinpearl Landmark 81',
              numberOfImages: 5
            }
          ]}
          mainImage={{
            path: VINPEARL_LUXURY,
            title: 'Mãnh Long Cát Vượng - Chương Trình Bánh Trung Thu',
            description: 'Client: Vinpearl Landmark 81',
            numberOfImages: 5
          }}
          direction="right"
        />
      </div>
    </HomeLayout>
  )
}

export default ProjectSection
