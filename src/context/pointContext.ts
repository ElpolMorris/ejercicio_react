import { createContext } from 'react'

const PointContext = createContext({
    coords: [],
    settingCoords: (product: any) => {}
})

export default PointContext