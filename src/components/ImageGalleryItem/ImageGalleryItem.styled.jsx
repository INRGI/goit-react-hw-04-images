import styled from "@emotion/styled";


export const Li = styled.li`
    border-radius: 8px;
`;

export const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 10px;
  &:hover {
  transform: scale(1.05);
  cursor: zoom-in;
}  
`;