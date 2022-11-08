import { useRouter } from "next/router";
import { DimWrapper } from "../../../Commons/Modal/CustomLayoutModal/CustomLayoutModal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import * as S from "./PassTicketModal.styles";
import { useRecoilState } from "recoil";
import { PassTickModalVisible } from "../../../../Commons/Store/Modal/ModalVisibleState";
import styled from "@emotion/styled";

const DeepDimWrapper = styled(DimWrapper)`
  background-color: #000000e5;
`;

export default function PassTickModal() {
  const [visible, setVisible] = useRecoilState(PassTickModalVisible);

  const onClickClose = () => {
    setVisible(false);
  };

  return (
    <>
      <DeepDimWrapper>
        <S.CloseIconWrapper onClick={onClickClose}>
          <CloseRoundedIcon />
        </S.CloseIconWrapper>
        <S.Wrapper>
          <S.DogImageWrapper src={"/passticket.png"} />
        </S.Wrapper>
      </DeepDimWrapper>
    </>
  );
}
