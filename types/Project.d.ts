export interface Prop {
    Id: string;
    Name: string;
}

export interface State {
    Id: string;
    Name: string;
    DefaultValue: any;
}

export interface Handler {
    Id: string;
    Name: string;
    Params: Array<string> | null;
    Modified: boolean;
    IsCallback: boolean;
    CallbackDependecies: Array<Prop | State> | null;
}

export interface Effect {
    Id: string;
    Triggers: Array<Handler> | null;
    Dependencies: Array<Prop | State> | null;
}

export interface ComponentPageBase {
    Id: string;
    Name: string;
    Props: Array<Prop>;
    States: Array<State>;
    Effects: Array<Effect>;
    Handlers: Array<Handler>;
    HTML: HTMLElement | null;
}

export interface Component extends ComponentPageBase {

}

export interface Page extends ComponentPageBase {
    RouterLink: string;
}

export interface ServiceHandler extends Handler {
    TargetURI: string;
}

export interface Service {
    Handlers: Array<ServiceHandler>;
}

export interface Util {
    Handlers: Array<Handler>;
}

export interface User {
    UserID: string;
    Name: string;
    Surname: string;
    Email: string;
    Projects: Array<Project>;
}

export interface PackageJsonData {
    Name: string;
    Description: string;
    Author: string;
    Dependencies: Array<string>;
}

export interface Project {
    ProjectID: string;
    CommonName: string;
    Components: Array<Component>;
    Pages: Array<Page>;
    Services: Array<Service>;
    Utils: Array<Util>;
    PackageJsonData: PackageJsonData;
    CreatedAt: Date;
    Owner: User;
    Participants: Array<User>;
}
