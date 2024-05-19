import React from "react";
import './style.scss';

interface Props {
  LinkVideo: string,
  nameVideo: string,
  id:string,
  darkStyle: boolean
}

function MyVideo(props: Props) {


  return (
    <div className={props.darkStyle ? "our-video videoDark" : "our-video"}>
      <div className="videoTitle">
        <div className="icon-left">
          <div className="svg-cont">
            <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1L1.68629 12.3137L13 23.6274" stroke="#333333" stroke-width="2"/>
            </svg>
          </div>
          <h1>{props.nameVideo}</h1>
        </div>
        <div className="svg-cont">
          <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 23.6274L12.3137 12.3137L0.999998 1.00002" stroke="#333333" stroke-width="2"/>
          </svg>
        </div>
      </div>
      <div className="bs-video">
        <div className="explainTask">
          <div className="task">
            <h2>Краткое описание задания</h2>
            <p>Есть над чем задуматься: сторонники тоталитаризма в науке набирают популярность среди определенных слоев населения, а значит, должны быть преданы социально-демократической анафеме. И нет сомнений, что действия представителей оппозиции превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Вот вам яркий пример современных тенденций — курс на социально-ориентированный национальный проект требует анализа поставленных обществом задач.</p>
          </div>
          <div className="teacher">
            <img src="https://s3-alpha-sig.figma.com/img/cf79/03f5/a759f17f087ae2dcb5f2210bfe2456fe?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lKnSyGFIlsfri8DCvWy51QmTsZJ8PZevQqg7gQboYsM9J2uYoZ0i6L7FFMUzYgpeVk~TWoQA6v8P3wanqpcla-T4AzU-KUWcWpljbJXp-JThDtlw1j08-NsdfaUfzcPKSs1HotpnrPIZxGGzwQw1bHA1yX8GX7AOQSYg8iyqBYJPRByO8JphAUrsHtgPnTQwVwnzMd5MTJBWDIqKLXgSRe94B3tMy88MMLx5xdvVbHIBSvd6Uo0C8WBnMP3zBPV7C9xpf6EMeUS9EH1Sw-8S8e7kijKnCk-TWl9lpbQEZZVcGoAePUhnv3DBqS4S3GeJ8hF5djJV-xP5zhWPR8Ljmg__" alt=""/>
            <div className="info">
              <h3>Имя Фамилия</h3>
              <span>Преподаватель чего</span>
            </div>
          </div>
        </div>

        {props.LinkVideo.includes("youtube.com") && (
          <iframe
          title="video"
          className="video-player"
          src={props.LinkVideo.replace("watch?v=", "embed/")}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          />
        )}
        {props.LinkVideo.includes("rutube.ru") && (
          <iframe
            title="video"
            className="video-player"
            src={props.LinkVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        {props.LinkVideo.includes("vk.com") && (
          <iframe
            title="video"
            className="video-player"
            src={props.LinkVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}

export default MyVideo;