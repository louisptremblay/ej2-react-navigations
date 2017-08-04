import * as React from 'react';
import { Toolbar, ToolbarModel } from '@syncfusion/ej2-navigations';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * `ToolbarComponent` represents the react Toolbar Component.
 * ```ts
 * <ToolbarComponent overflowMode= 'Popup' ></ToolbarComponent
 * ```
 */
export class ToolbarComponent extends Toolbar {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<ToolbarModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public directivekeys: { [key: string]: Object } = {'items': 'item'};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<ToolbarModel & DefaultHtmlAttributes>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };

    constructor(props: any) {
        super(props);
        this.state = props;
    }

    public render(): any {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return React.createElement('div', this.getDefaultAttributes(), this.props.children);
        }

    }
}

applyMixins(ToolbarComponent, [ComponentBase, React.PureComponent]);
