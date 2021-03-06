export const contentTableConfig = {
  propList: [
    { prop: 'labelName', label: '标签名', minWidth: '100' },
    { prop: 'color', label: '标签颜色', minWidth: '120', slotName: 'handleColor' },
    { prop: 'total', label: '文章数量', minWidth: '200' },
    { label: '操作', minWidth: '50', slotName: 'handler' }
  ],
  isShow: false
}
