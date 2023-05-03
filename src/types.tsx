import { IAdvantage } from "./components/AdvantageBox/index";
import { IContact } from "./components/ContactBox/index";
import { IService } from "./components/Service/index";


export interface ICompany {
    id: string;
    title: string;
    banner: string;
    logo: string;
    images: string[];
    services: IService[];
    contacts: IContact[];
    blueBanner?: string;
    advantages?: IAdvantage[];
    vip?: boolean;
    twenty4seven?: boolean;
}