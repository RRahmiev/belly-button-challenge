//Use the D3 library: URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json

const DataSamples = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//CREATING DROPDOWN
function DropDownFunction() {

    // DROPDOWN MENU
    var dropdownmenu = d3.select("#selDataset");
    
    d3.json(DataSamples).then((data) => {

        var Data_IDs = data.names;
    
        Data_IDs.forEach((id) => {
            var option = dropdownmenu.append("option");
            option.text(id);
        });

        var IDfordisplay = dropdownmenu.property("value");
        console.log("IDfordisplay:", IDfordisplay);

               DemoInfo(IDfordisplay);
    });    
}


// CHARTS-UPDATE
function DemoInfo(subject) {

    // DEMOGRAPHIC INFO-PANEL
    var Demographic = d3.select("#sample-metadata");

        Demographic.html("");

    d3.json(DataSamples).then((data) => {
       
        var metaData = data.metadata.filter(sample => sample.id == subject)[0];
        console.log("metaData:", metaData);
        
        Object.entries(metaData).forEach(([key, value]) => {
          Demographic.append("h6").text(`${key}: ${value}`);
        });
        
        var samplesData = data.samples.filter(sample => sample.id == subject)[0];
        
        Graphs(subject, samplesData);
        
        var wfreq = metaData.wfreq;


    });
}


// GRAPHS
function Graphs(subject, samples) {

    console.log("SAMPLES-INFO:", samples);
    console.log("ID-SUBJECT:", subject);

    
    var otuIDs = samples.otu_ids;
    var otuLabels = samples.otu_labels;
    var sampleValues = samples.sample_values;

    
    // BAR CHART
    
    var topOtuIDs = otuIDs.slice(0,10).reverse().map(otuID => "OTU " + otuID);
    var topOtuLabels = otuLabels.slice(0,10).reverse();
    var topsampleValues = sampleValues.slice(0,10).reverse();

    
    let traceBar = {
        x: topsampleValues,
        y: topOtuIDs,
        text: topOtuLabels,
        type: "bar",
        orientation: "h"
    }
    
    let dataBar = [traceBar];

    
    let layoutBar = {
        title: `<b>TOP 10 BACTERIAS <br> IN SUBJECT NO: ${subject}</b>`,
        xaxis: {title: `VALUES`},
    
    }
   
    Plotly.newPlot("bar", dataBar, layoutBar);

    // BUBBLE CHART //
    
   
    let traceBubble = {
        x: otuIDs,
        y: sampleValues,
        text: otuLabels,
        mode: "markers",
        marker: {
            size: sampleValues,
            color: otuIDs,
            colorscale: "Earth"
        }
    }
    
    let dataBubble = [traceBubble];

    
    let layoutBubble = {
        title: `<b>ALL BACTERIA IN SUBJECT NO: ${subject}</b>`,
        xaxis: {title: `OTU ID`},
        yaxis: {title: `VALUES`}
    }
    
    Plotly.newPlot("bubble", dataBubble, layoutBubble);
    
}

// DROPDOWN CHANGE
function optionChanged(nextID) {
    console.log("newID:", nextID)
    DemoInfo(nextID);
}

DropDownFunction();