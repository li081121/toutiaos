import { 
  Icon,
  Breadcrumb,
  Container,
  Header,
  Aside,
  Main,
  Message,
  MessageBox,
  Notification,
  Dialog,
  Button,
  Loading,
  Form,
  FormItem,
  Input,
  Menu,
  MenuItem,
  Popover,
  Select,
  Option,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Row,
  Col,
  DatePicker,
  Pagination,
  InputNumber,
  Submenu,
  Radio,
  RadioGroup,
  RadioButton,
  BreadcrumbItem,
  Cascader,
  CascaderPanel,
  Tag,
  Card,
  TimeSelect,
  Upload,
  Progress,
  MenuItemGroup,
  Autocomplete,
  Collapse,
  CollapseItem,
  CheckboxGroup,
  Checkbox,
  Tooltip,
  Popconfirm,
  Drawer,
} from 'element-ui'


export default (app) => {
  app.prototype.$ELEMENT = { size: 'small', zIndex: 2000 }
  app.prototype.$loading = Loading.service
  app.prototype.$msgbox = MessageBox
  app.prototype.$alert = MessageBox.alert
  app.prototype.$confirm = MessageBox.confirm
  app.prototype.$prompt = MessageBox.prompt
  app.prototype.$notify = Notification
  app.prototype.$message = Message
  app.use(Icon)
  app.use(Breadcrumb)
  app.use(Container)
  app.use(Header)
  app.use(Aside)
  app.use(Main)
  app.use(Dialog)
  app.use(Button)
  app.use(Form)
  app.use(Loading)
  app.use(FormItem)
  app.use(Input)
  app.use(Menu)
  app.use(MenuItem)
  app.use(Popover)
  app.use(Select)
  app.use(Option)
  app.use(Table)
  app.use(TableColumn)
  app.use(Tabs)
  app.use(TabPane)
  app.use(Row)
  app.use(Col)
  app.use(DatePicker)
  app.use(Pagination)
  app.use(InputNumber)
  app.use(Submenu)
  app.use(RadioGroup)
  app.use(Radio)
  app.use(RadioButton)
  app.use(BreadcrumbItem)
  app.use(Cascader)
  app.use(CascaderPanel)
  app.use(Tag)
  app.use(Card)
  app.use(TimeSelect)
  app.use(Upload)
  app.use(Progress)
  app.use(MenuItemGroup)
  app.use(Autocomplete)
  app.use(Collapse)
  app.use(CollapseItem)
  app.use(CheckboxGroup)
  app.use(Checkbox)
  app.use(Tooltip)
  app.use(Popconfirm)
  app.use(Drawer)
}