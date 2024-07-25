fetch('https://api.pexels.com/v1/search?query=hamsters', {
    headers: {
      Authorization: "eHOVxlqKjj0SslycsG9VRKow49Mg7BFCMOwxuHxmpQx2RFYChl7GUI0d"
    }
  })
  .then((response) => {
    console.log(response)
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('errore')
    }
  })
  .then((data) => {
    console.log('DATA', data)
  })
  .catch((err) => {
    console.log(err)
  })
