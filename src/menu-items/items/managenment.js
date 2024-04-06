// assets
import {
  UserOutlined,
  ShopOutlined as MarketOutlined,
  LayoutOutlined as SectorOutlined,
  ShoppingCartOutlined as ProductServiceOutlined
} from '@ant-design/icons';

// icons
const icons = { UserOutlined, MarketOutlined, SectorOutlined, ProductServiceOutlined };

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const managenment = {
  id: 'managenment',
  title: 'managenment',
  type: 'group',
  children: [
    {
      id: 'manager-users',
      title: 'Users',
      type: 'item',
      url: '/users',
      icon: icons.UserOutlined
    },
    {
      id: 'manager-markets',
      title: 'Markets',
      type: 'item',
      url: '/markets',
      icon: icons.MarketOutlined
    },
    {
      id: 'manager-sectors',
      title: 'Sectors',
      type: 'item',
      url: '/sectors',
      icon: icons.SectorOutlined
    },
    {
      id: 'manager-products',
      title: 'Products & Services',
      type: 'item',
      url: '/productsservices',
      icon: icons.ProductServiceOutlined
    }
  ]
};

export default managenment;
