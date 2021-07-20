import React, { PropsWithChildren } from "react";
import { AccountIdentifiers } from "../types/AccountIdentifiers";
export declare type UnauthenticatedTemplateProps = PropsWithChildren<AccountIdentifiers>;
/**
 * Renders child components if user is unauthenticated
 * @param props
 */
export declare function UnauthenticatedTemplate({ username, homeAccountId, localAccountId, children }: UnauthenticatedTemplateProps): React.ReactElement | null;
