export type options = {
    data: any;
    perm: any;
    fileType: string;
};
export interface Button {
    id: string;
    layout?: any;
    hallmark?: string;
    type?: string;
    icon?: string;
    code?: string;
    value?: any;
    text?: string;
    hide?: boolean;
    disabled?: boolean;
    hideIcon?: boolean;
    hideText?: boolean;
    children?: Array<Button>;
    staging?: string;
    viewType?: string;
    onClick?: (ev: Event, prop: Record<string, any>) => void;
    [key: string]: any;
}
