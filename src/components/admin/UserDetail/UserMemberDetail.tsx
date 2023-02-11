import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import UserInfoData from "./UserInfoData";
import { UserInfo } from "../../../model/interface/userList";

const UserMemberDetail = () => {
  const { id } = useParams();
  const [userInfo, UpdateInfo] = useState<UserInfo[]>([]);

  useEffect(() => {
    axios.get(`/userMemberDetail/${id}`).then((response) => {
      UpdateInfo(response.data);
    });
  }, []);

  return <UserInfoData userInfo={userInfo} />;
};

export default UserMemberDetail;
