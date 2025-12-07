
//get project & sequence 
var project = app.project; 
var projectItem = project.rootItem;
var activeSequence = project.activeSequence;

//get video tracks and audio tracks 
var videoTracks = activeSequence.videoTracks;
var audioTracks = activeSequence.audioTracks; 

//get specific tracks in question
var track_ind = 1; 
var make_frames = true;

var keyframes =[];

var half = false; 




var vidTrack = videoTracks[track_ind]; 
var audTrack = audioTracks[track_ind]; 
//get clip on those tracks (should only be one clip on each track)
var vidClip = vidTrack.clips[0];
var audClip = audTrack.clips[0]; 

$.writeln(vidClip.name);
$.writeln(audClip.name); 

//get components of each clip
var vidComponents = vidClip.components;
var audComponents = audClip.components; 

// $.writeln(vidComponents[0].displayName);
// $.writeln(audComponents[0].displayName); 

//get opacity and level of vid/au
var vidOpacity = vidComponents[0].properties[0]; 
var audLevel = audComponents[0].properties[1]; 

$.writeln(vidOpacity.displayName);
$.writeln(audLevel.displayName);

//turn keyframing on
vidOpacity.setTimeVarying(true);
audLevel.setTimeVarying(true);



if (make_frames){
    var num_ts = 24*3; 
    var frames_per_t = 2; 
    var one_frame = new Time();
    one_frame.setSecondsAsFraction(1, 24);  
    var curr_time = new Time(); 
    var num_frames = 0; 
    var opacity = 0; 
    
    var keyframe;
    var num_frames;
    var opval; 
    var audioval; 
    //make keyframe
    for (var i = 0; i < keyframes.length; i++){
        keyframe = keyframes[i];
        num_frames = keyframe[0];
        
        if (!half){
            if(keyframe[1] != 0){
                opval = keyframe[1] * 100; 
                audioval = keyframe[1] *0.178; 
            }
            else{
                opval = 10;
                audioval = 0.10*0.178;
            }
        }
        
        else{
            if(keyframe[1] != 0){
                opval = keyframe[1] * 50; 
                audioval = keyframe[1] *0.089; 
            }

            else{
                opval = 50;
                audioval = 0.50*0.178;
            }
        }
    
        curr_time.setSecondsAsFraction(num_frames, 24); 
    
        vidOpacity.addKey(curr_time.seconds);
        vidOpacity.setValueAtKey(curr_time.seconds, opval); 
        audLevel.addKey(curr_time.seconds); 
        audLevel.setValueAtKey(curr_time.seconds, audioval); 
    
        $.writeln(keyframe); 
    }
}

$.writeln(keyframes.length.toString())
$.writeln(vidClip.name);
$.writeln(audClip.name); 
