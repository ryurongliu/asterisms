
//get project & sequence 
var project = app.project; 
var projectItem = project.rootItem;
var activeSequence = project.activeSequence;

//go to timestamps 
var curr_time = new Time();
var one_frame = new Time();
one_frame.setSecondsAsFraction(1, 24); 
var frames_per_sec = 24; 
var num_frames = 0;
var output_filename = "";
for(var i = 0; i<1; i++){
    num_frames = i*15*frames_per_sec;
    curr_time.setSecondsAsFraction(num_frames, 24);
    $.writeln(curr_time.getFormatted(one_frame, 100));
    output_filename = "moon_frame_" + i.toString() + ".png"; 

    project.exportCurrentFrameAsPNG();

}



// if (make_frames){
//     var num_ts = 24*3; 
//     var frames_per_t = 2; 
//     var one_frame = new Time();
//     one_frame.setSecondsAsFraction(1, 24);  
//     var curr_time = new Time(); 
//     var num_frames = 0; 
//     var opacity = 0; 
    
//     var keyframe;
//     var num_frames;
//     var opval; 
//     var audioval; 
//     //make keyframe
//     for (var i = 0; i < keyframes.length; i++){
//         keyframe = keyframes[i];
//         num_frames = keyframe[0];
        
//         if (!half){
//             if(keyframe[1] != 0){
//                 opval = keyframe[1] * 100; 
//                 audioval = keyframe[1] *0.178; 
//             }
//             else{
//                 opval = 10;
//                 audioval = 0.10*0.178;
//             }
//         }
        
//         else{
//             if(keyframe[1] != 0){
//                 opval = keyframe[1] * 50; 
//                 audioval = keyframe[1] *0.089; 
//             }

//             else{
//                 opval = 10;
//                 audioval = 0.10*0.178;
//             }
//         }
    
//         curr_time.setSecondsAsFraction(num_frames, 24); 
    
//         vidOpacity.addKey(curr_time.seconds);
//         vidOpacity.setValueAtKey(curr_time.seconds, opval); 
//         audLevel.addKey(curr_time.seconds); 
//         audLevel.setValueAtKey(curr_time.seconds, audioval); 
    
//         $.writeln(keyframe); 
//     }
// }

// $.writeln(keyframes.length.toString())
// $.writeln(vidClip.name);
// $.writeln(audClip.name); 
