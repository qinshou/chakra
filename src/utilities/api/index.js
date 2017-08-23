import { dispatchToBridge } from './context'
import {
  updateRecordingState,
  updateBreakpointState
} from '../../actions/bridge'

export default {
  updateRecording: ({ recording }) => dispatchToBridge(updateRecordingState(recording)),
  updateBreakpoint: ({ breakpoint }) => dispatchToBridge(updateBreakpointState(breakpoint))
}
