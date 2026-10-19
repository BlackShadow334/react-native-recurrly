const activity = require("../assets/icons/activity.png");
const add = require("../assets/icons/add.png");
const adobe = require("../assets/icons/adobe.png");
const back = require("../assets/icons/back.png");
const canva = require("../assets/icons/canva.png");
const claude = require("../assets/icons/claude.png");
const dropbox = require("../assets/icons/dropbox.png");
const figma = require("../assets/icons/figma.png");
const github = require("../assets/icons/github.png");
const home = require("../assets/icons/home.png");
const logo = require("../assets/icons/logo.png");
const medium = require("../assets/icons/medium.png");
const menu = require("../assets/icons/menu.png");
const netfix = require("../assets/icons/netflix.png");
const notion = require("../assets/icons/notion.png");
const openai = require("../assets/icons/openai.png");
const plus = require("../assets/icons/plus.png");
const settings = require("../assets/icons/settings.png");
const spotify = require("../assets/icons/spotify.png");
const wallet = require("../assets/icons/wallet.png");

export const icons = {
  activity,
  add,
  adobe,
  back,
  canva,
  claude,
  dropbox,
  figma,
  github,
  home,
  logo,
  medium,
  menu,
  netfix,
  notion,
  openai,
  plus,
  settings,
  spotify,
  wallet,
} as const;

export type IconName = keyof typeof icons;
