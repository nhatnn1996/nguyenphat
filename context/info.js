import { getInfoSetting } from '@/geters/home';
import React, { useContext, useEffect, useState } from 'react';
import { apollo } from '../api-client';
const InfoContext = React.createContext(null);
const getPosts = async () => {
  const result = await apollo.query({ query: getInfoSetting });
  const infoSettings = result.data.user;
  return infoSettings;
};

const InfoPrvider = ({ children, infoSetting }) => {
  const [info, setInfo] = useState(infoSetting || {});
  useEffect(() => {
    if (!info?.phone) {
      getPosts().then((data) => {
        setInfo(data.setting_info);
      });
    }
  }, []);
  const sliders = info?.banner?.split(',') || [];
  const slider_format = sliders.map((element) => element.trim());
  return <InfoContext.Provider value={{ infoSetting: info, sliders: slider_format }}>{children}</InfoContext.Provider>;
};

export default InfoPrvider;
export const useInfo = () => {
  const info = useContext(InfoContext);
  return info;
};
