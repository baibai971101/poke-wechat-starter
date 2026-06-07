const app = getApp()

Page({
  data: {
    messages: [
      { role: 'assistant', content: 'Hello! How can I help you today?' }
    ],
    inputValue: ''
  },

  onInput(e) {
    this.setData({ inputValue: e.detail.value })
  },

  async sendMessage() {
    const content = this.data.inputValue.trim()
    if (!content) return

    const newMessages = [...this.data.messages, { role: 'user', content }]
    this.setData({
      messages: newMessages,
      inputValue: ''
    })

    try {
      const res = await new Promise((resolve, reject) => {
        wx.request({
          url: `${app.globalData.baseUrl}/chat`,
          method: 'POST',
          data: { message: content },
          success: resolve,
          fail: reject
        })
      })

      if (res.statusCode === 200) {
        this.setData({
          messages: [...this.data.messages, { role: 'assistant', content: res.data.reply }]
        })
      }
    } catch (err) {
      console.error('Failed to send message:', err)
      wx.showToast({ title: 'Network Error', icon: 'none' })
    }
  }
})