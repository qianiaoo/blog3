import React from "react";

const ProfileCard = () => {
  return (
    <figure
      className="w-full h-96　flex flex-col justify-between  px-4 pb-4 rounded-b-3xl border-x-2 border-b-2 border-[#000]
    hover:scale-105 transition-transform duration-200   shadow-soul-blue"
    >
      <img className="w-24 rounded-b-3xl mx-auto " src="/hp/me.png" alt="my image" />
      <div className="pt-6 text-center space-y-4">
        <div className="text-lg font-medium">
          広島市立大学情報科学部4年
          <br />
          知能工学科
          <br />
          データ工学研究室
          <br />
          カメラ
          <br />
          登山
          <br />
          旅行
          <br />
          1998/12/10
          <br />
          就活中
        </div>
        <figcaption className="font-medium">
          <div className="text-[#184995]">LIU XIANG</div>
          <div className="text-slate-700">Student</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default ProfileCard;
