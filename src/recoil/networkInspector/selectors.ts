import { selector } from 'recoil'
import { TypeKeyAtom } from 'src/constants/defines'
import { networkInspectorState } from './atoms'

export const getNetworkInpectorState = selector({
  key: TypeKeyAtom.getNetworkInpectorState,
  get: ({ get }) => {
    const isEnableNetworkInspector = get(networkInspectorState)
    return isEnableNetworkInspector
  }
})
