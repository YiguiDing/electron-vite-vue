import { req } from "./req";
import {
  DemoEcho_DTO,
  DemoEcho_VO,
  DemoAdd_DTO,
  DemoAdd_VO,
  DemoDiv_DTO,
  DemoDiv_VO,
  DemoMut_DTO,
  DemoMut_VO,
  DemoSub_DTO,
  DemoSub_VO,
} from "../../electron/controller/DemoController";

export async function demo_echo(...args: DemoEcho_DTO) {
  return (await req("/demo/echo", ...args)) as DemoEcho_VO;
}
export async function demo_add(...args: DemoAdd_DTO) {
  return (await req("/demo/add", ...args)) as DemoAdd_VO;
}
export async function demo_sub(...args: DemoSub_DTO) {
  return (await req("/demo/sub", ...args)) as DemoSub_VO;
}
export async function demo_mut(...args: DemoMut_DTO) {
  return (await req("/demo/mut", ...args)) as DemoMut_VO;
}
export async function demo_div(...args: DemoDiv_DTO) {
  return (await req("/demo/div", ...args)) as DemoDiv_VO;
}
