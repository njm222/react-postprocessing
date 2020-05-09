import { forwardRef, useMemo, useImperativeHandle } from 'react'
import { useThree } from 'react-three-fiber'

export const wrapEffect = (effectImpl: any) => {
  return forwardRef((props: any, ref) => {
    const { camera } = useThree()

    const effect = useMemo(() => new effectImpl(camera, /* something here */ props), [props, camera])

    useImperativeHandle(
      ref,
      () => {
        return effect
      },
      [effect]
    )

    return null
  })
}