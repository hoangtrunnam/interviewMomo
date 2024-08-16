import { atom } from 'recoil'
import { TypeKeyAtom } from 'src/constants/defines'
import { InetworkInspector } from 'src/types/network'

export const networkInspectorState = atom<InetworkInspector>({
  key: TypeKeyAtom.networkInspectorState,
  default: {
    isEnableNetworkInspector: false
  }
})
