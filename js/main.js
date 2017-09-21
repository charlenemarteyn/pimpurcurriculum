window.addEventListener('load', function() {
            let tl = new TimelineMax();
            tl.
            staggerFrom('.menu span', 0.5, {
                    y: -500,
                    ease: SteppedEase.config(10),
                    'font-size': 1,
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
                'font-size': 115,
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
