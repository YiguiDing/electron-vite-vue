import { contextBridge, IpcRenderer, ipcRenderer } from "electron";
import { useLoading } from "./hooks";

useLoading();

contextBridge.exposeInMainWorld("myApi", {
  ipcRouter: async (channel: string, ...args) => {
    return await ipcRenderer.invoke("IpcRouter", channel, ...args);
  },
});

export interface WindowWithMyApi {
  myApi: {
    ipcRouter(channel: string, ...args: any[]): Promise<any>;
  };
}
