import React from "react";
import { MyVideo } from "../../../../Shared";

interface Props{
    id: string,
    LinkVideo: string,
    nameVideo: string,
    // darkStyle: boolean,
    theme?: "light" | "dark"
}

const VideoLesson = ({id, LinkVideo, nameVideo , theme}:Props) => {
    return(
        <>
            <MyVideo id={id} LinkVideo={LinkVideo} nameVideo={nameVideo} darkStyle= { theme === "dark"} />
        </>
    )
}
export default VideoLesson;