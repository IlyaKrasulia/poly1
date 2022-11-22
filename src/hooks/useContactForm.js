import { useState } from 'react'
import { postData } from '../services/sendDataForm'

export const useContactForm = () => {
    const [formData, setFormData] = useState({ 'user_name': '', 'user_phone': '' })

    const sendingName = formData.user_name;
    const sendingPhone = formData.user_phone;

  const uriRequest = `https://api.telegram.org/bot5630884459:AAHo5HRZuncxpF30B6T4FcHPJ1pHsLyl-g8/sendMessage?chat_id=669528599&text=Им'я: ${sendingName}%0AТелефон: ${sendingPhone}`
  const [isSending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)


  const onSubmissingForm = function (e) {
    e.preventDefault()

    setSending(true)

    postData(uriRequest, JSON.stringify(formData))
      .then(res => {
        setSuccess(true)
        console.log(res)
      })
      .catch(e => {
        setError(true)
        console.error(e)
      })
      .finally(() => {
        setFormData({ 'user_name': '', 'user_phone': '' })
        setSending(false)

        setTimeout(() => {
          setSuccess(false)
          setError(false)
        }, 5000)
      })
  }

  const onChangeName = (e) => setFormData({ ...formData, 'user_name': e.target.value })
  const onChangePhone = (e) => setFormData({ ...formData, 'user_phone': e.target.value })

  return {
    name: formData.user_name,
    phone: formData.user_phone,
    onSubmissingForm,
    onChangeName,
    onChangePhone,
    isSending,
    success,
    error
  }
}