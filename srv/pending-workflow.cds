using { succ.fact as succfact } from '../db/schema';

@path: 'successFactors'
service WorkflowService {

  @readonly
  entity MyPendingWorkflow 
  @(restrict : [
            {
                grant : [ 'READ' ],
                to : [ 'Viewer' ]
            }
        ])
  as projection on succfact.MyPendingWorkflow;
}