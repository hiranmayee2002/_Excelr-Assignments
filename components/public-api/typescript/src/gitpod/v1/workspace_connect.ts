/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */

// @generated by protoc-gen-connect-es v1.1.2 with parameter "target=ts"
// @generated from file gitpod/v1/workspace.proto (package gitpod.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetWorkspaceRequest, GetWorkspaceResponse, ListWorkspacesRequest, ListWorkspacesResponse, WatchWorkspaceStatusRequest, WatchWorkspaceStatusResponse } from "./workspace_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service gitpod.v1.WorkspaceService
 */
export const WorkspaceService = {
  typeName: "gitpod.v1.WorkspaceService",
  methods: {
    /**
     * GetWorkspace returns a single workspace.
     *
     * +return NOT_FOUND User does not have access to a workspace with the given
     * ID +return NOT_FOUND Workspace does not exist
     *
     * @generated from rpc gitpod.v1.WorkspaceService.GetWorkspace
     */
    getWorkspace: {
      name: "GetWorkspace",
      I: GetWorkspaceRequest,
      O: GetWorkspaceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * WatchWorkspaceStatus watchs the workspaces status changes
     *
     * workspace_id +return NOT_FOUND Workspace does not exist
     *
     * @generated from rpc gitpod.v1.WorkspaceService.WatchWorkspaceStatus
     */
    watchWorkspaceStatus: {
      name: "WatchWorkspaceStatus",
      I: WatchWorkspaceStatusRequest,
      O: WatchWorkspaceStatusResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * ListWorkspaces returns a list of workspaces that match the query.
     *
     * @generated from rpc gitpod.v1.WorkspaceService.ListWorkspaces
     */
    listWorkspaces: {
      name: "ListWorkspaces",
      I: ListWorkspacesRequest,
      O: ListWorkspacesResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

