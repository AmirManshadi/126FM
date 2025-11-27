import { isFunction } from "@/utils";
import { type Action, ActionType, type State } from "./initial";

const reducer = (state: State, action: Action): State => {
  if (!action) return state;

  switch (action.type) {
    case ActionType.SET_CHANNELS: {
      const payload = isFunction(action.payload)
        ? action.payload(state)
        : action.payload;
      return { ...state, channels: payload.channels };
    }
    case ActionType.SET_CURRENT_CHANNEL: {
      const payload = isFunction(action.payload)
        ? action.payload(state)
        : action.payload;
      return { ...state, currentChannelId: payload.currentChannelId };
    }
    default:
      return state;
  }
};

export { reducer };
