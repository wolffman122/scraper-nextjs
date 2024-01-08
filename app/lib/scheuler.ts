export function scraperSchedule()
{
    const schedule = require('node-schedule');
    const job = schedule.scheduleJob("*/5 * * * * *", () => {
        
        //console.log("Schedule running");
    });
}