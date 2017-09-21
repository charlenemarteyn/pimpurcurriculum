window.addEventListener('load', function() {
            let tl = new TimelineMax();
    let fontSize = 115;
    if (!window.matchMedia("(min-width: 800px)").matches) {
fontSize = 50;
}

            tl.
            staggerFrom('.menu span', 0.5, {
                    y: -500,
                    ease: SteppedEase.config(10),
                 rotation: function() {
                        return Math.random() * 360
                    }
                },
                0.07).staggerTo(".menu span", 0.3, {
                  color:'#f75d45',
                 rotation: function() {
                        return Math.random() * 360
                    }
            }).staggerTo(".menu span", 0.5, {
                'color': "#60c4a5",
                'font-size': fontSize,
                ease: Expo.easeOut,
                rotation: "0deg"
            }).staggerTo(".menu span", 0.5, {
                'color':'#F7B645'
            }).staggerFrom("nav a", 0.5, {
                'opacity': "0",
                y:-20
            }).staggerTo("nav a", 2, {
                "color": "white",
                ease: Bounce.easeOut
            })
 });










