import React from "react";
import "./App.scss";
import { MyVideo } from "./Shared";

function App() {
  return (
    <div className="app">
      {/* <MyVideo LinkVideo='https://www.youtube.com/watch?v=oWxL4UQvH-U'/> */}
      <MyVideo LinkVideo='https://vk.com/video_ext.php?oid=-220754053&id=456240680&hd=2'/>
      {/* <MyVideo LinkVideo='https://vk.com/video_ext.php?oid=-219407444&id=456239041&hd=2'/> */}
      {/* <MyVideo LinkVideo='https://rutube.ru/video/f661e71761b22ff66aaa1255c567337e/?r=wd'/> */}
    </div>
  );
}
export default App;
