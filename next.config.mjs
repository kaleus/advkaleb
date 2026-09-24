/** @type {import('next').NextConfig} */

// Para publicar em GitHub Pages num repositório de projeto
// (ex.: https://usuario.github.io/nome-do-repo), defina a variável
// de ambiente NEXT_PUBLIC_BASE_PATH="/nome-do-repo" no build.
// Para domínio próprio ou usuario.github.io, deixe em branco.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
