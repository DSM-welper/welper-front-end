import "./Detail.scss";

const WelpareDetail = ({ data }) => {
  return (
    <div className="detail-box">
      <p>
        <span style={{ color: "#802457" }}>무엇</span>인가요?
      </p>
      <p className="title">{data.servNm}</p>
      <p className="content">
        {data.servDgst}
        <br></br>
        <br></br>
        {data.alwServCn}
      </p>
      <p>
        <span style={{ color: "#802457" }}>누가</span> 할 수 있나요?
      </p>
      <p className="title">{data.tgtrDtlCn}</p>
      <p className="content">{data.slctCritCn}</p>
      <p>
        <span style={{ color: "#802457" }}>어떻게</span> 하나요?
      </p>
      <p className="howContent">{data.applmetList[0].servSeDetailNm}</p>
      <img
        src={data.applmetList[0].servSeDetailLink}
        style={{ margin: "0 0 5rem 0" }}
      />
      <p>
        <span style={{ color: "#802457" }}>아직 궁금한 것</span>이 있어요
      </p>
      {data.inqplCtadrList ? (
        <>
          {" "}
          <p className="title">문의처</p>
          {data.inqplCtadrList.map((item) => {
            return (
              <p className="content">
                {item.servSeDetailNm} {item.servSeDetailLink}
              </p>
            );
          })}
        </>
      ) : (
        ""
      )}
      {data.inqplHmpgReldList ? (
        <>
          {" "}
          <p className="title">사이트</p>
          <p className="content">
            {data.inqplHmpgReldList[0].servSeDetailNm}{" "}
            {data.inqplHmpgReldList[0].servSeDetailLink}
          </p>
        </>
      ) : (
        ""
      )}
      {data.basfrmList ? (
        <>
          {" "}
          <p className="title">사이트</p>
          <p className="content">
            {data.basfrmList[0].servSeDetailNm}{" "}
            {data.basfrmList[0].servSeDetailLink}
          </p>
        </>
      ) : (
        ""
      )}
      {data.baslawList ? (
        <>
          {" "}
          <p className="title">근거 법령</p>
          {data.baslawList.map((item) => {
            return (
              <p className="content">
                {item.servSeDetailNm} :{" "}
                <a href={item.servSeDetailLink}>{item.servSeDetailLink}</a>
              </p>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default WelpareDetail;
