import { defineComponent, toRefs, toRaw } from 'vue'
import { useSetupMapComponent } from '../utils/useMapComponents'
import { rectangleEvents } from '../utils/events'

export default defineComponent({
  props: {
    options: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup (props, { emit }) {
    const { options, index } = toRefs(props)
    const rectangle = useSetupMapComponent('Rectangle', rectangleEvents, toRaw(options.value), emit, index)

    return { rectangle }
  },
  render: () => null
})
