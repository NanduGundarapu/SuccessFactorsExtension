const cds = require('@sap/cds');

/**
* Implementation for Risk Management service defined in ./risk-service.cds
*/
module.exports = cds.service.impl(async function() {

    const wf = await cds.connect.to('ECWorkflow');
    const { MyPendingWorkflow } = wf.entities;

    this.on('READ', 'MyPendingWorkflow', async req => {

        const wfService = wf.tx(req);

        //console.log(req.query);
        if(req.query.SELECT.one){
            return await wfService.read(req.query);
            //alternative code
            //return wf.run(req.query);
        }
        
        // let topValue = req.query.SELECT.limit.rows.val ? req.query.SELECT.limit.rows.val : 10;
        return await wfService.read(MyPendingWorkflow)

        //alternative code
        //return await wf.run(SELECT(MyPendingWorkflow));
    });
    

});