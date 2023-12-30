import { Service } from "../../utils";
import { ElectronApp } from "./app";

@Service()
export class AppService {
  constructor(private app: ElectronApp) {}
  async start() {
    await this.app.init();
  }
  hide() {
    this.app.win.hide();
  }
  minimize() {
    this.app.win.minimize();
  }
  maximizeToggle() {
    if (!this.app.win.isMaximized()) {
      this.app.win.maximize();
    } else {
      this.app.win.unmaximize();
    }
  }
}
