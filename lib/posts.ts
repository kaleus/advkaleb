// Posts do blog.
//
// Para publicar um post novo: copie um dos objetos abaixo, cole no final
// do array (antes do "]"), e troque os campos. Não precisa mexer em
// nenhum outro arquivo — a página /blog/ e a página do post são geradas
// automaticamente a partir desta lista.
//
// Campos:
// - slug: parte da URL do post (sem espaços/acentos), ex: 'meu-post-novo'
//   -> vai ficar acessível em /blog/meu-post-novo/
// - title: título do post
// - excerpt: resumo curto (aparece na lista do blog)
// - date: data de publicação no formato 'AAAA-MM-DD'
// - category: etiqueta curta (ex: 'Previdenciário', 'Família', 'Cível')
// - cover: caminho da imagem de capa (coloque o arquivo em public/images/blog/)
// - body: parágrafos do texto. Cada item do array é um parágrafo.

export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  cover: string
  body: string[]
}

export const posts: Post[] = [
  {
    slug: 'inss-negou-meu-beneficio-o-que-fazer',
    title: 'O INSS negou meu benefício. E agora, o que fazer?',
    excerpt:
      'Entenda os passos possíveis após um indeferimento do INSS e em quais situações vale a pena buscar orientação jurídica.',
    date: '2026-09-10',
    category: 'Previdenciário',
    cover: '/images/blog/inss-negado.jpg',
    body: [
      'Receber uma resposta negativa do INSS é frustrante, mas não significa necessariamente que o direito ao benefício não existe. Em muitos casos, o indeferimento decorre de documentação incompleta, de erro na análise do tempo de contribuição ou de divergência sobre a incapacidade para o trabalho.',
      'O primeiro passo é ler com atenção a carta de indeferimento e entender qual foi o motivo apontado pelo INSS. Esse documento costuma trazer o código e a justificativa da negativa, o que ajuda a identificar se é possível corrigir a pendência administrativamente ou se será necessário contestar a decisão.',
      'Existe um prazo para apresentar recurso administrativo diretamente ao INSS. Passado esse prazo, ou quando o recurso também é negado, a via judicial pode ser avaliada, sempre considerando as provas e documentos disponíveis em cada caso.',
      'Cada situação previdenciária tem particularidades — tempo de contribuição, tipo de benefício, histórico de perícias — que influenciam o caminho mais adequado. Por isso, antes de decidir os próximos passos, vale conversar com um advogado para entender as opções específicas do seu caso.',
    ],
  },
  {
    slug: 'como-funciona-partilha-de-bens-no-divorcio',
    title: 'Como funciona a partilha de bens no divórcio',
    excerpt:
      'Um panorama geral sobre regimes de bens e como costuma funcionar a divisão do patrimônio em um divórcio.',
    date: '2026-08-22',
    category: 'Família',
    cover: '/images/blog/partilha-bens-divorcio.jpg',
    body: [
      'A forma como os bens de um casal são divididos em um divórcio depende, em primeiro lugar, do regime de bens adotado no casamento — comunhão parcial, comunhão universal, separação total ou participação final nos aquestos. Cada um desses regimes tem regras próprias sobre o que entra ou não na partilha.',
      'Na comunhão parcial de bens, regra geral quando não há pacto antenupcial, os bens adquiridos antes do casamento normalmente permanecem com quem os adquiriu, enquanto os bens adquiridos durante a união costumam ser divididos entre as partes.',
      'Quando há consenso entre o casal sobre a divisão, o divórcio pode ser feito de forma mais simples, inclusive em cartório, desde que não haja filhos menores ou incapazes envolvidos. Havendo divergência sobre os bens, guarda ou pensão, o caminho costuma ser o judicial.',
      'Questões como imóveis financiados, bens em nome de apenas um dos cônjuges e patrimônio adquirido antes da união costumam gerar dúvidas específicas. Cada caso tem seus detalhes, por isso uma conversa direta sobre a sua situação ajuda a esclarecer o que de fato se aplica.',
    ],
  },
]

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}
