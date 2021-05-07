/* eslint-disable no-undef */

document.querySelector('#start_chat').addEventListener('click', (event) => {
  const socket = io()
  console.log('iniciou')
  const chat_help = document.getElementById('chat_help')
  chat_help.style.display = 'none'

  const chat_in_support = document.getElementById('chat_in_support')
  chat_in_support.style.display = 'block'

  const email = document.getElementById('email').value
  const text = document.getElementById('txt_help').value

  socket.on('connect', () => {
    // the object is inside because i won he after connect
    const params = {
      email, text
    }
    // emitindo
    socket.emit('first-connection-client', params, (call, erro) => {
      if (call)console.err('call:' + call)
      if (erro)console.log('erro:' + erro)
    })
    socket.on('clientListMessages', messages => {
      const TemplateClient = document.querySelector('#message-user-template').innerHTML
      const TemplateAdm = document.querySelector('#admin-template').innerHTML
      messages.forEach(message => {
        // client send
        if (message.admin_id === null) {
          const rendered = Mustache.render(TemplateClient, {
            message: message.text,
            email
          })
          document.querySelector('#messages').innerHTML += rendered
        } else {
          const rendered = Mustache.render(TemplateAdm, {
            message_admin: message.text
          })
          document.querySelector('#messages').innerHTML += rendered
        }
      })
    })// on
  })
})
