jQuery.Controller.extend('MedList.Controllers.MainController',
/* @Static */
{
    onDocument: true
},
/* @Prototype */
{
    "{window} load": function() {
	SMART.ready(function(){
	    SMART.CAPABILITIES_get(function(){
		$("#UserDisplay").html("");
		$("#MedList").med_list_med_list();
	    })
	});
    }
});