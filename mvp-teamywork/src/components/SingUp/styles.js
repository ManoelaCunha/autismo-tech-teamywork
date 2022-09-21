import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

export const BoxForm = styled.div`
  width: 633px;
  height: 520px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
  gap: 60px;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  background: #1d1d1d;
  border-radius: 15px;

  animation-name: ${breatheAnimation};
  animation-duration: 2s;
`;

export const BoxHeader = styled.div`
  width: 450px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 30px;
  line-height: 74px;
  letter-spacing: 0.88px;
  color: #dcdcdc;
  text-align: left;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 74px;
  letter-spacing: 0.88px;
  color: #dcdcdc;
  text-align: left;
  margin: 30px 20px;
`;

export const BoxInput = styled.div`
  margin: 20px;
  border-bottom: 2px solid #dcdcdc;
`;

export const Input = styled.input`
  width: 450px;
  height: 40px;
  border: none;
  color: #f4f4f4;
  background: #1d1d1d;
`;

export const Button = styled.div`
  width: 90px;
  padding: 10px;
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  border-radius: 5px;
  color: #f4f4f4;
  background: #8e1faa;
  margin: 30px 20px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 80px;
  height: 40px;
`;
