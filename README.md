# Background 

In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset Links to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

![Intro](https://github.com/RRahmiev/belly-button-challenge/blob/main/Images/bacteria.jpg?raw=true "Bacteria")

# Instructions

Complete the following steps:

* Use the D3 library to read in samples.json from the URL 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'.

* Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  * Use sample_values as the values for the bar chart.

  * Use otu_ids as the labels for the bar chart.

  * Use otu_labels as the hovertext for the chart.
  
![Chart1](https://github.com/RRahmiev/belly-button-challenge/blob/main/Images/hw01.png?raw=true "Bar Chart")

* Create a bubble chart that displays each sample.

  * Use otu_ids for the x values.

  * Use sample_values for the y values.

  * Use sample_values for the marker size.

  * Use otu_ids for the marker colors.

  * Use otu_labels for the text values.
  
![Chart2](https://github.com/RRahmiev/belly-button-challenge/blob/main/Images/bubble_chart.png?raw=true "Bubble Chart")

* Display the sample metadata, i.e., an individual's demographic information.

* Display each key-value pair from the metadata JSON object somewhere on the page.

![Chart3](https://github.com/RRahmiev/belly-button-challenge/blob/main/Images/hw03.png?raw=true "Demographic Info")

* Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.

* Deploy your app to a free static page hosting service, such as GitHub Pages.

# Dashboard Link

Please use the below link to access my Belly Button Biodiversity Dashboard:

* https://rrahmiev.github.io/belly-button-challenge/
