


$(document).ready(function() {
    /*  $(".bttn").click(function() {
             $("div:has(b)").slideToggle();
             
             
       $("div:nth-child(2)").html('<div id="test3"><b>try 4</b></div>');
                
            });
            
          $(".col2").hover(function () {
              $(".col2 p").fadeTo("2500","0.4");
          });
              
              $(".col2").hover(function () {
                  $(".col2 p").fadeIn("2500");
              
              
              
          });
            
            $(".btn-primary").css("border", "1px solid blueviolet");
            */

/*
    
        })*/
        
        $(".formSearch").on('submit', (e) => {

            const textSearch = $('#searchMovie').val();
           
            e.preventDefault();
            getMovie(textSearch);
        });
        
        
        
        function getMovie(textSearch) {
            
            fetch(`http://api.tvmaze.com/search/shows?q=${textSearch}`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    
                    const movies = data;
                    
                    let output = ``;
                        
                    $.each(movies,(index,cur) => {
                        const movie = cur.show;
                    ;
                        
                        
                     let movies = movie.image  !== null?movie.image.original:movie.image = null; 
                        
                        
                        output += `<div class="col-xs-6 >"
                                                        </div>
                                            <div class="text-center well">
                                 
                             <img src="${movies}" >
                                    
                                            <h5>${movie.name}</h5>
                                            <a onclick="movieSelected(${movie.imdbID})" href="movie.html" class="btn btn-danger active">watch more details</a>
                           </div>                 </div>
                                            `;
                        
                        
                        
                    })
                    $('#movies').html(output);
                    
                })
                .catch(error => {
                        console.log(error);
                });
                
                
             function movieSelected(id){
                    sessionStorage.setItem('movieId', id);
                    
                    
                };
                
               
               function getMovie() {
                   const movieID = sessionStorage.getItem('movieID');
                   console.log(movieID);
                   
               }
                
                
            
            
        }









});











