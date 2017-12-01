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
import { ComplexBase } from '@syncfusion/ej2-react-base';
/**
 * `TabItemDirective` directive represent a column of the react Tab.
 * It must be contained in a Tab component(`Tab`).
 * ```ts
 * <TabComponent
 *  <TabItemsDirective>
 *   <TabItemDirective header= { 'Header 1' } content= { 'Content 1' } />
 *   <TabItemDirective header= { 'Header 2' } content= { 'Content 2' } />
 *  <TabItemsDirective>
 * </TabComponent>
 * ```
 */
var TabItemDirective = /** @class */ (function (_super) {
    __extends(TabItemDirective, _super);
    function TabItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabItemDirective.moduleName = 'tabItem';
    return TabItemDirective;
}(ComplexBase));
export { TabItemDirective };
var TabItemsDirective = /** @class */ (function (_super) {
    __extends(TabItemsDirective, _super);
    function TabItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabItemsDirective.propertyName = 'items';
    TabItemsDirective.moduleName = 'tabItems';
    return TabItemsDirective;
}(ComplexBase));
export { TabItemsDirective };
