export const schoolInfo = {
  name: 'Jagdale School',
  fullName: 'Jagdale School Indore',
  phones: ['9425318114', '9926500689'],
  whatsapp: '919425318114',
  whatsappMessage:
    'Hello Jagdale School, I would like to enquire about admission.',
  address:
    '8/1, Chhawni Road, Ushaganj, Murai Mohalla, Indore, Madhya Pradesh – 452001',
  instagramHandle: '@jagdaleschool1910',
  instagramUrl: 'https://instagram.com/jagdaleschool1910',
}

export const whatsappLink = `https://wa.me/${schoolInfo.whatsapp}?text=${encodeURIComponent(schoolInfo.whatsappMessage)}`
export const callLink = `tel:${schoolInfo.phones[0]}`
