import { useParams } from "react-router-dom"

const MusicDataId = (idData) => {
    return idData = useParams()
}

export const handler = (idData) => {
    return MusicDataId(idData)
}
