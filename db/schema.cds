namespace succ.fact;

//using {managed} from '@sap/cds/common';
using {  ECWorkflow as wf } from '../srv/external/ECWorkflow';

entity MyPendingWorkflow as projection on wf.MyPendingWorkflow;
