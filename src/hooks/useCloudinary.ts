interface UseCloudinaryProps {
  height: number
  width: number
  publicId: string
  type: 'facebook' | 'twitter_name' | 'upload'
}

const baseURL = 'https://res.cloudinary.com/extend-pua/image'


export const useCloudinary = ({ height, width, publicId, type }: UseCloudinaryProps) => {
  const transformations = [
    'c_fill',
    'dpr_auto',
    'f_auto',
    'g_face',
    `h_${height}`,
    `w_${width}`
  ].join(',')

  const src = [baseURL, type, transformations, publicId].filter(Boolean).join('/')

  return { src }
}
