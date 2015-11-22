/**
 * Created by bryangill on 10/24/15.
 */
import template from './summary.html!text';
import SummaryController from './app.summary.controller';

function summaryDirective() {
    return {
        //restrict: "E",
        //scope: true,
        template: template,
        //bindToController: true,
        controllerAs: "summaryCntl",
        controller: SummaryController
    };
}

export default summaryDirective;