"use client";

import React, { useState, useEffect } from "react";
import "./TypewriterEffect.css"; // 引入我们稍后创建的CSS文件

const messages = ["你好！", "私のブログへようこそ！", "I will write some things here:)", "a@liux.dev"];

const TypewriterEffect = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [pause, setPause] = useState(false);

  // 打字效果
  useEffect(() => {
    if (index === messages.length) return;

    if (!reverse && subIndex === messages[index].length + 1) {
      setPause(true);
      setTimeout(() => {
        if (index === messages.length - 1) return; // 如果是最后一条消息，就不再执行删除动作
        setReverse(true);
        setPause(false);
      }, 2000);
      return;
    }

    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      pause ? 0 : reverse ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, pause]);

  return (
    <h1 className="typewriter text-3xl font-bold ">
      {`${messages[index].substring(0, subIndex)}${subIndex === messages[index].length ? " " : ""}`}
    </h1>
  );
};

export default TypewriterEffect;
