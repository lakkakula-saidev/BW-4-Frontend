import React from "react";
import { IMsalContext } from "../MsalContext";
import { Subtract } from "../utils/utilities";
export declare type WithMsalProps = {
    msalContext: IMsalContext;
};
/**
 * Higher order component wraps provided component with msal by injecting msal context values into the component's props
 * @param Component
 */
export declare const withMsal: <P extends WithMsalProps>(Component: React.ComponentType<P>) => React.FunctionComponent<Pick<P, keyof P extends "msalContext" ? never : keyof P>>;
