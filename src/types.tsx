import { IAdvantage } from "./components/AdvantageBox/index";
import { IContact } from "./components/ContactBox/index";
import { IService } from "./components/Service/index";

export interface ICompany {
  id: string;
  title: string;
  banner: string;
  bannerSize?: number;
  logo: string;
  images: string[];
  services: IService[];
  contacts: IContact[];
  blueBanner?: string;
  advantages?: IAdvantage[];
  vip?: boolean;
  timetableBanner?: string;
  customInstagram?: string;
}
