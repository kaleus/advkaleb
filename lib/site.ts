export const site = {
  name: 'Kaleb dos Santos Ramos',
  role: 'Advogado',
  oab: 'OAB/DF 74.275',
  email: 'advkaleb@gmail.com',
  phoneDisplay: '+55 (61) 98336-5619',
  whatsappNumber: '5561983365619',
  whatsappMessage:
    'Olá, encontrei seu site e gostaria de tirar uma dúvida jurídica.',
  cities: [
    'Luziânia/GO',
    'Valparaíso de Goiás',
    'Cidade Ocidental',
    'Novo Gama',
    'Cristalina',
  ],
} as const

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`
