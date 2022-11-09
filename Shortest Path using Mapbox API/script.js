mapboxgl.accessToken = 'pk.eyJ1IjoiaGF5YXRraGFuIiwiYSI6ImNsM2tqcHZ6MDA3ajczZHJzZnQzYWw0aXkifQ.YVDkom0HWpG3oxnxl1WeVw'

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true})

function successLocation(position)
{
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation()
{
    setupMap([72.98835579487907, 33.644983630097926])
}

function setupMap(center)
{
    var map = new mapboxgl.Map({
        container: 'map' ,
        style: 'mapbox://styles/mapbox/satellite-streets-v11',
        /* style: 'mapbox://styles/mapbox/navigation-day-v1',
        style: 'mapbox://styles/mapbox/outdoors-v11',
        style:'mapbox://styles/mapbox/light-v10',
        style:'mapbox://styles/mapbox/dark-v10',
        style:'mapbox://styles/mapbox/satellite-v9',
        style:'mapbox://styles/mapbox/navigation-night-v1'
    
         */
    
        // style: 'mapbox://styles/mapbox/streets-v11',
        /*style: 'mapbox://styles/mapbox/satellite-streets-v11',*/
        
        center: center,
        zoom: 14
        })

        
        const nav = new mapboxgl.NavigationControl()
        map.addControl(nav)
      
        var directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken
        })
      
        map.addControl(directions, "top-left")

}
