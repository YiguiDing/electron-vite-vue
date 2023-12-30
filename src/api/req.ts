import type { WindowWithMyApi } from "../../electron/service/AppService/preload";
declare const window: typeof globalThis & WindowWithMyApi;

export async function req(channel: string, ...args: any[]) {
  let { data, error } = await window.myApi.ipcRouter(channel, ...args);
  if (error) throw new Error(error);
  else return data;
}
