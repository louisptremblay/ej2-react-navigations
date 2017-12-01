var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Toolbar } from '@syncfusion/ej2-navigations';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
/**
 * `ToolbarComponent` represents the react Toolbar Component.
 * ```ts
 * <ToolbarComponent overflowMode= 'Popup' ></ToolbarComponent
 * ```
 */
var ToolbarComponent = /** @class */ (function (_super) {
    __extends(ToolbarComponent, _super);
    function ToolbarComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = false;
        _this.directivekeys = { 'items': 'item' };
        _this.state = props;
        return _this;
    }
    ToolbarComponent.prototype.render = function () {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return React.createElement('div', this.getDefaultAttributes(), this.props.children);
        }
    };
    return ToolbarComponent;
}(Toolbar));
export { ToolbarComponent };
applyMixins(ToolbarComponent, [ComponentBase, React.PureComponent]);
